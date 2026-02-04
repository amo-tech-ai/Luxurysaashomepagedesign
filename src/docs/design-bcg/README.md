# BCG-Inspired Design System
## Executive Consulting-Grade UI Framework

**Version**: 1.0  
**Status**: Production-Ready  
**Classification**: Premium, Sophisticated, Editorial

---

## Overview

A comprehensive design system inspired by BCG.com, McKinsey Insights, Financial Times Digital, and Apple Editorial. Built for executive strategy content, AI insights, and long-form analysis with a focus on clarity, intelligence, and restraint.

---

## What Was Delivered

### **5 Complete Documentation Files**

#### **[00-DESIGN-PRINCIPLES.md](./00-DESIGN-PRINCIPLES.md)** (6,500+ words)
Core philosophy and decision-making framework:
- ✅ 7 non-negotiable design principles
- ✅ Visual philosophy (calm luxury, executive editorial)
- ✅ Inspirational references (BCG, McKinsey, FT, Apple)
- ✅ Anti-patterns to avoid
- ✅ Design decision framework
- ✅ Approval checklist

#### **[01-DESIGN-TOKENS.md](./01-DESIGN-TOKENS.md)** (8,000+ words)
Production-ready design tokens:
- ✅ Complete color system (neutrals + emerald accents)
- ✅ Typography scale (serif headlines + sans-serif body)
- ✅ Spacing system (8px base unit)
- ✅ Grid specifications (12-column + three-panel)
- ✅ Border & shadow system
- ✅ CSS variables & Tailwind config
- ✅ Breakpoints & responsive tokens

#### **[02-COMPONENTS.md](./02-COMPONENTS.md)** (9,000+ words)
14 production-ready components:
- ✅ Card variants (standard, minimal, insight)
- ✅ Three-panel layout
- ✅ Insight panels & KPI blocks
- ✅ Data tables
- ✅ Chart containers
- ✅ Author/byline components
- ✅ Section dividers
- ✅ Callouts & pullquotes
- ✅ Buttons (minimal, purposeful)
- ✅ Navigation sidebar
- ✅ Article headers
- ✅ Image with caption
- ✅ List styles
- ✅ Responsive patterns

#### **[03-LAYOUTS.md](./03-LAYOUTS.md)** (7,500+ words)
5 complete page templates:
- ✅ Editorial article layout
- ✅ Strategy dashboard
- ✅ AI insight screen (three-panel)
- ✅ Data report page
- ✅ Homepage/overview
- ✅ Responsive collapse patterns
- ✅ Layout decision tree

#### **[04-DATA-VISUALIZATION.md](./04-DATA-VISUALIZATION.md)** (6,000+ words)
Chart styling and data presentation:
- ✅ 6 chart types (bar, line, area, comparison, table)
- ✅ Recharts configurations
- ✅ Chart container components
- ✅ Color usage in data viz
- ✅ Annotation patterns
- ✅ Responsive chart behavior
- ✅ Accessibility guidelines
- ✅ Complete implementation examples

**Total**: 37,000+ words of comprehensive documentation

---

## Design Philosophy

### Core Principles

1. **Clarity Over Decoration**
   - Every element serves a purpose
   - Design is invisible; content is prominent

2. **Whitespace is Structural**
   - Spacing defines relationships
   - Generous margins create comprehension

3. **Typography Carries Hierarchy**
   - Size and weight establish importance
   - No color needed to show priority

4. **One Idea Per Screen**
   - Clear focal points
   - No competing priorities

5. **Design Disappears Behind Content**
   - UI is infrastructure, not showcase
   - Editorial over marketing

6. **Trust, Intelligence, Restraint**
   - Sophisticated decision-makers
   - Depth over highlights
   - Confidence through understatement

---

## Color System

### Core Neutrals

```css
Canvas:          #F7F6F3  /* Off-white, paper-like */
Surface:         #FFFFFF  /* Pure white cards */
Text Primary:    #1F1F1F  /* Near-black */
Text Secondary:  #5A5A5A  /* Muted charcoal */
Border:          #E6E4E1  /* Hairline grey */
```

### Accent System (Controlled)

