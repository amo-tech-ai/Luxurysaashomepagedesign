/**
 * ScrollIndicator Component
 * 
 * Pulsing down arrow at bottom of hero section
 * Infinite loop animation
 */

'use client';

import { motion } from 'motion/react';
import { useReducedMotion } from '../../lib/animation-presets';

export function ScrollIndicator() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      className="flex items-center justify-center"
      animate={prefersReducedMotion ? {} : {
        y: [0, 8, 0],
        opacity: [0.4, 1, 0.4],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      aria-hidden="true"
    >
      <svg
        className="h-12 w-12 text-[#7C3AED]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </motion.div>
  );
}
