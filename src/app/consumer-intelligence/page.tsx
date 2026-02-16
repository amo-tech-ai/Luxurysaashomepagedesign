'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ConsumerIntelligenceProps {
  onNavigate?: (route: string) => void;
}

export default function ConsumerIntelligence({ onNavigate }: ConsumerIntelligenceProps) {
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
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#A78BFA] via-[#F2A0B8] to-[#FF7B6B] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero */}
      <HeroSection />

      {/* Landscape Stats */}
      <LandscapeSection />

      {/* Daily Activities */}
      <DailyActivitiesSection />

      {/* Demographics */}
      <DemographicsSection />

      {/* Shadow AI */}
      <ShadowAISection />

      {/* Five Types */}
      <FiveTypesSection />

      {/* Trust & Sentiment */}
      <TrustSentimentSection />

      {/* Adoption Funnel */}
      <AdoptionFunnelSection />

      {/* Close & Sources */}
      <CloseSourcesSection onNavigate={onNavigate} />
    </div>
  );
}

// ============================================================================
// HERO SECTION
// ============================================================================

function HeroSection() {
  const [counts, setCounts] = useState({ users: 0, tried: 0, daily: 0, pay: 0 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 550], [1, 0]);
  const y = useTransform(scrollY, [0, 550], [0, 55]);

  useEffect(() => {
    const duration = 1200;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCounts({
        users: parseFloat((eased * 1.8).toFixed(1)),
        tried: Math.round(eased * 61),
        daily: Math.round(eased * 19),
        pay: Math.round(eased * 3),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    setTimeout(() => animate(), 500);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.06)_0%,rgba(242,160,184,0.03)_40%,transparent_65%)] animate-pulse" style={{ animationDuration: '10s' }} />

      {/* Top nav */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-14 py-8 z-10">
        <span className="text-[10px] font-semibold tracking-[4px] uppercase text-[#2A4E45]">StartupAI Research</span>
        <span className="text-[10px] font-mono text-[#2A4E45]">FEB 2026</span>
      </div>

      {/* Content */}
      <motion.div className="relative z-10 max-w-[640px] px-6" style={{ opacity, y }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[10px] font-semibold tracking-[4.5px] uppercase text-[#F2A0B8] mb-6"
        >
          Consumer Intelligence Report
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-[clamp(40px,7.5vw,78px)] leading-[1.04] tracking-[-1.5px] text-[#F7F9F2] mb-6"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          Who's Using<br />AI in <em className="italic text-[#F2A0B8]">Daily Life</em>
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
          className="text-sm text-[#7C7D79] leading-[1.75]"
        >
          <strong className="text-[#DDE6C8] font-medium">1.8 billion consumers</strong> now use AI tools. But only 3% pay. From GenZ students to shadow IT — here's who's doing what with AI, how much they trust it, and what it means for builders.
        </motion.p>

        {/* Stats ring */}
        <div className="flex gap-7 justify-center flex-wrap mt-9">
          <HeroStat value={`${counts.users}B`} label="AI users globally" color="#F2A0B8" delay={1.5} />
          <HeroStat value={`${counts.tried}%`} label="US adults tried AI" color="#D8FF85" delay={1.65} />
          <HeroStat value={`${counts.daily}%`} label="use AI daily" color="#8DFDBA" delay={1.8} />
          <HeroStat value={`${counts.pay}%`} label="actually pay" color="#A78BFA" delay={1.95} />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
      <div
        className="text-[clamp(28px,4.5vw,48px)] tracking-[-1px] font-light leading-[0.9]"
        style={{ fontFamily: 'Playfair Display, Georgia, serif', color }}
      >
        {value}
      </div>
      <div className="text-[10px] text-[#2A4E45] mt-[2px]">{label}</div>
    </motion.div>
  );
}

// ============================================================================
// LANDSCAPE SECTION - DARK
// ============================================================================

function LandscapeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="pb-[100px] bg-[#0A211F]">
      <div className="max-w-[1100px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-[6px] h-[6px] rounded-full bg-[#F2A0B8]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#F2A0B8]">The Landscape</span>
          </div>
        </motion.div>

        {/* Grid Row 1 */}
        <div className="grid md:grid-cols-3 gap-[6px] mb-[6px]">
          <StatCard
            head="👥 Total Users"
            num="1.8B"
            desc="consumers using AI tools — 600M daily, 1.2B weekly/monthly"
            bg="#F9E0E6"
            numColor="#191918"
            headColor="rgba(90,30,50,0.6)"
            descColor="rgba(90,30,50,0.5)"
            noteColor="rgba(90,30,50,0.3)"
            source="Menlo Ventures 2025"
            sourceUrl="https://menlovc.com/perspective/2025-the-state-of-consumer-ai/"
            isInView={isInView}
            delay={0.1}
          />
          <StatCard
            head="💵 Spending"
            num="$12.1B"
            desc="consumer AI spend — but only 3% of users pay for premium"
            bg="#E8FFAA"
            numColor="#0A211F"
            headColor="#1D3730"
            descColor="#24423B"
            noteColor="#1D3730"
            source="Menlo Ventures 2025"
            sourceUrl="https://menlovc.com/perspective/2025-the-state-of-consumer-ai/"
            isInView={isInView}
            delay={0.15}
          />
          <StatCard
            head="📱 Potential"
            num="$432B"
            desc="if all 1.8B users paid $20/mo — the largest monetization gap in consumer tech"
            bg="#D0E2F8"
            numColor="#191918"
            headColor="rgba(30,50,90,0.6)"
            descColor="rgba(30,50,90,0.5)"
            noteColor="rgba(30,50,90,0.3)"
            source=""
            sourceUrl=""
            isInView={isInView}
            delay={0.2}
          />
        </div>

        {/* Grid Row 2 */}
        <div className="grid md:grid-cols-2 gap-[6px] mb-[6px]">
          <StatCard
            head="🇺🇸 US Adoption"
            num="61%"
            desc="of US adults (18–79) have tried AI · 19% use it daily"
            bg="#F5EFE3"
            numColor="#191918"
            headColor="rgba(90,65,30,0.6)"
            descColor="rgba(90,65,30,0.5)"
            noteColor="rgba(90,65,30,0.3)"
            source=""
            sourceUrl=""
            isInView={isInView}
            delay={0.25}
          />
          <StatCard
            head="🌍 Global Reach"
            num="86%"
            desc="of consumers used an AI-powered service in the past month"
            bg="#EDE4F7"
            numColor="#191918"
            headColor="rgba(80,50,120,0.6)"
            descColor="rgba(80,50,120,0.5)"
            noteColor="rgba(80,50,120,0.3)"
            source=""
            sourceUrl=""
            isInView={isInView}
            delay={0.3}
          />
        </div>

        {/* Grid Row 3 */}
        <div className="grid md:grid-cols-3 gap-[6px]">
          <StatCard
            head="⏱️ Time Saved"
            num="2.5h"
            desc="per day — average productivity gain for AI-assisted workers"
            bg="#1D3730"
            numColor="#D8FF85"
            headColor="#8DFDBA"
            descColor="#7C7D79"
            noteColor="#2A4E45"
            source=""
            sourceUrl=""
            isInView={isInView}
            delay={0.35}
            numSize="52px"
          />
          <StatCard
            head="🎓 Students"
            num="67%"
            desc="of students use AI · 66% of teachers also adopt it"
            bg="#D4E6D0"
            numColor="#191918"
            headColor="rgba(40,80,40,0.6)"
            descColor="rgba(40,80,40,0.5)"
            noteColor="rgba(40,80,40,0.3)"
            source=""
            sourceUrl=""
            isInView={isInView}
            delay={0.4}
            numSize="52px"
          />
          <StatCard
            head="📊 Awareness Gap"
            num="77%"
            desc="actually use AI — but only 33% think they do"
            bg="#FFFFFF"
            numColor="#0A211F"
            headColor="#24423B"
            descColor="#7C7D79"
            noteColor="#7C7D79"
            source=""
            sourceUrl=""
            isInView={isInView}
            delay={0.45}
            numSize="52px"
            border="1px solid #E6ECD6"
          />
        </div>

        {/* Source */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.5 }}
          className="mt-11 px-5 py-4 bg-[rgba(18,33,29,0.6)] border border-[#1D3730] rounded-xl text-[10px] leading-[2]"
        >
          <div className="font-semibold uppercase tracking-[1.5px] text-[9px] text-[#2A4E45] mb-1">Sources</div>
          <div className="text-[#2A4E45]">
            <a href="https://menlovc.com/perspective/2025-the-state-of-consumer-ai/" target="_blank" rel="noopener noreferrer" className="hover:text-[#8DFDBA] transition-colors font-mono text-[9px]">Menlo Ventures</a>
            {' · '}
            <a href="https://www.forbes.com/advisor/business/ai-statistics/" target="_blank" rel="noopener noreferrer" className="hover:text-[#8DFDBA] transition-colors font-mono text-[9px]">Forbes AI Stats</a>
            {' · '}
            <a href="https://originality.ai/blog/ai-statistics" target="_blank" rel="noopener noreferrer" className="hover:text-[#8DFDBA] transition-colors font-mono text-[9px]">Originality.ai</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({
  head,
  num,
  desc,
  bg,
  numColor,
  headColor,
  descColor,
  noteColor,
  source,
  sourceUrl,
  isInView,
  delay,
  numSize = "clamp(52px,9vw,80px)",
  border = "none"
}: {
  head: string;
  num: string;
  desc: string;
  bg: string;
  numColor: string;
  headColor: string;
  descColor: string;
  noteColor: string;
  source: string;
  sourceUrl: string;
  isInView: boolean;
  delay: number;
  numSize?: string;
  border?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay }}
      className="rounded-[18px] p-7 hover:-translate-y-[2px] transition-transform"
      style={{ background: bg, border }}
    >
      <div className="text-xs font-medium mb-3 flex items-center gap-2" style={{ color: headColor }}>
        {head}
      </div>
      <div
        className="font-light tracking-[-2px] leading-[0.9] mb-2"
        style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: numSize, color: numColor }}
      >
        {num}
      </div>
      <div className="text-[11.5px] leading-[1.5]" style={{ color: descColor }}>
        {desc}
      </div>
      {source && (
        <div className="mt-3 font-mono text-[8.5px] opacity-35" style={{ color: noteColor }}>
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
            {source}
          </a>
        </div>
      )}
    </motion.div>
  );
}

