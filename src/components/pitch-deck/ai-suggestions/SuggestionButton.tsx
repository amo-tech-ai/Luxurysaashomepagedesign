import React, { useState } from 'react';
import { Plus, Check, Loader2 } from 'lucide-react';

interface SuggestionButtonProps {
  label: string;
  icon?: React.ReactNode;
  onClick: () => Promise<void>;
  disabled?: boolean;
  applied?: boolean;
}

export function SuggestionButton({ 
  label, 
  icon,
  onClick, 
  disabled = false,
  applied: initialApplied = false
}: SuggestionButtonProps) {
  const [loading, setLoading] = useState(false);
  const [applied, setApplied] = useState(initialApplied);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = async () => {
    if (loading || disabled || applied) return;

    setLoading(true);

    try {
      await onClick();
      setApplied(true);
      
      // Auto-hide applied state after 3 seconds (optional)
      // setTimeout(() => setApplied(false), 3000);
    } catch (error) {
      console.error('Suggestion failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        disabled={loading || disabled || applied}
        onMouseEnter={() => !applied && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`
          w-full flex items-center justify-between gap-3 px-3 py-2.5 
          text-xs font-medium text-left rounded-lg
          transition-all duration-150 ease-out
          ${applied 
            ? 'bg-emerald-50 border border-emerald-200' 
            : 'bg-white border border-gray-200 hover:border-gray-300'
          }
          ${loading ? 'opacity-70 cursor-wait' : ''}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${!loading && !disabled && !applied ? 'hover:shadow-sm' : ''}
        `}
      >
        {/* Left: Icon + Label */}
        <div className="flex items-center gap-2 flex-1">
          {icon && (
            <span className={`flex-shrink-0 ${applied ? 'text-emerald-600' : 'text-gray-500'}`}>
              {icon}
            </span>
          )}
          <span className={applied ? 'text-emerald-700' : 'text-gray-700'}>
            {label}
          </span>
        </div>
        
        {/* Right: Action Icon */}
        <div className="flex-shrink-0">
          {loading && (
            <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
          )}
          
          {applied && !loading && (
            <div className="flex items-center gap-1">
              <Check className="w-4 h-4 text-emerald-600" />
              <span className="text-xs text-emerald-600 font-medium">Added</span>
            </div>
          )}
          
          {!loading && !applied && (
            <Plus 
              className={`
                w-4 h-4 transition-colors duration-150
                ${disabled ? 'text-gray-300' : 'text-gray-400 group-hover:text-emerald-600'}
              `}
            />
          )}
        </div>
      </button>

      {/* Tooltip */}
      {showTooltip && !applied && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-8 z-10 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap animate-[fadeIn_150ms_ease-out]">
          Add to pitch deck
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </div>
  );
}
