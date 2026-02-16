'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  TrendingUp,
  Search,
  Award,
  Scale,
  Store,
  FileText,
  CheckCircle,
  Globe,
  Users,
  Zap,
  Target
} from 'lucide-react';

interface BCGInfographicProps {
  onNavigate?: (route: string) => void;
}

export default function BCGInfographic({ onNavigate }: BCGInfographicProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrollProgress(latest);
    });
  }, [scrollYProgress]);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2D6B4D] to-[#6b9d89] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <Header onNavigate={onNavigate} />

      {/* Hero Section */}
      <HeroSection />

      {/* Context Intro */}
      <ContextSection />

      {/* Exhibit 1: Adoption Growth (Luxury Executive Style) */}
      <Exhibit1AdoptionGrowth />

      {/* Exhibit 2: Purchase Pathway */}
      <Exhibit2PurchasePathway />

      {/* Exhibit 3: Category Penetration */}
      <Exhibit3CategoryPenetration />

      {/* Global Insights */}
      <GlobalInsights />

      {/* Consumer Perception */}
      <ConsumerPerception />

      {/* Strategic Implications */}
      <StrategicImplications />

      {/* Methodology */}
      <MethodologySection />

      {/* Footer */}
      <FooterSection onNavigate={onNavigate} />
    </div>
  );
}

// ============================================================================
// HEADER COMPONENT
// ============================================================================

