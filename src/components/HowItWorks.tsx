import { useRef, useState, useEffect } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { StepList } from './how-it-works/StepList';
import { AppWindow } from './how-it-works/AppWindow';
import { useCursorAnimation } from './how-it-works/useCursorAnimation';

const steps = [
  {
    number: 1,
    title: 'Profile',
    description: 'Tell us about your startup once. We do the rest.',
  },
  {
    number: 2,
    title: 'Analysis',
    description: 'AI turns your info into clarity and direction.',
  },
  {
    number: 3,
    title: 'Pitch Deck',
    description: 'Investor-ready materials generated automatically.',
  },
  {
    number: 4,
    title: 'Execution',
    description: 'Execution and relationships in one place.',
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { activeStep } = useScrollProgress(containerRef);
  const [isInView, setIsInView] = useState(true); // Default to true for initial visibility

  // Intersection Observer to detect if section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 } // Lower threshold for earlier detection
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Cursor animation
  const { cursorState, uiState } = useCursorAnimation({
    activeStep,
    isInView,
    isPaused: false,
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#f5f5f3]"
      style={{ minHeight: '400vh' }}
      aria-label="How StartupAI works"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 w-full">
            {/* Left Column - Sticky Content */}
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="text-sm uppercase tracking-wider text-[#0d5f4e]">
                  How it works
                </div>
                <h2 className="text-4xl lg:text-5xl leading-tight text-gray-900">
                  From strategy to daily execution, in one guided flow.
                </h2>
              </div>
              
              <StepList steps={steps} activeStep={activeStep} />
            </div>

            {/* Right Column - Fixed App Window */}
            <div className="hidden lg:flex items-center justify-center">
              <AppWindow 
                activeStep={activeStep} 
                cursorState={cursorState}
                uiState={uiState}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}