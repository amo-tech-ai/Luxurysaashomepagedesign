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
  ExternalLink,
  Award,
  Target,
  AlertCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Clock,
  BarChart3,
  Layers,
  Lock,
  Workflow,
  Settings,
  GitBranch,
  ThumbsUp,
  ThumbsDown,
  Lightbulb,
  TrendingDown,
  Activity
} from 'lucide-react';

export default function AIProductsPage() {
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
      {/* Animated Background Elements */}
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

      {/* Sticky Header */}
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
                <Rocket className="w-3 h-3 text-[#0d5f4e]" />
                AI Startup Products 2024-2026
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
        <LandscapeSection />
        <FeaturesSection />
        <ValueCreationSection />
        <InvestorLogicSection />
        <AccelerationSection />
        <FailureModesSection />
        <BuildingGuideSection />
        <CaseExampleSection />
        <KeyTakeawaysSection />
        <SourcesMethodologySection 
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
                &copy; {new Date().getFullYear()} StartupAI Research. All rights reserved.
              </p>
              <p className="text-xs text-gray-400">
                Data compiled from Crunchbase, PitchBook, CB Insights & YC
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Hero Section
function HeroSection({ scrollY }: { scrollY: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
                  AI Product Intelligence 2024-2026
                </span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl leading-[0.95] text-gray-900 font-light tracking-tight">
                  Most Funded AI Startups <br />
                  <span className="bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] bg-clip-text text-transparent">
                    Do One Thing Well
                  </span>
                </h1>
                
                <div className="w-24 h-1 bg-gradient-to-r from-[#0d5f4e] to-transparent rounded-full" />
              </div>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl font-light">
                The best AI startups don't "add AI." They own a workflow, remove friction, and deliver measurable outcomes.
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
                number="3"
                label="Funded Product Types"
                sublabel="Models, Infrastructure, Applications"
                icon={Layers}
                color="#0d5f4e"
                delay={0}
              />
              
              <KPICard 
                number="Fewer"
                label="Startups, Bigger Checks"
                sublabel="Capital concentrates into clear winners"
                icon={TrendingUp}
                color="#6b9d89"
                delay={200}
              />
              
              <KPICard 
                number="Vertical"
                label="Focus Beats Generic"
                sublabel="Deep domain expertise wins"
                icon={Target}
                color="#0d5f4e"
                delay={400}
              />

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0d5f4e]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-[#0d5f4e]" strokeWidth={2} />
                  </div>
                  <p className="text-white text-lg font-light leading-relaxed">
                    Acceleration comes from <strong className="text-[#6b9d89]">outcomes</strong>, not features
                  </p>
                </div>
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
          className="text-5xl lg:text-6xl font-light group-hover:scale-105 transition-transform duration-300"
          style={{ color }}
        >
          {number}
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-[#0d5f4e]/10 to-transparent rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="text-sm font-semibold text-gray-900">{label}</div>
        <div className="text-xs text-gray-500">{sublabel}</div>
      </div>

      <div 
        className="mt-4 h-1 rounded-full transition-all duration-1000 ease-out"
        style={{ 
          backgroundColor: `${color}20`,
          width: isVisible ? '100%' : '0%'
        }}
      >
        <div 
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ 
            backgroundColor: color,
            width: isVisible ? '100%' : '0%',
            transitionDelay: '300ms'
          }}
        />
      </div>
    </div>
  );
}

