/**
 * Fashion 2026 Enhanced Design System
 * Boardroom-grade luxury design tokens
 * @version 6.0.0
 */

// ========================================
// COLOR SYSTEM
// ========================================
export const colors = {
  // Primary Backgrounds
  darkForest: '#0E1117',
  warmIvory: '#F5F3EF',
  
  // Accents
  indigo: '#6366F1',
  emerald: '#10B981',
  mutedRed: '#DC2626',
  neutralSlate: '#6B7280',
  
  // Legacy support
  white: '#FFFFFF',
  slate900: '#0F172A',
} as const;

// ========================================
// TYPOGRAPHY SYSTEM
// ========================================
export const typography = {
  // Font Families (Neo-grotesk)
  fontSans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
  fontMono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", monospace',
  
  // Desktop Sizes
  sizes: {
    mega: '160px',           // Hero numbers (desktop)
    hero: '96px',            // Section hero stats
    h1: '72px',              // Main headlines
    h2: '56px',              // Sub-headlines
    h3: '40px',              // Tertiary headlines
    stat: '52px',            // Card statistics
    large: '24px',           // Large body
    body: '18px',            // Body text
    small: '14px',           // Small text
    micro: '11px',           // Labels, captions
  },
  
  // Mobile Sizes (clamp for fluid scaling)
  mobileClamp: {
    mega: 'clamp(80px, 15vw, 160px)',
    hero: 'clamp(48px, 10vw, 96px)',
    h1: 'clamp(40px, 8vw, 72px)',
    h2: 'clamp(32px, 6vw, 56px)',
    stat: 'clamp(32px, 6vw, 52px)',
  },
  
  // Weights
  weights: {
    black: 900,
    bold: 700,
    semibold: 600,
    medium: 500,
    regular: 400,
    light: 300,
  },
  
  // Letter Spacing
  tracking: {
    tightest: '-0.04em',
    tighter: '-0.02em',
    tight: '-0.01em',
    normal: '0',
    wide: '0.02em',
    wider: '0.05em',
    widest: '0.25em',        // For uppercase labels
  },
  
  // Line Heights
  leading: {
    none: '1',
    tight: '1.1',
    snug: '1.25',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
} as const;

// ========================================
// SPACING SYSTEM (8px base)
// ========================================
export const spacing = {
  // Base unit: 8px
  0: '0',
  1: '4px',      // 0.5 unit
  2: '8px',      // 1 unit - base
  3: '12px',     // 1.5 units
  4: '16px',     // 2 units
  5: '20px',     // 2.5 units
  6: '24px',     // 3 units
  8: '32px',     // 4 units
  10: '40px',    // 5 units
  12: '48px',    // 6 units
  14: '56px',    // 7 units
  16: '64px',    // 8 units
  20: '80px',    // 10 units
  24: '96px',    // 12 units
  28: '112px',   // 14 units
  32: '128px',   // 16 units
  40: '160px',   // 20 units
  48: '192px',   // 24 units
  
  // Semantic spacing
  sectionGap: '120px',
  cardGap: '32px',
  contentPadding: '24px',
  pagePadding: '80px',
} as const;

// ========================================
// ELEVATION SYSTEM
// ========================================
export const elevation = {
  // Shadows (subtle, museum-quality)
  shadow: {
    none: 'none',
    sm: '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.03)',
    md: '0 4px 8px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.03)',
    lg: '0 12px 24px rgba(0, 0, 0, 0.06), 0 4px 8px rgba(0, 0, 0, 0.04)',
    xl: '0 20px 40px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.06)',
    glow: '0 0 60px rgba(99, 102, 241, 0.15)',
    glowEmerald: '0 0 60px rgba(16, 185, 129, 0.15)',
  },
  
  // Border Radius (architectural)
  radius: {
    none: '0',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
    full: '9999px',
  },
  
  // Glass Surfaces
  glass: {
    dark: {
      background: 'rgba(255, 255, 255, 0.08)',
      border: 'rgba(255, 255, 255, 0.12)',
      hover: 'rgba(255, 255, 255, 0.12)',
    },
    light: {
      background: 'rgba(14, 62, 27, 0.04)',
      border: 'rgba(14, 62, 27, 0.08)',
      hover: 'rgba(14, 62, 27, 0.08)',
    },
  },
  
  // Inner Glow (subtle hover effect)
  innerGlow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
} as const;

// ========================================
// CHART STYLING RULES (McKinsey/BCG grade)
// ========================================
export const chartRules = {
  // Grid
  grid: {
    stroke: 'rgba(148, 163, 184, 0.08)',
    strokeWidth: '1px',
    dashArray: 'none',
  },
  
  // Axes
  axis: {
    stroke: 'rgba(148, 163, 184, 0.15)',
    strokeWidth: '1px',
    labelColor: 'rgba(148, 163, 184, 0.6)',
    labelSize: '11px',
    labelWeight: 500,
  },
  
  // Data Colors
  colors: {
    primary: colors.indigo,
    secondary: colors.emerald,
    tertiary: colors.amber,
    danger: colors.mutedRed,
    neutral: colors.slate500,
  },
  
  // Stroke Widths
  stroke: {
    thin: '2px',
    medium: '3px',
    thick: '4px',
  },
  
  // Hover/Active States
  interaction: {
    hoverOpacity: 0.75,
    activeOpacity: 1,
    defaultOpacity: 0.9,
  },
  
  // Tooltips
  tooltip: {
    background: 'rgba(15, 23, 42, 0.95)',
    border: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    padding: '12px 16px',
    fontSize: '13px',
    fontWeight: 600,
    color: '#FFFFFF',
    shadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
  
  // Legend
  legend: {
    position: 'bottom' as const,
    spacing: '20px',
    fontSize: '12px',
    fontWeight: 500,
    color: 'rgba(148, 163, 184, 0.8)',
  },
} as const;

// ========================================
// DIAGRAM STYLING RULES (Executive quality)
// ========================================
export const diagramRules = {
  // Node Styling
  node: {
    borderRadius: '16px',
    padding: '24px 32px',
    minWidth: '160px',
    minHeight: '80px',
    
    // Borders
    borderWidth: '2px',
    borderStyle: 'solid',
    
    // Colors
    neutral: {
      stroke: colors.indigo,
      fill: 'rgba(99, 102, 241, 0.05)',
      shadow: '0 8px 24px rgba(99, 102, 241, 0.12)',
    },
    growth: {
      stroke: colors.emerald,
      fill: 'rgba(16, 185, 129, 0.05)',
      shadow: '0 8px 24px rgba(16, 185, 129, 0.12)',
    },
    risk: {
      stroke: colors.mutedRed,
      fill: 'rgba(220, 38, 38, 0.05)',
      shadow: '0 8px 24px rgba(220, 38, 38, 0.12)',
    },
  },
  
  // Arrow/Path Styling
  arrow: {
    stroke: 'rgba(99, 102, 241, 0.4)',
    strokeWidth: '2px',
    dashArray: '8 4',
    markerSize: '12px',
    markerColor: colors.indigo,
  },
  
  // Spacing
  spacing: {
    horizontal: '60px',
    vertical: '48px',
    circular: '120px', // radius for circular diagrams
  },
  
  // Typography
  typography: {
    labelSize: '14px',
    labelWeight: 600,
    labelColor: 'rgba(255, 255, 255, 0.9)',
    subLabelSize: '11px',
    subLabelWeight: 500,
    subLabelColor: 'rgba(255, 255, 255, 0.6)',
  },
} as const;

// ========================================
// CARD STYLING RULES (Collectible quality)
// ========================================
export const cardRules = {
  // Base Card
  base: {
    borderRadius: elevation.radius.lg,
    padding: spacing.contentPadding,
    shadow: elevation.shadow.md,
  },
  
  // Glass Card (Dark sections)
  glass: {
    background: elevation.glass.dark.background,
    border: `1px solid ${elevation.glass.dark.border}`,
    backdropFilter: 'blur(20px)',
    
    hover: {
      background: elevation.glass.dark.hover,
      transform: 'translateY(-4px) scale(1.02)',
      shadow: elevation.shadow.lg,
    },
  },
  
  // Solid Card (Light sections)
  solid: {
    background: colors.white,
    border: `1px solid ${colors.slate200}`,
    
    hover: {
      shadow: elevation.shadow.lg,
      transform: 'translateY(-4px)',
    },
  },
  
  // Illustrated Cards
  illustrated: {
    iconSize: '40px',
    iconColor: colors.indigo,
    iconOpacity: 0.2,
    gradientOverlay: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, transparent 100%)',
  },
  
  // Typography
  typography: {
    statSize: typography.sizes.stat,
    statWeight: typography.weights.black,
    statTracking: typography.tracking.tighter,
    
    labelSize: typography.sizes.small,
    labelWeight: typography.weights.semibold,
    labelTracking: typography.tracking.wide,
    
    descSize: typography.sizes.micro,
    descWeight: typography.weights.regular,
    descTracking: typography.tracking.normal,
  },
} as const;

// ========================================
// MOTION PHILOSOPHY (Elegant, not playful)
// ========================================
export const motion = {
  // Philosophy: Smooth, confident, intentional
  
  // Durations
  duration: {
    instant: '100ms',
    fast: '200ms',
    base: '400ms',
    medium: '600ms',
    slow: '800ms',
    slower: '1000ms',
    slowest: '1400ms',
  },
  
  // Easing (Custom curves for luxury feel)
  easing: {
    easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',      // Smooth deceleration
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',     // Balanced
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',         // Quick but smooth
    elegant: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Luxury curve
  },
  
  // Stagger Timing
  stagger: {
    cards: '150ms',
    chartElements: '200ms',
    diagramNodes: '250ms',
    sections: '300ms',
  },
  
  // Animation Types
  reveal: {
    opacity: '0 → 1',
    translateY: '24px → 0',
    scale: '0.95 → 1',
    blur: '8px → 0',
  },
  
  hover: {
    scale: '1 → 1.02',
    translateY: '0 → -4px',
    shadow: 'md → lg',
  },
  
  // Path Drawing
  pathDraw: {
    duration: '1400ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    dashOffset: '1000 → 0',
  },
  
  // Scroll Behavior
  scroll: {
    behavior: 'smooth' as const,
    threshold: 0.2,
    rootMargin: '-20% 0px',
  },
} as const;

// ========================================
// ACCESSIBILITY STANDARDS (WCAG AA minimum)
// ========================================
export const accessibility = {
  // Contrast Ratios
  contrast: {
    textMinimum: 4.5,      // WCAG AA
    textPreferred: 7,      // WCAG AAA
    largeTextMinimum: 3,   // WCAG AA for 18px+
    uiMinimum: 3,          // Interactive elements
  },
  
  // Focus Indicators
  focus: {
    ringWidth: '3px',
    ringOffset: '2px',
    ringColor: colors.indigo,
    ringOpacity: 0.6,
    borderRadius: '8px',
  },
  
  // Touch Targets
  touch: {
    minSize: '44px',       // Minimum tap target
    spacing: '8px',        // Space between targets
  },
  
  // Reduced Motion
  reducedMotion: {
    query: '@media (prefers-reduced-motion: reduce)',
    duration: '0.01ms',    // Near instant
    scale: '1',            // No scaling
    translateY: '0',       // No movement
  },
  
  // Screen Reader
  screenReader: {
    visuallyHiddenClass: 'sr-only',
    skipLinkText: 'Skip to main content',
  },
  
  // Semantic Landmarks
  landmarks: {
    navigation: 'nav',
    main: 'main',
    footer: 'footer',
    section: 'section',
    article: 'article',
  },
} as const;

// ========================================
// BREAKPOINT SYSTEM
// ========================================
export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
  ultraWide: 1536,
  
  // Media Queries
  mq: {
    mobile: '@media (min-width: 0px)',
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
    wide: '@media (min-width: 1280px)',
    ultraWide: '@media (min-width: 1536px)',
  },
} as const;

