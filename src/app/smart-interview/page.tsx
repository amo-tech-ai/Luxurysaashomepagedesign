'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function SmartInterviewPage() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedPrimary, setSelectedPrimary] = useState<string | null>(null);
  const [selectedFollowup, setSelectedFollowup] = useState<string | null>(null);
  const [showFollowup, setShowFollowup] = useState(false);

  // Store all answers
  const [answers, setAnswers] = useState({
    screen1Primary: null as string | null,
    screen1Followup: null as string | null,
    screen2Primary: null as string | null,
    screen2Followup: null as string | null,
    screen3Primary: null as string | null,
    screen3Followup: null as string | null,
    screen4Primary: null as string | null,
    screen4Followup: null as string | null,
    screen5Primary: null as string | null,
  });

  const handleNext = () => {
    // Save answers for current screen
    const updatedAnswers = { ...answers };
    updatedAnswers[`screen${currentScreen}Primary` as keyof typeof answers] = selectedPrimary;
    updatedAnswers[`screen${currentScreen}Followup` as keyof typeof answers] = selectedFollowup;
    setAnswers(updatedAnswers);

    // Transition to next screen
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentScreen(prev => prev + 1);
      setSelectedPrimary(null);
      setSelectedFollowup(null);
      setShowFollowup(false);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrimarySelect = (option: string) => {
    setSelectedPrimary(option);
    
    // Check if follow-up is needed based on screen and selection
    const needsFollowup = checkFollowupNeeded(currentScreen, option);
    
    if (needsFollowup) {
      setTimeout(() => setShowFollowup(true), 400);
    }
  };

  const checkFollowupNeeded = (screen: number, option: string): boolean => {
    if (screen === 1) {
      return ['Content production & coordination', 'Event planning & vendor chaos'].includes(option);
    }
    if (screen === 2) {
      return option !== 'Not defined yet';
    }
    if (screen === 3) {
      return option === 'Design partners / pilot brands';
    }
    if (screen === 4) {
      return true;
    }
    return false;
  };

  const canContinue = () => {
    if (currentScreen === 5) return selectedPrimary !== null;
    
    const needsFollowup = selectedPrimary ? checkFollowupNeeded(currentScreen, selectedPrimary) : false;
    if (needsFollowup) {
      return selectedPrimary !== null && selectedFollowup !== null;
    }
    return selectedPrimary !== null;
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-screen">
        
        {/* Left: Step Indicator (Slim) */}
        <div className="hidden lg:flex lg:col-span-1 items-start justify-center pt-32 px-4">
          <div className="flex flex-col gap-6">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`transition-all duration-500 ${
                  step === currentScreen
                    ? 'w-1 h-12 bg-[#0d5f4e]'
                    : step < currentScreen
                    ? 'w-1 h-8 bg-[#0d5f4e]/40'
                    : 'w-1 h-8 bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Center: Content Column */}
        <div className="lg:col-span-7 flex items-center justify-center px-6 sm:px-12 lg:px-16 py-20 lg:py-32">
          <div className={`w-full max-w-3xl transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            
            {currentScreen === 1 && (
              <Screen1
                selectedPrimary={selectedPrimary}
                selectedFollowup={selectedFollowup}
                showFollowup={showFollowup}
                onPrimarySelect={handlePrimarySelect}
                onFollowupSelect={setSelectedFollowup}
                onNext={handleNext}
                canContinue={canContinue()}
              />
            )}

            {currentScreen === 2 && (
              <Screen2
                selectedPrimary={selectedPrimary}
                selectedFollowup={selectedFollowup}
                showFollowup={showFollowup}
                onPrimarySelect={handlePrimarySelect}
                onFollowupSelect={setSelectedFollowup}
                onNext={handleNext}
                canContinue={canContinue()}
              />
            )}

            {currentScreen === 3 && (
              <Screen3
                selectedPrimary={selectedPrimary}
                selectedFollowup={selectedFollowup}
                showFollowup={showFollowup}
                onPrimarySelect={handlePrimarySelect}
                onFollowupSelect={setSelectedFollowup}
                onNext={handleNext}
                canContinue={canContinue()}
              />
            )}

            {currentScreen === 4 && (
              <Screen4
                selectedPrimary={selectedPrimary}
                selectedFollowup={selectedFollowup}
                showFollowup={showFollowup}
                onPrimarySelect={handlePrimarySelect}
                onFollowupSelect={setSelectedFollowup}
                onNext={handleNext}
                canContinue={canContinue()}
              />
            )}

            {currentScreen === 5 && (
              <Screen5
                selectedPrimary={selectedPrimary}
                onPrimarySelect={handlePrimarySelect}
                canContinue={canContinue()}
              />
            )}

          </div>
        </div>

        {/* Right: AI Advisor Panel */}
        <div className="hidden lg:flex lg:col-span-4 items-start justify-start pt-32 pr-12 pl-8">
          <AIAdvisorPanel currentScreen={currentScreen} />
        </div>

      </div>

      {/* Mobile Progress Indicator */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="px-6 py-4">
          <div className="text-xs tracking-[0.2em] text-gray-400 mb-2 uppercase">
            Step {currentScreen} of 5
          </div>
          <div className="h-0.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#0d5f4e] transition-all duration-500"
              style={{ width: `${(currentScreen / 5) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Screen 1: Market Reality
function Screen1({ 
  selectedPrimary, 
  selectedFollowup, 
  showFollowup,
  onPrimarySelect, 
  onFollowupSelect, 
  onNext, 
  canContinue 
}: any) {
  const primaryOptions = [
    'Content production & coordination',
    'Event planning & vendor chaos',
    'Brand consistency across channels',
    'Audience acquisition & engagement',
    'Still validating the problem',
  ];

  const followupOptions = [
    'Manual spreadsheets & WhatsApp',
    'Agencies / freelancers',
    'In-house team',
    'No consistent system',
  ];

  return (
    <div className="animate-[fade-in_600ms_ease-out]">
      {/* Header */}
      <div className="mb-20 lg:mb-32">
        <div className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-8 font-light">
          Smart Interview · Step 1 of 5
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-10 tracking-tight leading-[0.95]">
          Understanding your<br />market reality
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
          We start with where customers feel friction today.
        </p>
      </div>

      {/* Primary Question */}
      <div className="mb-24 lg:mb-32">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-16 tracking-tight">
          Where do customers feel the strongest pain today?
        </h2>

        <div className="space-y-4">
          {primaryOptions.map((option, index) => (
            <button
              key={option}
              onClick={() => onPrimarySelect(option)}
              className={`group w-full text-left px-8 py-8 rounded-2xl transition-all duration-300 ${
                selectedPrimary === option
                  ? 'bg-[#0d5f4e]/5 shadow-[0_0_0_1px_rgba(13,95,78,0.15)]'
                  : 'bg-white hover:bg-gray-50 hover:shadow-sm'
              }`}
              style={{
                animationDelay: `${index * 80}ms`,
                animation: 'fade-in 400ms ease-out backwards',
              }}
            >
              <div className="flex items-center justify-between">
                <span className={`text-lg sm:text-xl font-light transition-colors ${
                  selectedPrimary === option ? 'text-gray-900' : 'text-gray-600'
                }`}>
                  {option}
                </span>
                {selectedPrimary === option && (
                  <Check className="w-5 h-5 text-[#0d5f4e] flex-shrink-0" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Follow-up Question (Conditional) */}
      {showFollowup && (
        <div className="mb-24 lg:mb-32 animate-[fade-in_600ms_ease-out]">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-16 tracking-tight">
            How is this handled today?
          </h2>

          <div className="space-y-4">
            {followupOptions.map((option, index) => (
              <button
                key={option}
                onClick={() => onFollowupSelect(option)}
                className={`group w-full text-left px-8 py-8 rounded-2xl transition-all duration-300 ${
                  selectedFollowup === option
                    ? 'bg-[#0d5f4e]/5 shadow-[0_0_0_1px_rgba(13,95,78,0.15)]'
                    : 'bg-white hover:bg-gray-50 hover:shadow-sm'
                }`}
                style={{
                  animationDelay: `${index * 80}ms`,
                  animation: 'fade-in 400ms ease-out backwards',
                }}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-lg sm:text-xl font-light transition-colors ${
                    selectedFollowup === option ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {option}
                  </span>
                  {selectedFollowup === option && (
                    <Check className="w-5 h-5 text-[#0d5f4e] flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Continue Button */}
      {canContinue && (
        <div className="flex justify-end animate-[fade-in_400ms_ease-out]">
          <button
            onClick={onNext}
            className="group flex items-center gap-3 px-10 py-5 bg-[#0d5f4e] text-white rounded-full text-base font-light tracking-wide hover:bg-[#0a4a3b] transition-all duration-300 shadow-[0_8px_24px_rgba(13,95,78,0.2)] hover:shadow-[0_12px_32px_rgba(13,95,78,0.3)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Continue
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      )}
    </div>
  );
}

// Screen 2: Buyer & Monetization Fit
function Screen2({ 
  selectedPrimary, 
  selectedFollowup, 
  showFollowup,
  onPrimarySelect, 
  onFollowupSelect, 
  onNext, 
  canContinue 
}: any) {
  const primaryOptions = [
    'Brand owners / founders',
    'Marketing teams',
    'Event organizers',
    'Agencies buying for brands',
    'Not defined yet',
  ];

  const followupOptions = [
    'Subscription',
    'Per project / per event',
    'Retainer',
    'Enterprise contract',
    'Still exploring',
  ];

  return (
    <div className="animate-[fade-in_600ms_ease-out]">
      {/* Header */}
      <div className="mb-20 lg:mb-32">
        <div className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-8 font-light">
          Smart Interview · Step 2 of 5
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-10 tracking-tight leading-[0.95]">
          Who values this<br />enough to pay?
        </h1>
      </div>

      {/* Primary Question */}
      <div className="mb-24 lg:mb-32">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-16 tracking-tight">
          Who will pay for this first?
        </h2>

        <div className="space-y-4">
          {primaryOptions.map((option, index) => (
            <button
              key={option}
              onClick={() => onPrimarySelect(option)}
              className={`group w-full text-left px-8 py-8 rounded-2xl transition-all duration-300 ${
                selectedPrimary === option
                  ? 'bg-[#0d5f4e]/5 shadow-[0_0_0_1px_rgba(13,95,78,0.15)]'
                  : 'bg-white hover:bg-gray-50 hover:shadow-sm'
              }`}
              style={{
                animationDelay: `${index * 80}ms`,
                animation: 'fade-in 400ms ease-out backwards',
              }}
            >
              <div className="flex items-center justify-between">
                <span className={`text-lg sm:text-xl font-light transition-colors ${
                  selectedPrimary === option ? 'text-gray-900' : 'text-gray-600'
                }`}>
                  {option}
                </span>
                {selectedPrimary === option && (
                  <Check className="w-5 h-5 text-[#0d5f4e] flex-shrink-0" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Follow-up Question (Conditional) */}
      {showFollowup && (
        <div className="mb-24 lg:mb-32 animate-[fade-in_600ms_ease-out]">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-16 tracking-tight">
            How do they typically buy?
          </h2>

          <div className="space-y-4">
            {followupOptions.map((option, index) => (
              <button
                key={option}
                onClick={() => onFollowupSelect(option)}
                className={`group w-full text-left px-8 py-8 rounded-2xl transition-all duration-300 ${
                  selectedFollowup === option
                    ? 'bg-[#0d5f4e]/5 shadow-[0_0_0_1px_rgba(13,95,78,0.15)]'
                    : 'bg-white hover:bg-gray-50 hover:shadow-sm'
                }`}
                style={{
                  animationDelay: `${index * 80}ms`,
                  animation: 'fade-in 400ms ease-out backwards',
                }}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-lg sm:text-xl font-light transition-colors ${
                    selectedFollowup === option ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {option}
                  </span>
                  {selectedFollowup === option && (
                    <Check className="w-5 h-5 text-[#0d5f4e] flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Footer Hint */}
      {!showFollowup && (
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 italic">
            There are no wrong answers — clarity improves outcomes.
          </p>
        </div>
      )}

      {/* Continue Button */}
      {canContinue && (
        <div className="flex justify-end animate-[fade-in_400ms_ease-out]">
          <button
            onClick={onNext}
            className="group flex items-center gap-3 px-10 py-5 bg-[#0d5f4e] text-white rounded-full text-base font-light tracking-wide hover:bg-[#0a4a3b] transition-all duration-300 shadow-[0_8px_24px_rgba(13,95,78,0.2)] hover:shadow-[0_12px_32px_rgba(13,95,78,0.3)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Continue
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      )}
    </div>
  );
}

// Screen 3: Traction Signals
function Screen3({ 
  selectedPrimary, 
  selectedFollowup, 
  showFollowup,
  onPrimarySelect, 
  onFollowupSelect, 
  onNext, 
  canContinue 
}: any) {
  const primaryOptions = [
    'Design partners / pilot brands',
    'LOIs or verbal commitments',
    'Paying customers',
    'Repeated workflow usage',
    'Still validating interest',
  ];

  const followupOptions = [
    '1–2',
    '3–5',
    '6+',
  ];

  return (
    <div className="animate-[fade-in_600ms_ease-out]">
      {/* Header */}
      <div className="mb-20 lg:mb-32">
        <div className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-8 font-light">
          Smart Interview · Step 3 of 5
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-10 tracking-tight leading-[0.95]">
          Let's look at<br />real momentum
        </h1>
      </div>

      {/* Primary Question */}
      <div className="mb-24 lg:mb-32">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-16 tracking-tight">
          Which signals best describe your current traction?
        </h2>

        <div className="space-y-4">
          {primaryOptions.map((option, index) => (
            <button
              key={option}
              onClick={() => onPrimarySelect(option)}
              className={`group w-full text-left px-8 py-8 rounded-2xl transition-all duration-300 ${
                selectedPrimary === option
                  ? 'bg-[#0d5f4e]/5 shadow-[0_0_0_1px_rgba(13,95,78,0.15)]'
                  : 'bg-white hover:bg-gray-50 hover:shadow-sm'
              }`}
              style={{
                animationDelay: `${index * 80}ms`,
                animation: 'fade-in 400ms ease-out backwards',
              }}
            >
              <div className="flex items-center justify-between">
                <span className={`text-lg sm:text-xl font-light transition-colors ${
                  selectedPrimary === option ? 'text-gray-900' : 'text-gray-600'
                }`}>
                  {option}
                </span>
                {selectedPrimary === option && (
                  <Check className="w-5 h-5 text-[#0d5f4e] flex-shrink-0" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Follow-up Question (Conditional) */}
      {showFollowup && (
        <div className="mb-24 lg:mb-32 animate-[fade-in_600ms_ease-out]">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-16 tracking-tight">
            How many active pilots?
          </h2>

          <div className="space-y-4">
            {followupOptions.map((option, index) => (
              <button
                key={option}
                onClick={() => onFollowupSelect(option)}
                className={`group w-full text-left px-8 py-8 rounded-2xl transition-all duration-300 ${
                  selectedFollowup === option
                    ? 'bg-[#0d5f4e]/5 shadow-[0_0_0_1px_rgba(13,95,78,0.15)]'
                    : 'bg-white hover:bg-gray-50 hover:shadow-sm'
                }`}
                style={{
                  animationDelay: `${index * 80}ms`,
                  animation: 'fade-in 400ms ease-out backwards',
                }}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-lg sm:text-xl font-light transition-colors ${
                    selectedFollowup === option ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {option}
                  </span>
                  {selectedFollowup === option && (
                    <Check className="w-5 h-5 text-[#0d5f4e] flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Continue Button */}
      {canContinue && (
        <div className="flex justify-end animate-[fade-in_400ms_ease-out]">
          <button
            onClick={onNext}
            className="group flex items-center gap-3 px-10 py-5 bg-[#0d5f4e] text-white rounded-full text-base font-light tracking-wide hover:bg-[#0a4a3b] transition-all duration-300 shadow-[0_8px_24px_rgba(13,95,78,0.2)] hover:shadow-[0_12px_32px_rgba(13,95,78,0.3)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Continue
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      )}
    </div>
  );
}

// Screen 4: Team Capability & Gaps
function Screen4({ 
  selectedPrimary, 
  selectedFollowup, 
  showFollowup,
  onPrimarySelect, 
  onFollowupSelect, 
  onNext, 
  canContinue 
}: any) {
  const primaryOptions = [
    'Product & technology',
    'Fashion industry expertise',
    'Sales & partnerships',
    'Operations & delivery',
    'Team still forming',
  ];

  const followupOptions = [
    'Technical execution',
    'Distribution & sales',
    'Capital',
    'Time & focus',
  ];

  return (
    <div className="animate-[fade-in_600ms_ease-out]">
      {/* Header */}
      <div className="mb-20 lg:mb-32">
        <div className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-8 font-light">
          Smart Interview · Step 4 of 5
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-10 tracking-tight leading-[0.95]">
          How strong is your<br />execution today?
        </h1>
      </div>

      {/* Primary Question */}
      <div className="mb-24 lg:mb-32">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-16 tracking-tight">
          Which capability is strongest right now?
        </h2>

        <div className="space-y-4">
          {primaryOptions.map((option, index) => (
            <button
              key={option}
              onClick={() => onPrimarySelect(option)}
              className={`group w-full text-left px-8 py-8 rounded-2xl transition-all duration-300 ${
                selectedPrimary === option
                  ? 'bg-[#0d5f4e]/5 shadow-[0_0_0_1px_rgba(13,95,78,0.15)]'
                  : 'bg-white hover:bg-gray-50 hover:shadow-sm'
              }`}
              style={{
                animationDelay: `${index * 80}ms`,
                animation: 'fade-in 400ms ease-out backwards',
              }}
            >
              <div className="flex items-center justify-between">
                <span className={`text-lg sm:text-xl font-light transition-colors ${
                  selectedPrimary === option ? 'text-gray-900' : 'text-gray-600'
                }`}>
                  {option}
                </span>
                {selectedPrimary === option && (
                  <Check className="w-5 h-5 text-[#0d5f4e] flex-shrink-0" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Follow-up Question (Conditional) */}
      {showFollowup && (
        <div className="mb-24 lg:mb-32 animate-[fade-in_600ms_ease-out]">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-16 tracking-tight">
            What's the biggest gap holding you back?
          </h2>

          <div className="space-y-4">
            {followupOptions.map((option, index) => (
              <button
                key={option}
                onClick={() => onFollowupSelect(option)}
                className={`group w-full text-left px-8 py-8 rounded-2xl transition-all duration-300 ${
                  selectedFollowup === option
                    ? 'bg-[#0d5f4e]/5 shadow-[0_0_0_1px_rgba(13,95,78,0.15)]'
                    : 'bg-white hover:bg-gray-50 hover:shadow-sm'
                }`}
                style={{
                  animationDelay: `${index * 80}ms`,
                  animation: 'fade-in 400ms ease-out backwards',
                }}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-lg sm:text-xl font-light transition-colors ${
                    selectedFollowup === option ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {option}
                  </span>
                  {selectedFollowup === option && (
                    <Check className="w-5 h-5 text-[#0d5f4e] flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Continue Button */}
      {canContinue && (
        <div className="flex justify-end animate-[fade-in_400ms_ease-out]">
          <button
            onClick={onNext}
            className="group flex items-center gap-3 px-10 py-5 bg-[#0d5f4e] text-white rounded-full text-base font-light tracking-wide hover:bg-[#0a4a3b] transition-all duration-300 shadow-[0_8px_24px_rgba(13,95,78,0.2)] hover:shadow-[0_12px_32px_rgba(13,95,78,0.3)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Continue
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      )}
    </div>
  );
}

// Screen 5: Strategic Direction
function Screen5({ 
  selectedPrimary, 
  onPrimarySelect, 
  canContinue 
}: any) {
  const [showCompletion, setShowCompletion] = useState(false);

  const primaryOptions = [
    'Validate problem–solution fit',
    'Acquire first paying customers',
    'Prepare fundraising materials',
    'Deepen product capability',
    'Build partnerships',
  ];

  const handleSelect = (option: string) => {
    onPrimarySelect(option);
    setTimeout(() => setShowCompletion(true), 400);
  };

  if (showCompletion) {
    return (
      <div className="animate-[fade-in_600ms_ease-out] text-center py-20">
        {/* Success Icon */}
        <div className="mb-12 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-[#0d5f4e]/10 flex items-center justify-center">
            <Check className="w-12 h-12 text-[#0d5f4e]" />
          </div>
        </div>

        {/* Completion Message */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-8 tracking-tight">
          Your strategic profile<br />is complete.
        </h1>

        <p className="text-xl text-gray-400 font-light mb-20 max-w-2xl mx-auto">
          These answers shape your score, dashboard, and AI guidance.
        </p>

        {/* CTA */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-3 px-12 py-6 bg-[#0d5f4e] text-white rounded-full text-lg font-light tracking-wide hover:bg-[#0a4a3b] transition-all duration-300 shadow-[0_8px_24px_rgba(13,95,78,0.2)] hover:shadow-[0_12px_32px_rgba(13,95,78,0.3)] hover:scale-[1.02] active:scale-[0.98]"
        >
          Continue to Review
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-[fade-in_600ms_ease-out]">
      {/* Header */}
      <div className="mb-20 lg:mb-32">
        <div className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-8 font-light">
          Smart Interview · Step 5 of 5
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-10 tracking-tight leading-[0.95]">
          What matters most<br />in the next 90 days?
        </h1>
      </div>

      {/* Primary Question */}
      <div className="mb-24 lg:mb-32">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-16 tracking-tight">
          What is your immediate priority?
        </h2>

        <div className="space-y-4">
          {primaryOptions.map((option, index) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`group w-full text-left px-8 py-8 rounded-2xl transition-all duration-300 ${
                selectedPrimary === option
                  ? 'bg-[#0d5f4e]/5 shadow-[0_0_0_1px_rgba(13,95,78,0.15)]'
                  : 'bg-white hover:bg-gray-50 hover:shadow-sm'
              }`}
              style={{
                animationDelay: `${index * 80}ms`,
                animation: 'fade-in 400ms ease-out backwards',
              }}
            >
              <div className="flex items-center justify-between">
                <span className={`text-lg sm:text-xl font-light transition-colors ${
                  selectedPrimary === option ? 'text-gray-900' : 'text-gray-600'
                }`}>
                  {option}
                </span>
                {selectedPrimary === option && (
                  <Check className="w-5 h-5 text-[#0d5f4e] flex-shrink-0" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// AI Advisor Panel (Right Side)
function AIAdvisorPanel({ currentScreen }: { currentScreen: number }) {
  const advisorMessages = {
    1: {
      agent: 'Sage',
      role: 'Strategy Advisor',
      message: 'These signals help us model real demand, not assumptions.',
    },
    2: {
      agent: 'Sage',
      role: 'Strategy Advisor',
      message: 'Understanding who pays vs. who uses clarifies your GTM path.',
    },
    3: {
      agent: 'Sage',
      role: 'Strategy Advisor',
      message: 'We value signal quality over revenue at this stage.',
    },
    4: {
      agent: 'Sage',
      role: 'Strategy Advisor',
      message: 'Investors evaluate teams before ideas.',
    },
    5: {
      agent: 'Sage',
      role: 'Strategy Advisor',
      message: 'Focus shapes everything. Choose what moves the business forward.',
    },
  };

  const currentMessage = advisorMessages[currentScreen as keyof typeof advisorMessages];

  return (
    <div className="w-full max-w-sm animate-[fade-in_800ms_ease-out]">
      <div className="bg-white rounded-3xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
        {/* Agent Header */}
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
          <div className="w-12 h-12 rounded-full bg-[#0d5f4e]/10 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6 text-[#0d5f4e]" />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">{currentMessage.agent}</div>
            <div className="text-xs text-gray-400">{currentMessage.role}</div>
          </div>
        </div>

        {/* Message */}
        <p className="text-base text-gray-600 leading-relaxed font-light">
          {currentMessage.message}
        </p>
      </div>
    </div>
  );
}
