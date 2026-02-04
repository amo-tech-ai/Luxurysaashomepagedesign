# Validation Flow — Component Library
## Reusable React Components for AI Validation

**Version**: 1.0  
**Date**: February 2, 2026  
**Framework**: React + TypeScript + Tailwind CSS

---

## Component Index

1. [ProcessingAnimation](#processinganimation)
2. [ValidationCompleteModal](#validationcompletemodal)
3. [ScoreCircle](#scorecircle)
4. [ProgressBar](#progressbar)
5. [InsightCard](#insightcard)
6. [ValidationScorecard](#validationscorecard)
7. [JourneySidebar](#journeysidebar)
8. [StatusBadge](#statusbadge)

---

## ProcessingAnimation

### Component Spec

```tsx
interface ProcessingStep {
  id: string;
  label: string;
  duration: number;
  status: 'pending' | 'active' | 'completed';
}

interface ProcessingAnimationProps {
  steps: ProcessingStep[];
  onComplete?: () => void;
  estimatedTime?: number; // seconds
}

export function ProcessingAnimation({ 
  steps, 
  onComplete, 
  estimatedTime = 30 
}: ProcessingAnimationProps) {
  // Implementation
}
```

### Usage Example

```tsx
const validationSteps: ProcessingStep[] = [
  { id: '1', label: 'Researching market data…', duration: 5, status: 'pending' },
  { id: '2', label: 'Analyzing competitors…', duration: 5, status: 'pending' },
  { id: '3', label: 'Evaluating industry trends…', duration: 5, status: 'pending' },
  { id: '4', label: 'AI processing insights…', duration: 7, status: 'pending' },
  { id: '5', label: 'Calculating success score…', duration: 5, status: 'pending' },
  { id: '6', label: 'Generating report…', duration: 3, status: 'pending' },
];

<ProcessingAnimation 
  steps={validationSteps}
  onComplete={() => console.log('Validation complete!')}
  estimatedTime={30}
/>
```

### Full Implementation

```tsx
import { useState, useEffect } from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface ProcessingStep {
  id: string;
  label: string;
  duration: number;
  status: 'pending' | 'active' | 'completed';
}

interface ProcessingAnimationProps {
  steps: ProcessingStep[];
  onComplete?: () => void;
  estimatedTime?: number;
}

export function ProcessingAnimation({ 
  steps: initialSteps, 
  onComplete, 
  estimatedTime = 30 
}: ProcessingAnimationProps) {
  const [progress, setProgress] = useState(0);
  const [steps, setSteps] = useState(initialSteps);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    // Calculate total duration
    const totalDuration = steps.reduce((sum, step) => sum + step.duration, 0);
    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += 0.1;
      
      // Update progress (non-linear)
      const rawProgress = (elapsed / totalDuration) * 100;
      const easedProgress = easeOutCubic(rawProgress / 100) * 100;
      setProgress(Math.min(easedProgress, 100));

      // Update step statuses
      let cumulativeDuration = 0;
      const newSteps = steps.map((step, index) => {
        cumulativeDuration += step.duration;
        
        if (elapsed < cumulativeDuration - step.duration) {
          return { ...step, status: 'pending' as const };
        } else if (elapsed >= cumulativeDuration) {
          return { ...step, status: 'completed' as const };
        } else {
          setCurrentStepIndex(index);
          return { ...step, status: 'active' as const };
        }
      });
      
      setSteps(newSteps);

      // Complete
      if (elapsed >= totalDuration) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete?.();
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50"
         style={{ backgroundColor: 'rgba(10, 14, 26, 0.85)' }}>
      <div className="w-[480px] rounded-2xl border p-12 shadow-2xl"
           style={{
             backgroundColor: '#141925',
             borderColor: 'rgba(255, 255, 255, 0.06)',
             boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4)'
           }}>
        {/* Spinner */}
        <div className="flex justify-center mb-8">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-purple-500/20" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-medium text-center mb-2"
            style={{ color: '#F9FAFB', letterSpacing: '-0.02em' }}>
          AI Validation In Progress
        </h2>
        <p className="text-sm text-center mb-8" style={{ color: '#9CA3AF' }}>
          This may take {estimatedTime} seconds
        </p>

        {/* Progress Bar */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-2 rounded-full overflow-hidden"
               style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)' }}>
            <div 
              className="h-full transition-all duration-300"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #8B5CF6 0%, #3B82F6 100%)',
                boxShadow: '0 0 12px rgba(139, 92, 246, 0.5)'
              }}
            />
          </div>
          <span className="text-sm font-semibold min-w-[3ch]" 
                style={{ color: '#8B5CF6' }}>
            {Math.round(progress)}%
          </span>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-3 transition-all duration-300">
              {step.status === 'completed' && (
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#10B981' }} />
              )}
              {step.status === 'active' && (
                <div className="w-5 h-5 rounded-full flex-shrink-0 animate-pulse" 
                     style={{ 
                       backgroundColor: '#8B5CF6',
                       boxShadow: '0 0 8px rgba(139, 92, 246, 0.4)'
                     }} 
                />
              )}
              {step.status === 'pending' && (
                <Circle className="w-5 h-5 flex-shrink-0 opacity-40" 
                        style={{ color: '#6B7280' }} 
                />
              )}
              <span className={`text-sm transition-all duration-300 ${
                step.status === 'completed' ? 'opacity-60' :
                step.status === 'active' ? 'font-medium' :
                'opacity-40'
              }`} style={{
                color: step.status === 'active' ? '#F9FAFB' :
                       step.status === 'completed' ? '#9CA3AF' :
                       '#6B7280'
              }}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Easing function for smooth progress
function easeOutCubic(x: number): number {
  return 1 - Math.pow(1 - x, 3);
}
```

---

## ValidationCompleteModal

### Component Spec

```tsx
interface ValidationResult {
  score: number;
  topStrength: string;
  keyRisk: string;
  nextActionCost: number; // credits
}

interface ValidationCompleteModalProps {
  result: ValidationResult;
  onGenerateAnalysis: () => void;
  onViewResults: () => void;
  onClose?: () => void;
}

export function ValidationCompleteModal({ 
  result, 
  onGenerateAnalysis, 
  onViewResults,
  onClose 
}: ValidationCompleteModalProps) {
  // Implementation
}
```

### Full Implementation

```tsx
import { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ValidationResult {
  score: number;
  topStrength: string;
  keyRisk: string;
  nextActionCost: number;
}

interface ValidationCompleteModalProps {
  result: ValidationResult;
  onGenerateAnalysis: () => void;
  onViewResults: () => void;
  onClose?: () => void;
}

export function ValidationCompleteModal({ 
  result, 
  onGenerateAnalysis, 
  onViewResults,
  onClose 
}: ValidationCompleteModalProps) {
  const [displayScore, setDisplayScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Entry animation
    setIsVisible(true);

    // Score count-up animation
    const duration = 2000;
    const increment = result.score / (duration / 16);
    const timer = setInterval(() => {
      setDisplayScore(prev => {
        if (prev >= result.score) {
          clearInterval(timer);
          return result.score;
        }
        return Math.min(prev + increment, result.score);
      });
    }, 16);

    return () => clearInterval(timer);
  }, [result.score]);

  return (
    <div className={`fixed inset-0 backdrop-blur-lg flex items-center justify-center z-50 transition-opacity duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`} style={{ backgroundColor: 'rgba(10, 14, 26, 0.9)' }}>
      <div className={`w-[560px] rounded-2xl border p-12 shadow-2xl transition-all duration-500 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`} style={{
        backgroundColor: '#141925',
        borderColor: 'rgba(255, 255, 255, 0.08)',
        boxShadow: '0 32px 64px rgba(0, 0, 0, 0.5)'
      }}>
        {/* Close button */}
        {onClose && (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" style={{ color: '#9CA3AF' }} />
          </button>
        )}

        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
             style={{
               backgroundColor: 'rgba(16, 185, 129, 0.12)',
               border: '2px solid rgba(16, 185, 129, 0.3)'
             }}>
          <CheckCircle className="w-10 h-10" style={{ color: '#10B981' }} />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-2"
            style={{ color: '#F9FAFB', letterSpacing: '-0.03em' }}>
          Validation Complete
        </h2>
        <p className="text-sm text-center mb-8" style={{ color: '#9CA3AF' }}>
          Step 1 of 6 — Startup Idea Validation
        </p>

        {/* Score Circle */}
        <div className="rounded-2xl p-8 mb-6"
             style={{
               backgroundColor: 'rgba(139, 92, 246, 0.05)',
               border: '1px solid rgba(139, 92, 246, 0.2)'
             }}>
          <div className="w-36 h-36 mx-auto mb-4 rounded-full flex items-center justify-center"
               style={{
                 border: '4px solid #8B5CF6',
                 backgroundColor: 'rgba(139, 92, 246, 0.08)'
               }}>
            <span className="text-6xl font-light" style={{ color: '#F9FAFB' }}>
              {Math.round(displayScore)}
            </span>
          </div>
          <p className="text-sm font-medium text-center uppercase tracking-wider"
             style={{ color: '#8B5CF6' }}>
            Success Score
          </p>
        </div>

        {/* Insight Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Top Strength */}
          <div className="rounded-xl p-5"
               style={{
                 backgroundColor: 'rgba(16, 185, 129, 0.08)',
                 border: '1px solid rgba(16, 185, 129, 0.2)'
               }}>
            <p className="text-xs font-semibold uppercase mb-2"
               style={{ color: '#10B981' }}>
              💚 Top Strength
            </p>
            <p className="text-sm" style={{ color: '#F9FAFB' }}>
              {result.topStrength}
            </p>
          </div>

          {/* Key Risk */}
          <div className="rounded-xl p-5"
               style={{
                 backgroundColor: 'rgba(245, 158, 11, 0.08)',
                 border: '1px solid rgba(245, 158, 11, 0.2)'
               }}>
            <p className="text-xs font-semibold uppercase mb-2"
               style={{ color: '#F59E0B' }}>
              ⚠️ Key Risk
            </p>
            <p className="text-sm" style={{ color: '#F9FAFB' }}>
              {result.keyRisk}
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <button 
          onClick={onGenerateAnalysis}
          className="w-full h-14 rounded-xl flex items-center justify-between px-6 mb-4 transition-all hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
            boxShadow: '0 4px 16px rgba(139, 92, 246, 0.3)'
          }}
        >
          <span className="text-base font-semibold" style={{ color: '#FFFFFF' }}>
            Generate Market Analysis
          </span>
          <span className="text-sm font-medium px-3 py-1 rounded-md"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF' }}>
            {result.nextActionCost} ⓒ
          </span>
        </button>

        {/* Secondary CTA */}
        <button 
          onClick={onViewResults}
          className="w-full text-sm font-medium transition-colors hover:underline"
          style={{ color: '#D1D5DB' }}
        >
          View Results First
        </button>
      </div>
    </div>
  );
}
```

---

## ScoreCircle

### Component Spec

```tsx
interface ScoreCircleProps {
  score: number;
  maxScore?: number;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  animated?: boolean;
}

export function ScoreCircle({ 
  score, 
  maxScore = 100, 
  size = 'md',
  label = 'Score',
  animated = true 
}: ScoreCircleProps) {
  // Implementation
}
```

### Full Implementation

```tsx
import { useState, useEffect } from 'react';

interface ScoreCircleProps {
  score: number;
  maxScore?: number;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  animated?: boolean;
}

const sizeClasses = {
  sm: { circle: 'w-24 h-24', text: 'text-3xl', border: 'border-2' },
  md: { circle: 'w-36 h-36', text: 'text-6xl', border: 'border-4' },
  lg: { circle: 'w-48 h-48', text: 'text-7xl', border: 'border-4' }
};

export function ScoreCircle({ 
  score, 
  maxScore = 100, 
  size = 'md',
  label = 'Score',
  animated = true 
}: ScoreCircleProps) {
  const [displayScore, setDisplayScore] = useState(animated ? 0 : score);
  const sizes = sizeClasses[size];

  useEffect(() => {
    if (!animated) return;

    const duration = 2000;
    const increment = score / (duration / 16);
    const timer = setInterval(() => {
      setDisplayScore(prev => {
        if (prev >= score) {
          clearInterval(timer);
          return score;
        }
        return Math.min(prev + increment, score);
      });
    }, 16);

    return () => clearInterval(timer);
  }, [score, animated]);

  return (
    <div className="flex flex-col items-center">
      <div className={`${sizes.circle} rounded-full flex items-center justify-center ${sizes.border}`}
           style={{
             borderColor: '#8B5CF6',
             backgroundColor: 'rgba(139, 92, 246, 0.08)'
           }}>
        <span className={`${sizes.text} font-light`} style={{ color: '#F9FAFB' }}>
          {Math.round(displayScore)}
        </span>
      </div>
      {label && (
        <p className="text-sm font-medium uppercase tracking-wider mt-3"
           style={{ color: '#8B5CF6' }}>
          {label}
        </p>
      )}
    </div>
  );
}
```

---

## ProgressBar

### Component Spec

```tsx
interface ProgressBarProps {
  progress: number; // 0-100
  height?: number;
  showPercentage?: boolean;
  gradient?: boolean;
  animated?: boolean;
}

export function ProgressBar({ 
  progress, 
  height = 8,
  showPercentage = true,
  gradient = true,
  animated = true 
}: ProgressBarProps) {
  // Implementation
}
```

### Full Implementation

```tsx
interface ProgressBarProps {
  progress: number;
  height?: number;
  showPercentage?: boolean;
  gradient?: boolean;
  animated?: boolean;
}

export function ProgressBar({ 
  progress, 
  height = 8,
  showPercentage = true,
  gradient = true,
  animated = true 
}: ProgressBarProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="flex items-center gap-4">
      <div 
        className="flex-1 rounded-full overflow-hidden"
        style={{ 
          height: `${height}px`,
          backgroundColor: 'rgba(255, 255, 255, 0.06)' 
        }}
      >
        <div 
          className={`h-full ${animated ? 'transition-all duration-300' : ''}`}
          style={{
            width: `${clampedProgress}%`,
            background: gradient 
              ? 'linear-gradient(90deg, #8B5CF6 0%, #3B82F6 100%)'
              : '#8B5CF6',
            boxShadow: '0 0 12px rgba(139, 92, 246, 0.5)'
          }}
        />
      </div>
      {showPercentage && (
        <span className="text-sm font-semibold min-w-[3ch]" style={{ color: '#8B5CF6' }}>
          {Math.round(clampedProgress)}%
        </span>
      )}
    </div>
  );
}
```

---

## InsightCard

### Component Spec

```tsx
interface InsightCardProps {
  type: 'strength' | 'risk' | 'opportunity';
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function InsightCard({ 
  type, 
  title, 
  description,
  icon 
}: InsightCardProps) {
  // Implementation
}
```

### Full Implementation

```tsx
import { CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';

interface InsightCardProps {
  type: 'strength' | 'risk' | 'opportunity';
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const typeStyles = {
  strength: {
    bg: 'rgba(16, 185, 129, 0.08)',
    border: 'rgba(16, 185, 129, 0.2)',
    color: '#10B981',
    defaultIcon: CheckCircle
  },
  risk: {
    bg: 'rgba(245, 158, 11, 0.08)',
    border: 'rgba(245, 158, 11, 0.2)',
    color: '#F59E0B',
    defaultIcon: AlertTriangle
  },
  opportunity: {
    bg: 'rgba(59, 130, 246, 0.08)',
    border: 'rgba(59, 130, 246, 0.2)',
    color: '#3B82F6',
    defaultIcon: Lightbulb
  }
};

export function InsightCard({ 
  type, 
  title, 
  description,
  icon 
}: InsightCardProps) {
  const style = typeStyles[type];
  const Icon = style.defaultIcon;

  return (
    <div 
      className="rounded-xl p-5 transition-all hover:border-opacity-40"
      style={{
        backgroundColor: style.bg,
        border: `1px solid ${style.border}`
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        {icon || <Icon className="w-4 h-4" style={{ color: style.color }} />}
        <p className="text-xs font-semibold uppercase tracking-wider"
           style={{ color: style.color }}>
          {title}
        </p>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: '#F9FAFB' }}>
        {description}
      </p>
    </div>
  );
}
```

---

## ValidationScorecard

### Component Spec

```tsx
interface ScoreItem {
  label: string;
  score: number;
  maxScore?: number;
}

interface ValidationScorecardProps {
  title?: string;
  scores: ScoreItem[];
  animated?: boolean;
}

export function ValidationScorecard({ 
  title = 'Validation Scorecard',
  scores,
  animated = true 
}: ValidationScorecardProps) {
  // Implementation
}
```

### Full Implementation

```tsx
import { ProgressBar } from './ProgressBar';

interface ScoreItem {
  label: string;
  score: number;
  maxScore?: number;
}

interface ValidationScorecardProps {
  title?: string;
  scores: ScoreItem[];
  animated?: boolean;
}

export function ValidationScorecard({ 
  title = 'Validation Scorecard',
  scores,
  animated = true 
}: ValidationScorecardProps) {
  return (
    <div className="rounded-2xl p-8"
         style={{
           backgroundColor: '#1C2333',
           border: '1px solid rgba(255, 255, 255, 0.08)'
         }}>
      <h3 className="text-xl font-semibold mb-6" style={{ color: '#F9FAFB' }}>
        {title}
      </h3>
      
      <div className="space-y-5">
        {scores.map((item, index) => {
          const percentage = (item.score / (item.maxScore || 100)) * 100;
          
          return (
            <div key={index} className="flex items-center gap-4">
              <span className="text-sm font-medium w-44" style={{ color: '#D1D5DB' }}>
                {item.label}
              </span>
              
              <div className="flex-1">
                <ProgressBar 
                  progress={percentage}
                  height={12}
                  showPercentage={false}
                  animated={animated}
                />
              </div>
              
              <span className="text-base font-semibold w-20 text-right"
                    style={{ color: '#8B5CF6' }}>
                {item.score}/{item.maxScore || 100}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
```

---

## StatusBadge

### Component Spec

```tsx
interface StatusBadgeProps {
  status: 'ready' | 'in-progress' | 'pending' | 'completed';
  label?: string;
}

export function StatusBadge({ 
  status,
  label 
}: StatusBadgeProps) {
  // Implementation
}
```

### Full Implementation

```tsx
interface StatusBadgeProps {
  status: 'ready' | 'in-progress' | 'pending' | 'completed';
  label?: string;
}

const statusStyles = {
  ready: {
    bg: 'rgba(16, 185, 129, 0.12)',
    border: 'rgba(16, 185, 129, 0.3)',
    color: '#10B981',
    text: 'Ready'
  },
  'in-progress': {
    bg: 'rgba(139, 92, 246, 0.12)',
    border: 'rgba(139, 92, 246, 0.3)',
    color: '#8B5CF6',
    text: 'In Progress'
  },
  pending: {
    bg: 'rgba(107, 114, 128, 0.12)',
    border: 'rgba(107, 114, 128, 0.3)',
    color: '#6B7280',
    text: 'Pending'
  },
  completed: {
    bg: 'rgba(16, 185, 129, 0.12)',
    border: 'rgba(16, 185, 129, 0.3)',
    color: '#10B981',
    text: 'Completed'
  }
};

export function StatusBadge({ 
  status,
  label 
}: StatusBadgeProps) {
  const style = statusStyles[status];
  
  return (
    <span 
      className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium"
      style={{
        backgroundColor: style.bg,
        border: `1px solid ${style.border}`,
        color: style.color
      }}
    >
      {label || style.text}
    </span>
  );
}
```

---

## Usage Examples

### Complete Validation Flow

```tsx
import { useState } from 'react';
import { 
  ProcessingAnimation,
  ValidationCompleteModal,
  ValidationScorecard 
} from './components';

function ValidationFlow() {
  const [stage, setStage] = useState<'processing' | 'complete' | 'results'>('processing');
  
  const validationSteps = [
    { id: '1', label: 'Researching market data…', duration: 5, status: 'pending' as const },
    { id: '2', label: 'Analyzing competitors…', duration: 5, status: 'pending' as const },
    { id: '3', label: 'Evaluating industry trends…', duration: 5, status: 'pending' as const },
    { id: '4', label: 'AI processing insights…', duration: 7, status: 'pending' as const },
    { id: '5', label: 'Calculating success score…', duration: 5, status: 'pending' as const },
    { id: '6', label: 'Generating report…', duration: 3, status: 'pending' as const },
  ];
  
  const validationResult = {
    score: 68,
    topStrength: 'Strong problem-market fit',
    keyRisk: 'Market validation needed',
    nextActionCost: 70
  };
  
  const scorecardData = [
    { label: 'Problem Validation', score: 75, maxScore: 100 },
    { label: 'Solution Validation', score: 60, maxScore: 100 },
    { label: 'Market Validation', score: 70, maxScore: 100 }
  ];

  return (
    <>
      {stage === 'processing' && (
        <ProcessingAnimation 
          steps={validationSteps}
          onComplete={() => setStage('complete')}
          estimatedTime={30}
        />
      )}
      
      {stage === 'complete' && (
        <ValidationCompleteModal 
          result={validationResult}
          onGenerateAnalysis={() => console.log('Generate analysis')}
          onViewResults={() => setStage('results')}
        />
      )}
      
      {stage === 'results' && (
        <div className="p-8">
          <ValidationScorecard scores={scorecardData} />
        </div>
      )}
    </>
  );
}
```

---

## Tailwind Config Extensions

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0A0E1A',
        'dark-charcoal': '#141925',
        'dark-elevated': '#1C2333',
        'purple-primary': '#8B5CF6',
        'purple-dark': '#7C3AED',
        'blue-primary': '#3B82F6',
        'success-green': '#10B981',
        'warning-orange': '#F59E0B',
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
      },
      animation: {
        'draw-in': 'drawIn 0.5s ease-out',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        drawIn: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' }
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' }
        }
      }
    }
  }
};
```

---

**End of Component Library**

For design prompts, see VALIDATION-FLOW-PROMPTS.md  
For wireframes, see VALIDATION-FLOW-WIREFRAMES.md
