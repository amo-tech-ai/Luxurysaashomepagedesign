import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Loader2, Sparkles } from 'lucide-react';

interface ChatWindowProps {
  onSubmit?: (message: string) => void;
  className?: string;
}

export function ChatWindow({ onSubmit, className = '' }: ChatWindowProps) {
  const [message, setMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState('');
  const [currentIdea, setCurrentIdea] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const progressSteps = [
    'Gathering market signals',
    'Mapping the competitive landscape',
    'Reviewing industry dynamics',
    'Synthesizing insights',
    'Assessing opportunity strength',
    'Preparing your report'
  ];

  useEffect(() => {
    // Fade in animation
    setTimeout(() => setIsVisible(true), 200);
    
    // Auto-focus on desktop
    if (window.innerWidth >= 768) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 800);
    }
  }, []);

  // Progress step animation
  useEffect(() => {
    if (isLoading && !showResult) {
      const stepDuration = 350; // ms per step
      const interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < progressSteps.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, stepDuration);

      return () => clearInterval(interval);
    } else {
      setCurrentStep(0);
    }
  }, [isLoading, showResult]);

  const parseMarkdown = (text: string): string => {
    return text
      .replace(/^### (.*$)/gim, '<h3 class="text-[22px] leading-[1.3] font-serif mt-8 mb-4 pb-2 border-b border-[var(--color-border)]">$1</h3>')
      .replace(/^## (.*$)/gim, '<h3 class="text-[22px] leading-[1.3] font-serif mt-8 mb-4 pb-2 border-b border-[var(--color-border)]">$1</h3>')
      .replace(/^# (.*$)/gim, '<h3 class="text-[22px] leading-[1.3] font-serif mt-8 mb-4 pb-2 border-b border-[var(--color-border)]">$1</h3>')
      .replace(/^\* (.*$)/gim, '<li class="mb-2">$1</li>')
      .replace(/^- (.*$)/gim, '<li class="mb-2">$1</li>')
      .replace(/\n\n/g, '</p><p class="mb-4 text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">')
      .replace(/(<li>.*<\/li>)/g, '<ul class="list-none pl-0 mb-6 space-y-2">$1</ul>')
      .replace(/<\/ul>\s*<ul[^>]*>/g, '');
  };

  const generateMockResponse = async (idea: string): Promise<string> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return `### Core Concept & Differentiation

Your startup idea addresses a clear market need with a focused value proposition. The key differentiation lies in execution velocity and user experience refinement.

**Strategic positioning:** ${idea.substring(0, 100)}... represents an opportunity in the convergence of user demand and emerging technology capabilities.

### Critical Market Hypothesis

- **Primary assumption:** Users will pay for convenience and quality in this vertical
- **Validation pathway:** Launch MVP within 30 days, achieve 100 early adopters
- **Risk mitigation:** Focus on one segment initially, expand methodically

### Three Immediate Execution Steps

1. **Week 1-2:** Validate core assumption with 20 customer interviews. Build lightweight prototype.
2. **Week 3-4:** Launch beta to 50 users. Gather feedback on core workflow and pricing sensitivity.
3. **Week 5-6:** Refine product-market fit signals. Establish unit economics baseline. Plan go-to-market strategy.

**Immediate next action:** Define your ideal customer profile and reach out to 5 prospects this week.`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      setCurrentIdea(message);
      setIsLoading(true);
      
      try {
        // Generate mock response (replace with real API call)
        const response = await generateMockResponse(message);
        setResult(response);
        setShowResult(true);
        onSubmit?.(message);
      } catch (error) {
        setResult('### Protocol Interrupted\n\nPlease check your connection and try again.');
        setShowResult(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleReset = () => {
    setShowResult(false);
    setResult('');
    setMessage('');
    setCurrentIdea('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleRefine = async () => {
    if (isLoading) return;
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1800));
      const refinement = `

### Go-To-Market Refinement

**Low-cost, high-impact acquisition channels:**

- **Content marketing:** Establish thought leadership through 2-3 weekly blog posts targeting your ICP's pain points
- **Strategic partnerships:** Identify 3-5 complementary products for co-marketing opportunities
- **Community engagement:** Active presence in 2-3 relevant online communities (Reddit, Discord, Slack groups)

**Conversion optimization:**

- Landing page with clear value prop, social proof, and friction-free signup
- Automated email nurture sequence (5 emails over 14 days)
- Product-led growth: Free tier or trial converts to paid through demonstrated value

**Metrics to track:** CAC, conversion rate, activation rate, retention cohorts.`;
      
      setResult(prev => prev + refinement);
      
      // Scroll to bottom
      setTimeout(() => {
        if (resultRef.current) {
          resultRef.current.scrollTop = resultRef.current.scrollHeight;
        }
      }, 100);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRoadmap = async () => {
    if (isLoading) return;
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1800));
      const roadmap = `

### 90-Day Execution Roadmap

**Month 1: Foundation & MVP**
- Week 1-2: Customer discovery (20+ interviews), finalize core features
- Week 3-4: Build MVP, establish analytics infrastructure
- Key milestone: Ship functional MVP to 10 alpha users

**Month 2: Beta & Iteration**
- Week 5-6: Launch private beta (50-100 users), collect qualitative feedback
- Week 7-8: Rapid iteration cycle, establish PMF indicators
- Key milestone: Achieve 40%+ weekly retention, 3+ core use cases validated

**Month 3: Scale Preparation**
- Week 9-10: Finalize pricing model, build onboarding flow, content marketing foundation
- Week 11-12: Public launch, initial paid acquisition experiments
- Key milestone: $5K MRR, 200+ active users, clear unit economics

**Critical success factors:** Weekly user interviews, ruthless prioritization, focus on one metric that matters each month.`;
      
      setResult(prev => prev + roadmap);
      
      // Scroll to bottom
      setTimeout(() => {
        if (resultRef.current) {
          resultRef.current.scrollTop = resultRef.current.scrollHeight;
        }
      }, 100);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div 
      className={`
        relative
        bg-white 
        border-2 border-[var(--color-accent-primary)]
        rounded-[16px]
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        ${className}
      `}
    >
      {/* Form State */}
      {!showResult && !isLoading && (
        <form onSubmit={handleSubmit} className="px-16 py-10">
          {/* System Ready Indicator */}
          <div className="mb-6 flex items-center gap-2.5">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent-primary)]" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-[var(--color-accent-primary)] animate-ping opacity-40" />
            </div>
            <span 
              className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-tertiary)] font-semibold"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              System Ready
            </span>
          </div>

          {/* Headline Message */}
          <div className="mb-8">
            <h2 
              className="text-[22px] leading-[1.5] text-[var(--color-text-primary)] tracking-[-0.015em] font-normal"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Describe your startup idea, problem, or goal.
              <br />
              I'll help turn it into a clear plan.
            </h2>
          </div>

          {/* Input Area */}
          <div className="relative mb-10">
            <div className="min-h-[100px] relative">
              <textarea
                ref={inputRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="I'm thinking about building..."
                disabled={isLoading}
                className={`
                  w-full
                  text-[17px]
                  leading-[1.6]
                  tracking-[-0.01em]
                  text-[var(--color-text-primary)]
                  placeholder:text-[#BFBFBF]
                  bg-transparent
                  border-none
                  outline-none
                  resize-none
                  min-h-[100px]
                  transition-all
                  duration-300
                  disabled:opacity-50
                `}
                style={{
                  fontFamily: 'var(--font-sans)',
                }}
              />
              
              {/* Cursor indicator when focused */}
              {isFocused && !message && (
                <div className="absolute top-0 left-0 pointer-events-none">
                  <span 
                    className="inline-block w-[2.5px] h-[22px] bg-[var(--color-accent-primary)] animate-blink rounded-full"
                    style={{
                      boxShadow: '0 0 12px rgba(13, 95, 78, 0.4)'
                    }}
                  />
                </div>
              )}
            </div>

            {/* Divider Line */}
            <div className="h-[1px] bg-[var(--color-border)] mt-3" />
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between">
            <p 
              className="text-[12px] text-[var(--color-text-tertiary)] tracking-[0.005em]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Press Enter to initiate protocol
            </p>
            
            <button
              type="submit"
              disabled={!message.trim()}
              className={`
                group
                px-8 py-3.5
                rounded-lg
                text-[14px]
                font-medium
                tracking-[-0.01em]
                transition-all
                duration-300
                flex items-center gap-2.5
                ${message.trim()
                  ? 'bg-[#1F1F1F] text-white hover:bg-[#0D5F4E] shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_24px_rgba(13,95,78,0.25)] cursor-pointer transform hover:translate-y-[-1px] hover:scale-[1.02]'
                  : 'bg-[#F5F5F5] text-[#BFBFBF] cursor-not-allowed'
                }
              `}
            >
              <span className="relative z-10">Generate</span>
              <ArrowRight 
                className={`w-4 h-4 transition-transform duration-300 ${
                  message.trim() ? 'group-hover:translate-x-0.5' : ''
                }`}
              />
            </button>
          </div>
        </form>
      )}

      {/* Progress State */}
      {isLoading && !showResult && (
        <div className="px-16 py-10">
          {/* Status Headline */}
          <div className="mb-10">
            <h2 
              className="text-[22px] leading-[1.5] text-[var(--color-text-primary)] tracking-[-0.015em] font-normal"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Building your plan…
            </h2>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="h-[2px] bg-[var(--color-border)] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[var(--color-accent-primary)] transition-all duration-300 ease-out"
                style={{
                  width: `${((currentStep + 1) / progressSteps.length) * 100}%`
                }}
              />
            </div>
          </div>

          {/* Progress Steps */}
          <div className="space-y-5">
            {progressSteps.map((step, index) => {
              const isComplete = index < currentStep;
              const isActive = index === currentStep;
              const isFuture = index > currentStep;

              return (
                <div 
                  key={index}
                  className={`
                    flex items-center gap-4
                    transition-all duration-300 ease-out
                    ${isActive ? 'translate-x-1' : ''}
                  `}
                >
                  {/* Status Indicator */}
                  <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                    {isComplete && (
                      <svg 
                        className="w-5 h-5 text-[var(--color-accent-primary)]" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                    )}
                    {isActive && (
                      <div className="w-2 h-2 rounded-full bg-[var(--color-accent-primary)]">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-accent-primary)] animate-ping" />
                      </div>
                    )}
                    {isFuture && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-border)]" />
                    )}
                  </div>

                  {/* Step Text */}
                  <p 
                    className={`
                      text-[15px]
                      tracking-[-0.01em]
                      transition-all duration-300
                      ${isComplete ? 'text-[var(--color-text-tertiary)]' : ''}
                      ${isActive ? 'text-[var(--color-accent-primary)] font-medium' : ''}
                      ${isFuture ? 'text-[var(--color-text-tertiary)] opacity-40' : ''}
                    `}
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {step}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Result State */}
      {showResult && (
        <div className="px-16 py-10">
          {/* Header */}
          <div className="flex justify-between items-start mb-10">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent-primary)]" />
              </div>
              <span 
                className="text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-tertiary)] font-semibold"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Analysis Complete
              </span>
            </div>
            <button 
              onClick={handleReset}
              className="text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] underline transition-colors"
            >
              Reset
            </button>
          </div>

          {/* Result Content */}
          <div 
            ref={resultRef}
            className="result-content mb-10 max-h-[500px] overflow-y-auto pr-3"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'var(--color-border) transparent'
            }}
            dangerouslySetInnerHTML={{ 
              __html: `<div class="text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">${parseMarkdown(result)}</div>` 
            }}
          />

          {/* Action Buttons */}
          <div className="pt-8 border-t border-[var(--color-border)] flex flex-wrap gap-3">
            <button 
              onClick={handleRefine}
              disabled={isLoading}
              className={`
                px-6 py-3
                rounded-lg
                text-[13px]
                font-semibold
                tracking-[-0.01em]
                transition-all
                duration-300
                flex items-center gap-2
                ${isLoading
                  ? 'bg-[#F5F5F5] text-[#BFBFBF] cursor-not-allowed'
                  : 'bg-[#1F1F1F] text-white hover:bg-[#0D5F4E] shadow-[0_2px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_16px_rgba(13,95,78,0.2)] transform hover:translate-y-[-1px]'
                }
              `}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Refine Strategy</span>
            </button>
            
            <button 
              onClick={handleRoadmap}
              disabled={isLoading}
              className={`
                px-6 py-3
                rounded-lg
                text-[13px]
                font-semibold
                tracking-[-0.01em]
                transition-all
                duration-300
                flex items-center gap-2
                border-2
                ${isLoading
                  ? 'border-[#E5E5E5] text-[#BFBFBF] cursor-not-allowed'
                  : 'border-[#1F1F1F] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white transform hover:translate-y-[-1px]'
                }
              `}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Generate Roadmap</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}