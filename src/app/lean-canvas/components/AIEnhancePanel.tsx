'use client';

import { useState, useEffect } from 'react';
import { X, Sparkles, Lightbulb, TrendingUp, Target, Check } from 'lucide-react';

interface AIEnhancePanelProps {
  isOpen: boolean;
  onClose: () => void;
  blockTitle: string;
  blockValue: string;
  onApplySuggestion: (value: string) => void;
}

interface Suggestion {
  id: string;
  type: 'enhancement' | 'alternative' | 'example';
  title: string;
  content: string;
  impact?: 'high' | 'medium' | 'low';
}

export function AIEnhancePanel({
  isOpen,
  onClose,
  blockTitle,
  blockValue,
  onApplySuggestion,
}: AIEnhancePanelProps) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null);

  // Generate suggestions when panel opens or block changes
  useEffect(() => {
    if (isOpen && blockTitle) {
      generateSuggestions();
    }
  }, [isOpen, blockTitle]);

  const generateSuggestions = () => {
    setIsGenerating(true);

    // Simulate AI generation delay
    setTimeout(() => {
      const generatedSuggestions = getSuggestionsForBlock(blockTitle, blockValue);
      setSuggestions(generatedSuggestions);
      setIsGenerating(false);
    }, 1200);
  };

  const getSuggestionsForBlock = (title: string, value: string): Suggestion[] => {
    const hasContent = value.trim().length > 0;

    switch (title) {
      case 'Problem':
        return [
          {
            id: '1',
            type: 'enhancement',
            title: 'Quantify Impact',
            content: hasContent
              ? '1. Manual data entry takes 10+ hours/week (costs $500/month in productivity)\n2. High error rates cost $5K/month in corrections and delays\n3. No real-time visibility leads to 20% slower decision-making'
              : '1. Manual processes take 10+ hours/week (costs $500/month)\n2. High error rates cost $5K/month in lost productivity\n3. No real-time visibility into operations',
            impact: 'high',
          },
          {
            id: '2',
            type: 'alternative',
            title: 'User-Centric Framing',
            content: '"I spend my entire Friday just entering data manually"\n"Our team makes costly mistakes every single week"\n"We have no idea what\'s happening until it\'s too late"',
            impact: 'medium',
          },
          {
            id: '3',
            type: 'example',
            title: 'Top-Tier Example',
            content: '• Scheduling coordination across 5+ tools wastes 8 hours/week per manager\n• 30% of meetings are booked at wrong times, causing cascading delays\n• No automated reminders lead to 15% no-show rate',
            impact: 'medium',
          },
        ];

      case 'Solution':
        return [
          {
            id: '1',
            type: 'enhancement',
            title: 'Add Measurable Outcomes',
            content: hasContent
              ? '1. AI-powered automation reduces manual work by 80% (save 8+ hours/week)\n2. Real-time error detection cuts mistakes by 90%\n3. Live dashboard with predictive analytics enables 2x faster decisions'
              : '1. AI-powered automation reduces manual work by 80%\n2. Real-time error detection and correction\n3. Live dashboard with predictive analytics',
            impact: 'high',
          },
          {
            id: '2',
            type: 'alternative',
            title: 'Feature-Benefit Format',
            content: '• Smart automation → Save 8+ hours per week\n• AI error detection → Eliminate 90% of costly mistakes\n• Real-time dashboard → Make decisions 2x faster',
            impact: 'medium',
          },
          {
            id: '3',
            type: 'example',
            title: 'Before/After Clarity',
            content: 'Before: Manual spreadsheets, constant errors, blind decisions\nAfter: One-click automation, zero errors, real-time insights',
            impact: 'low',
          },
        ];

      case 'Unique Value Proposition':
        return [
          {
            id: '1',
            type: 'enhancement',
            title: 'Strengthen with Numbers',
            content: hasContent
              ? `${value} — proven to work in 14 days, no training required`
              : 'Cut operational costs by 60% in 30 days—no training required',
            impact: 'high',
          },
          {
            id: '2',
            type: 'alternative',
            title: 'Before/After Formula',
            content: 'From 10 hours of manual work to 1-click automation—in 30 days',
            impact: 'high',
          },
          {
            id: '3',
            type: 'example',
            title: 'Pain-Free Promise',
            content: 'The only AI platform that works from day one, not day 90',
            impact: 'medium',
          },
        ];

      case 'Customer Segments':
        return [
          {
            id: '1',
            type: 'enhancement',
            title: 'Add Firmographics',
            content: 'Mid-market B2B SaaS companies (50-200 employees, $5M-$20M ARR) with operations teams struggling with manual processes',
            impact: 'high',
          },
          {
            id: '2',
            type: 'alternative',
            title: 'Job Title Focus',
            content: 'Operations Directors and VP Operations at scaling SaaS companies who own process efficiency metrics',
            impact: 'medium',
          },
          {
            id: '3',
            type: 'example',
            title: 'Persona Narrative',
            content: 'Sarah, VP Operations at a 100-person SaaS company, who inherited manual spreadsheets and needs to scale operations without growing headcount',
            impact: 'medium',
          },
        ];

      case 'Early Adopters':
        return [
          {
            id: '1',
            type: 'enhancement',
            title: 'Narrow to Signal',
            content: 'Operations managers at B2B SaaS startups who recently raised Series A ($5M-$15M) and need to scale ops without doubling team size',
            impact: 'high',
          },
          {
            id: '2',
            type: 'alternative',
            title: 'Pain-Based Targeting',
            content: 'Companies actively hiring for "Head of Operations" role—signaling they know they have an ops problem but haven\'t solved it yet',
            impact: 'high',
          },
          {
            id: '3',
            type: 'example',
            title: 'Behavioral Trigger',
            content: 'SaaS founders who posted on LinkedIn about "hiring for operations" or "scaling pains" in the last 30 days',
            impact: 'medium',
          },
        ];

      case 'Channels':
        return [
          {
            id: '1',
            type: 'enhancement',
            title: 'Prioritize & Sequence',
            content: 'Phase 1 (0-3mo): LinkedIn outbound to VP Ops, SaaS communities\nPhase 2 (3-6mo): SEO content, ops podcasts\nPhase 3 (6-12mo): Paid ads, partnerships with SaaS tools',
            impact: 'high',
          },
          {
            id: '2',
            type: 'alternative',
            title: 'One Focus Channel',
            content: 'LinkedIn outbound only—target 500 VP Operations per month with personalized messages about ops pain points',
            impact: 'high',
          },
          {
            id: '3',
            type: 'example',
            title: 'Distribution Strategy',
            content: 'Direct sales via LinkedIn (80% effort) + SaaS Slack communities for word-of-mouth (20% effort)',
            impact: 'medium',
          },
        ];

      case 'Key Metrics':
        return [
          {
            id: '1',
            type: 'enhancement',
            title: 'North Star + Supporting',
            content: 'North Star: Weekly Active Users\nSupporting: Time saved per user, Error reduction %, Customer retention rate, NPS',
            impact: 'high',
          },
          {
            id: '2',
            type: 'alternative',
            title: 'Leading Indicators',
            content: 'Daily active usage, Feature adoption rate (% using automation), Time to first value (< 24 hours)',
            impact: 'medium',
          },
          {
            id: '3',
            type: 'example',
            title: 'Business Health Metrics',
            content: 'MRR growth, Net revenue retention (NRR > 100%), CAC payback period (< 12 months)',
            impact: 'medium',
          },
        ];

      case 'Unfair Advantage':
        return [
          {
            id: '1',
            type: 'enhancement',
            title: 'True Unfair Advantage',
            content: 'Proprietary dataset of 10M+ operations workflows (3 years of data), exclusive partnerships with top 50 SaaS companies, founding team with 20+ years at McKinsey Ops practice',
            impact: 'high',
          },
          {
            id: '2',
            type: 'alternative',
            title: 'Network Effects',
            content: 'Every new customer improves AI accuracy for all users—creates compounding advantage competitors can\'t replicate',
            impact: 'high',
          },
          {
            id: '3',
            type: 'example',
            title: 'Team + Insight',
            content: 'Only team with both AI research PhDs and 10+ years running operations at scale (Stripe, Airbnb)',
            impact: 'medium',
          },
        ];

      case 'Cost Structure':
        return [
          {
            id: '1',
            type: 'enhancement',
            title: 'Fixed vs Variable Breakdown',
            content: 'Fixed Costs:\n• Engineering team: $40K/month\n• Cloud hosting: $3K/month\n• Sales & marketing: $20K/month\n\nVariable Costs:\n• Customer support: $50/customer/month\n• AI compute: $10/customer/month',
            impact: 'high',
          },
          {
            id: '2',
            type: 'alternative',
            title: 'Unit Economics Focus',
            content: 'Cost per customer: $60/month (support + infrastructure)\nGross margin target: 80%+',
            impact: 'medium',
          },
          {
            id: '3',
            type: 'example',
            title: 'Burn Rate Planning',
            content: 'Current monthly burn: $65K/month\nRunway at current burn: 18 months\nBreakeven at: 250 customers',
            impact: 'medium',
          },
        ];

      case 'Revenue Streams':
        return [
          {
            id: '1',
            type: 'enhancement',
            title: 'Tiered Pricing Strategy',
            content: 'Starter: $299/month (1-10 users)\nGrowth: $999/month (11-50 users) + priority support\nEnterprise: $5K+/month (50+ users) + custom integrations + dedicated CSM',
            impact: 'high',
          },
          {
            id: '2',
            type: 'alternative',
            title: 'Usage-Based Model',
            content: 'Base fee: $499/month + $10 per automated workflow\nAligns pricing with value delivered (more automation = more value)',
            impact: 'medium',
          },
          {
            id: '3',
            type: 'example',
            title: 'Annual Contract Strategy',
            content: 'Monthly: $499/month\nAnnual: $4,990/year (2 months free) + lock in 12-month commitment',
            impact: 'medium',
          },
        ];

      case 'Existing Alternatives':
        return [
          {
            id: '1',
            type: 'enhancement',
            title: 'Why Alternatives Fail',
            content: '• Manual spreadsheets → Error-prone, no automation\n• Legacy tools (Salesforce) → Complex, 90-day setup\n• Hiring more staff → Expensive, doesn\'t scale\n\nNone offer AI-powered automation that works day one',
            impact: 'high',
          },
          {
            id: '2',
            type: 'alternative',
            title: 'Competitive Positioning',
            content: 'Current solutions are either too manual (spreadsheets) or too complex (enterprise tools requiring consultants). We\'re the only AI-native option built for speed.',
            impact: 'medium',
          },
          {
            id: '3',
            type: 'example',
            title: 'Market Gap',
            content: 'Status quo: Manual work (slow, error-prone)\nEnterprise: Salesforce, SAP (expensive, complex)\nOur position: AI automation (fast, simple, effective)',
            impact: 'medium',
          },
        ];

      default:
        return [
          {
            id: '1',
            type: 'enhancement',
            title: 'Add Specific Details',
            content: 'Consider adding quantifiable metrics, time frames, or specific examples to make your point more concrete and compelling.',
            impact: 'medium',
          },
          {
            id: '2',
            type: 'alternative',
            title: 'Clarify Your Message',
            content: 'Ensure your message is clear, specific, and directly addresses the block\'s purpose. Avoid jargon and focus on tangible outcomes.',
            impact: 'medium',
          },
        ];
    }
  };

  const handleApplySuggestion = (suggestion: Suggestion) => {
    onApplySuggestion(suggestion.content);
    setSelectedSuggestion(suggestion.id);
    setTimeout(() => {
      onClose();
      setSelectedSuggestion(null);
    }, 500);
  };

  const getImpactColor = (impact?: 'high' | 'medium' | 'low') => {
    switch (impact) {
      case 'high':
        return 'bg-[#0d5f4e] text-white';
      case 'medium':
        return 'bg-[#6b9d89] text-white';
      case 'low':
        return 'bg-gray-200 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getTypeIcon = (type: Suggestion['type']) => {
    switch (type) {
      case 'enhancement':
        return <Sparkles className="w-4 h-4" />;
      case 'alternative':
        return <Lightbulb className="w-4 h-4" />;
      case 'example':
        return <Target className="w-4 h-4" />;
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/20 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`
          fixed right-0 top-0 h-full w-full max-w-xl bg-white shadow-2xl z-50
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="bg-[#F5F3EF] border-b border-[#E8E6E1] px-6 py-5">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-5 h-5 text-[#0d5f4e]" />
                <h2 className="text-lg font-medium text-[#0E3E1B]">
                  AI Suggestions
                </h2>
              </div>
              <p className="text-sm text-gray-600">
                Enhancing: <span className="font-medium text-[#0d5f4e]">{blockTitle}</span>
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto h-[calc(100vh-89px)]">
          <div className="p-6">
            {/* Current Content */}
            {blockValue.trim() && (
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Your Current Content
                </h3>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {blockValue}
                  </p>
                </div>
              </div>
            )}

            {/* Loading State */}
            {isGenerating && (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="relative">
                  <Sparkles className="w-12 h-12 text-[#0d5f4e] animate-pulse" />
                  <div className="absolute inset-0 animate-ping opacity-25">
                    <Sparkles className="w-12 h-12 text-[#0d5f4e]" />
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">Generating suggestions...</p>
              </div>
            )}

            {/* Suggestions */}
            {!isGenerating && suggestions.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  AI-Generated Suggestions
                </h3>

                {suggestions.map((suggestion, index) => (
                  <div
                    key={suggestion.id}
                    className={`
                      group relative bg-white border rounded-xl p-5 
                      transition-all duration-200
                      ${
                        selectedSuggestion === suggestion.id
                          ? 'border-[#0d5f4e] ring-2 ring-[#0d5f4e]/20 scale-[0.98]'
                          : 'border-gray-200 hover:border-[#6b9d89] hover:shadow-md'
                      }
                    `}
                  >
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-[#E8F4F1] rounded-lg text-[#0d5f4e] flex-shrink-0">
                        {getTypeIcon(suggestion.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm font-medium text-gray-900">
                            {suggestion.title}
                          </h4>
                          {suggestion.impact && (
                            <span
                              className={`
                                px-2 py-0.5 text-xs font-medium rounded
                                ${getImpactColor(suggestion.impact)}
                              `}
                            >
                              {suggestion.impact === 'high' ? 'High Impact' : suggestion.impact === 'medium' ? 'Medium' : 'Low'}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-4 pl-12">
                      <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                        {suggestion.content}
                      </p>
                    </div>

                    {/* Action */}
                    <div className="pl-12">
                      <button
                        onClick={() => handleApplySuggestion(suggestion)}
                        disabled={selectedSuggestion === suggestion.id}
                        className={`
                          flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
                          transition-all
                          ${
                            selectedSuggestion === suggestion.id
                              ? 'bg-[#0d5f4e] text-white'
                              : 'bg-white border border-gray-300 text-gray-700 hover:border-[#0d5f4e] hover:text-[#0d5f4e] hover:bg-[#E8F4F1]'
                          }
                        `}
                      >
                        {selectedSuggestion === suggestion.id ? (
                          <>
                            <Check className="w-4 h-4" />
                            Applied
                          </>
                        ) : (
                          <>
                            <TrendingUp className="w-4 h-4" />
                            Apply This Suggestion
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Empty State */}
            {!isGenerating && suggestions.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Lightbulb className="w-12 h-12 text-gray-300 mb-3" />
                <p className="text-sm text-gray-500">
                  No suggestions available at this time.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
