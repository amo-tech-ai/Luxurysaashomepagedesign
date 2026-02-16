/**
 * Fashion 2026 V4 — Luxury Editorial Infographic
 * 
 * Production-ready implementation with:
 * - Modular components
 * - Separated data layer
 * - Design system tokens
 * - Accessibility compliant
 * - Performance optimized
 * - Fully responsive
 * 
 * @version 4.0.0
 * @author StartupAI Design System Team
 */

'use client';

import { ArrowLeft, ArrowDown, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
import { useState, useEffect } from 'react';

// Design System
import { colors, typography, motion } from './design-system';

// Components
import {
  SectionLabel,
  HeroStat,
  GlassCard,
  StatCard,
  ChartContainer,
  FlowNode,
  AlertBox,
  SourceCitation,
  SectionWrapper,
} from './components';

// Data
import {
  heroData,
  discountTrapData,
  tradeDisruptionData,
  aiTransformationData,
  navigationData,
  footerData,
} from './data';

interface Fashion2026V4Props {
  onNavigate?: (page: string) => void;
}

export default function Fashion2026V4({ onNavigate }: Fashion2026V4Props) {
  // State Management
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  // Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);

      // Intersection Observer for sections
      const sections = document.querySelectorAll('[data-section]');
      const newVisible = new Set<string>();
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          newVisible.add(section.getAttribute('data-section') || '');
        }
      });
      
      setVisibleSections(newVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isVisible = (section: string) => visibleSections.has(section);

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.darkForest, color: colors.white }}>
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 z-50"
        style={{ 
          height: '2px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
        }}
      >
        <div 
          className="h-full transition-all duration-300"
          style={{ 
            width: `${scrollProgress}%`,
            backgroundColor: colors.indigo,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-8 z-40">
        <button
          onClick={() => onNavigate?.(navigationData.backDestination)}
          className="flex items-center gap-2 transition-colors backdrop-blur-md px-5 py-2.5 rounded-lg border"
          style={{
            color: 'rgba(255, 255, 255, 0.6)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = colors.white}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wide">{navigationData.backLabel}</span>
        </button>
      </nav>

      {/* Grain Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          opacity: 0.015,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* ========================================
          SECTION 01 — HERO
          ======================================== */}
      <SectionWrapper id="hero" theme="dark">
        {/* Radial gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            opacity: 0.4,
            background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
          }}
        />

        <div 
          className={`relative transition-all duration-1200 ${
            isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <SectionLabel theme="dark">{heroData.label}</SectionLabel>
          
          <h1 
            className="text-center mb-8 leading-tight tracking-tight font-bold"
            style={{ fontSize: 'clamp(48px, 8vw, 88px)' }}
          >
            {heroData.headline}<br />{heroData.headlineLine2}
          </h1>
          
          <p 
            className="text-center max-w-[680px] mx-auto mb-16 leading-relaxed tracking-wide"
            style={{
              fontSize: typography.sizes.bodyLarge,
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            {heroData.subtitle}
          </p>

          <HeroStat 
            value={heroData.primaryStat.value}
            label={heroData.primaryStat.label}
          />

          {/* Signal Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {heroData.signalCards.map((card, idx) => (
              <GlassCard
                key={idx}
                value={card.value}
                label={card.label}
                description={card.description}
                icon={card.icon}
                iconColor={card.color}
                delay={idx * 150}
                isVisible={isVisible('hero')}
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-3 mt-20 animate-bounce">
            <div 
              style={{
                fontSize: '10px',
                color: 'rgba(255, 255, 255, 0.3)',
                textTransform: 'uppercase',
                letterSpacing: typography.tracking.widest,
                fontWeight: typography.weights.medium,
              }}
            >
              Explore Report
            </div>
            <ArrowDown className="w-5 h-5" style={{ color: 'rgba(255, 255, 255, 0.3)' }} />
          </div>
        </div>
      </SectionWrapper>

      {/* Section Divider */}
      <div 
        className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent max-w-[1400px] mx-auto" 
      />

      {/* ========================================
          SECTION 02 — THE DISCOUNT TRAP
          ======================================== */}
      <SectionWrapper id="discount" theme="dark">
        {/* Radial gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            opacity: 0.3,
            background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, transparent 60%)',
          }}
        />

        <div 
          className={`relative transition-all duration-1200 ${
            isVisible('discount') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <SectionLabel theme="dark">{discountTrapData.label}</SectionLabel>
          
          <h2 
            className="text-center mb-8 leading-tight tracking-tight font-black"
            style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}
          >
            {discountTrapData.headline}
          </h2>

          <HeroStat
            value={discountTrapData.heroStat.value}
            label={discountTrapData.heroStat.label}
            sublabel={discountTrapData.heroStat.sublabel}
            color={discountTrapData.heroStat.color}
            glow={true}
          />

          {/* Stat Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {discountTrapData.statCards.map((stat, idx) => (
              <div key={idx} className={`transition-all duration-1000 delay-${idx * 100}`}>
                <div 
                  className="relative overflow-hidden backdrop-blur-xl border rounded-2xl p-8 group"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    opacity: isVisible('discount') ? 1 : 0,
                    transform: isVisible('discount') ? 'translateY(0)' : 'translateY(12px)',
                    transitionDelay: `${idx * 100}ms`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="font-black tabular-nums tracking-tight"
                        style={{ fontSize: typography.sizes.stat }}
                      >
                        {stat.value}
                      </div>
                      {stat.trend === 'up' ? (
                        <TrendingUp className="w-6 h-6" style={{ color: colors.mutedRed }} />
                      ) : (
                        <TrendingDown className="w-6 h-6" style={{ color: colors.mutedRed }} />
                      )}
                    </div>
                    <div 
                      className="mb-2 tracking-wide"
                      style={{
                        fontSize: typography.sizes.small,
                        fontWeight: typography.weights.semibold,
                        color: 'rgba(255, 255, 255, 0.9)',
                      }}
                    >
                      {stat.label}
                    </div>
                    <div 
                      className="tracking-wide"
                      style={{
                        fontSize: typography.sizes.micro,
                        color: 'rgba(255, 255, 255, 0.5)',
                      }}
                    >
                      {stat.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart and Diagram Row */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Line Chart */}
            <ChartContainer
              title={discountTrapData.chartData.title}
              theme="dark"
              delay={600}
              isVisible={isVisible('discount')}
            >
              <div className="relative h-72">
                <svg className="w-full h-full" viewBox="0 0 600 250" preserveAspectRatio="none">
                  {/* Grid lines */}
                  {[0, 25, 50, 75].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={250 - (y * 2.5)}
                      x2="600"
                      y2={250 - (y * 2.5)}
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="1"
                    />
                  ))}
                  
                  {/* Data line */}
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={colors.indigo} stopOpacity="0.6" />
                      <stop offset="100%" stopColor={colors.indigo} stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  
                  <path
                    d="M 0 190 L 85 175 L 170 165 L 255 150 L 340 135 L 425 105 L 510 75 L 600 40"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    fill="none"
                    filter="url(#glow)"
                    className={`transition-all duration-2000 ${
                      isVisible('discount') ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  
                  {/* Data points */}
                  {[
                    { x: 0, y: 190 }, { x: 85, y: 175 }, { x: 170, y: 165 }, { x: 255, y: 150 },
                    { x: 340, y: 135 }, { x: 425, y: 105 }, { x: 510, y: 75 }, { x: 600, y: 40 }
                  ].map((point, idx) => (
                    <g key={idx}>
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r="6"
                        fill={colors.indigo}
                        className={`transition-all duration-500 delay-${1000 + idx * 150}`}
                        style={{
                          opacity: isVisible('discount') ? 1 : 0,
                          transform: isVisible('discount') ? 'scale(1)' : 'scale(0)',
                          transformOrigin: `${point.x}px ${point.y}px`,
                        }}
                      />
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r="12"
                        fill="none"
                        stroke={colors.indigo}
                        strokeWidth="2"
                        className={`transition-all duration-500 delay-${1000 + idx * 150}`}
                        style={{
                          opacity: isVisible('discount') ? 0.3 : 0,
                          transform: isVisible('discount') ? 'scale(1)' : 'scale(0)',
                          transformOrigin: `${point.x}px ${point.y}px`,
                        }}
                      />
                    </g>
                  ))}
                </svg>
                
                {/* Year labels */}
                <div className="flex justify-between mt-4 px-2">
                  {discountTrapData.chartData.years.map((year, idx) => (
                    <div 
                      key={idx} 
                      className="font-medium tracking-wider tabular-nums"
                      style={{
                        fontSize: '10px',
                        color: 'rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      {year}
                    </div>
                  ))}
                </div>
              </div>
            </ChartContainer>

            {/* Circular Flow Diagram */}
            <ChartContainer
              title="The Conditioning Cycle"
              theme="dark"
              delay={800}
              isVisible={isVisible('discount')}
            >
              <div className="relative h-72 flex items-center justify-center">
                {/* Circular nodes */}
                {discountTrapData.cycleSteps.map((step, idx) => {
                  const positions = [
                    'top-0 left-1/2 -translate-x-1/2',
                    'right-0 top-1/2 -translate-y-1/2',
                    'bottom-0 left-1/2 -translate-x-1/2',
                    'left-0 top-1/2 -translate-y-1/2'
                  ];
                  
                  return (
                    <FlowNode
                      key={idx}
                      number={idx + 1}
                      label={step}
                      color={colors.indigo}
                      delay={1200 + idx * 200}
                      isVisible={isVisible('discount')}
                    />
                  );
                })}
                
                {/* Circular arrow path */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 300">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill={colors.indigo} opacity="0.6" />
                    </marker>
                  </defs>
                  <circle
                    cx="150"
                    cy="150"
                    r="90"
                    fill="none"
                    stroke={colors.indigo}
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    markerEnd="url(#arrowhead)"
                    className={`transition-all duration-2000 delay-2000`}
                    style={{ opacity: isVisible('discount') ? 0.3 : 0 }}
                  />
                </svg>
              </div>
            </ChartContainer>
          </div>

          <SourceCitation theme="dark">{discountTrapData.source}</SourceCitation>
        </div>
      </SectionWrapper>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent max-w-[1400px] mx-auto" />

      {/* ========================================
          SECTION 03 — TRADE DISRUPTION
          ======================================== */}
      <SectionWrapper id="trade" theme="light">
        <div 
          className={`transition-all duration-1200 ${
            isVisible('trade') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <SectionLabel theme="light">{tradeDisruptionData.label}</SectionLabel>
          
          <h2 
            className="text-center mb-8 leading-tight tracking-tight font-black"
            style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}
          >
            {tradeDisruptionData.headline}
          </h2>
          
          <p 
            className="text-center max-w-[700px] mx-auto mb-16 leading-relaxed tracking-wide"
            style={{
              fontSize: typography.sizes.body,
              color: 'rgba(14, 17, 23, 0.6)',
            }}
          >
            {tradeDisruptionData.subtitle}
          </p>

          {/* Primary Stat Block */}
          <div 
            className="bg-white border rounded-2xl p-14 mb-12 text-center shadow-sm max-w-[800px] mx-auto"
            style={{ borderColor: 'rgba(14, 17, 23, 0.1)' }}
          >
            <div 
              className="font-black leading-none mb-6 tabular-nums tracking-tighter"
              style={{
                fontSize: 'clamp(96px, 12vw, 150px)',
                color: tradeDisruptionData.primaryStat.color,
              }}
            >
              {tradeDisruptionData.primaryStat.value}
            </div>
            <div 
              className="mb-2 tracking-wide"
              style={{
                fontSize: typography.sizes.small,
                color: 'rgba(14, 17, 23, 0.7)',
              }}
            >
              {tradeDisruptionData.primaryStat.label}
            </div>
            <div 
              className="tracking-wide"
              style={{
                fontSize: typography.sizes.micro,
                color: 'rgba(14, 17, 23, 0.5)',
              }}
            >
              {tradeDisruptionData.primaryStat.sublabel}
            </div>
          </div>

          {/* Supporting Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {tradeDisruptionData.supportingStats.map((stat, idx) => (
              <StatCard
                key={idx}
                value={stat.value}
                label={stat.label}
                description={stat.description}
                delay={idx * 200}
                isVisible={isVisible('trade')}
              />
            ))}
          </div>

          {/* Bar Chart */}
          <ChartContainer
            title="Import Sources (% of Total)"
            theme="light"
            delay={600}
            isVisible={isVisible('trade')}
          >
            <div className="space-y-6">
              {tradeDisruptionData.importSources.map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className="font-semibold tracking-wide"
                      style={{
                        fontSize: typography.sizes.small,
                        color: 'rgba(14, 17, 23, 0.8)',
                      }}
                    >
                      {item.country}
                    </span>
                    <span 
                      className="font-black tabular-nums"
                      style={{
                        fontSize: typography.sizes.small,
                        color: colors.gray900,
                      }}
                    >
                      {item.value}%
                    </span>
                  </div>
                  <div 
                    className="h-3 rounded-full overflow-hidden"
                    style={{ backgroundColor: 'rgba(14, 17, 23, 0.05)' }}
                  >
                    <div 
                      className="h-full rounded-full transition-all duration-1500"
                      style={{ 
                        width: isVisible('trade') ? `${item.value}%` : '0%',
                        backgroundColor: colors.indigo,
                        boxShadow: `0 0 20px ${colors.indigo}40`,
                        transitionDelay: `${(idx + 1) * 200}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ChartContainer>

          <SourceCitation theme="light">{tradeDisruptionData.source}</SourceCitation>
        </div>
      </SectionWrapper>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent max-w-[1400px] mx-auto" />

      {/* ========================================
          SECTION 04 — AI TRANSFORMATION
          ======================================== */}
      <SectionWrapper id="ai" theme="dark">
        {/* Radial gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            opacity: 0.3,
            background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.15) 0%, transparent 60%)',
          }}
        />

        <div 
          className={`relative transition-all duration-1200 ${
            isVisible('ai') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <SectionLabel theme="dark">{aiTransformationData.label}</SectionLabel>
          
          <h2 
            className="text-center mb-8 leading-tight tracking-tight font-black"
            style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}
          >
            {aiTransformationData.headline}
          </h2>
          
          <p 
            className="text-center max-w-[700px] mx-auto mb-16 leading-relaxed tracking-wide"
            style={{
              fontSize: typography.sizes.body,
              color: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            {aiTransformationData.subtitle}
          </p>

          <HeroStat
            value={aiTransformationData.heroStat.value}
            label={aiTransformationData.heroStat.label}
            sublabel={aiTransformationData.heroStat.sublabel}
            color={aiTransformationData.heroStat.color}
            glow={true}
          />

          {/* AI Adoption Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {aiTransformationData.adoptionCards.map((stat, idx) => (
              <GlassCard
                key={idx}
                value={stat.value}
                label={stat.label}
                description={stat.description}
                delay={idx * 200}
                isVisible={isVisible('ai')}
              />
            ))}
          </div>

          {/* Area Chart */}
          <ChartContainer
            title={aiTransformationData.chartData.title}
            theme="dark"
            delay={600}
            isVisible={isVisible('ai')}
          >
            <div className="h-64 relative">
              <svg className="w-full h-full" viewBox="0 0 700 220" preserveAspectRatio="none">
                {/* Grid lines */}
                {[0, 25, 50, 75, 100].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={220 - (y * 2.2)}
                    x2="700"
                    y2={220 - (y * 2.2)}
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="1"
                  />
                ))}
                
                {/* Area gradient */}
                <defs>
                  <linearGradient id="aiAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={colors.emerald} stopOpacity="0.4" />
                    <stop offset="100%" stopColor={colors.emerald} stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                
                <path
                  d={`${aiTransformationData.chartData.path} L 700 220 L 0 220 Z`}
                  fill="url(#aiAreaGradient)"
                  className={`transition-all duration-2000`}
                  style={{ opacity: isVisible('ai') ? 1 : 0 }}
                />
                
                <path
                  d={aiTransformationData.chartData.path}
                  stroke={colors.emerald}
                  strokeWidth="3"
                  fill="none"
                  filter="url(#glow)"
                  className={`transition-all duration-2000`}
                  style={{ opacity: isVisible('ai') ? 1 : 0 }}
                />
              </svg>
              
              <div className="flex justify-between mt-4">
                {aiTransformationData.chartData.labels.map((label, idx) => (
                  <div 
                    key={idx} 
                    className="font-medium tracking-wider"
                    style={{
                      fontSize: '10px',
                      color: 'rgba(255, 255, 255, 0.4)',
                    }}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </ChartContainer>

          {/* Flow Diagram */}
          <div className="mt-12">
            <div className="grid grid-cols-5 gap-3">
              {aiTransformationData.flowSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div 
                    className="border-2 rounded-xl p-4 text-center transition-all duration-500 bg-gradient-to-br from-gray-50/5 to-white/5"
                    style={{
                      borderColor: `${colors.indigo}33`,
                      opacity: isVisible('ai') ? 1 : 0,
                      transform: isVisible('ai') ? 'translateY(0)' : 'translateY(4px)',
                      transitionDelay: `${idx * 100}ms`,
                    }}
                  >
                    <div className="text-2xl mb-2">{step.emoji}</div>
                    <div 
                      className="font-medium"
                      style={{
                        fontSize: typography.sizes.micro,
                        color: 'rgba(255, 255, 255, 0.9)',
                      }}
                    >
                      {step.label}
                    </div>
                  </div>
                  {idx < 4 && (
                    <div 
                      className="hidden md:block absolute top-1/2 -right-1.5 text-lg"
                      style={{ color: colors.indigo }}
                    >
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Risk Alert */}
          <div className="mt-12">
            <AlertBox
              title={aiTransformationData.riskAlert.title}
              description={aiTransformationData.riskAlert.description}
              icon={AlertTriangle}
              variant="danger"
              delay={800}
              isVisible={isVisible('ai')}
            />
          </div>

          <SourceCitation theme="dark">{aiTransformationData.source}</SourceCitation>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer 
        className="border-t px-6 py-16"
        style={{
          backgroundColor: colors.warmIvory,
          borderColor: 'rgba(14, 17, 23, 0.1)',
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div 
              className="tracking-wider"
              style={{
                fontSize: typography.sizes.micro,
                color: 'rgba(14, 17, 23, 0.4)',
              }}
            >
              {footerData.copyright}
            </div>
            
            <button
              onClick={() => onNavigate?.(footerData.backDestination)}
              className="flex items-center gap-2 transition-colors tracking-wide font-medium"
              style={{
                fontSize: typography.sizes.micro,
                color: 'rgba(14, 17, 23, 0.6)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.gray900}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(14, 17, 23, 0.6)'}
            >
              {footerData.backLabel}
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
