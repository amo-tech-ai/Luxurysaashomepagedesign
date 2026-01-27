/**
 * Pitch Deck Generator Section
 * 
 * Homepage section explaining the AI Pitch Deck Generator
 * Positioned as a practical tool for founders raising capital
 * 
 * Design: Premium, outcome-focused, conversion-oriented
 */

import { ArrowRight, Check, FileText } from 'lucide-react';

interface PitchDeckSectionProps {
  onNavigate?: (page: string) => void;
}

export function PitchDeckSection({ onNavigate }: PitchDeckSectionProps) {
  const handleCTA = () => {
    if (onNavigate) {
      onNavigate('pitch-deck');
    } else {
      // Fallback: scroll to top or open in new page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-[#FAFAF8] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0d5f4e 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Small label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/5 border border-[#0d5f4e]/10 rounded-full">
              <FileText className="w-4 h-4 text-[#0d5f4e]" />
              <span className="text-xs tracking-wide text-[#0d5f4e] font-medium uppercase">
                Pitch Deck Generator
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl text-gray-900 leading-tight tracking-tight">
                Create an investor-ready pitch deck <span className="italic font-light">in minutes</span>
              </h2>
              
              {/* Subheadline */}
              <p className="text-xl text-gray-600 leading-relaxed">
                Answer a few questions and let AI structure your story the way investors expect.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4 pt-4">
              {[
                'Save hours of writing and rewriting',
                'Get clear, concise slides investors understand',
                'Start from structure, not a blank page'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0d5f4e]/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-[#0d5f4e]" />
                  </div>
                  <span className="text-base text-gray-700 leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Who it's for */}
            <div className="pt-4">
              <p className="text-sm text-gray-500 italic">
                For Pre-Seed and Seed founders preparing to raise
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={handleCTA}
                className="group px-8 py-4 bg-[#0d5f4e] text-white rounded-xl hover:bg-[#0a4d3f] transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl"
              >
                <span className="text-base font-medium">Generate your pitch deck</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: How It Works */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-xl">
              
              {/* Section label */}
              <div className="mb-8">
                <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                  How it works
                </h3>
                <div className="w-12 h-0.5 bg-[#0d5f4e]" />
              </div>

              {/* Steps */}
              <div className="space-y-8">
                {[
                  {
                    number: '01',
                    title: 'Tell us about your startup',
                    description: 'Problem, solution, traction. Just the essentials.'
                  },
                  {
                    number: '02',
                    title: 'Review and refine the story',
                    description: 'AI structures it. You adjust the details.'
                  },
                  {
                    number: '03',
                    title: 'Export a ready-to-share deck',
                    description: 'Download as PDF or PowerPoint. Present with confidence.'
                  }
                ].map((step, index) => (
                  <div key={index} className="flex gap-6">
                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full border-2 border-[#0d5f4e]/20 flex items-center justify-center">
                        <span className="text-2xl font-light text-[#0d5f4e]">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-lg font-medium text-gray-900">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom note */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <p className="text-xs text-gray-500 leading-relaxed">
                  No guarantees of funding. Just a clear, structured deck that helps investors understand your startup faster.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
