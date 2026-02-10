import { ArrowRight } from 'lucide-react';

interface StrategyCardProps {
  category: string;
  title: string;
  description: string;
  primaryOutcome: string;
  ctaText: string;
  ctaRoute?: string;
  onNavigate?: (route: string) => void;
}

function StrategyCard({
  category,
  title,
  description,
  primaryOutcome,
  ctaText,
  ctaRoute,
  onNavigate,
}: StrategyCardProps) {
  const handleClick = () => {
    if (ctaRoute && onNavigate) {
      onNavigate(ctaRoute);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full h-full text-left bg-white border border-[#E8E6E1] rounded-lg p-8 transition-all duration-150 hover:border-[#0d5f4e] hover:bg-[#FAF9F7] group"
    >
      {/* Category Label */}
      <div className="text-[10px] uppercase tracking-[0.1em] text-[#6b9d89] font-medium mb-4">
        {category}
      </div>

      {/* Card Title */}
      <h3 className="text-xl text-[#2D2D2D] mb-3 font-medium">{title}</h3>

      {/* Description */}
      <p className="text-[15px] leading-relaxed text-[#4A4A4A] mb-6">{description}</p>

      {/* Divider */}
      <div className="border-t border-[#E8E6E1] mb-6" />

      {/* Primary Outcome */}
      <div className="mb-4">
        <div className="text-[11px] uppercase tracking-wider text-[#A3A3A3] mb-2">Primary Outcome</div>
        <div className="text-[15px] font-medium text-[#2D2D2D]">{primaryOutcome}</div>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-2 text-[15px] text-[#0d5f4e] font-medium transition-all duration-150 group-hover:gap-3">
        {ctaText}
        <ArrowRight className="w-4 h-4" />
      </div>
    </button>
  );
}

interface StrategySystemProps {
  onNavigate?: (route: string) => void;
}

export function StrategySystem({ onNavigate }: StrategySystemProps) {
  const strategyCards: StrategyCardProps[] = [
    {
      category: 'PRE-STRATEGY',
      title: 'Startup Validator',
      description:
        'Quickly assess whether an idea is worth pursuing. Identify fatal flaws, weak assumptions, and unclear goals before investing time.',
      primaryOutcome: 'Go / No-Go clarity',
      ctaText: 'Validate idea',
      ctaRoute: 'validator-v3',
    },
    {
      category: 'STRATEGY MODEL',
      title: 'Lean Canvas',
      description:
        'Structure your startup\'s business model across problems, customers, value proposition, channels, and economics — in one system.',
      primaryOutcome: 'Strategic clarity',
      ctaText: 'Build canvas',
      ctaRoute: 'lean-canvas',
    },
    {
      category: 'MARKET INTELLIGENCE',
      title: 'Market Research',
      description:
        'Quantify demand, map competitors, and understand customer behavior to validate your strategy with evidence.',
      primaryOutcome: 'Market confidence',
      ctaText: 'Research market',
      ctaRoute: 'market-research-hub',
    },
    {
      category: 'FUNDRAISING STRATEGY',
      title: 'Investor & Funding Strategy',
      description:
        'Define who should fund you, at what stage, and with what story — based on your strategy and traction.',
      primaryOutcome: 'Funding focus',
      ctaText: 'Plan funding',
      ctaRoute: 'events',
    },
    {
      category: 'COMMUNICATION',
      title: 'Pitch Deck',
      description:
        'Turn your strategy into an investor-ready narrative with clear logic, metrics, and positioning.',
      primaryOutcome: 'Investor-ready story',
      ctaText: 'Create deck',
      ctaRoute: 'pitch-deck',
    },
    {
      category: 'EXECUTION PLANNING',
      title: '90-Day Plan',
      description:
        'Translate strategy into a focused 90-day roadmap with priorities, milestones, and measurable outcomes.',
      primaryOutcome: 'Execution momentum',
      ctaText: 'Generate plan',
      ctaRoute: '90-day-plan',
    },
    {
      category: 'OPERATIONS',
      title: 'Kanban Board',
      description:
        'Turn plans into action with a structured workflow that prevents task sprawl and execution chaos.',
      primaryOutcome: 'Operational clarity',
      ctaText: 'Start execution',
      ctaRoute: 'dashboard',
    },
    {
      category: 'RELATIONSHIP MANAGEMENT',
      title: 'CRM & Investor Tracker',
      description:
        'Track investors, conversations, follow-ups, and deal stages in one structured system.',
      primaryOutcome: 'Fundraising discipline',
      ctaText: 'Manage relationships',
      ctaRoute: 'events',
    },
  ];

  return (
    <section className="py-24 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl text-[#2D2D2D] mb-6 leading-tight">
            The complete strategy system for founders
          </h2>
          <p className="text-lg text-[#4A4A4A] leading-relaxed">
            From validation to execution, StartupAI provides structured frameworks and AI-powered guidance at
            every critical stage of your startup journey.
          </p>
        </div>

        {/* Strategy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategyCards.map((card, index) => (
            <StrategyCard key={index} {...card} onNavigate={onNavigate} />
          ))}
        </div>

        {/* Optional Bottom Section */}
        <div className="mt-20 pt-12 border-t border-[#E8E6E1]">
          <div className="max-w-2xl">
            <h3 className="text-2xl text-[#2D2D2D] mb-4">One system. Clear stages. No guesswork.</h3>
            <p className="text-[15px] text-[#4A4A4A] leading-relaxed">
              Each module solves one critical startup decision — in the right order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
