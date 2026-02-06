/**
 * 7-Dimension Scoring Visualization
 * 
 * Displays weighted scores across all 7 validation dimensions:
 * - Problem Clarity (15%)
 * - Solution Strength (15%)
 * - Market Size (15%)
 * - Competition (10%)
 * - Business Model (15%)
 * - Team Fit (15%)
 * - Timing (15%)
 */

interface Dimension {
  name: string;
  score: number;
  weight: number;
  factors: string[];
}

interface DimensionScoresProps {
  dimensions: {
    problemClarity: Dimension;
    solutionStrength: Dimension;
    marketSize: Dimension;
    competition: Dimension;
    businessModel: Dimension;
    teamFit: Dimension;
    timing: Dimension;
  };
  overallScore: number;
}

export function DimensionScores({ dimensions, overallScore }: DimensionScoresProps) {
  const dimensionList = [
    dimensions.problemClarity,
    dimensions.solutionStrength,
    dimensions.marketSize,
    dimensions.competition,
    dimensions.businessModel,
    dimensions.teamFit,
    dimensions.timing,
  ];

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'bg-[#0D5F4E] text-white';
    if (score >= 6) return 'bg-[#6B9D89] text-white';
    if (score >= 4) return 'bg-[#FFB84D] text-[#2D2D2D]';
    return 'bg-[#DC2626] text-white';
  };

  const getBarColor = (score: number) => {
    if (score >= 8) return 'bg-[#0D5F4E]';
    if (score >= 6) return 'bg-[#6B9D89]';
    if (score >= 4) return 'bg-[#FFB84D]';
    return 'bg-[#DC2626]';
  };

  return (
    <div className="space-y-8">
      {/* Overall Score Summary */}
      <div className="text-center p-8 bg-gradient-to-br from-[#E8F5F1] to-[#C1E8D0] border-2 border-[#6B9D89] rounded-lg">
        <div className="text-sm uppercase tracking-wider text-[#0D5F4E] mb-2">
          Overall Validation Score
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="text-6xl font-light text-[#0D5F4E]">{overallScore}</div>
          <div className="text-2xl text-[#696969]">/ 100</div>
        </div>
        <div className="mt-2 text-sm text-[#696969]">
          Weighted average across 7 dimensions
        </div>
      </div>

      {/* Dimension Breakdown */}
      <div className="space-y-6">
        <h3 className="text-lg font-medium text-[#2D2D2D]">Dimension Breakdown</h3>

        {dimensionList.map((dimension, index) => (
          <div key={index} className="space-y-3">
            {/* Dimension Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-[#2D2D2D]">
                  {dimension.name}
                </span>
                <span className="text-xs text-[#A3A3A3]">
                  ({dimension.weight}% weight)
                </span>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(dimension.score)}`}>
                {dimension.score}/10
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-3 bg-[#F5F3EF] rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${getBarColor(dimension.score)}`}
                style={{ width: `${(dimension.score / 10) * 100}%` }}
              />
            </div>

            {/* Factors */}
            <div className="pl-4 space-y-1.5">
              {dimension.factors.map((factor, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[#696969]">
                  <div className="w-1 h-1 bg-[#A3A3A3] rounded-full mt-2 flex-shrink-0" />
                  <span>{factor}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Scoring Legend */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#E8E6E1]">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#0D5F4E] rounded" />
          <div className="text-xs text-[#696969]">
            <div className="font-medium text-[#2D2D2D]">8-10</div>
            Excellent
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#6B9D89] rounded" />
          <div className="text-xs text-[#696969]">
            <div className="font-medium text-[#2D2D2D]">6-7</div>
            Good
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#FFB84D] rounded" />
          <div className="text-xs text-[#696969]">
            <div className="font-medium text-[#2D2D2D]">4-5</div>
            Needs Work
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#DC2626] rounded" />
          <div className="text-xs text-[#696969]">
            <div className="font-medium text-[#2D2D2D]">0-3</div>
            Critical
          </div>
        </div>
      </div>

      {/* Weighted Contribution */}
      <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-lg p-6">
        <h4 className="text-sm font-medium text-[#2D2D2D] mb-4">
          Contribution to Overall Score
        </h4>
        <div className="space-y-2">
          {dimensionList.map((dimension, index) => {
            const contribution = (dimension.score * dimension.weight) / 10;
            return (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-[#696969]">{dimension.name}</span>
                <span className="font-medium text-[#2D2D2D]">
                  +{contribution.toFixed(1)} pts
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
