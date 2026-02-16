/**
 * StatCard Component
 * 
 * Reusable stat card with stagger animation
 * Used in both Slide 01 and Slide 02
 */

'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { fadeUpVariants, inViewOptions, useReducedMotion } from '../../lib/animation-presets';

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
  className?: string;
}

export function StatCard({ 
  value, 
  label, 
  delay = 0,
  className = '' 
}: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions.hero);
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? {} : fadeUpVariants.hidden}
      animate={isInView && !prefersReducedMotion ? fadeUpVariants.visible(delay) : {}}
      className={`rounded-2xl border border-[#334155] bg-[#1E293B] p-8 ${className}`}
    >
      <div className="mb-3 text-[clamp(24px,3vw,28px)] font-bold text-[#F8FAFC]">
        {value}
      </div>
      <div className="text-[14px] leading-[1.7] text-[#94A3B8]">
        {label}
      </div>
    </motion.div>
  );
}
