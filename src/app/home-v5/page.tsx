import { ArrowRight, Cpu, FileText, Target, UserCheck, TrendingUp, BookOpen, Users, BarChart, Zap, Lightbulb, Shield } from 'lucide-react';
import { PastelCard } from '../../components/home-v5/PastelCard';
import { StatCard } from '../../components/home-v5/StatCard';
import { FeatureCard } from '../../components/home-v5/FeatureCard';
import { TestimonialCard } from '../../components/home-v5/TestimonialCard';

export default function HomeV5({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      {/* Navigation Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-6">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => onNavigate?.('home')}
              className="text-xl font-medium text-[#212427] tracking-tight"
            >
              StartupAI
            </button>
            <nav className="hidden md:flex items-center gap-10">
              <a href="#services" className="text-sm text-[#696969] hover:text-[#212427] transition-colors">Services</a>
              <a href="#approach" className="text-sm text-[#696969] hover:text-[#212427] transition-colors">Approach</a>
              <a href="#insights" className="text-sm text-[#696969] hover:text-[#212427] transition-colors">Insights</a>
            </nav>
            <button 
              onClick={() => onNavigate?.('onboarding-v3')}
              className="px-6 py-2.5 bg-[#0E3E1B] hover:bg-[#0a2f14] text-white text-sm font-medium transition-all duration-200 rounded-lg"
            >
              Get started
            </button>
          </div>
        </div>
      </header>

      {/* SECTION 1 — HERO (Enhanced with Stats) */}
      <section className="bg-gradient-to-b from-white to-[#FAF9F7] py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            {/* Left - Editorial Text */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl text-[#212427] leading-[1.05] tracking-tight font-extralight">
                From strategy to daily execution — in one guided flow.
              </h1>
              <p className="text-lg lg:text-xl text-[#696969] leading-[1.7] max-w-xl">
                StartupAI is an AI operating system for founders, turning ideas into investor-ready execution through structured workflows.
              </p>
              <button 
                onClick={() => onNavigate?.('onboarding-v3')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0E3E1B] hover:bg-[#0a2f14] text-white font-medium transition-all duration-200 rounded-lg shadow-sm hover:shadow-md"
              >
                Start with your profile
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                <StatCard number="10,000+" label="Founders" color="mint" />
                <StatCard number="50+" label="Markets" color="mint" />
                <StatCard number="95%" label="Success Rate" color="mint" />
                <StatCard number="24/7" label="Support" color="mint" />
              </div>
            </div>

            {/* Right - Process Diagram */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <div className="space-y-0 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  {/* Profile */}
                  <div className="px-8 py-6 border-b border-gray-200 bg-white">
                    <div className="text-xs uppercase tracking-wider text-[#898888] mb-1.5">01</div>
                    <div className="text-base font-medium text-[#212427]">Profile</div>
                  </div>
                  
                  {/* Strategy */}
                  <div className="px-8 py-6 border-b border-gray-200 bg-white">
                    <div className="text-xs uppercase tracking-wider text-[#898888] mb-1.5">02</div>
                    <div className="text-base font-medium text-[#212427]">Strategy</div>
                  </div>

                  {/* Execution - Highlighted */}
                  <div className="px-8 py-6 border-b border-gray-200 bg-[#DCF9E3]">
                    <div className="text-xs uppercase tracking-wider text-[#0E3E1B] mb-1.5">03</div>
                    <div className="text-base font-medium text-[#0E3E1B]">Execution</div>
                  </div>

                  {/* Investor Readiness */}
                  <div className="px-8 py-6 bg-white">
                    <div className="text-xs uppercase tracking-wider text-[#898888] mb-1.5">04</div>
                    <div className="text-base font-medium text-[#212427]">Investor Readiness</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — VALUE PROPOSITION CARDS (BCG Pattern: 1 Dark + 2 Pastel) */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Dark Card */}
            <PastelCard
              variant="dark"
              title="AI Operating System"
              description="Your startup's command center—strategy, execution, and investor readiness in one platform."
              icon={<Cpu className="w-10 h-10" />}
              onClick={() => onNavigate?.('dashboard-main')}
            />
            
            {/* Pastel Mint */}
            <PastelCard
              variant="mint"
              title="From Idea to Deck"
              description="Transform your concept into an investor-ready pitch deck in minutes, not weeks."
              icon={<FileText className="w-10 h-10" />}
              onClick={() => onNavigate?.('pitch-deck')}
            />
            
            {/* Pastel Sage */}
            <PastelCard
              variant="sage"
              title="Daily Execution"
              description="Structured playbooks guide you through fundraising, hiring, and growth—step by step."
              icon={<Target className="w-10 h-10" />}
              onClick={() => onNavigate?.('dashboard-main')}
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 — INTERACTIVE PROMPTS (Enhanced) */}
      <section className="bg-[#F1EEEA] py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-3xl lg:text-5xl text-[#212427] mb-12 font-extralight tracking-tight">
            How can we assist you today?
          </h2>
          
          <div className="space-y-3">
            <button 
              onClick={() => onNavigate?.('validator-chat')}
              className="w-full px-8 py-6 bg-white hover:bg-[#DCF9E3] text-left text-[#212427] border border-gray-200 rounded-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-base lg:text-lg font-light">Validate an idea</span>
                <ArrowRight className="w-5 h-5 text-[#898888] group-hover:text-[#0E3E1B] group-hover:translate-x-1 transition-all" />
              </div>
            </button>

            <button 
              onClick={() => onNavigate?.('pitch-deck')}
              className="w-full px-8 py-6 bg-white hover:bg-[#DCF9E3] text-left text-[#212427] border border-gray-200 rounded-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-base lg:text-lg font-light">Build a pitch deck</span>
                <ArrowRight className="w-5 h-5 text-[#898888] group-hover:text-[#0E3E1B] group-hover:translate-x-1 transition-all" />
              </div>
            </button>

            <button 
              onClick={() => onNavigate?.('onboarding-v3')}
              className="w-full px-8 py-6 bg-white hover:bg-[#DCF9E3] text-left text-[#212427] border border-gray-200 rounded-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-base lg:text-lg font-light">Prepare for fundraising</span>
                <ArrowRight className="w-5 h-5 text-[#898888] group-hover:text-[#0E3E1B] group-hover:translate-x-1 transition-all" />
              </div>
            </button>

            <button 
              onClick={() => onNavigate?.('dashboard-main')}
              className="w-full px-8 py-6 bg-white hover:bg-[#DCF9E3] text-left text-[#212427] border border-gray-200 rounded-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-base lg:text-lg font-light">Organize execution & tasks</span>
                <ArrowRight className="w-5 h-5 text-[#898888] group-hover:text-[#0E3E1B] group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FEATURES GRID (BCG 3x2 Pattern) */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
          <h2 className="text-3xl lg:text-5xl font-extralight text-[#212427] mb-16 text-center tracking-tight">
            Everything you need to build, fund, and scale
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<UserCheck className="w-10 h-10" strokeWidth={1.5} />}
              title="Smart Onboarding"
              description="LinkedIn-powered profile creation in 2 minutes. AI pre-fills your startup context."
              onClick={() => onNavigate?.('onboarding-v3')}
            />
            
            <FeatureCard
              icon={<FileText className="w-10 h-10" strokeWidth={1.5} />}
              title="AI Deck Builder"
              description="From URLs to investor-ready pitch deck. Structured narrative in minutes."
              onClick={() => onNavigate?.('pitch-deck')}
            />
            
            <FeatureCard
              icon={<TrendingUp className="w-10 h-10" strokeWidth={1.5} />}
              title="Market Intelligence"
              description="Real-time insights on competitors, trends, and positioning opportunities."
              onClick={() => onNavigate?.('ai-landscape')}
            />
            
            <FeatureCard
              icon={<BookOpen className="w-10 h-10" strokeWidth={1.5} />}
              title="Playbook Execution"
              description="Structured workflows for every startup stage. From idea to scale."
              onClick={() => onNavigate?.('dashboard-main')}
            />
            
            <FeatureCard
              icon={<Users className="w-10 h-10" strokeWidth={1.5} />}
              title="Lead Intelligence"
              description="Score, segment, and prioritize opportunities. AI-powered CRM insights."
              onClick={() => onNavigate?.('dashboard-main')}
            />
            
            <FeatureCard
              icon={<BarChart className="w-10 h-10" strokeWidth={1.5} />}
              title="Analytics Dashboard"
              description="Track progress across all initiatives. Strategic alignment at a glance."
              onClick={() => onNavigate?.('dashboard-main')}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 — THE CORE PROBLEM (Typographic Statement) */}
      <section className="bg-[#FAF9F7] py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl text-[#212427] leading-tight mb-16 font-extralight tracking-tight">
            Founders don't fail from lack of effort.<br />
            They fail from scattered execution.
          </h2>

          <div className="space-y-6 text-lg lg:text-xl text-[#696969] leading-relaxed max-w-2xl">
            <p>Too many tools, disconnected from strategy.</p>
            <p>No strategic sequencing of priorities.</p>
            <p>No alignment with investor expectations.</p>
            <p>No clear next step when it matters most.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — DATA VISUALIZATION (Stats Section) */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
          <h2 className="text-3xl lg:text-5xl font-extralight text-[#212427] mb-20 text-center tracking-tight">
            Trusted by founders worldwide
          </h2>
          
          {/* Large Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-extralight text-[#0E3E1B] mb-3">10,000+</div>
              <div className="text-sm lg:text-base text-[#696969]">Active Founders</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-extralight text-[#0E3E1B] mb-3">50+</div>
              <div className="text-sm lg:text-base text-[#696969]">Countries</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-extralight text-[#0E3E1B] mb-3">95%</div>
              <div className="text-sm lg:text-base text-[#696969]">Success Rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-extralight text-[#0E3E1B] mb-3">$500M+</div>
              <div className="text-sm lg:text-base text-[#696969]">Capital Raised</div>
            </div>
          </div>

          {/* Visual Bar Chart Representation */}
          <div className="bg-[#F5F5F5] p-12 rounded-xl">
            <h3 className="text-xl font-light text-[#212427] mb-8 text-center">Startup Success by Stage</h3>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-[#696969]">Idea Validation</span>
                  <span className="text-sm font-medium text-[#212427]">98%</span>
                </div>
                <div className="h-3 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-[#C1E8D0]" style={{ width: '98%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-[#696969]">Pitch Deck Completion</span>
                  <span className="text-sm font-medium text-[#212427]">95%</span>
                </div>
                <div className="h-3 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-[#6b9d89]" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-[#696969]">Fundraising Success</span>
                  <span className="text-sm font-medium text-[#212427]">87%</span>
                </div>
                <div className="h-3 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-[#0E3E1B]" style={{ width: '87%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-[#696969]">Product-Market Fit</span>
                  <span className="text-sm font-medium text-[#212427]">82%</span>
                </div>
                <div className="h-3 bg-white rounded-full overflow-hidden">
                  <div className="h-full bg-[#0d5f4e]" style={{ width: '82%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — WHAT STARTUPAI PROVIDES (Enhanced Card Grid) */}
      <section id="services" className="bg-[#F1EEEA] py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <h2 className="text-3xl lg:text-5xl text-[#212427] mb-20 font-extralight tracking-tight">
            Everything you need to move forward — in order.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Strategy clarity */}
            <div className="bg-white p-12 lg:p-16 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="mb-8">
                <div className="w-16 h-16 rounded-full bg-[#DCF9E3] flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-[#0E3E1B]" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl text-[#212427] font-light mb-4">Strategy clarity</h3>
              <p className="text-base text-[#696969] leading-relaxed">
                Market positioning, buyer personas, competitive differentiation — structured as a narrative investors understand.
              </p>
            </div>

            {/* Market intelligence */}
            <div className="bg-white p-12 lg:p-16 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="mb-8">
                <div className="w-16 h-16 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-[#0E3E1B]" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl text-[#212427] font-light mb-4">Market intelligence</h3>
              <p className="text-base text-[#696969] leading-relaxed">
                AI-powered analysis of industry trends, funding patterns, and success indicators relevant to your category.
              </p>
            </div>

            {/* Structured execution */}
            <div className="bg-white p-12 lg:p-16 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="mb-8">
                <div className="w-16 h-16 rounded-full bg-[#DCF9E3] flex items-center justify-center">
                  <Zap className="w-8 h-8 text-[#0E3E1B]" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl text-[#212427] font-light mb-4">Structured execution</h3>
              <p className="text-base text-[#696969] leading-relaxed">
                Quarterly milestones, weekly priorities, daily tasks — all connected to your strategic objectives.
              </p>
            </div>

            {/* Investor readiness */}
            <div className="bg-white p-12 lg:p-16 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="mb-8">
                <div className="w-16 h-16 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[#0E3E1B]" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl text-[#212427] font-light mb-4">Investor readiness</h3>
              <p className="text-base text-[#696969] leading-relaxed">
                Pitch decks, financial summaries, and progress updates generated from your operational data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — HOW IT WORKS (Process Flow) */}
      <section id="approach" className="bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl lg:text-5xl text-[#212427] mb-20 font-extralight tracking-tight text-center">
            One guided flow, start to finish.
          </h2>

          <div className="max-w-2xl mx-auto space-y-0">
            {/* Step 1 */}
            <div className="flex items-start gap-6 pb-12 border-l-2 border-gray-200 pl-8 ml-3 relative">
              <div className="absolute left-0 top-0 w-6 h-6 -ml-3 rounded-full border-2 border-[#0E3E1B] bg-white"></div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-[#898888] mb-2">Step 01</div>
                <h3 className="text-lg lg:text-xl text-[#212427] font-light mb-2">Create your startup profile</h3>
                <p className="text-base text-[#696969] leading-relaxed">
                  Capture your vision, market, and competitive positioning in a structured format.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6 pb-12 border-l-2 border-gray-200 pl-8 ml-3 relative">
              <div className="absolute left-0 top-0 w-6 h-6 -ml-3 rounded-full border-2 border-[#0E3E1B] bg-white"></div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-[#898888] mb-2">Step 02</div>
                <h3 className="text-lg lg:text-xl text-[#212427] font-light mb-2">AI analyzes market & gaps</h3>
                <p className="text-base text-[#696969] leading-relaxed">
                  System identifies strategic gaps, market signals, and positioning opportunities.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6 pb-12 border-l-2 border-gray-200 pl-8 ml-3 relative">
              <div className="absolute left-0 top-0 w-6 h-6 -ml-3 rounded-full border-2 border-[#0E3E1B] bg-[#0E3E1B]"></div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-[#0E3E1B] mb-2">Step 03</div>
                <h3 className="text-lg lg:text-xl text-[#212427] font-light mb-2">Smart interview refines strategy</h3>
                <p className="text-base text-[#696969] leading-relaxed">
                  Adaptive questioning uncovers assumptions, validates hypotheses, clarifies direction.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-6 pb-12 border-l-2 border-gray-200 pl-8 ml-3 relative">
              <div className="absolute left-0 top-0 w-6 h-6 -ml-3 rounded-full border-2 border-[#0E3E1B] bg-white"></div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-[#898888] mb-2">Step 04</div>
                <h3 className="text-lg lg:text-xl text-[#212427] font-light mb-2">Dashboard generates actions</h3>
                <p className="text-base text-[#696969] leading-relaxed">
                  Strategy becomes executable tasks, prioritized by impact and sequencing logic.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start gap-6 pl-8 ml-3 relative">
              <div className="absolute left-0 top-0 w-6 h-6 -ml-3 rounded-full border-2 border-[#0E3E1B] bg-white"></div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-[#898888] mb-2">Step 05</div>
                <h3 className="text-lg lg:text-xl text-[#212427] font-light mb-2">Investor-ready outputs produced</h3>
                <p className="text-base text-[#696969] leading-relaxed">
                  Pitch decks, financial models, and updates generated from your validated strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — TESTIMONIALS (Social Proof) */}
      <section className="bg-[#FAF9F7] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
          <h2 className="text-3xl lg:text-5xl font-extralight text-[#212427] mb-16 text-center tracking-tight">
            What founders are saying
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="StartupAI turned 3 months of scattered planning into a coherent strategy in a week. The pitch deck it generated got us into YC."
              author="Sarah Chen"
              role="Co-Founder"
              company="DataFlow AI"
            />
            
            <TestimonialCard
              quote="As a first-time founder, I was drowning in advice. StartupAI gave me a clear playbook and helped me prioritize what actually matters."
              author="Marcus Rodriguez"
              role="Founder & CEO"
              company="HealthTech Labs"
            />
            
            <TestimonialCard
              quote="The market intelligence features saved us from building the wrong product. We pivoted early thanks to the competitive analysis."
              author="Priya Patel"
              role="Co-Founder"
              company="EduVerse"
            />
          </div>
        </div>
      </section>

      {/* SECTION 10 — Platform Tools */}
      <section id="insights" className="bg-white py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <h2 className="text-3xl lg:text-5xl text-[#212427] mb-20 font-extralight tracking-tight">
            Platform capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-16 lg:gap-20">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-wider text-[#898888]">01 / Output</div>
              <h3 className="text-xl lg:text-2xl text-[#212427] font-light">AI pitch deck generator</h3>
              <p className="text-base text-[#696969] leading-relaxed">
                Investor-ready presentations generated from your strategic inputs and market analysis.
              </p>
              <button 
                onClick={() => onNavigate?.('pitch-deck')}
                className="inline-flex items-center gap-2 text-sm text-[#0E3E1B] hover:text-[#0a2f14] font-medium group"
              >
                Explore tool
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="text-xs uppercase tracking-wider text-[#898888]">02 / Validation</div>
              <h3 className="text-xl lg:text-2xl text-[#212427] font-light">Startup validator</h3>
              <p className="text-base text-[#696969] leading-relaxed">
                Objective assessment of business model viability, market fit, and execution readiness.
              </p>
              <button 
                onClick={() => onNavigate?.('startup-validator-v3')}
                className="inline-flex items-center gap-2 text-sm text-[#0E3E1B] hover:text-[#0a2f14] font-medium group"
              >
                Validate idea
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="text-xs uppercase tracking-wider text-[#898888]">03 / Daily work</div>
              <h3 className="text-xl lg:text-2xl text-[#212427] font-light">Execution dashboard</h3>
              <p className="text-base text-[#696969] leading-relaxed">
                Command center for daily priorities, milestone tracking, and strategic alignment.
              </p>
              <button 
                onClick={() => onNavigate?.('dashboard-main')}
                className="inline-flex items-center gap-2 text-sm text-[#0E3E1B] hover:text-[#0a2f14] font-medium group"
              >
                View dashboard
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — Latest Insights */}
      <section className="bg-[#F1EEEA] py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <h2 className="text-3xl lg:text-5xl text-[#212427] mb-20 font-extralight tracking-tight">
            Latest insights
          </h2>

          <div className="space-y-12">
            <div className="border-t border-gray-300 pt-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="lg:flex-1">
                  <div className="text-xs uppercase tracking-wider text-[#898888] mb-4">Market intelligence</div>
                  <h3 className="text-2xl lg:text-3xl text-[#212427] font-light mb-4">
                    AI startup landscape 2025–2026
                  </h3>
                  <p className="text-base text-[#696969] leading-relaxed max-w-2xl">
                    Comprehensive analysis of 500+ AI startups, funding trends, and emerging opportunities across enterprise and consumer markets.
                  </p>
                </div>
                <button 
                  onClick={() => onNavigate?.('ai-startup-landscape')}
                  className="inline-flex items-center gap-2 text-sm text-[#0E3E1B] hover:text-[#0a2f14] font-medium group whitespace-nowrap lg:mt-10"
                >
                  Read report
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="lg:flex-1">
                  <div className="text-xs uppercase tracking-wider text-[#898888] mb-4">Industry adoption</div>
                  <h3 className="text-2xl lg:text-3xl text-[#212427] font-light mb-4">
                    AI industry adoption report 2025
                  </h3>
                  <p className="text-base text-[#696969] leading-relaxed max-w-2xl">
                    How different industries are integrating AI technology, with adoption rates, use cases, and ROI benchmarks across sectors.
                  </p>
                </div>
                <button 
                  onClick={() => onNavigate?.('ai-industry-adoption')}
                  className="inline-flex items-center gap-2 text-sm text-[#0E3E1B] hover:text-[#0a2f14] font-medium group whitespace-nowrap lg:mt-10"
                >
                  Explore data
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 — FINAL CTA (Gradient Background) */}
      <section 
        className="py-24 lg:py-32"
        style={{
          background: 'linear-gradient(135deg, #0E3E1B 0%, #6b9d89 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl text-white mb-6 font-extralight tracking-tight leading-tight">
            Ready to transform your startup?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join 10,000+ founders building their companies with AI-powered guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate?.('onboarding-v3')}
              className="px-10 py-4 bg-white text-[#0E3E1B] font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Building
            </button>
            
            <button className="px-10 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
          
          <p className="text-sm text-white/70 mt-10">
            Trusted by 10,000+ founders • No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          {/* Top Footer */}
          <div className="py-16 lg:py-20 grid md:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand */}
            <div className="md:col-span-4">
              <div className="text-xl font-medium text-[#212427] mb-6">
                StartupAI
              </div>
              <p className="text-sm text-[#696969] leading-relaxed max-w-sm">
                An AI operating system for founders, connecting strategy to daily execution.
              </p>
            </div>

            {/* Links Column 1 */}
            <div className="md:col-span-2">
              <div className="space-y-3">
                <button onClick={() => onNavigate?.('pitch-deck')} className="block text-sm text-[#696969] hover:text-[#212427] transition-colors">
                  Pitch deck
                </button>
                <button onClick={() => onNavigate?.('startup-validator-v3')} className="block text-sm text-[#696969] hover:text-[#212427] transition-colors">
                  Validator
                </button>
                <button onClick={() => onNavigate?.('dashboard-main')} className="block text-sm text-[#696969] hover:text-[#212427] transition-colors">
                  Dashboard
                </button>
              </div>
            </div>

            {/* Links Column 2 */}
            <div className="md:col-span-2">
              <div className="space-y-3">
                <button onClick={() => onNavigate?.('ai-startup-landscape')} className="block text-sm text-[#696969] hover:text-[#212427] transition-colors">
                  Insights
                </button>
                <button onClick={() => onNavigate?.('onboarding-v3')} className="block text-sm text-[#696969] hover:text-[#212427] transition-colors">
                  Get started
                </button>
                <button onClick={() => onNavigate?.('sitemap')} className="block text-sm text-[#696969] hover:text-[#212427] transition-colors">
                  Sitemap
                </button>
              </div>
            </div>

            {/* Links Column 3 */}
            <div className="md:col-span-2">
              <div className="space-y-3">
                <a href="#" className="block text-sm text-[#696969] hover:text-[#212427] transition-colors">
                  Privacy
                </a>
                <a href="#" className="block text-sm text-[#696969] hover:text-[#212427] transition-colors">
                  Terms
                </a>
                <a href="#" className="block text-sm text-[#696969] hover:text-[#212427] transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="md:col-span-2">
              <button className="w-full px-6 py-3 bg-[#0E3E1B] hover:bg-[#0a2f14] text-white text-sm font-medium transition-all duration-200 rounded-lg">
                Contact us
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#898888]">
              <p>© {new Date().getFullYear()} StartupAI. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <span className="font-medium text-[#212427]">EN</span>
                <span>|</span>
                <button className="hover:text-[#212427] transition-colors">FR</button>
                <button className="hover:text-[#212427] transition-colors">DE</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}