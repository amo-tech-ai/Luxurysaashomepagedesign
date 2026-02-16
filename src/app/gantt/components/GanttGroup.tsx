// Gantt Group Component
// Collapsible layer grouping (Foundation, Core Screens, Business, AI, Automation)

import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import type { Task, TaskLayer } from '@/data/gantt-types';
import GanttRow from './GanttRow';

interface GanttGroupProps {
  layer: TaskLayer;
  tasks: Task[];
  projectStartDate: string;
  weekWidth: number;
  selectedTaskId: string | null;
  onTaskClick: (taskId: string) => void;
}

export default function GanttGroup({ 
  layer, 
  tasks, 
  projectStartDate, 
  weekWidth,
  selectedTaskId,
  onTaskClick 
}: GanttGroupProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Calculate group statistics
  const completedTasks = tasks.filter(t => t.status === 'completed').length;
  const totalTasks = tasks.length;
  const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Layer colors
  const layerColors: Record<TaskLayer, string> = {
    'Foundation': '#0d5f4e',
    'Core Screens': '#3B5F52',
    'Business Systems': '#6b9d89',
    'AI Intelligence': '#8FB89F',
    'Automation': '#A8C7B7',
  };

  const layerColor = layerColors[layer];

  return (
    <div className="border-b-2 border-gray-200">
      {/* Group header */}
      <div 
        className="flex items-center bg-[#F5F3EF] border-b border-gray-200 cursor-pointer hover:bg-[#E8F4F1] transition-colors"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {/* Left: Layer name + stats */}
        <div className="w-60 flex-shrink-0 border-r border-gray-200 px-4 py-3 flex items-center gap-3">
          {/* Expand/collapse icon */}
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-[#6B7280] flex-shrink-0" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#6B7280] flex-shrink-0" />
          )}

          {/* Layer indicator */}
          <div 
            className="w-1 h-6 rounded-full flex-shrink-0"
            style={{ backgroundColor: layerColor }}
          />

          {/* Layer name */}
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-[#212427]">
              {layer}
            </div>
            <div className="text-xs text-[#6B7280] mt-0.5">
              {completedTasks}/{totalTasks} tasks • {progress}%
            </div>
          </div>
        </div>

        {/* Right: Progress bar */}
        <div className="flex-1 px-6 py-3">
          <div className="w-full max-w-xs">
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500"
                  style={{ 
                    width: `${progress}%`,
                    backgroundColor: layerColor
                  }}
                />
              </div>
              <div className="text-xs font-medium text-[#6B7280] w-10 text-right">
                {progress}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Group tasks */}
      {!isCollapsed && (
        <div>
          {tasks.map((task) => (
            <GanttRow
              key={task.id}
              task={task}
              projectStartDate={projectStartDate}
              weekWidth={weekWidth}
              isSelected={selectedTaskId === task.id}
              onTaskClick={onTaskClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}
