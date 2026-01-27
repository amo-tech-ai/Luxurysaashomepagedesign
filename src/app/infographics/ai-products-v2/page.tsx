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
  Network,
  Sparkles,
  TrendingDown,
  Activity
} from 'lucide-react';

export default function AIProductsV2Page() {
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
      {/* Minimalist Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0d5f4e]/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf8]/80 backdrop-blur-xl border-b border-gray-200/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex justify-between items-center">
            <button 
              onClick={handleGoHome}
              className="text-xl text-gray-900 hover:text-[#0d5f4e] transition-colors duration-300 tracking-tight"
            >
              StartupAI
            </button>
            <div className="hidden md:flex items-center gap-8">
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Product Intelligence V2
              </span>
              <div className="w-24 h-0.5 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#0d5f4e] transition-all duration-300"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSectionV2 scrollY={scrollY} />
        <LayerEcosystemSection />
        <StrategicPillarsSection />
        <IntelligenceMatrixSection />
        <ValueArchitectureSection />
        <FundabilityFrameworkSection />
        <ScalePathwaySection />
        <RiskTopologySection />
        <ExecutionBlueprintSection />
        <InsightsSection />
        <MethodologySection 
          methodologyOpen={methodologyOpen}
          setMethodologyOpen={setMethodologyOpen}
        />
      </div>

      {/* Minimal Footer */}
      <footer className="bg-gray-900 text-white py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-md">
              <button 
                onClick={handleGoHome}
                className="text-2xl mb-4 hover:text-[#6b9d89] transition-colors tracking-tight"
              >
                StartupAI
              </button>
              <p className="text-sm text-gray-400 leading-relaxed">
                AI Product Intelligence Report 2024-2026. A research artifact for founders, investors, and operators.
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-4">Research Sources</p>
              <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                <span>Crunchbase</span>
                <span>•</span>
                <span>PitchBook</span>
                <span>•</span>
                <span>CB Insights</span>
                <span>•</span>
                <span>Y Combinator</span>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} StartupAI Research. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Hero Section V2 - Editorial Style
