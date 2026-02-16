'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ExternalLink, TrendingUp, Users, Globe, Award, BarChart3, Zap } from 'lucide-react';

interface AISkillsProps {
  onNavigate?: (route: string) => void;
}

// ═══ DATA ═══
const COUNTRIES_DATA = [
  { rank: 1, name: "India", flag: "🇮🇳", relativePenetration: 2.75, workforcePercent: 55, jobPostings: "N/A", region: "Asia", color: "#D8FF85" },
  { rank: 2, name: "United States", flag: "🇺🇸", relativePenetration: 2.22, workforcePercent: 71, jobPostings: "~1.5", region: "North America", color: "#8DFDBA" },
  { rank: 3, name: "Singapore", flag: "🇸🇬", relativePenetration: 2.1, workforcePercent: 88, jobPostings: "N/A", region: "Asia", color: "#C4E878" },
  { rank: 4, name: "China", flag: "🇨🇳", relativePenetration: 2.0, workforcePercent: 91, jobPostings: "N/A", region: "Asia", color: "#6b9d89" },
  { rank: 5, name: "Switzerland", flag: "🇨🇭", relativePenetration: 2.0, workforcePercent: 82, jobPostings: "1.4", region: "Europe", color: "#E8C547" },
  { rank: 6, name: "Germany", flag: "🇩🇪", relativePenetration: 1.9, workforcePercent: 72, jobPostings: "1.2", region: "Europe", color: "#FF7B6B" },
  { rank: 7, name: "UAE", flag: "🇦🇪", relativePenetration: 1.9, workforcePercent: 85, jobPostings: "Growing", region: "Middle East", color: "#6BA3FF" },
  { rank: 8, name: "Israel", flag: "🇮🇱", relativePenetration: 1.8, workforcePercent: 75, jobPostings: "N/A", region: "Middle East", color: "#A78BFA" },
  { rank: 9, name: "Sweden", flag: "🇸🇪", relativePenetration: 1.8, workforcePercent: 82, jobPostings: "~1%", region: "Europe", color: "#E88CA5" },
  { rank: 10, name: "Canada", flag: "🇨🇦", relativePenetration: 1.7, workforcePercent: 68, jobPostings: "~2.0", region: "North America", color: "#8DFDBA" },
  { rank: 11, name: "Netherlands", flag: "🇳🇱", relativePenetration: 1.7, workforcePercent: 73, jobPostings: "High", region: "Europe", color: "#D8FF85" },
  { rank: 12, name: "United Kingdom", flag: "🇬🇧", relativePenetration: 1.6, workforcePercent: 65, jobPostings: "1.4", region: "Europe", color: "#6b9d89" },
  { rank: 13, name: "South Korea", flag: "🇰🇷", relativePenetration: 1.6, workforcePercent: 80, jobPostings: "N/A", region: "Asia", color: "#E8C547" },
  { rank: 14, name: "Finland", flag: "🇫🇮", relativePenetration: 1.6, workforcePercent: 80, jobPostings: "N/A", region: "Europe", color: "#FF7B6B" },
  { rank: 15, name: "France", flag: "🇫🇷", relativePenetration: 1.5, workforcePercent: 70, jobPostings: "~1.0", region: "Europe", color: "#6BA3FF" },
  { rank: 16, name: "Australia", flag: "🇦🇺", relativePenetration: 1.5, workforcePercent: 67, jobPostings: "N/A", region: "Oceania", color: "#A78BFA" },
  { rank: 17, name: "Japan", flag: "🇯🇵", relativePenetration: 1.4, workforcePercent: 62, jobPostings: "N/A", region: "Asia", color: "#E88CA5" },
  { rank: 18, name: "Spain", flag: "🇪🇸", relativePenetration: 1.4, workforcePercent: 65, jobPostings: "Rise", region: "Europe", color: "#8DFDBA" },
  { rank: 19, name: "Italy", flag: "🇮🇹", relativePenetration: 1.3, workforcePercent: 64, jobPostings: "~1%", region: "Europe", color: "#D8FF85" },
  { rank: 20, name: "Brazil", flag: "🇧🇷", relativePenetration: 1.2, workforcePercent: 50, jobPostings: "N/A", region: "South America", color: "#6b9d89" },
];

