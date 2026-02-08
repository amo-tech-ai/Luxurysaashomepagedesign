'use client';

import { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Lightbulb, ChevronDown, ChevronUp, Circle, CircleDot, CheckCircle } from 'lucide-react';

interface Card {
  id: string;
  title: string;
  source: string;
  successCriteria: string;
  evidenceStatus: 'not-started' | 'in-progress' | 'complete';
  aiTip: string;
  columnId: string;
  sprintId: number;
}

interface KanbanCardProps {
  card: Card;
  isDragging?: boolean;
}

export function KanbanCard({ card, isDragging = false }: KanbanCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [showAITip, setShowAITip] = useState(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({ id: card.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isSortableDragging ? 0.5 : 1,
  };

  const getSourceColor = (source: string) => {
    const colors: Record<string, string> = {
      'Problem': 'bg-red-100 text-red-700',
      'Solution': 'bg-blue-100 text-blue-700',
      'Customer': 'bg-purple-100 text-purple-700',
      'Market': 'bg-green-100 text-green-700',
      'Competition': 'bg-orange-100 text-orange-700',
      'Business Model': 'bg-pink-100 text-pink-700',
      'Risks': 'bg-yellow-100 text-yellow-700',
      'Opportunity': 'bg-teal-100 text-teal-700',
    };
    return colors[source] || 'bg-gray-100 text-gray-700';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'in-progress':
        return <CircleDot className="w-4 h-4 text-blue-600" />;
      default:
        return <Circle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'complete':
        return 'Evidence Collected';
      case 'in-progress':
        return 'In Progress';
      default:
        return 'Not Started';
    }
  };

  if (isDragging) {
    return (
      <div className="bg-white p-4 rounded-lg border-2 border-[#0D5F4E] shadow-lg">
        <div className="flex items-start gap-3">
          <GripVertical className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium text-[#212427] mb-2">{card.title}</h4>
            <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getSourceColor(card.source)}`}>
              {card.source}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white rounded-lg border border-gray-200 hover:border-[#0D5F4E] hover:shadow-md transition-all group"
    >
      {/* Card Header */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          <button
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing touch-none"
          >
            <GripVertical className="w-5 h-5 text-gray-400 hover:text-[#0D5F4E] transition-colors flex-shrink-0 mt-1" />
          </button>
          
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium text-[#212427] mb-2 line-clamp-2">
              {card.title}
            </h4>
            
            <div className="flex items-center gap-2 mb-3">
              <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getSourceColor(card.source)}`}>
                {card.source}
              </span>
            </div>

            {/* Evidence Status */}
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
              {getStatusIcon(card.evidenceStatus)}
              <span>{getStatusText(card.evidenceStatus)}</span>
            </div>

            {/* Success Criteria (Collapsed) */}
            {!expanded && (
              <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                {card.successCriteria}
              </p>
            )}

            {/* Expand/Collapse Button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs text-[#0D5F4E] hover:text-[#0a4d3f] font-medium flex items-center gap-1 transition-colors"
            >
              {expanded ? (
                <>
                  <ChevronUp className="w-3 h-3" />
                  Show less
                </>
              ) : (
                <>
                  <ChevronDown className="w-3 h-3" />
                  Show details
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div className="px-4 pb-4 border-t border-gray-100 pt-4">
          <div className="mb-4">
            <h5 className="text-xs font-medium text-gray-700 mb-2">Success Criteria</h5>
            <p className="text-xs text-gray-600 leading-relaxed">{card.successCriteria}</p>
          </div>

          {/* AI Tip Toggle */}
          <button
            onClick={() => setShowAITip(!showAITip)}
            className="flex items-center gap-2 text-xs text-[#0D5F4E] hover:text-[#0a4d3f] font-medium transition-colors mb-2"
          >
            <Lightbulb className="w-3.5 h-3.5" />
            {showAITip ? 'Hide AI Coach Tip' : 'Show AI Coach Tip'}
          </button>

          {showAITip && (
            <div className="p-3 bg-[#0D5F4E]/5 border border-[#0D5F4E]/20 rounded-lg">
              <p className="text-xs text-gray-700 leading-relaxed">{card.aiTip}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
