'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { ExternalLink, Zap, TrendingUp, AlertTriangle, Shield, Layers, Network, ArrowUpRight, Target } from 'lucide-react';

interface McKinseyTechTrendsProps {
  onNavigate?: (route: string) => void;
}

export default function McKinseyTechTrends2025({ onNavigate }: McKinseyTechTrendsProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrollProgress(latest);
    });
  }, [scrollYProgress]);

  return (
    <div className="min-h-screen bg-[#0A211F]">
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6B9D89] via-[#0D5F4E] to-[#6B9D89] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Grain texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Act I: Hero - Investment Constellation */}
      <HeroSection />

      {/* Act II: The 13 Trends - Investment Landscape */}
      <TrendsConstellationSection />

      {/* Act III: Maturity Paradox */}
      <MaturityParadoxSection />

      {/* Act IV: AI Revolution - Investment Dominance */}
      <AIRevolutionSection />

      {/* Act V: Talent Crisis */}
      <TalentCrisisSection />

      {/* Act VI: Semiconductor Moat */}
      <SemiconductorMoatSection />

      {/* Act VII: Trust Dividend */}
      <TrustDividendSection />

      {/* Act VIII: Combinatorial Power */}
      <CombinatorialPowerSection />

      {/* Act IX: Strategic Imperative */}
      <StrategicImperativeSection />

      {/* Sources */}
      <SourcesSection onNavigate={onNavigate} />
    </div>
  );
}

// ============================================================================
// ACT I: HERO - INVESTMENT CONSTELLATION
// ============================================================================

