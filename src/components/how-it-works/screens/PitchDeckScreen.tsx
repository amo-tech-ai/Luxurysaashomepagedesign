import { Info, Sparkles } from 'lucide-react';

interface PitchDeckScreenProps {
  uiState?: string | null;
}

export function PitchDeckScreen({ uiState }: PitchDeckScreenProps) {
  const slides = [
    { num: '1', title: 'Problem' },
    { num: '2', title: 'Solution' },
    { num: '3', title: 'Market' },
    { num: '4', title: 'Product' },
    { num: '5', title: 'Traction' },
    { num: '6', title: 'Team' },
    { num: '7', title: 'Ask' },
  ];

  return (
    <div className="flex h-full">
      {/* Slide List Sidebar */}
      <div className="w-44 bg-gray-50 border-r border-gray-100 p-4">
        <div className="space-y-1.5">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`text-sm px-3 py-1.5 rounded-lg cursor-pointer transition-all font-light ${
                index === 2
                  ? 'bg-[#0d5f4e] text-white shadow-sm'
                  : 'text-gray-600 hover:bg-white hover:text-gray-900'
              }`}
            >
              <span className={index === 2 ? 'font-medium' : ''}>{slide.num}.</span> {slide.title}
            </div>
          ))}
          <button className="w-full text-sm text-[#0d5f4e] px-3 py-1.5 border border-[#0d5f4e] border-opacity-30 rounded-lg hover:bg-[#0d5f4e] hover:bg-opacity-5 transition-colors mt-2 font-light">
            + Add Slide
          </button>
        </div>
      </div>

      {/* Main Canvas */}
      <div className="flex-1 p-6">
        <div className="space-y-4">
          {/* Header with Badge */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl text-gray-900 font-light">
              Pitch Deck Editor
            </h3>
            <div className="bg-[#0d5f4e] bg-opacity-10 text-[#0d5f4e] text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span className="font-medium">Generated</span>
            </div>
          </div>

          {/* Slide Preview */}
          <div className="border border-gray-100 rounded-xl p-5 bg-gradient-to-br from-white to-gray-50 space-y-4 shadow-sm">
            <h4 className="text-xl text-gray-900 font-light tracking-tight">
              Market Opportunity
            </h4>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-light">TAM</div>
                  <div className="text-2xl text-gray-900 font-light">$47B</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-light">SAM</div>
                  <div className="text-2xl text-gray-900 font-light">$8.2B</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-light">SOM</div>
                  <div className="text-2xl text-gray-900 font-light">$420M</div>
                </div>
              </div>

              {/* Citations */}
              <div className="pt-3 border-t border-gray-200 space-y-2">
                <div className="text-xs text-gray-500 uppercase tracking-wider font-light">Sources</div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-sm text-gray-700 group cursor-pointer">
                    <div className="w-4 h-4 rounded-full bg-[#0d5f4e] bg-opacity-10 flex items-center justify-center">
                      <Info className="w-2.5 h-2.5 text-[#0d5f4e]" />
                    </div>
                    <span className="font-light group-hover:text-[#0d5f4e] transition-colors">
                      Gartner 2025
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center">
                      <Info className="w-2.5 h-2.5 text-gray-400" />
                    </div>
                    <span className="font-light">IDC Research</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2.5">
            <button 
              className={`bg-[#0d5f4e] text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                uiState === 'generate-deck'
                  ? 'bg-[#0a4a3d] shadow-lg scale-95'
                  : 'hover:bg-[#0a4a3d] shadow-sm'
              }`}
            >
              Generate Deck
            </button>
            <button className="border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-light hover:bg-gray-50 transition-colors">
              Export PDF
            </button>
            <button className="border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-light hover:bg-gray-50 transition-colors">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}