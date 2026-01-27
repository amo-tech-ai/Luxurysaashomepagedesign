import React from 'react';
import { Check } from 'lucide-react';

interface Step {
  number: number;
  label: string;
}

interface StepperProps {
  currentStep: number;
  steps: Step[];
}

export function Stepper({ currentStep, steps }: StepperProps) {
  return (
    <div className="bg-white/80 backdrop-blur-xl border-b border-[#E8E6E1]/50 px-8 py-8 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between relative">
          {/* Background Progress Line */}
          <div className="absolute left-0 right-0 top-5 h-0.5 bg-gradient-to-r from-[#E8E6E1] via-[#E8E6E1] to-[#E8E6E1]" />
          <div 
            className="absolute left-0 top-5 h-0.5 bg-gradient-to-r from-[#0D5F4E] via-[#0a4a3c] to-[#0D5F4E] transition-all duration-1000 ease-out"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />

          {steps.map((step, index) => {
            const isCompleted = currentStep > step.number;
            const isCurrent = currentStep === step.number;
            const isUpcoming = currentStep < step.number;

            return (
              <div key={step.number} className="flex flex-col items-center gap-3 relative z-10">
                {/* Step Circle */}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-bold transition-all duration-500 transform ${
                    isCompleted
                      ? 'bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] text-white shadow-lg shadow-[#0D5F4E]/30 scale-100'
                      : isCurrent
                      ? 'bg-white border-3 border-[#0D5F4E] text-[#0D5F4E] shadow-xl shadow-[#0D5F4E]/20 scale-110'
                      : 'bg-white text-[#A3A3A3] border-2 border-[#E8E6E1] scale-95'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5 animate-in zoom-in duration-300" />
                  ) : (
                    <span className="text-sm font-bold">{step.number}</span>
                  )}
                </div>

                {/* Step Label */}
                <div className="flex flex-col items-center gap-1 min-w-[120px]">
                  <span
                    className={`text-sm font-semibold transition-all duration-300 ${
                      isCurrent 
                        ? 'text-[#0D5F4E] scale-105' 
                        : isCompleted
                        ? 'text-[#4A4A4A]'
                        : 'text-[#A3A3A3] scale-95'
                    }`}
                  >
                    {step.label}
                  </span>
                  {isCurrent && (
                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#0D5F4E] to-transparent animate-in fade-in slide-in-from-bottom-2 duration-500" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}