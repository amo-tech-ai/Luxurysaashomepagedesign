/**
 * AnalysisParagraph Component
 * 
 * Editorial text block with optimal reading width
 * Fade-in animation on scroll
 */

'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { fadeInVariants, inViewOptions, useReducedMotion } from '../../lib/animation-presets';

interface AnalysisParagraphProps {
  text: string;
  delay?: number;
  className?: string;
}

export function AnalysisParagraph({ 
  text, 
  delay = 0.3,
  className = '' 
}: AnalysisParagraphProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions.standard);
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.p
      ref={ref}
      initial={prefersReducedMotion ? {} : fadeInVariants.hidden}
      animate={isInView && !prefersReducedMotion ? fadeInVariants.visible(delay) : {}}
      className={`mx-auto max-w-[680px] text-[16px] leading-[1.8] tracking-[0.01em] text-[#94A3B8] ${className}`}
    >
      {text}
    </motion.p>
  );
}