// Landscape Section - 3 Layer Stack
function LandscapeSection() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const layers = [
    {
      title: 'Applications & Vertical AI',
      subtitle: '"The job-doers"',
      description: 'AI that automates a real business workflow',
      whoBuys: 'Teams, operators, SMBs, enterprises',
      whyFunded: 'Clear ROI, faster sales, easier adoption',
      examples: [
        'AI customer support agents',
        'AI finance & accounting ops',
        'AI recruiting & HR screening',
        'AI ecommerce merchandising'
      ],
      logic: 'If it saves time or makes money fast then fundable',
      color: '#0d5f4e',
      icon: Users
    },
    {
      title: 'Infrastructure',
      subtitle: '"The plumbing"',
      description: 'Tools that make AI usable in production',
      whoBuys: 'AI teams, startups, enterprises',
      whyFunded: 'Every AI app needs this layer',
      examples: [
        'Monitoring & cost tracking',
        'Guardrails, approvals, safety',
        'Model evaluation & testing',
        'Agent orchestration'
      ],
      logic: 'Like AWS for AI reliability - not exciting, but mission-critical',
      color: '#6b9d89',
      icon: Server
    },
    {
      title: 'Foundation Models',
      subtitle: '"The brain"',
      description: 'Large AI models offered via APIs',
      whoBuys: 'Developers, enterprises, platforms',
      whyFunded: 'Platform scale + ecosystem lock-in',
      examples: [
        'Large language models',
        'Image/video generation models',
        'Speech + multimodal models'
      ],
      logic: 'High risk, very high upside. Requires massive capital',
      color: '#9ca3af',
      icon: Brain
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Layers className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Mental Model
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            The 3 Layers of <span className="text-[#0d5f4e]">AI Startups</span>
          </h2>
        </div>

        {/* Stack Visualization */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="space-y-4">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              const isActive = activeLayer === index;
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setActiveLayer(index)}
                  onMouseLeave={() => setActiveLayer(null)}
                >
                  <div 
                    className={`relative rounded-3xl border-2 p-8 cursor-pointer transition-all duration-500 ${
                      isActive 
                        ? 'border-[#0d5f4e] shadow-2xl scale-105 bg-gradient-to-r from-[#0d5f4e]/5 to-white' 
                        : 'border-gray-200 shadow-lg hover:border-gray-300 bg-white'
                    }`}
                    style={{
                      minHeight: '120px'
                    }}
                  >
                    <div className="flex items-start gap-6">
                      <div 
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                          isActive ? 'scale-110' : ''
                        }`}
                        style={{ 
                          backgroundColor: isActive ? `${layer.color}20` : `${layer.color}10`
                        }}
                      >
                        <Icon 
                          className="w-8 h-8 transition-all duration-500" 
                          style={{ color: layer.color }}
                          strokeWidth={1.5} 
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3 mb-2">
                          <h3 className="text-2xl font-semibold text-gray-900">{layer.title}</h3>
                          <span className="text-sm text-gray-500 font-light">{layer.subtitle}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{layer.description}</p>
                        
                        {isActive && (
                          <div className="grid md:grid-cols-2 gap-4 mt-6 animate-in fade-in slide-in-from-top-4 duration-500">
                            <div>
                              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Who Buys</div>
                              <p className="text-sm text-gray-700">{layer.whoBuys}</p>
                            </div>
                            <div>
                              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Why Funded</div>
                              <p className="text-sm text-gray-700">{layer.whyFunded}</p>
                            </div>
                            <div>
                              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Examples</div>
                              <ul className="space-y-1">
                                {layer.examples.map((example, i) => (
                                  <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                    <CheckCircle2 className="w-3 h-3 text-[#0d5f4e] flex-shrink-0 mt-0.5" strokeWidth={2} />
                                    {example}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Investor Logic</div>
                              <p className="text-sm text-gray-700 italic">"{layer.logic}"</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Stack Diagram */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200/50 p-12 shadow-xl">
            <div className="space-y-1">
              {layers.map((layer, index) => (
                <div
                  key={index}
                  className="rounded-xl p-6 text-center transition-all duration-500 cursor-pointer"
                  style={{
                    backgroundColor: `${layer.color}${activeLayer === index ? '20' : '10'}`,
                    transform: activeLayer === index ? 'scale(1.02)' : 'scale(1)'
                  }}
                  onMouseEnter={() => setActiveLayer(index)}
                  onMouseLeave={() => setActiveLayer(null)}
                >
                  <div className="text-lg font-semibold" style={{ color: layer.color }}>
                    {layer.title}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{layer.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
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
      icon: Workflow,
      title: 'Workflow Ownership',
      description: 'AI does not just answer - it completes steps.',
      example: 'Not just "write an email" but "Handle the entire customer support ticket"',
      color: '#0d5f4e'
    },
    {
      icon: CheckCircle2,
      title: 'Human-in-the-Loop Controls',
      description: 'AI proposes. Humans approve.',
      example: 'Review screens, approval buttons, undo/rollback. Builds trust. Required for enterprise adoption.',
      color: '#6b9d89'
    },
    {
      icon: GitBranch,
      title: 'Integrations',
      description: 'AI fits into existing tools.',
      example: 'CRM (Salesforce, HubSpot), Helpdesk (Zendesk, Intercom), Finance (Stripe, QuickBooks). No one wants another dashboard.',
      color: '#0d5f4e'
    },
    {
      icon: Shield,
      title: 'Reliability & Guardrails',
      description: 'AI must be safe and predictable.',
      example: 'Logging & audit trails, cost limits, error detection, policy enforcement. This is why infra startups are exploding.',
      color: '#6b9d89'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Settings className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Product Features
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            What Winning AI <span className="text-[#0d5f4e]">Products Have</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-3xl border border-gray-200/50 p-10 h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
                  <div className="flex items-start gap-4 mb-6">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundColor: `${feature.color}15` }}
                    >
                      <Icon 
                        className="w-8 h-8"
                        style={{ color: feature.color }}
                        strokeWidth={1.5} 
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                    </div>
                  </div>
                  
                  <div className="pl-20">
                    <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200/50">
                      <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Example</div>
                      <p className="text-sm text-gray-700 leading-relaxed">{feature.example}</p>
                    </div>
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

// Value Creation Section
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const valueBuckets = [
    {
      icon: Clock,
      title: 'Time Saved',
      metric: 'Tasks that took hours become minutes',
      example: 'Recruiter screens 100 resumes - AI pre-filters to 10',
      color: '#0d5f4e'
    },
    {
      icon: DollarSign,
      title: 'Revenue Lift',
      metric: 'Higher conversions, better personalization',
      example: 'AI sales assistant responds instantly - more deals closed',
      color: '#6b9d89'
    },
    {
      icon: TrendingDown,
      title: 'Cost Reduction',
      metric: 'Fewer support agents, less rework',
      example: 'AI handles Tier-1 support - humans focus on complex cases',
      color: '#0d5f4e'
    },
    {
      icon: BarChart3,
      title: 'Better Decisions',
      metric: 'Summaries instead of raw data',
      example: 'AI highlights which customers are likely to churn this week',
      color: '#6b9d89'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Target className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Value Creation
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Why Customers <span className="text-[#0d5f4e]">Pay for AI</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {valueBuckets.map((bucket, index) => {
            const Icon = bucket.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-3xl border-2 border-gray-200/50 p-10 h-full hover:border-[#0d5f4e]/30 hover:shadow-2xl transition-all duration-500 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundColor: `${bucket.color}15` }}
                    >
                      <Icon 
                        className="w-10 h-10"
                        style={{ color: bucket.color }}
                        strokeWidth={1.5} 
                      />
                    </div>
                    <h3 className="text-3xl font-semibold text-gray-900">{bucket.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Metric</div>
                      <p className="text-gray-700">{bucket.metric}</p>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-br from-[#0d5f4e]/5 to-transparent rounded-xl">
                      <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Example</div>
                      <p className="text-sm text-gray-700 leading-relaxed">{bucket.example}</p>
                    </div>
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

// Investor Logic Section
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const checklist = [
    'Clear user (who uses it daily)',
    'Clear job replaced or improved',
    'Measurable ROI',
    'Data or workflow lock-in',
    'Defensible distribution (industry, ecosystem, partnerships)'
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Award className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Investor Perspective
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            What Makes an AI Startup <span className="text-[#0d5f4e]">Fundable</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Checklist */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-white rounded-3xl border border-gray-200/50 p-10 shadow-xl h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Fundable Signals</h3>
              </div>
              
              <div className="space-y-4">
                {checklist.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[#0d5f4e]/5 to-transparent transition-all duration-500`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#0d5f4e] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Red Flag */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-gradient-to-br from-gray-100 to-white rounded-3xl border-2 border-gray-300 p-10 shadow-xl h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-gray-700" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Red Flag</h3>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl border border-gray-200">
                  <blockquote className="text-2xl text-gray-700 font-light leading-relaxed">
                    "It's ChatGPT but for <span className="italic">X</span>"
                  </blockquote>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Generic wrappers with no workflow ownership rarely get funded. Investors look for defensible moats and measurable outcomes.
                </p>

                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <XCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm text-gray-600">
                    Without workflow ownership, you're competing on features - not value.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Acceleration Section
function AccelerationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Auto-progress through steps
          const interval = setInterval(() => {
            setActiveStep(prev => (prev + 1) % 4);
          }, 3000);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      title: 'Narrow Use Case',
      description: 'Start with one painful workflow',
      example: 'AI for ecommerce returns (not "AI for all retail")'
    },
    {
      title: 'Early ROI',
      description: 'Measure outcomes quickly',
      example: 'Time saved, cost reduced, revenue lifted'
    },
    {
      title: 'Vertical Expansion',
      description: 'Learn deeply, expand sideways',
      example: 'Returns to Inventory to Pricing'
    },
    {
      title: 'Agentic Automation',
      description: 'AI takes multiple steps autonomously',
      example: 'Plans campaign - drafts assets - schedules - reports'
    }
  ];

  const accelerators = [
    {
      icon: Rocket,
      title: 'Accelerator Playbooks',
      points: ['Structured milestones', 'Demo-driven development', 'Early customer access']
    },
    {
      icon: Target,
      title: 'Vertical Focus',
      points: ['Start with one industry', 'Learn deeply', 'Expand sideways']
    },
    {
      icon: Zap,
      title: 'Agentic Systems',
      points: ['AI takes multiple steps', 'Still supervised by humans', 'Compounds value']
    }
  ];

  return (
    <section ref={sectionRef} className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6b9d89]/10 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-[#6b9d89]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#6b9d89] font-semibold">
              Growth Mechanics
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            How AI Startups <span className="text-[#6b9d89]">Scale Quickly</span>
          </h2>
        </div>

        {/* Flowchart */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-3xl border border-gray-200/50 p-12 shadow-xl">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index}>
                  <div
                    className={`transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div
                      className={`p-8 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                        activeStep === index
                          ? 'border-[#6b9d89] bg-gradient-to-r from-[#6b9d89]/10 to-transparent shadow-lg scale-105'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                      onClick={() => setActiveStep(index)}
                    >
                      <div className="flex items-start gap-6">
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-500 ${
                            activeStep === index
                              ? 'bg-gradient-to-br from-[#6b9d89] to-[#0d5f4e] text-white scale-110'
                              : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600 mb-3">{step.description}</p>
                          {activeStep === index && (
                            <div className="p-3 bg-white/80 rounded-xl border border-[#6b9d89]/20 animate-in fade-in slide-in-from-top-2 duration-300">
                              <div className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">Example</div>
                              <p className="text-sm text-gray-700">{step.example}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-3">
                      <ArrowRight 
                        className="w-6 h-6 text-[#6b9d89] rotate-90" 
                        strokeWidth={2}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Growth Drivers */}
        <div className="grid md:grid-cols-3 gap-8">
          {accelerators.map((acc, index) => {
            const Icon = acc.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200/50 p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#6b9d89]/20 to-transparent rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#6b9d89]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{acc.title}</h3>
                  <ul className="space-y-2">
                    {acc.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-[#6b9d89] flex-shrink-0 mt-0.5" strokeWidth={2} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Failure Modes Section
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const failures = [
    { text: 'No clear customer', icon: Users },
    { text: 'Generic wrapper', icon: XCircle },
    { text: 'No trust or controls', icon: Shield },
    { text: 'No data advantage', icon: Lock },
    { text: 'Feature overload', icon: AlertCircle }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-500/10 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-gray-700" />
            <span className="text-xs uppercase tracking-[0.2em] text-gray-700 font-semibold">
              Reality Check
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Why Many AI Startups <span className="text-gray-700">Fail</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Investors are increasingly selective
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {failures.map((failure, index) => {
            const Icon = failure.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-gray-300 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-gray-600" strokeWidth={1.5} />
                    </div>
                    <p className="text-gray-700 font-medium">{failure.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-100 to-white rounded-2xl border border-gray-200 p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700 leading-relaxed">
                Most AI startups that fail do so because they build technology looking for a problem, rather than solving a real workflow pain point with clear ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Building Guide Section
function BuildingGuideSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const dos = [
    'Start with one painful workflow',
    'Measure time saved or money made',
    'Add human approvals early',
    'Build reliability before fancy UI',
    'Specialize before you generalize'
  ];

  const donts = [
    'Build wide too early',
    'Optimize UI before reliability',
    'Ignore workflow integration',
    'Over-promise AI capabilities',
    'Skip human oversight controls'
  ];

  return (
    <section ref={sectionRef} className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Lightbulb className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Practical Guidance
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Building a <span className="text-[#0d5f4e]">Fundable</span> AI Product
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Do */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-gradient-to-br from-[#0d5f4e]/5 to-white rounded-3xl border-2 border-[#0d5f4e]/30 p-10 shadow-xl h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] rounded-xl flex items-center justify-center">
                  <ThumbsUp className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900">Do</h3>
              </div>
              
              <div className="space-y-4">
                {dos.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#0d5f4e]/20 hover:border-[#0d5f4e]/40 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#0d5f4e] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Don't */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-300 p-10 shadow-xl h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center">
                  <ThumbsDown className="w-7 h-7 text-gray-700" strokeWidth={2} />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900">Don't</h3>
              </div>
              
              <div className="space-y-4">
                {donts.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300"
                  >
                    <XCircle className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Case Example Section
function CaseExampleSection() {
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

  const workflow = [
    { stage: 'Idea', icon: Lightbulb },
    { stage: 'Clarity', icon: Eye },
    { stage: 'Execution', icon: Zap },
    { stage: 'Fundraising', icon: DollarSign }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6b9d89]/10 rounded-full mb-6">
            <Rocket className="w-4 h-4 text-[#6b9d89]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#6b9d89] font-semibold">
              Case Study
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Example: <span className="text-[#6b9d89]">StartupAI-Style</span> Product
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Founder / Operator AI Platform
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl border border-gray-200/50 p-12 shadow-xl">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Core Workflow</h3>
              <p className="text-gray-600">End-to-end founder journey automation</p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              {workflow.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-center">
                    <div
                      className={`transition-all duration-700 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className="bg-gradient-to-br from-[#6b9d89]/10 to-white rounded-2xl border-2 border-[#6b9d89]/30 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#6b9d89] to-[#0d5f4e] rounded-xl flex items-center justify-center">
                            <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                          </div>
                          <span className="text-lg font-semibold text-gray-900">{step.stage}</span>
                        </div>
                      </div>
                    </div>
                    {index < workflow.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-[#6b9d89] mx-2" strokeWidth={2} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl border border-gray-200/50 p-8 shadow-lg">
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-semibold">Key Features</div>
            <ul className="space-y-2">
              {[
                'Structured onboarding wizard',
                'AI-generated docs',
                'Task system with approvals',
                'CRM + investor tracking'
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#6b9d89] flex-shrink-0 mt-0.5" strokeWidth={2} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200/50 p-8 shadow-lg">
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-semibold">Value Delivered</div>
            <ul className="space-y-2">
              {[
                'Less founder guesswork',
                'Faster execution',
                'Higher quality outputs',
                'Measurable progress'
              ].map((value, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#6b9d89] flex-shrink-0 mt-0.5" strokeWidth={2} />
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200/50 p-8 shadow-lg">
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-semibold">Why It Fits Funding Patterns</div>
            <ul className="space-y-2">
              {[
                'Vertical focus (founders)',
                'Workflow ownership',
                'Measurable outcomes',
                'Clear distribution'
              ].map((reason, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] flex-shrink-0 mt-0.5" strokeWidth={2} />
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] rounded-2xl p-8 shadow-lg">
            <div className="text-xs uppercase tracking-wider text-white/80 mb-4 font-semibold">Outcome</div>
            <div className="text-4xl font-light text-white mb-3">Fundable</div>
            <p className="text-sm text-white/90 leading-relaxed">
              Clear user, clear value, defensible through vertical expertise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Key Takeaways Section
function KeyTakeawaysSection() {
  const quotes = [
    'AI that owns a workflow beats AI that answers questions.',
    'Trust and control matter as much as intelligence.',
    'The best AI startups feel boring - until you see the ROI.'
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
            <Award className="w-4 h-4 text-[#6b9d89]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#6b9d89] font-semibold">
              Key Insights
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-white mb-6 font-light">
            What <span className="text-[#6b9d89]">Really Matters</span>
          </h2>
        </div>

        <div className="space-y-8">
          {quotes.map((quote, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-10 hover:bg-white/10 transition-all duration-500">
              <blockquote className="text-3xl lg:text-4xl text-white font-light leading-relaxed text-center">
                "{quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Sources & Methodology Section
function SourcesMethodologySection({ methodologyOpen, setMethodologyOpen }: any) {
  const sources = [
    { name: 'Crunchbase', icon: Building2 },
    { name: 'PitchBook', icon: BarChart3 },
    { name: 'CB Insights', icon: Activity },
    { name: 'TechCrunch', icon: ExternalLink },
    { name: 'Y Combinator', icon: Rocket },
    { name: 'Accelerator Demo Days', icon: Award },
  ];

  return (
    <section id="methodology" className="py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Shield className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Research Foundation
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Sources & <span className="text-[#0d5f4e]">Methodology</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sources.map((source, index) => {
            const Icon = source.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-gray-200/50 p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0d5f4e]/10 to-[#6b9d89]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
                    </div>
                    <div className="font-semibold text-gray-900">{source.name}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#0d5f4e] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl border border-gray-200/50 shadow-xl overflow-hidden">
          <button
            onClick={() => setMethodologyOpen(!methodologyOpen)}
            className="w-full px-10 py-8 flex items-center justify-between hover:bg-gray-50 transition-colors group"
          >
            <span className="text-2xl font-semibold text-gray-900">Detailed Methodology</span>
            {methodologyOpen ? (
              <ChevronUp className="w-6 h-6 text-gray-600" strokeWidth={2} />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-600" strokeWidth={2} />
            )}
          </button>
          
          {methodologyOpen && (
            <div className="px-10 py-8 border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">AI Startup Categorization</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    AI startups categorized into three layers: <strong>Foundation Models</strong> (core AI systems offered via APIs), 
                    <strong> Infrastructure</strong> (tools for AI deployment and monitoring), and <strong>Applications/Vertical AI</strong> (workflow-specific AI products).
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">AI-Native vs AI-Enabled</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Focus on <strong>AI-native products</strong> where AI is the core product functionality, not a feature. 
                    Excludes generic software with minor AI additions.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Funding Patterns</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Analysis based on public funding announcements, accelerator demo days, and venture databases. 
                    Focuses on patterns of what gets funded rather than specific dollar amounts, which are often confidential.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