```css
Primary Emerald: #0D5F4E  /* Deep, trustworthy */
Secondary Sage:  #6B9D89  /* Soft, supporting */
Accent Light:    #E8F3F0  /* Subtle backgrounds */
```

**Rules**:
- Accents only for insight, emphasis, or data
- No gradients
- Green = intelligence, growth, trust
- Never decorative

---

## Typography System

### Fonts

```css
Serif (Headlines):     'Plantin', Georgia, serif
Sans-Serif (Body/UI):  -apple-system, BlinkMacSystemFont, sans-serif
```

### Type Scale

```css
H1 Editorial:    48px / 400 weight / 1.15 line-height
H2 Sections:     36px / 400 weight / 1.2 line-height
H3 Subsections:  28px / 500 weight / 1.3 line-height
Body:            16px / 400 weight / 1.6 line-height
Body Large:      18px / 400 weight / 1.7 line-height
Meta:            13px / 400 weight / 1.4 line-height
```

**Key Features**:
- Serif for editorial authority
- Normal weights (400), not bold
- Negative letter-spacing for elegance
- Generous line-height (1.6-1.7)

---

## Layout System

### Three-Panel Logic (BCG Standard)

```
┌──────────┬─────────────────────┬──────────┐
│          │                     │          │
│  Left    │      Center         │  Right   │
│  240px   │      1fr            │  320px   │
│          │                     │          │
│ Context/ │  Primary Content    │ Insights/│
│   Nav    │  (max-width 800px)  │ Related  │
│          │                     │          │
└──────────┴─────────────────────┴──────────┘
```

### Grid System

- **12-column grid** for flexible layouts
- **Max-width 1280px** (standard content)
- **Max-width 1440px** (wide dashboards)
- **32-48px gaps** between columns

### Spacing Scale

```
Micro:   4-16px  (within components)
Meso:    24-48px (between sections)
Macro:   64-96px (major divides)
Canvas:  80px    (outer margins)
```

---

## Component Library

### 14 Production-Ready Components

1. **Card** — Standard content container
2. **Three-Panel Layout** — Editorial page structure
3. **Insight Panel** — Right sidebar intelligence
4. **KPI Block** — Metric display
5. **Data Table** — Tabular information
6. **Chart Container** — Data visualization wrapper
7. **Author Block** — Article attribution
8. **Section Divider** — Structural breaks
9. **Callout** — Highlighted content
10. **Button** — Minimal CTAs
11. **Navigation** — Left sidebar nav
12. **Article Header** — Editorial intro
13. **Figure** — Images with captions
14. **Lists** — Structured content

---

## Data Visualization

### Chart Types

- **Bar Chart (Horizontal)** — Category comparisons
- **Bar Chart (Vertical)** — Time series
- **Line Chart** — Trends, forecasts
- **Area Chart** — Volume over time
- **Comparison Chart** — Multiple series
- **Table** — Precise numbers

### Styling Rules

