/**
 * BrandResponseDiagram Component
 * 
 * Flow diagram showing brand responses to tariff shock
 * Root node → connector lines → child nodes (sequential animation)
 * Horizontal flow (desktop), vertical stack (mobile)
 */

'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { staggerFlowNodes, inViewOptions, useReducedMotion } from '../../lib/animation-presets';
import type { FlowDiagramData } from '../../data/fashion-data';

interface BrandResponseDiagramProps {
  title: string;
  flowData: FlowDiagramData;
  className?: string;
}

export function BrandResponseDiagram({ 
  title, 
  flowData, 
  className = '' 
}: BrandResponseDiagramProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions.diagram);
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <div 
      ref={ref}
      className={`rounded-2xl border border-[#334155] bg-[rgba(30,41,59,0.3)] p-8 md:p-12 ${className}`}
    >
      <h3 className="mb-8 md:mb-12 text-center text-[18px] md:text-[20px] font-semibold text-[#F8FAFC]">
        {title}
      </h3>
      
      {/* Desktop: Horizontal flow */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Root node */}
          <motion.div
            className="mx-auto mb-24 w-64 rounded-xl border-2 border-[#7C3AED] bg-[#1E293B] px-8 py-6 text-center shadow-[0_4px_16px_rgba(124,58,237,0.2)]"
            initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="text-[16px] font-semibold text-[#F8FAFC]">
              {flowData.root.label}
            </div>
            <div className="mt-2 text-[14px] text-[#94A3B8]">
              {flowData.root.sublabel}
            </div>
          </motion.div>
          
          {/* Child nodes */}
          <div className="grid grid-cols-3 gap-6">
            {flowData.responses.map((response, index) => (
              <motion.div
                key={response.id}
                className="rounded-xl border-2 border-[#7C3AED] bg-[#1E293B] px-6 py-5 shadow-[0_4px_16px_rgba(124,58,237,0.2)]"
                initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  delay: prefersReducedMotion ? 0 : 0.7 + index * staggerFlowNodes, 
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                {/* Percentage */}
                <div className="mb-2 text-[32px] font-extrabold text-[#7C3AED]">
                  {response.percentage}
                </div>
                
                {/* Label */}
                <div className="mb-2 text-[16px] font-semibold text-[#F8FAFC]">
                  {response.label}
                </div>
                
                {/* Description */}
                <div className="text-[13px] leading-[1.6] text-[#94A3B8]">
                  {response.description}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* SVG connector lines (decorative) */}
          <svg 
            className="absolute left-0 top-0 h-full w-full pointer-events-none" 
            style={{ zIndex: -1 }}
            aria-hidden="true"
          >
            {/* Simple vertical lines from root to children */}
            <motion.line
              x1="50%"
              y1="120"
              x2="50%"
              y2="200"
              stroke="#334155"
              strokeWidth="2"
              initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6, ease: 'easeInOut' }}
            />
          </svg>
        </div>
      </div>
      
      {/* Mobile: Vertical stack */}
      <div className="flex flex-col items-center gap-5 md:hidden">
        {/* Root node */}
        <motion.div
          className="w-full rounded-xl border-2 border-[#7C3AED] bg-[#1E293B] px-6 py-5 text-center"
          initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="text-[14px] font-semibold text-[#F8FAFC]">
            {flowData.root.label}
          </div>
          <div className="mt-1 text-[13px] text-[#94A3B8]">
            {flowData.root.sublabel}
          </div>
        </motion.div>
        
        {flowData.responses.map((response, index) => (
          <div key={response.id} className="flex w-full flex-col items-center gap-3">
            {/* Down arrow */}
            <motion.div
              className="text-[20px] text-[#7C3AED]"
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: prefersReducedMotion ? 0 : 0.5 + index * staggerFlowNodes, duration: 0.3 }}
            >
              ↓
            </motion.div>
            
            {/* Response node */}
            <motion.div
              className="w-full rounded-xl border-2 border-[#7C3AED] bg-[#1E293B] px-6 py-5"
              initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                delay: prefersReducedMotion ? 0 : 0.7 + index * staggerFlowNodes, 
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              {/* Percentage */}
              <div className="mb-2 text-[28px] font-extrabold text-[#7C3AED]">
                {response.percentage}
              </div>
              
              {/* Label */}
              <div className="mb-2 text-[14px] font-semibold text-[#F8FAFC]">
                {response.label}
              </div>
              
              {/* Description */}
              <div className="text-[12px] leading-[1.6] text-[#94A3B8]">
                {response.description}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      
      {/* Accessible list fallback (screen readers only) */}
      <ul className="sr-only">
        <li>Root: {flowData.root.label} - {flowData.root.sublabel}</li>
        {flowData.responses.map(response => (
          <li key={response.id}>
            {response.percentage} {response.label}: {response.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
