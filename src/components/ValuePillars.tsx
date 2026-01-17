import { Target, Zap, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Decisions, clarified',
    description: 'Cut through ambiguity with AI-guided frameworks that turn scattered thoughts into clear strategic choices.',
  },
  {
    icon: Zap,
    title: 'Execution, aligned',
    description: 'Every task connects to your strategy. See what matters, what\'s next, and why it moves the needle.',
  },
  {
    icon: TrendingUp,
    title: 'Fundraising, organized',
    description: 'Keep investors informed with intelligent updates that showcase momentum and strategic clarity.',
  },
];

export function ValuePillars() {
  return (
    <section className="bg-[#fafaf8] py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-10 lg:p-12 rounded-sm group hover:border-gray-300 transition-colors duration-200"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-[#0d5f4e] bg-opacity-10 flex items-center justify-center">
                  <pillar.icon className="w-6 h-6 text-[#0d5f4e]" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl text-gray-900">
                  {pillar.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}