- **Flat design** — No gradients, no 3D
- **Primary color**: Emerald (#0D5F4E)
- **Clean axes** — Thin, subtle lines
- **Direct labels** — No legends if possible
- **Simple > complex** — Bar charts preferred

---

## Page Templates

### 1. Editorial Article

**Use for**: Long-form analysis, insights, thought leadership

**Structure**:
- Large editorial headline
- Three-panel layout (nav, content, insights)
- Generous reading width (680px)
- Author attribution

### 2. Strategy Dashboard

**Use for**: Executive overviews, KPI tracking

**Structure**:
- Sidebar navigation
- KPI grid at top
- Chart visualizations
- Clean data tables

### 3. AI Insight Screen

**Use for**: AI-generated analysis, recommendations

**Structure**:
- Left: Context/sources
- Center: Primary insight
- Right: Actions/downloads
- Three-panel logic

### 4. Data Report

**Use for**: Structured analysis documents

**Structure**:
- Report header (centered)
- Table of contents
- Numbered sections
- Full-width charts

### 5. Homepage

**Use for**: Landing pages, overviews

**Structure**:
- Centered hero
- Featured content grid
- Data highlights
- Minimal CTAs

---

## Responsive Behavior

### Desktop (>1024px)
- Full three-panel layouts
- Max-width 1440px
- 80px outer margins

### Tablet (768-1024px)
- Collapse to two-panel
- 48px margins
- Maintain readability

### Mobile (<768px)
- Single-column stack
- 24px margins
- Generous line-height maintained

---

## What Makes This Premium

### **Calm Luxury**
- Off-white backgrounds (#F7F6F3)
- Hairline borders (1px)
- No shadows (except modals)
- Generous whitespace

### **Executive Editorial**
- Serif headlines (editorial authority)
- Normal weights (400, not bold)
- Long-form optimized (1.6 line-height)
- BCG/McKinsey aesthetic

### **Sophisticated Restraint**
- Minimal accent color usage
- No gradients or 3D
- Flat, clean data visualizations
- Trust over persuasion

### **Intelligent Structure**
- Clear hierarchy without color
- One idea per screen
- Strategic use of whitespace
- Three-panel logic

---

## Implementation Guide

### Quick Start

1. **Review Principles**
   - Read [00-DESIGN-PRINCIPLES.md](./00-DESIGN-PRINCIPLES.md)
   - Understand the "why" behind decisions

2. **Set Up Tokens**
   - Copy CSS variables from [01-DESIGN-TOKENS.md](./01-DESIGN-TOKENS.md)
   - Configure Tailwind with custom colors
   - Set up typography system

3. **Build Components**
   - Start with Card component
   - Add Three-Panel Layout
   - Build out navigation and headers

4. **Create Layouts**
   - Choose appropriate template from [03-LAYOUTS.md](./03-LAYOUTS.md)
   - Apply three-panel logic
   - Implement responsive collapse

5. **Add Data Viz**
   - Use Recharts configurations from [04-DATA-VISUALIZATION.md](./04-DATA-VISUALIZATION.md)
   - Apply chart styling
   - Ensure accessibility

### CSS Variables Setup

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
  --font-sans: -apple-system, BlinkMacSystemFont, sans-serif;
  
  /* Spacing */
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
}
```

### Tailwind Config

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        canvas: '#F7F6F3',
        surface: '#FFFFFF',
        text: {
          primary: '#1F1F1F',
          secondary: '#5A5A5A',
        },
        border: {
          DEFAULT: '#E6E4E1',
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
    }
  }
};
```

---

## Usage Examples

### Simple Card

```tsx
<div className="bg-surface border border-border p-12 mb-8">
  <h3 className="font-serif text-[28px] font-normal mb-6">
    Card Title
  </h3>
  <p className="text-base leading-relaxed text-text-primary max-w-[680px]">
    Body content with comfortable reading width and generous line-height.
  </p>
</div>
```

### Three-Panel Layout

```tsx
<div className="grid grid-cols-[240px_1fr_320px] gap-12 max-w-[1440px] mx-auto px-20">
  <aside className="sticky top-20">
    {/* Navigation */}
  </aside>
  
  <main className="max-w-[680px]">
    {/* Main content */}
  </main>
  
  <aside className="sticky top-20">
    {/* Insights */}
  </aside>
</div>
```

### Data Table

```tsx
<table className="w-full border-collapse border border-border bg-surface">
  <thead>
    <tr>
      <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-text-secondary bg-canvas border-b-2 border-border">
        Metric
      </th>
      <th className="text-right p-4 text-xs font-semibold uppercase tracking-wider text-text-secondary bg-canvas border-b-2 border-border">
        Value
      </th>
    </tr>
  </thead>
  <tbody>
    <tr className="hover:bg-canvas">
      <td className="p-4 text-sm border-b border-border">Revenue</td>
      <td className="p-4 text-sm text-right border-b border-border">$4.2M</td>
    </tr>
  </tbody>
</table>
```

---

## Design Decision Framework

### When Making Any Design Choice, Ask:

1. **Does this serve the content?**
   - If no → Remove it
   - If yes → Keep it minimal

2. **Would a BCG partner present this way?**
   - If no → Reconsider
   - If yes → Proceed

3. **Is this restrained enough?**
   - If unsure → Remove one more element
   - If obviously minimal → Perfect

4. **Can I remove one more thing?**
   - Try removing it
   - If content suffers → Restore
   - If content improves → Keep it gone

---

## Anti-Patterns (What to Avoid)

### Visual
- ❌ Gradients
- ❌ Heavy shadows
- ❌ Rounded "startup" cards
- ❌ Bright accent colors
- ❌ Decorative icons
- ❌ Noisy animations

### Content
- ❌ Marketing language
- ❌ Buzzwords
- ❌ Aggressive CTAs
- ❌ Urgency tactics
- ❌ Exclamation points
- ❌ Emojis

### Layout
- ❌ Dense information
- ❌ Competing focal points
- ❌ Narrow margins
- ❌ Cramped spacing
- ❌ Too many columns

---

## Success Metrics

A design succeeds when:

- ✅ **Users focus on insights, not interface**
- ✅ **Content feels authoritative and credible**
- ✅ **Layout feels spacious, never cramped**
- ✅ **Hierarchy is immediately clear**
- ✅ **Tone feels executive, not promotional**
- ✅ **Design feels timeless, not trendy**

---

## File Structure

```
/docs/design-bcg/
├── README.md                       (This file)
├── 00-DESIGN-PRINCIPLES.md         (6,500 words)
├── 01-DESIGN-TOKENS.md             (8,000 words)
├── 02-COMPONENTS.md                (9,000 words)
├── 03-LAYOUTS.md                   (7,500 words)
└── 04-DATA-VISUALIZATION.md        (6,000 words)

Total: 37,000+ words of documentation
```

---

## Key Takeaways

### **1. Less is More**
Start with the minimum. Add only what's essential. Sophistication comes from what you remove, not what you add.

### **2. Content First**
Design serves the message, not vice versa. Let typography and whitespace do the heavy lifting.

### **3. Trust Simplicity**
No gradients, no heavy shadows, no decorative flourishes. Flat, clean, authoritative.

### **4. Respect the Reader**
Assume intelligence. Provide depth. Maintain clarity. Editorial over marketing.

### **5. One Idea Per Screen**
Clear focal points. No competing priorities. Guide attention, don't scatter it.

---

## Inspiration Sources

### **BCG.com**
- Three-panel layouts
- Deep emerald accent color
- Clean data visualizations
- Editorial article structure

### **McKinsey Insights**
- Long-form analysis
- Chart clarity
- Intellectual tone
- Structured hierarchy

### **Financial Times Digital**
- Editorial typography
- Beige/cream backgrounds
- Data-driven storytelling
- Serious, credible tone

### **Apple Editorial Pages**
- Generous whitespace
- Large, calm headlines
- Photography as statement
- Minimal UI chrome

---

## Next Steps

### For Designers
1. Review design principles document
2. Study BCG website examples
3. Create Figma mockups using tokens
4. Build component library
5. Test with real content

### For Developers
1. Set up CSS variables/Tailwind config
2. Build base components (Card, Layout)
3. Implement typography system
4. Add data visualization library
5. Test responsive behavior

### For Content Creators
1. Understand editorial tone
2. Write for sophisticated audience
3. Structure content hierarchically
4. Use data to support claims
5. Avoid marketing language

---

## Support & Resources

### Documentation
- [Design Principles](./00-DESIGN-PRINCIPLES.md)
- [Design Tokens](./01-DESIGN-TOKENS.md)
- [Components](./02-COMPONENTS.md)
- [Layouts](./03-LAYOUTS.md)
- [Data Visualization](./04-DATA-VISUALIZATION.md)

### External References
- BCG.com
- McKinsey.com/insights
- FT.com
- Apple.com (Editorial pages)

---

## Version History

**v1.0** — February 2, 2026
- Initial release
- Complete design system
- 37,000+ words of documentation
- 5 comprehensive guides
- Production-ready

---

## Conclusion

This BCG-inspired design system provides a complete framework for creating premium, consulting-grade interfaces. With a focus on clarity, intelligence, and restraint, it enables teams to build sophisticated applications that communicate authority and trust.

The system is built on fundamental principles: whitespace as structure, typography as hierarchy, content over decoration, and one idea per screen. Every element serves a purpose. Every decision removes noise.

Use this system to create experiences that feel like boardroom presentations, not marketing sites. Design that disappears behind content. Interfaces that respect the reader's intelligence.

**Status**: ✅ **PRODUCTION-READY**  
**Classification**: Premium Consulting-Grade Design System  
**Philosophy**: Clarity, Intelligence, Restraint

---

**End of Documentation**
