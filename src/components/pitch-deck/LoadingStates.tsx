/**
 * Loading States Component
 * 
 * Premium loading indicators for pitch deck generator
 * Maintains luxury aesthetic with smooth animations
 */

import { Loader2, Sparkles } from 'lucide-react';

/**
 * AI Generation Loading (for deck generation)
 */

interface AIGenerationLoadingProps {
  stage?: string;
  currentStep?: string;
}

export function AIGenerationLoading({ 
  stage = 'Generating', 
  currentStep = 'Analyzing your inputs...' 
}: AIGenerationLoadingProps) {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="relative inline-flex items-center justify-center mb-6">
          {/* Outer rotating ring */}
          <div className="w-20 h-20 rounded-full border-2 border-[#0d5f4e]/20 border-t-[#0d5f4e] animate-spin" />
          
          {/* Inner sparkle icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-[#0d5f4e] animate-pulse" />
          </div>
        </div>

        <h3 className="text-xl font-medium text-gray-900 mb-2">
          {stage}
        </h3>
        
        <p className="text-sm text-gray-600">
          {currentStep}
        </p>

        <div className="mt-6 flex items-center justify-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#0d5f4e] animate-pulse" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 rounded-full bg-[#0d5f4e] animate-pulse" style={{ animationDelay: '200ms' }} />
          <div className="w-2 h-2 rounded-full bg-[#0d5f4e] animate-pulse" style={{ animationDelay: '400ms' }} />
        </div>
      </div>
    </div>
  );
}

/**
 * Progress Steps Loading (shows multiple steps)
 */

interface LoadingStep {
  label: string;
  status: 'pending' | 'active' | 'complete';
}

interface ProgressStepsLoadingProps {
  steps: LoadingStep[];
}

export function ProgressStepsLoading({ steps }: ProgressStepsLoadingProps) {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Sparkles className="w-12 h-12 text-[#0d5f4e] mx-auto mb-4 animate-pulse" />
          <h3 className="text-xl font-medium text-gray-900">
            Generating Your Deck
          </h3>
        </div>

        <div className="space-y-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                step.status === 'active'
                  ? 'bg-[#0d5f4e]/10 border border-[#0d5f4e]/20'
                  : step.status === 'complete'
                  ? 'bg-gray-50'
                  : 'opacity-50'
              }`}
            >
              {step.status === 'complete' ? (
                <div className="w-5 h-5 rounded-full bg-[#0d5f4e] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : step.status === 'active' ? (
                <Loader2 className="w-5 h-5 text-[#0d5f4e] animate-spin" />
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
              )}

              <span className={`text-sm ${
                step.status === 'active' ? 'text-gray-900 font-medium' : 'text-gray-600'
              }`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Simple spinner (for inline loading)
 */

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Spinner({ size = 'md', className = '' }: SpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <Loader2 className={`${sizeClasses[size]} text-[#0d5f4e] animate-spin ${className}`} />
  );
}

/**
 * Skeleton loader (for content placeholders)
 */

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'title' | 'card';
}

export function Skeleton({ className = '', variant = 'text' }: SkeletonProps) {
  const baseClasses = 'bg-gray-200 animate-pulse rounded';
  
  const variantClasses = {
    text: 'h-4 w-full',
    title: 'h-6 w-3/4',
    card: 'h-32 w-full',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} />
  );
}

/**
 * Card loading placeholder
 */

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
      <Skeleton variant="title" />
      <Skeleton variant="text" />
      <Skeleton variant="text" className="w-5/6" />
      <Skeleton variant="text" className="w-4/6" />
    </div>
  );
}

/**
 * Export loading (specific for PDF/export actions)
 */

interface ExportLoadingProps {
  format: string;
}

export function ExportLoading({ format }: ExportLoadingProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-sm text-center">
        <Spinner size="lg" className="mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Exporting Deck
        </h3>
        <p className="text-sm text-gray-600">
          Preparing your deck as {format.toUpperCase()}...
        </p>
      </div>
    </div>
  );
}
