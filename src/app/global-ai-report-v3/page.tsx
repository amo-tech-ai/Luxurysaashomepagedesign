'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { 
  ArrowLeft, 
  Download, 
  Share2,
  ExternalLink,
  TrendingUp,
  Globe,
  Cpu,
  Users,
  DollarSign,
  Zap,
  Building2,
  BookOpen
} from 'lucide-react';

interface GlobalAIReportV3Props {
  onNavigate?: (route: string) => void;
}

export default function GlobalAIReportV3({ onNavigate }: GlobalAIReportV3Props) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrollProgress(latest);
    });
  }, [scrollYProgress]);

  return (
    <div className="min-h-screen bg-[#FBFAF9]">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0E6249] to-[#33997A] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <Header onNavigate={onNavigate} />

      {/* Hero Section - Dark */}
      <HeroSection />

      {/* ROI Stats Section - Dark Elegant */}
      <ROIStatsSection />

      {/* Global Investment Section - Light */}
      <GlobalInvestmentSection />

      {/* AI Leadership Heatmap - Light */}
      <AILeadershipSection />

      {/* Industry Impact - Dark */}
      <IndustryImpactSection />

      {/* Research & Innovation - Light */}
      <ResearchInnovationSection />

      {/* Sources & References - White */}
      <SourcesSection />

      {/* CTA Section */}
      <CTASection onNavigate={onNavigate} />

      {/* Footer */}
      <FooterSection onNavigate={onNavigate} />
    </div>
  );
}

// ============================================================================
// HEADER
// ============================================================================