function HeroSectionV2({ scrollY }: { scrollY: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ kpi1: 0, kpi2: 0, kpi3: 0, kpi4: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Animated counters
    const duration = 1000;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        kpi1: Math.floor(progress * 5),
        kpi2: Math.floor(progress * 12),
        kpi3: Math.floor(progress * 84),
        kpi4: parseFloat((progress * 2.4).toFixed(1))
      });
      
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-32 pb-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Title Section */}
        <div 
          className={`max-w-4xl mb-24 transition-all duration-1500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="mb-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
              AI Product Intelligence 2024-2026
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl leading-[0.9] text-gray-900 tracking-tight mb-8">
            Most Funded Startups <br />
            <span className="italic font-light">Replace Labor.</span> <br />
            Not Tools.
          </h1>
          
          <div className="w-16 h-px bg-[#0d5f4e] mb-8" />
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            The best AI startups do not add AI. They own a workflow, remove friction, and deliver measurable outcomes.
          </p>
        </div>

        {/* KPI Grid */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-12 transition-all duration-1500 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="space-y-3">
            <div className="text-6xl font-light text-gray-900">0{counts.kpi1}</div>
            <div className="text-xs uppercase tracking-[0.2em] text-gray-500">Product Types</div>
            <div className="text-sm text-gray-600">Models, Infra, Apps</div>
          </div>
          
          <div className="space-y-3">
            <div className="text-6xl font-light text-gray-900">${counts.kpi2}B</div>
            <div className="text-xs uppercase tracking-[0.2em] text-gray-500">Capital Flow</div>
            <div className="text-sm text-gray-600">Concentrated bets</div>
          </div>
          
          <div className="space-y-3">
            <div className="text-6xl font-light text-gray-900">{counts.kpi3}%</div>
            <div className="text-xs uppercase tracking-[0.2em] text-gray-500">Vertical Focus</div>
            <div className="text-sm text-gray-600">Deep &gt; generic</div>
          </div>
          
          <div className="space-y-3">
            <div className="text-6xl font-light text-gray-900">{counts.kpi4}x</div>
            <div className="text-xs uppercase tracking-[0.2em] text-gray-500">Outcome Driven</div>
            <div className="text-sm text-gray-600">ROI over features</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Layer Ecosystem Section
function LayerEcosystemSection() {
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
      number: '03',
      title: 'Applications',
      subtitle: 'The job-doers',
      description: 'AI that automates real business workflows. Clear ROI, faster adoption.',
      examples: ['Customer support agents', 'Finance automation', 'HR screening']
    },
    {
      number: '02',
      title: 'Infrastructure',
      subtitle: 'The plumbing',
      description: 'Tools that make AI production-ready. Monitoring, safety, orchestration.',
      examples: ['Cost tracking', 'Guardrails', 'Model evaluation']
    },
    {
      number: '01',
      title: 'Foundation Models',
      subtitle: 'The brain',
      description: 'Large AI models via APIs. Platform scale, ecosystem lock-in.',
      examples: ['Language models', 'Image generation', 'Multimodal AI']
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Mental Model
          </span>
          <h2 className="text-5xl lg:text-6xl text-gray-900 tracking-tight">
            The 3-Layer <span className="italic font-light">Ecosystem</span>
          </h2>
        </div>

        <div className="space-y-0">
          {layers.map((layer, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 last:border-b-0 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveLayer(index)}
              onMouseLeave={() => setActiveLayer(null)}
            >
              <div className={`py-12 transition-all duration-500 ${
                activeLayer === index ? 'bg-[#0d5f4e]/5 px-8 -mx-8' : ''
              }`}>
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-1">
                    <div className={`text-5xl font-light transition-colors duration-500 ${
                      activeLayer === index ? 'text-[#0d5f4e]' : 'text-gray-300'
                    }`}>
                      {layer.number}
                    </div>
                  </div>
                  
                  <div className="md:col-span-7">
                    <h3 className="text-3xl text-gray-900 mb-2 tracking-tight">{layer.title}</h3>
                    <p className="text-sm text-gray-500 italic mb-4">{layer.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed">{layer.description}</p>
                  </div>
                  
                  <div className="md:col-span-4">
                    {activeLayer === index && (
                      <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                        <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                          Examples
                        </div>
                        <ul className="space-y-2">
                          {layer.examples.map((example, i) => (
                            <li key={i} className="text-sm text-gray-700">
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Strategic Pillars Section
function StrategicPillarsSection() {
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

  const pillars = [
    {
      number: '01',
      title: 'Workflow Ownership',
      description: 'AI completes entire processes, not just tasks. End-to-end automation.'
    },
    {
      number: '02',
      title: 'Enterprise Trust',
      description: 'Human oversight, approval flows, audit trails. Control before intelligence.'
    },
    {
      number: '03',
      title: 'Integration Fabric',
      description: 'Fits existing systems. No new dashboards. Workflow-native design.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Core Features
          </span>
          <h2 className="text-5xl lg:text-6xl text-gray-900 tracking-tight">
            Strategic <span className="italic font-light">Pillars</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className="text-6xl font-light text-gray-200 mb-4">{pillar.number}</div>
                <div className="w-12 h-px bg-[#0d5f4e]" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4 tracking-tight">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Intelligence Matrix Section
function IntelligenceMatrixSection() {
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

  const quadrants = [
    { position: 'top-left', label: 'Time', value: 'Hours to minutes', icon: Clock },
    { position: 'top-right', label: 'Revenue', value: 'Higher conversion', icon: DollarSign },
    { position: 'bottom-left', label: 'Cost', value: 'Reduce overhead', icon: TrendingDown },
    { position: 'bottom-right', label: 'Decisions', value: 'Better insights', icon: BarChart3 }
  ];

  return (
    <section ref={sectionRef} className="py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Value Framework
          </span>
          <h2 className="text-5xl lg:text-6xl text-gray-900 tracking-tight">
            The Intelligence <span className="italic font-light">Matrix</span>
          </h2>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Center Circle */}
          <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] flex items-center justify-center shadow-2xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <div className="text-center text-white">
              <Sparkles className="w-8 h-8 mx-auto mb-2" strokeWidth={1.5} />
              <div className="text-sm uppercase tracking-[0.2em]">Value Core</div>
            </div>
          </div>

          {/* Quadrants */}
          <div className="grid grid-cols-2 gap-8 py-32">
            {quadrants.map((quadrant, index) => {
              const Icon = quadrant.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-500">
                    <Icon className="w-8 h-8 text-[#0d5f4e] mb-4" strokeWidth={1.5} />
                    <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                      {quadrant.label}
                    </div>
                    <div className="text-lg text-gray-900">{quadrant.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Value Architecture Section
function ValueArchitectureSection() {
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

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Customer Value
          </span>
          <h2 className="text-5xl lg:text-6xl text-gray-900 tracking-tight mb-12">
            Why Organizations <span className="italic font-light">Pay</span>
          </h2>
        </div>

        <div 
          className={`space-y-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="border-l-2 border-[#0d5f4e] pl-8 py-4">
            <div className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">Time Saved</div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Recruiter screens 100 resumes. AI pre-filters to 10 qualified candidates in minutes.
            </p>
          </div>

          <div className="border-l-2 border-[#6b9d89] pl-8 py-4">
            <div className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">Revenue Lift</div>
            <p className="text-xl text-gray-700 leading-relaxed">
              AI sales assistant responds instantly to inbound leads. Conversion rates improve 2-3x.
            </p>
          </div>

          <div className="border-l-2 border-[#0d5f4e] pl-8 py-4">
            <div className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">Cost Reduction</div>
            <p className="text-xl text-gray-700 leading-relaxed">
              AI handles Tier-1 support inquiries. Human agents focus on complex, high-value cases.
            </p>
          </div>

          <div className="border-l-2 border-[#6b9d89] pl-8 py-4">
            <div className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">Better Decisions</div>
            <p className="text-xl text-gray-700 leading-relaxed">
              AI surfaces customers likely to churn this week. Proactive intervention, not reactive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Fundability Framework Section
function FundabilityFrameworkSection() {
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

  const signals = [
    'Clear daily user',
    'Job replaced or improved',
    'Measurable ROI',
    'Workflow or data lock-in',
    'Defensible distribution'
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Fundable Signals */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6 block">
              Investor Checklist
            </span>
            <h3 className="text-4xl text-gray-900 mb-12 tracking-tight">
              Fundable <span className="italic font-light">Signals</span>
            </h3>
            
            <div className="space-y-6">
              {signals.map((signal, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 pb-6 border-b border-gray-200 last:border-b-0"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#0d5f4e] flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <span className="text-lg text-gray-700">{signal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Red Flag */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6 block">
              Warning
            </span>
            <h3 className="text-4xl text-gray-900 mb-12 tracking-tight">
              Red <span className="italic font-light">Flag</span>
            </h3>
            
            <div className="bg-gray-100 rounded-2xl p-12">
              <blockquote className="text-3xl text-gray-700 font-light leading-relaxed mb-8">
                "It's ChatGPT but for <span className="italic">X</span>"
              </blockquote>
              <p className="text-gray-600 leading-relaxed">
                Generic wrappers with no workflow ownership. Investors look for defensible moats and measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Scale Pathway Section
function ScalePathwaySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    { title: 'Narrow Use Case', description: 'One painful workflow' },
    { title: 'Early ROI', description: 'Measure outcomes quickly' },
    { title: 'Vertical Expansion', description: 'Learn deeply, expand sideways' },
    { title: 'Agentic Automation', description: 'Multi-step autonomous workflows' }
  ];

  return (
    <section ref={sectionRef} className="py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Growth Model
          </span>
          <h2 className="text-5xl lg:text-6xl text-gray-900 tracking-tight">
            Scale <span className="italic font-light">Pathway</span>
          </h2>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index}>
              <div
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    activeStep === index
                      ? 'border-[#0d5f4e] bg-[#0d5f4e]/5'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center gap-6">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-light transition-all duration-500 ${
                        activeStep === index
                          ? 'bg-[#0d5f4e] text-white'
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl text-gray-900 mb-1 tracking-tight">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="w-px h-6 bg-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Risk Topology Section
function RiskTopologySection() {
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

  const risks = [
    'No clear customer',
    'Generic wrapper',
    'No trust controls',
    'No data advantage',
    'Feature overload'
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Reality Check
          </span>
          <h2 className="text-5xl lg:text-6xl text-gray-900 tracking-tight">
            Risk <span className="italic font-light">Topology</span>
          </h2>
        </div>

        <div 
          className={`bg-white rounded-2xl border border-gray-200 p-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {risks.map((risk, index) => (
              <div key={index} className="flex items-start gap-4">
                <XCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-gray-700">{risk}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 leading-relaxed">
              Most failures stem from building technology looking for problems, rather than solving real workflow pain with clear ROI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Execution Blueprint Section
function ExecutionBlueprintSection() {
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
    'Build reliability before UI',
    'Specialize before generalizing'
  ];

  const donts = [
    'Build wide too early',
    'Optimize UI before reliability',
    'Ignore workflow integration',
    'Over-promise capabilities',
    'Skip human oversight'
  ];

  return (
    <section ref={sectionRef} className="py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Practical Guidance
          </span>
          <h2 className="text-5xl lg:text-6xl text-gray-900 tracking-tight">
            Execution <span className="italic font-light">Blueprint</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h3 className="text-3xl text-gray-900 mb-8 tracking-tight">Do</h3>
            <div className="space-y-4">
              {dos.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-[#0d5f4e]/5 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-[#0d5f4e] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h3 className="text-3xl text-gray-900 mb-8 tracking-tight">Don't</h3>
            <div className="space-y-4">
              {donts.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <XCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Insights Section
function InsightsSection() {
  const quotes = [
    'AI that owns a workflow beats AI that answers questions.',
    'Trust and control matter as much as intelligence.',
    'The best AI startups feel boring until you see the ROI.'
  ];

  return (
    <section className="py-32 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Core Insights
          </span>
          <h2 className="text-5xl lg:text-6xl text-white tracking-tight">
            The intelligence revolution <br />
            <span className="italic font-light">will not be tool-driven.</span>
          </h2>
        </div>

        <div className="space-y-12">
          {quotes.map((quote, index) => (
            <div key={index} className="border-l-2 border-[#6b9d89] pl-8 py-4">
              <p className="text-2xl text-gray-300 font-light leading-relaxed">
                {quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Methodology Section
function MethodologySection({ methodologyOpen, setMethodologyOpen }: any) {
  const sources = [
    'Crunchbase',
    'PitchBook',
    'CB Insights',
    'TechCrunch',
    'Y Combinator',
    'Accelerator Networks'
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Research Foundation
          </span>
          <h2 className="text-5xl lg:text-6xl text-gray-900 tracking-tight">
            Sources & <span className="italic font-light">Methodology</span>
          </h2>
        </div>

        <div className="mb-12">
          <div className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">Primary Sources</div>
          <div className="flex flex-wrap gap-4">
            {sources.map((source, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-700 border border-gray-200"
              >
                {source}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl overflow-hidden">
          <button
            onClick={() => setMethodologyOpen(!methodologyOpen)}
            className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-100 transition-colors"
          >
            <span className="text-lg text-gray-900">Detailed Methodology</span>
            {methodologyOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
            )}
          </button>
          
          {methodologyOpen && (
            <div className="px-8 py-6 border-t border-gray-200 bg-white">
              <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
                <p>
                  AI startups categorized into three layers: Foundation Models (core AI systems via APIs), 
                  Infrastructure (production tools), and Applications (workflow-specific products).
                </p>
                <p>
                  Focus on AI-native products where AI is core functionality, not a feature. Excludes generic 
                  software with minor AI additions.
                </p>
                <p>
                  Analysis based on public funding announcements, accelerator demo days, and venture databases. 
                  Focuses on patterns rather than specific amounts.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}