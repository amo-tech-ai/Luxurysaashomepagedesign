import { TrendingUp, AlertCircle } from 'lucide-react';

export function AnalysisScreen() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h3 className="text-xl text-gray-900">
          Startup Readiness Analysis
        </h3>
        <p className="text-sm text-gray-600">
          Based on your profile
        </p>
      </div>

      {/* Readiness Score */}
      <div className="bg-gray-50 border border-gray-200 rounded-sm p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Readiness Score</span>
          <div className="flex items-center gap-2 text-[#6b9d89] text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>On track</span>
          </div>
        </div>

        {/* Large Score */}
        <div className="text-center py-4">
          <div className="text-5xl text-gray-900 mb-2">72/100</div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden max-w-md mx-auto">
            <div
              className="h-full bg-gradient-to-r from-[#0d5f4e] to-[#6b9d89] rounded-full transition-all duration-1000"
              style={{ width: '72%' }}
            />
          </div>
        </div>

        {/* Gap Detection */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center gap-2 text-sm">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span className="text-gray-900">Market Validation</span>
            <span className="text-gray-500">— Weak</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span className="text-gray-900">Traction Metrics</span>
            <span className="text-gray-500">— Missing</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span className="text-gray-900">Pricing Strategy</span>
            <span className="text-gray-500">— Undefined</span>
          </div>
        </div>
      </div>

      {/* AI Intelligence Panel */}
      <div className="bg-[#f5f5f3] border border-gray-200 rounded-sm p-6 space-y-4">
        <h4 className="text-sm text-gray-900">AI Intelligence</h4>
        
        <div className="space-y-3">
          <div>
            <div className="text-xs text-gray-600 mb-1">What this means:</div>
            <p className="text-sm text-gray-900 leading-relaxed">
              Your technical foundation is strong, but market positioning needs clarity.
            </p>
          </div>

          <div className="border-t border-gray-300 pt-3">
            <div className="text-xs text-gray-600 mb-2">Next step:</div>
            <div className="bg-white border-2 border-[#0d5f4e] rounded-sm p-3">
              <div className="flex items-start justify-between">
                <span className="text-sm text-gray-900">→ Define pricing tiers</span>
                <span className="text-xs text-[#0d5f4e]">+18 pts</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Increases investor confidence score
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
