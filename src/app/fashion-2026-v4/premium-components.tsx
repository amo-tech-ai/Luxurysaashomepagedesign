/**
 * Fashion 2026 V4 — Premium Components Library
 * 
 * Luxury editorial components following 9-step master prompts
 * Museum-quality, boardroom-grade UI elements
 */

'use client';

import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { colors, typography, spacing, elevation, cardRules, motion, diagramRules } from './enhanced-design-system';

// ========================================
// PROMPT #2: HERO SECTION COMPONENTS
// ========================================

interface HeroStatBlockProps {
  value: string;
  label: string;
  sublabel?: string;
  theme?: 'light' | 'dark';
  glow?: boolean;
  delay?: number;
  isVisible?: boolean;
}

export function HeroStatBlock({ 
  value, 
  label, 
  sublabel,
  theme = 'light',
  glow = false,
  delay = 0,
  isVisible = true 
}: HeroStatBlockProps) {
  const textColor = theme === 'light' ? colors.slate900 : colors.white;
  const subtleColor = theme === 'light' ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.6)';
  const microColor = theme === 'light' ? 'rgba(15, 23, 42, 0.5)' : 'rgba(255, 255, 255, 0.5)';
  
  return (
    <div 
      className="text-center transition-all duration-1000"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Mega Stat */}
      <div 
        className="font-black leading-none mb-8 tabular-nums"
        style={{
          fontSize: typography.mobileClamp.mega,
          color: textColor,
          letterSpacing: typography.tracking.tightest,
          textShadow: glow ? `0 0 80px ${colors.indigo}30` : 'none',
        }}
      >
        {value}
      </div>
      
      {/* Label */}
      <div 
        className="mb-3 max-w-[600px] mx-auto"
        style={{
          fontSize: typography.sizes.small,
          fontWeight: typography.weights.semibold,
          color: subtleColor,
          textTransform: 'uppercase',
          letterSpacing: typography.tracking.wider,
        }}
      >
        {label}
      </div>
      
      {/* Sublabel */}
      {sublabel && (
        <div 
          className="max-w-[500px] mx-auto"
          style={{
            fontSize: typography.sizes.micro,
            color: microColor,
            letterSpacing: typography.tracking.wide,
          }}
        >
          {sublabel}
        </div>
      )}
    </div>
  );
}

// Uppercase Section Label
interface SectionLabelProps {
  children: ReactNode;
  theme?: 'light' | 'dark';
}

export function SectionLabel({ children, theme = 'light' }: SectionLabelProps) {
  const color = theme === 'light' ? 'rgba(15, 23, 42, 0.4)' : 'rgba(255, 255, 255, 0.4)';
  
  return (
    <div 
      className="text-center mb-12"
      style={{
        fontSize: typography.sizes.micro,
        fontWeight: typography.weights.medium,
        textTransform: 'uppercase',
        letterSpacing: typography.tracking.widest,
        color,
      }}
    >
      {children}
    </div>
  );
}

// Scroll Indicator
export function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-3 mt-20 animate-bounce">
      <div 
        style={{
          fontSize: '10px',
          color: 'rgba(15, 23, 42, 0.4)',
          textTransform: 'uppercase',
          letterSpacing: typography.tracking.widest,
          fontWeight: typography.weights.medium,
        }}
      >
        Scroll to Explore
      </div>
      <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
        <rect x="1" y="1" width="18" height="30" rx="9" stroke="rgba(15, 23, 42, 0.3)" strokeWidth="1.5"/>
        <circle cx="10" cy="8" r="2" fill="rgba(15, 23, 42, 0.3)">
          <animate attributeName="cy" values="8;18;8" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

// ========================================
// PROMPT #5: ILLUSTRATED STAT CARDS
// ========================================

interface IllustratedStatCardProps {
  value: string;
  label: string;
  description: string;
  icon?: LucideIcon;
  iconColor?: string;
  theme?: 'light' | 'dark';
  delay?: number;
  isVisible?: boolean;
}

