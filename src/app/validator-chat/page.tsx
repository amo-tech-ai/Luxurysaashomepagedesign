import { useState, useEffect } from 'react';
import { Send, Sparkles, Brain, ArrowRight, Check } from 'lucide-react';

interface ValidatorChatPageProps {
  onNavigate?: (route: string) => void;
}

export default function ValidatorChatPage({ onNavigate }: ValidatorChatPageProps) {
  const [step, setStep] = useState<'initial' | 'processing'>('initial');
  const [input, setInput] = useState('');
  const [startupDescription, setStartupDescription] = useState('');
  const [currentProcessStep, setCurrentProcessStep] = useState(0);

  const processingSteps = [
    'Mapping the competitive landscape',
    'Reviewing industry dynamics',
    'Synthesizing insights',
    'Assessing opportunity strength',
    'Preparing your report'
  ];

  useEffect(() => {
    if (step === 'processing') {
      // Animate through processing steps
      const interval = setInterval(() => {
        setCurrentProcessStep(prev => {
          if (prev < processingSteps.length - 1) {
            return prev + 1;
          } else {
            // Stop the interval when done
            clearInterval(interval);
            return prev;
          }
        });
      }, 1200);

      return () => clearInterval(interval);
    }
  }, [step, startupDescription, onNavigate]);

  const handleSubmit = () => {
    if (!input.trim()) return;
    setStartupDescription(input);
    setStep('processing');
  };

  const handleOkClick = () => {
    // Navigate to Figma prototype
    window.open('https://entry-chorus-50991767.figma.site/startup-validator-v3', '_blank');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <button 
            onClick={() => onNavigate?.('home-v5')}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 bg-[#0d5f4e] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-lg font-light text-[#212427]">StartupAI</span>
          </button>

          <button
            onClick={() => onNavigate?.('dashboard-main')}
            className="px-5 py-2 bg-[#0d5f4e] hover:bg-[#0a4a3a] text-white text-sm font-light rounded-lg transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        {step === 'initial' && (
          <>
            {/* Hero */}
            <div className="text-center mb-12">
              <h1 className="text-5xl lg:text-6xl font-light text-[#212427] mb-4">
                From idea to execution.
              </h1>
            </div>

            {/* Chat Card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 lg:p-12">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-[#DCF9E3] text-[#0d5f4e] text-xs font-medium rounded-full mb-4">
                  SYSTEM READY
                </div>
                <p className="text-lg text-[#212427] mb-2">
                  Describe your startup idea, problem, or goal.
                </p>
                <p className="text-base text-[#6B7280] font-light">
                  I'll help turn it into a clear plan.
                </p>
              </div>

              <div className="space-y-4">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="I'm thinking about building..."
                  className="w-full h-32 px-4 py-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent text-[#212427] placeholder:text-gray-400"
                />

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    Press Enter to initiate protocol
                  </p>
                  <button
                    onClick={handleSubmit}
                    disabled={!input.trim()}
                    className="px-6 py-3 bg-[#0d5f4e] hover:bg-[#0a4a3a] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-all flex items-center gap-2 group"
                  >
                    Generate
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center mt-8 text-sm text-gray-500">
              <p>AI suggests: You decide. No credit card required.</p>
            </div>
          </>
        )}

        {step === 'processing' && (
          <div className="relative min-h-[600px]">
            {/* Background with processing steps */}
            <div className="space-y-6 pt-32">
              {processingSteps.map((stepText, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    idx <= currentProcessStep ? 'opacity-100' : 'opacity-30'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    idx < currentProcessStep 
                      ? 'bg-[#0d5f4e] text-white' 
                      : idx === currentProcessStep
                      ? 'bg-[#0d5f4e] text-white animate-pulse'
                      : 'bg-gray-200'
                  }`}>
                    {idx < currentProcessStep && <Check className="w-4 h-4" />}
                  </div>
                  <p className="text-[#212427] text-lg pt-0.5">{stepText}</p>
                </div>
              ))}
            </div>

            {/* Modal Card Overlay */}
            <div className="absolute top-0 left-0 right-0 bg-white rounded-2xl border border-gray-200 shadow-xl p-8 lg:p-10 max-w-2xl mx-auto">
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-3">
                  Starting your journey with:
                </p>
                <p className="text-[#212427] text-base leading-relaxed font-light">
                  "{startupDescription}"
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                  This would begin the AI-guided validation process.
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={handleOkClick}
                    disabled={currentProcessStep < processingSteps.length - 1}
                    className={`px-6 py-2 text-sm rounded-lg transition-all ${
                      currentProcessStep >= processingSteps.length - 1
                        ? 'bg-[#0d5f4e] hover:bg-[#0a4a3a] text-white cursor-pointer'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}