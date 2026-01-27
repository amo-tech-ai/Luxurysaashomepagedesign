import React from 'react';
import { CheckCircle, AlertTriangle, XCircle, Circle } from 'lucide-react';

export type StatusType = 'complete' | 'warning' | 'error' | 'empty';

interface StatusIndicatorProps {
  status: StatusType;
  message: string;
}

export function StatusIndicator({ status, message }: StatusIndicatorProps) {
  const configs = {
    complete: {
      icon: CheckCircle,
      iconColor: 'text-green-500',
      textColor: 'text-green-700',
      bgColor: 'bg-green-50',
    },
    warning: {
      icon: AlertTriangle,
      iconColor: 'text-orange-500',
      textColor: 'text-orange-700',
      bgColor: 'bg-orange-50',
    },
    error: {
      icon: XCircle,
      iconColor: 'text-red-500',
      textColor: 'text-red-700',
      bgColor: 'bg-red-50',
    },
    empty: {
      icon: Circle,
      iconColor: 'text-gray-400',
      textColor: 'text-gray-600',
      bgColor: 'bg-gray-50',
    },
  };

  const config = configs[status];
  const Icon = config.icon;

  return (
    <div 
      className={`flex items-center gap-2 px-3 py-2 rounded-lg ${config.bgColor} animate-[statusUpdate_300ms_ease-out]`}
    >
      <Icon className={`w-4 h-4 ${config.iconColor}`} />
      <span className={`text-xs font-medium ${config.textColor}`}>
        {message}
      </span>
    </div>
  );
}
