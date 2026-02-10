import { CheckCircle2, Circle } from 'lucide-react';

export function ThreeStepsCard() {
  const steps = [
    {
      number: 1,
      label: 'UNDERSTAND',
      description: 'Immersive CX concepts, trends, relevance',
      status: 'complete',
    },
    {
      number: 2,
      label: 'IDEATE & VALIDATE',
      description: 'Fill canvas, assess value dimensions',
      status: 'active',
    },
    {
      number: 3,
      label: 'IMPLEMENT',
      description: 'Partners, tools, MVP next steps',
      status: 'pending',
    },
  ];
  
  return (
    <div className="bg-white rounded-lg border border-[#E8E6E1] p-5">
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
        Three Steps to Success
      </h3>
      
      <div className="space-y-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
              step.status === 'active'
                ? 'bg-[#E8F4F1] border border-[#0d5f4e]'
                : step.status === 'complete'
                ? 'bg-gray-50'
                : 'bg-white'
            }`}
          >
            <div className="flex-shrink-0 mt-0.5">
              {step.status === 'complete' ? (
                <CheckCircle2 className="w-5 h-5 text-[#0d5f4e]" />
              ) : step.status === 'active' ? (
                <div className="w-5 h-5 rounded-full bg-[#0d5f4e] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{step.number}</span>
                </div>
              ) : (
                <Circle className="w-5 h-5 text-gray-300" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div
                className={`text-xs font-bold uppercase tracking-wide mb-1 ${
                  step.status === 'active' ? 'text-[#0d5f4e]' : 'text-gray-500'
                }`}
              >
                {step.number}. {step.label}
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-[#E8E6E1]">
        <p className="text-xs text-gray-500 leading-relaxed">
          <strong>Focus:</strong> Value generation over technical feasibility or trend-chasing.
        </p>
      </div>
    </div>
  );
}
