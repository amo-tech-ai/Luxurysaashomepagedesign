// Dependency Line Component
// SVG lines connecting dependent tasks

import type { Task, DependencyType } from '@/data/gantt-types';
import { differenceInWeeks } from 'date-fns';

interface DependencyLineProps {
  fromTask: Task;
  toTask: Task;
  type: DependencyType;
  projectStartDate: string;
  weekWidth: number;
  rowHeight: number;
  taskRowIndex: (taskId: string) => number;
  isHighlighted: boolean;
}

export default function DependencyLine({
  fromTask,
  toTask,
  type,
  projectStartDate,
  weekWidth,
  rowHeight,
  taskRowIndex,
  isHighlighted,
}: DependencyLineProps) {
  const projectStart = new Date(projectStartDate);

  // Calculate positions
  const fromWeeksFromStart = differenceInWeeks(new Date(fromTask.end_date), projectStart);
  const toWeeksFromStart = differenceInWeeks(new Date(toTask.start_date), projectStart);

  const fromX = fromWeeksFromStart * weekWidth;
  const toX = toWeeksFromStart * weekWidth;

  const fromRowIndex = taskRowIndex(fromTask.id);
  const toRowIndex = taskRowIndex(toTask.id);

  // Y positions (center of task bar)
  const fromY = fromRowIndex * rowHeight + rowHeight / 2;
  const toY = toRowIndex * rowHeight + rowHeight / 2;

  // SVG path for line
  const midX = (fromX + toX) / 2;
  
  // Path with right angle connectors
  const path = `M ${fromX} ${fromY} L ${midX} ${fromY} L ${midX} ${toY} L ${toX} ${toY}`;

  // Arrow marker path
  const arrowPath = `M 0 0 L -6 -3 L -6 3 Z`;

  return (
    <g>
      {/* Connection line */}
      <path
        d={path}
        stroke={isHighlighted ? '#0d5f4e' : '#D1D5DB'}
        strokeWidth={isHighlighted ? 2.5 : 1.5}
        strokeDasharray={type === 'soft' ? '4 4' : '0'}
        fill="none"
        opacity={isHighlighted ? 1 : 0.4}
        className="transition-all duration-200"
      />

      {/* Arrow marker at end */}
      <path
        d={arrowPath}
        fill={isHighlighted ? '#0d5f4e' : '#D1D5DB'}
        opacity={isHighlighted ? 1 : 0.4}
        transform={`translate(${toX}, ${toY})`}
        className="transition-all duration-200"
      />

      {/* Dependency type label (only when highlighted) */}
      {isHighlighted && (
        <g>
          <rect
            x={midX - 20}
            y={fromY < toY ? fromY + 8 : fromY - 18}
            width={40}
            height={16}
            fill="white"
            stroke="#0d5f4e"
            strokeWidth={1}
            rx={4}
          />
          <text
            x={midX}
            y={fromY < toY ? fromY + 18 : fromY - 8}
            textAnchor="middle"
            fontSize={10}
            fontWeight={600}
            fill="#0d5f4e"
          >
            {type === 'hard' ? 'HARD' : 'SOFT'}
          </text>
        </g>
      )}
    </g>
  );
}
