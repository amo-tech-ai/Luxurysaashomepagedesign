import React from 'react';

interface DiagramBoxProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'muted';
  className?: string;
}

export function DiagramBox({ children, variant = 'default', className = '' }: DiagramBoxProps) {
  const baseStyles = 'px-6 py-4 border';
  
  const variantStyles = {
    default: 'bg-white border-[var(--color-border)]',
    accent: 'bg-[var(--color-accent-primary-light)] border-[var(--color-accent-primary)] border-2',
    muted: 'bg-[var(--color-canvas)] border-[var(--color-border-medium)]'
  };
  
  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}

interface DiagramArrowProps {
  direction?: 'right' | 'down' | 'left' | 'up';
  variant?: 'solid' | 'dashed';
  className?: string;
}

export function DiagramArrow({ direction = 'right', variant = 'solid', className = '' }: DiagramArrowProps) {
  const isVertical = direction === 'down' || direction === 'up';
  const strokeDasharray = variant === 'dashed' ? '5 5' : '0';
  
  if (isVertical) {
    return (
      <div className={`flex justify-center ${className}`}>
        <svg width="2" height="32" viewBox="0 0 2 32" fill="none">
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="28"
            stroke="var(--color-accent-primary)"
            strokeWidth="2"
            strokeDasharray={strokeDasharray}
          />
          <path
            d={direction === 'down' ? 'M1 32L5 27H-3L1 32Z' : 'M1 0L5 5H-3L1 0Z'}
            fill="var(--color-accent-primary)"
          />
        </svg>
      </div>
    );
  }
  
  return (
    <div className={`flex items-center ${className}`}>
      <svg width="32" height="2" viewBox="0 0 32 2" fill="none">
        <line
          x1="0"
          y1="1"
          x2="28"
          y2="1"
          stroke="var(--color-accent-primary)"
          strokeWidth="2"
          strokeDasharray={strokeDasharray}
        />
        <path
          d={direction === 'right' ? 'M32 1L27 5V-3L32 1Z' : 'M0 1L5 5V-3L0 1Z'}
          fill="var(--color-accent-primary)"
        />
      </svg>
    </div>
  );
}

interface DiagramLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function DiagramLabel({ children, className = '' }: DiagramLabelProps) {
  return (
    <div className={`text-label text-[var(--color-text-secondary)] ${className}`}>
      {children}
    </div>
  );
}

interface DiagramFlowProps {
  steps: {
    label: string;
    description?: string;
  }[];
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

export function DiagramFlow({ steps, direction = 'horizontal', className = '' }: DiagramFlowProps) {
  const isHorizontal = direction === 'horizontal';
  
  return (
    <div className={`flex ${isHorizontal ? 'flex-row items-start' : 'flex-col items-center'} gap-4 ${className}`}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <DiagramBox className="flex-1 text-center min-w-[140px]">
            <DiagramLabel className="mb-2">{step.label}</DiagramLabel>
            {step.description && (
              <p className="text-body-small text-[var(--color-text-primary)] mt-2">
                {step.description}
              </p>
            )}
          </DiagramBox>
          {index < steps.length - 1 && (
            <DiagramArrow direction={isHorizontal ? 'right' : 'down'} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

interface SystemLoopProps {
  stages: string[];
  className?: string;
}

export function SystemLoop({ stages, className = '' }: SystemLoopProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-2 gap-8 max-w-[600px] mx-auto">
        {stages.map((stage, index) => (
          <DiagramBox
            key={index}
            variant={index === 0 ? 'accent' : 'default'}
            className="text-center"
          >
            <p className="text-body font-medium text-[var(--color-text-primary)]">
              {stage}
            </p>
          </DiagramBox>
        ))}
      </div>
      
      {/* Loop arrows - visual indication of closed loop */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 600 400">
          <path
            d="M 150 50 L 450 50 L 450 350 L 150 350 Z"
            stroke="var(--color-accent-primary)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5 5"
            opacity="0.3"
          />
        </svg>
      </div>
    </div>
  );
}
