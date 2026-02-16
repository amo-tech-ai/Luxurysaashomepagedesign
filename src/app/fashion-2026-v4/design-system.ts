/**
 * Fashion 2026 V4 — Design System
 * 
 * Production-ready design tokens and constants
 * Following luxury editorial brand guidelines
 */

// 1️⃣ COLOR PALETTE
export const colors = {
  // Primary Backgrounds
  darkForest: '#0E1117',
  warmIvory: '#F1EEEA',
  
  // Accent Colors
  indigo: '#6366F1',
  emerald: '#10B981',
  mutedRed: '#DC2626',
  amber: '#F59E0B',
  
  // Neutrals
  white: '#FFFFFF',
  gray900: '#111827',
  gray800: '#1F2937',
  gray700: '#374151',
  gray600: '#4B5563',
  gray500: '#6B7280',
  gray400: '#9CA3AF',
  gray300: '#D1D5DB',
  gray200: '#E5E7EB',
  gray100: '#F3F4F6',
} as const;

// 2️⃣ TYPOGRAPHY SYSTEM
export const typography = {
  // Font Families
  fontSans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontMono: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace',
  
  // Font Sizes
  sizes: {
    hero: '160px',        // Primary stats
    heroMobile: '96px',   // Primary stats mobile
    h1: '72px',           // Section headlines
    h1Mobile: '48px',     // Section headlines mobile
    h2: '56px',           // Secondary headlines
    h2Mobile: '36px',     // Secondary headlines mobile
    stat: '52px',         // Card stats
    statMobile: '40px',   // Card stats mobile
    body: '16px',         // Body text
    bodyLarge: '18px',    // Large body
    small: '14px',        // Small text
    micro: '11px',        // Labels
  },
  
  // Font Weights
  weights: {
    black: 900,
    bold: 700,
    semibold: 600,
    medium: 500,
    regular: 400,
  },
  
  // Letter Spacing
  tracking: {
    tighter: '-0.02em',
    tight: '-0.01em',
    normal: '0',
    wide: '0.02em',
    wider: '0.05em',
    widest: '0.25em',
  },
  
  // Line Heights
  leading: {
    none: '1',
    tight: '1.1',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
} as const;

// 3️⃣ SPACING SYSTEM (8px base)
export const spacing = {
  px: '1px',
  0: '0',
  1: '4px',      // 0.25rem
  2: '8px',      // 0.5rem - base unit
  3: '12px',     // 0.75rem
  4: '16px',     // 1rem
  5: '20px',     // 1.25rem
  6: '24px',     // 1.5rem
  8: '32px',     // 2rem
  10: '40px',    // 2.5rem
  12: '48px',    // 3rem
  14: '56px',    // 3.5rem
  16: '64px',    // 4rem
  20: '80px',    // 5rem
  24: '96px',    // 6rem
  28: '112px',   // 7rem
  32: '128px',   // 8rem
} as const;

// 4️⃣ ELEVATION & SURFACE
export const elevation = {
  // Shadows
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  
  // Border Radius
  radius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '20px',
    '3xl': '24px',
    full: '9999px',
  },
  
  // Glass Effects
  glass: {
    dark: 'rgba(255, 255, 255, 0.08)',
    light: 'rgba(14, 17, 23, 0.05)',
    border: 'rgba(255, 255, 255, 0.1)',
  },
} as const;

// 5️⃣ MOTION SYSTEM
export const motion = {
  // Durations
  duration: {
    fast: '150ms',
    base: '300ms',
    medium: '500ms',
    slow: '700ms',
    slower: '1000ms',
    slowest: '1200ms',
  },
  
  // Easing Functions
  easing: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  
  // Stagger Delays
  stagger: {
    0: '0ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    400: '400ms',
    500: '500ms',
    600: '600ms',
    700: '700ms',
    800: '800ms',
  },
} as const;

// 6️⃣ BREAKPOINTS
export const breakpoints = {
  mobile: '0px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
  ultraWide: '1536px',
} as const;

// 7️⃣ Z-INDEX LAYERS
export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  overlay: 40,
  modal: 50,
  popover: 60,
  toast: 70,
} as const;

// 8️⃣ CHART DESIGN RULES
export const chartRules = {
  // Grid
  gridColor: 'rgba(255, 255, 255, 0.05)',
  gridStroke: '1px',
  
  // Axes
  axisColor: 'rgba(255, 255, 255, 0.2)',
  axisStroke: '1px',
  
  // Data Colors
  dataColors: {
    primary: colors.indigo,
    secondary: colors.emerald,
    tertiary: colors.amber,
    danger: colors.mutedRed,
  },
  
  // Hover Effects
  hoverOpacity: 0.8,
  activeOpacity: 1,
} as const;

// 9️⃣ DIAGRAM RULES
export const diagramRules = {
  // Node Styling
  nodeRadius: '12px',
  nodePadding: '24px',
  nodeStroke: '2px',
  
  // Arrow Styling
  arrowStroke: '2px',
  arrowMarkerSize: '10px',
  
  // Colors
  neutral: colors.indigo,
  growth: colors.emerald,
  risk: colors.mutedRed,
} as const;

// 🔟 ACCESSIBILITY
export const accessibility = {
  // Contrast Ratios (WCAG AA minimum)
  minContrastRatio: 4.5,
  
  // Focus Styles
  focusRing: {
    width: '2px',
    offset: '2px',
    color: colors.indigo,
  },
  
  // Reduced Motion
  reducedMotion: '@media (prefers-reduced-motion: reduce)',
} as const;

// Type Exports
export type Color = typeof colors;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type Elevation = typeof elevation;
export type Motion = typeof motion;
export type Breakpoint = typeof breakpoints;
export type ZIndex = typeof zIndex;
