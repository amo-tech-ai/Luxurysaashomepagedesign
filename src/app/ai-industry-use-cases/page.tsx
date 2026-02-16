'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll } from 'motion/react';
import { 
  ArrowLeft, 
  Download, 
  Share2,
  TrendingUp,
  DollarSign,
  Zap,
  CheckCircle,
  Search,
  Award,
  Scale,
  Store,
  FileText
} from 'lucide-react';

interface AIIndustryUseCasesProps {
  onNavigate?: (route: string) => void;
}

export default function AIIndustryUseCases({ onNavigate }: AIIndustryUseCasesProps) {
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

      {/* Hero Stats Section */}
      <HeroStatsSection />

      {/* Consumer Behavior Section (Exhibit 1) */}
      <ConsumerBehaviorSection />

      {/* Industry Adoption Section (Exhibit 2) */}
      <IndustryAdoptionSection />

      {/* Use Case Deep Dives */}
      <UseCaseDeepDives />

      {/* Purchase Pathway */}
      <PurchasePathwaySection />

      {/* Why AI Fails */}
      <WhyAIFailsSection />

      {/* CTA Section */}
      <CTASection onNavigate={onNavigate} />

      {/* Sources & References Section */}
      <SourcesSection />

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
              <Zap className="w-4 h-4" />
              <span>AI Industry Intelligence</span>
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
              <span className="hidden md:inline">Export PDF</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

// ============================================================================
// HERO STATS SECTION
// ============================================================================

function HeroStatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { value: 226, prefix: '$', suffix: 'B', label: 'invested in AI in 2025', source: 'State of AI Report 2025' },
    { value: 62, prefix: '', suffix: '%', label: 'use GenAI for research', source: 'BCG CCI Survey 2025' },
    { value: 4700, prefix: '+', suffix: '%', label: 'GenAI search growth', source: 'BoF-McKinsey 2026' },
    { value: 89, prefix: '', suffix: '%', label: 'positive ROI for AI tools', source: 'Envive/G2 2025' },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 lg:py-40 px-6 md:px-10 bg-[#FBFAF9]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.16em] text-[#0E6249] font-semibold mb-6 text-center"
        >
          AI Industry Intelligence
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium text-[#181D25] text-center mb-6"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          The Data Behind the AI Revolution
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#676F7E] text-center mb-16 max-w-2xl mx-auto"
        >
          Real stats. Real companies. Real impact.
        </motion.p>

        {/* Stat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <HeroStatCard
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

// Hero Stat Card Component
function HeroStatCard({
  value,
  prefix,
  suffix,
  label,
  source,
  index,
  isInView,
}: {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  source: string;
  index: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const startDelay = 400 + index * 150;
    const duration = 1200;

    const timer = setTimeout(() => {
      const startTime = Date.now();
      
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        
        setCount(Math.floor(value * eased));
        
        if (progress === 1) {
          clearInterval(interval);
        }
      }, 16);
      
      return () => clearInterval(interval);
    }, startDelay);
    
    return () => clearTimeout(timer);
  }, [isInView, value, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
      className="bg-white rounded-xl p-8 shadow-[0_10px_15px_hsl(220_20%_12%_/_0.06)] hover:shadow-[0_20px_25px_hsl(220_20%_12%_/_0.08)] transition-shadow"
    >
      {/* Stat Number */}
      <div
        className="text-5xl md:text-6xl font-light text-[#0E6249] mb-3"
        style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </div>

      {/* Label */}
      <div className="text-sm text-[#676F7E] mb-6">
        {label}
      </div>

      {/* Source */}
      <div className="text-xs text-[#8A8580] pt-4 border-t border-[#E5E2DC]">
        Source: {source}
      </div>
    </motion.div>
  );
}

// ============================================================================
// CONSUMER BEHAVIOR SECTION (EXHIBIT 1)
// ============================================================================

function ConsumerBehaviorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const behaviors = [
    { label: 'For general\ninformation\nseeking', baseline: 43, current: 62, delta: '+20' },
    { label: 'At work/for\nwork\npurposes', baseline: 31, current: 46, delta: '+15' },
    { label: 'Researching\nbrands or\nproducts', baseline: 0, current: 43, delta: 'NEW' },
    { label: 'Language\ntranslation', baseline: 26, current: 40, delta: '+14' },
    { label: 'As a personal\nassistant/for\ndaily tasks', baseline: 22, current: 37, delta: '+15' },
    { label: 'Just to play\naround', baseline: 27, current: 30, delta: '+2' },
    { label: 'To create a\ntravel plan', baseline: 13, current: 23, delta: '+11' },
    { label: 'Health care\nsupport', baseline: 13, current: 18, delta: '+5' },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Container */}
        <div className="bg-white/60 backdrop-blur-sm border border-[#E5E2DC]/50 rounded-3xl p-8 md:p-12 lg:p-16 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
          
          {/* Header */}
          <div className="mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#0E6249]" />
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#0E6249] font-semibold">
                EXHIBIT 1
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.15] font-normal text-[#181D25] max-w-[1000px] tracking-[-0.01em]"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", serif' }}
            >
              Consumers Increasingly Use GenAI as Part of Everyday Behaviors
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 flex items-center gap-4"
            >
              <span className="text-[13px] text-[#676F7E] font-medium">
                Change since 2023 (percentage points)
              </span>
              <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-[#E5E2DC] to-transparent" />
            </motion.div>
          </div>

          {/* Chart Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-8 mb-16">
            {behaviors.map((behavior, index) => (
              <GroupedBarChart
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

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center gap-10 py-6 mb-12 border-y border-[#E5E2DC]/50"
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-3 rounded-sm bg-gradient-to-t from-[#0a2a1f] to-[#0E6249] shadow-sm" />
              <span className="text-[13px] text-[#676F7E] font-medium">2023</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-3 rounded-sm bg-gradient-to-t from-[#1fa855] to-[#33997A] shadow-sm" />
              <span className="text-[13px] text-[#676F7E] font-medium">2025</span>
            </div>
          </motion.div>

          {/* Insight Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative bg-gradient-to-br from-[#EEF6F2] to-[#EEF6F2]/70 border border-[#0E6249]/10 rounded-2xl p-8 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0E6249]/5 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <div className="relative flex items-start gap-4">
              <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-[#0E6249] to-[#33997A] rounded-full" />
              <div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-[#0E6249] font-semibold mb-3">
                  KEY INSIGHT
                </div>
                <p className="text-[16px] lg:text-[17px] text-[#181D25] leading-[1.65] max-w-[900px] font-normal">
                  GenAI adoption is expanding beyond general research into operational and transactional use cases, 
                  with particularly strong growth in brand research (+43pp), work purposes (+15pp), and personal 
                  assistance (+15pp) — signaling a fundamental shift in how consumers interact with AI technology.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-10 pt-8 border-t border-[#E5E2DC]/50 text-[11px] text-[#8A8580] leading-relaxed space-y-1"
          >
            <p><span className="font-semibold">Sources:</span> BCG CCI Global Consumer Radar surveys, September 2023, November 2025</p>
            <p><span className="font-semibold">Note:</span> Data shown are for respondents in the US, UK, Germany, France, Japan, China, India, Brazil, and Mexico. n = 4,151–4,278.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Grouped Bar Chart Component
function GroupedBarChart({
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

  useEffect(() => {
    if (!isInView) return;

    const startDelay = 600 + index * 80;
    const duration = 900;

    const timer = setTimeout(() => {
      const startTime = Date.now();
      
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        
        setBaselineCount(Math.floor(baseline * eased));
        setCurrentCount(Math.floor(current * eased));
        
        if (progress === 1) {
          clearInterval(interval);
          setTimeout(() => setShowDelta(true), 150);
        }
      }, 16);
      
      return () => clearInterval(interval);
    }, startDelay);
    
    return () => clearTimeout(timer);
  }, [isInView, baseline, current, index]);

  return (
    <div className="flex flex-col items-center">
      {/* Delta Pill */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={showDelta ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`mb-4 px-3 py-1.5 rounded-full text-[13px] font-semibold ${
          delta === 'NEW' ? 'bg-[#EEF6F2] text-[#0E6249]' : 'bg-[#EEF6F2]/70 text-[#0E6249]'
        }`}
      >
        {delta}
      </motion.div>

      {/* Bars */}
      <div className="flex items-end justify-center gap-2.5 h-56 mb-4">
        {baseline > 0 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.6 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-9 bg-gradient-to-t from-[#0a2a1f] to-[#0E6249] rounded-t origin-bottom flex items-center justify-center shadow-sm"
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
        
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.7 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-9 bg-gradient-to-t from-[#1fa855] to-[#33997A] rounded-t origin-bottom flex items-center justify-center shadow-sm"
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

      {/* Label */}
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

// ============================================================================
// INDUSTRY ADOPTION SECTION (EXHIBIT 2)
// ============================================================================

function IndustryAdoptionSection() {
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
    <section ref={ref} className="py-20 lg:py-32 px-6 md:px-10 bg-gradient-to-b from-[#FBFAF9] to-white">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="bg-white/60 backdrop-blur-sm border border-[#E5E2DC]/50 rounded-3xl p-8 md:p-12 lg:p-16 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
          
          {/* Header */}
          <div className="mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#0E6249]" />
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#0E6249] font-semibold">
                EXHIBIT 2
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.15] font-normal text-[#181D25] max-w-[1000px] tracking-[-0.01em]"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", serif' }}
            >
              AI Is Used Nearly Everywhere, from Electronics to Everyday Essentials
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 flex items-center gap-4"
            >
              <span className="text-[13px] text-[#676F7E] font-medium">
                % of respondents using AI as part of the research or purchase process
              </span>
              <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-[#E5E2DC] to-transparent" />
            </motion.div>
          </div>

          {/* 1x2 Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left: Horizontal Bars */}
            <div className="space-y-5">
              {categories.map((category, index) => (
                <HorizontalBarWithIcon
                  key={category.label}
                  label={category.label}
                  value={category.value}
                  icon={category.icon}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>

            {/* Right: Donut */}
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
            className="mt-16 pt-8 border-t border-[#E5E2DC]/50 text-[11px] text-[#8A8580] leading-relaxed space-y-1"
          >
            <p><span className="font-semibold">Source:</span> BCG CCI GenAI Consumer Usage survey, November 2025.</p>
            <p><span className="font-semibold">Note:</span> Respondents were asked, "In which categories have you used AI as part of the research or purchase process?"; n = 367.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Horizontal Bar with Icon Component
function HorizontalBarWithIcon({
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
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.4 + index * 0.06 }}
        className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-2xl"
      >
        {icon}
      </motion.div>

      <div className="w-40 lg:w-48 text-[14px] text-[#4A4744] font-medium">
        {label}
      </div>

      <div className="flex-1 flex items-center gap-4">
        <div className="flex-1 h-8 bg-[#F4F3F1] rounded overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${value}%` } : {}}
            transition={{ duration: 0.9, delay: 0.5 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-gradient-to-r from-[#1fa855] to-[#33997A] rounded"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.9 + index * 0.06 }}
          className="w-12 text-[15px] font-bold text-[#0E6249] text-right"
        >
          {value}
        </motion.div>
      </div>
    </motion.div>
  );
}

// Luxury Donut Chart Component
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
        const eased = 1 - Math.pow(1 - progress, 3);
        
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
            stroke="#F4F3F1"
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
              <stop offset="100%" stopColor="#33997A" />
            </linearGradient>
          </defs>
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-6xl font-light text-[#0E6249]"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            {count}%
          </motion.div>
        </div>
      </div>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="text-[14px] text-center text-[#0E6249] max-w-[280px] mt-8 leading-[1.6] font-medium"
      >
        {description}
      </motion.p>
    </div>
  );
}

// ============================================================================
// USE CASE DEEP DIVES SECTION
// ============================================================================

function UseCaseDeepDives() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const industries = [
    { name: 'Fashion', stat: '+4,700%', label: 'search growth', useCases: 6, color: '#B08D83' },
    { name: 'Retail', stat: '$240-390B', label: 'value potential', useCases: 7, color: '#2E5EA8' },
    { name: 'Travel', stat: '4→35%', label: 'AI mentions', useCases: 5, color: '#5C8A68' },
    { name: 'Ecommerce', stat: '89%', label: 'positive ROI', useCases: 5, color: '#B8941F' },
    { name: 'Healthcare', stat: '68%', label: 'rise in AI docs', useCases: 6, color: '#3A8E60' },
    { name: 'Financial', stat: '74%', label: 'use AI for fraud', useCases: 5, color: '#6B5AA8' },
    { name: 'Logistics', stat: '20-30%', label: 'fuel savings', useCases: 4, color: '#2E5EA8' },
    { name: 'Manufacturing', stat: '63%', label: 'use AI for QC', useCases: 5, color: '#4A4744' },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10 bg-[#181D25]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase tracking-[0.16em] text-[#33997A] font-semibold mb-6">
            Industry Deep Dives
          </div>
          <h2
            className="text-3xl md:text-5xl font-medium text-white max-w-3xl mx-auto"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Where AI Delivers Real ROI
          </h2>
        </motion.div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.name}
              {...industry}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Industry Card Component
function IndustryCard({
  name,
  stat,
  label,
  useCases,
  color,
  index,
  isInView,
}: {
  name: string;
  stat: string;
  label: string;
  useCases: number;
  color: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="bg-[#1E1E1C] border border-[#2A2A28] rounded-xl p-8 hover:border-[#33997A]/30 transition-all group"
    >
      {/* Industry Name */}
      <div className="text-xs uppercase tracking-[0.14em] text-[#8A8580] font-semibold mb-6">
        {name}
      </div>

      {/* Stat */}
      <div
        className="text-5xl font-light mb-2 transition-colors"
        style={{ fontFamily: 'Playfair Display, Georgia, serif', color }}
      >
        {stat}
      </div>

      {/* Label */}
      <div className="text-sm text-[#8A8580] mb-8">
        {label}
      </div>

      {/* Use Cases Count */}
      <div className="text-sm text-[#E5E2DC] mb-6">
        {useCases} use cases documented
      </div>

      {/* Explore Link */}
      <button className="text-sm font-medium text-[#33997A] hover:text-white transition-colors flex items-center gap-2 group-hover:gap-3">
        Explore →
      </button>
    </motion.div>
  );
}

// ============================================================================
// PURCHASE PATHWAY SECTION
// ============================================================================

function PurchasePathwaySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const pathways = [
    { icon: <DollarSign className="w-12 h-12" />, label: 'Comparing prices\nand seeking deals' },
    { icon: <Award className="w-12 h-12" />, label: 'Searching for\nrecommendations' },
    { icon: <Scale className="w-12 h-12" />, label: 'Comparing\nproducts and features' },
    { icon: <Store className="w-12 h-12" />, label: 'Discovering\nwhere to buy' },
    { icon: <FileText className="w-12 h-12" />, label: 'Summarizing\nreviews' },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 px-6 md:px-10 bg-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase tracking-[0.16em] text-[#0E6249] font-semibold mb-6">
            The AI-Enhanced Purchase Pathway
          </div>
          <h2
            className="text-3xl md:text-5xl font-medium text-[#181D25] max-w-3xl mx-auto"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            How GenAI Reshapes Buying Decisions
          </h2>
        </motion.div>

        {/* Icon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {pathways.map((pathway, index) => (
            <IconCard
              key={index}
              icon={pathway.icon}
              label={pathway.label}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Source */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center text-[11px] text-[#8A8580]"
        >
          Source: BCG CCI GenAI Consumer Usage survey, November 2025
        </motion.div>
      </div>
    </section>
  );
}

// Icon Card Component
function IconCard({
  icon,
  label,
  index,
  isInView,
}: {
  icon: React.ReactNode;
  label: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
      className="flex flex-col items-center text-center"
    >
      <div className="w-28 h-28 rounded-full bg-[#0E6249] flex items-center justify-center mb-4 text-white">
        {icon}
      </div>
      <p className="text-sm font-medium text-[#0E6249] leading-tight max-w-[140px] whitespace-pre-line">
        {label}
      </p>
    </motion.div>
  );
}

// ============================================================================
// WHY AI FAILS SECTION
// ============================================================================

function WhyAIFailsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const gaps = [
    { metric: 'Revenue growth', want: 74, get: 20 },
    { metric: 'Cost savings', want: 68, get: 40 },
    { metric: 'Mature governance', want: 60, get: 21 },
  ];

  const failures = [
    { label: 'Data quality issues', value: 40 },
    { label: 'Lack of AI expertise', value: 43 },
    { label: 'Never scale to production', value: 90 },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 px-6 md:px-10 bg-[#F6F5F3]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase tracking-[0.16em] text-[#B83A3A] font-semibold mb-6">
            The Reality Check
          </div>
          <h2
            className="text-3xl md:text-5xl font-medium text-[#181D25] max-w-3xl mx-auto"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Why Most AI Initiatives Never Scale
          </h2>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-12 lg:gap-16">
          
          {/* Left: Gap Bars */}
          <div className="space-y-8">
            {gaps.map((gap, index) => (
              <GapBar
                key={gap.metric}
                metric={gap.metric}
                want={gap.want}
                get={gap.get}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Right: Failure Reasons */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg font-medium text-[#181D25] mb-8"
            >
              Primary Failure Reasons:
            </motion.div>

            {failures.map((failure, index) => (
              <motion.div
                key={failure.label}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex-1">
                  <div className="text-sm text-[#4A4744] mb-2">{failure.label}</div>
                  <div className="h-2 bg-white rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${failure.value}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.7 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-[#B83A3A] rounded-full"
                    />
                  </div>
                </div>
                <div className="text-sm font-bold text-[#B83A3A] w-12 text-right">
                  {failure.value}%
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Source */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12 text-[11px] text-[#8A8580]"
        >
          <span className="font-semibold">Sources:</span> PwC CEO Survey 2026, K3 Fashion Solutions
        </motion.div>
      </div>
    </section>
  );
}

// Gap Bar Component
function GapBar({
  metric,
  want,
  get,
  index,
  isInView,
}: {
  metric: string;
  want: number;
  get: number;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
    >
      <div className="text-base font-medium text-[#181D25] mb-4">
        {metric}
      </div>

      {/* Want Bar */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-[#2E5EA8]">Want</span>
          <span className="text-sm font-bold text-[#2E5EA8]">{want}%</span>
        </div>
        <div className="h-8 bg-[#EBF0F7] rounded overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${want}%` } : {}}
            transition={{ duration: 0.9, delay: 0.4 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-[#2E5EA8] rounded"
          />
        </div>
      </div>

      {/* Get Bar */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-[#B83A3A]">Get</span>
          <span className="text-sm font-bold text-[#B83A3A]">{get}%</span>
        </div>
        <div className="h-8 bg-[#FAEDED] rounded overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${get}%` } : {}}
            transition={{ duration: 0.9, delay: 0.6 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-[#B83A3A] rounded"
          />
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// CTA SECTION
// ============================================================================

function CTASection({ onNavigate }: { onNavigate?: (route: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10 bg-[#FBFAF9]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto text-center"
      >
        <h2
          className="text-3xl md:text-5xl font-medium text-[#181D25] mb-6"
          style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
        >
          Validate Your AI Strategy
        </h2>

        <p className="text-lg md:text-xl text-[#676F7E] mb-10 max-w-2xl mx-auto">
          Turn these stats into your startup's advantage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate?.('home-v8')}
            className="px-8 py-4 bg-[#0E6249] hover:bg-[#0a4a37] text-white font-medium rounded-lg transition-colors"
          >
            Get Started — Free
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate?.('bcg-ai-consumer')}
            className="px-8 py-4 bg-white hover:bg-[#F4F3F1] text-[#0E6249] font-medium rounded-lg transition-colors border border-[#E5E2DC]"
          >
            Explore Research →
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

// ============================================================================
// SOURCES & REFERENCES SECTION
// ============================================================================

function SourcesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sources = [
    {
      title: 'State of AI Report 2025',
      organization: 'Nathan Benaich & Air Street Capital',
      description: 'Comprehensive annual report tracking breakthrough AI research, industry developments, and investment trends globally.',
      url: 'https://www.stateof.ai/',
      category: 'Industry Analysis'
    },
    {
      title: 'BCG CCI Consumer Survey',
      organization: 'Boston Consulting Group',
      description: 'Consumer behavior analysis across 9 countries examining GenAI adoption patterns, use cases, and purchase journey integration.',
      url: 'https://www.bcg.com/publications/2025/consumers-trust-ai-to-buy-better',
      category: 'Consumer Research'
    },
    {
      title: 'State of Fashion 2026',
      organization: 'Business of Fashion & McKinsey',
      description: 'Deep dive into AI transformation in fashion retail, highlighting 4,700% GenAI search growth and consumer trust metrics.',
      url: 'https://www.businessoffashion.com/reports/news-analysis/the-state-of-fashion-2026/',
      category: 'Industry-Specific'
    },
    {
      title: 'AI Personalization ROI Study',
      organization: 'Envive & G2',
      description: 'Quantitative analysis of AI-driven personalization impact, reporting 89% positive ROI and 84% revenue-per-visit growth.',
      url: 'https://www.g2.com/articles/ai-personalization-statistics',
      category: 'ROI & Performance'
    },
    {
      title: 'GenAI Value Potential in Retail',
      organization: 'McKinsey & Company',
      description: 'Estimates $240-390B total value potential from GenAI applications across retail operations, personalization, and customer service.',
      url: 'https://www.mckinsey.com/industries/retail/our-insights/generative-ai-unlocking-the-future-of-fashion',
      category: 'Market Sizing'
    },
    {
      title: 'PwC CEO Survey 2026',
      organization: 'PricewaterhouseCoopers',
      description: 'Executive perspective on AI adoption challenges, governance maturity, and the gap between AI intent and realized impact.',
      url: 'https://www.pwc.com/gx/en/ceo-survey/2024/pwc-ceo-survey-report.pdf',
      category: 'Executive Insights'
    },
    {
      title: 'AI in Travel & Hospitality',
      organization: 'Skift Research',
      description: 'Tracking AI mention growth from 4% to 35% in travel industry reports, plus operational efficiency case studies.',
      url: 'https://research.skift.com/',
      category: 'Industry-Specific'
    },
    {
      title: 'Healthcare AI Documentation Study',
      organization: 'Athenahealth',
      description: 'Clinical AI adoption metrics showing 68% rise in AI-powered documentation tools and physician productivity gains.',
      url: 'https://www.athenahealth.com/',
      category: 'Industry-Specific'
    },
    {
      title: 'Financial Services AI Adoption',
      organization: 'BioCatch',
      description: 'Analysis of AI deployment for fraud detection and financial crime prevention, with 74% institutional adoption rate.',
      url: 'https://www.biocatch.com/resources',
      category: 'Industry-Specific'
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 px-6 md:px-10 bg-white">
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
            All data sourced from leading industry research firms, surveys, and reports
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
              <div className="inline-block px-3 py-1 bg-[#EEF6F2] text-[#0E6249] text-xs font-medium rounded-full mb-4">
                {source.category}
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
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
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
                All statistics and insights presented in this report are derived from peer-reviewed industry research, 
                large-scale consumer surveys (n &gt; 1,000), and verified company disclosures. Data spans Q3 2023 through 
                Q4 2025, with primary focus on North America, Europe, and Asia-Pacific markets. Where multiple sources 
                report similar metrics, we cite the most recent and methodologically rigorous study.
              </p>
              <div className="mt-4 text-xs text-[#8A8580]">
                <span className="font-semibold">Last Updated:</span> February 2026 • <span className="font-semibold">Next Review:</span> Q2 2026
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
            For a complete bibliography with DOIs and access links, contact:
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
          StartupAI © 2026 • Data: BCG, McKinsey, BoF, State of AI
        </div>
      </div>
    </footer>
  );
}