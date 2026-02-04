import React, { useState, useEffect } from 'react';
import { Maximize2 } from 'lucide-react';
import {
  HeroSection,
  ProblemSection,
  SystemOverviewSection,
  AIRoleSection,
  SpeedSection,
  CapabilityMatrixSection,
  TransformationSection,
  DailyExecutionSection,
  PitchDeckSection,
  FinalCTASection,
  FooterSection
} from '../components/home-v6/Sections';

export default function HomeV6() {
  const [isCinemaMode, setIsCinemaMode] = useState(false);

  const toggleCinemaMode = () => {
    setIsCinemaMode(!isCinemaMode);
  };

  // Handle Escape key to exit cinema mode
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCinemaMode) {
        setIsCinemaMode(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isCinemaMode]);

  // Attempt native fullscreen when entering cinema mode
  useEffect(() => {
    if (isCinemaMode) {
      document.documentElement.requestFullscreen?.().catch(() => {
        console.log('Fullscreen not available, using cinema mode only');
      });
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen?.().catch(() => {});
      }
    }
  }, [isCinemaMode]);

  return (
    <main 
      className={`
        bg-[var(--color-canvas)] min-h-screen
        ${isCinemaMode ? 'fixed inset-0 overflow-y-auto z-[9999]' : ''}
      `}
    >
      {/* Cinema Mode Controls */}
      <div 
        className={`
          fixed top-6 right-6 z-[10000]
          transition-all duration-300
          ${isCinemaMode ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      >
        <button
          onClick={toggleCinemaMode}
          className="
            px-6 py-3
            bg-white
            border-2 border-[var(--color-text-primary)]
            text-[10px]
            uppercase
            tracking-[0.12em]
            font-bold
            hover:bg-[var(--color-text-primary)]
            hover:text-white
            transition-all
            duration-300
            shadow-2xl
            flex items-center gap-2
          "
        >
          <span>Exit Full Preview</span>
        </button>
      </div>

      {/* Toggle Button (when not in cinema mode) */}
      {!isCinemaMode && (
        <div className="fixed top-6 right-6 z-50">
          <button
            onClick={toggleCinemaMode}
            className="
              px-6 py-3
              bg-white
              border-2 border-[var(--color-text-primary)]
              text-[10px]
              uppercase
              tracking-[0.12em]
              font-bold
              hover:bg-[var(--color-text-primary)]
              hover:text-white
              transition-all
              duration-300
              shadow-lg
              flex items-center gap-2
            "
          >
            <Maximize2 className="w-3 h-3" />
            <span>Cinema Mode</span>
          </button>
        </div>
      )}

      {/* Content */}
      <div className={isCinemaMode ? 'pt-16 pb-16' : ''}>
        <HeroSection />
        <ProblemSection />
        <SystemOverviewSection />
        <AIRoleSection />
        <SpeedSection />
        <CapabilityMatrixSection />
        <TransformationSection />
        <PitchDeckSection />
        <DailyExecutionSection />
        <FinalCTASection />
        <FooterSection />
      </div>
    </main>
  );
}