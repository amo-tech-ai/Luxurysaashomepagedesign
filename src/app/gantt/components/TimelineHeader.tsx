// Timeline Header Component
// Displays week columns with dates + today marker

import { format, addWeeks, startOfWeek, isSameWeek } from 'date-fns';

interface TimelineHeaderProps {
  startDate: string; // YYYY-MM-DD
  weekCount: number;
  weekWidth: number; // pixels per week
}

export default function TimelineHeader({ startDate, weekCount, weekWidth }: TimelineHeaderProps) {
  const start = new Date(startDate);
  const today = new Date();

  // Generate week headers
  const weeks = Array.from({ length: weekCount }, (_, i) => {
    const weekStart = addWeeks(startOfWeek(start, { weekStartsOn: 1 }), i);
    const isCurrentWeek = isSameWeek(weekStart, today, { weekStartsOn: 1 });
    
    return {
      weekNumber: i + 1,
      startDate: weekStart,
      label: format(weekStart, 'MMM d'),
      isCurrentWeek,
    };
  });

  return (
    <div className="flex border-b border-gray-200 bg-white sticky top-0 z-20">
      {/* Task column spacer */}
      <div className="w-60 flex-shrink-0 border-r border-gray-200 bg-[#F5F3EF] px-4 py-3">
        <span className="text-sm font-medium text-[#212427]">Tasks</span>
      </div>

      {/* Week columns */}
      <div className="flex overflow-x-auto">
        {weeks.map((week) => (
          <div
            key={week.weekNumber}
            className={`flex-shrink-0 border-r border-gray-200 px-3 py-3 ${
              week.isCurrentWeek ? 'bg-[#E8F4F1]' : 'bg-white'
            }`}
            style={{ width: `${weekWidth}px` }}
          >
            <div className="text-center">
              <div className={`text-xs font-medium ${
                week.isCurrentWeek ? 'text-[#0d5f4e]' : 'text-[#6B7280]'
              }`}>
                Week {week.weekNumber}
              </div>
              <div className={`text-xs mt-0.5 ${
                week.isCurrentWeek ? 'text-[#0d5f4e]' : 'text-[#9CA3AF]'
              }`}>
                {week.label}
              </div>
              {week.isCurrentWeek && (
                <div className="mt-1 text-[10px] font-medium text-[#0d5f4e] uppercase tracking-wide">
                  This Week
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
