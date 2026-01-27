import React from 'react';
import { Plus, Settings, MoreVertical, TrendingUp, Zap } from 'lucide-react';
import { Task } from '@/types/dashboard';
import { TaskCard } from './TaskCard';
import { EmptyState } from './ui/EmptyState';

interface KanbanColumnProps {
  title: string;
  count: number;
  maxCapacity?: number;
  icon?: React.ReactNode;
  tasks: Task[];
  emptyMessage?: string;
  emptyDescription?: string;
  onTaskSelect?: (task: Task) => void;
  onTaskStart?: (task: Task) => void;
  selectedTaskId?: string;
  statusColor?: 'blue' | 'amber' | 'emerald' | 'purple';
}

export function KanbanColumn({
  title,
  count,
  maxCapacity,
  icon,
  tasks,
  emptyMessage = 'No tasks yet',
  emptyDescription = 'Tasks will appear here',
  onTaskSelect,
  onTaskStart,
  selectedTaskId,
  statusColor = 'blue',
}: KanbanColumnProps) {
  const colorClasses = {
    blue: {
      bg: 'from-[#3B82F6]/5 to-[#2563eb]/10',
      border: 'border-[#3B82F6]/20',
      text: 'text-[#3B82F6]',
      badge: 'bg-[#3B82F6]/10 text-[#3B82F6] ring-[#3B82F6]/20',
      icon: 'bg-[#3B82F6]',
    },
    amber: {
      bg: 'from-[#D4A574]/5 to-[#b8915e]/10',
      border: 'border-[#D4A574]/20',
      text: 'text-[#D4A574]',
      badge: 'bg-[#D4A574]/10 text-[#D4A574] ring-[#D4A574]/20',
      icon: 'bg-[#D4A574]',
    },
    emerald: {
      bg: 'from-[#0D5F4E]/5 to-[#0a4a3c]/10',
      border: 'border-[#0D5F4E]/20',
      text: 'text-[#0D5F4E]',
      badge: 'bg-[#0D5F4E]/10 text-[#0D5F4E] ring-[#0D5F4E]/20',
      icon: 'bg-[#0D5F4E]',
    },
    purple: {
      bg: 'from-[#9333EA]/5 to-[#7e22ce]/10',
      border: 'border-[#9333EA]/20',
      text: 'text-[#9333EA]',
      badge: 'bg-[#9333EA]/10 text-[#9333EA] ring-[#9333EA]/20',
      icon: 'bg-[#9333EA]',
    },
  };

  const colors = colorClasses[statusColor];
  const isAtCapacity = maxCapacity && count >= maxCapacity;

  return (
    <div className={`flex flex-col h-full bg-white rounded-2xl border border-[#E8E6E1] shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md`}>
      {/* Column Header */}
      <div className={`bg-gradient-to-br ${colors.bg} border-b ${colors.border} px-5 py-4`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${colors.icon} shadow-sm`} />
            <h3 className="text-sm font-bold text-[#2D2D2D] uppercase tracking-wider">
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-1.5">
            <button className="p-1.5 rounded-lg hover:bg-white/50 transition-colors duration-200 group">
              <Settings className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#0D5F4E] group-hover:rotate-90 transition-all duration-200" />
            </button>
            <button className="p-1.5 rounded-lg hover:bg-white/50 transition-colors duration-200 group">
              <Plus className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#0D5F4E] group-hover:scale-110 transition-all duration-200" />
            </button>
          </div>
        </div>

        {/* Count Badge */}
        <div className="flex items-center justify-between">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${colors.badge} ring-1 font-semibold`}>
            {maxCapacity ? (
              <>
                <span className="text-lg">{count}</span>
                <span className="text-xs opacity-60">/ {maxCapacity}</span>
              </>
            ) : (
              <span className="text-lg">{count}</span>
            )}
          </div>
          
          {isAtCapacity && (
            <div className="flex items-center gap-1 px-2 py-1 bg-white/60 rounded-lg">
              <Zap className="w-3 h-3 text-[#EF4444]" />
              <span className="text-xs font-semibold text-[#EF4444]">Full</span>
            </div>
          )}
        </div>
      </div>

      {/* Column Content */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        {tasks.length === 0 ? (
          <EmptyState
            icon={icon || <div className="text-5xl">📋</div>}
            title={emptyMessage}
            description={emptyDescription}
          />
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onSelect={onTaskSelect}
                onStart={onTaskStart}
                isSelected={task.id === selectedTaskId}
              />
            ))}
          </div>
        )}
      </div>

      {/* Column Footer */}
      {tasks.length > 0 && (
        <div className="px-4 py-3 bg-[#FAFAF8] border-t border-[#E8E6E1]">
          <button className="w-full py-2 text-xs font-semibold text-[#A3A3A3] hover:text-[#0D5F4E] transition-colors duration-200 flex items-center justify-center gap-2 group">
            <Plus className="w-3 h-3 group-hover:scale-110 transition-transform duration-200" />
            Add Task
          </button>
        </div>
      )}
    </div>
  );
}
