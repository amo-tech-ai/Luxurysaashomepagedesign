'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowLeft, Globe, TrendingUp, DollarSign, FileText, Users, Zap, ArrowRight } from 'lucide-react';

interface AISuperpowersProps {
  onNavigate?: (route: string) => void;
}

// Country data from verified sources
const countryData = [
  { rank: 1, country: 'United States', flag: '🇺🇸', startups: 5509, funding: 470.9, patents: 68, talent: '300k+', adoption: 71 },
  { rank: 2, country: 'China', flag: '🇨🇳', startups: 1446, funding: 119.3, patents: 301, talent: '200k+', adoption: 91 },
  { rank: 3, country: 'United Kingdom', flag: '🇬🇧', startups: 727, funding: 4.5, patents: 5, talent: '25k', adoption: 65 },
  { rank: 4, country: 'Israel', flag: '🇮🇱', startups: 442, funding: 15.0, patents: 3, talent: '20k', adoption: 75 },
  { rank: 5, country: 'Canada', flag: '🇨🇦', startups: 397, funding: 15.3, patents: 4, talent: '18k', adoption: 68 },
  { rank: 6, country: 'France', flag: '🇫🇷', startups: 391, funding: 5.0, patents: 4, talent: '14k', adoption: 70 },
  { rank: 7, country: 'India', flag: '🇮🇳', startups: 338, funding: 0.56, patents: 26, talent: '150k+', adoption: 55 },
  { rank: 8, country: 'Japan', flag: '🇯🇵', startups: 333, funding: 4.0, patents: 26, talent: '12k', adoption: 62 },
  { rank: 9, country: 'Germany', flag: '🇩🇪', startups: 319, funding: 6.0, patents: 6, talent: '15k', adoption: 72 },
  { rank: 10, country: 'Singapore', flag: '🇸🇬', startups: 193, funding: 7.3, patents: 2, talent: '10k', adoption: 88 },
];

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

// Counter component
function AnimatedCounter({ value, suffix = '', isInView }: { value: number; suffix?: string; isInView: boolean }) {
  const count = useCounter(value, 2000, isInView);
  return <>{count.toLocaleString()}{suffix}</>;
}

