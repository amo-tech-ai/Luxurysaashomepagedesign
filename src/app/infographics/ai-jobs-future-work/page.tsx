import { useEffect, useRef, useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown,
  BarChart3, 
  Users,
  Briefcase,
  DollarSign,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Award,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Brain,
  Code,
  Database,
  Cloud,
  Lock,
  FileText,
  Target,
  Activity,
  Eye,
  Sparkles,
  ArrowRight,
  Circle,
  Minus
} from 'lucide-react';

export default function AIJobsFutureWorkPage() {
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
                <Briefcase className="w-3 h-3 text-[#0d5f4e]" />
                AI Jobs Report 2024–2026
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
        <ExecutiveSummarySection />
        <JobsCreatedDisplacedChart />
        <FastestGrowingJobsTable />
        <SalaryBenchmarksChart />
        <EmergingRolesSection />
        <JobsAtRiskHeatmap />
        <JobsAIWontReplaceSection />
        <SkillsMatrixSection />
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
                Data compiled from WEF, PwC, OECD, ILO, BLS & industry sources
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Hero Section with KPI Cards
function HeroSection({ scrollY }: { scrollY: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-32 pb-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Title + Subtitle + Source Badges */}
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
                  Future of Work Report 2024–2026
                </span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl leading-[0.95] text-gray-900 font-light tracking-tight">
                  AI Jobs & <br />
                  <span className="bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] bg-clip-text text-transparent">
                    Future of Work
                  </span>
                </h1>
                
                <div className="w-24 h-1 bg-gradient-to-r from-[#0d5f4e] to-transparent rounded-full" />
              </div>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl font-light">
                What's growing, what's emerging, what's shrinking — and the skills that matter.
              </p>
            </div>

            {/* Source Badges */}
            <div className="flex flex-wrap gap-3">
              {['WEF', 'PwC', 'OECD', 'ILO', 'BLS'].map((source) => (
                <div key={source} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:border-[#0d5f4e] hover:text-[#0d5f4e] transition-all duration-300">
                  {source}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#0d5f4e] to-[#0a4d3e] text-white rounded-xl hover:shadow-2xl hover:shadow-[#0d5f4e]/20 transition-all duration-500 flex items-center justify-center gap-3">
                <span className="font-medium">Download Full Report</span>
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </button>
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
                number="+78M"
                label="Net New Jobs by 2030"
                sublabel="170M created, 92M displaced"
                source="WEF"
                color="#0d5f4e"
                delay={0}
              />
              
              <KPICard 
                number="56%"
                label="Wage Premium"
                sublabel="For AI-skilled workers"
                source="PwC"
                color="#6b9d89"
                delay={200}
              />
              
              <KPICard 
                number="1 in 4"
                label="Jobs Exposed to GenAI"
                sublabel="Mostly transformed, not replaced"
                source="ILO"
                color="#0d5f4e"
                delay={400}
              />

              <KPICard 
                number="26%"
                label="US Jobs Highly Transformed"
                sublabel="Significant workflow changes ahead"
                source="Indeed"
                color="#6b9d89"
                delay={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KPICard({ number, label, sublabel, source, color, delay }: any) {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    // Simple count-up for numbers
    const numericPart = parseInt(number.replace(/[^0-9]/g, ''));
    if (isNaN(numericPart)) return;

    const duration = 900;
    const steps = 30;
    const increment = numericPart / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= numericPart) {
        setCount(numericPart);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [isVisible, number]);

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
          {number.includes('M') ? (count > 0 ? `+${count}M` : number) : 
           number.includes('%') ? (count > 0 ? `${count}%` : number) : 
           number}
        </div>
        <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600">
          {source}
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

// Executive Summary Section
function ExecutiveSummarySection() {
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

  const bullets = [
    { text: 'By 2030, labor transformation: ~170M created, ~92M displaced, net +78M', icon: TrendingUp, source: 'WEF' },
    { text: 'Fastest rising demand: AI/ML, big data, fintech + tech/green roles', icon: Zap, source: 'WEF' },
    { text: '~56% wage premium for AI skills', icon: DollarSign, source: 'PwC' },
    { text: '1 in 4 jobs globally exposed to GenAI', icon: Users, source: 'ILO' },
    { text: '~26% of US jobs could be "highly transformed"', icon: Activity, source: 'Indeed' },
    { text: 'Decline pressure: routine clerical/admin tasks + keyboard clerks', icon: TrendingDown, source: 'OECD/PwC' },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <FileText className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Executive Summary
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Key <span className="text-[#0d5f4e]">Findings</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Summary Bullets */}
          <div className="space-y-6">
            {bullets.map((bullet, index) => {
              const Icon = bullet.icon;
              return (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-6 bg-gradient-to-r from-gray-50 to-transparent rounded-xl border border-gray-200/50 hover:border-[#0d5f4e]/30 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-[#0d5f4e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#0d5f4e]" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 leading-relaxed mb-2">{bullet.text}</p>
                    <span className="text-xs text-gray-500 font-medium">{bullet.source}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Pull Quote Card */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-gradient-to-br from-[#0d5f4e] to-[#0a4d3e] rounded-3xl p-12 shadow-2xl h-full flex flex-col justify-center relative overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }} />
              </div>

              <div className="relative z-10 space-y-8">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>

                <blockquote className="text-3xl lg:text-4xl font-light text-white leading-relaxed">
                  "By 2030, the labor market transforms dramatically—not through replacement, but through augmentation."
                </blockquote>

                <div className="w-24 h-1 bg-white/30 rounded-full" />

                <p className="text-white/80 text-sm">
                  AI-skilled workers command a 56% wage premium, while transformation pressure hits routine tasks hardest. The winners adapt early.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trend Strip */}
        <div className="mt-16 grid grid-cols-3 gap-6">
          <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
            <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" strokeWidth={2} />
            <div className="text-sm font-semibold text-green-900 mb-1">Growth</div>
            <div className="text-xs text-green-700">AI/ML, Data, Tech</div>
          </div>
          
          <div className="text-center p-6 bg-[#6b9d89]/10 rounded-xl border border-[#6b9d89]/30">
            <Activity className="w-8 h-8 text-[#6b9d89] mx-auto mb-3" strokeWidth={2} />
            <div className="text-sm font-semibold text-gray-900 mb-1">Transform</div>
            <div className="text-xs text-gray-700">Knowledge Work</div>
          </div>
          
          <div className="text-center p-6 bg-gray-100 rounded-xl border border-gray-300">
            <TrendingDown className="w-8 h-8 text-gray-600 mx-auto mb-3" strokeWidth={2} />
            <div className="text-sm font-semibold text-gray-900 mb-1">Shrink</div>
            <div className="text-xs text-gray-700">Routine/Clerical</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Jobs Created vs Displaced Chart
function JobsCreatedDisplacedChart() {
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
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <BarChart3 className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Labor Transformation
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Jobs Created vs <span className="text-[#0d5f4e]">Displaced</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Net impact: +78M jobs by 2030 (WEF Future of Jobs Report)
          </p>
        </div>

        {/* Waterfall Chart */}
        <div className="bg-white rounded-3xl border border-gray-200/50 p-10 shadow-xl">
          <div className="space-y-12">
            {/* Created */}
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Jobs Created</div>
                    <div className="text-xs text-gray-500">New roles & expanded positions</div>
                  </div>
                </div>
                <div className="text-5xl font-light text-green-600">170M</div>
              </div>
              <div className="h-16 bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-1500 ease-out flex items-center justify-end pr-6"
                  style={{ width: isVisible ? '100%' : '0%' }}
                >
                  <span className="text-white text-lg font-semibold">170M</span>
                </div>
              </div>
            </div>

            {/* Displaced */}
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-500/10 rounded-lg flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-gray-600" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Jobs Displaced</div>
                    <div className="text-xs text-gray-500">Automation & obsolescence</div>
                  </div>
                </div>
                <div className="text-5xl font-light text-gray-600">92M</div>
              </div>
              <div className="h-16 bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                <div 
                  className="h-full bg-gradient-to-r from-gray-500 to-gray-400 transition-all duration-1500 ease-out delay-300 flex items-center justify-end pr-6"
                  style={{ width: isVisible ? '54%' : '0%' }}
                >
                  <span className="text-white text-lg font-semibold">92M</span>
                </div>
              </div>
            </div>

            {/* Net Impact */}
            <div className="pt-8 border-t-2 border-gray-200">
              <div className="flex justify-between items-baseline mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0d5f4e]/10 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#0d5f4e]" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Net Impact</div>
                    <div className="text-xs text-gray-500">By 2030</div>
                  </div>
                </div>
                <div className="text-6xl font-light text-[#0d5f4e]">+78M</div>
              </div>
              <div className="h-20 bg-gray-50 rounded-xl overflow-hidden border-2 border-[#0d5f4e]/30">
                <div 
                  className="h-full bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] transition-all duration-1500 ease-out delay-600 flex items-center justify-end pr-6"
                  style={{ width: isVisible ? '46%' : '0%' }}
                >
                  <span className="text-white text-2xl font-semibold">+78M Net New Jobs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Annotation */}
          <div className="mt-8 p-6 bg-[#0d5f4e]/5 rounded-xl border border-[#0d5f4e]/20">
            <div className="flex items-start gap-3">
              <Eye className="w-5 h-5 text-[#0d5f4e] flex-shrink-0 mt-0.5" strokeWidth={2} />
              <div>
                <p className="text-sm text-gray-900 font-medium mb-1">Key Insight</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Most impact comes from task change and new roles, not wholesale job replacement. 
                  Workers who adapt skills early capture the wage premium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Fastest Growing Jobs Table
function FastestGrowingJobsTable() {
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

  const jobs = [
    { role: 'AI/ML Engineer', demand: 'High', industries: 'Tech/SaaS, Finance, Retail, Manufacturing', signal: 'AI-skilled wage premium ~56% (PwC)' },
    { role: 'Data Scientist', demand: 'High', industries: 'Tech, Finance, Healthcare, Government', signal: '+34% (2024–2034); $112,590 median wage (BLS)' },
    { role: 'MLOps / AI Infrastructure', demand: 'High', industries: 'Tech/SaaS, Enterprise IT, Regulated sectors', signal: 'Skills change faster in AI-exposed jobs (PwC)' },
    { role: 'AI Product Manager', demand: 'Medium–High', industries: 'Tech/SaaS, Fintech, Health Tech', signal: '~$224k median total comp (Levels.fyi)' },
    { role: 'AI Governance / Risk / Responsible AI', demand: 'Medium–High', industries: 'Finance, Healthcare, Government, Enterprise', signal: 'Responsible AI growing skill area (LinkedIn)' },
    { role: 'Robotics / Automation Engineer', demand: 'Medium–High', industries: 'Manufacturing, Logistics, Energy', signal: 'Major transformation driver (WEF)' },
    { role: 'Applied AI / Agent Builder', demand: 'High', industries: 'Tech/SaaS, Customer ops heavy orgs', signal: 'AI agent skills increasing (Reuters)' },
  ];

  return (
    <section ref={sectionRef} className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">Fastest Growing</span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            High-Demand <span className="text-[#0d5f4e]">AI Roles</span>
          </h2>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200/50 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="sticky top-20 bg-gradient-to-r from-gray-50 to-white backdrop-blur-xl z-10 border-b-2 border-gray-200">
                <tr>
                  <th className="text-left py-6 px-8 text-xs uppercase tracking-[0.15em] text-gray-500 font-bold">Role</th>
                  <th className="text-left py-6 px-8 text-xs uppercase tracking-[0.15em] text-gray-500 font-bold">Demand</th>
                  <th className="text-left py-6 px-8 text-xs uppercase tracking-[0.15em] text-gray-500 font-bold">Key Industries</th>
                  <th className="text-left py-6 px-8 text-xs uppercase tracking-[0.15em] text-gray-500 font-bold">Signals</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
                  <tr 
                    key={index}
                    className={`border-b border-gray-100 hover:bg-gradient-to-r hover:from-[#0d5f4e]/5 hover:to-transparent transition-all duration-300 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                    } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: `${index * 60}ms` }}
                  >
                    <td className="py-6 px-8 font-semibold text-gray-900">{job.role}</td>
                    <td className="py-6 px-8">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        job.demand === 'High' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {job.demand}
                      </span>
                    </td>
                    <td className="py-6 px-8 text-gray-700 text-sm">{job.industries}</td>
                    <td className="py-6 px-8">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{job.signal}</span>
                        <ExternalLink className="w-3 h-3 text-gray-400" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

// Salary Benchmarks, Emerging Roles, Jobs At Risk, Jobs Won't Replace, Skills Matrix, Sources sections...
function SalaryBenchmarksChart() {
  return <div>Salary section</div>;
}

function EmergingRolesSection() {
  return <div>Emerging roles section</div>;
}

function JobsAtRiskHeatmap() {
  return <div>Jobs at risk section</div>;
}

function JobsAIWontReplaceSection() {
  return <div>Jobs won't replace section</div>;
}

function SkillsMatrixSection() {
  return <div>Skills matrix section</div>;
}

function SourcesMethodologySection({ methodologyOpen, setMethodologyOpen }: any) {
  return <div>Sources section</div>;
}