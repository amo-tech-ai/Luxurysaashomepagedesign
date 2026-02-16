// Gantt Canvas Component
// Main timeline container with groups, tasks, and dependencies

import { useMemo } from 'react';
import type { Task, Dependency, TaskLayer } from '@/data/gantt-types';
import TimelineHeader from './TimelineHeader';
import GanttGroup from './GanttGroup';
import DependencyLine from './DependencyLine';

interface GanttCanvasProps {
  tasks: Task[];
  dependencies: Dependency[];
  projectStartDate: string;
  weekCount: number;
  selectedTaskId: string | null;
  onTaskClick: (taskId: string) => void;
  showDependencies?: boolean;
}

const WEEK_WIDTH = 120; // pixels per week
const ROW_HEIGHT = 56; // pixels per row

export default function GanttCanvas({
  tasks,
  dependencies,
  projectStartDate,
  weekCount,
  selectedTaskId,
  onTaskClick,
  showDependencies = true,
}: GanttCanvasProps) {
  // Group tasks by layer
  const tasksByLayer = useMemo(() => {
    const layers: TaskLayer[] = [
      'Foundation',
      'Core Screens',
      'Business Systems',
      'AI Intelligence',
      'Automation',
    ];

    return layers.map(layer => ({
      layer,
      tasks: tasks.filter(t => t.layer === layer),
    })).filter(group => group.tasks.length > 0);
  }, [tasks]);

  // Create task ID to row index mapping for dependency lines
  const taskRowIndex = useMemo(() => {
    const indexMap = new Map<string, number>();
    let currentIndex = 0;

    tasksByLayer.forEach(group => {
      currentIndex++; // Group header row
      group.tasks.forEach(task => {
        indexMap.set(task.id, currentIndex);
        currentIndex++;
      });
    });

    return (taskId: string) => indexMap.get(taskId) ?? 0;
  }, [tasksByLayer]);

  // Find task by ID
  const findTask = (taskId: string) => tasks.find(t => t.id === taskId);

  // Get dependencies to highlight (connected to selected task)
  const highlightedDependencies = useMemo(() => {
    if (!selectedTaskId) return new Set<string>();
    
    const highlighted = new Set<string>();
    dependencies.forEach(dep => {
      if (dep.task_id === selectedTaskId || dep.depends_on_task_id === selectedTaskId) {
        highlighted.add(dep.id);
      }
    });
    
    return highlighted;
  }, [selectedTaskId, dependencies]);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Timeline header */}
      <TimelineHeader 
        startDate={projectStartDate}
        weekCount={weekCount}
        weekWidth={WEEK_WIDTH}
      />

      {/* Scrollable timeline content */}
      <div className="overflow-auto relative" style={{ maxHeight: 'calc(100vh - 280px)' }}>
        {/* Task groups */}
        <div className="relative">
          {tasksByLayer.map(({ layer, tasks: layerTasks }) => (
            <GanttGroup
              key={layer}
              layer={layer}
              tasks={layerTasks}
              projectStartDate={projectStartDate}
              weekWidth={WEEK_WIDTH}
              selectedTaskId={selectedTaskId}
              onTaskClick={onTaskClick}
            />
          ))}
        </div>

        {/* Dependency lines overlay */}
        {showDependencies && dependencies.length > 0 && (
          <svg
            className="absolute top-0 left-60 pointer-events-none"
            style={{
              width: `${weekCount * WEEK_WIDTH}px`,
              height: `${(tasks.length + tasksByLayer.length) * ROW_HEIGHT}px`,
            }}
          >
            {dependencies.map((dep) => {
              const fromTask = findTask(dep.depends_on_task_id);
              const toTask = findTask(dep.task_id);

              if (!fromTask || !toTask) return null;

              return (
                <DependencyLine
                  key={dep.id}
                  fromTask={fromTask}
                  toTask={toTask}
                  type={dep.type}
                  projectStartDate={projectStartDate}
                  weekWidth={WEEK_WIDTH}
                  rowHeight={ROW_HEIGHT}
                  taskRowIndex={taskRowIndex}
                  isHighlighted={highlightedDependencies.has(dep.id)}
                />
              );
            })}
          </svg>
        )}
      </div>
    </div>
  );
}