export default function AISuperpowers({ onNavigate }: AISuperpowersProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const heroRef = useRef(null);
  const startupsRef = useRef(null);
  const fundingRef = useRef(null);
  const patentsRef = useRef(null);
  const talentRef = useRef(null);
  const ecosystemRef = useRef(null);
  const cardsRef = useRef(null);
  const insightsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const startupsInView = useInView(startupsRef, { once: true });
  const fundingInView = useInView(fundingRef, { once: true });
  const patentsInView = useInView(patentsRef, { once: true });
  const talentInView = useInView(talentRef, { once: true });
  const ecosystemInView = useInView(ecosystemRef, { once: true });
  const cardsInView = useInView(cardsRef, { once: true });
  const insightsInView = useInView(insightsRef, { once: true });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F1115] to-[#1A1D24] text-[#EAECEF]">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#242A36] z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-[#2EE6A6] to-[#4A7CFF]"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0F1115]/95 backdrop-blur-sm border-b border-[#242A36]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button
                onClick={() => onNavigate?.('home-v8')}
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 bg-[#2EE6A6] rounded-lg flex items-center justify-center">
                  <span className="text-[#0F1115] font-semibold text-sm">S</span>
                </div>
                <span className="text-lg font-light text-[#EAECEF] hidden md:block">StartupAI</span>
              </button>
              <div className="h-6 w-px bg-[#242A36] hidden md:block" />
              <h2 className="text-sm font-medium text-[#8F98A8] hidden md:block">Global AI Intelligence</h2>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-[#151922] rounded-lg transition-colors">
                <Globe className="w-5 h-5 text-[#8F98A8]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: Hero Intelligence Statement */}
      <section ref={heroRef} className="py-32 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#151922] border border-[#242A36] rounded-full mb-8">
              <div className="w-2 h-2 bg-[#2EE6A6] rounded-full animate-pulse" />
              <span className="text-xs uppercase tracking-wider text-[#8F98A8]">Live Intelligence Report</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#EAECEF] mb-6 leading-tight">
              Global AI Leadership 2025
            </h1>

            <p className="text-xl md:text-2xl text-[#8F98A8] max-w-[800px] mx-auto leading-relaxed">
              United States leads with <span className="text-[#2EE6A6] font-medium">5,509 funded AI startups</span>. China follows at <span className="text-[#4A7CFF] font-medium">1,446</span>.
            </p>

            <div className="mt-12 text-xs text-[#8F98A8]">
              Data Sources: Forbes, Stanford AI Index, Crunchbase, Visual Capitalist
            </div>
          </motion.div>

          {/* Floating Metric Cards */}
          <div className="grid md:grid-cols-4 gap-6 mt-20">
            {[
              { label: 'Total Startups', value: 10095, icon: Zap, color: '#2EE6A6' },
              { label: 'Combined Funding', value: 648, suffix: 'B', icon: DollarSign, color: '#4A7CFF' },
              { label: 'Patent Filings', value: 445, suffix: 'k', icon: FileText, color: '#FFB020' },
              { label: 'AI Talent Pool', value: 774, suffix: 'k+', icon: Users, color: '#2EE6A6' },
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-[#151922] border border-[#242A36] rounded-2xl p-6 hover:border-[#2EE6A6]/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className="w-6 h-6" style={{ color: metric.color }} />
                  <TrendingUp className="w-4 h-4 text-[#2EE6A6]" />
                </div>
                <div className="text-3xl font-light mb-2" style={{ color: metric.color }}>
                  <AnimatedCounter value={metric.value} suffix={metric.suffix || ''} isInView={heroInView} />
                </div>
                <div className="text-sm text-[#8F98A8]">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Startup Dominance Visualization */}
      <section ref={startupsRef} className="py-20 px-6 md:px-10 bg-[#151922]/30">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={startupsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-light text-[#EAECEF] mb-4">
                AI Startups by Country (2025)
              </h2>
              <p className="text-lg text-[#8F98A8]">
                US holds <span className="text-[#2EE6A6] font-medium">45%</span> of global funded AI startups
              </p>
            </div>

            <div className="space-y-4">
              {countryData.map((country, idx) => {
                const maxStartups = countryData[0].startups;
                const percentage = (country.startups / maxStartups) * 100;
                
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -50 }}
                    animate={startupsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: idx * 0.05, duration: 0.6 }}
                    className="group"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-8 text-center">
                        <span className="text-2xl">{country.flag}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-[#EAECEF]">{country.country}</span>
                          <span className="text-sm text-[#8F98A8]">{country.startups.toLocaleString()}</span>
                        </div>
                        <div className="relative h-8 bg-[#242A36] rounded-lg overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={startupsInView ? { width: `${percentage}%` } : {}}
                            transition={{ delay: idx * 0.05 + 0.3, duration: 1, ease: 'easeOut' }}
                            className={`absolute inset-y-0 left-0 ${
                              idx === 0 ? 'bg-gradient-to-r from-[#2EE6A6] to-[#25B888]' :
                              idx === 1 ? 'bg-gradient-to-r from-[#4A7CFF] to-[#3D66D9]' :
                              'bg-gradient-to-r from-[#8F98A8] to-[#6B7280]'
                            } group-hover:opacity-90 transition-opacity`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Funding Power Comparison */}
      <section ref={fundingRef} className="py-32 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={fundingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-[#EAECEF] mb-4">
                Funding Power Comparison
              </h2>
              <p className="text-lg text-[#FFB020]">
                Capital Concentration Gap: US funding is 4× China
              </p>
            </div>

            <div className="grid grid-cols-10 gap-4 items-end h-[400px]">
              {countryData.map((country, idx) => {
                const maxFunding = countryData[0].funding;
                const heightPercentage = (country.funding / maxFunding) * 100;
                
                return (
                  <motion.div
                    key={idx}
                    initial={{ height: 0, opacity: 0 }}
                    animate={fundingInView ? { height: `${heightPercentage}%`, opacity: 1 } : {}}
                    transition={{ delay: idx * 0.1, duration: 0.8, ease: 'easeOut' }}
                    className="relative group cursor-pointer"
                  >
                    <div
                      className={`w-full h-full rounded-t-lg ${
                        idx === 0 ? 'bg-gradient-to-t from-[#2EE6A6] to-[#25B888]' :
                        idx === 1 ? 'bg-gradient-to-t from-[#4A7CFF] to-[#3D66D9]' :
                        'bg-gradient-to-t from-[#8F98A8] to-[#6B7280]'
                      } hover:opacity-90 transition-opacity relative`}
                    >
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <div className="bg-[#0F1115] border border-[#242A36] rounded-lg px-3 py-2 text-xs whitespace-nowrap">
                          <div className="font-medium text-[#EAECEF]">${country.funding}B</div>
                          <div className="text-[#8F98A8]">{country.country}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-2 text-center">
                      <div className="text-xl mb-1">{country.flag}</div>
                      <div className="text-xs text-[#8F98A8] truncate">{country.country.split(' ')[0]}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Patent Leadership */}
      <section ref={patentsRef} className="py-20 px-6 md:px-10 bg-[#151922]/30">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={patentsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-light text-[#EAECEF] mb-4">
                Patent Leadership — Innovation Engine
              </h2>
              <div className="flex flex-col md:flex-row gap-6 mt-8">
                <div className="flex-1 bg-[#151922] border border-[#242A36] rounded-2xl p-6">
                  <div className="text-sm text-[#8F98A8] mb-2">Patent Volume Leader</div>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">🇨🇳</span>
                    <div>
                      <div className="text-3xl font-light text-[#4A7CFF]">301k</div>
                      <div className="text-sm text-[#8F98A8]">China dominates patent volume</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 bg-[#151922] border border-[#242A36] rounded-2xl p-6">
                  <div className="text-sm text-[#8F98A8] mb-2">Startup Quality Leader</div>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">🇺🇸</span>
                    <div>
                      <div className="text-3xl font-light text-[#2EE6A6]">$471B</div>
                      <div className="text-sm text-[#8F98A8]">US leads startup quality + capital</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Patents Chart */}
              <div>
                <h3 className="text-lg font-medium text-[#EAECEF] mb-6">Patent Filings (thousands)</h3>
                <div className="space-y-3">
                  {countryData.slice(0, 6).map((country, idx) => {
                    const maxPatents = Math.max(...countryData.map(c => c.patents));
                    const percentage = (country.patents / maxPatents) * 100;
                    
                    return (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 text-center text-lg">{country.flag}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-[#8F98A8]">{country.country}</span>
                            <span className="text-xs text-[#EAECEF]">{country.patents}k</span>
                          </div>
                          <div className="h-2 bg-[#242A36] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={patentsInView ? { width: `${percentage}%` } : {}}
                              transition={{ delay: idx * 0.1, duration: 0.8 }}
                              className="h-full bg-gradient-to-r from-[#FFB020] to-[#FF8C00]"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Startups vs Patents Scatter Insight */}
              <div className="bg-[#151922] border border-[#242A36] rounded-2xl p-6">
                <h3 className="text-lg font-medium text-[#EAECEF] mb-4">Strategic Insight</h3>
                <div className="space-y-4 text-sm text-[#8F98A8] leading-relaxed">
                  <p>
                    <span className="text-[#4A7CFF] font-medium">China</span> leads in absolute patent volume (301k filings), reflecting massive R&D scale and government IP strategy.
                  </p>
                  <p>
                    <span className="text-[#2EE6A6] font-medium">United States</span> dominates in funded startups (5,509) and total capital ($471B), indicating superior commercialization and ecosystem synergy.
                  </p>
                  <p className="text-[#FFB020]">
                    Patent quantity ≠ market dominance. Capital deployment and talent density drive sustainable AI leadership.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Talent Pool & Adoption */}
      <section ref={talentRef} className="py-32 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={talentInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-[#EAECEF] mb-4">
                Talent Pool & Adoption
              </h2>
              <p className="text-lg text-[#8F98A8]">
                Talent concentration sustains long-term ecosystem dominance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Talent Distribution */}
              <div>
                <h3 className="text-xl font-medium text-[#EAECEF] mb-8">AI Talent Distribution</h3>
                <div className="space-y-4">
                  {countryData.slice(0, 5).map((country, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      animate={talentInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-[#151922] border border-[#242A36] rounded-xl p-5 hover:border-[#2EE6A6]/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{country.flag}</span>
                          <div>
                            <div className="text-sm font-medium text-[#EAECEF]">{country.country}</div>
                            <div className="text-xs text-[#8F98A8]">AI Specialists</div>
                          </div>
                        </div>
                        <div className="text-2xl font-light text-[#2EE6A6]">{country.talent}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Adoption Percentage Cards */}
              <div>
                <h3 className="text-xl font-medium text-[#EAECEF] mb-8">Workforce AI Adoption</h3>
                <div className="grid grid-cols-2 gap-4">
                  {countryData.map((country, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={talentInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-[#151922] border border-[#242A36] rounded-xl p-4 text-center hover:border-[#4A7CFF]/50 transition-colors"
                    >
                      <div className="text-3xl mb-2">{country.flag}</div>
                      <div className="text-3xl font-light text-[#4A7CFF] mb-1">
                        {country.adoption}%
                      </div>
                      <div className="text-xs text-[#8F98A8]">{country.country}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-[#4A7CFF]/10 border border-[#4A7CFF]/30 rounded-xl">
                  <div className="text-sm text-[#4A7CFF]">
                    <strong>China leads adoption at 91%</strong> — Highest workforce AI integration globally
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Ecosystem Model Diagram */}
      <section ref={ecosystemRef} className="py-20 px-6 md:px-10 bg-[#151922]/30">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={ecosystemInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-[#EAECEF] mb-4">
                AI Ecosystem Feedback Loop
              </h2>
              <p className="text-lg text-[#8F98A8]">
                US ecosystem synergy: Talent + Capital alignment
              </p>
            </div>

            <div className="relative max-w-[900px] mx-auto">
              {/* Flow diagram */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {[
                  { label: 'Talent', icon: Users, color: '#2EE6A6' },
                  { label: 'Capital', icon: DollarSign, color: '#4A7CFF' },
                  { label: 'Startups', icon: Zap, color: '#FFB020' },
                  { label: 'Patents', icon: FileText, color: '#2EE6A6' },
                  { label: 'Adoption', icon: TrendingUp, color: '#4A7CFF' },
                ].map((node, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={ecosystemInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                    className="relative"
                  >
                    <div className="bg-[#151922] border-2 rounded-2xl p-8 text-center min-w-[140px]"
                         style={{ borderColor: node.color }}>
                      <node.icon className="w-10 h-10 mx-auto mb-3" style={{ color: node.color }} />
                      <div className="text-lg font-medium text-[#EAECEF]">{node.label}</div>
                    </div>
                    {idx < 4 && (
                      <div className="hidden md:block absolute top-1/2 -right-8 w-8">
                        <ArrowRight className="w-6 h-6 text-[#8F98A8]" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Feedback loop arrow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={ecosystemInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2 }}
                className="hidden md:block mt-8 text-center"
              >
                <div className="inline-flex items-center gap-2 text-sm text-[#8F98A8]">
                  <span>Continuous feedback loop</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Top 10 Country Cards Grid */}
      <section ref={cardsRef} className="py-32 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={cardsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-[#EAECEF] mb-4">
                Top 10 AI Superpowers — Complete Analysis
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {countryData.map((country, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.05, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-[#151922] border border-[#242A36] rounded-2xl p-6 hover:border-[#2EE6A6]/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{country.flag}</div>
                    <div className="text-xs font-medium text-[#8F98A8]">#{country.rank}</div>
                  </div>

                  <h3 className="text-lg font-medium text-[#EAECEF] mb-6">{country.country}</h3>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-[#8F98A8]">Startups</span>
                      <span className="text-sm font-medium text-[#2EE6A6]">{country.startups.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-[#8F98A8]">Funding</span>
                      <span className="text-sm font-medium text-[#4A7CFF]">${country.funding}B</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-[#8F98A8]">Patents</span>
                      <span className="text-sm font-medium text-[#FFB020]">{country.patents}k</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-[#8F98A8]">Adoption</span>
                      <span className="text-sm font-medium text-[#EAECEF]">{country.adoption}%</span>
                    </div>
                  </div>

                  {/* Hover expansion */}
                  <div className="mt-4 pt-4 border-t border-[#242A36] opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-xs text-[#8F98A8]">
                      Talent: <span className="text-[#EAECEF]">{country.talent}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 8: Key Strategic Insights */}
      <section ref={insightsRef} className="py-20 px-6 md:px-10 bg-[#151922]/30">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={insightsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-[#EAECEF] mb-16 text-center">
              Key Strategic Insights
            </h2>

            <div className="space-y-12">
              {[
                {
                  quote: "US ecosystem synergy sustains dominance.",
                  context: "Alignment of capital, talent, and commercialization infrastructure creates self-reinforcing competitive advantage.",
                  color: '#2EE6A6'
                },
                {
                  quote: "China leads patent volume at scale.",
                  context: "301k AI patents demonstrate massive R&D investment and government-backed innovation push.",
                  color: '#4A7CFF'
                },
                {
                  quote: "India shows fastest growth trajectory.",
                  context: "150k+ talent pool with +125% YoY funding growth positions India as emerging AI superpower.",
                  color: '#FFB020'
                },
              ].map((insight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={insightsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.2 }}
                  className="relative pl-8 border-l-4"
                  style={{ borderColor: insight.color }}
                >
                  <div className="text-2xl md:text-3xl font-light text-[#EAECEF] mb-4 leading-snug">
                    "{insight.quote}"
                  </div>
                  <p className="text-base text-[#8F98A8] leading-relaxed max-w-[700px]">
                    {insight.context}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 9: Methodology Panel */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#151922] border border-[#242A36] rounded-2xl p-12">
            <h2 className="text-2xl font-light text-[#EAECEF] mb-8 text-center">
              Methodology & Sources
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-sm text-[#8F98A8]">
              <div>
                <h3 className="text-base font-medium text-[#EAECEF] mb-4">Data Sources</h3>
                <ul className="space-y-2">
                  <li>• Forbes — Global AI Nation Rankings</li>
                  <li>• Stanford AI Index 2025 — Research & Metrics</li>
                  <li>• Crunchbase — Funding & Startup Data</li>
                  <li>• Visual Capitalist — Investment Analysis</li>
                  <li>• Tortoise Media — Global AI Index</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-medium text-[#EAECEF] mb-4">Methodology</h3>
                <p className="leading-relaxed">
                  Data aggregated from verified 2025 sources. Startup counts include AI-native firms with &gt;$1.5M funding. Patent data from 2024 filings. Talent pool estimates based on LinkedIn AI specialist counts. Adoption percentages from enterprise workforce surveys.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#242A36] text-center text-xs text-[#8F98A8]">
              Report compiled February 2026 • Data accuracy verified through cross-source validation
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-10 bg-[#0F1115] border-t border-[#242A36]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <motion.button
              onClick={() => onNavigate?.('home-v8')}
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-sm text-[#2EE6A6] hover:text-[#25B888] font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Resources</span>
            </motion.button>

            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => onNavigate?.('bcg-ai-consumer')}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-[#151922] hover:bg-[#1a1f2e] text-[#EAECEF] text-sm font-medium rounded-lg border border-[#242A36] transition-colors"
              >
                GenAI Consumer Report
              </motion.button>
              <motion.button
                onClick={() => onNavigate?.('ai-industry-use-cases')}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-[#151922] hover:bg-[#1a1f2e] text-[#EAECEF] text-sm font-medium rounded-lg border border-[#242A36] transition-colors"
              >
                AI Industry Use Cases
              </motion.button>
            </div>
          </div>

          <div className="text-center text-xs text-[#8F98A8]">
            StartupAI © 2026 • Global AI Intelligence Platform
          </div>
        </div>
      </footer>
    </div>
  );
}
