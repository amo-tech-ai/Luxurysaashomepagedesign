import { useEffect, useRef, useState } from 'react';
import { 
  TrendingUp, 
  MapPin,
  Building2,
  Users,
  Zap,
  GraduationCap,
  Server,
  DollarSign,
  Globe,
  Brain,
  Rocket,
  Shield,
  Eye,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Award,
  Activity,
  Target,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Network
} from 'lucide-react';
import hubsInfographic from 'figma:asset/5f65b0003afdaadbb7344ec93f194f46f4ce8be3.png';

export default function AIHubsPage() {
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
                <MapPin className="w-3 h-3 text-[#0d5f4e]" />
                AI Investment Hubs 2025–2026
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
        <WhyCitiesWinSection />
        <GlobalHubsTable />
        <RegionalConcentrationChart />
        <HubProfilesSection />
        <VCFundingInfographicSection />
        <EmergingChallengersSection />
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
                Data compiled from Stanford AI Index, WIPO, EY, UNCTAD & industry sources
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
                  Global AI Investment 2025–2026
                </span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl leading-[0.95] text-gray-900 font-light tracking-tight">
                  AI Investment Is <br />
                  <span className="bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] bg-clip-text text-transparent">
                    Highly Concentrated
                  </span>
                </h1>
                
                <div className="w-24 h-1 bg-gradient-to-r from-[#0d5f4e] to-transparent rounded-full" />
              </div>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl font-light">
                Most global AI funding flows into a few cities where AI companies can scale fastest.
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
                number="~70%"
                label="of Global AI VC"
                sublabel="Flows into North America"
                icon={Globe}
                color="#0d5f4e"
                delay={0}
              />
              
              <KPICard 
                number="50-80%"
                label="Top 3 Hubs Capture"
                sublabel="Of AI-native funding (proxy)"
                icon={Target}
                color="#6b9d89"
                delay={200}
              />
              
              <KPICard 
                number="85-90%"
                label="Top 10 Hubs Absorb"
                sublabel="Of total AI investment"
                icon={TrendingUp}
                color="#0d5f4e"
                delay={400}
              />

              {/* Why this happens */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-[#6b9d89] font-semibold">
                    Why this happens
                  </span>
                </div>
                <p className="text-white text-lg font-light leading-relaxed">
                  Capital follows <strong className="text-[#6b9d89]">talent + compute + research</strong> density, not geography alone.
                </p>
              </div>

              {/* Real-world example */}
              <div className="bg-white border-2 border-[#0d5f4e]/20 rounded-2xl p-8 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0d5f4e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-[#0d5f4e]" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">
                      Real-world example
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      An AI founder moves to San Francisco not for lifestyle—but to hire faster, raise sooner, and access GPUs.
                    </p>
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

// Why Cities Win Section
function WhyCitiesWinSection() {
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
      icon: Users,
      emoji: '🧠',
      title: 'Talent Density',
      description: 'Deep pools of AI engineers and researchers',
      points: [
        'Deep pools of AI engineers and researchers',
        'Continuous founder recycling from top labs'
      ],
      example: 'Ex-OpenAI engineers start new companies → investors fund them faster due to proven experience.'
    },
    {
      icon: GraduationCap,
      emoji: '🎓',
      title: 'Universities & Research Labs',
      description: 'World-class AI research',
      points: [
        'World-class AI research',
        'Faster transfer from research → startups'
      ],
      institutions: 'Stanford, Berkeley, MIT\nOxford, Cambridge, Tsinghua',
      example: 'A PhD project at Berkeley becomes a startup within 12 months, backed by top VCs.'
    },
    {
      icon: Server,
      emoji: '🖥️',
      title: 'Compute & Infrastructure',
      description: 'Access to GPUs and AI-ready data centers',
      points: [
        'Access to GPUs and AI-ready data centers',
        'Close proximity to cloud providers and Nvidia'
      ],
      example: 'Training a large model is cheaper and faster near hyperscaler infrastructure.'
    },
    {
      icon: DollarSign,
      emoji: '💰',
      title: 'Capital Flywheel',
      description: 'More VCs → faster follow-on rounds',
      points: [
        'More VCs → faster follow-on rounds',
        'Big rounds attract more founders'
      ],
      example: 'One $1B AI round triggers dozens of new startups relocating to the same city.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Brain className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              The Framework
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Why Capital <span className="text-[#0d5f4e]">Concentrates</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Four advantages create winner-take-most dynamics
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200/50 p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-2xl mb-1">{pillar.emoji}</div>
                      <h3 className="text-xl font-semibold text-gray-900">{pillar.title}</h3>
                    </div>
                  </div>
                  
                  {/* What it means */}
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">What it means</h4>
                    <ul className="space-y-2">
                      {pillar.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] flex-shrink-0 mt-0.5" strokeWidth={2} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key institutions (if applicable) */}
                  {pillar.institutions && (
                    <div className="mb-6 p-4 bg-[#0d5f4e]/5 rounded-lg">
                      <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Key institutions</h4>
                      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{pillar.institutions}</p>
                    </div>
                  )}

                  {/* Real-world example */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Real-world example</h4>
                    <p className="text-sm text-gray-700 leading-relaxed italic">{pillar.example}</p>
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

// Global Hubs Table
function GlobalHubsTable() {
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

  const hubs = [
    { rank: 1, hub: 'San Francisco Bay Area', region: 'USA', investment: '$30B+ AI funding (US proxy)', strengths: 'Foundation models, infra, agents' },
    { rank: 2, hub: 'New York City', region: 'USA', investment: 'High applied-AI funding', strengths: 'Finance, media, enterprise AI' },
    { rank: 3, hub: 'London', region: 'UK', investment: "Europe's AI capital", strengths: 'Cloud AI, fintech, autonomy' },
    { rank: 4, hub: 'Beijing / Shanghai', region: 'China', investment: 'Billions (China proxy)', strengths: 'Autonomous systems, cloud AI' },
    { rank: 5, hub: 'Paris', region: 'France', investment: 'Late-stage surge', strengths: 'Foundation models (Mistral)' },
    { rank: 6, hub: 'Toronto–Waterloo', region: 'Canada', investment: 'High AI-native share', strengths: 'Research & ML talent' },
    { rank: 7, hub: 'Tel Aviv', region: 'Israel', investment: 'Strong per-capita funding', strengths: 'Cyber, defense, edge AI' },
    { rank: 8, hub: 'Singapore', region: 'Asia', investment: 'Policy-driven growth', strengths: 'Enterprise & sovereign AI' },
    { rank: 9, hub: 'Dubai / Abu Dhabi', region: 'MENA', investment: '$46B sovereign push', strengths: 'Compute, data centers' },
    { rank: 10, hub: 'Boston', region: 'USA', investment: 'Research-led strength', strengths: 'Health AI, robotics' },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Global Rankings
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Top 10 AI <span className="text-[#0d5f4e]">Investment Hubs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            City-level data where available; otherwise ecosystem + country proxies
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200/50 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-white backdrop-blur-xl border-b-2 border-gray-200">
                <tr>
                  <th className="text-center py-6 px-6 text-xs uppercase tracking-[0.15em] text-gray-500 font-bold">Rank</th>
                  <th className="text-left py-6 px-8 text-xs uppercase tracking-[0.15em] text-gray-500 font-bold">Hub</th>
                  <th className="text-left py-6 px-6 text-xs uppercase tracking-[0.15em] text-gray-500 font-bold">Region</th>
                  <th className="text-left py-6 px-8 text-xs uppercase tracking-[0.15em] text-gray-500 font-bold">Investment Signal</th>
                  <th className="text-left py-6 px-8 text-xs uppercase tracking-[0.15em] text-gray-500 font-bold">Core Strengths</th>
                </tr>
              </thead>
              <tbody>
                {hubs.map((hub, index) => (
                  <tr 
                    key={index}
                    className={`border-b border-gray-100 hover:bg-gradient-to-r hover:from-[#0d5f4e]/5 hover:to-transparent transition-all duration-300 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                    } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <td className="py-6 px-6 text-center">
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                        hub.rank <= 3 
                          ? 'bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] text-white' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {hub.rank}
                      </div>
                    </td>
                    <td className="py-6 px-8">
                      <div className="font-semibold text-gray-900">{hub.hub}</div>
                    </td>
                    <td className="py-6 px-6">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                        {hub.region}
                      </span>
                    </td>
                    <td className="py-6 px-8 text-sm text-gray-600">{hub.investment}</td>
                    <td className="py-6 px-8 text-sm text-gray-700">{hub.strengths}</td>
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

// Regional Concentration Chart
function RegionalConcentrationChart() {
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
    { name: 'North America', share: 70, color: 'from-[#0d5f4e] to-[#0a4d3e]' },
    { name: 'Asia (China-led)', share: 20, color: 'from-[#6b9d89] to-[#5a8c79]' },
    { name: 'Europe', share: 10, color: 'from-gray-400 to-gray-500' },
    { name: 'Rest of World', share: 5, color: 'from-gray-300 to-gray-400' },
  ];

  return (
    <section ref={sectionRef} className="py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Globe className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Regional Share
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Where AI <span className="text-[#0d5f4e]">Capital</span> Flows
          </h2>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200/50 p-10 shadow-xl">
          <div className="space-y-8">
            {regions.map((region, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-gray-900 font-medium">{region.name}</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-light text-[#0d5f4e]">{region.share}%</span>
                    {region.share < 5 && <span className="text-xs text-gray-500">(less than)</span>}
                  </div>
                </div>
                <div className="h-16 bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                  <div 
                    className={`h-full bg-gradient-to-r ${region.color} transition-all duration-1500 ease-out flex items-center justify-end pr-6`}
                    style={{ 
                      width: isVisible ? `${region.share}%` : '0%',
                      transitionDelay: `${index * 150}ms`
                    }}
                  >
                    {region.share >= 10 && (
                      <span className="text-white text-lg font-semibold">{region.share}%</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-[#6b9d89] flex-shrink-0" strokeWidth={1.5} />
              <blockquote className="text-2xl text-white font-light leading-relaxed">
                "AI capital behaves like infrastructure capital — it clusters, then compounds."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Hub Profiles Section
function HubProfilesSection() {
  const profiles = [
    {
      hub: 'San Francisco Bay Area',
      icon: Rocket,
      why: 'OpenAI, Anthropic, Scale AI\nDeepest VC pools globally\nGPU access + hyperscaler proximity',
      funded: 'Foundation models\nAI infrastructure\nAgent platforms',
      founders: 'Faster fundraising\nBetter talent matching\nGlobal credibility',
      color: 'from-[#0d5f4e]'
    },
    {
      hub: 'London',
      icon: Building2,
      why: "Europe's strongest AI labor market\nFintech + enterprise adoption\nRegulatory clarity",
      funded: 'Applied AI at scale\nDeepMind alumni ecosystem',
      founders: 'European base\nGlobal expansion gateway\nStrong public-private support',
      color: 'from-[#6b9d89]'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Eye className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Deep Dive
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Hub <span className="text-[#0d5f4e]">Profiles</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <div key={index} className="bg-white rounded-3xl border border-gray-200/50 p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${profile.color} to-transparent rounded-2xl flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-900">{profile.hub}</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">Why it dominates</div>
                    <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{profile.why}</div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <div className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">What gets funded</div>
                    <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{profile.funded}</div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <div className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">Why founders move here</div>
                    <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{profile.founders}</div>
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

// VCFundingInfographicSection
function VCFundingInfographicSection() {
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

  const hubs = [
    { rank: 1, city: 'Beijing', country: '🇨🇳', percentage: 66.2 },
    { rank: 2, city: 'Silicon Valley', country: '🇺🇸', percentage: 62.4 },
    { rank: 3, city: 'Toronto-Waterloo', country: '🇨🇦', percentage: 50.3 },
    { rank: 4, city: 'Paris', country: '🇫🇷', percentage: 43.2 },
    { rank: 5, city: 'Shanghai', country: '🇨🇳', percentage: 21.5 },
    { rank: 6, city: 'Singapore', country: '🇸🇬', percentage: 17.1 },
    { rank: 7, city: 'Tokyo', country: '🇯🇵', percentage: 16.2 },
    { rank: 8, city: 'Amsterdam Delta', country: '🇳🇱', percentage: 15.6 },
    { rank: 9, city: 'Seattle', country: '🇺🇸', percentage: 14.8 },
    { rank: 10, city: 'New York City', country: '🇺🇸', percentage: 14.2 },
    { rank: 11, city: 'Washington DC', country: '🇺🇸', percentage: 13.4 },
    { rank: 12, city: 'Boston', country: '🇺🇸', percentage: 11.6 },
    { rank: 13, city: 'Atlanta', country: '🇺🇸', percentage: 10.5 },
    { rank: 14, city: 'Bangalore-Karnataka', country: '🇮🇳', percentage: 10.1 },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="w-1 h-16 bg-gradient-to-b from-[#0d5f4e] to-[#6b9d89] rounded-full mb-4" />
              <h2 className="text-5xl lg:text-6xl text-gray-900 mb-4 font-light">
                The World's Leading <br />
                <span className="text-[#0d5f4e]">AI Investment Hubs</span>
              </h2>
            </div>
            <div className="hidden lg:block w-20 h-20 bg-gradient-to-br from-[#0d5f4e]/10 to-[#6b9d89]/10 rounded-2xl flex items-center justify-center">
              <Network className="w-10 h-10 text-[#0d5f4e]" strokeWidth={1.5} />
            </div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl font-light leading-relaxed">
            Cities/regions where AI companies received more than 10 percent of local VC funding in 2023 and 2024
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Rankings List */}
          <div className="lg:col-span-2 space-y-3">
            {hubs.map((hub, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-700 ${
                  hub.rank <= 3
                    ? 'bg-gradient-to-r from-[#0d5f4e]/5 to-transparent border-[#0d5f4e]/20 hover:border-[#0d5f4e]/40'
                    : hub.rank <= 7
                    ? 'bg-gradient-to-r from-[#6b9d89]/5 to-transparent border-[#6b9d89]/20 hover:border-[#6b9d89]/40'
                    : 'bg-gray-50/50 border-gray-200 hover:border-gray-300'
                } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    hub.rank <= 3
                      ? 'bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {hub.rank}
                  </div>
                  
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-2xl">{hub.country}</span>
                    <span className="text-sm font-medium text-gray-900">{hub.city}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className={`text-2xl font-light ${
                    hub.rank <= 3 ? 'text-[#0d5f4e]' : 'text-gray-700'
                  }`}>
                    {hub.percentage}%
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: World Map Visualization */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200/50 p-8 shadow-xl h-full">
              <div className="relative w-full h-full min-h-[600px]">
                {/* Simplified World Map SVG */}
                <svg viewBox="0 0 800 500" className="w-full h-full">
                  {/* Background */}
                  <rect width="800" height="500" fill="#fafaf8" />
                  
                  {/* Simplified continent shapes */}
                  <g opacity="0.15" fill="#0d5f4e">
                    {/* North America */}
                    <path d="M 50 100 Q 80 80 120 90 L 180 100 Q 200 110 220 100 L 250 110 Q 260 140 250 160 L 240 200 Q 220 220 200 210 L 160 200 Q 140 190 130 170 L 100 160 Q 70 140 60 120 Z" />
                    
                    {/* South America */}
                    <path d="M 200 250 Q 210 240 220 250 L 230 290 Q 235 320 225 340 L 210 360 Q 200 350 195 330 L 190 290 Q 185 260 200 250 Z" />
                    
                    {/* Europe */}
                    <path d="M 380 100 Q 400 95 420 100 L 450 110 Q 460 120 455 135 L 440 145 Q 420 140 410 130 L 390 120 Q 375 110 380 100 Z" />
                    
                    {/* Africa */}
                    <path d="M 400 180 Q 420 175 440 180 L 460 200 Q 470 240 465 270 L 450 300 Q 430 305 420 290 L 410 250 Q 405 210 400 180 Z" />
                    
                    {/* Asia */}
                    <path d="M 500 80 Q 550 70 600 80 L 680 100 Q 720 120 730 140 L 720 180 Q 700 200 670 195 L 620 185 Q 580 175 550 160 L 520 140 Q 495 115 500 80 Z" />
                    
                    {/* Oceania */}
                    <path d="M 650 320 Q 670 315 690 320 L 710 330 Q 715 345 705 355 L 680 360 Q 660 355 655 340 Z" />
                  </g>

                  {/* Hub Markers with connecting lines */}
                  {/* Top Hubs - Larger markers */}
                  {/* Beijing */}
                  <g className={isVisible ? 'animate-pulse' : ''}>
                    <circle cx="630" cy="140" r="20" fill="#0d5f4e" opacity="0.2" />
                    <circle cx="630" cy="140" r="12" fill="#0d5f4e" />
                    <text x="630" y="145" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">1</text>
                  </g>

                  {/* Silicon Valley */}
                  <g className={isVisible ? 'animate-pulse' : ''} style={{ animationDelay: '200ms' }}>
                    <circle cx="120" cy="150" r="18" fill="#0d5f4e" opacity="0.2" />
                    <circle cx="120" cy="150" r="11" fill="#0d5f4e" />
                    <text x="120" y="155" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">2</text>
                  </g>

                  {/* Toronto */}
                  <g className={isVisible ? 'animate-pulse' : ''} style={{ animationDelay: '400ms' }}>
                    <circle cx="200" cy="130" r="16" fill="#6b9d89" opacity="0.2" />
                    <circle cx="200" cy="130" r="10" fill="#6b9d89" />
                    <text x="200" y="135" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">3</text>
                  </g>

                  {/* Paris */}
                  <g className={isVisible ? 'animate-pulse' : ''} style={{ animationDelay: '600ms' }}>
                    <circle cx="420" cy="120" r="14" fill="#6b9d89" opacity="0.2" />
                    <circle cx="420" cy="120" r="9" fill="#6b9d89" />
                    <text x="420" y="125" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">4</text>
                  </g>

                  {/* Shanghai */}
                  <g>
                    <circle cx="660" cy="160" r="8" fill="#9ca3af" />
                    <text x="660" y="164" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">5</text>
                  </g>

                  {/* Singapore */}
                  <g>
                    <circle cx="620" cy="240" r="8" fill="#9ca3af" />
                    <text x="620" y="244" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">6</text>
                  </g>

                  {/* Tokyo */}
                  <g>
                    <circle cx="710" cy="150" r="8" fill="#9ca3af" />
                    <text x="710" y="154" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">7</text>
                  </g>

                  {/* Amsterdam */}
                  <g>
                    <circle cx="410" cy="110" r="7" fill="#d1d5db" />
                    <text x="410" y="114" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">8</text>
                  </g>

                  {/* US Cities - Seattle, NYC, DC, Boston, Atlanta */}
                  <circle cx="110" cy="135" r="6" fill="#d1d5db" />
                  <text x="110" y="139" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">9</text>
                  
                  <circle cx="220" cy="145" r="6" fill="#d1d5db" />
                  <text x="220" y="149" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">10</text>
                  
                  <circle cx="215" cy="155" r="6" fill="#d1d5db" />
                  <text x="215" y="159" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">11</text>
                  
                  <circle cx="225" cy="140" r="6" fill="#d1d5db" />
                  <text x="225" y="144" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">12</text>
                  
                  <circle cx="205" cy="170" r="6" fill="#d1d5db" />
                  <text x="205" y="174" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">13</text>

                  {/* Bangalore */}
                  <circle cx="580" cy="220" r="6" fill="#d1d5db" />
                  <text x="580" y="224" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">14</text>

                  {/* Connection lines between major hubs */}
                  <line x1="630" y1="140" x2="120" y2="150" stroke="#0d5f4e" strokeWidth="1" opacity="0.1" strokeDasharray="4,4" />
                  <line x1="120" y1="150" x2="200" y2="130" stroke="#6b9d89" strokeWidth="1" opacity="0.1" strokeDasharray="4,4" />
                  <line x1="200" y1="130" x2="420" y2="120" stroke="#6b9d89" strokeWidth="1" opacity="0.1" strokeDasharray="4,4" />
                </svg>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/50 p-4 shadow-lg">
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89]" />
                      <span className="text-gray-700">Top 3 (50%+)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#6b9d89]" />
                      <span className="text-gray-700">4-7 (15-43%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-400" />
                      <span className="text-gray-700">8-14 (10-15%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex items-center justify-between text-sm text-gray-500 border-t border-gray-200 pt-8">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Source: Startup Genome</span>
          </div>
          <div className="text-gray-400">
            Data: 2023-2024
          </div>
        </div>
      </div>
    </section>
  );
}

// Emerging Challengers Section
function EmergingChallengersSection() {
  const challengers = [
    { 
      flag: '🇫🇷', 
      hub: 'Paris', 
      driver: 'Foundation models', 
      rising: 'Mistral + EU backing',
      example: 'Europe\'s answer to US foundation models.'
    },
    { 
      flag: '🇸🇬', 
      hub: 'Singapore', 
      driver: 'Policy + infrastructure', 
      rising: 'Government-led AI adoption',
      example: 'AI used directly in public services and enterprises.'
    },
    { 
      flag: '🇦🇪', 
      hub: 'Dubai / Abu Dhabi', 
      driver: 'Sovereign capital', 
      rising: 'Massive compute investment',
      example: 'Building AI infrastructure before startups arrive.'
    },
    { 
      flag: '🇨🇦', 
      hub: 'Toronto', 
      driver: 'Research depth', 
      rising: 'World-class ML talent',
      example: 'Universities act as AI talent exporters.'
    },
  ];

  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6b9d89]/10 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-[#6b9d89]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#6b9d89] font-semibold">
              Growth Zone
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Fast-Rising <span className="text-[#6b9d89]">AI Hubs</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {challengers.map((challenger, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200/50 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">{challenger.flag}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{challenger.hub}</h3>
                  <div className="px-3 py-1 bg-[#6b9d89]/10 text-[#6b9d89] text-xs rounded-full font-medium inline-block">
                    Rising Fast
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Growth Driver</div>
                  <p className="text-sm text-gray-700">{challenger.driver}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Why It's Rising</div>
                  <p className="text-sm text-gray-700">{challenger.rising}</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Example</div>
                  <p className="text-sm text-gray-700 italic">{challenger.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Reality Check Section
function RealityCheckSection() {
  const caveats = [
    'City-level AI VC data is often paywalled',
    'Many figures rely on country-level proxies',
    'AI-native ≠ AI-enabled startups',
    'Private mega-rounds skew totals'
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-500/10 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-gray-700" />
            <span className="text-xs uppercase tracking-[0.2em] text-gray-700 font-semibold">
              Important Caveats
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Reality <span className="text-gray-700">Check</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {caveats.map((caveat, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200/50 p-8 hover:border-gray-300 transition-all duration-300">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <p className="text-gray-700 leading-relaxed">{caveat}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gray-100 rounded-2xl border border-gray-200">
          <p className="text-center text-gray-700 leading-relaxed">
            <strong>Methodology note:</strong> AI funding defined as venture capital into <strong>AI-native companies</strong> (foundation models, infrastructure, core AI systems), excluding general tech with minor AI features.
          </p>
        </div>
      </div>
    </section>
  );
}

// Key Takeaways Section
function KeyTakeawaysSection() {
  const takeaways = [
    { text: 'AI investment follows talent, not hype', icon: Users },
    { text: 'Compute access is the new strategic moat', icon: Cpu },
    { text: 'The gap between top hubs and the rest is widening', icon: TrendingUp },
    { text: 'Late-moving cities must invest in infrastructure first', icon: Network }
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
            What <span className="text-[#6b9d89]">Matters</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {takeaways.map((takeaway, index) => {
            const Icon = takeaway.icon;
            return (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0d5f4e]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#6b9d89]" strokeWidth={2} />
                  </div>
                  <p className="text-2xl text-white font-light leading-relaxed">{takeaway.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Sources & Methodology Section
function SourcesMethodologySection({ methodologyOpen, setMethodologyOpen }: any) {
  const sources = [
    { name: 'Stanford AI Index', icon: GraduationCap },
    { name: 'WIPO', icon: Shield },
    { name: 'EY', icon: Building2 },
    { name: 'UNCTAD', icon: Globe },
    { name: 'Startup Genome', icon: Rocket },
    { name: 'Visual Capitalist', icon: Activity },
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
                  <h4 className="font-semibold text-gray-900 mb-3">AI-Native Definition</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    AI funding defined as venture capital into <strong>AI-native companies</strong>—foundation models, 
                    infrastructure, core AI systems. Excludes general tech companies with minor AI features.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Data Limitations</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    City-level AI investment data is often paywalled or aggregated at national levels. 
                    Where city-specific data is unavailable, we use regional and national proxies, 
                    validated against ecosystem reports and public announcements.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Geographic Scope</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Hub rankings combine multiple signals: disclosed VC deals, research output (WIPO), 
                    talent density, compute infrastructure announcements, and sovereign AI initiatives. 
                    Rankings are directional rather than precise due to data availability constraints.
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