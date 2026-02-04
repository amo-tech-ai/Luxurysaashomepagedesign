import { useEffect, useRef, useState } from 'react';
import { 
  TrendingDown,
  Clock,
  Users,
  DollarSign,
  MessageSquare,
  ShoppingCart,
  Headphones,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Target,
  Zap,
  FileText,
  Repeat,
  Image,
  Settings,
  BarChart3,
  TrendingUp,
  Sparkles,
  Brain
} from 'lucide-react';

export default function AIGTMPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

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
                AI GTM Report 2025
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
        <WhereAIHelpsSection />
        <TopUseCasesSection />
        <HowMuchAISection />
        <WhyAIFailsSection />
        <AdoptionFlowchartSection />
        <FutureTrendsSection />
        <FinalTakeawaySection />
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
                Real benchmarks from real startups
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// SECTION 1 — Hero / Intro
function HeroSection({ scrollY }: { scrollY: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      icon: DollarSign,
      title: 'AI helps startups reduce costs',
      description: 'Average 30-40% savings in GTM operations',
      color: '#0d5f4e'
    },
    {
      icon: BarChart3,
      title: 'Biggest impact: Support → Sales → Marketing',
      description: 'ROI shows up fastest in customer support',
      color: '#6b9d89'
    },
    {
      icon: Users,
      title: 'Used to save time, not replace teams',
      description: 'Teams stay same size but handle 2x volume',
      color: '#0d5f4e'
    }
  ];

  return (
    <section className="min-h-screen flex items-center pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <div 
            className={`transition-all duration-1200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
            style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-[#0d5f4e]/10 to-[#6b9d89]/10 rounded-full border border-[#0d5f4e]/20 mb-8">
              <div className="w-2 h-2 bg-[#0d5f4e] rounded-full animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#0d5f4e] font-semibold">
                AI GTM Report 2025
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-6xl lg:text-8xl leading-[0.95] text-gray-900 font-light tracking-tight mb-6">
              AI in Startup GTM (2025): <br />
              <span className="bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] bg-clip-text text-transparent">
                What Actually Works
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-[#0d5f4e] to-transparent rounded-full mx-auto mb-8" />
            
            <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
              Real benchmarks from real startups — no AI hype.
            </p>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <Icon className="w-8 h-8" style={{ color: stat.color }} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{stat.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// SECTION 2 — Where AI Helps Most (Bar Chart)
function WhereAIHelpsSection() {
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

  const data = [
    { label: 'Support', value: 85, icon: Headphones, color: '#0d5f4e' },
    { label: 'Sales', value: 65, icon: ShoppingCart, color: '#6b9d89' },
    { label: 'Marketing', value: 55, icon: MessageSquare, color: '#8ab09e' }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Target className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Impact Analysis
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl text-gray-900 mb-6 font-light">
            Where Should I <span className="text-[#0d5f4e]">Use AI First?</span>
          </h2>
        </div>

        {/* Bar Chart */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 p-8 md:p-12 mb-8">
          <div className="space-y-8">
            {data.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <span className="text-lg font-semibold text-gray-900 min-w-[100px]">{item.label}</span>
                    <span className="text-sm text-gray-500 ml-auto">{item.value}%</span>
                  </div>
                  <div className="relative h-12 bg-gray-100 rounded-xl overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 rounded-xl transition-all duration-1000 flex items-center justify-end pr-4"
                      style={{
                        width: isVisible ? `${item.value}%` : '0%',
                        backgroundColor: item.color
                      }}
                    >
                      <span className="text-white text-sm font-semibold">{item.value}%</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Caption */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-6">
          <p className="text-base text-white leading-relaxed">
            <strong className="text-[#6b9d89]">Why support leads:</strong> Support shows the fastest AI gains because work is repetitive and rules-based.
          </p>
        </div>

        {/* Takeaway */}
        <div className="bg-[#0d5f4e] rounded-2xl p-8 text-center">
          <p className="text-xl text-white font-light">
            <strong className="font-semibold">Founder Takeaway:</strong> Start with support automation before expanding.
          </p>
        </div>
      </div>
    </section>
  );
}

// SECTION 3 — Top AI Use Cases (Visual Cards)
function TopUseCasesSection() {
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

  const useCases = [
    {
      icon: FileText,
      title: 'Content creation',
      description: 'Blog drafts, emails, ads',
      color: '#0d5f4e'
    },
    {
      icon: Repeat,
      title: 'Workflow automation',
      description: 'Follow-ups, summaries, routing',
      color: '#6b9d89'
    },
    {
      icon: Image,
      title: 'Visual assets',
      description: 'Images, presentations, social posts',
      color: '#0d5f4e'
    },
    {
      icon: Settings,
      title: 'Data analysis',
      description: 'Reports, insights, forecasts',
      color: '#6b9d89'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Top Use Cases
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl text-gray-900 mb-6 font-light">
            What Are Startups <span className="text-[#0d5f4e]">Actually Using AI For?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${useCase.color}15` }}
                >
                  <Icon className="w-8 h-8" style={{ color: useCase.color }} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-sm text-gray-600">{useCase.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// SECTION 4 — How Much AI Is "Normal" (Donut Chart)
