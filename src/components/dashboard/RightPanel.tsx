import React from 'react';
import { X, ExternalLink, CheckCircle, Play, Eye } from 'lucide-react';
import { Task } from '@/types/dashboard';
import { Tag } from './ui/Tag';
import { Button } from './ui/Button';

interface RightPanelProps {
  task: Task | null;
  onClose: () => void;
  onOpenFullTask?: (task: Task) => void;
  onStartTask?: (task: Task) => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function RightPanel({ 
  task, 
  onClose, 
  onOpenFullTask, 
  onStartTask,
  isCollapsed = true,
}: RightPanelProps) {
  // Collapsed state (default) - show "No task selected"
  if (isCollapsed || !task) {
    return (
      <div className="w-16 bg-[#FAFAF8] border-l border-[#E8E6E1] h-full flex flex-col items-center justify-center transition-all duration-300 ease-out">
        <div className="rotate-180 text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider" style={{ writingMode: 'vertical-rl' }}>
          No task selected
        </div>
      </div>
    );
  }

  // Expanded state with task - slide in from right
  return (
    <div className="w-96 bg-white border-l border-[#E8E6E1] h-full flex flex-col shadow-lg animate-slide-in-right">
      {/* Header */}
      <div className="p-6 border-b border-[#E8E6E1] bg-gradient-to-br from-[#FAFAF8] to-white">
        <div className="flex items-start justify-between mb-4">
          <div className="flex flex-wrap gap-2 flex-1">
            <Tag color="yellow">{task.status}</Tag>
            <Tag color="blue">{task.type}</Tag>
            {task.phase && <Tag color="gray">{task.phase}</Tag>}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white hover:text-[#EF4444] transition-all duration-200 group flex-shrink-0"
            title="Close panel"
          >
            <X className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#EF4444] transition-colors duration-200" />
          </button>
        </div>

        <h2 className="font-serif text-2xl text-[#2D2D2D] leading-tight mb-3">
          {task.title}
        </h2>

        <p className="text-xs text-[#A3A3A3] font-mono bg-white px-2 py-1 rounded border border-[#E8E6E1] inline-block">
          {task.id}
        </p>
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-3 gap-3 p-6 bg-[#FAFAF8] border-b border-[#E8E6E1]">
        <div className="bg-white border border-[#E8E6E1] rounded-xl p-4 text-center hover:border-[#0D5F4E] hover:shadow-sm transition-all duration-200">
          <div className="text-xs text-[#A3A3A3] font-semibold uppercase tracking-wider mb-2">
            Status
          </div>
          <div className="text-lg font-bold text-[#0D5F4E]">
            {task.completionPercentage}%
          </div>
        </div>
        <div className="bg-white border border-[#E8E6E1] rounded-xl p-4 text-center hover:border-[#0D5F4E] hover:shadow-sm transition-all duration-200">
          <div className="text-xs text-[#A3A3A3] font-semibold uppercase tracking-wider mb-2">
            Priority
          </div>
          <div className={`text-sm font-bold uppercase ${
            task.priority === 'high' ? 'text-[#EF4444]' : 
            task.priority === 'medium' ? 'text-[#D4A574]' : 
            'text-[#A3A3A3]'
          }`}>
            {task.priority}
          </div>
        </div>
        <div className="bg-white border border-[#E8E6E1] rounded-xl p-4 text-center hover:border-[#0D5F4E] hover:shadow-sm transition-all duration-200">
          <div className="text-xs text-[#A3A3A3] font-semibold uppercase tracking-wider mb-2">
            Skills
          </div>
          <div className="text-xs font-semibold text-[#2D2D2D] truncate">
            {task.skills?.[0] || '-'}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {/* Description */}
        <div className="p-6 border-b border-[#E8E6E1]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-gradient-to-b from-[#0D5F4E] to-[#0a4a3c] rounded-full" />
            <h3 className="text-sm font-bold text-[#2D2D2D] uppercase tracking-wider">
              Description
            </h3>
          </div>
          <p className="text-sm text-[#4A4A4A] leading-relaxed">{task.description}</p>
        </div>

        {/* Tags */}
        {task.tags && task.tags.length > 0 && (
          <div className="p-6 border-b border-[#E8E6E1]">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-5 bg-gradient-to-b from-[#0D5F4E] to-[#0a4a3c] rounded-full" />
              <h3 className="text-sm font-bold text-[#2D2D2D] uppercase tracking-wider">
                Tags
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {task.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-[#F5F5F3] text-[#4A4A4A] text-xs font-medium rounded-lg border border-[#E8E6E1]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Rationale */}
        <div className="p-6 border-b border-[#E8E6E1]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-gradient-to-b from-[#0D5F4E] to-[#0a4a3c] rounded-full" />
            <h3 className="text-sm font-bold text-[#2D2D2D] uppercase tracking-wider">
              Rationale
            </h3>
          </div>
          <p className="text-sm text-[#4A4A4A] leading-relaxed">
            This task addresses a key user need and aligns with our product roadmap priorities.
          </p>
        </div>

        {/* Acceptance Criteria */}
        <div className="p-6 border-b border-[#E8E6E1]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-gradient-to-b from-[#0D5F4E] to-[#0a4a3c] rounded-full" />
            <h3 className="text-sm font-bold text-[#2D2D2D] uppercase tracking-wider">
              Acceptance Criteria
            </h3>
          </div>
          <div className="space-y-2">
            {[
              'Feature is implemented and tested',
              'Documentation is updated',
              'UI/UX is approved by design team',
            ].map((criteria, index) => (
              <label
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F5F5F3] cursor-pointer transition-all duration-200 group"
              >
                <input 
                  type="checkbox" 
                  className="mt-0.5 w-4 h-4 rounded border-2 border-[#E8E6E1] checked:border-[#0D5F4E] checked:bg-[#0D5F4E] transition-colors duration-200" 
                />
                <span className="text-sm text-[#4A4A4A] leading-relaxed group-hover:text-[#2D2D2D] transition-colors duration-200">
                  {criteria}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* AI Insight */}
        <div className="p-6">
          <div className="bg-gradient-to-br from-[#0D5F4E]/5 to-[#0D5F4E]/10 border border-[#0D5F4E]/20 rounded-xl p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                <span className="text-sm">💡</span>
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-[#0D5F4E] uppercase tracking-wider mb-1">
                  AI Insight
                </div>
                <p className="text-sm text-[#2D2D2D] leading-relaxed">
                  This task has high priority but no assigned milestone.
                </p>
              </div>
            </div>
            <div className="pl-11">
              <div className="text-xs font-semibold text-[#0D5F4E] flex items-center gap-1">
                <span>→</span>
                <span>Next: Add to Q1 2026 roadmap</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="p-6 border-t border-[#E8E6E1] bg-gradient-to-br from-white to-[#FAFAF8] space-y-3">
        {/* Primary Actions Based on Status */}
        {task.status === 'planning' && onStartTask && (
          <Button
            onClick={() => onStartTask(task)}
            icon={<Play className="w-4 h-4" />}
            className="w-full"
          >
            Start Task
          </Button>
        )}
        
        {task.status === 'in-progress' && (
          <Button
            onClick={() => {}}
            icon={<CheckCircle className="w-4 h-4" />}
            className="w-full"
          >
            Mark as Complete
          </Button>
        )}

        {task.status === 'ai-review' && (
          <Button
            onClick={() => {}}
            icon={<Eye className="w-4 h-4" />}
            className="w-full"
          >
            Review Task
          </Button>
        )}

        {/* Secondary Action */}
        <button
          onClick={() => onOpenFullTask?.(task)}
          className="w-full py-2.5 px-4 bg-white border border-[#E8E6E1] text-[#4A4A4A] rounded-lg text-sm font-semibold hover:bg-[#F5F5F3] hover:border-[#0D5F4E] transition-all duration-200 flex items-center justify-center gap-2"
        >
          <ExternalLink className="w-4 h-4" />
          Open Full Task
        </button>
      </div>
    </div>
  );
}
