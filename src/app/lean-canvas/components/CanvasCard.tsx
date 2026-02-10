'use client';

import { useState, useRef, useEffect } from 'react';
import { Sparkles, Check } from 'lucide-react';

interface CanvasCardProps {
  title: string;
  helperText: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  hasAIEnhance?: boolean;
  isHighlighted?: boolean;
  onAIEnhanceClick?: () => void;
}

export function CanvasCard({
  title,
  helperText,
  placeholder,
  value,
  onChange,
  maxLength,
  hasAIEnhance = false,
  isHighlighted = false,
  onAIEnhanceClick,
}: CanvasCardProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  const isCompleted = value.trim().length > 0;
  const remainingChars = maxLength ? maxLength - value.length : null;

  return (
    <>
      <div
        className={`
        relative bg-white rounded-xl p-6 shadow-sm border
        transition-all duration-200
        ${isHighlighted ? 'border-[#0D5F4E] ring-2 ring-[#0D5F4E]/10' : 'border-gray-200 hover:border-gray-300'}
        ${isCompleted ? 'border-l-4 border-l-[#0D5F4E]' : ''}
      `}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-[#0D5F4E] mb-1">
              {title}
              {isHighlighted && (
                <span className="ml-2 text-xs text-gray-500 font-normal">
                  (Core Message)
                </span>
              )}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              {helperText}
            </p>
          </div>

          {/* Completion Checkmark */}
          {isCompleted && (
            <div className="w-5 h-5 bg-[#0D5F4E] rounded-full flex items-center justify-center flex-shrink-0 ml-2">
              <Check className="w-3 h-3 text-white" />
            </div>
          )}
        </div>

        {/* Textarea */}
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => {
            if (maxLength && e.target.value.length > maxLength) return;
            onChange(e.target.value);
          }}
          placeholder={placeholder}
          className="
            w-full min-h-[100px] p-3 text-sm text-gray-900 placeholder:text-gray-400
            bg-gray-50 rounded-lg border border-gray-200
            focus:outline-none focus:ring-2 focus:ring-[#0D5F4E] focus:border-transparent
            resize-none transition-all
          "
          style={{ overflow: 'hidden' }}
        />

        {/* Footer */}
        <div className="flex items-center justify-between mt-3">
          {/* Character Counter */}
          {maxLength && (
            <span
              className={`text-xs ${
                remainingChars !== null && remainingChars < 20
                  ? 'text-orange-500'
                  : 'text-gray-400'
              }`}
            >
              {value.length}/{maxLength}
            </span>
          )}

          {/* AI Enhance Button */}
          {hasAIEnhance && (
            <button
              onClick={onAIEnhanceClick}
              disabled={!value.trim()}
              className={`
                ml-auto flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg
                transition-all
                ${
                  !value.trim()
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-[#0D5F4E]/10 text-[#0D5F4E] hover:bg-[#0D5F4E]/20'
                }
              `}
            >
              <Sparkles className="w-3 h-3" />
              AI Enhance
            </button>
          )}
        </div>
      </div>
    </>
  );
}