import React from 'react';

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function EmptyState({ icon, title, description, className = '' }: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center text-center py-16 px-6 ${className}`}>
      {/* Icon Container */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D5F4E]/5 to-[#0D5F4E]/10 rounded-full blur-2xl scale-150" />
        <div className="relative opacity-30 animate-gentle-float">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-[#2D2D2D]">
          {title}
        </h4>
        <p className="text-xs text-[#A3A3A3] max-w-[200px] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative Element */}
      <div className="mt-6 w-12 h-1 bg-gradient-to-r from-transparent via-[#E8E6E1] to-transparent rounded-full" />
    </div>
  );
}
