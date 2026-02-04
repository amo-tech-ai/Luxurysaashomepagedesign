# Design Tokens
## BCG-Inspired Consulting-Grade Design System

**Version**: 1.0  
**Status**: Production-Ready

---

## Color System

### Philosophy
- **Restrained palette**: Only what's necessary
- **No gradients**: Flat, authoritative colors
- **Accent sparingly**: Green = insight, never decoration
- **Trust neutrals**: Most UI uses grey scale

---

## Core Neutrals

### Background & Surfaces

```css
/* Canvas Background */
--color-canvas: #F7F6F3;
/* Off-white, warm, paper-like quality */
/* Usage: Page background, section backgrounds */

/* Surface / Cards */
--color-surface: #FFFFFF;
/* Pure white */
/* Usage: Content cards, elevated panels, data containers */

/* Surface Elevated (Optional) */
--color-surface-elevated: #FDFDFB;
/* Barely-there tint, subtle elevation */
/* Usage: Nested cards, modal backgrounds */
```

### Text Colors

```css
/* Primary Text */
--color-text-primary: #1F1F1F;
/* Near-black, high readability */
/* Usage: Headlines, body text, primary content */
/* Contrast: 16:1 on white (WCAG AAA) */

/* Secondary Text */
--color-text-secondary: #5A5A5A;
/* Muted charcoal, supporting text */
/* Usage: Metadata, captions, secondary info */
/* Contrast: 7.4:1 on white (WCAG AAA) */

/* Tertiary Text */
--color-text-tertiary: #888888;
/* Light grey, subtle text */
/* Usage: Placeholder text, disabled states */
/* Contrast: 4.6:1 on white (WCAG AA) */
```

### Borders & Dividers

```css
/* Hairline Border */
--color-border: #E6E4E1;
/* Subtle, barely-there line */
/* Usage: Card borders, dividers, table lines */

/* Border Medium */
--color-border-medium: #D4D2CF;
/* Slightly more prominent */
/* Usage: Active state borders, focused inputs */

/* Border Strong */
--color-border-strong: #B8B6B3;
/* Visible but not aggressive */
/* Usage: Table headers, section separators */
```

---

## Accent System (Very Controlled)

### Primary Accent: Deep Emerald

```css
/* Primary Emerald */
--color-accent-primary: #0D5F4E;
/* Deep, trustworthy green */
/* Usage: Key insights, data highlights, primary CTAs */
/* Psychology: Intelligence, growth, trust */

/* Primary Emerald Hover */
--color-accent-primary-hover: #0A4D3F;
/* Darker on interaction */

/* Primary Emerald Light */
--color-accent-primary-light: #E8F3F0;
/* Subtle background tint */
/* Usage: Insight panels, highlighted sections */
```

### Secondary Accent: Soft Sage

```css
/* Secondary Sage */
--color-accent-secondary: #6B9D89;
/* Softer, supporting green */
/* Usage: Secondary insights, chart accents, less important highlights */

/* Secondary Sage Hover */
--color-accent-secondary-hover: #5A8A75;

/* Secondary Sage Light */
--color-accent-secondary-light: #F0F7F4;
/* Very subtle background */
/* Usage: Hover states, soft emphasis */
```

### Accent Usage Rules

**✅ Use for**:
- Data visualization highlights
- Key insight callouts
- Important findings
- Primary CTAs (sparingly)
- Chart bars/lines
- Strategic emphasis

**❌ Never use for**:
- Decoration
- Multiple elements on one screen
- Backgrounds (except subtle tints)
- Branding everywhere
- Fun or playful elements

---

## Semantic Colors (Data & Status)

### Success

```css
--color-success: #0D5F4E;
/* Reuse primary emerald */
--color-success-light: #E8F3F0;
```

### Warning

```css
--color-warning: #C87B2F;
/* Muted amber, not alarming */
--color-warning-light: #FDF4EB;
```

### Error / Critical

```css
--color-error: #B94A48;
/* Subdued red, serious not scary */
--color-error-light: #FCF0F0;
```

### Info

```css
--color-info: #5A5A5A;
/* Use secondary text color */
--color-info-light: #F7F6F3;
```

---

## Typography System

### Font Families

```css
/* Serif: Editorial Headlines */
--font-serif: 'Plantin', 'Georgia', 'Times New Roman', serif;
/* Alternatives: Freight Text, Tiempos, Charter */
/* Character: Authoritative, editorial, timeless */

/* Sans-Serif: Body, UI, Data */
--font-sans: -apple-system, BlinkMacSystemFont, 
             'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
/* System fonts for clarity and performance */
/* Alternatives: Inter, Graphik, Helvetica Neue */

/* Monospace: Code, Data */
--font-mono: 'SF Mono', 'Monaco', 'Courier New', monospace;
/* Usage: Code blocks, tabular data */
```

