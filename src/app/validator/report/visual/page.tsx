import { useState } from 'react';
import {
  TrendingUp,
  Target,
  AlertTriangle,
  Users,
  DollarSign,
  Zap,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Sparkles,
  Shield,
  BarChart3,
  Calendar,
  Home,
  Database
} from 'lucide-react';

interface VisualValidatorReportProps {
  reportId?: string;
  onNavigate?: (route: string) => void;
}

export default function VisualValidatorReport({ reportId, onNavigate }: VisualValidatorReportProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const [traceOpen, setTraceOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Sample data - replace with actual report data
  const reportData = {
    overallScore: 78,
    verdict: 'PROCEED WITH CONTROLS',
    confidence: 'High',
    scores: {
      market: 8.5,
      product: 7.2,
      team: 6.8,
      revenue: 8.1,
    },
    market: {
      tam: '$10.4B',
      sam: '$2.5B',
      som: '$500M',
      growth: '28% CAGR',
    },
    competitors: [
      { name: 'Google Maps', x: 3, y: 4, strength: 'High' },
      { name: 'Notion', x: 7, y: 6, strength: 'High' },
      { name: 'Asana', x: 8, y: 5, strength: 'Medium' },
      { name: 'Trello', x: 5, y: 3, strength: 'Low' },
      { name: 'StartupAI', x: 9, y: 9, strength: 'Target', isTarget: true },
    ],
    risks: [
      { name: 'Market Timing', impact: 'High', probability: 'Medium', color: '#6B7280' },
      { name: 'Execution Risk', impact: 'High', probability: 'High', color: '#6B7280' },
      { name: 'Tech Debt', impact: 'Low', probability: 'Low', color: '#0d5f4e' },
      { name: 'Funding Gap', impact: 'Medium', probability: 'Medium', color: '#6B7280' },
    ],
  };

  const navSections = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'market', label: 'Market', icon: TrendingUp },
    { id: 'competition', label: 'Competition', icon: Target },
    { id: 'product', label: 'Product', icon: Zap },
    { id: 'risks', label: 'Risks', icon: AlertTriangle },
    { id: 'revenue', label: 'Revenue', icon: DollarSign },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'next-steps', label: 'Next Steps', icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#E8E6E1]">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate?.('home-v8')}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-[#0d5f4e] rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">S</span>
              </div>
              <span className="text-lg font-light text-[#212427]">StartupAI</span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-[#6B7280]">
              <Shield className="w-4 h-4" />
              <span>Validation Report #{reportId || '001'}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="md:hidden p-2 hover:bg-[#F5F3EF] rounded-lg transition-colors"
            >
              {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <button
              onClick={() => onNavigate?.('home-v8')}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#F5F3EF] hover:bg-[#E8E6E1] text-[#212427] rounded-lg transition-colors text-sm"
            >
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* LEFT NAVIGATION */}
        <aside className={`
          fixed md:sticky top-[73px] left-0 h-[calc(100vh-73px)] z-40
          w-60 bg-white border-r border-[#E8E6E1]
          transform transition-transform duration-300
          ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <div className="p-6 space-y-6 overflow-y-auto h-full">
            {/* Progress Indicator */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                Analysis Progress
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6B7280]">Complete</span>
                  <span className="text-[#0d5f4e] font-semibold">{reportData.overallScore}%</span>
                </div>
                <div className="h-2 bg-[#F5F3EF] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] rounded-full transition-all duration-1000"
                    style={{ width: `${reportData.overallScore}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Score Mini Bars */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                Section Scores
              </div>
              {Object.entries(reportData.scores).map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#6B7280] capitalize">{key}</span>
                    <span className="text-[#212427] font-medium">{value}</span>
                  </div>
                  <div className="h-1.5 bg-[#F5F3EF] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        value >= 8 ? 'bg-[#0d5f4e]' :
                        value >= 6 ? 'bg-[#6b9d89]' :
                        'bg-[#6B7280]'
                      }`}
                      style={{ width: `${(value / 10) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Sections */}
            <nav className="space-y-1">
              <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-3">
                Sections
              </div>
              {navSections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      setMobileNavOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                      activeSection === section.id
                        ? 'bg-[#E8F4F1] text-[#0d5f4e] font-medium border border-[#0d5f4e]'
                        : 'text-[#6B7280] hover:bg-[#F5F3EF] hover:text-[#212427]'
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span>{section.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 min-h-screen px-6 md:px-10 py-10 max-w-5xl">
          {/* Header Score Module */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl border border-[#E8E6E1] p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Radial Score Gauge */}
                <div className="flex flex-col items-center">
                  <div className="relative w-48 h-48 mb-4">
                    {/* Outer Ring */}
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        fill="none"
                        stroke="#F5F3EF"
                        strokeWidth="12"
                      />
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        fill="none"
                        stroke="url(#scoreGradient)"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray={`${(reportData.overallScore / 100) * 553} 553`}
                        className="transition-all duration-1000"
                      />
                      <defs>
                        <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0d5f4e" />
                          <stop offset="100%" stopColor="#6b9d89" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Score Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-5xl font-bold bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] bg-clip-text text-transparent">
                        {reportData.overallScore}
                      </div>
                      <div className="text-sm text-[#6B7280]">/ 100</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F4F1] border border-[#0d5f4e] rounded-full mb-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0d5f4e]" />
                      <span className="text-sm font-semibold text-[#0d5f4e]">
                        {reportData.verdict}
                      </span>
                    </div>
                    <div className="text-xs text-[#6B7280]">
                      Confidence: {reportData.confidence}
                    </div>
                  </div>
                </div>

                {/* Sub-Metrics */}
                <div className="grid grid-cols-2 gap-4 flex-1">
                  {Object.entries(reportData.scores).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-[#FAF9F7] rounded-xl p-4 border border-[#E8E6E1] hover:border-[#0d5f4e] hover:shadow-sm transition-all"
                    >
                      <div className="text-xs text-[#6B7280] uppercase tracking-wider mb-2 capitalize">
                        {key}
                      </div>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-3xl font-bold text-[#212427]">{value}</span>
                        <span className="text-sm text-[#6B7280]">/ 10</span>
                      </div>
                      <div className="h-1.5 bg-[#F5F3EF] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            value >= 8 ? 'bg-[#0d5f4e]' :
                            value >= 6 ? 'bg-[#6b9d89]' :
                            'bg-[#6B7280]'
                          }`}
                          style={{ width: `${(value / 10) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Market Section */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl text-[#212427] mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-[#0d5f4e]" />
              Market Opportunity
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* TAM/SAM/SOM Donut */}
              <div className="bg-white rounded-xl border border-[#E8E6E1] p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-[#6B7280] uppercase tracking-wider mb-6">
                  Market Size
                </h3>
                
                {/* Donut Chart */}
                <div className="relative w-full aspect-square max-w-[280px] mx-auto mb-6">
                  <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                    {/* SOM - Innermost */}
                    <circle
                      cx="100"
                      cy="100"
                      r="45"
                      fill="none"
                      stroke="#0d5f4e"
                      strokeWidth="20"
                      opacity="0.9"
                    />
                    {/* SAM - Middle */}
                    <circle
                      cx="100"
                      cy="100"
                      r="65"
                      fill="none"
                      stroke="#6b9d89"
                      strokeWidth="20"
                      opacity="0.7"
                    />
                    {/* TAM - Outermost */}
                    <circle
                      cx="100"
                      cy="100"
                      r="85"
                      fill="none"
                      stroke="#0E3E1B"
                      strokeWidth="20"
                      opacity="0.3"
                    />
                  </svg>
                  
                  {/* Center Label */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-[#212427]">
                      {reportData.market.tam}
                    </div>
                    <div className="text-xs text-[#6B7280]">Total Market</div>
                  </div>
                </div>

                {/* Legend */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#0E3E1B] opacity-30" />
                      <span className="text-sm text-[#6B7280]">TAM</span>
                    </div>
                    <span className="text-sm font-medium text-[#212427]">{reportData.market.tam}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#6b9d89]" />
                      <span className="text-sm text-[#6B7280]">SAM</span>
                    </div>
                    <span className="text-sm font-medium text-[#212427]">{reportData.market.sam}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#0d5f4e]" />
                      <span className="text-sm text-[#6B7280]">SOM</span>
                    </div>
                    <span className="text-sm font-medium text-[#212427]">{reportData.market.som}</span>
                  </div>
                </div>
              </div>

              {/* Market Insights Card */}
              <div className="bg-white rounded-xl border border-[#E8E6E1] p-6 hover:border-[#0d5f4e] hover:shadow-sm transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-sm font-semibold text-[#6B7280] uppercase tracking-wider">
                    Market Insights
                  </h3>
                  <div className="px-3 py-1 bg-[#E8F4F1] border border-[#0d5f4e] rounded-full text-xs font-semibold text-[#0d5f4e]">
                    {reportData.scores.market} / 10
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0d5f4e] mt-2 flex-shrink-0" />
                    <p className="text-sm text-[#212427]">
                      <span className="font-semibold">{reportData.market.growth}</span> projected growth rate
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0d5f4e] mt-2 flex-shrink-0" />
                    <p className="text-sm text-[#212427]">
                      Strong vertical AI adoption in target segment
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0d5f4e] mt-2 flex-shrink-0" />
                    <p className="text-sm text-[#212427]">
                      Premium positioning supports higher margins
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E6E1]">
                  <button className="text-sm text-[#0d5f4e] hover:text-[#0a4a3b] transition-colors flex items-center gap-2">
                    View Market Assumptions
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Competition 2x2 Matrix */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl text-[#212427] mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-[#0d5f4e]" />
              Competitive Positioning
            </h2>

            <div className="bg-white rounded-xl border border-[#E8E6E1] p-8 shadow-sm">
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                {/* Axes */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#E8E6E1]" />
                <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-[#E8E6E1]" />
                
                {/* Axis Labels */}
                <div className="absolute -bottom-8 right-0 text-xs text-[#6B7280]">
                  Domain Specificity →
                </div>
                <div className="absolute -left-24 top-0 text-xs text-[#6B7280] transform -rotate-90 origin-left">
                  ← Workflow Depth
                </div>

                {/* Plot Points */}
                {reportData.competitors.map((competitor, i) => (
                  <div
                    key={i}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{
                      left: `${(competitor.x / 10) * 100}%`,
                      bottom: `${(competitor.y / 10) * 100}%`,
                    }}
                  >
                    {competitor.isTarget ? (
                      <>
                        {/* Glow Effect for Target */}
                        <div className="absolute inset-0 w-16 h-16 bg-[#0d5f4e]/20 rounded-full blur-xl animate-pulse" />
                        <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] flex items-center justify-center border-2 border-[#0d5f4e] shadow-lg">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                      </>
                    ) : (
                      <div className={`w-8 h-8 rounded-full border-2 ${
                        competitor.strength === 'High' ? 'border-[#6B7280] bg-[#6B7280]/20' :
                        competitor.strength === 'Medium' ? 'border-[#9CA3AF] bg-[#9CA3AF]/20' :
                        'border-[#E8E6E1] bg-[#F5F3EF]'
                      }`} />
                    )}
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="bg-white border border-[#E8E6E1] rounded-lg px-3 py-2 whitespace-nowrap shadow-lg">
                        <div className="text-xs font-semibold text-[#212427]">{competitor.name}</div>
                        <div className="text-xs text-[#6B7280]">{competitor.strength} Strength</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-12 pt-6 border-t border-[#E8E6E1] flex flex-wrap gap-6 justify-center">
                {reportData.competitors.map((competitor, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${
                      competitor.isTarget ? 'bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89]' :
                      competitor.strength === 'High' ? 'bg-[#6B7280]' :
                      competitor.strength === 'Medium' ? 'bg-[#9CA3AF]' :
                      'bg-[#E8E6E1]'
                    }`} />
                    <span className="text-sm text-[#6B7280]">{competitor.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Risk Heatmap */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl text-[#212427] mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-[#6B7280]" />
              Risk Analysis
            </h2>

            <div className="bg-white rounded-xl border border-[#E8E6E1] p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-4 max-w-[500px] mx-auto mb-8">
                {/* High Impact / High Probability */}
                <div className="aspect-square bg-[#6B7280]/5 border-2 border-[#6B7280]/30 rounded-xl p-4 flex flex-col justify-between">
                  <div className="text-xs text-[#6B7280] font-semibold uppercase tracking-wider">
                    Critical
                  </div>
                  <div className="space-y-2">
                    {reportData.risks
                      .filter(r => r.impact === 'High' && r.probability === 'High')
                      .map((risk, i) => (
                        <div key={i} className="text-sm text-[#212427] bg-[#6B7280]/10 px-3 py-2 rounded-lg">
                          {risk.name}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Low Impact / High Probability */}
                <div className="aspect-square bg-[#6B7280]/5 border-2 border-[#6B7280]/20 rounded-xl p-4 flex flex-col justify-between">
                  <div className="text-xs text-[#6B7280] font-semibold uppercase tracking-wider">
                    Monitor
                  </div>
                  <div className="space-y-2">
                    {reportData.risks
                      .filter(r => r.impact === 'High' && r.probability === 'Medium')
                      .map((risk, i) => (
                        <div key={i} className="text-sm text-[#212427] bg-[#6B7280]/10 px-3 py-2 rounded-lg">
                          {risk.name}
                        </div>
                      ))}
                  </div>
                </div>

                {/* High Impact / Low Probability */}
                <div className="aspect-square bg-[#E8F4F1] border-2 border-[#0d5f4e]/30 rounded-xl p-4 flex flex-col justify-between">
                  <div className="text-xs text-[#0d5f4e] font-semibold uppercase tracking-wider">
                    Low Risk
                  </div>
                  <div className="space-y-2">
                    {reportData.risks
                      .filter(r => r.impact === 'Low')
                      .map((risk, i) => (
                        <div key={i} className="text-sm text-[#212427] bg-[#0d5f4e]/10 px-3 py-2 rounded-lg">
                          {risk.name}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Low Impact / Low Probability */}
                <div className="aspect-square bg-[#6B7280]/5 border-2 border-[#6B7280]/20 rounded-xl p-4 flex flex-col justify-between">
                  <div className="text-xs text-[#6B7280] font-semibold uppercase tracking-wider">
                    Watch
                  </div>
                  <div className="space-y-2">
                    {reportData.risks
                      .filter(r => r.impact === 'Medium' && r.probability === 'Medium')
                      .map((risk, i) => (
                        <div key={i} className="text-sm text-[#212427] bg-[#6B7280]/10 px-3 py-2 rounded-lg">
                          {risk.name}
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Axis Labels */}
              <div className="flex items-center justify-between text-xs text-[#6B7280] mb-2">
                <span>Low Probability</span>
                <span>High Probability</span>
              </div>
              <div className="flex items-center justify-center text-xs text-[#6B7280]">
                <span className="transform -rotate-90">Impact</span>
              </div>
            </div>
          </section>

          {/* Product Flow Diagram */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl text-[#212427] mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-[#0d5f4e]" />
              Product Journey
            </h2>

            <div className="bg-white rounded-xl border border-[#E8E6E1] p-8 overflow-x-auto shadow-sm">
              <div className="flex items-center gap-4 min-w-max">
                {['Intake', 'AI Process', 'Review', 'Execute', 'Track'].map((stage, i, arr) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex flex-col items-center gap-3">
                      <div className={`w-16 h-16 rounded-xl border-2 flex items-center justify-center ${
                        i === 1 ? 'border-[#0d5f4e] bg-[#E8F4F1]' :
                        i === 2 ? 'border-[#6b9d89] bg-[#E8F4F1]' :
                        'border-[#E8E6E1] bg-[#FAF9F7]'
                      }`}>
                        {i === 1 ? <Sparkles className="w-6 h-6 text-[#0d5f4e]" /> :
                         i === 2 ? <Users className="w-6 h-6 text-[#6b9d89]" /> :
                         i === 3 ? <Zap className="w-6 h-6 text-[#6B7280]" /> :
                         i === 4 ? <BarChart3 className="w-6 h-6 text-[#6B7280]" /> :
                         <Target className="w-6 h-6 text-[#6B7280]" />}
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-[#212427] mb-1">{stage}</div>
                        <div className="text-xs text-[#6B7280]">
                          {i === 1 ? 'AI Magic' :
                           i === 2 ? 'Human Check' :
                           i === 3 ? 'Workflow' :
                           i === 4 ? 'Metrics' :
                           'Manual'}
                        </div>
                      </div>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex items-center gap-1 text-[#E8E6E1]">
                        <div className="w-8 h-[2px] bg-[#E8E6E1]" />
                        <div className="w-2 h-2 border-t-2 border-r-2 border-[#E8E6E1] transform rotate-45" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-[#E8F4F1] to-white rounded-2xl border border-[#0d5f4e] p-8 text-center shadow-sm">
              <h3 className="font-serif text-2xl mb-3 text-[#212427]">
                Ready to Execute?
              </h3>
              <p className="text-[#6B7280] mb-6 max-w-md mx-auto">
                Transform this validation into a structured 90-day execution plan with AI-guided milestones.
              </p>
              <button
                onClick={() => onNavigate?.('90-day-plan')}
                className="px-8 py-3 bg-[#0d5f4e] text-white font-semibold rounded-lg hover:bg-[#0a4a3b] transition-all shadow-sm"
              >
                Start Execution Plan →
              </button>
            </div>
          </section>
        </main>

        {/* RIGHT INSIGHTS PANEL */}
        <aside className="hidden lg:block sticky top-[73px] w-80 h-[calc(100vh-73px)] border-l border-[#E8E6E1] overflow-y-auto bg-white">
          <div className="p-6 space-y-6">
            {/* AI Key Findings */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#6B7280] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#0d5f4e]" />
                Key Findings
              </div>
              <div className="bg-[#FAF9F7] rounded-xl border border-[#E8E6E1] p-4 space-y-3">
                <p className="text-sm text-[#212427] leading-relaxed">
                  This startup has <span className="text-[#0d5f4e] font-semibold">strong market validation</span> with proven demand in a growing segment.
                </p>
                <p className="text-sm text-[#212427] leading-relaxed">
                  Execution oversight needed due to <span className="text-[#6B7280] font-semibold">competitive intensity</span> and technical complexity.
                </p>
              </div>
            </div>

            {/* Risk Alerts */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#6B7280] uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                Risk Alerts
              </div>
              <div className="space-y-2">
                {reportData.risks.slice(0, 3).map((risk, i) => (
                  <div
                    key={i}
                    className="bg-[#FAF9F7] rounded-lg border border-[#E8E6E1] p-3 hover:border-[#6B7280] transition-all"
                  >
                    <div className="flex items-start gap-2">
                      <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0`} style={{ backgroundColor: risk.color }} />
                      <div className="flex-1">
                        <div className="text-sm text-[#212427] font-medium mb-1">{risk.name}</div>
                        <div className="text-xs text-[#6B7280]">
                          {risk.impact} Impact • {risk.probability} Probability
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assumptions */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#6B7280] uppercase tracking-wider">
                <Target className="w-4 h-4" />
                Key Assumptions
              </div>
              <div className="bg-[#FAF9F7] rounded-xl border border-[#E8E6E1] p-4 space-y-3">
                {[
                  { label: 'Conversion Rate', value: '5%' },
                  { label: 'Average Contract', value: '$50' },
                  { label: 'Customer LTV', value: '18 months' },
                ].map((assumption, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-[#6B7280]">{assumption.label}</span>
                    <span className="text-[#212427] font-medium">{assumption.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Actions */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0d5f4e] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                Next Actions
              </div>
              <div className="space-y-2">
                {[
                  'Hire product designer',
                  'Ship beta version',
                  'Run 20 user tests',
                ].map((action, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm text-[#212427]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0d5f4e] mt-1.5 flex-shrink-0" />
                    <span>{action}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2.5 bg-[#0d5f4e] text-white text-sm font-semibold rounded-lg hover:bg-[#0a4a3b] transition-colors">
                View Full Plan →
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* AI Trace Drawer */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E8E6E1] transition-transform duration-300 shadow-lg ${
        traceOpen ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-[#0d5f4e]" />
              <span className="font-semibold text-[#212427]">AI Analysis Trace</span>
            </div>
            <button
              onClick={() => setTraceOpen(false)}
              className="p-2 hover:bg-[#F5F3EF] rounded-lg transition-colors"
            >
              <ChevronDown className="w-5 h-5 text-[#6B7280]" />
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm text-[#6B7280] overflow-x-auto">
            <span>Market Agent: Analyzed 47 sources</span>
            <span className="text-[#E8E6E1]">→</span>
            <span>Competition Agent: Mapped 12 competitors</span>
            <span className="text-[#E8E6E1]">→</span>
            <span>Scoring Agent: Applied BCG framework</span>
            <span className="text-[#E8E6E1]">→</span>
            <span>Report Agent: Generated insights</span>
          </div>
        </div>
      </div>

      {/* Trace Toggle (when closed) */}
      {!traceOpen && (
        <button
          onClick={() => setTraceOpen(true)}
          className="fixed bottom-6 right-6 px-4 py-2 bg-white border border-[#E8E6E1] rounded-lg text-sm text-[#6B7280] hover:border-[#0d5f4e] hover:text-[#0d5f4e] transition-all flex items-center gap-2 shadow-lg"
        >
          <Database className="w-4 h-4" />
          View AI Trace
          <ChevronUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
