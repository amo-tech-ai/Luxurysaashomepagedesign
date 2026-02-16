'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { ExternalLink, ArrowRight, Zap, Brain, Target, TrendingUp, Shield, Users, Check, X } from 'lucide-react';

interface AIAgentsProps {
  onNavigate?: (route: string) => void;
}

export default function AIAgentsVisualGuide({ onNavigate }: AIAgentsProps) {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-[#0A211F] relative">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0D5F4E] via-[#6B9D89] to-[#8FB894] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Grain texture */}
      <div className="fixed inset-0 pointer-events-none z-40 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }}
      />

      <HeroSection />
      <SimpleExplanationSection />
      <HowItWorksSection />
      <FiveLevelsSection />
      <AgentVsChatbotSection />
      <WhereAgentsWorkSection />
      <BenefitsRisksSection />
      <OrchestrationSection />
      <CloseSection onNavigate={onNavigate} />
    </div>
  );
}

// ============================================================================
// HERO SECTION - Enhanced with Parallax
// ============================================================================

function HeroSection() {
  const [counts, setCounts] = useState({ core: 0, levels: 0, companies: 0 });
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 80]);
  const orbitScale = useTransform(scrollY, [0, 500], [1, 1.3]);
  const glowOpacity = useTransform(scrollY, [0, 300], [0.5, 0]);

  useEffect(() => {
    const duration = 1800;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCounts({
        core: Math.round(eased * 3),
        levels: Math.round(eased * 5),
        companies: Math.round(eased * 88),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    setTimeout(() => animate(), 800);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated geometric orbits - with parallax */}
      <motion.div
        className="absolute border border-[#6B9D89]/10 rounded-full"
        style={{
          width: '700px',
          height: '700px',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          scale: orbitScale,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute border-dashed border-[#6B9D89]/6 rounded-full"
        style={{
          width: '500px',
          height: '500px',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          scale: orbitScale,
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute border border-[#6B9D89]/10 rounded-full"
        style={{
          width: '320px',
          height: '320px',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />

      {/* Radial glow with parallax */}
      <motion.div
        className="absolute w-[min(800px,90vw)] aspect-square rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(13,95,78,0.12) 0%, rgba(107,157,137,0.05) 35%, transparent 70%)',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          opacity: glowOpacity,
        }}
        animate={{
          scale: [0.95, 1.15, 0.95],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#6B9D89]/20"
          style={{
            left: `${20 + i * 10}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 px-14 py-8 flex justify-between items-center z-10">
        <span className="text-[9px] font-semibold tracking-[5px] uppercase text-[#6B9D89]">StartupAI Research</span>
        <span className="text-[9px] font-semibold tracking-[5px] uppercase text-[#6B9D89] font-mono">VISUAL GUIDE</span>
      </div>

      {/* Hero content with parallax */}
      <motion.div 
        className="relative z-10 max-w-[760px] px-8 text-center" 
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[9px] font-semibold tracking-[6px] uppercase text-[#8FB894] mb-8"
        >
          Understanding the Technology That Changes Everything
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-[clamp(52px,10vw,96px)] font-light leading-[0.95] tracking-[-3.5px] text-[#FAF9F7] mb-10"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          What Are<br />
          <span className="italic text-[#8FB894]">AI Agents?</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#6B9D89] to-transparent mx-auto mb-9"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-[16px] text-[#D4E6D0] leading-[1.85] max-w-[520px] mx-auto"
        >
          Most AI tools wait for you to ask a question. AI agents are different — <strong className="text-[#FAF9F7] font-medium">they think, plan, use tools, and complete tasks on their own.</strong>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-3 gap-8 mt-14 max-w-[580px] mx-auto">
          {[
            { value: counts.core, label: 'core\ncapabilities', color: '#6B9D89' },
            { value: counts.levels, label: 'levels of\nsophistication', color: '#8FB894' },
            { value: counts.companies + '%', label: 'of companies\nusing agents', color: '#C9A54A' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.7 + i * 0.15 }}
              className="text-center relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#6B9D89]/5 to-transparent rounded-2xl blur-xl" />
              <div className="relative">
                <div 
                  className="text-[clamp(38px,5.5vw,64px)] font-light tracking-[-2px] leading-none mb-2" 
                  style={{ fontFamily: 'Georgia, serif', color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-[9.5px] text-[#7C7D79] leading-[1.4] whitespace-pre-line uppercase tracking-[1.5px]">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[7px] tracking-[4px] uppercase text-[#6B9D89]">Scroll to explore</span>
        <motion.div
          animate={{ 
            opacity: [0.2, 0.6, 0.2],
            y: [0, 8, 0],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1.5px] h-10 bg-gradient-to-b from-[#6B9D89] to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}

// ============================================================================
// SECTION 1: SIMPLE EXPLANATION - Enhanced Visual Comparison
// ============================================================================

function SimpleExplanationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0A211F] to-[#0E1A17] relative">
      <div className="max-w-[1200px] mx-auto px-14">
        <SectionHeader
          number="01"
          title="The Simple Explanation"
          subtitle="Regular AI answers questions. AI agents do the work."
          description="Think of the difference between asking someone for directions vs. hiring a driver. Regular AI gives you information. An AI agent actually takes action — on its own."
          isInView={isInView}
        />

        {/* Enhanced Visual Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          {/* Regular AI Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E3D33]/30 to-transparent rounded-[24px] blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-[#162D26] border border-[#1E3D33] rounded-[24px] p-10 min-h-[380px] flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#1E3D33] flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-[#8FB894] rounded-full" />
                </div>
                <div>
                  <div className="text-[8px] font-semibold tracking-[3px] uppercase text-[#8FB894]">Type A</div>
                  <div className="text-[15px] font-medium text-[#FAF9F7]">Regular AI Chatbot</div>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="bg-[#0E3E1B]/20 rounded-xl p-4 border-l-2 border-[#6B9D89]/30">
                  <div className="text-[11px] text-[#8FB894] mb-1.5">You ask:</div>
                  <div className="text-[13px] text-[#FAF9F7]">"What week is best for surfing in Greece?"</div>
                </div>

                <div className="bg-[#1E3D33]/30 rounded-xl p-4">
                  <div className="text-[11px] text-[#7C7D79] mb-1.5">It responds:</div>
                  <div className="text-[13px] text-[#D4E6D0] italic">"Summer months generally have good conditions."</div>
                </div>

                <div className="pt-2">
                  <div className="text-[12px] text-[#8FB894] italic">That's it. You still have to figure it out yourself.</div>
                </div>
              </div>

              {/* Limitation badges */}
              <div className="flex flex-wrap gap-2 mt-6">
                {['No tools', 'No memory', 'No action'].map((item, i) => (
                  <span key={i} className="text-[9px] px-3 py-1.5 rounded-full bg-[#1E3D33]/50 text-[#7C7D79] border border-[#1E3D33]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* AI Agent Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6B9D89]/20 to-transparent rounded-[24px] blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-[#0E3E1B] to-[#162D26] border border-[#6B9D89]/20 rounded-[24px] p-10 min-h-[380px] flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#6B9D89]/20 flex items-center justify-center relative">
                  <Zap className="w-5 h-5 text-[#8FB894]" />
                  <div className="absolute inset-0 rounded-full border-2 border-[#8FB894] animate-pulse" />
                </div>
                <div>
                  <div className="text-[8px] font-semibold tracking-[3px] uppercase text-[#8FB894]">Type B</div>
                  <div className="text-[15px] font-medium text-[#FAF9F7]">AI Agent</div>
                </div>
              </div>

              <div className="flex-1 space-y-3">
                <div className="bg-[#0E3E1B]/40 rounded-xl p-4 border-l-2 border-[#8FB894]">
                  <div className="text-[11px] text-[#8FB894] mb-1.5">Same question. The agent:</div>
                </div>

                {[
                  'Checks weather databases for past 5 years',
                  'Asks surfing expert AI about ideal conditions',
                  'Combines data and finds patterns',
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                    className="flex gap-3 items-start"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#6B9D89]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[10px] font-mono text-[#8FB894]">{i + 1}</span>
                    </div>
                    <span className="text-[12.5px] text-[#D4E6D0] leading-[1.6]">{step}</span>
                  </motion.div>
                ))}

                <div className="bg-[#6B9D89]/10 rounded-xl p-4 border border-[#8FB894]/20 mt-4">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-[#8FB894] flex-shrink-0 mt-0.5" />
                    <div className="text-[13px] text-[#FAF9F7] font-medium">"3rd week of June — high tides, sunny, low rain."</div>
                  </div>
                </div>
              </div>

              {/* Capability badges */}
              <div className="flex flex-wrap gap-2 mt-6">
                {['Uses tools', 'Remembers context', 'Takes action'].map((item, i) => (
                  <span key={i} className="text-[9px] px-3 py-1.5 rounded-full bg-[#8FB894]/20 text-[#8FB894] border border-[#8FB894]/30">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Capabilities - Visual Cards */}
        <CapabilityCards isInView={isInView} />

        <SourceBox
          isInView={isInView}
          text="IBM · What Are AI Agents"
          url="https://www.ibm.com/think/topics/ai-agents"
          dark
        />
      </div>
    </section>
  );
}

function CapabilityCards({ isInView }: { isInView: boolean }) {
  const capabilities = [
    { 
      icon: Brain, 
      title: 'They Think Ahead', 
      desc: 'Breaks complex goals into smaller steps — like a project manager creating a to-do list. Each step builds on the last.',
      color: '#0D5F4E',
      gradient: 'from-[#D4E6D0] to-[#E8EFE8]',
      metric: '85%',
      metricLabel: 'Planning accuracy'
    },
    { 
      icon: Zap, 
      title: 'They Use Tools', 
      desc: 'Search the web, connect to databases, call other software, and talk to other AI agents — filling gaps automatically.',
      color: '#C9A54A',
      gradient: 'from-[#F5EFE3] to-[#FAF9F7]',
      metric: '12+',
      metricLabel: 'Tool integrations'
    },
    { 
      icon: TrendingUp, 
      title: 'They Learn & Improve', 
      desc: 'Store what worked and what didn\'t. They get better over time — without being reprogrammed.',
      color: '#8B7AC8',
      gradient: 'from-[#F0ECF8] to-[#F7F4FB]',
      metric: '3x',
      metricLabel: 'Faster over time'
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-5 mt-8">
      {capabilities.map((cap, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
          className={`rounded-[22px] p-8 bg-gradient-to-br ${cap.gradient} border border-[#D4E6D0]/30 group hover:-translate-y-1 transition-all duration-400 relative overflow-hidden`}
        >
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0D5F4E]/5 to-transparent rounded-full blur-2xl" />
          
          <div className="relative">
            <div className="flex items-start justify-between mb-5">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/60 shadow-sm group-hover:scale-110 transition-transform duration-400">
                <cap.icon className="w-7 h-7" style={{ color: cap.color }} strokeWidth={1.5} />
              </div>
              <div className="text-right">
                <div className="text-[22px] font-light tracking-tight" style={{ fontFamily: 'Georgia, serif', color: cap.color }}>
                  {cap.metric}
                </div>
                <div className="text-[8px] text-[#7C7D79] uppercase tracking-wider">{cap.metricLabel}</div>
              </div>
            </div>
            
            <h3 className="text-[17px] font-medium text-[#191918] mb-2.5 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              {cap.title}
            </h3>
            <p className="text-[12px] leading-[1.75] text-[#1E3D33]/60">
              {cap.desc}
            </p>

            {/* Progress indicator */}
            <div className="mt-5 h-1 bg-[#0D5F4E]/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: cap.metric.includes('%') ? cap.metric : '75%' } : { width: 0 }}
                transition={{ duration: 1.2, delay: 0.7 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full"
                style={{ backgroundColor: cap.color }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ============================================================================
// SECTION 2: HOW IT WORKS - Enhanced Flow Diagram
// ============================================================================

function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-[#FAF9F7] relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #0D5F4E 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />

      <div className="max-w-[1200px] mx-auto px-14 relative">
        <SectionHeader
          number="02"
          title="How an Agent Actually Works"
          subtitle="The Agent Loop — Think → Act → Learn → Repeat"
          description="Every AI agent follows the same loop. Understanding this loop is the key to understanding everything else about agents."
          isInView={isInView}
          light
        />

        {/* Enhanced Flow Diagram */}
        <EnhancedFlowDiagram isInView={isInView} />

        {/* Step Details Cards */}
        <StepDetailsCards isInView={isInView} />

        <SourceBox
          isInView={isInView}
          text="IBM · AI Agents — How They Work"
          url="https://www.ibm.com/think/topics/ai-agents"
          dark={false}
        />
      </div>
    </section>
  );
}

function EnhancedFlowDiagram({ isInView }: { isInView: boolean }) {
  const steps = [
    { icon: Target, name: 'Get a Goal', sub: 'User gives a task', detail: 'Agent breaks it into steps', color: '#0D5F4E' },
    { icon: Brain, name: 'Gather Info', sub: 'Searches databases', detail: 'Web, APIs, other agents', color: '#6B9D89' },
    { icon: Zap, name: 'Take Action', sub: 'Executes the plan', detail: 'Checks if it worked', color: '#8FB894' },
    { icon: TrendingUp, name: 'Learn & Repeat', sub: 'Stores feedback', detail: 'Gets better next time', color: '#C9A54A' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-white border border-[#EEF3E4] rounded-[28px] p-12 mb-8 relative overflow-hidden shadow-[0_8px_30px_rgba(13,95,78,0.04)]"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#6B9D89]/5 to-transparent blur-3xl" />

      <div className="relative">
        <div className="text-center text-[9px] font-semibold tracking-[4px] uppercase text-[#0D5F4E] mb-12">
          The Agent Loop — Autonomous Cycle
        </div>

        {/* Flow Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                className="text-center relative"
              >
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#0D5F4E] to-[#6B9D89] flex items-center justify-center text-white text-[11px] font-semibold shadow-lg z-10">
                  {index + 1}
                </div>

                {/* Icon container */}
                <div className="relative mb-5 flex justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full" style={{ 
                      background: `radial-gradient(circle, ${step.color}15 0%, transparent 70%)`,
                    }} />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center border-2 bg-white shadow-sm"
                    style={{ borderColor: `${step.color}30` }}
                  >
                    <step.icon className="w-7 h-7" style={{ color: step.color }} strokeWidth={1.5} />
                  </motion.div>
                </div>

                <div className="text-[13px] font-semibold text-[#191918] mb-1.5">{step.name}</div>
                <div className="text-[10px] text-[#7C7D79] leading-[1.5] mb-1">{step.sub}</div>
                <div className="text-[9px] text-[#0D5F4E] leading-[1.4]">{step.detail}</div>
              </motion.div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-3 z-0">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                  >
                    <ArrowRight className="w-6 h-6 text-[#D4E6D0]" />
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Loop back arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-6"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#0D5F4E]/10 to-[#6B9D89]/10 border border-[#6B9D89]/20">
            <div className="w-2 h-2 rounded-full bg-[#6B9D89] animate-pulse" />
            <span className="text-[11px] text-[#0D5F4E] font-medium">This loop runs automatically until the goal is complete</span>
            <svg width="20" height="20" viewBox="0 0 20 20" className="text-[#6B9D89]">
              <path d="M15 10a5 5 0 11-10 0 5 5 0 0110 0z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M13 7l3 3-3 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function StepDetailsCards({ isInView }: { isInView: boolean }) {
  const steps = [
    {
      number: '01',
      tag: 'Planning Stage',
      title: 'Breaking Big Goals Into Small Steps',
      desc: 'When you say "plan my vacation," the agent creates a sequence: find flights → check hotels → compare prices → book the best one.',
      insight: 'Two approaches',
      detail: '"ReAct" plans one step at a time (flexible). "ReWOO" plans everything upfront (efficient).',
      bg: 'from-[#E8EFE8] to-[#F5F9F5]',
    },
    {
      number: '02',
      tag: 'Tool Integration',
      title: 'Filling Knowledge Gaps',
      desc: 'The AI at the center doesn\'t know everything. So agents use web searches, databases, calculators, and specialized AI agents to get missing information.',
      insight: 'Real example',
      detail: 'Planning your surf trip — checks weather data, asks surfing expert AI, combines both answers.',
      bg: 'from-[#F5EFE3] to-[#FAF9F7]',
    },
    {
      number: '03',
      tag: 'Memory System',
      title: 'Getting Smarter Over Time',
      desc: 'After each task, agents store what they learned. Next time a similar task comes up, they start from a better position.',
      insight: 'Key difference',
      detail: 'Chatbots forget everything. Agents remember your preferences and past interactions.',
      bg: 'from-[#F0ECF8] to-[#F7F4FB]',
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-5">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
          className={`rounded-[22px] p-8 bg-gradient-to-br ${step.bg} border border-[#D4E6D0]/20 hover:-translate-y-1 transition-all duration-400 relative overflow-hidden group`}
        >
          {/* Step number badge */}
          <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-[#0D5F4E] flex items-center justify-center text-white text-[14px] font-light opacity-10 group-hover:opacity-20 transition-opacity" style={{ fontFamily: 'Georgia, serif' }}>
            {step.number}
          </div>

          <div className="relative">
            <div className="text-[8px] font-semibold tracking-[3px] uppercase text-[#0D5F4E] mb-3">
              {step.tag}
            </div>
            <h3 className="text-[16px] font-medium text-[#191918] mb-3 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              {step.title}
            </h3>
            <p className="text-[11.5px] leading-[1.7] mb-4 text-[#1E3D33]/60">
              {step.desc}
            </p>
            <div className="pt-3 border-t border-[#D4E6D0]/30">
              <div className="text-[9px] font-semibold text-[#0D5F4E] mb-1.5 uppercase tracking-wider">
                {step.insight}
              </div>
              <div className="text-[10.5px] text-[#1E3D33]/70 leading-[1.6]">
                {step.detail}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ============================================================================
// SECTION 3: FIVE LEVELS - Tower Visualization
// ============================================================================

function FiveLevelsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const levels = [
    { 
      num: 5, 
      title: 'Learning Agents', 
      subtitle: 'They Get Smarter On Their Own',
      desc: 'Learn from every interaction, store knowledge, and improve automatically — like Netflix recommendations that get better the more you watch.',
      example: 'E-commerce personalization engines',
      color: '#8FB894', 
      barColor: '#8FB894', 
      opacity: 0.20,
      width: '100%'
    },
    { 
      num: 4, 
      title: 'Utility Agents', 
      subtitle: 'They Pick the Best Option',
      desc: 'Don\'t just find a solution — they find the optimal one. Calculate scores for each option and choose the highest.',
      example: 'Navigation balancing fuel, traffic, tolls, time',
      color: '#6B9D89', 
      barColor: '#6B9D89', 
      opacity: 0.16,
      width: '85%'
    },
    { 
      num: 3, 
      title: 'Goal-Based Agents', 
      subtitle: 'They Plan Ahead',
      desc: 'Have a specific goal and search for the best sequence of steps to reach it. Like a GPS evaluating multiple routes.',
      example: 'Route planning and pathfinding systems',
      color: '#2A5245', 
      barColor: '#2A5245', 
      opacity: 0.12,
      width: '70%'
    },
    { 
      num: 2, 
      title: 'Model-Based Agents', 
      subtitle: 'They Remember the World',
      desc: 'Keep a mental model of their environment that updates as they learn new things.',
      example: 'Robot vacuums mapping your apartment',
      color: '#FAF9F7', 
      barColor: 'rgba(42,82,69,0.6)', 
      opacity: 0.07,
      width: '55%'
    },
    { 
      num: 1, 
      title: 'Simple Reflex', 
      subtitle: 'If This Then That',
      desc: 'Follow simple rules. No memory, no planning, no learning. Works for predictable, simple tasks.',
      example: 'Thermostats and basic automation',
      color: '#FAF9F7', 
      barColor: 'rgba(42,82,69,0.4)', 
      opacity: 0.04,
      width: '40%'
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0E1A17] to-[#0A211F] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-[#6B9D89]/10 to-transparent blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-14 relative">
        <SectionHeader
          number="03"
          title="Five Levels — Simple to Brilliant"
          subtitle="The Agent Sophistication Pyramid"
          description="Not all agents are equal. There are 5 levels — from a basic thermostat to a system that learns your preferences. Each level adds capabilities on top of the previous one."
          isInView={isInView}
        />

        {/* Tower Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Center line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8FB894] via-[#6B9D89] to-[#2A5245]/30" />

          <div className="space-y-4">
            {levels.map((level, index) => (
              <TowerLevel key={index} {...level} isInView={isInView} delay={0.3 + index * 0.1} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#162D26] border border-[#6B9D89]/20">
            <div className="flex gap-1">
              {[3, 4, 5].map(n => (
                <div key={n} className="w-2 h-2 rounded-full bg-[#6B9D89]" />
              ))}
            </div>
            <span className="text-[12px] text-[#D4E6D0]">Most agents today are Level 3–4</span>
          </div>
        </motion.div>

        <SourceBox
          isInView={isInView}
          text="IBM · Types of AI Agents"
          url="https://www.ibm.com/think/topics/ai-agents"
          dark
        />
      </div>
    </section>
  );
}

function TowerLevel({ num, title, subtitle, desc, example, color, barColor, opacity, width, isInView, delay, index }: any) {
  const titleColor = num >= 4 ? color : '#FAF9F7';
  const descColor = num >= 3 ? '#D4E6D0' : '#8FB894';
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="relative group"
    >
      <div className="flex gap-6 items-start">
        {/* Level number circle */}
        <div className="relative flex-shrink-0">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
            className="w-16 h-16 rounded-full flex items-center justify-center relative z-10"
            style={{ 
              background: `linear-gradient(135deg, ${barColor}, ${color})`,
            }}
          >
            <div className="text-[24px] font-light text-white" style={{ fontFamily: 'Georgia, serif' }}>
              {num}
            </div>
          </motion.div>
          <div 
            className="absolute inset-0 rounded-full blur-xl opacity-50"
            style={{ backgroundColor: barColor }}
          />
        </div>

        {/* Content card */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.95 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: delay + 0.1 }}
          className="flex-1 rounded-[20px] p-6 border transition-all duration-400 hover:translate-x-2 relative overflow-hidden"
          style={{ 
            background: `linear-gradient(90deg, rgba(107,157,137,${opacity}), rgba(107,157,137,${opacity * 0.3}))`,
            borderColor: `${barColor}30`,
            maxWidth: width,
          }}
        >
          {/* Accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r" style={{ backgroundColor: barColor }} />

          <div className="relative pl-4">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <div className="text-[15px] font-semibold mb-0.5 leading-tight" style={{ color: titleColor }}>
                  {title}
                </div>
                <div className="text-[11px] italic" style={{ color: descColor }}>
                  {subtitle}
                </div>
              </div>
              <div className="text-[10px] px-3 py-1 rounded-full bg-white/10 text-[#FAF9F7] whitespace-nowrap">
                Level {num}
              </div>
            </div>
            
            <div className="text-[11px] leading-[1.7] mb-2" style={{ color: descColor }}>
              {desc}
            </div>
            
            <div className="flex items-start gap-2 mt-3 pt-3 border-t border-white/10">
              <span className="text-[9px] text-[#8FB894] uppercase tracking-wider font-semibold">Example:</span>
              <span className="text-[10px] italic" style={{ color: descColor }}>{example}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// SECTION 4: AGENT VS CHATBOT - Comparison Table
// ============================================================================

function AgentVsChatbotSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const comparisons = [
    { feature: 'Memory between conversations', chatbot: false, agent: true },
    { feature: 'Use external tools & databases', chatbot: false, agent: true },
    { feature: 'Act independently', chatbot: false, agent: true },
    { feature: 'Break down complex tasks', chatbot: false, agent: true },
    { feature: 'Personalize responses', chatbot: false, agent: true },
    { feature: 'Learn from mistakes', chatbot: false, agent: true },
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#F7F9F2] to-[#FAF9F7] relative">
      <div className="max-w-[1200px] mx-auto px-14">
        <SectionHeader
          number="04"
          title="Agent vs. Regular Chatbot"
          subtitle="The Critical Difference"
          description="A chatbot is like texting a knowledgeable friend. An agent is like hiring an assistant who gets things done."
          isInView={isInView}
          light
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-[28px] border border-[#EEF3E4] overflow-hidden shadow-[0_8px_30px_rgba(13,95,78,0.04)]"
        >
          {/* Header */}
          <div className="grid grid-cols-[2fr_1fr_1fr] gap-6 p-8 bg-gradient-to-r from-[#F5F3EF] to-[#FAF9F7] border-b border-[#EEF3E4]">
            <div className="text-[11px] font-semibold text-[#7C7D79] uppercase tracking-[2px]">
              Capability
            </div>
            <div className="text-center">
              <div className="text-[10px] text-[#7C7D79] uppercase tracking-[2px] mb-2">Regular</div>
              <div className="text-[15px] font-medium text-[#191918]">Chatbot</div>
            </div>
            <div className="text-center">
              <div className="text-[10px] text-[#0D5F4E] uppercase tracking-[2px] mb-2">AI</div>
              <div className="text-[15px] font-medium text-[#0D5F4E]">Agent</div>
            </div>
          </div>

          {/* Comparison rows */}
          <div className="divide-y divide-[#EEF3E4]">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                className="grid grid-cols-[2fr_1fr_1fr] gap-6 p-6 hover:bg-[#FAF9F7] transition-colors"
              >
                <div className="text-[13px] text-[#191918] flex items-center">
                  {item.feature}
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-10 h-10 rounded-full bg-[#F5F3EF] flex items-center justify-center">
                    <X className="w-5 h-5 text-[#E8765A]" strokeWidth={2} />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-10 h-10 rounded-full bg-[#E8EFE8] flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#0D5F4E]" strokeWidth={2.5} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="grid md:grid-cols-2 gap-6 p-8 bg-gradient-to-r from-[#FAF9F7] to-[#F5F3EF]">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F5F3EF] flex items-center justify-center flex-shrink-0">
                <X className="w-6 h-6 text-[#E8765A]" strokeWidth={2} />
              </div>
              <div>
                <div className="text-[13px] font-semibold text-[#191918] mb-1">Chatbot Limits</div>
                <div className="text-[11px] text-[#7C7D79] leading-[1.7]">
                  Reactive, forgetful, limited to conversation. Can't take action or use external tools.
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E8EFE8] flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-[#0D5F4E]" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-[13px] font-semibold text-[#0D5F4E] mb-1">Agent Powers</div>
                <div className="text-[11px] text-[#1E3D33] leading-[1.7]">
                  Proactive, remembers context, uses tools, learns over time, and completes complex tasks autonomously.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 5: WHERE AGENTS WORK - Illustrated Cards
// ============================================================================

function WhereAgentsWorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const useCases = [
    { 
      icon: '🛒', 
      title: 'Customer Experience', 
      desc: 'Virtual assistants that complete actions — processing returns, changing orders, scheduling appointments — without human transfer.',
      metric: '24/7',
      metricLabel: 'Availability',
      example: '"Where\'s my order?" → Checks shipping, identifies delay, offers discount, reschedules.',
      bg: 'from-[#E8EFE8] to-[#F5F9F5]',
      accent: '#0D5F4E'
    },
    { 
      icon: '🏥', 
      title: 'Healthcare', 
      desc: 'Specialized agents collaborate — intake, medical history review, treatment suggestions. Saving doctors hours of admin work.',
      metric: '73%',
      metricLabel: 'Time saved',
      example: 'Agent teams outperform single agents in healthcare coordination.',
      bg: 'from-[#F5EFE3] to-[#FAF9F7]',
      accent: '#C9A54A'
    },
    { 
      icon: '💰', 
      title: 'Finance & Supply', 
      desc: 'Analyze live data, predict trends, optimize operations. Flag unusual transactions, suggest adjustments, generate reports.',
      metric: '85%',
      metricLabel: 'Accuracy',
      example: 'Real-time fraud detection and supply chain optimization.',
      bg: 'from-[#E0E8F6] to-[#F0F4FF]',
      accent: '#5B8FD4'
    },
    { 
      icon: '🚨', 
      title: 'Emergency Response', 
      desc: 'Scan social media to find people calling for help, map locations, guide rescue teams. AI saving lives — not just automating.',
      metric: '2.5x',
      metricLabel: 'Faster response',
      example: 'Natural disaster coordination and real-time rescue operations.',
      bg: 'from-[#F6E8EC] to-[#FDF5F3]',
      accent: '#E8765A'
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0A211F] to-[#0E1A17] relative">
      <div className="max-w-[1200px] mx-auto px-14">
        <SectionHeader
          number="05"
          title="Where AI Agents Are Already Working"
          subtitle="Real-World Applications"
          description="Real-world use cases with measurable impact across industries."
          isInView={isInView}
        />

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
              className={`rounded-[24px] p-8 bg-gradient-to-br ${useCase.bg} border border-[#D4E6D0]/20 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden`}
            >
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl" style={{ background: `${useCase.accent}15` }} />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center text-4xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {useCase.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-[28px] font-light tracking-tight leading-none" style={{ fontFamily: 'Georgia, serif', color: useCase.accent }}>
                      {useCase.metric}
                    </div>
                    <div className="text-[8px] text-[#7C7D79] uppercase tracking-wider mt-1">
                      {useCase.metricLabel}
                    </div>
                  </div>
                </div>

                <h3 className="text-[20px] font-medium text-[#191918] mb-3 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  {useCase.title}
                </h3>
                
                <p className="text-[12.5px] leading-[1.75] text-[#1E3D33]/70 mb-5">
                  {useCase.desc}
                </p>

                {/* Example box */}
                <div className="mt-5 p-4 rounded-xl border-l-2" style={{ 
                  background: `${useCase.accent}08`,
                  borderColor: `${useCase.accent}30`
                }}>
                  <div className="text-[9px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: useCase.accent }}>
                    Example in Action
                  </div>
                  <div className="text-[11px] leading-[1.6] text-[#1E3D33]/70">
                    {useCase.example}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <SourceBox
          isInView={isInView}
          text="IBM · AI Agent Use Cases"
          url="https://www.ibm.com/think/topics/ai-agents"
          dark
        />
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 6: BENEFITS & RISKS
// ============================================================================

function BenefitsRisksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-[#FAF9F7] relative">
      <div className="max-w-[1200px] mx-auto px-14">
        <SectionHeader
          number="06"
          title="Benefits, Risks & Safety Rules"
          subtitle="An Honest Assessment"
          description="AI agents are powerful — but they're not without risks. Here's a balanced look at both sides."
          isInView={isInView}
          light
        />

        <div className="grid md:grid-cols-3 gap-6">
          <BenefitsCard isInView={isInView} />
          <RisksCard isInView={isInView} />
          <SafetyCard isInView={isInView} />
        </div>

        <SourceBox
          isInView={isInView}
          text="IBM · AI Agent Risks & Best Practices"
          url="https://www.ibm.com/think/topics/ai-agents"
          dark={false}
        />
      </div>
    </section>
  );
}

function BenefitsCard({ isInView }: { isInView: boolean }) {
  const benefits = [
    { icon: Zap, title: 'Automate Complex Work', desc: 'Multi-step tasks done faster, cheaper, 24/7' },
    { icon: Target, title: 'Better Quality Answers', desc: 'Tools + memory + collaboration = accuracy' },
    { icon: Users, title: 'Agent Teamwork', desc: 'Multiple agents outperform single agents' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="rounded-[24px] p-8 bg-gradient-to-br from-[#E8EFE8] to-[#F5F9F5] border border-[#D4E6D0] relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D5F4E]/5 rounded-full blur-3xl" />
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#0D5F4E] flex items-center justify-center">
            <Check className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <div className="text-[13px] font-semibold uppercase tracking-[2px] text-[#0D5F4E]">
            Benefits
          </div>
        </div>

        <div className="space-y-5">
          {benefits.map((item, i) => (
            <div key={i} className="flex gap-4 group/item">
              <div className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                <item.icon className="w-5 h-5 text-[#0D5F4E]" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-[14px] font-medium text-[#191918] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.title}
                </div>
                <div className="text-[11px] text-[#1E3D33]/60 leading-[1.6]">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function RisksCard({ isInView }: { isInView: boolean }) {
  const risks = [
    { icon: '∞', title: 'Infinite Loops', desc: 'Calling same tools repeatedly, wasting resources' },
    { icon: '⚡', title: 'Cascading Failures', desc: 'One agent failure breaks the whole system' },
    { icon: '🔒', title: 'Privacy Risks', desc: 'Access to sensitive data needs guardrails' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="rounded-[24px] p-8 bg-gradient-to-br from-[#FDF5F3] to-[#FAF9F7] border border-[#F0DED8] relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8765A]/5 rounded-full blur-3xl" />
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#E8765A] flex items-center justify-center">
            <span className="text-white text-lg">⚠</span>
          </div>
          <div className="text-[13px] font-semibold uppercase tracking-[2px] text-[#E8765A]">
            Risks
          </div>
        </div>

        <div className="space-y-5">
          {risks.map((item, i) => (
            <div key={i} className="flex gap-4 group/item">
              <div className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center flex-shrink-0 text-xl group-hover/item:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <div className="text-[14px] font-medium text-[#191918] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.title}
                </div>
                <div className="text-[11px] text-[#1E3D33]/60 leading-[1.6]">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SafetyCard({ isInView }: { isInView: boolean }) {
  const safety = [
    { icon: Shield, title: 'Keep Activity Logs', desc: 'Transparency builds trust and debugging' },
    { icon: Users, title: 'Allow Interruption', desc: 'Humans can pause or stop anytime' },
    { icon: Check, title: 'Approve Big Decisions', desc: 'High-impact = human confirmation' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="rounded-[24px] p-8 bg-gradient-to-br from-[#E0E8F6] to-[#F0F4FF] border border-[#D0DEF0] relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#5B8FD4]/5 rounded-full blur-3xl" />
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#5B8FD4] flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
          <div className="text-[13px] font-semibold uppercase tracking-[2px] text-[#5B8FD4]">
            Safety
          </div>
        </div>

        <div className="space-y-5">
          {safety.map((item, i) => (
            <div key={i} className="flex gap-4 group/item">
              <div className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                <item.icon className="w-5 h-5 text-[#5B8FD4]" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-[14px] font-medium text-[#191918] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.title}
                </div>
                <div className="text-[11px] text-[#1E3D33]/60 leading-[1.6]">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// SECTION 7: ORCHESTRATION - Enhanced Hierarchy
// ============================================================================

function OrchestrationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0E1A17] to-[#0A211F] relative">
      <div className="max-w-[1200px] mx-auto px-14">
        <SectionHeader
          number="07"
          title="The Big Picture — Agent Teams"
          subtitle="Orchestrated Intelligence"
          description="The future isn't one agent. It's teams of agents — with humans in control. Think of it like a company org chart."
          isInView={isInView}
        />

        <OrchestrationDiagram isInView={isInView} />
        <QuoteBlock isInView={isInView} />

        <SourceBox
          isInView={isInView}
          text="IBM · AI Agent Architecture"
          url="https://www.ibm.com/think/topics/ai-agents"
          dark
        />
      </div>
    </section>
  );
}

function OrchestrationDiagram({ isInView }: { isInView: boolean }) {
  const specialists = [
    { icon: '🔍', name: 'Research', desc: 'Searches web, databases, documents', color: '#6B9D89' },
    { icon: '📝', name: 'Writer', desc: 'Creates reports, emails, content', color: '#8FB894' },
    { icon: '📊', name: 'Analyst', desc: 'Processes data, spots patterns', color: '#C9A54A' },
    { icon: '⚡', name: 'Executor', desc: 'Books, sends, schedules actions', color: '#5B8FD4' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-[#162D26] border border-[#6B9D89]/20 rounded-[28px] p-12 relative overflow-hidden shadow-[0_8px_40px_rgba(107,157,137,0.1)]"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#6B9D89]/10 to-transparent blur-3xl" />

      <div className="relative">
        <div className="text-center text-[9px] font-semibold tracking-[4px] uppercase text-[#8FB894] mb-16">
          Agent Team Architecture
        </div>

        {/* Hierarchy */}
        <div className="flex flex-col items-center gap-6">
          {/* Human */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#6B9D89]/20 rounded-3xl blur-2xl" />
            <div className="relative flex items-center gap-4 px-8 py-5 rounded-2xl border-2 border-[#6B9D89] bg-[#0E3E1B]/40 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6B9D89] to-[#8FB894] flex items-center justify-center text-2xl">
                👤
              </div>
              <div>
                <div className="text-[14px] font-semibold text-[#FAF9F7] mb-1">Human</div>
                <div className="text-[10px] text-[#D4E6D0]">Sets goals · Approves decisions · Provides feedback</div>
              </div>
            </div>
          </motion.div>

          {/* Connection line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-[2px] h-8 bg-gradient-to-b from-[#6B9D89] to-[#8FB894] origin-top"
          />

          {/* Orchestrator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#8FB894]/20 rounded-3xl blur-2xl" />
            <div className="relative flex items-center gap-4 px-8 py-5 rounded-2xl border-2 border-[#8FB894] bg-[#162D26]/60 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8FB894] to-[#C9A54A] flex items-center justify-center text-2xl relative">
                🎯
                <div className="absolute inset-0 rounded-xl border-2 border-white/20 animate-pulse" />
              </div>
              <div>
                <div className="text-[14px] font-semibold text-[#FAF9F7] mb-1">Orchestrator Agent</div>
                <div className="text-[10px] text-[#D4E6D0]">Receives goals · Breaks down tasks · Assigns specialists</div>
              </div>
            </div>
          </motion.div>

          {/* Connection branches */}
          <div className="relative w-full max-w-[500px] h-12">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, pathLength: 0 }}
                animate={isInView ? { opacity: 1, pathLength: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.9 + i * 0.1 }}
                className="absolute top-0 left-1/2 w-[2px] h-full origin-top"
                style={{
                  background: 'linear-gradient(to bottom, #8FB894, transparent)',
                  transform: `translateX(-50%) rotate(${-30 + i * 20}deg)`,
                }}
              />
            ))}
          </div>

          {/* Specialist Agents */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {specialists.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="group"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: `${spec.color}20` }} />
                  <div className="relative bg-[#1E3D33] rounded-2xl p-5 border border-[#2A5245] hover:border-[#6B9D89]/40 transition-all">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center text-2xl mb-3 bg-[#0E3E1B]/40 group-hover:scale-110 transition-transform">
                        {spec.icon}
                      </div>
                      <div className="text-[12px] font-semibold text-[#FAF9F7] mb-1">{spec.name}</div>
                      <div className="text-[9px] text-[#7C7D79] leading-[1.4]">{spec.desc}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0E3E1B]/40 border border-[#6B9D89]/20">
            <div className="w-2 h-2 rounded-full bg-[#8FB894] animate-pulse" />
            <span className="text-[11px] text-[#D4E6D0] italic">
              Each specialist reports back. Orchestrator combines outputs and delivers results.
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function QuoteBlock({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="mt-8 rounded-[22px] p-10 bg-gradient-to-br from-[#162D26] to-[#0E3E1B] border border-[#6B9D89]/20 relative overflow-hidden"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6B9D89] to-[#8FB894] rounded-r" />
      <div className="relative pl-6">
        <div className="text-[clamp(16px,2vw,22px)] font-light leading-[1.7] italic text-[#FAF9F7] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
          "The key to safe AI agents isn't removing humans from the loop — it's putting humans where they matter most: setting goals, approving high-impact actions, and providing feedback."
        </div>
        <div className="text-[10px] text-[#6B9D89] uppercase tracking-[2px]">
          IBM AI Research · Best Practices for Agentic Systems
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// CLOSE SECTION
// ============================================================================

function CloseSection({ onNavigate }: { onNavigate?: (route: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#EEF3E4] to-[#FAF9F7] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #0D5F4E 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="max-w-[1200px] mx-auto px-14 relative">
        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="relative group mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D5F4E] to-[#0E3E1B] rounded-[28px] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
          <div className="relative bg-gradient-to-br from-[#0E3E1B] to-[#0D5F4E] rounded-[28px] px-16 py-20 border border-[#6B9D89]/20 shadow-[0_8px_40px_rgba(13,95,78,0.2)]">
            <h2
              className="text-[clamp(36px,6vw,64px)] font-light leading-[1.15] max-w-[800px] mx-auto text-[#FAF9F7] tracking-[-2px] text-center"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              AI agents don't replace humans.<br />
              They give humans <span className="italic text-[#8FB894]">superpowers.</span>
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[15px] leading-[1.9] max-w-[680px] mx-auto text-left text-[#1E3D33] mb-16"
        >
          AI agents are the next step in artificial intelligence — systems that don't just answer questions, but <strong className="text-[#0D5F4E] font-semibold">think, plan, use tools, and complete complex tasks on their own</strong>.<br /><br />
          
          They come in 5 levels, from simple thermostats to self-improving learning systems. They work best in teams, with a manager agent coordinating specialists. And the most important principle? <strong className="text-[#0D5F4E] font-semibold">Humans stay in control of the big decisions.</strong><br /><br />
          
          The technology is already being used in healthcare, finance, customer service, and emergency response — with 88% of companies now integrating AI agents into their operations.
        </motion.div>

        {/* Emphasized Final Question */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-[760px] mx-auto mb-24 text-center"
        >
          <div 
            className="text-[clamp(26px,4vw,44px)] font-light leading-[1.3] text-[#0D5F4E] tracking-[-1px] relative"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            <div className="absolute -left-8 top-0 text-[80px] text-[#6B9D89]/10 font-serif">"</div>
            The question isn't whether AI agents will change how work gets done. <span className="italic text-[#0E3E1B] font-normal">It's whether you'll be ready.</span>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-[clamp(32px,4.5vw,52px)] font-light leading-[1.1] text-[#191918] mb-14 text-left" style={{ fontFamily: 'Georgia, serif' }}>
            Explore More
          </h3>

          <div className="grid md:grid-cols-[1.2fr_1fr] gap-5">
            {/* Main CTA Card */}
            <motion.div
              whileHover={{ scale: 1.01, y: -4 }}
              transition={{ duration: 0.4 }}
              className="relative group cursor-pointer"
              onClick={() => onNavigate?.('/')}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D5F4E] to-[#6B9D89] rounded-[24px] blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-gradient-to-br from-[#0D5F4E] to-[#0E3E1B] rounded-[24px] p-12 min-h-[320px] flex flex-col justify-between border border-[#6B9D89]/20 shadow-[0_8px_30px_rgba(13,95,78,0.15)]">
                <div>
                  <div className="text-[8px] font-semibold tracking-[4px] uppercase text-[#8FB894] mb-5">
                    Next Section
                  </div>
                  <h4 
                    className="text-[clamp(28px,4vw,42px)] font-light leading-[1.15] text-[#FAF9F7] mb-5 tracking-[-1px]"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    Build Smarter,<br />Scale Faster
                  </h4>
                  <p className="text-[14px] leading-[1.8] text-[#D4E6D0] max-w-[400px]">
                    Turn validated ideas into investor-ready products with AI-powered execution.
                  </p>
                </div>
                
                <div className="mt-8">
                  <div className="inline-flex items-center gap-3 bg-[#6B9D89] hover:bg-[#8FB894] text-white px-7 py-4 rounded-full text-[12px] font-semibold tracking-[1.5px] uppercase transition-all duration-300 group-hover:gap-4 shadow-lg">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Industry Cards */}
            <div className="flex flex-col gap-5">
              {[
                { label: 'AI & Automation', bg: '#FAF9F7' },
                { label: 'SaaS & Enterprise Tools', bg: '#F5F3EF' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, x: 4 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-[24px] cursor-pointer group h-[152px] border border-[#EEF3E4] shadow-sm hover:shadow-md transition-all"
                  style={{ backgroundColor: item.bg }}
                >
                  <div className="h-full flex items-center px-10 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-[#0D5F4E]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                    <div className="relative">
                      <div className="text-[8px] font-semibold tracking-[3px] uppercase text-[#7C7D79] mb-2">
                        Industry
                      </div>
                      <div className="text-[17px] font-medium text-[#191918]">
                        {item.label}
                      </div>
                    </div>
                    <ArrowRight className="ml-auto w-5 h-5 text-[#0D5F4E] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[9px] mt-20 text-[#7C7D79]/50 text-center tracking-[2px]"
        >
          StartupAI Visual Intelligence · Source: IBM — What Are AI Agents · February 2026
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// SHARED COMPONENTS
// ============================================================================

function SectionHeader({ number, title, subtitle, description, isInView, light = false }: any) {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-4 mb-6"
      >
        <div className={`text-[40px] font-light ${light ? 'text-[#0D5F4E]' : 'text-[#6B9D89]'} opacity-40`} style={{ fontFamily: 'Georgia, serif' }}>
          {number}
        </div>
        <div className="flex-1">
          <div className={`text-[10px] font-semibold tracking-[4px] uppercase mb-2 ${light ? 'text-[#0D5F4E]' : 'text-[#8FB894]'}`}>
            Section {number}
          </div>
          <h2 className={`text-[clamp(28px,4.5vw,48px)] font-light leading-[1.1] tracking-[-1px] ${light ? 'text-[#191918]' : 'text-[#FAF9F7]'}`} style={{ fontFamily: 'Georgia, serif' }}>
            {title}
          </h2>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="ml-[88px]"
      >
        <div className={`text-[16px] font-medium mb-3 ${light ? 'text-[#0D5F4E]' : 'text-[#8FB894]'} italic`} style={{ fontFamily: 'Georgia, serif' }}>
          {subtitle}
        </div>
        <div className={`text-[14px] leading-[1.85] max-w-[640px] ${light ? 'text-[#7C7D79]' : 'text-[#D4E6D0]'}`}>
          {description}
        </div>
      </motion.div>
    </div>
  );
}

function SourceBox({ isInView, text, url, dark }: { isInView: boolean; text: string; url: string; dark: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={`mt-16 px-6 py-4 rounded-[18px] text-[10px] leading-[2] inline-flex items-center gap-3 ${
        dark
          ? 'bg-[rgba(14,26,23,0.4)] border border-[#1E3D33] text-[#6B9D89]'
          : 'bg-[#EEF3E4] border border-[#D4E6D0] text-[#0D5F4E]'
      }`}
    >
      <div className={`font-semibold uppercase tracking-[2.5px] text-[8px] ${dark ? 'text-[#6B9D89]' : 'text-[#0D5F4E]'}`}>
        Source
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`font-mono text-[9.5px] transition-colors flex items-center gap-2 hover:gap-3 ${
          dark ? 'hover:text-[#8FB894]' : 'hover:text-[#6B9D89]'
        }`}
      >
        {text}
        <ExternalLink className="w-3 h-3" />
      </a>
    </motion.div>
  );
}
