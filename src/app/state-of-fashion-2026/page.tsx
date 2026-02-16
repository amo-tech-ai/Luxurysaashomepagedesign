'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { ExternalLink, TrendingUp, Users, Zap, Shield, Target, Award, Sparkles, Eye, ArrowRight } from 'lucide-react';

interface FashionProps {
  onNavigate?: (route: string) => void;
}

export default function StateFashion2026({ onNavigate }: FashionProps) {
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
      <TariffSection />
      <WorkforceSection />
      <AIShopperSection />
      <JewellerySection />
      <SmartFramesSection />
      <WellbeingSection />
      <EfficiencySection />
      <ResaleSection />
      <ElevationSection />
      <LuxurySection />
      <ClosingSection onNavigate={onNavigate} />
    </div>
  );
}

// ============================================================================
// HERO SECTION
// ============================================================================

function HeroSection() {
  const [counts, setCounts] = useState({ tariff: 0, consumer: 0, shape: 0, ai: 0 });
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 80]);
  const orbitScale = useTransform(scrollY, [0, 500], [1, 1.3]);

  useEffect(() => {
    const duration = 1800;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCounts({
        tariff: Math.round(eased * 46),
        consumer: Math.round(eased * 78),
        shape: Math.round(eased * 76),
        ai: Math.round(eased * 4700),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    setTimeout(() => animate(), 800);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated orbits with parallax */}
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

      {/* Radial glow */}
      <motion.div
        className="absolute w-[min(800px,90vw)] aspect-square rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(13,95,78,0.12) 0%, rgba(107,157,137,0.05) 35%, transparent 70%)',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          scale: [0.95, 1.15, 0.95],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 px-14 py-8 flex justify-between items-center z-10">
        <span className="text-[11px] font-semibold tracking-[5px] uppercase text-[#6B9D89]">State of Fashion 2026</span>
        <span className="text-[11px] font-semibold tracking-[5px] uppercase text-[#6B9D89] font-mono">BoF × McKinsey</span>
      </div>

      {/* Hero content */}
      <motion.div 
        className="relative z-10 max-w-[760px] px-8 text-center" 
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[11px] font-semibold tracking-[6px] uppercase text-[#8FB894] mb-8"
        >
          §0 · The Business of Fashion × McKinsey & Company
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-[clamp(52px,10vw,96px)] font-light leading-[0.95] tracking-[-3.5px] text-[#FAF9F7] mb-10"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          When the<br />
          <span className="italic text-[#8FB894]">Rules Change</span>
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
          className="text-[16px] text-[#D4E6D0] leading-[1.85] max-w-[580px] mx-auto"
        >
          Tariffs have redrawn trade maps. AI is rewiring how consumers discover and buy. Luxury is recalibrating after years of price-led growth. <strong className="text-[#FAF9F7] font-medium">In a flat market, only brands that capture hearts and minds will grow.</strong>
        </motion.div>

        {/* KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14 max-w-[800px] mx-auto">
          {[
            { value: counts.tariff + '%', label: 'expect conditions\nto worsen', color: '#0D5F4E' },
            { value: counts.consumer + '%', label: 'cite consumer\nconfidence as #1 risk', color: '#6B9D89' },
            { value: counts.shape + '%', label: 'say tariffs will\nshape the industry', color: '#6B9D89' },
            { value: counts.ai + '%', label: 'growth in AI\nshopping searches', color: '#8B7AC8' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.7 + i * 0.15 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#6B9D89]/5 to-transparent rounded-2xl blur-xl" />
              <div className="relative bg-[#162D26]/60 border border-[#1E3D33] rounded-2xl p-5 backdrop-blur-sm">
                <div 
                  className="text-[clamp(32px,5vw,48px)] font-light tracking-[-2px] leading-none mb-2" 
                  style={{ fontFamily: 'Georgia, serif', color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-[12px] text-[#7C7D79] leading-[1.4] whitespace-pre-line">
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
        <span className="text-[11px] tracking-[4px] uppercase text-[#6B9D89]">Scroll to explore</span>
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
// SECTION 1: TARIFF TURBULENCE
// ============================================================================

function TariffSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F5F3EF] relative">
      <div className="max-w-[1200px] mx-auto px-14">
        <SectionHeader
          number="01"
          title="Tariff Turbulence"
          subtitle="US tariffs spike from 13% to 54%, reshaping global fashion supply chains"
          description="The weighted average tariff on apparel and footwear imports spiked to 54% in April 2025 before settling at 36% by October — still nearly triple January levels. 89% of US apparel is imported, making fashion one of the most exposed sectors."
          accentColor="#0D5F4E"
          isInView={isInView}
          light
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <TariffCard
            label="China · Hardest Hit"
            value="76%"
            title="Tariff rate on Chinese apparel by Aug 2025"
            description="Up from 26% in January. China accounts for $30B (25%) of US apparel imports — and 34% of incremental tariff impact."
            color="#0D5F4E"
            progress={76}
            isInView={isInView}
            delay={0.2}
          />
          <TariffCard
            label="Vietnam · Major Exposure"
            value="58%"
            title="Tariff rate on Vietnamese imports"
            description="Second largest exporter at $25B (21%). Tariff nearly tripled from 21% in Jan. Accounts for ~22% of incremental impact."
            color="#D4944E"
            progress={58}
            isInView={isInView}
            delay={0.3}
          />
          <TariffCard
            label="Mexico · Tariff Haven"
            value="0%"
            title="Zero tariff rate maintained"
            description="Only major source at 0% duty. $4B in exports but positioned as nearshoring winner. Honduras also near-zero at 4%."
            color="#3A8A7A"
            progress={3}
            isInView={isInView}
            delay={0.4}
          />
        </div>

        {/* Tariff Escalation Arc */}
        <TariffArcDiagram isInView={isInView} />

        <SourceBox
          isInView={isInView}
          text="MGI Global Trade Dispute Database · World Bank · BoF-McKinsey State of Fashion Executive Survey 2026"
          light
        />
      </div>
    </section>
  );
}

function TariffCard({ label, value, title, description, color, progress, isInView, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="rounded-[24px] p-8 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
      style={{ backgroundColor: `${color}08`, border: `1px solid ${color}20` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl" style={{ background: `${color}15` }} />
      
      <div className="relative">
        <div className="text-[11px] font-semibold tracking-[3px] uppercase mb-4" style={{ color }}>
          {label}
        </div>
        <div className="text-[clamp(38px,5vw,56px)] font-light tracking-[-2px] leading-none mb-3" style={{ fontFamily: 'Georgia, serif', color }}>
          {value}
        </div>
        <div className="text-[15px] font-medium text-[#191918] mb-3 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
          {title}
        </div>
        <div className="text-[12px] leading-[1.75] text-[#1E3D33]/70 mb-4">
          {description}
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-[#0D5F4E]/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${progress}%` } : { width: 0 }}
            transition={{ duration: 1.2, delay: delay + 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function TariffArcDiagram({ isInView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="bg-white border border-[#EEF3E4] rounded-[28px] p-12 mt-8 shadow-[0_8px_30px_rgba(13,95,78,0.04)]"
    >
      <div className="text-[12px] font-semibold tracking-[4px] uppercase text-[#0D5F4E] mb-8">
        Tariff Escalation Arc · Weighted Average on US Apparel Imports
      </div>

      <svg viewBox="0 0 800 220" className="w-full max-w-[800px] mx-auto">
        {/* Background track */}
        <path d="M 60 180 Q 200 180 300 140 Q 400 80 450 40 Q 480 20 500 40 Q 550 80 600 100 Q 700 140 740 130" fill="none" stroke="#F0E8E4" strokeWidth="3"/>
        
        {/* Animated path */}
        <motion.path 
          d="M 60 180 Q 200 180 300 140 Q 400 80 450 40 Q 480 20 500 40 Q 550 80 600 100 Q 700 140 740 130" 
          fill="none" 
          stroke="#0D5F4E" 
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2.5, delay: 0.3, ease: 'easeOut' }}
        />
        
        {/* Data points */}
        <circle cx="60" cy="180" r="8" fill="#FAF9F7" stroke="#0D5F4E" strokeWidth="2"/>
        <text x="60" y="205" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#7C7D79">Jan '25</text>
        <text x="60" y="170" textAnchor="middle" fontFamily="Georgia, serif" fontSize="22" fontWeight="300" fill="#191918">13%</text>

        <circle cx="450" cy="40" r="10" fill="#0D5F4E" stroke="#FFFFFF" strokeWidth="2"/>
        <text x="450" y="25" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#0D5F4E" fontWeight="600">APR '25 PEAK</text>
        <text x="450" y="68" textAnchor="middle" fontFamily="Georgia, serif" fontSize="26" fontWeight="300" fill="#0D5F4E">54%</text>

        <circle cx="740" cy="130" r="8" fill="#D4944E" stroke="#FFFFFF" strokeWidth="2"/>
        <text x="740" y="155" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#7C7D79">Oct '25</text>
        <text x="740" y="120" textAnchor="middle" fontFamily="Georgia, serif" fontSize="22" fontWeight="300" fill="#D4944E">36%</text>

        {/* Annotation */}
        <text x="280" y="30" fontFamily="sans-serif" fontSize="11" fill="#7C7D79" style={{ textTransform: 'uppercase' }} letterSpacing="2">+4.2× INCREASE IN 3 MONTHS</text>
        <line x1="280" y1="35" x2="450" y2="35" stroke="#0D5F4E" strokeWidth="1" strokeDasharray="4 3" opacity="0.4"/>
      </svg>
    </motion.div>
  );
}

// ============================================================================
// SECTION 2: WORKFORCE REWIRED
// ============================================================================

function WorkforceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0E1A17] to-[#0A211F] relative">
      <div className="max-w-[1200px] mx-auto px-14">
        <SectionHeader
          number="02"
          title="Workforce Rewired"
          subtitle="AI is reshaping fashion's workforce — one-third of tasks automatable by 2030"
          description="Generative AI is shifting from competitive edge to business necessity. Companies are moving beyond pilots to fundamental process redesign, while competing for scarce AI talent against Big Tech."
          accentColor="#8B7AC8"
          isInView={isInView}
        />

        {/* Card Grid */}
        <div className="grid grid-cols-3 gap-5 mt-12">
          {/* Row 1 */}
          <AIEfficiencyCard
            icon="✏️"
            category="Scriptwriting"
            percentage="40%"
            description="hours saved for sharper storytelling foundations"
            bgColor="#C4F86F"
            textColor="#0F2A1B"
            isInView={isInView}
            delay={0.1}
          />
          <AIEfficiencyCard
            icon="🎬"
            category="Video & photo production"
            percentage="40%"
            description="hours saved for smoother shoots and edits"
            bgColor="#A8D4F0"
            textColor="#0F2A1B"
            isInView={isInView}
            delay={0.15}
          />
          <AIEfficiencyCard
            icon="🎨"
            category="Storyboarding"
            percentage="60%"
            description="hours saved for quicker visualization of concepts"
            bgColor="#F8B5E8"
            textColor="#0F2A1B"
            isInView={isInView}
            delay={0.2}
          />

          {/* Row 2 */}
          <AIEfficiencyCard
            icon="🎙️"
            category="Voiceover"
            percentage="60%"
            description="hours saved for faster narration and localization"
            bgColor="#EDE8D8"
            textColor="#0F2A1B"
            isInView={isInView}
            delay={0.25}
          />
          <AIEfficiencyCard
            icon="✨"
            category="Motion design"
            percentage="40%"
            description="hours saved for more creative animation"
            bgColor="#E8D7B9"
            textColor="#0F2A1B"
            isInView={isInView}
            delay={0.3}
          />
          <PhotoCard
            imageUrl="figma:asset/ffddfd6aa7a254ab2d28a9f54a36dabd47af1e3d.png"
            isInView={isInView}
            delay={0.35}
          />
        </div>

        <SourceBox
          isInView={isInView}
          text="McKinsey Global Institute · McKinsey US Employee Survey Oct–Nov 2024"
          dark
        />
      </div>
    </section>
  );
}

function AIEfficiencyCard({ icon, category, percentage, description, bgColor, textColor, isInView, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="rounded-[20px] p-6 flex flex-col"
      style={{ backgroundColor: bgColor }}
    >
      {/* Icon + Category */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-[18px]">{icon}</span>
        <span className="text-[14px] font-normal leading-tight" style={{ color: textColor }}>
          {category}
        </span>
      </div>

      {/* Percentage */}
      <div 
        className="text-[clamp(48px,6vw,72px)] font-light leading-[0.9] mb-3" 
        style={{ fontFamily: 'Georgia, serif', color: textColor }}
      >
        {percentage}
      </div>

      {/* Description */}
      <div className="text-[13px] leading-[1.4] font-normal" style={{ color: textColor }}>
        {description}
      </div>
    </motion.div>
  );
}

function PhotoCard({ imageUrl, isInView, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="rounded-[20px] overflow-hidden h-full"
    >
      <img 
        src={imageUrl} 
        alt="Creative team collaboration" 
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}

// ============================================================================
// SECTION 3: AI SHOPPER
// ============================================================================

function AIShopperSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F5F3EF] relative">
      <div className="max-w-[1200px] mx-auto px-14">
        <SectionHeader
          number="03"
          title="The AI Shopper"
          subtitle="AI shopping searches explode 4,700% — the new SEO is AI visibility"
          description="Consumers are turning to LLMs to discover, compare and buy fashion. ChatGPT now drives 16% of Zara's referral traffic. Generative Engine Optimisation is becoming as critical as traditional SEO."
          accentColor="#8B7AC8"
          isInView={isInView}
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
          {[
            { value: '23%', label: 'Use gen AI as primary\nproduct discovery tool', color: '#8B7AC8' },
            { value: '53%', label: 'Of AI searchers\nalso use it to shop', color: '#8B7AC8' },
            { value: '41%', label: 'Trust AI results\nmore than paid ads', color: '#8B7AC8' },
            { value: '85%', label: 'Report better AI\nshopping experience', color: '#8B7AC8' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="rounded-[20px] p-6 bg-[#8B7AC8]/8 border border-[#8B7AC8]/20 hover:-translate-y-1 transition-all duration-400"
            >
              <div className="text-[clamp(28px,4vw,40px)] font-light tracking-[-1.5px] leading-none mb-3" style={{ fontFamily: 'Georgia, serif', color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-[12px] leading-[1.5] text-[#1E3D33]/70 whitespace-pre-line">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Funnel Comparison */}
        <SearchFunnelDiagram isInView={isInView} />

        <SourceBox
          isInView={isInView}
          text="BoF-McKinsey Consumer Survey 2026 · SimilarWeb · Salesforce Commerce Cloud"
          light
        />
      </div>
    </section>
  );
}

function SearchFunnelDiagram({ isInView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="bg-white border border-[#EEF3E4] rounded-[28px] p-12 mt-8 shadow-[0_8px_30px_rgba(13,95,78,0.04)]"
    >
      <div className="text-[12px] font-semibold tracking-[4px] uppercase text-[#8B7AC8] mb-8">
        Search Volume Shift · The AI Discovery Funnel
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <FunnelYear 
          year="2024" 
          data={[
            { value: '91–93%', label: 'Traditional search engines', width: '95%', color: '#8B7AC8', opacity: 0.15 },
            { value: '6–8%', label: 'AI summaries in search', width: '60%', color: '#8B7AC8', opacity: 0.12 },
            { value: '1–3%', label: 'Gen AI platforms', width: '30%', color: '#0D5F4E', opacity: 0.1 },
          ]}
          isInView={isInView}
          delay={0.3}
        />
        <FunnelYear 
          year="H1 2025" 
          data={[
            { value: '74–79%', label: 'Traditional search engines', width: '85%', color: '#8B7AC8', opacity: 0.15 },
            { value: '16–23%', label: 'AI summaries in search', width: '70%', color: '#8B7AC8', opacity: 0.15 },
            { value: '2–4%', label: 'Gen AI platforms', width: '35%', color: '#0D5F4E', opacity: 0.15, emphasis: true },
          ]}
          isInView={isInView}
          delay={0.5}
        />
      </div>

      <div className="text-[12px] text-[#7C7D79] mt-8 leading-[1.6]">
        Note: Global search traffic across all industries. Direct site visits excluded. Source: SearchEngineLand, Semrush, Statista, OpenAI
      </div>
    </motion.div>
  );
}

function FunnelYear({ year, data, isInView, delay }: any) {
  return (
    <div>
      <div className="text-[12px] font-semibold tracking-[2px] uppercase text-[#7C7D79] mb-6">{year}</div>
      <div className="flex flex-col items-center gap-3">
        {data.map((item: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: delay + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-xl p-4 text-center ${item.emphasis ? 'border-2' : 'border'}`}
            style={{ 
              width: item.width,
              backgroundColor: `${item.color}${Math.round(item.opacity * 255).toString(16).padStart(2, '0')}`,
              borderColor: `${item.color}${item.emphasis ? '60' : '30'}`
            }}
          >
            <div className="text-[18px] font-light tracking-tight" style={{ fontFamily: 'Georgia, serif', color: item.color }}>
              {item.value}
            </div>
            <div className="text-[11px] text-[#191918]/70 mt-1 leading-[1.4]">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// SECTION 4: JEWELLERY SPARKLES
// ============================================================================

function JewellerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0E1A17] to-[#0A211F] relative">
      <div className="max-w-[1200px] mx-auto px-14">
        <SectionHeader
          number="04"
          title="Jewellery Sparkles"
          subtitle="Jewellery grows 4× faster than clothing, driven by self-expression and self-gifting"
          description="A $395B market growing to $460B by 2028. Asia Pacific drives 70–75% of growth. Self-purchasing overtakes gifting as consumers treat jewellery as personal identity."
          accentColor="#6B9D89"
          isInView={isInView}
        />

        <div className="grid md:grid-cols-[1fr_1fr_1.3fr] gap-6 mt-12">
          <MetricCard
            label="Self-Expression"
            value="71%"
            title="Say jewellery expresses their personality"
            description="75% prefer creative or unique designs. Novelty jewellery and customisation are driving branded growth."
            color="#6B9D89"
            isInView={isInView}
            delay={0.2}
          />
          <MetricCard
            label="Self-Purchase"
            value="+58%"
            title="Increase in women buying for themselves"
            description="42% of women and 35% of men buying more for themselves vs 2–3 years ago. Women will command 75% of discretionary spend by 2028."
            color="#6B9D89"
            isInView={isInView}
            delay={0.3}
          />
          <MetricCard
            label="Market Shift"
            value="$460B"
            title="Global jewellery market by 2028"
            description="Men's jewellery growing 7–8% p.a. vs 4–5% for women's. Lab-grown diamonds at 20% of sales, could reach 50% by 2030."
            example="Swarovski lab-grown sales more than doubled in 2024. Ariana Grande capsule was best-selling in brand history."
            color="#6B9D89"
            isInView={isInView}
            delay={0.4}
          />
        </div>

        <SourceBox
          isInView={isInView}
          text="Euromonitor · BoF-McKinsey Consumer Survey 2026 · De Beers · Company Reports"
          dark
        />
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 5: SMART FRAMES
// ============================================================================

function SmartFramesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F5F3EF] relative">
      <div className="max-w-[1200px] mx-auto px-14">
        <SectionHeader
          number="05"
          title="Smart Frames"
          subtitle="Wearables grow 9% annually — smart glasses become fashion's next frontier"
          description="EssilorLuxottica's Meta Ray-Ban glasses sold 2M+ pairs. Sales grew 200%+ year-over-year. Production scaling to 20M+ units. The collision of fashion and technology is accelerating."
          accentColor="#3A8A7A"
          isInView={isInView}
          light
        />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-[24px] p-8 bg-[#3A8A7A]/8 border border-[#3A8A7A]/20 hover:-translate-y-2 transition-all duration-500"
          >
            <div className="text-[11px] font-semibold tracking-[3px] uppercase text-[#3A8A7A] mb-4">
              Ray-Ban Meta Success
            </div>
            <div className="text-[clamp(38px,5vw,56px)] font-light tracking-[-2px] leading-none text-[#3A8A7A] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              2M+
            </div>
            <div className="text-[15px] font-medium text-[#191918] mb-3 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Pairs sold since 2023 launch
            </div>
            <div className="text-[12px] leading-[1.75] text-[#1E3D33]/70 mb-4">
              60% of Oakley wearable buyers are new customers. Meta bought $3.5B stake in EssilorLuxottica.
            </div>
            <div className="mt-4 p-4 rounded-xl bg-[#3A8A7A]/10 border-l-2 border-[#3A8A7A]">
              <div className="text-[11px] leading-[1.6] text-[#1E3D33]/80">
                Meta Ray-Ban Display sold out on day 1. Lines at LensCrafters at 5AM. Design-first approach: "If tech doesn't fit the Wayfarer, we don't have a product."
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-[24px] p-8 bg-[#3A8A7A]/8 border border-[#3A8A7A]/20 hover:-translate-y-2 transition-all duration-500"
          >
            <div className="text-[11px] font-semibold tracking-[3px] uppercase text-[#3A8A7A] mb-4">
              Wearables Growth
            </div>
            <div className="text-[clamp(38px,5vw,56px)] font-light tracking-[-2px] leading-none text-[#3A8A7A] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              9%
            </div>
            <div className="text-[15px] font-medium text-[#191918] mb-3 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Annual growth through 2028
            </div>
            <div className="text-[12px] leading-[1.75] text-[#1E3D33]/70 mb-4">
              Smart glasses gaining traction alongside rings and health devices. Fashion brands must define wearable strategy — or lose relevance.
            </div>
            <div className="mt-4 p-4 rounded-xl bg-[#3A8A7A]/10 border-l-2 border-[#3A8A7A]">
              <div className="text-[11px] leading-[1.6] text-[#1E3D33]/80">
                Key decision: License brand to tech firms (Meta, Google) or build proprietary hardware. Sports, women's expansion, and multi-brand strategy are next.
              </div>
            </div>
          </motion.div>
        </div>

        <SourceBox
          isInView={isInView}
          text="Company Reports · Industry Analysis · EssilorLuxottica Investor Relations"
          light
        />
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 6: WELLBEING ERA
// ============================================================================

function WellbeingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0E1A17] to-[#0A211F] relative">
      <div className="max-w-[1200px] mx-auto px-14">
        <SectionHeader
          number="06"
          title="The Wellbeing Era"
          subtitle="Wellness becomes fashion's new luxury — 84% say it's a top life priority"
          description="Consumers are shifting discretionary spend from goods to wellbeing. 51% would maintain wellness spending even if income dropped. Brands responding with 'third spaces' and holistic identity integration."
          accentColor="#0D5F4E"
          isInView={isInView}
        />

        {/* Wellbeing Tower */}
        <div className="mt-12 mb-8">
          <TowerVisualization
            levels={[
              {
                number: 3,
                title: 'Transform — Embed in Brand DNA',
                description: 'Rethink assortment, design codes and channel strategy around wellbeing. Sporty & Rich built entire identity on "wellness-inspired apparel."',
                color: '#0D5F4E',
                width: '100%'
              },
              {
                number: 2,
                title: 'Extend — Wellbeing-Adjacent Offerings',
                description: 'Product extensions and long-term collaborations. Celine Pilates clothes, Dior branded spas, Lululemon yoga hubs.',
                color: '#6B9D89',
                width: '85%'
              },
              {
                number: 1,
                title: 'Inspire — Storytelling & Activations',
                description: 'Wellbeing-focused marketing, ambassador partnerships, pop-up events. Galeries Lafayette Wellness Galerie.',
                color: '#2A5245',
                width: '70%'
              },
            ]}
            isInView={isInView}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { value: '94%', label: 'China consumers say\nwellness is top priority', color: '#0D5F4E' },
            { value: '89%', label: 'Say brand community >\ninfluencer marketing', color: '#0D5F4E' },
            { value: '$2.5T', label: 'Projected wellness\nmarket by 2030', color: '#0D5F4E' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="rounded-[20px] p-6 bg-[#162D26] border border-[#1E3D33] text-center"
            >
              <div className="text-[clamp(32px,4vw,48px)] font-light tracking-[-1.5px] leading-none mb-3" style={{ fontFamily: 'Georgia, serif', color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-[12px] leading-[1.5] text-[#D4E6D0]/70 whitespace-pre-line">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <SourceBox
          isInView={isInView}
          text="BoF-McKinsey Consumer Survey 2026 · Global Wellness Institute"
          dark
        />
      </div>
    </section>
  );
}

function TowerVisualization({ levels, isInView }: any) {
  return (
    <div className="space-y-4">
      {levels.map((level: any, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
          className="relative group"
        >
          <div className="flex gap-6 items-start">
            <div className="relative flex-shrink-0">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="w-14 h-14 rounded-full flex items-center justify-center relative z-10"
                style={{ background: `linear-gradient(135deg, ${level.color}, ${level.color}dd)` }}
              >
                <div className="text-[22px] font-light text-white" style={{ fontFamily: 'Georgia, serif' }}>
                  {level.number}
                </div>
              </motion.div>
              <div 
                className="absolute inset-0 rounded-full blur-xl opacity-50"
                style={{ backgroundColor: level.color }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0.95 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25 + index * 0.15 }}
              className="flex-1 rounded-[20px] p-6 border transition-all duration-400 hover:translate-x-2 relative overflow-hidden"
              style={{ 
                background: `linear-gradient(90deg, ${level.color}15, ${level.color}05)`,
                borderColor: `${level.color}30`,
                maxWidth: level.width,
              }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r" style={{ backgroundColor: level.color }} />

              <div className="relative pl-4">
                <div className="text-[14px] font-semibold mb-2 leading-tight text-[#FAF9F7]">
                  {level.title}
                </div>
                <div className="text-[11px] leading-[1.7] text-[#D4E6D0]/70">
                  {level.description}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ============================================================================
// SECTION 7: EFFICIENCY UNLOCKED
// ============================================================================

function EfficiencySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F5F3EF] relative">
      <div className="max-w-[1200px] mx-auto px-14">
        <SectionHeader
          number="07"
          title="Efficiency Unlocked"
          subtitle="Inventory days rise 14% while margins compress — efficiency is no longer optional"
          description="Old advantages like scale and low-cost sourcing are insufficient. Technology-driven productivity is the new competitive moat. 69% now prioritise growth, down from 73% as cost management rises in importance."
          accentColor="#D4944E"
          isInView={isInView}
          light
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-[24px] p-8 bg-[#D4944E]/8 border border-[#D4944E]/20"
          >
            <div className="text-[11px] font-semibold tracking-[3px] uppercase text-[#D4944E] mb-4">
              Inventory Bloat
            </div>
            <div className="text-[clamp(38px,5vw,56px)] font-light tracking-[-2px] leading-none text-[#D4944E] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              168
            </div>
            <div className="text-[15px] font-medium text-[#191918] mb-3 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Days inventory outstanding (2024)
            </div>
            <div className="text-[12px] leading-[1.75] text-[#1E3D33]/70 mb-4">
              Up from 147 days in 2016–2019 average. +14% increase signals structural inefficiency across the industry.
            </div>
            <div className="h-1 bg-[#D4944E]/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '85%' } : {}}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full bg-[#D4944E]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-[24px] p-8 bg-[#D4944E]/8 border border-[#D4944E]/20"
          >
            <div className="text-[11px] font-semibold tracking-[3px] uppercase text-[#D4944E] mb-6">
              Top Optimisation Targets
            </div>
            <div className="space-y-4">
              {[
                { label: 'Assortment mix', value: 50 },
                { label: 'Inventory mgmt', value: 47 },
                { label: 'Pricing / promos', value: 33 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-[11px] text-[#191918] w-28 text-right">
                    {item.label}
                  </div>
                  <div className="flex-1 h-6 bg-[#D4944E]/10 rounded-lg overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.value}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.5 + i * 0.15, ease: 'easeOut' }}
                      className="h-full bg-[#D4944E] rounded-lg"
                    />
                  </div>
                  <div className="text-[11px] font-mono text-[#D4944E] w-10">
                    {item.value}%
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="rounded-[24px] p-8 bg-[#D4944E]/8 border border-[#D4944E]/20"
          >
            <div className="text-[11px] font-semibold tracking-[3px] uppercase text-[#D4944E] mb-4">
              Cost Pressure Rising
            </div>
            <div className="text-[clamp(38px,5vw,56px)] font-light tracking-[-2px] leading-none text-[#D4944E] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              74%
            </div>
            <div className="text-[15px] font-medium text-[#191918] mb-3 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Expect to raise prices in 2026
            </div>
            <div className="text-[12px] leading-[1.75] text-[#1E3D33]/70">
              +19 pp vs 2025. In North America, 45% plan hikes &gt;5%. Nearly 25% of NA executives expect COGS up &gt;9%.
            </div>
          </motion.div>
        </div>

        <SourceBox
          isInView={isInView}
          text="BoF-McKinsey Executive Survey · Industry Analysis"
          light
        />
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 8: RESALE SPRINT
// ============================================================================

function ResaleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0E1A17] to-[#0A211F] relative">
      <div className="max-w-[1200px] mx-auto px-14">
        <SectionHeader
          number="08"
          title="Resale Sprint"
          subtitle="Secondhand market surges to $317B by 2027 — growing 2–3× faster than firsthand"
          description="59% of consumers plan to shop resale in 2026. Over 70% in China. Vinted grew net profit 330%. Brand-led resale programmes grew 300% since 2021."
          accentColor="#8B7AC8"
          isInView={isInView}
        />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <ResaleColumnChart isInView={isInView} />
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="rounded-[24px] p-8 bg-[#162D26] border border-[#1E3D33]"
          >
            <div className="text-[11px] font-semibold tracking-[3px] uppercase text-[#8B7AC8] mb-6">
              Resale Model Spectrum
            </div>
            <TowerVisualization
              levels={[
                {
                  number: 3,
                  title: 'Build In-House',
                  description: 'Full control. High investment. Own data and customer relationship. Suited to large brands.',
                  color: '#8B7AC8',
                  width: '100%'
                },
                {
                  number: 2,
                  title: 'Resale-as-a-Service',
                  description: 'Outsourced ops via Trove, ThredUp, Reflaunt. Branded experience, managed logistics.',
                  color: '#6B9D89',
                  width: '85%'
                },
                {
                  number: 1,
                  title: 'Partner with Platform',
                  description: 'Low control. Light-touch. Fast entry via marketplaces like Vinted, Vestiaire.',
                  color: '#2A5245',
                  width: '70%'
                },
              ]}
              isInView={isInView}
            />
          </motion.div>
        </div>

        <SourceBox
          isInView={isInView}
          text="Euromonitor · Company Reports · ThredUp Resale Report 2026"
          dark
        />
      </div>
    </section>
  );
}

function ResaleColumnChart({ isInView }: any) {
  const data = [
    { year: '2023', value: 197, height: 62, color: '#8B7AC8', opacity: 0.25 },
    { year: '2025E', value: 256, height: 81, color: '#8B7AC8', opacity: 0.35 },
    { year: '2027E', value: 317, height: 100, color: '#8B7AC8', opacity: 0.5 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="rounded-[24px] p-8 bg-[#162D26] border border-[#1E3D33]"
    >
      <div className="text-[11px] font-semibold tracking-[3px] uppercase text-[#8B7AC8] mb-6">
        Global Resale Market Trajectory
      </div>

      <div className="flex items-end gap-5 h-40 mb-6">
        {data.map((item, i) => (
          <div key={i} className="flex-1 text-center">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: `${item.height}%` } : {}}
              transition={{ duration: 1, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
              className="rounded-t-xl flex items-start justify-center pt-3"
              style={{ 
                backgroundColor: `${item.color}${Math.round(item.opacity * 255).toString(16).padStart(2, '0')}`,
              }}
            >
              <span className="text-[20px] font-light" style={{ fontFamily: 'Georgia, serif', color: i === 2 ? '#FAF9F7' : item.color }}>
                ${item.value}B
              </span>
            </motion.div>
            <div className="text-[11px] text-[#7C7D79] mt-2 font-mono">
              {item.year}
            </div>
          </div>
        ))}
      </div>

      <div className="text-[12px] leading-[1.75] text-[#D4E6D0]/70">
        CAGR 12–13%. Asia largest and fastest-growing. China luxury resale alone expected to reach $33B by 2025.
      </div>
    </motion.div>
  );
}

// ============================================================================
// SECTION 9: ELEVATION GAME
// ============================================================================

function ElevationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F5F3EF] relative">
      <div className="max-w-[1200px] mx-auto px-14">
        <SectionHeader
          number="09"
          title="The Elevation Game"
          subtitle="Mid-market becomes fashion's fastest-growing segment as value brands elevate"
          description="While luxury stumbles with price-led growth, design-led mid-market brands like COS, Bershka and H&M are capturing consumers trading both up and down. The 'bridge' between mass and luxury is where growth lives."
          accentColor="#3A8A7A"
          isInView={isInView}
          light
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-[22px] p-10 bg-[#3A8A7A]/08 border-l-3 mb-8"
          style={{ borderLeftColor: '#3A8A7A' }}
        >
          <div className="text-[clamp(16px,2vw,22px)] font-light leading-[1.7] italic text-[#191918] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            "It's so easy to talk about the ambition of generating elevation, but unless you have a product actually meeting that feeling, everything you do becomes unnecessary in a way."
          </div>
          <div className="text-[12px] text-[#7C7D79]">
            — Daniel Herrmann, Managing Director, COS
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              label: 'Value Brands Elevating', 
              value: '15–25%', 
              title: 'Reduction in lowest-price SKUs (UK, 2023–25)',
              description: 'Bershka and H&M cutting bottom-tier products, investing in design and materials. COS landed in Lyst Top 10 hottest brands.',
              color: '#3A8A7A'
            },
            { 
              label: 'Consumer Behaviour', 
              value: '60%+', 
              title: 'European consumers plan to trade down in Q4 2025',
              description: 'Value-conscious behaviour persists across income levels. Even luxury shoppers seeking better price-to-quality ratios.',
              color: '#3A8A7A'
            },
            { 
              label: 'Industry Structure', 
              value: '+1.5pp', 
              title: 'Operating margin improvement post-pandemic',
              description: 'Industry avg from 7.9% to 9.3%. Capital intensity down 4.7pp. Structurally stronger but growth remains elusive.',
              color: '#3A8A7A'
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
              className="rounded-[24px] p-8 bg-[#3A8A7A]/8 border border-[#3A8A7A]/20 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="text-[11px] font-semibold tracking-[3px] uppercase mb-4" style={{ color: item.color }}>
                {item.label}
              </div>
              <div className="text-[clamp(32px,5vw,48px)] font-light tracking-[-2px] leading-none mb-3" style={{ fontFamily: 'Georgia, serif', color: item.color }}>
                {item.value}
              </div>
              <div className="text-[14px] font-medium text-[#191918] mb-3 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                {item.title}
              </div>
              <div className="text-[12px] leading-[1.75] text-[#1E3D33]/70">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>

        <SourceBox
          isInView={isInView}
          text="Market Analysis · Lyst Data · McKinsey Fashion Analytics"
          light
        />
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 10: LUXURY RECALIBRATED
// ============================================================================

function LuxurySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0E1A17] to-[#0A211F] relative">
      <div className="max-w-[1200px] mx-auto px-14">
        <SectionHeader
          number="10"
          title="Luxury Recalibrated"
          subtitle="80% of luxury growth was price-driven — now brands must rebuild trust through craft"
          description="Nine of 15 largest luxury brands replaced creative directors in 12 months. 35% of aspirational customers pulled back on spending. The era of relentless price hikes is ending; creativity and craftsmanship must return."
          accentColor="#6B9D89"
          isInView={isInView}
        />

        <div className="grid md:grid-cols-[1.3fr_1fr_1fr] gap-6 mt-12">
          <CircularProgressCard
            label="The Great Creative Reset"
            value="9"
            subtitle="of 15 top brands\nnew creative directors"
            description="Jonathan Anderson at Dior. Matthieu Blazy at Chanel. McCollough & Hernandez at Loewe. The most ambitious creative reshuffling in luxury history."
            percentage={60}
            color="#6B9D89"
            isInView={isInView}
            delay={0.2}
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-[24px] p-8 bg-[#162D26] border border-[#1E3D33]"
          >
            <div className="text-[11px] font-semibold tracking-[3px] uppercase text-[#6B9D89] mb-4">
              What Luxury Means Now
            </div>
            <div className="text-[13px] text-[#FAF9F7] mb-3">
              #1 attribute HNW customers cite:
            </div>
            <div className="text-[26px] font-light tracking-tight text-[#6B9D89] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              "Expertise & Quality"
            </div>
            <div className="text-[12px] leading-[1.75] text-[#D4E6D0]/70 mb-4">
              81% of under-35s cite design and creativity as primary driver. Gen Z and Millennials rank exclusivity 11pp above average.
            </div>
            <div className="mt-4 p-4 rounded-xl bg-[#0E3E1B]/30 border-l-2 border-[#6B9D89]">
              <div className="text-[11px] leading-[1.6] text-[#D4E6D0]/80">
                67% of consumers believe luxury brands should operate ethically across the value chain — trust is now table stakes.
              </div>
            </div>
          </motion.div>

          <MetricCard
            label="Aspirational Retreat"
            value="35%"
            title="Of aspirational customers pulled back"
            description="Spending €3K–€10K annually. Price increases without quality improvements alienated this critical segment."
            example="EBITA margin polarisation widened 2.5pp since 2021. Winners focused on hard luxury (jewellery) and ultra-HNW clients."
            color="#6B9D89"
            isInView={isInView}
            delay={0.4}
          />
        </div>

        <SourceBox
          isInView={isInView}
          text="BoF Analysis · HNW Consumer Surveys · Bain Luxury Study 2026"
          dark
        />
      </div>
    </section>
  );
}

// ============================================================================
// CLOSING SECTION
// ============================================================================

function ClosingSection({ onNavigate }: { onNavigate?: (route: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#FAF9F7] to-[#F5F3EF] relative">
      <div className="max-w-[1200px] mx-auto px-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="text-[12px] font-semibold tracking-[6px] uppercase text-[#0D5F4E] mb-6">
            § · Strategic Imperative
          </div>
          <h2 
            className="text-[clamp(28px,5vw,48px)] font-light leading-[1.15] tracking-[-1px] text-[#191918] max-w-[700px] mx-auto"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            In a flat market, only brands that <span className="italic text-[#0D5F4E]">capture hearts and minds</span> will grow
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[14px] leading-[1.9] max-w-[640px] mx-auto text-[#1E3D33] mb-12"
        >
          The ten themes of 2026 converge on one reality: fashion must simultaneously navigate tariff turbulence, AI transformation, consumer identity shifts and a luxury recalibration — all while becoming radically more efficient. <strong className="text-[#0D5F4E]">The winners will be those who move fastest.</strong>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-[22px] p-8 bg-white border border-[#EEF3E4] text-left"
          >
            <div className="text-[clamp(15px,1.8vw,19px)] font-light leading-[1.7] italic text-[#191918] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              "Challenging" has overtaken "uncertainty" as the word executives most frequently use to describe the industry in 2026.
            </div>
            <div className="text-[11px] text-[#7C7D79]">
              — BoF-McKinsey Executive Survey
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="rounded-[22px] p-8 bg-white border border-[#EEF3E4] text-left"
          >
            <div className="text-[clamp(15px,1.8vw,19px)] font-light leading-[1.7] italic text-[#191918] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              "Venture into wearables when you're ready. But I think it's important. Wearables are only going to increase and evolve."
            </div>
            <div className="text-[11px] text-[#7C7D79]">
              — Rocco Basilico, Chief Wearables Officer, EssilorLuxottica
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#EEF3E4] border border-[#D4E6D0]"
        >
          <div className="text-[11px] font-semibold tracking-[2px] uppercase text-[#0D5F4E]">
            Report
          </div>
          <a
            href="https://www.businessoffashion.com/reports/state-of-fashion/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono text-[#7C7D79] hover:text-[#0D5F4E] transition-colors flex items-center gap-2"
          >
            The State of Fashion 2026 · BoF × McKinsey & Company
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>

        <div className="text-[11px] text-[#7C7D79]/40 mt-12">
          Visual Intelligence Report · February 2026
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SHARED COMPONENTS
// ============================================================================

function SectionHeader({ number, title, subtitle, description, accentColor, isInView, light = false }: any) {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-4 mb-6"
      >
        <div className={`text-[40px] font-light opacity-40`} style={{ fontFamily: 'Georgia, serif', color: accentColor }}>
          {number}
        </div>
        <div className="flex-1">
          <div className="text-[12px] font-semibold tracking-[4px] uppercase mb-2" style={{ color: accentColor }}>
            Section {number}
          </div>
          <h2 className={`text-[clamp(28px,4.5vw,52px)] font-light leading-[1.1] tracking-[-1px] ${light ? 'text-[#191918]' : 'text-[#FAF9F7]'}`} style={{ fontFamily: 'Georgia, serif' }}>
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
        <div className={`text-[16px] font-medium mb-3 italic`} style={{ fontFamily: 'Georgia, serif', color: accentColor }}>
          {subtitle}
        </div>
        <div className={`text-[14px] leading-[1.85] max-w-[680px] ${light ? 'text-[#7C7D79]' : 'text-[#D4E6D0]'}`}>
          {description}
        </div>
      </motion.div>
    </div>
  );
}

function SourceBox({ isInView, text, dark = false, light = false }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={`mt-16 px-6 py-4 rounded-[18px] inline-flex items-center gap-3 ${
        light
          ? 'bg-[#EEF3E4] border border-[#D4E6D0] text-[#0D5F4E]'
          : 'bg-[rgba(14,26,23,0.4)] border border-[#1E3D33] text-[#6B9D89]'
      }`}
    >
      <div className={`font-semibold uppercase tracking-[2.5px] text-[11px]`}>
        Source
      </div>
      <div className={`font-mono text-[11px]`}>
        {text}
      </div>
    </motion.div>
  );
}

function CircularProgressCard({ label, value, subtitle, description, percentage, color, isInView, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="rounded-[24px] p-8 bg-[#162D26] border border-[#1E3D33]"
    >
      <div className="text-[11px] font-semibold tracking-[3px] uppercase mb-6" style={{ color }}>
        {label}
      </div>

      <svg viewBox="0 0 240 240" className="w-full max-w-[220px] mx-auto mb-6">
        <circle cx="120" cy="120" r="100" fill="none" stroke="rgba(90,61,78,.12)" strokeWidth="18"/>
        <motion.circle 
          cx="120" 
          cy="120" 
          r="100" 
          fill="none" 
          stroke={color}
          strokeWidth="18"
          strokeDasharray="628"
          strokeLinecap="round"
          transform="rotate(-90 120 120)"
          initial={{ strokeDashoffset: 628 }}
          animate={isInView ? { strokeDashoffset: 628 - (628 * percentage / 100) } : {}}
          transition={{ duration: 2, delay: delay + 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <text x="120" y="115" textAnchor="middle" fontFamily="Georgia, serif" fontSize="42" fontWeight="300" fill="#FAF9F7">{value}</text>
        <text x="120" y="140" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="500" fill="#7C7D79" style={{ whiteSpace: 'pre-line' }}>{subtitle.split('\n')[0]}</text>
        <text x="120" y="155" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="500" fill="#7C7D79">{subtitle.split('\n')[1]}</text>
      </svg>

      <div className="text-[12px] leading-[1.75] text-[#D4E6D0]/70">
        {description}
      </div>
    </motion.div>
  );
}

function MetricCard({ label, value, title, description, example, color, isInView, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="rounded-[24px] p-8 bg-[#162D26] border border-[#1E3D33]"
    >
      <div className="text-[11px] font-semibold tracking-[3px] uppercase mb-4" style={{ color }}>
        {label}
      </div>
      <div className="text-[clamp(32px,5vw,48px)] font-light tracking-[-2px] leading-none mb-3" style={{ fontFamily: 'Georgia, serif', color }}>
        {value}
      </div>
      <div className="text-[14px] font-medium text-[#FAF9F7] mb-3 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
        {title}
      </div>
      <div className="text-[12px] leading-[1.75] text-[#D4E6D0]/70 mb-4">
        {description}
      </div>
      {example && (
        <div className="mt-4 p-4 rounded-xl bg-[#0E3E1B]/30 border-l-2" style={{ borderColor: color }}>
          <div className="text-[11px] leading-[1.6] text-[#D4E6D0]/80">
            {example}
          </div>
        </div>
      )}
    </motion.div>
  );
}
