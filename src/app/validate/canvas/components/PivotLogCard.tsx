'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, ExternalLink, Sparkles } from 'lucide-react';
import type { Pivot } from '../../../../data/validation-board-types';

interface PivotLogCardProps {
  pivots: Pivot[];
  onViewCanvasChanges?: (pivot: Pivot) => void;
  onViewAllPivots?: () => void;
  onAISuggest?: () => void;
  isAIActive?: boolean;
}

const PIVOT_TYPE_LABELS = {
  audience: 'AUDIENCE',
  pain: 'PAIN',
  solution: 'SOLUTION',
};

export function PivotLogCard({ pivots, onViewCanvasChanges, onViewAllPivots, onAISuggest, isAIActive }: PivotLogCardProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  if (pivots.length === 0) {
    return null; // Don't show if no pivots
  }

  const latestPivot = pivots[0]; // Assuming sorted by date desc

  return (
    <div className={`bg-white rounded-xl border shadow-sm overflow-hidden ${
      isAIActive ? 'border-[#0d5f4e] ring-2 ring-[#0d5f4e]/20' : 'border-gray-200'
    }`}>
      {/* Header (Collapsible) */}
      <div className="w-full px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <h2 className="text-base font-light text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
            📋 Pivot Log
          </h2>
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          )}
        </button>
        
        <div className="flex items-center gap-2">
          {onAISuggest && (
            <button
              onClick={onAISuggest}
              className={`p-2 rounded-lg transition-colors ${
                isAIActive
                  ? 'bg-[#0d5f4e] text-white'
                  : 'text-[#0d5f4e] hover:bg-[#E8F4F1]'
              }`}
              title="AI Suggestions"
            >
              <Sparkles className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Content (Collapsible) */}
      {isExpanded && (
        <div className="px-6 py-5">
          {/* Latest Pivot */}
          <div className="space-y-3">
            {/* Date & Type */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-900">
                {latestPivot.created_at.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="px-2 py-0.5 bg-orange-50 text-orange-700 text-xs font-medium rounded border border-orange-200">
                Pivoted {PIVOT_TYPE_LABELS[latestPivot.pivot_type]}
              </span>
            </div>

            {/* What Changed */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                What changed:
              </label>
              <p className="text-sm text-gray-900 leading-relaxed">
                {latestPivot.what_changed}
              </p>
            </div>

            {/* Reason */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Reason:
              </label>
              <p className="text-sm text-gray-900 leading-relaxed">
                {latestPivot.reason}
              </p>
            </div>

            {/* Canvas Changes (if any) */}
            {latestPivot.canvas_changes.length > 0 && onViewCanvasChanges && (
              <button
                onClick={() => onViewCanvasChanges(latestPivot)}
                className="flex items-center gap-1.5 text-xs text-[#0D5F4E] hover:underline"
              >
                <ExternalLink className="w-3 h-3" />
                View Canvas Changes
              </button>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-4" />

          {/* View All Link */}
          {pivots.length > 1 && onViewAllPivots && (
            <button
              onClick={onViewAllPivots}
              className="text-xs text-gray-600 hover:text-[#0D5F4E] hover:underline"
            >
              View All Pivots ({pivots.length})
            </button>
          )}
        </div>
      )}
    </div>
  );
}