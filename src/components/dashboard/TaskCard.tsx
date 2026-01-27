import React from 'react';
import { Clock, MoreVertical, Play, Sparkles, CheckCircle2 } from 'lucide-react';
import { Task } from '@/types/dashboard';
import { getTimeAgo } from '@/lib/dashboard/mockData';
import { Tag } from './ui/Tag';
import { Button } from './ui/Button';

interface TaskCardProps {
  task: Task;
  onSelect?: (task: Task) => void;
  onStart?: (task: Task) => void;
  isSelected?: boolean;
}

export function TaskCard({ task, onSelect, onStart, isSelected = false }: TaskCardProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-gradient-to-r from-[#EF4444] to-[#dc2626] text-white';
      case 'medium':
        return 'bg-gradient-to-r from-[#D4A574] to-[#b8915e] text-white';
      case 'low':
        return 'bg-gradient-to-r from-[#A3A3A3] to-[#8c8c8c] text-white';
      default:
        return 'bg-[#F5F5F3] text-[#4A4A4A]';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'in-progress':
        return <Play className="w-3 h-3" />;
      case 'ai-review':
        return <Sparkles className="w-3 h-3" />;
      case 'queue':
        return <Clock className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <div
      onClick={() => onSelect?.(task)}
      className={`
        group relative bg-white rounded-xl p-5 cursor-pointer
        border-2 transition-all duration-300
        ${
          isSelected
            ? 'border-[#0D5F4E] bg-gradient-to-br from-[#0D5F4E]/5 to-[#0D5F4E]/10 shadow-lg shadow-[#0D5F4E]/20 scale-[1.02]'
            : 'border-[#E8E6E1] hover:border-[#0D5F4E] hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5'
        }
      `}
    >
      {/* Priority Indicator */}
      {task.priority && (
        <div className="absolute -top-1 -right-1">
          <div className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-md ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </div>
        </div>
      )}

      {/* Status Indicator */}
      {task.status !== 'planning' && (
        <div className="absolute top-4 left-4">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] flex items-center justify-center text-white shadow-sm">
            {getStatusIcon(task.status)}
          </div>
        </div>
      )}

      {/* Content */}
      <div className={`${task.status !== 'planning' ? 'pl-8' : ''}`}>
        {/* Title */}
        <h3 className={`text-base font-semibold leading-snug mb-2 line-clamp-2 transition-colors duration-200 ${
          isSelected ? 'text-[#0D5F4E]' : 'text-[#2D2D2D] group-hover:text-[#0D5F4E]'
        }`}>
          {task.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#737373] leading-relaxed mb-4 line-clamp-2">
          {task.description}
        </p>

        {/* Tags */}
        {task.tags && task.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {task.tags.slice(0, 3).map((tag, index) => (
              <Tag key={index} color={index === 0 ? 'yellow' : 'blue'}>
                {tag}
              </Tag>
            ))}
            {task.tags.length > 3 && (
              <span className="px-2 py-1 text-xs font-semibold text-[#A3A3A3] bg-[#F5F5F3] rounded-md">
                +{task.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-[#E8E6E1]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs text-[#A3A3A3]">
              <Clock className="w-3.5 h-3.5" />
              <span>{getTimeAgo(task.createdAt)}</span>
            </div>
            {task.assignee && (
              <>
                <span className="text-[#E8E6E1]">•</span>
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] flex items-center justify-center text-white text-xs font-bold">
                  {task.assignee.charAt(0).toUpperCase()}
                </div>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            {task.status === 'planning' && onStart && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onStart(task);
                }}
                className="px-3 py-1.5 bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] text-white rounded-lg text-xs font-semibold hover:shadow-lg hover:shadow-[#0D5F4E]/20 transition-all duration-200 flex items-center gap-1.5 group/btn"
              >
                <Play className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-200" />
                Start
              </button>
            )}
            {task.status === 'ai-review' && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="px-3 py-1.5 bg-gradient-to-r from-[#9333EA] to-[#7e22ce] text-white rounded-lg text-xs font-semibold hover:shadow-lg hover:shadow-[#9333EA]/20 transition-all duration-200 flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3 h-3" />
                Review
              </button>
            )}
            <button
              className="p-1.5 rounded-lg hover:bg-[#F5F5F3] transition-colors duration-200 opacity-0 group-hover:opacity-100"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreVertical className="w-4 h-4 text-[#A3A3A3]" />
            </button>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-[#0D5F4E]/0 to-[#0D5F4E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
        !isSelected ? 'group-hover:from-[#0D5F4E]/5 group-hover:to-transparent' : ''
      }`} />
    </div>
  );
}
