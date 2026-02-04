import { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare,
  X,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  TrendingUp,
  BarChart3,
  FileText,
  Target,
  Users,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowRight,
  ThumbsUp,
  ThumbsDown,
  Edit3,
  Send,
  Lightbulb,
  Zap,
  Shield,
  Brain
} from 'lucide-react';

// AI Agent Types
type AgentType = 'strategist' | 'analyst' | 'pitch-agent' | 'writer' | 'fundraising' | 'planner' | 'reviewer';

interface AIAgent {
  id: AgentType;
  name: string;
  role: string;
  avatar: string;
  color: string;
  icon: React.ReactNode;
}

const AI_AGENTS: Record<AgentType, AIAgent> = {
  strategist: {
    id: 'strategist',
    name: 'Atlas',
    role: 'Startup Strategist',
    avatar: '🎯',
    color: '#0D5F4E',
    icon: <Target className="w-3.5 h-3.5" />
  },
  analyst: {
    id: 'analyst',
    name: 'Sage',
    role: 'Market Analyst',
    avatar: '📊',
    color: '#2563EB',
    icon: <BarChart3 className="w-3.5 h-3.5" />
  },
  'pitch-agent': {
    id: 'pitch-agent',
    name: 'Pitch',
    role: 'Pitch Deck Agent',
    avatar: '🎤',
    color: '#7C3AED',
    icon: <FileText className="w-3.5 h-3.5" />
  },
  writer: {
    id: 'writer',
    name: 'Quill',
    role: 'Document Writer',
    avatar: '✍️',
    color: '#DC2626',
    icon: <Edit3 className="w-3.5 h-3.5" />
  },
  fundraising: {
    id: 'fundraising',
    name: 'Capital',
    role: 'Fundraising Agent',
    avatar: '💰',
    color: '#059669',
    icon: <TrendingUp className="w-3.5 h-3.5" />
  },
  planner: {
    id: 'planner',
    name: 'Roadmap',
    role: 'Task Planner',
    avatar: '🗺️',
    color: '#EA580C',
    icon: <Clock className="w-3.5 h-3.5" />
  },
  reviewer: {
    id: 'reviewer',
    name: 'Guardian',
    role: 'Risk Reviewer',
    avatar: '🛡️',
    color: '#BE123C',
    icon: <Shield className="w-3.5 h-3.5" />
  }
};

// Message Types
type MessageType = 'guidance' | 'question' | 'suggestion' | 'warning' | 'action-preview' | 'user' | 'success';

interface ActionCard {
  id: string;
  title: string;
  description: string;
  target: string; // Where it applies
  impact: 'low' | 'medium' | 'high';
  preview?: string;
  status?: 'pending' | 'applied' | 'dismissed';
}

interface ChatMessage {
  id: string;
  type: MessageType;
  content: string;
  agent?: AgentType;
  timestamp: Date;
  actionCard?: ActionCard;
  metadata?: {
    context?: string;
    confidence?: number;
    stage?: string;
    gap?: string;
  };
}

type ChatbotState = 'collapsed' | 'peek' | 'expanded';

interface AIChatbotProps {
  currentContext?: 'onboarding' | 'lean-canvas' | 'pitch-deck' | 'dashboard' | 'crm';
  startupStage?: 'idea' | 'validation' | 'mvp' | 'growth';
  onActionApply?: (actionId: string) => void;
}

