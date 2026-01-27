/**
 * Error Handling Utilities
 * 
 * Provides centralized error handling for the pitch deck generator
 * Includes error tracking, user-friendly messages, and recovery strategies
 * 
 * @version 1.0.0
 */

export enum ErrorCategory {
  VALIDATION = 'VALIDATION',
  GENERATION = 'GENERATION',
  EXPORT = 'EXPORT',
  NETWORK = 'NETWORK',
  UNKNOWN = 'UNKNOWN',
}

export enum ErrorSeverity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}

export interface AppError {
  id: string;
  category: ErrorCategory;
  severity: ErrorSeverity;
  message: string;
  userMessage: string;
  technicalDetails?: string;
  timestamp: Date;
  context?: Record<string, any>;
  recoveryAction?: string;
}

/**
 * Create standardized error
 */
export function createError(
  category: ErrorCategory,
  severity: ErrorSeverity,
  message: string,
  userMessage: string,
  context?: Record<string, any>
): AppError {
  return {
    id: generateErrorId(),
    category,
    severity,
    message,
    userMessage,
    timestamp: new Date(),
    context,
  };
}

/**
 * Validation errors
 */

export function createValidationError(
  field: string,
  issue: string
): AppError {
  return createError(
    ErrorCategory.VALIDATION,
    ErrorSeverity.LOW,
    `Validation failed for ${field}: ${issue}`,
    `Please check your ${field}. ${issue}`,
    { field, issue }
  );
}

export function validateDeckInput(data: any): { isValid: boolean; errors: AppError[] } {
  const errors: AppError[] = [];

  // Required fields
  if (!data.companyName || data.companyName.trim().length === 0) {
    errors.push(
      createValidationError('company name', 'Company name is required')
    );
  }

  if (!data.oneLiner || data.oneLiner.trim().length === 0) {
    errors.push(
      createValidationError('one-liner', 'One-liner description is required')
    );
  }

  if (data.oneLiner && data.oneLiner.length > 120) {
    errors.push(
      createValidationError(
        'one-liner',
        'One-liner must be 120 characters or less'
      )
    );
  }

  if (!data.problem || data.problem.trim().length === 0) {
    errors.push(
      createValidationError('problem', 'Problem description is required')
    );
  }

  if (!data.solution || data.solution.trim().length === 0) {
    errors.push(
      createValidationError('solution', 'Solution description is required')
    );
  }

  if (!data.industry || data.industry === 'select') {
    errors.push(
      createValidationError('industry', 'Please select an industry')
    );
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Generation errors
 */

export function createGenerationError(
  step: string,
  reason: string
): AppError {
  return createError(
    ErrorCategory.GENERATION,
    ErrorSeverity.MEDIUM,
    `Generation failed at ${step}: ${reason}`,
    `We couldn't generate your deck at the ${step} step. Please try again.`,
    { step, reason }
  );
}

/**
 * Export errors
 */

export function createExportError(format: string, reason: string): AppError {
  return createError(
    ErrorCategory.EXPORT,
    ErrorSeverity.LOW,
    `Export to ${format} failed: ${reason}`,
    `We couldn't export your deck as ${format}. Please try a different format or try again later.`,
    { format, reason }
  );
}

/**
 * Network errors
 */

export function createNetworkError(endpoint: string, status?: number): AppError {
  const message =
    status === 429
      ? 'Too many requests. Please wait a moment and try again.'
      : status && status >= 500
      ? 'Our servers are experiencing issues. Please try again in a few minutes.'
      : 'Network connection issue. Please check your internet connection.';

  return createError(
    ErrorCategory.NETWORK,
    status && status >= 500 ? ErrorSeverity.HIGH : ErrorSeverity.MEDIUM,
    `Network request to ${endpoint} failed with status ${status || 'unknown'}`,
    message,
    { endpoint, status }
  );
}

/**
 * Error recovery strategies
 */

export function getRecoveryAction(error: AppError): string {
  switch (error.category) {
    case ErrorCategory.VALIDATION:
      return 'Please review the highlighted fields and correct any issues.';

    case ErrorCategory.GENERATION:
      return 'Try generating again. If the issue persists, try simplifying your inputs.';

    case ErrorCategory.EXPORT:
      return 'Try a different export format or wait a moment before trying again.';

    case ErrorCategory.NETWORK:
      if (error.context?.status === 429) {
        return 'Wait 60 seconds before trying again to avoid rate limits.';
      }
      return 'Check your internet connection and try again.';

    case ErrorCategory.UNKNOWN:
    default:
      return 'Please refresh the page and try again. Contact support if the issue continues.';
  }
}

/**
 * Error logging (for production)
 */

export function logError(error: AppError): void {
  // In development, log to console
  if (process.env.NODE_ENV === 'development') {
    console.error('[Error]', {
      id: error.id,
      category: error.category,
      severity: error.severity,
      message: error.message,
      context: error.context,
      timestamp: error.timestamp,
    });
  }

  // In production, send to error tracking service
  // Example: Sentry, LogRocket, etc.
  /*
  if (process.env.NODE_ENV === 'production') {
    // Sentry.captureException(new Error(error.message), {
    //   tags: {
    //     category: error.category,
    //     severity: error.severity,
    //   },
    //   extra: error.context,
    // });
  }
  */
}

/**
 * User-friendly error display
 */

export function getErrorDisplayProps(error: AppError): {
  title: string;
  message: string;
  severity: 'info' | 'warning' | 'error';
  action?: string;
} {
  let severity: 'info' | 'warning' | 'error' = 'warning';

  if (error.severity === ErrorSeverity.CRITICAL || error.severity === ErrorSeverity.HIGH) {
    severity = 'error';
  } else if (error.severity === ErrorSeverity.LOW) {
    severity = 'info';
  }

  return {
    title: getCategoryTitle(error.category),
    message: error.userMessage,
    severity,
    action: getRecoveryAction(error),
  };
}

function getCategoryTitle(category: ErrorCategory): string {
  switch (category) {
    case ErrorCategory.VALIDATION:
      return 'Please check your input';
    case ErrorCategory.GENERATION:
      return 'Generation issue';
    case ErrorCategory.EXPORT:
      return 'Export failed';
    case ErrorCategory.NETWORK:
      return 'Connection issue';
    case ErrorCategory.UNKNOWN:
    default:
      return 'Something went wrong';
  }
}

/**
 * Generate unique error ID
 */
function generateErrorId(): string {
  return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Error boundary hook (for React components)
 */

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: AppError;
}

export function createErrorBoundaryState(): ErrorBoundaryState {
  return {
    hasError: false,
    error: undefined,
  };
}

export function handleComponentError(
  error: Error,
  componentName: string
): AppError {
  return createError(
    ErrorCategory.UNKNOWN,
    ErrorSeverity.MEDIUM,
    `Component error in ${componentName}: ${error.message}`,
    'We encountered an unexpected issue. The page will reload automatically.',
    { componentName, stack: error.stack }
  );
}