export function IllustratedStatCard({
  value,
  label,
  description,
  icon: Icon,
  iconColor = colors.indigo,
  theme = 'light',
  delay = 0,
  isVisible = true,
}: IllustratedStatCardProps) {
  const isLight = theme === 'light';
  
  const cardStyle = isLight ? {
    background: colors.white,
    border: `1px solid ${colors.slate200}`,
  } : {
    background: elevation.glass.dark.background,
    border: `1px solid ${elevation.glass.dark.border}`,
    backdropFilter: 'blur(20px)',
  };
  
  return (
    <div
      className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:shadow-xl"
      style={{
        ...cardStyle,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
      }}
    >
      {/* Background Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: isLight 
            ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, transparent 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%)',
        }}
      />
      
      {/* Icon */}
      {Icon && (
        <div className="relative mb-6">
          <Icon 
            className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" 
            style={{ 
              width: 44, 
              height: 44, 
              color: iconColor,
              opacity: 0.9,
            }} 
          />
        </div>
      )}
      
      {/* Stat */}
      <div 
        className="relative font-black mb-4 tabular-nums"
        style={{
          fontSize: cardRules.typography.statSize,
          fontWeight: cardRules.typography.statWeight,
          letterSpacing: cardRules.typography.statTracking,
          color: isLight ? colors.slate900 : colors.white,
        }}
      >
        {value}
      </div>
      
      {/* Label */}
      <div 
        className="relative mb-2"
        style={{
          fontSize: cardRules.typography.labelSize,
          fontWeight: cardRules.typography.labelWeight,
          letterSpacing: cardRules.typography.labelTracking,
          color: isLight ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        }}
      >
        {label}
      </div>
      
      {/* Description */}
      <div 
        className="relative leading-relaxed"
        style={{
          fontSize: cardRules.typography.descSize,
          fontWeight: cardRules.typography.descWeight,
          color: isLight ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.6)',
        }}
      >
        {description}
      </div>
      
      {/* Inner Glow on Hover */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: elevation.innerGlow,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

// ========================================
// PROMPT #6: FLOW DIAGRAM COMPONENTS
// ========================================

// Strategic Flow Node
interface FlowNodeProps {
  label: string;
  sublabel?: string;
  icon?: ReactNode;
  variant?: 'neutral' | 'growth' | 'risk';
  delay?: number;
  isVisible?: boolean;
}

export function FlowNode({
  label,
  sublabel,
  icon,
  variant = 'neutral',
  delay = 0,
  isVisible = true,
}: FlowNodeProps) {
  const variantStyle = diagramRules.node[variant];
  
  return (
    <div
      className="relative backdrop-blur-sm transition-all duration-700"
      style={{
        borderRadius: diagramRules.node.borderRadius,
        padding: diagramRules.node.padding,
        minWidth: diagramRules.node.minWidth,
        minHeight: diagramRules.node.minHeight,
        border: `${diagramRules.node.borderWidth} ${diagramRules.node.borderStyle} ${variantStyle.stroke}`,
        background: variantStyle.fill,
        boxShadow: variantStyle.shadow,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(12px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Icon */}
      {icon && (
        <div className="mb-3 flex justify-center">
          {icon}
        </div>
      )}
      
      {/* Label */}
      <div 
        className="text-center font-semibold leading-tight"
        style={{
          fontSize: diagramRules.typography.labelSize,
          fontWeight: diagramRules.typography.labelWeight,
          color: diagramRules.typography.labelColor,
        }}
      >
        {label}
      </div>
      
      {/* Sublabel */}
      {sublabel && (
        <div 
          className="text-center mt-2 leading-tight"
          style={{
            fontSize: diagramRules.typography.subLabelSize,
            fontWeight: diagramRules.typography.subLabelWeight,
            color: diagramRules.typography.subLabelColor,
          }}
        >
          {sublabel}
        </div>
      )}
    </div>
  );
}

// Arrow Connector
interface ArrowConnectorProps {
  direction?: 'right' | 'down';
  isVisible?: boolean;
  delay?: number;
}

export function ArrowConnector({ direction = 'right', isVisible = true, delay = 0 }: ArrowConnectorProps) {
  const isHorizontal = direction === 'right';
  
  return (
    <div 
      className={`flex items-center justify-center transition-opacity duration-700`}
      style={{
        opacity: isVisible ? 0.4 : 0,
        transitionDelay: `${delay}ms`,
      }}
    >
      {isHorizontal ? (
        <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
          <path 
            d="M 0 12 L 50 12" 
            stroke={diagramRules.arrow.stroke}
            strokeWidth={diagramRules.arrow.strokeWidth}
            strokeDasharray={diagramRules.arrow.dashArray}
          />
          <path 
            d="M 50 12 L 44 8 M 50 12 L 44 16" 
            stroke={diagramRules.arrow.markerColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="24" height="60" viewBox="0 0 24 60" fill="none">
          <path 
            d="M 12 0 L 12 50" 
            stroke={diagramRules.arrow.stroke}
            strokeWidth={diagramRules.arrow.strokeWidth}
            strokeDasharray={diagramRules.arrow.dashArray}
          />
          <path 
            d="M 12 50 L 8 44 M 12 50 L 16 44" 
            stroke={diagramRules.arrow.markerColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  );
}

// ========================================
// PROMPT #4: PREMIUM CHART CONTAINER
// ========================================

interface ChartContainerProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  theme?: 'light' | 'dark';
  delay?: number;
  isVisible?: boolean;
}

export function ChartContainer({
  title,
  subtitle,
  children,
  theme = 'light',
  delay = 0,
  isVisible = true,
}: ChartContainerProps) {
  const isLight = theme === 'light';
  
  const containerStyle = isLight ? {
    background: colors.white,
    border: `1px solid ${colors.slate200}`,
  } : {
    background: elevation.glass.dark.background,
    border: `1px solid ${elevation.glass.dark.border}`,
    backdropFilter: 'blur(20px)',
  };
  
  return (
    <div
      className="rounded-2xl p-10 transition-all duration-1000"
      style={{
        ...containerStyle,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Title */}
      <div 
        className="mb-2"
        style={{
          fontSize: typography.sizes.small,
          fontWeight: typography.weights.semibold,
          color: isLight ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.7)',
          textTransform: 'uppercase',
          letterSpacing: typography.tracking.wider,
        }}
      >
        {title}
      </div>
      
      {/* Subtitle */}
      {subtitle && (
        <div 
          className="mb-8"
          style={{
            fontSize: typography.sizes.micro,
            color: isLight ? 'rgba(15, 23, 42, 0.5)' : 'rgba(255, 255, 255, 0.5)',
          }}
        >
          {subtitle}
        </div>
      )}
      
      {/* Chart Content */}
      <div className="mt-8">
        {children}
      </div>
    </div>
  );
}

// ========================================
// SECTION WRAPPERS
// ========================================

interface SectionWrapperProps {
  id: string;
  theme: 'light' | 'dark';
  children: ReactNode;
  className?: string;
  customBg?: string;
}

export function SectionWrapper({ id, theme, children, className = '', customBg }: SectionWrapperProps) {
  const isLight = theme === 'light';
  
  return (
    <section
      id={id}
      data-section={id}
      className={`relative min-h-screen flex items-center px-6 py-32 ${className}`}
      style={{
        backgroundColor: customBg || (isLight ? colors.warmIvory : colors.deepForest),
        color: isLight ? colors.slate900 : colors.white,
      }}
    >
      {/* Grain Texture */}
      {!isLight && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.015,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />
      )}
      
      {/* Content Container */}
      <div className="relative max-w-[1400px] mx-auto w-full">
        {children}
      </div>
    </section>
  );
}

// ========================================
// PROMPT #7: SECTION TRANSITIONS
// ========================================

interface SectionDividerProps {
  variant: 'light-to-dark' | 'dark-to-light';
}

export function SectionDivider({ variant }: SectionDividerProps) {
  const gradient = variant === 'light-to-dark'
    ? `linear-gradient(180deg, ${colors.warmIvory} 0%, ${colors.deepForest} 100%)`
    : `linear-gradient(180deg, ${colors.deepForest} 0%, ${colors.warmIvory} 100%)`;
  
  return (
    <div 
      className="relative"
      style={{
        height: '120px',
        background: gradient,
        opacity: 0.9,
      }}
    >
      {/* Diagonal accent line */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(2deg, transparent 48%, rgba(99, 102, 241, 0.1) 50%, transparent 52%)',
        }}
      />
    </div>
  );
}

// ========================================
// PROGRESS INDICATOR (Sticky Dots)
// ========================================

interface ProgressDotsProps {
  sections: string[];
  activeSection: string;
  onSectionClick?: (section: string) => void;
}

export function ProgressDots({ sections, activeSection, onSectionClick }: ProgressDotsProps) {
  return (
    <div 
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3"
      style={{
        opacity: 0.8,
      }}
    >
      {sections.map((section) => {
        const isActive = section === activeSection;
        
        return (
          <button
            key={section}
            onClick={() => onSectionClick?.(section)}
            className="group transition-all duration-300"
            style={{
              width: isActive ? '12px' : '8px',
              height: isActive ? '12px' : '8px',
              borderRadius: '50%',
              background: isActive ? colors.indigo : 'rgba(255, 255, 255, 0.3)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
            onMouseEnter={(e) => {
              if (!isActive) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)';
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
            }}
            aria-label={`Go to ${section} section`}
          />
        );
      })}
    </div>
  );
}

// ========================================
// ADDITIONAL UTILITY COMPONENTS
// ========================================

interface SourceCitationProps {
  children: ReactNode;
  theme?: 'light' | 'dark';
}

export function SourceCitation({ children, theme = 'light' }: SourceCitationProps) {
  const color = theme === 'light' ? 'rgba(15, 23, 42, 0.4)' : 'rgba(255, 255, 255, 0.3)';
  
  return (
    <div 
      className="text-center mt-16 tracking-wider"
      style={{
        fontSize: typography.sizes.micro,
        color,
      }}
    >
      {children}
    </div>
  );
}