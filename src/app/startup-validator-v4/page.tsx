/**
 * Startup Validator V4 - Decision-First Report
 * 
 * Clean, scannable validation report following Idea Proof style:
 * - Sequential decision blocks (not data categories)
 * - Scan-first, expand-later
 * - One question at a time
 * - Decision tool, not document
 */

import { useState, useEffect } from 'react';
import {
  Home,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  ChevronDown,
  ChevronUp,
  Target,
  Zap,
  Share2,
  Download,
  Clock,
  ArrowRight,
  Sparkles,
  BarChart3,
  DollarSign,
  Shield,
  Map,
  Users,
  Lightbulb,
} from 'lucide-react';

interface ValidatorV4PageProps {
  onNavigate?: (page: string) => void;
}

export default function StartupValidatorV4Page({ onNavigate }: ValidatorV4PageProps) {
  const [loading, setLoading] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [validationData, setValidationData] = useState<any>(null);

  // Mock data for demo (replace with real API call)
  useEffect(() => {
    // Simulate loading validation data
    const mockData = {
      idea: {
        name: 'TaskFlow',
        tagline: 'Team Task Management',
        updatedAt: '2 hours ago',
      },
      verdict: {
        label: 'Worth Pursuing',
        score: 72,
        color: 'lightgreen',
        summary: 'Strong problem-solution fit with clear market demand. Execute with focus on SMB teams.',
      },
      tradeoffs: {
        strengths: [
          'Clear pain point validated',
          '15 interviews confirm need',
          'Simple solution resonates',
          'Team has relevant experience',
        ],
        concerns: [
          'Crowded market',
          'No mobile experience yet',
          'Pricing not fully validated',
          'Limited runway (8 months)',
        ],
      },
      confidence: {
        level: 'Medium-High',
        score: 75,
        signals: [
          { type: 'Interviews completed', count: '15/15', status: 'Done' },
          { type: 'Assumptions validated', count: '8/12', status: 'In Progress' },
          { type: 'Experiments run', count: '3/5', status: 'In Progress' },
          { type: 'Market data points', count: '12', status: 'Sufficient' },
        ],
      },
      actions: [
        { priority: 1, action: 'Validate $29 pricing', why: 'Highest risk assumption' },
        { priority: 2, action: 'Build mobile prototype', why: 'Top feature request' },
        { priority: 3, action: 'Close 5 more beta users', why: 'Need usage data' },
      ],
      evidence: {
        market: {
          score: 8,
          oneLine: '$12B TAM with 15% CAGR',
          tam: '$12B',
          sam: '$2.4B',
          som: '$24M',
          growthRate: '15% CAGR',
          keyTrend: 'Remote work adoption',
          competition: 'Fragmented, no clear leader in SMB',
          source: 'Gartner 2025, internal analysis',
        },
        problem: {
          score: 9,
          oneLine: '15/15 interviews confirm pain point',
          frequency: 'Daily pain for 90%',
          severity: '8.2/10 average',
          quotes: [
            { text: 'I spend 2 hours/day just tracking tasks', source: 'Sarah, PM at Acme' },
            { text: 'We lose things between Slack and email', source: 'Marcus, Founder' },
            { text: 'No visibility into team workload', source: 'Lisa, Team Lead' },
          ],
          alternativesTried: ['Asana (too complex)', 'Trello (too simple)'],
        },
        solution: {
          score: 7,
          oneLine: '5-min setup resonates, mobile gap',
          validated: 'Validated',
          setupTime: '4.2 min average',
          featureFit: '8/10 features map to pains',
          gap: 'Mobile experience missing',
          advantage: 'Simpler than Asana, richer than Trello',
        },
        businessModel: {
          score: 7,
          oneLine: '8.5x LTV/CAC, pricing needs validation',
          ltv: '$384',
          cac: '$45',
          ltvCac: '8.5x',
          payback: '1.5 months',
          pricing: '$29/mo',
          pricingStatus: 'Testing',
          grossMargin: '85%',
        },
        risks: {
          critical: [
            { risk: 'Pricing not validated', severity: 'High', mitigation: 'A/B test running' },
            { risk: 'Competitor may copy', severity: 'Medium', mitigation: 'Speed to market' },
            { risk: '8-month runway', severity: 'High', mitigation: 'Raise or revenue' },
          ],
        },
        roadmap: {
          status: 'On Track',
          oneLine: 'MVP in 8 weeks, beta in 12',
          milestones: [
            { milestone: 'MVP Complete', target: 'Week 8', status: 'On Track' },
            { milestone: 'Beta Launch', target: 'Week 12', status: 'Planned' },
            { milestone: 'First Revenue', target: 'Week 16', status: 'Planned' },
            { milestone: 'PMF Target', target: 'Week 24', status: 'Goal' },
          ],
        },
      },
    };

    setValidationData(mockData);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  const getVerdictColor = (color: string) => {
    const colors: Record<string, string> = {
      green: 'bg-[#0D5F4E] text-white',
      lightgreen: 'bg-[#6B9D89] text-white',
      yellow: 'bg-[#FFB84D] text-[#2D2D2D]',
      orange: 'bg-[#FF8C00] text-white',
      red: 'bg-[#DC2626] text-white',
    };
    return colors[color] || colors.lightgreen;
  };

  const getConfidenceBarWidth = (score: number) => {
    return `${score}%`;
  };

  if (!validationData) {
    return (
      <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center">
        <div className="text-center">
          <Sparkles className="w-12 h-12 text-[#0D5F4E] mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Loading validation report...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header Bar */}
      <header className="bg-white border-b-2 border-[#E8E6E1] sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              {onNavigate && (
                <button
                  onClick={() => onNavigate('home-v5')}
                  className="text-[#0D5F4E] hover:text-[#0a4a3c] transition-colors"
                >
                  <Home className="w-5 h-5" />
                </button>
              )}
              <div>
                <h1 className="font-serif text-2xl text-[#2D2D2D]">
                  {validationData.idea.name}
                </h1>
                <p className="text-sm text-[#A3A3A3]">{validationData.idea.tagline}</p>
              </div>
              <div className={`px-4 py-1.5 rounded-full ${getVerdictColor(validationData.verdict.color)}`}>
                <span className="text-sm font-medium">{validationData.verdict.label}</span>
              </div>
              <div className="text-sm text-[#A3A3A3] flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Updated {validationData.idea.updatedAt}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-sm text-[#0D5F4E] hover:bg-[#F5F3EF] rounded-lg transition-colors flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="px-4 py-2 text-sm text-[#0D5F4E] hover:bg-[#F5F3EF] rounded-lg transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        {/* Block 1 - Verdict */}
        <section className="bg-white border-2 border-[#E8E6E1] rounded-lg p-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-3 mb-2">
              <div className="text-6xl font-light text-[#0D5F4E]">{validationData.verdict.score}</div>
              <div className="text-2xl text-[#A3A3A3]">/ 100</div>
            </div>
            <div className={`inline-block px-6 py-2 rounded-full ${getVerdictColor(validationData.verdict.color)}`}>
              <span className="text-lg font-medium">{validationData.verdict.label}</span>
            </div>
            <p className="text-lg text-[#2D2D2D] max-w-2xl mx-auto leading-relaxed">
              {validationData.verdict.summary}
            </p>
          </div>
        </section>

        {/* Block 2 - Tradeoffs */}
        <section className="bg-white border-2 border-[#E8E6E1] rounded-lg p-8">
          <h2 className="font-serif text-2xl text-[#2D2D2D] mb-6 text-center">
            What are the tradeoffs?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Strengths */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-[#0D5F4E] font-medium flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Strengths
              </h3>
              <ul className="space-y-3">
                {validationData.tradeoffs.strengths.map((strength: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0D5F4E] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#2D2D2D]">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Concerns */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-[#FFB84D] font-medium flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Concerns
              </h3>
              <ul className="space-y-3">
                {validationData.tradeoffs.concerns.map((concern: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#FFB84D] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#2D2D2D]">{concern}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Block 3 - Confidence */}
        <section className="bg-white border-2 border-[#E8E6E1] rounded-lg p-8">
          <h2 className="font-serif text-2xl text-[#2D2D2D] mb-6 text-center">
            How confident is this assessment?
          </h2>
          <div className="space-y-6">
            {/* Confidence Bar */}
            <div className="text-center">
              <div className="text-xl font-medium text-[#0D5F4E] mb-2">
                {validationData.confidence.level}
              </div>
              <div className="text-3xl font-light text-[#2D2D2D] mb-4">
                {validationData.confidence.score}%
              </div>
              <div className="max-w-md mx-auto h-3 bg-[#F5F3EF] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0D5F4E] transition-all duration-500"
                  style={{ width: getConfidenceBarWidth(validationData.confidence.score) }}
                />
              </div>
              <div className="flex justify-between text-xs text-[#A3A3A3] mt-2 max-w-md mx-auto">
                <span>Low (0-40%)</span>
                <span>Medium (40-70%)</span>
                <span>High (70-100%)</span>
              </div>
            </div>

            {/* Signal Summary - Collapsible */}
            <div className="border-t border-[#E8E6E1] pt-6">
              <button
                onClick={() => toggleSection('signals')}
                className="w-full flex items-center justify-between text-left hover:bg-[#FAFAF8] px-4 py-2 rounded-lg transition-colors"
              >
                <span className="text-sm font-medium text-[#2D2D2D]">Signal Details</span>
                {expandedSections.includes('signals') ? (
                  <ChevronUp className="w-5 h-5 text-[#A3A3A3]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#A3A3A3]" />
                )}
              </button>
              {expandedSections.includes('signals') && (
                <div className="mt-4 space-y-3">
                  {validationData.confidence.signals.map((signal: any, i: number) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="text-[#696969]">{signal.type}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-[#2D2D2D] font-medium">{signal.count}</span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            signal.status === 'Done'
                              ? 'bg-[#E8F5F1] text-[#0D5F4E]'
                              : signal.status === 'In Progress'
                              ? 'bg-[#FFF4E6] text-[#FFB84D]'
                              : 'bg-[#F5F3EF] text-[#A3A3A3]'
                          }`}
                        >
                          {signal.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Block 4 - Next Actions */}
        <section className="bg-white border-2 border-[#E8E6E1] rounded-lg p-8">
          <h2 className="font-serif text-2xl text-[#2D2D2D] mb-6 text-center">
            What should I do next?
          </h2>
          <div className="space-y-4">
            {validationData.actions.map((action: any) => (
              <div
                key={action.priority}
                className="flex items-start gap-4 p-4 border-2 border-[#E8E6E1] rounded-lg hover:border-[#0D5F4E] hover:bg-[#FAFAF8] transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-[#0D5F4E] text-white flex items-center justify-center font-medium flex-shrink-0">
                  {action.priority}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-[#2D2D2D] mb-1">{action.action}</h3>
                  {action.why && <p className="text-sm text-[#A3A3A3]">{action.why}</p>}
                </div>
                <button className="text-[#0D5F4E] opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Block 5 - Evidence (Expandable Sections) */}
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-[#2D2D2D] mb-6 text-center">
            Show me the proof
          </h2>

          {/* Market */}
          <EvidenceSection
            title="Market"
            score={validationData.evidence.market.score}
            oneLine={validationData.evidence.market.oneLine}
            icon={<BarChart3 className="w-5 h-5" />}
            isExpanded={expandedSections.includes('market')}
            onToggle={() => toggleSection('market')}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">TAM</label>
                <p className="text-lg font-medium text-[#2D2D2D]">{validationData.evidence.market.tam}</p>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">SAM</label>
                <p className="text-lg font-medium text-[#2D2D2D]">{validationData.evidence.market.sam}</p>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">SOM</label>
                <p className="text-lg font-medium text-[#2D2D2D]">{validationData.evidence.market.som}</p>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">Growth Rate</label>
                <p className="text-lg font-medium text-[#2D2D2D]">{validationData.evidence.market.growthRate}</p>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">Key Trend</label>
                <p className="text-[#2D2D2D]">{validationData.evidence.market.keyTrend}</p>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">Competition</label>
                <p className="text-[#2D2D2D]">{validationData.evidence.market.competition}</p>
              </div>
            </div>
          </EvidenceSection>

          {/* Problem */}
          <EvidenceSection
            title="Problem"
            score={validationData.evidence.problem.score}
            oneLine={validationData.evidence.problem.oneLine}
            icon={<Target className="w-5 h-5" />}
            isExpanded={expandedSections.includes('problem')}
            onToggle={() => toggleSection('problem')}
          >
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">Frequency</label>
                  <p className="text-[#2D2D2D]">{validationData.evidence.problem.frequency}</p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">Severity</label>
                  <p className="text-[#2D2D2D]">{validationData.evidence.problem.severity}</p>
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-2">Customer Quotes</label>
                <div className="space-y-3">
                  {validationData.evidence.problem.quotes.map((quote: any, i: number) => (
                    <div key={i} className="bg-[#F5F3EF] p-4 rounded-lg border-l-4 border-[#0D5F4E]">
                      <p className="text-[#2D2D2D] italic mb-2">"{quote.text}"</p>
                      <p className="text-sm text-[#A3A3A3]">— {quote.source}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">Alternatives Tried</label>
                <div className="flex flex-wrap gap-2">
                  {validationData.evidence.problem.alternativesTried.map((alt: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-[#F5F3EF] text-[#2D2D2D] rounded-full text-sm">
                      {alt}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </EvidenceSection>

          {/* Solution */}
          <EvidenceSection
            title="Solution"
            score={validationData.evidence.solution.score}
            oneLine={validationData.evidence.solution.oneLine}
            icon={<Lightbulb className="w-5 h-5" />}
            isExpanded={expandedSections.includes('solution')}
            onToggle={() => toggleSection('solution')}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">Validation Status</label>
                <p className="text-[#2D2D2D]">{validationData.evidence.solution.validated}</p>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">Setup Time</label>
                <p className="text-[#2D2D2D]">{validationData.evidence.solution.setupTime}</p>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">Feature-Problem Fit</label>
                <p className="text-[#2D2D2D]">{validationData.evidence.solution.featureFit}</p>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">Gap Identified</label>
                <p className="text-[#2D2D2D]">{validationData.evidence.solution.gap}</p>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">Competitive Advantage</label>
                <p className="text-[#2D2D2D]">{validationData.evidence.solution.advantage}</p>
              </div>
            </div>
          </EvidenceSection>

          {/* Business Model */}
          <EvidenceSection
            title="Business Model"
            score={validationData.evidence.businessModel.score}
            oneLine={validationData.evidence.businessModel.oneLine}
            icon={<DollarSign className="w-5 h-5" />}
            isExpanded={expandedSections.includes('business')}
            onToggle={() => toggleSection('business')}
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">LTV</label>
                <p className="text-lg font-medium text-[#2D2D2D]">{validationData.evidence.businessModel.ltv}</p>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">CAC</label>
                <p className="text-lg font-medium text-[#2D2D2D]">{validationData.evidence.businessModel.cac}</p>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">LTV/CAC</label>
                <p className="text-lg font-medium text-[#0D5F4E]">{validationData.evidence.businessModel.ltvCac}</p>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">Payback</label>
                <p className="text-[#2D2D2D]">{validationData.evidence.businessModel.payback}</p>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">Pricing</label>
                <p className="text-[#2D2D2D]">{validationData.evidence.businessModel.pricing}</p>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A3A3A3] block mb-1">Pricing Status</label>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs ${
                    validationData.evidence.businessModel.pricingStatus === 'Validated'
                      ? 'bg-[#E8F5F1] text-[#0D5F4E]'
                      : 'bg-[#FFF4E6] text-[#FFB84D]'
                  }`}
                >
                  {validationData.evidence.businessModel.pricingStatus}
                </span>
              </div>
            </div>
          </EvidenceSection>

          {/* Risks */}
          <EvidenceSection
            title="Risks"
            score={validationData.evidence.risks.critical.length}
            oneLine={`${validationData.evidence.risks.critical.length} critical risks identified`}
            icon={<Shield className="w-5 h-5" />}
            isExpanded={expandedSections.includes('risks')}
            onToggle={() => toggleSection('risks')}
            scoreLabel="risks"
          >
            <div className="space-y-3">
              {validationData.evidence.risks.critical.map((risk: any, i: number) => (
                <div key={i} className="p-4 bg-[#FFF4E6] border-l-4 border-[#FFB84D] rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-[#2D2D2D]">{risk.risk}</h4>
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        risk.severity === 'High'
                          ? 'bg-[#DC2626] text-white'
                          : risk.severity === 'Medium'
                          ? 'bg-[#FFB84D] text-white'
                          : 'bg-[#6B9D89] text-white'
                      }`}
                    >
                      {risk.severity}
                    </span>
                  </div>
                  <p className="text-sm text-[#696969]">
                    <span className="font-medium">Mitigation:</span> {risk.mitigation}
                  </p>
                </div>
              ))}
            </div>
          </EvidenceSection>

          {/* Roadmap */}
          <EvidenceSection
            title="Roadmap"
            score={validationData.evidence.roadmap.milestones.length}
            oneLine={validationData.evidence.roadmap.oneLine}
            icon={<Map className="w-5 h-5" />}
            isExpanded={expandedSections.includes('roadmap')}
            onToggle={() => toggleSection('roadmap')}
            scoreLabel="milestones"
          >
            <div className="space-y-3">
              {validationData.evidence.roadmap.milestones.map((milestone: any, i: number) => (
                <div key={i} className="flex items-center justify-between p-3 bg-[#FAFAF8] rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-[#2D2D2D]">{milestone.milestone}</p>
                    <p className="text-sm text-[#A3A3A3]">{milestone.target}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      milestone.status === 'Done'
                        ? 'bg-[#E8F5F1] text-[#0D5F4E]'
                        : milestone.status === 'On Track'
                        ? 'bg-[#E8F5F1] text-[#0D5F4E]'
                        : milestone.status === 'At Risk'
                        ? 'bg-[#FFF4E6] text-[#FFB84D]'
                        : 'bg-[#F5F3EF] text-[#A3A3A3]'
                    }`}
                  >
                    {milestone.status}
                  </span>
                </div>
              ))}
            </div>
          </EvidenceSection>
        </section>
      </main>
    </div>
  );
}

// Evidence Section Component
interface EvidenceSectionProps {
  title: string;
  score: number;
  oneLine: string;
  icon: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  scoreLabel?: string;
}

function EvidenceSection({
  title,
  score,
  oneLine,
  icon,
  isExpanded,
  onToggle,
  children,
  scoreLabel = '10',
}: EvidenceSectionProps) {
  return (
    <div className="bg-white border-2 border-[#E8E6E1] rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#FAFAF8] transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#F5F3EF] flex items-center justify-center text-[#0D5F4E]">
            {icon}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-3">
              <h3 className="font-medium text-[#2D2D2D]">{title}</h3>
              <span className="px-3 py-1 bg-[#0D5F4E] text-white rounded-full text-xs font-medium">
                {score}/{scoreLabel}
              </span>
            </div>
            <p className="text-sm text-[#A3A3A3] mt-1">{oneLine}</p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-[#A3A3A3] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#A3A3A3] flex-shrink-0" />
        )}
      </button>
      {isExpanded && (
        <div className="px-6 py-4 border-t-2 border-[#E8E6E1] bg-[#FAFAF8]">{children}</div>
      )}
    </div>
  );
}
