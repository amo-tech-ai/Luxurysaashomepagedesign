// Phase Progress Component
// Clickable phase card with progress indicator

import type { Phase } from '@/data/gantt-types';
import { CheckCircle2 } from 'lucide-react';

interface PhaseProgressProps {
  phase: Phase;
  isActive: boolean;
  onClick: () => void;
}

export default function PhaseProgress({ phase, isActive, onClick }: PhaseProgressProps) {
  const isComplete = phase.progress === 100;

  return (
    <button
      onClick={onClick}
      className={`w-full p-3 rounded-lg border transition-all duration-200 text-left ${
        isActive
          ? 'bg-[#0d5f4e] text-white border-[#0d5f4e] shadow-sm'
          : 'bg-white text-[#212427] border-gray-200 hover:border-[#6b9d89] hover:shadow-sm'
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex-1 min-w-0">
          <div className={`text-xs font-medium truncate ${
            isActive ? 'text-white' : 'text-[#212427]'
          }`}>
            {phase.name}
          </div>
          <div className={`text-[10px] mt-0.5 ${
            isActive ? 'text-white/80' : 'text-[#9CA3AF]'
          }`}>
            Week {phase.start_week + 1}-{phase.end_week + 1}
          </div>
        </div>
        
        {isComplete && (
          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${
            isActive ? 'text-white' : 'text-[#10B981]'
          }`} />
        )}
      </div>

      {/* Progress bar */}
      <div className={`h-1.5 rounded-full overflow-hidden ${
        isActive ? 'bg-white/20' : 'bg-gray-200'
      }`}>
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            isActive ? 'bg-white' : 'bg-[#0d5f4e]'
          }`}
          style={{ width: `${phase.progress}%` }}
        />
      </div>

      {/* Stats */}
      <div className={`flex items-center justify-between mt-2 text-[10px] ${
        isActive ? 'text-white/80' : 'text-[#9CA3AF]'
      }`}>
        <span>{phase.completed_tasks}/{phase.tasks_count} tasks</span>
        <span className="font-medium">{phase.progress}%</span>
      </div>
    </button>
  );
}