// ============================================================================
// DAILY ACTIVITIES SECTION - LIGHT
// ============================================================================

function DailyActivitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const activities = [
    { name: "🔍 Look up answers", value: 51 },
    { name: "✉️ Messages & emails", value: 45 },
    { name: "💰 Financial questions", value: 43 },
    { name: "🧳 Travel planning", value: 38 },
    { name: "📝 Craft emails", value: 31 },
    { name: "🎤 Job interview prep", value: 30 },
    { name: "📱 Social media posts", value: 25 },
    { name: "📄 Summarize content", value: 19 },
  ];

  return (
    <section ref={ref} className="py-[100px] bg-[#F7F9F2]">
      <div className="max-w-[1100px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-[6px] h-[6px] rounded-full bg-[#24423B]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#24423B]">Daily Activities</span>
          </div>
          <p className="text-[13.5px] text-[#7C7D79] leading-[1.75] max-w-[560px] mb-11">
            What people actually use AI for — the most common tasks ranked by percentage of all US adults. Messaging and finance lead; creative work is growing fastest.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1 }}
        >
          <div className="text-[10px] font-semibold tracking-[1.5px] uppercase text-[#24423B] mb-4">
            % of US adults who use AI for each activity
          </div>

          <div className="space-y-2">
            {activities.map((activity, index) => (
              <BarRow
                key={index}
                name={activity.name}
                value={activity.value}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          <div className="mt-4 text-[9px] text-[#7C7D79] font-mono">
            Source: Menlo Ventures × Morning Consult, April 2025 (n=5,031 US adults)
          </div>
        </motion.div>

        {/* Quick stats */}
        <div className="grid md:grid-cols-3 gap-[6px] mt-8">
          <StatCard
            head="✍️ #1 Task"
            num="45%"
            desc="use AI for messaging & emails — the most common daily use case"
            bg="#E8FFAA"
            numColor="#0A211F"
            headColor="#1D3730"
            descColor="#24423B"
            noteColor="#1D3730"
            source=""
            sourceUrl=""
            isInView={isInView}
            delay={0.25}
            numSize="44px"
          />
          <StatCard
            head="🔍 #2 Task"
            num="51%"
            desc="look up answers — the most common single-use reason for AI"
            bg="#F9E0E6"
            numColor="#191918"
            headColor="rgba(90,30,50,0.6)"
            descColor="rgba(90,30,50,0.5)"
            noteColor="rgba(90,30,50,0.3)"
            source=""
            sourceUrl=""
            isInView={isInView}
            delay={0.3}
            numSize="44px"
          />
          <StatCard
            head="🧳 #3 Task"
            num="38%"
            desc="plan travel itineraries — AI's breakout consumer use case"
            bg="#D0E2F8"
            numColor="#191918"
            headColor="rgba(30,50,90,0.6)"
            descColor="rgba(30,50,90,0.5)"
            noteColor="rgba(30,50,90,0.3)"
            source=""
            sourceUrl=""
            isInView={isInView}
            delay={0.35}
            numSize="44px"
          />
        </div>
      </div>
    </section>
  );
}

function BarRow({ name, value, index, isInView }: { name: string; value: number; index: number; isInView: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[11px] text-[#24423B] w-[180px] text-right flex-shrink-0">
        {name}
      </span>
      <div className="flex-1 h-6 bg-[#EEF3E4] rounded-md overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-[#2A4E45] rounded-md flex items-center justify-end pr-2 text-white font-mono text-[10px] font-semibold"
        >
          {value}%
        </motion.div>
      </div>
    </div>
  );
}

// ============================================================================
// DEMOGRAPHICS SECTION - DARK
// ============================================================================

function DemographicsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const generations = [
    { name: "Gen Z (18–28)", value: 76, daily: "21% daily", color: "#FF7B6B" },
    { name: "Millennials (29–44)", value: 70, daily: "24% daily", color: "#E8C547" },
    { name: "Gen X (45–60)", value: 52, daily: "14% daily", color: "#2A4E45" },
    { name: "Boomers (61–79)", value: 35, daily: "8% daily", color: "#24423B" },
  ];

  return (
    <section ref={ref} className="py-[100px] bg-[#0A211F]">
      <div className="max-w-[1100px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-[6px] h-[6px] rounded-full bg-[#D8FF85]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#D8FF85]">Who's Using AI</span>
          </div>
          <p className="text-[13.5px] text-[#7C7D79] leading-[1.75] max-w-[560px] mb-11">
            GenZ and Millennials dominate adoption. But the fastest growth is among 35–54s. Men are more likely to use AI for purchases; women lead in creative use.
          </p>
        </motion.div>

        {/* Split grid */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-[6px] mb-[6px]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="bg-[#F7F9F2] rounded-[18px] p-8"
          >
            <h3 className="text-xl text-[#0A211F] mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              AI Adoption by Generation
            </h3>
            <div className="space-y-3">
              {generations.map((gen, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] text-[#24423B] w-[130px]">{gen.name}</span>
                    <div className="flex-1 h-6 bg-[#EEF3E4] rounded-md overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${gen.value}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-md flex items-center justify-end pr-2 text-white font-mono text-[10px] font-semibold"
                        style={{ background: gen.color }}
                      >
                        {gen.value}%
                      </motion.div>
                    </div>
                  </div>
                  <div className="text-[9px] text-[#7C7D79] text-right">{gen.daily}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-[9px] text-[#7C7D79] font-mono">Source: Menlo Ventures 2025</div>
          </motion.div>

          <StatCard
            head="Fastest Growing"
            num="+49%"
            desc="growth in 35–54 age group over 6 months — catching up fast"
            bg="#F9E0E6"
            numColor="#191918"
            headColor="rgba(90,30,50,0.4)"
            descColor="rgba(90,30,50,0.5)"
            noteColor="rgba(90,30,50,0.3)"
            source="IAB UK / Ipsos iris 2025"
            sourceUrl="https://www.iabuk.com/standard-content/ai-usage-statistics"
            isInView={isInView}
            delay={0.15}
            numSize="clamp(52px,8vw,72px)"
          />
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SHADOW AI SECTION - DARK
// ============================================================================

function ShadowAISection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-[100px] bg-[#12211D]">
      <div className="max-w-[1100px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="w-[6px] h-[6px] rounded-full bg-[#FF7B6B]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#FF7B6B]">Shadow AI</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="grid lg:grid-cols-[2fr_3fr] rounded-[18px] overflow-hidden min-h-[320px] bg-[#0A211F]"
        >
          {/* Left panel */}
          <div className="bg-[#1D3730] p-9 flex flex-col justify-center">
            <h3
              className="text-[clamp(18px,2.5vw,24px)] text-[#F7F9F2] leading-[1.35] mb-4"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Without the right tools, companies face rising <em className="italic text-[#FF7B6B]">shadow AI</em> usage
            </h3>
            <p className="text-xs text-[#7C7D79] leading-[1.65] mb-5">
              Shadow AI: using AI tools without company authorization. It's the new shadow IT — and it's growing faster than any compliance team can track.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 border border-[#24423B] text-[9px] font-medium text-[#2A4E45] rounded-full">Proper Training</span>
              <span className="px-3 py-1 border border-[#24423B] text-[9px] font-medium text-[#2A4E45] rounded-full">Access to Tools</span>
              <span className="px-3 py-1 border border-[#24423B] text-[9px] font-medium text-[#2A4E45] rounded-full">Leadership Support</span>
            </div>
          </div>

          {/* Right panel */}
          <div className="bg-[#F7F9F2] p-9 flex flex-col justify-center">
            <div className="flex items-center gap-6">
              {/* Donut */}
              <div className="relative flex-shrink-0">
                <svg width="120" height="120" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="45" fill="none" stroke="#E6ECD6" strokeWidth="10" />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="45"
                    fill="none"
                    stroke="#2A4E45"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={2 * Math.PI * 45 * (1 - 0.54)}
                    initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                    animate={isInView ? { strokeDashoffset: 2 * Math.PI * 45 * (1 - 0.54) } : {}}
                    transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transform: 'rotate(-90deg)', transformOrigin: '60px 60px' }}
                  />
                  <text x="60" y="54" textAnchor="middle" fontFamily="Playfair Display, Georgia, serif" fontSize="28" fontWeight="300" fill="#0A211F">54%</text>
                  <text x="60" y="72" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="9" fill="#7C7D79">would bypass</text>
                </svg>
              </div>

              {/* Bars */}
              <div className="flex-1">
                <div className="text-[11px] text-[#7C7D79] mb-2">
                  Would use AI even if <strong className="text-[#0A211F]">not authorized</strong>
                </div>
                <div className="space-y-2 mt-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#7C7D79] w-[100px]">GenZ + Millennials</span>
                    <div className="flex-1 h-5 bg-[#EEF3E4] rounded overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '62%' } : {}}
                        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-[#2A4E45] rounded flex items-center justify-end pr-2 text-white font-mono text-[9px] font-semibold"
                      >
                        62%
                      </motion.div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#7C7D79] w-[100px]">Others</span>
                    <div className="flex-1 h-5 bg-[#EEF3E4] rounded overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '43%' } : {}}
                        transition={{ duration: 1.2, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-[#24423B] rounded flex items-center justify-end pr-2 text-white font-mono text-[9px] font-semibold"
                      >
                        43%
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-[10px] text-[#FF7B6B] font-medium">+19pp gap between generations</div>
              </div>
            </div>
            <div className="mt-4 text-[8.5px] text-[#7C7D79] font-mono">Source: BCG AI at Work 2025 (n=10,635)</div>
          </div>
        </motion.div>

        {/* Source */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.3 }}
          className="mt-11 px-5 py-4 bg-[rgba(18,33,29,0.6)] border border-[#1D3730] rounded-xl text-[10px] leading-[2]"
        >
          <div className="font-semibold uppercase tracking-[1.5px] text-[9px] text-[#2A4E45] mb-1">Source</div>
          <div className="text-[#2A4E45]">
            <a href="https://www.bcg.com/publications/2025/ai-at-work-what-people-are-saying" target="_blank" rel="noopener noreferrer" className="hover:text-[#8DFDBA] transition-colors font-mono text-[9px]">
              BCG — AI at Work: What People Are Really Saying, 2025
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// FIVE TYPES SECTION - LIGHT
// ============================================================================

function FiveTypesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const types = [
    { icon: "🚀", name: "Enthusiasts", pct: "~20%", desc: "Early adopters, daily power users. Willing to pay.", bg: "#E8FFAA", color: "#0A211F" },
    { icon: "🤔", name: "Pragmatists", pct: "~25%", desc: "Use AI when it clearly saves time. Value utility over novelty.", bg: "#D0E2F8", color: "#191918" },
    { icon: "👀", name: "Curious", pct: "~20%", desc: "Tried it once or twice. Open but uncommitted. Biggest conversion opp.", bg: "#F5EFE3", color: "#191918" },
    { icon: "😐", name: "Indifferent", pct: "~20%", desc: "Aware but not motivated. Need clear value prop to shift.", bg: "#EDE4F7", color: "#191918" },
    { icon: "🛑", name: "Resistors", pct: "~15%", desc: "Actively avoid AI. Privacy and job displacement fears dominate.", bg: "#F9E0E6", color: "#191918" },
  ];

  return (
    <section ref={ref} className="py-[100px] bg-[#F7F9F2]">
      <div className="max-w-[1100px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-[6px] h-[6px] rounded-full bg-[#24423B]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#24423B]">Five Types of AI Consumers</span>
          </div>
          <p className="text-[13.5px] text-[#7C7D79] leading-[1.75] max-w-[560px] mb-11">
            Bain identified five distinct consumer segments based on how people relate to AI — from enthusiasts to resistors. Understanding these types is essential for product builders.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[6px] mb-6">
          {types.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1 + index * 0.1 }}
              className="rounded-[14px] p-5 text-center hover:-translate-y-[3px] transition-transform"
              style={{ background: type.bg }}
            >
              <div className="text-2xl mb-2">{type.icon}</div>
              <h4 className="font-normal text-sm mb-1" style={{ fontFamily: 'Playfair Display, Georgia, serif', color: type.color }}>
                {type.name}
              </h4>
              <div
                className="text-[28px] font-light tracking-[-1px] mb-2"
                style={{ fontFamily: 'Playfair Display, Georgia, serif', color: type.color }}
              >
                {type.pct}
              </div>
              <div className="text-[10px] leading-[1.5] opacity-60" style={{ color: type.color }}>
                {type.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.7 }}
          className="relative bg-[#F9E0E6] rounded-[16px] p-6 overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F2A0B8]" />
          <p
            className="text-[clamp(15px,1.8vw,18px)] italic leading-[1.5] text-[#191918] pl-4"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            "Most consumers test their preferred general AI tool first — no matter the task — and only look for alternatives when it comes up short."
          </p>
          <div className="text-[10px] text-[#7C7D79] mt-2 pl-4">— Menlo Ventures × Morning Consult, 2025</div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// TRUST & SENTIMENT SECTION - DARK
// ============================================================================

function TrustSentimentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sentiments = [
    { num: "38%", desc: "of Americans hold a positive view of AI", source: "Pew Research 2025", bg: "#1D3730", numColor: "#D8FF85", descColor: "#DDE6C8", sourceColor: "#2A4E45" },
    { num: "43%", desc: "concerned about privacy/security — unchanged from 2024", source: "Attest 2025", bg: "#F9E0E6", numColor: "#191918", descColor: "rgba(90,30,50,0.6)", sourceColor: "rgba(90,30,50,0.35)" },
    { num: "54%", desc: "would share anonymized data to improve AI tools", source: "Electroiq 2025", bg: "#F5EFE3", numColor: "#191918", descColor: "rgba(90,65,30,0.6)", sourceColor: "rgba(90,65,30,0.35)" },
    { num: "85%", desc: "of consumers 50+ want laws to control AI data collection", source: "Attest 2025", bg: "#D0E2F8", numColor: "#191918", descColor: "rgba(30,50,90,0.6)", sourceColor: "rgba(30,50,90,0.35)" },
    { num: "51%", desc: "of gen AI users say they use it every day", source: "Deloitte 2025", bg: "#EDE4F7", numColor: "#191918", descColor: "rgba(80,50,120,0.6)", sourceColor: "rgba(80,50,120,0.35)" },
    { num: "71%", desc: "say AI playlists match their taste better than human curation", source: "SQ Magazine 2025", bg: "#D4E6D0", numColor: "#191918", descColor: "rgba(40,80,40,0.6)", sourceColor: "rgba(40,80,40,0.35)" },
  ];

  return (
    <section ref={ref} className="py-[100px] bg-[#0A211F]">
      <div className="max-w-[1100px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-[6px] h-[6px] rounded-full bg-[#8DFDBA]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#8DFDBA]">Trust & Sentiment</span>
          </div>
          <p className="text-[13.5px] text-[#7C7D79] leading-[1.75] max-w-[560px] mb-11">
            The trust divide is real — familiarity breeds confidence, but age and use case create sharp splits in how people feel about AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-[6px]">
          {sentiments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1 + index * 0.1 }}
              className="rounded-[14px] p-5 flex gap-3 items-start hover:-translate-y-[2px] transition-transform"
              style={{ background: item.bg }}
            >
              <div
                className="text-[32px] font-light tracking-[-1px] leading-[1] flex-shrink-0"
                style={{ fontFamily: 'Playfair Display, Georgia, serif', color: item.numColor }}
              >
                {item.num}
              </div>
              <div>
                <div className="text-[11px] leading-[1.5]" style={{ color: item.descColor }}>
                  {item.desc.split('**').map((part, i) => 
                    i % 2 === 0 ? part : <strong key={i} className="font-semibold">{part}</strong>
                  )}
                </div>
                <div className="text-[9px] mt-1" style={{ color: item.sourceColor }}>{item.source}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// ADOPTION FUNNEL SECTION - LIGHT
// ============================================================================

function AdoptionFunnelSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const funnelSteps = [
    { title: "Awareness", desc: "77% of people actually use AI — but only 33% think they do. Most consumers interact with AI through spam filters, search suggestions, and recommendations without realizing it.", color: "#A78BFA" },
    { title: "Trial", desc: "61% of US adults have tried a dedicated AI tool. ChatGPT is the entry point for most — consumers test their preferred tool first, regardless of task.", color: "#F2A0B8" },
    { title: "Regular Use", desc: "19% use AI daily. Key stickiness drivers: messaging (45%), financial answers (43%), search (51%). Habit-forming tasks with immediate value.", color: "#FF7B6B" },
    { title: "Integration", desc: "51% of gen AI users say it's daily. They're using AI in 3+ life categories. It's no longer a tool — it's an operating layer. 69% access AI through existing apps.", color: "#E8C547" },
    { title: "Payment", desc: "Only 3% convert to paid. 50% say free tools are good enough. The gap: $12.1B actual vs $432B potential. This is the defining challenge of consumer AI.", color: "#D8FF85" },
    { title: "Advocacy", desc: "Power users become evangelists. 54% would share data to improve AI. GenZ/Millennials bypass company restrictions (62%). Familiarity breeds trust, trust breeds spend.", color: "#8DFDBA" },
  ];

  return (
    <section ref={ref} className="py-[100px] bg-[#EEF3E4]">
      <div className="max-w-[1100px] mx-auto px-14">
        
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-[6px] h-[6px] rounded-full bg-[#24423B]" />
            <span className="text-[10px] font-semibold tracking-[3px] uppercase text-[#24423B]">The Consumer AI Journey</span>
          </div>
          <p className="text-[13.5px] text-[#7C7D79] leading-[1.75] max-w-[560px] mb-11">
            From awareness to advocacy — how consumers move through the AI adoption funnel. Each stage has distinct behaviors and drop-off points.
          </p>
        </motion.div>

        <div className="relative pl-6">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-0 bottom-0 w-[2px] bg-[#E6ECD6] rounded-full" />

          {/* Steps */}
          {funnelSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1 + index * 0.1 }}
              className="relative mb-7 pl-7"
            >
              <div
                className="absolute left-[-23px] top-[6px] w-[10px] h-[10px] rounded-full border-2"
                style={{ borderColor: step.color, background: '#EEF3E4' }}
              />
              <h4
                className="text-base mb-1 text-[#0A211F]"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                {step.title}
              </h4>
              <p className="text-[11.5px] text-[#7C7D79] leading-[1.6] max-w-[440px]">
                {step.desc.split('**').map((part, i) => 
                  i % 2 === 0 ? part : <strong key={i} className="font-semibold text-[#0A211F]">{part}</strong>
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CLOSE & SOURCES SECTION
// ============================================================================

function CloseSourcesSection({ onNavigate }: { onNavigate?: (route: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const sources = [
    { num: 1, name: "Menlo Ventures", desc: "State of Consumer AI 2025", url: "https://menlovc.com/perspective/2025-the-state-of-consumer-ai/" },
    { num: 2, name: "Bain & Company", desc: "Five Types of AI Consumers", url: "https://www.bain.com/insights/understanding-the-five-types-of-ai-consumers/" },
    { num: 3, name: "BCG", desc: "AI at Work 2025", url: "https://www.bcg.com/publications/2025/ai-at-work-what-people-are-saying" },
    { num: 4, name: "Deloitte", desc: "Connected Consumer 2025", url: "https://www.deloitte.com/us/en/insights/industry/telecommunications/connectivity-mobile-trends-survey.html" },
    { num: 5, name: "Attest", desc: "Consumer AI Adoption 2025", url: "https://www.askattest.com/blog/articles/2025-consumer-adoption-of-ai-report" },
    { num: 6, name: "UK Gov", desc: "AI Skills Survey", url: "https://www.gov.uk/government/publications/ai-skills-for-life-and-work-general-public-survey-findings/ai-skills-for-life-and-work-general-public-survey-findings" },
    { num: 7, name: "Forbes", desc: "AI Statistics", url: "https://www.forbes.com/advisor/business/ai-statistics/" },
    { num: 8, name: "Originality.ai", desc: "AI Statistics", url: "https://originality.ai/blog/ai-statistics" },
    { num: 9, name: "IAB UK", desc: "AI Usage Statistics", url: "https://www.iabuk.com/standard-content/ai-usage-statistics" },
    { num: 10, name: "a16z", desc: "State of Consumer AI", url: "https://a16z.com/state-of-consumer-ai-2025-product-hits-misses-and-whats-next/" },
    { num: 11, name: "SQ Magazine", desc: "AI Usage Stats", url: "https://sqmagazine.co.uk/ai-usage-statistics/" },
  ];

  return (
    <section ref={ref} className="py-[100px] bg-[#F7F9F2] text-center">
      <div className="max-w-[1100px] mx-auto px-14">
        
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          className="text-[clamp(24px,4.2vw,40px)] leading-[1.22] tracking-[-0.5px] text-[#0A211F] max-w-[580px] mx-auto mb-6"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          1.8 billion people use AI.<br /><em className="italic text-[#2A4E45]">Only 3% pay.</em><br />That's the biggest gap in <em className="italic text-[#2A4E45]">consumer tech.</em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="text-sm text-[#24423B] leading-[1.85] max-w-[480px] mx-auto text-left mb-10"
        >
          <strong className="text-[#0A211F] font-semibold">61%</strong> of US adults have tried AI. <strong className="text-[#0A211F] font-semibold">GenZ</strong> leads adoption at 76%. <strong className="text-[#0A211F] font-semibold">54%</strong> would bypass company restrictions to use it. And <strong className="text-[#0A211F] font-semibold">77%</strong> don't even realize they're already using it.<br /><br />
          <span className="text-[#E8C547] font-medium">The opportunity isn't building another chatbot — it's monetizing the 97% who use AI for free.</span><br /><br />
          Trust grows with familiarity. The biggest barrier isn't technology — it's awareness. Builders who solve real daily tasks (messaging, search, travel) will capture the consumer AI market.
        </motion.div>

        {/* Sources panel */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="bg-[#EEF3E4] border border-[#E6ECD6] rounded-[16px] p-7 text-left max-w-[700px] mx-auto"
        >
          <h3 className="text-base text-[#0A211F] mb-3" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            All Sources
          </h3>
          <ul className="space-y-1">
            {sources.map((source) => (
              <li key={source.num} className="flex gap-2 text-[10px] leading-[1.6] p-2 bg-white border border-[#E6ECD6] rounded-lg hover:border-[#2A4E45] transition-colors">
                <span className="font-mono text-[9px] text-[#DDE6C8] min-w-[14px]">{source.num}</span>
                <div>
                  <span className="font-semibold text-[#0A211F]">{source.name}</span>{' '}
                  <span className="text-[#7C7D79]">— {source.desc}</span>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-[2px] text-[9px] text-[#2A4E45] hover:text-[#0A211F] hover:underline font-mono break-all"
                  >
                    {source.url}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.85, delay: 0.4 }}
          className="mt-7 text-[9.5px] text-[#7C7D79]"
        >
          StartupAI Research · February 2026 · 11 verified sources · Consumer AI Intelligence
        </motion.div>
      </div>
    </section>
  );
}
