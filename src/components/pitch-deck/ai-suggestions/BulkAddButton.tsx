import React, { useState } from 'react';
import { PlusCircle, CheckCircle, Loader2 } from 'lucide-react';

interface BulkAddButtonProps {
  label?: string;
  count: number;
  onAddAll: () => Promise<void>;
  disabled?: boolean;
}

export function BulkAddButton({ 
  label = 'Add all suggestions', 
  count,
  onAddAll, 
  disabled = false 
}: BulkAddButtonProps) {
  const [loading, setLoading] = useState(false);
  const [applied, setApplied] = useState(false);

  const handleClick = async () => {
    if (loading || disabled || applied) return;

    setLoading(true);

    try {
      await onAddAll();
      setApplied(true);
      
      // Reset after 3 seconds
      setTimeout(() => setApplied(false), 3000);
    } catch (error) {
      console.error('Bulk add failed:', error);
    } finally {
      setLoading(false);
    }
  };

  if (count === 0) return null;

  return (
    <button
      onClick={handleClick}
      disabled={loading || disabled || applied}
      className={`
        w-full flex items-center justify-center gap-2 px-4 py-2.5 
        text-sm font-medium rounded-lg
        transition-all duration-150 ease-out
        ${applied 
          ? 'bg-emerald-600 text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }
        ${loading ? 'opacity-70 cursor-wait' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-sm'}
      `}
    >
      {loading && (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Adding {count} suggestions...</span>
        </>
      )}
      
      {applied && !loading && (
        <>
          <CheckCircle className="w-4 h-4" />
          <span>All added to deck</span>
        </>
      )}
      
      {!loading && !applied && (
        <>
          <PlusCircle className="w-4 h-4" />
          <span>{label} ({count})</span>
        </>
      )}
    </button>
  );
}
