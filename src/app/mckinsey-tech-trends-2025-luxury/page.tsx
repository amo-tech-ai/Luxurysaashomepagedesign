'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { ExternalLink, TrendingUp, TrendingDown, BarChart3, Users, CheckCircle2, ArrowRight } from 'lucide-react';

interface McKinseyLuxuryProps {
  onNavigate?: (route: string) => void;
}

type ViewMode = 'investment' | 'jobs' | 'readiness';

export default function McKinseyTechTrends2025Luxury({ onNavigate }: McKinseyLuxuryProps) {
  const { scrollYProgress } = useScroll();
  const [viewMode, setViewMode] = useState<ViewMode>('investment');

  return (
    <div className="min-h-screen bg-[#0A211F]">
      {/* Elegant scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6B9D89] to-transparent origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Grain texture */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.012] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Scene 1: Opening Insight */}
      <HeroScene />

      {/* Scene 2: Investment Grid (Luxury Cards) */}
      <InvestmentGridScene viewMode={viewMode} setViewMode={setViewMode} />

      {/* Scene 3: Capital Flow Map */}
      <CapitalFlowScene />

      {/* Scene 4: Job Growth Heatfield */}
      <TalentMomentumScene />

      {/* Scene 5: Enterprise Readiness Ladder */}
      <ReadinessLadderScene />

      {/* Scene 6: Strategic Zones */}
      <StrategicZonesScene />

      {/* Executive Takeaway */}
      <ExecutiveTakeawayScene onNavigate={onNavigate} />
    </div>
  );
}

// ============================================================================
// SCENE 1: HERO - OPENING INSIGHT
// ============================================================================

