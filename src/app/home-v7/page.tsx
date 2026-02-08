import { ArrowRight, Cpu, FileText, Target, UserCheck, TrendingUp, BookOpen, Users, BarChart, Lightbulb, Shield, Zap } from 'lucide-react';

interface HomeV7Props {
  onNavigate?: (page: string) => void;
}

export default function HomeV7({ onNavigate }: HomeV7Props) {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => onNavigate?.('home-v5')}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-[#3B5F52] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-lg font-light text-[#212427]">StartupAI</span>
            </button>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => onNavigate?.('lean-canvas-v2')}
                className="text-sm text-gray-600 hover:text-[#3B5F52] transition-colors"
              >
                Product
              </button>
              <button 
                onClick={() => onNavigate?.('startup-validator-v4')}
                className="text-sm text-gray-600 hover:text-[#3B5F52] transition-colors"
              >
                Solutions
              </button>
              <button 
                onClick={() => onNavigate?.('style-guide')}
                className="text-sm text-gray-600 hover:text-[#3B5F52] transition-colors"
              >
                Resources
              </button>
            </nav>

            {/* CTA */}
            <button 
              onClick={() => onNavigate?.('chat-intake')}
              className="px-6 py-2.5 bg-[#3B5F52] hover:bg-[#2D4840] text-white text-sm font-medium transition-all duration-200 rounded-lg"
            >
              Get started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-[#FAF9F7]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Hero Text */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DCF9E3] border border-[#3B5F52]/20 rounded-full">
                <div className="w-2 h-2 bg-[#3B5F52] rounded-full animate-pulse"></div>
                <span className="text-sm text-[#212427]">AI Operating System for Founders</span>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl text-[#212427] leading-[1.05] tracking-tight font-light">
                From strategy to daily execution, in one guided flow.
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                StartupAI transforms your startup idea into investor-ready execution through structured, AI-powered workflows—no scattered tools, no wasted effort.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate?.('chat-intake')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3B5F52] hover:bg-[#2D4840] text-white font-medium transition-all duration-200 rounded-lg shadow-sm hover:shadow-md"
                >
                  Start with your profile
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => onNavigate?.('lean-canvas-v2')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#212427] font-medium border border-gray-200 transition-all duration-200 rounded-lg"
                >
                  Explore Lean Canvas
                </button>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-light text-[#3B5F52] mb-1">10,000+</div>
                  <div className="text-sm text-gray-600">Founders</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-[#3B5F52] mb-1">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-[#3B5F52] mb-1">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right - Process Diagram */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <div className="space-y-0 border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
                  {/* Step 1 */}
                  <button
                    onClick={() => onNavigate?.('chat-intake')}
                    className="w-full px-8 py-6 border-b border-gray-200 bg-white hover:bg-[#FBF9FA] transition-colors text-left group"
                  >
                    <div className="text-xs uppercase tracking-wider text-gray-500 mb-1.5">01 — Profile</div>
                    <div className="text-base font-medium text-[#212427] group-hover:text-[#3B5F52] transition-colors">
                      Chat-based intake
                    </div>
                    <div className="text-sm text-gray-600 mt-1">AI extracts key insights</div>
                  </button>
                  
                  {/* Step 2 */}
                  <button
                    onClick={() => onNavigate?.('startup-validator-v4')}
                    className="w-full px-8 py-6 border-b border-gray-200 bg-white hover:bg-[#FBF9FA] transition-colors text-left group"
                  >
                    <div className="text-xs uppercase tracking-wider text-gray-500 mb-1.5">02 — Validation</div>
                    <div className="text-base font-medium text-[#212427] group-hover:text-[#3B5F52] transition-colors">
                      6 AI validators
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Risk analysis & guidance</div>
                  </button>

                  {/* Step 3 - Highlighted */}
                  <button
                    onClick={() => onNavigate?.('lean-canvas-v2')}
                    className="w-full px-8 py-6 border-b border-gray-200 bg-[#DCF9E3] text-left group"
                  >
                    <div className="text-xs uppercase tracking-wider text-[#0E3E1B] mb-1.5">03 — Strategy</div>
                    <div className="text-base font-medium text-[#0E3E1B]">
                      Lean Canvas
                    </div>
                    <div className="text-sm text-[#0E3E1B]/80 mt-1">11-section business model</div>
                  </button>

                  {/* Step 4 */}
                  <button
                    onClick={() => onNavigate?.('90-day-plan')}
                    className="w-full px-8 py-6 bg-white hover:bg-[#FBF9FA] transition-colors text-left group"
                  >
                    <div className="text-xs uppercase tracking-wider text-gray-500 mb-1.5">04 — Execution</div>
                    <div className="text-base font-medium text-[#212427] group-hover:text-[#3B5F52] transition-colors">
                      90-day sprint plan
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Prioritized task board</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Dark */}
            <button
              onClick={() => onNavigate?.('dashboard-v2')}
              className="bg-[#0E3E1B] text-white p-8 lg:p-10 rounded-xl hover:bg-[#0a2f14] transition-all duration-300 group text-left"
            >
              <Cpu className="w-10 h-10 mb-6 text-[#DCF9E3]" strokeWidth={1.5} />
              <h3 className="text-2xl font-light mb-3">AI Operating System</h3>
              <p className="text-[#DCF9E3]/80 leading-relaxed">
                Your startup's command center—strategy, execution, and investor readiness in one platform.
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#DCF9E3] group-hover:translate-x-1 transition-transform">
                <span className="text-sm">Explore dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            {/* Card 2 - Mint */}
            <button
              onClick={() => onNavigate?.('lean-canvas-v2')}
              className="bg-[#DCF9E3] border border-[#3B5F52]/20 text-[#0E3E1B] p-8 lg:p-10 rounded-xl hover:bg-[#C1E8D0] transition-all duration-300 group text-left"
            >
              <FileText className="w-10 h-10 mb-6 text-[#0E3E1B]" strokeWidth={1.5} />
              <h3 className="text-2xl font-light mb-3">Strategic Canvas</h3>
              <p className="text-[#0E3E1B]/80 leading-relaxed">
                Transform your concept into an investor-ready business model in one structured session.
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#0E3E1B] group-hover:translate-x-1 transition-transform">
                <span className="text-sm">Start canvas</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            {/* Card 3 - Sage */}
            <button
              onClick={() => onNavigate?.('experiments-lab')}
              className="bg-[#F5F3EF] border border-gray-200 text-[#212427] p-8 lg:p-10 rounded-xl hover:bg-[#EDEAE4] transition-all duration-300 group text-left"
            >
              <Target className="w-10 h-10 mb-6 text-[#3B5F52]" strokeWidth={1.5} />
              <h3 className="text-2xl font-light mb-3">Validated Execution</h3>
              <p className="text-gray-600 leading-relaxed">
                Structured playbooks guide you through validation, experiments, and growth—step by step.
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#3B5F52] group-hover:translate-x-1 transition-transform">
                <span className="text-sm">View experiments</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Prompts */}
      <section className="py-24 lg:py-32 bg-[#F5F3EF]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-5xl text-[#212427] mb-12 font-light tracking-tight">
            How can we assist you today?
          </h2>
          
          <div className="space-y-3">
            <button 
              onClick={() => onNavigate?.('startup-validator-v4')}
              className="w-full px-8 py-6 bg-white hover:bg-[#DCF9E3] text-left text-[#212427] border border-gray-200 rounded-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-base lg:text-lg font-light">Validate an idea</span>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#3B5F52] group-hover:translate-x-1 transition-all" />
              </div>
            </button>

            <button 
              onClick={() => onNavigate?.('lean-canvas-v2')}
              className="w-full px-8 py-6 bg-white hover:bg-[#DCF9E3] text-left text-[#212427] border border-gray-200 rounded-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-base lg:text-lg font-light">Build a business model</span>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#3B5F52] group-hover:translate-x-1 transition-all" />
              </div>
            </button>

            <button 
              onClick={() => onNavigate?.('market-research-hub')}
              className="w-full px-8 py-6 bg-white hover:bg-[#DCF9E3] text-left text-[#212427] border border-gray-200 rounded-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-base lg:text-lg font-light">Research my market</span>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#3B5F52] group-hover:translate-x-1 transition-all" />
              </div>
            </button>

            <button 
              onClick={() => onNavigate?.('90-day-plan')}
              className="w-full px-8 py-6 bg-white hover:bg-[#DCF9E3] text-left text-[#212427] border border-gray-200 rounded-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-base lg:text-lg font-light">Plan my first 90 days</span>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#3B5F52] group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-5xl font-light text-[#212427] mb-16 text-center tracking-tight">
            Everything you need to build, fund, and scale
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <button
              onClick={() => onNavigate?.('chat-intake')}
              className="bg-white border border-gray-200 p-8 rounded-xl hover:border-[#3B5F52] hover:shadow-md transition-all duration-300 group text-left"
            >
              <UserCheck className="w-10 h-10 mb-4 text-[#3B5F52]" strokeWidth={1.5} />
              <h3 className="text-xl font-light text-[#212427] mb-2 group-hover:text-[#3B5F52] transition-colors">
                Smart Onboarding
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Chat-based profile creation in 5 minutes. AI extracts your startup context automatically.
              </p>
            </button>

            {/* Feature 2 */}
            <button
              onClick={() => onNavigate?.('lean-canvas-v2')}
              className="bg-white border border-gray-200 p-8 rounded-xl hover:border-[#3B5F52] hover:shadow-md transition-all duration-300 group text-left"
            >
              <FileText className="w-10 h-10 mb-4 text-[#3B5F52]" strokeWidth={1.5} />
              <h3 className="text-xl font-light text-[#212427] mb-2 group-hover:text-[#3B5F52] transition-colors">
                Lean Canvas Builder
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                11-section strategic canvas with AI guidance. Build your business model in one session.
              </p>
            </button>

            {/* Feature 3 */}
            <button
              onClick={() => onNavigate?.('market-research-hub')}
              className="bg-white border border-gray-200 p-8 rounded-xl hover:border-[#3B5F52] hover:shadow-md transition-all duration-300 group text-left"
            >
              <TrendingUp className="w-10 h-10 mb-4 text-[#3B5F52]" strokeWidth={1.5} />
              <h3 className="text-xl font-light text-[#212427] mb-2 group-hover:text-[#3B5F52] transition-colors">
                Market Intelligence
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Real-time insights on competitors, positioning, and TAM/SAM/SOM analysis.
              </p>
            </button>

            {/* Feature 4 */}
            <button
              onClick={() => onNavigate?.('experiments-lab')}
              className="bg-white border border-gray-200 p-8 rounded-xl hover:border-[#3B5F52] hover:shadow-md transition-all duration-300 group text-left"
            >
              <Lightbulb className="w-10 h-10 mb-4 text-[#3B5F52]" strokeWidth={1.5} />
              <h3 className="text-xl font-light text-[#212427] mb-2 group-hover:text-[#3B5F52] transition-colors">
                Experiments Lab
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Design validation experiments, track evidence, and prove assumptions systematically.
              </p>
            </button>

            {/* Feature 5 */}
            <button
              onClick={() => onNavigate?.('story-map')}
              className="bg-white border border-gray-200 p-8 rounded-xl hover:border-[#3B5F52] hover:shadow-md transition-all duration-300 group text-left"
            >
              <BookOpen className="w-10 h-10 mb-4 text-[#3B5F52]" strokeWidth={1.5} />
              <h3 className="text-xl font-light text-[#212427] mb-2 group-hover:text-[#3B5F52] transition-colors">
                User Story Mapping
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Visualize user journeys, define MVP scope, and identify first value moments.
              </p>
            </button>

            {/* Feature 6 */}
            <button
              onClick={() => onNavigate?.('90-day-plan')}
              className="bg-white border border-gray-200 p-8 rounded-xl hover:border-[#3B5F52] hover:shadow-md transition-all duration-300 group text-left"
            >
              <BarChart className="w-10 h-10 mb-4 text-[#3B5F52]" strokeWidth={1.5} />
              <h3 className="text-xl font-light text-[#212427] mb-2 group-hover:text-[#3B5F52] transition-colors">
                90-Day Execution
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sprint-based task board with drag-and-drop prioritization. Stay focused on what matters.
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl text-[#212427] leading-tight mb-16 font-light tracking-tight">
            Founders don't fail from lack of effort.<br />
            They fail from scattered execution.
          </h2>

          <div className="space-y-6 text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
            <p className="flex items-start gap-3">
              <span className="text-[#3B5F52] font-bold">•</span>
              <span>Too many tools, disconnected from strategy</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#3B5F52] font-bold">•</span>
              <span>No strategic sequencing of priorities</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#3B5F52] font-bold">•</span>
              <span>No alignment with investor expectations</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#3B5F52] font-bold">•</span>
              <span>No clear next step when it matters most</span>
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-5xl font-light text-[#212427] mb-20 text-center tracking-tight">
            Trusted by founders worldwide
          </h2>
          
          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-light text-[#3B5F52] mb-3">10,000+</div>
              <div className="text-sm lg:text-base text-gray-600">Active Founders</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-light text-[#3B5F52] mb-3">50+</div>
              <div className="text-sm lg:text-base text-gray-600">Countries</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-light text-[#3B5F52] mb-3">95%</div>
              <div className="text-sm lg:text-base text-gray-600">Success Rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-light text-[#3B5F52] mb-3">$500M+</div>
              <div className="text-sm lg:text-base text-gray-600">Capital Raised</div>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="bg-[#F5F3EF] p-12 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-xl font-light text-[#212427] mb-8 text-center">Startup Success by Stage</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Idea Validation</span>
                  <span className="text-sm font-medium text-[#212427]">98%</span>
                </div>
                <div className="h-3 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-[#DCF9E3]" style={{ width: '98%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Business Model Completion</span>
                  <span className="text-sm font-medium text-[#212427]">95%</span>
                </div>
                <div className="h-3 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-[#C1E8D0]" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Market Research</span>
                  <span className="text-sm font-medium text-[#212427]">92%</span>
                </div>
                <div className="h-3 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-[#6b9d89]" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Execution Planning</span>
                  <span className="text-sm font-medium text-[#212427]">89%</span>
                </div>
                <div className="h-3 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-[#3B5F52]" style={{ width: '89%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-[#0E3E1B] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl mb-8 font-light tracking-tight">
            Ready to build your startup the right way?
          </h2>
          <p className="text-lg lg:text-xl text-[#DCF9E3]/80 mb-12 max-w-2xl mx-auto">
            Join 10,000+ founders who are transforming ideas into fundable businesses with StartupAI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate?.('chat-intake')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-[#0E3E1B] font-medium transition-all duration-200 rounded-lg"
            >
              Start for free
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onNavigate?.('lean-canvas-v2')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/10 text-white font-medium border border-white/30 transition-all duration-200 rounded-lg"
            >
              View demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
