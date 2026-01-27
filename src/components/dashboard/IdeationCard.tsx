import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { Idea, IDEA_CATEGORIES } from '@/lib/dashboard/ideationMockData';

interface IdeationCardProps {
  idea: Idea;
  isSelected: boolean;
  isChecked: boolean;
  onSelect: (idea: Idea) => void;
  onCheck: (ideaId: string, checked: boolean) => void;
}

export function IdeationCard({ idea, isSelected, isChecked, onSelect, onCheck }: IdeationCardProps) {
  const categoryInfo = IDEA_CATEGORIES[idea.category];
  
  const categoryColors = {
    blue: 'bg-[#3B82F6]/10 text-[#3B82F6] ring-[#3B82F6]/20',
    purple: 'bg-[#9333EA]/10 text-[#9333EA] ring-[#9333EA]/20',
    emerald: 'bg-[#0D5F4E]/10 text-[#0D5F4E] ring-[#0D5F4E]/20',
    red: 'bg-[#EF4444]/10 text-[#EF4444] ring-[#EF4444]/20',
    amber: 'bg-[#D4A574]/10 text-[#D4A574] ring-[#D4A574]/20',
  };

  const effortLabels = {
    small: 'Small',
    medium: 'Medium',
    large: 'Large',
  };

  return (
    <div
      onClick={() => onSelect(idea)}
      className={`
        group relative bg-white rounded-xl p-5 cursor-pointer
        border-2 transition-all duration-300
        ${
          isSelected
            ? 'border-[#0D5F4E] bg-gradient-to-br from-[#0D5F4E]/5 to-[#0D5F4E]/10 shadow-lg shadow-[#0D5F4E]/20'
            : 'border-[#E8E6E1] hover:border-[#0D5F4E]/50 hover:shadow-md hover:shadow-black/5'
        }
      `}
    >
      <div className="flex items-start gap-4">
        {/* Checkbox */}
        <div className="pt-1">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => {
              e.stopPropagation();
              onCheck(idea.id, e.target.checked);
            }}
            className="w-5 h-5 rounded border-2 border-[#E8E6E1] checked:border-[#0D5F4E] checked:bg-[#0D5F4E] transition-all duration-200 cursor-pointer hover:border-[#0D5F4E]"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start gap-3 mb-3">
            {/* Category Badge */}
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ring-1 ${categoryColors[categoryInfo.color]}`}>
              <Sparkles className="w-3 h-3" />
              {categoryInfo.label}
            </span>

            {/* Effort Tag */}
            <span className="px-2.5 py-1 bg-[#F5F5F3] text-[#4A4A4A] text-xs font-semibold rounded-md">
              {effortLabels[idea.effort]}
            </span>
          </div>

          {/* Title */}
          <h3 className={`text-base font-semibold leading-snug mb-2 transition-colors duration-200 ${
            isSelected ? 'text-[#0D5F4E]' : 'text-[#2D2D2D] group-hover:text-[#0D5F4E]'
          }`}>
            {idea.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#737373] leading-relaxed">
            {idea.description}
          </p>
        </div>

        {/* Chevron */}
        <div className={`pt-1 transition-all duration-200 ${
          isSelected ? 'translate-x-0 opacity-100' : 'translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
        }`}>
          <ChevronRight className="w-5 h-5 text-[#0D5F4E]" />
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-[#0D5F4E]/0 to-[#0D5F4E]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
        !isSelected ? 'group-hover:from-[#0D5F4E]/5 group-hover:to-transparent' : ''
      }`} />
    </div>
  );
}
