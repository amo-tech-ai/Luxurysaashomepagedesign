interface Step {
  number: number;
  title: string;
  description: string;
}

interface StepListProps {
  steps: Step[];
  activeStep: number;
}

export function StepList({ steps, activeStep }: StepListProps) {
  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <div
          key={step.number}
          className="relative pl-12 transition-opacity duration-200"
          style={{ opacity: activeStep === index ? 1 : 0.4 }}
        >
          {/* Step Number with Active Indicator */}
          <div className="absolute left-0 top-0 flex items-center gap-3">
            <span
              className={`text-2xl transition-colors duration-200 ${
                activeStep === index ? 'text-gray-900' : 'text-gray-500'
              }`}
            >
              {step.number}
            </span>
            {activeStep === index && (
              <div className="w-2 h-2 rounded-sm bg-[#0d5f4e]" />
            )}
          </div>

          {/* Step Content */}
          <div className="space-y-2">
            <h3
              className={`text-xl lg:text-2xl transition-all duration-200 ${
                activeStep === index ? 'text-gray-900' : 'text-gray-600'
              }`}
            >
              {step.title}
            </h3>
            <p
              className={`text-base lg:text-lg leading-relaxed transition-opacity duration-200 ${
                activeStep === index ? 'text-gray-600 opacity-100' : 'text-gray-500 opacity-0'
              }`}
            >
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