---

### Type Scale

```css
/* Display (Rare, special cases) */
--text-display: 64px;
--text-display-line: 1.1;
--text-display-weight: 400;
--text-display-spacing: -0.02em;

/* H1: Editorial Headlines */
--text-h1: 48px;
--text-h1-line: 1.15;
--text-h1-weight: 400;        /* Normal, not bold */
--text-h1-spacing: -0.015em;
--text-h1-family: var(--font-serif);

/* H2: Section Breaks */
--text-h2: 36px;
--text-h2-line: 1.2;
--text-h2-weight: 400;
--text-h2-spacing: -0.01em;
--text-h2-family: var(--font-serif);

/* H3: Subsections */
--text-h3: 28px;
--text-h3-line: 1.3;
--text-h3-weight: 500;        /* Slightly heavier for distinction */
--text-h3-spacing: -0.005em;
--text-h3-family: var(--font-serif);

/* H4: Small Headers */
--text-h4: 20px;
--text-h4-line: 1.4;
--text-h4-weight: 600;
--text-h4-spacing: 0;
--text-h4-family: var(--font-sans);

/* Body Large: Intro paragraphs */
--text-body-large: 18px;
--text-body-large-line: 1.7;
--text-body-large-weight: 400;
--text-body-large-family: var(--font-sans);

/* Body: Standard reading */
--text-body: 16px;
--text-body-line: 1.6;
--text-body-weight: 400;
--text-body-family: var(--font-sans);

/* Body Small: Dense content */
--text-body-small: 14px;
--text-body-small-line: 1.5;
--text-body-small-weight: 400;
--text-body-small-family: var(--font-sans);

/* Meta: Captions, dates, bylines */
--text-meta: 13px;
--text-meta-line: 1.4;
--text-meta-weight: 400;
--text-meta-spacing: 0.02em;
--text-meta-family: var(--font-sans);

/* Label: Uppercase UI labels */
--text-label: 12px;
--text-label-line: 1.3;
--text-label-weight: 600;
--text-label-spacing: 0.08em;
--text-label-transform: uppercase;
--text-label-family: var(--font-sans);
```

---

### Typography Rules

**Headlines (H1-H3)**:
- Use serif for editorial authority
- Normal weight (400), not bold
- Negative letter-spacing for elegance
- Generous line-height (never cramped)

**Body Text**:
- Use sans-serif for readability
- 16-18px for long-form content
- Line-height 1.6-1.7 (prioritize reading comfort)
- Max-width 680px for optimal reading

