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
}: CanvasCardProps) {
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [showEnhancement, setShowEnhancement] = useState(false);
  const [enhancedText, setEnhancedText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  const handleAIEnhance = async () => {
    if (!value.trim()) {
      alert('Please enter some text first');
      return;
    }

    setIsEnhancing(true);

    // Mock AI enhancement (1-2 second delay)
    setTimeout(() => {
      let enhanced = value;

      // Simple enhancement logic based on title
      if (title === 'Problem') {
        enhanced = value
          .split('\n')
          .map((line, i) => {
            if (line.trim()) {
              return `${i + 1}. ${line.replace(/^\d+\.\s*/, '')} (affects 70%+ of users, costs ~$500/month in lost productivity)`;
            }
            return line;
          })
          .join('\n');
      } else if (title === 'Unique Value Proposition') {
        enhanced = `${value} — backed by AI and proven to work in 30 days`;
      } else if (title === 'Solution') {
        enhanced = value
          .split('\n')
          .map((line, i) => {
            if (line.trim()) {
              return `${i + 1}. ${line.replace(/^\d+\.\s*/, '')} (saves 10+ hours/week per user)`;
            }
            return line;
          })
          .join('\n');
      } else {
        // Generic enhancement
        enhanced = `${value} (AI-enhanced for clarity and impact)`;
      }

      setEnhancedText(enhanced);
      setShowEnhancement(true);
      setIsEnhancing(false);
    }, 1500);
  };

  const acceptEnhancement = () => {
    onChange(enhancedText);
    setShowEnhancement(false);
    setEnhancedText('');
  };

  const rejectEnhancement = () => {
    setShowEnhancement(false);
    setEnhancedText('');
  };

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
              onClick={handleAIEnhance}
              disabled={isEnhancing || !value.trim()}
              className={`
                ml-auto flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg
                transition-all
                ${
                  isEnhancing || !value.trim()
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-[#0D5F4E]/10 text-[#0D5F4E] hover:bg-[#0D5F4E]/20'
                }
              `}
            >
              <Sparkles className={`w-3 h-3 ${isEnhancing ? 'animate-pulse' : ''}`} />
              {isEnhancing ? 'Enhancing...' : 'AI Enhance'}
            </button>
          )}
        </div>
      </div>

      {/* Enhancement Modal */}
      {showEnhancement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-[#0D5F4E]" />
                <h3 className="text-lg font-medium text-gray-900">
                  AI Enhancement for "{title}"
                </h3>
              </div>
              <p className="text-sm text-gray-500">
                Review the AI-enhanced version below. You can accept or keep
                your original text.
              </p>
            </div>

            {/* Comparison */}
            <div className="p-6 overflow-y-auto max-h-[400px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Original */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Original
                  </h4>
                  <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-700 whitespace-pre-wrap border border-gray-200">
                    {value}
                  </div>
                </div>

                {/* Enhanced */}
                <div>
                  <h4 className="text-sm font-medium text-[#0D5F4E] mb-2">
                    AI-Enhanced
                  </h4>
                  <div className="p-4 bg-[#0D5F4E]/5 rounded-lg text-sm text-gray-900 whitespace-pre-wrap border border-[#0D5F4E]/20">
                    {enhancedText}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 border-t border-gray-200 flex items-center justify-end gap-3">
              <button
                onClick={rejectEnhancement}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Keep Original
              </button>
              <button
                onClick={acceptEnhancement}
                className="px-4 py-2 text-sm font-medium text-white bg-[#0D5F4E] hover:bg-[#0a4d3f] rounded-lg transition-colors"
              >
                Accept Enhancement
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
