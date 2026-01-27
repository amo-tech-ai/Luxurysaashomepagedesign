import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'status' | 'type' | 'priority' | 'impact';
  color?: 'yellow' | 'blue' | 'green' | 'red' | 'gray';
  className?: string;
}

export function Tag({ children, variant = 'status', color = 'gray', className = '' }: TagProps) {
  const baseClasses = 'inline-block px-2 py-1 rounded text-xs font-medium';
  
  const colorClasses = {
    yellow: 'bg-[#FEF3C7] text-[#92400E]',
    blue: 'bg-[#DBEAFE] text-[#1E40AF]',
    green: 'bg-[#D1FAE5] text-[#065F46]',
    red: 'bg-[#FEE2E2] text-[#991B1B]',
    gray: 'bg-[#F3F4F6] text-[#6B7280]',
  };

  return (
    <span className={`${baseClasses} ${colorClasses[color]} ${className}`}>
      {children}
    </span>
  );
}
