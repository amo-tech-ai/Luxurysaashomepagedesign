/**
 * Animation Presets for Fashion 2026 Infographic
 * 
 * Provides consistent animation configurations across all slides:
 * - Spring physics presets
 * - Easing curve definitions
 * - Accessibility utilities (reduced motion)
 */

import { useEffect, useState } from 'react';

// ============================================================================
// SPRING PHYSICS CONFIGURATIONS
// ============================================================================

/**
 * Hero stat count-up animation
 * Fast response with smooth settling
 */
export const heroSpring = {
  stiffness: 300,
  damping: 30,
  mass: 1,
};

/**
 * Chart bar animations
 * Slightly slower with gentle bounce
 */
export const chartSpring = {
  stiffness: 200,
  damping: 25,
  mass: 0.8,
};

/**
 * Playful icon animations
 * Spring-like easing for subtle bounce
 */
export const iconSpring = {
  stiffness: 400,
  damping: 20,
  mass: 0.5,
};

// ============================================================================
// EASING CURVES (Cubic Bezier)
// ============================================================================

/**
 * Quick, snappy easing
 * Use for: Buttons, links, quick interactions
 */
export const easingSharp = [0.4, 0, 0.6, 1] as const;

/**
 * Smooth, standard easing (default)
 * Use for: Cards, reveals, most animations
 */
export const easingStandard = [0.4, 0, 0.2, 1] as const;

/**
 * Gentle, floaty easing
 * Use for: Large sections, hero elements
 */
export const easingGentle = [0.25, 0.1, 0.25, 1] as const;

/**
 * Spring-like easing with overshoot
 * Use for: Icons, playful elements (careful - can feel bouncy)
 */
export const easingSpring = [0.34, 1.56, 0.64, 1] as const;

// ============================================================================
// DURATION PRESETS (in seconds)
// ============================================================================

export const durations = {
  fast: 0.2,        // Quick hover states
  normal: 0.3,      // Standard animations
  medium: 0.6,      // Card reveals, fades
  slow: 0.8,        // Large element animations
  verySlow: 2.0,    // Count-up, hero reveals
};

// ============================================================================
// ANIMATION VARIANTS (Framer Motion)
// ============================================================================

/**
 * Fade up animation (most common)
 * Element starts below and fades in
 */
export const fadeUpVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.medium,
      delay,
      ease: easingStandard,
    },
  }),
};

/**
 * Fade in animation (no movement)
 * Simple opacity transition
 */
export const fadeInVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: durations.medium,
      delay,
      ease: easingStandard,
    },
  }),
};

/**
 * Scale in animation
 * Element scales from 90% to 100%
 */
export const scaleInVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9 
  },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.medium,
      delay,
      ease: easingStandard,
    },
  }),
};

/**
 * Bar chart grow animation
 * Bars scale from 0 to full height (bottom origin)
 */
export const barGrowVariants = {
  hidden: { 
    scaleY: 0 
  },
  visible: (delay = 0) => ({
    scaleY: 1,
    transition: {
      duration: durations.slow,
      delay,
      ...chartSpring,
    },
  }),
};

/**
 * Flow diagram node animation
 * Scale from 80% with fade
 */
export const flowNodeVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: easingStandard,
    },
  }),
};

// ============================================================================
// STAGGER CONFIGURATIONS
// ============================================================================

/**
 * Standard stagger for stat cards
 */
export const staggerCards = 0.15; // seconds

/**
 * Chart bar stagger
 */
export const staggerBars = 0.1; // seconds

/**
 * Flow diagram node stagger
 */
export const staggerFlowNodes = 0.2; // seconds

// ============================================================================
// SCROLL REVEAL THRESHOLDS
// ============================================================================

/**
 * Trigger animation when element is X% visible
 */
export const scrollThresholds = {
  immediate: 0.05,  // Trigger almost immediately
  early: 0.15,      // Trigger when 15% visible (charts)
  standard: 0.2,    // Trigger when 20% visible (flow diagrams)
  late: 0.5,        // Trigger when 50% visible (optional)
};

