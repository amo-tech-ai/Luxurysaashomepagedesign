import { useState, useRef, useEffect } from 'react';

interface CanvasSectionProps {
  number: number;
  title: string;
  value: string;
  placeholder: string;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
}

export function CanvasSection({
  number,
  title,
  value,
  placeholder,
  fullWidth = false,
  onChange,
}: CanvasSectionProps) {
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }, [value]);
  
  const charCount = value.length;
  const hasContent = value.trim().length > 0;
  
  return (
    <div
      className={`bg-white rounded-lg border transition-all ${
        isFocused
          ? 'border-[#0d5f4e] shadow-sm'
          : hasContent
          ? 'border-[#E8E6E1]'
          : 'border-dashed border-gray-300'
      } ${fullWidth ? 'col-span-2' : ''}`}
    >
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0d5f4e] flex items-center justify-center">
              <span className="text-white text-xs font-bold">{number}</span>
            </div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              {title}
            </h3>
          </div>
          {charCount > 0 && (
            <span className="text-xs text-gray-400">
              {charCount} chars
            </span>
          )}
        </div>
        
        {/* Text Area */}
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full text-sm text-gray-900 placeholder-gray-400 resize-none focus:outline-none leading-relaxed min-h-[80px]"
          rows={3}
        />
      </div>
    </div>
  );
}
