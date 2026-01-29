import { useState, useEffect } from 'react';
import { 
  Home,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
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
  MapPin,
  Calendar,
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
  Share2,
  Download,
  Copy,
  Plus,
  MessageSquare,
  Send,
  RefreshCw,
  ChevronRight,
  TrendingDown
} from 'lucide-react';

export default function StartupValidatorV3ReportPage() {
  const [activeSection, setActiveSection] = useState('executive-summary');
  const [expandedSections, setExpandedSections] = useState<string[]>(['executive-summary', 'key-recommendations', 'signal-board']);
  const [aiQuestion, setAiQuestion] = useState('');

  const handleNavigate = (route: string) => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: route }));
  };

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'executive-summary',
        'key-recommendations',
        'signal-board',
        'scorecard',
        'score-deep-dive',
        'market-size',
        'competitive-landscape',
        'target-customer',
        'market-intelligence',
        'unit-economics',
        'revenue-projections',
        'risk-assessment',
        'technology-assessment',
        'team-roadmap',
        'strategic-opportunities',
        'sources-questions'
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
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ 
        top: elementPosition - offset, 
        behavior: 'smooth' 
      });
    }
  };

  const toggleSection = (sectionId: string) => {
    if (expandedSections.includes(sectionId)) {
      setExpandedSections(expandedSections.filter(id => id !== sectionId));
    } else {
      setExpandedSections([...expandedSections, sectionId]);
    }
  };

  // Data
  const overallScore = 72;
  const verdict = 'CONDITIONAL';
  const riskLevel = 'Medium';
  const confidence = 'High';
  const timeline = '8–12 weeks';
  const ideaTitle = 'AI-powered startup operating system';
  const rank = 'Top 15%';
  const similarIdeas = 142;

  const navigationGroups = [
    {
      title: 'SUMMARY',
      emoji: '📋',
      sections: [
        { id: 'executive-summary', label: 'Executive Summary' },
        { id: 'key-recommendations', label: 'Key Recommendations' },
        { id: 'signal-board', label: 'Signal Board' }
      ]
    },
    {
      title: 'VALIDATION SCORES',
      emoji: '📊',
      sections: [
        { id: 'scorecard', label: 'Scorecard' },
        { id: 'score-deep-dive', label: 'Score Deep Dive' }
      ]
    },
    {
      title: 'MARKET ANALYSIS',
      emoji: '🎯',
      sections: [
        { id: 'market-size', label: 'Market Size' },
        { id: 'competitive-landscape', label: 'Competitive Landscape', premium: true },
        { id: 'target-customer', label: 'Target Customer', premium: true },
        { id: 'market-intelligence', label: 'Market Intelligence', premium: true }
      ]
    },
    {
      title: 'BUSINESS VIABILITY',
      emoji: '💰',
      sections: [
        { id: 'unit-economics', label: 'Unit Economics' },
        { id: 'revenue-projections', label: 'Revenue Projections' },
        { id: 'risk-assessment', label: 'Risk Assessment' }
      ]
    },
    {
      title: 'EXECUTION PLAN',
      emoji: '🗺️',
      sections: [
        { id: 'technology-assessment', label: 'Technology Assessment' },
        { id: 'team-roadmap', label: 'Team & Roadmap' },
        { id: 'strategic-opportunities', label: 'Strategic Opportunities' }
      ]
    },
    {
      title: 'APPENDIX',
      emoji: '📚',
      sections: [
        { id: 'sources-questions', label: 'Sources & Questions' }
      ]
    }
  ];

  const getVerdictColor = () => {
    switch (verdict) {
      case 'GO': return { bg: 'bg-[#0d5f4e]', text: 'text-[#0d5f4e]', border: 'border-[#0d5f4e]' };
      case 'CONDITIONAL': return { bg: 'bg-[#6b9d89]', text: 'text-[#6b9d89]', border: 'border-[#6b9d89]' };
      case 'NEEDS WORK': return { bg: 'bg-gray-600', text: 'text-gray-600', border: 'border-gray-600' };
      case 'PIVOT': return { bg: 'bg-gray-900', text: 'text-gray-900', border: 'border-gray-900' };
      default: return { bg: 'bg-gray-600', text: 'text-gray-600', border: 'border-gray-600' };
    }
  };

  const verdictColors = getVerdictColor();

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* STICKY HEADER (64px) */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm h-16">
        <div className="max-w-[1920px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Left - Idea Title + Score */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <svg width="48" height="48" className="transform -rotate-90">
                  <circle cx="24" cy="24" r="20" fill="none" stroke="#E5E7EB" strokeWidth="4" />
                  <circle 
                    cx="24" 
                    cy="24" 
                    r="20" 
                    fill="none" 
                    stroke={verdict === 'GO' ? '#0d5f4e' : verdict === 'CONDITIONAL' ? '#6b9d89' : '#6B7280'}
                    strokeWidth="4"
                    strokeDasharray={`${(overallScore / 100) * 126} 126`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-900">{overallScore}</span>
                </div>
              </div>
              
              <div>
                <div className="text-sm font-medium text-gray-900 max-w-xs truncate">{ideaTitle}</div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className={`px-2 py-0.5 ${verdictColors.bg} text-white rounded text-xs font-medium`}>
                    {verdict}
                  </span>
                  <span className="text-xs text-gray-500">Risk: {riskLevel}</span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">AI: {confidence}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - CTAs */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-[#0d5f4e] text-white rounded-lg text-sm font-medium hover:bg-[#0a4a3b] transition-colors flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Create Lean Canvas
            </button>
            <button className="px-4 py-2 bg-[#0d5f4e] text-white rounded-lg text-sm font-medium hover:bg-[#0a4a3b] transition-colors flex items-center gap-2">
              <Rocket className="w-4 h-4" />
              Generate Pitch Deck
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:border-[#0d5f4e] hover:text-[#0d5f4e] transition-all flex items-center gap-2">
              <Users className="w-4 h-4" />
              Match Investors
            </button>
            
            <div className="w-px h-6 bg-gray-200" />
            
            <button className="p-2 text-gray-600 hover:text-[#0d5f4e] transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-600 hover:text-[#0d5f4e] transition-colors">
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleNavigate('home')}
              className="p-2 text-gray-600 hover:text-[#0d5f4e] transition-colors"
            >
              <Home className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3-PANEL LAYOUT */}
      <div className="max-w-[1920px] mx-auto flex">
        {/* LEFT PANEL - CONTEXT (220px fixed, sticky) */}
        <div className="sticky top-16 h-[calc(100vh-64px)] w-[220px] border-r border-gray-200 bg-white overflow-y-auto flex-shrink-0">
          <div className="p-4 space-y-1">
            {navigationGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="mb-4">
                <div className="text-xs font-sans uppercase tracking-wider text-gray-500 mb-2 px-2 flex items-center gap-2">
                  <span>{group.emoji}</span>
                  <span>{group.title}</span>
                </div>
                <div className="space-y-0.5">
                  {group.sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all ${
                        activeSection === section.id
                          ? 'bg-[#0d5f4e]/10 text-[#0d5f4e] font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="truncate">{section.label}</span>
                      {section.premium && (
                        <Sparkles className="w-3 h-3 text-[#0d5f4e] flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Progress Indicator */}
            <div className="mt-6 pt-4 border-t border-gray-100 px-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600">Completed</span>
                <span className="text-xs font-medium text-[#0d5f4e]">13/16</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#0d5f4e] rounded-full" style={{ width: '81%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* CENTER PANEL - WORK (Flexible, scrollable) */}
        <div className="flex-1 overflow-y-auto bg-[#FAFAF8]">
          <div className="max-w-[900px] mx-auto p-8 space-y-6">
            
            {/* 1. Executive Summary */}
            <section id="executive-summary">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-[#0d5f4e]" />
                    </div>
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">Executive Summary</h2>
                      <p className="text-sm text-gray-600">High-level validation assessment</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 text-gray-400 hover:text-[#0d5f4e] transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-[#0d5f4e] transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`px-3 py-1.5 ${verdictColors.bg} text-white rounded-lg text-sm font-medium flex items-center gap-2`}>
                      <Target className="w-4 h-4" />
                      {verdict}
                    </div>
                    <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      Score: {overallScore}/100
                    </div>
                    <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      {rank} of validated ideas
                    </div>
                  </div>

                  <p className="text-base text-gray-700 leading-relaxed">
                    Your AI-powered startup operating system concept shows <span className="font-medium text-[#0d5f4e]">strong potential</span> in a growing market. The SaaS productivity tools space is experiencing significant adoption, with founders actively seeking comprehensive solutions.
                  </p>
                  
                  <p className="text-base text-gray-700 leading-relaxed">
                    <span className="font-medium text-gray-900">Key strength:</span> Execution-focused positioning differentiates from idea validators. <span className="font-medium text-gray-900">Primary challenge:</span> Define a clear wedge and specific ICP to penetrate a competitive landscape.
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="p-4 bg-gradient-to-br from-[#0d5f4e]/5 to-white rounded-lg border border-[#0d5f4e]/20">
                      <div className="text-xs text-gray-600 mb-1">Market TAM</div>
                      <div className="text-2xl font-light text-gray-900">$12.4B</div>
                      <div className="text-xs text-gray-500 mt-1">Growing 24% YoY</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-[#0d5f4e]/5 to-white rounded-lg border border-[#0d5f4e]/20">
                      <div className="text-xs text-gray-600 mb-1">Competition</div>
                      <div className="text-xl font-light text-gray-900">High</div>
                      <div className="text-xs text-gray-500 mt-1">Needs differentiation</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="text-xs text-gray-600 mb-1">Timeline</div>
                      <div className="text-xl font-light text-gray-900">{timeline}</div>
                      <div className="text-xs text-gray-500 mt-1">To MVP launch</div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-2">
                    <Brain className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                    <div className="text-xs text-gray-600">
                      <span className="font-medium text-gray-900">AI-inferred (editable):</span> Market size and competitive data based on Gartner 2024 SaaS report and industry analysis.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Key Recommendations */}
            <section id="key-recommendations">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-[#0d5f4e]" />
                    </div>
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">Key Recommendations</h2>
                      <p className="text-sm text-gray-600">Priority actions for next 30 days</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      priority: 'HIGH',
                      title: 'Narrow your ICP to a single founder segment',
                      description: 'Focus on non-technical pre-seed founders or accelerator participants to validate PMF faster.',
                      effort: '2-3 hours',
                      impact: 'High'
                    },
                    {
                      priority: 'HIGH',
                      title: 'Conduct 10-15 customer discovery interviews',
                      description: 'Validate pain points, willingness to pay, and feature priorities with target segment.',
                      effort: '2 weeks',
                      impact: 'Critical'
                    },
                    {
                      priority: 'HIGH',
                      title: 'Define your unique wedge vs. competitors',
                      description: 'Articulate what you do 10x better than Notion, Asana, or other founder tools.',
                      effort: '4 hours',
                      impact: 'High'
                    },
                    {
                      priority: 'MEDIUM',
                      title: 'Explore B2B partnerships with accelerators',
                      description: 'Target YC, Techstars, 500 Global as initial distribution channels.',
                      effort: '1 week',
                      impact: 'Medium'
                    }
                  ].map((action, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#0d5f4e]/30 transition-all"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#0d5f4e]/10 text-[#0d5f4e] text-xs font-medium flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-sm font-medium text-gray-900">{action.title}</h4>
                              <span className={`px-2 py-0.5 text-xs rounded-full ${
                                action.priority === 'HIGH' 
                                  ? 'bg-gray-900/10 text-gray-900 border border-gray-900/20' 
                                  : 'bg-[#6b9d89]/10 text-[#6b9d89] border border-[#6b9d89]/30'
                              }`}>
                                {action.priority}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{action.description}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {action.effort}
                              </div>
                              <div className="flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" />
                                Impact: {action.impact}
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="px-3 py-1.5 bg-[#0d5f4e] text-white rounded text-xs font-medium hover:bg-[#0a4a3b] transition-colors whitespace-nowrap ml-4">
                          Create Task
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. Signal Board (Green vs Red) */}
            <section id="signal-board">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-[#0d5f4e]" />
                    </div>
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">Signal Board</h2>
                      <p className="text-sm text-gray-600">Strengths vs. concerns at a glance</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {/* Green Signals */}
                  <div className="p-5 bg-gradient-to-br from-[#0d5f4e]/10 to-[#6b9d89]/5 rounded-xl border border-[#0d5f4e]/20">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-[#0d5f4e]" />
                      <h3 className="text-sm font-medium text-[#0d5f4e]">GREEN SIGNALS</h3>
                      <span className="ml-auto text-xs text-gray-600">5 found</span>
                    </div>
                    
                    <div className="space-y-2">
                      {[
                        'Strong market growth (24% CAGR)',
                        'Validated founder pain points',
                        'Clear differentiation opportunity',
                        'Scalable SaaS business model',
                        'Growing AI adoption trends'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Red Signals */}
                  <div className="p-5 bg-gradient-to-br from-gray-900/10 to-gray-900/5 rounded-xl border border-gray-900/20">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="w-5 h-5 text-gray-900" />
                      <h3 className="text-sm font-medium text-gray-900">RED SIGNALS</h3>
                      <span className="ml-auto text-xs text-gray-600">4 found</span>
                    </div>
                    
                    <div className="space-y-2">
                      {[
                        { text: 'High competition intensity', impact: 'High' },
                        { text: 'Generic AI positioning risk', impact: 'High' },
                        { text: 'Broad ICP definition', impact: 'Med' },
                        { text: 'Missing customer validation', impact: 'Med' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start justify-between gap-2">
                          <div className="flex items-start gap-2 flex-1">
                            <div className="w-4 h-4 rounded-full border-2 border-gray-900 flex items-center justify-center mt-0.5 flex-shrink-0">
                              <div className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
                            </div>
                            <span className="text-sm text-gray-700">{item.text}</span>
                          </div>
                          <span className="text-xs text-gray-600 whitespace-nowrap">{item.impact}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Scorecard */}
            <section id="scorecard">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-[#0d5f4e]" />
                    </div>
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">Validation Scorecard</h2>
                      <p className="text-sm text-gray-600">Multi-dimensional assessment</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Problem', score: 80, icon: <Target className="w-4 h-4" /> },
                    { label: 'Solution', score: 75, icon: <Zap className="w-4 h-4" /> },
                    { label: 'Market', score: 70, icon: <Globe className="w-4 h-4" /> },
                    { label: 'Team', score: 68, icon: <Users className="w-4 h-4" /> },
                    { label: 'Business', score: 72, icon: <DollarSign className="w-4 h-4" /> },
                    { label: 'Execution', score: 70, icon: <Rocket className="w-4 h-4" /> }
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-gray-600">{item.label}</span>
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                          item.score >= 75 ? 'bg-[#0d5f4e]/10 text-[#0d5f4e]' : 'bg-[#6b9d89]/10 text-[#6b9d89]'
                        }`}>
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className={`text-2xl font-light ${
                          item.score >= 75 ? 'text-[#0d5f4e]' : 'text-[#6b9d89]'
                        }`}>{item.score}</span>
                        <span className="text-xs text-gray-400">/100</span>
                      </div>
                      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            item.score >= 75 ? 'bg-[#0d5f4e]' : 'bg-[#6b9d89]'
                          }`}
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 5. Score Deep Dive */}
            <section id="score-deep-dive">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-[#0d5f4e]" />
                    </div>
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">Score Deep Dive</h2>
                      <p className="text-sm text-gray-600">Detailed breakdown by factor</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {/* Market Factors */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Market Factors</h3>
                    {[
                      { label: 'Market Size', score: 82 },
                      { label: 'Growth Rate', score: 78 },
                      { label: 'Market Timing', score: 75 },
                      { label: 'Entry Barriers', score: 65 },
                      { label: 'Competitive Risk', score: 58 }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs text-gray-700">{item.label}</span>
                          <span className="text-xs font-medium text-gray-900">{item.score}</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              item.score >= 75 ? 'bg-[#0d5f4e]' : item.score >= 65 ? 'bg-[#6b9d89]' : 'bg-gray-400'
                            }`}
                            style={{ width: `${item.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Market Score</span>
                        <span className="text-lg font-light text-[#0d5f4e]">72</span>
                      </div>
                    </div>
                  </div>

                  {/* Execution Factors */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Execution Factors</h3>
                    {[
                      { label: 'Team Readiness', score: 70 },
                      { label: 'Product Clarity', score: 75 },
                      { label: 'Value Proposition', score: 78 },
                      { label: 'Revenue Model', score: 68 },
                      { label: 'Scalability', score: 72 }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs text-gray-700">{item.label}</span>
                          <span className="text-xs font-medium text-gray-900">{item.score}</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              item.score >= 75 ? 'bg-[#0d5f4e]' : item.score >= 65 ? 'bg-[#6b9d89]' : 'bg-gray-400'
                            }`}
                            style={{ width: `${item.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Execution Score</span>
                        <span className="text-lg font-light text-[#0d5f4e]">73</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Market Size */}
            <section id="market-size">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-[#0d5f4e]" />
                    </div>
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">Market Size</h2>
                      <p className="text-sm text-gray-600">TAM / SAM / SOM analysis</p>
                    </div>
                  </div>
                </div>

                {/* TAM/SAM/SOM Visual */}
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center">
                        <div className="text-xs text-gray-500 mb-1">TAM</div>
                        <div className="text-xl font-light text-gray-900">$12.4B</div>
                      </div>
                      
                      <div className="w-44 h-44 rounded-full bg-gradient-to-br from-[#6b9d89]/30 to-[#6b9d89]/10 flex items-center justify-center">
                        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center">
                          <div className="text-xs text-gray-600 mb-1">SAM</div>
                          <div className="text-lg font-light text-gray-900">$3.2B</div>
                        </div>
                        
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
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">TAM (Total Addressable)</span>
                      <span className="text-sm text-gray-700">$12.4B</span>
                    </div>
                    <p className="text-xs text-gray-600">Global SaaS productivity tools market</p>
                  </div>

                  <div className="p-4 bg-[#6b9d89]/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">SAM (Serviceable Available)</span>
                      <span className="text-sm text-gray-700">$3.2B</span>
                    </div>
                    <p className="text-xs text-gray-600">AI-powered startup tools for early-stage founders</p>
                  </div>

                  <div className="p-4 bg-[#0d5f4e]/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">SOM (Serviceable Obtainable)</span>
                      <span className="text-sm text-gray-700">$48M</span>
                    </div>
                    <p className="text-xs text-gray-600">Year 5 realistic capture (1.5% of SAM)</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
                  <BookOpen className="w-3 h-3" />
                  Source: Gartner SaaS Market Analysis 2024
                </div>
              </div>
            </section>

            {/* 7. Competitive Landscape - UNLOCKED */}
            <section id="competitive-landscape">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#0d5f4e]" />
                    </div>
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">Competitive Landscape</h2>
                      <p className="text-sm text-gray-600">Key players, positioning, and differentiation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 text-gray-400 hover:text-[#0d5f4e] transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-[#0d5f4e] transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Competitor Cards Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    {
                      name: 'Notion',
                      focus: 'All-in-one workspace',
                      strength: 'Flexibility, strong brand, templates',
                      weakness: 'Not founder-specific, generic workflows',
                      threat: 'High'
                    },
                    {
                      name: 'Asana / Monday',
                      focus: 'Project management',
                      strength: 'Team collaboration, established',
                      weakness: 'Complex for solo founders, no strategy layer',
                      threat: 'Medium'
                    },
                    {
                      name: 'Airtable',
                      focus: 'Database + workflows',
                      strength: 'Data flexibility, automation',
                      weakness: 'Steep learning curve, no execution guidance',
                      threat: 'Medium'
                    }
                  ].map((comp, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-sm font-medium text-gray-900">{comp.name}</h3>
                        <span className={`px-2 py-0.5 text-xs rounded ${
                          comp.threat === 'High' 
                            ? 'bg-gray-900/10 text-gray-900 border border-gray-900/20' 
                            : 'bg-[#6b9d89]/10 text-[#6b9d89] border border-[#6b9d89]/30'
                        }`}>
                          {comp.threat} threat
                        </span>
                      </div>
                      
                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="text-gray-500">Focus:</span>
                          <p className="text-gray-700 mt-0.5">{comp.focus}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Strength:</span>
                          <p className="text-gray-700 mt-0.5">{comp.strength}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Weakness:</span>
                          <p className="text-gray-700 mt-0.5">{comp.weakness}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Positioning Insight */}
                <div className="p-5 bg-gradient-to-br from-[#0d5f4e]/10 to-white rounded-xl border border-[#0d5f4e]/30 mb-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Lightbulb className="w-5 h-5 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-2">Positioning Insight</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Most competitors focus on <span className="font-medium">generic productivity tools</span>. Your startup differentiates by owning the <span className="font-medium text-[#0d5f4e]">strategy-to-execution workflow</span> specifically for founders – connecting vision, planning, and daily tasks in one AI-guided system.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Differentiation Summary */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-xs font-medium text-gray-600 mb-3">Your Differentiation</h4>
                    {[
                      'Workflow-first vs tool-first approach',
                      'AI-native execution planning',
                      'Founder-specific templates & guidance',
                      'Faster time-to-value for non-technical users'
                    ].map((text, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-medium text-gray-600 mb-3">Recommended Strategy</h4>
                    <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700 leading-relaxed">
                      Position as <span className="font-medium">"The Operating System for Startup Execution"</span> – not another project manager, but the intelligence layer connecting founder strategy to daily action.
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600 mt-3">
                      <Target className="w-3 h-3" />
                      <span>Niche down to accelerator-backed founders initially</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-2">
                  <Brain className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-gray-600">
                    <span className="font-medium text-gray-900">AI-inferred (editable):</span> Competitive analysis based on G2 reviews, feature comparisons, and market positioning data (January 2025).
                  </div>
                </div>
              </div>
            </section>

            {/* 8. Target Customer - UNLOCKED */}
            <section id="target-customer">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-[#0d5f4e]" />
                    </div>
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">Target Customer</h2>
                      <p className="text-sm text-gray-600">Primary buyers and their motivations</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 text-gray-400 hover:text-[#0d5f4e] transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-[#0d5f4e] transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Persona Cards */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  {[
                    {
                      title: 'Non-Technical Pre-Seed Founder',
                      icon: <Briefcase className="w-5 h-5" />,
                      companySize: '1-3 founders',
                      stage: 'Idea to Pre-seed',
                      goals: [
                        'Validate product-market fit quickly',
                        'Move from idea to executable plan',
                        'Stay organized without complexity'
                      ],
                      pains: [
                        'Overwhelmed by strategic frameworks',
                        'Too many disconnected tools',
                        'No clear roadmap from vision to MVP'
                      ],
                      trigger: 'Joining accelerator or raising first $50K'
                    },
                    {
                      title: 'Solo Founder / Indie Hacker',
                      icon: <Code className="w-5 h-5" />,
                      companySize: 'Solo or small team (2-5)',
                      stage: 'Pre-seed to Seed',
                      goals: [
                        'Execute faster with limited resources',
                        'Balance product, marketing & ops',
                        'Track progress without admin overhead'
                      ],
                      pains: [
                        'Context switching between roles',
                        'Generic tools miss startup nuances',
                        'No AI guidance for prioritization'
                      ],
                      trigger: 'Scaling beyond solo capacity or first hire'
                    }
                  ].map((persona, index) => (
                    <div key={index} className="p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center text-[#0d5f4e]">
                          {persona.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-gray-900 mb-1">{persona.title}</h3>
                          <div className="flex flex-col gap-1 text-xs text-gray-600">
                            <div className="flex items-center gap-1.5">
                              <Users className="w-3 h-3" />
                              {persona.companySize}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <TrendingUp className="w-3 h-3" />
                              {persona.stage}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="text-xs font-medium text-gray-600 mb-2">Goals</h4>
                          <ul className="space-y-1.5">
                            {persona.goals.map((goal, i) => (
                              <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                                <CheckCircle2 className="w-3 h-3 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                                <span>{goal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-medium text-gray-600 mb-2">Pain Points</h4>
                          <ul className="space-y-1.5">
                            {persona.pains.map((pain, i) => (
                              <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                                <AlertTriangle className="w-3 h-3 text-gray-600 mt-0.5 flex-shrink-0" />
                                <span>{pain}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-3 border-t border-gray-200">
                          <h4 className="text-xs font-medium text-gray-600 mb-1">Buying Trigger</h4>
                          <p className="text-xs text-gray-700">{persona.trigger}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Jobs to Be Done */}
                <div className="p-5 bg-gradient-to-br from-[#0d5f4e]/10 to-white rounded-xl border border-[#0d5f4e]/30 mb-4">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-2">Jobs-to-Be-Done</h3>
                      <p className="text-sm text-gray-700 leading-relaxed italic">
                        "When I'm building my startup, I want one intelligent system that connects my strategy to daily execution, so I don't waste time on tools and can focus on building and validating."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Messaging Recommendation */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="text-xs font-medium text-gray-600 mb-2">Recommended Messaging</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-medium">"From vision to validated MVP in weeks, not months"</span> – emphasize speed and clarity over features.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="text-xs font-medium text-gray-600 mb-2">First-30-Days Value</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Help founders <span className="font-medium">generate a validated roadmap</span> and execute their first sprint – measurable progress fast.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-2">
                  <Brain className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-gray-600">
                    <span className="font-medium text-gray-900">AI-inferred (editable):</span> Persona data based on founder interviews, accelerator cohort analysis, and buyer research (250+ data points).
                  </div>
                </div>
              </div>
            </section>

            {/* 9. Market Intelligence - UNLOCKED */}
            <section id="market-intelligence">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-[#0d5f4e]" />
                    </div>
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">Market Intelligence</h2>
                      <p className="text-sm text-gray-600">Trends, signals, and timing</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 text-gray-400 hover:text-[#0d5f4e] transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-[#0d5f4e] transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Key Trends */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Key Market Trends</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        icon: <Sparkles className="w-4 h-4" />,
                        title: 'AI adoption in founder workflows accelerating',
                        detail: '67% of startups now use AI tools for planning (up from 34% in 2023)'
                      },
                      {
                        icon: <Package className="w-4 h-4" />,
                        title: 'Tool consolidation trend',
                        detail: 'Founders reducing from 12+ tools to 3-5 integrated platforms'
                      },
                      {
                        icon: <Clock className="w-4 h-4" />,
                        title: 'Faster go-to-market expectations',
                        detail: 'Investors expect MVP in 8-12 weeks vs 6 months previously'
                      },
                      {
                        icon: <Award className="w-4 h-4" />,
                        title: 'Rise of execution-focused SaaS',
                        detail: 'Shift from strategy tools to strategy + execution platforms'
                      }
                    ].map((trend, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-start gap-2 mb-2">
                          <div className="text-[#0d5f4e] mt-0.5">{trend.icon}</div>
                          <h4 className="text-sm font-medium text-gray-900">{trend.title}</h4>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">{trend.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Success Signals */}
                <div className="p-5 bg-gradient-to-br from-[#0d5f4e]/10 to-white rounded-xl border border-[#0d5f4e]/30 mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Success Signals</h3>
                  <div className="space-y-2">
                    {[
                      { icon: <TrendingUp className="w-4 h-4" />, text: 'YC and top accelerators adopting AI-powered founder tools for cohorts' },
                      { icon: <DollarSign className="w-4 h-4" />, text: 'Vertical SaaS for founders seeing 3x higher retention than horizontal tools' },
                      { icon: <Rocket className="w-4 h-4" />, text: '$200M+ invested in startup operations platforms in 2024' },
                      { icon: <Users className="w-4 h-4" />, text: 'Founder communities (5M+ members) actively seeking workflow solutions' }
                    ].map((signal, index) => (
                      <div key={index} className="flex items-start gap-3 text-sm text-gray-700">
                        <div className="text-[#0d5f4e] mt-0.5">{signal.icon}</div>
                        <span>{signal.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emerging Opportunities */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Emerging Opportunities</h3>
                  <div className="space-y-3">
                    {[
                      {
                        title: 'AI-assisted strategic planning',
                        opportunity: 'Founders want AI to generate roadmaps, not just track them',
                        timing: 'Now'
                      },
                      {
                        title: 'Accelerator partnerships',
                        opportunity: 'B2B deals with YC, Techstars, 500 Global as distribution channels',
                        timing: '6-12 months'
                      },
                      {
                        title: 'Founder community integration',
                        opportunity: 'Embed within Indie Hackers, Product Hunt, founder Slack groups',
                        timing: 'Now'
                      },
                      {
                        title: 'Vertical expansion',
                        opportunity: 'Purpose-built versions for SaaS, DTC, fintech, climate tech founders',
                        timing: '12-18 months'
                      }
                    ].map((opp, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-sm font-medium text-gray-900">{opp.title}</h4>
                          <span className="px-2 py-0.5 bg-[#0d5f4e]/10 text-[#0d5f4e] rounded text-xs whitespace-nowrap ml-2">
                            {opp.timing}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">{opp.opportunity}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sources */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-gray-500">Sources:</span>
                  {[
                    'McKinsey – AI in Startups 2024',
                    'Gartner – SaaS Productivity Tools',
                    'YC Founder Survey',
                    'CB Insights – Startup Ops'
                  ].map((source, index) => (
                    <div key={index} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700 flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {source}
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-start gap-2">
                  <Brain className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-gray-600">
                    <span className="font-medium text-gray-900">AI-inferred (editable):</span> Market intelligence synthesized from 12 industry reports, 40+ founder interviews, and VC market maps (Jan 2025).
                  </div>
                </div>
              </div>
            </section>

            {/* Remaining sections - simplified for space */}
            {/* 10-16 would follow similar patterns */}

            <div className="text-center py-12 text-sm text-gray-500">
              <p>Sections 10-16 continue below...</p>
              <p className="mt-2">(Unit Economics, Revenue Projections, Risk Assessment, Technology, Team & Roadmap, Strategic Opportunities, Sources & Questions)</p>
            </div>

          </div>
        </div>

        {/* RIGHT PANEL - INTELLIGENCE (320px fixed, sticky) */}
        <div className="sticky top-16 h-[calc(100vh-64px)] w-[320px] border-l border-gray-200 bg-white overflow-y-auto flex-shrink-0">
          <div className="p-5 space-y-5">
            {/* Quick Stats */}
            <div className="p-4 bg-gradient-to-br from-[#0d5f4e]/10 to-white rounded-xl border border-[#0d5f4e]/20">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-4 h-4 text-[#0d5f4e]" />
                <h3 className="text-xs font-sans font-medium text-gray-900">Quick Stats</h3>
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Overall Score</span>
                  <span className="font-medium text-[#0d5f4e]">{overallScore}/100</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Verdict</span>
                  <span className={`px-2 py-0.5 ${verdictColors.bg} text-white rounded text-xs font-medium`}>{verdict}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Risk Level</span>
                  <span className="text-gray-900">{riskLevel}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">AI Confidence</span>
                  <span className="text-[#0d5f4e] font-medium">{confidence}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Ranking</span>
                  <span className="text-gray-900">{rank}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Similar Ideas</span>
                  <span className="text-gray-900">{similarIdeas}</span>
                </div>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="p-4 bg-white rounded-xl border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="w-4 h-4 text-[#0d5f4e]" />
                <h3 className="text-xs font-sans font-medium text-gray-900">AI Assistant</h3>
              </div>
              
              <div className="mb-3">
                <input
                  type="text"
                  value={aiQuestion}
                  onChange={(e) => setAiQuestion(e.target.value)}
                  placeholder="Ask about this section..."
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#0d5f4e] focus:ring-1 focus:ring-[#0d5f4e]"
                />
                <button className="w-full mt-2 px-3 py-2 bg-[#0d5f4e] text-white rounded-lg text-xs font-medium hover:bg-[#0a4a3b] transition-colors flex items-center justify-center gap-2">
                  <Send className="w-3 h-3" />
                  Ask AI
                </button>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-gray-500 mb-2">Recent questions:</div>
                {[
                  'Why is competition risk high?',
                  'How was TAM calculated?',
                  'What\'s the best GTM strategy?'
                ].map((q, i) => (
                  <button key={i} className="w-full text-left px-3 py-2 text-xs text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Section Actions */}
            <div className="p-4 bg-white rounded-xl border border-gray-200">
              <h3 className="text-xs font-sans font-medium text-gray-900 mb-3">Section Actions</h3>
              
              <div className="space-y-2">
                <button className="w-full px-3 py-2 text-xs text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2">
                  <Copy className="w-3 h-3" />
                  Copy text
                </button>
                <button className="w-full px-3 py-2 text-xs text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2">
                  <Share2 className="w-3 h-3" />
                  Share section
                </button>
                <button className="w-full px-3 py-2 text-xs text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2">
                  <Plus className="w-3 h-3" />
                  Create task
                </button>
                <button className="w-full px-3 py-2 text-xs text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2">
                  <RefreshCw className="w-3 h-3" />
                  Regenerate
                </button>
              </div>
            </div>

            {/* Contextual Insights */}
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-start gap-2 mb-3">
                <Lightbulb className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-sans font-medium text-gray-900 mb-1">Score Explanation</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    High confidence based on market data from 3 validated sources and founder pain point research.
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="text-xs text-gray-600 mb-2">Data Sources:</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <Eye className="w-3 h-3 text-[#0d5f4e]" />
                    <span className="text-gray-700">Market size (detected)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Brain className="w-3 h-3 text-gray-600" />
                    <span className="text-gray-700">ICP clarity (inferred)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Nudge */}
            <div className="p-4 bg-gradient-to-br from-gray-900/10 to-gray-900/5 rounded-xl border border-gray-300">
              <Crown className="w-5 h-5 text-[#0d5f4e] mb-2" />
              <h4 className="text-sm font-medium text-gray-900 mb-1">Unlock Full Report</h4>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                Get competitor analysis, customer personas, and market intelligence.
              </p>
              <button className="w-full px-3 py-2 bg-[#0d5f4e] text-white rounded-lg text-xs font-medium hover:bg-[#0a4a3b] transition-colors">
                Upgrade Now
              </button>
              <div className="mt-2 text-xs text-center text-gray-500">
                6 credits remaining
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STICKY FOOTER CTA */}
      <div className="sticky bottom-0 z-40 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700">
        <div className="max-w-[1920px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-[#0d5f4e]" />
              <span className="text-sm font-medium text-white">Unlock Full Market Analysis</span>
            </div>
            <span className="text-xs text-gray-400">• 6 credits remaining</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 bg-white/10 text-white border border-white/20 rounded-lg text-sm hover:bg-white/20 transition-colors">
              Create Lean Canvas
            </button>
            <button className="px-5 py-2.5 bg-white/10 text-white border border-white/20 rounded-lg text-sm hover:bg-white/20 transition-colors">
              Generate Pitch Deck
            </button>
            <button className="px-5 py-2.5 bg-[#0d5f4e] text-white rounded-lg text-sm font-medium hover:bg-[#0a4a3b] transition-colors">
              Match Investors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}