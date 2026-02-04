import { useState, useEffect } from 'react';
import { Layers, Shield, ArrowRight } from 'lucide-react';

interface MinimalOnboardingProps {
  onStart?: () => void;
  autoAdvance?: boolean;
  autoAdvanceDelay?: number;
}

export function MinimalOnboarding({ 
  onStart, 
  autoAdvance = true,
  autoAdvanceDelay = 3000 
}: MinimalOnboardingProps) {
  const [currentScreen, setCurrentScreen] = useState<'intro' | 'control'>('intro');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (autoAdvance && currentScreen === 'intro') {
      const timer = setTimeout(() => {
        handleAdvance();
      }, autoAdvanceDelay);

      return () => clearTimeout(timer);
    }
  }, [autoAdvance, autoAdvanceDelay, currentScreen]);

  const handleAdvance = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentScreen('control');
      setIsTransitioning(false);
    }, 100);
  };

  const handleStart = () => {
    onStart?.();
  };

  return (
    <div className="min-h-screen bg-[#fafaf8] flex items-center justify-center p-6">
      <div className="max-w-xl w-full">
        {/* Content Container */}
        <div className="relative min-h-[500px] flex flex-col items-center justify-center">
          {/* Icon Container */}
          <div className="mb-12">
            <div
              className={`w-20 h-20 rounded-3xl bg-gradient-to-br from-[#0d5f4e]/10 to-[#6b9d89]/10 flex items-center justify-center transition-all duration-500 ease-in-out ${
                isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              {currentScreen === 'intro' ? (
                <Layers className="w-10 h-10 text-[#0d5f4e]" strokeWidth={1.5} />
              ) : (
                <Shield className="w-10 h-10 text-[#0d5f4e]" strokeWidth={1.5} />
              )}
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center mb-12">
            {/* Headline */}
            <h1
              className={`text-4xl text-gray-900 mb-4 font-light tracking-tight transition-all duration-500 ease-in-out ${
                isTransitioning 
                  ? 'opacity-0 translate-y-4' 
                  : 'opacity-100 translate-y-0'
              }`}
            >
              {currentScreen === 'intro' 
                ? "Let's build your startup profile." 
                : "You're in control."}
            </h1>

            {/* Subtext */}
            <p
              className={`text-lg text-gray-600 font-light max-w-md mx-auto transition-all duration-500 ease-in-out delay-100 ${
                isTransitioning 
                  ? 'opacity-0 translate-y-4' 
                  : 'opacity-100 translate-y-0'
              }`}
            >
              {currentScreen === 'intro'
                ? 'This takes about 2–3 minutes.'
                : 'You review everything. Nothing is saved without your approval.'}
            </p>
          </div>

          {/* Button (Control Screen Only) */}
          {currentScreen === 'control' && (
            <div
              className={`transition-all duration-500 ease-in-out delay-200 ${
                isTransitioning 
                  ? 'opacity-0 translate-y-8' 
                  : 'opacity-100 translate-y-0'
              }`}
            >
              <button
                onClick={handleStart}
                className="group px-8 py-4 bg-[#0d5f4e] text-white rounded-2xl hover:bg-[#0a4a3b] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-base font-medium inline-flex items-center gap-3"
              >
                Start
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          )}
        </div>

        {/* Progress Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <div
            className={`transition-all duration-500 rounded-full ${
              currentScreen === 'intro'
                ? 'w-8 h-2 bg-[#0d5f4e]'
                : 'w-2 h-2 bg-gray-300'
            }`}
          />
          <div
            className={`transition-all duration-500 rounded-full ${
              currentScreen === 'control'
                ? 'w-8 h-2 bg-[#0d5f4e]'
                : 'w-2 h-2 bg-gray-300'
            }`}
          />
        </div>

        {/* Manual Navigation (for testing) */}
        {currentScreen === 'intro' && !autoAdvance && (
          <div className="text-center mt-8">
            <button
              onClick={handleAdvance}
              className="text-sm text-gray-500 hover:text-[#0d5f4e] transition-colors"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
