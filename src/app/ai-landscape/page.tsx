import { useEffect, useRef, useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Award,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Download,
  Globe2,
  Target,
  Zap
} from 'lucide-react';

export default function AILandscapePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGoHome = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'home' }));
  };

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf8]/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
          <button 
            onClick={handleGoHome}
            className="text-2xl text-gray-900 hover:text-[#0d5f4e] transition-colors"
          >
            StartupAI
          </button>
          <div className="text-xs text-gray-500 uppercase tracking-wider">
            {Math.round(scrollProgress)}% Complete
          </div>
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              scrollProgress >= (i + 1) * 10 ? 'bg-[#0d5f4e]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* SECTION 1 — Hero */}
      <section 
        ref={(el) => (sectionsRef.current[0] = el)}
        className="min-h-screen flex items-center pt-24 pb-16"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Title + Subtitle + CTA */}
            <div className="space-y-8 animate-[fadeIn_0.8s_ease-out]">
              <div className="space-y-4">
                <div className="text-xs uppercase tracking-[0.3em] text-[#0d5f4e] font-medium">
                  Data-Driven Insights
                </div>
                <h1 className="text-5xl lg:text-7xl leading-tight text-gray-900">
                  AI Accelerators: <span className="text-[#0d5f4e]">The Data</span> Behind the Hype
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Acceptance rates, funding terms, and outcomes — in one clean view.
                </p>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => sectionsRef.current[1]?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-[#0d5f4e] text-white rounded-md hover:bg-[#0a4d3e] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Explore the stats
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-md hover:border-[#0d5f4e] hover:text-[#0d5f4e] transition-all duration-300">
                  Download report
                </button>
              </div>
            </div>

            {/* Right: Infographic Preview Card */}
            <div className="relative animate-[fadeIn_0.8s_ease-out_0.2s_both]">
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Quick Stats</h3>
                  
                  {/* Mini bar chart preview */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-[#0d5f4e] h-full rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 min-w-[60px] text-right">85%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-[#0d5f4e] h-full rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 min-w-[60px] text-right">75%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-[#0d5f4e] h-full rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 min-w-[60px] text-right">60%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-[#0d5f4e] h-full rounded-full" style={{ width: '40%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600 min-w-[60px] text-right">40%</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      Comprehensive analysis of 50+ accelerator programs globally
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — KPI Strip */}
      <KPIStrip ref={(el) => (sectionsRef.current[1] = el)} />

      {/* SECTION 3 — Acceptance Rates Chart */}
      <AcceptanceRatesChart ref={(el) => (sectionsRef.current[2] = el)} />

      {/* SECTION 4 — Funding Terms */}
      <FundingTerms ref={(el) => (sectionsRef.current[3] = el)} />

      {/* SECTION 5 — Funding Trend Line Chart */}
      <FundingTrendChart ref={(el) => (sectionsRef.current[4] = el)} />

      {/* SECTION 6 — Outcomes Funnel */}
      <OutcomesFunnel ref={(el) => (sectionsRef.current[5] = el)} />

      {/* SECTION 7 — Top Programs */}
      <TopPrograms ref={(el) => (sectionsRef.current[6] = el)} />

      {/* SECTION 8 — Geography Map */}
      <GeographySection ref={(el) => (sectionsRef.current[7] = el)} />

      {/* SECTION 9 — Success Factors */}
      <SuccessFactors ref={(el) => (sectionsRef.current[8] = el)} />

      {/* SECTION 10 — Final CTA */}
      <FinalCTASection ref={(el) => (sectionsRef.current[9] = el)} />

      {/* Footer */}
      <footer className="bg-[#fafaf8] border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <button 
              onClick={handleGoHome}
              className="text-2xl text-gray-900 hover:text-[#0d5f4e] transition-colors"
            >
              StartupAI
            </button>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} StartupAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// KPI Strip Component
const KPIStrip = React.forwardRef<HTMLElement>((props, ref) => {
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

  const kpis = [
    { icon: Globe2, number: '50+', label: 'AI Accelerators', caption: 'Globally active programs' },
    { icon: Target, number: '~4%', label: 'Acceptance Rate', caption: 'Average across all tiers' },
    { icon: DollarSign, number: '$250K', label: 'Median Funding', caption: 'Typical accelerator check' },
    { icon: TrendingUp, number: '75–85%', label: 'Follow-on Rate', caption: 'Raise next round' },
  ];

  return (
    <section ref={(el) => { sectionRef.current = el; if (ref && typeof ref !== 'function') ref.current = el; }} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#0d5f4e]/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-4xl font-light text-gray-900 mb-2">{kpi.number}</div>
                    <div className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-1">
                      {kpi.label}
                    </div>
                    <div className="text-sm text-gray-500">{kpi.caption}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

// Acceptance Rates Chart Component
const AcceptanceRatesChart = React.forwardRef<HTMLElement>((props, ref) => {
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

  const data = [
    { label: 'Top-tier', rate: 2, maxRate: 10 },
    { label: 'Mid-tier', rate: 4.5, maxRate: 10 },
    { label: 'University', rate: 7.5, maxRate: 10 },
    { label: 'Overall Avg', rate: 4, maxRate: 10 },
  ];

  return (
    <section ref={(el) => { sectionRef.current = el; if (ref && typeof ref !== 'function') ref.current = el; }} className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Acceptance Rates <span className="text-[#0d5f4e]">by Program Type</span>
          </h2>
          <p className="text-lg text-gray-600">Competition varies significantly across accelerator tiers</p>
        </div>

        <div className="space-y-8">
          {data.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="text-2xl font-light text-gray-900">{item.rate}%</span>
              </div>
              <div className="relative h-12 bg-gray-100 rounded-md overflow-hidden">
                <div
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] transition-all duration-1000 ease-out ${
                    isVisible ? 'w-full' : 'w-0'
                  }`}
                  style={{ 
                    width: isVisible ? `${(item.rate / item.maxRate) * 100}%` : '0%',
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-end pr-4">
                    <span className="text-white text-sm font-medium">{item.rate}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-[#fafaf8] rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600">
            <strong className="text-gray-900">Note:</strong> Top-tier programs (Y Combinator, Techstars AI) 
            accept 1–3% of applicants. University-backed programs typically have higher acceptance rates 
            but may offer less funding.
          </p>
        </div>
      </div>
    </section>
  );
});

// Funding Terms Component
const FundingTerms = React.forwardRef<HTMLElement>((props, ref) => {
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

  const terms = [
    { label: 'Funding Range', min: 100, max: 500, median: 250, unit: 'K' },
    { label: 'Equity Taken', min: 5, max: 7, median: 6, unit: '%' },
    { label: 'Time to Series A', min: 6, max: 12, median: 9, unit: 'mo' },
    { label: 'Series A Size', min: 3, max: 10, median: 6.5, unit: 'M' },
  ];

  return (
    <section ref={(el) => { sectionRef.current = el; if (ref && typeof ref !== 'function') ref.current = el; }} className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Typical Accelerator <span className="text-[#0d5f4e]">Deal Terms</span>
          </h2>
          <p className="text-lg text-gray-600">Standard ranges and median values across programs</p>
        </div>

        <div className="space-y-12">
          {terms.map((term, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                  {term.label}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-500">
                    ${term.min}{term.unit} – ${term.max}{term.unit}
                  </span>
                  <span className="text-lg font-medium text-[#0d5f4e]">
                    (median: ${term.median}{term.unit})
                  </span>
                </div>
              </div>
              
              <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`absolute inset-y-0 left-0 bg-[#0d5f4e]/20 rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: isVisible ? '100%' : '0%',
                    transitionDelay: `${index * 150}ms`
                  }}
                />
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0d5f4e] rounded-full border-2 border-white shadow-lg transition-all duration-1000 ease-out`}
                  style={{
                    left: isVisible ? `${((term.median - term.min) / (term.max - term.min)) * 100}%` : '0%',
                    transitionDelay: `${index * 150 + 400}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Funding Trend Chart Component
const FundingTrendChart = React.forwardRef<HTMLElement>((props, ref) => {
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

  const data = [
    { year: '2020', amount: 200 },
    { year: '2021', amount: 300 },
    { year: '2022', amount: 400 },
    { year: '2023', amount: 500 },
    { year: '2024', amount: 600, projected: true },
  ];

  const maxAmount = 700;

  return (
    <section ref={(el) => { sectionRef.current = el; if (ref && typeof ref !== 'function') ref.current = el; }} className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Accelerator Funding <span className="text-[#0d5f4e]">Deployed to AI Startups</span>
          </h2>
          <p className="text-lg text-gray-600">Year-over-year growth in total capital deployed</p>
        </div>

        <div className="relative h-80 border-l border-b border-gray-200">
          {/* Y-axis labels */}
          <div className="absolute -left-16 top-0 bottom-0 flex flex-col justify-between text-sm text-gray-500">
            <span>$700M</span>
            <span>$500M</span>
            <span>$300M</span>
            <span>$0</span>
          </div>

          {/* Line chart */}
          <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 500 320" preserveAspectRatio="none">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((percent) => (
              <line
                key={percent}
                x1="0"
                y1={`${100 - percent}%`}
                x2="100%"
                y2={`${100 - percent}%`}
                stroke="#e5e7eb"
                strokeWidth="1"
              />
            ))}

            {/* Data line */}
            <polyline
              points={data.map((d, i) => `${(i / (data.length - 1)) * 100}%,${100 - (d.amount / maxAmount) * 100}%`).join(' ')}
              fill="none"
              stroke="#0d5f4e"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-all duration-1500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{
                strokeDasharray: isVisible ? 'none' : '1000',
                strokeDashoffset: isVisible ? '0' : '1000',
              }}
            />

            {/* Data points */}
            {data.map((d, i) => (
              <g key={i}>
                <circle
                  cx={`${(i / (data.length - 1)) * 100}%`}
                  cy={`${100 - (d.amount / maxAmount) * 100}%`}
                  r="6"
                  fill={d.projected ? '#6b9d89' : '#0d5f4e'}
                  className={`transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                  style={{ transitionDelay: `${i * 200 + 800}ms` }}
                />
              </g>
            ))}
          </svg>

          {/* X-axis labels */}
          <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-sm text-gray-600">
            {data.map((d, i) => (
              <span key={i} className={d.projected ? 'text-[#6b9d89] font-medium' : ''}>
                {d.year}
                {d.projected && '*'}
              </span>
            ))}
          </div>

          {/* Latest annotation */}
          {isVisible && (
            <div 
              className="absolute bg-[#0d5f4e] text-white text-xs px-3 py-1 rounded-md shadow-lg animate-[fadeIn_0.5s_ease-out_1.5s_both]"
              style={{ right: '0%', top: '10%' }}
            >
              Projected growth continues
            </div>
          )}
        </div>

        <p className="text-sm text-gray-500 text-center mt-12">
          * 2024 figures are projected based on Q1-Q2 data
        </p>
      </div>
    </section>
  );
});

// Outcomes Funnel Component
const OutcomesFunnel = React.forwardRef<HTMLElement>((props, ref) => {
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
    { label: 'Enter Cohort', percent: 100, count: '100 startups' },
    { label: 'Raise Follow-on Funding', percent: 80, count: '75–85 startups' },
    { label: 'Exit within 5 years', percent: 20, count: '15–25 startups' },
  ];

  return (
    <section ref={(el) => { sectionRef.current = el; if (ref && typeof ref !== 'function') ref.current = el; }} className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            What Happens <span className="text-[#0d5f4e]">After the Accelerator?</span>
          </h2>
          <p className="text-lg text-gray-600">Typical outcomes across cohort lifecycle</p>
        </div>

        <div className="space-y-6">
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                width: `${stage.percent}%`,
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              <div className="bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] p-8 rounded-lg shadow-lg text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-light mb-1">{stage.label}</div>
                    <div className="text-sm opacity-90">{stage.count}</div>
                  </div>
                  <div className="text-4xl font-light">{stage.percent}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 text-center mt-12">
          Ranges vary by program tier and industry vertical
        </p>
      </div>
    </section>
  );
});

// Top Programs Component
const TopPrograms = React.forwardRef<HTMLElement>((props, ref) => {
  const programs = [
    {
      name: 'AI2 Incubator',
      metric: '90%+',
      label: 'Follow-on funding rate',
      description: 'Allen Institute backed, top-tier outcomes',
      badge: 'Strong Outcomes'
    },
    {
      name: 'CDL AI Stream',
      metric: '85%+',
      label: 'Follow-on funding rate',
      description: '$2B+ in alumni funding raised',
      badge: 'Strong Outcomes'
    },
    {
      name: 'NextAI',
      metric: '80%+',
      label: 'Follow-on funding rate',
      description: 'Canada-based, exceptional network',
      badge: 'Strong Outcomes'
    },
    {
      name: 'AI Nexus Lab',
      metric: '75%+',
      label: 'Follow-on funding rate',
      description: 'Enterprise AI focus, corporate partnerships',
      badge: 'Strong Outcomes'
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Top AI Accelerators <span className="text-[#0d5f4e]">(By Outcomes)</span>
          </h2>
          <p className="text-lg text-gray-600">Programs with the strongest track records</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <Award className="w-8 h-8 text-[#0d5f4e] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  <span className="px-2 py-1 bg-[#0d5f4e]/10 text-[#0d5f4e] text-xs rounded-full">
                    {program.badge}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{program.name}</h3>
                  <div className="text-4xl font-light text-[#0d5f4e] mb-1">{program.metric}</div>
                  <div className="text-sm text-gray-600 mb-3">{program.label}</div>
                  <p className="text-sm text-gray-500">{program.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Geography Section Component
const GeographySection = React.forwardRef<HTMLElement>((props, ref) => {
  const [activeView, setActiveView] = useState<'region' | 'country'>('region');
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

  const regions = [
    { name: 'North America', count: 35, countries: ['US: 30+', 'Canada: 5+'] },
    { name: 'Europe', count: 10, countries: ['UK: 5+', 'France: 3+', 'Germany: 2+'] },
    { name: 'Asia', count: 18, countries: ['China: 10+', 'Singapore: 3+', 'India: 5+'] },
  ];

  return (
    <section ref={(el) => { sectionRef.current = el; if (ref && typeof ref !== 'function') ref.current = el; }} className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Where AI Accelerators Are <span className="text-[#0d5f4e]">Concentrated</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">Global distribution of active programs</p>
          
          <div className="inline-flex gap-2 p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setActiveView('region')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeView === 'region' 
                  ? 'bg-white text-[#0d5f4e] shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              By Region
            </button>
            <button
              onClick={() => setActiveView('country')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeView === 'country' 
                  ? 'bg-white text-[#0d5f4e] shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              By Country
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {regions.map((region, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-lg p-8 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{region.name}</h3>
                  <Globe2 className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
                </div>
                
                <div className="text-5xl font-light text-[#0d5f4e]">
                  {isVisible ? region.count : 0}+
                </div>
                
                {activeView === 'country' && (
                  <div className="pt-4 border-t border-gray-200 space-y-2">
                    {region.countries.map((country, i) => (
                      <div key={i} className="text-sm text-gray-600">
                        {country}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Success Factors Component
const SuccessFactors = React.forwardRef<HTMLElement>((props, ref) => {
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

  const successFactors = [
    { factor: 'Strong technical team', percent: 85 },
    { factor: 'Clear use case', percent: 80 },
    { factor: '$1B+ market opportunity', percent: 90 },
    { factor: 'Unique data advantage', percent: 75 },
    { factor: 'Early traction', percent: 70 },
  ];

  const challenges = [
    { challenge: 'Hiring ML engineers', percent: 70 },
    { challenge: 'Deployment complexity', percent: 60 },
    { challenge: 'Data acquisition', percent: 50 },
    { challenge: 'Regulatory compliance', percent: 30 },
  ];

  return (
    <section ref={(el) => { sectionRef.current = el; if (ref && typeof ref !== 'function') ref.current = el; }} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            What Makes <span className="text-[#0d5f4e]">Teams Win</span>
          </h2>
          <p className="text-lg text-gray-600">Success factors vs. common challenges</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Success Factors */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-900 mb-8 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-[#0d5f4e]" />
              Success Factors
            </h3>
            
            <div className="space-y-4">
              {successFactors.map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-700">{item.factor}</span>
                    <span className="text-lg font-medium text-[#0d5f4e]">{item.percent}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0d5f4e] rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${item.percent}%` : '0%',
                        transitionDelay: `${index * 100 + 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Challenges */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-900 mb-8 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-gray-400" />
              Common Challenges
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {challenges.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 border border-gray-200 rounded-lg p-6 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">{item.challenge}</span>
                    <span className="text-2xl font-light text-gray-600">{item.percent}%</span>
                  </div>
                  <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gray-400 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${item.percent}%` : '0%',
                        transitionDelay: `${index * 150 + 300}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

// Final CTA Section Component
const FinalCTASection = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-32 lg:py-40">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] rounded-2xl p-12 lg:p-16 shadow-2xl animate-[fadeIn_0.8s_ease-out] relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-white/5 rounded-2xl animate-[pulse_4s_ease-in-out_infinite]" />
          
          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl text-white leading-tight">
                Use these stats to plan your next move.
              </h2>
              <p className="text-xl text-white/90">
                Data-driven insights meet AI-powered execution
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#0d5f4e] rounded-md hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 font-medium">
                Generate my accelerator strategy
                <Zap className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-md hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                Download summary
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-8 border-t border-white/20">
              <p className="text-sm text-white/80">
                Explainable AI. Human approval. Audit trail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

// Add React import for forwardRef
import React from 'react';
