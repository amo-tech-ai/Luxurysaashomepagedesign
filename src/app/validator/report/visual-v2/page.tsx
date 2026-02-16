'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
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
  Database,
  Clock,
  Code,
  Package,
  FileText,
  ExternalLink,
  PlayCircle,
  ArrowRight,
  Circle,
  Rocket,
  GitBranch,
  Layers,
  Activity,
  Award,
  BookOpen,
  Download
} from 'lucide-react';

interface ValidatorReportV2Props {
  reportId?: string;
  onNavigate?: (route: string) => void;
}

export default function ValidatorReportV2({ reportId, onNavigate }: ValidatorReportV2Props) {
  const [activeSection, setActiveSection] = useState(0);
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  const [stickyBarVisible, setStickyBarVisible] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [aiPanelSection, setAiPanelSection] = useState(0);
  const [financialScenario, setFinancialScenario] = useState<'conservative' | 'base' | 'aggressive'>('base');
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger load animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Sticky bar scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setStickyBarVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (index: number) => {
    setExpandedSections(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  // Production data
  const reportData = {
    overallScore: 78,
    verdict: 'GO — Proceed with Controls',
    confidence: 'High',
    scores: {
      problem: 8.5,
      market: 8.2,
      product: 7.4,
      team: 6.8,
      risk: 7.1,
    },
    strengths: [
      'Clear pain point in $10B market',
      'AI automation saves 15 hrs/week',
    ],
    concerns: [
      'Team needs senior marketing hire',
    ],
    nextSteps: [
      'Validate pricing with 20 users',
      'Hire marketing lead',
      'Ship beta by Week 8',
    ],
    market: {
      tam: '$10.4B',
      sam: '$2.5B',
      som: '$500M',
      growth: '28% CAGR',
    },
    mvpWeeks: 12,
    competitors: [
      { name: 'Notion', strength: 'Documentation', weakness: 'No automation', position: 'Incumbent' },
      { name: 'ClickUp', strength: 'Task management', weakness: 'Complex UI', position: 'Direct' },
      { name: 'Linear', strength: 'Engineering focus', weakness: 'Limited for founders', position: 'Adjacent' },
    ],
    risks: [
      { type: 'Market', severity: 'Medium', risk: 'AI hype cycle cooling', mitigation: 'Focus on proven ROI metrics' },
      { type: 'Product', severity: 'Low', risk: 'Integration complexity', mitigation: '3 integrations for MVP only' },
      { type: 'Team', severity: 'High', risk: 'No marketing expertise', mitigation: 'Hire senior PMM by Week 4' },
    ],
    mvpFeatures: [
      { name: 'AI Dashboard', priority: 'P0', weeks: 3 },
      { name: 'Slack Integration', priority: 'P0', weeks: 2 },
      { name: 'Daily Digest', priority: 'P1', weeks: 2 },
      { name: 'Custom Workflows', priority: 'P2', weeks: 5 },
    ],
    techStack: [
      { category: 'Frontend', tech: 'Next.js 14, React, TypeScript', rationale: 'Fast, SEO-friendly, type-safe' },
      { category: 'Backend', tech: 'Node.js, Postgres, Prisma', rationale: 'Scalable, relational data model' },
      { category: 'AI/ML', tech: 'OpenAI GPT-4, LangChain', rationale: 'Best-in-class reasoning, RAG pipeline' },
      { category: 'Infra', tech: 'Vercel, Supabase, Stripe', rationale: 'Fast deployment, managed DB, payments' },
    ],
    revenueModel: {
      pricing: [
        { tier: 'Starter', price: '$29/mo', target: 'Solo founders', features: ['1 workspace', '50 AI queries/mo'] },
        { tier: 'Growth', price: '$99/mo', target: 'Small teams (2-5)', features: ['5 workspaces', '500 AI queries/mo'] },
        { tier: 'Scale', price: '$299/mo', target: 'Teams (6-20)', features: ['Unlimited', 'Custom integrations'] },
      ],
      ltv: '$3,600',
      cac: '$450',
      payback: '4.5 months',
    },
    teamNeeds: [
      { role: 'Sr. Marketing Lead', urgency: 'Week 4', reason: 'No GTM expertise on team' },
      { role: 'Founding Engineer', urgency: 'Week 8', reason: 'Scale backend as users grow' },
      { role: 'Design Contractor', urgency: 'Week 12', reason: 'Polish UI before launch' },
    ],
    financials: {
      conservative: { y1: '$120K', y2: '$480K', y3: '$1.2M' },
      base: { y1: '$240K', y2: '$960K', y3: '$2.8M' },
      aggressive: { y1: '$480K', y2: '$1.8M', y3: '$5.5M' },
    },
  };

  const sections = [
    { id: 0, label: 'Report Summary', icon: BarChart3 },
    { id: 1, label: 'Problem Clarity', icon: Target },
    { id: 2, label: 'Customer Use Case', icon: Users },
    { id: 3, label: 'Market Sizing', icon: TrendingUp },
    { id: 4, label: 'Competition', icon: Shield },
    { id: 5, label: 'Risks & Assumptions', icon: AlertTriangle },
    { id: 6, label: 'MVP Scope', icon: Package },
    { id: 7, label: 'Next Steps', icon: Calendar },
    { id: 8, label: 'Scores Matrix', icon: BarChart3 },
    { id: 9, label: 'Tech Stack', icon: Code },
    { id: 10, label: 'Revenue Model', icon: DollarSign },
    { id: 11, label: 'Team & Hiring', icon: Users },
    { id: 12, label: 'Key Questions', icon: AlertTriangle },
    { id: 13, label: 'Resources', icon: FileText },
    { id: 14, label: 'Financial Projections', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header with fade-in animation */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#E8E6E1]"
      >
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
              <span>Visual Intelligence Report #{reportId || '001'}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="md:hidden p-2 hover:bg-[#F5F3EF] rounded-lg transition-colors"
            >
              {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:block px-4 py-2 bg-[#F5F3EF] hover:bg-[#E8E6E1] text-[#212427] text-sm font-medium rounded-lg transition-colors"
            >
              Export PDF
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate?.('home-v8')}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#0d5f4e] hover:bg-[#0a4a3b] text-white text-sm font-medium rounded-lg transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Sticky Mini Score Bar with slide-down animation */}
      <AnimatePresence>
        {stickyBarVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            className="fixed top-[73px] left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-b border-[#E8E6E1] shadow-sm"
          >
            <div className="px-6 py-3 flex items-center justify-between max-w-7xl mx-auto">
              <div className="flex items-center gap-6">
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] flex items-center justify-center text-white font-bold text-sm"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(13, 95, 78, 0)',
                      '0 0 0 8px rgba(13, 95, 78, 0.1)',
                      '0 0 0 0 rgba(13, 95, 78, 0)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {reportData.overallScore}
                </motion.div>
                <div className="text-sm">
                  <div className="font-semibold text-[#212427]">{reportData.verdict}</div>
                  <div className="text-xs text-[#6B7280]">Confidence: {reportData.confidence}</div>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-4 text-sm text-[#6B7280]">
                <span>Market: <span className="text-[#0d5f4e] font-semibold">{reportData.market.sam}</span></span>
                <span className="text-[#E8E6E1]">•</span>
                <span>MVP: <span className="text-[#0d5f4e] font-semibold">{reportData.mvpWeeks} weeks</span></span>
              </div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm text-[#0d5f4e] hover:text-[#0a4a3b] font-medium transition-colors"
              >
                Back to top ↑
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex">
        {/* LEFT NAVIGATION with slide-in */}
        <motion.aside
          initial={{ x: -240, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`
            fixed md:sticky top-[73px] left-0 h-[calc(100vh-73px)] z-30
            w-60 bg-white border-r border-[#E8E6E1]
            transform transition-transform duration-300
            ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}
        >
          <div className="p-6 space-y-6 overflow-y-auto h-full">
            {/* Progress */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                Validation Progress
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6B7280]">Complete</span>
                  <span className="text-[#0d5f4e] font-semibold">{reportData.overallScore}%</span>
                </div>
                <div className="h-2 bg-[#F5F3EF] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${reportData.overallScore}%` }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Mini Score Bars with staggered animation */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                Key Factors
              </div>
              {Object.entries(reportData.scores).map(([key, value], index) => (
                <div key={key} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#6B7280] capitalize">{key}</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      className="text-[#212427] font-medium"
                    >
                      {value}
                    </motion.span>
                  </div>
                  <div className="h-1.5 bg-[#F5F3EF] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(value / 10) * 100}%` }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full rounded-full ${
                        value >= 8 ? 'bg-[#0d5f4e]' :
                        value >= 6 ? 'bg-[#6b9d89]' :
                        'bg-[#6B7280]'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Section Navigator */}
            <nav className="space-y-1">
              <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-3">
                Sections
              </div>
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.03 }}
                    onClick={() => {
                      setActiveSection(section.id);
                      setMobileNavOpen(false);
                      const element = document.getElementById(`section-${section.id}`);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    whileHover={{ x: 4 }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                      activeSection === section.id
                        ? 'bg-[#E8F4F1] text-[#0d5f4e] font-medium border border-[#0d5f4e]'
                        : 'text-[#6B7280] hover:bg-[#F5F3EF] hover:text-[#212427]'
                    }`}
                  >
                    <span className="text-xs font-semibold text-[#9CA3AF] w-5">
                      {section.id.toString().padStart(2, '0')}
                    </span>
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{section.label}</span>
                  </motion.button>
                );
              })}
            </nav>
          </div>
        </motion.aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 px-6 md:px-10 py-10 max-w-4xl">
          {/* SECTION 0: HERO with animated score gauge */}
          <motion.section
            id="section-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mb-16 scroll-mt-24"
          >
            <div className="bg-white rounded-2xl border border-[#E8E6E1] p-8 shadow-sm relative overflow-hidden">
              {/* Confidence shimmer effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 2,
                  delay: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(13, 95, 78, 0.1) 50%, transparent 100%)',
                }}
              />

              {/* Score Gauge */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 relative z-10">
                <AnimatedScoreGauge score={reportData.overallScore} verdict={reportData.verdict} />

                {/* Insight Cards with stagger */}
                <div className="flex-1 space-y-3">
                  {reportData.strengths.map((strength, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-[#E8F4F1] border border-[#0d5f4e]/20 rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-[#212427]">{strength}</div>
                    </motion.div>
                  ))}
                  {reportData.concerns.map((concern, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-[#F5F3EF] border border-[#6B7280]/20 rounded-xl"
                    >
                      <AlertTriangle className="w-5 h-5 text-[#6B7280] mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-[#212427]">{concern}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Next Steps Action Strip */}
              <div className="pt-6 border-t border-[#E8E6E1]">
                <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-3">
                  What to do next
                </div>
                <div className="flex flex-wrap gap-2">
                  {reportData.nextSteps.map((step, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-[#0d5f4e] hover:bg-[#0a4a3b] text-white text-sm rounded-full transition-colors flex items-center gap-2"
                    >
                      <span>{step}</span>
                      <ArrowRight className="w-3 h-3" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* SECTION 1: PROBLEM CLARITY */}
          <SectionShell
            id={1}
            title="Problem Clarity"
            agent="Problem Agent"
            score={reportData.scores.problem}
            onExpand={() => toggleSection(1)}
            isExpanded={expandedSections.includes(1)}
            onOpenAI={() => setAiPanelSection(1)}
          >
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <InsightCard
                icon={<Users className="w-5 h-5 text-[#0d5f4e]" />}
                label="WHO"
                value="Growth-stage founders"
                description="Building SaaS products"
                index={0}
              />
              <InsightCard
                icon={<AlertTriangle className="w-5 h-5 text-[#0d5f4e]" />}
                label="PAIN"
                value="Scattered tools"
                description="7 apps for 1 workflow"
                index={1}
              />
              <InsightCard
                icon={<Clock className="w-5 h-5 text-[#0d5f4e]" />}
                label="TODAY'S FIX"
                value="Manual copy-paste"
                description="15 hrs/week wasted"
                index={2}
              />
            </div>
            <NextStepStrip action="Validate pricing with 20 beta users this week" />
          </SectionShell>

          {/* SECTION 2: CUSTOMER USE CASE */}
          <SectionShell
            id={2}
            title="Customer Use Case"
            agent="Customer Agent"
            score={8.0}
            onExpand={() => toggleSection(2)}
            isExpanded={expandedSections.includes(2)}
            onOpenAI={() => setAiPanelSection(2)}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Persona Card */}
              <motion.div
                whileHover={{ borderColor: '#0d5f4e', boxShadow: '0 0 0 1px #0d5f4e' }}
                transition={{ duration: 0.2 }}
                className="bg-[#F5F3EF] rounded-xl p-6 border border-[#E8E6E1]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#0d5f4e] flex items-center justify-center text-white font-semibold">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold text-[#212427]">Sarah Mitchell</div>
                    <div className="text-sm text-[#6B7280]">Head of Growth, 50-person SaaS</div>
                  </div>
                </div>
                <p className="text-sm text-[#212427] leading-relaxed">
                  "I spend 3 hours daily switching between Notion, HubSpot, Linear, and Slack just to understand what's actually happening."
                </p>
              </motion.div>

              {/* Before/After */}
              <div className="space-y-3">
                <div className="bg-[#F5F3EF] rounded-xl p-4 border border-[#E8E6E1]">
                  <div className="text-xs font-semibold text-[#6B7280] uppercase mb-2">Before</div>
                  <div className="text-sm text-[#212427]">15 hours/week on manual status updates</div>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-[#0d5f4e]" />
                </div>
                <div className="bg-[#E8F4F1] rounded-xl p-4 border border-[#0d5f4e]">
                  <div className="text-xs font-semibold text-[#0d5f4e] uppercase mb-2">After</div>
                  <div className="text-sm text-[#212427] font-semibold">2 hours/week — AI handles the rest</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center p-6 bg-[#E8F4F1] rounded-xl border border-[#0d5f4e]">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0d5f4e] mb-1">13 hours</div>
                <div className="text-sm text-[#6B7280]">saved per week</div>
              </div>
            </div>
            <NextStepStrip action="Interview 10 more users to validate time savings" />
          </SectionShell>

          {/* SECTION 3: MARKET SIZING */}
          <SectionShell
            id={3}
            title="Market Sizing"
            agent="Market Agent"
            score={reportData.scores.market}
            onExpand={() => toggleSection(3)}
            isExpanded={expandedSections.includes(3)}
            onOpenAI={() => setAiPanelSection(3)}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <AnimatedDonutChart
                tam={reportData.market.tam}
                sam={reportData.market.sam}
                som={reportData.market.som}
              />

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#F5F3EF] rounded-xl p-4 border border-[#E8E6E1]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-[#0E3E1B] opacity-30" />
                    <span className="text-sm font-semibold text-[#212427]">TAM — {reportData.market.tam}</span>
                  </div>
                  <p className="text-xs text-[#6B7280]">All SaaS founders globally</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-[#F5F3EF] rounded-xl p-4 border border-[#E8E6E1]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-[#6b9d89]" />
                    <span className="text-sm font-semibold text-[#212427]">SAM — {reportData.market.sam}</span>
                  </div>
                  <p className="text-xs text-[#6B7280]">English-speaking, growth-stage</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-[#E8F4F1] rounded-xl p-4 border border-[#0d5f4e]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-[#0d5f4e]" />
                    <span className="text-sm font-semibold text-[#212427]">SOM — {reportData.market.som}</span>
                  </div>
                  <p className="text-xs text-[#6B7280]">You can reach in Year 1</p>
                </motion.div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#E8F4F1] rounded-full border border-[#0d5f4e]">
                  <TrendingUp className="w-4 h-4 text-[#0d5f4e]" />
                  <span className="text-sm font-semibold text-[#0d5f4e]">{reportData.market.growth}</span>
                </div>
              </div>
            </div>
            <NextStepStrip action="Download full TAM calculation spreadsheet" />
          </SectionShell>

          {/* SECTION 4: COMPETITION */}
          <SectionShell
            id={4}
            title="Competition"
            agent="Competitive Agent"
            score={7.8}
            onExpand={() => toggleSection(4)}
            isExpanded={expandedSections.includes(4)}
            onOpenAI={() => setAiPanelSection(4)}
          >
            <div className="space-y-4 mb-6">
              {reportData.competitors.map((competitor, idx) => (
                <CompetitorCard key={idx} competitor={competitor} index={idx} />
              ))}
            </div>

            {/* Competitive Matrix */}
            <div className="bg-[#F5F3EF] rounded-xl p-6 border border-[#E8E6E1]">
              <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-4">
                Your Positioning
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm font-semibold text-[#212427] mb-2">What you do better</div>
                  <ul className="space-y-1 text-sm text-[#6B7280]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                      <span>AI-powered automation (not just docs)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                      <span>Founder-specific workflows built-in</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#212427] mb-2">Where you're vulnerable</div>
                  <ul className="space-y-1 text-sm text-[#6B7280]">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#6B7280] mt-0.5 flex-shrink-0" />
                      <span>No brand recognition yet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#6B7280] mt-0.5 flex-shrink-0" />
                      <span>Smaller integration ecosystem</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <NextStepStrip action="Create 1-page competitive battle card for sales" />
          </SectionShell>

          {/* SECTION 5: RISKS & ASSUMPTIONS */}
          <SectionShell
            id={5}
            title="Risks & Assumptions"
            agent="Risk Agent"
            score={reportData.scores.risk}
            onExpand={() => toggleSection(5)}
            isExpanded={expandedSections.includes(5)}
            onOpenAI={() => setAiPanelSection(5)}
          >
            <div className="space-y-3 mb-6">
              {reportData.risks.map((risk, idx) => (
                <RiskCard key={idx} risk={risk} index={idx} />
              ))}
            </div>

            {/* Risk Matrix Visual */}
            <div className="bg-[#F5F3EF] rounded-xl p-6 border border-[#E8E6E1]">
              <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-4">
                Risk Mitigation Priority
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border-2 border-[#0d5f4e]">
                  <div className="text-xs font-semibold text-[#0d5f4e] uppercase mb-1">High Priority</div>
                  <div className="text-sm text-[#212427]">Hire marketing lead</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-[#6b9d89]">
                  <div className="text-xs font-semibold text-[#6b9d89] uppercase mb-1">Medium Priority</div>
                  <div className="text-sm text-[#212427]">Track AI market sentiment</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-[#E8E6E1]">
                  <div className="text-xs font-semibold text-[#6B7280] uppercase mb-1">Low Priority</div>
                  <div className="text-sm text-[#212427]">Limit integrations for MVP</div>
                </div>
              </div>
            </div>

            <NextStepStrip action="Review and update risk register weekly" />
          </SectionShell>

          {/* SECTION 6: MVP SCOPE */}
          <SectionShell
            id={6}
            title="MVP Scope"
            agent="Product Agent"
            score={reportData.scores.product}
            onExpand={() => toggleSection(6)}
            isExpanded={expandedSections.includes(6)}
            onOpenAI={() => setAiPanelSection(6)}
          >
            <div className="space-y-3 mb-6">
              {reportData.mvpFeatures.map((feature, idx) => (
                <MVPFeatureCard key={idx} feature={feature} index={idx} />
              ))}
            </div>

            {/* Timeline Visual */}
            <div className="bg-[#F5F3EF] rounded-xl p-6 border border-[#E8E6E1]">
              <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-4">
                12-Week MVP Timeline
              </div>
              <div className="flex items-center gap-2">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-8 flex-1 rounded ${
                      i < 3 ? 'bg-[#0d5f4e]' :
                      i < 5 ? 'bg-[#6b9d89]' :
                      i < 7 ? 'bg-[#6b9d89]' :
                      'bg-[#E8E6E1]'
                    } flex items-center justify-center text-xs text-white font-semibold`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-3 text-xs text-[#6B7280]">
                <span>Week 1</span>
                <span>Week 12 — Launch</span>
              </div>
            </div>

            <NextStepStrip action="Build detailed Gantt chart in Linear/Jira" />
          </SectionShell>

          {/* SECTION 7: NEXT STEPS */}
          <SectionShell
            id={7}
            title="Next Steps"
            agent="Strategy Agent"
            score={8.3}
            onExpand={() => toggleSection(7)}
            isExpanded={expandedSections.includes(7)}
            onOpenAI={() => setAiPanelSection(7)}
          >
            <div className="space-y-4">
              <div className="bg-[#E8F4F1] rounded-xl p-6 border-2 border-[#0d5f4e]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#0d5f4e] flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-[#212427]">This Week</div>
                    <div className="text-sm text-[#6B7280]">Foundation & Validation</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5" />
                    <span>Interview 20 users to validate pricing ($29/$99/$299)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5" />
                    <span>Post 2 jobs for marketing lead (LinkedIn, YC)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5F3EF] rounded-xl p-6 border border-[#E8E6E1]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#6b9d89] flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-[#212427]">Weeks 2-8</div>
                    <div className="text-sm text-[#6B7280]">Build & Hire</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-[#6B7280]">
                  <li className="flex items-start gap-2">
                    <Circle className="w-4 h-4 mt-0.5" />
                    <span>Ship AI Dashboard + Slack integration (P0 features)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle className="w-4 h-4 mt-0.5" />
                    <span>Hire marketing lead and founding engineer</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5F3EF] rounded-xl p-6 border border-[#E8E6E1]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8E6E1] flex items-center justify-center text-[#6B7280] font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-[#212427]">Week 12+</div>
                    <div className="text-sm text-[#6B7280]">Beta Launch</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-[#6B7280]">
                  <li className="flex items-start gap-2">
                    <Circle className="w-4 h-4 mt-0.5" />
                    <span>Launch to 50-person waitlist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Circle className="w-4 h-4 mt-0.5" />
                    <span>Track retention, NPS, and time saved metrics</span>
                  </li>
                </ul>
              </div>
            </div>

            <NextStepStrip action="Set up weekly founder check-ins to track progress" />
          </SectionShell>

          {/* SECTION 8: SCORES MATRIX */}
          <SectionShell
            id={8}
            title="Scores Matrix"
            agent="Analysis Agent"
            score={7.8}
            onExpand={() => toggleSection(8)}
            isExpanded={expandedSections.includes(8)}
            onOpenAI={() => setAiPanelSection(8)}
          >
            <ScoresMatrix scores={reportData.scores} />
            <NextStepStrip action="Focus on improving Team score (6.8 → 8.0)" />
          </SectionShell>

          {/* SECTION 9: TECH STACK */}
          <SectionShell
            id={9}
            title="Tech Stack"
            agent="Technical Agent"
            score={8.1}
            onExpand={() => toggleSection(9)}
            isExpanded={expandedSections.includes(9)}
            onOpenAI={() => setAiPanelSection(9)}
          >
            <div className="space-y-3 mb-6">
              {reportData.techStack.map((tech, idx) => (
                <TechStackCard key={idx} tech={tech} index={idx} />
              ))}
            </div>

            <div className="bg-[#E8F4F1] rounded-xl p-6 border border-[#0d5f4e]">
              <div className="text-xs font-semibold text-[#0d5f4e] uppercase tracking-wider mb-3">
                Why This Stack?
              </div>
              <p className="text-sm text-[#212427] leading-relaxed mb-3">
                Optimized for <span className="font-semibold">speed to market</span> (12 weeks) with proven, modern tools. Avoids bleeding-edge tech that could delay launch.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Rocket className="w-4 h-4 text-[#0d5f4e]" />
                <span className="text-[#6B7280]">Estimated time to first deploy: <span className="font-semibold text-[#0d5f4e]">Week 2</span></span>
              </div>
            </div>

            <NextStepStrip action="Set up GitHub repo and Vercel deployment pipeline" />
          </SectionShell>

          {/* SECTION 10: REVENUE MODEL */}
          <SectionShell
            id={10}
            title="Revenue Model"
            agent="Finance Agent"
            score={7.9}
            onExpand={() => toggleSection(10)}
            isExpanded={expandedSections.includes(10)}
            onOpenAI={() => setAiPanelSection(10)}
          >
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {reportData.revenueModel.pricing.map((tier, idx) => (
                <PricingTierCard key={idx} tier={tier} index={idx} />
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <MetricCard label="LTV" value={reportData.revenueModel.ltv} index={0} />
              <MetricCard label="CAC" value={reportData.revenueModel.cac} index={1} />
              <MetricCard label="Payback" value={reportData.revenueModel.payback} index={2} />
            </div>

            <NextStepStrip action="Test pricing with 20 discovery calls this week" />
          </SectionShell>

          {/* SECTION 11: TEAM & HIRING */}
          <SectionShell
            id={11}
            title="Team & Hiring"
            agent="Team Agent"
            score={reportData.scores.team}
            onExpand={() => toggleSection(11)}
            isExpanded={expandedSections.includes(11)}
            onOpenAI={() => setAiPanelSection(11)}
          >
            <div className="space-y-3 mb-6">
              {reportData.teamNeeds.map((need, idx) => (
                <TeamNeedCard key={idx} need={need} index={idx} />
              ))}
            </div>

            <div className="bg-[#E8F4F1] rounded-xl p-6 border border-[#0d5f4e]">
              <div className="text-xs font-semibold text-[#0d5f4e] uppercase tracking-wider mb-3">
                Hiring Strategy
              </div>
              <p className="text-sm text-[#212427] leading-relaxed">
                Prioritize <span className="font-semibold">marketing lead</span> first (Week 4) to close GTM gap. Then scale engineering (Week 8) as user base grows. Design can be contract-based initially.
              </p>
            </div>

            <NextStepStrip action="Draft job descriptions and post to LinkedIn + YC" />
          </SectionShell>

          {/* SECTION 12: KEY QUESTIONS */}
          <SectionShell
            id={12}
            title="Key Questions"
            agent="Strategy Agent"
            score={7.6}
            onExpand={() => toggleSection(12)}
            isExpanded={expandedSections.includes(12)}
            onOpenAI={() => setAiPanelSection(12)}
          >
            <div className="space-y-4">
              <QuestionCard
                question="Will users pay $99/mo for this?"
                status="Testing"
                action="Run pricing survey with 20 target customers"
                index={0}
              />
              <QuestionCard
                question="Can we ship MVP in 12 weeks with current team?"
                status="At Risk"
                action="Hire founding engineer by Week 4 to derisk timeline"
                index={1}
              />
              <QuestionCard
                question="Is the AI automation reliable enough?"
                status="Validated"
                action="POC shows 92% accuracy on sample data"
                index={2}
              />
              <QuestionCard
                question="What if OpenAI raises API prices 2x?"
                status="Testing"
                action="Model economics at 2x and 3x current cost"
                index={3}
              />
            </div>

            <NextStepStrip action="Revisit open questions in weekly founder sync" />
          </SectionShell>

          {/* SECTION 13: RESOURCES */}
          <SectionShell
            id={13}
            title="Resources"
            agent="Research Agent"
            score={8.2}
            onExpand={() => toggleSection(13)}
            isExpanded={expandedSections.includes(13)}
            onOpenAI={() => setAiPanelSection(13)}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <ResourceCard
                icon={<FileText className="w-5 h-5 text-[#0d5f4e]" />}
                title="Market Research Report"
                description="Full TAM/SAM/SOM calculation with sources"
                action="Download PDF"
                index={0}
              />
              <ResourceCard
                icon={<BarChart3 className="w-5 h-5 text-[#0d5f4e]" />}
                title="Financial Model"
                description="3-year projections with sensitivity analysis"
                action="Open in Sheets"
                index={1}
              />
              <ResourceCard
                icon={<Users className="w-5 h-5 text-[#0d5f4e]" />}
                title="User Interview Notes"
                description="12 interviews with target personas"
                action="View Notion"
                index={2}
              />
              <ResourceCard
                icon={<Code className="w-5 h-5 text-[#0d5f4e]" />}
                title="Tech Spec"
                description="Architecture diagram and API docs"
                action="View Figma"
                index={3}
              />
            </div>

            <NextStepStrip action="Share resources with team in Slack #startup-ai channel" />
          </SectionShell>

          {/* SECTION 14: FINANCIAL PROJECTIONS */}
          <SectionShell
            id={14}
            title="Financial Projections"
            agent="Finance Agent"
            score={7.7}
            onExpand={() => toggleSection(14)}
            isExpanded={expandedSections.includes(14)}
            onOpenAI={() => setAiPanelSection(14)}
          >
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <button
                  onClick={() => setFinancialScenario('conservative')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    financialScenario === 'conservative'
                      ? 'bg-[#0d5f4e] text-white'
                      : 'bg-[#F5F3EF] text-[#6B7280] hover:bg-[#E8E6E1]'
                  }`}
                >
                  Conservative
                </button>
                <button
                  onClick={() => setFinancialScenario('base')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    financialScenario === 'base'
                      ? 'bg-[#0d5f4e] text-white'
                      : 'bg-[#F5F3EF] text-[#6B7280] hover:bg-[#E8E6E1]'
                  }`}
                >
                  Base Case
                </button>
                <button
                  onClick={() => setFinancialScenario('aggressive')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    financialScenario === 'aggressive'
                      ? 'bg-[#0d5f4e] text-white'
                      : 'bg-[#F5F3EF] text-[#6B7280] hover:bg-[#E8E6E1]'
                  }`}
                >
                  Aggressive
                </button>
              </div>

              <FinancialProjectionChart scenario={financialScenario} data={reportData.financials} />
            </div>

            <div className="bg-[#F5F3EF] rounded-xl p-6 border border-[#E8E6E1]">
              <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-3">
                Assumptions ({financialScenario} case)
              </div>
              <ul className="space-y-2 text-sm text-[#212427]">
                <li className="flex items-start gap-2">
                  <Circle className="w-3 h-3 text-[#0d5f4e] mt-1 flex-shrink-0" />
                  <span>
                    {financialScenario === 'conservative' && 'Month-over-month growth: 10%'}
                    {financialScenario === 'base' && 'Month-over-month growth: 20%'}
                    {financialScenario === 'aggressive' && 'Month-over-month growth: 35%'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle className="w-3 h-3 text-[#0d5f4e] mt-1 flex-shrink-0" />
                  <span>Average revenue per account (ARPA): $99/mo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Circle className="w-3 h-3 text-[#0d5f4e] mt-1 flex-shrink-0" />
                  <span>Churn rate: 5% monthly (industry average for new SaaS)</span>
                </li>
              </ul>
            </div>

            <NextStepStrip action="Download full financial model with sensitivity analysis" />
          </SectionShell>
        </main>

        {/* RIGHT AI INSIGHTS PANEL with slide-in */}
        <motion.aside
          initial={{ x: 320, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="hidden lg:block sticky top-[73px] w-80 h-[calc(100vh-73px)] border-l border-[#E8E6E1] overflow-y-auto bg-white"
        >
          <div className="p-6 space-y-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 mb-4"
            >
              <Sparkles className="w-5 h-5 text-[#0d5f4e]" />
              <h3 className="font-serif text-lg text-[#212427]">AI Insights</h3>
            </motion.div>

            {/* Staggered content cards */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.5,
                  },
                },
              }}
              className="space-y-3"
            >
              {['Summary', 'Why It Matters', 'Key Risks', 'How to Test'].map((title) => (
                <motion.div
                  key={title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-2">
                    {title}
                  </div>
                  <div className="bg-[#FAF9F7] rounded-xl border border-[#E8E6E1] p-4">
                    <p className="text-sm text-[#212427] leading-relaxed">
                      {title === 'Summary' && 'This section shows strong validation. The problem is clear, market is proven, and customer need is urgent.'}
                      {title === 'Why It Matters' && 'Without clear problem definition, you\'ll build features users don\'t need. This clarity drives 80% of early traction.'}
                      {title === 'Key Risks' && 'Assumption: Users will pay $50/mo. Test with beta cohort to validate price sensitivity.'}
                      {title === 'How to Test' && 'Interview 10-20 users with this exact pain point. Ask: "Would you pay X for Y?" Track conversion in beta.'}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Confidence bar */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                AI Confidence
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-[#F5F3EF] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-full bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] rounded-full"
                  />
                </div>
                <span className="text-sm font-semibold text-[#0d5f4e]">85%</span>
              </div>
              <p className="text-xs text-[#6B7280]">Based on 47 market sources + 12 user interviews</p>
            </div>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}

// ============================================================================
// ANIMATED COMPONENTS
// ============================================================================

function AnimatedScoreGauge({ score, verdict }: { score: number; verdict: string }) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const circumference = 2 * Math.PI * 72;

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimatedScore(prev => {
          const increment = Math.ceil((score - prev) / 10);
          if (prev + increment >= score) {
            clearInterval(interval);
            return score;
          }
          return prev + increment;
        });
      }, 30);
      return () => clearInterval(interval);
    }, 300);
    return () => clearTimeout(timer);
  }, [score]);

  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40 mb-4">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="80" cy="80" r="72" fill="none" stroke="#F5F3EF" strokeWidth="10" />
          <motion.circle
            cx="80"
            cy="80"
            r="72"
            fill="none"
            stroke="url(#scoreGradient)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
          <defs>
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d5f4e" />
              <stop offset="100%" stopColor="#6b9d89" />
            </linearGradient>
          </defs>
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            className="text-4xl font-bold bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] bg-clip-text text-transparent"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.3, delay: 1.2 }}
          >
            {animatedScore}
          </motion.div>
          <div className="text-xs text-[#6B7280]">/ 100</div>
        </div>

        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#0d5f4e]"
          initial={{ scale: 1, opacity: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 0.5, 0],
          }}
          transition={{ duration: 0.8, delay: 1.5, times: [0, 0.5, 1] }}
        />
      </div>
      
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F4F1] border border-[#0d5f4e] rounded-full">
        <CheckCircle2 className="w-4 h-4 text-[#0d5f4e]" />
        <span className="text-sm font-semibold text-[#0d5f4e]">{verdict}</span>
      </div>
    </div>
  );
}

function AnimatedDonutChart({ tam, sam, som }: { tam: string; sam: string; som: string }) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-64 h-64">
        <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
          <motion.circle
            cx="100"
            cy="100"
            r="85"
            fill="none"
            stroke="#0E3E1B"
            strokeWidth="20"
            opacity="0.3"
            strokeDasharray={534}
            initial={{ strokeDashoffset: 534 }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="65"
            fill="none"
            stroke="#6b9d89"
            strokeWidth="20"
            opacity="0.7"
            strokeDasharray={408}
            initial={{ strokeDashoffset: 408 }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="45"
            fill="none"
            stroke="#0d5f4e"
            strokeWidth="20"
            opacity="0.9"
            strokeDasharray={283}
            initial={{ strokeDashoffset: 283 }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-2xl font-bold text-[#212427]">{tam}</div>
          <div className="text-xs text-[#6B7280]">Total Market</div>
        </div>
      </div>
    </div>
  );
}

interface SectionShellProps {
  id: number;
  title: string;
  agent: string;
  score: number;
  children: React.ReactNode;
  onExpand: () => void;
  isExpanded: boolean;
  onOpenAI: () => void;
}

function SectionShell({ id, title, agent, score, children, onExpand, isExpanded, onOpenAI }: SectionShellProps) {
  return (
    <motion.section
      id={`section-${id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="mb-12 scroll-mt-24"
    >
      <div className="bg-white rounded-2xl border border-[#E8E6E1] p-8 shadow-sm">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#0d5f4e] flex items-center justify-center text-white font-bold text-sm">
              {id.toString().padStart(2, '0')}
            </div>
            <div>
              <h2 className="font-serif text-2xl text-[#212427] mb-1">{title}</h2>
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#6B7280]">{agent}</span>
                <div className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${
                    score >= 8 ? 'bg-[#0d5f4e]' : score >= 6 ? 'bg-[#6b9d89]' : 'bg-[#6B7280]'
                  }`} />
                  <span className="text-xs font-semibold text-[#212427]">{score}/10</span>
                </div>
              </div>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={onOpenAI}
            className="p-2 hover:bg-[#F5F3EF] rounded-lg transition-colors"
            title="View AI insights"
          >
            <Sparkles className="w-5 h-5 text-[#0d5f4e]" />
          </motion.button>
        </div>

        <div>{children}</div>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: 'auto',
                opacity: 1,
                transition: {
                  height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.3, delay: 0.1 },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.2 },
                },
              }}
              className="overflow-hidden"
            >
              <div className="mt-6 pt-6 border-t border-[#E8E6E1]">
                <div className="bg-[#FAF9F7] rounded-xl p-4 border border-[#E8E6E1]">
                  <p className="text-sm text-[#6B7280]">
                    Detailed analysis, assumptions, and methodology would appear here...
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={onExpand}
          className="mt-4 text-sm text-[#0d5f4e] hover:text-[#0a4a3b] font-medium flex items-center gap-2 transition-colors"
        >
          {isExpanded ? 'Hide Details' : 'Show Details'}
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>
      </div>
    </motion.section>
  );
}

interface InsightCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
  index: number;
}

function InsightCard({ icon, label, value, description, index }: InsightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ borderColor: '#0d5f4e', boxShadow: '0 0 0 1px #0d5f4e' }}
      className="bg-[#F5F3EF] rounded-xl p-4 border border-[#E8E6E1] transition-all"
    >
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">{label}</span>
      </div>
      <div className="text-base font-semibold text-[#212427] mb-1">{value}</div>
      <div className="text-xs text-[#6B7280]">{description}</div>
    </motion.div>
  );
}

function NextStepStrip({ action }: { action: string }) {
  return (
    <div className="mt-6 pt-6 border-t border-[#E8E6E1]">
      <div className="flex items-center gap-3 text-sm">
        <div className="flex items-center gap-2 text-[#6B7280]">
          <PlayCircle className="w-4 h-4" />
          <span className="font-semibold uppercase text-xs tracking-wider">What to do next</span>
        </div>
        <div className="flex-1 text-[#212427]">{action}</div>
      </div>
    </div>
  );
}

function CompetitorCard({ competitor, index }: { competitor: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#F5F3EF] rounded-xl p-4 border border-[#E8E6E1]"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="font-semibold text-[#212427]">{competitor.name}</div>
        <div className="px-2 py-1 bg-[#E8E6E1] rounded text-xs font-semibold text-[#6B7280]">
          {competitor.position}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <div className="text-xs text-[#6B7280] mb-1">Strength</div>
          <div className="text-[#212427]">{competitor.strength}</div>
        </div>
        <div>
          <div className="text-xs text-[#6B7280] mb-1">Weakness</div>
          <div className="text-[#212427]">{competitor.weakness}</div>
        </div>
      </div>
    </motion.div>
  );
}

function RiskCard({ risk, index }: { risk: any; index: number }) {
  const severityColor = {
    High: 'border-[#0d5f4e] bg-[#E8F4F1]',
    Medium: 'border-[#6b9d89] bg-[#F5F3EF]',
    Low: 'border-[#E8E6E1] bg-white',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`rounded-xl p-4 border ${severityColor[risk.severity as keyof typeof severityColor]}`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-[#6B7280]" />
          <span className="font-semibold text-[#212427]">{risk.type}</span>
        </div>
        <div className={`px-2 py-1 rounded text-xs font-semibold ${
          risk.severity === 'High' ? 'bg-[#0d5f4e] text-white' :
          risk.severity === 'Medium' ? 'bg-[#6b9d89] text-white' :
          'bg-[#E8E6E1] text-[#6B7280]'
        }`}>
          {risk.severity}
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <div>
          <div className="text-xs text-[#6B7280] uppercase mb-1">Risk</div>
          <div className="text-[#212427]">{risk.risk}</div>
        </div>
        <div>
          <div className="text-xs text-[#6B7280] uppercase mb-1">Mitigation</div>
          <div className="text-[#212427]">{risk.mitigation}</div>
        </div>
      </div>
    </motion.div>
  );
}

function MVPFeatureCard({ feature, index }: { feature: any; index: number }) {
  const priorityColor = {
    P0: 'border-[#0d5f4e] bg-[#E8F4F1]',
    P1: 'border-[#6b9d89] bg-[#F5F3EF]',
    P2: 'border-[#E8E6E1] bg-white',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`rounded-xl p-4 border ${priorityColor[feature.priority as keyof typeof priorityColor]} flex items-center justify-between`}
    >
      <div>
        <div className="font-semibold text-[#212427] mb-1">{feature.name}</div>
        <div className="text-xs text-[#6B7280]">{feature.weeks} weeks to ship</div>
      </div>
      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
        feature.priority === 'P0' ? 'bg-[#0d5f4e] text-white' :
        feature.priority === 'P1' ? 'bg-[#6b9d89] text-white' :
        'bg-[#E8E6E1] text-[#6B7280]'
      }`}>
        {feature.priority}
      </div>
    </motion.div>
  );
}

function ScoresMatrix({ scores }: { scores: any }) {
  return (
    <div className="space-y-4">
      {Object.entries(scores).map(([key, value], index) => (
        <div key={key} className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#212427] capitalize font-semibold">{key}</span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-[#0d5f4e] font-bold"
            >
              {value} / 10
            </motion.span>
          </div>
          <div className="h-3 bg-[#F5F3EF] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${((value as number) / 10) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`h-full rounded-full ${
                (value as number) >= 8 ? 'bg-[#0d5f4e]' :
                (value as number) >= 6 ? 'bg-[#6b9d89]' :
                'bg-[#6B7280]'
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function TechStackCard({ tech, index }: { tech: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#F5F3EF] rounded-xl p-4 border border-[#E8E6E1]"
    >
      <div className="flex items-center gap-2 mb-3">
        <Code className="w-4 h-4 text-[#0d5f4e]" />
        <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">{tech.category}</span>
      </div>
      <div className="font-semibold text-[#212427] mb-2">{tech.tech}</div>
      <div className="text-xs text-[#6B7280]">{tech.rationale}</div>
    </motion.div>
  );
}

function PricingTierCard({ tier, index }: { tier: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, borderColor: '#0d5f4e' }}
      className={`rounded-xl p-6 border transition-all ${
        index === 1 ? 'border-[#0d5f4e] bg-[#E8F4F1]' : 'border-[#E8E6E1] bg-[#F5F3EF]'
      }`}
    >
      <div className="font-semibold text-[#212427] mb-1">{tier.tier}</div>
      <div className="text-2xl font-bold text-[#0d5f4e] mb-2">{tier.price}</div>
      <div className="text-xs text-[#6B7280] mb-3">{tier.target}</div>
      <ul className="space-y-1 text-xs text-[#212427]">
        {tier.features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="w-3 h-3 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function MetricCard({ label, value, index }: { label: string; value: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#E8F4F1] rounded-xl p-4 border border-[#0d5f4e]"
    >
      <div className="text-xs text-[#6B7280] uppercase tracking-wider mb-1">{label}</div>
      <div className="text-2xl font-bold text-[#0d5f4e]">{value}</div>
    </motion.div>
  );
}

function TeamNeedCard({ need, index }: { need: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#F5F3EF] rounded-xl p-4 border border-[#E8E6E1]"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="font-semibold text-[#212427]">{need.role}</div>
        <div className="px-3 py-1 bg-[#0d5f4e] text-white rounded-full text-xs font-semibold">
          {need.urgency}
        </div>
      </div>
      <div className="text-sm text-[#6B7280]">{need.reason}</div>
    </motion.div>
  );
}

function QuestionCard({ question, status, action, index }: { question: string; status: string; action: string; index: number }) {
  const statusColor = {
    Testing: 'bg-[#6b9d89]',
    'At Risk': 'bg-[#6B7280]',
    Validated: 'bg-[#0d5f4e]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#F5F3EF] rounded-xl p-4 border border-[#E8E6E1]"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 font-semibold text-[#212427]">{question}</div>
        <div className={`px-2 py-1 rounded text-xs font-semibold text-white ${statusColor[status as keyof typeof statusColor]}`}>
          {status}
        </div>
      </div>
      <div className="text-sm text-[#6B7280]">{action}</div>
    </motion.div>
  );
}

function ResourceCard({ icon, title, description, action, index }: { icon: React.ReactNode; title: string; description: string; action: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ borderColor: '#0d5f4e', scale: 1.02 }}
      className="bg-[#F5F3EF] rounded-xl p-4 border border-[#E8E6E1] transition-all cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <div className="flex-1">
          <div className="font-semibold text-[#212427] text-sm">{title}</div>
        </div>
      </div>
      <div className="text-xs text-[#6B7280] mb-3">{description}</div>
      <div className="flex items-center gap-1 text-xs text-[#0d5f4e] font-semibold">
        <span>{action}</span>
        <ExternalLink className="w-3 h-3" />
      </div>
    </motion.div>
  );
}

function FinancialProjectionChart({ scenario, data }: { scenario: string; data: any }) {
  const currentData = data[scenario];
  
  return (
    <div className="bg-[#F5F3EF] rounded-xl p-6 border border-[#E8E6E1]">
      <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-6">
        Revenue Projection — {scenario}
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-xs text-[#6B7280] mb-2">Year 1</div>
          <div className="text-2xl font-bold text-[#0d5f4e]">{currentData.y1}</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center"
        >
          <div className="text-xs text-[#6B7280] mb-2">Year 2</div>
          <div className="text-2xl font-bold text-[#0d5f4e]">{currentData.y2}</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="text-xs text-[#6B7280] mb-2">Year 3</div>
          <div className="text-2xl font-bold text-[#0d5f4e]">{currentData.y3}</div>
        </motion.div>
      </div>

      {/* Simple bar visualization */}
      <div className="mt-6 flex items-end gap-4 h-32">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '40%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-[#0d5f4e] rounded-t-lg"
        />
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '70%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex-1 bg-[#0d5f4e] rounded-t-lg"
        />
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 bg-[#0d5f4e] rounded-t-lg"
        />
      </div>
    </div>
  );
}
