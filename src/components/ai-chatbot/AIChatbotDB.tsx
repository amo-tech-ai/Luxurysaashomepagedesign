/**
 * AI Chatbot with Database Integration
 * 
 * Connected to Gemini AI via edge function.
 * Persists conversation history to database.
 * Context-aware responses based on user's canvas.
 */

import { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Loader,
  AlertTriangle,
  Home,
} from 'lucide-react';
import { useAuth } from '../../lib/AuthContext';
import { loadConversationHistory, sendMessage, type Message } from '../../lib/chat-api';

interface AIChatbotDBProps {
  currentContext?: string;
  startupStage?: string;
  onNavigate?: (page: string) => void;
}

export function AIChatbotDB({
  currentContext = 'dashboard',
  startupStage = 'validation',
  onNavigate,
}: AIChatbotDBProps) {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [error, setError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load conversation history on mount
  useEffect(() => {
    if (isOpen && user) {
      loadHistory();
    }
  }, [isOpen, user]);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  async function loadHistory() {
    try {
      setLoadingHistory(true);
      setError('');
      const history = await loadConversationHistory();

      if (history.length === 0) {
        // Add welcome message if no history
        setMessages([
          {
            id: 'welcome',
            role: 'assistant',
            content:
              "Hi! I'm Atlas, your Startup Coach. I'm here to help you validate your idea and build your business. What would you like to work on today?",
            created_at: new Date().toISOString(),
          },
        ]);
      } else {
        setMessages(history);
      }
    } catch (err: any) {
      console.error('Failed to load history:', err);
      setError(`Failed to load conversation: ${err.message}`);
    } finally {
      setLoadingHistory(false);
    }
  }

  async function handleSend() {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setError('');

    // Add user message optimistically
    const tempUserMsg: Message = {
      id: `temp-user-${Date.now()}`,
      role: 'user',
      content: userMessage,
      created_at: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, tempUserMsg]);

    setLoading(true);

    try {
      // Call AI
      const { response } = await sendMessage(userMessage);

      // Add AI response
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: response,
        created_at: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err: any) {
      console.error('Failed to send message:', err);
      setError(`Failed to get response: ${err.message}`);
      // Remove optimistic user message on error
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setLoading(false);
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!user) return null;

  // Collapsed state - floating button
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#0D5F4E] text-white rounded-full shadow-lg hover:bg-[#0a4a3b] transition-all flex items-center justify-center z-50 group hover:scale-110"
        aria-label="Open chat"
      >
        <MessageSquare className="w-6 h-6" />
        <div className="absolute inset-0 rounded-full bg-[#0D5F4E] opacity-75 animate-ping" />
      </button>
    );
  }

  // Expanded state - chat window
  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white border-2 border-[#E8E6E1] rounded-lg shadow-xl flex flex-col z-50">
      {/* Header */}
      <div className="bg-[#0D5F4E] text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          <div>
            <span className="font-medium">Atlas - Startup Coach</span>
            <div className="text-xs text-white/80 flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Active in: {currentContext}
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAFAF8]">
        {loadingHistory ? (
          <div className="flex items-center justify-center h-full">
            <Loader className="w-8 h-8 animate-spin text-[#0D5F4E]" />
          </div>
        ) : (
          <>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-[#0D5F4E] text-white'
                      : 'bg-white border border-[#E8E6E1] text-gray-900'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                  <p className={`text-xs mt-1 ${msg.role === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                    {new Date(msg.created_at).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#E8E6E1] p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Loader className="w-4 h-4 animate-spin text-[#0D5F4E]" />
                    <span className="text-sm text-gray-600">Atlas is thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Error Banner */}
      {error && (
        <div className="bg-red-50 border-t border-red-200 px-4 py-2 flex items-center gap-2 text-sm text-red-700">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <span className="flex-1">{error}</span>
          <button
            onClick={() => setError('')}
            className="text-red-700 hover:text-red-900"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Input */}
      <div className="border-t-2 border-[#E8E6E1] p-4 bg-white rounded-b-lg">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask Atlas anything..."
            disabled={loading}
            className="flex-1 px-3 py-2 border border-[#E8E6E1] rounded-lg focus:outline-none focus:border-[#0D5F4E] text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="bg-[#0D5F4E] text-white px-4 py-2 rounded-lg hover:bg-[#0a4a3b] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Press Enter to send • Powered by Gemini AI
        </p>
      </div>
    </div>
  );
}