export function AIChatbot({ 
  currentContext = 'dashboard',
  startupStage = 'validation',
  onActionApply 
}: AIChatbotProps) {
  const [state, setState] = useState<ChatbotState>('collapsed');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with context-aware welcome message
  useEffect(() => {
    if (messages.length === 0) {
      addWelcomeMessage();
    }
  }, [currentContext]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addWelcomeMessage = () => {
    const welcomeMessages: Record<string, ChatMessage> = {
      onboarding: {
        id: '1',
        type: 'guidance',
        agent: 'strategist',
        content: "Welcome! I'm Atlas, your startup strategist. Let's build a strong foundation together. I'll guide you through capturing your startup's vision, validating your market, and creating your first strategic documents.",
        timestamp: new Date(),
        metadata: { context: currentContext }
      },
      'lean-canvas': {
        id: '1',
        type: 'guidance',
        agent: 'strategist',
        content: "I'm reviewing your Lean Canvas. I can help strengthen your value proposition, identify gaps in your business model, and suggest improvements based on your industry.",
        timestamp: new Date(),
        metadata: { context: currentContext }
      },
      'pitch-deck': {
        id: '1',
        type: 'guidance',
        agent: 'pitch-agent',
        content: "I'm Pitch, your deck specialist. I'll help you create an investor-ready presentation that tells your story clearly and confidently. Ready to build a deck that opens doors?",
        timestamp: new Date(),
        metadata: { context: currentContext }
      },
      dashboard: {
        id: '1',
        type: 'guidance',
        agent: 'strategist',
        content: "Hey there! I'm Atlas, your AI startup advisor. I'm here to help you navigate every stage of building your company. What would you like to work on today?",
        timestamp: new Date(),
        metadata: { context: currentContext }
      }
    };

    setMessages([welcomeMessages[currentContext] || welcomeMessages.dashboard]);
  };

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      handleAIResponse(content);
      setIsTyping(false);
    }, 1500);
  };

  const handleAIResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    // Context-aware responses
    if (input.includes('next') || input.includes('what should i')) {
      const response: ChatMessage = {
        id: Date.now().toString(),
        type: 'suggestion',
        agent: 'strategist',
        content: getNextStepsResponse(),
        timestamp: new Date(),
        actionCard: {
          id: 'action-1',
          title: 'Complete Your Problem Statement',
          description: 'Your Lean Canvas is missing a clear problem definition. This is critical for investor conversations.',
          target: 'Lean Canvas → Problem Block',
          impact: 'high',
          preview: 'I can help you articulate the top 3 problems your customers face...',
          status: 'pending'
        }
      };
      setMessages(prev => [...prev, response]);
    } else if (input.includes('pitch') || input.includes('deck')) {
      const response: ChatMessage = {
        id: Date.now().toString(),
        type: 'guidance',
        agent: 'pitch-agent',
        content: "Let's build your pitch deck. I'll guide you through 10-12 slides that tell your startup's story. We'll start with understanding your business, then I'll generate investor-ready content.",
        timestamp: new Date(),
        actionCard: {
          id: 'action-2',
          title: 'Start Pitch Deck Creation',
          description: 'Launch the AI-powered pitch deck wizard to create your investor presentation.',
          target: 'Pitch Deck Wizard',
          impact: 'high',
          status: 'pending'
        }
      };
      setMessages(prev => [...prev, response]);
    } else if (input.includes('ready') || input.includes('readiness')) {
      const response: ChatMessage = {
        id: Date.now().toString(),
        type: 'warning',
        agent: 'reviewer',
        content: "I've analyzed your startup readiness. You're at **65% investment-ready**. Here are the critical gaps I found:",
        timestamp: new Date(),
        metadata: {
          confidence: 65,
          gap: '3 critical items missing'
        }
      };
      setMessages(prev => [...prev, response]);
    } else {
      // Default helpful response
      const response: ChatMessage = {
        id: Date.now().toString(),
        type: 'guidance',
        agent: 'strategist',
        content: "I can help you with that. Based on where you are right now, I recommend focusing on strengthening your value proposition and validating your market assumptions. Would you like me to guide you through this?",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, response]);
    }
  };

  const getNextStepsResponse = () => {
    const responses: Record<string, string> = {
      idea: "Great! You're in the idea stage. Here's what matters most right now:\n\n1. **Validate your problem** - Talk to 20+ potential customers\n2. **Define your solution** - Create a simple MVP concept\n3. **Map your business model** - Complete your Lean Canvas\n\nLet me help you with step 1.",
      validation: "You're in validation mode. Focus on:\n\n1. **Customer interviews** - Gather feedback on your MVP\n2. **Refine positioning** - Clarify your unique value\n3. **Build traction metrics** - Track early indicators\n\nI can help you structure these conversations.",
      mvp: "Your MVP is taking shape! Next priorities:\n\n1. **User feedback loops** - Systematic collection\n2. **Key metrics** - Define and track\n3. **Pitch deck** - Prepare for early fundraising\n\nWant me to start on your pitch deck?",
      growth: "You're in growth mode! Key focus areas:\n\n1. **Scale strategies** - Sustainable growth channels\n2. **Fundraising prep** - Series A materials\n3. **Team planning** - Next key hires\n\nLet's tackle your Series A deck."
    };

    return responses[startupStage];
  };

  const handleActionApply = (actionId: string) => {
    setMessages(prev => 
      prev.map(msg => {
        if (msg.actionCard?.id === actionId) {
          return {
            ...msg,
            actionCard: { ...msg.actionCard, status: 'applied' }
          };
        }
        return msg;
      })
    );

    // Success message
    const successMsg: ChatMessage = {
      id: Date.now().toString(),
      type: 'success',
      agent: 'strategist',
      content: "✓ Applied! I've updated your canvas. Take a look and let me know if you'd like me to refine it further.",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, successMsg]);

    onActionApply?.(actionId);
  };

  const handleActionDismiss = (actionId: string) => {
    setMessages(prev => 
      prev.map(msg => {
        if (msg.actionCard?.id === actionId) {
          return {
            ...msg,
            actionCard: { ...msg.actionCard, status: 'dismissed' }
          };
        }
        return msg;
      })
    );
  };

  const handleQuickAction = (action: string) => {
    handleSendMessage(action);
  };

  const getMessageIcon = (type: MessageType) => {
    switch (type) {
      case 'guidance': return <Lightbulb className="w-4 h-4" />;
      case 'question': return <MessageSquare className="w-4 h-4" />;
      case 'suggestion': return <Sparkles className="w-4 h-4" />;
      case 'warning': return <AlertTriangle className="w-4 h-4" />;
      case 'action-preview': return <Zap className="w-4 h-4" />;
      case 'success': return <CheckCircle2 className="w-4 h-4" />;
      default: return null;
    }
  };

  const getMessageStyle = (type: MessageType) => {
    switch (type) {
      case 'warning': return 'bg-amber-50 border-amber-200';
      case 'success': return 'bg-green-50 border-green-200';
      case 'user': return 'bg-[#0D5F4E] text-white ml-auto';
      default: return 'bg-white border-gray-200';
    }
  };

  const getContextLabel = () => {
    const labels: Record<string, string> = {
      onboarding: 'Onboarding',
      'lean-canvas': 'Lean Canvas',
      'pitch-deck': 'Pitch Deck',
      dashboard: 'Dashboard',
      crm: 'CRM'
    };
    return labels[currentContext];
  };

  const getImpactColor = (impact: 'low' | 'medium' | 'high') => {
    switch (impact) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-blue-600 bg-blue-50';
    }
  };

  // Render different states
  if (state === 'collapsed') {
    return (
      <button
        onClick={() => setState('expanded')}
        className="fixed right-6 bottom-6 w-14 h-14 bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3b] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 group"
      >
        <MessageSquare className="w-6 h-6 text-white" />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-medium">3</span>
        </div>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-[#0D5F4E] opacity-75 animate-ping" />
      </button>
    );
  }

  if (state === 'peek') {
    return (
      <div className="fixed right-6 bottom-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
        <div className="p-4 bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3b] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-medium text-white">Next Steps</div>
              <div className="text-xs text-white/70">3 suggestions</div>
            </div>
          </div>
          <button onClick={() => setState('expanded')} className="text-white/80 hover:text-white">
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-3">
          <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="text-sm font-medium text-gray-900 mb-1">Complete Problem Statement</div>
            <div className="text-xs text-gray-600">High impact • Lean Canvas</div>
          </button>
          <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="text-sm font-medium text-gray-900 mb-1">Generate Pitch Deck</div>
            <div className="text-xs text-gray-600">High impact • Fundraising</div>
          </button>
          <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="text-sm font-medium text-gray-900 mb-1">Review Market Analysis</div>
            <div className="text-xs text-gray-600">Medium impact • Strategy</div>
          </button>
        </div>

        <button
          onClick={() => setState('collapsed')}
          className="w-full p-3 bg-gray-50 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
        >
          Minimize
        </button>
      </div>
    );
  }

  // Expanded state (full chat)
  return (
    <div className="fixed right-0 top-0 bottom-0 w-96 bg-white shadow-2xl border-l border-gray-200 z-50 flex flex-col rounded-tl-3xl overflow-hidden">
      {/* Header */}
      <div className="p-5 bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3b] flex items-center justify-between rounded-tl-3xl">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl shadow-lg">
            {AI_AGENTS.strategist.avatar}
          </div>
          <div>
            <div className="text-sm font-semibold text-white">
              {AI_AGENTS.strategist.name} — {AI_AGENTS.strategist.role}
            </div>
            <div className="text-xs text-white/80 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Active in: {getContextLabel()}
            </div>
          </div>
        </div>
        <button
          onClick={() => setState('collapsed')}
          className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Stage & Progress */}
      <div className="px-5 py-4 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Startup Stage</span>
          <span className="text-xs font-semibold text-[#0D5F4E] capitalize px-2 py-1 bg-[#0D5F4E]/10 rounded-lg">{startupStage}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
          <div className="h-full bg-gradient-to-r from-[#0D5F4E] to-[#059669] rounded-full transition-all duration-500" style={{ width: '68%' }} />
        </div>
        <div className="mt-2 text-xs text-gray-600 font-medium">
          68% complete • 3 items need attention
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50/30">
        {messages.map((message) => {
          const agent = message.agent ? AI_AGENTS[message.agent] : null;
          const isUser = message.type === 'user';

          return (
            <div key={message.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] ${isUser ? 'ml-auto' : ''}`}>
                {/* Agent Attribution */}
                {!isUser && agent && (
                  <div className="flex items-center gap-2 mb-2">
                    <div 
                      className="w-7 h-7 rounded-xl flex items-center justify-center text-sm shadow-sm"
                      style={{ backgroundColor: `${agent.color}15` }}
                    >
                      {agent.avatar}
                    </div>
                    <span className="text-xs font-semibold text-gray-700">{agent.name}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                )}

                {/* Message Bubble */}
                <div className={`rounded-2xl p-4 border shadow-sm ${getMessageStyle(message.type)}`}>
                  {!isUser && message.type !== 'user' && (
                    <div className="flex items-center gap-2 mb-2">
                      {getMessageIcon(message.type)}
                      <span className="text-xs font-semibold text-gray-600 capitalize">
                        {message.type.replace('-', ' ')}
                      </span>
                    </div>
                  )}

                  <p className={`text-sm leading-relaxed whitespace-pre-line ${isUser ? 'text-white' : 'text-gray-800'}`}>
                    {message.content}
                  </p>

                  {/* Metadata */}
                  {message.metadata && (
                    <div className="mt-3 pt-3 border-t border-gray-200 space-y-2">
                      {message.metadata.confidence !== undefined && (
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">Confidence Score</span>
                          <span className="font-medium text-gray-900">{message.metadata.confidence}%</span>
                        </div>
                      )}
                      {message.metadata.gap && (
                        <div className="flex items-center gap-2 text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded">
                          <AlertTriangle className="w-3 h-3" />
                          {message.metadata.gap}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Card */}
                  {message.actionCard && message.actionCard.status === 'pending' && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-sm font-medium text-gray-900">{message.actionCard.title}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${getImpactColor(message.actionCard.impact)}`}>
                          {message.actionCard.impact} impact
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{message.actionCard.description}</p>
                      <div className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                        <Target className="w-3 h-3" />
                        {message.actionCard.target}
                      </div>

                      {message.actionCard.preview && (
                        <div className="mb-3 p-2 bg-white rounded border border-gray-200 text-xs text-gray-600 italic">
                          {message.actionCard.preview}
                        </div>
                      )}

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleActionApply(message.actionCard!.id)}
                          className="flex-1 px-3 py-2 bg-[#0D5F4E] text-white rounded-lg text-xs font-medium hover:bg-[#0a4a3b] transition-colors flex items-center justify-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Apply
                        </button>
                        <button className="px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5">
                          <Edit3 className="w-3.5 h-3.5" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleActionDismiss(message.actionCard!.id)}
                          className="p-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {message.actionCard && message.actionCard.status === 'applied' && (
                    <div className="mt-3 p-2 bg-green-50 rounded-lg flex items-center gap-2 text-xs text-green-700">
                      <CheckCircle2 className="w-4 h-4" />
                      Applied to {message.actionCard.target}
                    </div>
                  )}
                </div>

                {/* User timestamp */}
                {isUser && (
                  <div className="text-xs text-gray-400 text-right mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#0D5F4E]/10 flex items-center justify-center text-sm">
              {AI_AGENTS.strategist.avatar}
            </div>
            <div className="bg-gray-100 rounded-xl px-4 py-3">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="px-5 py-4 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
        <div className="text-xs font-semibold text-gray-600 mb-3 uppercase tracking-wide">Quick Actions</div>
        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={() => handleQuickAction('What should I do next?')}
            className="px-3 py-2.5 bg-white border-2 border-gray-200 rounded-xl text-xs text-gray-700 hover:bg-gray-50 hover:border-[#0D5F4E]/30 hover:text-[#0D5F4E] transition-all duration-200 flex items-center justify-center gap-2 font-medium shadow-sm"
          >
            <ArrowRight className="w-3.5 h-3.5" />
            Next Steps
          </button>
          <button
            onClick={() => handleQuickAction('Review my readiness')}
            className="px-3 py-2.5 bg-white border-2 border-gray-200 rounded-xl text-xs text-gray-700 hover:bg-gray-50 hover:border-[#0D5F4E]/30 hover:text-[#0D5F4E] transition-all duration-200 flex items-center justify-center gap-2 font-medium shadow-sm"
          >
            <Shield className="w-3.5 h-3.5" />
            Readiness
          </button>
          <button
            onClick={() => handleQuickAction('Help me with my pitch deck')}
            className="px-3 py-2.5 bg-white border-2 border-gray-200 rounded-xl text-xs text-gray-700 hover:bg-gray-50 hover:border-[#0D5F4E]/30 hover:text-[#0D5F4E] transition-all duration-200 flex items-center justify-center gap-2 font-medium shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            Pitch Deck
          </button>
          <button
            onClick={() => handleQuickAction('Generate content for me')}
            className="px-3 py-2.5 bg-white border-2 border-gray-200 rounded-xl text-xs text-gray-700 hover:bg-gray-50 hover:border-[#0D5F4E]/30 hover:text-[#0D5F4E] transition-all duration-200 flex items-center justify-center gap-2 font-medium shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Generate
          </button>
        </div>
      </div>

      {/* Input Field */}
      <div className="p-5 bg-white border-t border-gray-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Ask me anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
            className="w-full pl-5 pr-14 py-3.5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0D5F4E]/30 focus:border-[#0D5F4E] text-sm placeholder:text-gray-400 shadow-sm transition-all duration-200"
          />
          <button
            onClick={() => handleSendMessage(inputValue)}
            disabled={!inputValue.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#0D5F4E] text-white rounded-xl flex items-center justify-center hover:bg-[#0a4a3b] hover:scale-105 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}