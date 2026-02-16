/**
 * BarChart Component
 * 
 * Executive sentiment bar chart for Slide 01
 * Vertical bars (desktop), horizontal bars (mobile)
 * Staggered animation with spring physics
 */

'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { chartSpring, staggerBars, inViewOptions, useReducedMotion } from '../../lib/animation-presets';
import type { ChartDataPoint } from '../../data/fashion-data';

interface BarChartProps {
  title: string;
  data: ChartDataPoint[];
  className?: string;
}

export function BarChart({ title, data, className = '' }: BarChartProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions.chart);
  const prefersReducedMotion = useReducedMotion();
  
  // Split data by category
  const improveData = data.filter(d => d.category === 'improve');
  const worsenData = data.filter(d => d.category === 'worsen');
  
  // Find max value for scaling
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div 
      ref={ref}
      className={`rounded-2xl border border-[#334155] bg-[rgba(30,41,59,0.3)] p-8 md:p-12 ${className}`}
    >
      <h3 className="mb-8 md:mb-12 text-center text-[18px] md:text-[20px] font-semibold text-[#F8FAFC]">
        {title}
      </h3>
      
      {/* Desktop: Vertical bars */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-16">
        {/* Improve section */}
        <div>
          <div className="mb-6 text-center text-[14px] font-medium uppercase tracking-wider text-[#94A3B8]">
            Conditions will Improve
          </div>
          <div className="flex items-end justify-center gap-4">
            {improveData.map((item, index) => (
              <div key={item.label} className="relative flex flex-col items-center">
                {/* Bar */}
                <motion.div
                  className="w-16 rounded-t-lg bg-[#10B981]"
                  style={{ 
                    height: `${(item.value / maxValue) * 200}px`,
                  }}
                  initial={prefersReducedMotion ? { scaleY: 1 } : { scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{
                    delay: index * staggerBars,
                    duration: 0.8,
                    ...chartSpring,
                  }}
                  style={{ transformOrigin: 'bottom' }}
                />
                
                {/* Percentage label */}
                <motion.div
                  className="absolute -top-6 text-[14px] font-bold text-[#F8FAFC]"
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * staggerBars + 0.3, duration: 0.4 }}
                >
                  {item.value}%
                </motion.div>
                
                {/* Year label */}
                <div className="mt-2 text-[12px] text-[#94A3B8]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Worsen section */}
        <div>
          <div className="mb-6 text-center text-[14px] font-medium uppercase tracking-wider text-[#94A3B8]">
            Conditions will Worsen
          </div>
          <div className="flex items-end justify-center gap-4">
            {worsenData.map((item, index) => (
              <div key={item.label} className="relative flex flex-col items-center">
                {/* Bar */}
                <motion.div
                  className="w-16 rounded-t-lg bg-[#7C3AED]"
                  style={{ 
                    height: `${(item.value / maxValue) * 200}px`,
                  }}
                  initial={prefersReducedMotion ? { scaleY: 1 } : { scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{
                    delay: (improveData.length + index) * staggerBars,
                    duration: 0.8,
                    ...chartSpring,
                  }}
                  style={{ transformOrigin: 'bottom' }}
                />
                
                {/* Percentage label */}
                <motion.div
                  className="absolute -top-6 text-[14px] font-bold text-[#F8FAFC]"
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: (improveData.length + index) * staggerBars + 0.3, duration: 0.4 }}
                >
                  {item.value}%
                </motion.div>
                
                {/* Year label */}
                <div className="mt-2 text-[12px] text-[#94A3B8]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile: Horizontal bars */}
      <div className="flex flex-col gap-8 md:hidden">
        {/* Improve section */}
        <div>
          <div className="mb-4 text-[12px] font-medium uppercase tracking-wider text-[#94A3B8]">
            Conditions will Improve
          </div>
          <div className="flex flex-col gap-3">
            {improveData.map((item, index) => (
              <div key={item.label} className="flex items-center gap-3">
                {/* Bar */}
                <motion.div
                  className="h-8 rounded-lg bg-[#10B981]"
                  style={{ width: `${(item.value / maxValue) * 100}%` }}
                  initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{
                    delay: index * staggerBars,
                    duration: 0.8,
                    ...chartSpring,
                  }}
                  style={{ transformOrigin: 'left' }}
                />
                
                {/* Percentage */}
                <span className="min-w-[48px] text-[14px] font-bold text-[#F8FAFC]">
                  {item.value}%
                </span>
                
                {/* Year */}
                <span className="text-[13px] text-[#94A3B8]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Worsen section */}
        <div>
          <div className="mb-4 text-[12px] font-medium uppercase tracking-wider text-[#94A3B8]">
            Conditions will Worsen
          </div>
          <div className="flex flex-col gap-3">
            {worsenData.map((item, index) => (
              <div key={item.label} className="flex items-center gap-3">
                {/* Bar */}
                <motion.div
                  className="h-8 rounded-lg bg-[#7C3AED]"
                  style={{ width: `${(item.value / maxValue) * 100}%` }}
                  initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{
                    delay: (improveData.length + index) * staggerBars,
                    duration: 0.8,
                    ...chartSpring,
                  }}
                  style={{ transformOrigin: 'left' }}
                />
                
                {/* Percentage */}
                <span className="min-w-[48px] text-[14px] font-bold text-[#F8FAFC]">
                  {item.value}%
                </span>
                
                {/* Year */}
                <span className="text-[13px] text-[#94A3B8]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Accessible data table (screen readers only) */}
      <table className="sr-only">
        <caption>Executive sentiment data 2024-2026</caption>
        <thead>
          <tr>
            <th>Year</th>
            <th>Conditions will improve (%)</th>
            <th>Conditions will worsen (%)</th>
          </tr>
        </thead>
        <tbody>
          {[0, 1, 2].map(i => (
            <tr key={i}>
              <td>{improveData[i]?.label}</td>
              <td>{improveData[i]?.value}</td>
              <td>{worsenData[i]?.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
