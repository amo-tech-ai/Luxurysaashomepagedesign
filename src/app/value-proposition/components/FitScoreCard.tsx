import type { FitScore } from '../../../data/value-proposition-types';

interface FitScoreCardProps {
  fitScore: FitScore;
}

export function FitScoreCard({ fitScore }: FitScoreCardProps) {
  const { overall, pains_matched, pains_total, gains_matched, gains_total } = fitScore;
  
  // Color coding based on score
  const getScoreColor = (score: number) => {
    if (score >= 75) return 'text-[#0d5f4e]';
    if (score >= 50) return 'text-[#D97706]';
    return 'text-[#DC2626]';
  };
  
  const getBgColor = (score: number) => {
    if (score >= 75) return 'bg-[#E8F4F1]';
    if (score >= 50) return 'bg-[#FEF3C7]';
    return 'bg-[#FEE2E2]';
  };
  
  const scoreColor = getScoreColor(overall);
  const bgColor = getBgColor(overall);
  
  return (
    <div className="bg-white rounded-lg border border-[#E8E6E1] p-6">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
        Fit Score
      </h3>
      
      {/* Circular Score */}
      <div className={`w-32 h-32 mx-auto rounded-full ${bgColor} flex items-center justify-center mb-6`}>
        <div className="text-center">
          <div className={`text-5xl font-bold ${scoreColor}`}>
            {overall}
          </div>
          <div className="text-xs text-gray-600 uppercase tracking-wide">
            % Fit
          </div>
        </div>
      </div>
      
      {/* Breakdown */}
      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Pains Matched:</span>
          <span className="font-medium text-gray-900">
            {pains_matched}/{pains_total}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Gains Matched:</span>
          <span className="font-medium text-gray-900">
            {gains_matched}/{gains_total}
          </span>
        </div>
      </div>
      
      {/* Status Message */}
      <div className="mt-4 pt-4 border-t border-[#E8E6E1]">
        {overall >= 75 ? (
          <p className="text-xs text-[#0d5f4e]">
            ✓ Strong product-market fit
          </p>
        ) : overall >= 50 ? (
          <p className="text-xs text-[#D97706]">
            ⚠ Moderate fit — address gaps
          </p>
        ) : (
          <p className="text-xs text-[#DC2626]">
            ⚠ Weak fit — major gaps exist
          </p>
        )}
      </div>
    </div>
  );
}
