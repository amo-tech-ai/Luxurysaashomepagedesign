import { IndustryFormData } from './agentConfigs';

/**
 * Calculate signal strength (investor readiness score) from 0-100
 */
export function calculateSignalStrength(formData: IndustryFormData): number {
  let score = 0;

  // Weight distribution (total 100 points)
  const weights = {
    targetCustomer: 20,
    problem: 20,
    solution: 20,
    integrations: 15,
    metrics: 25,
  };

  // 1. Target Customer (0-20 points)
  score += scoreTargetCustomer(formData.targetCustomer, weights.targetCustomer);

  // 2. Problem (0-20 points)
  score += scoreProblem(formData.problem, weights.problem);

  // 3. Solution (0-20 points)
  score += scoreSolution(formData.solution, weights.solution);

  // 4. Integrations (0-15 points)
  score += scoreIntegrations(formData.integrations, weights.integrations);

  // 5. Metrics (0-25 points)
  score += scoreMetrics(formData.metrics, weights.metrics);

  return Math.min(Math.round(score), 100);
}

/**
 * Score target customer field (0-20 points)
 */
function scoreTargetCustomer(targetCustomer: string | undefined, maxPoints: number): number {
  if (!targetCustomer) return 0;

  let score = 0;

  // Base points for having content
  if (targetCustomer.length > 0) score += maxPoints * 0.4; // 8 points

  // Length bonus
  if (targetCustomer.length >= 50) score += maxPoints * 0.3; // 6 points

  // Buyer/user separation bonus
  if (containsBuyerUserSeparation(targetCustomer)) score += maxPoints * 0.3; // 6 points

  return Math.min(score, maxPoints);
}

/**
 * Score problem field (0-20 points)
 */
function scoreProblem(problem: string | undefined, maxPoints: number): number {
  if (!problem) return 0;

  let score = 0;

  // Base points for having content
  if (problem.length > 0) score += maxPoints * 0.4; // 8 points

  // Length bonus
  if (problem.length >= 75) score += maxPoints * 0.3; // 6 points

  // Revenue language bonus
  if (containsRevenueLanguage(problem)) score += maxPoints * 0.3; // 6 points

  return Math.min(score, maxPoints);
}

/**
 * Score solution field (0-20 points)
 */
function scoreSolution(solution: string | undefined, maxPoints: number): number {
  if (!solution) return 0;

  let score = 0;

  // Base points for having content
  if (solution.length > 0) score += maxPoints * 0.4; // 8 points

  // Outcome language bonus
  if (containsOutcomeLanguage(solution)) score += maxPoints * 0.3; // 6 points

  // AI differentiation bonus
  if (containsAIDifferentiation(solution)) score += maxPoints * 0.3; // 6 points

  return Math.min(score, maxPoints);
}

/**
 * Score integrations (0-15 points)
 */
function scoreIntegrations(integrations: string[] | undefined, maxPoints: number): number {
  if (!integrations || integrations.length === 0) return 0;

  let score = 0;

  // 1 integration
  if (integrations.length >= 1) score += maxPoints * 0.5; // 7.5 points

  // 2+ integrations (full points)
  if (integrations.length >= 2) score += maxPoints * 0.5; // 7.5 points

  return Math.min(score, maxPoints);
}

/**
 * Score metrics (0-25 points)
 */
function scoreMetrics(
  metrics: Array<{ name: string; value: string }> | undefined,
  maxPoints: number
): number {
  if (!metrics || metrics.length === 0) return 0;

  let score = 0;

  // 1 metric
  if (metrics.length >= 1) score += maxPoints * 0.5; // 12.5 points

  // 2+ metrics (full points)
  if (metrics.length >= 2) score += maxPoints * 0.5; // 12.5 points

  return Math.min(score, maxPoints);
}

/**
 * Helper: Check if text contains buyer/user separation
 */
export function containsBuyerUserSeparation(text: string): boolean {
  const patterns = [
    /buyer.*user/i,
    /user.*buyer/i,
    /purchased.*by/i,
    /used.*by/i,
    /decision.*maker/i,
  ];

  return patterns.some((pattern) => pattern.test(text));
}

/**
 * Helper: Check if text contains revenue language
 */
export function containsRevenueLanguage(text: string): boolean {
  const keywords = [
    'revenue',
    'pipeline',
    'cost',
    'loss',
    'roi',
    'payback',
    'mrr',
    'arr',
    'deals',
    'sales',
    'quota',
  ];

  const lowerText = text.toLowerCase();
  return keywords.some((keyword) => lowerText.includes(keyword));
}

/**
 * Helper: Check if text contains outcome language
 */
export function containsOutcomeLanguage(text: string): boolean {
  const keywords = [
    'automates',
    'reduces',
    'increases',
    'predicts',
    'improves',
    'saves',
    'accelerates',
    'optimizes',
  ];

  const lowerText = text.toLowerCase();
  return keywords.some((keyword) => lowerText.includes(keyword));
}

/**
 * Helper: Check if text contains AI differentiation
 */
export function containsAIDifferentiation(text: string): boolean {
  const patterns = [
    /unlike.*rules/i,
    /vs.*manual/i,
    /traditional.*tools/i,
    /adapts.*behavior/i,
    /real.*time/i,
  ];

  return patterns.some((pattern) => pattern.test(text));
}

/**
 * Get signal strength level label
 */
export function getSignalLabel(score: number): string {
  if (score < 50) return 'Building';
  if (score < 75) return 'Growing';
  return 'Strong';
}

/**
 * Get signal strength color
 */
export function getSignalColor(score: number): string {
  if (score < 50) return '#EF4444'; // Red
  if (score < 75) return '#F59E0B'; // Orange
  return '#10B981'; // Green
}
