import { TrendingUp, Sparkles } from 'lucide-react';

export function AnalysisScreen() {
  return (
    <div className="p-5 space-y-3">
      {/* Header */}
      <div className="space-y-0.5">
        <h3 className="text-lg text-gray-900 font-light">
          Startup Readiness Analysis
        </h3>
        <p className="text-xs text-gray-500 font-light leading-relaxed">
          Based on your profile
        </p>
      </div>

      {/* Readiness Score */}
      <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-xl p-3.5 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 uppercase tracking-wide font-light">Readiness Score</span>
          <div className="flex items-center gap-1.5 text-[#6b9d89] text-xs font-medium">
            <TrendingUp className="w-3 h-3" />
            <span>On track</span>
          </div>
        </div>

        {/* Large Score */}
        <div className="text-center py-1.5">
          <div className="text-3xl text-gray-900 font-light mb-1.5 tracking-tight">72<span className="text-gray-400 text-xl">/100</span></div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden max-w-sm mx-auto">
            <div
              className="h-full bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] rounded-full transition-all duration-1000"
              style={{ width: '72%' }}
            />
          </div>
        </div>

        {/* Gap Detection */}
        <div className="space-y-1 pt-1.5 border-t border-gray-100">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-gray-900 font-light">Market Validation</span>
            <span className="text-gray-400 font-light">— Needs attention</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-gray-900 font-light">Traction Metrics</span>
            <span className="text-gray-400 font-light">— Missing data</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-gray-900 font-light">Pricing Strategy</span>
            <span className="text-gray-400 font-light">— Undefined</span>
          </div>
        </div>
      </div>

      {/* AI Intelligence Panel */}
      <div className="bg-white border border-gray-100 rounded-xl p-3.5 space-y-2 shadow-sm">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#0d5f4e]" />
          <h4 className="text-xs text-gray-900 font-medium">AI Intelligence</h4>
        </div>
        
        <div className="space-y-2">
          <div>
            <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide font-light">What this means</div>
            <p className="text-xs text-gray-700 font-light leading-relaxed">
              Your technical foundation is strong, but market positioning needs clarity.
            </p>
          </div>

          <div className="pt-1.5 border-t border-gray-100">
            <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide font-light">Recommended next step</div>
            <div className="bg-[#0d5f4e] bg-opacity-5 border border-[#0d5f4e] border-opacity-20 rounded-lg p-2">
              <div className="flex items-start justify-between mb-0.5">
                <span className="text-xs text-gray-900 font-light">Define pricing tiers</span>
                <span className="text-xs text-[#0d5f4e] font-semibold bg-white px-1.5 py-0.5 rounded">+18 pts</span>
              </div>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Increases investor confidence score
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
