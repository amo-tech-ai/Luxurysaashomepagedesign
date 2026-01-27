import React from 'react';
import { X, Sparkles, CheckCircle2, XCircle, FileCode, Zap } from 'lucide-react';
import { Idea, IDEA_CATEGORIES } from '@/lib/dashboard/ideationMockData';
import { Button } from './ui/Button';

interface IdeationDetailsPanelProps {
  idea: Idea | null;
  onClose: () => void;
  onConvertToTask: (idea: Idea) => void;
  onDismiss: (idea: Idea) => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function IdeationDetailsPanel({
  idea,
  onClose,
  onConvertToTask,
  onDismiss,
  isCollapsed = true,
}: IdeationDetailsPanelProps) {
  // Collapsed state (default) - show "No task selected"
  if (isCollapsed || !idea) {
    return (
      <div className="w-16 bg-[#FAFAF8] border-l border-[#E8E6E1] h-full flex flex-col items-center justify-center transition-all duration-300 ease-out">
        <div className="rotate-180 text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider" style={{ writingMode: 'vertical-rl' }}>
          No idea selected
        </div>
      </div>
    );
  }

  const categoryInfo = IDEA_CATEGORIES[idea.category];

  // Expanded state with idea - slide in from right
  return (
    <div className="w-96 bg-white border-l border-[#E8E6E1] h-full flex flex-col shadow-lg animate-slide-in-right">
      {/* Header */}
      <div className="p-6 border-b border-[#E8E6E1] bg-gradient-to-br from-[#FAFAF8] to-white">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#0D5F4E] uppercase tracking-wider">
                {categoryInfo.label}
              </p>
              <p className="text-xs text-[#A3A3A3]">
                {categoryInfo.agent}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white hover:text-[#EF4444] transition-all duration-200 group"
            title="Close panel"
          >
            <X className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#EF4444] transition-colors duration-200" />
          </button>
        </div>

        <h2 className="font-serif text-xl text-[#2D2D2D] leading-tight mb-3">
          {idea.title}
        </h2>

        {/* Effort Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E8E6E1] rounded-lg">
          <Zap className="w-3.5 h-3.5 text-[#D4A574]" />
          <span className="text-xs font-semibold text-[#4A4A4A]">
            {idea.effort === 'small' ? 'Small effort' : idea.effort === 'medium' ? 'Medium effort' : 'Large effort'}
          </span>
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
          <p className="text-sm text-[#4A4A4A] leading-relaxed">
            {idea.description}
          </p>
        </div>

        {/* Rationale */}
        <div className="p-6 border-b border-[#E8E6E1]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-gradient-to-b from-[#0D5F4E] to-[#0a4a3c] rounded-full" />
            <h3 className="text-sm font-bold text-[#2D2D2D] uppercase tracking-wider">
              Why This Matters
            </h3>
          </div>
          <p className="text-sm text-[#4A4A4A] leading-relaxed">
            {idea.rationale}
          </p>
        </div>

        {/* Affected Areas */}
        <div className="p-6 border-b border-[#E8E6E1]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-gradient-to-b from-[#0D5F4E] to-[#0a4a3c] rounded-full" />
            <h3 className="text-sm font-bold text-[#2D2D2D] uppercase tracking-wider">
              Affected Areas
            </h3>
          </div>
          <div className="space-y-2">
            {idea.affectedAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-[#4A4A4A] bg-[#F5F5F3] px-3 py-2 rounded-lg"
              >
                <FileCode className="w-3.5 h-3.5 text-[#0D5F4E] flex-shrink-0" />
                <span className="font-mono text-xs">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Approach */}
        <div className="p-6 border-b border-[#E8E6E1]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-gradient-to-b from-[#0D5F4E] to-[#0a4a3c] rounded-full" />
            <h3 className="text-sm font-bold text-[#2D2D2D] uppercase tracking-wider">
              Implementation Approach
            </h3>
          </div>
          <p className="text-sm text-[#4A4A4A] leading-relaxed">
            {idea.implementation}
          </p>
        </div>

        {/* Priority Score */}
        <div className="p-6">
          <div className="bg-gradient-to-br from-[#0D5F4E]/5 to-[#0D5F4E]/10 border border-[#0D5F4E]/20 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#0D5F4E] uppercase tracking-wider">
                AI Priority Score
              </span>
              <span className="text-2xl font-bold text-[#0D5F4E]">
                {idea.priority}/10
              </span>
            </div>
            <div className="w-full h-2 bg-white rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] rounded-full transition-all duration-500"
                style={{ width: `${idea.priority * 10}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="p-6 border-t border-[#E8E6E1] bg-gradient-to-br from-white to-[#FAFAF8] space-y-3">
        <Button
          onClick={() => onConvertToTask(idea)}
          icon={<CheckCircle2 className="w-4 h-4" />}
          className="w-full"
        >
          Convert to Auto-Build Task
        </Button>
        <button
          onClick={() => onDismiss(idea)}
          className="w-full py-2.5 px-4 bg-white border border-[#E8E6E1] text-[#4A4A4A] rounded-lg text-sm font-semibold hover:bg-[#F5F5F3] hover:border-[#EF4444] hover:text-[#EF4444] transition-all duration-200 flex items-center justify-center gap-2"
        >
          <XCircle className="w-4 h-4" />
          Dismiss Idea
        </button>
      </div>
    </div>
  );
}
