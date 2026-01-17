import { Info } from 'lucide-react';

export function PitchDeckScreen() {
  const slides = [
    '1. Problem',
    '2. Solution',
    '3. Market',
    '4. Product',
    '5. Traction',
    '6. Team',
    '7. Ask',
  ];

  return (
    <div className="flex h-full">
      {/* Slide List Sidebar */}
      <div className="w-48 bg-gray-50 border-r border-gray-200 p-4">
        <div className="space-y-2">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`text-sm px-3 py-2 rounded-sm cursor-pointer transition-colors ${
                index === 2
                  ? 'bg-[#0d5f4e] text-white'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              {slide}
            </div>
          ))}
          <button className="w-full text-sm text-[#0d5f4e] px-3 py-2 border border-[#0d5f4e] rounded-sm hover:bg-[#0d5f4e] hover:text-white transition-colors mt-4">
            + Add Slide
          </button>
        </div>
      </div>

      {/* Main Canvas */}
      <div className="flex-1 p-8">
        <div className="space-y-4">
          {/* Header with Badge */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl text-gray-900">
              Pitch Deck Editor
            </h3>
            <div className="bg-[#0d5f4e] text-white text-xs px-3 py-1 rounded-sm flex items-center gap-1">
              <span>Generated from Profile</span>
              <span>✓</span>
            </div>
          </div>

          {/* Slide Preview */}
          <div className="border-2 border-gray-200 rounded-sm p-8 bg-gray-50 space-y-6">
            <h4 className="text-2xl text-gray-900">
              Market Opportunity
            </h4>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xs text-gray-600 mb-1">TAM</div>
                  <div className="text-2xl text-gray-900">$47B</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">SAM</div>
                  <div className="text-2xl text-gray-900">$8.2B</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">SOM</div>
                  <div className="text-2xl text-gray-900">$420M</div>
                </div>
              </div>

              {/* Citations */}
              <div className="pt-4 border-t border-gray-300 space-y-2">
                <div className="text-xs text-gray-600">Sources:</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-700 group cursor-pointer">
                    <Info className="w-4 h-4 text-[#0d5f4e]" />
                    <span className="border-b-2 border-[#0d5f4e] border-opacity-0 group-hover:border-opacity-100 transition-all">
                      Gartner 2025
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Info className="w-4 h-4 text-gray-400" />
                    <span>IDC Research</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="bg-[#0d5f4e] text-white px-5 py-2 rounded-sm text-sm hover:bg-[#0a4a3d] transition-colors">
              Generate Deck
            </button>
            <button className="border border-gray-300 text-gray-700 px-5 py-2 rounded-sm text-sm hover:bg-gray-50 transition-colors">
              Export PDF
            </button>
            <button className="border border-gray-300 text-gray-700 px-5 py-2 rounded-sm text-sm hover:bg-gray-50 transition-colors">
              Share →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
