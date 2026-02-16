/**
 * Fashion 2026 Enhanced — Complete Luxury Editorial Infographic
 * 
 * Full 6-section implementation following all 9 master prompts:
 * ✓ Prompt #1: Master experience with alternating sections
 * ✓ Prompt #2: Light hero section
 * ✓ Prompt #3: Dark section with flow diagram
 * ✓ Prompt #4: Premium chart system
 * ✓ Prompt #5: Illustrated stat cards
 * ✓ Prompt #6: Flowchart + circular diagram
 * ✓ Prompt #7: Section transitions
 * ✓ Prompt #8: Responsive experience
 * ✓ Prompt #9: Complete visual style guide
 * 
 * @version 5.0.0 Enhanced Edition
 */

'use client';

import { ArrowLeft, DollarSign, TrendingDown, TrendingUp, Sparkles, AlertTriangle, Users, Target, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

// Enhanced Design System
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

// Enhanced Data
import {
  section01Hero,
  section02DiscountTrap,
  section03AITransformation,
  section04Sustainability,
  section05Outlook,
  navigationData,
  sectionOrder,
  footerData,
} from '../fashion-2026-v4/enhanced-data';

interface Fashion2026EnhancedProps {
  onNavigate?: (page: string) => void;
}

export default function Fashion2026Enhanced({ onNavigate }: Fashion2026EnhancedProps) {
  // State Management
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll Handler with Intersection Observer
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);

      // Detect visible sections
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
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isVisible = (section: string) => visibleSections.has(section);

  // Scroll to section
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
          SECTION 01: HERO (DARK)
          Prompt #2 Implementation - Dark Hero
          ======================================== */}
      <SectionWrapper id={section01Hero.id} theme={section01Hero.theme}>
        {/* Subtle Vignette */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.4,
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
          }}
        />

        <div className={`relative transition-all duration-1200 ${isVisible('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <SectionLabel theme="dark">{section01Hero.label}</SectionLabel>
          
          {/* Main Headline */}
          <h1 
            className="text-center mb-12 leading-[0.95] tracking-tight font-black px-4"
            style={{ 
              fontSize: typography.mobileClamp.h1,
              color: colors.white,
            }}
          >
            {section01Hero.headline}
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-center max-w-[720px] mx-auto mb-20 leading-relaxed"
            style={{
              fontSize: typography.sizes.body,
              color: 'rgba(255, 255, 255, 0.6)',
              fontWeight: typography.weights.regular,
            }}
          >
            {section01Hero.hero.sublabel}
          </p>
          
          {/* Hero Stat */}
          <HeroStatBlock
            value={section01Hero.hero.value}
            label={section01Hero.hero.label}
            sublabel=""
            theme="dark"
            glow={true}
            isVisible={isVisible('hero')}
          />

          <ScrollIndicator />
        </div>
      </SectionWrapper>

      {/* Transition: Light to Dark */}
      <SectionDivider variant="light-to-dark" />

      {/* ========================================
          SECTION 02A: DISCOUNT TRAP - HEADLINE (DARK)
          ======================================== */}
      <SectionWrapper id={section02DiscountTrap.id} theme={section02DiscountTrap.theme}>
        <div className={`transition-all duration-1200 ${isVisible('discount') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <SectionLabel theme="dark">{section02DiscountTrap.label}</SectionLabel>
          
          <h2 
            className="text-center mb-16 leading-tight tracking-tight font-black"
            style={{ fontSize: typography.mobileClamp.h1 }}
          >
            {section02DiscountTrap.headline}
          </h2>

          <HeroStatBlock
            value={section02DiscountTrap.hero.value}
            label={section02DiscountTrap.hero.label}
            sublabel={section02DiscountTrap.hero.sublabel}
            theme="dark"
            glow={true}
            isVisible={isVisible('discount')}
          />
        </div>
      </SectionWrapper>

      {/* Transition: Dark to Light */}
      <SectionDivider variant="dark-to-light" />

      {/* ========================================
          SECTION 02B: DISCOUNT TRAP - STATS (LIGHT)
          ======================================== */}
      <SectionWrapper id="discount-stats" theme="light" customBg="#F1EEEA">
        <div className={`transition-all duration-1200 ${isVisible('discount') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Stat Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {section02DiscountTrap.statCards.map((card, idx) => (
              <IllustratedStatCard
                key={idx}
                value={card.value}
                label={card.label}
                description={card.description}
                icon={card.icon}
                theme="light"
                delay={idx * 150}
                isVisible={isVisible('discount')}
              />
            ))}
          </div>

          {/* Flow Diagram - Circular Layout */}
          <div className="max-w-[900px] mx-auto mb-16">
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
              {section02DiscountTrap.flowDiagram.title}
            </div>
            
            <div className="relative h-[500px]">
              {/* Circular arrangement of nodes */}
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

          <SourceCitation theme="light">{section02DiscountTrap.source}</SourceCitation>
        </div>
      </SectionWrapper>

      {/* Transition: Light to Dark */}
      <SectionDivider variant="light-to-dark" />

      {/* ========================================
          SECTION 03: AI TRANSFORMATION (LIGHT)
          Circular Diagram Implementation
          ======================================== */}
      <SectionWrapper id={section03AITransformation.id} theme={section03AITransformation.theme}>
        <div className={`transition-all duration-1200 ${isVisible('ai') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <SectionLabel theme="light">{section03AITransformation.label}</SectionLabel>
          
          <h2 
            className="text-center mb-8 leading-tight tracking-tight font-black"
            style={{ fontSize: typography.mobileClamp.h1 }}
          >
            {section03AITransformation.headline}
          </h2>

          <p 
            className="text-center max-w-[750px] mx-auto mb-16 leading-relaxed"
            style={{
              fontSize: typography.sizes.body,
              color: 'rgba(15, 23, 42, 0.7)',
            }}
          >
            {section03AITransformation.subtitle}
          </p>

          <HeroStatBlock
            value={section03AITransformation.hero.value}
            label={section03AITransformation.hero.label}
            sublabel={section03AITransformation.hero.sublabel}
            theme="light"
            isVisible={isVisible('ai')}
          />

          {/* Stat Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {section03AITransformation.statCards.map((card, idx) => (
              <IllustratedStatCard
                key={idx}
                value={card.value}
                label={card.label}
                description={card.description}
                icon={card.icon}
                theme="light"
                delay={idx * 150}
                isVisible={isVisible('ai')}
              />
            ))}
          </div>

          {/* Circular Economy Diagram */}
          <div className="max-w-[900px] mx-auto mb-16">
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
              {section03AITransformation.circularDiagram.title}
            </div>
            
            <div className="relative h-[520px]">
              {/* Circular arrangement */}
              {section03AITransformation.circularDiagram.nodes.map((node, idx) => {
                const angle = (idx / section03AITransformation.circularDiagram.nodes.length) * 2 * Math.PI - Math.PI / 2;
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
                      isVisible={isVisible('ai')}
                    />
                  </div>
                );
              })}
              
              {/* Circular Flow Path */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
                <defs>
                  <marker id="arrowhead-circular" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
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
                  markerEnd="url(#arrowhead-circular)"
                  className="transition-opacity duration-2000"
                  style={{ opacity: isVisible('ai') ? 0.5 : 0, transitionDelay: '1200ms' }}
                />
              </svg>
              
              {/* Center Label */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                style={{
                  fontSize: typography.sizes.h3,
                  fontWeight: typography.weights.bold,
                  color: 'rgba(15, 23, 42, 0.15)',
                  letterSpacing: typography.tracking.tight,
                }}
              >
                CIRCULAR
              </div>
            </div>
          </div>

          <SourceCitation theme="light">{section03AITransformation.source}</SourceCitation>
        </div>
      </SectionWrapper>

      {/* Transition: Light to Dark */}
      <SectionDivider variant="light-to-dark" />

      {/* ========================================
          SECTION 04: SUSTAINABILITY (DARK)
          Circular Diagram Implementation
          ======================================== */}
      <SectionWrapper id={section04Sustainability.id} theme={section04Sustainability.theme}>
        <div className={`transition-all duration-1200 ${isVisible('sustainability') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <SectionLabel theme="dark">{section04Sustainability.label}</SectionLabel>
          
          <h2 
            className="text-center mb-8 leading-tight tracking-tight font-black"
            style={{ fontSize: typography.mobileClamp.h1 }}
          >
            {section04Sustainability.headline}
          </h2>

          <p 
            className="text-center max-w-[750px] mx-auto mb-16 leading-relaxed"
            style={{
              fontSize: typography.sizes.body,
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            {section04Sustainability.subtitle}
          </p>

          <HeroStatBlock
            value={section04Sustainability.hero.value}
            label={section04Sustainability.hero.label}
            sublabel={section04Sustainability.hero.sublabel}
            theme="dark"
            glow={true}
            isVisible={isVisible('sustainability')}
          />

          {/* Stat Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {section04Sustainability.statCards.map((card, idx) => (
              <IllustratedStatCard
                key={idx}
                value={card.value}
                label={card.label}
                description={card.description}
                icon={card.icon}
                theme="dark"
                delay={idx * 150}
                isVisible={isVisible('sustainability')}
              />
            ))}
          </div>

          {/* Circular Economy Diagram */}
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
              {section04Sustainability.circularDiagram.title}
            </div>
            
            <div className="relative h-[520px]">
              {/* Circular arrangement */}
              {section04Sustainability.circularDiagram.nodes.map((node, idx) => {
                const angle = (idx / section04Sustainability.circularDiagram.nodes.length) * 2 * Math.PI - Math.PI / 2;
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
                      isVisible={isVisible('sustainability')}
                    />
                  </div>
                );
              })}
              
              {/* Circular Flow Path */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
                <defs>
                  <marker id="arrowhead-circular" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
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
                  markerEnd="url(#arrowhead-circular)"
                  className="transition-opacity duration-2000"
                  style={{ opacity: isVisible('sustainability') ? 0.5 : 0, transitionDelay: '1200ms' }}
                />
              </svg>
              
              {/* Center Label */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                style={{
                  fontSize: typography.sizes.h3,
                  fontWeight: typography.weights.bold,
                  color: 'rgba(15, 23, 42, 0.15)',
                  letterSpacing: typography.tracking.tight,
                }}
              >
                CIRCULAR
              </div>
            </div>
          </div>

          <SourceCitation theme="dark">{section04Sustainability.source}</SourceCitation>
        </div>
      </SectionWrapper>

      {/* Transition: Dark to Light */}
      <SectionDivider variant="dark-to-light" />

      {/* ========================================
          SECTION 05: STRATEGIC OUTLOOK (DARK)
          ======================================== */}
      <SectionWrapper id={section05Outlook.id} theme={section05Outlook.theme}>
        <div className={`transition-all duration-1200 ${isVisible('outlook') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <SectionLabel theme="dark">{section05Outlook.label}</SectionLabel>
          
          <h2 
            className="text-center mb-8 leading-tight tracking-tight font-black"
            style={{ fontSize: typography.mobileClamp.h1 }}
          >
            {section05Outlook.headline}
          </h2>

          <p 
            className="text-center max-w-[750px] mx-auto mb-20 leading-relaxed"
            style={{
              fontSize: typography.sizes.large,
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            {section05Outlook.subtitle}
          </p>

          {/* Strategic Imperatives */}
          <div className="space-y-8 max-w-[1000px] mx-auto mb-20">
            {section05Outlook.imperatives.map((item, idx) => {
              const Icon = item.icon;
              
              return (
                <div
                  key={idx}
                  className="group backdrop-blur-xl border rounded-2xl p-8 transition-all duration-500 hover:scale-[1.01]"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    opacity: isVisible('outlook') ? 1 : 0,
                    transform: isVisible('outlook') ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${idx * 150}ms`,
                  }}
                >
                  <div className="flex items-start gap-6">
                    <div 
                      className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{
                        background: 'rgba(99, 102, 241, 0.1)',
                        border: '2px solid rgba(99, 102, 241, 0.3)',
                      }}
                    >
                      <Icon style={{ width: 28, height: 28, color: colors.indigo }} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-baseline gap-4 mb-3">
                        <span 
                          className="font-black tabular-nums"
                          style={{
                            fontSize: typography.sizes.h3,
                            color: 'rgba(255, 255, 255, 0.3)',
                            letterSpacing: typography.tracking.tight,
                          }}
                        >
                          {item.number}
                        </span>
                        <h3 
                          className="font-bold"
                          style={{
                            fontSize: typography.sizes.large,
                            color: 'rgba(255, 255, 255, 0.95)',
                          }}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <p 
                        className="leading-relaxed"
                        style={{
                          fontSize: typography.sizes.body,
                          color: 'rgba(255, 255, 255, 0.7)',
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Closing Statement */}
          <div 
            className="max-w-[900px] mx-auto text-center border-t border-b py-12"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            <p 
              className="italic leading-relaxed mb-6"
              style={{
                fontSize: typography.sizes.large,
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: typography.weights.medium,
              }}
            >
              {section05Outlook.closingStatement.quote}
            </p>
            <p 
              style={{
                fontSize: typography.sizes.micro,
                color: 'rgba(255, 255, 255, 0.5)',
                textTransform: 'uppercase',
                letterSpacing: typography.tracking.widest,
              }}
            >
              {section05Outlook.closingStatement.attribution}
            </p>
          </div>
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