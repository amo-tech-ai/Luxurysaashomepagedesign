import React, { useState } from 'react';
import { Sparkles, Loader2, Check } from 'lucide-react';

interface ActionButtonProps {
  label: string;
  onClick: () => Promise<void>;
  disabled?: boolean;
}

export function ActionButton({ label, onClick, disabled = false }: ActionButtonProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClick = async () => {
    if (loading || disabled) return;

    setLoading(true);
    setSuccess(false);

    try {
      await onClick();
      setSuccess(true);
      
      // Reset success state after 2 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Action failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading || disabled}
      className={`
        w-full flex items-center justify-between gap-2 px-3 py-2.5 
        text-xs font-medium text-left rounded-lg
        transition-all duration-150 ease-out
        ${success 
          ? 'bg-green-50 text-green-700 border border-green-200' 
          : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 hover:border-gray-300'
        }
        ${loading ? 'opacity-70 cursor-wait' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-0.5 hover:shadow-sm'}
      `}
    >
      <span className="flex-1">{label}</span>
      
      {loading && (
        <Loader2 className="w-3.5 h-3.5 animate-spin text-gray-500" />
      )}
      
      {success && (
        <Check className="w-3.5 h-3.5 text-green-500 animate-[statusUpdate_300ms_ease-out]" />
      )}
      
      {!loading && !success && (
        <Sparkles className="w-3.5 h-3.5 text-gray-400" />
      )}
    </button>
  );
}
