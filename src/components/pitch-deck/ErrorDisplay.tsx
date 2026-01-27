/**
 * Error Display Component
 * 
 * User-friendly error display for pitch deck generator
 * Shows errors with appropriate styling and recovery actions
 */

import { AlertCircle, AlertTriangle, Info, X } from 'lucide-react';
import { AppError, getErrorDisplayProps } from '../../lib/errorHandling';

interface ErrorDisplayProps {
  error: AppError;
  onDismiss?: () => void;
  className?: string;
}

export function ErrorDisplay({ error, onDismiss, className = '' }: ErrorDisplayProps) {
  const display = getErrorDisplayProps(error);

  const severityConfig = {
    info: {
      icon: Info,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-900',
      iconColor: 'text-blue-600',
    },
    warning: {
      icon: AlertTriangle,
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      textColor: 'text-yellow-900',
      iconColor: 'text-yellow-600',
    },
    error: {
      icon: AlertCircle,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-900',
      iconColor: 'text-red-600',
    },
  };

  const config = severityConfig[display.severity];
  const Icon = config.icon;

  return (
    <div
      className={`rounded-lg border p-4 ${config.bgColor} ${config.borderColor} ${className}`}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${config.iconColor}`} />
        
        <div className="flex-1">
          <h4 className={`text-sm font-medium mb-1 ${config.textColor}`}>
            {display.title}
          </h4>
          
          <p className={`text-sm ${config.textColor} opacity-90`}>
            {display.message}
          </p>

          {display.action && (
            <p className={`text-xs mt-2 ${config.textColor} opacity-75`}>
              {display.action}
            </p>
          )}
        </div>

        {onDismiss && (
          <button
            onClick={onDismiss}
            className={`${config.iconColor} hover:opacity-75 transition-opacity`}
            aria-label="Dismiss error"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * Multiple errors display (for validation)
 */

interface ErrorListProps {
  errors: AppError[];
  onDismiss?: (errorId: string) => void;
  className?: string;
}

export function ErrorList({ errors, onDismiss, className = '' }: ErrorListProps) {
  if (errors.length === 0) return null;

  return (
    <div className={`space-y-3 ${className}`}>
      {errors.map((error) => (
        <ErrorDisplay
          key={error.id}
          error={error}
          onDismiss={onDismiss ? () => onDismiss(error.id) : undefined}
        />
      ))}
    </div>
  );
}

/**
 * Inline field error (small, minimal)
 */

interface FieldErrorProps {
  message: string;
  className?: string;
}

export function FieldError({ message, className = '' }: FieldErrorProps) {
  return (
    <div className={`flex items-center gap-1 text-xs text-red-600 mt-1 ${className}`}>
      <AlertCircle className="w-3 h-3" />
      <span>{message}</span>
    </div>
  );
}