function HowMuchAISection() {
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

  const segments = [
    { label: 'AI-Enhanced', value: 35, color: '#0d5f4e' },
    { label: 'Traditional Tools', value: 45, color: '#e5e7eb' },
    { label: 'Manual Work', value: 20, color: '#9ca3af' }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <BarChart3 className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Adoption Benchmark
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl text-gray-900 mb-6 font-light">
            Am I Behind or <span className="text-[#0d5f4e]">Overdoing AI?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual Representation */}
          <div className="relative">
            <div className="aspect-square max-w-sm mx-auto">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Donut segments */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="40"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="40"
                  strokeDasharray={`${20 * 5.03} ${80 * 5.03}`}
                  strokeDashoffset="0"
                  transform="rotate(-90 100 100)"
                  className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#0d5f4e"
                  strokeWidth="40"
                  strokeDasharray={`${35 * 5.03} ${65 * 5.03}`}
                  strokeDashoffset={`-${20 * 5.03}`}
                  transform="rotate(-90 100 100)"
                  className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                />
                
                {/* Center text */}
                <text
                  x="100"
                  y="95"
                  textAnchor="middle"
                  className="text-3xl font-light fill-gray-900"
                >
                  35%
                </text>
                <text
                  x="100"
                  y="115"
                  textAnchor="middle"
                  className="text-xs fill-gray-500 uppercase tracking-wider"
                >
                  AI-Enhanced
                </text>
              </svg>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-6">
            {segments.map((segment, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 bg-gray-50 rounded-xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className="w-6 h-6 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: segment.color }}
                />
                <div className="flex-1">
                  <p className="text-base font-semibold text-gray-900">{segment.label}</p>
                </div>
                <div className="text-2xl font-light text-gray-900">{segment.value}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Caption */}
        <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-6">
          <p className="text-base text-white leading-relaxed text-center">
            <strong className="text-[#6b9d89]">Reality check:</strong> Most startups use AI selectively, not everywhere.
          </p>
        </div>

        {/* Takeaway */}
        <div className="bg-[#0d5f4e] rounded-2xl p-8 text-center">
          <p className="text-xl text-white font-light">
            <strong className="font-semibold">Founder Takeaway:</strong> Selective AI adoption beats full AI overload.
          </p>
        </div>
      </div>
    </section>
  );
}

// SECTION 5 — Why AI Fails (Warning Cards)
function WhyAIFailsSection() {
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
    { icon: Zap, title: 'Too many tools', description: 'Teams drown in disconnected AI apps' },
    { icon: XCircle, title: 'Bad data', description: 'AI amplifies garbage inputs' },
    { icon: Users, title: 'No clear owner', description: 'Nobody owns the AI initiative' },
    { icon: Target, title: 'No success metric', description: 'Can\'t measure if it\'s working' }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4 text-red-600" />
            <span className="text-xs uppercase tracking-[0.2em] text-red-600 font-semibold">
              Common Failures
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl text-gray-900 mb-6 font-light">
            Why Do <span className="text-red-600">AI Projects Break?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {failures.map((failure, index) => {
            const Icon = failure.icon;
            return (
              <div
                key={index}
                className={`bg-white border-2 border-red-200 rounded-2xl p-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{failure.title}</h3>
                    <p className="text-sm text-gray-600">{failure.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Caption */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-6">
          <p className="text-base text-white leading-relaxed text-center">
            <strong className="text-[#6b9d89]">Truth:</strong> AI fails due to operations, not technology.
          </p>
        </div>

        {/* Takeaway */}
        <div className="bg-[#0d5f4e] rounded-2xl p-8 text-center">
          <p className="text-xl text-white font-light">
            <strong className="font-semibold">Founder Takeaway:</strong> AI needs ownership, a goal, and a metric.
          </p>
        </div>
      </div>
    </section>
  );
}

// SECTION 6 — Adoption Flowchart
function AdoptionFlowchartSection() {
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

  const steps = [
    { label: 'Problem', icon: AlertTriangle },
    { label: 'Pick one workflow', icon: Target },
    { label: 'Apply AI', icon: Sparkles },
    { label: 'Measure result', icon: BarChart3 },
    { label: 'Scale or stop', icon: TrendingUp }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <ArrowRight className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Adoption Path
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl text-gray-900 mb-6 font-light">
            What Is the <span className="text-[#0d5f4e]">Right Order</span> to Adopt AI?
          </h2>
        </div>

        {/* Flowchart - Horizontal on desktop, vertical on mobile */}
        <div className="mb-12">
          {/* Desktop view */}
          <div className="hidden md:flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-center">
                  <div
                    className={`flex flex-col items-center transition-all duration-700 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="w-20 h-20 rounded-2xl bg-[#0d5f4e] flex items-center justify-center mb-4">
                      <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>
                    <p className="text-sm font-semibold text-gray-900 text-center max-w-[120px]">
                      {step.label}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="mx-4 flex-shrink-0">
                      <ArrowRight className="w-8 h-8 text-[#0d5f4e]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile view */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index}>
                  <div
                    className={`flex items-center gap-4 p-6 bg-gradient-to-r from-[#0d5f4e]/10 to-white border-2 border-[#0d5f4e]/30 rounded-2xl transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#0d5f4e] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <p className="text-lg font-semibold text-gray-900">{step.label}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-3">
                      <ArrowRight className="w-6 h-6 text-[#0d5f4e] rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Caption */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8">
          <p className="text-base text-white leading-relaxed text-center">
            <strong className="text-[#6b9d89]">Key principle:</strong> Successful startups adopt AI one workflow at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

// SECTION 7 — Future Trends (KPI Cards)
function FutureTrendsSection() {
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

  const trends = [
    {
      icon: TrendingUp,
      metric: '68%',
      title: 'Increased AI investment',
      description: 'Founders planning to increase AI spend in 2025',
      color: '#0d5f4e'
    },
    {
      icon: Users,
      metric: '54%',
      title: 'Hiring for AI skills',
      description: 'Startups actively recruiting AI-savvy operators',
      color: '#6b9d89'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-[#fafaf8]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              2025 Outlook
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl text-gray-900 mb-6 font-light">
            Is AI Becoming <span className="text-[#0d5f4e]">Essential?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {trends.map((trend, index) => {
            const Icon = trend.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border border-gray-200 p-10 hover:shadow-xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${trend.color}15` }}
                >
                  <Icon className="w-8 h-8" style={{ color: trend.color }} strokeWidth={2} />
                </div>
                <div className="text-5xl font-light mb-4" style={{ color: trend.color }}>
                  {trend.metric}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{trend.title}</h3>
                <p className="text-sm text-gray-600">{trend.description}</p>
              </div>
            );
          })}
        </div>

        {/* Caption */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-center">
          <p className="text-xl text-white leading-relaxed font-light">
            <strong className="text-[#6b9d89]">Bottom line:</strong> AI is becoming an operating skill, not a feature.
          </p>
        </div>
      </div>
    </section>
  );
}

// SECTION 8 — Final Takeaway
function FinalTakeawaySection() {
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
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div
          className={`bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] rounded-3xl p-12 md:p-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="mb-8">
            <CheckCircle2 className="w-16 h-16 text-white mx-auto mb-6" strokeWidth={2} />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">
            Rule for founders:
          </h2>
          <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
            Start small. Measure impact. <br />
            Expand only if it works.
          </p>
        </div>

        {/* Optional: Quick Checklist */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-6 font-semibold text-center">
            What to try first
          </h3>
          <div className="space-y-4">
            {[
              'Pick one repetitive workflow in support or sales',
              'Set a clear success metric (time saved or cost reduced)',
              'Choose one AI tool — not five',
              'Measure after 30 days',
              'Keep it or kill it'
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="w-5 h-5 text-[#0d5f4e] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
