import { Sparkles, ArrowRight } from 'lucide-react';
import type { AISuggestion } from '../../../data/immersive-experience-types';

interface SuggestionsCardProps {
  suggestions: AISuggestion[];
}

export function SuggestionsCard({ suggestions }: SuggestionsCardProps) {
  if (suggestions.length === 0) {
    return null;
  }
  
  return (
    <div className="bg-white rounded-lg border border-[#E8E6E1] p-5">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-4 h-4 text-[#0d5f4e]" />
        <h3 className="font-medium text-[#0E3E1B]">AI Suggestions</h3>
      </div>
      
      <div className="space-y-3">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className={`p-3 rounded-lg border ${
              suggestion.priority === 'high'
                ? 'bg-[#FEF2F2] border-[#FCA5A5]'
                : suggestion.priority === 'medium'
                ? 'bg-[#FEF3C7] border-[#FCD34D]'
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span
                className={`text-xs font-semibold uppercase tracking-wide ${
                  suggestion.priority === 'high'
                    ? 'text-[#DC2626]'
                    : suggestion.priority === 'medium'
                    ? 'text-[#D97706]'
                    : 'text-gray-600'
                }`}
              >
                {suggestion.priority} priority
              </span>
              <span className="text-xs text-gray-500">
                Section {suggestion.suggested_section}
              </span>
            </div>
            
            <p className="text-xs font-medium text-gray-700 mb-1">
              {suggestion.criterion_label}
            </p>
            
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              {suggestion.suggestion_text}
            </p>
            
            <button className="text-xs text-[#0d5f4e] hover:text-[#0E3E1B] font-medium flex items-center gap-1">
              Apply Suggestion
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
