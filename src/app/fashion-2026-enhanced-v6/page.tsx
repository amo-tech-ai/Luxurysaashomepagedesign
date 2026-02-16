/**
 * Fashion 2026 Enhanced V6 — Boardroom-Grade 6-Section Infographic
 * 
 * Following comprehensive style guide:
 * 1. Hero: $2 Trillion Crossroads (Light)
 * 2. Discount Trap: Margin Compression (Dark)
 * 3. AI Shopper: Algorithmic Consumer (Light)
 * 4. Gen Z: Cultural Reset (Dark)
 * 5. AI Operations: Pilots to Profit (Dark Premium)
 * 6. Resale: Circular Becomes Core (Dark + Emerald)
 * 
 * @version 6.0.0 — Executive Edition
 */

'use client';

import React from 'react';
import { ArrowLeft, DollarSign, TrendingDown, Sparkles, Users, Target, Zap, RefreshCcw } from 'lucide-react';
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Design System
import { colors, typography, motion } from '../fashion-2026-v4/enhanced-design-system';

// Premium Components
import {
  HeroStatBlock,
  SectionLabel,
  ScrollIndicator,
  IllustratedStatCard,
  FlowNode,
  ArrowConnector,
  ChartContainer,
  SectionWrapper,
  SectionDivider,
  ProgressDots,
  SourceCitation,
} from '../fashion-2026-v4/premium-components';

// Enhanced Data V6
import {
  section01Hero,
  section02DiscountTrap,
  section03AIShopper,
  section04GenZ,
  section05AIOperations,
  section06Resale,
  navigationData,
  sectionOrder,
  footerData,
} from '../fashion-2026-v4/enhanced-data-v6';

interface Fashion2026EnhancedV6Props {
  onNavigate?: (page: string) => void;
}

