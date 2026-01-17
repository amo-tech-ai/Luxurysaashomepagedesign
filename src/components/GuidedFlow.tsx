import { Brain, GitBranch, Activity, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: Brain,
    title: 'Strategy input',
    description: 'Share your vision, goals, and current challenges in a guided conversation.',
    status: 'complete',
  },
  {
    icon: GitBranch,
    title: 'AI structuring',
    description: 'Our intelligence organizes your inputs into clear frameworks and actionable plans.',
    status: 'complete',
  },
  {
    icon: Activity,
    title: 'Execution tracking',
    description: 'Your daily work connects to strategy. See progress in real-time, stay aligned.',
    status: 'active',
  },
  {
    icon: RefreshCw,
    title: 'Continuous insight',
    description: 'Learn from execution. Refine strategy. Evolve with confidence and clarity.',
    status: 'pending',
  },
];

export function GuidedFlow() {
  return (
    <section className="bg-[#f5f5f3] py-32 lg:py-40">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            How StartupAI works
          </h2>
          <p className="text-xl text-gray-600">
            A continuous loop of clarity and execution
          </p>
        </div>
        
        <div className="relative space-y-12">
          {/* Timeline line */}
          <div className="absolute left-6 top-6 bottom-6 w-px bg-[#0d5f4e]"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative pl-20">
              {/* Timeline node */}
              <div className={`absolute left-0 w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                step.status === 'complete' || step.status === 'active'
                  ? 'bg-[#0d5f4e] border-[#0d5f4e]'
                  : 'bg-gray-700 border-gray-700'
              }`}>
                <step.icon className={`w-6 h-6 ${
                  step.status === 'complete' || step.status === 'active'
                    ? 'text-white'
                    : 'text-gray-400'
                }`} />
              </div>
              
              {/* Content card */}
              <div className={`bg-white border border-gray-200 p-8 rounded-sm ${
                index >= 2 ? 'bg-opacity-95' : ''
              }`}>
                <h3 className="text-2xl lg:text-3xl text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Flow diagram */}
        <div className="mt-20 pt-20 border-t border-gray-300">
          <div className="flex items-center justify-center gap-4 text-gray-700 flex-wrap">
            <span className="text-lg">Input</span>
            <span className="text-[#0d5f4e]">→</span>
            <span className="text-lg">Structure</span>
            <span className="text-[#0d5f4e]">→</span>
            <span className="text-lg">Execute</span>
            <span className="text-[#0d5f4e]">→</span>
            <span className="text-lg">Review</span>
          </div>
        </div>
      </div>
    </section>
  );
}