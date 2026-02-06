/**
 * TAM/SAM/SOM Funnel Visualization
 * 
 * Displays market sizing in a nested funnel format:
 * TAM (Total Addressable Market) → SAM (Serviceable) → SOM (Obtainable)
 */

interface TAMChartProps {
  tam: number;
  sam: number;
  som: number;
  methodology?: string;
}

export function TAMChart({ tam, sam, som, methodology }: TAMChartProps) {
  const formatMarketSize = (value: number): string => {
    if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(1)}B`;
    }
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(0)}M`;
    }
    return `$${(value / 1000).toFixed(0)}K`;
  };

  const samPercent = (sam / tam) * 100;
  const somPercent = (som / sam) * 100;

  return (
    <div className="space-y-6">
      {/* Funnel Visualization */}
      <div className="relative">
        {/* TAM - Largest Box */}
        <div className="relative bg-[#E8F5F1] border-2 border-[#6B9D89] rounded-lg p-8">
          <div className="text-center mb-4">
            <div className="text-sm uppercase tracking-wider text-[#6B9D89] mb-1">
              Total Addressable Market
            </div>
            <div className="text-3xl font-light text-[#0D5F4E]">
              {formatMarketSize(tam)}
            </div>
            <div className="text-xs text-[#696969] mt-1">
              Total market demand
            </div>
          </div>

          {/* SAM - Medium Box */}
          <div className="relative bg-[#C1E8D0] border-2 border-[#0D5F4E] rounded-lg p-6 mx-8">
            <div className="text-center mb-3">
              <div className="text-sm uppercase tracking-wider text-[#0D5F4E] mb-1">
                Serviceable Addressable Market
              </div>
              <div className="text-2xl font-light text-[#0D5F4E]">
                {formatMarketSize(sam)}
              </div>
              <div className="text-xs text-[#696969] mt-1">
                {samPercent.toFixed(0)}% of TAM
              </div>
            </div>

            {/* SOM - Smallest Box */}
            <div className="relative bg-[#0D5F4E] border-2 border-[#0a4a3c] rounded-lg p-4 mx-6">
              <div className="text-center">
                <div className="text-xs uppercase tracking-wider text-white/80 mb-1">
                  Serviceable Obtainable Market
                </div>
                <div className="text-xl font-light text-white">
                  {formatMarketSize(som)}
                </div>
                <div className="text-xs text-white/70 mt-1">
                  {somPercent.toFixed(0)}% of SAM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connecting Lines */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: -1 }}
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#6B9D89" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <div className="bg-[#F5F3EF] p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-[#6B9D89] rounded-full" />
            <span className="text-xs uppercase tracking-wider text-[#A3A3A3]">TAM</span>
          </div>
          <p className="text-sm text-[#696969]">
            Total market demand for your category
          </p>
        </div>

        <div className="bg-[#F5F3EF] p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-[#0D5F4E] rounded-full" />
            <span className="text-xs uppercase tracking-wider text-[#A3A3A3]">SAM</span>
          </div>
          <p className="text-sm text-[#696969]">
            Portion you can realistically serve
          </p>
        </div>

        <div className="bg-[#F5F3EF] p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-[#0a4a3c] rounded-full" />
            <span className="text-xs uppercase tracking-wider text-[#A3A3A3]">SOM</span>
          </div>
          <p className="text-sm text-[#696969]">
            Market share you can capture short-term
          </p>
        </div>
      </div>

      {/* Methodology */}
      {methodology && (
        <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-lg p-4">
          <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-2">
            Methodology
          </div>
          <p className="text-sm text-[#696969]">{methodology}</p>
        </div>
      )}

      {/* Market Context */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-[#FAFAF8] rounded-lg">
          <div className="text-xs text-[#A3A3A3] mb-1">Target Share</div>
          <div className="text-lg font-medium text-[#0D5F4E]">
            {((som / tam) * 100).toFixed(2)}%
          </div>
          <div className="text-xs text-[#696969]">of total market</div>
        </div>

        <div className="text-center p-3 bg-[#FAFAF8] rounded-lg">
          <div className="text-xs text-[#A3A3A3] mb-1">Reachable</div>
          <div className="text-lg font-medium text-[#0D5F4E]">
            {samPercent.toFixed(0)}%
          </div>
          <div className="text-xs text-[#696969]">of TAM addressable</div>
        </div>
      </div>
    </div>
  );
}
