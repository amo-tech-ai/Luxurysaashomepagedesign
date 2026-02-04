import { useEffect, useRef, useState } from 'react';
import { 
  TrendingUp, 
  Building2,
  Users,
  Zap,
  Server,
  DollarSign,
  Brain,
  Rocket,
  Shield,
  Eye,
  ChevronDown,
  ChevronUp,
  Award,
  Target,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Clock,
  BarChart3,
  Layers,
  Workflow,
  GitBranch,
  Sparkles,
  TrendingDown,
  Activity,
  Gauge,
  Database,
  Briefcase,
  Stethoscope,
  ShoppingCart,
  Factory,
  UserCheck,
  FileCheck,
  ArrowDown,
  Play,
  Pause,
  RefreshCw,
  Lock,
  Unlock,
  Check,
  X,
  Plus,
  Minus
} from 'lucide-react';

export default function AIProductsV3Page() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [methodologyOpen, setMethodologyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
      setScrollY(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGoHome = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'home' }));
  };

  return (
    <div className="min-h-screen bg-[#fafaf8] relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#0d5f4e]/5 to-transparent rounded-full blur-3xl"
          style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)` }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#6b9d89]/5 to-transparent rounded-full blur-3xl"
          style={{ transform: `translate(-${scrollY * 0.08}px, -${scrollY * 0.12}px)` }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf8]/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={handleGoHome}
              className="text-2xl text-gray-900 hover:text-[#0d5f4e] transition-colors duration-300 font-light"
            >
              StartupAI
            </button>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em]">
                <Brain className="w-3 h-3 text-[#0d5f4e]" />
                AI Products Intelligence 2024–2026
              </div>
              <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden hidden md:block">
                <div 
                  className="h-full bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] transition-all duration-300"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection scrollY={scrollY} />
        <AIProductStackSection />
        <ProductTypesFundingSection />
        <IndustryAdoptionSection />
        <WinningFeaturesSection />
        <ValueCreationSection />
        <InvestorLogicSection />
        <ScalingPatternSection />
        <FundingFunnelSection />
        <FailureModesSection />
        <CasePatternSection />
        <KeyTakeawaysSection />
        <MethodologySection 
          methodologyOpen={methodologyOpen}
          setMethodologyOpen={setMethodologyOpen}
        />
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <button 
              onClick={handleGoHome}
              className="text-3xl text-gray-900 hover:text-[#0d5f4e] transition-colors font-light"
            >
              StartupAI
            </button>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500 mb-1">
                © {new Date().getFullYear()} StartupAI Research. All rights reserved.
              </p>
              <p className="text-xs text-gray-400">
                Data compiled from Crunchbase, PitchBook, CB Insights & industry sources
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// SECTION 1 — Hero / Big Picture
function HeroSection({ scrollY }: { scrollY: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ type1: 0, type2: 0, type3: 0, type4: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Animated counters
    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        type1: Math.floor(progress * 3),
        type2: Math.floor(progress * 100),
        type3: Math.floor(progress * 85),
        type4: Math.floor(progress * 100)
      });
      
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Title + Subtitle */}
          <div 
            className={`space-y-10 transition-all duration-1200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
            style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
          >
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-[#0d5f4e]/10 to-[#6b9d89]/10 rounded-full border border-[#0d5f4e]/20">
                <div className="w-2 h-2 bg-[#0d5f4e] rounded-full animate-pulse" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#0d5f4e] font-semibold">
                  🤖 AI Products Intelligence (2024–2026)
                </span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl leading-[0.95] text-gray-900 font-light tracking-tight">
                  Most Funded AI Products <br />
                  <span className="bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] bg-clip-text text-transparent">
                    Replace Work
                  </span>
                </h1>
                
                <div className="w-24 h-1 bg-gradient-to-r from-[#0d5f4e] to-transparent rounded-full" />
              </div>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl font-light">
                The strongest AI startups don&apos;t add AI. They own a workflow, remove friction, and deliver measurable outcomes.
              </p>
            </div>
          </div>

          {/* Right: KPI Cards */}
          <div 
            className={`relative transition-all duration-1200 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
            style={{ transform: `translateY(-${scrollY * 0.15}px)` }}
          >
            <div className="space-y-6">
              <KPICard 
                number={`${counts.type1}`}
                label="Product Types Dominate AI Funding"
                sublabel="Models · Infrastructure · Applications"
                icon={Layers}
                color="#0d5f4e"
                delay={0}
              />
              
              <KPICard 
                number="Fewer Startups"
                label="Bigger Checks"
                sublabel="Capital concentrates into category winners"
                icon={TrendingUp}
                color="#6b9d89"
                delay={200}
              />
              
              <KPICard 
                number={`${counts.type3}%`}
                label="Vertical AI Beats Generic Tools"
                sublabel="Deep domain focus drives adoption"
                icon={Target}
                color="#0d5f4e"
                delay={400}
              />

              <KPICard 
                number="Outcomes"
                label="Not Features"
                sublabel="Buyers fund ROI, not demos"
                icon={Award}
                color="#6b9d89"
                delay={600}
              />

              {/* Plain takeaway */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
                <p className="text-white text-base font-light leading-relaxed">
                  <strong className="text-[#6b9d89]">Plain takeaway:</strong><br />
                  If an AI product saves time or money inside a real job, it gets bought — and funded.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KPICard({ number, label, sublabel, icon: Icon, color, delay }: any) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`bg-white rounded-2xl border border-gray-200/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-700 group ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div 
          className="text-4xl lg:text-5xl font-light group-hover:scale-105 transition-transform duration-300"
          style={{ color }}
        >
          {number}
        </div>
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon className="w-6 h-6" style={{ color }} strokeWidth={2} />
        </div>
      </div>
      <h3 className="text-base font-semibold text-gray-900 mb-2">{label}</h3>
      <p className="text-sm text-gray-600">{sublabel}</p>
    </div>
  );
}

