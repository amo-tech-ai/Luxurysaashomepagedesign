// Gantt Row Component
// Single task row with task name (left) + timeline track (right)

import type { Task } from '@/data/gantt-types';
import { differenceInWeeks } from 'date-fns';
import GanttTaskBar from './GanttTaskBar';

interface GanttRowProps {
  task: Task;
  projectStartDate: string;
  weekWidth: number;
  isSelected: boolean;
  onTaskClick: (taskId: string) => void;
}

export default function GanttRow({ 
  task, 
  projectStartDate, 
  weekWidth, 
  isSelected,
  onTaskClick 
}: GanttRowProps) {
  // Calculate bar position and width
  const projectStart = new Date(projectStartDate);
  const taskStart = new Date(task.start_date);
  const taskEnd = new Date(task.end_date);

  const weeksFromStart = differenceInWeeks(taskStart, projectStart);
  const taskDurationWeeks = differenceInWeeks(taskEnd, taskStart) || 0.5; // Minimum 0.5 week

  const barX = weeksFromStart * weekWidth;
  const barWidth = taskDurationWeeks * weekWidth;

  // Status indicator dot
  const getStatusDot = () => {
    const colors = {
      completed: 'bg-[#10B981]',
      in_progress: 'bg-[#0d5f4e]',
      blocked: 'bg-[#EF4444]',
      at_risk: 'bg-[#F59E0B]',
      not_started: 'bg-gray-300',
    };
    
    return colors[task.status] || 'bg-gray-300';
  };

  return (
    <div className="flex border-b border-gray-100 hover:bg-[#FAF9F7] transition-colors group">
      {/* Left: Task name column */}
      <div className="w-60 flex-shrink-0 border-r border-gray-200 px-4 py-3 flex items-center gap-3">
        {/* Status dot */}
        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${getStatusDot()}`} />

        {/* Task name + metadata */}
        <div className="flex-1 min-w-0">
          <div className="text-sm text-[#212427] truncate font-medium">
            {task.name}
          </div>
          <div className="text-xs text-[#9CA3AF] mt-0.5">
            {task.layer}
          </div>
        </div>

        {/* Priority badge */}
        {task.priority === 'critical' && (
          <div className="px-1.5 py-0.5 bg-[#EF4444] text-white text-[10px] font-medium rounded uppercase tracking-wide">
            Critical
          </div>
        )}
        {task.priority === 'high' && (
          <div className="px-1.5 py-0.5 bg-[#F59E0B] text-white text-[10px] font-medium rounded uppercase tracking-wide">
            High
          </div>
        )}
      </div>

      {/* Right: Timeline track */}
      <div className="flex-1 relative h-14">
        <GanttTaskBar
          task={task}
          x={barX}
          width={barWidth}
          isSelected={isSelected}
          onClick={() => onTaskClick(task.id)}
        />
      </div>
    </div>
  );
}
