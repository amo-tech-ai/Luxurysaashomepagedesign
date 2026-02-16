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
    <div className="min-h-screen bg-[#F7F8F6]">
      {/* Header - BCG Consulting Style */}
      <header className="border-b border-[#E5E5E5] bg-white/95 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => onNavigate?.('home-v8')}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-[#0F3D2E] rounded flex items-center justify-center">
                <span className="text-white font-medium text-sm">S</span>
              </div>
              <span className="text-lg font-light text-[#1A1A1A] tracking-tight">StartupAI</span>
            </button>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-12">
              <button 
                onClick={() => onNavigate?.('lean-canvas-v2')}
                className="text-sm font-normal text-[#5C5C5C] hover:text-[#0F3D2E] transition-colors duration-200"
              >
                Product
              </button>
              <button 
                onClick={() => onNavigate?.('startup-validator-v4')}
                className="text-sm font-normal text-[#5C5C5C] hover:text-[#0F3D2E] transition-colors duration-200"
              >
                Solutions
              </button>
              <button 
                onClick={() => onNavigate?.('style-guide')}
                className="text-sm font-normal text-[#5C5C5C] hover:text-[#0F3D2E] transition-colors duration-200"
              >
                Resources
              </button>
            </nav>

            {/* CTA */}
            <button 
              onClick={() => onNavigate?.('chat-intake')}
              className="px-7 py-3 bg-[#0F3D2E] hover:bg-[#0A2A1F] text-white text-sm font-medium transition-all duration-200 rounded"
            >
              Get started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - BCG Editorial Style */}
      <section className="bg-white py-32 lg:py-40 px-8">
        <div className="max-w-[800px] mx-auto">
          {/* Headline */}
          <div className="text-center mb-12">
            <h1 
              className="text-[52px] md:text-[60px] text-[#1A1A1A] leading-[1.1] tracking-[-0.5px] font-medium mb-8"
              style={{ 
                fontFamily: 'Georgia, Cambria, "Times New Roman", serif',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              From idea to execution.
            </h1>
            <p className="text-[18px] text-[#5C5C5C] leading-[1.7] max-w-[650px] mx-auto">
              Strategic intelligence for modern founders. Structure your thinking, validate your assumptions, and execute with clarity.
            </p>
          </div>

          {/* Chat Window */}
          <div className="mt-16">
            <ChatWindow onSubmit={handleChatSubmit} />
            
            {/* Trust Footer */}
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-3 text-[13px] text-[#9CA3AF]">
                <span>AI suggests. You decide.</span>
                <span className="text-[#D4D4D4]">—</span>
                <span>No credit card required.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Strategic Flow */}
      <section
        ref={containerRef}
        className="relative bg-[#F7F8F6]"
        style={{ minHeight: '400vh' }}
        aria-label="How StartupAI works"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-8 lg:px-12 h-full flex items-center">
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 w-full">
              {/* Left Column - Content */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="text-[12px] uppercase tracking-[0.1em] text-[#0F3D2E] font-normal">
                    How it works
                  </div>
                  <h2 
                    className="text-[40px] lg:text-[48px] leading-[1.15] text-[#1A1A1A] font-medium"
                    style={{ 
                      fontFamily: 'Georgia, Cambria, "Times New Roman", serif'
                    }}
                  >
                    From strategy to daily execution, in one guided flow.
                  </h2>
                </div>
                
                <StepList steps={steps} activeStep={activeStep} />
              </div>

              {/* Right Column - App Window */}
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

      {/* Capabilities Section - BCG Editorial Grid */}
      <section className="py-40 lg:py-44 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
          {/* Section Header */}
          <div className="max-w-[750px] mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-[#0F3D2E]"></span>
              <p className="text-[12px] uppercase tracking-[0.1em] text-[#0F3D2E]">Strategic System</p>
            </div>
            <h2 
              className="text-[40px] lg:text-[48px] leading-[1.2] text-[#1A1A1A] font-medium mb-8" 
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", serif' }}
            >
              The Intelligent Grid: Strategy as a Service
            </h2>
            <p className="text-[18px] text-[#4B4B4B] leading-[1.7] max-w-[650px]">
              A unified strategic operating system designed for modern founders. We combine deep industry intelligence with high-speed execution tools.
            </p>
          </div>

          {/* First Row - Modules 01-03 */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Module 01 - Startup Validator */}
            <div className="group flex flex-col bg-white border border-[#E5E5E5] p-10 h-full hover:border-[#0F3D2E] transition-all duration-300">
              <div className="flex justify-between items-start mb-10">
                <span className="text-[11px] tracking-[0.08em] uppercase px-2 py-1 border border-[#E5E5E5] text-[#5C5C5C]">
                  Module 01
                </span>
                <Sparkles className="w-5 h-5 text-[#0F3D2E]" />
              </div>
              
              <h3 className="text-[22px] font-medium text-[#1A1A1A] mb-10 leading-tight">
                Startup Validator
              </h3>
              
              <div className="mt-auto space-y-8">
                <p className="text-[15px] leading-[1.7] text-[#4B4B4B]">
                  Quickly assess whether an idea is worth pursuing. Identify fatal flaws and unclear goals before investing time.
                </p>
                
                <div className="border-t border-[#E5E5E5] pt-6">
                  <p className="text-[11px] uppercase tracking-[0.08em] text-[#9CA3AF] mb-2">Outcome</p>
                  <p className="text-[15px] font-medium text-[#1A1A1A]">
                    Go / No-Go clarity
                  </p>
                </div>
                
                <button
                  onClick={() => onNavigate?.('startup-validator-v4')}
                  className="inline-flex items-center gap-2 text-[#1A1A1A] font-medium text-[12px] uppercase tracking-[0.08em] group-hover:gap-3 transition-all duration-300"
                >
                  Validate Idea
                  <ArrowRight className="w-4 h-4 text-[#0F3D2E]" />
                </button>
              </div>
            </div>

            {/* Module 02 - Strategy Model */}
            <div className="group flex flex-col bg-[#F7F8F6] border border-[#E5E5E5] p-10 h-full hover:border-[#0F3D2E] transition-all duration-300">
              <div className="flex justify-between items-start mb-10">
                <span className="text-[11px] tracking-[0.08em] uppercase px-2 py-1 border border-[#E5E5E5] text-[#5C5C5C]">
                  Module 02
                </span>
                <Zap className="w-5 h-5 text-[#0F3D2E]" />
              </div>
              
              <h3 className="text-[22px] font-medium text-[#1A1A1A] mb-2 leading-tight">
                Strategy Model
              </h3>
              <p className="text-[15px] text-[#5C5C5C] mb-8">Lean Canvas</p>
              
              <div className="mt-auto space-y-8">
                <p className="text-[15px] leading-[1.7] text-[#4B4B4B]">
                  Structure your startup's business model across problems, customers, and economics in one system.
                </p>
                
                <div className="border-t border-[#E5E5E5] pt-6">
                  <p className="text-[11px] uppercase tracking-[0.08em] text-[#9CA3AF] mb-2">Outcome</p>
                  <p className="text-[15px] font-medium text-[#1A1A1A]">
                    Strategic clarity
                  </p>
                </div>
                
                <button
                  onClick={() => onNavigate?.('lean-canvas-v2')}
                  className="inline-flex items-center gap-2 text-[#1A1A1A] font-medium text-[12px] uppercase tracking-[0.08em] group-hover:gap-3 transition-all duration-300"
                >
                  Build Canvas
                  <ArrowRight className="w-4 h-4 text-[#0F3D2E]" />
                </button>
              </div>
            </div>

            {/* Module 03 - Market Intelligence */}
            <div className="group flex flex-col bg-[#0F3D2E] p-10 h-full hover:bg-[#0A2A1F] transition-all duration-300 text-white">
              <div className="flex justify-between items-start mb-10">
                <span className="text-[11px] tracking-[0.08em] uppercase px-2 py-1 border border-white/20">
                  Module 03
                </span>
                <Layers className="w-5 h-5 text-white/90" />
              </div>
              
              <h3 className="text-[22px] font-medium mb-2 leading-tight">
                Market Intelligence
              </h3>
              <p className="text-[15px] text-white/70 mb-8">Market Research</p>
              
              <div className="mt-auto space-y-8">
                <p className="text-[15px] leading-[1.7] text-white/90">
                  Quantify demand, map competitors, and validate your strategy with evidence.
                </p>
                
                <div className="border-t border-white/10 pt-6">
                  <p className="text-[11px] uppercase tracking-[0.08em] text-white/60 mb-2">Outcome</p>
                  <p className="text-[15px] font-medium">
                    Market confidence
                  </p>
                </div>
                
                <button
                  onClick={() => onNavigate?.('market-research-hub')}
                  className="inline-flex items-center gap-2 font-medium text-[12px] uppercase tracking-[0.08em] group-hover:gap-3 transition-all duration-300"
                >
                  Research Market
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Second Row - Modules 04-06 */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Module 04 - Fundraising Strategy */}
            <div className="group flex flex-col bg-white border border-[#E5E5E5] p-10 h-full hover:border-[#0F3D2E] transition-all duration-300">
              <div className="flex justify-between items-start mb-10">
                <span className="text-[11px] tracking-[0.08em] uppercase px-2 py-1 border border-[#E5E5E5] text-[#5C5C5C]">
                  Module 04
                </span>
                <Target className="w-5 h-5 text-[#0F3D2E]" />
              </div>
              
              <h3 className="text-[22px] font-medium text-[#1A1A1A] mb-2 leading-tight">
                Fundraising Strategy
              </h3>
              <p className="text-[15px] text-[#5C5C5C] mb-8">Investor Strategy</p>
              
              <div className="mt-auto space-y-8">
                <p className="text-[15px] leading-[1.7] text-[#4B4B4B]">
                  Define who should fund you, at what stage, and with what story based on your traction.
                </p>
                
                <div className="border-t border-[#E5E5E5] pt-6">
                  <p className="text-[11px] uppercase tracking-[0.08em] text-[#9CA3AF] mb-2">Outcome</p>
                  <p className="text-[15px] font-medium text-[#1A1A1A]">
                    Funding focus
                  </p>
                </div>
                
                <button
                  onClick={() => onNavigate?.('pitch-deck')}
                  className="inline-flex items-center gap-2 text-[#1A1A1A] font-medium text-[12px] uppercase tracking-[0.08em] group-hover:gap-3 transition-all duration-300"
                >
                  Plan Funding
                  <ArrowRight className="w-4 h-4 text-[#0F3D2E]" />
                </button>
              </div>
            </div>

            {/* Module 05 - Communication */}
            <div className="group flex flex-col bg-[#F7F8F6] border border-[#E5E5E5] p-10 h-full hover:border-[#0F3D2E] transition-all duration-300">
              <div className="flex justify-between items-start mb-10">
                <span className="text-[11px] tracking-[0.08em] uppercase px-2 py-1 border border-[#E5E5E5] text-[#5C5C5C]">
                  Module 05
                </span>
                <TrendingUp className="w-5 h-5 text-[#0F3D2E]" />
              </div>
              
              <h3 className="text-[22px] font-medium text-[#1A1A1A] mb-2 leading-tight">
                Communication
              </h3>
              <p className="text-[15px] text-[#5C5C5C] mb-8">Pitch Deck</p>
              
              <div className="mt-auto space-y-8">
                <p className="text-[15px] leading-[1.7] text-[#4B4B4B]">
                  Turn your strategy into an investor-ready narrative with clear logic and metrics.
                </p>
                
                <div className="border-t border-[#E5E5E5] pt-6">
                  <p className="text-[11px] uppercase tracking-[0.08em] text-[#9CA3AF] mb-2">Outcome</p>
                  <p className="text-[15px] font-medium text-[#1A1A1A]">
                    Investor-ready story
                  </p>
                </div>
                
                <button
                  onClick={() => onNavigate?.('pitch-deck')}
                  className="inline-flex items-center gap-2 text-[#1A1A1A] font-medium text-[12px] uppercase tracking-[0.08em] group-hover:gap-3 transition-all duration-300"
                >
                  Create Deck
                  <ArrowRight className="w-4 h-4 text-[#0F3D2E]" />
                </button>
              </div>
            </div>

            {/* Module 06 - Execution Planning */}
            <div className="group flex flex-col bg-[#0F3D2E] p-10 h-full hover:bg-[#0A2A1F] transition-all duration-300 text-white">
              <div className="flex justify-between items-start mb-10">
                <span className="text-[11px] tracking-[0.08em] uppercase px-2 py-1 border border-white/20">
                  Module 06
                </span>
                <Brain className="w-5 h-5 text-white/90" />
              </div>
              
              <h3 className="text-[22px] font-medium mb-2 leading-tight">
                Execution Planning
              </h3>
              <p className="text-[15px] text-white/70 mb-8">90-Day Plan</p>
              
              <div className="mt-auto space-y-8">
                <p className="text-[15px] leading-[1.7] text-white/90">
                  Translate strategy into a focused roadmap with priorities and measurable outcomes.
                </p>
                
                <div className="border-t border-white/10 pt-6">
                  <p className="text-[11px] uppercase tracking-[0.08em] text-white/60 mb-2">Outcome</p>
                  <p className="text-[15px] font-medium">
                    Execution momentum
                  </p>
                </div>
                
                <button
                  onClick={() => onNavigate?.('90-day-plan')}
                  className="inline-flex items-center gap-2 font-medium text-[12px] uppercase tracking-[0.08em] group-hover:gap-3 transition-all duration-300"
                >
                  Build Plan
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For - Strategic Positioning */}
      <section className="py-32 lg:py-40 bg-[#F7F8F6]">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 
              className="text-[36px] lg:text-[40px] text-[#1A1A1A] font-medium mb-4"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", serif' }}
            >
              Built for serious founders
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-14 h-14 bg-white border border-[#E5E5E5] rounded flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-6 h-6 text-[#0F3D2E]" />
              </div>
              <h3 className="text-[18px] text-[#1A1A1A] font-medium mb-3">
                First-Time Founders
              </h3>
              <p className="text-[15px] text-[#5C5C5C] leading-[1.7] max-w-[280px] mx-auto">
                Learn startup methodology while building. AI guides you through proven frameworks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-white border border-[#E5E5E5] rounded flex items-center justify-center mx-auto mb-6">
                <Users className="w-6 h-6 text-[#0F3D2E]" />
              </div>
              <h3 className="text-[18px] text-[#1A1A1A] font-medium mb-3">
                Serial Entrepreneurs
              </h3>
              <p className="text-[15px] text-[#5C5C5C] leading-[1.7] max-w-[280px] mx-auto">
                Move faster with AI-powered validation and structured execution planning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-white border border-[#E5E5E5] rounded flex items-center justify-center mx-auto mb-6">
                <Shield className="w-6 h-6 text-[#0F3D2E]" />
              </div>
              <h3 className="text-[18px] text-[#1A1A1A] font-medium mb-3">
                Accelerators & Incubators
              </h3>
              <p className="text-[15px] text-[#5C5C5C] leading-[1.7] max-w-[280px] mx-auto">
                Standardize your cohort's strategic thinking and track progress at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - BCG Calm Confidence */}
      <section className="py-32 lg:py-40 bg-white border-t border-[#E5E5E5]">
        <div className="max-w-[800px] mx-auto px-8 lg:px-12 text-center">
          <div className="space-y-12">
            <div>
              <h2 
                className="text-[36px] lg:text-[40px] text-[#1A1A1A] font-medium mb-6"
                style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", serif' }}
              >
                Ready to turn thinking into execution?
              </h2>
              <p className="text-[18px] text-[#5C5C5C] leading-[1.7] max-w-[650px] mx-auto">
                Start with a simple conversation about your idea. AI handles the structure, you handle the vision.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate?.('chat-intake')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#0F3D2E] hover:bg-[#0A2A1F] text-white font-medium transition-all duration-200 rounded text-[15px]"
              >
                Start with Chat Intake
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onNavigate?.('lean-canvas-v2')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-[#F7F8F6] text-[#1A1A1A] font-medium border border-[#E5E5E5] transition-all duration-200 rounded text-[15px]"
              >
                Explore Lean Canvas
              </button>
            </div>

            <div className="pt-12 border-t border-[#E5E5E5]">
              <div className="grid grid-cols-3 gap-12 max-w-[600px] mx-auto">
                <div>
                  <div className="text-[28px] font-normal text-[#0F3D2E] mb-2" style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", serif' }}>10,000+</div>
                  <div className="text-[14px] text-[#5C5C5C]">Founders</div>
                </div>
                <div>
                  <div className="text-[28px] font-normal text-[#0F3D2E] mb-2" style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", serif' }}>50+</div>
                  <div className="text-[14px] text-[#5C5C5C]">Countries</div>
                </div>
                <div>
                  <div className="text-[28px] font-normal text-[#0F3D2E] mb-2" style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", serif' }}>95%</div>
                  <div className="text-[14px] text-[#5C5C5C]">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal Editorial */}
      <footer className="bg-[#F7F8F6] border-t border-[#E5E5E5] py-16">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
          {/* Main Footer Content */}
          <div className="mb-16">
            {/* Logo and Tagline */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-[#0F3D2E] rounded flex items-center justify-center">
                  <span className="text-white font-medium text-sm">S</span>
                </div>
                <span className="text-lg font-light text-[#1A1A1A] tracking-tight">StartupAI</span>
              </div>
              <p className="text-[14px] text-[#5C5C5C] ml-11">From strategy to daily execution, in one guided flow.</p>
            </div>

            {/* Footer Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-12">
              {/* PRODUCT */}
              <div>
                <h4 className="text-[11px] font-medium text-[#5C5C5C] uppercase tracking-[0.08em] mb-5">Product</h4>
                <ul className="space-y-3">
                  <li>
                    <button onClick={() => onNavigate?.('home-v5')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Home V5
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('home-v6')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Home V6
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('home-v7')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Home V7
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('home-v8')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Home V8
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('how-it-works-v3')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      How it works
                    </button>
                  </li>
                  <li>
                    <a href="#" className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Security
                    </a>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('events')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Events
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('events-discover')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Discover Events
                    </button>
                  </li>
                </ul>
              </div>

              {/* PAGES */}
              <div>
                <h4 className="text-[11px] font-medium text-[#5C5C5C] uppercase tracking-[0.08em] mb-5">Pages</h4>
                <ul className="space-y-3">
                  <li>
                    <button onClick={() => onNavigate?.('onboarding-v3')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Onboarding Wizard
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('onboarding-minimal')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Minimal Onboarding
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('onboarding-v3')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Onboarding V3
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('pitch-deck')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Pitch Deck Generator
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('validator-report')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Validator Report
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('validator-v3')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Validator V3 Report
                    </button>
                  </li>
                </ul>
              </div>

              {/* DASHBOARD */}
              <div>
                <h4 className="text-[11px] font-medium text-[#5C5C5C] uppercase tracking-[0.08em] mb-5">Dashboard</h4>
                <ul className="space-y-3">
                  <li>
                    <button onClick={() => onNavigate?.('dashboard-main')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Main Dashboard
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('dashboard-v2')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Kanban Dashboard
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('chat-intake')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Chat Intake
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('startup-profile')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Startup Profile
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('lean-canvas')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Lean Canvas
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('lean-canvas-ai')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Lean Canvas with AI
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('lean-canvas-v2')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Lean Canvas V2
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('opportunity-canvas')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Opportunity Canvas
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('market-research-hub')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Market Research Hub
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('idea-wall')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Idea Wall
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('story-map')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Story Map
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('experiments-lab')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Experiments Lab
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('90-day-plan')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      90-Day Plan
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('startup-validator')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Startup Validator
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('startup-validator-v2')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Startup Validator V2
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('startup-validator-v3')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Startup Validator V3
                    </button>
                  </li>
                </ul>
              </div>

              {/* COMPANY */}
              <div>
                <h4 className="text-[11px] font-medium text-[#5C5C5C] uppercase tracking-[0.08em] mb-5">Company</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('style-guide')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Style Guide
                    </button>
                  </li>
                </ul>
              </div>

              {/* AI */}
              <div>
                <h4 className="text-[11px] font-medium text-[#5C5C5C] uppercase tracking-[0.08em] mb-5">AI</h4>
                <ul className="space-y-3">
                  <li>
                    <button onClick={() => onNavigate?.('diagrams-flows')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Flow Diagrams
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('diagrams-ai-flows')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      AI Agent Flows
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('running-agents')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Running AI Agents
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-impact-planner')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      AI Impact Planner
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ask-trends')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Ask the Trends
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('bcg-ai-industry')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      BCG × AI Industry
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('service-grid')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Service Grid
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('fashion-2026-v4')} className="text-[14px] text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors">
                      Fashion 2026 V4
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('fashion-2026-enhanced')} className="text-[14px] text-[#10B981] hover:text-[#0F3D2E] transition-colors font-semibold">
                      Fashion 2026 Enhanced ✨
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('fashion-2026v8')} className="text-[14px] text-[#10B981] hover:text-[#0F3D2E] transition-colors font-semibold">
                      Fashion 2026 V8 ✨
                    </button>
                  </li>
                </ul>
              </div>

              {/* LEAN */}
              <div>
                <h4 className="text-[11px] font-medium text-[#5C5C5C] uppercase tracking-[0.08em] mb-5">Lean</h4>
                <ul className="space-y-3">
                  <li>
                    <button onClick={() => onNavigate?.('dashboardv2')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      Command Centre
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('startup-profile')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      Startup Profile
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('lean-canvas')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      Lean Canvas
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('opportunity-canvas')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      Opportunity Canvas
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('market-research-hub')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      Market Research Hub
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('idea-wall')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      Idea Wall
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('story-map')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      Story Map
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('experiments-lab')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      Experiments Lab
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('90-day-plan')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      90-Day Plan
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('startup-validator')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      Startup Validator
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('startup-validator-v2')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      Startup Validator V2
                    </button>
                  </li>
                </ul>
              </div>

              {/* RESOURCES */}
              <div>
                <h4 className="text-[11px] font-medium text-[#5C5C5C] uppercase tracking-[0.08em] mb-5">Resources</h4>
                <ul className="space-y-3">
                  <li>
                    <button onClick={() => onNavigate?.('sitemap')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      Site Map
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('bcg-ai-consumer')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      BCG × AI Consumer Infographic
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-industry-use-cases')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      AI Industry Use Cases
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-landscape')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      AI Landscape
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-adoption-2025')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      AI Adoption Report 2025
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-industry-adoption')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      AI Industry Adoption 2025
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-jobs-future-work')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      AI Jobs & Future of Work 2024-2026
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-jobs-v2')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      AI Jobs & Future of Work V2
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-hubs')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      AI Investment Hubs 2025
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-products')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      AI Startup Products 2024-2026
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-products-v2')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      AI Products V2
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-products-v3')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      AI Products V3
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-gtm')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      AI GTM Motion Map
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-startup-landscape')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      AI Startup Landscape
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-superpowers')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      Global AI Superpowers 2025
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('use-cases-v2')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      AI Industry Use Cases V2
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('global-ai-report-v3')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      Global AI Report 2026
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('global-ai-race')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      The Global AI Race
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-skills')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      Global AI Skills Report
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('consumer-intelligence')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      Consumer AI Intelligence
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('software-ai-outlook-2026')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      2026 Software & AI Outlook
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('mckinsey-tech-trends-2025')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      McKinsey Tech Trends 2025
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavigate?.('ai-agents-visual-guide')} className="text-[14px] text-left text-[#9CA3AF] hover:text-[#0F3D2E] transition-colors block">
                      What Are AI Agents? 2026
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-[#E5E5E5]">
            <p className="text-[13px] text-[#9CA3AF] text-center">
              © 2026 StartupAI. Strategic Intelligence Platform.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}