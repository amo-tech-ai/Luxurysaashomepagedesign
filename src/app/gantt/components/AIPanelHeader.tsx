// AI Panel Header Component
// Task name, status, timeline, dependencies summary

import type { Task } from '@/data/gantt-types';
import { Calendar, Link2 } from 'lucide-react';
import { format } from 'date-fns';

interface AIPanelHeaderProps {
  task: Task;
}

export default function AIPanelHeader({ task }: AIPanelHeaderProps) {
  const getStatusColor = () => {
    const colors = {
      completed: 'bg-[#10B981] text-white',
      in_progress: 'bg-[#0d5f4e] text-white',
      blocked: 'bg-[#EF4444] text-white',
      at_risk: 'bg-[#F59E0B] text-white',
      not_started: 'bg-gray-200 text-gray-700',
    };
    
    return colors[task.status] || 'bg-gray-200 text-gray-700';
  };

  const getStatusLabel = () => {
    return task.status.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="p-6 pb-4">
      {/* Task name */}
      <h2 className="text-lg text-[#212427] mb-3 font-light">
        {task.name}
      </h2>

      {/* Status badge + completion */}
      <div className="flex items-center gap-2 mb-4">
        <span className={`px-2.5 py-1 text-xs font-medium rounded-lg ${getStatusColor()}`}>
          {getStatusLabel()}
        </span>
        {task.status === 'in_progress' && (
          <span className="text-xs text-[#6B7280]">
            {task.completion_percent}% complete
          </span>
        )}
      </div>

      {/* Timeline */}
      <div className="flex items-center gap-2 text-xs text-[#6B7280] mb-2">
        <Calendar className="w-3.5 h-3.5" />
        <span>
          {format(new Date(task.start_date), 'MMM d')} → {format(new Date(task.end_date), 'MMM d, yyyy')}
        </span>
      </div>

      {/* Dependencies */}
      {task.dependencies.length > 0 && (
        <div className="flex items-center gap-2 text-xs text-[#6B7280]">
          <Link2 className="w-3.5 h-3.5" />
          <span>
            {task.dependencies.length} {task.dependencies.length === 1 ? 'dependency' : 'dependencies'}
          </span>
        </div>
      )}

      {/* Layer tag */}
      <div className="mt-3 pt-3 border-t border-gray-200">
        <span className="text-xs text-[#9CA3AF]">Layer: </span>
        <span className="text-xs font-medium text-[#212427]">{task.layer}</span>
      </div>
    </div>
  );
}
