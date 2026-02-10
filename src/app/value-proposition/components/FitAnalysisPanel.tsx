import { AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import type { FitAnalysis } from '../../../data/value-proposition-types';

interface FitAnalysisPanelProps {
  analysis: FitAnalysis;
  onNavigate?: (page: string) => void;
}

export function FitAnalysisPanel({ analysis, onNavigate }: FitAnalysisPanelProps) {
  const { matched_pairs, unmatched_pains, unmatched_gains, suggestions } = analysis;
  
  return (
    <div className="space-y-6">
      {/* Fit Summary */}
      <div className="bg-white rounded-lg border border-[#E8E6E1] p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-[#E8F4F1] flex items-center justify-center">
            <span className="text-[#0d5f4e] text-lg">📊</span>
          </div>
          <h3 className="font-medium text-[#0E3E1B]">Fit Analysis</h3>
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Matched Pairs:</span>
            <span className="font-medium text-[#0d5f4e]">
              {matched_pairs.length}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Unmatched Pains:</span>
            <span className="font-medium text-[#DC2626]">
              {unmatched_pains.length}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Unmatched Gains:</span>
            <span className="font-medium text-[#DC2626]">
              {unmatched_gains.length}
            </span>
          </div>
        </div>
      </div>
      
      {/* Unmatched Items */}
      {(unmatched_pains.length > 0 || unmatched_gains.length > 0) && (
        <div className="bg-[#FEF2F2] rounded-lg border border-[#FCA5A5] p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-4 h-4 text-[#DC2626]" />
            <h3 className="font-medium text-[#0E3E1B]">Gaps to Address</h3>
          </div>
          
          <div className="space-y-3">
            {unmatched_pains.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Pains Without Relievers
                </p>
                <ul className="space-y-2">
                  {unmatched_pains.map((pain) => (
                    <li key={pain.id} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-[#DC2626] mt-0.5">•</span>
                      <span className="flex-1">{pain.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {unmatched_gains.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Gains Without Creators
                </p>
                <ul className="space-y-2">
                  {unmatched_gains.map((gain) => (
                    <li key={gain.id} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-[#DC2626] mt-0.5">•</span>
                      <span className="flex-1">{gain.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* AI Suggestions */}
      {suggestions.length > 0 && (
        <div className="bg-white rounded-lg border border-[#E8E6E1] p-5">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#0d5f4e]" />
            <h3 className="font-medium text-[#0E3E1B]">AI Suggestions</h3>
          </div>
          
          <div className="space-y-3">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className={`p-3 rounded-lg border ${
                  suggestion.priority === 'high'
                    ? 'bg-[#FEF2F2] border-[#FCA5A5]'
                    : suggestion.priority === 'medium'
                    ? 'bg-[#FEF3C7] border-[#FCD34D]'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span
                    className={`text-xs font-semibold uppercase tracking-wide ${
                      suggestion.priority === 'high'
                        ? 'text-[#DC2626]'
                        : suggestion.priority === 'medium'
                        ? 'text-[#D97706]'
                        : 'text-gray-600'
                    }`}
                  >
                    {suggestion.priority} priority
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  {suggestion.suggestion_text}
                </p>
                <button className="text-xs text-[#0d5f4e] hover:text-[#0E3E1B] font-medium flex items-center gap-1">
                  Apply Suggestion
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Quick Actions */}
      <div className="bg-white rounded-lg border border-[#E8E6E1] p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">🔗</span>
          <h3 className="font-medium text-[#0E3E1B]">Quick Actions</h3>
        </div>
        <div className="space-y-2">
          <button className="w-full px-3 py-2 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0E3E1B] transition-colors text-sm">
            Regenerate from AI
          </button>
          <button
            onClick={() => onNavigate?.('lean-canvas-v4')}
            className="w-full px-3 py-2 border border-[#E8E6E1] text-gray-700 rounded-lg hover:bg-[#E8F4F1] transition-colors text-sm"
          >
            View Lean Canvas
          </button>
          <button
            onClick={() => onNavigate?.('opportunity-canvas')}
            className="w-full px-3 py-2 border border-[#E8E6E1] text-gray-700 rounded-lg hover:bg-[#E8F4F1] transition-colors text-sm"
          >
            View Opportunity Canvas
          </button>
        </div>
      </div>
      
      {/* Source Indicators */}
      <div className="bg-white rounded-lg border border-[#E8E6E1] p-5">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Data Sources
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-[#0d5f4e]">✓</span>
            <span className="text-gray-700">Lean Canvas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#0d5f4e]">✓</span>
            <span className="text-gray-700">Startup Validator</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Last regenerated: Today at 14:30
        </p>
      </div>
    </div>
  );
}
