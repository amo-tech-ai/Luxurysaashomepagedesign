'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Copy, RefreshCw, Plus, X, Loader2 } from 'lucide-react';

export type EntityType = 'pivot_log' | 'current_bet' | 'assumption';

export interface AISuggestionRequest {
  entityType: EntityType;
  entityId: string;
  entityTitle: string;
  entityContent: string;
  startupContext?: {
    audience?: string;
    pain?: string;
    stage?: string;
  };
}

export interface AISuggestionResponse {
  summary: string;
  suggestions: Array<{
    id: string;
    text: string;
    applyTarget: 'card' | 'experiment';
  }>;
  experiments: Array<{
    id: string;
    title: string;
    steps: string[];
  }>;
  risks: string[];
}

interface AISuggestionsPanelProps {
  selectedCard: AISuggestionRequest | null;
  onClose: () => void;
  onAddToCard: (suggestionId: string, text: string, target: 'card' | 'experiment') => void;
}

export function AISuggestionsPanel({
  selectedCard,
  onClose,
  onAddToCard,
}: AISuggestionsPanelProps) {
  const [suggestions, setSuggestions] = useState<AISuggestionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

  // Handle ESC key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedCard) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedCard, onClose]);

  // Trigger animation when panel opens
  useEffect(() => {
    if (selectedCard) {
      setIsAnimatingIn(true);
    } else {
      setIsAnimatingIn(false);
    }
  }, [selectedCard]);

  // Simulate AI generation (in production, this would call OpenAI API)
  const generateSuggestions = async (request: AISuggestionRequest) => {
    setIsLoading(true);
    setError(null);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      // Mock AI response based on entity type
      const mockResponse = getMockSuggestions(request);
      setSuggestions(mockResponse);
    } catch (err) {
      setError('Failed to generate suggestions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Generate suggestions when card changes
  useEffect(() => {
    if (selectedCard) {
      generateSuggestions(selectedCard);
    } else {
      setSuggestions(null);
    }
  }, [selectedCard?.entityId]);

  const handleRegenerate = () => {
    if (selectedCard) {
      generateSuggestions(selectedCard);
    }
  };

  const handleCopy = () => {
    if (!suggestions) return;
    
    const text = `
AI Suggestions for: ${selectedCard?.entityTitle}

Summary:
${suggestions.summary}

Improvements:
${suggestions.suggestions.map((s, i) => `${i + 1}. ${s.text}`).join('\n')}

Experiments:
${suggestions.experiments.map((e, i) => `${i + 1}. ${e.title}\n   ${e.steps.map(s => `• ${s}`).join('\n   ')}`).join('\n\n')}

Risks & Unknowns:
${suggestions.risks.map((r, i) => `${i + 1}. ${r}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    // Could add a toast notification here
  };

  if (!selectedCard) {
    return null;
  }

  return (
    <>
      {/* Desktop: Fixed Right Panel */}
      <aside
        className={`
          hidden md:flex flex-col
          fixed top-0 right-0 h-full w-[420px]
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
        <div
          className="absolute inset-0 bg-black/40"
          onClick={onClose}
        />
        
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
          <div className="pt-3 pb-2 flex justify-center">
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
            <h2 className="font-medium text-[#0E3E1B]">AI Suggestions</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white rounded transition-colors"
            aria-label="Close panel"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Entity Title */}
        <div className="px-6 py-3 bg-[#E8F4F1] border-b border-[#E8E6E1] flex-shrink-0">
          <p className="text-xs font-medium text-[#0d5f4e] mb-1">
            {selectedCard.entityType === 'pivot_log' && 'Pivot Log'}
            {selectedCard.entityType === 'current_bet' && 'Current Bet'}
            {selectedCard.entityType === 'assumption' && 'Assumption'}
          </p>
          <p className="text-sm text-gray-900 leading-tight">{selectedCard.entityTitle}</p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {isLoading && (
            <div className="px-6 py-12 flex flex-col items-center justify-center gap-3">
              <Loader2 className="w-8 h-8 text-[#0d5f4e] animate-spin" />
              <p className="text-sm text-gray-600">Generating AI suggestions...</p>
            </div>
          )}

          {error && (
            <div className="px-6 py-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-800 mb-3">{error}</p>
                <button
                  onClick={handleRegenerate}
                  className="px-3 py-1.5 text-xs font-medium text-red-700 hover:text-red-800 hover:bg-red-100 rounded transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          {!isLoading && !error && suggestions && (
            <div className="px-6 py-5 space-y-6">
              {/* Summary */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Summary
                </h3>
                <p className="text-sm text-gray-900 leading-relaxed">{suggestions.summary}</p>
              </div>

              {/* Suggested Improvements */}
              {suggestions.suggestions.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Suggested Improvements
                  </h3>
                  <div className="space-y-3">
                    {suggestions.suggestions.map((suggestion) => (
                      <div
                        key={suggestion.id}
                        className="bg-[#F5F3EF] rounded-lg p-3 space-y-2"
                      >
                        <p className="text-sm text-gray-900 leading-relaxed">
                          {suggestion.text}
                        </p>
                        <button
                          onClick={() =>
                            onAddToCard(suggestion.id, suggestion.text, suggestion.applyTarget)
                          }
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#0d5f4e] hover:text-white hover:bg-[#0d5f4e] rounded transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          Add to Card
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Next Experiment Ideas */}
              {suggestions.experiments.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Next Experiment Ideas
                  </h3>
                  <div className="space-y-3">
                    {suggestions.experiments.map((experiment) => (
                      <div
                        key={experiment.id}
                        className="bg-[#E8F4F1] rounded-lg p-3 space-y-2"
                      >
                        <p className="text-sm font-medium text-[#0d5f4e]">{experiment.title}</p>
                        <ul className="space-y-1 ml-4">
                          {experiment.steps.map((step, idx) => (
                            <li key={idx} className="text-xs text-gray-700 list-disc">
                              {step}
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() =>
                            onAddToCard(
                              experiment.id,
                              `${experiment.title}\n${experiment.steps.map(s => `• ${s}`).join('\n')}`,
                              'experiment'
                            )
                          }
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#0d5f4e] hover:text-white hover:bg-[#0d5f4e] rounded transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          Add as Experiment
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Risks & Unknowns */}
              {suggestions.risks.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Risks & Unknowns
                  </h3>
                  <ul className="space-y-2">
                    {suggestions.risks.map((risk, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-gray-900">
                        <span className="text-amber-600 flex-shrink-0">⚠</span>
                        <span className="leading-relaxed">{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {!isLoading && !error && suggestions && (
          <div className="px-6 py-4 border-t border-[#E8E6E1] bg-[#F5F3EF] flex gap-2 flex-shrink-0">
            <button
              onClick={handleRegenerate}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-[#0d5f4e] hover:bg-white rounded-lg transition-colors border border-[#E8E6E1]"
            >
              <RefreshCw className="w-4 h-4" />
              Regenerate
            </button>
            <button
              onClick={handleCopy}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-[#0d5f4e] hover:bg-white rounded-lg transition-colors border border-[#E8E6E1]"
            >
              <Copy className="w-4 h-4" />
              Copy All
            </button>
          </div>
        )}
      </>
    );
  }
}

// Mock AI suggestions generator (replace with real API call in production)
function getMockSuggestions(request: AISuggestionRequest): AISuggestionResponse {
  if (request.entityType === 'current_bet') {
    return {
      summary: 'Your current bet is well-defined with a clear audience and pain point. Consider adding more specificity to the pain point and validating the severity through interviews.',
      suggestions: [
        {
          id: 's1',
          text: 'Add quantifiable metrics to the pain point (e.g., "spend 3+ hours per week")',
          applyTarget: 'card',
        },
        {
          id: 's2',
          text: 'Include the frequency or trigger of the pain (e.g., "every time they need to create a pitch deck")',
          applyTarget: 'card',
        },
        {
          id: 's3',
          text: 'Specify the context where this pain is most acute (e.g., "when fundraising under time pressure")',
          applyTarget: 'card',
        },
      ],
      experiments: [
        {
          id: 'e1',
          title: 'Pain Severity Interview (5 founders)',
          steps: [
            'Ask: "On a scale of 1-10, how painful is this problem?"',
            'Ask: "How much time/money does this cost you per month?"',
            'Ask: "What have you tried to solve this?"',
            'Record: Emotional language used (frustrated, annoying, critical)',
          ],
        },
        {
          id: 'e2',
          title: 'Willingness-to-Pay Test (Landing Page)',
          steps: [
            'Create simple landing page describing the solution',
            'Add pricing options ($49, $99, $199/mo)',
            'Drive 100 visitors from target audience',
            'Measure: Email signups per pricing tier',
          ],
        },
      ],
      risks: [
        'Pain may not be severe enough for founders to pay (nice-to-have vs. must-have)',
        'Solution may already exist (competitors: Pitch, Beautiful.ai, Slidebean)',
        'Audience may be too small or hard to reach at scale',
      ],
    };
  }

  if (request.entityType === 'assumption') {
    return {
      summary: `This assumption is ${request.entityContent.includes('HIGH') ? 'high-risk and should be tested first' : 'worth validating to reduce uncertainty'}. The validation method should provide clear evidence to confirm or invalidate.`,
      suggestions: [
        {
          id: 's1',
          text: 'Make the assumption more specific and measurable (add numbers or thresholds)',
          applyTarget: 'card',
        },
        {
          id: 's2',
          text: 'Define what "validated" looks like (e.g., "8/10 interviewees confirm this")',
          applyTarget: 'card',
        },
        {
          id: 's3',
          text: 'Identify the cheapest/fastest way to test this assumption first',
          applyTarget: 'experiment',
        },
      ],
      experiments: [
        {
          id: 'e1',
          title: 'Problem Interview (10 target users)',
          steps: [
            'Recruit 10 people matching your ICP',
            'Ask open-ended questions about their current workflow',
            'Listen for pain points without pitching your solution',
            'Record: How often the problem occurs, current workarounds',
          ],
        },
        {
          id: 'e2',
          title: 'Concierge MVP (3 customers)',
          steps: [
            'Manually deliver the core value (no product built yet)',
            'Charge for the service upfront ($50-$200)',
            'Observe what they actually use vs. what they say they need',
            'Iterate based on feedback before building',
          ],
        },
      ],
      risks: [
        'Customers may say they want this but not actually pay for it',
        'The problem may only exist for a small subset of your target audience',
        'Competitors may already be solving this better/cheaper',
      ],
    };
  }

  // Pivot Log
  return {
    summary: 'This pivot shows learning from invalidated assumptions. Consider documenting what specific evidence led to this decision and how it changes your overall strategy.',
    suggestions: [
      {
        id: 's1',
        text: 'Add specific metrics/evidence that triggered the pivot (e.g., "0/10 interviewees had this pain")',
        applyTarget: 'card',
      },
      {
        id: 's2',
        text: 'Document what you learned and how it informs future assumptions',
        applyTarget: 'card',
      },
      {
        id: 's3',
        text: 'Update related assumptions in your canvas to reflect this new understanding',
        applyTarget: 'card',
      },
    ],
    experiments: [
      {
        id: 'e1',
        title: 'Validate New Direction (5 interviews)',
        steps: [
          'Interview 5 people in the new target audience',
          'Confirm the new pain point is real and severe',
          'Ask about willingness to pay for a solution',
          'Validate that your solution approach makes sense',
        ],
      },
    ],
    risks: [
      'Multiple pivots may indicate unclear problem-solution fit',
      'Team may be losing confidence or focus',
      'May need to revisit fundamental assumptions about the business',
    ],
  };
}