function HeroSection() {
  const [counts, setCounts] = useState({ ai: 0, adoption: 0, agentic: 0, funding: 0 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 550], [1, 0]);
  const y = useTransform(scrollY, [0, 550], [0, 55]);

  useEffect(() => {
    const duration = 1400;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCounts({
        ai: parseFloat((eased * 124.3).toFixed(1)),
        adoption: Math.round(eased * 78),
        agentic: Math.round(eased * 985),
        funding: Math.round(eased * 52),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    setTimeout(() => animate(), 500);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(107,157,137,0.06) 0%, rgba(13,95,78,0.03) 40%, transparent 65%)'
          }}
          animate={{
            scale: [0.95, 1.08],
            opacity: [0.4, 0.8],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Top nav */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-14 py-8 z-10">
        <span className="text-[10px] font-semibold tracking-[4px] uppercase text-[#2A4E45]">StartupAI Research</span>
        <span className="text-[10px] font-mono text-[#2A4E45]">MCK · JUL 2025</span>
      </div>

      {/* Hero content */}
      <motion.div className="relative z-10 max-w-[640px] px-6 text-center" style={{ opacity, y }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#6B9D89]/10 border border-[#6B9D89]/30 rounded-full mb-8"
        >
          <Zap className="w-3 h-3 text-[#6B9D89]" />
          <span className="text-[10px] uppercase tracking-[4.5px] text-[#6B9D89] font-semibold">McKinsey Technology Trends Outlook 2025</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-[clamp(36px,7vw,70px)] leading-[1.06] tracking-[-1.5px] text-[#F7F9F2] mb-6 font-light"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          13 Frontier<br />
          <span className="italic text-[#6B9D89]">Technologies</span><br />
          Shaping 2025
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="w-10 h-[1px] bg-[#24423B] mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="text-sm text-[#7C7D79] leading-relaxed"
        >
          McKinsey analyzed 13 major technology trends — from AI agents to quantum computing — ranking each by how much money they're getting, how many jobs they're creating, and how ready they are for real-world use. <strong className="text-[#DDE6C8] font-medium">The big finding: AI isn't just one trend — it's making all the other 12 trends better and faster.</strong>
        </motion.p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <HeroStat value={`$${counts.ai}B`} label="AI equity investment" color="#6B9D89" delay={1.5} />
          <HeroStat value={`${counts.adoption}%`} label="orgs using AI" color="#8FB894" delay={1.65} />
          <HeroStat value={`+${counts.agentic}%`} label="agentic AI job growth" color="#0D5F4E" delay={1.8} />
          <HeroStat value={`$${counts.funding}B`} label="Q1 2025 AI funding" color="#6B9D89" delay={1.95} />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] tracking-[2.5px] uppercase text-[#2A4E45]">Scroll</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#2A4E45] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}

function HeroStat({ value, label, color, delay }: { value: string; label: string; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-[clamp(24px,4vw,42px)] tracking-[-1px] font-light leading-[0.9] mb-2" style={{ color, fontFamily: 'Georgia, serif' }}>
        {value}
      </div>
      <div className="text-[10px] text-[#2A4E45]">{label}</div>
    </motion.div>
  );
}

// ============================================================================
// ACT II: THE 13 TRENDS - INVESTMENT CONSTELLATION
// ============================================================================

function TrendsConstellationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const trends = [
    { icon: "🤖", name: "Agentic AI", inv: "$1.1B", jobs: "+985%", adopt: "Level 2", bg: "#D4E6D0", color: "#191918", barColor: "#6B9D89", width: 8 },
    { icon: "🧠", name: "Artificial Intelligence", inv: "$124.3B", jobs: "+35%", adopt: "Level 4", bg: "#D4E6D0", color: "#191918", barColor: "#6B9D89", width: 100 },
    { icon: "⚡", name: "Semiconductors", inv: "$7.5B", jobs: "+22%", adopt: "Level 3", bg: "#F5EFE3", color: "#191918", barColor: "#6B9D89", width: 12 },
    { icon: "📡", name: "Adv. Connectivity", inv: "$15.7B", jobs: "+9%", adopt: "Level 3", bg: "#E8EFE8", color: "#191918", barColor: "#6B9D89", width: 18 },
    { icon: "☁️", name: "Cloud & Edge", inv: "$80.8B", jobs: "+2%", adopt: "Level 4", bg: "#E8EFE8", color: "#191918", barColor: "#6B9D89", width: 72 },
    { icon: "🥽", name: "Immersive Reality", inv: "$6.8B", jobs: "+11%", adopt: "Level 2", bg: "#FAF9F7", color: "#191918", barColor: "#6B9D89", width: 10 },
    { icon: "🔐", name: "Digital Trust & Cyber", inv: "$20.2B", jobs: "+14%", adopt: "Level 4", bg: "#D4E6D0", color: "#191918", barColor: "#6B9D89", width: 22 },
    { icon: "⚛️", name: "Quantum Tech", inv: "$2B", jobs: "−15%", adopt: "Level 1", bg: "#F5F3EF", color: "#191918", barColor: "#6B9D89", width: 5 },
    { icon: "🦾", name: "Robotics", inv: "$7B", jobs: "−2%", adopt: "Level 3", bg: "#F5EFE3", color: "#191918", barColor: "#6B9D89", width: 11 },
    { icon: "🚗", name: "Future of Mobility", inv: "$175B", jobs: "+8%", adopt: "Level 4", bg: "#E8EFE8", color: "#191918", barColor: "#6B9D89", width: 82 },
    { icon: "🧬", name: "Bioengineering", inv: "$57.3B", jobs: "−17%", adopt: "Level 2", bg: "#E8EFE8", color: "#191918", barColor: "#6B9D89", width: 50 },
    { icon: "🚀", name: "Space Technologies", inv: "$25B", jobs: "+9%", adopt: "Level 2", bg: "#FAF9F7", color: "#191918", barColor: "#6B9D89", width: 25 },
    { icon: "🌱", name: "Energy & Sustainability", inv: "$223.2B", jobs: "−6%", adopt: "Level 5", bg: "#D4E6D0", color: "#191918", barColor: "#6B9D89", width: 100 },
  ];

  return (
    <section ref={ref} className="py-[100px] bg-[#0A211F]">
      <div className="max-w-[1200px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[6px] h-[6px] rounded-full bg-[#6B9D89]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#6B9D89]">The 13 Trends</span>
          </div>
          <h2 className="text-[clamp(18px,2.5vw,26px)] font-light text-[#F7F9F2] max-w-[560px] mb-3 leading-[1.35] tracking-[-0.5px]" style={{ fontFamily: 'Georgia, serif' }}>
            Where the money is going, what jobs are being created, and which technologies are ready for business use.
          </h2>
          <p className="text-sm text-[#7C7D79] max-w-[560px] leading-relaxed">
            Out of 13 trends, 10 got more investment in 2024 than the year before. AI leads with $124.3 billion. AI agents (software that can work independently) grew faster than any other technology in jobs, investment, and interest.
          </p>
        </motion.div>

        {/* Trend grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {trends.map((trend, index) => (
            <TrendCard key={index} trend={trend} delay={0.1 + (index % 4) * 0.1} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrendCard({ trend, delay, isInView }: { trend: any; delay: number; isInView: boolean }) {
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setBarWidth(trend.width);
      }, delay * 1000 + 300);
    }
  }, [isInView, trend.width, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="rounded-2xl p-4 relative overflow-hidden hover:-translate-y-1 transition-transform"
      style={{ backgroundColor: trend.bg }}
    >
      <div className="text-2xl mb-2">{trend.icon}</div>
      <div className="text-[13px] font-medium mb-1" style={{ color: trend.color, fontFamily: 'Georgia, serif' }}>{trend.name}</div>
      <div className="text-[22px] font-light tracking-[-1px] mb-1" style={{ color: trend.color, fontFamily: 'Georgia, serif' }}>{trend.inv}</div>
      <div className="text-[9px] font-mono mb-1" style={{ color: trend.barColor }}>Jobs {trend.jobs}</div>
      <div className="text-[9px] opacity-50 mb-2" style={{ color: trend.color }}>{trend.adopt}</div>
      
      {/* Investment bar */}
      <div className="h-[3px] rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(0,0,0,0.06)' }}>
        <div
          className="h-full rounded-full transition-all duration-1200"
          style={{
            width: `${barWidth}%`,
            backgroundColor: trend.barColor,
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>
    </motion.div>
  );
}

// ============================================================================
// ACT III: MATURITY PARADOX (78% → 1%)
// ============================================================================

function MaturityParadoxSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-[100px] bg-[#F7F9F2]">
      <div className="max-w-[1200px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-[6px] h-[6px] rounded-full bg-[#0D9488]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#0D9488]">The Adoption Gap</span>
          </div>
          <h2 className="text-[clamp(28px,5vw,48px)] font-light text-[#0A211F] max-w-[700px] mx-auto leading-[1.15] tracking-[-0.5px]" style={{ fontFamily: 'Georgia, serif' }}>
            78% of companies use AI.<br />
            Only 1% are <span className="italic text-[#0D9488]">actually good at it.</span>
          </h2>
        </motion.div>

        {/* Visual: The Gap */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-[800px] mx-auto"
        >
          <div className="bg-white border border-[#E6ECD6] rounded-2xl p-12 shadow-xl">
            <div className="grid grid-cols-2 gap-12">
              {/* Left: Adoption */}
              <div className="text-center">
                <div className="text-[100px] font-light text-[#6B9D89] leading-none mb-4" style={{ fontFamily: 'Georgia, serif' }}>78%</div>
                <div className="text-sm font-medium text-[#0A211F] mb-2">Companies Using AI</div>
                <div className="text-xs text-[#7C7D79]">Using AI in at least one department</div>
              </div>

              {/* Right: Maturity */}
              <div className="text-center">
                <div className="text-[100px] font-light text-[#0D5F4E] leading-none mb-4" style={{ fontFamily: 'Georgia, serif' }}>1%</div>
                <div className="text-sm font-medium text-[#0A211F] mb-2">Actually Good at AI</div>
                <div className="text-xs text-[#7C7D79]">Using AI effectively across the company</div>
              </div>
            </div>

            {/* The Gap */}
            <div className="mt-8 pt-8 border-t border-[#E6ECD6]">
              <div className="flex items-center justify-center gap-4">
                <div className="flex-1 h-2 bg-[#6B9D89]/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '78%' } : {}}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    className="h-full bg-[#6B9D89] rounded-full"
                  />
                </div>
                <span className="text-[28px] font-light text-[#0A211F]" style={{ fontFamily: 'Georgia, serif' }}>−</span>
                <div className="flex-1 h-2 bg-[#0D5F4E]/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '1%' } : {}}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    className="h-full bg-[#0D5F4E] rounded-full"
                  />
                </div>
                <span className="text-[28px] font-light text-[#0A211F]" style={{ fontFamily: 'Georgia, serif' }}>=</span>
                <div className="text-center">
                  <div className="text-[36px] font-light text-[#6B9D89]" style={{ fontFamily: 'Georgia, serif' }}>77pp</div>
                  <div className="text-[10px] text-[#7C7D79] uppercase tracking-wider">Execution Gap</div>
                </div>
              </div>
            </div>

            {/* Insight */}
            <div className="mt-8 p-6 bg-[#D4E6D0] rounded-xl">
              <p className="text-sm text-[#0E3E1B] leading-relaxed italic" style={{ fontFamily: 'Georgia, serif' }}>
                "Most companies are experimenting with AI, but very few know how to use it well. This gap creates a huge opportunity for companies that can actually build AI tools that work in the real world."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// ACT IV: AI REVOLUTION - INVESTMENT DOMINANCE
// ============================================================================

function AIRevolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const investments = [
    { name: "Energy & Sustainability", value: 223.2, width: 100, color: "#6B9D89" },
    { name: "Future of Mobility", value: 175, width: 78, color: "#6B9D89" },
    { name: "Artificial Intelligence", value: 124.3, width: 56, color: "#0D5F4E" },
    { name: "Cloud & Edge Computing", value: 80.8, width: 36, color: "#6B9D89" },
    { name: "Bioengineering", value: 57.3, width: 26, color: "#6B9D89" },
    { name: "Space Technologies", value: 25, width: 11, color: "#24423B" },
    { name: "Digital Trust & Cyber", value: 20.2, width: 9, color: "#24423B" },
    { name: "Adv. Connectivity", value: 15.7, width: 7, color: "#2A4E45" },
  ];

  return (
    <section ref={ref} className="py-[100px] bg-[#EEF3E4]">
      <div className="max-w-[1200px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[6px] h-[6px] rounded-full bg-[#0D9488]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#0D9488]">The AI Revolution</span>
          </div>
          <p className="text-sm text-[#7C7D79] max-w-[560px] leading-relaxed">
            AI isn't just one technology among many — it's making all the other technologies better. AI helps robots learn faster, speeds up drug discovery, optimizes power grids, and improves every other trend on this list.
          </p>
        </motion.div>

        {/* Split panel */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-[2fr_3fr] gap-0 bg-white border border-[#E6ECD6] rounded-2xl overflow-hidden shadow-lg"
        >
          {/* Left: The Number */}
          <div className="p-10 bg-[#D0F5EE] flex flex-col justify-center">
            <div className="text-base font-light text-[#191918] mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              AI got <span className="italic text-[#115E59]">way more investment</span> than anything else
            </div>
            <div className="text-[clamp(48px,8vw,72px)] font-light text-[#115E59] tracking-[-2px] leading-[0.85]" style={{ fontFamily: 'Georgia, serif' }}>
              $124.3B
            </div>
            <div className="text-xs text-[#0D9488] mt-2">equity investment in 2024</div>
            <div className="mt-4 inline-block px-3 py-2 bg-[#0D9488]/10 rounded-lg">
              <div className="text-[10px] text-[#0D9488]">+ $52B in Q1 2025 alone (incl. $40B OpenAI round)</div>
            </div>
          </div>

          {/* Right: Investment bars */}
          <div className="p-10">
            <div className="text-[10px] font-semibold tracking-wider uppercase text-[#24423B] mb-4">Investment by trend, 2024 ($B)</div>
            <div className="space-y-2">
              {investments.map((item, index) => (
                <InvestmentBar key={index} item={item} delay={0.3 + index * 0.05} isInView={isInView} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#D4E6D0] rounded-xl p-6"
          >
            <div className="text-sm text-[#0D5F4E] mb-2">📊 78%</div>
            <div className="text-xs text-[#0E3E1B] leading-relaxed">
              of companies use AI in at least one department
            </div>
            <div className="text-[8.5px] text-[#0D5F4E] mt-2 opacity-60">McKinsey State of AI 2025</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-[#F5F3EF] rounded-xl p-6"
          >
            <div className="text-sm text-[#0D5F4E] mb-2">⚡ 50×</div>
            <div className="text-xs text-[#0E3E1B] leading-relaxed">
              cheaper to run AI each year — costs dropping 9× to 900× depending on what you're doing
            </div>
            <div className="text-[8.5px] text-[#0D5F4E] mt-2 opacity-60">Epoch AI 2025</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-[#E8EFE8] rounded-xl p-6"
          >
            <div className="text-sm text-[#0D5F4E] mb-2">🔬 1%</div>
            <div className="text-xs text-[#0E3E1B] leading-relaxed">
              of leaders say their companies are really good at AI — even though 78% use it. Using AI doesn't mean you're good at it yet.
            </div>
            <div className="text-[8.5px] text-[#0D5F4E] mt-2 opacity-60">McKinsey Superagency 2025</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InvestmentBar({ item, delay, isInView }: { item: any; delay: number; isInView: boolean }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setWidth(item.width);
      }, delay * 1000);
    }
  }, [isInView, item.width, delay]);

  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] text-[#24423B] w-[150px] text-right flex-shrink-0">{item.name}</span>
      <div className="flex-1 h-5 bg-[#EEF3E4] rounded overflow-hidden">
        <div
          className="h-full rounded flex items-center justify-end pr-2 transition-all duration-1200"
          style={{
            width: `${width}%`,
            backgroundColor: item.color,
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {width > 10 && (
            <span className="text-[9px] font-mono font-semibold text-white">${item.value}B</span>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// ACT V: TALENT CRISIS
// ============================================================================

function TalentCrisisSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-[100px] bg-[#0A211F]">
      <div className="max-w-[900px] mx-auto px-14 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-[6px] h-[6px] rounded-full bg-[#6B9D89]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#6B9D89]">The Talent Shortage</span>
          </div>
          <h2 className="text-[clamp(28px,5vw,48px)] font-light text-[#F7F9F2] max-w-[700px] mx-auto leading-[1.15] tracking-[-0.5px]" style={{ fontFamily: 'Georgia, serif' }}>
            Not enough people know Python or cloud tech.<br />
            <span className="italic text-[#6B9D89]">Companies can't find who they need to hire.</span>
          </h2>
        </motion.div>

        {/* Funnel diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <svg viewBox="0 0 400 500" className="w-full max-w-[400px] mx-auto">
            {/* Demand (expanding top) */}
            <motion.path
              d="M 100 50 L 50 150 L 350 150 L 300 50 Z"
              fill="url(#demandGradient)"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={isInView ? { opacity: 1, pathLength: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            {/* The Gap */}
            <motion.rect
              x="50"
              y="150"
              width="300"
              height="200"
              fill="#1D3730"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.8 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            
            {/* Supply (narrow bottom) */}
            <motion.path
              d="M 150 350 L 180 450 L 220 450 L 250 350 Z"
              fill="#6B9D89"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              style={{ transformOrigin: 'center bottom' }}
            />

            {/* Labels */}
            <text x="200" y="100" textAnchor="middle" fill="#6B9D89" fontSize="14" fontWeight="600">Companies Need More People ↑</text>
            <text x="200" y="250" textAnchor="middle" fill="#8FB894" fontSize="18" fontWeight="300" fontFamily="Georgia, serif">THE GAP</text>
            <text x="200" y="275" textAnchor="middle" fill="#6B9D89" fontSize="12">46% say finding skilled people is their #1 problem</text>
            <text x="200" y="480" textAnchor="middle" fill="#0D5F4E" fontSize="14" fontWeight="600">Not Enough Qualified People ↓</text>

            {/* Gradients */}
            <defs>
              <linearGradient id="demandGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6B9D89" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0D5F4E" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-8 mt-12 max-w-[500px] mx-auto">
            <div className="bg-[#1D3730] rounded-xl p-6 text-center">
              <div className="text-[48px] font-light text-[#6B9D89] mb-2" style={{ fontFamily: 'Georgia, serif' }}>0.4×</div>
              <div className="text-sm text-[#8FB894]">Python Developers</div>
              <div className="text-xs text-[#2A4E45] mt-2">For every 10 open jobs, only 4 qualified people exist</div>
            </div>
            <div className="bg-[#1D3730] rounded-xl p-6 text-center">
              <div className="text-[48px] font-light text-[#0D5F4E] mb-2" style={{ fontFamily: 'Georgia, serif' }}>&lt;0.1×</div>
              <div className="text-sm text-[#6B9D89]">Cloud Engineers (AWS)</div>
              <div className="text-xs text-[#2A4E45] mt-2">For every 10 jobs, less than 1 qualified person</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// ACT VI: SEMICONDUCTOR MOAT
// ============================================================================

function SemiconductorMoatSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-[100px] bg-[#F7F9F2]">
      <div className="max-w-[1000px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-[6px] h-[6px] rounded-full bg-[#6B9D89]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#6B9D89]">Where the Real Power Is</span>
          </div>
          <h2 className="text-[clamp(24px,4vw,38px)] font-light text-[#0A211F] max-w-[600px] mx-auto leading-[1.2] tracking-[-0.5px]" style={{ fontFamily: 'Georgia, serif' }}>
            AI models are becoming common.<br />
            <span className="italic text-[#6B9D89]">Computer chips are the real advantage.</span>
          </h2>
        </motion.div>

        {/* Layered architecture */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          {/* Layer 1: Models (fading) */}
          <motion.div
            className="bg-white border border-[#E6ECD6] rounded-xl p-8 relative overflow-hidden"
            initial={{ opacity: 1 }}
            animate={isInView ? { opacity: 0.4 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="text-sm font-semibold text-[#7C7D79] mb-2">AI MODELS</div>
            <div className="text-xs text-[#7C7D79] mb-4">(Becoming common — anyone can use these)</div>
            <div className="flex gap-3 flex-wrap">
              {['GPT-4', 'Claude', 'Gemini', 'Llama'].map((model) => (
                <span key={model} className="px-3 py-1 bg-[#F7F9F2] border border-[#E6ECD6] rounded text-xs text-[#7C7D79]">{model}</span>
              ))}
            </div>
          </motion.div>

          {/* Layer 2: Inference (cost collapsing) */}
          <motion.div
            className="bg-gradient-to-r from-[#F5F3EF] to-[#FAF9F7] border border-[#6B9D89]/20 rounded-xl p-8"
            initial={{ opacity: 0.6 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-sm font-semibold text-[#0D5F4E] mb-2">RUNNING AI (Inference)</div>
            <div className="text-xs text-[#0D5F4E] mb-4">(Getting way cheaper every year)</div>
            <div className="flex items-center gap-4">
              <span className="text-[32px] font-light text-[#0D5F4E]" style={{ fontFamily: 'Georgia, serif' }}>50×</span>
              <span className="text-sm text-[#0E3E1B]">cheaper to run AI each year</span>
            </div>
          </motion.div>

          {/* Layer 3: Silicon (moat) */}
          <motion.div
            className="bg-gradient-to-r from-[#D4E6D0] to-[#E8EFE8] border border-[#6B9D89] rounded-xl p-8 shadow-lg relative"
            initial={{ opacity: 0.6, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="absolute top-4 right-4">
              <Shield className="w-6 h-6 text-[#0D5F4E]" />
            </div>
            <div className="text-sm font-semibold text-[#0E3E1B] mb-2">█ COMPUTER CHIPS (The Real Advantage) █</div>
            <div className="text-xs text-[#0D5F4E] mb-4">Custom chips built specifically for AI: Google TPU, Amazon Trainium, specialized processors</div>
            <div className="inline-block px-4 py-2 bg-[#0D5F4E]/10 rounded-lg">
              <div className="text-sm font-medium text-[#0E3E1B]">
                <strong className="text-[#0D5F4E]">More patents filed here</strong> than any other technology
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Insight callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-8 p-6 bg-white border border-[#6B9D89] rounded-xl"
        >
          <p className="text-sm text-[#0A211F] leading-relaxed italic" style={{ fontFamily: 'Georgia, serif' }}>
            "Companies like Google and Amazon are building custom computer chips designed specifically for AI. While AI models are getting easier to copy, <strong className="text-[#0D5F4E] font-semibold not-italic">owning the fastest, most efficient chips gives you a lasting advantage.</strong>"
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// ACT VII: TRUST DIVIDEND
// ============================================================================

function TrustDividendSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-[100px] bg-[#EEF3E4]">
      <div className="max-w-[1000px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-[6px] h-[6px] rounded-full bg-[#0E3E1B]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#0E3E1B]">Why Trust Matters</span>
          </div>
          <h2 className="text-[clamp(24px,4vw,38px)] font-light text-[#0A211F] max-w-[600px] mx-auto leading-[1.2] tracking-[-0.5px]" style={{ fontFamily: 'Georgia, serif' }}>
            Only 53% of people trust AI companies.<br />
            <span className="italic text-[#0E3E1B]">But trusted companies make way more money.</span>
          </h2>
        </motion.div>

        {/* Dual chart */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white border border-[#E6ECD6] rounded-2xl p-10 shadow-lg"
        >
          <svg viewBox="0 0 600 300" className="w-full">
            {/* Trust line (declining) */}
            <motion.path
              d="M 50 80 Q 200 90, 300 130 Q 400 160, 550 180"
              stroke="#0D5F4E"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            />

            {/* Stock performance area (ascending) */}
            <motion.path
              d="M 50 250 Q 200 220, 300 180 Q 400 140, 550 80 L 550 280 L 50 280 Z"
              fill="url(#trustGradient)"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.3 } : {}}
              transition={{ duration: 1, delay: 1 }}
            />
            <motion.path
              d="M 50 250 Q 200 220, 300 180 Q 400 140, 550 80"
              stroke="#6B9D89"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.8 }}
            />

            {/* Labels */}
            <text x="550" y="70" textAnchor="end" fill="#6B9D89" fontSize="12" fontWeight="600">Stock Performance Gap ↑</text>
            <text x="550" y="175" textAnchor="end" fill="#0D5F4E" fontSize="12" fontWeight="600">Trust % ↓</text>

            {/* Callout */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <circle cx="400" cy="160" r="40" fill="#0E3E1B" opacity="0.1" />
              <text x="400" y="155" textAnchor="middle" fill="#0E3E1B" fontSize="20" fontWeight="300" fontFamily="Georgia, serif">245pp</text>
              <text x="400" y="175" textAnchor="middle" fill="#0E3E1B" fontSize="10">Stock Price Advantage</text>
            </motion.g>

            {/* Gradients */}
            <defs>
              <linearGradient id="trustGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6B9D89" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#6B9D89" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-[#E6ECD6]">
            <div className="text-center">
              <div className="text-[48px] font-light text-[#0D5F4E] mb-2" style={{ fontFamily: 'Georgia, serif' }}>53%</div>
              <div className="text-sm text-[#0A211F]">People Trust AI Companies</div>
              <div className="text-xs text-[#7C7D79] mt-1">(Dropped from 61% in 2019)</div>
            </div>
            <div className="text-center">
              <div className="text-[48px] font-light text-[#6B9D89] mb-2" style={{ fontFamily: 'Georgia, serif' }}>245pp</div>
              <div className="text-sm text-[#0A211F]">How Much Better Trusted Companies Did</div>
              <div className="text-xs text-[#7C7D79] mt-1">(Stock performance: Trusted vs Untrusted AI companies, 2017-2023)</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// ACT VIII: COMBINATORIAL POWER
// ============================================================================

function CombinatorialPowerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const intersections = [
    { name: "AI × Robotics", effect: "Robots can learn new tasks faster", color: "#6B9D89" },
    { name: "AI × Bioengineering", effect: "Finding new medicines much quicker", color: "#0E3E1B" },
    { name: "AI × Energy", effect: "Better power grid management and prediction", color: "#6B9D89" },
    { name: "AI × Semiconductors", effect: "Designing better computer chips automatically", color: "#6B9D89" },
    { name: "AI × Cybersecurity", effect: "Finding threats instantly instead of hours later", color: "#0D5F4E" },
    { name: "AI × Cloud", effect: "Cloud systems that manage themselves", color: "#6B9D89" },
  ];

  return (
    <section ref={ref} className="py-[100px] bg-[#0A211F]">
      <div className="max-w-[1200px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-[6px] h-[6px] rounded-full bg-[#8FB894]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#8FB894]">How AI Works With Everything</span>
          </div>
          <h2 className="text-[clamp(28px,5vw,48px)] font-light text-[#F7F9F2] max-w-[700px] mx-auto leading-[1.15] tracking-[-0.5px]" style={{ fontFamily: 'Georgia, serif' }}>
            AI isn't useful alone.<br />
            <span className="italic text-[#8FB894]">It makes the other 12 technologies better.</span>
          </h2>
        </motion.div>

        {/* Network diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-[800px] mx-auto"
        >
          <svg viewBox="0 0 600 600" className="w-full">
            {/* Center: AI */}
            <motion.circle
              cx="300"
              cy="300"
              r="60"
              fill="url(#aiGlow)"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ transformOrigin: '300px 300px' }}
            />
            <text x="300" y="305" textAnchor="middle" fill="#0A211F" fontSize="20" fontWeight="600">AI</text>

            {/* Spokes to intersections */}
            {intersections.map((item, index) => {
              const angle = (index / intersections.length) * 2 * Math.PI - Math.PI / 2;
              const x = 300 + Math.cos(angle) * 200;
              const y = 300 + Math.sin(angle) * 200;

              return (
                <g key={index}>
                  {/* Spoke */}
                  <motion.line
                    x1="300"
                    y1="300"
                    x2={x}
                    y2={y}
                    stroke={item.color}
                    strokeWidth="2"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                  />

                  {/* Node */}
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="15"
                    fill={item.color}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    style={{ transformOrigin: `${x}px ${y}px` }}
                  />
                </g>
              );
            })}

            {/* Gradients */}
            <defs>
              <radialGradient id="aiGlow">
                <stop offset="0%" stopColor="#8FB894" />
                <stop offset="100%" stopColor="#6B9D89" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Intersection cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {intersections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
              className="bg-[#1D3730] rounded-xl p-5 border-l-4"
              style={{ borderLeftColor: item.color }}
            >
              <div className="text-sm font-semibold text-[#F7F9F2] mb-2">{item.name}</div>
              <div className="text-xs text-[#8FB894] leading-relaxed">{item.effect}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// ACT IX: STRATEGIC IMPERATIVE
// ============================================================================

function StrategicImperativeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-[100px] bg-[#F7F9F2]">
      <div className="max-w-[1100px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-[6px] h-[6px] rounded-full bg-[#6B9D89]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#6B9D89]">What This Means For You</span>
          </div>
          <h2 className="text-[clamp(24px,4vw,38px)] font-light text-[#0A211F] max-w-[700px] mx-auto leading-[1.2] tracking-[-0.5px]" style={{ fontFamily: 'Georgia, serif' }}>
            AI agents: <span className="italic text-[#6B9D89]">Not many companies are good at them yet.</span><br />
            But everyone wants them. <span className="italic text-[#0D5F4E]">This is your chance.</span>
          </h2>
        </motion.div>

        {/* Strategic grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-[#D4E6D0] to-[#E8EFE8] rounded-2xl p-8 border border-[#6B9D89]/30"
          >
            <TrendingUp className="w-6 h-6 text-[#0D5F4E] mb-4" />
            <h3 className="text-lg font-semibold text-[#0A211F] mb-2">For Founders</h3>
            <div className="text-sm text-[#0E3E1B] mb-4">Your Opportunity Window</div>
            <ul className="space-y-3 text-xs text-[#0D5F4E] leading-relaxed">
              <li>• <strong className="text-[#0E3E1B]">Build AI agents now.</strong> Everyone's interested but few companies are good at it yet. You can build working solutions while big companies are still experimenting.</li>
              <li>• <strong className="text-[#0E3E1B]">Combine AI with other technologies.</strong> The biggest opportunities are where AI meets robotics, biotech, or energy — not AI alone.</li>
              <li>• <strong className="text-[#0E3E1B]">Smaller AI models work great.</strong> You don't need the biggest, most expensive models. Smaller ones cost way less and work just as well for most tasks.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-[#E8EFE8] to-[#F5F3EF] rounded-2xl p-8 border border-[#6B9D89]/30"
          >
            <Target className="w-6 h-6 text-[#0D5F4E] mb-4" />
            <h3 className="text-lg font-semibold text-[#0A211F] mb-2">For Investors</h3>
            <div className="text-sm text-[#0D5F4E] mb-4">Where to Look</div>
            <ul className="space-y-3 text-xs text-[#0E3E1B] leading-relaxed">
              <li>• <strong className="text-[#0E3E1B]">AI agents are hiring fast.</strong> Job postings for AI agent developers grew 985% — the fastest of any technology. Follow where companies are hiring, not just the hype.</li>
              <li>• <strong className="text-[#0E3E1B]">Computer chip companies are innovating.</strong> More patents filed in semiconductors than any other trend. The infrastructure layer matters.</li>
              <li>• <strong className="text-[#0E3E1B]">Skip general chatbots.</strong> $124.3 billion already invested in general AI. Too crowded. Look for specialized solutions instead.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-[#F5EFE3] to-[#FAF9F7] rounded-2xl p-8 border border-[#6B9D89]/30"
          >
            <Shield className="w-6 h-6 text-[#0D5F4E] mb-4" />
            <h3 className="text-lg font-semibold text-[#0A211F] mb-2">For Enterprises</h3>
            <div className="text-sm text-[#0D5F4E] mb-4">What You Need to Do Now</div>
            <ul className="space-y-3 text-xs text-[#0E3E1B] leading-relaxed">
              <li>• <strong className="text-[#0E3E1B]">Electricity is the new problem.</strong> Data centers will need 3× more power by 2030. Companies that secure power agreements now will have an advantage.</li>
              <li>• <strong className="text-[#0E3E1B]">Being trustworthy pays off.</strong> Trusted AI companies' stocks performed 245 percentage points better than untrusted ones. Invest in doing AI responsibly.</li>
              <li>• <strong className="text-[#0E3E1B]">Train your people, don't just hire.</strong> Not enough qualified people exist. For every 10 Python jobs, only 4 qualified people. Train your current employees instead.</li>
            </ul>
          </motion.div>
        </div>

        {/* Final insight */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 p-8 bg-white border-2 border-[#6B9D89] rounded-2xl text-center"
        >
          <p className="text-base text-[#0A211F] leading-relaxed italic max-w-[700px] mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
            "The biggest opportunities come from combining AI with other industries — like robotics, medicine, energy, and security. The companies that win won't just build AI by itself. They'll use AI to <strong className="text-[#0D5F4E] font-semibold not-italic">make other industries better.</strong>"
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// SOURCES SECTION
// ============================================================================

function SourcesSection({ onNavigate }: { onNavigate?: (route: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-[100px] bg-[#EEF3E4] text-center">
      <div className="max-w-[900px] mx-auto px-14">
        
        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[clamp(22px,4vw,38px)] leading-[1.22] tracking-[-0.5px] text-[#0A211F] max-w-[580px] mx-auto mb-6 font-light"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          13 technologies. One makes them all better.<br />
          <span className="italic text-[#115E59]">AI speeds up everything else.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-sm text-[#24423B] leading-relaxed max-w-[480px] mx-auto text-left mb-10"
        >
          <strong className="text-[#0A211F] font-semibold">$124.3 billion</strong> invested in AI in 2024. <strong className="text-[#0A211F] font-semibold">AI agent jobs</strong> grew 985% — faster than any other technology. <strong className="text-[#0A211F] font-semibold">78%</strong> of companies use AI, but only <strong className="text-[#0A211F] font-semibold">1%</strong> are actually good at it. AI is getting <strong className="text-[#0A211F] font-semibold">50× cheaper to run</strong> every year. But trust in AI companies dropped to <strong className="text-[#0A211F] font-semibold">53%</strong>.
        </motion.div>

        {/* Source */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-6 py-3 bg-white border border-[#E6ECD6] rounded-lg"
        >
          <div className="text-xs font-semibold text-[#0A211F] mb-2">Primary Source</div>
          <a
            href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-top-trends-in-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#6B9D89] hover:text-[#0D5F4E] font-mono transition-colors flex items-center gap-2 justify-center"
          >
            McKinsey Technology Trends Outlook 2025 (5th Edition · July 2025 · 108 pages)
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-xs text-[#7C7D79]"
        >
          McKinsey Technology Trends Outlook 2025 (5th Edition) · July 2025 · 108 pages · 13 frontier technologies · StartupAI Research · February 2026
        </motion.div>
      </div>
    </section>
  );
}
