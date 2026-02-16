import { ArrowLeft, TrendingUp, Users, Zap, Target, Heart, Search, Check, Sparkles, Package, Settings, GitBranch, DollarSign, ShoppingCart, RotateCcw, Palette, AlertTriangle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Fashion2026V8Props {
  onNavigate?: (page: string) => void;
}

export default function Fashion2026V8({ onNavigate }: Fashion2026V8Props) {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      const sections = document.querySelectorAll('section');
      let current = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          current = index;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('section');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F1EEEA]">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-[#697485]/10 z-50">
        <div 
          className="h-full bg-[#0E3E1B] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Back Button */}
      <div className="fixed top-8 left-8 z-40">
        <button
          onClick={() => onNavigate?.('home-v8')}
          className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm border border-[#0E3E1B]/10 rounded-lg hover:bg-white transition-all duration-200 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 text-[#0E3E1B]" />
          <span className="text-sm font-medium text-[#212427]">Back to Home</span>
        </button>
      </div>

      {/* Progress Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {[...Array(11)].map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            className={`transition-all duration-300 rounded-full ${
              activeSection === i
                ? 'w-4 h-4 bg-[#0E3E1B] shadow-lg shadow-[#0E3E1B]/30'
                : 'w-3 h-3 bg-[#697485]/30 hover:bg-[#697485]/50'
            }`}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>

      {/* Section 1 - Hero */}
      <section className="min-h-screen flex items-center py-32 px-8 lg:px-20">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-6">
            <span className="text-[13px] tracking-[0.08em] uppercase text-[#0E3E1B] font-medium">
              AI × FASHION 2026 OUTLOOK
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 
                className="text-5xl lg:text-7xl leading-[0.95] text-[#212427] font-medium"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                AI Is Reshaping a $2 Trillion Industry
              </h1>

              <div className="space-y-6 text-lg lg:text-xl leading-relaxed text-[#212427] max-w-[500px]">
                <p>From $2.9B today to $89B by 2035 — intelligence is becoming the core product.</p>
                
                <div className="space-y-2">
                  <p>Fashion grows 3–4% annually.</p>
                  <p>AI grows 40.8% annually.</p>
                </div>

                <p className="text-[#0E3E1B] font-medium">
                  Value is shifting from product → intelligence.
                </p>
              </div>

              <div className="pt-4 opacity-60">
                <span className="text-7xl font-light" style={{ fontFamily: 'Georgia, serif' }}>01</span>
              </div>
            </div>

            <div className="relative bg-white/50 backdrop-blur-sm p-8 lg:p-12 rounded-2xl border border-[#697485]/20">
              <h3 className="text-lg font-medium mb-8 text-[#212427]">
                Diverging Growth Trajectories
              </h3>

              <div className="relative h-[300px] lg:h-[400px]">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  <line x1="40" y1="20" x2="40" y2="260" stroke="#697485" strokeOpacity="0.2" strokeWidth="1" />
                  <line x1="40" y1="260" x2="380" y2="260" stroke="#697485" strokeOpacity="0.2" strokeWidth="1" />
                  <path d="M 40 240 L 380 220" stroke="#697485" strokeWidth="2" fill="none" />
                  <path d="M 40 250 Q 150 240, 250 150 T 380 30" stroke="#0E3E1B" strokeWidth="4" fill="none" />
                  <circle cx="380" cy="30" r="8" fill="#CB9FD2" opacity="0.8" />
                  <circle cx="380" cy="30" r="4" fill="#CB9FD2" />
                  <text x="40" y="285" fontSize="12" fill="#697485" textAnchor="middle">2025</text>
                  <text x="210" y="285" fontSize="12" fill="#697485" textAnchor="middle">2030</text>
                  <text x="380" y="285" fontSize="12" fill="#697485" textAnchor="middle">2035</text>
                </svg>
              </div>

              <div className="mt-8 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-[#697485]" />
                  <span className="text-[#212427]">Fashion Industry</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-1 bg-[#0E3E1B]" />
                  <span className="text-[#0E3E1B] font-medium">AI in Fashion ★</span>
                </div>
              </div>

              <p className="mt-6 text-xs text-[#697485] italic">
                AI curve 10× steeper than fashion curve
              </p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-sm text-[#697485] flex items-center justify-center gap-2">
              <span>↓</span> Scroll to explore
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Four Strategic Forces */}
      <section className="min-h-screen flex items-center py-32 px-8 lg:px-20 bg-white">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-8">
            <span className="text-xs tracking-wider uppercase text-[#0E3E1B] font-medium">
              AI TRANSFORMATION DRIVERS
            </span>
          </div>

          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-6xl leading-tight text-[#212427] font-medium mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Four Forces Making AI Inevitable
            </h2>
            <p className="text-lg leading-relaxed max-w-[800px] mx-auto text-[#212427]">
              AI in fashion is not a trend. It is a structural realignment driven by technology, consumer behavior, competitive pressure, and organizational change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-[#F1EEEA] p-10 rounded-2xl border-t-[3px] border-[#0E3E1B] hover:shadow-lg transition-all duration-300">
              <div className="mb-8">
                <Zap className="w-8 h-8 text-[#0E3E1B]" />
              </div>
              <div className="text-5xl font-bold text-[#0E3E1B] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                10×
              </div>
              <h3 className="text-lg font-semibold text-[#212427] mb-4">
                Cost Efficiency Shift
              </h3>
              <p className="text-sm text-[#212427] leading-relaxed mb-6">
                Enterprise AI is now operationally viable.
              </p>
              <div className="pt-4 border-t border-[#697485]/20">
                <p className="text-xs text-[#697485] font-medium">Impact:</p>
                <p className="text-sm text-[#212427]">Automation is deployable</p>
              </div>
            </div>

            <div className="bg-[#F1EEEA] p-10 rounded-2xl border-t-[3px] border-[#CB9FD2] hover:shadow-lg transition-all duration-300">
              <div className="mb-8">
                <Users className="w-8 h-8 text-[#CB9FD2]" />
              </div>
              <div className="text-5xl font-bold text-[#CB9FD2] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                60%
              </div>
              <h3 className="text-lg font-semibold text-[#212427] mb-4">
                Used AI to Shop
              </h3>
              <p className="text-sm text-[#212427] leading-relaxed mb-6">
                Discovery shifting to AI-assisted evaluation.
              </p>
              <div className="pt-4 border-t border-[#697485]/20">
                <p className="text-xs text-[#697485] font-medium">Impact:</p>
                <p className="text-sm text-[#212427]">Brands must design for AI UI</p>
              </div>
            </div>

            <div className="bg-[#F1EEEA] p-10 rounded-2xl border-t-[3px] border-[#2A4E45] hover:shadow-lg transition-all duration-300">
              <div className="mb-8">
                <TrendingUp className="w-8 h-8 text-[#2A4E45]" />
              </div>
              <div className="text-5xl font-bold text-[#2A4E45] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                64%
              </div>
              <h3 className="text-lg font-semibold text-[#212427] mb-4">
                Fortune 500 Mention AI
              </h3>
              <p className="text-sm text-[#212427] leading-relaxed mb-6">
                Capital markets reward AI strategy.
              </p>
              <div className="pt-4 border-t border-[#697485]/20">
                <p className="text-xs text-[#697485] font-medium">Impact:</p>
                <p className="text-sm text-[#212427]">AI is table stakes</p>
              </div>
            </div>

            <div className="bg-[#F1EEEA] p-10 rounded-2xl border-t-[3px] border-[#FFC9C1] hover:shadow-lg transition-all duration-300">
              <div className="mb-8">
                <Target className="w-8 h-8 text-[#FFC9C1]" />
              </div>
              <div className="text-5xl font-bold text-[#FFC9C1] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                40%
              </div>
              <h3 className="text-lg font-semibold text-[#212427] mb-4">
                Added AI Leadership
              </h3>
              <p className="text-sm text-[#212427] leading-relaxed mb-6">
                Operating models are being rewired.
              </p>
              <div className="pt-4 border-t border-[#697485]/20">
                <p className="text-xs text-[#697485] font-medium">Impact:</p>
                <p className="text-sm text-[#212427]">New hybrid roles emerging</p>
              </div>
            </div>
          </div>

          <div className="bg-[#12211D] text-[#F1EEEA] p-12 rounded-2xl">
            <p className="text-xl leading-relaxed italic" style={{ fontFamily: 'Georgia, serif' }}>
              "AI adoption in fashion is not optional experimentation. It is a multi-force convergence accelerating structural change."
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Next Gen Commerce */}
      <section className="min-h-screen flex items-center py-32 px-8 lg:px-20 bg-[#F1EEEA]">
        <div className="max-w-[1100px] mx-auto w-full">
          <div className="mb-8">
            <span className="text-xs tracking-wider uppercase text-[#0E3E1B] font-medium">
              NEXT GENERATION BEHAVIOR
            </span>
          </div>

          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-6xl leading-tight text-[#212427] font-medium mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Next Gen Controls 40% of Future Spend
            </h2>
            <p className="text-lg leading-relaxed text-[#212427]">
              Gen Z × Gen Alpha are rewriting commerce rules
            </p>
          </div>

          <div className="mb-16 relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {[
                { icon: Users, label: 'Social Discovery', sublabel: 'TikTok, Instagram' },
                { icon: Sparkles, label: 'AI Recommendations', sublabel: 'ChatGPT, Style AI', highlight: true },
                { icon: Heart, label: 'Peer Validation', sublabel: 'Reviews, Social Proof' },
                { icon: Search, label: 'AI-Powered Search', sublabel: 'Visual Search' },
                { icon: Check, label: 'Conversion', sublabel: 'Seamless Checkout' },
              ].map((stage, i) => (
                <div key={i} className="flex-1 text-center w-full md:w-auto">
                  <div className={`w-24 h-24 mx-auto rounded-full border-2 flex items-center justify-center mb-4 transition-all duration-300 ${
                    stage.highlight 
                      ? 'border-[#CB9FD2] bg-[#CB9FD2]/10 shadow-lg shadow-[#CB9FD2]/30' 
                      : 'border-[#0E3E1B] bg-white hover:bg-white/50'
                  }`}>
                    <stage.icon className={`w-10 h-10 ${stage.highlight ? 'text-[#CB9FD2]' : 'text-[#0E3E1B]'}`} />
                  </div>
                  <p className="text-sm lg:text-base font-semibold text-[#212427] mb-1">{stage.label}</p>
                  <p className="text-xs text-[#697485]">{stage.sublabel}</p>
                  {stage.highlight && (
                    <div className="mt-2">
                      <span className="text-xl">★</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { stat: '40%', label: 'Projected Fashion Spend', sublabel: '(Gen Z × Gen Alpha by 2030)' },
              { stat: '40%', label: 'Use AI Tools to Shop', sublabel: '(Already adopted AI assistants)' },
              { stat: 'Social → Commerce', label: 'Platforms becoming', sublabel: 'purchase engines' },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-xl">
                <div className="text-4xl font-bold text-[#0E3E1B] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.stat}
                </div>
                <p className="text-sm lg:text-base text-[#212427] font-medium mb-1">{item.label}</p>
                <p className="text-xs text-[#697485]">{item.sublabel}</p>
              </div>
            ))}
          </div>

          <div className="text-center max-w-[700px] mx-auto">
            <p className="text-lg leading-relaxed italic text-[#212427]" style={{ fontFamily: 'Georgia, serif' }}>
              "Agent Engine Optimization replaces SEO. The new discovery layer is algorithmic, not search-based."
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - The Smart Shopper Era */}
      <section className="min-h-screen flex items-center py-32 px-8 lg:px-20 bg-white">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-8">
            <span className="text-xs tracking-wider uppercase text-[#0E3E1B] font-medium">
              CONSUMER SIGNALS · 2025
            </span>
          </div>

          <div className="mb-16">
            <h2 
              className="text-4xl lg:text-6xl leading-tight text-[#212427] font-medium mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Fashion Consumers Are More Rational Than Emotional
            </h2>
            <p className="text-lg leading-relaxed text-[#212427] max-w-[800px]">
              Spending is tightening. Discount expectations are rising. Trust now determines conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-12 mb-16">
            {/* Bar Chart */}
            <div className="lg:col-span-4">
              <div className="bg-[#F1EEEA]/50 p-8 rounded-2xl">
                <h3 className="text-lg font-medium mb-8 text-[#212427]">Consumer Behavioral Shifts (2025)</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Spending Less YoY', value: 48.5, color: '#2A4E45' },
                    { label: 'Require 30%+ Discount', value: 66, color: '#0E3E1B', highlight: true },
                    { label: 'Wait for Deeper Discounts', value: 44.5, color: '#2A4E45' },
                    { label: 'Compare Across Brands', value: 36.7, color: '#2A4E45' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#212427]">{item.label}</span>
                        <span className={`text-lg font-bold ${item.highlight ? 'text-[#0E3E1B]' : 'text-[#212427]'}`}>
                          {item.value}%
                        </span>
                      </div>
                      <div className="h-3 bg-[#697485]/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-500`}
                          style={{ 
                            width: `${item.value}%`, 
                            backgroundColor: item.color 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* KPI Panels */}
            <div className="lg:col-span-3 space-y-6">
              {[
                { stat: '66%', label: 'Require 30%+ discount to pay attention', color: '#FFC9C1' },
                { stat: '48.5%', label: 'Spending less year-over-year', color: '#697485' },
                { stat: '44.5%', label: 'Delay purchase for deeper markdowns', color: '#CB9FD2' },
              ].map((kpi, i) => (
                <div key={i} className="bg-[#F1EEEA] p-8 rounded-xl border-b-2" style={{ borderColor: kpi.color }}>
                  <div className="text-5xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif', color: kpi.color }}>
                    {kpi.stat}
                  </div>
                  <p className="text-sm text-[#212427]">{kpi.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4 KPI Strip Below Chart */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { stat: '66%', label: 'Require 30%+ discount to pay attention', color: '#FFC9C1' },
              { stat: '48.5%', label: 'Spending less year-over-year', color: '#697485' },
              { stat: '44.5%', label: 'Delay purchase for deeper markdowns', color: '#CB9FD2' },
              { stat: '36.7%', label: 'Compare prices before buying', color: '#2A4E45' },
            ].map((kpi, i) => (
              <div key={i} className="bg-[#F1EEEA] p-6 rounded-xl border-b-[3px]" style={{ borderColor: kpi.color }}>
                <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif', color: kpi.color }}>
                  {kpi.stat}
                </div>
                <p className="text-xs text-[#212427] leading-relaxed">{kpi.label}</p>
              </div>
            ))}
          </div>

          {/* Discount Threshold Visualization */}
          <div className="mb-12 bg-white p-10 rounded-2xl border border-[#697485]/20">
            <h3 className="text-lg font-medium mb-6 text-[#212427]">Discount Threshold Sensitivity</h3>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#697485]">0%</span>
                <span className="text-sm text-[#697485]">15%</span>
                <span className="text-sm font-bold text-[#0E3E1B]">30%</span>
                <span className="text-sm text-[#697485]">50%</span>
              </div>
              <div className="h-3 bg-[#697485]/10 rounded-full relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-[30%] bg-gradient-to-r from-[#697485]/20 to-[#0E3E1B]/40 rounded-full" />
                <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-1 h-6 bg-[#0E3E1B]" />
              </div>
              <div className="mt-6 space-y-2 text-sm text-[#697485]">
                <p>• 15% is invisible</p>
                <p>• <span className="font-bold text-[#0E3E1B]">30% triggers attention</span></p>
                <p>• Transparency builds trust</p>
              </div>
            </div>
          </div>

          {/* Purchase Decision Funnel */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                { label: 'Research' },
                { label: 'Comparison' },
                { label: 'Validation' },
                { label: 'Discount Threshold', highlight: true },
                { label: 'Purchase' },
              ].map((stage, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                    stage.highlight 
                      ? 'border-[#CB9FD2] bg-[#CB9FD2]/10 shadow-lg shadow-[#CB9FD2]/20' 
                      : 'border-[#2A4E45] bg-white'
                  }`}>
                    <p className={`text-sm font-medium ${stage.highlight ? 'text-[#CB9FD2]' : 'text-[#212427]'}`}>
                      {stage.label}
                    </p>
                  </div>
                  {i < 4 && <span className="text-[#697485] hidden md:inline">→</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#12211D] text-[#F1EEEA] p-12 rounded-2xl">
            <h3 className="text-xl font-medium mb-6">AI Response Strategy</h3>
            <p className="mb-6">AI must now:</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#0E3E1B] mt-1 flex-shrink-0" />
                <span>Predict optimal markdown timing</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#0E3E1B] mt-1 flex-shrink-0" />
                <span>Personalize offers dynamically</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#0E3E1B] mt-1 flex-shrink-0" />
                <span>Protect margin through smarter pricing</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#0E3E1B] mt-1 flex-shrink-0" />
                <span>Identify price sensitivity segments</span>
              </li>
            </ul>
            <p className="text-base italic border-t border-[#F1EEEA]/20 pt-6" style={{ fontFamily: 'Georgia, serif' }}>
              "The era of emotional impulse is fading. The era of algorithmic rationality has begun."
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 - Value Chain Analysis */}
      <section className="min-h-screen flex items-center py-32 px-8 lg:px-20 bg-[#F1EEEA]">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-8">
            <span className="text-xs tracking-wider uppercase text-[#0E3E1B] font-medium">
              OPERATIONAL ARCHITECTURE · AI INTEGRATION
            </span>
          </div>

          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-6xl leading-tight text-[#212427] font-medium mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              AI Is Not a Layer — It Is a System-Level Rewrite
            </h2>
            <p className="text-lg leading-relaxed text-[#212427]">
              From trend forecasting to returns, AI is being injected into every decision node across the fashion value chain
            </p>
          </div>

          <div className="mb-16 overflow-x-auto">
            <div className="min-w-[800px] flex items-center justify-between gap-4 px-8">
              {[
                { icon: TrendingUp, label: 'Trend Intelligence', impact: 'Computer vision trend analysis', color: '#CB9FD2', highlight: false },
                { icon: Palette, label: 'Design & Development', impact: 'Generative design concepts', color: '#FFC9C1', highlight: false },
                { icon: Package, label: 'Sourcing & Procurement', impact: 'Supplier risk scoring', color: '#697485', highlight: false },
                { icon: Settings, label: 'Manufacturing', impact: 'Capacity forecasting', color: '#2A4E45', highlight: false },
                { icon: GitBranch, label: 'Allocation & Inventory', impact: 'Store-level allocation models', color: '#0E3E1B', highlight: true },
                { icon: DollarSign, label: 'Merchandising & Pricing', impact: 'Dynamic pricing engines', color: '#CB9FD2', highlight: true },
                { icon: ShoppingCart, label: 'Commerce & Search', impact: 'AI search interpretation', color: '#FFC9C1', highlight: true },
                { icon: RotateCcw, label: 'Returns & Recommerce', impact: 'Return probability prediction', color: '#697485', highlight: false },
              ].map((stage, i) => (
                <div key={i} className="flex-1 min-w-[100px]">
                  <div className={`relative mb-4 p-6 rounded-2xl border-2 bg-white transition-all duration-300 ${
                    stage.highlight 
                      ? 'border-[#0E3E1B] shadow-lg shadow-[#CB9FD2]/20' 
                      : 'border-[#697485]/20 hover:border-[#697485]/40'
                  }`}>
                    <stage.icon className="w-8 h-8 mx-auto" style={{ color: stage.color }} />
                    {stage.highlight && (
                      <div className="absolute -top-2 -right-2 bg-[#CB9FD2] text-white text-xs px-2 py-1 rounded-full">
                        HIGH VALUE
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-[#212427] text-center mb-1">{stage.label}</p>
                  <p className="text-xs text-[#697485] text-center">{stage.impact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Decision Layer Architecture */}
          <div className="mb-12 bg-white p-10 rounded-2xl border border-[#697485]/20">
            <h3 className="text-xl font-medium mb-8 text-[#212427] text-center">AI Decision Layer Architecture</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {[
                { label: 'Data Sources', color: '#697485' },
                { label: 'Structured Data Layer', color: '#2A4E45' },
                { label: 'Knowledge Graph', color: '#2A4E45' },
                { label: 'AI Model Stack', color: '#0E3E1B' },
                { label: 'Decision Engine', color: '#0E3E1B', highlight: true },
                { label: 'Workflow Automation', color: '#0E3E1B' },
              ].map((layer, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`px-6 py-4 rounded-xl border-2 ${
                    layer.highlight 
                      ? 'border-[#0E3E1B] bg-[#0E3E1B]/10 shadow-lg shadow-[#0E3E1B]/20' 
                      : 'border-[#697485]/30 bg-white'
                  }`}>
                    <p className="text-sm font-medium text-center" style={{ color: layer.color }}>
                      {layer.label}
                    </p>
                  </div>
                  {i < 5 && <span className="text-[#2A4E45] text-2xl hidden md:inline">→</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Value Creation Heat Map */}
          <div className="mb-12 bg-white p-10 rounded-2xl border border-[#697485]/20">
            <h3 className="text-xl font-medium mb-8 text-[#212427]">Value Creation Heat Map</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {[
                { stage: 'Trend', impact: 'Medium', color: '#2A4E45' },
                { stage: 'Design', impact: 'High', color: '#0E3E1B' },
                { stage: 'Sourcing', impact: 'Medium', color: '#2A4E45' },
                { stage: 'Manufacturing', impact: 'Medium', color: '#2A4E45' },
                { stage: 'Allocation', impact: 'Very High', color: '#0E3E1B' },
                { stage: 'Pricing', impact: 'Very High', color: '#0E3E1B' },
                { stage: 'Commerce', impact: 'High', color: '#0E3E1B' },
                { stage: 'Returns', impact: 'Medium', color: '#2A4E45' },
              ].map((item, i) => (
                <div key={i} className="text-center p-4 rounded-xl" style={{ backgroundColor: `${item.color}20` }}>
                  <p className="text-xs font-semibold mb-2" style={{ color: item.color }}>{item.stage}</p>
                  <p className="text-xs text-[#697485]">{item.impact}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#12211D] text-[#F1EEEA] p-12 rounded-2xl">
            <blockquote className="text-lg leading-relaxed mb-6 italic" style={{ fontFamily: 'Georgia, serif' }}>
              "90% of AI pilots fail due to broken data foundations. Without structured product data and unified systems, intelligence cannot scale."
            </blockquote>
            <div className="border-t border-[#F1EEEA]/20 pt-6 space-y-4">
              <p className="text-base">AI does not replace creativity. It replaces friction.</p>
              <p className="text-base">AI does not eliminate decision-making. It accelerates and optimizes it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - ROI Impact Dashboard */}
      <section className="min-h-screen flex items-center py-32 px-8 lg:px-20 bg-white">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-8 text-center">
            <span className="text-xs tracking-wider uppercase text-[#0E3E1B] font-medium">
              BUSINESS IMPACT ANALYSIS
            </span>
          </div>

          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-6xl leading-tight text-[#212427] font-medium mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              AI Deployments Unlock 5–15% Gains
            </h2>
            <p className="text-lg leading-relaxed text-[#212427]">
              Real-world impact across key operational metrics
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 relative">
            {/* Divider */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#FFC9C1]" />

            {/* Before AI */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#697485] mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                Traditional Operations
              </h3>
              {[
                { icon: AlertTriangle, label: 'Manual Allocation', value: '18% inventory waste', color: '#697485' },
                { icon: TrendingUp, label: 'Reactive Markdowns', value: 'Lost margin opportunity', color: '#697485' },
                { icon: Users, label: 'Generic Personalization', value: '2.1% conversion rate', color: '#697485' },
                { icon: DollarSign, label: 'Rising CAC', value: '$48 per customer', color: '#697485' },
              ].map((metric, i) => (
                <div key={i} className="bg-[#F1EEEA] p-8 rounded-xl border border-[#697485]/20">
                  <div className="flex items-center gap-4 mb-4">
                    <metric.icon className="w-6 h-6" style={{ color: metric.color }} />
                    <h4 className="font-semibold text-[#212427]">{metric.label}</h4>
                  </div>
                  <p className="text-lg text-[#212427]">{metric.value}</p>
                </div>
              ))}
            </div>

            {/* After AI */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#0E3E1B] mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                AI-Driven Operations
              </h3>
              {[
                { icon: Check, label: 'AI Allocation', value: '4% inventory waste', improvement: '↓ 78%', color: '#0E3E1B' },
                { icon: TrendingUp, label: 'Predictive Pricing', value: 'Margin recovery +5-7%', improvement: null, color: '#0E3E1B' },
                { icon: Target, label: 'AI Personalization', value: '4.8% conversion rate', improvement: '↑ 129%', color: '#0E3E1B' },
                { icon: DollarSign, label: 'Optimized CAC', value: '$22 per customer', improvement: '↓ 54%', color: '#0E3E1B' },
              ].map((metric, i) => (
                <div key={i} className="bg-[#0E3E1B]/5 p-8 rounded-xl border-2 border-[#0E3E1B] shadow-lg shadow-[#CB9FD2]/10">
                  <div className="flex items-center gap-4 mb-4">
                    <metric.icon className="w-6 h-6" style={{ color: metric.color }} />
                    <h4 className="font-semibold text-[#212427]">{metric.label}</h4>
                  </div>
                  <p className="text-lg text-[#0E3E1B] font-bold mb-2">{metric.value}</p>
                  {metric.improvement && (
                    <p className="text-sm text-[#0E3E1B] font-medium">{metric.improvement}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center max-w-[900px] mx-auto">
            <p className="text-lg leading-relaxed text-[#212427] mb-2">
              5-15% conversion lift · Faster trend-to-market · Reduced overproduction · Margin recovery at scale
            </p>
            <p className="text-sm text-[#697485]">
              ROI typically realized within 12-18 months.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 - Startup Ecosystem */}
      <section className="min-h-screen flex items-center py-32 px-8 lg:px-20 bg-[#F1EEEA]">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-8">
            <span className="text-xs tracking-wider uppercase text-[#0E3E1B] font-medium">
              MARKET LANDSCAPE
            </span>
          </div>

          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-6xl leading-tight text-[#212427] font-medium mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              The $400M Startup Ecosystem
            </h2>
            <p className="text-lg leading-relaxed text-[#212427]">
              17 AI-native fashion companies raised $400M+ in 2023-2024
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { 
                icon: Palette, 
                title: 'Design AI', 
                companies: ['Heuritech', 'Vue.ai', 'Refiberd'], 
                funding: '$150M+ raised', 
                focus: 'Speed + Accuracy',
                color: '#2A4E45' 
              },
              { 
                icon: ShoppingCart, 
                title: 'Commerce AI', 
                companies: ['Shopify AI', 'Nosto', 'Yotpo', 'Bluecore'], 
                funding: '$280M+ raised', 
                focus: 'Personalization',
                color: '#CB9FD2' 
              },
              { 
                icon: DollarSign, 
                title: 'Pricing AI', 
                companies: ['Competera', 'Pricefx', 'EDITED'], 
                funding: '$120M+ raised', 
                focus: 'Margin Protection',
                color: '#0E3E1B' 
              },
              { 
                icon: RotateCcw, 
                title: 'Resale AI', 
                companies: ['Recurate', 'Treet', 'Archive'], 
                funding: '$180M+ raised', 
                focus: 'Circular Economy',
                color: '#FFC9C1' 
              },
            ].map((category, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border" style={{ borderColor: category.color }}>
                <div className="flex items-center gap-4 mb-6">
                  <category.icon className="w-8 h-8" style={{ color: category.color }} />
                  <h3 className="text-xl font-semibold text-[#212427]">{category.title}</h3>
                </div>
                <div className="mb-6 flex flex-wrap gap-2">
                  {category.companies.map((company, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-sm rounded-full bg-[#F1EEEA] text-[#212427]"
                    >
                      {company}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-bold" style={{ color: category.color }}>{category.funding}</p>
                  <p className="text-sm text-[#697485]">Focus: {category.focus}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-12 rounded-2xl border border-[#697485]/20">
            <h3 className="text-xl font-medium mb-6 text-[#212427]">Investment Thesis</h3>
            <p className="mb-4 text-[#212427]">Investors fund:</p>
            <ul className="space-y-2 mb-6 text-[#212427]">
              <li>• Speed (faster trend-to-market)</li>
              <li>• Cost Reduction (margin protection)</li>
              <li>• Automation (less human dependency)</li>
            </ul>
            <p className="text-sm italic text-[#697485]">
              Traditional fashion tech is being disrupted by AI-first companies.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8 - High-Growth Segments */}
      <section className="min-h-screen flex items-center py-32 px-8 lg:px-20 bg-white">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-8">
            <span className="text-xs tracking-wider uppercase text-[#0E3E1B] font-medium">
              MARKET SEGMENTATION
            </span>
          </div>

          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-6xl leading-tight text-[#212427] font-medium mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              High-Growth Segments
            </h2>
            <p className="text-lg leading-relaxed text-[#212427] max-w-[900px] mx-auto">
              AI amplifies segments where personalization, inventory risk, and digital discovery dominate
            </p>
          </div>

          <div className="space-y-12 mb-16">
            {[
              { name: 'Jewellery', cagr: 8.7, width: 87, note: '4× faster growth than mass-market apparel', tag: 'AI-Driven', color: '#0E3E1B', highlight: true },
              { name: 'Footwear', cagr: 6.2, width: 62, note: '10% CAGR in EU market', tag: 'Emerging AI', color: '#2A4E45', highlight: false },
              { name: 'Resale', cagr: 11.3, width: 100, note: '2–3× faster growth than primary market', tag: 'High AI Impact', color: '#0E3E1B', highlight: true },
              { name: 'Mid-Market Luxury', cagr: 5.4, width: 54, note: 'AI adoption lagging but opportunity high', tag: 'Traditional', color: '#697485', highlight: false },
            ].map((segment, i) => (
              <div key={i} className={`p-8 rounded-2xl ${segment.highlight ? 'bg-[#F1EEEA]' : 'bg-white border border-[#697485]/10'}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-[#212427]" style={{ fontFamily: 'Georgia, serif' }}>{segment.name}</h3>
                  <span 
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{ 
                      backgroundColor: `${segment.color}20`, 
                      color: segment.color 
                    }}
                  >
                    {segment.tag}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="h-8 bg-[#697485]/10 rounded-full overflow-hidden relative">
                    <div 
                      className={`h-full rounded-full transition-all duration-700 ${segment.highlight ? 'shadow-lg' : ''}`}
                      style={{ 
                        width: `${segment.width}%`, 
                        backgroundColor: segment.color,
                        boxShadow: segment.highlight ? `0 0 20px ${segment.color}40` : 'none'
                      }}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: segment.color }}>
                      {segment.cagr}% CAGR
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#697485]">{segment.note}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#F1EEEA] p-10 rounded-2xl">
            <p className="text-lg leading-relaxed text-[#212427] mb-4">
              AI amplifies segments where:
            </p>
            <ul className="space-y-2 text-[#212427]">
              <li>• Personalization matters (jewellery, resale)</li>
              <li>• Inventory risk is high (footwear sizing)</li>
              <li>• Digital discovery dominates (all segments)</li>
            </ul>
            <p className="text-sm text-[#697485] mt-6 italic">
              The gap between AI-enabled and traditional will widen.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9 - From Tools to Agents */}
      <section className="min-h-screen flex items-center py-32 px-8 lg:px-20 bg-[#F1EEEA]">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-8">
            <span className="text-xs tracking-wider uppercase text-[#0E3E1B] font-medium">
              AI EVOLUTION
            </span>
          </div>

          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-6xl leading-tight text-[#212427] font-medium mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              From Tools to Agents
            </h2>
            <p className="text-lg leading-relaxed text-[#212427]">
              AI is evolving from predictive analytics to autonomous decision systems
            </p>
          </div>

          <div className="mb-16">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-12 left-0 right-0 h-[2px] bg-[#697485]/30 hidden md:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { year: '2018-2020', label: 'Predictive Analytics', status: 'Past', desc: 'Basic algorithms forecast trends', color: '#697485' },
                  { year: '2023-2024', label: 'Generative Tools', status: 'Current', desc: 'AI creates designs, content', color: '#2A4E45' },
                  { year: '2025-2027', label: 'Agentic Automation', status: 'Emerging', desc: 'Autonomous shopping assistants', color: '#0E3E1B', highlight: true },
                  { year: '2030+', label: 'Autonomous Systems', status: 'Vision', desc: 'Self-optimizing operations', color: '#0E3E1B' },
                ].map((era, i) => (
                  <div key={i} className="relative">
                    <div className={`relative z-10 bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${
                      era.highlight 
                        ? 'border-[#CB9FD2] shadow-lg shadow-[#CB9FD2]/30' 
                        : 'border-[#697485]/20 hover:border-[#697485]/40'
                    }`}>
                      <div className={`w-6 h-6 rounded-full mx-auto mb-4 ${era.highlight ? 'bg-[#CB9FD2]' : 'bg-[#697485]/30'}`} />
                      <div className="text-center space-y-3">
                        <p className="text-xs text-[#697485] uppercase tracking-wider">{era.year}</p>
                        <h3 className="font-semibold text-[#212427]">{era.label}</h3>
                        <p className="text-xs px-3 py-1 rounded-full inline-block" style={{ 
                          backgroundColor: `${era.color}20`, 
                          color: era.color 
                        }}>
                          {era.status}
                        </p>
                        <p className="text-sm text-[#697485] leading-relaxed">{era.desc}</p>
                      </div>
                      {era.highlight && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="text-xl">★</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-2xl border border-[#697485]/20">
            <p className="text-lg leading-relaxed text-[#212427] mb-6">
              The shift from tools to agents changes:
            </p>
            <ul className="space-y-3 text-[#212427]">
              <li>• <span className="font-semibold">Who makes decisions</span> (AI vs. human)</li>
              <li>• <span className="font-semibold">Speed of execution</span> (real-time vs. batch)</li>
              <li>• <span className="font-semibold">Scope of impact</span> (task vs. process)</li>
            </ul>
            <p className="text-sm text-[#697485] mt-8 italic">
              By 2030, most fashion operations will be agent-orchestrated.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10 - 2030 Vision */}
      <section className="min-h-screen flex items-center py-32 px-8 lg:px-20 bg-white">
        <div className="max-w-[1000px] mx-auto w-full text-center">
          <div className="mb-16 space-y-8">
            <h2 
              className="text-5xl lg:text-7xl leading-[0.95] text-[#212427] font-medium"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Fashion Becomes Intelligence-First
            </h2>
            
            <div className="relative inline-block">
              <div className="text-8xl lg:text-9xl font-bold text-[#0E3E1B]" style={{ fontFamily: 'Georgia, serif' }}>
                $89B
              </div>
              <div className="h-1 w-1/2 mx-auto mt-4 bg-[#FFC9C1] rounded-full" />
            </div>

            <p className="text-xl text-[#697485]">AI Market by 2035</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { stat: '30%', label: 'EU Online Share by 2030' },
              { stat: '11%', label: 'EU E-commerce CAGR' },
              { stat: '40%', label: 'AI Shopping Behavior' },
            ].map((item, i) => (
              <div key={i} className="p-8">
                <div className="text-4xl font-bold text-[#0E3E1B] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.stat}
                </div>
                <p className="text-sm text-[#697485]">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#F1EEEA] p-12 rounded-2xl mb-16 max-w-[700px] mx-auto">
            <p className="text-lg font-medium text-[#212427] mb-6">AI embedded in:</p>
            <div className="space-y-3 text-left text-[#212427]">
              <p>→ Design systems</p>
              <p>→ Pricing engines</p>
              <p>→ Supply chain orchestration</p>
              <p>→ AI-native shopping journeys</p>
            </div>
          </div>

          <div className="max-w-[800px] mx-auto">
            <p className="text-2xl leading-relaxed italic text-[#212427] mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Fashion becomes:
            </p>
            <div className="space-y-4 text-xl text-[#212427]">
              <p>Not product-first.</p>
              <p>Not brand-first.</p>
              <p className="font-semibold text-[#0E3E1B]">But intelligence-first.</p>
            </div>
            <p className="text-sm text-[#697485] mt-12 leading-relaxed max-w-[600px] mx-auto">
              The companies that win are those that master the data flywheel before their competitors.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#697485]/20 py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-medium text-[#212427]">
              State of Fashion 2026 Report
            </h3>
            <p className="text-sm text-[#697485]">
              Intelligence Is Becoming the Core Product
            </p>
            <p className="text-xs text-[#697485]">
              Source: McKinsey, Bain, Euromonitor, Grand View Research
            </p>
            <div className="pt-8">
              <button
                onClick={() => onNavigate?.('home-v8')}
                className="text-sm text-[#0E3E1B] hover:underline"
              >
                View Full Report →
              </button>
            </div>
            <p className="text-xs text-[#697485] pt-4">
              © 2026 StartupAI · Fashion Intelligence Platform
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}