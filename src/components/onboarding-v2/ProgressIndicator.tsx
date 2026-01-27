import React from 'react';
import { Check } from 'lucide-react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

export function ProgressIndicator({ currentStep, totalSteps, stepLabels }: ProgressIndicatorProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="relative">
        <div className="w-full bg-[#E8E6E1] rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-right">
          <span className="text-xs font-bold text-[#0D5F4E]">{Math.round(progress)}%</span>
        </div>
      </div>

      {/* Step Labels */}
      <div className="space-y-1">
        {stepLabels.map((label, index) => {
          const stepNumber = index + 1;
          const isCompleted = currentStep > stepNumber;
          const isCurrent = currentStep === stepNumber;

          return (
            <div
              key={index}
              className={`group relative transition-all duration-200 ${
                isCurrent ? 'scale-[1.02]' : ''
              }`}
            >
              <div className={`flex items-center gap-3 p-2.5 rounded-lg transition-all duration-200 ${
                isCurrent ? 'bg-[#0D5F4E]/5' : ''
              }`}>
                {/* Step Number/Check */}
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 flex-shrink-0 ${
                    isCompleted
                      ? 'bg-[#0D5F4E] text-white'
                      : isCurrent
                      ? 'bg-white border-2 border-[#0D5F4E] text-[#0D5F4E]'
                      : 'bg-[#F5F5F3] text-[#A3A3A3] border border-[#E8E6E1]'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    stepNumber
                  )}
                </div>

                {/* Step Label */}
                <span
                  className={`text-xs font-medium transition-all duration-200 ${
                    isCurrent
                      ? 'text-[#0D5F4E] font-bold'
                      : isCompleted
                      ? 'text-[#4A4A4A]'
                      : 'text-[#A3A3A3]'
                  }`}
                >
                  {label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}