'use client';

import { useState, useEffect, useRef } from 'react';
import { Sparkles, X, Plus, Edit2, Send, Loader2 } from 'lucide-react';

export type ItemType = 'job' | 'pain' | 'gain' | 'product' | 'reliever' | 'creator';

export interface AISuggestionRequest {
  action: 'add_item_suggestions';
  itemType: ItemType;
  canvasContext: {
    existingItems: string[];
    matchedGaps?: string[];
    startupStage?: string;
    audience?: string;
    solution?: string;
  };
}

export interface AISuggestion {
  id: string;
  text: string;
  impact: 'high' | 'medium' | 'low';
}

export interface AISuggestionResponse {
  suggestions: AISuggestion[];
  chat_hint?: string;
}

interface AISuggestionsPanelProps {
  request: AISuggestionRequest | null;
  onClose: () => void;
  onAddItem: (itemType: ItemType, text: string) => void;
}

export function AISuggestionsPanel({
  request,
  onClose,
  onAddItem,
}: AISuggestionsPanelProps) {
  const [suggestions, setSuggestions] = useState<AISuggestion[]>([]);
  const [chatHint, setChatHint] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>('');
  const [chatInput, setChatInput] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<Array<{ role: 'user' | 'ai'; text: string }>>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Handle ESC key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && request) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [request, onClose]);

  // Trigger animation when panel opens
  useEffect(() => {
    if (request) {
      setIsAnimatingIn(true);
    } else {
      setIsAnimatingIn(false);
    }
  }, [request]);

  // Scroll chat to bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  // Generate suggestions when request changes
  useEffect(() => {
    if (request) {
      generateSuggestions(request);
      setChatHistory([]); // Reset chat when switching item types
    } else {
      setSuggestions([]);
      setChatHint('');
    }
  }, [request?.itemType]);

  // Simulate AI generation
  const generateSuggestions = async (req: AISuggestionRequest, chatMessage?: string) => {
    setIsLoading(true);
    setError(null);

    // Add user message to chat if provided
    if (chatMessage) {
      setChatHistory((prev) => [...prev, { role: 'user', text: chatMessage }]);
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      const mockResponse = getMockSuggestions(req.itemType, chatMessage);
      setSuggestions(mockResponse.suggestions);
      setChatHint(mockResponse.chat_hint || '');

      // Add AI response to chat if there was a user message
      if (chatMessage) {
        setChatHistory((prev) => [
          ...prev,
          {
            role: 'ai',
            text: `Updated suggestions based on your request. ${mockResponse.chat_hint || ''}`,
          },
        ]);
      }
    } catch (err) {
      setError('Failed to generate suggestions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddItem = (suggestion: AISuggestion) => {
    if (request) {
      onAddItem(request.itemType, suggestion.text);
      // Could add a toast notification here
    }
  };

  const handleEditStart = (suggestion: AISuggestion) => {
    setEditingId(suggestion.id);
    setEditText(suggestion.text);
  };

  const handleEditSave = (suggestionId: string) => {
    setSuggestions((prev) =>
      prev.map((s) => (s.id === suggestionId ? { ...s, text: editText } : s))
    );
    setEditingId(null);
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditText('');
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || !request) return;

    const message = chatInput.trim();
    setChatInput('');
    generateSuggestions(request, message);
  };

  if (!request) {
    return null;
  }

  const itemTypeLabels: Record<ItemType, string> = {
    job: 'Customer Job',
    pain: 'Pain',
    gain: 'Gain',
    product: 'Product/Service',
    reliever: 'Pain Reliever',
    creator: 'Gain Creator',
  };

  const impactColors = {
    high: 'bg-[#0d5f4e] text-white',
    medium: 'bg-[#6b9d89] text-white',
    low: 'bg-gray-200 text-gray-600',
  };

  return (
    <>
      {/* Desktop: Fixed Right Panel */}
      <aside
        className={`
          hidden md:flex flex-col
          fixed top-0 right-0 h-full w-[480px]
          bg-white border-l border-[#E8E6E1] shadow-2xl
          z-50 transition-transform duration-200 ease-out
          ${isAnimatingIn ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {renderPanelContent()}
      </aside>

      {/* Mobile/Tablet: Bottom Sheet */}
      <div
        className={`
          md:hidden fixed inset-0 z-50
          transition-opacity duration-200 ease-out
          ${isAnimatingIn ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />

        {/* Bottom Sheet */}
        <div
          className={`
            absolute bottom-0 left-0 right-0
            bg-white rounded-t-2xl shadow-2xl
            max-h-[85vh] flex flex-col
            transition-transform duration-250 ease-out
            ${isAnimatingIn ? 'translate-y-0' : 'translate-y-full'}
          `}
        >
          {/* Drag Handle */}
          <div className="pt-3 pb-2 flex justify-center flex-shrink-0">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
          </div>

          {renderPanelContent()}
        </div>
      </div>
    </>
  );

  function renderPanelContent() {
    return (
      <>
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E8E6E1] flex items-center justify-between bg-[#F5F3EF] flex-shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#0d5f4e]" />
            <div>
              <h2 className="font-medium text-[#0E3E1B]">AI Suggestions</h2>
              <p className="text-xs text-gray-600">
                Add {itemTypeLabels[request.itemType]}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white rounded transition-colors"
            aria-label="Close panel"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto flex flex-col">
          {isLoading && suggestions.length === 0 && (
            <div className="px-6 py-12 flex flex-col items-center justify-center gap-3">
              <Loader2 className="w-8 h-8 text-[#0d5f4e] animate-spin" />
              <p className="text-sm text-gray-600">Generating suggestions...</p>
            </div>
          )}

          {error && (
            <div className="px-6 py-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-800 mb-3">{error}</p>
                <button
                  onClick={() => request && generateSuggestions(request)}
                  className="px-3 py-1.5 text-xs font-medium text-red-700 hover:text-red-800 hover:bg-red-100 rounded transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          {!isLoading && !error && suggestions.length > 0 && (
            <>
              {/* Suggestions List */}
              <div className="px-6 py-5 space-y-3 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Suggestions ({suggestions.length})
                  </h3>
                  {chatHint && (
                    <p className="text-xs text-gray-500 italic">
                      💡 {chatHint}
                    </p>
                  )}
                </div>

                {suggestions.map((suggestion) => (
                  <div
                    key={suggestion.id}
                    className="bg-[#F5F3EF] rounded-lg p-3 space-y-2"
                  >
                    {editingId === suggestion.id ? (
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          className="w-full px-3 py-2 text-sm border border-[#E8E6E1] rounded focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
                          autoFocus
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditSave(suggestion.id)}
                            className="px-3 py-1.5 text-xs font-medium text-white bg-[#0d5f4e] hover:bg-[#0a4d3f] rounded transition-colors"
                          >
                            Save
                          </button>
                          <button
                            onClick={handleEditCancel}
                            className="px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-white rounded transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm text-gray-900 leading-relaxed flex-1">
                            {suggestion.text}
                          </p>
                          <span
                            className={`flex-shrink-0 px-2 py-0.5 text-xs font-medium rounded ${
                              impactColors[suggestion.impact]
                            }`}
                          >
                            {suggestion.impact}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleAddItem(suggestion)}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#0d5f4e] hover:bg-[#0a4d3f] rounded transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            Add to Canvas
                          </button>
                          <button
                            onClick={() => handleEditStart(suggestion)}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#0d5f4e] hover:bg-white rounded transition-colors"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                            Edit
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Chat Section */}
              <div className="border-t border-[#E8E6E1] bg-[#FAFAF9] flex-shrink-0">
                {/* Chat History */}
                {chatHistory.length > 0 && (
                  <div className="px-6 py-4 max-h-[200px] overflow-y-auto space-y-3">
                    {chatHistory.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex ${
                          msg.role === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                            msg.role === 'user'
                              ? 'bg-[#0d5f4e] text-white'
                              : 'bg-white text-gray-900 border border-[#E8E6E1]'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    <div ref={chatEndRef} />
                  </div>
                )}

                {/* Chat Input */}
                <div className="px-6 py-4 border-t border-[#E8E6E1]">
                  <form onSubmit={handleChatSubmit} className="flex gap-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Tell AI what to change..."
                      className="flex-1 px-3 py-2 text-sm border border-[#E8E6E1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={!chatInput.trim() || isLoading}
                      className="px-4 py-2 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0a4d3f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                    </button>
                  </form>
                  {!chatHistory.length && chatHint && (
                    <p className="mt-2 text-xs text-gray-500">
                      💡 Try: "{chatHint}"
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

// Mock AI suggestions generator (replace with real API call in production)
function getMockSuggestions(itemType: ItemType, chatMessage?: string): AISuggestionResponse {
  // If chat message, modify suggestions based on request
  if (chatMessage) {
    const lowerMsg = chatMessage.toLowerCase();
    
    if (lowerMsg.includes('specific') || lowerMsg.includes('measurable')) {
      return getSpecificSuggestions(itemType);
    }
    if (lowerMsg.includes('shorter') || lowerMsg.includes('concise')) {
      return getShorterSuggestions(itemType);
    }
    if (lowerMsg.includes('pricing') || lowerMsg.includes('cost')) {
      return getPricingSuggestions(itemType);
    }
  }

  // Default suggestions by item type
  const suggestions: Record<ItemType, AISuggestionResponse> = {
    job: {
      suggestions: [
        {
          id: 'j1',
          text: 'Create professional pitch decks quickly',
          impact: 'high',
        },
        {
          id: 'j2',
          text: 'Communicate product vision to investors',
          impact: 'high',
        },
        {
          id: 'j3',
          text: 'Stay organized during fundraising',
          impact: 'medium',
        },
        {
          id: 'j4',
          text: 'Track investor conversations',
          impact: 'medium',
        },
        {
          id: 'j5',
          text: 'Maintain consistent brand messaging',
          impact: 'low',
        },
      ],
      chat_hint: 'make these more specific to seed founders',
    },
    pain: {
      suggestions: [
        {
          id: 'p1',
          text: 'Wasting 3+ hours per deck on design',
          impact: 'high',
        },
        {
          id: 'p2',
          text: 'Slides look unprofessional',
          impact: 'high',
        },
        {
          id: 'p3',
          text: "Can't find the right templates",
          impact: 'medium',
        },
        {
          id: 'p4',
          text: 'Inconsistent branding across materials',
          impact: 'medium',
        },
        {
          id: 'p5',
          text: 'Version control nightmare with team',
          impact: 'low',
        },
      ],
      chat_hint: 'add pricing pains',
    },
    gain: {
      suggestions: [
        {
          id: 'g1',
          text: 'Save 5+ hours per week on deck creation',
          impact: 'high',
        },
        {
          id: 'g2',
          text: 'Impress investors with polished slides',
          impact: 'high',
        },
        {
          id: 'g3',
          text: 'Launch faster with ready templates',
          impact: 'medium',
        },
        {
          id: 'g4',
          text: 'Consistent brand across all materials',
          impact: 'medium',
        },
        {
          id: 'g5',
          text: 'Collaborate seamlessly with team',
          impact: 'low',
        },
      ],
      chat_hint: 'make these more measurable',
    },
    product: {
      suggestions: [
        {
          id: 'pr1',
          text: 'AI-powered pitch deck generator',
          impact: 'high',
        },
        {
          id: 'pr2',
          text: 'Library of 200+ startup templates',
          impact: 'high',
        },
        {
          id: 'pr3',
          text: 'Real-time collaboration tools',
          impact: 'medium',
        },
        {
          id: 'pr4',
          text: 'Brand asset manager',
          impact: 'medium',
        },
        {
          id: 'pr5',
          text: 'Export to PowerPoint/PDF',
          impact: 'low',
        },
      ],
      chat_hint: 'shorter',
    },
    reliever: {
      suggestions: [
        {
          id: 'r1',
          text: 'Generate slide layouts in 30 seconds with AI',
          impact: 'high',
        },
        {
          id: 'r2',
          text: 'Professional design system built-in',
          impact: 'high',
        },
        {
          id: 'r3',
          text: 'Pre-designed templates for every slide type',
          impact: 'medium',
        },
        {
          id: 'r4',
          text: 'Auto-apply brand colors and fonts',
          impact: 'medium',
        },
        {
          id: 'r5',
          text: 'Version history and team comments',
          impact: 'low',
        },
      ],
      chat_hint: 'focus on time savings',
    },
    creator: {
      suggestions: [
        {
          id: 'c1',
          text: 'Reduce deck creation time by 80%',
          impact: 'high',
        },
        {
          id: 'c2',
          text: 'Investor-ready design in 10 minutes',
          impact: 'high',
        },
        {
          id: 'c3',
          text: 'Launch MVP deck in under 1 hour',
          impact: 'medium',
        },
        {
          id: 'c4',
          text: 'One-click brand consistency',
          impact: 'medium',
        },
        {
          id: 'c5',
          text: 'Real-time feedback from team',
          impact: 'low',
        },
      ],
      chat_hint: 'add competitive advantages',
    },
  };

  return suggestions[itemType];
}

function getSpecificSuggestions(itemType: ItemType): AISuggestionResponse {
  const specific: Record<ItemType, AISuggestion[]> = {
    job: [
      { id: 'j1', text: 'Create seed round pitch deck in <2 hours', impact: 'high' },
      { id: 'j2', text: 'Present product demo to 10+ investors/month', impact: 'high' },
      { id: 'j3', text: 'Update deck weekly based on feedback', impact: 'medium' },
    ],
    pain: [
      { id: 'p1', text: 'Spending $500+/month on freelance designers', impact: 'high' },
      { id: 'p2', text: 'Losing 15 hours/month on slide tweaks', impact: 'high' },
      { id: 'p3', text: 'Missing investor meetings due to deck delays', impact: 'high' },
    ],
    gain: [
      { id: 'g1', text: 'Cut design costs by $300/month', impact: 'high' },
      { id: 'g2', text: 'Increase investor response rate by 2x', impact: 'high' },
      { id: 'g3', text: 'Launch 3x faster than competitors', impact: 'high' },
    ],
    product: [
      { id: 'pr1', text: 'AI generator (outputs deck in 60 seconds)', impact: 'high' },
      { id: 'pr2', text: '200+ templates (updated weekly)', impact: 'medium' },
      { id: 'pr3', text: 'Collaboration (5 team seats included)', impact: 'medium' },
    ],
    reliever: [
      { id: 'r1', text: 'AI generates first draft in 60 seconds', impact: 'high' },
      { id: 'r2', text: 'Auto-format reduces editing by 90%', impact: 'high' },
      { id: 'r3', text: 'Template library saves 5 hours/deck', impact: 'medium' },
    ],
    creator: [
      { id: 'c1', text: 'Deliver pitch deck 80% faster', impact: 'high' },
      { id: 'c2', text: 'Win 2x more investor meetings', impact: 'high' },
      { id: 'c3', text: 'Save $400/month on design costs', impact: 'high' },
    ],
  };

  return {
    suggestions: specific[itemType],
    chat_hint: 'These are more specific and measurable',
  };
}

function getShorterSuggestions(itemType: ItemType): AISuggestionResponse {
  const shorter: Record<ItemType, AISuggestion[]> = {
    job: [
      { id: 'j1', text: 'Build pitch decks fast', impact: 'high' },
      { id: 'j2', text: 'Impress investors', impact: 'high' },
      { id: 'j3', text: 'Organize fundraising', impact: 'medium' },
    ],
    pain: [
      { id: 'p1', text: 'Design takes too long', impact: 'high' },
      { id: 'p2', text: 'Slides look amateur', impact: 'high' },
      { id: 'p3', text: 'No good templates', impact: 'medium' },
    ],
    gain: [
      { id: 'g1', text: 'Save 5+ hours/week', impact: 'high' },
      { id: 'g2', text: 'Professional results', impact: 'high' },
      { id: 'g3', text: 'Launch faster', impact: 'medium' },
    ],
    product: [
      { id: 'pr1', text: 'AI deck builder', impact: 'high' },
      { id: 'pr2', text: 'Template library', impact: 'high' },
      { id: 'pr3', text: 'Team collaboration', impact: 'medium' },
    ],
    reliever: [
      { id: 'r1', text: '30-second slide generation', impact: 'high' },
      { id: 'r2', text: 'Professional design built-in', impact: 'high' },
      { id: 'r3', text: 'Ready-made templates', impact: 'medium' },
    ],
    creator: [
      { id: 'c1', text: '80% time savings', impact: 'high' },
      { id: 'c2', text: 'Investor-ready in 10min', impact: 'high' },
      { id: 'c3', text: 'One-click branding', impact: 'medium' },
    ],
  };

  return {
    suggestions: shorter[itemType],
    chat_hint: 'Made them more concise (max 5 words)',
  };
}

function getPricingSuggestions(itemType: ItemType): AISuggestionResponse {
  if (itemType === 'pain') {
    return {
      suggestions: [
        { id: 'p1', text: 'Paying $500/month for freelance designers', impact: 'high' },
        { id: 'p2', text: 'Canva Pro ($120/year) lacks startup features', impact: 'high' },
        { id: 'p3', text: 'PowerPoint has no investor templates', impact: 'medium' },
        { id: 'p4', text: 'Fiverr quality is inconsistent', impact: 'medium' },
      ],
      chat_hint: 'Added pricing-related pains',
    };
  }

  if (itemType === 'gain') {
    return {
      suggestions: [
        { id: 'g1', text: 'Save $300+/month on design costs', impact: 'high' },
        { id: 'g2', text: 'Get enterprise quality at $49/month', impact: 'high' },
        { id: 'g3', text: 'Cancel 3 subscriptions (Canva, Fiverr, PPT)', impact: 'medium' },
      ],
      chat_hint: 'Added cost-saving gains',
    };
  }

  // For other types, return default with note
  return {
    ...getMockSuggestions(itemType),
    chat_hint: 'Pricing is more relevant for pains/gains',
  };
}
