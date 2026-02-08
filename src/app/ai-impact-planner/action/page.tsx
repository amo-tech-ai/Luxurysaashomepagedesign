import React from 'react';
import { Home, Sparkles, CheckCircle2, XCircle, TrendingUp, ArrowLeft, FileText, Trello } from 'lucide-react';

interface AIImpactActionProps {
  onNavigate?: (page: string) => void;
}

export default function AIImpactActionPage({ onNavigate }: AIImpactActionProps) {
  const steps = [
    {
      step: 1,
      title: 'Define brief template (v1)',
      items: [
        '- season, deliverables, channel',
        '- audience, tone, timeline',
      ],
    },
    {
      step: 2,
      title: 'Generate outputs',
      items: [
        '- creative brief',
        '- shot list (photo + video)',
        '- 2-week content calendar',
      ],
    },
    {
      step: 3,
      title: 'Add review + edit',
      items: [
        '- human approval gate',
      ],
    },
    {
      step: 4,
      title: 'Export + share',
      items: [
        '- PDF + Notion + Google Doc',
      ],
    },
    {
      step: 5,
      title: 'Collect feedback (10 users)',
      items: [
        '- "What was wrong or missing?"',
      ],
    },
  ];

  const whatNotToBuild = [
    'Full "Operating System"',
    'Deep supply chain AI',
    'Vendor marketplace',
    'Complex approvals + roles',
  ];

  const kpis = [
    'Time-to-brief',
    'Briefs per user per week',
    'Revisions per brief',
    'Retention (week 2/4)',
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <header className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate?.('home')}
              className="text-sm text-[#0D5F4E] hover:text-[#0a4a3c] transition-colors flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </button>
            <div className="w-px h-6 bg-[#E5E7EB]" />
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#0D5F4E]" />
              <div>
                <div className="text-sm text-[#6B7280]">
                  Action Plan <span className="text-[#D1D5DB]">▸</span> AI-Assisted Creative Brief + Campaign Planning
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={() => onNavigate?.('ai-impact-results')}
          className="flex items-center gap-2 text-[#0D5F4E] hover:text-[#0a4a3c] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Results</span>
        </button>

        {/* Title */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl lg:text-4xl text-[#212427] mb-2">
            Action Plan
          </h1>
          <p className="text-lg text-[#6B7280]">
            Goal: Cut planning time + reduce coordination friction for launches
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Step-by-step */}
          <div className="lg:col-span-2 bg-white border border-[#E5E7EB] rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-6 h-6 text-[#0D5F4E]" />
              <h2 className="text-xl font-serif text-[#212427]">
                Step-by-step (Next 14 days)
              </h2>
            </div>

            <div className="space-y-6">
              {steps.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#0D5F4E] text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-[#212427] mb-2">
                      {item.title}
                    </h3>
                    <div className="space-y-1">
                      {item.items.map((subItem, idx) => (
                        <p key={idx} className="text-sm text-[#6B7280] leading-relaxed">
                          {subItem}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* What NOT to build yet */}
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-5 h-5 text-[#EF4444]" />
                <h2 className="text-lg font-serif text-[#212427]">
                  What NOT to build yet
                </h2>
              </div>

              <ul className="space-y-2 mb-4">
                {whatNotToBuild.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#EF4444] mt-1">•</span>
                    <span className="text-sm text-[#212427]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#E5E7EB]">
                <p className="text-xs text-[#6B7280] italic">
                  <span className="font-medium">Reason:</span> high complexity, low early ROI for MVP teams
                </p>
              </div>
            </div>

            {/* KPIs to track */}
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-5 h-5 text-[#0D5F4E]" />
                <h2 className="text-lg font-serif text-[#212427]">
                  KPIs to track
                </h2>
              </div>

              <ul className="space-y-2">
                {kpis.map((kpi, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#0D5F4E] mt-1">•</span>
                    <span className="text-sm text-[#212427]">{kpi}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Evidence Footer */}
        <div className="bg-[#FBF9FA] border border-[#E5E7EB] rounded-xl p-6 mb-6">
          <p className="text-sm text-[#6B7280]">
            <span className="font-medium text-[#212427]">Evidence used:</span> State of Fashion 2026 (AI necessity + marketing time savings)
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-3 bg-[#0D5F4E] text-white rounded-lg hover:bg-[#0a4a3c] transition-all duration-200 flex items-center gap-2 font-medium">
            <FileText className="w-4 h-4" />
            Generate PRD Tasks
          </button>
          <button className="px-6 py-3 bg-white border border-[#E5E7EB] text-[#212427] rounded-lg hover:border-[#0D5F4E] transition-all duration-200 flex items-center gap-2 font-medium">
            <Trello className="w-4 h-4" />
            Create Sprint Board
          </button>
          <button
            onClick={() => onNavigate?.('ai-impact-results')}
            className="px-6 py-3 bg-white border border-[#E5E7EB] text-[#212427] rounded-lg hover:border-[#0D5F4E] transition-all duration-200 flex items-center gap-2 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
        </div>
      </main>
    </div>
  );
}
