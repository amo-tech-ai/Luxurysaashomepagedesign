import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  icon,
}: ButtonProps) {
  const baseClasses = 'font-medium rounded-lg transition-all duration-150 ease-out flex items-center justify-center gap-2';

  const variantClasses = {
    primary: 'bg-[#0D5F4E] text-white hover:bg-[#0A4D3F] active:bg-[#084034]',
    secondary: 'bg-white text-[#4A4A4A] border border-[#E8E6E1] hover:bg-[#F5F5F3]',
    danger: 'bg-transparent text-[#DC2626] border border-[#FCA5A5] hover:bg-[#FEE2E2]',
    ghost: 'bg-transparent text-[#4A4A4A] hover:bg-[#F5F5F3]',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  };

  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer hover:transform hover:-translate-y-[1px]';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
