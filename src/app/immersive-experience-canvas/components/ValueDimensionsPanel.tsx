import { Star } from 'lucide-react';
import type { ValueDimensionScore } from '../../../data/immersive-experience-types';
import { VALUE_CRITERIA } from '../../../data/immersive-experience-types';

interface ValueDimensionsPanelProps {
  scores: ValueDimensionScore;
  onChange?: (scores: ValueDimensionScore) => void;
}

export function ValueDimensionsPanel({ scores, onChange }: ValueDimensionsPanelProps) {
  const updateScore = (criterion: keyof ValueDimensionScore, value: number) => {
    onChange?.({ ...scores, [criterion]: value });
  };
  
  const StarRating = ({ value, onChange }: { value: number; onChange: (v: number) => void }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onChange(star)}
            className="hover:scale-110 transition-transform"
          >
            <Star
              className={`w-4 h-4 ${
                star <= value
                  ? 'fill-[#F59E0B] text-[#F59E0B]'
                  : 'fill-none text-gray-300'
              }`}
            />
          </button>
        ))}
        <span className="text-xs text-gray-600 ml-1">{value}/5</span>
      </div>
    );
  };
  
  // Calculate averages
  const customerAvg = (
    (scores.eliminates_pain +
      scores.increases_convenience +
      scores.increases_personalization +
      scores.increases_efficiency +
      scores.delights_innovation) /
    5
  ).toFixed(1);
  
  const brandAvg = (
    (scores.omnichannel_integration +
      scores.brand_values_alignment +
      scores.competitor_differentiation +
      scores.positive_brand_perception +
      scores.increases_loyalty +
      scores.improves_positioning) /
    6
  ).toFixed(1);
  
  const businessAvg = (
    (scores.improves_targeting +
      scores.data_driven_decisions +
      scores.creates_revenue +
      scores.reaches_new_groups) /
    4
  ).toFixed(1);
  
  const getColorClass = (avg: string) => {
    const num = parseFloat(avg);
    if (num >= 3.5) return 'text-[#0d5f4e]';
    if (num >= 2.5) return 'text-[#D97706]';
    return 'text-[#DC2626]';
  };
  
  return (
    <div className="bg-white rounded-lg border border-[#E8E6E1] p-6">
      <h2 className="text-lg font-medium text-[#0E3E1B] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
        Value Dimensions
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Rate each criterion from 0 (not applicable) to 5 (strongly applies) to assess your use case's value.
      </p>
      
      <div className="space-y-6">
        {/* Customer Impact (a-e) */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-[#0E3E1B] uppercase tracking-wide">
              Customer Impact (a-e)
            </h3>
            <span className={`text-sm font-bold ${getColorClass(customerAvg)}`}>
              {customerAvg}/5
            </span>
          </div>
          <div className="space-y-3">
            {Object.entries(VALUE_CRITERIA.customer).map(([key, label]) => (
              <div key={key} className="flex items-start justify-between gap-3">
                <span className="text-xs text-gray-700 flex-1">{label}</span>
                <StarRating
                  value={scores[key as keyof ValueDimensionScore] as number}
                  onChange={(v) => updateScore(key as keyof ValueDimensionScore, v)}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Brand Impact (f-k) */}
        <div className="pt-4 border-t border-[#E8E6E1]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-[#0E3E1B] uppercase tracking-wide">
              Brand Impact (f-k)
            </h3>
            <span className={`text-sm font-bold ${getColorClass(brandAvg)}`}>
              {brandAvg}/5
            </span>
          </div>
          <div className="space-y-3">
            {Object.entries(VALUE_CRITERIA.brand).map(([key, label]) => (
              <div key={key} className="flex items-start justify-between gap-3">
                <span className="text-xs text-gray-700 flex-1">{label}</span>
                <StarRating
                  value={scores[key as keyof ValueDimensionScore] as number}
                  onChange={(v) => updateScore(key as keyof ValueDimensionScore, v)}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Business Impact (l-o) */}
        <div className="pt-4 border-t border-[#E8E6E1]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-[#0E3E1B] uppercase tracking-wide">
              Business Impact (l-o)
            </h3>
            <span className={`text-sm font-bold ${getColorClass(businessAvg)}`}>
              {businessAvg}/5
            </span>
          </div>
          <div className="space-y-3">
            {Object.entries(VALUE_CRITERIA.business).map(([key, label]) => (
              <div key={key} className="flex items-start justify-between gap-3">
                <span className="text-xs text-gray-700 flex-1">{label}</span>
                <StarRating
                  value={scores[key as keyof ValueDimensionScore] as number}
                  onChange={(v) => updateScore(key as keyof ValueDimensionScore, v)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
