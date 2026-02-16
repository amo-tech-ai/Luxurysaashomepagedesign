/**
 * Slide 02: The $27B Tariff Tax on Fashion
 * 
 * Tariff analysis section with hero stat, country comparison chart,
 * and brand response flow diagram
 */

'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { StatCard } from './shared/StatCard';
import { TariffBarChart } from './shared/TariffBarChart';
import { BrandResponseDiagram } from './shared/BrandResponseDiagram';
import { AnalysisParagraph } from './shared/AnalysisParagraph';
import { SourceCitation } from './shared/SourceCitation';
import { NoiseTexture } from './shared/NoiseTexture';
import { slide02Data } from '../data/fashion-data';
import { scaleInVariants, inViewOptions, useReducedMotion } from '../lib/animation-presets';

export function Slide02TariffShock() {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions.hero);
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section 
      ref={ref}
      className="relative min-h-screen bg-[#0E1117] px-6 py-20 lg:px-8 lg:py-32"
      aria-labelledby="tariff-title"
      role="region"
      aria-label="Tariff impact analysis on US fashion imports"
    >
      {/* Noise texture overlay */}
      <NoiseTexture />
      
      <div className="relative mx-auto max-w-7xl">
        {/* Section title */}
        <motion.h2
          id="tariff-title"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center text-[clamp(24px,5vw,40px)] font-bold uppercase tracking-[0.05em] text-[#F8FAFC]"
        >
          {slide02Data.sectionTitle}
        </motion.h2>
        
        {/* Hero stat ($27B) */}
        <motion.div
          className="mt-16 text-center"
          initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : scaleInVariants.hidden}
          animate={isInView && !prefersReducedMotion ? scaleInVariants.visible(0.3) : {}}
        >
          <div 
            className="text-[clamp(48px,10vw,96px)] font-extrabold text-[#7C3AED]"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {slide02Data.heroStat.value}
          </div>
          <div className="mt-4 text-[18px] text-[#94A3B8]">
            {slide02Data.heroStat.subtitle}
          </div>
        </motion.div>
        
        {/* Supporting stats (3 cards) */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {slide02Data.supportingStats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
        
        {/* Country tariff chart */}
        <div className="mt-24">
          <TariffBarChart
            title={slide02Data.tariffChart.title}
            data={slide02Data.tariffChart.data}
          />
        </div>
        
        {/* Brand response flow diagram */}
        <div className="mt-32">
          <BrandResponseDiagram
            title={slide02Data.brandResponseDiagram.title}
            flowData={slide02Data.brandResponseDiagram}
          />
        </div>
        
        {/* Analysis paragraph */}
        <div className="mt-32">
          <AnalysisParagraph text={slide02Data.analysis} />
        </div>
        
        {/* Source */}
        <SourceCitation text={slide02Data.source} />
      </div>
    </section>
  );
}
