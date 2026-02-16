/**
 * Fashion 2026 V4 — Reusable Components
 * 
 * Production-ready modular components
 * Following atomic design methodology
 */

'use client';

import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { colors, typography, spacing, elevation, motion } from './design-system';

// 1️⃣ SECTION LABEL
interface SectionLabelProps {
  children: ReactNode;
  theme?: 'dark' | 'light';
}

export function SectionLabel({ children, theme = 'dark' }: SectionLabelProps) {
  const color = theme === 'dark' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(14, 17, 23, 0.4)';
  
  return (
    <div 
      className="text-center mb-10"
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

// 2️⃣ HERO STAT
interface HeroStatProps {
  value: string;
  label: string;
  sublabel?: string;
  color?: string;
  glow?: boolean;
}

export function HeroStat({ value, label, sublabel, color = colors.white, glow = false }: HeroStatProps) {
  return (
    <div className="text-center mb-16">
      <div 
        className="font-black leading-none mb-6 tabular-nums tracking-tighter"
        style={{
          fontSize: 'clamp(96px, 12vw, 160px)',
          color,
          textShadow: glow ? `0 0 80px ${color}40` : 'none',
        }}
      >
        {value}
      </div>
      <div 
        style={{
          fontSize: typography.sizes.small,
          color: 'rgba(255, 255, 255, 0.6)',
          textTransform: 'uppercase',
          letterSpacing: typography.tracking.wider,
          fontWeight: typography.weights.medium,
        }}
      >
        {label}
      </div>
      {sublabel && (
        <div 
          className="mt-2"
          style={{
            fontSize: typography.sizes.micro,
            color: 'rgba(255, 255, 255, 0.4)',
          }}
        >
          {sublabel}
        </div>
      )}
    </div>
  );
}

// 3️⃣ GLASS CARD
interface GlassCardProps {
  value: string;
  label: string;
  description: string;
  icon?: LucideIcon;
  iconColor?: string;
  trend?: 'up' | 'down' | 'neutral';
  delay?: number;
  isVisible?: boolean;
}

export function GlassCard({ 
  value, 
  label, 
  description, 
  icon: Icon, 
  iconColor = colors.indigo,
  trend = 'neutral',
  delay = 0,
  isVisible = true 
}: GlassCardProps) {
  return (
    <div
      className={`relative overflow-hidden backdrop-blur-xl border rounded-2xl p-8 transition-all duration-1000 hover:scale-[1.02] group`}
      style={{
        backgroundColor: elevation.glass.dark,
        borderColor: elevation.glass.border,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Hover glow */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      <div className="relative">
        {Icon && (
          <Icon 
            className="mb-6 transition-transform duration-500 group-hover:scale-110" 
            style={{ width: 36, height: 36, color: iconColor }} 
          />
        )}
        
        <div 
          className="font-black mb-3 tabular-nums tracking-tight"
          style={{ fontSize: typography.sizes.stat }}
        >
          {value}
        </div>
        
        <div 
          className="mb-2 tracking-wide"
          style={{
            fontSize: typography.sizes.small,
            fontWeight: typography.weights.semibold,
            color: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          {label}
        </div>
        
        <div 
          className="tracking-wide"
          style={{
            fontSize: typography.sizes.micro,
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
}

// 4️⃣ STAT CARD (Light Theme)
interface StatCardProps {
  value: string;
  label: string;
  description: string;
  delay?: number;
  isVisible?: boolean;
}

export function StatCard({ value, label, description, delay = 0, isVisible = true }: StatCardProps) {
  return (
    <div
      className="bg-white border rounded-2xl p-8 transition-all duration-1000 hover:shadow-lg"
      style={{
        borderColor: 'rgba(14, 17, 23, 0.1)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div 
        className="font-black mb-3 tabular-nums tracking-tight"
        style={{ 
          fontSize: typography.sizes.stat,
          color: colors.gray900,
        }}
      >
        {value}
      </div>
      
      <div 
        className="mb-2 tracking-wide"
        style={{
          fontSize: typography.sizes.small,
          fontWeight: typography.weights.semibold,
          color: 'rgba(14, 17, 23, 0.9)',
        }}
      >
        {label}
      </div>
      
      <div 
        className="tracking-wide"
        style={{
          fontSize: typography.sizes.micro,
          color: 'rgba(14, 17, 23, 0.5)',
        }}
      >
        {description}
      </div>
    </div>
  );
}

// 5️⃣ CHART CONTAINER
interface ChartContainerProps {
  title: string;
  children: ReactNode;
  theme?: 'dark' | 'light';
  delay?: number;
  isVisible?: boolean;
}

export function ChartContainer({ 
  title, 
  children, 
  theme = 'dark', 
  delay = 0,
  isVisible = true 
}: ChartContainerProps) {
  const isDark = theme === 'dark';
  
  return (
    <div
      className={`backdrop-blur-xl border rounded-2xl p-10 transition-all duration-1000`}
      style={{
        backgroundColor: isDark ? elevation.glass.dark : colors.white,
        borderColor: isDark ? elevation.glass.border : 'rgba(14, 17, 23, 0.1)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div 
        className="mb-8"
        style={{
          fontSize: typography.sizes.micro,
          fontWeight: typography.weights.semibold,
          color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(14, 17, 23, 0.6)',
          textTransform: 'uppercase',
          letterSpacing: typography.tracking.wider,
        }}
      >
        {title}
      </div>
      
      {children}
    </div>
  );
}

// 6️⃣ FLOW NODE
interface FlowNodeProps {
  number: number;
  label: string;
  color?: string;
  delay?: number;
  isVisible?: boolean;
}

export function FlowNode({ 
  number, 
  label, 
  color = colors.indigo, 
  delay = 0,
  isVisible = true 
}: FlowNodeProps) {
  return (
    <div
      className="backdrop-blur-md border-2 rounded-2xl px-6 py-4 text-center min-w-[140px] transition-all duration-700"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: `${color}66`,
        boxShadow: `0 8px 24px ${color}10`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.95)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div 
        className="font-black mb-1"
        style={{
          fontSize: '28px',
          color,
        }}
      >
        {number}
      </div>
      <div 
        className="leading-tight tracking-wide"
        style={{
          fontSize: typography.sizes.micro,
          fontWeight: typography.weights.semibold,
          color: 'rgba(255, 255, 255, 0.9)',
        }}
      >
        {label}
      </div>
    </div>
  );
}

// 7️⃣ ALERT BOX
interface AlertBoxProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  variant?: 'danger' | 'warning' | 'info';
  delay?: number;
  isVisible?: boolean;
}

export function AlertBox({ 
  title, 
  description, 
  icon: Icon, 
  variant = 'danger',
  delay = 0,
  isVisible = true 
}: AlertBoxProps) {
  const variantColors = {
    danger: { bg: 'rgba(220, 38, 38, 0.1)', border: 'rgba(220, 38, 38, 0.2)', icon: colors.mutedRed },
    warning: { bg: 'rgba(245, 158, 11, 0.1)', border: 'rgba(245, 158, 11, 0.2)', icon: colors.amber },
    info: { bg: 'rgba(99, 102, 241, 0.1)', border: 'rgba(99, 102, 241, 0.2)', icon: colors.indigo },
  };
  
  const colorScheme = variantColors[variant];
  
  return (
    <div
      className="backdrop-blur-xl border rounded-2xl p-8 flex items-start gap-4 transition-all duration-1000"
      style={{
        backgroundColor: colorScheme.bg,
        borderColor: colorScheme.border,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {Icon && (
        <Icon 
          className="flex-shrink-0 mt-1" 
          style={{ width: 24, height: 24, color: colorScheme.icon }} 
        />
      )}
      
      <div>
        <div 
          className="mb-2 tracking-wide"
          style={{
            fontSize: typography.sizes.small,
            fontWeight: typography.weights.bold,
            color: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          {title}
        </div>
        
        <div 
          className="tracking-wide"
          style={{
            fontSize: typography.sizes.micro,
            color: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
}

// 8️⃣ SOURCE CITATION
interface SourceCitationProps {
  children: ReactNode;
  theme?: 'dark' | 'light';
}

export function SourceCitation({ children, theme = 'dark' }: SourceCitationProps) {
  const color = theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(14, 17, 23, 0.3)';
  
  return (
    <div 
      className="text-center mt-12 tracking-wider"
      style={{
        fontSize: typography.sizes.micro,
        color,
      }}
    >
      {children}
    </div>
  );
}

// 9️⃣ SECTION WRAPPER
interface SectionWrapperProps {
  id: string;
  theme?: 'dark' | 'light';
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, theme = 'dark', children, className = '' }: SectionWrapperProps) {
  const bg = theme === 'dark' ? colors.darkForest : colors.warmIvory;
  const textColor = theme === 'dark' ? colors.white : colors.gray900;
  
  return (
    <section
      data-section={id}
      className={`min-h-screen relative px-6 py-24 flex items-center ${className}`}
      style={{
        backgroundColor: bg,
        color: textColor,
      }}
    >
      <div className="relative max-w-[1400px] mx-auto w-full">
        {children}
      </div>
    </section>
  );
}
