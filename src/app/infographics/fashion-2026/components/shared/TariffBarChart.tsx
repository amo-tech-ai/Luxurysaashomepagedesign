/**
 * TariffBarChart Component
 * 
 * Country-by-country tariff rate comparison
 * Vertical bars (desktop), horizontal bars (mobile)
 * 8 countries with staggered animation
 */

'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { chartSpring, staggerBars, inViewOptions, useReducedMotion } from '../../lib/animation-presets';
import type { CountryTariffData } from '../../data/fashion-data';

interface TariffBarChartProps {
  title: string;
  data: CountryTariffData[];
  className?: string;
}

export function TariffBarChart({ title, data, className = '' }: TariffBarChartProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions.chart);
  const prefersReducedMotion = useReducedMotion();
  
  // Find max rate for scaling
  const maxRate = Math.max(...data.map(d => d.rate));
  
  return (
    <div 
      ref={ref}
      className={`rounded-2xl border border-[#334155] bg-[rgba(30,41,59,0.3)] p-8 md:p-12 ${className}`}
    >
      <h3 className="mb-8 md:mb-12 text-center text-[18px] md:text-[20px] font-semibold text-[#F8FAFC]">
        {title}
      </h3>
      
      {/* Desktop: Vertical bars */}
      <div className="hidden md:flex md:items-end md:justify-center md:gap-6">
        {data.map((item, index) => (
          <div key={item.country} className="relative flex flex-col items-center">
            {/* Percentage label */}
            <motion.div
              className="absolute -top-7 text-[16px] font-bold text-[#F8FAFC]"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: index * staggerBars + 0.3, duration: 0.4 }}
            >
              {item.rate}%
            </motion.div>
            
            {/* Bar */}
            <motion.div
              className="w-20 rounded-t-xl bg-gradient-to-b from-[#7C3AED] to-[#6D28D9]"
              style={{ 
                height: `${(item.rate / maxRate) * 300}px`,
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
            
            {/* Country code label */}
            <div className="mt-3 text-[12px] font-medium uppercase tracking-wider text-[#94A3B8]">
              {item.country}
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobile: Horizontal bars */}
      <div className="flex flex-col gap-4 md:hidden">
        {data.map((item, index) => (
          <div key={item.country} className="flex items-center gap-3">
            {/* Bar */}
            <motion.div
              className="h-8 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#6D28D9]"
              style={{ width: `${(item.rate / maxRate) * 100}%` }}
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
              {item.rate}%
            </span>
            
            {/* Country name */}
            <span className="text-[13px] text-[#94A3B8]">
              {item.fullName}
            </span>
          </div>
        ))}
      </div>
      
      {/* Accessible data table (screen readers only) */}
      <table className="sr-only">
        <caption>Tariff rates by country in 2025</caption>
        <thead>
          <tr>
            <th>Country</th>
            <th>Tariff Rate (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.country}>
              <td>{item.fullName}</td>
              <td>{item.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