const SOURCES = [
  {
    num: 1,
    title: "Statista — Relative AI Skill Penetration Rate by Region",
    desc: "Global comparison of AI skill penetration rates relative to global average, showing India at 2.75x, US at 2.22x, and Germany at 1.9x based on 2023 data.",
    url: "https://www.statista.com/statistics/1472152/relative-ai-skill-penetration-rate-by-region/"
  },
  {
    num: 2,
    title: "PwC — AI Work: Future Workforce EMEA",
    desc: "Comprehensive analysis of AI adoption across European, Middle Eastern, and African workforce, including job posting shares and daily AI tool usage patterns.",
    url: "https://www.pwc.com/gx/en/services/workforce/ai-work-future-workforce-emea.html"
  },
  {
    num: 3,
    title: "The Tech Optimist — Global Leaders in AI Patents and Innovation in 2025",
    desc: "Analysis of workforce AI skills adoption showing China at 91% daily AI use, Singapore at 88%, and other key metrics for innovation leaders.",
    url: "https://the-tech-optimist.com/global-leaders-in-ai-patents-and-innovation-in-2025/"
  },
  {
    num: 4,
    title: "OECD — Emerging Trends in AI Skill Demand Across 14 OECD Countries",
    desc: "457-page comprehensive report tracking AI job vacancies growing 33% average from 2019-2022, with detailed country-by-country analysis of skill demand evolution.",
    url: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2023/10/emerging-trends-in-ai-skill-demand-across-14-oecd-countries_faabbb45/7c691b9a-en.pdf"
  },
  {
    num: 5,
    title: "Microsoft — Work Trend Index 2024",
    desc: "Survey data on daily AI tool usage among global workforce, measuring adoption patterns across 31 countries and multiple industry sectors.",
    url: "https://www.microsoft.com/en-us/worklab/work-trend-index/"
  },
];

