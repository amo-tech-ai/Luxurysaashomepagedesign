/**
 * CountUpStat Component
 * 
 * Animated counter with spring physics
 * Counts from start value to end value on mount
 */

'use client';

import { motion, useSpring, useTransform } from 'motion/react';
import { useEffect } from 'react';
import { heroSpring, useReducedMotion } from '../../lib/animation-presets';

interface CountUpStatProps {
  startValue: number;
  endValue: number;
  prefix?: string;
  suffix?: string;
  subtitle?: string;
  duration?: number;
  className?: string;
}

export function CountUpStat({ 
  startValue, 
  endValue, 
  prefix = '$',
  suffix = 'T',
  subtitle,
  duration = 2,
  className = '' 
}: CountUpStatProps) {
  const prefersReducedMotion = useReducedMotion();
  
  // Spring animation for smooth counting
  const spring = useSpring(startValue, {
    stiffness: heroSpring.stiffness,
    damping: heroSpring.damping,
    mass: heroSpring.mass,
  });
  
  // Transform spring value to display format
  const display = useTransform(spring, (latest) => {
    return `${prefix}${latest.toFixed(1)}${suffix}`;
  });
  
  // Trigger count-up on mount
  useEffect(() => {
    if (prefersReducedMotion) {
      // Instant transition if reduced motion preferred
      spring.set(endValue);
    } else {
      // Delayed start for dramatic effect
      const timeout = setTimeout(() => {
        spring.set(endValue);
      }, 300);
      
      return () => clearTimeout(timeout);
    }
  }, [spring, endValue, prefersReducedMotion]);
  
  return (
    <div className={`text-center ${className}`}>
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.span 
          className="text-[clamp(48px,10vw,96px)] font-extrabold text-[#7C3AED]"
          style={{ 
            fontVariantNumeric: 'tabular-nums',
            display: 'inline-block',
          }}
        >
          {display}
        </motion.span>
        
        {subtitle && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: prefersReducedMotion ? 0 : duration + 0.4, duration: 0.4 }}
            className="mt-4 text-[18px] text-[#94A3B8]"
          >
            {subtitle}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
