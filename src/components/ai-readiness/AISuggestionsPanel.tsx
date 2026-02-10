'use client';

import { useState, useEffect } from 'react';
import { Sparkles, X, Send } from 'lucide-react';

interface AISuggestion {
  id: string;
  text: string;
  impact: 'high' | 'medium' | 'low';
}

interface AISuggestionsPanelProps {
  sectionId: string | null;
  sectionName: string;
  onClose: () => void;
  onAddSuggestion: (text: string) => void;
}

const IMPACT_ICONS = {
  high: '🔴',
  medium: '🟡',
  low: '🟢',
};

export function AISuggestionsPanel({
  sectionId,
  sectionName,
  onClose,
  onAddSuggestion,
}: AISuggestionsPanelProps) {
  const [suggestions, setSuggestions] = useState<AISuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>('');
  const [chatMessage, setChatMessage] = useState<string>('');

  // ESC to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && sectionId) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [sectionId, onClose]);

  // Trigger animation
  useEffect(() => {
    if (sectionId) {
      setIsAnimatingIn(true);
    } else {
      setIsAnimatingIn(false);
    }
  }, [sectionId]);

  // Generate suggestions when section changes
  useEffect(() => {
    if (sectionId) {
      generateSuggestions(sectionId);
    } else {
      setSuggestions([]);
    }
  }, [sectionId]);

  const generateSuggestions = async (id: string) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSuggestions(getMockSuggestions(id));
    setIsLoading(false);
  };

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    // TODO: Send to AI chat
    console.log('Chat message:', chatMessage);
    setChatMessage('');
  };

  if (!sectionId) return null;

  return (
    <>
      {/* Desktop: Fixed Right Panel */}
      <aside
        className={`
          hidden md:flex flex-col
          fixed top-0 right-0 h-full w-[420px]
          bg-white border-l border-[#E8E6E1]
          z-50 transition-transform duration-200 ease-out
          ${isAnimatingIn ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {renderContent()}
      </aside>

      {/* Mobile: Bottom Sheet */}
      <div
        className={`
          md:hidden fixed inset-0 z-50
          transition-opacity duration-200 ease-out
          ${isAnimatingIn ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
        <div
          className={`
            absolute bottom-0 left-0 right-0
            bg-white rounded-t-2xl
            max-h-[85vh] flex flex-col
            transition-transform duration-250 ease-out
            ${isAnimatingIn ? 'translate-y-0' : 'translate-y-full'}
          `}
        >
          <div className="pt-3 pb-2 flex justify-center flex-shrink-0">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
          </div>
          {renderContent()}
        </div>
      </div>
    </>
  );

  function renderContent() {
    return (
      <>
        {/* Header */}
        <div className="px-6 py-5 flex items-center justify-between border-b border-[#E8E6E1] flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#0d5f4e]" />
            <div>
              <h2 className="text-sm font-medium text-[#0E3E1B]">AI Suggestions</h2>
              <p className="text-xs text-gray-500 mt-0.5">{sectionName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-[#F5F3EF] rounded transition-colors"
            aria-label="Close panel"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* Suggestions List */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-7 h-7 border-2 border-[#0d5f4e]/30 border-t-[#0d5f4e] rounded-full animate-spin mb-3" />
              <p className="text-sm text-gray-500">Generating...</p>
            </div>
          ) : (
            <div className="space-y-5">
              {suggestions.map((suggestion) => (
                <div key={suggestion.id}>
                  {editingId === suggestion.id ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-[#E8E6E1] rounded focus:outline-none focus:ring-1 focus:ring-[#0d5f4e] focus:border-[#0d5f4e]"
                        autoFocus
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setSuggestions((prev) =>
                              prev.map((s) =>
                                s.id === suggestion.id ? { ...s, text: editText } : s
                              )
                            );
                            setEditingId(null);
                          }}
                          className="px-3 py-1.5 text-xs font-medium text-white bg-[#0d5f4e] hover:bg-[#0a4d3f] rounded transition-colors"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-[#F5F3EF] rounded transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-3">
                      {/* Impact Icon */}
                      <span className="text-sm flex-shrink-0 mt-0.5" title={`${suggestion.impact} impact`}>
                        {IMPACT_ICONS[suggestion.impact]}
                      </span>

                      {/* Suggestion Text */}
                      <p className="flex-1 text-sm text-gray-900 leading-relaxed">
                        {suggestion.text}
                      </p>

                      {/* Actions (Icons Only) */}
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <button
                          onClick={() => {
                            onAddSuggestion(suggestion.text);
                          }}
                          className="p-1.5 text-[#0d5f4e] hover:bg-[#F5F3EF] rounded transition-colors"
                          title="Add to canvas"
                        >
                          <span className="text-base">➕</span>
                        </button>
                        <button
                          onClick={() => {
                            setEditingId(suggestion.id);
                            setEditText(suggestion.text);
                          }}
                          className="p-1.5 text-gray-500 hover:bg-[#F5F3EF] rounded transition-colors"
                          title="Edit suggestion"
                        >
                          <span className="text-base">✏️</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Chat Area (Bottom, Prioritized) */}
        <div className="border-t border-[#E8E6E1] p-6 flex-shrink-0 bg-[#FAFAF8]">
          <div className="space-y-3">
            <label className="block text-xs font-medium text-gray-600">
              Refine with AI
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
                placeholder="Ask AI to adjust suggestions..."
                className="flex-1 px-4 py-3 text-sm border border-[#E8E6E1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0d5f4e] focus:border-[#0d5f4e] bg-white"
              />
              <button
                onClick={handleSendMessage}
                disabled={!chatMessage.trim()}
                className="p-3 text-white bg-[#0d5f4e] hover:bg-[#0a4d3f] rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                title="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

// Mock suggestions with impact levels
function getMockSuggestions(sectionId: string): AISuggestion[] {
  const suggestions: Record<string, AISuggestion[]> = {
    '1': [
      { id: 's1', text: 'Define 3-year AI transformation goals', impact: 'high' },
      { id: 's2', text: 'Align AI vision with business KPIs', impact: 'high' },
      { id: 's3', text: 'Set measurable outcomes for each quarter', impact: 'medium' },
      { id: 's4', text: 'Identify executive sponsors for AI initiatives', impact: 'low' },
    ],
    '2': [
      { id: 's1', text: 'Quantify customer pain points AI will solve', impact: 'high' },
      { id: 's2', text: 'Define competitive advantages from AI', impact: 'high' },
      { id: 's3', text: 'Map AI features to customer benefits', impact: 'medium' },
      { id: 's4', text: 'Calculate expected ROI per use case', impact: 'medium' },
    ],
    '3': [
      { id: 's1', text: 'Score use cases by impact vs. effort', impact: 'high' },
      { id: 's2', text: 'Start with quick wins (high impact, low effort)', impact: 'high' },
      { id: 's3', text: 'Build internal AI success stories', impact: 'medium' },
      { id: 's4', text: 'Create roadmap with dependencies', impact: 'low' },
    ],
    '4': [
      { id: 's1', text: 'Audit existing data quality and coverage', impact: 'high' },
      { id: 's2', text: 'Define data labeling and annotation plan', impact: 'medium' },
      { id: 's3', text: 'Implement data versioning and lineage', impact: 'medium' },
      { id: 's4', text: 'Build synthetic data pipeline for gaps', impact: 'low' },
    ],
    '5': [
      { id: 's1', text: 'Choose OpenAI, Anthropic, or self-hosted LLM', impact: 'high' },
      { id: 's2', text: 'Set up vector database (Pinecone, Weaviate)', impact: 'high' },
      { id: 's3', text: 'Implement MLOps pipeline for deployment', impact: 'medium' },
      { id: 's4', text: 'Plan for model monitoring and retraining', impact: 'low' },
    ],
    '6': [
      { id: 's1', text: 'Hire 2 ML engineers and 1 AI product manager', impact: 'high' },
      { id: 's2', text: 'Train existing engineers on prompt engineering', impact: 'medium' },
      { id: 's3', text: 'Build AI literacy program for all teams', impact: 'medium' },
      { id: 's4', text: 'Create AI community of practice', impact: 'low' },
    ],
    '7': [
      { id: 's1', text: 'Implement AI bias detection and mitigation', impact: 'high' },
      { id: 's2', text: 'Create responsible AI guidelines', impact: 'high' },
      { id: 's3', text: 'Set up human-in-the-loop review process', impact: 'medium' },
      { id: 's4', text: 'Define data privacy and security policies', impact: 'low' },
    ],
    '8': [
      { id: 's1', text: 'Budget for API costs ($5K-50K/month)', impact: 'high' },
      { id: 's2', text: 'Plan for GPU infrastructure costs', impact: 'medium' },
      { id: 's3', text: 'Track cost per AI request/user', impact: 'medium' },
      { id: 's4', text: 'Optimize prompts to reduce token usage', impact: 'low' },
    ],
    '9': [
      { id: 's1', text: 'Define North Star metric for AI adoption', impact: 'high' },
      { id: 's2', text: 'Track model accuracy and performance', impact: 'high' },
      { id: 's3', text: 'Measure customer satisfaction with AI features', impact: 'medium' },
      { id: 's4', text: 'Calculate cost savings from automation', impact: 'low' },
    ],
  };

  return suggestions[sectionId] || [
    { id: 's1', text: 'Review best practices for this section', impact: 'medium' },
    { id: 's2', text: 'Consult with AI strategy experts', impact: 'medium' },
    { id: 's3', text: 'Benchmark against industry leaders', impact: 'low' },
  ];
}