function Header({ onNavigate }: { onNavigate?: (route: string) => void }) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-[#E6E2DC]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate?.('home-v8')}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-[#2D6B4D] rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">S</span>
              </div>
              <span className="text-lg font-light text-[#1E1E1C] hidden md:block">StartupAI</span>
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-[#8A8580]">
              <Globe className="w-4 h-4" />
              <span>BCG × AI Industry Infographic</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#F5F3EF] hover:bg-[#E6E2DC] text-[#1E1E1C] text-sm font-medium rounded-lg transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-[#2D6B4D] hover:bg-[#1A4A33] text-white text-sm font-medium rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              <span className="hidden md:inline">Export PDF</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

// ============================================================================
// HERO SECTION - Strategic Editorial Introduction
// ============================================================================

function HeroSection() {
  return (
    <section className="py-32 lg:py-44 px-6 md:px-10 bg-white">
      <div className="max-w-[1100px] mx-auto">
        {/* Split Layout: 12-column grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left 6 columns: Text content */}
          <div className="lg:col-span-6">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[12px] uppercase tracking-[0.12em] text-[#2D6B4D] font-medium mb-8"
            >
              GENAI & CONSUMER BEHAVIOR 2025
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[48px] md:text-[56px] leading-[1.1] font-medium text-[#1E1E1C] mb-8 max-w-[800px]"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", serif' }}
            >
              Generative AI Is Reshaping the Consumer Decision Journey
            </motion.h1>

            {/* Strategic Framing Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-[18px] leading-[1.7] text-[#4F4F4F] mb-8 max-w-[720px]"
            >
              Consumers are no longer relying solely on traditional search and brand channels. 
              Generative AI is emerging as a primary interface for research, evaluation, and 
              purchase decisions across categories — fundamentally altering how brands compete 
              for attention and trust.
            </motion.p>

            {/* Supporting Evidence Line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-flex items-baseline gap-2 text-[18px] font-medium text-[#1E1E1C]"
            >
              <span className="text-[#2D6B4D] border-b-2 border-[#2D6B4D]/30">62%</span>
              <span className="font-normal text-[#4F4F4F]">of consumers now use GenAI for research and information.</span>
            </motion.div>
          </div>

          {/* Right 6 columns: Abstract AI Visual */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.5 }}
              className="relative w-full h-[420px] md:h-[480px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0F3D2E] via-[#1a5a45] to-[#0a2a1f]"
            >
              {/* Subtle particle effect overlay */}
              <div className="absolute inset-0 opacity-20">
                <div 
                  className="absolute inset-0" 
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                  }}
                />
              </div>
              
              {/* Radial glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D6B4D]/40 via-transparent to-transparent opacity-60" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CONTEXT SECTION - Study Overview
// ============================================================================

function ContextSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 px-6 md:px-10 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[840px] mx-auto"
      >
        <div className="bg-[#FAFAF8] border border-[#E6E2DC] rounded-2xl p-8 md:p-10">
          <div className="text-xs font-semibold text-[#2D6B4D] uppercase tracking-[0.15em] mb-6">
            About This Research
          </div>

          <p className="text-base text-[#4A4744] leading-relaxed mb-8">
            The BCG Center for Consumer Insight surveyed <strong>9,000+ consumers</strong> across 
            9 countries to understand how GenAI is reshaping shopping behaviors and brand interactions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Respondents', value: '9,000+' },
              { label: 'Countries', value: '9' },
              { label: 'Conducted', value: 'Nov 2025' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-[#E8F2EC] rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-light text-[#2D6B4D] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  {stat.value}
                </div>
                <div className="text-xs text-[#8A8580] uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-[#8A8580] mt-6">
            Countries: Brazil, China, France, Germany, India, Japan, Mexico, United Kingdom, United States
          </p>
        </div>
      </motion.div>
    </section>
  );
}

// ============================================================================
// EXHIBIT 1 - Adoption Growth (Luxury Executive Style)
// ============================================================================

function Exhibit1AdoptionGrowth() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const behaviors = [
    { label: 'For general information\nseeking/research\nassistance', baseline: 43, current: 62, delta: '+20' },
    { label: 'At work/for\nwork purposes', baseline: 31, current: 46, delta: '+15' },
    { label: 'Researching brands\nor products/seeking\nrecommendations', baseline: 0, current: 43, delta: 'NEW' },
    { label: 'Language\ntranslation', baseline: 26, current: 40, delta: '+14' },
    { label: 'As a personal\nassistant/for support\nwith daily tasks', baseline: 22, current: 37, delta: '+15' },
    { label: 'Just to play\naround', baseline: 27, current: 30, delta: '+2' },
    { label: 'To create a\ntravel plan', baseline: 13, current: 23, delta: '+11' },
    { label: 'Health care\nsupport', baseline: 13, current: 18, delta: '+5' },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 px-6 md:px-10 bg-gradient-to-b from-white to-[#FAFAF8]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Refined Container with Subtle Elevation */}
        <div className="bg-white/60 backdrop-blur-sm border border-[#E6E2DC]/50 rounded-3xl p-8 md:p-12 lg:p-16 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
          
          {/* Exhibit Header - Enhanced Typography */}
          <div className="mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#2D6B4D]" />
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#2D6B4D] font-semibold">
                EXHIBIT 1
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.15] font-normal text-[#1E1E1C] max-w-[1000px] tracking-[-0.01em]"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", serif' }}
            >
              Consumers Increasingly Use GenAI as Part of Everyday Behaviors
            </motion.h2>

            {/* Subheader - Context Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 flex items-center gap-4"
            >
              <span className="text-[13px] text-[#6B6B6B] font-medium">
                Change since 2023 (percentage points)
              </span>
              <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-[#E6E2DC] to-transparent" />
            </motion.div>
          </div>

          {/* Chart Grid - Premium Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-8 mb-16">
            {behaviors.map((behavior, index) => (
              <LuxuryComparisonChart
                key={index}
                label={behavior.label}
                baseline={behavior.baseline}
                current={behavior.current}
                delta={behavior.delta}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Legend - Refined Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center gap-10 py-6 mb-12 border-y border-[#E6E2DC]/50"
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-3 rounded-sm bg-[#0F3D2E] shadow-sm" />
              <span className="text-[13px] text-[#6B6B6B] font-medium">2023</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-3 rounded-sm bg-[#2DBE60] shadow-sm" />
              <span className="text-[13px] text-[#6B6B6B] font-medium">2025</span>
            </div>
          </motion.div>

          {/* Insight Callout - Premium Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative bg-gradient-to-br from-[#E8F2EC] to-[#E8F2EC]/70 border border-[#2D6B4D]/10 rounded-2xl p-8 overflow-hidden"
          >
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D6B4D]/5 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <div className="relative flex items-start gap-4">
              <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-[#2D6B4D] to-[#6b9d89] rounded-full" />
              <div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-[#2D6B4D] font-semibold mb-3">
                  KEY INSIGHT
                </div>
                <p className="text-[16px] lg:text-[17px] text-[#1E1E1C] leading-[1.65] max-w-[900px] font-normal">
                  GenAI adoption is expanding beyond general research into operational and transactional use cases, 
                  with particularly strong growth in brand research (+43pp), work purposes (+15pp), and personal 
                  assistance (+15pp) — signaling a fundamental shift in how consumers interact with AI technology.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Footer - Refined Typography */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-10 pt-8 border-t border-[#E6E2DC]/50 text-[11px] text-[#8A8580] leading-relaxed space-y-1"
          >
            <p><span className="font-semibold">Sources:</span> BCG CCI Global Consumer Radar surveys, September 2023, October 2025</p>
            <p><span className="font-semibold">Note:</span> Data shown are for respondents in the US, UK, Germany, France, Japan, China, India, Brazil, and Mexico. Respondents were asked, "How have you personally used GenAI tools (e.g., ChatGPT, Microsoft Copilot, Google Gemini)?"; n = 4,151–4,278; NA = not available. Numbers reflect rounding.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ============================================================================
// EXHIBIT 2 - Purchase Pathway Functions
// ============================================================================

function Exhibit2PurchasePathway() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const pathways = [
    { icon: Search, label: 'Comparing prices and seeking deals', primary: true },
    { icon: Award, label: 'Searching for recommendations', primary: true },
    { icon: Scale, label: 'Comparing products and features', primary: false },
    { icon: Store, label: 'Discovering where to buy', primary: true },
    { icon: FileText, label: 'Summarizing reviews', primary: false },
  ];

  return (
    <section ref={ref} className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <ExhibitHeader
          number={2}
          title="How GenAI Plays a Role Along Purchase Pathways"
          isInView={isInView}
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {pathways.map((pathway, index) => (
            <IconCard
              key={index}
              icon={pathway.icon}
              label={pathway.label}
              primary={pathway.primary}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        <ExhibitFooter
          source="BCG CCI GenAI Consumer Usage survey, November 2025"
          note="n = 367 (consumers who use GenAI in purchase journey)"
          isInView={isInView}
        />
      </div>
    </section>
  );
}

// ============================================================================
// EXHIBIT 3 - Category Penetration
// ============================================================================

function Exhibit3CategoryPenetration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = [
    { label: 'Consumer electronics', value: 60, icon: '🎧' },
    { label: 'Travel', value: 51, icon: '✈️' },
    { label: 'Grocery/food or beverage', value: 44, icon: '🛒' },
    { label: 'Apparel/footwear', value: 43, icon: '👕' },
    { label: 'Entertainment', value: 43, icon: '🎬' },
    { label: 'Services', value: 41, icon: '🔧' },
    { label: 'Beauty/personal care', value: 37, icon: '💄' },
    { label: 'Health care', value: 33, icon: '🏥' },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 px-6 md:px-10 bg-gradient-to-b from-[#FAFAF8] to-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Refined Container */}
        <div className="bg-white/60 backdrop-blur-sm border border-[#E6E2DC]/50 rounded-3xl p-8 md:p-12 lg:p-16 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
          
          {/* Exhibit Header */}
          <div className="mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#2D6B4D]" />
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#2D6B4D] font-semibold">
                EXHIBIT 3
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.15] font-normal text-[#1E1E1C] max-w-[1000px] tracking-[-0.01em]"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", serif' }}
            >
              AI Is Used Nearly Everywhere, from Electronics to Everyday Essentials
            </motion.h2>

            {/* Subheader */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 flex items-center gap-4"
            >
              <span className="text-[13px] text-[#6B6B6B] font-medium">
                % of respondents using AI as part of the research or purchase process
              </span>
              <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-[#E6E2DC] to-transparent" />
            </motion.div>
          </div>

          {/* 1x2 Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left Column: Horizontal Bars with Icons */}
            <div className="space-y-5">
              {categories.map((category, index) => (
                <LuxuryHorizontalBar
                  key={category.label}
                  label={category.label}
                  value={category.value}
                  icon={category.icon}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>

            {/* Right Column: Donut Chart */}
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <LuxuryDonutChart
                  percentage={64}
                  description="of consumers who use AI in the purchase journey use it in 3 or more product and service categories"
                  size={280}
                  isInView={isInView}
                />
              </motion.div>
            </div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-16 pt-8 border-t border-[#E6E2DC]/50 text-[11px] text-[#8A8580] leading-relaxed space-y-1"
          >
            <p><span className="font-semibold">Source:</span> BCG CCI GenAI Consumer Usage survey, November 2025.</p>
            <p><span className="font-semibold">Note:</span> Respondents were asked, "In which categories have you used AI as part of the research or purchase process?"; based on large-scale qualitative research analyzed using AI to identify themes and insights; n = 367.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ============================================================================
// GLOBAL INSIGHTS
// ============================================================================

function GlobalInsights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const countries = [
    { name: 'INDIA', awareness: 94, usage: 62, badge: '🏆 Highest globally' },
    { name: 'CHINA', awareness: 88, usage: 58, badge: 'Strong adoption' },
    { name: 'US', awareness: 76, usage: 42, badge: 'Growing interest' },
    { name: 'JAPAN', awareness: 68, usage: 31, badge: 'Cautious adopters' },
  ];

  return (
    <section ref={ref} className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="text-xs font-semibold text-[#2D6B4D] uppercase tracking-[0.15em] mb-4">
            Global Insights
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-[#1E1E1C]">
            How AI Adoption Varies by Country
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {countries.map((country, index) => (
            <CountryCard
              key={country.name}
              country={country}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[#E8F2EC] border-l-4 border-[#2D6B4D] rounded-lg p-6"
        >
          <div className="text-xs font-semibold text-[#2D6B4D] uppercase tracking-[0.15em] mb-3">
            Key Insight
          </div>
          <p className="text-sm text-[#4A4744] leading-relaxed">
            India leads both awareness (94%) and usage (62%) among countries surveyed. 
            Cultural comfort with technology and mobile-first behaviors drive early GenAI 
            adoption for shopping and research.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// CONSUMER PERCEPTION
// ============================================================================

function ConsumerPerception() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const perceptions = [
    { title: 'DIRECT', quote: 'No sales pressure', stat: '89% agree' },
    { title: 'OBJECTIVE', quote: 'No brand bias', stat: '81% trust AI results' },
    { title: 'TRANSPARENT', quote: 'Shows sources', stat: '74% value citations' },
  ];

  return (
    <section ref={ref} className="py-20 px-6 md:px-10 bg-[#FAFAF8]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="text-xs font-semibold text-[#2D6B4D] uppercase tracking-[0.15em] mb-4">
            What Consumers Value
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-[#1E1E1C] mb-4">
            "Direct, Objective, Transparent, Personalized"
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {perceptions.map((perception, index) => (
            <motion.div
              key={perception.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="bg-[#E8F2EC] border-l-4 border-[#2D6B4D] rounded-xl p-6"
            >
              <div className="text-lg font-semibold text-[#2D6B4D] mb-3">
                {perception.title}
              </div>
              <p className="text-sm italic text-[#4A4744] mb-4">
                "{perception.quote}"
              </p>
              <div className="text-2xl font-light text-[#2D6B4D]" style={{ fontFamily: 'Georgia, serif' }}>
                {perception.stat}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sentiment Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white border border-[#E6E2DC] rounded-2xl p-8"
        >
          <div className="text-xs font-semibold text-[#8A8580] uppercase tracking-wider mb-4">
            Overall Sentiment
          </div>
          <div className="flex items-stretch h-16 rounded-lg overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '76%' } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="bg-[#2D6B4D] flex items-center justify-center text-white text-sm font-semibold"
            >
              76% Positive
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '18%' } : {}}
              transition={{ duration: 1, delay: 1.0 }}
              className="bg-[#8B7E6E] flex items-center justify-center text-white text-xs font-semibold"
            >
              18%
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '6%' } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="bg-[#999] flex items-center justify-center text-white text-xs"
            >
              6%
            </motion.div>
          </div>
          <div className="flex justify-between text-xs text-[#8A8580] mt-3">
            <span>Positive</span>
            <span>Neutral</span>
            <span>Negative</span>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-10 bg-[#F5F3EF] rounded-2xl p-8 border border-[#E6E2DC]"
        >
          <p className="text-lg italic text-[#4A4744] leading-relaxed mb-4">
            "It helped clarify what I wanted when I wasn't sure."
          </p>
          <div className="text-sm text-[#8A8580]">
            — Survey respondent, US, Age 28
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// STRATEGIC IMPLICATIONS - Flowchart
// ============================================================================

function StrategicImplications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs font-semibold text-[#2D6B4D] uppercase tracking-[0.15em] mb-4">
            Strategic Implications
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-[#1E1E1C]">
            What Brands Must Do
          </h2>
        </motion.div>

        {/* Flowchart */}
        <div className="space-y-8">
          {/* Start Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#2D6B4D] text-white rounded-xl p-8 text-center"
          >
            <div className="text-xs font-semibold uppercase tracking-wider mb-3">
              Consumer Reality
            </div>
            <div className="text-2xl font-light mb-2">62% use GenAI for research</div>
            <div className="text-sm opacity-90">Brands cannot ignore this shift</div>
          </motion.div>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-[2px] h-12 bg-[#2D6B4D] origin-top"
            />
          </div>

          {/* Action Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'OPTIMIZE',
                items: ['SEO for AI crawlers', 'Clear structured data', 'Updated FAQs'],
              },
              {
                title: 'PROVIDE',
                items: ['Structured product data', 'Rich descriptions', 'Comparison tables'],
              },
              {
                title: 'ENSURE',
                items: ['Accurate information', 'Source attribution', 'Fresh content'],
              },
            ].map((box, index) => (
              <motion.div
                key={box.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white border-2 border-[#2D6B4D] rounded-xl p-6"
              >
                <div className="text-sm font-semibold text-[#2D6B4D] mb-4">
                  {box.title}
                </div>
                <ul className="space-y-2">
                  {box.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#4A4744]">
                      <CheckCircle className="w-4 h-4 text-[#2D6B4D] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="w-[2px] h-12 bg-[#2D6B4D] origin-top"
            />
          </div>

          {/* Outcome Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="bg-[#E8F2EC] border-2 border-[#2D6B4D] rounded-xl p-8 text-center"
          >
            <div className="text-xs font-semibold text-[#2D6B4D] uppercase tracking-wider mb-3">
              Competitive Advantage
            </div>
            <div className="text-xl text-[#1E1E1C] leading-relaxed">
              Brands that adapt will capture the growing share of GenAI-driven shoppers
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// METHODOLOGY SECTION
// ============================================================================

function MethodologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 px-6 md:px-10 bg-[#FAFAF8]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[840px] mx-auto"
      >
        <div className="bg-white border border-[#E6E2DC] rounded-2xl p-8 md:p-10">
          <div className="text-xs font-semibold text-[#2D6B4D] uppercase tracking-[0.15em] mb-6">
            Research Methodology
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-sm font-semibold text-[#1E1E1C] mb-2">Source Details</div>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                BCG Center for Consumer Insight (CCI)<br />
                GenAI Consumer Usage Survey<br />
                November 2025
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold text-[#1E1E1C] mb-2">Sample</div>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                n = 9,000+ consumers<br />
                Countries: Brazil, China, France, Germany, India, Japan, Mexico, United Kingdom, United States
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold text-[#1E1E1C] mb-2">Methodology</div>
              <p className="text-sm text-[#4A4744] leading-relaxed">
                Online survey with representative sampling by age, gender, and region
              </p>
            </div>

            <div className="pt-6 border-t border-[#E6E2DC]">
              <div className="text-sm font-semibold text-[#1E1E1C] mb-2">Related Publications</div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-[#2D6B4D]">
                  <span>→</span>
                  <span>"Consumers Trust AI to Buy Better" — BCG, December 2025</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#2D6B4D]">
                  <span>→</span>
                  <span>"The GenAI Shopping Revolution" — BCG CCI, 2025</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#E6E2DC] bg-[#F5F3EF] -mx-8 md:-mx-10 px-8 md:px-10 py-6 rounded-b-2xl">
              <div className="text-xs font-semibold text-[#8A8580] uppercase tracking-wider mb-2">
                Adaptation Note
              </div>
              <p className="text-xs text-[#8A8580] leading-relaxed">
                This infographic was designed by StartupAI using BCG-published data and design principles. 
                All data sourced from BCG Center for Consumer Insight.
              </p>
            </div>
          </div>
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
    <footer className="py-16 px-6 md:px-10 bg-white border-t border-[#E6E2DC]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <motion.button
            onClick={() => onNavigate?.('home-v8')}
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-sm text-[#2D6B4D] hover:text-[#1A4A33] font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Resources</span>
          </motion.button>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#F5F3EF] hover:bg-[#E6E2DC] text-[#1E1E1C] text-sm font-medium rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Export PDF</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#2D6B4D] hover:bg-[#1A4A33] text-white text-sm font-medium rounded-lg transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </motion.button>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 py-10 border-t border-[#E6E2DC]">
          <div>
            <h3 className="text-lg mb-6 font-light tracking-tight text-[#1E1E1C]">Resources</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => onNavigate?.('bcg-ai-consumer')}
                  className="text-sm text-[#676F7E] hover:text-[#2D6B4D] transition-colors"
                >
                  GenAI Consumer Report
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('ai-industry-use-cases')}
                  className="text-sm text-[#676F7E] hover:text-[#2D6B4D] transition-colors"
                >
                  AI Industry Use Cases
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-[#8A8580]">
          StartupAI © 2026 • Data: BCG CCI • Design: StartupAI
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// REUSABLE COMPONENTS
// ============================================================================

// Animated Counter
function AnimatedCounter({
  from,
  to,
  duration,
  delay,
  className,
  suffix = '',
  fontFamily = 'sans-serif',
}: {
  from: number;
  to: number;
  duration: number;
  delay: number;
  className?: string;
  suffix?: string;
  fontFamily?: string;
}) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        const current = Math.floor(from + (to - from) * eased);
        
        setCount(current);
        
        if (progress === 1) {
          clearInterval(interval);
        }
      }, 16);
      
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [from, to, duration, delay]);

  return (
    <span className={className} style={{ fontFamily }}>
      {count}{suffix}
    </span>
  );
}

// Animated Donut Chart
function AnimatedDonut({
  percentage,
  description,
  size = 200,
}: {
  percentage: number;
  description: string;
  size?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const radius = (size - 24) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#E6E2DC"
            strokeWidth="12"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#2D6B4D"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isVisible ? { strokeDashoffset } : {}}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          />
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <AnimatedCounter
            from={0}
            to={percentage}
            duration={1200}
            delay={isVisible ? 200 : 0}
            className="text-4xl font-light text-[#2D6B4D]"
            suffix="%"
            fontFamily="Georgia, serif"
          />
        </div>
      </div>
      
      <p className="text-sm text-center text-[#2D6B4D] max-w-[220px] mt-4 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// Exhibit Header
function ExhibitHeader({
  number,
  title,
  isInView,
}: {
  number: number;
  title: string;
  isInView: boolean;
}) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-xs font-semibold text-[#2D6B4D] uppercase tracking-[0.15em] mb-3"
      >
        EXHIBIT {number}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl md:text-3xl font-light text-[#1E1E1C] max-w-3xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}

// Exhibit Footer
function ExhibitFooter({
  source,
  note,
  isInView,
}: {
  source: string;
  note?: string;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mt-8 pt-6 border-t border-[#E6E2DC] text-xs text-[#8A8580] leading-relaxed"
    >
      <p><strong>Source:</strong> {source}</p>
      {note && <p className="mt-1"><strong>Note:</strong> {note}</p>}
    </motion.div>
  );
}

// Comparison Chart
function ComparisonChart({
  label,
  baseline,
  current,
  delta,
  index,
  isInView,
}: {
  label: string;
  baseline: number;
  current: number;
  delta: string;
  index: number;
  isInView: boolean;
}) {
  const [baselineCount, setBaselineCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);
  const [showDelta, setShowDelta] = useState(false);

  // Animate numbers inside bars
  useEffect(() => {
    if (!isInView) return;

    const startDelay = 500 + index * 100; // Staggered start
    const duration = 800; // Animation duration

    const timer = setTimeout(() => {
      const startTime = Date.now();
      
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        
        setBaselineCount(Math.floor(baseline * eased));
        setCurrentCount(Math.floor(current * eased));
        
        if (progress === 1) {
          clearInterval(interval);
          // Show delta after bars complete
          setTimeout(() => setShowDelta(true), 200);
        }
      }, 16);
      
      return () => clearInterval(interval);
    }, startDelay);
    
    return () => clearTimeout(timer);
  }, [isInView, baseline, current, index]);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Label - Top */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
        className="text-[14px] text-[#6B6B6B] text-center whitespace-pre-line leading-tight h-10"
      >
        {label}
      </motion.div>

      {/* Bars Container */}
      <div className="flex items-end justify-center gap-3 h-48">
        {/* 2023 Bar (Baseline) */}
        {baseline > 0 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.5 + index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-7 bg-[#0F3D2E] rounded origin-bottom flex items-center justify-center"
            style={{ height: `${(baseline / 100) * 180}px`, minHeight: '32px' }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              className="text-xs font-semibold text-white"
            >
              {baselineCount}
            </motion.span>
          </motion.div>
        )}
        
        {/* 2024 Bar (Current) */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.6 + index * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-7 bg-[#2DBE60] rounded origin-bottom flex items-center justify-center"
          style={{ height: `${(current / 100) * 180}px`, minHeight: '32px' }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
            className="text-xs font-semibold text-white"
          >
            {currentCount}
          </motion.span>
        </motion.div>
      </div>

      {/* Delta - Bottom with Pulse */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={showDelta ? { 
          opacity: 1, 
          scale: [0.8, 1.1, 1.0] 
        } : {}}
        transition={{ 
          opacity: { duration: 0.3 },
          scale: { 
            duration: 0.5,
            times: [0, 0.6, 1],
            ease: [0.16, 1, 0.3, 1]
          }
        }}
        className="text-[14px] font-medium text-[#2D6B4D] h-6"
      >
        {delta}
      </motion.div>
    </div>
  );
}

// Luxury Comparison Chart
function LuxuryComparisonChart({
  label,
  baseline,
  current,
  delta,
  index,
  isInView,
}: {
  label: string;
  baseline: number;
  current: number;
  delta: string;
  index: number;
  isInView: boolean;
}) {
  const [baselineCount, setBaselineCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);
  const [showDelta, setShowDelta] = useState(false);

  // Animate numbers inside bars
  useEffect(() => {
    if (!isInView) return;

    const startDelay = 600 + index * 80; // Staggered start
    const duration = 900; // Animation duration

    const timer = setTimeout(() => {
      const startTime = Date.now();
      
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        
        setBaselineCount(Math.floor(baseline * eased));
        setCurrentCount(Math.floor(current * eased));
        
        if (progress === 1) {
          clearInterval(interval);
          // Show delta after bars complete
          setTimeout(() => setShowDelta(true), 150);
        }
      }, 16);
      
      return () => clearInterval(interval);
    }, startDelay);
    
    return () => clearTimeout(timer);
  }, [isInView, baseline, current, index]);

  return (
    <div className="flex flex-col items-center">
      {/* Delta Pill - Top */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={showDelta ? { 
          opacity: 1, 
          y: 0,
        } : {}}
        transition={{ 
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1]
        }}
        className={`mb-4 px-3 py-1.5 rounded-full text-[13px] font-semibold ${
          delta === 'NEW' 
            ? 'bg-[#E8F2EC] text-[#2D6B4D]' 
            : 'bg-[#E8F2EC]/70 text-[#2D6B4D]'
        }`}
      >
        {delta === 'NA' ? 'Not asked in 2023' : delta}
      </motion.div>

      {/* Bars Container */}
      <div className="flex items-end justify-center gap-2.5 h-56 mb-4">
        {/* 2023 Bar (Baseline) */}
        {baseline > 0 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.6 + index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-9 bg-gradient-to-t from-[#0a2a1f] to-[#0F3D2E] rounded-t origin-bottom flex items-center justify-center shadow-sm"
            style={{ height: `${(baseline / 100) * 210}px`, minHeight: '38px' }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.08 }}
              className="text-[13px] font-bold text-white"
            >
              {baselineCount}
            </motion.span>
          </motion.div>
        )}
        
        {/* 2025 Bar (Current) */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{
            duration: 0.9,
            delay: 0.7 + index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-9 bg-gradient-to-t from-[#1fa855] to-[#2DBE60] rounded-t origin-bottom flex items-center justify-center shadow-sm"
          style={{ height: `${(current / 100) * 210}px`, minHeight: '38px' }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 1.0 + index * 0.08 }}
            className="text-[13px] font-bold text-white"
          >
            {currentCount}
          </motion.span>
        </motion.div>
      </div>

      {/* Label - Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
        className="text-[12px] lg:text-[13px] text-[#4A4744] text-center whitespace-pre-line leading-[1.4] px-2"
      >
        {label}
      </motion.div>
    </div>
  );
}

// Icon Card
function IconCard({
  icon: Icon,
  label,
  primary,
  index,
  isInView,
}: {
  icon: any;
  label: string;
  primary: boolean;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className="flex flex-col items-center text-center"
    >
      <div
        className={`w-28 h-28 rounded-full flex items-center justify-center mb-4 ${
          primary ? 'bg-[#2D6B4D]' : 'bg-[#8B7E6E]'
        }`}
      >
        <Icon className="w-12 h-12 text-white" />
      </div>
      <p className={`text-sm font-medium leading-tight max-w-[140px] ${
        primary ? 'text-[#2D6B4D]' : 'text-[#8B7E6E]'
      }`}>
        {label}
      </p>
    </motion.div>
  );
}

// Horizontal Bar
function HorizontalBar({
  label,
  value,
  index,
  isInView,
}: {
  label: string;
  value: number;
  index: number;
  isInView: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-48 text-sm text-[#4A4744] text-right">
        {label}
      </div>
      <div className="flex-1 flex items-center gap-3">
        <div className="flex-1 h-7 bg-[#F5F3EF] rounded-sm overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${value}%` } : {}}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-[#2D6B4D] rounded-sm"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
          className="w-12 text-sm font-semibold text-[#2D6B4D] text-right"
        >
          {value}%
        </motion.div>
      </div>
    </div>
  );
}

// Luxury Horizontal Bar with Icons
function LuxuryHorizontalBar({
  label,
  value,
  icon,
  index,
  isInView,
}: {
  label: string;
  value: number;
  icon: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.06 }}
      className="flex items-center gap-4"
    >
      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.4 + index * 0.06 }}
        className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-2xl"
      >
        {icon}
      </motion.div>

      {/* Label */}
      <div className="w-40 lg:w-48 text-[14px] text-[#4A4744] font-medium">
        {label}
      </div>

      {/* Bar Container */}
      <div className="flex-1 flex items-center gap-4">
        <div className="flex-1 h-8 bg-[#F5F3EF] rounded overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${value}%` } : {}}
            transition={{ duration: 0.9, delay: 0.5 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-gradient-to-r from-[#1fa855] to-[#2DBE60] rounded"
          />
        </div>
        
        {/* Value */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.9 + index * 0.06 }}
          className="w-12 text-[15px] font-bold text-[#2D6B4D] text-right"
        >
          {value}
        </motion.div>
      </div>
    </motion.div>
  );
}

// Luxury Donut Chart
function LuxuryDonutChart({
  percentage,
  description,
  size = 280,
  isInView,
}: {
  percentage: number;
  description: string;
  size?: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const startDelay = 600;
    const duration = 1200;

    const timer = setTimeout(() => {
      const startTime = Date.now();
      
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        
        setCount(Math.floor(percentage * eased));
        
        if (progress === 1) {
          clearInterval(interval);
        }
      }, 16);
      
      return () => clearInterval(interval);
    }, startDelay);
    
    return () => clearTimeout(timer);
  }, [isInView, percentage]);

  const radius = (size - 32) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#F5F3EF"
            strokeWidth="16"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#greenGradient)"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset } : {}}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
          <defs>
            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1fa855" />
              <stop offset="100%" stopColor="#2DBE60" />
            </linearGradient>
          </defs>
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-6xl font-light text-[#2D6B4D]"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {count}%
          </motion.div>
        </div>
      </div>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="text-[14px] text-center text-[#2D6B4D] max-w-[280px] mt-8 leading-[1.6] font-medium"
      >
        {description}
      </motion.p>
    </div>
  );
}

// Country Card
function CountryCard({
  country,
  index,
  isInView,
}: {
  country: {
    name: string;
    awareness: number;
    usage: number;
    badge: string;
  };
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="bg-white border border-[#E6E2DC] rounded-xl p-6"
    >
      <div className="text-xs font-semibold text-[#8A8580] uppercase tracking-wider mb-3">
        {country.name}
      </div>
      <div className="text-4xl font-light text-[#1E1E1C] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
        <AnimatedCounter
          from={0}
          to={country.awareness}
          duration={1000}
          delay={isInView ? 400 + index * 100 : 0}
          suffix="%"
        />
      </div>
      <div className="text-xs text-[#8A8580] mb-4">Awareness</div>
      
      <div className="h-2 bg-[#F5F3EF] rounded-full overflow-hidden mb-4">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${country.usage}%` } : {}}
          transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
          className="h-full bg-[#2D6B4D] rounded-full"
        />
      </div>
      <div className="text-xs text-[#8A8580] mb-3">{country.usage}% Usage</div>
      
      <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#E8F2EC] rounded-full text-xs text-[#2D6B4D] font-medium">
        {country.badge}
      </div>
    </motion.div>
  );
}