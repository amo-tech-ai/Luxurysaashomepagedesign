import { 
  Sparkles, 
  LayoutGrid, 
  FileText, 
  Users, 
  Search, 
  TrendingUp, 
  CheckCircle2, 
  BarChart3, 
  MessageSquare 
} from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Startup Profile Wizard',
    description: 'AI automatically discovers, structures, improves, and validates your startup information from answers, websites, and linked sources.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-[#0d5f4e]',
  },
  {
    icon: LayoutGrid,
    title: 'Readiness Analysis & Lean Canvas',
    description: 'Built-in intelligence continuously evaluates your market, traction, pricing, and risks to keep a live readiness score and Lean Canvas updated.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-[#0d5f4e]',
  },
  {
    icon: FileText,
    title: 'Pitch Deck Generator',
    description: 'Your startup data is transformed into an investor-ready pitch deck with clear structure, market context, and positioning.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-[#0d5f4e]',
  },
  {
    icon: Users,
    title: 'Investor CRM & Pipeline',
    description: 'Investor conversations and deal stages are monitored and analyzed so the right follow-ups surface at the right time.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-[#0d5f4e]',
  },
  {
    icon: Search,
    title: 'Investor Enrichment & Discovery',
    description: 'Investor profiles are enriched and matched automatically by researching firms, focus areas, portfolios, and relevance to your startup.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-[#0d5f4e]',
  },
  {
    icon: TrendingUp,
    title: 'Intelligent Lead Scoring',
    description: 'Investors are ranked by fit and likelihood to invest, helping you focus on the strongest opportunities first.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-[#0d5f4e]',
  },
  {
    icon: CheckCircle2,
    title: 'AI-Generated Tasks',
    description: 'Daily actions are suggested and prioritized automatically based on startup progress and investor activity.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-[#0d5f4e]',
  },
  {
    icon: BarChart3,
    title: 'Market Research Intelligence',
    description: 'Market opportunities are researched, sized, and supported with credible sources you can confidently share with investors.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-[#0d5f4e]',
  },
  {
    icon: MessageSquare,
    title: 'Documents & AI Coach',
    description: 'Investor documents are generated and strategic guidance is provided using your startup\'s real data and context.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-[#0d5f4e]',
  },
];

export function Features() {
  return (
    <section className="bg-[#f5f5f3] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="text-sm uppercase tracking-wider text-[#0d5f4e] mb-4">
            Features
          </div>
          <h2 className="text-4xl lg:text-5xl leading-tight text-gray-900 mb-6">
            Everything you need to raise smarter
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light">
            One connected system for profiling, analysis, fundraising, and execution.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-8 lg:gap-y-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group"
              >
                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.iconBg} mb-6 transition-transform duration-200 group-hover:scale-105`}>
                  <Icon className={`w-7 h-7 ${feature.iconColor} stroke-[1.5]`} />
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl text-gray-900 mb-4 font-medium leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-base text-gray-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}