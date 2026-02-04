import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'canvas' | 'surface';
}

export function Section({ children, className = '', background = 'canvas' }: SectionProps) {
  const bgColor = background === 'canvas' ? 'bg-[var(--color-canvas)]' : 'bg-[var(--color-surface)]';
  
  return (
    <section className={`py-24 ${bgColor} ${className}`}>
      <div className="max-w-[1280px] mx-auto px-20">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ label, title, subtitle, centered = false }: SectionHeaderProps) {
  const alignClass = centered ? 'text-center mx-auto' : 'text-left';
  const maxWidthClass = centered ? 'max-w-[800px]' : 'max-w-[680px]';
  
  return (
    <div className={`mb-12 ${alignClass} ${maxWidthClass}`}>
      {label && (
        <div className="text-label text-[var(--color-accent-primary)] mb-6">
          {label}
        </div>
      )}
      <h2 className="text-h2 text-[var(--color-text-primary)] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-body-large text-[var(--color-text-secondary)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'minimal';
  className?: string;
}

export function Card({ children, variant = 'default', className = '' }: CardProps) {
  const baseStyles = 'bg-white';
  
  const variantStyles = {
    default: 'border border-[var(--color-border)] p-12',
    accent: 'border-2 border-[var(--color-accent-primary)] border-l-[4px] p-12',
    minimal: 'p-12'
  };
  
  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export function Button({ children, variant = 'primary', onClick, className = '' }: ButtonProps) {
  const baseStyles = 'px-8 py-4 text-body font-medium transition-all duration-[var(--transition-base)] cursor-pointer inline-block';
  
  const variantStyles = {
    primary: 'bg-[var(--color-accent-primary)] text-white hover:bg-[var(--color-accent-primary-hover)]',
    secondary: 'bg-transparent border-2 border-[var(--color-accent-primary)] text-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary-light)]'
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

interface DividerProps {
  variant?: 'hairline' | 'thick';
  className?: string;
}

export function Divider({ variant = 'hairline', className = '' }: DividerProps) {
  const borderWidth = variant === 'hairline' ? 'border-t' : 'border-t-2';
  
  return (
    <hr className={`${borderWidth} border-[var(--color-border)] my-16 ${className}`} />
  );
}

interface TwoColumnLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
  split?: '50-50' | '60-40' | '40-60';
  gap?: number;
  className?: string;
}

export function TwoColumnLayout({ 
  left, 
  right, 
  split = '50-50', 
  gap = 12,
  className = '' 
}: TwoColumnLayoutProps) {
  const gridCols = {
    '50-50': 'grid-cols-2',
    '60-40': 'grid-cols-[60%_40%]',
    '40-60': 'grid-cols-[40%_60%]'
  };
  
  return (
    <div className={`grid ${gridCols[split]} gap-${gap} ${className}`}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  variant?: 'default' | 'accent';
}

export function StatCard({ value, label, variant = 'default' }: StatCardProps) {
  const valueColor = variant === 'accent' 
    ? 'text-[var(--color-accent-primary)]' 
    : 'text-[var(--color-text-primary)]';
  
  return (
    <Card className="text-center">
      <div className={`text-[48px] font-light leading-tight mb-2 ${valueColor}`}>
        {value}
      </div>
      <div className="text-meta text-[var(--color-text-secondary)] uppercase tracking-wider">
        {label}
      </div>
    </Card>
  );
}
