import { useState, useEffect } from 'react';
import { 
  Home,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Target,
  Users,
  Zap,
  Shield,
  Rocket,
  BarChart3,
  Activity,
  Sparkles,
  FileText,
  Lock,
  DollarSign,
  Globe,
  Clock,
  Award,
  Briefcase,
  Code,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  MapPin,
  Calendar,
  Percent,
  Package,
  Lightbulb,
  GitBranch,
  CheckSquare,
  HelpCircle,
  BookOpen,
  Crown,
  Info,
  Brain,
  Eye,
  TrendingDown,
  AlertCircle
} from 'lucide-react';

export default function StartupValidatorV2Page() {
  const [activeSection, setActiveSection] = useState('executive-summary');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleNavigate = (route: string) => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: route }));
  };

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'executive-summary',
        'key-recommendations',
        'validation-scorecard',
        'score-analysis',
        'market-analysis',
        'financials',
        'risks',
        'roadmap',
        'team',
        'questions'
      ];

      const scrollPosition = window.innerHeight / 3;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ 
        top: elementPosition - offset, 
        behavior: 'smooth' 
      });
    }
  };

  // Data
  const overallScore = 72;
  const riskLevel = 'Medium';
  const difficulty = 'Moderate';
  const confidence = 85;
  const timeEstimate = '8-12 weeks';

  const navigationSections = [
    { id: 'executive-summary', label: 'Executive Summary', icon: <FileText className="w-4 h-4" /> },
    { id: 'key-recommendations', label: 'Key Actions', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'validation-scorecard', label: 'Validation', icon: <CheckCircle2 className="w-4 h-4" /> },
    { id: 'score-analysis', label: 'Score Breakdown', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'market-analysis', label: 'Market Analysis', icon: <Globe className="w-4 h-4" /> },
    { id: 'financials', label: 'Financials', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'risks', label: 'Risks', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'roadmap', label: 'Roadmap', icon: <Calendar className="w-4 h-4" /> },
    { id: 'team', label: 'Team', icon: <Users className="w-4 h-4" /> },
    { id: 'questions', label: 'Key Questions', icon: <HelpCircle className="w-4 h-4" /> }
  ];

  // AI Intelligence content based on active section
  const getAIIntelligence = () => {
    switch (activeSection) {
      case 'executive-summary':
        return {
          confidence: 85,
          reasoning: 'High confidence based on market data from 3 validated sources and founder pain point research.',
          detected: ['Market size', 'Growth rate', 'Competitor data'],
          inferred: ['ICP clarity', 'GTM strategy'],
          warnings: ['Missing customer validation interviews'],
          nextActions: ['Conduct 10-15 customer interviews', 'Validate pricing model']
        };
      case 'key-recommendations':
        return {
          confidence: 78,
          reasoning: 'Recommendations prioritized by impact/effort ratio and market timing.',
          detected: ['Competitive landscape', 'Market trends'],
          inferred: ['ICP prioritization', 'Partnership potential'],
          warnings: ['GTM strategy needs validation'],
          nextActions: ['Define specific ICP segment', 'Draft positioning statement']
        };
      case 'validation-scorecard':
        return {
          confidence: 82,
          reasoning: 'Problem validation scored high due to multiple founder testimonials. Solution needs user testing.',
          detected: ['Problem evidence', 'Market demand signals'],
          inferred: ['Solution effectiveness', 'Product-market fit timing'],
          warnings: ['No beta user feedback yet'],
          nextActions: ['Launch beta with 20-30 users', 'Measure activation rate']
        };
      case 'market-analysis':
        return {
          confidence: 88,
          reasoning: 'Market size based on Gartner 2024 SaaS report. TAM/SAM/SOM calculated using industry benchmarks.',
          detected: ['TAM data', 'CAGR projections', 'Market maturity'],
          inferred: ['SOM estimate', 'Market capture timeline'],
          warnings: ['Niche market data limited'],
          nextActions: ['Validate SAM with industry experts', 'Refine SOM assumptions']
        };
      case 'financials':
        return {
          confidence: 72,
          reasoning: 'LTV/CAC ratio excellent. CAC estimate needs validation through real acquisition channels.',
          detected: ['Startup costs', 'Pricing tiers'],
          inferred: ['CAC estimate', 'LTV projection', 'Conversion rates'],
          warnings: ['CAC not yet validated with real campaigns'],
          nextActions: ['Run small paid acquisition test', 'Validate conversion assumptions']
        };
      case 'risks':
        return {
          confidence: 90,
          reasoning: 'Risk assessment based on competitive analysis and technical complexity review.',
          detected: ['Competitive threats', 'Technical dependencies'],
          inferred: ['Market timing risk', 'Team capability gaps'],
          warnings: ['High competition requires clear differentiation'],
          nextActions: ['Define unique wedge vs competitors', 'Secure technical advisor']
        };
      default:
        return {
          confidence: 80,
          reasoning: 'Analysis based on available data and industry benchmarks.',
          detected: ['Market research', 'Competitive data'],
          inferred: ['Strategic positioning', 'Execution timeline'],
          warnings: ['Some assumptions need validation'],
          nextActions: ['Continue validation research', 'Update assumptions with real data']
        };
    }
  };

  const intelligence = getAIIntelligence();

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1920px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-serif text-gray-900">Startup Validator</h1>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1.5 bg-[#0d5f4e]/10 text-[#0d5f4e] rounded-full text-xs font-medium flex items-center gap-1.5">
                <div className="w-2 h-2 bg-[#0d5f4e] rounded-full animate-pulse" />
                Ready for Review
              </div>
            </div>
          </div>

          <button
            onClick={() => handleNavigate('home')}
            className="px-4 py-2 bg-transparent border border-gray-300 text-gray-700 rounded-lg hover:border-[#0D5F4E] hover:text-[#0D5F4E] transition-all flex items-center gap-2 text-sm"
          >
            <Home className="w-4 h-4" />
            Home
          </button>
        </div>
      </div>

      {/* 3-Panel Layout */}
      <div className="max-w-[1920px] mx-auto flex">
        {/* LEFT PANEL - CONTEXT (280px fixed) */}
        <div className="sticky top-[73px] h-[calc(100vh-73px)] w-[280px] border-r border-gray-200 bg-white overflow-y-auto flex-shrink-0">
          <div className="p-6 space-y-6">
            {/* Startup Info */}
            <div>
              <div className="text-lg font-serif text-gray-900 mb-1">StartupAI</div>
              <div className="text-xs text-gray-500">AI-Powered Founder Tools</div>
            </div>

            {/* Overall Score */}
            <div className="p-4 bg-gradient-to-br from-[#0d5f4e]/5 to-white rounded-xl border border-[#0d5f4e]/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-sans uppercase tracking-wider text-gray-600">Overall Score</span>
                <Brain className="w-4 h-4 text-[#0d5f4e]" />
              </div>
              
              <div className="flex items-center gap-4 mb-3">
                <div className="relative">
                  <svg width="64" height="64" className="transform -rotate-90">
                    <circle cx="32" cy="32" r="28" fill="none" stroke="#E5E7EB" strokeWidth="6" />
                    <circle 
                      cx="32" 
                      cy="32" 
                      r="28" 
                      fill="none" 
                      stroke="#0d5f4e" 
                      strokeWidth="6"
                      strokeDasharray={`${(overallScore / 100) * 176} 176`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-light text-gray-900">{overallScore}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900 mb-1">Strong</div>
                  <div className="text-xs text-gray-600">High potential</div>
                </div>
              </div>

              <div className="text-xs text-gray-500">
                AI Confidence: <span className="font-medium text-[#0d5f4e]">{confidence}%</span>
              </div>
            </div>

            {/* Mini Indicators */}
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span className="text-xs text-gray-600">Risk Level</span>
                <span className="px-2 py-0.5 bg-gray-700 text-white rounded text-xs">{riskLevel}</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span className="text-xs text-gray-600">Difficulty</span>
                <span className="px-2 py-0.5 bg-gray-600 text-white rounded text-xs">{difficulty}</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span className="text-xs text-gray-600">Timeline</span>
                <span className="px-2 py-0.5 bg-[#0d5f4e] text-white rounded text-xs">{timeEstimate}</span>
              </div>
            </div>

            {/* Section Navigation */}
            <div>
              <h3 className="text-xs font-sans uppercase tracking-wider text-gray-500 mb-3">Sections</h3>
              <nav className="space-y-1">
                {navigationSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all ${
                      activeSection === section.id
                        ? 'bg-[#0d5f4e]/10 text-[#0d5f4e] font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {section.icon}
                    <span className="flex-1 text-left">{section.label}</span>
                    {activeSection === section.id && (
                      <div className="w-1.5 h-1.5 bg-[#0d5f4e] rounded-full" />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Progress Indicator */}
            <div className="pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Validation Progress</span>
                <span className="text-xs font-medium text-[#0d5f4e]">Step 3/3</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#0d5f4e] rounded-full" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* MAIN PANEL - WORK (Flexible width, scrollable) */}
        <div className="flex-1 overflow-y-auto bg-[#FAFAF8]">
          <div className="max-w-[900px] mx-auto p-8 space-y-8">
            
            {/* 1. Executive Summary */}
            <section id="executive-summary" className="scroll-mt-24">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#0d5f4e]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xs font-sans uppercase tracking-wider text-gray-500 mb-2">Executive Summary</h2>
                    <h3 className="text-2xl font-serif text-[#0d5f4e] mb-4">Strong Opportunity with Clear Path Forward</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-base text-gray-700 leading-relaxed">
                    StartupAI addresses a validated founder pain point in a growing market. The <span className="px-2 py-0.5 bg-[#0d5f4e]/10 text-[#0d5f4e] rounded text-sm font-medium">AI-powered startup tools</span> space shows strong adoption trends, with founders actively seeking comprehensive operating systems.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Your positioning as an "execution-focused OS" differentiates from idea validators. Key challenge: defining a clear wedge and ICP to penetrate a competitive landscape.
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="p-4 bg-gradient-to-br from-[#0d5f4e]/5 to-white rounded-lg border border-[#0d5f4e]/20">
                      <div className="text-xs text-gray-600 mb-1">TAM</div>
                      <div className="text-2xl font-light text-gray-900">$12.4B</div>
                      <div className="text-xs text-gray-500 mt-1">SaaS productivity</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-[#0d5f4e]/5 to-white rounded-lg border border-[#0d5f4e]/20">
                      <div className="text-xs text-gray-600 mb-1">CAGR</div>
                      <div className="text-2xl font-light text-gray-900">24.3%</div>
                      <div className="text-xs text-gray-500 mt-1">2024-2029</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="text-xs text-gray-600 mb-1">Competition</div>
                      <div className="text-xl font-light text-gray-900">High</div>
                      <div className="text-xs text-gray-500 mt-1">Needs clear edge</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Key Recommendations */}
            <section id="key-recommendations" className="scroll-mt-24">
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-[#0d5f4e]" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Key Recommendations</h3>
                    <p className="text-sm text-gray-600">Priority actions for next 7-30 days</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      priority: 'high',
                      title: 'Narrow your ICP to a single founder segment',
                      description: 'Focus on non-technical pre-seed founders or accelerator participants',
                      effort: '2-3 hours'
                    },
                    {
                      priority: 'high',
                      title: 'Conduct 10-15 customer discovery interviews',
                      description: 'Validate pain points and willingness to pay with target segment',
                      effort: '2 weeks'
                    },
                    {
                      priority: 'high',
                      title: 'Define your unique wedge vs. competitors',
                      description: 'What do you do 10x better than Notion, Asana, or other founder tools?',
                      effort: '4 hours'
                    },
                    {
                      priority: 'medium',
                      title: 'Explore B2B partnerships with accelerators',
                      description: 'YC, Techstars, 500 Global as initial distribution channel',
                      effort: '1 week'
                    }
                  ].map((action, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#0d5f4e]/30 transition-all"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0d5f4e]/10 text-[#0d5f4e] text-sm font-medium flex-shrink-0">
                        {index + 1}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm font-medium text-gray-900">{action.title}</h4>
                          <span className={`px-2 py-0.5 text-xs rounded-full ${
                            action.priority === 'high' 
                              ? 'bg-gray-900/10 text-gray-900 border border-gray-900/20' 
                              : 'bg-[#6b9d89]/10 text-[#6b9d89] border border-[#6b9d89]/30'
                          }`}>
                            {action.priority.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{action.description}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          {action.effort}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. Validation Scorecard */}
            <section id="validation-scorecard" className="scroll-mt-24">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Validation Scorecard</h3>
              
              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    title: 'Problem Validation',
                    score: 80,
                    description: 'Clear founder pain points validated across multiple sources',
                    icon: <Target className="w-5 h-5" />
                  },
                  {
                    title: 'Solution Validation',
                    score: 75,
                    description: 'Comprehensive approach addresses full founder journey',
                    icon: <Zap className="w-5 h-5" />
                  },
                  {
                    title: 'Market Validation',
                    score: 70,
                    description: 'Market growth projections support demand for AI solutions',
                    icon: <Globe className="w-5 h-5" />
                  }
                ].map((card, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs font-sans uppercase tracking-wider text-gray-600">{card.title}</h4>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        card.score >= 80 ? 'bg-[#0d5f4e]/10 text-[#0d5f4e]' : 'bg-[#6b9d89]/10 text-[#6b9d89]'
                      }`}>
                        {card.icon}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className={`text-4xl font-light ${
                          card.score >= 80 ? 'text-[#0d5f4e]' : 'text-[#6b9d89]'
                        }`}>{card.score}</span>
                        <span className="text-sm text-gray-400">/ 100</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            card.score >= 80 ? 'bg-[#0d5f4e]' : 'bg-[#6b9d89]'
                          }`}
                          style={{ width: `${card.score}%` }}
                        />
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-700 leading-relaxed">{card.description}</p>
                  </div>
                ))}
              </div>

              {/* Green Lights & Red Flags */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                {/* Green Lights */}
                <div className="bg-gradient-to-br from-[#0d5f4e]/10 to-[#6b9d89]/5 rounded-2xl border border-[#0d5f4e]/20 p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-[#0d5f4e] flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-sans font-medium text-[#0d5f4e] uppercase tracking-wider">Green Lights</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      'Strong market growth with AI/SaaS adoption at all-time high',
                      'Clear founder pain points validated across sources',
                      'Comprehensive approach addresses full journey',
                      'Execution focus differentiates from validators'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Red Flags */}
                <div className="bg-gradient-to-br from-gray-900/10 to-gray-900/5 rounded-2xl border border-gray-900/20 p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-sans font-medium text-gray-900 uppercase tracking-wider">Red Flags</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { text: 'High competition from established players', impact: 'High' },
                      { text: 'Risk of generic AI positioning without clear wedge', impact: 'High' },
                      { text: 'ICP definition too broad for focused GTM', impact: 'Medium' },
                      { text: 'Technical complexity may delay MVP', impact: 'Medium' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-4 h-4 rounded-full border-2 border-gray-900 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <div className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-700 leading-relaxed mb-1">{item.text}</p>
                          <span className={`inline-block px-2 py-0.5 text-xs rounded-full ${
                            item.impact === 'High' ? 'bg-gray-900/10 text-gray-900' : 'bg-gray-600/10 text-gray-600'
                          }`}>
                            {item.impact} Impact
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Score Analysis */}
            <section id="score-analysis" className="scroll-mt-24">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Detailed Score Breakdown</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {/* Market Factors */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-sm font-sans font-medium text-gray-900 mb-5">Market Factors</h3>
                  
                  <div className="space-y-4">
                    {[
                      { label: 'Market Size', score: 82, color: '#0d5f4e' },
                      { label: 'Growth Rate', score: 78, color: '#0d5f4e' },
                      { label: 'Market Timing', score: 75, color: '#6b9d89' },
                      { label: 'Entry Barriers', score: 65, color: '#6b9d89' },
                      { label: 'Competitive Risk', score: 58, color: '#6B7280' }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-700">{item.label}</span>
                          <span className="text-sm font-medium" style={{ color: item.color }}>{item.score}</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full"
                            style={{ width: `${item.score}%`, backgroundColor: item.color }}
                          />
                        </div>
                      </div>
                    ))}
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Market Score</span>
                        <span className="text-xl font-light text-[#0d5f4e]">72</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Execution Factors */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-sm font-sans font-medium text-gray-900 mb-5">Execution Factors</h3>
                  
                  <div className="space-y-4">
                    {[
                      { label: 'Team Readiness', score: 70, color: '#6b9d89' },
                      { label: 'Product Clarity', score: 75, color: '#6b9d89' },
                      { label: 'Value Proposition', score: 78, color: '#0d5f4e' },
                      { label: 'Revenue Model', score: 68, color: '#6b9d89' },
                      { label: 'Scalability', score: 72, color: '#6b9d89' }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-700">{item.label}</span>
                          <span className="text-sm font-medium" style={{ color: item.color }}>{item.score}</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full"
                            style={{ width: `${item.score}%`, backgroundColor: item.color }}
                          />
                        </div>
                      </div>
                    ))}
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Execution Score</span>
                        <span className="text-xl font-light text-[#0d5f4e]">73</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Market Analysis */}
            <section id="market-analysis" className="scroll-mt-24">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Market Analysis</h3>
              
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h3 className="text-sm font-sans font-medium text-gray-900 mb-6">Market Size (TAM/SAM/SOM)</h3>
                
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    {/* TAM Circle */}
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center">
                        <div className="text-xs text-gray-500 mb-1">TAM</div>
                        <div className="text-xl font-light text-gray-900">$12.4B</div>
                      </div>
                      
                      {/* SAM Circle */}
                      <div className="w-44 h-44 rounded-full bg-gradient-to-br from-[#6b9d89]/30 to-[#6b9d89]/10 flex items-center justify-center">
                        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center">
                          <div className="text-xs text-gray-600 mb-1">SAM</div>
                          <div className="text-lg font-light text-gray-900">$3.2B</div>
                        </div>
                        
                        {/* SOM Circle */}
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0d5f4e] to-[#0d5f4e]/80 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="text-xs mb-1">SOM</div>
                            <div className="text-base font-medium">$48M</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-gray-400 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">TAM (Total Addressable Market)</span>
                        <span className="text-sm text-gray-700">$12.4B</span>
                      </div>
                      <p className="text-xs text-gray-600">Global SaaS productivity tools market</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-[#6b9d89]/5 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-[#6b9d89] mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">SAM (Serviceable Available)</span>
                        <span className="text-sm text-gray-700">$3.2B</span>
                      </div>
                      <p className="text-xs text-gray-600">AI-powered startup tools for early-stage founders</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-[#0d5f4e]/5 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-[#0d5f4e] mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">SOM (Serviceable Obtainable)</span>
                        <span className="text-sm text-gray-700">$48M</span>
                      </div>
                      <p className="text-xs text-gray-600">Year 5 realistic capture (1.5% of SAM)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
                  <BookOpen className="w-3 h-3" />
                  Source: Gartner SaaS Market Analysis 2024
                </div>
              </div>
            </section>

            {/* 6. Financials */}
            <section id="financials" className="scroll-mt-24">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Financial Projections</h3>
              
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Startup Costs', value: '$75K', icon: <Rocket className="w-5 h-5" />, color: 'gray' },
                  { label: 'CAC', value: '$180', icon: <Users className="w-5 h-5" />, color: 'gray' },
                  { label: 'LTV', value: '$2,400', icon: <DollarSign className="w-5 h-5" />, color: 'green' },
                  { label: 'LTV/CAC Ratio', value: '13.3x', icon: <TrendingUp className="w-5 h-5" />, color: 'green' }
                ].map((metric, index) => (
                  <div key={index} className={`bg-white rounded-2xl border ${
                    metric.color === 'green' ? 'border-[#0d5f4e]/20 bg-gradient-to-br from-[#0d5f4e]/5 to-white' : 'border-gray-200'
                  } p-6`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-600">{metric.label}</span>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        metric.color === 'green' ? 'bg-[#0d5f4e]/10 text-[#0d5f4e]' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {metric.icon}
                      </div>
                    </div>
                    <div className={`text-3xl font-light ${
                      metric.color === 'green' ? 'text-[#0d5f4e]' : 'text-gray-900'
                    }`}>{metric.value}</div>
                    {metric.label === 'LTV/CAC Ratio' && (
                      <div className="mt-2 text-xs text-[#0d5f4e]">Excellent (&gt;3:1)</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Revenue Projections */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { year: 'Year 1', revenue: '$180K', users: '120 paid', growth: null },
                  { year: 'Year 3', revenue: '$1.2M', users: '850 paid', growth: '+185%' },
                  { year: 'Year 5', revenue: '$4.8M', users: '3,200 paid', growth: '+300%' }
                ].map((projection, index) => (
                  <div key={index} className={`bg-white rounded-2xl border p-6 ${
                    index === 2 ? 'border-[#0d5f4e]/20 bg-gradient-to-br from-[#0d5f4e]/5 to-white' : 'border-gray-200'
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-600">{projection.year}</span>
                      {projection.growth && (
                        <span className="px-2 py-0.5 bg-[#0d5f4e]/10 text-[#0d5f4e] rounded text-xs">
                          {projection.growth}
                        </span>
                      )}
                    </div>
                    <div className={`text-3xl font-light mb-2 ${
                      index === 2 ? 'text-[#0d5f4e]' : 'text-gray-900'
                    }`}>{projection.revenue}</div>
                    <div className="text-sm text-gray-600">{projection.users}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Risks */}
            <section id="risks" className="scroll-mt-24">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Risk Analysis & Mitigation</h3>
              
              <div className="space-y-4">
                {[
                  {
                    category: 'Technical',
                    risks: [
                      { risk: 'AI API costs may exceed budget at scale', impact: 'Medium', mitigation: 'Implement caching and rate limiting; explore open-source alternatives' },
                      { risk: 'Complex integrations delay MVP launch', impact: 'Medium', mitigation: 'Phase feature rollout; launch with core functionality first' }
                    ]
                  },
                  {
                    category: 'Market',
                    risks: [
                      { risk: 'High competition from established tools', impact: 'High', mitigation: 'Focus on founder-specific wedge; partner with accelerators' },
                      { risk: 'Market saturation in productivity tools', impact: 'Medium', mitigation: 'Position as "execution OS" not "productivity tool"' }
                    ]
                  }
                ].map((section, sIndex) => (
                  <div key={sIndex} className="bg-white rounded-2xl border border-gray-200 p-6">
                    <h4 className="text-sm font-sans font-medium text-gray-900 mb-4">{section.category} Risks</h4>
                    
                    <div className="space-y-3">
                      {section.risks.map((item, rIndex) => (
                        <div key={rIndex} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-start gap-2 flex-1">
                              <AlertTriangle className="w-4 h-4 text-gray-600 mt-0.5" />
                              <span className="text-sm font-medium text-gray-900">{item.risk}</span>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ml-3 ${
                              item.impact === 'High' ? 'bg-gray-900/10 text-gray-900' : 'bg-gray-600/10 text-gray-600'
                            }`}>
                              {item.impact} Impact
                            </span>
                          </div>
                          
                          <div className="ml-6 text-sm text-gray-700">
                            <span className="text-xs text-gray-500 font-medium">Mitigation:</span> {item.mitigation}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. Roadmap */}
            <section id="roadmap" className="scroll-mt-24">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Execution Roadmap</h3>
              
              <div className="grid grid-cols-3 gap-6">
                {[
                  {
                    phase: 'Immediate (0-30 days)',
                    icon: <Rocket className="w-5 h-5" />,
                    color: '#0d5f4e',
                    tasks: [
                      'Conduct 10-15 customer interviews',
                      'Validate pricing with beta waitlist',
                      'Define MVP feature set',
                      'Build landing page + waitlist'
                    ]
                  },
                  {
                    phase: 'Short-term (1-3 months)',
                    icon: <GitBranch className="w-5 h-5" />,
                    color: '#6b9d89',
                    tasks: [
                      'Develop MVP (core features)',
                      'Secure first accelerator partnership',
                      'Launch beta with 20-30 users',
                      'Iterate based on feedback'
                    ]
                  },
                  {
                    phase: 'Medium-term (3-6 months)',
                    icon: <TrendingUp className="w-5 h-5" />,
                    color: '#6B7280',
                    tasks: [
                      'Public launch (Product Hunt)',
                      'Scale to 100+ paid users',
                      'Build content marketing engine',
                      'Expand accelerator partnerships'
                    ]
                  }
                ].map((phase, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ 
                        backgroundColor: `${phase.color}10`,
                        color: phase.color
                      }}>
                        {phase.icon}
                      </div>
                      <h4 className="text-xs font-sans font-medium text-gray-900">{phase.phase}</h4>
                    </div>
                    
                    <div className="space-y-2">
                      {phase.tasks.map((task, tIndex) => (
                        <div key={tIndex} className="flex items-start gap-2 p-2 hover:bg-gray-50 rounded transition-colors">
                          <CheckSquare className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 9. Team */}
            <section id="team" className="scroll-mt-24">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Team Requirements</h3>
              
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h4 className="text-sm font-sans font-medium text-gray-900 mb-5">Initial Team Structure</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { role: 'Full-stack Engineer', count: 2, priority: 'Critical', icon: <Code className="w-4 h-4" /> },
                    { role: 'Product Designer', count: 1, priority: 'Critical', icon: <Package className="w-4 h-4" /> },
                    { role: 'Founder / PM', count: 1, priority: 'Critical', icon: <Users className="w-4 h-4" /> },
                    { role: 'Content Marketer', count: 1, priority: 'High', icon: <FileText className="w-4 h-4" /> }
                  ].map((member, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600">
                        {member.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-900">{member.role}</span>
                        </div>
                        <div className="text-xs text-gray-600">{member.count} {member.count > 1 ? 'people' : 'person'}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 10. Key Questions */}
            <section id="questions" className="scroll-mt-24">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Critical Questions</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { q: 'What makes your solution 10x better than alternatives?', category: 'Positioning' },
                  { q: 'How will you acquire your first 100 customers?', category: 'GTM' },
                  { q: 'What metrics will prove product-market fit?', category: 'Validation' },
                  { q: 'Which accelerator partnerships should you prioritize?', category: 'Partnerships' }
                ].map((item, index) => (
                  <div key={index} className="p-5 bg-white rounded-2xl border border-gray-200 hover:border-[#0d5f4e]/30 transition-all">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 mb-2 leading-relaxed">{item.q}</p>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">{item.category}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="scroll-mt-24">
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-12 text-center relative overflow-hidden">
                <div className="relative z-10">
                  <Crown className="w-12 h-12 text-[#0d5f4e] mx-auto mb-4" />
                  <h2 className="text-3xl font-serif text-white mb-3">Ready for Deep Analysis?</h2>
                  <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Unlock competitor intelligence, customer personas, and market insights.
                  </p>
                  
                  <button className="px-8 py-4 bg-[#0d5f4e] text-white rounded-lg font-medium hover:bg-[#0a4a3b] transition-colors inline-flex items-center gap-2 text-lg">
                    <Crown className="w-5 h-5" />
                    Upgrade to Pro
                  </button>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* RIGHT PANEL - INTELLIGENCE (320px fixed) */}
        <div className="sticky top-[73px] h-[calc(100vh-73px)] w-[320px] border-l border-gray-200 bg-white overflow-y-auto flex-shrink-0">
          <div className="p-6 space-y-6">
            {/* AI Confidence Header */}
            <div className="p-4 bg-gradient-to-br from-[#0d5f4e]/10 to-white rounded-xl border border-[#0d5f4e]/20">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="w-5 h-5 text-[#0d5f4e]" />
                <h3 className="text-sm font-sans font-medium text-gray-900">AI Intelligence</h3>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Confidence Level</span>
                <span className="text-lg font-medium text-[#0d5f4e]">{intelligence.confidence}%</span>
              </div>
              
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#0d5f4e] rounded-full transition-all duration-500"
                  style={{ width: `${intelligence.confidence}%` }}
                />
              </div>
            </div>

            {/* AI Reasoning */}
            <div className="space-y-3">
              <h4 className="text-xs font-sans uppercase tracking-wider text-gray-500">Why This Score?</h4>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-start gap-2 mb-3">
                  <Lightbulb className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700 leading-relaxed">{intelligence.reasoning}</p>
                </div>
              </div>
            </div>

            {/* Data Sources */}
            <div className="space-y-3">
              <h4 className="text-xs font-sans uppercase tracking-wider text-gray-500">Data Sources</h4>
              
              <div className="space-y-2">
                <div className="p-3 bg-[#0d5f4e]/5 rounded-lg border border-[#0d5f4e]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-4 h-4 text-[#0d5f4e]" />
                    <span className="text-xs font-medium text-gray-900">Detected Data</span>
                  </div>
                  <div className="space-y-1">
                    {intelligence.detected.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[#0d5f4e]" />
                        <span className="text-xs text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-4 h-4 text-gray-600" />
                    <span className="text-xs font-medium text-gray-900">AI-Inferred (Editable)</span>
                  </div>
                  <div className="space-y-1">
                    {intelligence.inferred.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full border-2 border-gray-400" />
                        <span className="text-xs text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Warnings */}
            {intelligence.warnings.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-sans uppercase tracking-wider text-gray-500">Missing Data</h4>
                <div className="space-y-2">
                  {intelligence.warnings.map((warning, index) => (
                    <div key={index} className="p-3 bg-gray-900/5 rounded-lg border border-gray-300">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-gray-700 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-gray-700">{warning}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Next Actions */}
            <div className="space-y-3">
              <h4 className="text-xs font-sans uppercase tracking-wider text-gray-500">What To Do Next</h4>
              <div className="space-y-2">
                {intelligence.nextActions.map((action, index) => (
                  <div key={index} className="p-3 bg-white rounded-lg border border-gray-200 hover:border-[#0d5f4e]/30 transition-all cursor-pointer">
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-700">{action}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upgrade Nudge (Contextual) */}
            <div className="p-4 bg-gradient-to-br from-gray-900/10 to-gray-900/5 rounded-xl border border-gray-300">
              <Lock className="w-5 h-5 text-gray-700 mb-2" />
              <h4 className="text-sm font-medium text-gray-900 mb-1">Unlock Deeper Insights</h4>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                Get competitive analysis and customer personas for this section.
              </p>
              <button className="w-full px-3 py-2 bg-[#0d5f4e] text-white rounded-lg text-xs font-medium hover:bg-[#0a4a3b] transition-colors">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
