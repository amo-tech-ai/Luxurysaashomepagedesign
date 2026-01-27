import { Shuffle, Clock, Palette } from 'lucide-react';

export function InsightStatement() {
  return (
    <section className="bg-[#1a1a1a] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl leading-tight tracking-tight max-w-5xl mx-auto">
            <span className="text-[#fafaf8]">Founders don't fail from lack of effort.</span>{' '}
            <span className="text-gray-500">They fail from scattered execution.</span>
          </h2>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Decision Fatigue */}
          <div className="bg-[#252525] border border-gray-800 rounded-2xl p-8 lg:p-10">
            <div className="mb-6">
              <Palette className="w-10 h-10 text-[#fafaf8] stroke-[1.5]" />
            </div>
            <h3 className="text-2xl text-[#fafaf8] mb-4 font-medium">
              Decision fatigue
            </h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Hours lost deciding what matters most.
            </p>
          </div>

          {/* Fundraising Drift */}
          <div className="bg-[#252525] border border-gray-800 rounded-2xl p-8 lg:p-10">
            <div className="mb-6">
              <Shuffle className="w-10 h-10 text-[#fafaf8] stroke-[1.5]" />
            </div>
            <h3 className="text-2xl text-[#fafaf8] mb-4 font-medium">
              Fundraising drift
            </h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Decks, notes, and follow-ups scattered across tools.
            </p>
          </div>

          {/* Runway Pressure */}
          <div className="bg-[#252525] border border-gray-800 rounded-2xl p-8 lg:p-10">
            <div className="mb-6">
              <Clock className="w-10 h-10 text-[#fafaf8] stroke-[1.5]" />
            </div>
            <h3 className="text-2xl text-[#fafaf8] mb-4 font-medium">
              Runway pressure
            </h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Priorities disconnected from burn and timeline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}