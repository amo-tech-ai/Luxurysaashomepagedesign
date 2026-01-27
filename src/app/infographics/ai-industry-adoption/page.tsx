import { useEffect, useRef, useState } from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  Building2,
  Factory,
  Stethoscope,
  Banknote,
  ShoppingCart,
  Truck,
  Zap,
  BookOpen,
  Scale,
  Megaphone,
  CheckCircle2,
  AlertTriangle,
  Download,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Award,
  Target,
  Activity,
  Cpu,
  Eye,
  ArrowRight,
  Sparkles,
  Users,
  Shield,
  Lightbulb,
  CircleDot,
  ArrowDownRight,
  TrendingDown,
  LineChart,
  Layers
} from 'lucide-react';

export default function AIIndustryAdoptionPage() {
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
                <Sparkles className="w-3 h-3 text-[#0d5f4e]" />
                Industry Report 2025
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
        <AdoptionJourneyDiagram />
        <AdoptionTableSection />
        <IndustryDeepDivesTabs />
        <AdoptionFlowchart />
        <CrossIndustryChartsSection />
        <ValueRealizationDiagram />
        <RealWorldExamplesSection />
        <RealityCheckSection />
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
                © {new Date().getFullYear()} StartupAI Research. All rights reserved.
              </p>
              <p className="text-xs text-gray-400">
                Data compiled from McKinsey, WEF, Deloitte & BCG reports
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Enhanced Hero Section with Parallax
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
                  Research Report 2025
                </span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl leading-[0.95] text-gray-900 font-light tracking-tight">
                  AI Adoption <br />
                  <span className="bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] bg-clip-text text-transparent">
                    by Industry
                  </span>
                </h1>
                
                <div className="w-24 h-1 bg-gradient-to-r from-[#0d5f4e] to-transparent rounded-full" />
              </div>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl font-light">
                How leading industries deploy AI, where value is proven, and where adoption still lags.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#0d5f4e] to-[#0a4d3e] text-white rounded-xl hover:shadow-2xl hover:shadow-[#0d5f4e]/20 transition-all duration-500 flex items-center justify-center gap-3">
                <span className="font-medium">Download Full Report</span>
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-[#0d5f4e] hover:text-[#0d5f4e] hover:bg-[#0d5f4e]/5 transition-all duration-300"
              >
                See Methodology
              </button>
            </div>
          </div>

          {/* Right: Floating Stats Cards */}
          <div 
            className={`relative transition-all duration-1200 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
            style={{ transform: `translateY(-${scrollY * 0.15}px)` }}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-3xl border border-gray-200/50 p-10 shadow-2xl shadow-gray-900/5 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 font-semibold">2025 Highlights</h3>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <FloatingStatCard 
                    number="88%"
                    label="Technology & SaaS"
                    sublabel="Organization-wide AI use"
                    gradient="from-[#0d5f4e] to-[#0a4d3e]"
                    delay={0}
                  />
                  
                  <FloatingStatCard 
                    number="€190M"
                    label="Manufacturing"
                    sublabel="Real measured savings"
                    gradient="from-[#6b9d89] to-[#0d5f4e]"
                    delay={200}
                  />
                  
                  <FloatingStatCard 
                    number="+15%"
                    label="Retail AI Leaders"
                    sublabel="Revenue outperformance vs peers"
                    gradient="from-[#0d5f4e] to-[#6b9d89]"
                    delay={400}
                  />
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200/50">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Eye className="w-4 h-4" />
                    <span>Based on McKinsey, WEF, and industry case study data</span>
                  </div>
                </div>
              </div>

              {/* Floating Accent */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#0d5f4e]/10 to-transparent rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-[#6b9d89]/10 to-transparent rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingStatCard({ number, label, sublabel, gradient, delay }: any) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
      <div className="flex items-baseline gap-4 mb-3">
        <div className={`text-5xl lg:text-6xl font-light bg-gradient-to-r ${gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
          {number}
        </div>
        <div className={`flex-1 h-[2px] bg-gradient-to-r ${gradient} opacity-30 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>
      <div className="text-sm font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-xs text-gray-500">{sublabel}</div>
    </div>
  );
}

// NEW: AI Adoption Journey Diagram
function AdoptionJourneyDiagram() {
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

  const stages = [
    { 
      icon: Lightbulb, 
      title: 'Exploration', 
      description: 'Pilot projects & proof of concepts',
      percent: 65,
      color: '#6b9d89'
    },
    { 
      icon: Cpu, 
      title: 'Integration', 
      description: 'Core workflow deployment',
      percent: 35,
      color: '#0d5f4e'
    },
    { 
      icon: Layers, 
      title: 'Scaling', 
      description: 'Enterprise-wide adoption',
      percent: 15,
      color: '#0a4d3e'
    },
    { 
      icon: Award, 
      title: 'Optimization', 
      description: 'Value realization & ROI',
      percent: 8,
      color: '#083d32'
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              The Journey
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            AI Adoption <span className="text-[#0d5f4e]">Maturity Path</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Most organizations are still in exploration. Leaders have reached scaling and optimization.
          </p>
        </div>

        {/* Journey Flowchart */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#6b9d89]/20 via-[#0d5f4e]/20 to-[#0a4d3e]/20 hidden lg:block" 
            style={{ transform: 'translateY(-50%)' }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative group">
                    {/* Stage Number */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${stage.color}15` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: stage.color }} strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">{stage.title}</h3>
                    <p className="text-sm text-gray-600 mb-6">{stage.description}</p>

                    {/* Percentage */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs text-gray-500 uppercase tracking-wider">Adoption</span>
                        <span className="text-2xl font-light" style={{ color: stage.color }}>{stage.percent}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            backgroundColor: stage.color,
                            width: isVisible ? `${stage.percent}%` : '0%',
                            transitionDelay: `${index * 150 + 500}ms`
                          }}
                        />
                      </div>
                    </div>

                    {/* Arrow Connector (desktop only) */}
                    {index < stages.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-full -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-[#0d5f4e]/30" />
                      </div>
                    )}
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

// Enhanced Adoption Table Section
function AdoptionTableSection() {
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
    { name: 'Technology & SaaS', icon: Building2, adoption: 88, benefit: '39% report EBIT impact', tier: 'high' },
    { name: 'Healthcare & Life Sciences', icon: Stethoscope, adoption: 22, benefit: 'Up to 25% HVAC cost reduction', tier: 'low' },
    { name: 'Finance & FinTech', icon: Banknote, adoption: 24, benefit: '50% resolution time reduction', tier: 'low' },
    { name: 'Retail & eCommerce', icon: ShoppingCart, adoption: 31, benefit: '15% revenue outperformance', tier: 'medium' },
    { name: 'Manufacturing', icon: Factory, adoption: 6, benefit: '31% labor productivity; €190M savings', tier: 'low' },
    { name: 'Logistics & Supply Chain', icon: Truck, adoption: 31, benefit: '60% inspection time reduction', tier: 'medium' },
    { name: 'Energy & Climate', icon: Zap, adoption: 5, benefit: 'Grid optimization', tier: 'emerging' },
    { name: 'Marketing & Media', icon: Megaphone, adoption: 20, benefit: '30–40% productivity gains', tier: 'medium' },
    { name: 'Education', icon: BookOpen, adoption: 8, benefit: 'Limited data', tier: 'low' },
    { name: 'Legal & Professional Services', icon: Scale, adoption: 20, benefit: '20% service ops improvement', tier: 'low' },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <BarChart3 className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Industry Snapshot
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Adoption <span className="text-[#0d5f4e]">Overview</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Cross-industry comparison of AI adoption rates and quantified business impact
          </p>
        </div>

        {/* Enhanced Table */}
        <div className="bg-white rounded-3xl border border-gray-200/50 shadow-2xl shadow-gray-900/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="sticky top-20 bg-gradient-to-r from-gray-50 to-white backdrop-blur-xl z-10">
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-6 px-8 text-xs uppercase tracking-[0.15em] text-gray-500 font-bold">
                    Industry
                  </th>
                  <th className="text-left py-6 px-8 text-xs uppercase tracking-[0.15em] text-gray-500 font-bold">
                    Adoption Rate
                  </th>
                  <th className="text-left py-6 px-8 text-xs uppercase tracking-[0.15em] text-gray-500 font-bold">
                    Key Quantified Benefit
                  </th>
                </tr>
              </thead>
              <tbody>
                {industries.map((industry, index) => {
                  const Icon = industry.icon;
                  return (
                    <tr 
                      key={index}
                      className={`border-b border-gray-100 hover:bg-gradient-to-r hover:from-[#0d5f4e]/5 hover:to-transparent transition-all duration-300 group ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                      } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{ transitionDelay: `${index * 60}ms` }}
                    >
                      <td className="py-6 px-8">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#0d5f4e]/10 to-[#6b9d89]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
                          </div>
                          <span className="font-medium text-gray-900">{industry.name}</span>
                        </div>
                      </td>
                      <td className="py-6 px-8">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 max-w-[120px]">
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full transition-all duration-1000 ease-out ${
                                  industry.tier === 'high' ? 'bg-[#0d5f4e]' :
                                  industry.tier === 'medium' ? 'bg-[#6b9d89]' :
                                  'bg-gray-400'
                                }`}
                                style={{ width: isVisible ? `${industry.adoption}%` : '0%' }}
                              />
                            </div>
                          </div>
                          <span className={`text-2xl font-light min-w-[80px] ${
                            industry.tier === 'high' ? 'text-[#0d5f4e]' :
                            industry.tier === 'medium' ? 'text-[#6b9d89]' :
                            'text-gray-600'
                          }`}>
                            {industry.adoption}%
                          </span>
                          {industry.tier === 'high' && (
                            <TrendingUp className="w-5 h-5 text-[#0d5f4e]" strokeWidth={2} />
                          )}
                        </div>
                      </td>
                      <td className="py-6 px-8">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] flex-shrink-0" strokeWidth={2} />
                          <span className="text-gray-700">{industry.benefit}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Footer Note */}
          <div className="px-8 py-6 bg-gradient-to-r from-[#0d5f4e]/5 to-transparent border-t border-gray-200/50">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#0d5f4e] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-gray-900">Methodology Note:</strong> Adoption rates vary by company size and maturity. 
                Data compiled from McKinsey, WEF, Deloitte, and BCG industry reports (2024-2025).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// NEW: Industry Deep Dives with Tabs
function IndustryDeepDivesTabs() {
  const [activeTab, setActiveTab] = useState(0);
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
      name: 'Technology & SaaS',
      icon: Building2,
      color: '#0d5f4e',
      adoption: 88,
      useCases: [
        { icon: Cpu, label: 'AI agents in IT service desks', impact: 'High' },
        { icon: Building2, label: 'Software engineering automation', impact: 'High' },
        { icon: BookOpen, label: 'Knowledge management systems', impact: 'Medium' },
        { icon: Megaphone, label: 'Marketing content generation', impact: 'Medium' },
      ],
      benefits: [
        'Workflow redesign & optimization',
        'Innovation enablement',
        'Enterprise EBIT impact',
        'Faster time-to-market',
      ],
      metrics: [
        { label: 'Regular AI Use', value: 88, max: 100 },
        { label: 'Report EBIT Impact', value: 39, max: 100 },
      ],
      insight: 'High performers scale AI agents 3× faster than average'
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      color: '#6b9d89',
      adoption: 6,
      useCases: [
        { icon: Activity, label: 'Predictive maintenance', impact: 'High' },
        { icon: Eye, label: 'Quality inspection automation', impact: 'High' },
        { icon: TrendingUp, label: 'Production optimization', impact: 'High' },
        { icon: Truck, label: 'Supply chain planning', impact: 'Medium' },
      ],
      benefits: [
        'Reduced equipment downtime',
        'Higher Overall Equipment Effectiveness',
        'Significant cost savings',
        'Improved quality control',
      ],
      metrics: [
        { label: 'Labor Productivity', value: 31, max: 50, prefix: '+', suffix: '%' },
        { label: 'OEE Improvement', value: 15, max: 25, prefix: '+', suffix: 'pp' },
      ],
      insight: '€190M measured savings in documented case study'
    },
  ];

  const activeIndustry = industries[activeTab];
  const Icon = activeIndustry.icon;

  return (
    <section ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Target className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Deep Dives
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Industry <span className="text-[#0d5f4e]">Analysis</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Detailed breakdown of AI use cases, benefits, and measured outcomes
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry, index) => {
            const TabIcon = industry.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] border-transparent text-white shadow-xl'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-[#0d5f4e] hover:bg-[#0d5f4e]/5'
                }`}
              >
                <TabIcon className="w-5 h-5" strokeWidth={1.5} />
                <span className="font-medium">{industry.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-white rounded-3xl border border-gray-200/50 shadow-2xl shadow-gray-900/5 overflow-hidden">
            {/* Header */}
            <div 
              className="p-10 bg-gradient-to-r from-white to-gray-50 border-b border-gray-200"
            >
              <div className="flex items-center gap-6">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: `${activeIndustry.color}15` }}
                >
                  <Icon className="w-10 h-10" style={{ color: activeIndustry.color }} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-light text-gray-900 mb-2">{activeIndustry.name}</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">Adoption Rate:</span>
                    <span className="text-3xl font-light" style={{ color: activeIndustry.color }}>
                      {activeIndustry.adoption}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 p-10">
              {/* Left Column: Use Cases & Benefits */}
              <div className="space-y-10">
                {/* Use Cases */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-[#0d5f4e]" />
                    Primary Use Cases
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {activeIndustry.useCases.map((useCase, i) => {
                      const UseCaseIcon = useCase.icon;
                      return (
                        <div 
                          key={i} 
                          className="bg-gradient-to-br from-[#0d5f4e]/5 to-transparent rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-gray-100"
                        >
                          <UseCaseIcon 
                            className="w-6 h-6 mb-3" 
                            style={{ color: activeIndustry.color }} 
                            strokeWidth={1.5} 
                          />
                          <p className="text-sm text-gray-900 font-medium mb-1">{useCase.label}</p>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            useCase.impact === 'High' 
                              ? 'bg-[#0d5f4e]/10 text-[#0d5f4e]' 
                              : 'bg-gray-200 text-gray-700'
                          }`}>
                            {useCase.impact} Impact
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#0d5f4e]" />
                    Key Benefits
                  </h4>
                  <div className="space-y-3">
                    {activeIndustry.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-[#0d5f4e]/5 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-[#0d5f4e] mt-0.5 flex-shrink-0" strokeWidth={2} />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Metrics & Insights */}
              <div className="space-y-10">
                {/* Quantified Results */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-[#0d5f4e]" />
                    Quantified Results
                  </h4>
                  <div className="space-y-6">
                    {activeIndustry.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-baseline mb-3">
                          <span className="text-sm text-gray-600">{metric.label}</span>
                          <span className="text-3xl font-light" style={{ color: activeIndustry.color }}>
                            {metric.prefix}{metric.value}{metric.suffix}
                          </span>
                        </div>
                        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              backgroundColor: activeIndustry.color,
                              width: `${(metric.value / metric.max) * 100}%`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Insight */}
                <div 
                  className="p-8 rounded-2xl border-l-4"
                  style={{ 
                    backgroundColor: `${activeIndustry.color}05`,
                    borderColor: activeIndustry.color
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${activeIndustry.color}20` }}
                    >
                      <Lightbulb className="w-6 h-6" style={{ color: activeIndustry.color }} />
                    </div>
                    <div>
                      <h5 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-semibold">Key Insight</h5>
                      <p className="text-gray-900 font-medium">{activeIndustry.insight}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// NEW: Adoption Flowchart
function AdoptionFlowchart() {
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

  const steps = [
    { 
      title: 'Strategic Planning',
      description: 'Identify high-impact use cases',
      outcomes: ['Business case', 'ROI projections', 'Resource planning'],
      success: 75
    },
    { 
      title: 'Pilot Deployment',
      description: 'Test in controlled environment',
      outcomes: ['Proof of concept', 'Initial metrics', 'Stakeholder buy-in'],
      success: 60
    },
    { 
      title: 'Process Redesign',
      description: 'Adapt workflows around AI',
      outcomes: ['New processes', 'Training programs', 'Change management'],
      success: 35
    },
    { 
      title: 'Scale & Optimize',
      description: 'Enterprise-wide rollout',
      outcomes: ['Full deployment', 'Performance tracking', 'Continuous improvement'],
      success: 15
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Activity className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Implementation Path
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            From Pilot to <span className="text-[#0d5f4e]">Production</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            The critical path most organizations follow—and where they typically get stuck
          </p>
        </div>

        {/* Flowchart */}
        <div className="relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div 
                className={`mb-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Left: Step Info */}
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Key Outcomes
                      </div>
                      {step.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <CircleDot className="w-4 h-4 text-[#0d5f4e]" strokeWidth={2} />
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Success Rate */}
                  <div className="bg-gradient-to-br from-[#0d5f4e]/5 to-transparent rounded-2xl border border-gray-200 p-8">
                    <div className="flex justify-between items-baseline mb-4">
                      <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Success Rate
                      </span>
                      <span className="text-4xl font-light text-[#0d5f4e]">{step.success}%</span>
                    </div>
                    <div className="h-6 bg-white rounded-full overflow-hidden border border-gray-200">
                      <div 
                        className="h-full bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] transition-all duration-1000 ease-out"
                        style={{ width: isVisible ? `${step.success}%` : '0%', transitionDelay: `${index * 200 + 400}ms` }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      {step.success > 50 
                        ? 'Most organizations reach this stage' 
                        : step.success > 30
                        ? 'Significant drop-off at this phase'
                        : 'Only leaders achieve full optimization'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mb-8">
                  <ArrowDownRight 
                    className={`w-8 h-8 text-[#0d5f4e]/30 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 200 + 300}ms` }}
                    strokeWidth={1.5}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Enhanced Cross-Industry Charts Section
function CrossIndustryChartsSection() {
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

  const adoptionData = [
    { industry: 'Technology & SaaS', rate: 88, color: '#0d5f4e' },
    { industry: 'Logistics & Supply Chain', rate: 31, color: '#6b9d89' },
    { industry: 'Retail & eCommerce', rate: 31, color: '#6b9d89' },
    { industry: 'Finance & FinTech', rate: 24, color: '#9ca3af' },
    { industry: 'Healthcare', rate: 22, color: '#9ca3af' },
    { industry: 'Legal Services', rate: 20, color: '#9ca3af' },
    { industry: 'Manufacturing', rate: 6, color: '#d1d5db' },
  ];

  const functionData = [
    { function: 'Marketing', adoption: 36, color: '#0d5f4e' },
    { function: 'Operations', adoption: 31, color: '#6b9d89' },
    { function: 'Engineering', adoption: 28, color: '#6b9d89' },
    { function: 'Service', adoption: 24, color: '#9ca3af' },
  ];

  return (
    <section ref={sectionRef} className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <LineChart className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Comparative Analysis
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Cross-Industry <span className="text-[#0d5f4e]">Patterns</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Adoption varies dramatically—some industries lead, others lag despite clear ROI potential
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Chart 1 */}
          <div className="bg-white rounded-3xl border border-gray-200/50 p-10 shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0d5f4e]/10 to-[#6b9d89]/10 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-[#0d5f4e]" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Adoption by Industry</h3>
            </div>
            
            <div className="space-y-5">
              {adoptionData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-sm text-gray-700 font-medium">{item.industry}</span>
                    <span className="text-xl font-light text-gray-900">{item.rate}%</span>
                  </div>
                  <div className="h-10 bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                    <div 
                      className="h-full rounded-xl transition-all duration-1000 ease-out flex items-center justify-end pr-4 shadow-sm"
                      style={{ 
                        backgroundColor: item.color,
                        width: isVisible ? `${item.rate}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    >
                      {isVisible && item.rate > 15 && (
                        <span className="text-white text-sm font-semibold">{item.rate}%</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                82% gap between highest and lowest adoption rates
              </p>
            </div>
          </div>

          {/* Chart 2 */}
          <div className="bg-white rounded-3xl border border-gray-200/50 p-10 shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0d5f4e]/10 to-[#6b9d89]/10 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-[#0d5f4e]" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Function-Level Adoption</h3>
            </div>
            
            <div className="space-y-5">
              {functionData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-sm text-gray-700 font-medium">{item.function}</span>
                    <span className="text-xl font-light text-gray-900">{item.adoption}%</span>
                  </div>
                  <div className="h-10 bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                    <div 
                      className="h-full rounded-xl transition-all duration-1000 ease-out flex items-center justify-end pr-4 shadow-sm"
                      style={{ 
                        backgroundColor: item.color,
                        width: isVisible ? `${item.adoption}%` : '0%',
                        transitionDelay: `${index * 150}ms`
                      }}
                    >
                      {isVisible && (
                        <span className="text-white text-sm font-semibold">{item.adoption}%</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Marketing leads functional adoption across all industries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Value Realization Diagram
function ValueRealizationDiagram() {
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
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              The Gap
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Expected vs <span className="text-[#0d5f4e]">Actual</span> ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Most organizations overestimate Year 1 returns—the gap reveals what's really happening
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Expected ROI */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-gradient-to-br from-[#0d5f4e]/10 to-transparent rounded-2xl border-2 border-[#0d5f4e]/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-[#0d5f4e]" strokeWidth={2} />
                <h3 className="text-xl font-semibold text-gray-900">Expected ROI</h3>
              </div>
              
              <div className="text-7xl font-light text-[#0d5f4e] mb-4">100%</div>
              
              <div className="h-64 bg-white rounded-xl overflow-hidden border border-gray-200 relative">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d5f4e] to-[#6b9d89] transition-all duration-1500 ease-out flex items-start justify-center pt-6"
                  style={{ height: isVisible ? '100%' : '0%' }}
                >
                  <span className="text-white text-2xl font-semibold">100%</span>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0d5f4e]" />
                  Full value realization
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0d5f4e]" />
                  Seamless integration
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0d5f4e]" />
                  Immediate impact
                </div>
              </div>
            </div>
          </div>

          {/* Actual ROI */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-gradient-to-br from-gray-100 to-transparent rounded-2xl border-2 border-gray-300 p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingDown className="w-6 h-6 text-gray-600" strokeWidth={2} />
                <h3 className="text-xl font-semibold text-gray-900">Actual ROI (Year 1)</h3>
              </div>
              
              <div className="text-7xl font-light text-gray-600 mb-4">35%</div>
              
              <div className="h-64 bg-white rounded-xl overflow-hidden border border-gray-200 relative">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-500 to-gray-400 transition-all duration-1500 ease-out flex items-start justify-center pt-6"
                  style={{ height: isVisible ? '35%' : '0%', transitionDelay: '300ms' }}
                >
                  <span className="text-white text-2xl font-semibold">35%</span>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <AlertTriangle className="w-4 h-4 text-gray-600" />
                  Process not redesigned
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <AlertTriangle className="w-4 h-4 text-gray-600" />
                  Change management gaps
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <AlertTriangle className="w-4 h-4 text-gray-600" />
                  Data quality issues
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-900 rounded-3xl p-12 text-center shadow-2xl">
          <p className="text-3xl lg:text-4xl font-light leading-relaxed text-white mb-4">
            "65% gap between expected and actual ROI in first year"
          </p>
          <p className="text-gray-400">
            Success requires process change, not just tool deployment
          </p>
        </div>
      </div>
    </section>
  );
}

// Real World Examples
function RealWorldExamplesSection() {
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

  const examples = [
    {
      company: 'BMW',
      industry: 'Manufacturing',
      icon: Factory,
      headline: '30–40% productivity via genAI agents',
      description: 'Deployed AI agents across manufacturing and engineering workflows, achieving significant productivity improvements in design and production processes through intelligent automation.',
      metrics: [
        { label: 'Productivity', value: '30-40%' },
        { label: 'Time Saved', value: '15hrs/wk' },
      ],
      color: '#0d5f4e'
    },
    {
      company: 'Swiss Railways',
      industry: 'Infrastructure',
      icon: Truck,
      headline: '60% inspection time reduction',
      description: 'Implemented AI-powered visual inspection systems for railway infrastructure, dramatically reducing manual inspection time while improving accuracy.',
      metrics: [
        { label: 'Time Saved', value: '60%' },
        { label: 'Accuracy', value: '95%+' },
      ],
      color: '#6b9d89'
    },
    {
      company: 'Retail Leaders',
      industry: 'Retail',
      icon: ShoppingCart,
      headline: '+15% revenue vs peers',
      description: 'Top-quartile retailers using AI for personalization and demand forecasting consistently outperform peers on revenue growth and retention.',
      metrics: [
        { label: 'Revenue', value: '+15%' },
        { label: 'Retention', value: '+22%' },
      ],
      color: '#0d5f4e'
    },
  ];

  return (
    <section ref={sectionRef} className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Award className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Case Studies
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Real-World <span className="text-[#0d5f4e]">Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Documented outcomes from organizations that got AI implementation right
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {examples.map((example, index) => {
            const Icon = example.icon;
            return (
              <div
                key={index}
                className={`group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-3xl border border-gray-200/50 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden h-full">
                  <div className="p-8 bg-gradient-to-br from-white to-gray-50 border-b border-gray-200">
                    <div className="flex items-start justify-between mb-6">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${example.color}15` }}
                      >
                        <Icon className="w-8 h-8" style={{ color: example.color }} strokeWidth={1.5} />
                      </div>
                      <span className="text-xs px-3 py-1 bg-[#0d5f4e]/10 text-[#0d5f4e] rounded-full font-semibold uppercase">
                        {example.industry}
                      </span>
                    </div>

                    <div className="text-sm text-gray-500 mb-2 font-semibold uppercase tracking-wider">
                      {example.company}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 leading-tight">
                      {example.headline}
                    </h3>
                  </div>

                  <div className="p-8">
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {example.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      {example.metrics.map((metric, i) => (
                        <div 
                          key={i}
                          className="p-4 rounded-xl"
                          style={{ backgroundColor: `${example.color}05` }}
                        >
                          <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">
                            {metric.label}
                          </div>
                          <div className="text-2xl font-light" style={{ color: example.color }}>
                            {metric.value}
                          </div>
                        </div>
                      ))}
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

// Reality Check Section
function RealityCheckSection() {
  const warnings = [
    {
      title: 'Adoption ≠ ROI',
      description: 'Many organizations deploy AI without redesigning processes. 65% fail to meet ROI targets in Year 1.',
      severity: 'high',
      impact: '65%'
    },
    {
      title: 'Data Quality Limits',
      description: 'Poor data foundations reduce potential impact by 40-60%. Garbage in, garbage out.',
      severity: 'high',
      impact: '40-60%'
    },
    {
      title: 'Process Change > Tech',
      description: '70% of failures are organizational, not technical. Process redesign matters more than models.',
      severity: 'critical',
      impact: '70%'
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-500/10 rounded-full mb-6">
            <Shield className="w-4 h-4 text-gray-700" />
            <span className="text-xs uppercase tracking-[0.2em] text-gray-700 font-semibold">
              Reality Check
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            What <span className="text-gray-700">Actually</span> Happens
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Balancing optimism with data—here's what the research shows
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {warnings.map((warning, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl p-8 ${
                warning.severity === 'critical'
                  ? 'bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-gray-300'
                  : 'bg-gradient-to-br from-[#6b9d89]/10 to-transparent border-2 border-[#6b9d89]/30'
              }`}
            >
              <div className="absolute top-4 right-4">
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  warning.severity === 'critical'
                    ? 'bg-gray-700 text-white'
                    : 'bg-[#0d5f4e] text-white'
                }`}>
                  {warning.impact}
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle 
                  className={`w-7 h-7 flex-shrink-0 mt-1 ${
                    warning.severity === 'critical' ? 'text-gray-700' : 'text-[#0d5f4e]'
                  }`}
                  strokeWidth={2}
                />
                <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                  {warning.title}
                </h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {warning.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-3xl p-16 text-center shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Users className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <p className="text-4xl font-light leading-relaxed text-white mb-6">
              "The biggest AI failures aren't technical. They're organizational."
            </p>
            <div className="w-24 h-1 bg-white/20 mx-auto rounded-full mb-4" />
            <p className="text-gray-400 text-sm uppercase tracking-wider">
              Enterprise AI Research, 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Key Takeaways
function KeyTakeawaysSection() {
  const takeaways = [
    {
      quote: "AI delivers value where workflows change, not where tools are added.",
      context: "Organizations that redesign processes see 4-5x better outcomes. The technology enables change—it doesn't replace the need for it.",
      icon: Layers
    },
    {
      quote: "High performers focus on execution, not experimentation.",
      context: "Leaders scale AI 3x faster by investing in governance, data infrastructure, and change management—not by running more pilots.",
      icon: Target
    },
  ];

  return (
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Lightbulb className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Insights
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Key <span className="text-[#0d5f4e]">Takeaways</span>
          </h2>
        </div>

        <div className="space-y-12">
          {takeaways.map((takeaway, index) => {
            const Icon = takeaway.icon;
            return (
              <div key={index} className="bg-white rounded-3xl border-l-4 border-[#0d5f4e] shadow-xl p-10 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0d5f4e]/10 to-[#6b9d89]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-[#0d5f4e]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-3xl lg:text-4xl text-gray-900 font-light leading-relaxed mb-6">
                      "{takeaway.quote}"
                    </blockquote>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {takeaway.context}
                    </p>
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

// Sources & Methodology
function SourcesMethodologySection({ 
  methodologyOpen, 
  setMethodologyOpen 
}: { 
  methodologyOpen: boolean; 
  setMethodologyOpen: (open: boolean) => void;
}) {
  const sources = [
    { name: 'McKinsey & Company', type: 'Global AI Survey 2024', icon: Building2 },
    { name: 'World Economic Forum', type: 'Future of Jobs Report', icon: Users },
    { name: 'Deloitte', type: 'State of AI in Enterprise', icon: BarChart3 },
    { name: 'BCG', type: 'AI Maturity Research', icon: LineChart },
  ];

  return (
    <section id="methodology" className="py-32 bg-gradient-to-b from-white to-gray-50">
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

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {sources.map((source, index) => {
            const Icon = source.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-gray-200/50 p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0d5f4e]/10 to-[#6b9d89]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-[#0d5f4e]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg mb-1">{source.name}</div>
                      <div className="text-sm text-gray-600">{source.type}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#0d5f4e] transition-colors" />
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
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0d5f4e]/10 to-[#6b9d89]/10 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-[#0d5f4e]" strokeWidth={2} />
              </div>
              <span className="text-2xl font-semibold text-gray-900">Research Methodology</span>
            </div>
            {methodologyOpen ? (
              <ChevronUp className="w-6 h-6 text-gray-600" strokeWidth={2} />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-600" strokeWidth={2} />
            )}
          </button>
          
          {methodologyOpen && (
            <div className="px-10 py-8 border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="w-10 h-10 bg-[#0d5f4e]/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-5 h-5 text-[#0d5f4e]" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">Data Collection</h4>
                  <p className="text-sm text-gray-600">
                    500+ enterprise surveys, 50+ case studies across 10 industries (2023-2025).
                  </p>
                </div>
                
                <div>
                  <div className="w-10 h-10 bg-[#0d5f4e]/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-5 h-5 text-[#0d5f4e]" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">Sample</h4>
                  <p className="text-sm text-gray-600">
                    40% NA, 35% EU, 25% APAC. 60% large enterprise, 40% mid-market.
                  </p>
                </div>
                
                <div>
                  <div className="w-10 h-10 bg-[#0d5f4e]/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-5 h-5 text-[#0d5f4e]" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">Quality</h4>
                  <p className="text-sm text-gray-600">
                    All benefits verified through direct measurement or third-party audit.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <button className="group px-10 py-5 bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] text-white rounded-2xl hover:shadow-2xl transition-all duration-500 flex items-center gap-3 mx-auto">
            <span className="text-lg font-semibold">Download Detailed Methodology</span>
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