export default function Fashion2026EnhancedV6({ onNavigate }: Fashion2026EnhancedV6Props) {
  // State Management
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);

      const sections = document.querySelectorAll('[data-section]');
      const newVisible = new Set<string>();
      let mostVisibleSection = 'hero';
      let maxVisibility = 0;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visibility = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / window.innerHeight));
        
        if (rect.top < window.innerHeight * 0.75) {
          newVisible.add(section.getAttribute('data-section') || '');
        }
        
        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleSection = section.getAttribute('data-section') || 'hero';
        }
      });
      
      setVisibleSections(newVisible);
      setActiveSection(mostVisibleSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isVisible = (section: string) => visibleSections.has(section);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.warmIvory }}>
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 z-50"
        style={{ height: '3px', backgroundColor: 'rgba(15, 23, 42, 0.08)' }}
      >
        <div 
          className="h-full transition-all duration-300"
          style={{ width: `${scrollProgress}%`, backgroundColor: colors.indigo }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-8 z-40">
        <button
          onClick={() => onNavigate?.(navigationData.backDestination)}
          className="flex items-center gap-2 transition-all duration-300 backdrop-blur-md px-6 py-3 rounded-xl border hover:shadow-lg"
          style={{
            color: 'rgba(15, 23, 42, 0.7)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: 'rgba(15, 23, 42, 0.1)',
          }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-semibold tracking-wide">{navigationData.backLabel}</span>
        </button>
      </nav>

      {/* Progress Dots */}
      <ProgressDots 
        sections={sectionOrder} 
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* ========================================
          SECTION 01: HERO (LIGHT)
          "$2 Trillion Crossroads"
          Layout: Centered hero stat + 3 cards + mini bar chart
          ======================================== */}
      <SectionWrapper id={section01Hero.id} theme={section01Hero.theme}>
        <div className={`transition-all duration-1200 ${isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <SectionLabel theme="light">{section01Hero.label}</SectionLabel>
          
          {/* Hero Stat */}
          <HeroStatBlock
            value={section01Hero.hero.value}
            label={section01Hero.hero.label}
            sublabel={section01Hero.hero.sublabel}
            theme="light"
            isVisible={isVisible('hero')}
          />

          {/* Three Stat Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {section01Hero.statCards.map((card, idx) => (
              <IllustratedStatCard
                key={idx}
                value={card.value}
                label={card.label}
                description={card.description}
                icon={card.icon}
                theme="light"
                delay={idx * 150}
                isVisible={isVisible('hero')}
              />
            ))}
          </div>

          {/* Strategic Takeaway */}
          <div 
            className="text-center max-w-[600px] mx-auto mb-16 px-8 py-6 rounded-2xl border"
            style={{
              backgroundColor: 'rgba(99, 102, 241, 0.04)',
              borderColor: 'rgba(99, 102, 241, 0.12)',
            }}
          >
            <p 
              className="font-semibold italic"
              style={{
                fontSize: typography.sizes.large,
                color: 'rgba(15, 23, 42, 0.85)',
              }}
            >
              {section01Hero.strategicTakeaway}
            </p>
          </div>

          {/* Mini Bar Chart Preview */}
          <ChartContainer
            title="Market Growth Trajectory"
            theme="light"
            delay={600}
            isVisible={isVisible('hero')}
          >
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={section01Hero.growthPreview}>
                <CartesianGrid strokeDasharray="none" stroke="rgba(15, 23, 42, 0.06)" />
                <XAxis 
                  dataKey="year" 
                  axisLine={{ stroke: 'rgba(15, 23, 42, 0.1)' }}
                  tick={{ fill: 'rgba(15, 23, 42, 0.5)', fontSize: 11 }}
                />
                <YAxis 
                  axisLine={{ stroke: 'rgba(15, 23, 42, 0.1)' }}
                  tick={{ fill: 'rgba(15, 23, 42, 0.5)', fontSize: 11 }}
                  tickFormatter={(value) => `$${value}T`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.98)',
                    border: '1px solid rgba(15, 23, 42, 0.1)',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                  formatter={(value) => [`$${value}T`, 'Market Size']}
                />
                <Bar dataKey="value" fill={colors.indigo} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          <ScrollIndicator />
        </div>
      </SectionWrapper>

      {/* Transition: Light to Dark */}
      <SectionDivider variant="light-to-dark" />

      {/* ========================================
          SECTION 02: DISCOUNT TRAP (DARK)
          "The Margin Compression Era"
          Layout: Stat left, Line chart right, Circular flow below
          ======================================== */}
      <SectionWrapper id={section02DiscountTrap.id} theme={section02DiscountTrap.theme}>
        <div className={`transition-all duration-1200 ${isVisible('discount') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <SectionLabel theme="dark">{section02DiscountTrap.label}</SectionLabel>
          
          <h2 
            className="text-center mb-16 leading-tight tracking-tight font-black"
            style={{ fontSize: typography.mobileClamp.h1, color: colors.white }}
          >
            {section02DiscountTrap.headline}
          </h2>

          {/* Layout: Hero Stat Left, Chart Right */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Left: Hero Stat */}
            <div>
              <HeroStatBlock
                value={section02DiscountTrap.hero.value}
                label={section02DiscountTrap.hero.label}
                sublabel={section02DiscountTrap.hero.sublabel}
                theme="dark"
                glow={true}
                isVisible={isVisible('discount')}
              />
            </div>

            {/* Right: Line Chart */}
            <ChartContainer
              title="Consumer Spending Behavior Shifts"
              theme="dark"
              delay={300}
              isVisible={isVisible('discount')}
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={section02DiscountTrap.lineChartData}>
                  <CartesianGrid strokeDasharray="none" stroke="rgba(255, 255, 255, 0.06)" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
                    tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 11 }}
                  />
                  <YAxis 
                    axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
                    tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 11 }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(14, 17, 23, 0.98)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '12px',
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="fullPrice" 
                    stroke={colors.emerald} 
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    name="Full Price"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="discount" 
                    stroke={colors.mutedRed} 
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    name="Discount Purchases"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>

          {/* Stat Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {section02DiscountTrap.statCards.map((card, idx) => (
              <IllustratedStatCard
                key={idx}
                value={card.value}
                label={card.label}
                description={card.description}
                icon={card.icon}
                theme="dark"
                delay={idx * 150}
                isVisible={isVisible('discount')}
              />
            ))}
          </div>

          {/* Circular Flow Diagram */}
          <div className="max-w-[900px] mx-auto mb-16">
            <div 
              className="text-center mb-12"
              style={{
                fontSize: typography.sizes.small,
                fontWeight: typography.weights.semibold,
                color: 'rgba(255, 255, 255, 0.7)',
                textTransform: 'uppercase',
                letterSpacing: typography.tracking.wider,
              }}
            >
              {section02DiscountTrap.flowDiagram.title}
            </div>
            
            <div className="relative h-[500px]">
              {section02DiscountTrap.flowDiagram.nodes.map((node, idx) => {
                const angle = (idx / section02DiscountTrap.flowDiagram.nodes.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={idx}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <FlowNode
                      label={node.label}
                      sublabel={node.sublabel}
                      variant={node.variant}
                      delay={idx * 250}
                      isVisible={isVisible('discount')}
                    />
                  </div>
                );
              })}
              
              {/* Circular Arrow Path */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                <defs>
                  <marker id="arrowhead-cycle" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                    <polygon points="0 0, 12 6, 0 12" fill={colors.indigo} opacity="0.5" />
                  </marker>
                </defs>
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="none"
                  stroke={colors.indigo}
                  strokeWidth="2"
                  strokeDasharray="12 8"
                  markerEnd="url(#arrowhead-cycle)"
                  className="transition-opacity duration-2000"
                  style={{ opacity: isVisible('discount') ? 0.4 : 0, transitionDelay: '1000ms' }}
                />
              </svg>
            </div>
          </div>

          {/* Strategic Insight */}
          <div 
            className="text-center max-w-[700px] mx-auto px-8 py-6 rounded-2xl border"
            style={{
              backgroundColor: 'rgba(99, 102, 241, 0.08)',
              borderColor: 'rgba(99, 102, 241, 0.2)',
            }}
          >
            <p 
              className="font-semibold italic"
              style={{
                fontSize: typography.sizes.large,
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              {section02DiscountTrap.strategicInsight}
            </p>
          </div>

          <SourceCitation theme="dark">{section02DiscountTrap.source}</SourceCitation>
        </div>
      </SectionWrapper>

      {/* Transition: Dark to Light */}
      <SectionDivider variant="dark-to-light" />

      {/* ========================================
          SECTION 03: AI SHOPPER (LIGHT)
          "The Algorithmic Consumer"
          Layout: Stat top, Area chart middle, Horizontal flow bottom
          ======================================== */}
      <SectionWrapper id={section03AIShopper.id} theme={section03AIShopper.theme}>
        <div className={`transition-all duration-1200 ${isVisible('ai-shopper') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <SectionLabel theme="light">{section03AIShopper.label}</SectionLabel>
          
          <h2 
            className="text-center mb-8 leading-tight tracking-tight font-black"
            style={{ fontSize: typography.mobileClamp.h1 }}
          >
            {section03AIShopper.headline}
          </h2>

          {/* Hero Stat */}
          <HeroStatBlock
            value={section03AIShopper.hero.value}
            label={section03AIShopper.hero.label}
            sublabel={section03AIShopper.hero.sublabel}
            theme="light"
            isVisible={isVisible('ai-shopper')}
          />

          {/* Stat Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {section03AIShopper.statCards.map((card, idx) => (
              <IllustratedStatCard
                key={idx}
                value={card.value}
                label={card.label}
                description={card.description}
                icon={card.icon}
                theme="light"
                delay={idx * 150}
                isVisible={isVisible('ai-shopper')}
              />
            ))}
          </div>

          {/* Exponential Area Chart */}
          <ChartContainer
            title="AI Shopping Search Growth (Exponential Curve)"
            theme="light"
            delay={600}
            isVisible={isVisible('ai-shopper')}
          >
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={section03AIShopper.areaChartData}>
                <defs>
                  <linearGradient id="colorSearches" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={colors.indigo} stopOpacity={0.3}/>
                    <stop offset="95%" stopColor={colors.indigo} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="none" stroke="rgba(15, 23, 42, 0.06)" />
                <XAxis 
                  dataKey="quarter" 
                  axisLine={{ stroke: 'rgba(15, 23, 42, 0.1)' }}
                  tick={{ fill: 'rgba(15, 23, 42, 0.5)', fontSize: 11 }}
                />
                <YAxis 
                  axisLine={{ stroke: 'rgba(15, 23, 42, 0.1)' }}
                  tick={{ fill: 'rgba(15, 23, 42, 0.5)', fontSize: 11 }}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.98)',
                    border: '1px solid rgba(15, 23, 42, 0.1)',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="searches" 
                  stroke={colors.indigo} 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorSearches)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>

          {/* Horizontal Flow Diagram */}
          <div className="mb-16 mt-20">
            <div 
              className="text-center mb-12"
              style={{
                fontSize: typography.sizes.small,
                fontWeight: typography.weights.semibold,
                color: 'rgba(15, 23, 42, 0.7)',
                textTransform: 'uppercase',
                letterSpacing: typography.tracking.wider,
              }}
            >
              {section03AIShopper.flowDiagram.title}
            </div>
            
            <div className="hidden md:flex items-center justify-center gap-4">
              {section03AIShopper.flowDiagram.nodes.map((node, idx) => (
                <React.Fragment key={idx}>
                  <FlowNode
                    label={node.label}
                    sublabel={node.sublabel}
                    icon={<span className="text-3xl">{node.emoji}</span>}
                    variant={node.variant}
                    delay={idx * 250}
                    isVisible={isVisible('ai-shopper')}
                  />
                  {idx < section03AIShopper.flowDiagram.nodes.length - 1 && (
                    <ArrowConnector 
                      direction="right" 
                      isVisible={isVisible('ai-shopper')} 
                      delay={(idx + 1) * 250 + 100}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
            
            {/* Mobile: Vertical Stack */}
            <div className="md:hidden flex flex-col items-center gap-4">
              {section03AIShopper.flowDiagram.nodes.map((node, idx) => (
                <React.Fragment key={idx}>
                  <FlowNode
                    label={node.label}
                    sublabel={node.sublabel}
                    icon={<span className="text-3xl">{node.emoji}</span>}
                    variant={node.variant}
                    delay={idx * 250}
                    isVisible={isVisible('ai-shopper')}
                  />
                  {idx < section03AIShopper.flowDiagram.nodes.length - 1 && (
                    <ArrowConnector 
                      direction="down" 
                      isVisible={isVisible('ai-shopper')} 
                      delay={(idx + 1) * 250 + 100}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Side Note */}
            <div 
              className="text-center mt-12 px-6 py-4 rounded-xl border max-w-[500px] mx-auto"
              style={{
                backgroundColor: 'rgba(220, 38, 38, 0.04)',
                borderColor: 'rgba(220, 38, 38, 0.15)',
              }}
            >
              <p 
                className="font-semibold"
                style={{
                  fontSize: typography.sizes.small,
                  color: colors.mutedRed,
                }}
              >
                ⚠️ {section03AIShopper.flowDiagram.sideNote}
              </p>
            </div>
          </div>

          {/* Strategic Insight */}
          <div 
            className="text-center max-w-[700px] mx-auto px-8 py-6 rounded-2xl border"
            style={{
              backgroundColor: 'rgba(99, 102, 241, 0.04)',
              borderColor: 'rgba(99, 102, 241, 0.12)',
            }}
          >
            <p 
              className="font-semibold italic"
              style={{
                fontSize: typography.sizes.large,
                color: 'rgba(15, 23, 42, 0.85)',
              }}
            >
              {section03AIShopper.strategicInsight}
            </p>
          </div>

          <SourceCitation theme="light">{section03AIShopper.source}</SourceCitation>
        </div>
      </SectionWrapper>

      {/* Transition: Light to Dark */}
      <SectionDivider variant="light-to-dark" />

      {/* ========================================
          SECTION 04: GEN Z REWIRING (DARK)
          "The Cultural Reset"
          Layout: Stat top, Dual-axis chart left, Circular ecosystem right
          ======================================== */}
      <SectionWrapper id={section04GenZ.id} theme={section04GenZ.theme}>
        <div className={`transition-all duration-1200 ${isVisible('gen-z') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <SectionLabel theme="dark">{section04GenZ.label}</SectionLabel>
          
          <h2 
            className="text-center mb-16 leading-tight tracking-tight font-black"
            style={{ fontSize: typography.mobileClamp.h1, color: colors.white }}
          >
            {section04GenZ.headline}
          </h2>

          {/* Hero Stat */}
          <HeroStatBlock
            value={section04GenZ.hero.value}
            label={section04GenZ.hero.label}
            sublabel={section04GenZ.hero.sublabel}
            theme="dark"
            glow={true}
            isVisible={isVisible('gen-z')}
          />

          {/* Stat Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {section04GenZ.statCards.map((card, idx) => (
              <IllustratedStatCard
                key={idx}
                value={card.value}
                label={card.label}
                description={card.description}
                icon={card.icon}
                theme="dark"
                delay={idx * 150}
                isVisible={isVisible('gen-z')}
              />
            ))}
          </div>

          {/* Layout: Dual-Axis Chart Left, Circular Ecosystem Right */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left: Dual-Axis Chart */}
            <ChartContainer
              title="AI Usage vs. Spending Share by Generation"
              theme="dark"
              delay={300}
              isVisible={isVisible('gen-z')}
            >
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={section04GenZ.dualAxisChartData}>
                  <CartesianGrid strokeDasharray="none" stroke="rgba(255, 255, 255, 0.06)" />
                  <XAxis 
                    dataKey="generation" 
                    axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
                    tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 11 }}
                  />
                  <YAxis 
                    yAxisId="left"
                    axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
                    tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 11 }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <YAxis 
                    yAxisId="right"
                    orientation="right"
                    axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
                    tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 11 }}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(14, 17, 23, 0.98)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '12px',
                    }}
                  />
                  <Legend />
                  <Bar yAxisId="left" dataKey="aiUsage" fill={colors.indigo} name="AI Usage %" radius={[8, 8, 0, 0]} />
                  <Bar yAxisId="right" dataKey="spendingShare" fill={colors.emerald} name="Spending Share %" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>

            {/* Right: Circular Ecosystem */}
            <div className="relative h-[400px]">
              <div 
                className="text-center mb-8"
                style={{
                  fontSize: typography.sizes.small,
                  fontWeight: typography.weights.semibold,
                  color: 'rgba(255, 255, 255, 0.7)',
                  textTransform: 'uppercase',
                  letterSpacing: typography.tracking.wider,
                }}
              >
                {section04GenZ.circularEcosystem.title}
              </div>
              
              {section04GenZ.circularEcosystem.nodes.map((node, idx) => {
                const angle = (idx / section04GenZ.circularEcosystem.nodes.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 140;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={idx}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <FlowNode
                      label={node.label}
                      sublabel={node.sublabel}
                      variant={node.variant}
                      delay={idx * 200}
                      isVisible={isVisible('gen-z')}
                    />
                  </div>
                );
              })}
              
              {/* Circular Arrow Path */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 350 350">
                <defs>
                  <marker id="arrowhead-genz" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                    <polygon points="0 0, 12 6, 0 12" fill={colors.emerald} opacity="0.6" />
                  </marker>
                </defs>
                <circle
                  cx="175"
                  cy="175"
                  r="140"
                  fill="none"
                  stroke={colors.emerald}
                  strokeWidth="3"
                  strokeDasharray="16 8"
                  markerEnd="url(#arrowhead-genz)"
                  className="transition-opacity duration-2000"
                  style={{ opacity: isVisible('gen-z') ? 0.5 : 0, transitionDelay: '1200ms' }}
                />
              </svg>
            </div>
          </div>

          {/* Strategic Insight */}
          <div 
            className="text-center max-w-[700px] mx-auto px-8 py-6 rounded-2xl border"
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
              borderColor: 'rgba(16, 185, 129, 0.2)',
            }}
          >
            <p 
              className="font-semibold italic"
              style={{
                fontSize: typography.sizes.large,
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              {section04GenZ.strategicInsight}
            </p>
          </div>

          <SourceCitation theme="dark">{section04GenZ.source}</SourceCitation>
        </div>
      </SectionWrapper>

      {/* ========================================
          SECTION 05: AI OPERATIONS (DARK PREMIUM)
          "From Pilots to Profit"
          Layout: Failure stat top, Grouped bars middle, Value chain flow bottom
          ======================================== */}
      <SectionWrapper id={section05AIOperations.id} theme={section05AIOperations.theme}>
        <div className={`transition-all duration-1200 ${isVisible('ai-operations') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <SectionLabel theme="dark">{section05AIOperations.label}</SectionLabel>
          
          <h2 
            className="text-center mb-16 leading-tight tracking-tight font-black"
            style={{ fontSize: typography.mobileClamp.h1, color: colors.white }}
          >
            {section05AIOperations.headline}
          </h2>

          {/* Hero Stat (Danger variant) */}
          <div className="text-center mb-12">
            <div 
              className="inline-block px-12 py-8 rounded-3xl border backdrop-blur-xl"
              style={{
                background: 'rgba(220, 38, 38, 0.08)',
                borderColor: 'rgba(220, 38, 38, 0.2)',
                boxShadow: '0 0 60px rgba(220, 38, 38, 0.15)',
              }}
            >
              <div 
                className="font-black tabular-nums leading-none mb-2"
                style={{
                  fontSize: typography.mobileClamp.hero,
                  color: colors.mutedRed,
                  letterSpacing: typography.tracking.tighter,
                }}
              >
                {section05AIOperations.hero.value}
              </div>
              <div 
                className="font-semibold"
                style={{
                  fontSize: typography.sizes.large,
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                {section05AIOperations.hero.label}
              </div>
              <div 
                className="mt-2"
                style={{
                  fontSize: typography.sizes.small,
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
              >
                {section05AIOperations.hero.sublabel}
              </div>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {section05AIOperations.statCards.map((card, idx) => (
              <IllustratedStatCard
                key={idx}
                value={card.value}
                label={card.label}
                description={card.description}
                icon={card.icon}
                theme="dark"
                delay={idx * 150}
                isVisible={isVisible('ai-operations')}
              />
            ))}
          </div>

          {/* Grouped Bar Chart */}
          <ChartContainer
            title="AI Impact Across Value Chain (Speed, Cost, ROI)"
            theme="dark"
            delay={600}
            isVisible={isVisible('ai-operations')}
          >
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={section05AIOperations.groupedBarData}>
                <CartesianGrid strokeDasharray="none" stroke="rgba(255, 255, 255, 0.06)" />
                <XAxis 
                  dataKey="stage" 
                  axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
                  tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 11 }}
                />
                <YAxis 
                  axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
                  tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 11 }}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(14, 17, 23, 0.98)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                />
                <Legend />
                <Bar dataKey="speed" fill={colors.indigo} name="Speed %" radius={[8, 8, 0, 0]} />
                <Bar dataKey="cost" fill={colors.emerald} name="Cost Reduction %" radius={[8, 8, 0, 0]} />
                <Bar dataKey="roi" fill={colors.neutralSlate} name="ROI %" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          {/* Horizontal Value Chain Flow */}
          <div className="mb-16 mt-20">
            <div 
              className="text-center mb-12"
              style={{
                fontSize: typography.sizes.small,
                fontWeight: typography.weights.semibold,
                color: 'rgba(255, 255, 255, 0.7)',
                textTransform: 'uppercase',
                letterSpacing: typography.tracking.wider,
              }}
            >
              {section05AIOperations.valueChainFlow.title}
            </div>
            
            <div className="hidden md:flex items-center justify-center gap-3 flex-wrap">
              {section05AIOperations.valueChainFlow.nodes.map((node, idx) => (
                <React.Fragment key={idx}>
                  <FlowNode
                    label={node.label}
                    sublabel={node.sublabel}
                    icon={<span className="text-2xl">{node.emoji}</span>}
                    variant={node.variant}
                    delay={idx * 200}
                    isVisible={isVisible('ai-operations')}
                  />
                  {idx < section05AIOperations.valueChainFlow.nodes.length - 1 && (
                    <ArrowConnector 
                      direction="right" 
                      isVisible={isVisible('ai-operations')} 
                      delay={(idx + 1) * 200 + 100}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
            
            {/* Mobile: Vertical Stack */}
            <div className="md:hidden flex flex-col items-center gap-4">
              {section05AIOperations.valueChainFlow.nodes.map((node, idx) => (
                <React.Fragment key={idx}>
                  <FlowNode
                    label={node.label}
                    sublabel={node.sublabel}
                    icon={<span className="text-2xl">{node.emoji}</span>}
                    variant={node.variant}
                    delay={idx * 200}
                    isVisible={isVisible('ai-operations')}
                  />
                  {idx < section05AIOperations.valueChainFlow.nodes.length - 1 && (
                    <ArrowConnector 
                      direction="down" 
                      isVisible={isVisible('ai-operations')} 
                      delay={(idx + 1) * 200 + 100}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Strategic Insight */}
          <div 
            className="text-center max-w-[700px] mx-auto px-8 py-6 rounded-2xl border"
            style={{
              backgroundColor: 'rgba(99, 102, 241, 0.08)',
              borderColor: 'rgba(99, 102, 241, 0.2)',
            }}
          >
            <p 
              className="font-semibold italic"
              style={{
                fontSize: typography.sizes.large,
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              {section05AIOperations.strategicInsight}
            </p>
          </div>

          <SourceCitation theme="dark">{section05AIOperations.source}</SourceCitation>
        </div>
      </SectionWrapper>

      {/* ========================================
          SECTION 06: RESALE REVOLUTION (DARK + EMERALD)
          "Circular Becomes Core"
          Layout: Stat top, Stacked area middle, Circular ecosystem bottom
          ======================================== */}
      <SectionWrapper id={section06Resale.id} theme={section06Resale.theme}>
        <div className={`transition-all duration-1200 ${isVisible('resale') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <SectionLabel theme="dark">{section06Resale.label}</SectionLabel>
          
          <h2 
            className="text-center mb-16 leading-tight tracking-tight font-black"
            style={{ fontSize: typography.mobileClamp.h1, color: colors.white }}
          >
            {section06Resale.headline}
          </h2>

          {/* Hero Stat (Emerald accent) */}
          <div className="text-center mb-12">
            <div 
              className="inline-block px-12 py-8 rounded-3xl border backdrop-blur-xl"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                borderColor: 'rgba(16, 185, 129, 0.2)',
                boxShadow: '0 0 60px rgba(16, 185, 129, 0.15)',
              }}
            >
              <div 
                className="font-black tabular-nums leading-none mb-2"
                style={{
                  fontSize: typography.mobileClamp.hero,
                  color: colors.emerald,
                  letterSpacing: typography.tracking.tighter,
                }}
              >
                {section06Resale.hero.value}
              </div>
              <div 
                className="font-semibold"
                style={{
                  fontSize: typography.sizes.large,
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                {section06Resale.hero.label}
              </div>
              <div 
                className="mt-2"
                style={{
                  fontSize: typography.sizes.small,
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
              >
                {section06Resale.hero.sublabel}
              </div>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {section06Resale.statCards.map((card, idx) => (
              <IllustratedStatCard
                key={idx}
                value={card.value}
                label={card.label}
                description={card.description}
                icon={card.icon}
                theme="dark"
                delay={idx * 150}
                isVisible={isVisible('resale')}
              />
            ))}
          </div>

          {/* Stacked Area Chart by Region */}
          <ChartContainer
            title="Global Resale Market Growth by Region ($B)"
            theme="dark"
            delay={600}
            isVisible={isVisible('resale')}
          >
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={section06Resale.stackedAreaData}>
                <defs>
                  <linearGradient id="colorAsia" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={colors.emerald} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={colors.emerald} stopOpacity={0.2}/>
                  </linearGradient>
                  <linearGradient id="colorNA" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={colors.indigo} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={colors.indigo} stopOpacity={0.2}/>
                  </linearGradient>
                  <linearGradient id="colorEurope" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={colors.neutralSlate} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={colors.neutralSlate} stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="none" stroke="rgba(255, 255, 255, 0.06)" />
                <XAxis 
                  dataKey="year" 
                  axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
                  tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 11 }}
                />
                <YAxis 
                  axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
                  tick={{ fill: 'rgba(255, 255, 255, 0.5)', fontSize: 11 }}
                  tickFormatter={(value) => `$${value}B`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(14, 17, 23, 0.98)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="asia" 
                  stackId="1"
                  stroke={colors.emerald} 
                  fill="url(#colorAsia)" 
                  name="Asia"
                />
                <Area 
                  type="monotone" 
                  dataKey="northAmerica" 
                  stackId="1"
                  stroke={colors.indigo} 
                  fill="url(#colorNA)" 
                  name="North America"
                />
                <Area 
                  type="monotone" 
                  dataKey="europe" 
                  stackId="1"
                  stroke={colors.neutralSlate} 
                  fill="url(#colorEurope)" 
                  name="Europe"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>

          {/* Circular Resale Ecosystem */}
          <div className="max-w-[900px] mx-auto mb-16 mt-20">
            <div 
              className="text-center mb-12"
              style={{
                fontSize: typography.sizes.small,
                fontWeight: typography.weights.semibold,
                color: 'rgba(255, 255, 255, 0.7)',
                textTransform: 'uppercase',
                letterSpacing: typography.tracking.wider,
              }}
            >
              {section06Resale.circularEcosystem.title}
            </div>
            
            <div className="relative h-[520px]">
              {section06Resale.circularEcosystem.nodes.map((node, idx) => {
                const angle = (idx / section06Resale.circularEcosystem.nodes.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 200;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={idx}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <FlowNode
                      label={node.label}
                      sublabel={node.sublabel}
                      variant={node.variant}
                      delay={idx * 200}
                      isVisible={isVisible('resale')}
                    />
                  </div>
                );
              })}
              
              {/* Circular Flow Path (Emerald) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
                <defs>
                  <marker id="arrowhead-resale" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                    <polygon points="0 0, 12 6, 0 12" fill={colors.emerald} opacity="0.6" />
                  </marker>
                </defs>
                <circle
                  cx="250"
                  cy="250"
                  r="200"
                  fill="none"
                  stroke={colors.emerald}
                  strokeWidth="3"
                  strokeDasharray="16 8"
                  markerEnd="url(#arrowhead-resale)"
                  className="transition-opacity duration-2000"
                  style={{ opacity: isVisible('resale') ? 0.5 : 0, transitionDelay: '1200ms' }}
                />
              </svg>
              
              {/* Center Label */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                style={{
                  fontSize: typography.sizes.h3,
                  fontWeight: typography.weights.bold,
                  color: 'rgba(16, 185, 129, 0.15)',
                  letterSpacing: typography.tracking.tight,
                }}
              >
                CIRCULAR
              </div>
            </div>
          </div>

          {/* Strategic Insight */}
          <div 
            className="text-center max-w-[700px] mx-auto px-8 py-6 rounded-2xl border"
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
              borderColor: 'rgba(16, 185, 129, 0.2)',
            }}
          >
            <p 
              className="font-semibold italic"
              style={{
                fontSize: typography.sizes.large,
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              {section06Resale.strategicInsight}
            </p>
          </div>

          <SourceCitation theme="dark">{section06Resale.source}</SourceCitation>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer 
        className="border-t px-8 py-20"
        style={{
          backgroundColor: colors.warmIvory,
          borderColor: 'rgba(15, 23, 42, 0.1)',
        }}
      >
        <div className="max-w-[1400px] mx-auto text-center space-y-6">
          <div 
            style={{
              fontSize: typography.sizes.micro,
              color: 'rgba(15, 23, 42, 0.5)',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            {footerData.disclaimer}
          </div>
          
          <div 
            style={{
              fontSize: typography.sizes.micro,
              color: 'rgba(15, 23, 42, 0.3)',
              letterSpacing: typography.tracking.wider,
            }}
          >
            {footerData.copyright}
          </div>
          
          <button
            onClick={() => onNavigate?.(footerData.backDestination)}
            className="inline-flex items-center gap-2 mt-8 transition-all duration-300 px-8 py-3 rounded-xl border hover:shadow-lg"
            style={{
              color: 'rgba(15, 23, 42, 0.7)',
              backgroundColor: colors.white,
              borderColor: 'rgba(15, 23, 42, 0.1)',
              fontSize: typography.sizes.small,
              fontWeight: typography.weights.semibold,
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            {footerData.backLabel}
          </button>
        </div>
      </footer>
    </div>
  );
}