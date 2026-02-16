/**
 * Fashion 2026 V3 - Premium Interactive Report
 * 
 * Luxury scroll-driven storytelling with:
 * - Scroll-triggered animations & parallax effects
 * - Alternating light/dark background transitions
 * - Premium typography (serif + sans-serif)
 * - Visual diagrams, flowcharts, and illustrated cards
 * - Sophisticated color palette
 * - BCG/McKinsey-inspired consulting aesthetic
 * 
 * Source: BoF × McKinsey State of Fashion 2026
 */

'use client';

import { useState, useEffect, useRef } from 'react';
import { Download, Share2, TrendingUp, TrendingDown, AlertTriangle, DollarSign, Globe, Users, Target, ArrowRight, CheckCircle, XCircle, Circle } from 'lucide-react';
import exampleImage1 from 'figma:asset/e95a7785694f819ac9a60f922a345ef3aaa9b030.png';
import exampleImage2 from 'figma:asset/99df5d2df0ff05e5f64bf0e6941a8efd30b9c426.png';
import exampleImage3 from 'figma:asset/9d5151e13cbd5f7e8dc8260e714372b450316043.png';

interface SectionProps {
  onNavigate?: (page: string) => void;
}

export default function Fashion2026V3({ onNavigate }: SectionProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress and section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Determine current section (0-7 for 8 sections)
      const section = Math.floor((scrollTop / docHeight) * 8);
      setCurrentSection(Math.min(section, 7));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get background color based on scroll position
  // Alternating light/dark for visual rhythm
  const getBackgroundColor = () => {
    const colors = [
      '#F1EEEA', // Warm Ivory - Hero
      '#2A4E45', // Dark green - Visual Cards (The Paradox)
      '#F1EEEA', // Warm Ivory - Stats
      '#0E3E1B', // Dark forest green - Market Flowchart
      '#F1EEEA', // Warm Ivory - Tariff Crisis
      '#12211D', // Very dark green - Solutions
      '#F1EEEA', // Warm Ivory - Timeline
      '#2A4E45', // Dark green - CTA
    ];
    return colors[currentSection] || '#F1EEEA';
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'State of Fashion 2026 - The No-Hype AI Report',
        text: 'Explore the future of fashion in this interactive premium report',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleExport = () => {
    alert('Export to PDF coming soon!');
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#0E3E1B]/10">
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate?.('home-v8')}
              className="text-sm text-[#212427] hover:text-[#0E3E1B] transition-colors font-medium"
            >
              ← Back
            </button>
            <div className="h-6 w-px bg-[#0E3E1B]/20"></div>
            <h1 className="text-lg font-light text-[#212427] tracking-tight">
              State of Fashion 2026
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="p-2.5 rounded-full border border-[#0E3E1B]/20 hover:bg-[#0E3E1B]/5 transition-all"
              aria-label="Share report"
            >
              <Share2 className="w-4 h-4 text-[#212427]" />
            </button>
            <button
              onClick={handleExport}
              className="p-2.5 rounded-full border border-[#0E3E1B]/20 hover:bg-[#0E3E1B]/5 transition-all"
              aria-label="Export report"
            >
              <Download className="w-4 h-4 text-[#212427]" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0E3E1B]/10">
          <div
            className="h-full bg-[#CB9FD2] transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </header>

      {/* Section Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((section) => (
          <button
            key={section}
            onClick={() => {
              const targetScroll = (section / 8) * (document.documentElement.scrollHeight - window.innerHeight);
              window.scrollTo({ top: targetScroll, behavior: 'smooth' });
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSection === section
                ? 'bg-[#CB9FD2] scale-150'
                : 'bg-[#0E3E1B]/30 hover:bg-[#0E3E1B]/50'
            }`}
            aria-label={`Go to section ${section + 1}`}
          />
        ))}
      </div>

      {/* Hero Section - LIGHT BACKGROUND */}
      <section className="relative min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Hero Typography */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#CB9FD2]/30 bg-[#CB9FD2]/10">
              <span className="text-xs uppercase tracking-wider text-[#CB9FD2] font-medium">
                BoF × McKinsey Report 2026
              </span>
            </div>

            <h1
              className="text-[72px] lg:text-[96px] leading-[0.95] tracking-tight text-[#212427]"
              style={{
                fontFamily: 'Georgia, Cambria, "Times New Roman", serif',
                fontStyle: 'italic',
              }}
            >
              The No-Hype
              <br />
              <span className="text-[#8B7AC8]">AI Report</span>
            </h1>

            <p className="text-xl text-[#212427]/70 leading-relaxed max-w-[500px]" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              The real story behind GenAI's impact on creative professionals and the fashion industry
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-4xl font-light text-[#8B7AC8]" style={{ fontFamily: 'Georgia, serif' }}>
                  79%
                </div>
                <div className="text-sm text-[#212427]/60 mt-1">want bolder work</div>
              </div>
              <div className="h-12 w-px bg-[#0E3E1B]/20"></div>
              <div className="text-center">
                <div className="text-4xl font-light text-[#FFC9C1]" style={{ fontFamily: 'Georgia, serif' }}>
                  $2.4T
                </div>
                <div className="text-sm text-[#212427]/60 mt-1">market by 2030</div>
              </div>
            </div>
          </div>

          {/* Right: Featured Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#0E3E1B]/10 shadow-2xl">
              <img
                src={exampleImage2}
                alt="The No-Hype AI Report"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-[#212427]/60 uppercase tracking-wider">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#8B7AC8] to-transparent"></div>
        </div>
      </section>

      {/* Section 1: Visual Cards - DARK BACKGROUND */}
      <section className="relative min-h-screen flex items-center px-8 py-32">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-[#FFC9C1]/20 mb-6">
              <span className="text-xs uppercase tracking-wider text-[#FFC9C1] font-medium">The Paradox</span>
            </div>
            <h2
              className="text-6xl lg:text-7xl text-[#F1EEEA] leading-tight mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Visuals{' '}
              <span className="text-[#8B7AC8]" style={{ fontStyle: 'italic' }}>
                at the speed
              </span>
              <br />
              <span style={{ fontStyle: 'italic' }}>of thought</span>
            </h2>
            <p className="text-xl text-[#F1EEEA]/80 max-w-[700px] leading-relaxed">
              A picture's worth a thousand words, but what about when you need thousands of them?
            </p>
          </div>

          {/* Illustrated Visual Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Card 1: Standard Image Generation */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition-all duration-500">
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#A8E6A1] flex items-center justify-center">
                <span className="text-[#0E3E1B] font-bold text-lg">01</span>
              </div>

              <h3 className="text-2xl font-semibold text-[#F1EEEA] mb-4">
                Standard image generation
              </h3>

              <p className="text-[#F1EEEA]/70 leading-relaxed mb-8">
                Crafting visuals in batches by prompting generative AI image tools is fast, flexible and ideal for one-off campaigns or testing new visual directions.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#A8E6A1] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#F1EEEA]/80">Fast, flexible, and cost-effective</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#A8E6A1] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#F1EEEA]/80">Ideal for campaigns and testing</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#A8E6A1] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#F1EEEA]/80">One-off creative directions</span>
                </div>
              </div>
            </div>

            {/* Card 2: Custom AI Models */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition-all duration-500">
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#8B7AC8] flex items-center justify-center">
                <span className="text-white font-bold text-lg">02</span>
              </div>

              <h3 className="text-2xl font-semibold text-[#F1EEEA] mb-4">
                Custom AI image models
              </h3>

              <p className="text-[#F1EEEA]/70 leading-relaxed mb-8">
                Training a model on a brand's imagery to generate consistent, high-quality visuals is ideal for teams looking to scale production.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8B7AC8] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#F1EEEA]/80">Consistent brand imagery</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8B7AC8] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#F1EEEA]/80">High-quality visual production</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8B7AC8] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#F1EEEA]/80">Scalable for enterprise teams</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Paradox - DARK BACKGROUND */}
      <section className="relative min-h-screen flex items-center px-8 py-32">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left: Stats Visualization */}
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#FFC9C1]/20 mb-4">
                <span className="text-xs uppercase tracking-wider text-[#FFC9C1] font-medium">The Paradox</span>
              </div>

              <h2
                className="text-5xl lg:text-6xl text-[#F1EEEA] leading-tight"
                style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
              >
                79% of professionals say they want to create bolder work, but they are always racing against the clock.
              </h2>

              {/* Stats Image */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 mt-8 shadow-2xl">
                <img
                  src={exampleImage1}
                  alt="Professional priorities data"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right: Key Insights */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFC9C1]/20 flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="w-6 h-6 text-[#FFC9C1]" />
                  </div>
                  <div>
                    <div className="text-4xl font-light text-[#FFC9C1] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      85%
                    </div>
                    <p className="text-[#F1EEEA]/80 leading-relaxed">
                      In the past few months, we've had to prioritize day-to-day administrative and operations work over creative/design work
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#8B7AC8]/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-[#8B7AC8]" />
                  </div>
                  <div>
                    <div className="text-4xl font-light text-[#8B7AC8] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      81%
                    </div>
                    <p className="text-[#F1EEEA]/80 leading-relaxed">
                      In the past few months, we've had to prioritize mundane production work over highly creative projects and/or big picture thinking
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#697485]/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-[#697485]" />
                  </div>
                  <div>
                    <div className="text-4xl font-light text-[#A8E6A1] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      79%
                    </div>
                    <p className="text-[#F1EEEA]/80 leading-relaxed">
                      I want to create bolder work, but I'm always racing against the clock
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Market Size Flowchart - LIGHT BACKGROUND */}
      <section className="relative min-h-screen flex items-center px-8 py-32">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="text-center mb-20">
            <div className="inline-block px-3 py-1 rounded-full bg-[#8B7AC8]/20 mb-6">
              <span className="text-xs uppercase tracking-wider text-[#8B7AC8] font-medium">Market Outlook</span>
            </div>
            <h2
              className="text-6xl lg:text-7xl text-[#212427] leading-tight mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Fashion's <span className="text-[#8B7AC8]">$2 Trillion</span> Crossroads
            </h2>
            <p className="text-xl text-[#212427]/70 max-w-[800px] mx-auto">
              The global fashion industry stands at an inflection point as it navigates toward $2.4 trillion by 2030
            </p>
          </div>

          {/* Market Growth Flowchart */}
          <div className="relative max-w-[1000px] mx-auto">
            {/* Timeline Flow */}
            <div className="flex items-center justify-between relative">
              {/* 2024 Node */}
              <div className="flex flex-col items-center z-10">
                <div className="w-32 h-32 rounded-full bg-white border-4 border-[#0E3E1B] flex items-center justify-center mb-4 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0E3E1B]" style={{ fontFamily: 'Georgia, serif' }}>
                      $2.0T
                    </div>
                    <div className="text-xs text-[#697485] uppercase tracking-wider">2024</div>
                  </div>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 border border-[#0E3E1B]/20 shadow-md">
                  <p className="text-sm text-[#212427] font-medium whitespace-nowrap">Current Market</p>
                </div>
              </div>

              {/* Connection Line */}
              <div className="flex-1 h-1 bg-gradient-to-r from-[#0E3E1B] via-[#8B7AC8] to-[#FFC9C1] mx-8 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full border-2 border-[#8B7AC8] shadow-lg">
                  <span className="text-xs text-[#8B7AC8] font-bold whitespace-nowrap">+20% Growth</span>
                </div>
              </div>

              {/* 2030 Node */}
              <div className="flex flex-col items-center z-10">
                <div className="w-32 h-32 rounded-full bg-[#8B7AC8] flex items-center justify-center mb-4 border-4 border-[#0E3E1B] shadow-2xl shadow-[#8B7AC8]/40">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
                      $2.4T
                    </div>
                    <div className="text-xs text-white/90 uppercase tracking-wider">2030</div>
                  </div>
                </div>
                <div className="bg-[#8B7AC8]/20 rounded-lg px-4 py-2 border border-[#8B7AC8]/50 shadow-md">
                  <p className="text-sm text-[#212427] font-medium whitespace-nowrap">Projected Market</p>
                </div>
              </div>
            </div>

            {/* Key Drivers Below */}
            <div className="grid grid-cols-3 gap-6 mt-20">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#FFC9C1]/20 flex items-center justify-center mx-auto mb-4 border border-[#FFC9C1]/30">
                  <Globe className="w-8 h-8 text-[#FFC9C1]" />
                </div>
                <h4 className="text-sm font-semibold text-[#212427] mb-2">Global Expansion</h4>
                <p className="text-xs text-[#212427]/60">Emerging markets driving demand</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#8B7AC8]/20 flex items-center justify-center mx-auto mb-4 border border-[#8B7AC8]/30">
                  <Users className="w-8 h-8 text-[#8B7AC8]" />
                </div>
                <h4 className="text-sm font-semibold text-[#212427] mb-2">Consumer Behavior</h4>
                <p className="text-xs text-[#212427]/60">Shift toward premium & sustainable</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#697485]/20 flex items-center justify-center mx-auto mb-4 border border-[#697485]/30">
                  <TrendingUp className="w-8 h-8 text-[#697485]" />
                </div>
                <h4 className="text-sm font-semibold text-[#212427] mb-2">Digital Innovation</h4>
                <p className="text-xs text-[#212427]/60">E-commerce & AI transformation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Tariff Crisis - DARK BACKGROUND */}
      <section className="relative min-h-screen flex items-center px-8 py-32">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-[#FFC9C1]/20 mb-6">
              <span className="text-xs uppercase tracking-wider text-[#FFC9C1] font-medium">Crisis Point</span>
            </div>
            <h2
              className="text-6xl lg:text-7xl text-[#F1EEEA] leading-tight mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              The <span className="text-[#FFC9C1]">$27B Tariff</span>
              <br />
              Tax on Fashion
            </h2>
            <p className="text-xl text-[#F1EEEA]/80 max-w-[700px]">
              New tariff policies threaten to add $27 billion in costs across the fashion supply chain
            </p>
          </div>

          {/* Impact Breakdown */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Impact 1 */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#FFC9C1]/50 hover:bg-white/10 transition-all duration-500">
              <div className="absolute -top-4 left-8">
                <div className="bg-[#FFC9C1] rounded-full px-4 py-1 shadow-lg">
                  <span className="text-xs font-semibold text-[#0E3E1B] uppercase tracking-wider">
                    Price Shock
                  </span>
                </div>
              </div>

              <div className="mt-4 mb-6">
                <div className="text-5xl font-light text-[#FFC9C1] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  +20%
                </div>
                <p className="text-sm text-[#F1EEEA]/60">Average price increase on imports</p>
              </div>

              <p className="text-[#F1EEEA]/80 text-sm leading-relaxed mb-4">
                Consumers will face significantly higher prices as brands pass tariff costs downstream, potentially reducing demand.
              </p>

              <div className="flex items-center gap-2 text-xs text-[#FFC9C1]">
                <TrendingUp className="w-4 h-4" />
                <span>Consumer impact: High</span>
              </div>
            </div>

            {/* Impact 2 */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#8B7AC8]/50 hover:bg-white/10 transition-all duration-500">
              <div className="absolute -top-4 left-8">
                <div className="bg-[#8B7AC8] rounded-full px-4 py-1 shadow-lg">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    Margin Squeeze
                  </span>
                </div>
              </div>

              <div className="mt-4 mb-6">
                <div className="text-5xl font-light text-[#8B7AC8] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  -15%
                </div>
                <p className="text-sm text-[#F1EEEA]/60">Expected margin compression</p>
              </div>

              <p className="text-[#F1EEEA]/80 text-sm leading-relaxed mb-4">
                Brands unable to pass costs to consumers will see profitability decline, forcing operational restructuring.
              </p>

              <div className="flex items-center gap-2 text-xs text-[#8B7AC8]">
                <TrendingDown className="w-4 h-4" />
                <span>Brand impact: Critical</span>
              </div>
            </div>

            {/* Impact 3 */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#697485]/50 hover:bg-white/10 transition-all duration-500">
              <div className="absolute -top-4 left-8">
                <div className="bg-[#697485] rounded-full px-4 py-1 shadow-lg">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    Supply Chain
                  </span>
                </div>
              </div>

              <div className="mt-4 mb-6">
                <div className="text-5xl font-light text-[#A8E6A1] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  $27B
                </div>
                <p className="text-sm text-[#F1EEEA]/60">Total industry burden</p>
              </div>

              <p className="text-[#F1EEEA]/80 text-sm leading-relaxed mb-4">
                Manufacturers and logistics partners will need to restructure global supply chains to minimize tariff exposure.
              </p>

              <div className="flex items-center gap-2 text-xs text-[#A8E6A1]">
                <AlertTriangle className="w-4 h-4" />
                <span>Ecosystem impact: Severe</span>
              </div>
            </div>
          </div>

          {/* Visual Diagram */}
          <div className="mt-16 relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <h3 className="text-2xl font-light text-[#F1EEEA] mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Tariff Flow: From Factory to Consumer
            </h3>

            <div className="flex items-center justify-between">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#697485]/30 border border-[#697485]/50 flex items-center justify-center mb-3">
                  <DollarSign className="w-10 h-10 text-[#A8E6A1]" />
                </div>
                <p className="text-sm text-[#F1EEEA] text-center font-medium">Production<br />Cost</p>
              </div>

              <ArrowRight className="w-8 h-8 text-[#F1EEEA]/40" />

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#FFC9C1]/30 border border-[#FFC9C1]/50 flex items-center justify-center mb-3">
                  <AlertTriangle className="w-10 h-10 text-[#FFC9C1]" />
                </div>
                <p className="text-sm text-[#F1EEEA] text-center font-medium">Tariff<br />Added</p>
              </div>

              <ArrowRight className="w-8 h-8 text-[#F1EEEA]/40" />

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#8B7AC8]/30 border border-[#8B7AC8]/50 flex items-center justify-center mb-3">
                  <TrendingUp className="w-10 h-10 text-[#8B7AC8]" />
                </div>
                <p className="text-sm text-[#F1EEEA] text-center font-medium">Wholesale<br />Markup</p>
              </div>

              <ArrowRight className="w-8 h-8 text-[#F1EEEA]/40" />

              {/* Step 4 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#F1EEEA]/90 border-2 border-white flex items-center justify-center mb-3">
                  <Users className="w-10 h-10 text-[#0E3E1B]" />
                </div>
                <p className="text-sm text-[#F1EEEA] text-center font-medium">Consumer<br />Price</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Solutions & Strategy - LIGHT BACKGROUND */}
      <section className="relative min-h-screen flex items-center px-8 py-32">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-[#8B7AC8]/20 mb-6">
              <span className="text-xs uppercase tracking-wider text-[#8B7AC8] font-medium">Strategic Response</span>
            </div>
            <h2
              className="text-6xl lg:text-7xl text-[#212427] leading-tight mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              How Leaders <span className="text-[#8B7AC8]">Are Adapting</span>
            </h2>
          </div>

          {/* Strategy Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Strategy 1 */}
            <div className="bg-white border border-[#8B7AC8]/20 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#8B7AC8] flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#212427] mb-2">AI-Driven Efficiency</h3>
                  <p className="text-[#697485] text-sm">Automation & Intelligence</p>
                </div>
              </div>

              <p className="text-[#212427]/80 leading-relaxed mb-6">
                Leading brands are deploying AI tools to automate creative production, reduce time-to-market, and optimize inventory management—freeing teams to focus on strategic creative work.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-[#8B7AC8] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#212427]/70">Generative AI for visual content</span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-[#8B7AC8] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#212427]/70">Predictive analytics for demand</span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-[#8B7AC8] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#212427]/70">Workflow automation at scale</span>
                </li>
              </ul>
            </div>

            {/* Strategy 2 */}
            <div className="bg-white border border-[#FFC9C1]/20 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#FFC9C1] flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-[#0E3E1B]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#212427] mb-2">Supply Chain Redesign</h3>
                  <p className="text-[#697485] text-sm">Nearshoring & Diversification</p>
                </div>
              </div>

              <p className="text-[#212427]/80 leading-relaxed mb-6">
                Companies are restructuring supply chains to reduce tariff exposure through nearshoring, regional manufacturing hubs, and diversified sourcing strategies.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-[#FFC9C1] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#212427]/70">Move production closer to markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-[#FFC9C1] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#212427]/70">Multi-country sourcing strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-[#FFC9C1] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#212427]/70">Vertical integration investments</span>
                </li>
              </ul>
            </div>

            {/* Strategy 3 */}
            <div className="bg-white border border-[#697485]/20 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#697485] flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#212427] mb-2">Premium Positioning</h3>
                  <p className="text-[#697485] text-sm">Value Over Volume</p>
                </div>
              </div>

              <p className="text-[#212427]/80 leading-relaxed mb-6">
                Shifting from volume-driven models to premium, sustainable offerings that command higher margins and justify price increases to consumers.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-[#697485] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#212427]/70">Focus on quality and craftsmanship</span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-[#697485] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#212427]/70">Sustainability as differentiator</span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-[#697485] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#212427]/70">Direct-to-consumer channels</span>
                </li>
              </ul>
            </div>

            {/* Strategy 4 */}
            <div className="bg-white border border-[#0E3E1B]/20 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#0E3E1B] flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#212427] mb-2">Consumer Connection</h3>
                  <p className="text-[#697485] text-sm">Loyalty & Engagement</p>
                </div>
              </div>

              <p className="text-[#212427]/80 leading-relaxed mb-6">
                Building deeper relationships with consumers through personalization, storytelling, and community—creating loyalty that transcends price sensitivity.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-[#0E3E1B] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#212427]/70">Personalized shopping experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-[#0E3E1B] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#212427]/70">Brand storytelling & purpose</span>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-[#0E3E1B] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#212427]/70">Community-driven innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Timeline - DARK BACKGROUND */}
      <section className="relative min-h-screen flex items-center px-8 py-32">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="text-center mb-20">
            <div className="inline-block px-3 py-1 rounded-full bg-[#A8E6A1]/20 mb-6">
              <span className="text-xs uppercase tracking-wider text-[#A8E6A1] font-medium">Looking Ahead</span>
            </div>
            <h2
              className="text-6xl lg:text-7xl text-[#F1EEEA] leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              The Road to <span className="text-[#8B7AC8]">2030</span>
            </h2>
          </div>

          {/* Timeline Visualization */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#8B7AC8] via-[#FFC9C1] to-[#A8E6A1]"></div>

            {/* Timeline Events */}
            <div className="space-y-16">
              {/* Event 1 */}
              <div className="flex items-center gap-8">
                <div className="flex-1 text-right">
                  <h3 className="text-2xl font-semibold text-[#F1EEEA] mb-2">2024-2025</h3>
                  <p className="text-[#F1EEEA]/70">Tariff implementation & initial market shock</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-[#FFC9C1] border-4 border-[#12211D] flex items-center justify-center z-10 flex-shrink-0 shadow-xl shadow-[#FFC9C1]/40">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1"></div>
              </div>

              {/* Event 2 */}
              <div className="flex items-center gap-8">
                <div className="flex-1"></div>
                <div className="w-16 h-16 rounded-full bg-[#8B7AC8] border-4 border-[#12211D] flex items-center justify-center z-10 flex-shrink-0 shadow-xl shadow-[#8B7AC8]/40">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#F1EEEA] mb-2">2026-2027</h3>
                  <p className="text-[#F1EEEA]/70">Strategic adaptation & supply chain redesign</p>
                </div>
              </div>

              {/* Event 3 */}
              <div className="flex items-center gap-8">
                <div className="flex-1 text-right">
                  <h3 className="text-2xl font-semibold text-[#F1EEEA] mb-2">2028-2029</h3>
                  <p className="text-[#F1EEEA]/70">AI-driven transformation at scale</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-[#697485] border-4 border-[#12211D] flex items-center justify-center z-10 flex-shrink-0 shadow-xl shadow-[#697485]/40">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1"></div>
              </div>

              {/* Event 4 */}
              <div className="flex items-center gap-8">
                <div className="flex-1"></div>
                <div className="w-16 h-16 rounded-full bg-[#A8E6A1] border-4 border-[#8B7AC8] flex items-center justify-center z-10 flex-shrink-0 shadow-2xl shadow-[#A8E6A1]/50">
                  <CheckCircle className="w-8 h-8 text-[#0E3E1B]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#F1EEEA] mb-2">2030</h3>
                  <p className="text-[#F1EEEA]/70">$2.4T market with new competitive landscape</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA - LIGHT BACKGROUND */}
      <section className="relative min-h-screen flex items-center px-8 py-32">
        <div className="max-w-[900px] mx-auto w-full text-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#8B7AC8]/30 bg-[#8B7AC8]/10 mb-4">
              <span className="text-xs uppercase tracking-wider text-[#8B7AC8] font-medium">
                The Future is Now
              </span>
            </div>

            <h2
              className="text-6xl lg:text-7xl text-[#212427] leading-tight"
              style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
            >
              Don't just adapt.
              <br />
              <span className="text-[#8B7AC8]">Lead the change.</span>
            </h2>

            <p className="text-xl text-[#212427]/70 max-w-[600px] mx-auto leading-relaxed">
              The fashion industry's transformation is underway. Join the brands using AI, strategic thinking, and bold creativity to shape the future.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button
                onClick={() => onNavigate?.('chat-intake')}
                className="px-8 py-4 bg-[#8B7AC8] hover:bg-[#8B7AC8]/90 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-[#8B7AC8]/30"
              >
                Start Your Strategy
              </button>

              <button
                onClick={() => onNavigate?.('home-v8')}
                className="px-8 py-4 bg-white hover:bg-[#0E3E1B]/5 text-[#212427] font-semibold rounded-full border-2 border-[#0E3E1B]/20 transition-all duration-300"
              >
                Explore Platform
              </button>
            </div>

            {/* Source Attribution */}
            <div className="pt-16 border-t border-[#0E3E1B]/10 mt-16">
              <p className="text-sm text-[#212427]/50">
                Source: BoF × McKinsey State of Fashion 2026 | Data compiled from industry research reports
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Adapts to background */}
      <footer className="relative border-t border-[#0E3E1B]/10 py-12 px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-[#8B7AC8] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-sm text-[#212427]/70">© 2026 StartupAI. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-8">
            <button
              onClick={() => onNavigate?.('style-guide')}
              className="text-sm text-[#212427]/70 hover:text-[#8B7AC8] transition-colors"
            >
              Style Guide
            </button>
            <button
              onClick={() => onNavigate?.('sitemap')}
              className="text-sm text-[#212427]/70 hover:text-[#8B7AC8] transition-colors"
            >
              Sitemap
            </button>
            <button className="text-sm text-[#212427]/70 hover:text-[#8B7AC8] transition-colors">
              Privacy
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}