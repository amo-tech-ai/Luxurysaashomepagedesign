import { CheckCircle2, Circle } from 'lucide-react';

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

export function ExecutionScreen() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl text-gray-900">
          Investor Pipeline
        </h3>
        <button className="border border-gray-300 text-gray-700 px-4 py-1.5 rounded-sm text-sm hover:bg-gray-50 transition-colors">
          + Add Investor
        </button>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-4 gap-3">
        {investorColumns.map((column, colIndex) => (
          <div key={colIndex} className="space-y-2">
            <div className="text-xs text-gray-600 uppercase tracking-wider pb-2">
              {column.title}
            </div>
            <div className="space-y-2 min-h-32">
              {column.investors.map((investor, invIndex) => (
                <div
                  key={invIndex}
                  className="bg-white border border-gray-200 rounded-sm p-3 space-y-2 hover:shadow-md transition-shadow cursor-move"
                >
                  <div className="text-sm text-gray-900">{investor.name}</div>
                  <div className="text-xs text-gray-600">{investor.firm}</div>
                  <div className="text-xs text-gray-900">{investor.amount}</div>
                  <div
                    className={`text-xs px-2 py-0.5 rounded-sm inline-block ${
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
                <div className="h-24 border-2 border-dashed border-gray-200 rounded-sm" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* AI Suggested Actions */}
      <div className="bg-[#f5f5f3] border border-gray-200 rounded-sm p-6 space-y-4">
        <h4 className="text-sm text-gray-900">AI Suggested Actions</h4>

        <div className="space-y-3">
          {/* Completed Task */}
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#0d5f4e] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="text-sm text-gray-500 line-through">
                Follow up with Sarah K.
              </div>
              <div className="text-xs text-gray-400 mt-0.5">
                Last contact: 4 days ago
              </div>
            </div>
          </div>

          {/* Active Task */}
          <div className="flex items-start gap-3 bg-white border-2 border-[#0d5f4e] rounded-sm p-3">
            <Circle className="w-5 h-5 text-[#0d5f4e] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="text-sm text-gray-900">
                Schedule check-in with Mark T.
              </div>
              <div className="text-xs text-gray-600 mt-0.5">
                Meeting was 2 weeks ago
              </div>
              <div className="text-xs text-[#0d5f4e] mt-2">
                → Send updated deck (traction slide)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
