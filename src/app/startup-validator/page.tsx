import { useState } from 'react';
import { 
  Home,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronUp,
  Target,
  Users,
  Zap,
  Shield,
  Rocket,
  BarChart3,
  PieChart,
  Activity,
  Sparkles,
  FileText,
  RefreshCw,
  Plus,
  ArrowRight,
  Brain,
  Search,
  DollarSign,
  Globe
} from 'lucide-react';

interface ScoreCard {
  id: string;
  title: string;
  score: number;
  maxScore: number;
  description: string;
  recommendation: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'stable';
}

interface InsightCard {
  id: string;
  type: 'market' | 'risk' | 'opportunity';
  title: string;
  content: string;
  details?: string;
  confidence: number;
}

interface EvidenceItem {
  id: string;
  title: string;
  status: 'complete' | 'partial' | 'missing';
  priority: 'high' | 'medium' | 'low';
}

interface ActionItem {
  id: string;
  title: string;
  priority: 'high' | 'medium' | 'low';
  effort: string;
  impact: string;
  category: string;
}

export default function StartupValidatorPage() {
  const [expandedInsight, setExpandedInsight] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'market' | 'problem' | 'solution' | 'risk' | 'next-steps'>('overview');

  const handleNavigate = (route: string) => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: route }));
  };

  const overallScore = 72;
  const verdict = "Promising, needs refinement";

  const scorecards: ScoreCard[] = [
    {
      id: 'problem',
      title: 'Problem Clarity',
      score: 78,
      maxScore: 100,
      description: 'Problem exists and is painful, but customer segment is too broad.',
      recommendation: 'Narrow your ICP to a specific founder segment (e.g., non-technical founders in pre-seed)',
      icon: <Target className="w-5 h-5" />,
      trend: 'stable'
    },
    {
      id: 'market',
      title: 'Market Size',
      score: 74,
      maxScore: 100,
      description: 'Large market, competitive. Differentiation required.',
      recommendation: 'Focus on a specific vertical or founder type to establish initial market position',
      icon: <Globe className="w-5 h-5" />,
      trend: 'up'
    },
    {
      id: 'solution',
      title: 'Solution Fit',
      score: 70,
      maxScore: 100,
      description: 'Solution addresses the problem but needs clearer wedge.',
      recommendation: 'Define your unique wedge: What do you do 10x better than alternatives?',
      icon: <Zap className="w-5 h-5" />,
      trend: 'stable'
    },
    {
      id: 'differentiation',
      title: 'Differentiation',
      score: 62,
      maxScore: 100,
      description: 'Risk of "AI-powered but generic" positioning.',
      recommendation: 'Develop distinct positioning: "AI startup OS" vs "AI idea validator"',
      icon: <Sparkles className="w-5 h-5" />,
      trend: 'down'
    },
    {
      id: 'execution',
      title: 'Execution Readiness',
      score: 76,
      maxScore: 100,
      description: 'Strong potential once ICP and GTM are defined.',
      recommendation: 'Complete customer discovery interviews and define initial GTM strategy',
      icon: <Rocket className="w-5 h-5" />,
      trend: 'up'
    }
  ];

  const insights: InsightCard[] = [
    {
      id: 'market',
      type: 'market',
      title: 'Market Insight',
      content: 'Many tools validate ideas, few drive execution.',
      details: 'The market is saturated with idea validation tools, but there\'s a clear gap in tools that help founders move from validation to execution. Position StartupAI as a comprehensive "startup operating system" rather than just another validation tool.',
      confidence: 84
    },
    {
      id: 'risk',
      type: 'risk',
      title: 'Risk Insight',
      content: 'Competing with generic AI tools without vertical focus.',
      details: 'Generic AI-powered tools struggle to differentiate. Your biggest risk is being perceived as "yet another AI wrapper." Consider focusing on a specific founder segment (e.g., technical founders, solo founders, accelerator participants) to build strong initial traction.',
      confidence: 76
    },
    {
      id: 'opportunity',
      type: 'opportunity',
      title: 'Opportunity Insight',
      content: 'Accelerators and incubators as early distribution channel.',
      details: 'Accelerators need structured validation frameworks for their cohorts. Partner with 2-3 accelerators to validate your approach and build case studies. This creates a direct distribution channel to high-intent founders.',
      confidence: 88
    }
  ];

  const evidence: EvidenceItem[] = [
    {
      id: 'interviews',
      title: 'Customer interviews',
      status: 'missing',
      priority: 'high'
    },
    {
      id: 'landing',
      title: 'Landing page test',
      status: 'missing',
      priority: 'high'
    },
    {
      id: 'competitor',
      title: 'Competitor analysis',
      status: 'partial',
      priority: 'medium'
    },
    {
      id: 'pricing',
      title: 'Pricing hypothesis',
      status: 'missing',
      priority: 'high'
    },
    {
      id: 'mvp',
      title: 'MVP scope definition',
      status: 'partial',
      priority: 'medium'
    }
  ];

  const actions: ActionItem[] = [
    {
      id: 'icp',
      title: 'Narrow ICP to a single founder segment',
      priority: 'high',
      effort: '2-3 hours',
      impact: 'High',
      category: 'Strategy'
    },
    {
      id: 'willingness',
      title: 'Validate willingness to pay',
      priority: 'high',
      effort: '1 week',
      impact: 'High',
      category: 'Validation'
    },
    {
      id: 'competitors',
      title: 'Analyze top 5 competitors',
      priority: 'medium',
      effort: '4-6 hours',
      impact: 'Medium',
      category: 'Research'
    },
    {
      id: 'positioning',
      title: 'Draft positioning statement',
      priority: 'medium',
      effort: '2 hours',
      impact: 'High',
      category: 'Strategy'
    },
    {
      id: 'interviews',
      title: 'Conduct 10 customer interviews',
      priority: 'high',
      effort: '2 weeks',
      impact: 'High',
      category: 'Validation'
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-[#0d5f4e]';
    if (score >= 60) return 'text-[#6b9d89]';
    return 'text-gray-700';
  };

  const getScoreBarColor = (score: number) => {
    if (score >= 80) return 'bg-[#0d5f4e]';
    if (score >= 60) return 'bg-[#6b9d89]';
    return 'bg-gray-400';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete': return <CheckCircle2 className="w-4 h-4 text-[#0d5f4e]" />;
      case 'partial': return <Circle className="w-4 h-4 text-[#6b9d89] fill-[#6b9d89]/20" />;
      case 'missing': return <Circle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-gray-900/5 text-gray-900 border-gray-900/20';
      case 'medium': return 'bg-[#6b9d89]/10 text-[#6b9d89] border-[#6b9d89]/30';
      case 'low': return 'bg-gray-500/10 text-gray-600 border-gray-500/30';
    }
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'market': return <TrendingUp className="w-5 h-5 text-gray-700" />;
      case 'risk': return <AlertTriangle className="w-5 h-5 text-gray-900" />;
      case 'opportunity': return <Sparkles className="w-5 h-5 text-[#0d5f4e]" />;
    }
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'market': return 'from-gray-500/10 to-gray-500/5 border-gray-200';
      case 'risk': return 'from-gray-900/10 to-gray-900/5 border-gray-300';
      case 'opportunity': return 'from-[#0d5f4e]/10 to-[#0d5f4e]/5 border-[#0d5f4e]/20';
    }
  };

  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-[#0d5f4e]" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-gray-600" />;
      case 'stable': return <Activity className="w-4 h-4 text-gray-400" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <h1 className="text-5xl lg:text-6xl font-serif text-gray-900">Startup Validator</h1>
                <div className="flex items-center gap-3 px-6 py-2 bg-gradient-to-r from-[#0D5F4E]/10 to-[#0D5F4E]/5 rounded-sm border border-[#0D5F4E]/20">
                  <span className="text-sm font-sans text-gray-600">Overall Score</span>
                  <span className={`text-3xl font-light font-sans ${getScoreColor(overallScore)}`}>
                    {overallScore}/100
                  </span>
                </div>
              </div>
              <p className="text-lg text-gray-600 font-sans flex items-center gap-2">
                <Brain className="w-5 h-5 text-[#0D5F4E]" />
                {verdict}
              </p>
            </div>
            <button
              onClick={() => handleNavigate('home')}
              className="px-6 py-3 bg-transparent border border-gray-300 text-gray-700 rounded-sm hover:border-[#0D5F4E] hover:text-[#0D5F4E] transition-all duration-200 flex items-center gap-2 font-sans"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-8 mt-8 border-b border-gray-200">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'market', label: 'Market' },
              { id: 'problem', label: 'Problem' },
              { id: 'solution', label: 'Solution' },
              { id: 'risk', label: 'Risk' },
              { id: 'next-steps', label: 'Next Steps' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-4 px-2 text-sm font-sans transition-all duration-200 relative ${
                  activeTab === tab.id
                    ? 'text-[#0D5F4E] font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D5F4E]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - 3 Panel Layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-12 gap-6">
          {/* LEFT PANEL - Startup Context */}
          <div className="col-span-3 space-y-6">
            {/* Startup Info Card */}
            <div className="bg-white rounded-sm border border-gray-200 p-6">
              <h3 className="text-sm font-sans font-medium text-gray-600 mb-4 uppercase tracking-wider">Startup Context</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Startup Name</label>
                  <div className="font-medium text-gray-900">StartupAI</div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-1 block">One-Line Description</label>
                  <div className="text-sm text-gray-700 leading-relaxed">
                    AI operating system that validates startup ideas and turns them into execution plans.
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Industry</label>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#0D5F4E]/10 text-[#0D5F4E] text-xs rounded-full">
                      SaaS
                    </span>
                    <span className="px-3 py-1 bg-[#6b9d89]/10 text-[#6b9d89] text-xs rounded-full">
                      AI
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Target Customer</label>
                  <div className="text-sm text-gray-700">Early-stage founders</div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Stage</label>
                  <div className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full inline-block">
                    Idea / Pre-Seed
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-sm border border-gray-200 p-6">
              <h3 className="text-sm font-sans font-medium text-gray-600 mb-4 uppercase tracking-wider">Quick Stats</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Avg. Score</span>
                  <span className="text-lg font-light text-gray-900">72%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Strengths</span>
                  <span className="text-lg font-light text-[#0d5f4e]">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Risks</span>
                  <span className="text-lg font-light text-gray-700">2</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Action Items</span>
                  <span className="text-lg font-light text-[#0D5F4E]">{actions.length}</span>
                </div>
              </div>
            </div>

            {/* Evidence Status */}
            <div className="bg-white rounded-sm border border-gray-200 p-6">
              <h3 className="text-sm font-sans font-medium text-gray-600 mb-4 uppercase tracking-wider">Evidence Status</h3>
              
              <div className="space-y-3">
                {evidence.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(item.status)}
                      <span className="text-xs text-gray-700">{item.title}</span>
                    </div>
                    {item.priority === 'high' && (
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Complete
                </div>
                <div className="flex items-center gap-1">
                  <Circle className="w-3 h-3 fill-[#6b9d89]/20 text-[#6b9d89]" />
                  Partial
                </div>
                <div className="flex items-center gap-1">
                  <Circle className="w-3 h-3" />
                  Missing
                </div>
              </div>
            </div>
          </div>

          {/* CENTER PANEL - Validation Intelligence */}
          <div className="col-span-6 space-y-6">
            {/* Overall Assessment */}
            <div className="bg-gradient-to-br from-[#0D5F4E]/5 to-white rounded-2xl border border-[#0D5F4E]/20 p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-medium text-gray-900 mb-2">Overall Validation</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Strong problem and market signal.<br />
                    Main weaknesses: ICP clarity and GTM focus.
                  </p>
                </div>
                
                {/* Score Gauge */}
                <div className="relative">
                  <svg width="120" height="120" className="transform -rotate-90">
                    {/* Background circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="10"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke={overallScore >= 80 ? '#0d5f4e' : overallScore >= 60 ? '#6b9d89' : '#6B7280'}
                      strokeWidth="10"
                      strokeDasharray={`${(overallScore / 100) * 314} 314`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-light text-gray-900">{overallScore}</span>
                    <span className="text-xs text-gray-500">/ 100</span>
                  </div>
                </div>
              </div>

              {/* Mini Progress Bars */}
              <div className="grid grid-cols-5 gap-3">
                {scorecards.map((card) => (
                  <div key={card.id} className="text-center">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                      <div 
                        className={`h-full ${getScoreBarColor(card.score)} transition-all`}
                        style={{ width: `${card.score}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-600 mb-1">{card.title.split(' ')[0]}</div>
                    <div className={`text-sm font-medium ${getScoreColor(card.score)}`}>
                      {card.score}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Validation Report - Executive Summary & Signals */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-600 px-1">Validation Report</h3>
              
              {/* Executive Summary - Primary Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0d5f4e]/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-[#0d5f4e]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-sans uppercase tracking-wider text-gray-500 mb-2">Executive Summary</h4>
                    <p className="text-2xl font-serif text-[#0d5f4e] mb-4">Strong Opportunity</p>
                    <p className="text-base text-gray-700 leading-relaxed mb-3">
                      The startup AI market shows strong growth potential and clear founder pain points. Your positioning addresses real needs in the early-stage ecosystem with a comprehensive approach.
                    </p>
                    <p className="text-sm text-gray-600 italic leading-relaxed">
                      Focus on validating product-market fit through pilot partnerships with accelerators and early customer interviews to refine ICP.
                    </p>
                  </div>
                </div>

                {/* Key Recommendations */}
                <div className="border-t border-gray-100 pt-6">
                  <h5 className="text-xs font-sans uppercase tracking-wider text-gray-500 mb-4">Key Recommendations</h5>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0d5f4e] text-white text-xs font-medium flex-shrink-0">1</span>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <span className="font-medium text-gray-900">Focus on B2B partnerships</span> with accelerators and incubators as initial distribution channel
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0d5f4e] text-white text-xs font-medium flex-shrink-0">2</span>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <span className="font-medium text-gray-900">Consider a freemium model</span> with advanced AI features in paid tiers to attract early users
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0d5f4e] text-white text-xs font-medium flex-shrink-0">3</span>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <span className="font-medium text-gray-900">Run targeted validation campaigns</span> with 20-30 founder interviews to confirm pain points and willingness to pay
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Validation Scorecard - 3 Cards */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {/* Problem Validation */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-sans uppercase tracking-wider text-gray-600">Problem Validation</h4>
                    <Target className="w-4 h-4 text-[#0d5f4e]" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-3xl font-light text-[#0d5f4e]">80</span>
                      <span className="text-sm text-gray-400">/ 100</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#0d5f4e] rounded-full" style={{ width: '80%' }} />
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Clear founder pain points validated across multiple sources and research.
                  </p>
                </div>

                {/* Solution Validation */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-sans uppercase tracking-wider text-gray-600">Solution Validation</h4>
                    <Zap className="w-4 h-4 text-[#0d5f4e]" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-3xl font-light text-[#0d5f4e]">75</span>
                      <span className="text-sm text-gray-400">/ 100</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#0d5f4e] rounded-full" style={{ width: '75%' }} />
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Comprehensive approach addresses full founder journey from idea to execution.
                  </p>
                </div>

                {/* Market Validation */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-sans uppercase tracking-wider text-gray-600">Market Validation</h4>
                    <TrendingUp className="w-4 h-4 text-[#6b9d89]" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-3xl font-light text-[#6b9d89]">70</span>
                      <span className="text-sm text-gray-400">/ 100</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#6b9d89] rounded-full" style={{ width: '70%' }} />
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Market growth projections support demand for AI solutions in startup ecosystem.
                  </p>
                </div>
              </div>

              {/* Key Strengths & Areas of Concern */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                {/* Key Strengths */}
                <div className="bg-gradient-to-br from-[#0d5f4e]/5 to-white rounded-2xl border border-[#0d5f4e]/20 p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <CheckCircle2 className="w-5 h-5 text-[#0d5f4e]" />
                    <h4 className="text-sm font-sans font-medium text-gray-900">Key Strengths</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700 leading-relaxed">
                        The AI startup tools market shows strong growth with increasing founder adoption of AI-powered productivity platforms.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700 leading-relaxed">
                        StartupAI addresses a critical pain point by connecting strategy to daily execution in a single guided flow.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700 leading-relaxed">
                        AI-assisted planning and execution tracking significantly enhance founder productivity and clarity.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700 leading-relaxed">
                        The platform aligns with increasing AI adoption, with founders actively seeking comprehensive operating systems.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Areas of Concern */}
                <div className="bg-gradient-to-br from-gray-900/5 to-white rounded-2xl border border-gray-300 p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <AlertTriangle className="w-5 h-5 text-gray-900" />
                    <h4 className="text-sm font-sans font-medium text-gray-900">Areas of Concern</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-3 h-3 border-2 border-gray-900 rounded-sm flex items-center justify-center">
                          <div className="w-1.5 h-0.5 bg-gray-900" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        The competitive landscape includes established players like Notion, Asana, and specialized founder tools, making differentiation critical.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-3 h-3 border-2 border-gray-900 rounded-sm flex items-center justify-center">
                          <div className="w-1.5 h-0.5 bg-gray-900" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Lack of precise TAM/SAM figures for AI-powered startup operating systems limits revenue forecasting accuracy.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-3 h-3 border-2 border-gray-900 rounded-sm flex items-center justify-center">
                          <div className="w-1.5 h-0.5 bg-gray-900" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Integrating AI into complex founder workflows may require significant technical expertise and resources, potentially delaying MVP launch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signal Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Green Lights - Strengths */}
                <div className="bg-gradient-to-br from-[#0d5f4e]/10 to-[#6b9d89]/5 rounded-2xl border border-[#0d5f4e]/20 p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-[#0d5f4e] flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xs font-sans uppercase tracking-wider text-[#0d5f4e] font-medium">Green Lights</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Strong market growth with AI/SaaS adoption at all-time high
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Clear founder pain points validated across multiple sources
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Comprehensive approach addresses full founder journey
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Execution-focused positioning differentiates from idea validators
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Yellow + Red */}
                <div className="space-y-4">
                  {/* Yellow Lights - Caution */}
                  <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl border border-gray-300 p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xs font-sans uppercase tracking-wider text-gray-700 font-medium">Yellow Lights</h4>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Product differentiation not yet fully defined vs. existing tools
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Pricing strategy needs validation through market testing
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Go-to-market channel clarity requires customer research
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Red Flags - Risk */}
                  <div className="bg-gradient-to-br from-gray-900/10 to-gray-900/5 rounded-2xl border border-gray-900/20 p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xs font-sans uppercase tracking-wider text-gray-900 font-medium">Red Flags</h4>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-900 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <div className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          High competition from established players in founder tools space
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-900 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <div className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Risk of "AI-powered but generic" positioning without clear wedge
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scorecards */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-600 px-1">Validation Breakdown</h3>
              
              {scorecards.map((card) => (
                <div 
                  key={card.id}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        card.score >= 80 ? 'bg-[#0d5f4e]/10 text-[#0d5f4e]' :
                        card.score >= 60 ? 'bg-[#6b9d89]/10 text-[#6b9d89]' :
                        'bg-gray-200 text-gray-700'
                      }`}>
                        {card.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{card.title}</h4>
                        <p className="text-xs text-gray-500 mt-0.5">{card.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {getTrendIcon(card.trend)}
                      <span className={`text-2xl font-light ${getScoreColor(card.score)}`}>
                        {card.score}
                      </span>
                      <span className="text-sm text-gray-400">/100</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getScoreBarColor(card.score)} transition-all`}
                        style={{ width: `${card.score}%` }}
                      />
                    </div>
                  </div>

                  {/* Recommendation */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-[#0D5F4E] mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-gray-700 leading-relaxed">
                        <span className="font-medium text-gray-900">Recommendation:</span> {card.recommendation}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Insight Cards */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-600 px-1">AI Insights</h3>
              
              {insights.map((insight) => (
                <div 
                  key={insight.id}
                  className={`bg-gradient-to-br ${getInsightColor(insight.type)} rounded-2xl border p-6`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center">
                        {getInsightIcon(insight.type)}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{insight.title}</h4>
                        <p className="text-sm text-gray-700 mt-1">{insight.content}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full">
                      <span className="text-xs text-gray-600">Confidence</span>
                      <span className="text-sm font-medium text-gray-900">{insight.confidence}%</span>
                    </div>
                  </div>

                  {insight.details && (
                    <>
                      <button
                        onClick={() => setExpandedInsight(expandedInsight === insight.id ? null : insight.id)}
                        className="text-sm text-[#0D5F4E] hover:text-[#0a4a3b] transition-colors flex items-center gap-1 mt-3"
                      >
                        {expandedInsight === insight.id ? (
                          <>
                            <ChevronUp className="w-4 h-4" />
                            Show less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4" />
                            Learn more
                          </>
                        )}
                      </button>

                      {expandedInsight === insight.id && (
                        <div className="mt-3 pt-3 border-t border-gray-200/50">
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {insight.details}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL - AI Actions */}
          <div className="col-span-3 space-y-6">
            {/* Action Buttons */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-[#0D5F4E] text-white rounded-lg hover:bg-[#0a4a3b] transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                  <Plus className="w-4 h-4" />
                  Create Validation Tasks
                </button>

                <button className="w-full px-4 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-lg hover:border-[#0D5F4E] hover:text-[#0D5F4E] transition-all flex items-center justify-center gap-2 text-sm font-medium">
                  <FileText className="w-4 h-4" />
                  Generate Lean Canvas
                </button>

                <button className="w-full px-4 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-lg hover:border-[#0D5F4E] hover:text-[#0D5F4E] transition-all flex items-center justify-center gap-2 text-sm font-medium">
                  <Target className="w-4 h-4" />
                  Refine Problem Statement
                </button>

                <button className="w-full px-4 py-3 bg-gradient-to-r from-[#6b9d89]/10 to-[#0d5f4e]/10 border border-[#0d5f4e]/20 text-[#0d5f4e] rounded-lg hover:from-[#6b9d89]/20 hover:to-[#0d5f4e]/20 transition-all flex items-center justify-center gap-2 text-sm font-medium">
                  <RefreshCw className="w-4 h-4" />
                  Re-run Validation
                </button>
              </div>
            </div>

            {/* Recommended Fixes */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Recommended Fixes</h3>
              
              <div className="space-y-3">
                {actions.map((action) => (
                  <div 
                    key={action.id}
                    className="group p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#0D5F4E]/30 hover:bg-[#0D5F4E]/5 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className={`px-2 py-0.5 text-xs rounded-full border ${getPriorityColor(action.priority)}`}>
                        {action.priority.toUpperCase()}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#0D5F4E] transition-colors" />
                    </div>
                    
                    <h4 className="text-sm font-medium text-gray-900 mb-2">{action.title}</h4>
                    
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400">⏱</span>
                        {action.effort}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400">📊</span>
                        {action.impact} impact
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Priority Breakdown Chart */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Priority Breakdown</h3>
              
              <div className="space-y-4">
                {/* High Priority */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-600">High Priority</span>
                    <span className="text-sm font-medium text-gray-900">
                      {actions.filter(a => a.priority === 'high').length}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gray-900 rounded-full"
                      style={{ width: `${(actions.filter(a => a.priority === 'high').length / actions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Medium Priority */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-600">Medium Priority</span>
                    <span className="text-sm font-medium text-gray-900">
                      {actions.filter(a => a.priority === 'medium').length}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#6b9d89] rounded-full"
                      style={{ width: `${(actions.filter(a => a.priority === 'medium').length / actions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Low Priority */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-600">Low Priority</span>
                    <span className="text-sm font-medium text-gray-900">
                      {actions.filter(a => a.priority === 'low').length}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gray-400 rounded-full"
                      style={{ width: `${(actions.filter(a => a.priority === 'low').length / actions.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Total Progress */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">Total Actions</span>
                  <span className="text-2xl font-light text-[#0D5F4E]">{actions.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}