export default function AISkills({ onNavigate }: AISkillsProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrollProgress(latest);
    });
  }, [scrollYProgress]);

  return (
    <div className="min-h-screen bg-[#FBFAF9]">
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0E6249] via-[#33997A] to-[#6b9d89] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <Header onNavigate={onNavigate} />

      {/* Hero Section - Dark with Parallax */}
      <HeroSection />

      {/* Global Leader Section - Light */}
      <GlobalLeaderSection />

      {/* Penetration Rankings - Dark */}
      <PenetrationRankingsSection />

      {/* Skills Matrix - Light */}
      <SkillsMatrixSection />

      {/* Regional Deep Dives - Mixed */}
      <RegionalDeepDivesSection />

      {/* Job Market Trends - Dark */}
      <JobMarketTrendsSection />

      {/* Sources - White */}
      <SourcesSection />

      {/* CTA - Light */}
      <CTASection onNavigate={onNavigate} />
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
      className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-[#E5E2DC]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate?.('home-v8')}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 bg-[#0E6249] rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold text-sm">S</span>
            </div>
            <span className="text-lg font-light text-[#181D25] hidden md:block">StartupAI Research</span>
          </button>

          <div className="flex items-center gap-2 text-sm">
            <Globe className="w-4 h-4 text-[#0E6249]" />
            <span className="text-[#8A8580]">Global AI Skills Report 2026</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

// ============================================================================
// HERO SECTION - DARK WITH PARALLAX
// ============================================================================

function HeroSection() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section ref={ref} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1f1a] via-[#0E2B22] to-[#0a1816]">
      {/* Ambient Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity: 0.6, scale }}
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0E6249]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6b9d89]/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(141,253,186,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 text-center"
        style={{ opacity, y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#0E6249]/20 border border-[#6b9d89]/30 rounded-full mb-8"
        >
          <Zap className="w-4 h-4 text-[#6b9d89]" />
          <span className="text-xs uppercase tracking-[0.15em] text-[#6b9d89] font-semibold">Global Skills Intelligence</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-[1.1]"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          The Global Race for
          <br />
          <span className="text-[#6b9d89]">AI Skills</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-[#b8c9c1] mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          India leads at 2.75× global average in AI skill penetration. China dominates daily adoption at 91%. Europe excels in job market integration. Who's winning—and how?
        </motion.p>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <HeroStat value="2.75×" label="India's penetration lead" color="#D8FF85" />
          <HeroStat value="91%" label="China daily AI use" color="#8DFDBA" />
          <HeroStat value="20" label="Countries analyzed" color="#6b9d89" />
          <HeroStat value="33%" label="Job demand growth" color="#E8C547" />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#6b9d89] uppercase tracking-wider">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#6b9d89] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}

function HeroStat({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="text-center">
      <div
        className="text-3xl md:text-4xl lg:text-5xl font-light mb-2"
        style={{ fontFamily: 'Playfair Display, Georgia, serif', color }}
      >
        {value}
      </div>
      <div className="text-xs md:text-sm text-[#8A8580]">{label}</div>
    </div>
  );
}

// ============================================================================
// GLOBAL LEADER SECTION - LIGHT
// ============================================================================

function GlobalLeaderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const indiaGrowth = [
    { year: '2019', value: 1.2 },
    { year: '2020', value: 1.6 },
    { year: '2021', value: 2.0 },
    { year: '2022', value: 2.4 },
    { year: '2023', value: 2.75 },
  ];

  const maxValue = 3;

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Award className="w-5 h-5 text-[#0E6249]" />
            <span className="text-xs uppercase tracking-[0.15em] text-[#0E6249] font-semibold">Global Leader</span>
          </div>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-medium text-[#181D25] mb-6"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            India's AI Skills <span className="italic text-[#0E6249]">Dominance</span>
          </h2>
          <p className="text-lg text-[#676F7E] max-w-3xl mx-auto leading-relaxed">
            At 2.75× the global average, India leads all nations in relative AI skill penetration—driven by massive CS graduate output and strategic tech talent development.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#EEF6F2] to-[#FBFAF9] border border-[#E5E2DC] rounded-2xl p-8">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-6xl font-light text-[#0E6249]" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>2.75×</span>
                  <span className="text-lg text-[#676F7E]">global avg</span>
                </div>
                <p className="text-base text-[#181D25] font-medium">Relative AI Skill Penetration</p>
                <p className="text-sm text-[#8A8580] mt-2">Controls for occupation distribution—pure skill density</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-[#E5E2DC] rounded-xl p-6">
                  <div className="text-3xl font-light text-[#0E6249] mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>1M+</div>
                  <p className="text-sm text-[#676F7E]">CS graduates per year</p>
                </div>
                <div className="bg-white border border-[#E5E2DC] rounded-xl p-6">
                  <div className="text-3xl font-light text-[#0E6249] mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>55%</div>
                  <p className="text-sm text-[#676F7E]">Workforce adoption rate</p>
                </div>
              </div>

              <div className="bg-[#0E6249] text-white rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm font-semibold uppercase tracking-wider">Growth Trajectory</span>
                </div>
                <p className="text-sm leading-relaxed opacity-90">
                  129% increase from 2019-2023. Bangalore alone hosts more AI engineers than most European nations combined.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-[#F4F3F1] border border-[#E5E2DC] rounded-2xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#181D25] mb-2">Penetration Growth 2019-2023</h3>
                <p className="text-sm text-[#8A8580]">Relative to global average baseline</p>
              </div>

              {/* Bar Chart */}
              <div className="h-[300px] flex items-end gap-4">
                {indiaGrowth.map((item, index) => {
                  const height = (item.value / maxValue * 100).toFixed(1);
                  return (
                    <div key={item.year} className="flex-1 flex flex-col items-center gap-3">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={isInView ? { height: `${height}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full bg-gradient-to-t from-[#0E6249] to-[#33997A] rounded-t-lg relative group"
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                          className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold text-[#0E6249] whitespace-nowrap"
                        >
                          {item.value}×
                        </motion.div>
                      </motion.div>
                      <span className="text-xs text-[#8A8580] font-medium">{item.year}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-[#E5E2DC] text-xs text-[#8A8580]">
                Source:{' '}
                <a href="https://www.statista.com/statistics/1472152/relative-ai-skill-penetration-rate-by-region/" target="_blank" rel="noopener noreferrer" className="text-[#0E6249] hover:underline">
                  Statista AI Skills Report
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// PENETRATION RANKINGS SECTION - DARK
// ============================================================================

function PenetrationRankingsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10 bg-gradient-to-br from-[#181D25] via-[#1E2329] to-[#181D25]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <BarChart3 className="w-5 h-5 text-[#6b9d89]" />
            <span className="text-xs uppercase tracking-[0.15em] text-[#6b9d89] font-semibold">Global Rankings</span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-medium text-white mb-6"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Top 20 Countries by AI Skill Penetration
          </h2>
          <p className="text-lg text-[#b8c9c1] max-w-3xl mx-auto">
            Ranked by relative penetration (controlling for occupational mix), absolute workforce adoption, and job market integration.
          </p>
        </motion.div>

        {/* Rankings Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1E2329] border border-[#2A2A28] rounded-2xl overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-[50px_1fr_120px_120px_120px] gap-4 px-6 py-4 bg-[#0E6249] text-white text-xs font-semibold uppercase tracking-wider border-b border-[#33997A]">
            <div>Rank</div>
            <div>Country</div>
            <div className="text-right">Relative (×)</div>
            <div className="text-right">Workforce %</div>
            <div className="text-right">Job Posts</div>
          </div>

          {/* Table Body */}
          <div>
            {COUNTRIES_DATA.slice(0, 10).map((country, index) => (
              <RankingRow key={country.rank} country={country} index={index} isInView={isInView} />
            ))}
          </div>

          {/* View All Button */}
          <div className="px-6 py-6 border-t border-[#2A2A28] text-center">
            <button className="text-sm text-[#6b9d89] hover:text-white font-medium transition-colors">
              View all 20 countries →
            </button>
          </div>
        </motion.div>

        {/* Source */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center text-sm text-[#8A8580]"
        >
          Sources:{' '}
          <a href="https://www.statista.com/statistics/1472152/relative-ai-skill-penetration-rate-by-region/" target="_blank" rel="noopener noreferrer" className="text-[#6b9d89] hover:text-white border-b border-dotted border-[#6b9d89]/30">
            Statista
          </a>
          {' · '}
          <a href="https://www.pwc.com/gx/en/services/workforce/ai-work-future-workforce-emea.html" target="_blank" rel="noopener noreferrer" className="text-[#6b9d89] hover:text-white border-b border-dotted border-[#6b9d89]/30">
            PwC
          </a>
          {' · '}
          <a href="https://the-tech-optimist.com/global-leaders-in-ai-patents-and-innovation-in-2025/" target="_blank" rel="noopener noreferrer" className="text-[#6b9d89] hover:text-white border-b border-dotted border-[#6b9d89]/30">
            The Tech Optimist
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function RankingRow({ country, index, isInView }: { country: typeof COUNTRIES_DATA[0]; index: number; isInView: boolean }) {
  const maxRelative = COUNTRIES_DATA[0].relativePenetration;
  const relativeWidth = (country.relativePenetration / maxRelative * 100).toFixed(1);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
      className="grid grid-cols-[50px_1fr_120px_120px_120px] gap-4 px-6 py-4 border-b border-[#2A2A28] last:border-b-0 hover:bg-[#2A2A28]/50 transition-colors"
    >
      <div className="text-[#8A8580] font-mono text-sm">#{country.rank}</div>
      
      <div className="flex items-center gap-3">
        <span className="text-2xl">{country.flag}</span>
        <div>
          <div className="text-white font-medium text-sm">{country.name}</div>
          <div className="text-xs text-[#8A8580]">{country.region}</div>
        </div>
      </div>

      <div className="text-right">
        <div className="text-white font-semibold font-mono text-sm mb-1">{country.relativePenetration}×</div>
        <div className="h-1 bg-[#2A2A28] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${relativeWidth}%` } : {}}
            transition={{ duration: 1, delay: 0.5 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full"
            style={{ background: country.color }}
          />
        </div>
      </div>

      <div className="text-right">
        <div className="text-white font-semibold font-mono text-sm">{country.workforcePercent}%</div>
      </div>

      <div className="text-right">
        <div className="text-[#8A8580] text-sm">{country.jobPostings}</div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// SKILLS MATRIX SECTION - LIGHT
// ============================================================================

function SkillsMatrixSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const quadrants = [
    { title: "High Skills, High Adoption", countries: ["China", "Singapore", "Switzerland", "Sweden"], color: "#0E6249", desc: "Elite tier: both breadth and depth" },
    { title: "High Skills, Growing Adoption", countries: ["India", "US", "Germany", "Israel"], color: "#6b9d89", desc: "Skills-rich, scaling deployment" },
    { title: "Moderate Skills, High Adoption", countries: ["UAE", "S. Korea", "Finland"], color: "#E8C547", desc: "Adoption exceeds skills base" },
    { title: "Emerging Markets", countries: ["Spain", "Italy", "Brazil"], color: "#8A8580", desc: "Building foundations" },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10 bg-[#F7F8F6]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-5xl font-medium text-[#181D25] mb-6"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Skills vs. Adoption Matrix
          </h2>
          <p className="text-lg text-[#676F7E] max-w-3xl mx-auto">
            Countries cluster into four strategic archetypes based on skill penetration and workforce adoption rates.
          </p>
        </motion.div>

        {/* Quadrant Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {quadrants.map((quadrant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white border border-[#E5E2DC] rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: `${quadrant.color}15` }}>
                  <div className="w-6 h-6 rounded-full" style={{ background: quadrant.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#181D25] mb-1">{quadrant.title}</h3>
                  <p className="text-sm text-[#8A8580]">{quadrant.desc}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {quadrant.countries.map((country) => {
                  const countryData = COUNTRIES_DATA.find(c => c.name.includes(country));
                  return (
                    <div
                      key={country}
                      className="inline-flex items-center gap-2 px-3 py-2 bg-[#F7F8F6] rounded-lg text-sm"
                    >
                      <span className="text-lg">{countryData?.flag}</span>
                      <span className="text-[#181D25] font-medium">{country}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Insight Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-[#0E6249] to-[#0a4a37] text-white rounded-2xl p-8 md:p-10"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Strategic Insight</h3>
              <p className="text-white/90 leading-relaxed">
                <strong>China and Singapore</strong> dominate both dimensions—combining broad skill bases with near-universal daily adoption. 
                <strong> India and the US</strong> lead on relative skills but lag in workforce-wide deployment. 
                <strong> European nations</strong> show balanced profiles with steady job market integration. 
                The gap between skills and adoption reveals untapped productivity potential.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// REGIONAL DEEP DIVES SECTION - MIXED
// ============================================================================

function RegionalDeepDivesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const regions = [
    {
      name: "Asia-Pacific",
      countries: ["India", "China", "Singapore", "South Korea", "Japan"],
      highlight: "3 of top 4 by relative penetration",
      stat: "2.1×",
      statLabel: "avg penetration",
      insight: "Volume strategy: massive CS graduate pipelines feeding global talent markets",
      bg: "from-[#EEF6F2] to-white"
    },
    {
      name: "Europe",
      countries: ["Germany", "Switzerland", "Sweden", "Netherlands", "UK"],
      highlight: "Highest job posting integration",
      stat: "1.8%",
      statLabel: "avg job posts",
      insight: "Quality strategy: mature markets with structured AI role creation",
      bg: "from-[#F7F8F6] to-white"
    },
    {
      name: "North America",
      countries: ["United States", "Canada"],
      highlight: "Tech ecosystem dominance",
      stat: "2.0×",
      statLabel: "combined penetration",
      insight: "Innovation hubs: Bay Area, Toronto drive continental leadership",
      bg: "from-[#FBFAF9] to-white"
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-5xl font-medium text-[#181D25] mb-6"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Regional Deep Dives
          </h2>
          <p className="text-lg text-[#676F7E] max-w-3xl mx-auto">
            Each region exhibits distinct strategies—volume, quality, or innovation-driven AI skill development.
          </p>
        </motion.div>

        {/* Region Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`bg-gradient-to-br ${region.bg} border border-[#E5E2DC] rounded-2xl p-8 hover:shadow-xl transition-all`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#181D25] mb-2">{region.name}</h3>
                <p className="text-sm text-[#0E6249] font-medium">{region.highlight}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-[#E5E2DC]">
                <div className="text-4xl font-light text-[#0E6249] mb-1" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                  {region.stat}
                </div>
                <div className="text-sm text-[#8A8580]">{region.statLabel}</div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {region.countries.map((country) => {
                  const countryData = COUNTRIES_DATA.find(c => c.name === country);
                  return (
                    <span key={country} className="text-2xl" title={country}>
                      {countryData?.flag}
                    </span>
                  );
                })}
              </div>

              <p className="text-sm text-[#676F7E] leading-relaxed italic">
                {region.insight}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// JOB MARKET TRENDS SECTION - DARK
// ============================================================================

function JobMarketTrendsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const timeline = [
    { year: "2019", vacancies: "<1%", growth: "—", event: "Pre-ChatGPT baseline" },
    { year: "2020", vacancies: "~1.2%", growth: "+20%", event: "Pandemic acceleration" },
    { year: "2021", vacancies: "~1.8%", growth: "+50%", event: "ML engineer boom" },
    { year: "2022", vacancies: "~2.4%", growth: "+33%", event: "Generative AI inflection" },
    { year: "2023", vacancies: "~3.0%", growth: "+25%", event: "ChatGPT market shift" },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10 bg-gradient-to-br from-[#0a1f1a] via-[#0E2B22] to-[#0a1816]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-5xl font-medium text-white mb-6"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Job Market Evolution
          </h2>
          <p className="text-lg text-[#b8c9c1] max-w-3xl mx-auto">
            AI job postings grew 33% average annually from 2019-2022 across OECD nations—accelerating post-ChatGPT.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-0 left-0 md:left-1/2 w-[2px] h-full bg-[#6b9d89]/30 md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:text-right'}`}
              >
                {/* Year Badge */}
                <div className={`absolute left-0 md:left-1/2 top-0 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#0E6249] to-[#33997A] rounded-full flex items-center justify-center z-10 border-4 border-[#0a1f1a]`}>
                  <span className="text-white font-bold text-sm">{item.year}</span>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'md:pr-20' : 'md:col-start-2 md:pl-20'} ml-20 md:ml-0`}>
                  <div className="bg-[#12211D] border border-[#1D3730] rounded-xl p-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-3xl font-light text-[#6b9d89]" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                        {item.vacancies}
                      </span>
                      <span className="text-sm text-[#E8C547] font-semibold">{item.growth}</span>
                    </div>
                    <p className="text-sm text-[#b8c9c1] mb-3">AI job vacancies as % of total market</p>
                    <div className="pt-3 border-t border-[#1D3730]">
                      <p className="text-sm text-white font-medium">{item.event}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Source */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center text-sm text-[#8A8580]"
        >
          Source:{' '}
          <a href="https://www.oecd.org/content/dam/oecd/en/publications/reports/2023/10/emerging-trends-in-ai-skill-demand-across-14-oecd-countries_faabbb45/7c691b9a-en.pdf" target="_blank" rel="noopener noreferrer" className="text-[#6b9d89] hover:text-white border-b border-dotted border-[#6b9d89]/30">
            OECD — Emerging Trends in AI Skill Demand (457-page report)
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// SOURCES SECTION - WHITE
// ============================================================================

function SourcesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-5xl font-medium text-[#181D25] mb-6"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Sources & Methodology
          </h2>
          <p className="text-lg text-[#676F7E] max-w-2xl mx-auto">
            All data sourced from verified industry research, government reports, and peer-reviewed workforce studies.
          </p>
        </motion.div>

        {/* Sources List */}
        <div className="space-y-4">
          {SOURCES.map((source, index) => (
            <motion.a
              key={source.num}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group flex gap-4 p-6 bg-[#F7F8F6] hover:bg-[#EEF6F2] border border-[#E5E2DC] hover:border-[#0E6249] rounded-xl transition-all"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-white border border-[#E5E2DC] rounded-lg flex items-center justify-center text-[#0E6249] font-bold font-mono text-sm">
                {source.num}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-base font-semibold text-[#181D25] group-hover:text-[#0E6249] transition-colors">
                    {source.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-[#8A8580] group-hover:text-[#0E6249] flex-shrink-0 transition-colors" />
                </div>
                <p className="text-sm text-[#676F7E] mb-3 leading-relaxed">{source.desc}</p>
                <div className="text-xs text-[#0E6249] font-mono break-all group-hover:underline">
                  {source.url}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Methodology Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-br from-[#F7F8F6] to-white border border-[#E5E2DC] rounded-2xl p-8"
        >
          <h3 className="text-lg font-semibold text-[#181D25] mb-4">Data Collection Methodology</h3>
          <div className="space-y-3 text-sm text-[#676F7E] leading-relaxed">
            <p>
              <strong className="text-[#181D25]">Relative Penetration:</strong> Statista's occupation-controlled metrics (2023 data) comparing AI skills density to global workforce baselines. Controls for sectoral mix differences.
            </p>
            <p>
              <strong className="text-[#181D25]">Workforce Adoption:</strong> Microsoft Work Trend Index and PwC surveys measuring daily AI tool usage across 31 countries (2024-2025 data).
            </p>
            <p>
              <strong className="text-[#181D25]">Job Market Share:</strong> OECD analysis of AI-related job postings as percentage of total vacancies, tracking 2019-2022 trends with 33% average growth rate.
            </p>
            <p className="pt-3 border-t border-[#E5E2DC] text-xs text-[#8A8580]">
              <strong>Data Period:</strong> 2019-2025 • <strong>Countries Covered:</strong> 20 nations • <strong>Last Updated:</strong> February 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// CTA SECTION - LIGHT
// ============================================================================

function CTASection({ onNavigate }: { onNavigate?: (route: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10 bg-[#F7F8F6]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[900px] mx-auto text-center"
      >
        <h2
          className="text-3xl md:text-5xl font-medium text-[#181D25] mb-6"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          Ready to Build Your AI-First Team?
        </h2>

        <p className="text-lg text-[#676F7E] mb-10 max-w-2xl mx-auto leading-relaxed">
          Understanding global AI skills trends is just the start. Use StartupAI to validate your AI strategy, assess your team's capabilities, and compete globally.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate?.('startup-validator-v4')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0E6249] hover:bg-[#0a4a37] text-white font-semibold rounded-lg transition-colors"
          >
            Validate Your AI Idea
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate?.('global-ai-race')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-[#FBFAF9] text-[#181D25] font-semibold border border-[#E5E2DC] rounded-lg transition-colors"
          >
            Explore More Research
          </motion.button>
        </div>

        <div className="mt-16 pt-12 border-t border-[#E5E2DC]">
          <p className="text-sm text-[#8A8580]">
            StartupAI Research · February 2026 · Data compiled from 5 verified global sources
          </p>
        </div>
      </motion.div>
    </section>
  );
}
