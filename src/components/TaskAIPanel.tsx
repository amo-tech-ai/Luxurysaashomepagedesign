'use client';

import { useState, useEffect } from 'react';
import { X, Plus, Check, Lightbulb, Bot, Sparkles } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  tags: string[];
  column: string;
}

interface Suggestion {
  text: string;
  type: string;
  explanation: string;
}

interface TaskAIPanelProps {
  task: Task | null;
  isOpen: boolean;
  onClose: () => void;
  onApplySuggestion: (taskId: string, suggestion: string) => void;
}

export function TaskAIPanel({ task, isOpen, onClose, onApplySuggestion }: TaskAIPanelProps) {
  const [selected, setSelected] = useState<number[]>([]);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackIndex, setFeedbackIndex] = useState<number | null>(null);
  const [contextExplanation, setContextExplanation] = useState('');

  // Generate suggestions when panel opens or task changes
  useEffect(() => {
    if (isOpen && task) {
      generateSuggestions(task);
    }
  }, [isOpen, task]);

  // ESC key handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const generateSuggestions = async (task: Task) => {
    setIsLoading(true);
    setSelected([]);
    
    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const taskType = detectTaskType(task);
    const { suggestions: newSuggestions, context } = getSuggestionsByType(taskType, task);
    
    setSuggestions(newSuggestions);
    setContextExplanation(context);
    setIsLoading(false);
  };

  const detectTaskType = (task: Task): string => {
    const title = task.title.toLowerCase();
    const tags = task.tags.map(t => t.toLowerCase());
    
    if (title.includes('uvp') || title.includes('value proposition')) return 'uvp';
    if (title.includes('icp') || title.includes('customer') || title.includes('persona')) return 'icp';
    if (title.includes('pricing') || tags.includes('revenue')) return 'pricing';
    if (title.includes('research') || tags.includes('market research')) return 'research';
    if (title.includes('validate') || title.includes('interview')) return 'validation';
    
    return 'generic';
  };

  const getSuggestionsByType = (type: string, task: Task) => {
    const templates: Record<string, { suggestions: Suggestion[], context: string }> = {
      uvp: {
        suggestions: [
          {
            text: '"AI operating system that turns strategy into daily tasks for solo founders"',
            type: 'specific',
            explanation: 'Names the WHAT (AI OS), WHO (solo founders), and OUTCOME (strategy → tasks)'
          },
          {
            text: '"From idea to execution in one guided platform"',
            type: 'transformation',
            explanation: 'Before/after format showing clear journey'
          },
          {
            text: '"Command centre for founders—where strategy meets daily execution"',
            type: 'concise',
            explanation: 'Short, punchy version for landing page hero'
          },
          {
            text: '"The only operating system that translates Lean Canvas into a 90-day action plan"',
            type: 'positioning',
            explanation: 'Emphasizes uniqueness and specific methodology'
          },
          {
            text: '"Turn strategic thinking into executable tasks—guided by AI, built for solo founders"',
            type: 'benefit',
            explanation: 'Highlights the core transformation and target audience'
          }
        ],
        context: 'A strong UVP should: (1) State the outcome, not features (2) Name the WHO clearly (3) Imply the HOW (unique approach) (4) Be testable in customer interviews (5) Fit in one sentence'
      },
      icp: {
        suggestions: [
          {
            text: 'Solo founder, pre-seed stage, technical background, building B2B SaaS, no co-founder yet',
            type: 'persona',
            explanation: 'Demographic + situational profile'
          },
          {
            text: 'Pain: Overwhelmed by strategic planning → Trigger: Just quit job to go full-time → Goal: Ship MVP in 90 days',
            type: 'jobs-to-be-done',
            explanation: 'Pain-trigger-goal framework'
          },
          {
            text: 'Title: Founder/CEO | Company: 1-5 people | Industry: SaaS B2B | Stage: Ideation to Pre-Seed | Budget: $0-50K',
            type: 'firmographics',
            explanation: 'Quantifiable targeting criteria'
          },
          {
            text: 'Early adopter signal: Uses Notion for planning + Figma for design + Slack for community',
            type: 'behavioral',
            explanation: 'Tool stack as proxy for sophistication level'
          }
        ],
        context: 'ICP should be narrow enough to: (1) Target with specific channels (2) Craft resonant messaging (3) Predict where they gather online (4) Validate with 5-10 interviews'
      },
      pricing: {
        suggestions: [
          {
            text: 'Tiered pricing: Free (solo) → $29/mo (Pro) → $99/mo (Team) — anchor to value, not costs',
            type: 'structure',
            explanation: 'SaaS-standard tiered model'
          },
          {
            text: 'Create comparison table: List 3-5 competitors with [Plan, Price, Features, Limits]',
            type: 'research',
            explanation: 'Market-based pricing discovery'
          },
          {
            text: 'Value metric: Charge per active project (not per user) → aligns pricing with success',
            type: 'metric',
            explanation: 'Usage-based pricing tied to outcomes'
          },
          {
            text: 'Willingness-to-pay test: Ask 10-20 customers "If this saved you 10 hrs/week, what would you pay monthly?"',
            type: 'validation',
            explanation: 'Direct feedback on price sensitivity'
          }
        ],
        context: 'Pricing assumptions to test: (1) What is the anchor (competitor pricing)? (2) What is the value metric? (3) Who has budget authority? (4) What is the switching cost?'
      },
      research: {
        suggestions: [
          {
            text: 'Create spreadsheet: [Competitor, Pricing, Target, Key Features, Weaknesses, Review Complaints]',
            type: 'framework',
            explanation: 'Structured competitive analysis'
          },
          {
            text: 'Identify 3 direct competitors + 3 adjacent solutions (current workarounds)',
            type: 'scope',
            explanation: 'Look at actual behavior, not just direct competition'
          },
          {
            text: 'Check G2/Capterra reviews: What do users complain about? What features do they request?',
            type: 'validation',
            explanation: 'Real customer feedback on market gaps'
          },
          {
            text: 'LinkedIn headcount growth: 50%+ growth in last year = signal of product-market fit',
            type: 'signal',
            explanation: 'Proxy metric for traction'
          }
        ],
        context: 'Research goals: (1) Validate problem is real (competitors exist) (2) Find positioning gaps (3) Understand pricing benchmarks (4) Identify "good enough" alternatives'
      },
      validation: {
        suggestions: [
          {
            text: 'Interview opener: "I\'m researching [problem]. Walk me through the last time you dealt with this?"',
            type: 'script',
            explanation: 'Open-ended, past-tense, specific'
          },
          {
            text: 'Validation target: 5 interviews where customer says "I would pay for this" without prompting',
            type: 'metric',
            explanation: 'Strong signal of genuine need'
          },
          {
            text: 'Ask: "What have you already tried?" → If "nothing", problem might not be painful enough',
            type: 'question',
            explanation: 'Severity test via current behavior'
          },
          {
            text: 'Close with: "Can I follow up with a prototype?" → Capture email if yes',
            type: 'followup',
            explanation: 'Build early adopter pipeline'
          }
        ],
        context: 'Validation quality signals: (1) Customer describes pain without prompting (2) Already tried solutions (3) Offers to intro you to others (4) Asks when they can buy'
      },
      generic: {
        suggestions: [
          {
            text: 'Break into 3 sub-tasks: Research → Draft → Review',
            type: 'breakdown',
            explanation: 'Standard task decomposition'
          },
          {
            text: 'Time-box to 25 minutes (one Pomodoro) → Forces prioritization',
            type: 'timeboxing',
            explanation: 'Prevent overthinking'
          },
          {
            text: 'Define "done": What artifact proves this is complete?',
            type: 'clarity',
            explanation: 'Set clear completion criteria'
          },
          {
            text: 'Ask: Does this move me closer to customers? If no, deprioritize',
            type: 'prioritization',
            explanation: 'Customer-first filter'
          }
        ],
        context: 'Task execution principles: (1) Break large tasks into 25-min chunks (2) Define "done" before starting (3) Prioritize customer-facing work (4) Ship "good enough" → iterate'
      }
    };

    return templates[type] || templates.generic;
  };

  const toggleSelection = (index: number) => {
    setSelected(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleQuickAdd = (index: number) => {
    if (!task) return;
    
    const suggestion = suggestions[index];
    onApplySuggestion(task.id, suggestion.text);
    
    // Show feedback
    setFeedbackIndex(index);
    setSelected(prev => prev.includes(index) ? prev : [...prev, index]);
    
    setTimeout(() => setFeedbackIndex(null), 1500);
  };

  const handleBatchAdd = () => {
    if (!task || selected.length === 0) return;
    
    const selectedSuggestions = selected.map(i => suggestions[i].text).join('\n\n');
    onApplySuggestion(task.id, selectedSuggestions);
    
    // Show feedback
    setFeedbackIndex(-1); // Special index for batch
    setTimeout(() => {
      setFeedbackIndex(null);
      setSelected([]);
    }, 1500);
  };

  const handleClear = () => {
    setSelected([]);
  };

  if (!task) return null;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Panel */}
      <div
        className={`
          fixed top-16 right-0 bottom-0 z-40
          w-full sm:w-[380px]
          bg-white border-l border-[#E5E7EB]
          shadow-2xl
          transform transition-transform duration-200
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{ transitionTimingFunction: isOpen ? 'cubic-bezier(0, 0, 0.2, 1)' : 'cubic-bezier(0.4, 0, 1, 1)' }}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="sticky top-0 bg-[#F5F3EF] border-b border-[#E5E7EB] p-4 z-10">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-[#212427]">Task Assistant</span>
              </div>
              <button 
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-[#E5E7EB] transition-colors"
                aria-label="Close panel"
              >
                <X className="w-5 h-5 text-[#6B7280]" />
              </button>
            </div>
            
            {/* Current Task Context */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-[#212427] leading-snug">{task.title}</h3>
              <div className="flex items-center gap-2 flex-wrap text-xs">
                {task.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-[#E8F4F1] text-[#6b9d89] rounded">
                    {tag}
                  </span>
                ))}
                <span className={`px-2 py-0.5 rounded font-medium ${
                  task.priority === 'High' ? 'bg-[#DCF9E3] text-[#0d5f4e]' :
                  task.priority === 'Medium' ? 'bg-[#E8F4F1] text-[#6b9d89]' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {task.priority}
                </span>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Loading State */}
            {isLoading ? (
              <div className="p-8 text-center">
                <div className="inline-flex items-center gap-2 text-[#6b9d89]">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  <span className="text-sm">Generating suggestions...</span>
                </div>
              </div>
            ) : (
              <>
                {/* Suggestions List */}
                <div className="p-4 space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-[#6B7280] font-medium mb-3">
                    SUGGESTED ACTIONS ({suggestions.length})
                  </h4>
                  
                  {suggestions.map((suggestion, idx) => (
                    <div 
                      key={idx}
                      className={`
                        group p-3 rounded-lg border transition-all
                        ${selected.includes(idx) 
                          ? 'border-[#3B5F52] bg-[#DCF9E3]/30' 
                          : 'border-[#E5E7EB] hover:border-[#D1D5DB]'
                        }
                      `}
                    >
                      <div className="flex items-start gap-3">
                        {/* Checkbox */}
                        <button 
                          onClick={() => toggleSelection(idx)}
                          className="mt-0.5 flex-shrink-0"
                          aria-label={`Select suggestion ${idx + 1}`}
                        >
                          <div className={`
                            w-4 h-4 rounded border-2 flex items-center justify-center
                            transition-all
                            ${selected.includes(idx)
                              ? 'bg-[#0d5f4e] border-[#0d5f4e]'
                              : 'border-[#D1D5DB] hover:border-[#3B5F52]'
                            }
                          `}>
                            {selected.includes(idx) && (
                              <Check className="w-3 h-3 text-white" />
                            )}
                          </div>
                        </button>
                        
                        {/* Suggestion Text */}
                        <p className="flex-1 text-sm text-[#212427] leading-relaxed">
                          {suggestion.text}
                        </p>
                        
                        {/* Quick Add Button */}
                        <button
                          onClick={() => handleQuickAdd(idx)}
                          className="
                            flex-shrink-0 w-6 h-6 rounded-md
                            flex items-center justify-center
                            border border-[#E5E7EB]
                            hover:border-[#3B5F52] hover:bg-[#E8F4F1]
                            transition-all group-hover:opacity-100 opacity-0
                          "
                          aria-label={`Quick add suggestion ${idx + 1}`}
                        >
                          <Plus className="w-3.5 h-3.5 text-[#0d5f4e]" />
                        </button>
                      </div>
                      
                      {/* Feedback Toast */}
                      {feedbackIndex === idx && (
                        <div className="mt-2 flex items-center gap-1 text-xs text-[#0d5f4e] animate-pulse">
                          <Check className="w-3 h-3" />
                          <span>Added</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Context Card */}
                <div className="p-4 bg-[#FAF9F7] border-t border-[#E5E7EB]">
                  <div className="flex items-start gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-[#6b9d89] mt-0.5 flex-shrink-0" />
                    <h4 className="text-xs uppercase tracking-wider text-[#6B7280] font-medium">
                      WHY THIS MATTERS
                    </h4>
                  </div>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {contextExplanation}
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Footer Actions */}
          {!isLoading && (
            <div className="sticky bottom-0 bg-white border-t border-[#E5E7EB] p-4 space-y-2">
              {feedbackIndex === -1 && (
                <div className="mb-2 flex items-center justify-center gap-1 text-sm text-[#0d5f4e]">
                  <Check className="w-4 h-4" />
                  <span>{selected.length} suggestion{selected.length !== 1 ? 's' : ''} added</span>
                </div>
              )}
              
              <button
                onClick={handleBatchAdd}
                disabled={selected.length === 0}
                className={`
                  w-full px-4 py-2.5 rounded-lg font-medium text-sm
                  transition-all flex items-center justify-center gap-2
                  ${selected.length > 0
                    ? 'bg-[#3B5F52] text-white hover:bg-[#2D4840]'
                    : 'bg-[#F3F4F6] text-[#9CA3AF] cursor-not-allowed'
                  }
                `}
              >
                <Plus className="w-4 h-4" />
                Add selected ({selected.length})
              </button>
              
              <button
                onClick={handleClear}
                className="
                  w-full px-4 py-2 rounded-lg text-sm
                  text-[#6B7280] hover:bg-[#F5F3EF]
                  transition-colors
                "
              >
                Clear selection
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}