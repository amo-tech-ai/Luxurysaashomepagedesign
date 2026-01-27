import { useEffect, useRef, useState } from 'react';
import { 
  TrendingUp, 
  Zap, 
  Shield, 
  Users,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  Download,
  ArrowRight,
  Factory,
  Stethoscope,
  Code,
  ShoppingCart,
  Banknote,
  Cpu,
  Target,
  LineChart,
  Activity,
  Award,
  Eye,
  ChevronRight
} from 'lucide-react';

export default function AIAdoption2025Page() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Calculate active section
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= windowHeight / 2) {
          setActiveSection(index);
        }
      });
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf8]/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={handleGoHome}
              className="text-2xl text-gray-900 hover:text-[#0d5f4e] transition-colors"
            >
              StartupAI
            </button>
            <div className="flex items-center gap-6">
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                Research Report 2025
              </span>
              <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden hidden md:block">
                <div 
                  className="h-full bg-[#0d5f4e] transition-all duration-300"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Indicator - Vertical */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
        <div className="flex flex-col gap-3">
          {['Hero', 'Findings', 'Industries', 'Comparison', 'Trends', 'Risks', 'Insights', 'CTA'].map((label, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className={`text-xs text-right transition-all duration-300 ${
                activeSection === i ? 'text-[#0d5f4e] opacity-100' : 'text-gray-400 opacity-0'
              }`} style={{ width: '80px' }}>
                {label}
              </span>
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === i ? 'bg-[#0d5f4e] scale-150' : 'bg-gray-300'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 1 — Hero */}
      <HeroSection />

      {/* SECTION 2 — Key Findings */}
      <KeyFindingsSection />

      {/* SECTION 3 — Industry Breakdowns */}
      <IndustrySection 
        industry="Software & Technology"
        icon={Code}
        color="#0d5f4e"
        adoptionLevel={90}
        data={{
          uses: ['Code Generation', 'Productivity Tools', 'Testing & QA', 'Customer Support'],
          benefits: ['40% faster development', '60% less manual testing', '24/7 support automation', 'Better code quality'],
          roi: { before: 100, after: 160, metric: 'Developer Productivity' },
          example: 'Leading SaaS company automated 70% of customer support tickets, reduced response time from 4 hours to 15 minutes, while maintaining 95% satisfaction scores.'
        }}
      />

      <IndustrySection 
        industry="Healthcare"
        icon={Stethoscope}
        color="#6b9d89"
        adoptionLevel={65}
        data={{
          uses: ['Diagnostic Assistance', 'Patient Monitoring', 'Drug Discovery', 'Administrative Automation'],
          benefits: ['Earlier disease detection', 'Reduced administrative burden', 'Faster drug development', 'Better patient outcomes'],
          roi: { before: 100, after: 135, metric: 'Diagnostic Accuracy' },
          example: 'Hospital network implemented AI diagnostics for radiology, achieving 92% accuracy in early cancer detection while reducing radiologist workload by 30%.'
        }}
      />

      <IndustrySection 
        industry="Manufacturing"
        icon={Factory}
        color="#0d5f4e"
        adoptionLevel={85}
        data={{
          uses: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Robotics'],
          benefits: ['35% less downtime', 'Defect reduction', 'Optimized inventory', 'Labor efficiency'],
          roi: { before: 100, after: 155, metric: 'Operational Efficiency' },
          example: 'Auto manufacturer deployed AI quality inspection, detecting defects 99.5% accurately and reducing recall costs by $12M annually.'
        }}
      />

      <IndustrySection 
        industry="Retail & E-commerce"
        icon={ShoppingCart}
        color="#6b9d89"
        adoptionLevel={75}
        data={{
          uses: ['Personalization', 'Demand Forecasting', 'Dynamic Pricing', 'Inventory Management'],
          benefits: ['25% higher conversion', 'Better inventory turns', 'Optimized pricing', 'Customer retention'],
          roi: { before: 100, after: 145, metric: 'Sales Performance' },
          example: 'E-commerce platform used AI personalization to increase average order value by 32% and reduced cart abandonment from 68% to 45%.'
        }}
      />

      {/* SECTION 4 — Comparison Table */}
      <ComparisonTableSection />

      {/* SECTION 5 — Charts & Trends */}
      <TrendsSection />

      {/* SECTION 6 — Risks & Reality Check */}
      <RisksSection />

      {/* SECTION 7 — Insights */}
      <InsightsSection />

      {/* SECTION 8 — Final CTA */}
      <FinalCTASection />

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
              © {new Date().getFullYear()} StartupAI Research. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      ref={sectionRef}
      data-section="0"
      className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#0d5f4e]/5 rounded-full blur-3xl" 
          style={{ transform: `translateY(${scrollY * 0.2}px)` }} 
        />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#6b9d89]/5 rounded-full blur-3xl" 
          style={{ transform: `translateY(${scrollY * 0.15}px)` }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Title + Subtitle */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full">
                <Award className="w-4 h-4 text-[#0d5f4e]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-medium">
                  Research Report 2025
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl leading-tight text-gray-900 font-light">
                AI Adoption <br />
                <span className="text-[#0d5f4e]">by Industry</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                How leading industries use AI, where value is created, and what actually works.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0a4d3e] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group">
                Download Full Report
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:border-[#0d5f4e] hover:text-[#0d5f4e] transition-all duration-300">
                See Methodology
              </button>
            </div>
          </div>

          {/* Right: Key Stats Infographic */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-xl">
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-8">Key Statistics</h3>
              
              <div className="space-y-8">
                <StatCard number="70%" label="Enterprise AI Adoption" sublabel="Using AI in at least one core function" />
                <StatCard number="$2.6T" label="Projected Value" sublabel="Global AI market by 2030" />
                <StatCard number="3.2x" label="Average ROI" sublabel="For early AI adopters" />
                <StatCard number="85%" label="Success Rate" sublabel="When paired with process change" />
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Eye className="w-4 h-4" />
                  <span>Based on 500+ enterprise interviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Stat Card Component
function StatCard({ number, label, sublabel }: { number: string; label: string; sublabel: string }) {
  return (
    <div className="group">
      <div className="flex items-baseline gap-3 mb-2">
        <div className="text-4xl lg:text-5xl font-light text-[#0d5f4e] group-hover:scale-105 transition-transform duration-300">
          {number}
        </div>
        <div className="w-12 h-[1px] bg-[#0d5f4e]/30 group-hover:w-16 transition-all duration-300" />
      </div>
      <div className="text-sm font-medium text-gray-900 mb-1">{label}</div>
      <div className="text-xs text-gray-500">{sublabel}</div>
    </div>
  );
}

// Key Findings Section
function KeyFindingsSection() {
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

  const findings = [
    {
      icon: TrendingUp,
      title: '70%+ Enterprise Adoption',
      description: 'Of enterprises use AI in at least one core business function, up from 45% in 2023'
    },
    {
      icon: Target,
      title: 'Marketing Leads ROI',
      description: 'Marketing, software development, and manufacturing show fastest return on AI investment'
    },
    {
      icon: AlertTriangle,
      title: 'Value Realization Gap',
      description: 'Only 35% achieve expected ROI in first year—success requires process change'
    },
    {
      icon: Zap,
      title: 'AI-Native Advantage',
      description: 'Companies built with AI from day one see 4x faster time-to-value than retrofitted systems'
    },
    {
      icon: Shield,
      title: 'Governance Critical',
      description: 'Organizations with AI governance frameworks report 2.5x higher trust and adoption rates'
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Human factors account for 65% of AI implementation failures, not technology limitations'
    },
  ];

  return (
    <section ref={sectionRef} data-section="1" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl text-gray-900 mb-4 font-light">
            Key <span className="text-[#0d5f4e]">Findings</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Executive summary of the most important insights from our research
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {findings.map((finding, index) => {
            const Icon = finding.icon;
            return (
              <div
                key={index}
                className={`bg-[#fafaf8] border border-gray-200 rounded-xl p-8 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-[#0d5f4e]/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">{finding.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{finding.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Industry Section Component
function IndustrySection({ 
  industry, 
  icon, 
  color, 
  adoptionLevel, 
  data 
}: { 
  industry: string; 
  icon: any; 
  color: string; 
  adoptionLevel: number; 
  data: any;
}) {
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

  const Icon = icon;

  return (
    <section ref={sectionRef} data-section="2" className="py-24 lg:py-32 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Industry Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
            <Icon className="w-8 h-8" style={{ color }} strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-4xl lg:text-5xl text-gray-900 font-light">{industry}</h2>
            <p className="text-gray-600 mt-2">Industry analysis and adoption insights</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* How AI Is Used */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#0d5f4e]" />
              How AI Is Used
            </h3>
            <div className="space-y-3">
              {data.uses.map((use: string, i: number) => (
                <div key={i} className="flex items-start gap-3 group">
                  <ChevronRight className="w-5 h-5 text-[#0d5f4e] mt-0.5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                  <span className="text-gray-700">{use}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits & Advantages */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#0d5f4e]" />
              Benefits & Advantages
            </h3>
            <div className="space-y-3">
              {data.benefits.map((benefit: string, i: number) => (
                <div key={i} className="flex items-start gap-3 bg-[#0d5f4e]/5 rounded-lg p-3 hover:bg-[#0d5f4e]/10 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#0d5f4e] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Measured Results Chart */}
        <div className={`bg-white border border-gray-200 rounded-xl p-8 mb-12 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-xl font-medium text-gray-900 mb-8 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-[#0d5f4e]" />
            Measured Results — {data.roi.metric}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-sm text-gray-500 mb-2">Before AI Implementation</div>
              <div className="flex items-end gap-4">
                <div className="text-4xl font-light text-gray-400">{data.roi.before}</div>
                <div className="h-32 flex-1 bg-gray-200 rounded-t-lg flex items-end justify-center pb-2">
                  <span className="text-xs text-gray-600">Baseline</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 mb-2">After AI Implementation</div>
              <div className="flex items-end gap-4">
                <div className="text-4xl font-light text-[#0d5f4e]">{data.roi.after}</div>
                <div 
                  className="h-32 flex-1 rounded-t-lg flex items-end justify-center pb-2 relative overflow-hidden"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <div 
                    className="absolute inset-0 transition-all duration-1000 ease-out"
                    style={{ 
                      backgroundColor: color,
                      transform: isVisible ? 'translateY(0)' : 'translateY(100%)'
                    }}
                  />
                  <span className="text-xs text-white relative z-10">
                    +{data.roi.after - data.roi.before}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Adoption Level */}
        <div className={`mb-12 transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-medium text-gray-900 flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#0d5f4e]" />
              Industry Adoption Level
            </h3>
            <span className="text-3xl font-light" style={{ color }}>{adoptionLevel}%</span>
          </div>
          
          <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 flex items-center justify-between px-4 w-full text-xs text-gray-500 z-10">
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
            </div>
            <div 
              className="absolute inset-y-0 left-0 rounded-full transition-all duration-1500 ease-out"
              style={{ 
                backgroundColor: color,
                width: isVisible ? `${adoptionLevel}%` : '0%'
              }}
            />
          </div>
        </div>

        {/* Real-World Example */}
        <div className={`bg-gradient-to-br from-[#0d5f4e]/5 to-transparent border-l-4 rounded-r-xl p-8 transition-all duration-700 delay-800 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`} style={{ borderColor: color }}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${color}20` }}>
              <Award className="w-6 h-6" style={{ color }} />
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Real-World Example</h3>
              <p className="text-gray-700 leading-relaxed">{data.example}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Comparison Table Section
function ComparisonTableSection() {
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
    { name: 'Software & Tech', adoption: 'High', primaryUse: 'Productivity & Code Gen', roi: 'High', icon: Code },
    { name: 'Healthcare', adoption: 'Medium', primaryUse: 'Diagnostics & Research', roi: 'Medium', icon: Stethoscope },
    { name: 'Manufacturing', adoption: 'High', primaryUse: 'Efficiency & Quality', roi: 'High', icon: Factory },
    { name: 'Retail', adoption: 'Medium-High', primaryUse: 'Personalization & Demand', roi: 'Medium-High', icon: ShoppingCart },
    { name: 'Finance', adoption: 'High', primaryUse: 'Risk & Fraud Detection', roi: 'High', icon: Banknote },
  ];

  return (
    <section ref={sectionRef} data-section="3" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl text-gray-900 mb-4 font-light">
            Cross-Industry <span className="text-[#0d5f4e]">Comparison</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Side-by-side analysis of AI adoption and impact across sectors
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-6 text-sm uppercase tracking-wider text-gray-500 font-medium">Industry</th>
                <th className="text-left py-4 px-6 text-sm uppercase tracking-wider text-gray-500 font-medium">Adoption Level</th>
                <th className="text-left py-4 px-6 text-sm uppercase tracking-wider text-gray-500 font-medium">Primary Use Case</th>
                <th className="text-left py-4 px-6 text-sm uppercase tracking-wider text-gray-500 font-medium">ROI Impact</th>
              </tr>
            </thead>
            <tbody>
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <tr 
                    key={index}
                    className={`border-b border-gray-100 hover:bg-[#0d5f4e]/5 transition-all duration-300 ${
                      index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'
                    } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <td className="py-6 px-6">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-[#0d5f4e]" strokeWidth={1.5} />
                        <span className="font-medium text-gray-900">{industry.name}</span>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        industry.adoption === 'High' 
                          ? 'bg-[#0d5f4e]/10 text-[#0d5f4e]' 
                          : industry.adoption.includes('Medium')
                          ? 'bg-[#6b9d89]/10 text-[#6b9d89]'
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {industry.adoption}
                      </span>
                    </td>
                    <td className="py-6 px-6 text-gray-700">{industry.primaryUse}</td>
                    <td className="py-6 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        industry.roi === 'High' 
                          ? 'bg-[#0d5f4e]/10 text-[#0d5f4e]' 
                          : industry.roi.includes('Medium')
                          ? 'bg-[#6b9d89]/10 text-[#6b9d89]'
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {industry.roi}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// Trends Section
function TrendsSection() {
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
    { year: '2020', value: 30 },
    { year: '2021', value: 45 },
    { year: '2022', value: 58 },
    { year: '2023', value: 70 },
    { year: '2024', value: 78 },
    { year: '2025', value: 85, projected: true },
  ];

  const gapData = [
    { label: 'Expected ROI', value: 100 },
    { label: 'Actual ROI (Year 1)', value: 35 },
  ];

  return (
    <section ref={sectionRef} data-section="4" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl text-gray-900 mb-4 font-light">
            Charts & <span className="text-[#0d5f4e]">Trends</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visualizing AI adoption growth and value realization patterns
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* AI Adoption Growth Line Chart */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-xl font-medium text-gray-900 mb-8 flex items-center gap-2">
              <LineChart className="w-5 h-5 text-[#0d5f4e]" />
              AI Adoption Growth
            </h3>
            
            <div className="relative h-64">
              {/* Y-axis labels */}
              <div className="absolute -left-12 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>

              {/* Grid and chart */}
              <div className="h-full border-l border-b border-gray-200 relative">
                {/* Grid lines */}
                {[0, 25, 50, 75, 100].map((percent) => (
                  <div 
                    key={percent}
                    className="absolute left-0 right-0 border-t border-gray-100"
                    style={{ bottom: `${percent}%` }}
                  />
                ))}

                {/* Line chart */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polyline
                    points={adoptionData.map((d, i) => 
                      `${(i / (adoptionData.length - 1)) * 100},${100 - d.value}`
                    ).join(' ')}
                    fill="none"
                    stroke="#0d5f4e"
                    strokeWidth="0.5"
                    className={`transition-all duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  />
                  
                  {/* Data points */}
                  {adoptionData.map((d, i) => (
                    <circle
                      key={i}
                      cx={`${(i / (adoptionData.length - 1)) * 100}`}
                      cy={`${100 - d.value}`}
                      r="1"
                      fill={d.projected ? '#6b9d89' : '#0d5f4e'}
                      className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                      style={{ transitionDelay: `${i * 100 + 500}ms` }}
                    />
                  ))}
                </svg>

                {/* X-axis labels */}
                <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-xs text-gray-600">
                  {adoptionData.map((d, i) => (
                    <span key={i} className={d.projected ? 'text-[#6b9d89]' : ''}>
                      {d.year}
                      {d.projected && '*'}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-12">* 2025 projected based on current trends</p>
          </div>

          {/* Value Realization Gap */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-xl font-medium text-gray-900 mb-8 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#0d5f4e]" />
              Value Realization Gap
            </h3>
            
            <div className="space-y-8">
              {gapData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-3">
                    <span className="text-sm text-gray-700">{item.label}</span>
                    <span className="text-2xl font-light text-gray-900">{item.value}%</span>
                  </div>
                  <div className="h-16 bg-gray-100 rounded-lg overflow-hidden relative">
                    <div 
                      className="absolute inset-y-0 left-0 transition-all duration-1000 ease-out flex items-center justify-end pr-4"
                      style={{
                        backgroundColor: index === 0 ? '#0d5f4e' : '#dc2626',
                        width: isVisible ? `${item.value}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    >
                      <span className="text-white text-sm font-medium">{item.value}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-900">
                <strong>Gap Analysis:</strong> Most organizations overestimate first-year ROI. 
                Success requires process redesign, not just tool adoption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Risks Section
function RisksSection() {
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

  const risks = [
    { 
      title: 'Adoption ≠ ROI', 
      description: 'Using AI tools doesn\'t guarantee value. 65% of implementations fail to meet ROI targets.',
      severity: 'high'
    },
    { 
      title: 'Data Quality Limits', 
      description: 'Poor data quality reduces AI effectiveness by 40-60%. Garbage in, garbage out remains true.',
      severity: 'high'
    },
    { 
      title: 'Change Management', 
      description: 'Technical success means nothing without organizational buy-in. 70% of failures are human, not technical.',
      severity: 'critical'
    },
    { 
      title: 'Hidden Costs', 
      description: 'Infrastructure, training, and maintenance often exceed initial estimates by 2-3x.',
      severity: 'medium'
    },
    { 
      title: 'Vendor Lock-in', 
      description: 'Proprietary AI platforms create dependencies that limit flexibility and increase costs over time.',
      severity: 'medium'
    },
    { 
      title: 'Regulatory Risk', 
      description: 'Evolving AI regulations may require expensive retrofits or limit certain applications.',
      severity: 'medium'
    },
  ];

  return (
    <section ref={sectionRef} data-section="5" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl text-gray-900 mb-4 font-light">
            Risks & <span className="text-[#0d5f4e]">Reality Check</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Balancing optimism with credibility—what can go wrong and why
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {risks.map((risk, index) => (
            <div
              key={index}
              className={`border-l-4 rounded-r-xl p-6 transition-all duration-700 hover:shadow-lg ${
                risk.severity === 'critical' 
                  ? 'bg-gray-100 border-gray-600' 
                  : risk.severity === 'high'
                  ? 'bg-[#6b9d89]/10 border-[#6b9d89]'
                  : 'bg-gray-50 border-gray-400'
              } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle 
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    risk.severity === 'critical' 
                      ? 'text-gray-700' 
                      : risk.severity === 'high'
                      ? 'text-[#0d5f4e]'
                      : 'text-gray-600'
                  }`}
                  strokeWidth={2}
                />
                <h3 className="font-medium text-gray-900">{risk.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{risk.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 text-white rounded-2xl p-12 text-center">
          <p className="text-2xl font-light mb-4">
            "Technology is easy. Changing behavior is hard."
          </p>
          <p className="text-sm text-gray-400">
            — Chief AI Officer, Fortune 500 Manufacturing Company
          </p>
        </div>
      </div>
    </section>
  );
}

// Insights Section
function InsightsSection() {
  const insights = [
    {
      quote: "AI creates value where workflows change, not where tools are added.",
      context: "Organizations that redesign processes around AI see 4x better outcomes than those that simply deploy AI tools onto existing workflows."
    },
    {
      quote: "Early adopters win when governance and execution are aligned.",
      context: "Companies with clear AI governance frameworks and strong execution capabilities capture 85% of available value, compared to 35% for those lacking structure."
    },
    {
      quote: "The best AI strategy is invisible to end users.",
      context: "Successful implementations integrate AI seamlessly into existing workflows. Users should experience better outcomes, not new complexity."
    },
  ];

  return (
    <section data-section="6" className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl text-gray-900 mb-4 font-light">
            What This <span className="text-[#0d5f4e]">Means</span>
          </h2>
          <p className="text-lg text-gray-600">
            Key insights and actionable takeaways from the research
          </p>
        </div>

        <div className="space-y-12">
          {insights.map((insight, index) => (
            <div 
              key={index}
              className="border-l-2 border-[#0d5f4e] pl-8 py-4 hover:border-l-4 transition-all duration-300"
            >
              <blockquote className="text-2xl lg:text-3xl text-gray-900 font-light leading-relaxed mb-4">
                "{insight.quote}"
              </blockquote>
              <p className="text-gray-600 leading-relaxed">{insight.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section data-section="7" className="py-32 lg:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0d5f4e] via-[#0d5f4e] to-[#6b9d89] rounded-2xl p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl lg:text-5xl text-white font-light leading-tight">
              Explore Industry-Specific <br />AI Strategies
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get detailed playbooks, case studies, and implementation frameworks tailored to your industry
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="px-8 py-4 bg-white text-[#0d5f4e] rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 font-medium">
                Download Full Report
                <Download className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                See Methodology
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="pt-8 border-t border-white/20">
              <p className="text-sm text-white/80">
                Research methodology: 500+ enterprise interviews • 50+ case studies • 24-month longitudinal analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