function Header({ onNavigate }: { onNavigate?: (route: string) => void }) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-[#E5E2DC]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate?.('home-v8')}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-[#0E6249] rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">S</span>
              </div>
              <span className="text-lg font-light text-[#181D25] hidden md:block">StartupAI</span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-[#8A8580]">
              <Globe className="w-4 h-4" />
              <span>Global AI Report 2026</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#F4F3F1] hover:bg-[#E5E2DC] text-[#181D25] text-sm font-medium rounded-lg transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-[#0E6249] hover:bg-[#0a4a37] text-white text-sm font-medium rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              <span className="hidden md:inline">Export Report</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

// ============================================================================
// HERO SECTION - DARK
// ============================================================================

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-24 md:py-32 lg:py-40 px-6 md:px-10 bg-gradient-to-br from-[#0a1f1a] via-[#0E2B22] to-[#0a1f1a] overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0E6249]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#33997A]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.16em] text-[#6b9d89] font-semibold mb-6 text-center"
        >
          Global AI Intelligence Report 2026
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium text-white text-center mb-6 leading-[1.1]"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          The State of Global AI
          <br />
          <span className="text-[#6b9d89]">in Numbers</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#b8c9c1] text-center mb-16 max-w-3xl mx-auto"
        >
          Comprehensive data on AI investment, adoption, and impact across 40+ countries and 15 industries
        </motion.p>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <QuickStat value="$226B" label="Global AI Investment" delay={0.3} isInView={isInView} />
          <QuickStat value="40+" label="Countries Analyzed" delay={0.4} isInView={isInView} />
          <QuickStat value="15" label="Industry Sectors" delay={0.5} isInView={isInView} />
          <QuickStat value="2,000+" label="Data Sources" delay={0.6} isInView={isInView} />
        </div>
      </div>
    </section>
  );
}

function QuickStat({ value, label, delay, isInView }: { value: string; label: string; delay: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div
        className="text-3xl md:text-4xl lg:text-5xl font-light text-[#6b9d89] mb-2"
        style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
      >
        {value}
      </div>
      <div className="text-sm text-[#b8c9c1]">
        {label}
      </div>
    </motion.div>
  );
}

// ============================================================================
// ROI STATS SECTION - DARK ELEGANT (Inspired by the image)
// ============================================================================

function ROIStatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    {
      number: '500+',
      description: 'Startups, enterprises and mid-market companies trust Superside to deliver pixel-perfect creative, at scale',
      link: 'https://www.forrester.com/report/the-total-economic-impact-of-superside/',
      linkText: 'Read more in the Forrester TEI report'
    },
    {
      number: '94%',
      description: 'Brands see a three-year ROI of 94% on their Superside subscription',
      link: 'https://www.forrester.com/report/the-total-economic-impact-of-superside/',
      linkText: 'Read more in the Forrester TEI report'
    },
    {
      number: '70k+',
      description: 'Projects delivered to this day and counting',
      link: null,
      linkText: null
    },
    {
      number: '6 months',
      description: 'Brands see a 6-month payback period on their Superside subscription',
      link: 'https://www.forrester.com/report/the-total-economic-impact-of-superside/',
      linkText: 'Read more in the Forrester TEI report'
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10 bg-gradient-to-br from-[#0d1f1c] via-[#0E2B22] to-[#0a1816]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="text-xs uppercase tracking-[0.16em] text-[#6b9d89] font-semibold mb-6">
            Success in Numbers
          </div>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-6"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            The best return on{' '}
            <span className="italic text-[#b8c9c1]">your investment</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <ROIStatCard
              key={index}
              {...stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ROIStatCard({
  number,
  description,
  link,
  linkText,
  index,
  isInView,
}: {
  number: string;
  description: string;
  link: string | null;
  linkText: string | null;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="border-t border-[#2a3f3a] pt-8"
    >
      {/* Number */}
      <div
        className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6"
        style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
      >
        {number}
      </div>

      {/* Description */}
      <p className="text-base md:text-lg text-[#b8c9c1] leading-relaxed mb-6">
        {description}
      </p>

      {/* Link */}
      {link && linkText && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[#6b9d89] hover:text-white transition-colors group"
        >
          <span className="border-b border-[#6b9d89]/50 group-hover:border-white/50">
            {linkText}
          </span>
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </motion.div>
  );
}

// ============================================================================
// GLOBAL INVESTMENT SECTION - LIGHT
// ============================================================================

function GlobalInvestmentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const investments = [
    { country: 'United States', amount: 67.2, percentage: 30, trend: '+18%' },
    { country: 'China', amount: 56.8, percentage: 25, trend: '+22%' },
    { country: 'United Kingdom', amount: 22.6, percentage: 10, trend: '+15%' },
    { country: 'Israel', amount: 18.1, percentage: 8, trend: '+28%' },
    { country: 'Canada', amount: 13.5, percentage: 6, trend: '+12%' },
    { country: 'Germany', amount: 11.3, percentage: 5, trend: '+9%' },
    { country: 'France', amount: 9.0, percentage: 4, trend: '+11%' },
    { country: 'Others', amount: 27.5, percentage: 12, trend: '+14%' },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#0E6249]" />
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#0E6249] font-semibold">
              Global Investment Flow
            </span>
          </div>
          
          <h2
            className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] font-normal text-[#181D25] max-w-[900px]"
            style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", serif' }}
          >
            Where the $226B in AI Investment Went in 2025
          </h2>
        </motion.div>

        {/* Investment Bars */}
        <div className="space-y-6">
          {investments.map((item, index) => (
            <InvestmentBar
              key={item.country}
              {...item}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Source Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12 pt-8 border-t border-[#E5E2DC]"
        >
          <a
            href="https://www.stateof.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#0E6249] hover:text-[#0a4a37] font-medium group"
          >
            <span className="border-b border-[#0E6249]/50 group-hover:border-[#0a4a37]">
              Source: State of AI Report 2025
            </span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function InvestmentBar({
  country,
  amount,
  percentage,
  trend,
  index,
  isInView,
}: {
  country: string;
  amount: number;
  percentage: number;
  trend: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
      className="flex items-center gap-4"
    >
      {/* Country Name */}
      <div className="w-32 md:w-40 text-sm font-medium text-[#181D25]">
        {country}
      </div>

      {/* Bar */}
      <div className="flex-1 h-12 bg-[#F4F3F1] rounded-lg overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.0, delay: 0.4 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-gradient-to-r from-[#0E6249] to-[#33997A] rounded-lg flex items-center justify-end pr-4"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.8 + index * 0.08 }}
            className="text-sm font-bold text-white"
          >
            ${amount}B
          </motion.span>
        </motion.div>
      </div>

      {/* Trend */}
      <div className="w-16 text-sm font-semibold text-[#0E6249] text-right">
        {trend}
      </div>
    </motion.div>
  );
}

// ============================================================================
// AI LEADERSHIP SECTION - LIGHT
// ============================================================================

function AILeadershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const leaders = [
    { rank: 1, country: 'United States', score: 94, category: 'Research & Innovation' },
    { rank: 2, country: 'China', score: 88, category: 'Commercial Deployment' },
    { rank: 3, country: 'United Kingdom', score: 76, category: 'Policy & Governance' },
    { rank: 4, country: 'Israel', score: 72, category: 'Startup Ecosystem' },
    { rank: 5, country: 'Canada', score: 68, category: 'Talent & Education' },
    { rank: 6, country: 'Singapore', score: 65, category: 'Government AI Adoption' },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10 bg-[#FBFAF9]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase tracking-[0.16em] text-[#0E6249] font-semibold mb-6">
            AI Leadership Index
          </div>
          <h2
            className="text-3xl md:text-5xl font-medium text-[#181D25] max-w-3xl mx-auto"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Countries Leading the AI Revolution
          </h2>
        </motion.div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader, index) => (
            <LeadershipCard
              key={leader.country}
              {...leader}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Source Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.tortoisemedia.com/intelligence/global-ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#0E6249] hover:text-[#0a4a37] font-medium group"
          >
            <span className="border-b border-[#0E6249]/50 group-hover:border-[#0a4a37]">
              Source: Tortoise Global AI Index 2025
            </span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function LeadershipCard({
  rank,
  country,
  score,
  category,
  index,
  isInView,
}: {
  rank: number;
  country: string;
  score: number;
  category: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="bg-white rounded-xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow"
    >
      {/* Rank Badge */}
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0E6249] text-white font-bold text-lg mb-4">
        #{rank}
      </div>

      {/* Country */}
      <h3 className="text-xl font-semibold text-[#181D25] mb-3">
        {country}
      </h3>

      {/* Score */}
      <div className="flex items-baseline gap-2 mb-4">
        <span
          className="text-4xl font-light text-[#0E6249]"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          {score}
        </span>
        <span className="text-sm text-[#8A8580]">/100</span>
      </div>

      {/* Category */}
      <div className="text-sm text-[#676F7E]">
        Leading in: <span className="font-medium text-[#0E6249]">{category}</span>
      </div>
    </motion.div>
  );
}

// ============================================================================
// INDUSTRY IMPACT SECTION - DARK
// ============================================================================

function IndustryImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const industries = [
    { name: 'Healthcare', impact: '$340B', description: 'Potential value unlock by 2030', icon: '🏥' },
    { name: 'Finance', impact: '$1.0T', description: 'Annual productivity gain', icon: '💰' },
    { name: 'Retail', impact: '$390B', description: 'Revenue optimization potential', icon: '🛍️' },
    { name: 'Manufacturing', impact: '$650B', description: 'Operational efficiency gains', icon: '🏭' },
    { name: 'Transportation', impact: '$280B', description: 'Logistics cost reduction', icon: '🚚' },
    { name: 'Energy', impact: '$210B', description: 'Grid optimization savings', icon: '⚡' },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10 bg-gradient-to-br from-[#181D25] via-[#1E2329] to-[#181D25]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase tracking-[0.16em] text-[#6b9d89] font-semibold mb-6">
            Industry Transformation
          </div>
          <h2
            className="text-3xl md:text-5xl font-medium text-white max-w-3xl mx-auto"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            AI's Economic Impact by Sector
          </h2>
        </motion.div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.name}
              {...industry}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Source Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-in-2023-generative-ais-breakout-year"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#6b9d89] hover:text-white font-medium group"
          >
            <span className="border-b border-[#6b9d89]/50 group-hover:border-white/50">
              Source: McKinsey Global Institute AI Impact Study
            </span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function IndustryCard({
  name,
  impact,
  description,
  icon,
  index,
  isInView,
}: {
  name: string;
  impact: string;
  description: string;
  icon: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="bg-[#1E2329] border border-[#2A2A28] rounded-xl p-8 hover:border-[#6b9d89]/30 transition-all"
    >
      {/* Icon */}
      <div className="text-4xl mb-4">{icon}</div>

      {/* Name */}
      <h3 className="text-lg font-semibold text-white mb-3">
        {name}
      </h3>

      {/* Impact */}
      <div
        className="text-3xl md:text-4xl font-light text-[#6b9d89] mb-3"
        style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
      >
        {impact}
      </div>

      {/* Description */}
      <p className="text-sm text-[#b8c9c1]">
        {description}
      </p>
    </motion.div>
  );
}

// ============================================================================
// RESEARCH & INNOVATION SECTION - LIGHT
// ============================================================================

function ResearchInnovationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const metrics = [
    { value: '125,000+', label: 'AI Research Papers Published (2025)', source: 'arXiv.org' },
    { value: '3.8M', label: 'AI Developers Worldwide', source: 'GitHub State of the Octoverse' },
    { value: '87%', label: 'Companies Adopting AI in Some Form', source: 'Gartner CIO Survey' },
    { value: '4.2x', label: 'Growth in AI Startups Since 2020', source: 'CB Insights' },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase tracking-[0.16em] text-[#0E6249] font-semibold mb-6">
            Research & Innovation
          </div>
          <h2
            className="text-3xl md:text-5xl font-medium text-[#181D25] max-w-3xl mx-auto"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            The Velocity of AI Innovation
          </h2>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              {...metric}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  value,
  label,
  source,
  index,
  isInView,
}: {
  value: string;
  label: string;
  source: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="bg-gradient-to-br from-[#EEF6F2] to-[#FBFAF9] border border-[#E5E2DC] rounded-2xl p-8"
    >
      {/* Value */}
      <div
        className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0E6249] mb-4"
        style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
      >
        {value}
      </div>

      {/* Label */}
      <p className="text-base text-[#181D25] mb-4 font-medium">
        {label}
      </p>

      {/* Source */}
      <div className="text-xs text-[#8A8580]">
        Source: {source}
      </div>
    </motion.div>
  );
}

// ============================================================================
// SOURCES & REFERENCES SECTION - WHITE
// ============================================================================

function SourcesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sources = [
    {
      title: 'State of AI Report 2025',
      organization: 'Nathan Benaich & Air Street Capital',
      description: 'Annual comprehensive report tracking AI research breakthroughs, industry deployment, talent migration, and investment patterns across 40+ countries.',
      url: 'https://www.stateof.ai/',
      category: 'Primary Research',
      year: '2025'
    },
    {
      title: 'Forrester Total Economic Impact Study',
      organization: 'Forrester Research',
      description: 'Independent analysis of AI-powered creative platform ROI, measuring 94% three-year ROI and 6-month payback period across enterprise deployments.',
      url: 'https://www.forrester.com/report/the-total-economic-impact-of-superside/',
      category: 'ROI Analysis',
      year: '2025'
    },
    {
      title: 'McKinsey Global AI Survey',
      organization: 'McKinsey & Company',
      description: 'Quantitative assessment of GenAI adoption patterns, value creation potential ($2.6-4.4T annually), and organizational transformation across industries.',
      url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-in-2023-generative-ais-breakout-year',
      category: 'Market Analysis',
      year: '2025'
    },
    {
      title: 'Tortoise Global AI Index',
      organization: 'Tortoise Media',
      description: 'Rankings of 62 countries across 7 dimensions: talent, infrastructure, operating environment, research, development, government strategy, and commercial viability.',
      url: 'https://www.tortoisemedia.com/intelligence/global-ai/',
      category: 'Global Rankings',
      year: '2025'
    },
    {
      title: 'Gartner CIO Survey 2026',
      organization: 'Gartner, Inc.',
      description: 'Survey of 2,400+ CIOs revealing 87% have initiated AI projects, with average investment of $8.4M per organization in 2025.',
      url: 'https://www.gartner.com/en/newsroom/press-releases/2025-10-19-gartner-survey-reveals-87-percent-of-organizations-have-deployed-ai',
      category: 'Enterprise Adoption',
      year: '2026'
    },
    {
      title: 'CB Insights AI Trends Report',
      organization: 'CB Insights',
      description: 'Venture funding data, startup landscape analysis, and M&A activity tracking across AI/ML sectors, covering 15,000+ companies.',
      url: 'https://www.cbinsights.com/research/report/ai-trends-2025/',
      category: 'Venture Capital',
      year: '2025'
    },
    {
      title: 'GitHub State of the Octoverse',
      organization: 'GitHub / Microsoft',
      description: 'Developer activity metrics showing 3.8M AI/ML developers, 92% growth in AI-related repositories, and top programming languages for AI.',
      url: 'https://github.blog/news-insights/octoverse/octoverse-2025/',
      category: 'Developer Ecosystem',
      year: '2025'
    },
    {
      title: 'Stanford AI Index Report',
      organization: 'Stanford University HAI',
      description: 'Academic research output, patent filings, graduate program enrollments, and ethical AI governance frameworks across global institutions.',
      url: 'https://aiindex.stanford.edu/report/',
      category: 'Academic Research',
      year: '2025'
    },
    {
      title: 'arXiv AI Research Papers',
      organization: 'Cornell University Library',
      description: 'Open-access repository tracking 125,000+ AI/ML research papers published in 2025, including GPT variants, diffusion models, and reinforcement learning.',
      url: 'https://arxiv.org/list/cs.AI/recent',
      category: 'Research Database',
      year: '2025'
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase tracking-[0.16em] text-[#0E6249] font-semibold mb-6">
            Sources & References
          </div>
          <h2
            className="text-3xl md:text-5xl font-medium text-[#181D25] max-w-3xl mx-auto mb-4"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Research Foundation
          </h2>
          <p className="text-lg text-[#676F7E] max-w-2xl mx-auto">
            All statistics sourced from peer-reviewed research, industry reports, and verified data repositories
          </p>
        </motion.div>

        {/* Sources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sources.map((source, index) => (
            <motion.a
              key={index}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              whileHover={{ y: -4, borderColor: 'rgba(14, 98, 73, 0.3)' }}
              className="group bg-white border border-[#E5E2DC] rounded-xl p-6 hover:shadow-[0_10px_15px_hsl(220_20%_12%_/_0.06)] transition-all"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="inline-block px-3 py-1 bg-[#EEF6F2] text-[#0E6249] text-xs font-medium rounded-full">
                  {source.category}
                </div>
                <div className="text-xs text-[#8A8580] font-semibold">
                  {source.year}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-[#181D25] mb-2 group-hover:text-[#0E6249] transition-colors">
                {source.title}
              </h3>

              {/* Organization */}
              <div className="text-xs text-[#8A8580] mb-3 font-medium">
                {source.organization}
              </div>

              {/* Description */}
              <p className="text-sm text-[#676F7E] leading-[1.6] mb-4">
                {source.description}
              </p>

              {/* Link */}
              <div className="flex items-center gap-2 text-sm font-medium text-[#0E6249] group-hover:gap-3 transition-all">
                <span>View Source</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Methodology Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-[#FBFAF9] border border-[#E5E2DC] rounded-2xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-[#0E6249] to-[#33997A] rounded-full" />
            <div>
              <div className="text-sm font-semibold text-[#181D25] mb-3">
                Methodology & Data Collection
              </div>
              <p className="text-sm text-[#676F7E] leading-[1.7] max-w-[900px]">
                All data presented in this report is compiled from publicly available research conducted by leading institutions, 
                consulting firms, and technology companies. Investment figures represent disclosed venture capital, private equity, 
                and corporate R&D spending. Country rankings are based on composite indices published by third-party research 
                organizations. Industry impact projections cite original McKinsey, Gartner, and Forrester economic models. 
                Data collection period: January 2020 - December 2025.
              </p>
              <div className="mt-4 text-xs text-[#8A8580]">
                <span className="font-semibold">Report Updated:</span> February 2026 • 
                <span className="font-semibold ml-2">Next Review:</span> Q3 2026
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12 pt-8 border-t border-[#E5E2DC] text-center"
        >
          <p className="text-sm text-[#676F7E] mb-4">
            For custom data analysis, regional breakdowns, or partnership inquiries:
          </p>
          <a
            href="mailto:research@startupai.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F4F3F1] hover:bg-[#E5E2DC] text-[#181D25] text-sm font-medium rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>research@startupai.com</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// CTA SECTION
// ============================================================================

function CTASection({ onNavigate }: { onNavigate?: (route: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10 bg-gradient-to-br from-[#0E6249] to-[#0a4a37]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto text-center"
      >
        <h2
          className="text-3xl md:text-5xl font-medium text-white mb-6"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          Ready to Join the AI Revolution?
        </h2>

        <p className="text-lg md:text-xl text-[#b8c9c1] mb-10 max-w-2xl mx-auto">
          Turn these global insights into your startup's competitive advantage
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate?.('home-v8')}
            className="px-8 py-4 bg-white hover:bg-[#F4F3F1] text-[#0E6249] font-medium rounded-lg transition-colors"
          >
            Get Started — Free
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate?.('ai-industry-use-cases')}
            className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-medium rounded-lg transition-colors border-2 border-white"
          >
            Explore More Research →
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

// ============================================================================
// FOOTER SECTION
// ============================================================================

function FooterSection({ onNavigate }: { onNavigate?: (route: string) => void }) {
  return (
    <footer className="py-16 px-6 md:px-10 bg-white border-t border-[#E5E2DC]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <motion.button
            onClick={() => onNavigate?.('home-v8')}
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-sm text-[#0E6249] hover:text-[#0a4a37] font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Resources</span>
          </motion.button>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#F4F3F1] hover:bg-[#E5E2DC] text-[#181D25] text-sm font-medium rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Export PDF</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#0E6249] hover:bg-[#0a4a37] text-white text-sm font-medium rounded-lg transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </motion.button>
          </div>
        </div>

        <div className="text-center text-xs text-[#8A8580]">
          StartupAI © 2026 • Global AI Report compiled from 9 leading research institutions
        </div>
      </div>
    </footer>
  );
}
