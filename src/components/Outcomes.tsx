import { Compass, Layers, Brain, MessageSquare } from 'lucide-react';

const outcomes = [
  {
    icon: Compass,
    title: 'Clear priorities',
    description: 'Know exactly what matters most, every single day.',
  },
  {
    icon: Layers,
    title: 'Aligned execution',
    description: 'Every task connects to your larger strategic vision.',
  },
  {
    icon: Brain,
    title: 'Reduced decision fatigue',
    description: 'Spend energy on building, not on scattered coordination.',
  },
  {
    icon: MessageSquare,
    title: 'Confident investor communication',
    description: 'Share progress with clarity and strategic context.',
  },
];

export function Outcomes() {
  return (
    <section className="bg-[#f5f5f3] py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            The outcomes that matter
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            StartupAI doesn't just organize work—it transforms how you think, decide, and build.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((outcome, index) => (
            <div key={index} className="space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#0d5f4e] bg-opacity-10 flex items-center justify-center">
                <outcome.icon className="w-7 h-7 text-[#0d5f4e]" />
              </div>
              
              <h3 className="text-xl text-gray-900">
                {outcome.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
