import React from 'react';
import { ChatWindow } from './home-v6/ChatWindow';

export function Hero() {
  const handleChatSubmit = (message: string) => {
    console.log('Chat message submitted:', message);
    // Navigate to onboarding or show results
    alert(`Starting your journey with: "${message}"\n\nThis would begin the AI-guided validation process.`);
  };

  return (
    <section className="bg-[var(--color-canvas)] min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-[1100px] mx-auto w-full space-y-14">
        {/* Headline */}
        <div className="text-center">
          <h1 
            className="text-[56px] md:text-[64px] lg:text-[72px] text-[var(--color-text-primary)] leading-[1.1] tracking-[-0.02em] font-light"
            style={{ 
              fontFamily: 'Georgia, serif',
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            From idea to execution.
          </h1>
        </div>

        {/* Chat Window */}
        <div className="max-w-[960px] mx-auto">
          <ChatWindow onSubmit={handleChatSubmit} />
          
          {/* Trust Footer */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-3 text-[13px] text-[var(--color-text-tertiary)]">
              <span>AI suggests. You decide.</span>
              <span className="text-[#D4D4D4]">—</span>
              <span>No credit card required.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}