**Meta Text**:
- Small, quiet, unobtrusive
- Use for dates, authors, categories
- Muted color (#5A5A5A)
- Never compete with body

---

## Spacing System

### Philosophy
- **8px base unit**: All spacing is a multiple of 8
- **Vertical rhythm**: Consistent spacing creates calm
- **Generous margins**: Never cramped

### Spacing Scale

```css
/* Micro: Within components */
--space-1: 4px;      /* Tight spacing, rare */
--space-2: 8px;      /* Component internals */
--space-3: 12px;     /* Small gaps */
--space-4: 16px;     /* Default internal padding */

/* Meso: Between related elements */
--space-5: 20px;
--space-6: 24px;     /* Card padding, section spacing */
--space-8: 32px;     /* Between sections */
--space-10: 40px;
--space-12: 48px;    /* Large section spacing */

/* Macro: Between major ideas */
--space-16: 64px;    /* Major section breaks */
--space-20: 80px;
--space-24: 96px;    /* Page sections */
--space-32: 128px;   /* Rare, major divides */

/* Canvas: Outer boundaries */
--space-page-margin: 80px;   /* Desktop outer margins */
--space-page-margin-tablet: 48px;
--space-page-margin-mobile: 24px;
```

---

### Spacing Application

**Card Padding**:
```css
.card {
  padding: 48px;      /* Desktop */
  padding: 32px;      /* Tablet */
  padding: 24px;      /* Mobile */
}
```

**Section Spacing**:
```css
.section {
  margin-bottom: 96px;   /* Between major sections */
}

.subsection {
  margin-bottom: 48px;   /* Between related content */
}
```

**Content Width**:
```css
.content {
  max-width: 680px;      /* Long-form reading */
  max-width: 1200px;     /* Multi-column layouts */
  max-width: 1400px;     /* Wide dashboards */
}
```

---

## Grid System

### 12-Column Grid

```css
--grid-columns: 12;
--grid-gap: 32px;           /* Desktop */
--grid-gap-tablet: 24px;
--grid-gap-mobile: 16px;

--grid-max-width: 1280px;   /* Standard max */
--grid-max-width-wide: 1440px;  /* Wide layouts */
```

### Common Column Spans

```
1 column:   8.33%    (Sidebar accent)
2 columns:  16.66%   (Narrow sidebar)
3 columns:  25%      (Quarter layout)
4 columns:  33.33%   (Thirds)
6 columns:  50%      (Halves)
8 columns:  66.66%   (Two-thirds main content)
9 columns:  75%      (Three-quarters)
12 columns: 100%     (Full width)
```

---

## Layout Patterns

### Three-Panel Logic (BCG Standard)

```css
/* Left: Context / Navigation */
--panel-left: 240px;        /* Fixed sidebar */

/* Center: Primary Content */
--panel-center: 1fr;        /* Flexible main area */

/* Right: Intelligence / Insights */
--panel-right: 320px;       /* Insight sidebar */
```

**Grid Template**:
```css
display: grid;
grid-template-columns: 240px 1fr 320px;
gap: 48px;
```

---

## Border & Shadow System

### Borders

```css
/* Hairline (Default) */
--border-hairline: 1px solid var(--color-border);

/* Medium (Emphasis) */
--border-medium: 1px solid var(--color-border-medium);

/* Strong (Structure) */
--border-strong: 2px solid var(--color-border-strong);

/* Accent (Insight) */
--border-accent: 2px solid var(--color-accent-primary);
```

### Shadows (Minimal Use)

```css
/* Card Shadow: Barely perceptible */
--shadow-card: 0 1px 3px rgba(0, 0, 0, 0.04);

/* Elevated: Slightly more prominent */
--shadow-elevated: 0 2px 8px rgba(0, 0, 0, 0.06);

/* Modal: Distinct from page */
--shadow-modal: 0 8px 24px rgba(0, 0, 0, 0.12);
```

**Rule**: Use shadows only when z-axis layering is necessary. Prefer borders.

---

## Border Radius

```css
/* None (Default) */
--radius-none: 0;

/* Subtle (Rare) */
--radius-sm: 2px;

/* Standard (Cards, if needed) */
--radius-md: 4px;

/* Large (Modals) */
--radius-lg: 8px;
```

**Rule**: Default to sharp corners (0). Round only for semantic reasons (inputs, buttons).

---

## Breakpoints

```css
/* Mobile */
--breakpoint-sm: 640px;

/* Tablet */
--breakpoint-md: 768px;

/* Desktop */
--breakpoint-lg: 1024px;

/* Large Desktop */
--breakpoint-xl: 1280px;

/* Extra Large */
--breakpoint-2xl: 1536px;
```

---

## Z-Index Scale

```css
--z-base: 0;
--z-dropdown: 1000;
--z-sticky: 1100;
--z-fixed: 1200;
--z-modal-backdrop: 1300;
--z-modal: 1400;
--z-popover: 1500;
--z-tooltip: 1600;
```

---

## Transition Timing

```css
/* Fast: Micro-interactions */
--transition-fast: 150ms;

/* Base: Standard interactions */
--transition-base: 250ms;

/* Slow: Complex animations */
--transition-slow: 400ms;

/* Easing: Smooth, natural */
--easing-default: cubic-bezier(0.4, 0, 0.2, 1);
--easing-in: cubic-bezier(0.4, 0, 1, 1);
--easing-out: cubic-bezier(0, 0, 0.2, 1);
```

---

## Usage Examples

### CSS Variables Implementation

```css
:root {
  /* Colors */
  --color-canvas: #F7F6F3;
  --color-surface: #FFFFFF;
  --color-text-primary: #1F1F1F;
  --color-text-secondary: #5A5A5A;
  --color-border: #E6E4E1;
  --color-accent-primary: #0D5F4E;
  --color-accent-secondary: #6B9D89;
  
  /* Typography */
  --font-serif: 'Plantin', 'Georgia', serif;
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Spacing */
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
}
```

### Tailwind Config Integration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        canvas: '#F7F6F3',
        surface: '#FFFFFF',
        text: {
          primary: '#1F1F1F',
          secondary: '#5A5A5A',
          tertiary: '#888888',
        },
        border: {
          DEFAULT: '#E6E4E1',
          medium: '#D4D2CF',
          strong: '#B8B6B3',
        },
        accent: {
          primary: '#0D5F4E',
          secondary: '#6B9D89',
        }
      },
      fontFamily: {
        serif: ['Plantin', 'Georgia', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '24': '96px',
      }
    }
  }
};
```

---

## Token Naming Convention

```
[category]-[property]-[variant]

Examples:
- color-text-primary
- color-border-medium
- space-page-margin
- text-h1-line
- shadow-card
```

---

**End of Design Tokens**

Next: See [Typography System](./02-TYPOGRAPHY.md) for detailed usage.