// SECTION 2 — The AI Product Stack
function AIProductStackSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const layers = [
    {
      id: 3,
      title: 'Applications / Vertical AI',
      subtitle: 'The job-doers',
      color: '#0d5f4e',
      whatTheyAre: 'AI that automates an entire business workflow.',
      examples: [
        'AI customer support agents',
        'AI recruiting & resume screening',
        'AI finance & accounting ops',
        'AI ecommerce merchandising'
      ],
      whoBuys: 'Business users, operations teams, domain experts',
      whyFunded: 'If it saves hours or increases revenue → fundable.',
      reality: 'Fast ROI. Easier adoption. Fastest growing segment.'
    },
    {
      id: 2,
      title: 'AI Infrastructure',
      subtitle: 'The plumbing',
      color: '#6b9d89',
      whatTheyAre: 'Tools that make AI usable, safe, and reliable in production.',
      examples: [
        'Model monitoring & cost tracking',
        'Evaluation & testing',
        'Guardrails, approvals, audit logs',
        'Agent orchestration'
      ],
      whoBuys: 'AI teams, startups, enterprises',
      whyFunded: 'Every AI app depends on it.',
      reality: 'AWS for AI reliability — boring, but essential.'
    },
    {
      id: 1,
      title: 'Foundation Models',
      subtitle: 'The brain',
      color: '#2d4a3e',
      whatTheyAre: 'Large AI models delivered via APIs.',
      examples: [
        'Language models',
        'Image / video models',
        'Speech & multimodal models'
      ],
      whoBuys: 'Developers, enterprises, platforms',
      whyFunded: 'Platform scale. Ecosystem lock-in. Winner-take-most economics.',
      reality: 'Only a handful of companies can compete here. Capital requirements are extreme.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Layers className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Mental Model
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            The 3 Layers of <span className="text-[#0d5f4e]">AI Products</span>
          </h2>
        </div>

        {/* Visual Stack Diagram */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="space-y-4">
            {layers.map((layer, index) => (
              <div
                key={layer.id}
                className={`relative cursor-pointer transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${activeLayer === layer.id ? 'scale-105' : ''}`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  backgroundColor: `${layer.color}15`
                }}
                onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                onMouseEnter={() => setActiveLayer(layer.id)}
              >
                <div 
                  className="p-8 border-2 rounded-2xl transition-all duration-300"
                  style={{ 
                    borderColor: activeLayer === layer.id ? layer.color : 'transparent',
                    backgroundColor: 'white'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-1">{layer.title}</h3>
                      <p className="text-lg text-gray-500 italic">{layer.subtitle}</p>
                    </div>
                    <ArrowRight 
                      className={`w-6 h-6 transition-transform duration-300 ${
                        activeLayer === layer.id ? 'rotate-90' : ''
                      }`}
                      style={{ color: layer.color }}
                    />
                  </div>
                </div>

                {/* Expanded Details */}
                {activeLayer === layer.id && (
                  <div className="mt-4 p-8 bg-white border-2 rounded-2xl" style={{ borderColor: layer.color }}>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">
                          What they are
                        </h4>
                        <p className="text-sm text-gray-700 mb-6">{layer.whatTheyAre}</p>

                        <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">
                          Examples
                        </h4>
                        <ul className="space-y-2">
                          {layer.examples.map((example, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: layer.color }} />
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">
                          Who buys
                        </h4>
                        <p className="text-sm text-gray-700 mb-6">{layer.whoBuys}</p>

                        <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">
                          Why investors fund them
                        </h4>
                        <p className="text-sm text-gray-700 mb-6">{layer.whyFunded}</p>

                        <div className="p-4 rounded-lg" style={{ backgroundColor: `${layer.color}10` }}>
                          <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">
                            Reality check
                          </h4>
                          <p className="text-sm text-gray-700 italic">{layer.reality}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// SECTION 3 — Product Types × Funding Signals
function ProductTypesFundingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const productTypes = [
    {
      type: 'Foundation Models',
      vcShare: '~5–10%',
      avgDealSize: '$50M–$500M+',
      whyWins: 'Platform bets',
      color: '#2d4a3e'
    },
    {
      type: 'Infrastructure',
      vcShare: '~10–15%',
      avgDealSize: '$10M–$40M',
      whyWins: 'Every app needs it',
      color: '#6b9d89'
    },
    {
      type: 'Applications / Vertical AI',
      vcShare: '~60–70%',
      avgDealSize: '$2M–$15M',
      whyWins: 'Fast ROI, fast sales',
      color: '#0d5f4e',
      highlight: true
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <BarChart3 className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Funding Signals
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            AI Product Types × <span className="text-[#0d5f4e]">Funding</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-200/50 shadow-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-6 bg-gradient-to-r from-gray-50 to-white border-b-2 border-gray-200">
              <div className="text-xs uppercase tracking-wider text-gray-500 font-bold">Product Type</div>
              <div className="text-xs uppercase tracking-wider text-gray-500 font-bold">% of AI VC</div>
              <div className="text-xs uppercase tracking-wider text-gray-500 font-bold">Avg Deal Size</div>
              <div className="text-xs uppercase tracking-wider text-gray-500 font-bold">Why It Wins</div>
            </div>

            {/* Table Rows */}
            {productTypes.map((product, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 gap-4 p-6 border-b border-gray-100 transition-all duration-700 hover:bg-gradient-to-r hover:from-[#0d5f4e]/5 hover:to-transparent ${
                  product.highlight ? 'bg-[#0d5f4e]/5' : ''
                } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="font-semibold text-gray-900">{product.type}</div>
                <div className="text-gray-700">{product.vcShare}</div>
                <div className="text-gray-700">{product.avgDealSize}</div>
                <div className="text-gray-700">{product.whyWins}</div>
              </div>
            ))}
          </div>

          {/* Key Insight */}
          <div className="mt-12 p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl text-center">
            <p className="text-xl text-white font-light">
              <strong className="text-[#6b9d89]">Key insight:</strong><br />
              Most funded AI startups are application-layer products, not models.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// SECTION 4 — Industries Adopting AI First
function IndustryAdoptionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      icon: Briefcase,
      emoji: '🏦',
      name: 'Finance & FinTech',
      replaces: ['Manual fraud review', 'Risk scoring', 'Tier-1 support'],
      whyBuyers: ['Revenue protection', 'Regulatory pressure'],
      example: 'AI flags suspicious transactions → humans review only edge cases.'
    },
    {
      icon: Stethoscope,
      emoji: '🏥',
      name: 'Healthcare & Life Sciences',
      replaces: ['Documentation & coding', 'Image pre-analysis', 'Trial data review'],
      whyBuyers: ['Clinician time saved', 'Staffing shortages'],
      example: 'Doctors review AI-prepared notes instead of writing them.'
    },
    {
      icon: ShoppingCart,
      emoji: '🛒',
      name: 'Retail & E-commerce',
      replaces: ['Manual merchandising', 'Customer service Tier-1', 'Demand forecasting spreadsheets'],
      whyBuyers: ['Revenue lift', 'Thin margins'],
      example: 'AI updates pricing daily instead of monthly.'
    },
    {
      icon: Factory,
      emoji: '🏭',
      name: 'Manufacturing & Operations',
      replaces: ['Manual quality checks', 'Reactive maintenance'],
      whyBuyers: ['Downtime is expensive'],
      example: 'AI predicts machine failure days before it happens.'
    },
    {
      icon: UserCheck,
      emoji: '🧑‍💼',
      name: 'HR & Recruiting',
      replaces: ['Resume screening', 'Scheduling coordination'],
      whyBuyers: ['Faster hiring', 'Lower recruiter workload'],
      example: 'AI filters 100 resumes → recruiter reviews 10.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Industry Adoption
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Where AI Is <span className="text-[#0d5f4e]">Actually Used</span> Today
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{industry.emoji}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{industry.name}</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">
                      What AI replaces
                    </h4>
                    <ul className="space-y-2">
                      {industry.replaces.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <ArrowRight className="w-4 h-4 text-[#0d5f4e] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">
                      Why buyers approve
                    </h4>
                    <ul className="space-y-2">
                      {industry.whyBuyers.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-[#6b9d89] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">
                      Real example
                    </h4>
                    <p className="text-sm text-gray-700 italic">{industry.example}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// SECTION 5 — Features of Winning AI Products
function WinningFeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      number: '1️⃣',
      title: 'Workflow Ownership',
      description: 'AI doesn\'t just answer — it finishes the job.',
      example: 'Not "write a support reply" → "Resolve the ticket and log it"',
      icon: Workflow
    },
    {
      number: '2️⃣',
      title: 'Human-in-the-Loop Controls',
      description: 'AI proposes. Humans approve.',
      includes: ['Review screens', 'Approval buttons', 'Undo / rollback'],
      whyMatters: 'Trust + compliance.',
      icon: UserCheck
    },
    {
      number: '3️⃣',
      title: 'Deep Integrations',
      description: 'AI fits into existing tools.',
      examples: 'CRM · Helpdesk · Finance systems',
      rule: 'No one wants another dashboard.',
      icon: GitBranch
    },
    {
      number: '4️⃣',
      title: 'Reliability & Guardrails',
      description: 'AI must be predictable.',
      includes: ['Logging & audits', 'Cost limits', 'Error detection'],
      whyMatters: 'Broken AI is expensive.',
      icon: Shield
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Winning Features
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            What Funded AI Products <span className="text-[#0d5f4e]">Have in Common</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-700 hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl">{feature.number}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <Icon className="w-8 h-8 text-[#0d5f4e]" />
                </div>

                <p className="text-base text-gray-700 mb-6 leading-relaxed">{feature.description}</p>

                {feature.example && (
                  <div className="p-4 bg-[#0d5f4e]/5 rounded-lg mb-4">
                    <p className="text-sm text-gray-700">{feature.example}</p>
                  </div>
                )}

                {feature.includes && (
                  <div className="mb-4">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Includes</h4>
                    <ul className="space-y-2">
                      {feature.includes.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-[#0d5f4e]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {feature.examples && (
                  <div className="mb-4">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Examples</h4>
                    <p className="text-sm text-gray-700">{feature.examples}</p>
                  </div>
                )}

                {feature.rule && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-900 font-medium italic">{feature.rule}</p>
                  </div>
                )}

                {feature.whyMatters && (
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Why it matters</h4>
                    <p className="text-sm text-gray-700 font-medium">{feature.whyMatters}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// SECTION 6 — Value Creation (Before/After)
function ValueCreationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      emoji: '⏱️',
      title: 'Time Saved',
      before: 'Hours',
      after: 'Minutes',
      example: 'Resume screening ↓ 70–80%',
      color: '#0d5f4e'
    },
    {
      emoji: '💰',
      title: 'Revenue Lift',
      before: 'Slow follow-ups',
      after: 'Instant responses',
      example: 'Conversions ↑ 10–25%',
      color: '#6b9d89'
    },
    {
      emoji: '📉',
      title: 'Cost Reduction',
      before: 'Large teams',
      after: 'Smaller teams + AI',
      example: 'Support cost ↓ 30–50%',
      color: '#0d5f4e'
    },
    {
      emoji: '📊',
      title: 'Better Decisions',
      before: 'Raw data',
      after: 'Clear priorities',
      example: 'AI flags churn risks weekly.',
      color: '#6b9d89'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Value Creation
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Why Customers <span className="text-[#0d5f4e]">Pay for AI</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 transition-all duration-700 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="text-4xl">{value.emoji}</div>
                <h3 className="text-2xl font-semibold text-gray-900">{value.title}</h3>
              </div>

              {/* Before/After Comparison */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-white border-2 border-gray-200 rounded-lg">
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Before</div>
                  <p className="text-lg font-semibold text-gray-900">{value.before}</p>
                </div>
                <div 
                  className="p-4 border-2 rounded-lg"
                  style={{ 
                    borderColor: value.color,
                    backgroundColor: `${value.color}10`
                  }}
                >
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">After</div>
                  <p className="text-lg font-semibold" style={{ color: value.color }}>{value.after}</p>
                </div>
              </div>

              {/* Example */}
              <div className="p-4 bg-white rounded-lg border border-gray-100">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Example</h4>
                <p className="text-sm text-gray-900 font-medium">{value.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION 7 — Investor Logic
function InvestorLogicSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const fundableSignals = [
    'Clear daily user',
    'Clear job replaced',
    'Measurable ROI',
    'Workflow or data lock-in',
    'Defensible distribution'
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Eye className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Investor Logic
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            What Makes an AI Startup <span className="text-[#0d5f4e]">Fundable</span>
          </h2>
        </div>

        <div 
          className={`bg-white border-2 border-[#0d5f4e] rounded-2xl p-10 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-6 font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#0d5f4e]" />
            Fundable Signals
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {fundableSignals.map((signal, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-[#0d5f4e]/5 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#0d5f4e] flex-shrink-0" />
                <span className="text-base text-gray-900 font-medium">{signal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Red Flag */}
        <div 
          className={`bg-gradient-to-br from-gray-100 to-white border-2 border-gray-400 rounded-2xl p-10 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gray-400 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">🚫 Red Flag</h3>
              <p className="text-xl text-gray-700 font-semibold mb-4">&quot;It&apos;s ChatGPT but for X&quot;</p>
              <p className="text-base text-gray-600 leading-relaxed">
                Generic wrappers without workflow ownership rarely survive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// SECTION 8 — How AI Startups Scale (The Acceleration Pattern)
function ScalingPatternSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stages = [
    { title: 'One Painful Workflow', icon: Target },
    { title: 'Early ROI Proof', icon: CheckCircle2 },
    { title: 'Vertical Expansion', icon: ArrowRight },
    { title: 'Agentic Automation', icon: Sparkles }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Rocket className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Scaling Pattern
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            The <span className="text-[#0d5f4e]">Acceleration Pattern</span>
          </h2>
        </div>

        {/* Flowchart */}
        <div className="relative">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div key={index} className="mb-8 last:mb-0">
                <div 
                  className={`flex items-center gap-6 p-8 bg-gradient-to-r from-[#0d5f4e]/10 to-white border-2 border-[#0d5f4e]/30 rounded-2xl transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#0d5f4e] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-900">{stage.title}</h3>
                </div>
                
                {index < stages.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ArrowDown className="w-8 h-8 text-[#0d5f4e]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Example */}
        <div className="mt-12 p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl">
          <h3 className="text-xs uppercase tracking-wider text-[#6b9d89] mb-4 font-semibold">Example</h3>
          <p className="text-2xl text-white font-light">
            Returns → inventory → pricing.
          </p>
        </div>
      </div>
    </section>
  );
}

// SECTION 9 — Funding Funnel (Founder View)
function FundingFunnelSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stages = [
    { stage: 'Bootstrapped MVP', description: 'Build the core workflow', color: '#2d4a3e' },
    { stage: 'Pre-Seed', description: 'ROI proof with early users', color: '#0d5f4e' },
    { stage: 'Seed', description: 'Repeatable workflow + growth', color: '#6b9d89' },
    { stage: 'Series A', description: 'Vertical dominance', color: '#0d5f4e' }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-[#fafaf8]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Activity className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Founder View
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Funding <span className="text-[#0d5f4e]">Funnel</span>
          </h2>
        </div>

        <div className="relative">
          {stages.map((item, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div 
                className={`p-8 bg-white border-2 rounded-2xl transition-all duration-700 hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  borderColor: item.color
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-semibold text-gray-900">{item.stage}</h3>
                  <div 
                    className="px-4 py-2 rounded-lg text-white text-sm font-semibold"
                    style={{ backgroundColor: item.color }}
                  >
                    Stage {index + 1}
                  </div>
                </div>
                <p className="text-lg text-gray-600">{item.description}</p>
              </div>
              
              {index < stages.length - 1 && (
                <div className="flex justify-center my-4">
                  <ArrowDown className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className="mt-12 p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl text-center">
          <p className="text-xl text-white font-light">
            <strong className="text-[#6b9d89]">Key insight:</strong><br />
            Series A companies almost always own a workflow.
          </p>
        </div>
      </div>
    </section>
  );
}

// SECTION 10 — Failure Modes (Reality Check)
function FailureModesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const failures = [
    'No clear customer',
    'Generic AI wrapper',
    'No trust controls',
    'No data advantage',
    'Feature overload'
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-500/10 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-gray-600" />
            <span className="text-xs uppercase tracking-[0.2em] text-gray-600 font-semibold">
              Reality Check
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Why Many AI Startups <span className="text-gray-600">Fail</span>
          </h2>
        </div>

        <div className="space-y-4 mb-12">
          {failures.map((failure, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-6 bg-white border-2 border-gray-300 rounded-2xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                <XCircle className="w-6 h-6 text-gray-600" />
              </div>
              <p className="text-xl text-gray-900 font-semibold">🚫 {failure}</p>
            </div>
          ))}
        </div>

        {/* Plain Truth */}
        <div className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl text-center">
          <p className="text-xl text-white font-light">
            <strong className="text-[#6b9d89]">Plain truth:</strong><br />
            Technology without a workflow rarely wins.
          </p>
        </div>
      </div>
    </section>
  );
}

// SECTION 11 — Case Pattern (Vertical AI)
function CasePatternSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Award className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Case Pattern
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Vertical AI <span className="text-[#0d5f4e]">Example</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Founder / Operator AI Platform
          </p>
        </div>

        <div 
          className={`bg-white border-2 border-[#0d5f4e] rounded-2xl p-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Workflow */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-semibold">Workflow</h3>
              <p className="text-lg text-gray-900 font-semibold">
                Idea → Clarity → Execution → Fundraising
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-semibold">Features</h3>
              <ul className="space-y-2">
                {[
                  'Onboarding wizard',
                  'AI-generated docs',
                  'Tasks + approvals',
                  'CRM & investor tracking'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0d5f4e]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 mb-8">
            <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-semibold">Value</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                'Faster execution',
                'Less guesswork',
                'Measurable progress'
              ].map((value, i) => (
                <div key={i} className="p-4 bg-[#0d5f4e]/5 rounded-lg text-center">
                  <p className="text-sm text-gray-900 font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-[#0d5f4e]/10 to-transparent rounded-lg">
            <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">
              Why it fits funding patterns
            </h3>
            <p className="text-base text-gray-900 leading-relaxed">
              Vertical focus + workflow ownership + ROI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// SECTION 12 — Key Takeaways
function KeyTakeawaysSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const quotes = [
    '"AI replaces tasks, not people."',
    '"Workflow ownership beats clever prompts."',
    '"The best AI products feel boring — until you see the ROI."'
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Key Takeaways
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Pull <span className="text-[#0d5f4e]">Quotes</span>
          </h2>
        </div>

        <div className="space-y-6">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className={`p-10 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <p className="text-3xl text-white font-light italic text-center leading-relaxed">
                {quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION 13 — Sources & Methodology
function MethodologySection({ methodologyOpen, setMethodologyOpen }: any) {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <FileCheck className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Research Foundation
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Sources & <span className="text-[#0d5f4e]">Methodology</span>
          </h2>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-6 font-semibold">
            Primary Sources
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Crunchbase',
              'PitchBook',
              'CB Insights',
              'TechCrunch',
              'YC',
              'Accelerator demo days'
            ].map((source, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-lg text-center">
                <span className="text-sm text-gray-900 font-medium">{source}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => setMethodologyOpen(!methodologyOpen)}
          className="w-full flex items-center justify-between p-6 bg-white border border-gray-200 rounded-2xl hover:border-[#0d5f4e] transition-all"
        >
          <span className="text-lg font-semibold text-gray-900">View Detailed Methodology</span>
          {methodologyOpen ? (
            <ChevronUp className="w-5 h-5 text-[#0d5f4e]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>

        {methodologyOpen && (
          <div className="mt-6 p-8 bg-white border border-gray-200 rounded-2xl">
            <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-semibold">
              Methodology Details
            </h3>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>Focus:</strong> AI-native products across three layers:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Foundation models</li>
                <li>Infrastructure</li>
                <li>Applications / Vertical AI</li>
              </ul>
              <p>
                <strong>Evaluation Criteria:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Workflow ownership vs. feature additions</li>
                <li>Measurable adoption & funding signals</li>
                <li>Real-world value creation (time, cost, revenue)</li>
                <li>Distribution and defensibility</li>
              </ul>
              <p className="pt-4 border-t border-gray-200 italic">
                Measured adoption & funding signals prioritized over hype.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
