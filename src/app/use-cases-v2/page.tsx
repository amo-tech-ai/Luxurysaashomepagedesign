'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight,
  TrendingUp, 
  DollarSign, 
  Search,
  ShoppingBag,
  Zap,
  Target,
  Users,
  Award,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  BarChart3,
  PieChart,
  Layers
} from 'lucide-react';

interface UseCasesV2Props {
  onNavigate?: (route: string) => void;
}

// Animated counter hook
function useCounter(end: number, duration: number = 2000, isInView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return count;
}

export default function UseCasesV2({ onNavigate }: UseCasesV2Props) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const journeyRef = useRef(null);
  const adoptionRef = useRef(null);
  const industriesRef = useRef(null);
  const flowRef = useRef(null);
  const gapRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const journeyInView = useInView(journeyRef, { once: true, amount: 0.3 });
  const adoptionInView = useInView(adoptionRef, { once: true, amount: 0.3 });
  const industriesInView = useInView(industriesRef, { once: true, amount: 0.3 });
  const flowInView = useInView(flowRef, { once: true, amount: 0.3 });
  const gapInView = useInView(gapRef, { once: true, amount: 0.3 });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrollProgress(latest);
    });
  }, [scrollYProgress]);

  // Industry data
  const industries = [
    { name: 'Fashion', icon: '👗', growth: 4700, stat: '+4,700%', metric: 'GenAI search growth', color: 'from-[#B08D83] to-[#A07D73]' },
    { name: 'Retail', icon: '🛍️', growth: 390, stat: '$240-390B', metric: 'Value potential', color: 'from-[#2E5EA8] to-[#1E4E98]' },
    { name: 'Travel', icon: '✈️', growth: 35, stat: '4% → 35%', metric: 'AI mentions surge', color: 'from-[#5C8A68] to-[#4C7A58]' },
    { name: 'Ecommerce', icon: '📦', growth: 89, stat: '89%', metric: 'Positive ROI', color: 'from-[#B8941F] to-[#A8840F]' },
    { name: 'Healthcare', icon: '⚕️', growth: 68, stat: '+68%', metric: 'Clinical AI use', color: 'from-[#3A8E60] to-[#2A7E50]' },
    { name: 'Finance', icon: '💰', growth: 74, stat: '74%', metric: 'Fraud detection AI', color: 'from-[#6B5AA8] to-[#5B4A98]' },
    { name: 'Logistics', icon: '🚚', growth: 30, stat: '20-30%', metric: 'Fuel savings', color: 'from-[#2D6B4D] to-[#1D5B3D]' },
    { name: 'Manufacturing', icon: '🏭', growth: 63, stat: '63%', metric: 'Quality control AI', color: 'from-[#8A8580] to-[#7A7570]' },
  ];

  // Adoption data
  const adoptionData = [
    { category: 'Consumer Electronics', percentage: 60 },
    { category: 'Travel & Hospitality', percentage: 51 },
    { category: 'Grocery & Food', percentage: 44 },
    { category: 'Fashion & Apparel', percentage: 43 },
    { category: 'Entertainment', percentage: 43 },
    { category: 'Professional Services', percentage: 41 },
    { category: 'Beauty & Personal Care', percentage: 37 },
    { category: 'Healthcare', percentage: 33 },
  ];

  // Purchase journey steps
  const journeySteps = [
    { icon: Search, label: 'Research', description: 'Compare prices & features', percentage: 62 },
    { icon: Award, label: 'Discover', description: 'Find product recommendations', percentage: 43 },
    { icon: BarChart3, label: 'Compare', description: 'Analyze alternatives', percentage: 46 },
    { icon: ShoppingBag, label: 'Decide', description: 'Where to purchase', percentage: 40 },
    { icon: CheckCircle, label: 'Validate', description: 'Summarize reviews', percentage: 37 },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-[#E6E2DC] z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-[#0E6249] via-[#33997A] to-[#0E6249]"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#E6E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button
                onClick={() => onNavigate?.('home-v8')}
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 bg-[#0E6249] rounded flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">S</span>
                </div>
                <span className="text-lg font-light text-[#181D25] hidden md:block">StartupAI</span>
              </button>
              <div className="h-6 w-px bg-[#E6E2DC] hidden md:block" />
              <h2 className="text-sm font-medium text-[#676F7E] hidden md:block">AI Industry Intelligence V2</h2>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-[#F4F3F1] rounded-lg transition-colors">
                <PieChart className="w-5 h-5 text-[#676F7E]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative py-32 md:py-40 px-6 md:px-10 overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-[1200px] mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EEF6F2] border border-[#33997A]/20 rounded-full mb-8">
              <Zap className="w-4 h-4 text-[#0E6249]" />
              <span className="text-xs uppercase tracking-wider font-medium text-[#0E6249]">Industry Intelligence Report</span>
            </div>

            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-medium text-[#181D25] mb-6 leading-[1.1]"
              style={{ fontFamily: 'var(--font-display, "Playfair Display"), Georgia, serif' }}
            >
              The AI Revolution
              <br />
              <span className="text-[#0E6249]">Across Industries</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#676F7E] max-w-[800px] mx-auto leading-relaxed mb-12">
              From fashion to finance, healthcare to logistics — comprehensive data on how AI transforms every sector of the economy.
            </p>

            <div className="flex items-center justify-center gap-4 text-xs text-[#8A8580]">
              <span>Sources: BCG</span>
              <span>•</span>
              <span>McKinsey</span>
              <span>•</span>
              <span>Stanford AI Index</span>
              <span>•</span>
              <span>Visual Capitalist</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative background elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#EEF6F2] rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#F5EDEA] rounded-full blur-3xl opacity-20" />
      </section>

      {/* Stats Cards Section */}
      <section ref={statsRef} className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={statsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#0E6249] mb-4 block">Key Insights</span>
              <h2 className="text-3xl md:text-4xl font-medium text-[#181D25]">
                AI Adoption in Numbers
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { value: 226, suffix: 'B', prefix: '$', label: 'AI Investment 2025', icon: DollarSign, color: 'text-[#B8941F]', bg: 'bg-[#FAF2D8]' },
                { value: 62, suffix: '%', prefix: '', label: 'Use GenAI for Research', icon: Search, color: 'text-[#0E6249]', bg: 'bg-[#EEF6F2]' },
                { value: 4700, suffix: '%', prefix: '+', label: 'GenAI Search Growth', icon: TrendingUp, color: 'text-[#B08D83]', bg: 'bg-[#F5EDEA]' },
                { value: 89, suffix: '%', prefix: '', label: 'Positive ROI Reports', icon: Target, color: 'text-[#2E5EA8]', bg: 'bg-[#EBF0F7]' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white border border-[#E6E2DC] rounded-xl p-8 hover:border-[#0E6249]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center mb-6`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="mb-2">
                    <span className={`text-4xl font-light ${stat.color}`} style={{ fontFamily: 'var(--font-stat, "Cormorant Garamond"), Georgia, serif' }}>
                      {stat.prefix}
                      {statsInView ? <Counter value={stat.value} /> : '0'}
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-sm text-[#676F7E] leading-relaxed">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Purchase Journey Flowchart */}
      <section ref={journeyRef} className="py-32 px-6 md:px-10 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={journeyInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-20">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#0E6249] mb-4 block">The AI-Enhanced Journey</span>
              <h2 className="text-3xl md:text-4xl font-medium text-[#181D25] mb-4">
                How GenAI Reshapes Purchase Decisions
              </h2>
              <p className="text-lg text-[#676F7E] max-w-[600px] mx-auto">
                Five critical touchpoints where AI transforms consumer behavior
              </p>
            </div>

            {/* Flowchart */}
            <div className="relative">
              {/* Desktop Flow */}
              <div className="hidden lg:flex items-center justify-between relative">
                {journeySteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={journeyInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                    className="relative z-10"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-32 h-32 bg-white border-2 border-[#0E6249] rounded-2xl flex flex-col items-center justify-center mb-4 hover:bg-[#EEF6F2] transition-all duration-300 shadow-lg">
                        <step.icon className="w-10 h-10 text-[#0E6249] mb-2" />
                        <span className="text-2xl font-light text-[#0E6249]" style={{ fontFamily: 'var(--font-stat)' }}>
                          {step.percentage}%
                        </span>
                      </div>
                      <div className="text-center max-w-[120px]">
                        <div className="text-sm font-medium text-[#181D25] mb-1">{step.label}</div>
                        <div className="text-xs text-[#8A8580]">{step.description}</div>
                      </div>
                    </div>
                    
                    {/* Arrow connector */}
                    {idx < journeySteps.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={journeyInView ? { scaleX: 1 } : {}}
                        transition={{ delay: idx * 0.15 + 0.3, duration: 0.5 }}
                        className="absolute top-16 left-full w-20 flex items-center justify-center origin-left"
                      >
                        <div className="w-full h-0.5 bg-gradient-to-r from-[#0E6249] to-[#33997A]" />
                        <ArrowRight className="w-5 h-5 text-[#0E6249] absolute right-0" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile Stack */}
              <div className="lg:hidden space-y-6">
                {journeySteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    animate={journeyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="bg-white border border-[#E6E2DC] rounded-xl p-6 hover:border-[#0E6249]/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-[#EEF6F2] rounded-lg flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-[#0E6249]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-lg font-medium text-[#181D25]">{step.label}</span>
                          <span className="text-xl font-light text-[#0E6249]" style={{ fontFamily: 'var(--font-stat)' }}>
                            {step.percentage}%
                          </span>
                        </div>
                        <p className="text-sm text-[#676F7E]">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Adoption Chart */}
      <section ref={adoptionRef} className="py-32 px-6 md:px-10 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={adoptionInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-16">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#0E6249] mb-4 block">Exhibit 1</span>
              <h2 className="text-3xl md:text-4xl font-light text-[#181D25] mb-4">
                AI Usage Across Industries
              </h2>
              <p className="text-lg text-[#676F7E]">
                Percentage of consumers using AI in the purchase journey
              </p>
            </div>

            <div className="space-y-4">
              {adoptionData.map((item, idx) => {
                const maxPercentage = Math.max(...adoptionData.map(d => d.percentage));
                const widthPercentage = (item.percentage / maxPercentage) * 100;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -50 }}
                    animate={adoptionInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: idx * 0.05, duration: 0.6 }}
                    className="group"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-48 flex-shrink-0">
                        <span className="text-sm font-medium text-[#181D25]">{item.category}</span>
                      </div>
                      <div className="flex-1 relative">
                        <div className="h-10 bg-[#F5F3EF] rounded-lg overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={adoptionInView ? { width: `${widthPercentage}%` } : {}}
                            transition={{ delay: idx * 0.05 + 0.3, duration: 0.8, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-[#0E6249] to-[#33997A] group-hover:from-[#0a4a37] group-hover:to-[#2a8770] transition-all duration-300 flex items-center justify-end pr-3"
                          >
                            <span className="text-sm font-semibold text-white">{item.percentage}%</span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E6E2DC]">
              <p className="text-xs text-[#8A8580]">
                Source: BCG CCI survey, November 2025. Sample size: n = 9,000+ global consumers
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Deep Dive Cards */}
      <section ref={industriesRef} className="py-32 px-6 md:px-10 bg-[#181D25]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={industriesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-20">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#33997A] mb-4 block">Industry Deep Dives</span>
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
                Where AI Delivers Real Impact
              </h2>
              <p className="text-lg text-[#BAB5AE] max-w-[600px] mx-auto">
                Eight sectors leading the AI transformation with measurable results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={industriesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.08, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-5xl">{industry.icon}</span>
                      <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>

                    <h3 className="text-xl font-medium text-white mb-2">{industry.name}</h3>
                    
                    <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${industry.color} mb-4`}>
                      <span className="text-2xl font-light text-white" style={{ fontFamily: 'var(--font-stat)' }}>
                        {industry.stat}
                      </span>
                    </div>

                    <p className="text-sm text-[#BAB5AE]">{industry.metric}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Flow Diagram */}
      <section ref={flowRef} className="py-32 px-6 md:px-10 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={flowInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-20">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#0E6249] mb-4 block">System Architecture</span>
              <h2 className="text-3xl md:text-4xl font-medium text-[#181D25] mb-4">
                AI Implementation Ecosystem
              </h2>
              <p className="text-lg text-[#676F7E] max-w-[600px] mx-auto">
                The interconnected components driving successful AI deployment
              </p>
            </div>

            <div className="relative">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Data Infrastructure', icon: Layers, items: ['Clean datasets', 'Real-time feeds', 'Privacy compliance'], color: 'bg-[#EBF0F7]', textColor: 'text-[#2E5EA8]' },
                  { title: 'AI Models', icon: Zap, items: ['GPT-4 integration', 'Custom training', 'Fine-tuning'], color: 'bg-[#EEF6F2]', textColor: 'text-[#0E6249]' },
                  { title: 'User Experience', icon: Users, items: ['Intuitive UI', 'Personalization', 'Trust signals'], color: 'bg-[#F5EDEA]', textColor: 'text-[#B08D83]' },
                ].map((component, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={flowInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                    className="relative"
                  >
                    <div className={`${component.color} rounded-2xl p-8 border-2 border-transparent hover:border-[#0E6249]/20 transition-all duration-300`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center`}>
                          <component.icon className={`w-6 h-6 ${component.textColor}`} />
                        </div>
                        <h3 className="text-xl font-medium text-[#181D25]">{component.title}</h3>
                      </div>

                      <ul className="space-y-3">
                        {component.items.map((item, itemIdx) => (
                          <motion.li
                            key={itemIdx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={flowInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: idx * 0.15 + itemIdx * 0.1, duration: 0.4 }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle className={`w-4 h-4 ${component.textColor}`} />
                            <span className="text-sm text-[#676F7E]">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Arrow connectors (desktop) */}
                    {idx < 2 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#0E6249]/30 to-transparent" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gap Analysis */}
      <section ref={gapRef} className="py-32 px-6 md:px-10 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={gapInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-16">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#B83A3A] mb-4 block">The Reality Check</span>
              <h2 className="text-3xl md:text-4xl font-light text-[#181D25] mb-4">
                The AI Expectation Gap
              </h2>
              <p className="text-lg text-[#676F7E]">
                What companies want vs. what they actually achieve
              </p>
            </div>

            <div className="space-y-8">
              {[
                { metric: 'Revenue Growth', want: 74, get: 20, gap: 54 },
                { metric: 'Cost Savings', want: 68, get: 40, gap: 28 },
                { metric: 'Mature Governance', want: 60, get: 21, gap: 39 },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={gapInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="bg-[#FAFAF8] rounded-xl p-8 border border-[#E6E2DC]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium text-[#181D25]">{item.metric}</h3>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-[#B83A3A]" />
                      <span className="text-sm font-semibold text-[#B83A3A]">{item.gap}% gap</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#676F7E]">What companies want</span>
                        <span className="text-sm font-semibold text-[#2E5EA8]">{item.want}%</span>
                      </div>
                      <div className="h-3 bg-[#EBF0F7] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={gapInView ? { width: `${item.want}%` } : {}}
                          transition={{ delay: idx * 0.15 + 0.3, duration: 0.8 }}
                          className="h-full bg-gradient-to-r from-[#2E5EA8] to-[#1E4E98]"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#676F7E]">What they actually get</span>
                        <span className="text-sm font-semibold text-[#B83A3A]">{item.get}%</span>
                      </div>
                      <div className="h-3 bg-[#FAEDED] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={gapInView ? { width: `${item.get}%` } : {}}
                          transition={{ delay: idx * 0.15 + 0.5, duration: 0.8 }}
                          className="h-full bg-gradient-to-r from-[#B83A3A] to-[#A82A2A]"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-[#FAF2D8] border border-[#B8941F]/20 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#B8941F] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#181D25] mb-2">Key Insight</h3>
                  <p className="text-sm text-[#676F7E] leading-relaxed">
                    90% of AI initiatives never scale beyond pilot phase. Success requires mature governance, clean data infrastructure, and sustained executive commitment — not just technology deployment.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E6E2DC]">
              <p className="text-xs text-[#8A8580]">
                Source: PwC CEO Survey 2026, K3 Fashion Solutions AI Impact Study
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-10 bg-[#FAFAF8]">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-[#181D25] mb-6">
              Turn insights into strategy
            </h2>
            <p className="text-lg text-[#676F7E] mb-12 leading-relaxed">
              Use these industry benchmarks to validate your AI roadmap and identify competitive advantages.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                onClick={() => onNavigate?.('home-v8')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#0E6249] hover:bg-[#0a4a37] text-white font-medium rounded-lg transition-colors"
              >
                Get Started — Free
              </motion.button>

              <motion.button
                onClick={() => onNavigate?.('ai-industry-use-cases')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white hover:bg-[#F4F3F1] text-[#0E6249] font-medium rounded-lg border border-[#E6E2DC] transition-colors"
              >
                View Full Report →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-10 bg-white border-t border-[#E6E2DC]">
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

            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => onNavigate?.('bcg-ai-consumer')}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-[#F4F3F1] hover:bg-[#EFEEEB] text-[#181D25] text-sm font-medium rounded-lg transition-colors"
              >
                BCG Consumer Report
              </motion.button>
              <motion.button
                onClick={() => onNavigate?.('ai-superpowers')}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-[#F4F3F1] hover:bg-[#EFEEEB] text-[#181D25] text-sm font-medium rounded-lg transition-colors"
              >
                Global AI Superpowers
              </motion.button>
            </div>
          </div>

          <div className="text-center text-xs text-[#8A8580]">
            StartupAI © 2026 • AI Industry Intelligence Platform
          </div>
        </div>
      </footer>
    </div>
  );
}

// Counter component
function Counter({ value }: { value: number }) {
  return <>{value.toLocaleString()}</>;
}
