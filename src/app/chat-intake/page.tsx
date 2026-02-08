'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, ArrowRight, FileText } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ExtractedData {
  problem: { value: string; confidence: number };
  icp: { value: string; confidence: number };
  solution: { value: string; confidence: number };
  market: { value: string; confidence: number };
  competition: { value: string; confidence: number };
  stage: { value: string; confidence: number };
  pricing: { value: string; confidence: number };
  team: { value: string; confidence: number };
}

const INITIAL_EXTRACTED_DATA: ExtractedData = {
  problem: { value: '', confidence: 0 },
  icp: { value: '', confidence: 0 },
  solution: { value: '', confidence: 0 },
  market: { value: '', confidence: 0 },
  competition: { value: '', confidence: 0 },
  stage: { value: '', confidence: 0 },
  pricing: { value: '', confidence: 0 },
  team: { value: '', confidence: 0 },
};

const AI_GREETING = "Tell me about your startup idea. What problem are you solving?";

export default function ChatIntakePage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: AI_GREETING,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [extractedData, setExtractedData] = useState<ExtractedData>(INITIAL_EXTRACTED_DATA);
  const [overallConfidence, setOverallConfidence] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Calculate overall confidence
  useEffect(() => {
    const filledFields = Object.values(extractedData).filter(f => f.confidence > 0);
    if (filledFields.length === 0) {
      setOverallConfidence(0);
      return;
    }
    const avgConfidence = filledFields.reduce((sum, f) => sum + f.confidence, 0) / filledFields.length;
    setOverallConfidence(Math.round(avgConfidence));
  }, [extractedData]);

  const extractDataFromMessage = (userMessage: string, conversationHistory: Message[]) => {
    // Simple keyword-based extraction (in production, use LLM API)
    const newData = { ...extractedData };

    // Problem extraction
    if (userMessage.toLowerCase().includes('waste') || 
        userMessage.toLowerCase().includes('problem') ||
        userMessage.toLowerCase().includes('pain')) {
      const problemMatch = userMessage.match(/(?:waste|spend|lose).{0,100}(?:hour|time|day)/i);
      if (problemMatch) {
        newData.problem = { value: problemMatch[0], confidence: 85 };
      }
    }

    // ICP extraction
    if (userMessage.toLowerCase().includes('founder') || 
        userMessage.toLowerCase().includes('startup') ||
        userMessage.toLowerCase().includes('entrepreneur')) {
      if (userMessage.toLowerCase().includes('solo')) {
        newData.icp = { value: 'Solo founders', confidence: 92 };
      } else {
        newData.icp = { value: 'Startup founders', confidence: 78 };
      }
    }

    // Solution extraction
    if (userMessage.toLowerCase().includes('ai') || userMessage.toLowerCase().includes('tool')) {
      const solutionMatch = userMessage.match(/(?:ai|tool|platform|app|software).{0,80}/i);
      if (solutionMatch) {
        newData.solution = { value: solutionMatch[0], confidence: 78 };
      }
    }

    // Stage extraction
    if (userMessage.toLowerCase().includes('idea') || userMessage.toLowerCase().includes('planning')) {
      newData.stage = { value: 'Idea stage', confidence: 88 };
    } else if (userMessage.toLowerCase().includes('revenue') || userMessage.toLowerCase().includes('customer')) {
      newData.stage = { value: 'Pre-revenue', confidence: 82 };
    }

    // Pricing extraction
    const priceMatch = userMessage.match(/\$\d+/g);
    if (priceMatch) {
      newData.pricing = { value: priceMatch.join(', '), confidence: 75 };
    }

    // Team extraction
    if (userMessage.toLowerCase().includes('solo') || userMessage.toLowerCase().includes('myself')) {
      newData.team = { value: 'Solo founder', confidence: 95 };
    } else if (userMessage.toLowerCase().includes('co-founder') || userMessage.toLowerCase().includes('team')) {
      newData.team = { value: 'Team of 2-3', confidence: 85 };
    }

    setExtractedData(newData);
  };

  const generateFollowUpQuestion = () => {
    // Check what's missing
    const missingFields: string[] = [];
    if (extractedData.problem.confidence < 60) missingFields.push('problem');
    if (extractedData.icp.confidence < 60) missingFields.push('target customer');
    if (extractedData.solution.confidence < 60) missingFields.push('solution');
    if (extractedData.competition.confidence < 60) missingFields.push('competition');
    if (extractedData.pricing.confidence < 60) missingFields.push('pricing');

    if (missingFields.length === 0) {
      return "Got it! I have enough to create your startup profile. Ready to proceed?";
    }

    // Generate follow-up based on first missing field
    const followUps: Record<string, string> = {
      problem: "That's interesting! Can you tell me more about the specific problem you're solving? What pain does your customer experience today?",
      'target customer': "Who experiences this problem the most? Help me understand your ideal customer profile.",
      solution: "What does your solution look like? How will it solve this problem?",
      competition: "How do people solve this problem today? Who are your main competitors?",
      pricing: "Have you thought about pricing? What would customers pay for this solution?",
    };

    return followUps[missingFields[0]] || "Tell me more about your startup.";
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Extract data from user message
    extractDataFromMessage(input, messages);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateFollowUpQuestion(),
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getMissingFields = () => {
    const missing: string[] = [];
    if (extractedData.competition.confidence < 60) missing.push('competition');
    if (extractedData.pricing.confidence < 60) missing.push('pricing model');
    if (extractedData.market.confidence < 60) missing.push('market size');
    return missing;
  };

  const canValidate = overallConfidence >= 60;

  const handleValidate = () => {
    // Save extracted data to localStorage
    localStorage.setItem('startup-profile', JSON.stringify({
      problem: extractedData.problem.value,
      solution: extractedData.solution.value,
      icp: extractedData.icp.value,
      stage: extractedData.stage.value,
      pricing: extractedData.pricing.value,
      team: extractedData.team.value,
      competition: extractedData.competition.value,
      market: extractedData.market.value,
    }));

    // Navigate to startup profile
    if (onNavigate) {
      onNavigate('startup-profile');
    }
  };

  const handleSkipToForm = () => {
    if (onNavigate) {
      onNavigate('startup-profile');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] flex">
      {/* Left Panel: Extracted Context */}
      <div className="w-80 bg-[#F5F3EF] border-r border-[#E8E6E1] p-6 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 text-[#0E3E1B]">Detected So Far</h2>
        
        <div className="space-y-4">
          {extractedData.problem.confidence > 0 && (
            <div>
              <div className="text-xs text-[#6b9d89] uppercase mb-1">Problem</div>
              <div className="text-sm text-gray-800">{extractedData.problem.value}</div>
              <div className="text-xs text-gray-500 mt-1">{extractedData.problem.confidence}% confidence</div>
            </div>
          )}

          {extractedData.icp.confidence > 0 && (
            <div>
              <div className="text-xs text-[#6b9d89] uppercase mb-1">ICP</div>
              <div className="text-sm text-gray-800">{extractedData.icp.value}</div>
              <div className="text-xs text-gray-500 mt-1">{extractedData.icp.confidence}% confidence</div>
            </div>
          )}

          {extractedData.solution.confidence > 0 && (
            <div>
              <div className="text-xs text-[#6b9d89] uppercase mb-1">Solution</div>
              <div className="text-sm text-gray-800">{extractedData.solution.value}</div>
              <div className="text-xs text-gray-500 mt-1">{extractedData.solution.confidence}% confidence</div>
            </div>
          )}

          {extractedData.stage.confidence > 0 && (
            <div>
              <div className="text-xs text-[#6b9d89] uppercase mb-1">Stage</div>
              <div className="text-sm text-gray-800">{extractedData.stage.value}</div>
              <div className="text-xs text-gray-500 mt-1">{extractedData.stage.confidence}% confidence</div>
            </div>
          )}

          {getMissingFields().length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-300">
              <div className="text-xs text-[#6b9d89] uppercase mb-2">Missing</div>
              <ul className="text-sm text-gray-600 space-y-1">
                {getMissingFields().map(field => (
                  <li key={field}>• {field}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Center Panel: Chat Interface */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6">
          <h1 className="text-2xl font-semibold text-[#0E3E1B]">Validate Your Startup Idea</h1>
          <p className="text-gray-600 mt-1">The more context you share, the better your validation report.</p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-2xl px-4 py-3 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-[#0d5f4e] text-white'
                    : 'bg-white border border-gray-200 text-gray-800'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-[#6b9d89]" />
                    <span className="text-xs font-medium text-[#6b9d89]">AI Coach</span>
                  </div>
                )}
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-2xl px-4 py-3 rounded-lg bg-white border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#6b9d89]" />
                  <span className="text-xs font-medium text-[#6b9d89]">AI Coach</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 p-6">
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your response..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              disabled={!input.trim()}
              className="px-6 py-3 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0E3E1B] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send
            </button>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={handleSkipToForm}
              className="text-sm text-[#6b9d89] hover:text-[#0d5f4e] flex items-center gap-1"
            >
              <FileText className="w-4 h-4" />
              Skip chat, use form instead
            </button>

            <button
              onClick={handleValidate}
              disabled={!canValidate}
              className={`px-6 py-2 rounded-lg flex items-center gap-2 ${
                canValidate
                  ? 'bg-[#0d5f4e] text-white hover:bg-[#0E3E1B]'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Continue to Profile
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel: Extraction Status */}
      <div className="w-80 bg-[#F5F3EF] border-l border-[#E8E6E1] p-6 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4 text-[#0E3E1B]">Extraction Status</h2>

        <div className="space-y-3 mb-6">
          {Object.entries(extractedData).map(([key, data]) => (
            <div key={key}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600 capitalize">{key}:</span>
                <span className="text-gray-500">{data.confidence}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#0d5f4e] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${data.confidence}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-4 mb-6">
          <div className="text-sm font-medium text-[#0E3E1B] mb-2">Overall Confidence</div>
          <div className="text-3xl font-bold text-[#0d5f4e]">{overallConfidence}%</div>
          {!canValidate && (
            <div className="text-xs text-gray-600 mt-2">
              Need {60 - overallConfidence}% more to validate
            </div>
          )}
        </div>

        {getMissingFields().length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="text-sm font-medium text-amber-900 mb-2">Suggested Questions</div>
            <ul className="text-xs text-amber-800 space-y-2">
              {getMissingFields().includes('competition') && (
                <li>• "Who are the main competitors?"</li>
              )}
              {getMissingFields().includes('pricing model') && (
                <li>• "What's your pricing model?"</li>
              )}
              {getMissingFields().includes('market size') && (
                <li>• "How big is the market opportunity?"</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}