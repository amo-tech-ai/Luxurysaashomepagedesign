import { Sparkles } from 'lucide-react';

interface AIGenerateIconProps {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  tooltip?: string;
  label?: string;
  size?: number;
}

export function AIGenerateIcon({ 
  onClick, 
  disabled = false, 
  loading = false,
  tooltip = "Generate with AI",
  label = "AI Generate",
  size = 16
}: AIGenerateIconProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className="group inline-flex items-center gap-1 px-2 py-1 text-xs text-gray-500 hover:text-[#0d5f4e] hover:bg-[#0d5f4e]/5 rounded transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      title={tooltip}
    >
      <Sparkles 
        className={`transition-transform ${loading ? 'animate-spin' : 'group-hover:scale-110'}`}
        size={size}
        strokeWidth={2}
      />
      <span className="font-medium">{loading ? 'Generating...' : label}</span>
    </button>
  );
}

// Minimal variant (icon only)
export function AIGenerateIconMinimal({ 
  onClick, 
  disabled = false, 
  loading = false,
  tooltip = "Generate with AI",
  size = 16
}: Omit<AIGenerateIconProps, 'label'>) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className="inline-flex items-center justify-center w-6 h-6 text-gray-400 hover:text-[#0d5f4e] hover:bg-[#0d5f4e]/5 rounded transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      title={tooltip}
    >
      <Sparkles 
        className={`transition-transform ${loading ? 'animate-spin' : 'hover:scale-110'}`}
        size={size}
        strokeWidth={2}
      />
    </button>
  );
}
