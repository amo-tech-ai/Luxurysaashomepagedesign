'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { ArrowRight, TrendingUp, Zap, Shield, Users, Target, ExternalLink } from 'lucide-react';

interface SoftwareAIOutlookProps {
  onNavigate?: (route: string) => void;
}

export default function SoftwareAIOutlook2026({ onNavigate }: SoftwareAIOutlookProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrollProgress(latest);
    });
  }, [scrollYProgress]);

  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00E5FF] via-[#FFB020] to-[#8B5CF6] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero */}
      <HeroSection />

      {/* Executive Summary */}
      <ExecutiveSummarySection />

      {/* Key Metrics */}
      <KeyMetricsSection />

      {/* Strategic Implications */}
      <StrategicImplicationsSection />

      {/* Core Themes */}
      <CoreThemesSection />

      {/* Competitive Signals */}
      <CompetitiveSignalsSection />

      {/* Non-Obvious Insight */}
      <NonObviousInsightSection />

      {/* Sources */}
      <SourcesSection onNavigate={onNavigate} />
    </div>
  );
}

// ============================================================================
// HERO SECTION
// ============================================================================

function HeroSection() {
  const [counts, setCounts] = useState({ market: 0, agents: 0, productivity: 0, spend: 0, embedding: 0 });
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
        market: Math.round(eased * 780),
        agents: Math.round(eased * 40),
        productivity: Math.round(eased * 35),
        spend: Math.round(eased * 124),
        embedding: Math.round(eased * 88),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    setTimeout(() => animate(), 500);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#00E5FF]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFB020]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      {/* Top nav */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-14 py-8 z-10">
        <span className="text-[10px] font-semibold tracking-[4px] uppercase text-[#64748B]">StartupAI Research</span>
        <span className="text-[10px] font-mono text-[#64748B]">FEB 2026</span>
      </div>

      {/* Hero content */}
      <motion.div className="relative z-10 max-w-[900px] px-6 text-center" style={{ opacity, y }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#00E5FF]/10 border border-[#00E5FF]/30 rounded-full mb-8"
        >
          <Zap className="w-3 h-3 text-[#00E5FF]" />
          <span className="text-[10px] uppercase tracking-[3px] text-[#00E5FF] font-semibold">Strategic Intelligence · Deloitte · KPMG · Stanford HAI</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-[clamp(38px,7vw,72px)] leading-[1.06] tracking-[-1.5px] text-white mb-6 font-light"
        >
          2026 Software & AI <span className="text-[#00E5FF] italic">Outlook</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="w-12 h-[1px] bg-[#334155] mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="text-base text-[#94A3B8] leading-relaxed max-w-2xl mx-auto"
        >
          Agentic AI reshapes competition, margins compress, AI-native challengers emerge, and development teams shrink by design. <strong className="text-[#E2E8F0] font-medium">Three forces that will define the next 18 months.</strong>
        </motion.p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
          <HeroStat value={`$${counts.market}B`} label="app software by 2030" color="#00E5FF" delay={1.5} />
          <HeroStat value={`${counts.agents}%`} label="agents in apps by EOY" color="#FFB020" delay={1.65} />
          <HeroStat value={`${counts.productivity}%`} label="SDLC productivity gain" color="#10B981" delay={1.8} />
          <HeroStat value={`$${counts.spend}M`} label="avg AI spend/org" color="#8B5CF6" delay={1.95} />
          <HeroStat value={`${counts.embedding}%`} label="embedding agents" color="#00E5FF" delay={2.1} />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] tracking-[2.5px] uppercase text-[#64748B]">Scroll</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#64748B] to-transparent animate-pulse" />
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
      <div className="text-[clamp(24px,4vw,42px)] tracking-[-1px] font-light leading-[0.9] mb-2" style={{ color }}>
        {value}
      </div>
      <div className="text-[10px] text-[#64748B]">{label}</div>
    </motion.div>
  );
}

// ============================================================================
// EXECUTIVE SUMMARY SECTION
// ============================================================================

function ExecutiveSummarySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const summaryCards = [
    { icon: "🔥", title: "Agents Go Mainstream", value: "40%", desc: "of enterprise apps will integrate task-specific AI agents by EOY 2026 — up from <5% today. This is the defining shift.", bg: "from-[#00E5FF]/10 to-[#00E5FF]/5", border: "#00E5FF" },
    { icon: "💀", title: "Margin Compression", value: "~70%", desc: "SaaS margins at risk. LLM costs + hybrid pricing + AI-native entrants threaten the economics that built cloud software.", bg: "from-[#FFB020]/10 to-[#FFB020]/5", border: "#FFB020" },
    { icon: "📉", title: "Teams Shrink by Design", value: "80%", desc: "of orgs will evolve large dev teams into smaller AI-augmented units by 2030. This starts now.", bg: "from-[#8B5CF6]/10 to-[#8B5CF6]/5", border: "#8B5CF6" },
  ];

  return (
    <section ref={ref} className="pb-[100px] bg-[#0A1628]">
      <div className="max-w-[1200px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[6px] h-[6px] rounded-full bg-[#00E5FF]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#00E5FF]">§1 · Executive Summary</span>
          </div>
          <h2 className="text-[clamp(20px,3vw,28px)] font-light text-white max-w-[600px] mb-4 leading-[1.35] tracking-[-0.5px]">
            High-signal insights only. What changed, what matters, what surprises.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {summaryCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 26 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
              className={`relative bg-gradient-to-br ${card.bg} backdrop-blur-sm border rounded-2xl p-8 hover:-translate-y-1 transition-transform`}
              style={{ borderColor: `${card.border}20` }}
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <div className="text-sm font-medium text-[#94A3B8] mb-2">{card.title}</div>
              <div className="text-4xl font-light text-white mb-4 tracking-[-1px]">{card.value}</div>
              <p className="text-sm text-[#CBD5E1] leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional insight cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#1E293B]/50 backdrop-blur-sm border border-[#334155] rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-[#10B981]" />
              <span className="text-sm font-medium text-[#94A3B8]">AI Natives Aren't Waiting</span>
            </div>
            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              AI-native challengers are taking share in neglected workflows first, then moving upmarket. US software companies spent more on AI acquisitions in 2025 than the prior <strong className="text-white">3 years combined</strong>. Incumbents are in acquisition mode because building fast enough isn't possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-[#1E293B]/50 backdrop-blur-sm border border-[#334155] rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-[#FF6B6B]" />
              <span className="text-sm font-medium text-[#94A3B8]">Autonomous Attacks Are Real</span>
            </div>
            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              Late 2025: an attacker used jailbroken Claude Code to autonomously attack 30 organizations — <strong className="text-white">80–90% without human involvement</strong>. 16% of data breaches now involve AI-generated phishing. This changes the security equation.
            </p>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#00E5FF]/20 rounded-2xl p-8"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00E5FF] to-[#8B5CF6] rounded-l-2xl" />
          <blockquote className="text-lg text-white font-light italic leading-relaxed ml-6">
            "2026 marks the emergence of the agent orchestrator — a period where AI fundamentally reshapes how businesses generate value, operate, and grow."
          </blockquote>
          <div className="text-sm text-[#64748B] mt-4 ml-6">— Swami Chandrasekaran, Global Head of KPMG AI and Data Labs</div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// KEY METRICS SECTION
// ============================================================================

function KeyMetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const metrics = [
    { metric: "App Software Market 2030", value: "$780B", context: "13% CAGR from AI agent productivity gains", why: "Validates massive TAM expansion if agents deliver" },
    { metric: "Agent Integration EOY 2026", value: "40%", context: "Up from <5% today (Gartner)", why: "8× growth in 12 months — fastest enterprise tech shift ever" },
    { metric: "SDLC Productivity Gain", value: "30–35%", context: "Across full lifecycle (Deloitte)", why: "Coding is only part — requirements, testing, deployment all impacted" },
    { metric: "Avg AI Investment/Org", value: "$124M", context: "Projected next 12 months (KPMG)", why: "67% would maintain even in recession — AI is now non-discretionary" },
    { metric: "Agent Deployment Growth", value: "11% → 42%", context: "Q1 to Q3 2025 (KPMG Pulse)", why: "Nearly 4× in 6 months — fastest enterprise adoption curve on record" },
    { metric: "Orgs Embedding Agents", value: "88%", context: "Into workflows and products (KPMG)", why: "Universal adoption — competitive pressure leaves no choice" },
  ];

  return (
    <section ref={ref} className="py-[100px] bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[6px] h-[6px] rounded-full bg-[#0A1628]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#0A1628]">§2 · Key Data & Metrics</span>
          </div>
          <p className="text-sm text-[#64748B] max-w-[560px] leading-relaxed">
            Every measurable data point extracted from Deloitte, KPMG, Gartner, and Stanford HAI — structured for decision-making.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {metrics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 26 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
              className="bg-white border border-[#E2E8F0] rounded-xl p-6 hover:shadow-lg hover:border-[#00E5FF]/30 transition-all"
            >
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-sm font-semibold text-[#0A1628]">{item.metric}</h3>
                <span className="text-2xl font-light text-[#00E5FF] tracking-[-1px]">{item.value}</span>
              </div>
              <div className="text-xs text-[#64748B] mb-2">{item.context}</div>
              <div className="text-xs text-[#0A1628] leading-relaxed pt-3 border-t border-[#E2E8F0]">
                <strong className="font-semibold">Why it matters:</strong> {item.why}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// STRATEGIC IMPLICATIONS SECTION
// ============================================================================

function StrategicImplicationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const implications = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "For Founders",
      subtitle: "Act Immediately",
      points: [
        "Don't build features — build agents. AI-native challengers are winning neglected workflows first.",
        "Price outcomes, not seats. Hybrid pricing is still unsolved. First mover on value-based pricing wins.",
        "Ship fast, burn smart. LLM costs remain high. Capital-efficient scaling matters more than growth rate."
      ],
      gradient: "from-[#00E5FF]/10 to-[#00E5FF]/5",
      color: "#00E5FF"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "For Investors",
      subtitle: "Asymmetric Upside",
      points: [
        "AI-native vertical SaaS. Specialized, industry-specific agents in neglected workflows.",
        "Agent orchestration layer. The control plane for multi-agent systems. Whoever owns governance + observability wins.",
        "Overhyped: general-purpose AI assistants. 97% free usage rate. Monetization gap is the defining challenge."
      ],
      gradient: "from-[#FFB020]/10 to-[#FFB020]/5",
      color: "#FFB020"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "For Enterprises",
      subtitle: "Urgent Transformation",
      points: [
        "Security posture must assume autonomous attacks. 16% of breaches already AI-generated.",
        "Restructure dev teams now. 64% of orgs already altered hiring. Smaller, AI-augmented teams with mid/senior talent.",
        "Consolidate security tooling. Fragmented tools make it harder for AI agents to defend."
      ],
      gradient: "from-[#8B5CF6]/10 to-[#8B5CF6]/5",
      color: "#8B5CF6"
    },
  ];

  return (
    <section ref={ref} className="py-[100px] bg-[#0A1628]">
      <div className="max-w-[1200px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[6px] h-[6px] rounded-full bg-[#FFB020]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#FFB020]">§3 · Strategic Implications</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {implications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 26 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
              className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm border rounded-2xl p-8 hover:-translate-y-1 transition-transform`}
              style={{ borderColor: `${item.color}20` }}
            >
              <div className="mb-6" style={{ color: item.color }}>
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <div className="text-sm text-[#94A3B8] mb-6">{item.subtitle}</div>
              <div className="space-y-4">
                {item.points.map((point, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-1 h-1 rounded-full bg-[#94A3B8] mt-2 flex-shrink-0" />
                    <p className="text-sm text-[#CBD5E1] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CORE THEMES SECTION
// ============================================================================

function CoreThemesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const themes = [
    { num: "01", title: "Agent-First Software", desc: "60% of the TAM by 2030 will be agent-powered. Software companies must choose: build agentic platforms or become orchestrated by someone else's agents.", color: "#00E5FF" },
    { num: "02", title: "Margin Compression Cycle", desc: "LLM costs + hybrid pricing + AI-native competition = structural margin pressure. The ~70% SaaS margin era may be ending.", color: "#FFB020" },
    { num: "03", title: "The Great Team Restructure", desc: "Smaller teams, bigger output. 30–35% SDLC productivity gains mean fewer developers needed.", color: "#10B981" },
    { num: "04", title: "Autonomous Cyber Threats", desc: "AI-powered attacks that are faster, more persistent, and adaptive. Security must now operate at machine speed.", color: "#8B5CF6" },
    { num: "05", title: "Acquire or Be Acquired", desc: "US software M&A for AI companies in 2025 exceeded prior 3 years combined. 2026 will be musical chairs.", color: "#FF6B6B" },
    { num: "06", title: "AI as Interface Layer", desc: "Fierce competition to be the orchestration layer that governs agents and captures telemetry across applications.", color: "#00E5FF" },
  ];

  return (
    <section ref={ref} className="py-[100px] bg-[#F1F5F9]">
      <div className="max-w-[1200px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[6px] h-[6px] rounded-full bg-[#0A1628]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#0A1628]">§4 · Core Themes Emerging</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 26 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
              className="bg-white border border-[#E2E8F0] rounded-xl p-8 hover:shadow-lg hover:border-[#00E5FF]/30 transition-all"
            >
              <div className="text-4xl font-light mb-4 tracking-[-2px]" style={{ color: theme.color }}>
                {theme.num}
              </div>
              <h3 className="text-lg font-semibold text-[#0A1628] mb-3">{theme.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{theme.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// COMPETITIVE SIGNALS SECTION
// ============================================================================

function CompetitiveSignalsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-[100px] bg-[#0A1628]">
      <div className="max-w-[1200px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[6px] h-[6px] rounded-full bg-[#FF6B6B]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#FF6B6B]">§5 · Competitive & Market Signals</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-[2fr_3fr] gap-6 mb-8 bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-2xl overflow-hidden"
        >
          <div className="p-8 bg-[#1E293B]/50">
            <h3 className="text-2xl font-light text-white mb-4 leading-tight tracking-[-0.5px]">
              Incumbents vs. <span className="italic text-[#FF6B6B]">AI-Natives</span>
            </h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              A coevolution — not a zero-sum game. But low switching costs could push enterprises toward AI-native providers seeking innovation and higher value.
            </p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-xs font-semibold tracking-wider uppercase text-[#64748B] mb-3">Incumbents Win</div>
                <ul className="space-y-2 text-sm text-[#CBD5E1]">
                  <li>• Mission-critical workflows</li>
                  <li>• Cross-functional scale</li>
                  <li>• Trust & compliance</li>
                  <li>• Install base moats</li>
                </ul>
              </div>
              <div>
                <div className="text-xs font-semibold tracking-wider uppercase text-[#FF6B6B] mb-3">AI-Natives Win</div>
                <ul className="space-y-2 text-sm text-[#CBD5E1]">
                  <li>• Neglected workflows</li>
                  <li>• Industry-specific agents</li>
                  <li>• Outcome-based pricing</li>
                  <li>• Agility & speed</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#0A1628]/50 rounded-lg">
              <div className="text-xs text-[#94A3B8]">
                <strong className="text-white">White Space:</strong> Agent orchestration governance · Vertical agentic SaaS · Security platform consolidation
              </div>
            </div>
          </div>
        </motion.div>

        {/* Status cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 border border-[#10B981]/20 rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-[#10B981]" />
              <span className="text-sm font-semibold text-[#10B981]">Ahead</span>
            </div>
            <p className="text-sm text-[#CBD5E1]">
              Microsoft, Salesforce, ServiceNow building end-to-end agentic platforms. Cloud infra providers positioning as the control plane.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-[#FFB020]/10 to-[#FFB020]/5 border border-[#FFB020]/20 rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-[#FFB020]" />
              <span className="text-sm font-semibold text-[#FFB020]">Emerging</span>
            </div>
            <p className="text-sm text-[#CBD5E1]">
              AI-native startups in vertical SaaS — legal, finance, healthcare agents. Gaining share in workflows incumbents neglected.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-br from-[#FF6B6B]/10 to-[#FF6B6B]/5 border border-[#FF6B6B]/20 rounded-xl p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-[#FF6B6B]" />
              <span className="text-sm font-semibold text-[#FF6B6B]">At Risk</span>
            </div>
            <p className="text-sm text-[#CBD5E1]">
              Mid-tier SaaS with no agent strategy. If you're not building agents or being orchestrated by them — you're being disintermediated.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// NON-OBVIOUS INSIGHT SECTION
// ============================================================================

function NonObviousInsightSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section ref={ref} className="py-[100px] bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[6px] h-[6px] rounded-full bg-[#0A1628]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#0A1628]">Non-Obvious Strategic Insight</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-[2fr_3fr] gap-0 bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="p-10 bg-gradient-to-br from-[#00E5FF]/10 to-[#8B5CF6]/10 flex items-center">
            <h3 className="text-[clamp(20px,3vw,32px)] font-light text-[#0A1628] leading-[1.2] tracking-[-0.5px]">
              The real AI <span className="italic text-[#00E5FF]">moat</span> isn't the model.<br />
              It's the <span className="italic text-[#00E5FF]">orchestration layer.</span>
            </h3>
          </div>

          <div className="p-10 flex items-center">
            <div className="text-sm text-[#475569] leading-relaxed space-y-4">
              <p>
                Everyone is building agents. But the company that owns <strong className="text-[#0A1628]">governance, observability, and telemetry</strong> across multi-agent systems becomes the de facto platform — regardless of which agents run on top.
              </p>
              <p>
                This is why Deloitte flags "fierce competition to be the primary interface layer" and KPMG calls 2026 "the year of the agent orchestrator."
              </p>
              <p className="pt-4 border-t border-[#E2E8F0]">
                <strong className="text-[#0A1628]">The insight most readers miss:</strong> 88% of orgs are embedding agents, but system complexity is now the #1 deployment challenge. Whoever solves orchestration complexity — not just agent building — captures the entire ecosystem.
              </p>
            </div>
          </div>
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

  const sources = [
    { num: 1, name: "Deloitte", desc: "2026 Global Software Industry Outlook", url: "https://www.deloitte.com/us/en/insights/industry/technology/technology-media-telecom-outlooks/software-industry-outlook.html" },
    { num: 2, name: "KPMG", desc: "Global Tech Report 2026", url: "https://kpmg.com/xx/en/our-insights/ai-and-technology/global-tech-report.html" },
    { num: 3, name: "KPMG", desc: "Q4 2025 AI Pulse Survey", url: "https://kpmg.com/us/en/media/news/q4-ai-pulse.html" },
    { num: 4, name: "Stanford HAI", desc: "AI Index Report 2025", url: "https://hai.stanford.edu/ai-index/2025-ai-index-report" },
    { num: 5, name: "InfoWorld", desc: "6 AI Breakthroughs for 2026", url: "https://www.infoworld.com/article/4108092/6-ai-breakthroughs-that-will-define-2026.html" },
    { num: 6, name: "KPMG", desc: "Trust, Attitudes & Use of AI (48k respondents)", url: "https://kpmg.com/xx/en/our-insights/ai-and-technology/trust-attitudes-and-use-of-ai.html" },
    { num: 7, name: "KPMG", desc: "Intelligent Technology Enterprise", url: "https://kpmg.com/us/en/articles/2025/intelligent-technology.html" },
    { num: 8, name: "Deloitte", desc: "Tech Trends 2026", url: "https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends.html" },
  ];

  return (
    <section ref={ref} className="py-[100px] bg-[#F1F5F9] text-center">
      <div className="max-w-[1100px] mx-auto px-14">
        
        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[clamp(22px,4vw,38px)] leading-[1.22] tracking-[-0.5px] text-[#0A1628] max-w-[580px] mx-auto mb-6 font-light"
        >
          Software isn't dead.<br />
          But <span className="italic text-[#00E5FF]">static software</span> is.<br />
          The agent era starts <span className="italic text-[#FFB020]">now.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-sm text-[#64748B] leading-relaxed max-w-[480px] mx-auto text-left mb-12"
        >
          <strong className="text-[#0A1628] font-semibold">$780B</strong> application market by 2030. <strong className="text-[#0A1628] font-semibold">40%</strong> of enterprise apps will have agents by EOY 2026. <strong className="text-[#0A1628] font-semibold">88%</strong> of orgs are already embedding agents. But <strong className="text-[#0A1628] font-semibold">only 47%</strong> report strong returns today.
          <br /><br />
          <span className="text-[#FF6B6B] font-medium">The gap between adoption and value is the defining challenge of 2026.</span>
        </motion.div>

        {/* Sources panel */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white border border-[#E2E8F0] rounded-2xl p-8 text-left max-w-[700px] mx-auto shadow-lg"
        >
          <h3 className="text-base font-semibold text-[#0A1628] mb-6">All Sources</h3>
          <ul className="space-y-3">
            {sources.map((source) => (
              <li key={source.num} className="flex gap-3 p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg hover:border-[#00E5FF]/50 transition-colors">
                <span className="font-mono text-xs text-[#94A3B8] min-w-[16px] flex-shrink-0">{source.num}</span>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-semibold text-[#0A1628] text-sm">{source.name}</span>
                    <span className="text-[#64748B] text-xs">— {source.desc}</span>
                  </div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-[#00E5FF] hover:text-[#0A1628] font-mono break-all transition-colors flex items-center gap-1"
                  >
                    {source.url}
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-xs text-[#94A3B8]"
        >
          StartupAI Research · February 2026 · 8 verified sources · Deloitte + KPMG + Stanford HAI + InfoWorld
        </motion.div>
      </div>
    </section>
  );
}