// ========================================
// SECTION TRANSITION SYSTEM
// ========================================
export const transitions = {
  // Light to Dark
  lightToDark: {
    gradient: `linear-gradient(180deg, ${colors.warmIvory} 0%, ${colors.deepForest} 100%)`,
    height: '120px',
    opacity: 0.8,
  },
  
  // Dark to Light
  darkToLight: {
    gradient: `linear-gradient(180deg, ${colors.deepForest} 0%, ${colors.warmIvory} 100%)`,
    height: '120px',
    opacity: 0.8,
  },
  
  // Diagonal Divider
  diagonal: {
    angle: '2deg',
    height: '60px',
    opacity: 0.15,
  },
} as const;

// ========================================
// PROGRESS INDICATOR (Sticky dots)
// ========================================
export const progressIndicator = {
  dotSize: '8px',
  dotSpacing: '12px',
  activeDotSize: '12px',
  
  colors: {
    inactive: 'rgba(255, 255, 255, 0.3)',
    active: colors.indigo,
    hover: 'rgba(255, 255, 255, 0.6)',
  },
  
  position: {
    right: '32px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
} as const;

// Type Exports
export type Color = typeof colors;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type Elevation = typeof elevation;
export type ChartRules = typeof chartRules;
export type DiagramRules = typeof diagramRules;
export type CardRules = typeof cardRules;
export type Motion = typeof motion;
export type Accessibility = typeof accessibility;
export type Breakpoint = typeof breakpoints;
export type Transition = typeof transitions;
export type ProgressIndicator = typeof progressIndicator;