function HeroScene() {
  const [counts, setCounts] = useState({ ai: 0, jobs: 0, trends: 0 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const y = useTransform(scrollY, [0, 600], [0, 120]);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts({
        ai: parseFloat((eased * 124.3).toFixed(1)),
        jobs: Math.round(eased * 985),
        trends: Math.round(eased * 10),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    setTimeout(() => animate(), 800);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#6B9D89]/20"
            style={{
              left: `${15 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -40 - i * 5, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#0D5F4E]/5 via-transparent to-transparent" />

      <motion.div className="relative z-10 max-w-[900px] px-8 text-center" style={{ opacity, y }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[10px] font-semibold tracking-[4px] uppercase text-[#6B9D89] mb-6"
        >
          McKinsey Technology Trends Outlook 2025
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[clamp(42px,7vw,78px)] leading-[1.08] tracking-[-2px] text-[#F7F9F2] mb-4 font-light"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Where Capital, Talent,<br />
          and Enterprise Readiness<br />
          <span className="italic text-[#6B9D89]">Converge</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-16 h-[1px] bg-[#6B9D89]/40 mx-auto mb-12"
        />

        {/* Animated counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[700px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center"
          >
            <div className="text-[clamp(48px,6vw,72px)] tracking-[-2px] font-light leading-[0.9] mb-3 text-[#6B9D89]" style={{ fontFamily: 'Georgia, serif' }}>
              ${counts.ai}B
            </div>
            <div className="text-[11px] text-[#8FB894] uppercase tracking-wider">AI Investment</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center"
          >
            <div className="text-[clamp(48px,6vw,72px)] tracking-[-2px] font-light leading-[0.9] mb-3 text-[#8FB894]" style={{ fontFamily: 'Georgia, serif' }}>
              +{counts.jobs}%
            </div>
            <div className="text-[11px] text-[#8FB894] uppercase tracking-wider">Agentic AI Jobs</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center"
          >
            <div className="text-[clamp(48px,6vw,72px)] tracking-[-2px] font-light leading-[0.9] mb-3 text-[#6B9D89]" style={{ fontFamily: 'Georgia, serif' }}>
              {counts.trends}/13
            </div>
            <div className="text-[11px] text-[#8FB894] uppercase tracking-wider">Trends Growing</div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[9px] tracking-[3px] uppercase text-[#6B9D89]/60">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-10 bg-gradient-to-b from-[#6B9D89]/40 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============================================================================
// SCENE 2: INVESTMENT GRID - LUXURY CARDS WITH INTERACTIVE TOGGLE
// ============================================================================

function InvestmentGridScene({ viewMode, setViewMode }: { viewMode: ViewMode; setViewMode: (mode: ViewMode) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const trends = [
    { icon: "🧠", name: "Artificial Intelligence", investment: 124.3, jobs: 35, readiness: 4, capital: "Dominant enterprise spend", talent: "Fastest infrastructure hiring", ready: "Production-grade deployment", level: "Infrastructure", bg: "#D4E6D0", width: 100 },
    { icon: "🤖", name: "Agentic AI", investment: 1.1, jobs: 985, readiness: 2, capital: "Explosive early investment", talent: "Highest growth velocity", ready: "Experimental to production", level: "Scaling", bg: "#D4E6D0", width: 8 },
    { icon: "🌱", name: "Energy & Sustainability", investment: 223.2, jobs: -6, readiness: 5, capital: "Largest absolute capital", talent: "Consolidation phase", ready: "Mature grid integration", level: "Mature", bg: "#E8EFE8", width: 100 },
    { icon: "🚗", name: "Future of Mobility", investment: 175, jobs: 8, readiness: 4, capital: "Autonomous vehicle focus", talent: "Engineering expansion", ready: "Commercial rollout", level: "Scaling", bg: "#E8EFE8", width: 82 },
    { icon: "☁️", name: "Cloud & Edge", investment: 80.8, jobs: 2, readiness: 4, capital: "Steady infrastructure build", talent: "Stable demand", ready: "Enterprise standard", level: "Infrastructure", bg: "#F5F3EF", width: 72 },
    { icon: "🧬", name: "Bioengineering", investment: 57.3, jobs: -17, readiness: 2, capital: "Research-heavy capital", talent: "Automation replacing roles", ready: "Clinical trial phase", level: "Scaling", bg: "#FAF9F7", width: 50 },
    { icon: "🚀", name: "Space Technologies", investment: 25, jobs: 9, readiness: 2, capital: "Private sector surge", talent: "Specialized hiring", ready: "Commercial launches", level: "Scaling", bg: "#FAF9F7", width: 25 },
    { icon: "🔐", name: "Digital Trust & Cyber", investment: 20.2, jobs: 14, readiness: 4, capital: "Security mandate spend", talent: "Defense expansion", ready: "Critical infrastructure", level: "Infrastructure", bg: "#D4E6D0", width: 22 },
    { icon: "📡", name: "Adv. Connectivity", investment: 15.7, jobs: 9, readiness: 3, capital: "5G/6G buildout", talent: "Network engineering", ready: "Enterprise deployment", level: "Infrastructure", bg: "#E8EFE8", width: 18 },
    { icon: "⚡", name: "Semiconductors", investment: 7.5, jobs: 22, readiness: 3, capital: "Custom chip innovation", talent: "High-skill demand", ready: "Foundry expansion", level: "Scaling", bg: "#F5EFE3", width: 12 },
    { icon: "🦾", name: "Robotics", investment: 7, jobs: -2, readiness: 3, capital: "Warehouse automation", talent: "Software over hardware", ready: "Logistics deployment", level: "Scaling", bg: "#F5EFE3", width: 11 },
    { icon: "🥽", name: "Immersive Reality", investment: 6.8, jobs: 11, readiness: 2, capital: "Gaming & training focus", talent: "Content creation surge", ready: "Consumer adoption", level: "Scaling", bg: "#FAF9F7", width: 10 },
    { icon: "⚛️", name: "Quantum Tech", investment: 2, jobs: -15, readiness: 1, capital: "Pure research investment", talent: "Academia to industry", ready: "Proof of concept", level: "Early", bg: "#F5F3EF", width: 5 },
  ];

  // Sort based on view mode
  const sortedTrends = [...trends].sort((a, b) => {
    if (viewMode === 'investment') return b.investment - a.investment;
    if (viewMode === 'jobs') return b.jobs - a.jobs;
    if (viewMode === 'readiness') return b.readiness - a.readiness;
    return 0;
  });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-[#0A211F] to-[#0E1715]">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="text-[10px] font-semibold tracking-[3px] uppercase text-[#6B9D89] mb-4">
            The 13 Frontier Technologies
          </div>
          <h2 className="text-[clamp(32px,5vw,52px)] font-light text-[#F7F9F2] leading-[1.12] tracking-[-1px] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Where the Money<br />
            Is Moving
          </h2>
          <p className="text-sm text-[#8FB894] max-w-[600px] mx-auto leading-relaxed">
            10 of 13 trends increased investment in 2024. Sort by investment, talent demand, or enterprise readiness to explore strategic opportunities.
          </p>
        </motion.div>

        {/* Interactive toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12"
        >
          <ToggleButton
            icon={<BarChart3 className="w-4 h-4" />}
            label="Investment"
            active={viewMode === 'investment'}
            onClick={() => setViewMode('investment')}
          />
          <ToggleButton
            icon={<Users className="w-4 h-4" />}
            label="Jobs"
            active={viewMode === 'jobs'}
            onClick={() => setViewMode('jobs')}
          />
          <ToggleButton
            icon={<CheckCircle2 className="w-4 h-4" />}
            label="Readiness"
            active={viewMode === 'readiness'}
            onClick={() => setViewMode('readiness')}
          />
        </motion.div>

        {/* Luxury card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedTrends.map((trend, index) => (
            <LuxuryTrendCard key={trend.name} trend={trend} delay={0.05 + (index % 3) * 0.05} isInView={isInView} viewMode={viewMode} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ToggleButton({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-400 ${
        active
          ? 'bg-[#6B9D89]/20 border border-[#6B9D89]/40 text-[#6B9D89]'
          : 'bg-[#1D3730]/20 border border-[#6B9D89]/10 text-[#8FB894]/60 hover:border-[#6B9D89]/20'
      }`}
    >
      {icon}
      <span className="text-xs font-medium tracking-wide">{label}</span>
    </button>
  );
}

function LuxuryTrendCard({ trend, delay, isInView, viewMode }: { trend: any; delay: number; isInView: boolean; viewMode: ViewMode }) {
  const [barWidth, setBarWidth] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [numberVisible, setNumberVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setBarWidth(trend.width);
        setNumberVisible(true);
      }, delay * 1000 + 400);
    }
  }, [isInView, trend.width, delay]);

  const jobsPositive = trend.jobs > 0;
  const jobsColor = jobsPositive ? '#6B9D89' : '#0D5F4E';

  // Determine if this is a top performer (pulse effect for top 3 investments)
  const isTopInvestment = trend.investment >= 80;

  // Get the metric to display based on view mode
  const getMetricValue = () => {
    if (viewMode === 'investment') return `$${trend.investment}B`;
    if (viewMode === 'jobs') return `${trend.jobs > 0 ? '+' : ''}${trend.jobs}%`;
    if (viewMode === 'readiness') return `Level ${trend.readiness}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group"
    >
      <motion.div
        animate={{ y: hovered ? -6 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-2xl p-8 shadow-lg border border-white/5 overflow-hidden"
        style={{ backgroundColor: trend.bg }}
      >
        {/* Pulse effect for top investments */}
        {isTopInvestment && (
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(107, 157, 137, 0)',
                '0 0 20px 4px rgba(107, 157, 137, 0.15)',
                '0 0 0 0 rgba(107, 157, 137, 0)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}

        {/* Maturity badge */}
        <div className="absolute top-4 right-4">
          <div className="px-2 py-1 rounded-md text-[8px] font-semibold tracking-wider uppercase bg-[#0E3E1B]/10 text-[#0E3E1B] border border-[#0E3E1B]/20">
            {trend.level}
          </div>
        </div>

        {/* Icon + Name */}
        <div className="flex items-start gap-3 mb-6">
          <div className="text-3xl flex-shrink-0">{trend.icon}</div>
          <h3 className="text-[15px] font-medium text-[#0A211F] leading-tight pt-1" style={{ fontFamily: 'Georgia, serif' }}>
            {trend.name}
          </h3>
        </div>

        {/* Primary Metric (changes based on view mode) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: numberVisible ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(38px,5vw,52px)] font-light text-[#0E3E1B] tracking-[-2px] leading-[0.9] mb-3"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          {getMetricValue()}
        </motion.div>

        {/* Jobs indicator (always visible) */}
        <div className="flex items-center gap-2 mb-6">
          {jobsPositive ? <TrendingUp className="w-4 h-4" style={{ color: jobsColor }} /> : <TrendingDown className="w-4 h-4" style={{ color: jobsColor }} />}
          <span className="text-sm font-semibold" style={{ color: jobsColor }}>Jobs {trend.jobs > 0 ? '+' : ''}{trend.jobs}%</span>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#0E3E1B]/10 mb-6" />

        {/* Three-question framework */}
        <div className="space-y-3 text-xs text-[#0E3E1B]/70 leading-relaxed">
          <div><strong className="text-[#0E3E1B] font-medium">Capital:</strong> {trend.capital}</div>
          <div><strong className="text-[#0E3E1B] font-medium">Talent:</strong> {trend.talent}</div>
          <div><strong className="text-[#0E3E1B] font-medium">Ready:</strong> {trend.ready}</div>
        </div>

        {/* Investment weight indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0E3E1B]/5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${barWidth}%` }}
            transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-gradient-to-r from-[#6B9D89] to-[#0D5F4E]"
            style={{ 
              opacity: jobsPositive ? 0.7 : 0.4,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================================================
// SCENE 3: CAPITAL FLOW MAP
// ============================================================================

function CapitalFlowScene() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const flows = [
    { name: "Energy", value: 223.2, angle: 0, color: "#6B9D89" },
    { name: "Mobility", value: 175, angle: 60, color: "#6B9D89" },
    { name: "AI", value: 124.3, angle: 120, color: "#0D5F4E" },
    { name: "Cloud", value: 80.8, angle: 180, color: "#6B9D89" },
    { name: "Bio", value: 57.3, angle: 240, color: "#8FB894" },
    { name: "Space", value: 25, angle: 300, color: "#8FB894" },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-[#0E1715] overflow-hidden">
      <motion.div style={{ y: parallaxY }} className="max-w-[1100px] mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-[10px] font-semibold tracking-[3px] uppercase text-[#6B9D89] mb-4">
            Capital Distribution
          </div>
          <h2 className="text-[clamp(32px,5vw,48px)] font-light text-[#F7F9F2] leading-[1.12] tracking-[-1px]" style={{ fontFamily: 'Georgia, serif' }}>
            Investment Flow<br />
            Visualization
          </h2>
          <p className="text-sm text-[#8FB894] max-w-[500px] mx-auto mt-4 leading-relaxed">
            Arc thickness represents funding magnitude. AI sits at the center, connecting to the broader technology ecosystem.
          </p>
        </motion.div>

        {/* Radial visualization */}
        <div className="relative w-full max-w-[600px] mx-auto aspect-square">
          <svg viewBox="0 0 600 600" className="w-full h-full">
            {/* Center: AI */}
            <motion.circle
              cx="300"
              cy="300"
              r="60"
              fill="url(#centerGlow)"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ transformOrigin: '300px 300px' }}
            />
            <motion.circle
              cx="300"
              cy="300"
              r="60"
              stroke="#6B9D89"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ transformOrigin: '300px 300px' }}
            />
            <text x="300" y="305" textAnchor="middle" fill="#0A211F" fontSize="18" fontWeight="600">AI</text>

            {/* Investment arcs */}
            {flows.map((flow, index) => {
              const angle = (flow.angle * Math.PI) / 180;
              const distance = 180;
              const x = 300 + Math.cos(angle - Math.PI / 2) * distance;
              const y = 300 + Math.sin(angle - Math.PI / 2) * distance;
              const thickness = Math.max(2, flow.value / 30);

              return (
                <g key={index}>
                  {/* Arc line */}
                  <motion.line
                    x1="300"
                    y1="300"
                    x2={x}
                    y2={y}
                    stroke={flow.color}
                    strokeWidth={thickness}
                    opacity="0.4"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 0.7 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  />

                  {/* Outer node */}
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="10"
                    fill={flow.color}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    style={{ transformOrigin: `${x}px ${y}px` }}
                  />
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="10"
                    stroke={flow.color}
                    strokeWidth="2"
                    fill="none"
                    opacity="0.3"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                    style={{ transformOrigin: `${x}px ${y}px` }}
                  />

                  {/* Label */}
                  <motion.text
                    x={x}
                    y={y < 300 ? y - 20 : y + 30}
                    textAnchor="middle"
                    fill="#8FB894"
                    fontSize="11"
                    fontWeight="600"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  >
                    {flow.name}
                  </motion.text>
                  <motion.text
                    x={x}
                    y={y < 300 ? y - 8 : y + 42}
                    textAnchor="middle"
                    fill="#6B9D89"
                    fontSize="10"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                  >
                    ${flow.value}B
                  </motion.text>
                </g>
              );
            })}

            {/* Gradients */}
            <defs>
              <radialGradient id="centerGlow">
                <stop offset="0%" stopColor="#8FB894" />
                <stop offset="100%" stopColor="#6B9D89" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}

