'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Plus, Check } from 'lucide-react';

interface AISuggestionsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  blockTitle: string;
  blockValue: string;
  onAddSuggestion: (text: string) => void;
  industry?: string;
  founderType?: string;
}

interface SuggestionEntry {
  id: string;
  text: string;
  selected: boolean;
}

export function AISuggestionsPanel({
  isOpen,
  onClose,
  blockTitle,
  blockValue,
  onAddSuggestion,
  industry = 'SaaS',
  founderType = 'Solo founder',
}: AISuggestionsPanelProps) {
  const [suggestions, setSuggestions] = useState<SuggestionEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Generate suggestions when panel opens or block changes
  useEffect(() => {
    if (isOpen && blockTitle) {
      generateSuggestions();
    }
  }, [isOpen, blockTitle]);

  // ESC key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  // Click outside handler for desktop
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && panelRef.current && !panelRef.current.contains(e.target as Node)) {
        // Only close on desktop (window width >= 1024px)
        if (window.innerWidth >= 1024) {
          onClose();
        }
      }
    };

    if (isOpen) {
      // Delay adding listener to avoid immediate close
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose]);

  // Focus management - trap focus inside panel
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  const generateSuggestions = () => {
    setIsLoading(true);
    setAddedIds(new Set());

    // Simulate AI generation delay
    setTimeout(() => {
      const generated = getSuggestionsForBlock(blockTitle, blockValue, industry, founderType);
      setSuggestions(generated.map((text, idx) => ({
        id: `${blockTitle}-${idx}`,
        text,
        selected: false,
      })));
      setIsLoading(false);
    }, 800);
  };

  const getSuggestionsForBlock = (
    title: string,
    value: string,
    industry: string,
    founderType: string
  ): string[] => {
    const hasContent = value.trim().length > 0;

    switch (title) {
      case 'Problem':
        return [
          'Founders waste 5–10 hrs/week planning with scattered tools',
          'Decision fatigue from too many validation frameworks',
          'Lack of structured 90-day execution after validation',
        ];

      case 'Solution':
        return [
          'One unified command center for strategy + daily execution',
          'AI-guided workflows that adapt to your startup stage',
          'Integrated validation, planning, and task management',
        ];

      case 'Unique Value Proposition':
        return [
          'From strategy to daily execution, in one guided flow',
          'Cut planning time by 70%—no scattered tools',
          'The only AI OS built specifically for founders',
        ];

      case 'Customer Segments':
        return [
          'Solo SaaS founders (pre-revenue to $1M ARR)',
          'Technical founders who need business structure',
          'First-time founders validating their startup idea',
        ];

      case 'Early Adopters':
        return [
          'Founders who recently left their job to build a startup',
          'Solo founders with strong technical skills, weak on business strategy',
          'Makers who launched on Product Hunt but need traction framework',
        ];

      case 'Existing Alternatives':
        return [
          'Manual spreadsheets for planning (time-consuming, error-prone)',
          'Separate tools: Notion + Trello + validation frameworks (disconnected)',
          'Hiring a consultant ($5K+, generic advice, no execution support)',
        ];

      case 'Channels':
        return [
          'Indie Hackers, Product Hunt communities',
          'LinkedIn content targeting solo SaaS founders',
          'SEO for "lean canvas AI" and "startup validation tools"',
        ];

      case 'Key Metrics':
        return [
          'Weekly Active Users (WAU)',
          'Completion rate: % of users who complete their lean canvas',
          'Time to first validated hypothesis (target: <7 days)',
        ];

      case 'Unfair Advantage':
        return [
          'AI trained on 10,000+ validated startup canvases',
          'Only tool that combines validation + execution in one flow',
          'Founding team: ex-McKinsey strategists + AI researchers',
        ];

      case 'Cost Structure':
        return [
          'Fixed: Engineering ($25K/mo), AI infrastructure ($3K/mo)',
          'Variable: Support ($20/user/mo), compute ($5/user/mo)',
          'Burn rate: $35K/mo, breakeven at 140 paid users',
        ];

      case 'Revenue Streams':
        return [
          'Free tier: Basic canvas + validation (free forever)',
          'Pro: $29/mo (AI suggestions, 90-day plans, integrations)',
          'Team: $99/mo (collaborative workspaces, advanced analytics)',
        ];

      default:
        return [
          'Be specific and quantify your point with numbers or timeframes',
          'Focus on measurable outcomes customers care about',
          'Use clear, jargon-free language that resonates with your ICP',
        ];
    }
  };

  const handleToggleSelect = (id: string) => {
    setSuggestions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, selected: !s.selected } : s))
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent, suggestion: SuggestionEntry) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggleSelect(suggestion.id);
    }
  };

  const handleAddSingle = (suggestion: SuggestionEntry) => {
    // Add to canvas
    const newText = blockValue.trim()
      ? `${blockValue}\n${suggestion.text}`
      : suggestion.text;
    onAddSuggestion(newText);

    // Mark as added
    setAddedIds((prev) => new Set(prev).add(suggestion.id));

    // Show success feedback
    setTimeout(() => {
      setAddedIds((prev) => {
        const updated = new Set(prev);
        updated.delete(suggestion.id);
        return updated;
      });
    }, 2000);
  };

  const handleAddSelected = () => {
    const selectedSuggestions = suggestions.filter((s) => s.selected);
    if (selectedSuggestions.length === 0) return;

    const selectedTexts = selectedSuggestions.map((s) => s.text).join('\n');
    const newText = blockValue.trim()
      ? `${blockValue}\n${selectedTexts}`
      : selectedTexts;

    onAddSuggestion(newText);

    // Clear selections
    setSuggestions((prev) => prev.map((s) => ({ ...s, selected: false })));
  };

  const handleClear = () => {
    setSuggestions((prev) => prev.map((s) => ({ ...s, selected: false })));
  };

  const selectedCount = suggestions.filter((s) => s.selected).length;

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className="fixed inset-0 bg-black/10 z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel - Updated animation timing: 200ms open, 150ms close */}
      <div
        ref={panelRef}
        role="complementary"
        aria-label="AI Suggestions Panel"
        aria-labelledby="panel-title"
        className={`
          fixed right-0 top-0 h-full w-full sm:w-[380px] bg-white border-l border-[#E6ECE9] shadow-xl z-50
          transform transition-transform ease-out
          ${isOpen ? 'translate-x-0 duration-200' : 'translate-x-full duration-150'}
        `}
      >
        {/* Header */}
        <div className="bg-white border-b border-[#E6ECE9] px-5 py-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg" role="img" aria-label="Robot">🤖</span>
                <h2 id="panel-title" className="text-sm font-semibold text-[#212427]">
                  AI Suggestions
                </h2>
              </div>
              <p className="text-xs text-gray-600">
                For: <span className="font-medium text-[#0d5f4e]">{blockTitle}</span>
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Context: {industry} • {founderType}
              </p>
            </div>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#0d5f4e] focus-visible:outline-offset-2"
              aria-label="Close AI Suggestions panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto h-[calc(100vh-180px)] px-5 py-4">
          {/* Loading State */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-8 h-8 border-2 border-[#0d5f4e] border-t-transparent rounded-full animate-spin mb-3" />
              <p className="text-sm text-gray-600">Generating suggestions...</p>
            </div>
          )}

          {/* Suggested Entries */}
          {!isLoading && suggestions.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Suggested Entries
              </h3>

              {suggestions.map((suggestion, index) => {
                const isAdded = addedIds.has(suggestion.id);

                return (
                  <div
                    key={suggestion.id}
                    role="checkbox"
                    aria-checked={suggestion.selected}
                    aria-label={`Suggestion: ${suggestion.text}`}
                    tabIndex={isAdded ? -1 : 0}
                    onKeyDown={(e) => !isAdded && handleKeyDown(e, suggestion)}
                    className={`
                      group relative bg-white border rounded-xl p-3.5 
                      transition-all duration-200 cursor-pointer
                      focus-visible:outline-2 focus-visible:outline-[#0d5f4e] focus-visible:outline-offset-2
                      ${
                        suggestion.selected
                          ? 'border-[#0d5f4e] bg-[#E8F4F1]/30'
                          : 'border-[#E6ECE9] hover:border-[#6b9d89] hover:bg-[#E8F4F1]/10'
                      }
                      ${isAdded ? 'border-[#0d5f4e] bg-[#E8F4F1]/50' : ''}
                    `}
                    onClick={() => !isAdded && handleToggleSelect(suggestion.id)}
                  >
                    <div className="flex items-start gap-3">
                      {/* Checkbox/Status */}
                      <div className="flex-shrink-0 mt-0.5">
                        {isAdded ? (
                          <div className="w-5 h-5 bg-[#0d5f4e] rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        ) : (
                          <div
                            className={`
                              w-5 h-5 rounded border-2 flex items-center justify-center
                              transition-all
                              ${
                                suggestion.selected
                                  ? 'bg-[#0d5f4e] border-[#0d5f4e]'
                                  : 'bg-white border-gray-300 group-hover:border-[#6b9d89]'
                              }
                            `}
                          >
                            {suggestion.selected && (
                              <Check className="w-3 h-3 text-white" />
                            )}
                          </div>
                        )}
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {suggestion.text}
                        </p>
                      </div>

                      {/* Add Button */}
                      {!isAdded && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddSingle(suggestion);
                          }}
                          className="flex-shrink-0 p-1.5 text-[#0d5f4e] hover:bg-[#E8F4F1] rounded-lg transition-colors opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-[#0d5f4e] focus-visible:outline-offset-2"
                          title="Add to canvas"
                          aria-label={`Add suggestion: ${suggestion.text}`}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      )}

                      {isAdded && (
                        <span className="flex-shrink-0 text-xs text-[#0d5f4e] font-medium">
                          ✓ Added
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Why This Matters */}
          {!isLoading && suggestions.length > 0 && (
            <div className="mt-6 p-4 bg-[#F5F3EF] rounded-xl border border-[#E6ECE9]">
              <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Why This Matters
              </h4>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Common across 78% solo SaaS founders</li>
                <li>• High willingness to pay signal</li>
                <li>• Maps to execution pain points</li>
              </ul>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && suggestions.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center px-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl" role="img" aria-label="Light bulb">💡</span>
              </div>
              <p className="text-sm font-medium text-gray-700 mb-1">
                No strong suggestions yet
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Add 1–2 lines manually to unlock AI guidance
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {!isLoading && suggestions.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#E6ECE9] px-5 py-4">
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={handleAddSelected}
                disabled={selectedCount === 0}
                className={`
                  flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg
                  transition-all focus-visible:outline-2 focus-visible:outline-[#0d5f4e] focus-visible:outline-offset-2
                  ${
                    selectedCount > 0
                      ? 'bg-[#0d5f4e] text-white hover:bg-[#0a4a3b]'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }
                `}
                aria-label={`Add ${selectedCount} selected suggestions`}
              >
                <Plus className="w-4 h-4" />
                Add selected {selectedCount > 0 && `(${selectedCount})`}
              </button>
              <button
                onClick={handleClear}
                disabled={selectedCount === 0}
                className={`
                  px-4 py-2.5 text-sm font-medium rounded-lg
                  transition-colors focus-visible:outline-2 focus-visible:outline-[#0d5f4e] focus-visible:outline-offset-2
                  ${
                    selectedCount > 0
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-gray-400 cursor-not-allowed'
                  }
                `}
                aria-label="Clear all selections"
              >
                Clear
              </button>
            </div>
            <p className="text-[10px] text-gray-500 text-center">
              Auto-adds to canvas text area
            </p>
          </div>
        )}
      </div>
    </>
  );
}
