import { useEffect, useRef, useState } from 'react';
import { 
  TrendingUp, 
  Users,
  Briefcase,
  DollarSign,
  Brain,
  Shield,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Clock,
  BarChart3,
  Activity,
  Zap,
  Target,
  ArrowRight,
  TrendingDown,
  Sparkles,
  Award,
  Building2,
  Code,
  Cpu,
  GitBranch,
  Eye,
  Settings,
  FileText,
  Layers
} from 'lucide-react';

export default function AIJobsV2Page() {
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
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#0d5f4e]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0d5f4e]/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Minimalist Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf8]/90 backdrop-blur-xl border-b border-gray-200/40">
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
                AI Jobs Report 2024-2026
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
        <ExecutiveSummarySection />
        <JobCreationChartSection />
        <SkillDemandSection />
        <JobPostingsSection />
        <FastestGrowingJobsSection />
        <EmergingRolesSection />
        <SalaryBenchmarkSection />
        <AutomationRiskSection />
        <SkillsMatrixSection />
        <NotReplacedSection />
        <MethodologySection 
          methodologyOpen={methodologyOpen}
          setMethodologyOpen={setMethodologyOpen}
        />
      </div>

      {/* Premium Footer */}
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
                AI Jobs & Future of Work Report 2024-2026. Research-grade data for executives, founders, and talent leaders.
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-4">Key Sources</p>
              <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                <span>WEF</span>
                <span>•</span>
                <span>LinkedIn</span>
                <span>•</span>
                <span>Indeed</span>
                <span>•</span>
                <span>PwC</span>
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

// Hero Section V2
function HeroSectionV2({ scrollY }: { scrollY: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ 
    kpi1: 0, 
    kpi2: 0, 
    kpi3: 0, 
    kpi4: 0 
  });

  useEffect(() => {
    setIsVisible(true);
    
    const duration = 1200;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        kpi1: parseFloat((progress * 1.3).toFixed(1)),
        kpi2: Math.floor(progress * 78),
        kpi3: Math.floor(progress * 70),
        kpi4: parseFloat((progress * 4.2).toFixed(1))
      });
      
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const parallaxOffset = scrollY * 0.3;

  return (
    <section className="min-h-screen flex items-center pt-32 pb-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Title + Coverage */}
          <div 
            className={`transition-all duration-1500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transform: `translateY(-${parallaxOffset}px)` }}
          >
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Research Report 2024-2026
              </span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl leading-[0.95] text-gray-900 tracking-tight mb-8">
              AI Jobs & <br />
              Future of <span className="italic font-light">Work</span>
            </h1>
            
            <div className="w-16 h-px bg-[#0d5f4e] mb-8" />
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              What's growing, what's emerging, what's at risk — and where the data is strongest.
            </p>

            {/* Coverage Chips */}
            <div className="flex flex-wrap gap-3 mb-12">
              <div className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs text-gray-700">
                LinkedIn • WEF • Indeed • PwC
              </div>
              <div className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs text-gray-700">
                Measured vs Projected
              </div>
              <div className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs text-gray-700">
                US + Global Signals
              </div>
            </div>
          </div>

          {/* Right: KPI Stack */}
          <div 
            className={`transition-all duration-1500 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="bg-white rounded-3xl border border-gray-200 p-12 shadow-xl">
              <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-8">
                Key Metrics
              </div>
              
              <div className="space-y-10">
                {/* KPI 1 */}
                <div className="pb-8 border-b border-gray-200">
                  <div className="flex items-baseline gap-2 mb-2">
                    <div className="text-5xl font-light text-gray-900">{counts.kpi1.toFixed(1)}M</div>
                    <div className="px-2 py-1 bg-[#0d5f4e]/10 rounded text-xs text-[#0d5f4e]">
                      Measured
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">New AI jobs in 2 years</div>
                  <a 
                    href="https://www.weforum.org/stories/2026/01/ai-has-already-added-1-3-million-new-jobs-according-to-linkedin-data/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:text-[#0d5f4e] transition-colors flex items-center gap-1"
                  >
                    LinkedIn via WEF <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* KPI 2 */}
                <div className="pb-8 border-b border-gray-200">
                  <div className="flex items-baseline gap-2 mb-2">
                    <div className="text-5xl font-light text-gray-900">+{counts.kpi2}M</div>
                    <div className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                      Projected
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">Net jobs by 2030</div>
                  <div className="text-xs text-gray-400">170M created, 92M displaced</div>
                </div>

                {/* KPI 3 */}
                <div className="pb-8 border-b border-gray-200">
                  <div className="flex items-baseline gap-2 mb-2">
                    <div className="text-5xl font-light text-gray-900">+{counts.kpi3}%</div>
                    <div className="px-2 py-1 bg-[#0d5f4e]/10 rounded text-xs text-[#0d5f4e]">
                      Measured
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">YoY AI skill demand (US)</div>
                  <div className="text-xs text-gray-400">WEF/LinkedIn data</div>
                </div>

                {/* KPI 4 */}
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <div className="text-5xl font-light text-gray-900">{counts.kpi4.toFixed(1)}%</div>
                    <div className="px-2 py-1 bg-[#0d5f4e]/10 rounded text-xs text-[#0d5f4e]">
                      Measured
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">Peak share mentioning AI</div>
                  <a 
                    href="https://www.hiringlab.org/2026/01/22/january-labor-market-update-jobs-mentioning-ai-are-growing-amid-broader-hiring-weakness/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:text-[#0d5f4e] transition-colors flex items-center gap-1"
                  >
                    Indeed Hiring Lab <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const insights = [
    {
      headline: 'Job creation is already visible',
      stat: '1.3M',
      meaning: 'Evidence of net-new roles, not just task automation.',
      source: 'https://www.weforum.org/stories/2026/01/ai-has-already-added-1-3-million-new-jobs-according-to-linkedin-data/',
      type: 'measured'
    },
    {
      headline: 'Long-term net gain remains the base forecast',
      stat: '+78M',
      meaning: 'Large churn: creation and displacement happening together.',
      source: 'https://www.weforum.org/stories/2026/01/ai-has-already-added-1-3-million-new-jobs-according-to-linkedin-data/',
      type: 'projected'
    },
    {
      headline: 'Demand is shifting fast inside job postings',
      stat: '70% YoY',
      meaning: 'AI literacy is becoming table-stakes across knowledge work.',
      source: 'https://www.weforum.org/stories/2026/01/ai-has-already-added-1-3-million-new-jobs-according-to-linkedin-data/',
      type: 'measured'
    },
    {
      headline: 'AI mentions are still small but accelerating',
      stat: '4.2%',
      meaning: 'Early-stage, but growing even as hiring weakens.',
      source: 'https://www.hiringlab.org/2026/01/22/january-labor-market-update-jobs-mentioning-ai-are-growing-amid-broader-hiring-weakness/',
      type: 'measured'
    },
    {
      headline: 'AI exposure correlates with productivity growth',
      stat: '4.8×',
      meaning: 'Economic value shows up first where AI can be deployed at scale.',
      source: 'https://www.pwc.com/gx/en/news-room/press-releases/2024/pwc-2024-global-ai-jobs-barometer.html',
      type: 'measured'
    },
    {
      headline: 'AI skills are most concentrated in ICT',
      stat: '8.8%',
      meaning: 'Tech remains the engine room for AI skill accumulation.',
      source: 'https://www.index.dev/blog/ai-job-growth-statistics',
      type: 'measured'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Key Findings
          </span>
          <h2 className="text-5xl lg:text-6xl text-gray-900 tracking-tight">
            Executive <span className="italic font-light">Summary</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-[#0d5f4e]/20 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl font-light text-[#0d5f4e]">{insight.stat}</div>
                <div className={`px-2 py-1 rounded text-xs ${
                  insight.type === 'measured' 
                    ? 'bg-[#0d5f4e]/10 text-[#0d5f4e]' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {insight.type === 'measured' ? 'Measured' : 'Projected'}
                </div>
              </div>
              
              <h3 className="text-lg text-gray-900 mb-4 leading-snug">{insight.headline}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">{insight.meaning}</p>
              
              <a 
                href={insight.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-[#0d5f4e] transition-colors flex items-center gap-1"
              >
                Source <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Job Creation Chart Section
function JobCreationChartSection() {
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
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            2030 Outlook
          </span>
          <h2 className="text-5xl lg:text-6xl text-gray-900 tracking-tight mb-6">
            Job Creation vs <span className="italic font-light">Displacement</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Net positive does not mean low disruption — it means large reallocation.
          </p>
        </div>

        <div 
          className={`bg-white rounded-3xl border border-gray-200 p-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Waterfall Visualization */}
          <div className="space-y-8">
            {/* Created */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#0d5f4e]" strokeWidth={1.5} />
                  <span className="text-sm uppercase tracking-[0.2em] text-gray-500">Created</span>
                </div>
                <div className="text-3xl font-light text-gray-900">170M</div>
              </div>
              <div className="h-12 bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10" />
              </div>
            </div>

            {/* Displaced */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <TrendingDown className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
                  <span className="text-sm uppercase tracking-[0.2em] text-gray-500">Displaced</span>
                </div>
                <div className="text-3xl font-light text-gray-900">92M</div>
              </div>
              <div className="h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-xl relative overflow-hidden" style={{ width: '54%' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10" />
              </div>
            </div>

            {/* Net */}
            <div className="pt-8 border-t-2 border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-[#0d5f4e]" strokeWidth={1.5} />
                  <span className="text-sm uppercase tracking-[0.2em] text-[#0d5f4e]">Net Gain</span>
                </div>
                <div className="text-4xl font-light text-[#0d5f4e]">+78M</div>
              </div>
              <div className="h-14 bg-gradient-to-r from-[#0d5f4e]/20 to-[#0d5f4e]/30 rounded-xl border-2 border-[#0d5f4e]/50 relative overflow-hidden" style={{ width: '46%' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20" />
              </div>
            </div>
          </div>

          <div className="mt-8 text-xs text-gray-500 italic">
            Source: WEF Future of Jobs Report 2030 (Projection)
          </div>
        </div>
      </div>
    </section>
  );
}

// Skill Demand Section
function SkillDemandSection() {
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
    <section ref={sectionRef} className="py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
              US Market Signal
            </span>
            <h2 className="text-5xl lg:text-6xl text-gray-900 tracking-tight mb-6">
              AI Skill Demand <span className="italic font-light">Growth</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Year-over-year growth in AI skill requirements across US job postings shows rapid acceleration.
            </p>
            <a 
              href="https://www.weforum.org/stories/2026/01/ai-has-already-added-1-3-million-new-jobs-according-to-linkedin-data/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#0d5f4e] hover:underline flex items-center gap-2"
            >
              View WEF Report <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white rounded-3xl border border-gray-200 p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0d5f4e]/5 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="text-8xl font-light text-gray-900 mb-4">+70%</div>
                <div className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">
                  Year-over-Year
                </div>
                <div className="text-lg text-gray-700">
                  AI skill demand in US postings
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1 bg-[#0d5f4e]/10 rounded-full text-xs text-[#0d5f4e]">
                      Measured
                    </div>
                    <span className="text-xs text-gray-500">WEF/LinkedIn Data</span>
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

// Job Postings Section
function JobPostingsSection() {
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
    <section ref={sectionRef} className="py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Indeed AI Tracker
          </span>
          <h2 className="text-5xl lg:text-6xl text-gray-900 tracking-tight mb-6">
            Share of Job Postings <span className="italic font-light">Mentioning AI</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            AI mentions are rising despite broader hiring softness.
          </p>
        </div>

        <div 
          className={`bg-white rounded-3xl border border-gray-200 p-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Area Chart Simulation */}
          <div className="relative h-64 mb-8">
            <svg className="w-full h-full" viewBox="0 0 800 256" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0d5f4e" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#0d5f4e" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              
              {/* Area Fill */}
              <path
                d="M 0 256 L 0 200 Q 200 180, 400 150 T 800 100 L 800 256 Z"
                fill="url(#areaGradient)"
                className={`transition-all duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              />
              
              {/* Line */}
              <path
                d="M 0 200 Q 200 180, 400 150 T 800 100"
                fill="none"
                stroke="#0d5f4e"
                strokeWidth="3"
                className={`transition-all duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              />
              
              {/* Peak Marker */}
              <circle cx="800" cy="100" r="8" fill="#0d5f4e" className={`transition-all duration-1500 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
            </svg>
            
            {/* Peak Annotation */}
            <div 
              className={`absolute top-4 right-4 bg-[#0d5f4e] text-white px-4 py-2 rounded-lg transition-all duration-700 delay-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            >
              <div className="text-2xl font-light">4.2%</div>
              <div className="text-xs opacity-80">Peak: Dec 2025</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>2024</span>
            <a 
              href="https://www.hiringlab.org/2026/01/22/january-labor-market-update-jobs-mentioning-ai-are-growing-amid-broader-hiring-weakness/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0d5f4e] transition-colors flex items-center gap-1"
            >
              Source: Indeed Hiring Lab <ExternalLink className="w-3 h-3" />
            </a>
            <span>2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Fastest Growing Jobs Section
function FastestGrowingJobsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
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
    {
      role: 'AI/ML Engineer',
      growth: 'Fastest-growing (3yr)',
      demand: 'High',
      industries: 'Tech, Finance, Data centers',
      type: 'measured',
      skills: ['Python', 'PyTorch', 'TensorFlow', 'Cloud'],
      tasks: 'Build and deploy ML models, optimize performance'
    },
    {
      role: 'Data Scientist',
      growth: '35× (gen AI postings)',
      demand: 'High',
      industries: 'Tech, Retail, Manufacturing',
      type: 'measured',
      skills: ['SQL', 'Statistics', 'ML', 'Business Intelligence'],
      tasks: 'Analyze data, build predictive models, insights'
    },
    {
      role: 'AI Product Manager',
      growth: 'High',
      demand: 'Medium-High',
      industries: 'Tech/SaaS',
      type: 'implied',
      skills: ['Product Strategy', 'LLMs', 'APIs', 'Roadmapping'],
      tasks: 'Define AI product vision, prioritize features'
    },
    {
      role: 'AI Research Scientist',
      growth: 'Sustained demand',
      demand: 'High',
      industries: 'Tech, Academia',
      type: 'measured',
      skills: ['Deep Learning', 'Research', 'Publications', 'Math'],
      tasks: 'Advance AI capabilities, publish research'
    },
    {
      role: 'MLOps Engineer',
      growth: 'High',
      demand: 'High',
      industries: 'Tech, Logistics',
      type: 'measured',
      skills: ['Kubernetes', 'CI/CD', 'Monitoring', 'Infra'],
      tasks: 'Deploy and scale ML systems in production'
    },
    {
      role: 'Prompt Engineer',
      growth: 'Declining relevance',
      demand: 'Medium',
      industries: 'Marketing',
      type: 'measured',
      skills: ['LLMs', 'Copywriting', 'Testing', 'Iteration'],
      tasks: 'Optimize prompts for AI applications'
    },
    {
      role: 'AI Safety Specialist',
      growth: 'Emerging high',
      demand: 'High',
      industries: 'Tech, Government',
      type: 'projected',
      skills: ['Ethics', 'Red-teaming', 'Policy', 'Risk'],
      tasks: 'Ensure AI systems are safe and aligned'
    },
    {
      role: 'Robotics Engineer',
      growth: '470k created',
      demand: 'Medium',
      industries: 'Manufacturing, Logistics',
      type: 'projected',
      skills: ['Robotics', 'Computer Vision', 'Control Systems'],
      tasks: 'Design and program autonomous systems'
    }
  ];

  const getDemandColor = (demand: string) => {
    if (demand === 'High') return 'bg-[#0d5f4e]/10 text-[#0d5f4e]';
    if (demand === 'Medium-High') return 'bg-blue-100 text-blue-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Market Demand
          </span>
          <h2 className="text-5xl lg:text-6xl text-gray-900 tracking-tight">
            Fastest-Growing <span className="italic font-light">AI Jobs</span>
          </h2>
        </div>

        <div 
          className={`bg-white rounded-3xl border border-gray-200 overflow-hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-8 py-4 text-left text-xs uppercase tracking-[0.2em] text-gray-500">Role</th>
                  <th className="px-8 py-4 text-left text-xs uppercase tracking-[0.2em] text-gray-500">Growth Rate</th>
                  <th className="px-8 py-4 text-left text-xs uppercase tracking-[0.2em] text-gray-500">Demand</th>
                  <th className="px-8 py-4 text-left text-xs uppercase tracking-[0.2em] text-gray-500">Industries</th>
                  <th className="px-8 py-4 text-center text-xs uppercase tracking-[0.2em] text-gray-500">Type</th>
                  <th className="px-8 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
                  <tr 
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors cursor-pointer"
                    onClick={() => setExpandedRow(expandedRow === index ? null : index)}
                  >
                    <td className="px-8 py-6">
                      <div className="font-medium text-gray-900">{job.role}</div>
                    </td>
                    <td className="px-8 py-6 text-gray-700">{job.growth}</td>
                    <td className="px-8 py-6">
                      <div className={`inline-flex px-3 py-1 rounded-full text-xs ${getDemandColor(job.demand)}`}>
                        {job.demand}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm text-gray-600">{job.industries}</td>
                    <td className="px-8 py-6 text-center">
                      <div className={`inline-flex px-2 py-1 rounded text-xs ${
                        job.type === 'measured' 
                          ? 'bg-[#0d5f4e]/10 text-[#0d5f4e]' 
                          : job.type === 'projected'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {job.type}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      {expandedRow === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Expanded Row Detail */}
          {expandedRow !== null && (
            <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">Key Skills</div>
                  <div className="flex flex-wrap gap-2">
                    {jobs[expandedRow].skills.map((skill, i) => (
                      <div key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">Example Tasks</div>
                  <p className="text-sm text-gray-700 leading-relaxed">{jobs[expandedRow].tasks}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Emerging Roles Section
function EmergingRolesSection() {
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

  const roles = [
    {
      title: 'AI Agent Architect',
      description: 'Design and orchestrate multi-agent AI systems',
      whyNow: 'Agentic AI is moving from research to production',
      skills: ['LLMs', 'Orchestration', 'System Design', 'APIs'],
      hirers: 'AI Startups, Enterprise Tech',
      demand: 'High',
      type: 'projected',
      icon: GitBranch
    },
    {
      title: 'AI Operations Manager',
      description: 'Manage AI systems in production environments',
      whyNow: 'Companies scaling from pilots to production',
      skills: ['MLOps', 'Monitoring', 'Cost Optimization', 'SRE'],
      hirers: 'Tech Companies, Finance',
      demand: 'High',
      type: 'measured',
      icon: Settings
    },
    {
      title: 'Human-AI Interaction Designer',
      description: 'Design UX for AI-powered products',
      whyNow: 'Mainstream AI adoption requires intuitive interfaces',
      skills: ['UX Design', 'Prompt Design', 'Psychology', 'Testing'],
      hirers: 'Product Teams, Agencies',
      demand: 'Medium-High',
      type: 'measured',
      icon: Eye
    },
    {
      title: 'Model Risk Analyst',
      description: 'Assess bias, fairness, and compliance risks',
      whyNow: 'Regulatory pressure and ethical concerns',
      skills: ['Statistics', 'Ethics', 'Compliance', 'Auditing'],
      hirers: 'Finance, Healthcare, Gov',
      demand: 'High',
      type: 'projected',
      icon: Shield
    },
    {
      title: 'AI Policy Lead',
      description: 'Shape AI governance and ethical frameworks',
      whyNow: 'Safety and regulation becoming critical',
      skills: ['Policy', 'Law', 'Ethics', 'Tech Strategy'],
      hirers: 'Tech Companies, Government',
      demand: 'Emerging High',
      type: 'projected',
      icon: FileText
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Next Wave
          </span>
          <h2 className="text-5xl lg:text-6xl text-gray-900 tracking-tight">
            Emerging <span className="italic font-light">AI Roles</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-[#0d5f4e]/20 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0d5f4e]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
                  </div>
                  <div className={`px-2 py-1 rounded text-xs ${
                    role.type === 'measured' 
                      ? 'bg-[#0d5f4e]/10 text-[#0d5f4e]' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {role.type}
                  </div>
                </div>

                <h3 className="text-xl text-gray-900 mb-3 leading-snug">{role.title}</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{role.description}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Why Now</div>
                    <p className="text-sm text-gray-700">{role.whyNow}</p>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Key Skills</div>
                    <div className="flex flex-wrap gap-1.5">
                      {role.skills.map((skill, i) => (
                        <div key={i} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500 mb-1">Who's Hiring</div>
                  <div className="text-sm text-gray-700">{role.hirers}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Salary Benchmark Section
function SalaryBenchmarkSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [view, setView] = useState<'table' | 'chart'>('table');
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

  const salaries = [
    {
      role: 'AI/ML Engineer',
      median: '$180-200k',
      junior: '$140-160k',
      senior: '$220k+',
      growth: '20% YoY',
      equity: 'Common in startups'
    },
    {
      role: 'Data Scientist',
      median: '$160k',
      junior: '$120-140k',
      senior: '$200k+',
      growth: '15-28%',
      equity: 'Moderate'
    },
    {
      role: 'AI Product Manager',
      median: '$170k',
      junior: '$130-150k',
      senior: '$210k+',
      growth: '18%',
      equity: 'High in Big Tech'
    },
    {
      role: 'MLOps Engineer',
      median: '$175k',
      junior: '$135k',
      senior: '$220k',
      growth: '25%',
      equity: 'Startup equity heavy'
    },
    {
      role: 'AI Research Scientist',
      median: '$190k',
      junior: '$150k',
      senior: '$250k+',
      growth: '22%',
      equity: 'Heavy equity component'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
              Compensation
            </span>
            <h2 className="text-5xl lg:text-6xl text-gray-900 tracking-tight">
              Salary <span className="italic font-light">Benchmarks</span>
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setView('table')}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                view === 'table'
                  ? 'bg-[#0d5f4e] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Table View
            </button>
            <button
              onClick={() => setView('chart')}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                view === 'chart'
                  ? 'bg-[#0d5f4e] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Chart View
            </button>
          </div>
        </div>

        {view === 'table' ? (
          <div 
            className={`bg-white rounded-3xl border border-gray-200 overflow-hidden transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-8 py-4 text-left text-xs uppercase tracking-[0.2em] text-gray-500">Role</th>
                    <th className="px-8 py-4 text-left text-xs uppercase tracking-[0.2em] text-gray-500">Median (US)</th>
                    <th className="px-8 py-4 text-left text-xs uppercase tracking-[0.2em] text-gray-500">Junior Range</th>
                    <th className="px-8 py-4 text-left text-xs uppercase tracking-[0.2em] text-gray-500">Senior Range</th>
                    <th className="px-8 py-4 text-left text-xs uppercase tracking-[0.2em] text-gray-500">Growth Rate</th>
                    <th className="px-8 py-4 text-left text-xs uppercase tracking-[0.2em] text-gray-500">Equity Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {salaries.map((salary, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                      <td className="px-8 py-6 font-medium text-gray-900">{salary.role}</td>
                      <td className="px-8 py-6 text-[#0d5f4e] font-medium">{salary.median}</td>
                      <td className="px-8 py-6 text-gray-700">{salary.junior}</td>
                      <td className="px-8 py-6 text-gray-700">{salary.senior}</td>
                      <td className="px-8 py-6">
                        <div className="inline-flex px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          {salary.growth}
                        </div>
                      </td>
                      <td className="px-8 py-6 text-sm text-gray-600">{salary.equity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
              <p className="text-xs text-gray-500 italic">
                Ranges vary by location and total compensation structure; global medians often 20–40% lower (estimate).
              </p>
            </div>
          </div>
        ) : (
          <div 
            className={`bg-white rounded-3xl border border-gray-200 p-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="space-y-8">
              {salaries.map((salary, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-900">{salary.role}</span>
                    <span className="text-lg font-light text-[#0d5f4e]">{salary.median}</span>
                  </div>
                  <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${((index + 1) / salaries.length) * 100}%`,
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>{salary.junior}</span>
                    <span>{salary.senior}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Automation Risk Section
function AutomationRiskSection() {
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
    { role: 'Data Entry', automatable: 85, timeline: 'Near-term', outcome: 'Disappears' },
    { role: 'Basic Content Writing', automatable: 65, timeline: 'Near-term', outcome: 'Transforms' },
    { role: 'Customer Support Tier 1', automatable: 55, timeline: 'Near-term', outcome: 'Shrinks 37%' },
    { role: 'QA/Manual Testing', automatable: 70, timeline: 'Near-term', outcome: 'Oversight role' },
    { role: 'Bookkeeping', automatable: 65, timeline: 'Medium-term', outcome: 'AI-augmented' }
  ];

  const getRiskColor = (percentage: number) => {
    if (percentage >= 75) return 'bg-red-500';
    if (percentage >= 60) return 'bg-orange-500';
    return 'bg-yellow-500';
  };

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Displacement Risk
          </span>
          <h2 className="text-5xl lg:text-6xl text-gray-900 tracking-tight mb-6">
            Jobs at Risk of <span className="italic font-light">Automation</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Task-level automation pressure. Not job-level certainty.
          </p>
        </div>

        <div 
          className={`bg-white rounded-3xl border border-gray-200 overflow-hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-8 py-4 text-left text-xs uppercase tracking-[0.2em] text-gray-500">Role</th>
                  <th className="px-8 py-4 text-left text-xs uppercase tracking-[0.2em] text-gray-500">Tasks Automatable</th>
                  <th className="px-8 py-4 text-left text-xs uppercase tracking-[0.2em] text-gray-500">Timeline</th>
                  <th className="px-8 py-4 text-left text-xs uppercase tracking-[0.2em] text-gray-500">Outcome</th>
                </tr>
              </thead>
              <tbody>
                {risks.map((risk, index) => (
                  <tr 
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-8 py-6 font-medium text-gray-900">{risk.role}</td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${getRiskColor(risk.automatable)} transition-all duration-1000`}
                            style={{ 
                              width: `${isVisible ? risk.automatable : 0}%`,
                              transitionDelay: `${index * 100}ms`
                            }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700 w-16">{risk.automatable}%</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="inline-flex px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                        {risk.timeline}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-700">{risk.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <p className="text-xs text-gray-600 leading-relaxed">
              These percentages represent task-level automation potential, not certainty of job elimination. Many roles will transform rather than disappear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Matrix Section
function SkillsMatrixSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('All');
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

  const skills = [
    {
      role: 'AI/ML Engineer',
      tableStakes: ['Python', 'PyTorch', 'Cloud'],
      rare: ['Agent systems', 'Custom models'],
      category: 'Engineer'
    },
    {
      role: 'Data Scientist',
      tableStakes: ['SQL', 'Pipelines', 'Statistics'],
      rare: ['Causal AI', 'Domain expertise'],
      category: 'Engineer'
    },
    {
      role: 'AI Product Manager',
      tableStakes: ['LLMs', 'APIs'],
      rare: ['Ethics', 'Orchestration'],
      category: 'PM'
    },
    {
      role: 'MLOps Engineer',
      tableStakes: ['Kubernetes', 'Monitoring'],
      rare: ['Scaling agentic AI'],
      category: 'Ops'
    },
    {
      role: 'AI Safety Specialist',
      tableStakes: ['Bias detection'],
      rare: ['Red-teaming', 'Gov frameworks'],
      category: 'Safety'
    }
  ];

  const filters = ['All', 'Engineer', 'PM', 'Safety', 'Ops'];

  const filteredSkills = filter === 'All' 
    ? skills 
    : skills.filter(s => s.category === filter);

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
              Skill Requirements
            </span>
            <h2 className="text-5xl lg:text-6xl text-gray-900 tracking-tight">
              Skills <span className="italic font-light">Matrix</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  filter === f
                    ? 'bg-[#0d5f4e] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div 
          className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-[#0d5f4e]/20 transition-all duration-500"
            >
              <h3 className="text-xl text-gray-900 mb-6">{skill.role}</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                    Table Stakes
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.tableStakes.map((s, i) => (
                      <div key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] mb-3">
                    Rare / High-Value
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.rare.map((s, i) => (
                      <div key={i} className="px-3 py-1 bg-[#0d5f4e]/10 border border-[#0d5f4e]/20 rounded-full text-sm text-[#0d5f4e]">
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 italic">
            Human skills (judgment, ambiguity, communication) remain universally high-value.
          </p>
        </div>
      </div>
    </section>
  );
}

// Not Replaced Section
function NotReplacedSection() {
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

  const roles = [
    {
      title: 'Product Leadership',
      whyHuman: 'Strategy and accountability require human judgment',
      howAI: 'AI provides data and scenarios, humans decide tradeoffs'
    },
    {
      title: 'Strategy',
      whyHuman: 'Ambiguity and context-dependent decision making',
      howAI: 'AI runs scenarios and analysis, humans choose direction'
    },
    {
      title: 'Complex Engineering',
      whyHuman: 'Integration, reliability, and system thinking',
      howAI: 'AI accelerates coding, humans ensure quality and architecture'
    },
    {
      title: 'Healthcare',
      whyHuman: 'Empathy, trust, and ethical decision-making',
      howAI: 'AI augments diagnostics and documentation'
    },
    {
      title: 'Skilled Trades',
      whyHuman: 'Physical variability and problem-solving in real environments',
      howAI: 'AI helps with scheduling, diagnostics; slow replacement'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Human Advantage
          </span>
          <h2 className="text-5xl lg:text-6xl text-gray-900 tracking-tight mb-8">
            Not Replaced, <span className="italic font-light">Re-shaped</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            AI augments human capability. It doesn't eliminate the need for judgment, empathy, and strategic thinking.
          </p>
        </div>

        <div className="space-y-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-[#0d5f4e]/20 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl text-gray-900 mb-2">{role.title}</h3>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                    Why Human-Led
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{role.whyHuman}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] mb-2">
                    How AI Helps
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{role.howAI}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Methodology Section
function MethodologySection({ methodologyOpen, setMethodologyOpen }: any) {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Research Foundation
          </span>
          <h2 className="text-5xl lg:text-6xl text-gray-900 tracking-tight">
            Sources & <span className="italic font-light">Methodology</span>
          </h2>
        </div>

        <div className="space-y-6 mb-12">
          <a 
            href="https://www.weforum.org/stories/2026/01/ai-has-already-added-1-3-million-new-jobs-according-to-linkedin-data/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#0d5f4e]/20 hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-[#0d5f4e]" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">WEF / LinkedIn Report</div>
                <div className="text-xs text-gray-500">1.3M jobs, +70% YoY skill demand</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#0d5f4e] group-hover:translate-x-1 transition-all" strokeWidth={1.5} />
          </a>

          <a 
            href="https://www.hiringlab.org/2026/01/22/january-labor-market-update-jobs-mentioning-ai-are-growing-amid-broader-hiring-weakness/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#0d5f4e]/20 hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-[#0d5f4e]" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Indeed Hiring Lab</div>
                <div className="text-xs text-gray-500">4.2% peak AI mentions in job postings</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#0d5f4e] group-hover:translate-x-1 transition-all" strokeWidth={1.5} />
          </a>

          <a 
            href="https://www.pwc.com/gx/en/news-room/press-releases/2024/pwc-2024-global-ai-jobs-barometer.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#0d5f4e]/20 hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-[#0d5f4e]" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">PwC AI Jobs Barometer</div>
                <div className="text-xs text-gray-500">4.8× productivity growth in AI-exposed sectors</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#0d5f4e] group-hover:translate-x-1 transition-all" strokeWidth={1.5} />
          </a>

          <a 
            href="https://www.index.dev/blog/ai-job-growth-statistics"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#0d5f4e]/20 hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-[#0d5f4e]" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Index.dev Research</div>
                <div className="text-xs text-gray-500">8.8% of ICT jobs require AI skills</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#0d5f4e] group-hover:translate-x-1 transition-all" strokeWidth={1.5} />
          </a>
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
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Measured vs Projected</div>
                  <p>
                    "Measured" indicates data from actual job postings, hiring patterns, or published research. 
                    "Projected" indicates forecasts based on economic models or expert estimates.
                  </p>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Definitions</div>
                  <p>
                    AI mentions: job postings that explicitly reference AI, machine learning, or related terms. 
                    AI skills: specific technical competencies required for AI-related work.
                    AI roles: positions primarily focused on developing or deploying AI systems.
                  </p>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Limitations</div>
                  <p>
                    Job posting data represents employer intent, not actual hires. Geographic coverage varies by source. 
                    Salary ranges reflect US market; global compensation may differ significantly. 
                    Automation risk percentages are task-level estimates, not job elimination certainty.
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