// ============================================================================
// SCENE 4: TALENT MOMENTUM - JOB GROWTH HEATFIELD
// ============================================================================

function TalentMomentumScene() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const heatmap = [
    { name: "Agentic AI", jobs: 985, glow: 100 },
    { name: "Semiconductors", jobs: 22, glow: 22 },
    { name: "Cybersecurity", jobs: 14, glow: 14 },
    { name: "Immersive Reality", jobs: 11, glow: 11 },
    { name: "Connectivity", jobs: 9, glow: 9 },
    { name: "Space Tech", jobs: 9, glow: 9 },
    { name: "Mobility", jobs: 8, glow: 8 },
    { name: "AI", jobs: 35, glow: 35 },
    { name: "Cloud & Edge", jobs: 2, glow: 2 },
    { name: "Robotics", jobs: -2, glow: -2 },
    { name: "Energy", jobs: -6, glow: -6 },
    { name: "Quantum", jobs: -15, glow: -15 },
    { name: "Bioengineering", jobs: -17, glow: -17 },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-[#0A211F]">
      <div className="max-w-[1100px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="text-[10px] font-semibold tracking-[3px] uppercase text-[#6B9D89] mb-4">
            Talent Momentum
          </div>
          <h2 className="text-[clamp(32px,5vw,48px)] font-light text-[#F7F9F2] leading-[1.12] tracking-[-1px] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Job Growth<br />
            Heatfield
          </h2>
          <p className="text-sm text-[#8FB894] max-w-[500px] mx-auto">
            Fastest talent demand shift = autonomous AI systems. Green intensity represents hiring velocity.
          </p>
        </motion.div>

        {/* Heatmap grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {heatmap.map((item, index) => {
            const isPositive = item.jobs > 0;
            const intensity = Math.min(Math.abs(item.jobs) / 985, 1);
            const bgOpacity = 0.05 + intensity * 0.15;
            const borderOpacity = 0.2 + intensity * 0.3;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-xl p-6 border"
                style={{
                  backgroundColor: isPositive ? `rgba(107, 157, 137, ${bgOpacity})` : `rgba(13, 95, 78, ${bgOpacity})`,
                  borderColor: isPositive ? `rgba(107, 157, 137, ${borderOpacity})` : `rgba(13, 95, 78, ${borderOpacity})`,
                }}
              >
                {/* Glow effect for top performer */}
                {index === 0 && (
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(107, 157, 137, 0.3)',
                        '0 0 40px rgba(107, 157, 137, 0.5)',
                        '0 0 20px rgba(107, 157, 137, 0.3)',
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}

                <div className="text-sm font-medium text-[#F7F9F2] mb-2">{item.name}</div>
                <div className={`text-2xl font-light ${isPositive ? 'text-[#6B9D89]' : 'text-[#0D5F4E]'}`} style={{ fontFamily: 'Georgia, serif' }}>
                  {item.jobs > 0 ? '+' : ''}{item.jobs}%
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SCENE 5: ENTERPRISE READINESS LADDER
// ============================================================================

function ReadinessLadderScene() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const ladder = [
    { level: "Mature", tech: ["Energy & Sustainability"], y: 50, color: "#6B9D89" },
    { level: "Infrastructure", tech: ["AI", "Cloud & Edge", "Cybersecurity"], y: 200, color: "#8FB894" },
    { level: "Scaling", tech: ["Agentic AI", "Mobility", "Semiconductors"], y: 350, color: "#6B9D89" },
    { level: "Early", tech: ["Quantum Tech"], y: 500, color: "#0D5F4E" },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-[#0A211F] to-[#0E1715]">
      <div className="max-w-[1100px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="text-[10px] font-semibold tracking-[3px] uppercase text-[#6B9D89] mb-4">
            Enterprise Readiness
          </div>
          <h2 className="text-[clamp(32px,5vw,48px)] font-light text-[#F7F9F2] leading-[1.12] tracking-[-1px] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Maturity<br />
            Ladder
          </h2>
          <p className="text-sm text-[#8FB894] max-w-[500px] mx-auto">
            Higher position = more mature for business deployment. Technologies progress from research to market.
          </p>
        </motion.div>

        {/* Ladder visualization */}
        <div className="relative max-w-[700px] mx-auto">
          <svg viewBox="0 0 700 600" className="w-full">
            {/* Vertical axis */}
            <motion.line
              x1="50"
              y1="50"
              x2="50"
              y2="550"
              stroke="#6B9D89"
              strokeWidth="2"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            />

            {ladder.map((rung, index) => (
              <g key={index}>
                {/* Rung line */}
                <motion.line
                  x1="50"
                  y1={rung.y}
                  x2="650"
                  y2={rung.y}
                  stroke="#6B9D89"
                  strokeWidth="1"
                  opacity="0.2"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Level label */}
                <motion.text
                  x="30"
                  y={rung.y + 5}
                  textAnchor="end"
                  fill={rung.color}
                  fontSize="12"
                  fontWeight="600"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                >
                  {rung.level}
                </motion.text>

                {/* Technologies */}
                {rung.tech.map((tech, techIndex) => (
                  <motion.g
                    key={techIndex}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.2 + techIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <rect
                      x={80 + techIndex * 160}
                      y={rung.y - 25}
                      width="140"
                      height="50"
                      rx="8"
                      fill="#1D3730"
                      stroke={rung.color}
                      strokeWidth="1"
                      opacity="0.8"
                    />
                    <text
                      x={150 + techIndex * 160}
                      y={rung.y + 5}
                      textAnchor="middle"
                      fill="#8FB894"
                      fontSize="11"
                      fontWeight="500"
                    >
                      {tech}
                    </text>
                  </motion.g>
                ))}
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SCENE 6: STRATEGIC ZONES - 2x2 MATRIX
// ============================================================================

function StrategicZonesScene() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const zones = [
    { name: "AI", x: 450, y: 120, size: 40, color: "#0D5F4E" },
    { name: "Cloud", x: 420, y: 140, size: 30, color: "#6B9D89" },
    { name: "Mobility", x: 400, y: 100, size: 35, color: "#6B9D89" },
    { name: "Energy", x: 380, y: 180, size: 25, color: "#8FB894" },
    { name: "Quantum", x: 120, y: 420, size: 15, color: "#0D5F4E" },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-[#0E1715]">
      <div className="max-w-[1100px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-[10px] font-semibold tracking-[3px] uppercase text-[#6B9D89] mb-4 text-center">
            Strategic Positioning
          </div>
          <h2 className="text-[clamp(32px,5vw,48px)] font-light text-[#F7F9F2] leading-[1.12] tracking-[-1px] text-center mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Investment Scale<br />
            × Business Readiness
          </h2>
          <div className="flex justify-center gap-12 text-sm">
            <div className="text-center">
              <div className="text-[#6B9D89] mb-1">Top-Right Quadrant</div>
              <div className="text-[#8FB894]/60 text-xs">High Capital + Enterprise Ready</div>
            </div>
            <div className="text-center">
              <div className="text-[#0D5F4E] mb-1">Bottom-Left Quadrant</div>
              <div className="text-[#8FB894]/60 text-xs">Early Research Phase</div>
            </div>
          </div>
        </motion.div>

        {/* 2x2 Matrix */}
        <div className="relative max-w-[600px] mx-auto">
          <svg viewBox="0 0 600 600" className="w-full">
            {/* Grid */}
            <motion.line
              x1="50"
              y1="300"
              x2="550"
              y2="300"
              stroke="#6B9D89"
              strokeWidth="1"
              opacity="0.2"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.line
              x1="300"
              y1="50"
              x2="300"
              y2="550"
              stroke="#6B9D89"
              strokeWidth="1"
              opacity="0.2"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* Axes labels */}
            <text x="300" y="580" textAnchor="middle" fill="#6B9D89" fontSize="11">Investment Scale →</text>
            <text x="30" y="300" textAnchor="middle" fill="#6B9D89" fontSize="11" transform="rotate(-90 30 300)">Business Readiness →</text>

            {/* Quadrant highlights */}
            <motion.rect
              x="300"
              y="50"
              width="250"
              height="250"
              fill="#6B9D89"
              opacity="0.05"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.08 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            <text x="425" y="90" textAnchor="middle" fill="#8FB894" fontSize="10" fontWeight="600">
              HIGH CAPITAL + READY
            </text>

            {/* Technology bubbles */}
            {zones.map((zone, index) => (
              <motion.g
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: `${zone.x}px ${zone.y}px` }}
              >
                <circle
                  cx={zone.x}
                  cy={zone.y}
                  r={zone.size}
                  fill={zone.color}
                  opacity="0.6"
                />
                <circle
                  cx={zone.x}
                  cy={zone.y}
                  r={zone.size}
                  stroke={zone.color}
                  strokeWidth="2"
                  fill="none"
                  opacity="0.3"
                />
                <text
                  x={zone.x}
                  y={zone.y + 4}
                  textAnchor="middle"
                  fill="#F7F9F2"
                  fontSize="11"
                  fontWeight="600"
                >
                  {zone.name}
                </text>
              </motion.g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SCENE 7: EXECUTIVE TAKEAWAY
// ============================================================================

function ExecutiveTakeawayScene({ onNavigate }: { onNavigate?: (route: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="relative py-40 bg-gradient-to-b from-[#0E1715] to-[#0A211F]">
      <div className="max-w-[900px] mx-auto px-8">
        {/* Main statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="w-12 h-[1px] bg-[#6B9D89]/40 mx-auto mb-12" />
          
          <h2 className="text-[clamp(32px,6vw,58px)] font-light text-[#F7F9F2] leading-[1.15] tracking-[-1px] mb-6 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            AI is no longer<br />
            experimental.
          </h2>
          
          <p className="text-[clamp(18px,3vw,24px)] font-light text-[#8FB894] leading-[1.4] italic text-center" style={{ fontFamily: 'Georgia, serif' }}>
            Agentic AI is shifting<br />
            from tool to operator.
          </p>
        </motion.div>

        {/* Strategic implication grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Left: Bold statement */}
          <div className="bg-[#1D3730]/20 border border-[#6B9D89]/20 rounded-xl p-8">
            <div className="text-sm font-semibold text-[#6B9D89] mb-4 uppercase tracking-wider">Strategic Implication</div>
            <p className="text-lg font-light text-[#F7F9F2] leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              AI is <span className="italic text-[#6B9D89]">infrastructure</span>.<br />
              Agentic AI is <span className="italic text-[#8FB894]">acceleration</span>.
            </p>
          </div>

          {/* Right: Key insights */}
          <div className="bg-[#1D3730]/20 border border-[#6B9D89]/20 rounded-xl p-8">
            <div className="text-sm font-semibold text-[#6B9D89] mb-4 uppercase tracking-wider">Executive Actions</div>
            <ul className="space-y-3 text-sm text-[#8FB894]">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#6B9D89] flex-shrink-0 mt-0.5" />
                <span>Secure compute + power infrastructure now</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#6B9D89] flex-shrink-0 mt-0.5" />
                <span>Train existing teams vs. compete for talent</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#6B9D89] flex-shrink-0 mt-0.5" />
                <span>Build trust mechanisms early for advantage</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Source */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-block px-6 py-3 bg-[#1D3730]/30 border border-[#6B9D89]/20 rounded-lg">
            <div className="text-[9px] font-semibold text-[#6B9D89] mb-2 uppercase tracking-wider">Source</div>
            <a
              href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-top-trends-in-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-[#8FB894] hover:text-[#6B9D89] font-mono transition-colors flex items-center gap-2 justify-center"
            >
              McKinsey Technology Trends Outlook 2025
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="mt-8 text-[9px] text-[#6B9D89]/50">
            StartupAI Research · February 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
}
