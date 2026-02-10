import { ArrowRight, Check, Target, Zap, Shield, TrendingUp, Users, FileText, BarChart, Lightbulb, ChevronRight, Sparkles, Brain, Layers } from 'lucide-react';
import { ChatWindow } from '../../components/home-v6/ChatWindow';
import { useRef, useState, useEffect } from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { StepList } from '../../components/how-it-works/StepList';
import { AppWindow } from '../../components/how-it-works/AppWindow';
import { useCursorAnimation } from '../../components/how-it-works/useCursorAnimation';
import { StrategySystem } from '../../components/StrategySystem';

interface HomeV8Props {
  onNavigate?: (page: string) => void;
}

const steps = [
  {
    number: 1,
    title: 'Profile',
    description: 'Tell us about your startup once. We do the rest.',
  },
  {
    number: 2,
    title: 'Analysis',
    description: 'AI turns your info into clarity and direction.',
  },
  {
    number: 3,
    title: 'Pitch Deck',
    description: 'Investor-ready materials generated automatically.',
  },
  {
    number: 4,
    title: 'Execution',
    description: 'Execution and relationships in one place.',
  },
];

export default function HomeV8({ onNavigate }: HomeV8Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { activeStep } = useScrollProgress(containerRef);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const { cursorState, uiState } = useCursorAnimation({
    activeStep,
    isInView,
    isPaused: false,
  });

  const handleChatSubmit = (message: string) => {
    console.log('Chat message submitted:', message);
    if (onNavigate) {
      onNavigate('chat-intake');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header - Premium Canvas Style */}
      <header className="border-b border-[#E5E7EB] bg-white/90 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => onNavigate?.('home-v5')}
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-[#3B5F52] to-[#2D4840] rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-base">S</span>
              </div>
              <span className="text-xl font-light text-[#212427] tracking-tight">StartupAI</span>
            </button>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              <button 
                onClick={() => onNavigate?.('lean-canvas-v2')}
                className="text-sm font-medium text-[#6B7280] hover:text-[#3B5F52] transition-colors duration-200"
              >
                Product
              </button>
              <button 
                onClick={() => onNavigate?.('startup-validator-v4')}
                className="text-sm font-medium text-[#6B7280] hover:text-[#3B5F52] transition-colors duration-200"
              >
                Solutions
              </button>
              <button 
                onClick={() => onNavigate?.('style-guide')}
                className="text-sm font-medium text-[#6B7280] hover:text-[#3B5F52] transition-colors duration-200"
              >
                Resources
              </button>
            </nav>

            {/* CTA */}
            <button 
              onClick={() => onNavigate?.('chat-intake')}
              className="px-7 py-3 bg-[#3B5F52] hover:bg-[#2D4840] text-white text-sm font-medium transition-all duration-200 rounded-xl shadow-sm hover:shadow-md"
            >
              Get started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - From /components/Hero.tsx */}
      <section className="bg-[var(--color-canvas)] min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-[1100px] mx-auto w-full space-y-14">
          {/* Headline */}
          <div className="text-center">
            <h1 
              className="text-[56px] md:text-[64px] lg:text-[72px] text-[var(--color-text-primary)] leading-[1.1] tracking-[-0.02em] font-light"
              style={{ 
                fontFamily: 'Georgia, serif',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              From idea to execution.
            </h1>
          </div>

          {/* Chat Window */}
          <div className="max-w-[960px] mx-auto">
            <ChatWindow onSubmit={handleChatSubmit} />
            
            {/* Trust Footer */}
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center gap-3 text-[13px] text-[var(--color-text-tertiary)]">
                <span>AI suggests. You decide.</span>
                <span className="text-[#D4D4D4]">—</span>
                <span>No credit card required.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - From /components/HowItWorks.tsx */}
      <section
        ref={containerRef}
        className="relative bg-[#f5f5f3]"
        style={{ minHeight: '400vh' }}
        aria-label="How StartupAI works"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 w-full">
              {/* Left Column - Sticky Content */}
              <div className="space-y-12">
                <div className="space-y-4">
                  <div className="text-sm uppercase tracking-wider text-[#0d5f4e]">
                    How it works
                  </div>
                  <h2 className="text-4xl lg:text-5xl leading-tight text-gray-900">
                    From strategy to daily execution, in one guided flow.
                  </h2>
                </div>
                
                <StepList steps={steps} activeStep={activeStep} />
              </div>

              {/* Right Column - Fixed App Window */}
              <div className="hidden lg:flex items-center justify-center">
                <AppWindow 
                  activeStep={activeStep} 
                  cursorState={cursorState}
                  uiState={uiState}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Capabilities — Strategy System */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-12 bg-[#0d5f4e]"></span>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0d5f4e]">System Variant 03</p>
            </div>
            <h2 className="text-5xl lg:text-6xl leading-tight text-gray-900 font-light mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              The Intelligent Grid: Strategy as a Service
            </h2>
            <p className="text-xl text-[#6B7280] leading-relaxed">
              A unified strategic operating system designed for modern founders. We combine deep industry intelligence with high-speed execution tools.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Module 01 - Startup Validator */}
            <div className="group flex flex-col bg-white border-2 border-[#0d5f4e] p-10 h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1.5 border border-[#0d5f4e]/20 text-[#0d5f4e]">
                  Module 01
                </span>
                <Sparkles className="w-5 h-5 text-[#0d5f4e]" />
              </div>
              
              <h3 className="text-3xl font-medium text-[#212427] mb-8 leading-tight">
                Startup Validator
              </h3>
              
              <div className="mt-auto space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-2 font-semibold">What it is</p>
                  <p className="text-sm leading-relaxed text-[#374151]">
                    Quickly assess whether an idea is worth pursuing. Identify fatal flaws, weak assumptions, and unclear goals before investing time.
                  </p>
                </div>
                
                <div className="border-t border-[#0d5f4e]/10"></div>
                
                <div className="mb-8">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-2 font-semibold">Primary Outcome</p>
                  <p className="text-sm font-semibold text-[#212427]">
                    Go / No-Go clarity
                  </p>
                </div>
                
                <button
                  onClick={() => onNavigate?.('startup-validator-v4')}
                  className="inline-flex items-center gap-2 text-[#212427] font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all duration-300"
                >
                  Validate Idea
                  <ArrowRight className="w-4 h-4 text-[#0d5f4e]" />
                </button>
              </div>
            </div>

            {/* Module 02 - Strategy Model */}
            <div className="group flex flex-col bg-[#E8F4F1] border border-[#D1E7DD] p-10 h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1.5 border border-[#0d5f4e]/20 text-[#0d5f4e]">
                  Module 02
                </span>
                <Zap className="w-5 h-5 text-[#0d5f4e]" />
              </div>
              
              <h3 className="text-3xl font-medium text-[#212427] mb-8 leading-tight">
                Strategy Model<br />
                <span className="text-xl text-[#6B7280]">Lean Canvas</span>
              </h3>
              
              <div className="mt-auto space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-2 font-semibold">What it is</p>
                  <p className="text-sm leading-relaxed text-[#374151]">
                    Structure your startup's business model across problems, customers, value proposition, channels, and economics — in one system.
                  </p>
                </div>
                
                <div className="border-t border-[#0d5f4e]/10"></div>
                
                <div className="mb-8">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-2 font-semibold">Primary Outcome</p>
                  <p className="text-sm font-semibold text-[#212427]">
                    Strategic clarity
                  </p>
                </div>
                
                <button
                  onClick={() => onNavigate?.('lean-canvas-v2')}
                  className="inline-flex items-center gap-2 text-[#212427] font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all duration-300"
                >
                  Build Canvas
                  <ArrowRight className="w-4 h-4 text-[#0d5f4e]" />
                </button>
              </div>
            </div>

            {/* Module 03 - Market Intelligence */}
            <div className="group flex flex-col bg-[#0d5f4e] p-10 h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-white">
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1.5 border border-white/20">
                  Module 03
                </span>
                <Layers className="w-5 h-5 text-[#E8F4F1]" />
              </div>
              
              <h3 className="text-3xl font-medium mb-8 leading-tight">
                Market Intelligence<br />
                <span className="text-xl text-[#E8F4F1]/80">Market Research</span>
              </h3>
              
              <div className="mt-auto space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#E8F4F1]/70 mb-2 font-semibold">What it is</p>
                  <p className="text-sm leading-relaxed text-[#E8F4F1]/90">
                    Quantify demand, map competitors, and understand customer behavior to validate your strategy with evidence.
                  </p>
                </div>
                
                <div className="border-t border-white/10"></div>
                
                <div className="mb-8">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#E8F4F1]/70 mb-2 font-semibold">Primary Outcome</p>
                  <p className="text-sm font-semibold">
                    Market confidence
                  </p>
                </div>
                
                <button
                  onClick={() => onNavigate?.('market-research-hub')}
                  className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all duration-300"
                >
                  Research Market
                  <ArrowRight className="w-4 h-4 text-[#E8F4F1]" />
                </button>
              </div>
            </div>
          </div>

          {/* Second Row - Modules 04-06 */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-6 lg:mt-8">
            {/* Module 04 - Fundraising Strategy */}
            <div className="group flex flex-col bg-white border-2 border-[#0d5f4e] p-10 h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1.5 border border-[#0d5f4e]/20 text-[#0d5f4e]">
                  Module 04
                </span>
                <Target className="w-5 h-5 text-[#0d5f4e]" />
              </div>
              
              <h3 className="text-3xl font-medium text-[#212427] mb-8 leading-tight">
                Fundraising Strategy<br />
                <span className="text-xl text-[#6B7280]">Investor & Funding Strategy</span>
              </h3>
              
              <div className="mt-auto space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-2 font-semibold">What it is</p>
                  <p className="text-sm leading-relaxed text-[#374151]">
                    Define who should fund you, at what stage, and with what story — based on your strategy and traction.
                  </p>
                </div>
                
                <div className="border-t border-[#0d5f4e]/10"></div>
                
                <div className="mb-8">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-2 font-semibold">Primary Outcome</p>
                  <p className="text-sm font-semibold text-[#212427]">
                    Funding focus
                  </p>
                </div>
                
                <button
                  onClick={() => onNavigate?.('pitch-deck')}
                  className="inline-flex items-center gap-2 text-[#212427] font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all duration-300"
                >
                  Plan Funding
                  <ArrowRight className="w-4 h-4 text-[#0d5f4e]" />
                </button>
              </div>
            </div>

            {/* Module 05 - Communication */}
            <div className="group flex flex-col bg-[#E8F4F1] border border-[#D1E7DD] p-10 h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1.5 border border-[#0d5f4e]/20 text-[#0d5f4e]">
                  Module 05
                </span>
                <TrendingUp className="w-5 h-5 text-[#0d5f4e]" />
              </div>
              
              <h3 className="text-3xl font-medium text-[#212427] mb-8 leading-tight">
                Communication<br />
                <span className="text-xl text-[#6B7280]">Pitch Deck</span>
              </h3>
              
              <div className="mt-auto space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-2 font-semibold">What it is</p>
                  <p className="text-sm leading-relaxed text-[#374151]">
                    Turn your strategy into an investor-ready narrative with clear logic, metrics, and positioning.
                  </p>
                </div>
                
                <div className="border-t border-[#0d5f4e]/10"></div>
                
                <div className="mb-8">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-2 font-semibold">Primary Outcome</p>
                  <p className="text-sm font-semibold text-[#212427]">
                    Investor-ready story
                  </p>
                </div>
                
                <button
                  onClick={() => onNavigate?.('pitch-deck')}
                  className="inline-flex items-center gap-2 text-[#212427] font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all duration-300"
                >
                  Create Deck
                  <ArrowRight className="w-4 h-4 text-[#0d5f4e]" />
                </button>
              </div>
            </div>

            {/* Module 06 - Execution Planning */}
            <div className="group flex flex-col bg-[#0d5f4e] p-10 h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-white">
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1.5 border border-white/20">
                  Module 06
                </span>
                <Brain className="w-5 h-5 text-[#E8F4F1]" />
              </div>
              
              <h3 className="text-3xl font-medium mb-8 leading-tight">
                Execution Planning<br />
                <span className="text-xl text-[#E8F4F1]/80">90-Day Plan</span>
              </h3>
              
              <div className="mt-auto space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#E8F4F1]/70 mb-2 font-semibold">What it is</p>
                  <p className="text-sm leading-relaxed text-[#E8F4F1]/90">
                    Translate strategy into a focused 90-day roadmap with priorities, milestones, and measurable outcomes.
                  </p>
                </div>
                
                <div className="border-t border-white/10"></div>
                
                <div className="mb-8">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-[#E8F4F1]/70 mb-2 font-semibold">Primary Outcome</p>
                  <p className="text-sm font-semibold">
                    Execution momentum
                  </p>
                </div>
                
                <button
                  onClick={() => onNavigate?.('90-day-plan')}
                  className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all duration-300"
                >
                  Build Plan
                  <ArrowRight className="w-4 h-4 text-[#E8F4F1]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 lg:py-24 bg-[#FAF9F7]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-[#212427] font-light mb-4">
              Built for serious founders
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white border border-[#E5E7EB] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-[#3B5F52]" />
              </div>
              <h3 className="text-lg text-[#212427] font-medium mb-2">
                First-Time Founders
              </h3>
              <p className="text-sm text-[#6B7280]">
                Learn startup methodology while building. AI guides you through proven frameworks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white border border-[#E5E7EB] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#3B5F52]" />
              </div>
              <h3 className="text-lg text-[#212427] font-medium mb-2">
                Serial Entrepreneurs
              </h3>
              <p className="text-sm text-[#6B7280]">
                Move faster with AI-powered validation and structured execution planning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white border border-[#E5E7EB] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#3B5F52]" />
              </div>
              <h3 className="text-lg text-[#212427] font-medium mb-2">
                Accelerators & Incubators
              </h3>
              <p className="text-sm text-[#6B7280]">
                Standardize your cohort's strategic thinking and track progress at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Canvas Style */}
      <section className="py-16 lg:py-24 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl text-[#212427] font-light mb-4">
                Ready to turn thinking into execution?
              </h2>
              <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                Start with a simple conversation about your idea. AI handles the structure, you handle the vision.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate?.('chat-intake')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3B5F52] hover:bg-[#2D4840] text-white font-medium transition-all duration-200 rounded-lg"
              >
                Start with Chat Intake
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onNavigate?.('lean-canvas-v2')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-[#FAF9F7] text-[#212427] font-medium border border-[#E5E7EB] transition-all duration-200 rounded-lg"
              >
                Explore Lean Canvas
              </button>
            </div>

            <div className="pt-8 border-t border-[#E5E7EB]">
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div>
                  <div className="text-2xl font-light text-[#3B5F52] mb-1">10,000+</div>
                  <div className="text-sm text-[#6B7280]">Founders</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-[#3B5F52] mb-1">50+</div>
                  <div className="text-sm text-[#6B7280]">Countries</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-[#3B5F52] mb-1">95%</div>
                  <div className="text-sm text-[#6B7280]">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="bg-[#FAF9F7] border-t border-[#E5E7EB] py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Main Footer Content */}
          <div className="mb-12">
            {/* Logo and Tagline */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-gradient-to-br from-[#3B5F52] to-[#2D4840] rounded-xl flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-base">S</span>
                </div>
                <span className="text-xl font-light text-[#212427] tracking-tight">StartupAI</span>
              </div>
              <p className="text-sm text-[#6B7280] ml-12">From strategy to daily execution, in one guided flow.</p>
            </div>

            {/* Footer Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
              {/* PRODUCT */}
              <div>
                <h4 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-4">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <button onClick={() => onNavigate?.('home-v5')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Home V5
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('home-v6')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Home V6
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('home-v7')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Home V7
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('home-v8')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Home V8
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('how-it-works-v3')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      How it works
                    </button>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Security
                    </a>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('events')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Events
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('events-discover')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Discover Events
                    </button>
                  </li>
                </ul>
              </div>

              {/* PAGES */}
              <div>
                <h4 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-4">Pages</h4>
                <ul className="space-y-2">
                  <li>
                    <button onClick={() => onNavigate?.('onboarding-v3')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Onboarding Wizard
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('onboarding-minimal')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Minimal Onboarding
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('onboarding-v3')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Onboarding V3
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('pitch-deck')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Pitch Deck Generator
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('validator-report')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Validator Report
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('validator-v3')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Validator V3 Report
                    </button>
                  </li>
                </ul>
              </div>

              {/* DASHBOARD */}
              <div>
                <h4 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-4">Dashboard</h4>
                <ul className="space-y-2">
                  <li>
                    <button onClick={() => onNavigate?.('dashboard-main')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Main Dashboard
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('dashboard-v2')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Kanban Dashboard
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('chat-intake')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Chat Intake
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('startup-profile')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Startup Profile
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('lean-canvas')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Lean Canvas
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('lean-canvas-ai')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Lean Canvas with AI
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('lean-canvas-v2')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Lean Canvas V2
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('opportunity-canvas')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Opportunity Canvas
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('market-research-hub')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Market Research Hub
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('idea-wall')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Idea Wall
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('story-map')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Story Map
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('experiments-lab')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Experiments Lab
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('90-day-plan')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      90-Day Plan
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('startup-validator')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Startup Validator
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('startup-validator-v2')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Startup Validator V2
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('startup-validator-v3')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Startup Validator V3
                    </button>
                  </li>
                </ul>
              </div>

              {/* COMPANY */}
              <div>
                <h4 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('style-guide')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Style Guide
                    </button>
                  </li>
                </ul>
              </div>

              {/* AI */}
              <div>
                <h4 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-4">AI</h4>
                <ul className="space-y-2">
                  <li>
                    <button onClick={() => onNavigate?.('diagrams-flows')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Flow Diagrams
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('diagrams-ai-flows')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      AI Agent Flows
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('running-agents')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Running AI Agents
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-impact-planner')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      AI Impact Planner
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ask-trends')} className="text-sm text-[#9CA3AF] hover:text-[#3B5F52] transition-colors">
                      Ask the Trends
                    </button>
                  </li>
                </ul>
              </div>

              {/* LEAN */}
              <div>
                <h4 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-4">Lean</h4>
                <ul className="space-y-2">
                  <li>
                    <button onClick={() => onNavigate?.('dashboardv2')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      Command Centre
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('startup-profile')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      Startup Profile
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('lean-canvas')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      Lean Canvas
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('opportunity-canvas')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      Opportunity Canvas
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('market-research-hub')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      Market Research Hub
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('idea-wall')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      Idea Wall
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('story-map')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      Story Map
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('experiments-lab')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      Experiments Lab
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('90-day-plan')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      90-Day Plan
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('startup-validator')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      Startup Validator
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('startup-validator-v2')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      Startup Validator V2
                    </button>
                  </li>
                </ul>
              </div>

              {/* RESOURCES */}
              <div>
                <h4 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <button onClick={() => onNavigate?.('sitemap')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      Site Map
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-landscape')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      AI Landscape
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-adoption-2025')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      AI Adoption Report 2025
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-industry-adoption')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      AI Industry Adoption 2025
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-jobs-future-work')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      AI Jobs & Future of Work 2024-2026
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-jobs-v2')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      AI Jobs & Future of Work V2
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-hubs')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      AI Investment Hubs 2025
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-products')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      AI Startup Products 2024-2026
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-products-v2')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      AI Product Intelligence V2
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-products-v3')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      AI Products Intelligence 2024-2026
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-gtm')} className="text-sm text-left text-[#9CA3AF] hover:text-[#3B5F52] transition-colors block">
                      AI GTM Report 2025
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-[#E5E7EB] text-center">
            <p className="text-sm text-[#9CA3AF]">
              © 2026 StartupAI. Built for founders, by founders.
            </p>
            <div className="mt-3">
              <button
                onClick={() => onNavigate?.('startup-profile')}
                className="text-sm text-[#0d5f4e] hover:text-[#6b9d89] transition-colors duration-200 underline"
              >
                Route: /startup-profile
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}