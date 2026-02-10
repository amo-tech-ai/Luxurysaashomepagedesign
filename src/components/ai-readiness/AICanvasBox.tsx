/**
 * AI Readiness Canvas - Individual Box Component
 * Each of the 9 sections with AI icon
 */

import { Sparkles } from 'lucide-react';

interface AICanvasBoxProps {
  sectionId: string;
  title: string;
  subtitle: string;
  content: string;
  isSelected: boolean;
  onClick: () => void;
}

export function AICanvasBox({
  sectionId,
  title,
  subtitle,
  content,
  isSelected,
  onClick
}: AICanvasBoxProps) {
  return (
    <div
      onClick={onClick}
      className={`
        group relative p-6 rounded-lg border-2 bg-white cursor-pointer
        transition-all duration-200 min-h-[200px]
        ${isSelected 
          ? 'border-[#0d5f4e] shadow-lg ring-2 ring-[#0d5f4e]/20' 
          : 'border-[#0d5f4e]/20 hover:border-[#0d5f4e]/40 hover:shadow-md'
        }
      `}
    >
      {/* Section Number & AI Icon */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-[#0d5f4e]/50">#{sectionId}</span>
          {isSelected && (
            <span className="text-xs font-medium text-[#0d5f4e] bg-[#0d5f4e]/10 px-2 py-0.5 rounded">
              SELECTED
            </span>
          )}
        </div>
        <div
          className={`
            p-2 rounded-lg transition-colors
            ${isSelected 
              ? 'bg-[#0d5f4e] text-white' 
              : 'bg-[#F5F3EF] text-[#0d5f4e] group-hover:bg-[#0d5f4e] group-hover:text-white'
            }
          `}
        >
          <Sparkles className="w-4 h-4" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-base font-medium text-[#0d5f4e] mb-2 leading-tight">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="text-xs text-[#0d5f4e]/60 mb-4 leading-relaxed">
        {subtitle}
      </p>

      {/* Content Preview */}
      <div className="pt-4 border-t border-[#0d5f4e]/10">
        <p className="text-sm text-[#0d5f4e]/80 line-clamp-3">
          {content}
        </p>
      </div>

      {/* Click hint */}
      {!isSelected && (
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-xs text-[#0d5f4e]/40">Click for AI suggestions</span>
        </div>
      )}
    </div>
  );
}
