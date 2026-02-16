// Gantt Task Bar Component
// Interactive task bar with variants (default, selected, at_risk, blocked, completed)

import type { Task } from '@/data/gantt-types';

interface GanttTaskBarProps {
  task: Task;
  x: number; // Position in pixels from left
  width: number; // Width in pixels
  isSelected: boolean;
  onClick: () => void;
}

export default function GanttTaskBar({ task, x, width, isSelected, onClick }: GanttTaskBarProps) {
  // Determine bar color and style based on task status
  const getBarStyle = () => {
    if (task.status === 'completed') {
      return {
        bg: 'bg-[#6b9d89]',
        border: 'border-[#6b9d89]',
        opacity: 'opacity-60',
        text: 'text-white',
      };
    }
    
    if (task.status === 'blocked') {
      return {
        bg: 'bg-white',
        border: 'border-[#EF4444] border-dashed',
        opacity: 'opacity-100',
        text: 'text-[#EF4444]',
      };
    }
    
    if (task.status === 'at_risk') {
      return {
        bg: 'bg-white',
        border: 'border-[#F59E0B]',
        opacity: 'opacity-100',
        text: 'text-[#F59E0B]',
      };
    }
    
    if (task.status === 'in_progress') {
      return {
        bg: 'bg-[#0d5f4e]',
        border: 'border-[#0d5f4e]',
        opacity: 'opacity-100',
        text: 'text-white',
      };
    }
    
    // not_started
    return {
      bg: 'bg-[#E8F4F1]',
      border: 'border-[#6b9d89]',
      opacity: 'opacity-100',
      text: 'text-[#0d5f4e]',
    };
  };

  const style = getBarStyle();

  return (
    <div
      className={`absolute top-3 h-8 rounded-lg border-2 ${style.bg} ${style.border} ${style.opacity} 
        cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105
        ${isSelected ? 'ring-2 ring-[#0d5f4e] ring-offset-2 shadow-lg' : ''}`}
      style={{
        left: `${x}px`,
        width: `${width}px`,
        minWidth: '60px',
      }}
      onClick={onClick}
    >
      {/* Progress fill (if in progress) */}
      {task.status === 'in_progress' && task.completion_percent > 0 && (
        <div
          className="absolute inset-0 bg-[#3B5F52] rounded-lg"
          style={{ width: `${task.completion_percent}%` }}
        />
      )}

      {/* Task name */}
      <div className={`relative px-3 py-1.5 text-xs font-medium truncate ${style.text}`}>
        {task.name}
        {task.status === 'in_progress' && (
          <span className="ml-1.5 text-[10px] opacity-80">
            {task.completion_percent}%
          </span>
        )}
      </div>

      {/* Completion checkmark */}
      {task.status === 'completed' && (
        <div className="absolute -right-1 -top-1 w-4 h-4 bg-[#10B981] rounded-full flex items-center justify-center border-2 border-white">
          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}

      {/* Blocked indicator */}
      {task.status === 'blocked' && (
        <div className="absolute -right-1 -top-1 w-4 h-4 bg-[#EF4444] rounded-full flex items-center justify-center border-2 border-white">
          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      )}
    </div>
  );
}
