/**
 * Slide 01: Fashion's $2 Trillion Crossroads
 * 
 * Hero section with count-up stat, supporting metrics,
 * and executive sentiment chart
 */

'use client';

import { motion } from 'motion/react';
import { CountUpStat } from './shared/CountUpStat';
import { StatCard } from './shared/StatCard';
import { BarChart } from './shared/BarChart';
import { ScrollIndicator } from './shared/ScrollIndicator';
import { SourceCitation } from './shared/SourceCitation';
import { slide01Data } from '../data/fashion-data';
import { fadeUpVariants, useReducedMotion } from '../lib/animation-presets';

export function Slide01HeroCrossroads() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section 
      className="relative min-h-screen bg-[#0E1117] px-6 py-20 lg:px-8 lg:py-32"
      aria-labelledby="hero-title"
      role="region"
      aria-label="Fashion industry market overview"
    >
      {/* Subtle gradient overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(124, 58, 237, 0.3), transparent 60%)',
        }}
        aria-hidden="true"
      />
      
      <div className="relative mx-auto max-w-7xl">
        {/* Section title */}
        <motion.h1
          id="hero-title"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center text-[clamp(32px,5vw,40px)] font-bold uppercase tracking-[0.1em] text-[#F8FAFC]"
        >
          {slide01Data.sectionTitle}
        </motion.h1>
        
        {/* Hero stat (count-up) */}
        <div className="mt-16">
          <CountUpStat
            startValue={slide01Data.heroStat.startValue}
            endValue={slide01Data.heroStat.endValue}
            prefix={slide01Data.heroStat.prefix}
            suffix={slide01Data.heroStat.suffix}
            subtitle={slide01Data.heroStat.subtitle}
          />
        </div>
        
        {/* Supporting stats (3 cards) */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {slide01Data.supportingStats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
        
        {/* Executive sentiment chart */}
        <div className="mt-24">
          <BarChart
            title={slide01Data.sentimentChart.title}
            data={slide01Data.sentimentChart.data}
          />
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-32">
          <ScrollIndicator />
        </div>
        
        {/* Source */}
        <SourceCitation text={slide01Data.source} />
      </div>
    </section>
  );
}
