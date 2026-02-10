import type { ValueDimensionSummary } from '../../../data/immersive-experience-types';

interface ValueScoringCardProps {
  summary: ValueDimensionSummary;
}

export function ValueScoringCard({ summary }: ValueScoringCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 3.5) return 'text-[#0d5f4e]';
    if (score >= 2.5) return 'text-[#D97706]';
    return 'text-[#DC2626]';
  };
  
  const getScoreLabel = (score: number) => {
    if (score >= 3.5) return 'Strong';
    if (score >= 2.5) return 'Moderate';
    return 'Weak';
  };
  
  const getBgColor = (score: number) => {
    if (score >= 3.5) return 'bg-[#E8F4F1]';
    if (score >= 2.5) return 'bg-[#FEF3C7]';
    return 'bg-[#FEF2F2]';
  };
  
  return (
    <div className="bg-white rounded-lg border border-[#E8E6E1] p-5">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">📊</span>
        <h3 className="font-medium text-[#0E3E1B]">Value Scoring</h3>
      </div>
      
      <div className="space-y-3">
        {/* Customer Impact */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Customer Impact:</span>
          <div className="flex items-center gap-2">
            <span className={`text-lg font-bold ${getScoreColor(summary.customer_impact)}`}>
              {summary.customer_impact}
            </span>
            <span className="text-xs text-gray-500">/5</span>
          </div>
        </div>
        
        {/* Brand Impact */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Brand Impact:</span>
          <div className="flex items-center gap-2">
            <span className={`text-lg font-bold ${getScoreColor(summary.brand_impact)}`}>
              {summary.brand_impact}
            </span>
            <span className="text-xs text-gray-500">/5</span>
          </div>
        </div>
        
        {/* Business Impact */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Business Impact:</span>
          <div className="flex items-center gap-2">
            <span className={`text-lg font-bold ${getScoreColor(summary.business_impact)}`}>
              {summary.business_impact}
            </span>
            <span className="text-xs text-gray-500">/5</span>
          </div>
        </div>
      </div>
      
      {/* Overall Score */}
      <div className={`mt-4 p-4 rounded-lg ${getBgColor(summary.overall_score)}`}>
        <div className="text-center">
          <div className={`text-3xl font-bold ${getScoreColor(summary.overall_score)}`}>
            {summary.overall_score}
          </div>
          <div className="text-xs text-gray-600 uppercase tracking-wide mt-1">
            Overall Score — {getScoreLabel(summary.overall_score)}
          </div>
        </div>
      </div>
      
      {/* Status Message */}
      <div className="mt-4 pt-4 border-t border-[#E8E6E1]">
        {summary.overall_score >= 3.5 ? (
          <p className="text-xs text-[#0d5f4e]">
            ✓ Strong value across all three dimensions
          </p>
        ) : summary.overall_score >= 2.5 ? (
          <p className="text-xs text-[#D97706]">
            ⚠ Moderate value — address weak areas
          </p>
        ) : (
          <p className="text-xs text-[#DC2626]">
            ⚠ Weak value proposition — major gaps exist
          </p>
        )}
      </div>
    </div>
  );
}
