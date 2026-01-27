import React from 'react';

interface SignalStrengthIndicatorProps {
  value: number; // 0-100
}

export function SignalStrengthIndicator({ value }: SignalStrengthIndicatorProps) {
  // Determine color based on value
  const getColor = (val: number) => {
    if (val < 50) return '#EF4444'; // Red
    if (val < 75) return '#F59E0B'; // Orange
    return '#10B981'; // Green
  };

  const getLabel = (val: number) => {
    if (val < 50) return 'Building';
    if (val < 75) return 'Growing';
    return 'Strong';
  };

  const color = getColor(value);
  const label = getLabel(value);

  // Calculate circle stroke dasharray for progress
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="signal-strength-indicator mb-6">
      <div className="flex flex-col items-center">
        {/* Circular Progress */}
        <div className="relative w-28 h-28 mb-3">
          <svg className="transform -rotate-90 w-28 h-28">
            {/* Background circle */}
            <circle
              cx="56"
              cy="56"
              r={radius}
              stroke="#E5E7EB"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="56"
              cy="56"
              r={radius}
              stroke={color}
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                transition: 'stroke-dashoffset 500ms ease-out, stroke 500ms ease',
              }}
            />
          </svg>
          
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div 
              className="text-3xl font-normal transition-colors duration-500"
              style={{ color }}
            >
              {value}%
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              {label}
            </div>
          </div>
        </div>

        {/* Label */}
        <div className="text-center">
          <div className="text-sm font-medium text-gray-900">Signal Strength</div>
          <div className="text-xs text-gray-500 mt-1">Investor readiness score</div>
        </div>
      </div>
    </div>
  );
}
