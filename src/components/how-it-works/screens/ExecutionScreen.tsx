import { CheckCircle2, Circle, Sparkles } from 'lucide-react';

const investorColumns = [
  {
    title: 'Interested',
    investors: [
      { name: 'Sarah K.', firm: 'Accel', amount: '$2M', probability: 68 },
    ],
  },
  {
    title: 'Meeting',
    investors: [
      { name: 'Mark T.', firm: 'a16z', amount: '$5M', probability: 82 },
    ],
  },
  {
    title: 'Active',
    investors: [
      { name: 'Lisa C.', firm: 'Sequoia', amount: '$3M', probability: 91 },
    ],
  },
  {
    title: 'Closed',
    investors: [],
  },
];

interface ExecutionScreenProps {
  uiState?: string | null;
}

export function ExecutionScreen({ uiState }: ExecutionScreenProps) {
  const isDragging = uiState === 'drag-start';
  const draggedCardIndex = 1; // Mark T. is in Meeting (index 1)

  return (
    <div className="p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl text-gray-900 font-light">
          Investor Pipeline
        </h3>
        <button className="border border-gray-200 text-gray-700 px-4 py-1.5 rounded-lg text-sm font-light hover:bg-gray-50 transition-colors">
          + Add Investor
        </button>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-4 gap-2.5">
        {investorColumns.map((column, colIndex) => (
          <div key={colIndex} className="space-y-2">
            <div className="text-xs text-gray-500 uppercase tracking-wider pb-1 font-light">
              {column.title}
            </div>
            <div 
              className={`space-y-2 min-h-24 transition-all duration-200 ${
                isDragging && colIndex === 2 
                  ? 'bg-[#0d5f4e] bg-opacity-5 rounded-lg p-2 ring-2 ring-[#0d5f4e] ring-opacity-20' 
                  : ''
              }`}
            >
              {column.investors.map((investor, invIndex) => (
                <div
                  key={invIndex}
                  className={`bg-white border border-gray-100 rounded-lg p-2.5 space-y-1.5 transition-all cursor-move ${
                    colIndex === draggedCardIndex && isDragging
                      ? 'shadow-2xl scale-105 opacity-80'
                      : uiState === 'hover-card' && colIndex === draggedCardIndex
                      ? 'shadow-md scale-102'
                      : 'hover:shadow-md'
                  }`}
                >
                  <div className="text-sm text-gray-900 font-light">{investor.name}</div>
                  <div className="text-xs text-gray-500 font-light">{investor.firm}</div>
                  <div className="text-sm text-gray-900 font-medium">{investor.amount}</div>
                  <div
                    className={`text-xs px-2 py-0.5 rounded-md inline-block font-medium ${
                      investor.probability >= 80
                        ? 'bg-[#0d5f4e] bg-opacity-10 text-[#0d5f4e]'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    AI: {investor.probability}%
                  </div>
                </div>
              ))}
              {column.investors.length === 0 && (
                <div className="h-20 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* AI Suggested Actions */}
      <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-xl p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#0d5f4e]" />
          <h4 className="text-sm text-gray-900 font-medium">AI Suggested Actions</h4>
        </div>

        <div className="space-y-2.5">
          {/* Completed Task */}
          <div className="flex items-start gap-3 opacity-60">
            <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="text-sm text-gray-500 line-through font-light">
                Follow up with Sarah K.
              </div>
              <div className="text-xs text-gray-400 mt-0.5 font-light">
                Last contact: 4 days ago
              </div>
            </div>
          </div>

          {/* Active Task */}
          <div 
            className={`flex items-start gap-3 border rounded-lg p-2.5 transition-all duration-200 ${
              uiState === 'click-action'
                ? 'bg-[#0d5f4e] bg-opacity-10 border-[#0d5f4e] border-opacity-30 shadow-sm scale-98'
                : 'bg-[#0d5f4e] bg-opacity-5 border-[#0d5f4e] border-opacity-20'
            }`}
          >
            <Circle className="w-4 h-4 text-[#0d5f4e] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="text-sm text-gray-900 font-light">
                Schedule check-in with Mark T.
              </div>
              <div className="text-xs text-gray-600 mt-1 font-light">
                Meeting was 2 weeks ago
              </div>
              <div className="text-xs text-[#0d5f4e] mt-1.5 font-medium">
                → Send updated deck (traction slide)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}