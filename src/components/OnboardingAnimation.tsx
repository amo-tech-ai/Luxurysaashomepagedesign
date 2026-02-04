import { useState, useEffect } from 'react';
import { 
  Globe, 
  BarChart3, 
  Sparkles, 
  LayoutDashboard,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface OnboardingAnimationProps {
  onComplete?: () => void;
  autoStart?: boolean;
}

type Step = {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  duration: number;
};

const STEPS: Step[] = [
  {
    id: 1,
    title: 'Understanding your product',
    subtitle: 'Analyzing your website and links',
    icon: <Globe className="w-6 h-6" />,
    duration: 2500
  },
  {
    id: 2,
    title: 'Mapping your market',
    subtitle: 'Competitors, positioning, benchmarks',
    icon: <BarChart3 className="w-6 h-6" />,
    duration: 2500
  },
  {
    id: 3,
    title: 'Identifying key signals',
    subtitle: 'Strengths, gaps, and risks',
    icon: <Sparkles className="w-6 h-6" />,
    duration: 2500
  },
  {
    id: 4,
    title: 'Building your dashboard',
    subtitle: 'Tasks, insights, next steps',
    icon: <LayoutDashboard className="w-6 h-6" />,
    duration: 2500
  }
];

export function OnboardingAnimation({ onComplete, autoStart = true }: OnboardingAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    if (!autoStart) return;

    if (currentStep < STEPS.length) {
      // Progress bar animation
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + (100 / (STEPS[currentStep].duration / 50));
        });
      }, 50);

      // Move to next step
      const stepTimer = setTimeout(() => {
        setCompletedSteps((prev) => [...prev, currentStep]);
        setProgress(0);
        
        if (currentStep === STEPS.length - 1) {
          // Final step completed
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              onComplete?.();
            }, 1500);
          }, 500);
        } else {
          setCurrentStep((prev) => prev + 1);
        }
      }, STEPS[currentStep].duration);

      return () => {
        clearInterval(progressInterval);
        clearTimeout(stepTimer);
      };
    }
  }, [currentStep, autoStart, onComplete]);

  if (isComplete) {
    return (
      <div className="min-h-screen bg-[#fafaf8] flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          {/* Completion State */}
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] rounded-3xl mx-auto flex items-center justify-center mb-6 animate-in zoom-in duration-500">
                <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
              <h1 className="text-4xl text-gray-900 mb-3 font-light">
                Your startup is ready
              </h1>
              <p className="text-lg text-gray-600 font-light">
                Everything is set up and waiting for you
              </p>
            </div>

            {/* Dashboard Preview Blur */}
            <div className="relative mb-8 rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-white">
              <div className="aspect-video bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center px-8">
                  <div className="grid grid-cols-3 gap-4 mb-6 opacity-30">
                    <div className="h-24 bg-gray-200 rounded-2xl" />
                    <div className="h-24 bg-gray-200 rounded-2xl" />
                    <div className="h-24 bg-gray-200 rounded-2xl" />
                  </div>
                  <div className="space-y-3 opacity-20">
                    <div className="h-3 bg-gray-200 rounded-full w-3/4 mx-auto" />
                    <div className="h-3 bg-gray-200 rounded-full w-1/2 mx-auto" />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onComplete}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0d5f4e] text-white rounded-2xl hover:bg-[#0a4a3b] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-base font-medium"
            >
              Enter Dashboard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafaf8] flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-4xl text-gray-900 mb-3 font-light">
            Setting up your Startup AI
          </h1>
          <p className="text-lg text-gray-600 font-light">
            This takes about 30 seconds
          </p>
        </div>

        {/* Animation Cards Stack */}
        <div className="relative min-h-[400px] mb-12">
          {STEPS.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = completedSteps.includes(index);
            const isPast = index < currentStep;
            const isFuture = index > currentStep;

            return (
              <div
                key={step.id}
                className={`absolute inset-x-0 transition-all duration-700 ease-out ${
                  isActive
                    ? 'opacity-100 translate-y-0 scale-100 z-30'
                    : isPast
                    ? 'opacity-40 -translate-y-12 scale-95 z-10'
                    : 'opacity-0 translate-y-12 scale-95 z-0'
                }`}
                style={{
                  transform: isPast 
                    ? `translateY(-${(currentStep - index) * 48}px) scale(0.95)` 
                    : undefined
                }}
              >
                <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8">
                  {/* Icon Container */}
                  <div className="flex items-start gap-6 mb-6">
                    <div 
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isCompleted 
                          ? 'bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89]' 
                          : 'bg-gradient-to-br from-[#0d5f4e]/10 to-[#6b9d89]/10'
                      }`}
                    >
                      <div className={`transition-all duration-500 ${
                        isActive ? 'animate-pulse' : ''
                      }`}>
                        {isCompleted ? (
                          <CheckCircle2 className="w-7 h-7 text-white" strokeWidth={2.5} />
                        ) : (
                          <div className="text-[#0d5f4e]">
                            {step.icon}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl text-gray-900 mb-2 font-light">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-light">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar - Different types for each step */}
                  {isActive && (
                    <div className="mt-6">
                      {index === 0 && (
                        // Linear progress for Step 1
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] rounded-full transition-all duration-100 ease-linear"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      )}

                      {index === 1 && (
                        // Shimmer effect for Step 2
                        <div className="relative h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] rounded-full transition-all duration-100"
                            style={{ width: `${progress}%` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                        </div>
                      )}

                      {index === 2 && (
                        // Circular progress for Step 3
                        <div className="flex items-center gap-4">
                          <div className="relative w-12 h-12">
                            <svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
                              <circle
                                cx="24"
                                cy="24"
                                r="20"
                                fill="none"
                                stroke="#e5e7eb"
                                strokeWidth="4"
                              />
                              <circle
                                cx="24"
                                cy="24"
                                r="20"
                                fill="none"
                                stroke="url(#gradient)"
                                strokeWidth="4"
                                strokeDasharray={`${2 * Math.PI * 20}`}
                                strokeDashoffset={`${2 * Math.PI * 20 * (1 - progress / 100)}`}
                                strokeLinecap="round"
                                className="transition-all duration-100"
                              />
                              <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#0d5f4e" />
                                  <stop offset="100%" stopColor="#6b9d89" />
                                </linearGradient>
                              </defs>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs font-medium text-[#0d5f4e]">
                                {Math.round(progress)}%
                              </span>
                            </div>
                          </div>
                          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] rounded-full transition-all duration-100"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      {index === 3 && (
                        // Grid animation for Step 4
                        <div className="space-y-2">
                          <div className="grid grid-cols-4 gap-2">
                            {[...Array(4)].map((_, i) => (
                              <div
                                key={i}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                  progress > (i * 25)
                                    ? 'bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89]'
                                    : 'bg-gray-100'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Dots */}
        <div className="flex items-center justify-center gap-3">
          {STEPS.map((step, index) => (
            <div
              key={step.id}
              className={`transition-all duration-500 rounded-full ${
                index < currentStep
                  ? 'w-2 h-2 bg-[#0d5f4e]'
                  : index === currentStep
                  ? 'w-12 h-2 bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] shadow-lg'
                  : 'w-2 h-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Add shimmer animation styles */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
