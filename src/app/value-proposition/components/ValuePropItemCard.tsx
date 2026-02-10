import { GripVertical, X, AlertCircle, CheckCircle2 } from 'lucide-react';
import type { ValuePropItem } from '../../../data/value-proposition-types';

interface ValuePropItemCardProps {
  item: ValuePropItem;
  isMatched: boolean;
  onDelete?: () => void;
  onEdit?: (newText: string) => void;
}

export function ValuePropItemCard({ item, isMatched, onDelete, onEdit }: ValuePropItemCardProps) {
  const isUnmatched = !isMatched && (item.type === 'pain' || item.type === 'gain');
  
  return (
    <div
      className={`group relative bg-white rounded-lg border px-4 py-3 transition-all hover:shadow-sm ${
        isUnmatched
          ? 'border-[#DC2626] bg-[#FEF2F2]'
          : isMatched
          ? 'border-[#0d5f4e]'
          : 'border-gray-200'
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Drag Handle */}
        <button
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing mt-0.5"
          aria-label="Drag to reorder"
        >
          <GripVertical className="w-4 h-4" />
        </button>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-900 leading-relaxed">
            {item.text}
          </p>
          
          {/* Impact Badge */}
          {item.impact && (
            <div className="mt-2">
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                  item.impact === 'high'
                    ? 'bg-[#E8F4F1] text-[#0d5f4e]'
                    : item.impact === 'medium'
                    ? 'bg-gray-100 text-gray-700'
                    : 'bg-gray-50 text-gray-600'
                }`}
              >
                {item.impact} impact
              </span>
            </div>
          )}
        </div>
        
        {/* Match Status Icon */}
        <div className="flex-shrink-0 flex items-center gap-2">
          {isMatched ? (
            <CheckCircle2 className="w-4 h-4 text-[#0d5f4e]" />
          ) : isUnmatched ? (
            <AlertCircle className="w-4 h-4 text-[#DC2626]" />
          ) : null}
          
          {/* Delete Button */}
          {onDelete && (
            <button
              onClick={onDelete}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-[#DC2626]"
              aria-label="Delete item"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
