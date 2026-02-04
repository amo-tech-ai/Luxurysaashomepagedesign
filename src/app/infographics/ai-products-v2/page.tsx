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
  Activity,
  Gauge,
  RefreshCw,
  Database,
  Headphones,
  Calculator,
  ShoppingBag,
  UserCheck,
  FileCheck
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
                Product Intelligence 2024–2026
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
        <HeroSection scrollY={scrollY} />
        <ThreeLayersSection />
        <WinningFeaturesSection />
        <ValueCreationSection />
        <InvestorPerspectiveSection />
        <GrowthMechanicsSection />
        <RealityCheckSection />
        <PracticalGuidanceSection />
        <CaseStudySection />
        <KeyInsightsSection />
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

// SECTION 1 — Big Picture (Hero)
function HeroSection({ scrollY }: { scrollY: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-32 pb-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Title Section */}
        <div 
          className={`max-w-5xl transition-all duration-1500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="mb-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
              AI Product Intelligence (2024–2026)
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl leading-[0.95] text-gray-900 tracking-tight mb-8">
            Most Funded AI Startups — <br />
            <span className="text-[#0d5f4e]">With Real-World Examples</span>
          </h1>
          
          <div className="w-16 h-px bg-[#0d5f4e] mb-12" />
          
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl text-gray-900 font-light leading-tight">
              Most Funded AI Startups Do One Thing Well: <br />
              <span className="text-[#0d5f4e]">Replace Work</span>
            </h2>
            
            {/* Real-world context cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="p-8 bg-white border border-gray-200 rounded-2xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-[#0d5f4e]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">OpenAI</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Didn't win by "adding AI to chat" — it <strong>replaced large parts of knowledge work</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white border border-gray-200 rounded-2xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#6b9d89]/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-[#6b9d89]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Stripe</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Didn't add AI features — it <strong>automated fraud, payments, and reconciliation workflows</strong>.
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

// SECTION 2 — Mental Model: The 3 Layers of AI Startups
function ThreeLayersSection() {
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

  const layers = [
    {
      emoji: '🧠',
      title: 'Foundation Models',
      subtitle: '"The Brain"',
      color: '#0d5f4e',
      replaces: 'Large teams of manual reasoning, writing, or perception tasks',
      examples: [
        { name: 'OpenAI / Anthropic', impact: 'replace manual research, drafting, reasoning' },
        { name: 'Stability / Midjourney', impact: 'replace early-stage design & ideation work' },
        { name: 'Speech models', impact: 'replace transcription & call analysis teams' }
      ],
      investorLogic: 'If the model becomes the default brain, everything else depends on it.'
    },
    {
      emoji: '🛠️',
      title: 'Infrastructure',
      subtitle: '"The Plumbing"',
      color: '#6b9d89',
      replaces: 'Custom internal tooling, fragile AI deployments, manual monitoring and safety work',
      examples: [
        { name: 'LangSmith / Weights & Biases', impact: 'replace manual model evaluation' },
        { name: 'Humanloop / Guardrails', impact: 'replace ad-hoc prompt safety checks' },
        { name: 'AI cost monitoring tools', impact: 'replace spreadsheet-based tracking' }
      ],
      investorLogic: 'Every AI app needs plumbing — regardless of industry.'
    },
    {
      emoji: '⚙️',
      title: 'Applications & Vertical AI',
      subtitle: '"The Job-Doers"',
      color: '#0d5f4e',
      replaces: 'Entire roles or large portions of workflows',
      examples: [
        { name: 'Zendesk AI agents', impact: 'replace Tier-1 support queues' },
        { name: 'AI accounting tools', impact: 'replace manual reconciliation' },
        { name: 'AI recruiting tools', impact: 'replace resume screening teams' },
        { name: 'AI ecommerce merchandisers', impact: 'replace manual product optimization' }
      ],
      investorLogic: 'Clear ROI → faster sales → easier funding.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            With real-world examples of what actually gets replaced
          </p>
        </div>

        <div className="space-y-8">
          {layers.map((layer, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 lg:p-10 transition-all duration-700 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ backgroundColor: `${layer.color}15` }}
                >
                  {layer.emoji}
                </div>
                <div>
                  <h3 className="text-3xl font-semibold text-gray-900">{layer.title}</h3>
                  <p className="text-lg text-gray-500 italic">{layer.subtitle}</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* What they replace */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-semibold">
                    What they replace
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {layer.replaces}
                  </p>
                </div>

                {/* Real-world examples */}
                <div className="lg:col-span-2">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-semibold">
                    Real-world examples
                  </h4>
                  <div className="space-y-3">
                    {layer.examples.map((example, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100">
                        <ArrowRight className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-sm text-gray-900">{example.name}</strong>
                          <span className="text-sm text-gray-600"> → {example.impact}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Investor logic */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#0d5f4e]/5 to-transparent rounded-lg">
                  <Target className="w-5 h-5 text-[#0d5f4e] mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">
                      Why investors fund them
                    </h5>
                    <p className="text-sm text-gray-700 leading-relaxed italic">
                      {layer.investorLogic}
                    </p>
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

// SECTION 3 — Product Features: What Winning AI Products Have
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
      icon: Workflow,
      title: 'Workflow Ownership',
      instead: 'Instead of: "Write a support reply"',
      winning: 'Winning product: "Resolve the entire customer ticket end-to-end"',
      realWorld: 'Intercom AI closes tickets without human involvement.',
      color: '#0d5f4e'
    },
    {
      icon: UserCheck,
      title: 'Human-in-the-Loop Controls',
      instead: 'AI drafts → human approves → AI sends',
      winning: 'Legal AI tools require lawyer sign-off before submission.\nFinance AI requires controller approval before posting entries.',
      realWorld: 'Trust and control enable enterprise adoption.',
      color: '#6b9d89'
    },
    {
      icon: GitBranch,
      title: 'Integrations (Where Work Already Happens)',
      instead: 'AI inside Salesforce, not a new dashboard',
      winning: 'AI copilots embedded in CRM outperform standalone AI apps.',
      realWorld: 'Users adopt tools that fit existing workflows.',
      color: '#0d5f4e'
    },
    {
      icon: Shield,
      title: 'Reliability & Guardrails',
      instead: 'Cost limits prevent runaway API bills\nAudit logs for compliance',
      winning: 'Enterprises refuse AI tools without logs, limits, and rollback.',
      realWorld: 'Control = adoption.',
      color: '#6b9d89'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <CheckCircle2 className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Product Features
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            What Winning AI Products <span className="text-[#0d5f4e]">Have</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            With concrete examples of what actually works
          </p>
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
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Example</h4>
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{feature.instead}</p>
                  </div>

                  <div className="p-4 bg-[#0d5f4e]/5 rounded-lg">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Real-world</h4>
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line font-medium">{feature.winning}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 italic">{feature.realWorld}</p>
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

// SECTION 4 — Value Creation: Why Customers Pay for AI
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
      icon: Clock,
      emoji: '⏱️',
      title: 'Time Saved',
      example: 'Recruiter screens 100 resumes → AI delivers top 10',
      outcome: 'Days → minutes',
      color: '#0d5f4e'
    },
    {
      icon: TrendingUp,
      emoji: '💰',
      title: 'Revenue Lift',
      example: 'AI sales assistant responds instantly to inbound leads',
      outcome: 'Higher conversion, fewer lost deals',
      color: '#6b9d89'
    },
    {
      icon: TrendingDown,
      emoji: '📉',
      title: 'Cost Reduction',
      example: 'AI handles Tier-1 support',
      outcome: 'Smaller support teams, better SLAs',
      color: '#0d5f4e'
    },
    {
      icon: BarChart3,
      emoji: '📊',
      title: 'Better Decisions',
      example: 'AI flags customers likely to churn this week',
      outcome: 'Proactive retention instead of reactive firefighting',
      color: '#6b9d89'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <DollarSign className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Value Creation
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Why Customers <span className="text-[#0d5f4e]">Pay for AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Concrete examples of measurable outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 transition-all duration-700 hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{value.emoji}</div>
                  <h3 className="text-2xl font-semibold text-gray-900">{value.title}</h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-gray-100">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Example</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{value.example}</p>
                  </div>

                  <div 
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: `${value.color}10` }}
                  >
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Outcome</h4>
                    <p className="text-lg font-semibold" style={{ color: value.color }}>{value.outcome}</p>
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

// SECTION 5 — Investor Perspective
function InvestorPerspectiveSection() {
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
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Eye className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Investor Perspective
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            What Makes an AI Startup <span className="text-[#0d5f4e]">Fundable</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            In practice, not theory
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Fundable Example */}
          <div 
            className={`bg-gradient-to-br from-[#0d5f4e]/10 to-white border-2 border-[#0d5f4e] rounded-2xl p-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0d5f4e] flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Fundable Example</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  AI that automates insurance claims end-to-end
                </p>
                <ul className="space-y-2">
                  {[
                    '✓ Clear user',
                    '✓ Clear job replaced',
                    '✓ Measurable ROI'
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="text-[#0d5f4e]">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Unfundable Example */}
          <div 
            className={`bg-gradient-to-br from-gray-100 to-white border-2 border-gray-300 rounded-2xl p-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gray-400 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Unfundable Example</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  "ChatGPT for insurance"
                </p>
                <ul className="space-y-2">
                  {[
                    '✗ No workflow ownership',
                    '✗ No moat',
                    '✗ No clear value metric'
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="text-gray-400">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl text-center">
          <p className="text-2xl text-white font-light italic">
            "Investors fund <strong className="text-[#6b9d89]">systems</strong>, not demos."
          </p>
        </div>
      </div>
    </section>
  );
}

// SECTION 6 — Growth Mechanics
function GrowthMechanicsSection() {
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
    {
      step: 'Step 1',
      title: 'Narrow Use Case',
      example: 'Start with returns processing only',
      icon: Target
    },
    {
      step: 'Step 2',
      title: 'Early ROI',
      example: 'Show 40% reduction in processing time in 30 days',
      icon: Gauge
    },
    {
      step: 'Step 3',
      title: 'Vertical Expansion',
      example: 'Returns → inventory → pricing',
      icon: ArrowRight
    },
    {
      step: 'Step 4',
      title: 'Agentic Automation',
      example: 'AI plans → executes → reports → escalates to humans',
      icon: Sparkles
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Growth Mechanics
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            How AI Startups <span className="text-[#0d5f4e]">Actually Scale</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 transition-all duration-700 hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-[#0d5f4e] font-semibold">
                    {item.step}
                  </span>
                  <Icon className="w-5 h-5 text-[#0d5f4e]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <div className="p-4 bg-white rounded-lg border border-gray-100">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Example</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.example}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-world Example */}
        <div className="p-10 bg-gradient-to-br from-[#0d5f4e]/10 to-white border-2 border-[#0d5f4e]/30 rounded-2xl">
          <div className="flex items-start gap-4 mb-4">
            <Rocket className="w-8 h-8 text-[#0d5f4e] flex-shrink-0" />
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Real-world</h3>
              <p className="text-xl text-gray-900 leading-relaxed">
                Marketing agents that run <strong className="text-[#0d5f4e]">full campaigns with supervision</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// SECTION 7 — Reality Check
function RealityCheckSection() {
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
    'Built impressive demos, not workflows',
    'No trust or approvals → enterprise rejection',
    'No data advantage → easy to copy',
    'Too many features → no clear outcome'
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Real reasons, not polite excuses
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {failures.map((failure, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 p-6 bg-white border-2 border-gray-200 rounded-2xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <XCircle className="w-6 h-6 text-gray-600 flex-shrink-0 mt-0.5" />
              <p className="text-lg text-gray-900">{failure}</p>
            </div>
          ))}
        </div>

        <div className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl text-center">
          <p className="text-xl text-white font-light italic">
            Most failures come from <strong className="text-[#6b9d89]">misunderstanding the customer's job</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

// SECTION 8 — Practical Guidance
function PracticalGuidanceSection() {
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

  const dos = [
    'Replace one painful job',
    'Measure ROI in weeks',
    'Add approvals early'
  ];

  const donts = [
    'Chase "AI features"',
    'Skip integrations',
    'Promise autonomy too early'
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Rocket className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Practical Guidance
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Building a <span className="text-[#0d5f4e]">Fundable AI Product</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Founder reality, not theory
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Do */}
          <div 
            className={`bg-gradient-to-br from-[#0d5f4e]/10 to-white border-2 border-[#0d5f4e] rounded-2xl p-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#0d5f4e] flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-semibold text-gray-900">Do</h3>
            </div>

            <div className="space-y-4">
              {dos.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#0d5f4e] flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-gray-900">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Don't */}
          <div 
            className={`bg-gradient-to-br from-gray-100 to-white border-2 border-gray-300 rounded-2xl p-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gray-600 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-semibold text-gray-900">Don't</h3>
            </div>

            <div className="space-y-4">
              {donts.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
                  <XCircle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-gray-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// SECTION 9 — Case Study: StartupAI
function CaseStudySection() {
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
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Award className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Case Study
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            StartupAI-Style <span className="text-[#0d5f4e]">Product</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Why it works
          </p>
        </div>

        <div 
          className={`bg-white border-2 border-[#0d5f4e] rounded-2xl p-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">
                Workflow replaced
              </h3>
              <p className="text-xl text-gray-900 font-semibold">
                Founder chaos → structured execution
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">
                Real-world analogy
              </h3>
              <p className="text-lg text-gray-700">
                TurboTax for founders<br />
                Asana + Notion + advisor logic, automated
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-6 font-semibold">
              Why investors like it
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Clear vertical (founders)',
                'Clear workflow',
                'Repeatable outcomes',
                'Scales across stages'
              ].map((reason, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-[#0d5f4e]/5 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#0d5f4e] flex-shrink-0" />
                  <span className="text-sm text-gray-900 font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// SECTION 10 — Key Insights
function KeyInsightsSection() {
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
    '"AI that owns a workflow beats AI that answers questions."',
    '"Trust and control matter as much as intelligence."',
    '"ROI makes AI boring — and fundable."'
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#0d5f4e] font-semibold">
              Key Insights
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl text-gray-900 mb-6 font-light">
            Final <span className="text-[#0d5f4e]">Takeaways</span>
          </h2>
        </div>

        <div className="space-y-6">
          {insights.map((insight, index) => (
            <div
              key={index}
              className={`p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <p className="text-2xl lg:text-3xl text-white font-light italic text-center leading-relaxed">
                {insight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION 11 — Research Foundation & Methodology
function MethodologySection({ methodologyOpen, setMethodologyOpen }: any) {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
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
              'Y Combinator',
              'Accelerator Demo Days'
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
                <strong>Focus:</strong> AI-native products that demonstrate clear workflow ownership and measurable ROI
              </p>
              <p>
                <strong>Categorization:</strong> Products are categorized into three layers:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Foundation Models (the "brain")</li>
                <li>Infrastructure (the "plumbing")</li>
                <li>Applications & Vertical AI (the "job-doers")</li>
              </ul>
              <p>
                <strong>Evaluation Criteria:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Workflow ownership vs. feature additions</li>
                <li>Measurable ROI within weeks or months</li>
                <li>Clear user and job replacement</li>
                <li>Trust mechanisms (human-in-the-loop, guardrails)</li>
                <li>Integration with existing workflows</li>
              </ul>
              <p className="pt-4 border-t border-gray-200 italic">
                This report focuses on practical, fundable AI products with demonstrated market traction and clear value propositions.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
