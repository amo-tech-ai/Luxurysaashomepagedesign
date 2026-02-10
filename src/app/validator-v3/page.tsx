import { useState } from 'react';
import { Info, ChevronRight, TrendingUp, AlertTriangle, Target, BarChart3 } from 'lucide-react';
import { validatorV3Data, ValidationSection } from '../../data/validator-v3-content';

interface ValidatorV3PageProps {
  onNavigate?: (page: string) => void;
}

export default function ValidatorV3Page({ onNavigate }: ValidatorV3PageProps) {
  const [activeSection, setActiveSection] = useState<string>('problem-clarity');
  const [rightPanelOpen, setRightPanelOpen] = useState(false);

  const activeSectionData = validatorV3Data.find((s) => s.id === activeSection);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setRightPanelOpen(true);
  };

  const handleInfoClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setRightPanelOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-[1800px] mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900 mb-1">Validator Report V3</h1>
              <p className="text-sm text-gray-600">3-Panel Intelligence Dashboard — Progressive Disclosure</p>
            </div>
            <button
              onClick={() => onNavigate && onNavigate('home-v5')}
              className="px-4 py-2 text-sm text-gray-600 hover:text-[#0d5f4e] transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </header>

      {/* 3-Panel Layout */}
      <div className="max-w-[1800px] mx-auto">
        <div className="flex h-[calc(100vh-89px)]">
          {/* LEFT PANEL - Section Navigation */}
          <aside className="w-72 bg-white border-r border-gray-200 overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-4">Sections</h2>
              <nav className="space-y-1">
                {validatorV3Data.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionClick(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-[#0d5f4e] text-white'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{section.title}</span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* MAIN PANEL - Section Summaries (Stable) */}
          <main className={`flex-1 overflow-y-auto transition-all duration-300 ${rightPanelOpen ? 'mr-[600px]' : ''}`}>
            <div className="p-8 space-y-6">
              {validatorV3Data.map((section) => (
                <SectionCard
                  key={section.id}
                  section={section}
                  isActive={activeSection === section.id}
                  onInfoClick={handleInfoClick}
                />
              ))}
            </div>
          </main>

          {/* RIGHT PANEL - Intelligence Layer */}
          <aside
            className={`fixed right-0 top-[89px] h-[calc(100vh-89px)] w-[600px] bg-white border-l border-gray-200 overflow-y-auto transition-transform duration-300 ${
              rightPanelOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {activeSectionData && (
              <div className="p-8">
                {/* Close Button */}
                <button
                  onClick={() => setRightPanelOpen(false)}
                  className="mb-6 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  ✕ Close
                </button>

                {/* Section Title */}
                <h2 className="text-2xl text-gray-900 mb-6">{activeSectionData.title}</h2>

                {/* 1. Deeper Context */}
                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Deeper Context
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{activeSectionData.intelligence.deeperContext}</p>
                </div>

                {/* 2. Visual Insight */}
                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    Visual Insight
                  </h3>
                  <VisualInsight section={activeSectionData} />
                </div>

                {/* 3. Why This Matters */}
                <div className="mb-8 p-4 bg-[#F5F3EF] rounded-lg border-l-4 border-[#0d5f4e]">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Why This Matters</h3>
                  <p className="text-sm text-gray-700">{activeSectionData.intelligence.whyThisMatters}</p>
                </div>

                {/* 4. Risks & Gaps */}
                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Risks & Gaps
                  </h3>
                  <ul className="space-y-2">
                    {activeSectionData.intelligence.risksAndGaps.map((risk, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-red-600 mt-1">•</span>
                        <span>{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 5. Validate Next */}
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Validate Next
                  </h3>
                  <ul className="space-y-2">
                    {activeSectionData.intelligence.validateNext.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-[#0d5f4e] mt-1 font-bold">→</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

// Section Card Component (Main Panel)
function SectionCard({
  section,
  isActive,
  onInfoClick,
}: {
  section: ValidationSection;
  isActive: boolean;
  onInfoClick: (id: string) => void;
}) {
  return (
    <div
      className={`bg-white rounded-lg border p-6 transition-all ${
        isActive ? 'border-[#0d5f4e] shadow-md' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg text-gray-900">{section.title}</h3>
        <button
          onClick={() => onInfoClick(section.id)}
          className="p-1.5 rounded-full hover:bg-gray-100 transition-colors group"
          title="More info"
        >
          <Info className="w-5 h-5 text-gray-400 group-hover:text-[#0d5f4e]" />
        </button>
      </div>

      {/* Summary */}
      <p className="text-sm text-gray-700 leading-relaxed mb-4">{section.summary}</p>

      {/* Metrics */}
      {section.metrics && section.metrics.length > 0 && (
        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
          {section.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">{metric.label}</span>
              <span
                className={`text-sm font-medium ${
                  metric.type === 'score' && typeof metric.value === 'number'
                    ? metric.value >= 80
                      ? 'text-[#0d5f4e]'
                      : metric.value >= 70
                      ? 'text-orange-600'
                      : 'text-red-600'
                    : 'text-gray-900'
                }`}
              >
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Visual Insight Component (Right Panel)
function VisualInsight({ section }: { section: ValidationSection }) {
  const { visualType, visualData } = section.intelligence;

  // Flowchart
  if (visualType === 'flowchart' && visualData?.steps) {
    return (
      <div className="bg-[#F5F3EF] rounded-lg p-6">
        <div className="flex items-center gap-3">
          {visualData.steps.map((step: any, idx: number) => (
            <div key={idx} className="flex items-center gap-3 flex-1">
              <div
                className={`flex-1 p-3 rounded-lg text-center text-sm ${
                  step.impact === 'critical'
                    ? 'bg-red-100 text-red-900 border-2 border-red-300'
                    : step.impact === 'high'
                    ? 'bg-orange-100 text-orange-900 border border-orange-200'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {step.label}
              </div>
              {idx < visualData.steps.length - 1 && <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Funnel (TAM → SAM → SOM)
  if (visualType === 'funnel' && visualData?.stages) {
    return (
      <div className="bg-[#F5F3EF] rounded-lg p-6">
        <div className="space-y-3">
          {visualData.stages.map((stage: any, idx: number) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{stage.name}</span>
                <span className="text-sm text-gray-900 font-semibold">${stage.value}B</span>
              </div>
              <div
                className="h-8 rounded"
                style={{
                  backgroundColor: stage.color,
                  width: `${100 - idx * 20}%`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Chart (Bar chart)
  if (visualType === 'chart' && visualData?.scores) {
    return (
      <div className="bg-[#F5F3EF] rounded-lg p-6">
        <div className="space-y-3">
          {visualData.scores.map((item: any, idx: number) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-700">{item.category}</span>
                <span className="text-xs font-medium text-gray-900">{item.score}/100</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    item.score >= 80 ? 'bg-[#0d5f4e]' : item.score >= 70 ? 'bg-orange-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Risk chart
  if (visualType === 'chart' && visualData?.risks) {
    return (
      <div className="bg-[#F5F3EF] rounded-lg p-6">
        <div className="space-y-3">
          {visualData.risks.map((risk: any, idx: number) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-700">{risk.name}</span>
                <span className="text-xs text-gray-500">Severity: {risk.severity}/10</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    risk.severity >= 8 ? 'bg-red-500' : risk.severity >= 6 ? 'bg-orange-500' : 'bg-yellow-500'
                  }`}
                  style={{ width: `${risk.severity * 10}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Projection chart
  if (visualType === 'chart' && visualData?.projection) {
    return (
      <div className="bg-[#F5F3EF] rounded-lg p-6">
        <div className="space-y-4">
          {visualData.projection.map((period: any, idx: number) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-16 text-xs text-gray-600">{period.month}</div>
              <div className="flex-1">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <div className="text-xs text-gray-600 mb-1">Revenue</div>
                    <div className="h-6 bg-[#0d5f4e] rounded" style={{ width: `${(period.revenue / 200000) * 100}%` }} />
                    <div className="text-xs text-gray-700 mt-0.5">${(period.revenue / 1000).toFixed(0)}K</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-600 mb-1">Expenses</div>
                    <div className="h-6 bg-red-400 rounded" style={{ width: `${(period.expenses / 200000) * 100}%` }} />
                    <div className="text-xs text-gray-700 mt-0.5">${(period.expenses / 1000).toFixed(0)}K</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Revenue breakdown
  if (visualType === 'chart' && visualData?.breakdown) {
    return (
      <div className="bg-[#F5F3EF] rounded-lg p-6">
        <div className="space-y-4">
          {visualData.breakdown.map((item: any, idx: number) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">{item.model}</span>
                <span className="text-sm font-medium text-gray-900">${(item.revenue / 1000).toFixed(0)}K</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span>{item.users.toLocaleString()} users</span>
              </div>
              <div className="mt-2 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#0d5f4e] rounded-full" style={{ width: `${(item.users / 3000) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Matrix
  if (visualType === 'matrix' && visualData?.competitors) {
    return (
      <div className="bg-[#F5F3EF] rounded-lg p-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-2 px-2 text-gray-700">Competitor</th>
              <th className="text-center py-2 px-2 text-gray-700">Real-Time</th>
              <th className="text-center py-2 px-2 text-gray-700">Curation</th>
              <th className="text-center py-2 px-2 text-gray-700">Scale</th>
            </tr>
          </thead>
          <tbody>
            {visualData.competitors.map((comp: any, idx: number) => (
              <tr key={idx} className="border-b border-gray-200">
                <td className="py-2 px-2 font-medium text-gray-900">{comp.name}</td>
                <td className="py-2 px-2 text-center">
                  <div className="inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-xs">
                    {comp.realTime}/10
                  </div>
                </td>
                <td className="py-2 px-2 text-center">
                  <div className="inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-xs">
                    {comp.curation}/10
                  </div>
                </td>
                <td className="py-2 px-2 text-center">
                  <div className="inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-xs">
                    {comp.scale}/10
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // Diagram (Customer segments, MVP phases, Team hires, etc.)
  if (visualType === 'diagram') {
    if (visualData?.segments) {
      return (
        <div className="bg-[#F5F3EF] rounded-lg p-6">
          <div className="space-y-3">
            {visualData.segments.map((segment: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      segment.fit === 'high' ? 'bg-[#0d5f4e]' : segment.fit === 'medium' ? 'bg-orange-400' : 'bg-gray-400'
                    }`}
                  />
                  <span className="text-sm text-gray-700">{segment.name}</span>
                </div>
                <span className="text-xs text-gray-600">{segment.size}% of market</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (visualData?.phases) {
      return (
        <div className="bg-[#F5F3EF] rounded-lg p-6">
          <div className="space-y-3">
            {visualData.phases.map((phase: any, idx: number) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-20 text-xs text-gray-600 font-medium">{phase.name}</div>
                <div className="flex-1 flex items-center gap-2">
                  <div className="flex-1 text-sm text-gray-700">{phase.task}</div>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      phase.status === 'complete'
                        ? 'bg-[#0d5f4e] text-white'
                        : phase.status === 'in-progress'
                        ? 'bg-orange-100 text-orange-900'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (visualData?.milestones) {
      return (
        <div className="bg-[#F5F3EF] rounded-lg p-6">
          <div className="space-y-3">
            {visualData.milestones.map((milestone: any, idx: number) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-16 text-xs text-gray-600 font-medium">{milestone.date}</div>
                <div className="flex-1">
                  <div className="text-sm text-gray-900 mb-1">{milestone.task}</div>
                  <div className="text-xs text-gray-600">Owner: {milestone.owner}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (visualData?.layers) {
      return (
        <div className="bg-[#F5F3EF] rounded-lg p-6">
          <div className="space-y-2">
            {visualData.layers.map((layer: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-white rounded border border-gray-200">
                <span className="text-xs font-medium text-gray-600">{layer.name}</span>
                <span className="text-sm text-gray-900">{layer.tech}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (visualData?.hires) {
      return (
        <div className="bg-[#F5F3EF] rounded-lg p-6">
          <div className="space-y-3">
            {visualData.hires.map((hire: any, idx: number) => (
              <div key={idx} className="p-3 bg-white rounded border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">{hire.role}</span>
                  <span className="text-xs text-gray-600">{hire.timing}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-600">
                  <span>{hire.salary}</span>
                  <span>•</span>
                  <span>{hire.equity} equity</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }

  return (
    <div className="bg-[#F5F3EF] rounded-lg p-6 text-center text-sm text-gray-600">
      Visual data not available for this section.
    </div>
  );
}
