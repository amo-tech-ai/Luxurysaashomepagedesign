import React from 'react';
import { Home, Sparkles, FileText, Download, Plus } from 'lucide-react';

interface AIImpactResultsProps {
  onNavigate?: (page: string) => void;
}

export default function AIImpactResultsPage({ onNavigate }: AIImpactResultsProps) {
  const impactData = [
    { function: 'Marketing & Content', impact: 90, level: 'high' },
    { function: 'Sales', impact: 65, level: 'medium' },
    { function: 'Operations', impact: 55, level: 'medium' },
    { function: 'Customer Support', impact: 40, level: 'low' },
    { function: 'Supply Chain', impact: 20, level: 'low' },
    { function: 'Finance', impact: 15, level: 'low' },
  ];

  const getBarColor = (level: string) => {
    if (level === 'high') return 'bg-[#0D5F4E]';
    if (level === 'medium') return 'bg-[#6B9D89]';
    return 'bg-[#E5E7EB]';
  };

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
                  StartupAI <span className="text-[#D1D5DB]">▸</span> AI Impact Planner
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl lg:text-4xl text-[#212427] mb-2">
            High-impact AI opportunities found
          </h1>
          <p className="text-lg text-[#6B7280]">
            Fashion • MVP • Team 3–10
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* A) AI Impact Heatmap */}
          <div className="lg:col-span-2 bg-white border border-[#E5E7EB] rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-serif text-[#212427] mb-6">
              A) AI Impact Heatmap
            </h2>

            <div className="space-y-4">
              {impactData.map((item) => (
                <div key={item.function}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#212427]">
                      {item.function}
                    </span>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      item.level === 'high' ? 'bg-[#0D5F4E]/10 text-[#0D5F4E]' :
                      item.level === 'medium' ? 'bg-[#6B9D89]/10 text-[#6B9D89]' :
                      'bg-[#E5E7EB] text-[#6B7280]'
                    }`}>
                      {item.level === 'high' ? 'High Impact' : item.level === 'medium' ? 'Medium Impact' : 'Low Impact'}
                    </span>
                  </div>
                  <div className="w-full bg-[#F5F3EF] rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-500 ${getBarColor(item.level)}`}
                      style={{ width: `${item.impact}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
              <div className="flex items-center gap-4 text-xs text-[#6B7280]">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 bg-[#E5E7EB] rounded" />
                  <span>Low</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 bg-[#6B9D89] rounded" />
                  <span>Medium</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 bg-[#0D5F4E] rounded" />
                  <span>High</span>
                </div>
              </div>
            </div>
          </div>

          {/* B) Evidence Panel */}
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-serif text-[#212427] mb-6">
              B) Evidence (Cited)
            </h2>

            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-[#F5F3EF] rounded-lg text-xs font-medium text-[#212427] mb-4">
                Source Pack: State of Fashion 2026
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-[#FAF9F7] rounded-lg border border-[#E5E7EB]">
                <p className="text-sm text-[#212427] leading-relaxed mb-3">
                  "Gen-AI already used in functions like customer service, image creation and copywriting."
                </p>
                <p className="text-xs text-[#6B7280]">
                  Citation: [SoF 2026 • AI brings opp.]
                </p>
              </div>

              <div className="p-4 bg-[#FAF9F7] rounded-lg border border-[#E5E7EB]">
                <p className="text-sm text-[#212427] leading-relaxed mb-3">
                  "Marketing/communications can see the greatest time savings from automation with gen-AI."
                </p>
                <p className="text-xs text-[#6B7280]">
                  Citation: [SoF 2026 • AI brings opp.]
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* C) Recommended First Wedge */}
        <div className="bg-[#FBF9FA] border-2 border-[#0D5F4E] rounded-xl p-8 shadow-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 bg-[#0D5F4E] rounded-lg flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-serif text-[#212427] mb-2">
                C) Recommended First Wedge (Fast Win)
              </h2>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <span className="text-sm font-medium text-[#6B7280]">Build:</span>
              <p className="text-lg font-medium text-[#212427] mt-1">
                AI-Assisted Creative Brief + Campaign Plan Generator
              </p>
            </div>

            <div>
              <span className="text-sm font-medium text-[#6B7280]">Why:</span>
              <p className="text-base text-[#212427] mt-1">
                Highest AI impact area + lowest implementation risk at MVP stage
              </p>
            </div>

            <div>
              <span className="text-sm font-medium text-[#6B7280]">Output:</span>
              <p className="text-base text-[#212427] mt-1">
                Creative brief, shot list, content calendar, draft PR copy
              </p>
            </div>

            <div>
              <span className="text-sm font-medium text-[#6B7280]">KPI:</span>
              <p className="text-base text-[#212427] mt-1">
                "Time-to-brief" (hours → minutes) + weekly briefs per user
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-6 border-t border-[#E5E7EB]">
            <button
              onClick={() => onNavigate?.('ai-impact-action')}
              className="px-6 py-3 bg-[#0D5F4E] text-white rounded-lg hover:bg-[#0a4a3c] transition-all duration-200 flex items-center gap-2 font-medium"
            >
              <FileText className="w-4 h-4" />
              View Action Plan
            </button>
            <button className="px-6 py-3 bg-white border border-[#E5E7EB] text-[#212427] rounded-lg hover:border-[#0D5F4E] transition-all duration-200 flex items-center gap-2 font-medium">
              <Download className="w-4 h-4" />
              Export Roadmap
            </button>
            <button className="px-6 py-3 bg-white border border-[#E5E7EB] text-[#212427] rounded-lg hover:border-[#0D5F4E] transition-all duration-200 flex items-center gap-2 font-medium">
              <Plus className="w-4 h-4" />
              Add to Validator Report
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