// ============================================================================
// REDUCED MOTION HOOK
// ============================================================================

/**
 * Custom hook to detect user's reduced motion preference
 * Returns true if user prefers reduced motion
 * 
 * @example
 * const prefersReducedMotion = useReducedMotion();
 * 
 * return (
 *   <motion.div
 *     initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
 *     animate={{ opacity: 1, y: 0 }}
 *   />
 * );
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    // Check media query on mount
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    // Listen for changes
    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', listener);
    
    // Cleanup
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);
  
  return prefersReducedMotion;
}

// ============================================================================
// ANIMATION UTILITIES
// ============================================================================

/**
 * Generate staggered delay for child elements
 * 
 * @param index - Child index (0-based)
 * @param baseDelay - Base delay before first child
 * @param staggerAmount - Time between each child
 * 
 * @example
 * items.map((item, index) => (
 *   <motion.div
 *     initial={{ opacity: 0 }}
 *     animate={{ opacity: 1 }}
 *     transition={{ delay: getStaggerDelay(index, 0.3, 0.1) }}
 *   />
 * ))
 */
export function getStaggerDelay(
  index: number, 
  baseDelay: number = 0, 
  staggerAmount: number = staggerCards
): number {
  return baseDelay + (index * staggerAmount);
}

/**
 * Get animation configuration based on reduced motion preference
 * 
 * @param prefersReducedMotion - User's motion preference
 * @param normalConfig - Normal animation config
 * @param reducedConfig - Reduced motion config (optional)
 * 
 * @example
 * const config = getAnimationConfig(prefersReducedMotion, {
 *   initial: { opacity: 0, y: 30 },
 *   animate: { opacity: 1, y: 0 },
 *   transition: { duration: 0.6 }
 * });
 */
export function getAnimationConfig<T>(
  prefersReducedMotion: boolean,
  normalConfig: T,
  reducedConfig?: Partial<T>
): T {
  if (!prefersReducedMotion) return normalConfig;
  
  // If reduced config provided, use it
  if (reducedConfig) {
    return { ...normalConfig, ...reducedConfig } as T;
  }
  
  // Default reduced motion: instant transitions
  return {
    ...normalConfig,
    transition: { duration: 0 },
  } as T;
}

// ============================================================================
// INTERSECTION OBSERVER WRAPPER
// ============================================================================

/**
 * Threshold presets for useInView hook
 * Pass these to Motion's useInView hook
 * 
 * @example
 * const isInView = useInView(ref, inViewOptions.chart);
 */
export const inViewOptions = {
  // For hero elements (trigger almost immediately)
  hero: {
    once: true,
    amount: scrollThresholds.immediate,
  },
  
  // For charts (trigger when 15% visible)
  chart: {
    once: true,
    amount: scrollThresholds.early,
  },
  
  // For flow diagrams (trigger when 20% visible)
  diagram: {
    once: true,
    amount: scrollThresholds.standard,
  },
  
  // For standard content
  standard: {
    once: true,
    amount: scrollThresholds.standard,
  },
};

// ============================================================================
// EXPORT SUMMARY
// ============================================================================

/**
 * Quick reference for common animation needs:
 * 
 * CARD REVEALS:
 * - Variants: fadeUpVariants
 * - Stagger: staggerCards (0.15s)
 * - Easing: easingStandard
 * 
 * CHART BARS:
 * - Variants: barGrowVariants
 * - Stagger: staggerBars (0.1s)
 * - Spring: chartSpring
 * 
 * HERO STATS:
 * - Variants: scaleInVariants
 * - Duration: durations.medium
 * - Spring: heroSpring (for count-up)
 * 
 * FLOW DIAGRAMS:
 * - Variants: flowNodeVariants
 * - Stagger: staggerFlowNodes (0.2s)
 * - Easing: easingStandard
 * 
 * REDUCED MOTION:
 * - Hook: useReducedMotion()
 * - Utility: getAnimationConfig()
 */
