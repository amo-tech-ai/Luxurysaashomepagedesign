import React from 'react';
import { Check } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  subtitle: string;
}

interface ProgressBarProps {
  currentStep: number;
  steps: Step[];
}

export function ProgressBar({ currentStep, steps }: ProgressBarProps) {
  return (
    <div className="bg-white border-b border-[#E8E6E1] px-8 py-6">
      <div className="max-w-4xl mx-auto">
        {/* Step Indicators */}
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => {
            const isCompleted = currentStep > step.number;
            const isCurrent = currentStep === step.number;
            const isUpcoming = currentStep < step.number;

            return (
              <React.Fragment key={step.number}>
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      isCompleted
                        ? 'bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] text-white shadow-md'
                        : isCurrent
                        ? 'bg-white border-2 border-[#0D5F4E] text-[#0D5F4E] shadow-lg'
                        : 'bg-[#F5F5F3] text-[#A3A3A3] border-2 border-[#E8E6E1]'
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <span className="text-sm">{step.number}</span>
                    )}
                  </div>
                  <div className="mt-3 text-center">
                    <div
                      className={`text-xs font-semibold transition-colors duration-200 ${
                        isCurrent ? 'text-[#0D5F4E]' : 'text-[#A3A3A3]'
                      }`}
                    >
                      {step.title}
                    </div>
                    <div className="text-xs text-[#A3A3A3] mt-0.5">
                      {step.subtitle}
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="flex-1 h-0.5 mx-4 mb-16 relative">
                    <div className="absolute inset-0 bg-[#E8E6E1]" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] transition-all duration-500 ${
                        isCompleted ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Progress Percentage */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-xs text-[#A3A3A3] mb-2">
            <span>Progress</span>
            <span className="font-semibold text-[#0D5F4E]">
              {Math.round(((currentStep - 1) / (steps.length - 1)) * 100)}% Complete
            </span>
          </div>
          <div className="w-full h-1.5 bg-[#F5F5F3] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] rounded-full transition-all duration-500"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
