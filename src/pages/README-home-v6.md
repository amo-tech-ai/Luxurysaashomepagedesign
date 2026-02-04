# Home V6 - BCG Design System Implementation

## Overview

Home V6 is a complete reimplementation of the StartupAI homepage using the BCG-inspired consulting-grade design system. This version follows a **diagram-first, image-free** approach focused on systems thinking and visual logic.

## Design Philosophy

### Core Principles
- **Diagram-first**: Every visual explains logic, sequence, or causality
- **No images**: No photos, mockups, or decorative graphics
- **Systems thinking**: Show structure, not features
- **Consulting-grade**: BCG/McKinsey aesthetic
- **One idea per section**: Clear focus and hierarchy

### StartupAI Positioning
- **AI assists. You decide.** (not AI replaces)
- **System, not tool** (complete operating system)
- **Outcomes > features** (what you get, not what it does)
- **Execution > inspiration** (daily work, not just planning)

## Sections Implemented

### 1. Hero Section
- **Diagram**: Closed-loop system showing strategy → execution flow
- **Message**: "From strategy to daily execution, in one guided flow"
- **Visual**: 4-stage flow (Ideation → Validation → Planning → Execution) with AI guidance layer

### 2. Problem Statement
- **Diagram**: Before/After system contrast
- **Message**: Gap between vision and execution vs. guided flow
- **Visual**: Two-column comparison showing disconnected vs. structured

### 3. System Overview
- **Diagram**: Horizontal 6-stage flow
- **Message**: "Six stages. One guided flow."
- **Visual**: Idea → Validation → Market → Business → Brand → Execution

### 4. AI Role Definition
- **Diagram**: Responsibility model (two-column split)
- **Message**: "AI assists. You decide."
- **Visual**: AI responsibilities vs. Founder responsibilities side-by-side

### 5. Speed/Time Compression
- **Diagram**: Timeline comparison
- **Message**: "Structure accelerates. Chaos delays."
- **Visual**: Traditional 12+ months vs. StartupAI 6-8 weeks

### 6. Capability Matrix
- **Diagram**: Grid/table
- **Message**: "Concrete outputs, not abstract advice"
- **Visual**: Stage → Output → Format table

### 7. Transformation Flow
- **Diagram**: Input → Process → Output
- **Message**: "From idea to structured insight"
- **Visual**: Unstructured idea → AI analysis → Structured deliverable

### 8. Daily Execution Loop
- **Diagram**: Closed-loop system
- **Message**: "Strategy informs daily work. Daily work refines strategy."
- **Visual**: Strategic Plan ↔ Priorities ↔ Execution ↔ Feedback

### 9. Final CTA
- **Diagram**: Next-step flow
- **Message**: "Begin with clarity. Build with structure."
- **Visual**: Today → This Week → Week 6-8 timeline

### 10. Footer
- **Layout**: Three-column with positioning statement
- **Tone**: Reinforces system narrative

## Design Tokens

### Colors
```css
Canvas:          #F7F6F3  /* Off-white background */
Surface:         #FFFFFF  /* White cards */
Emerald Primary: #0D5F4E  /* Deep green accent */
Emerald Light:   #E8F3F0  /* Subtle backgrounds */
Sage:            #6B9D89  /* Secondary accent */
Text Primary:    #1F1F1F  /* Near-black */
Text Secondary:  #5A5A5A  /* Muted charcoal */
Border:          #E6E4E1  /* Hairline grey */
```

### Typography
```css
Headlines:   Serif (Georgia) - 36-48px, weight 400
Body:        Sans-serif - 16-18px, line-height 1.6
Labels:      Sans-serif - 12px uppercase, weight 600
Meta:        Sans-serif - 13px, secondary color
```

### Spacing
```css
Section margins:  96px (--space-24)
Card padding:     48px (--space-12)
Element gaps:     32-48px (--space-8 to --space-12)
Grid gaps:        48px (--space-12)
```

## Components Used

### Diagram Components
- `DiagramBox` - Structural boxes with variants (default, accent, muted)
- `DiagramArrow` - Directional arrows (right, down, left, up)
- `DiagramLabel` - Uppercase labels for diagram elements
- `DiagramFlow` - Sequential step flow with arrows
- `SystemLoop` - Closed-loop circular systems

### Layout Components
- `Section` - Page section container with background variants
- `SectionHeader` - Section title with optional label and subtitle
- `Card` - Content card with variants (default, accent, minimal)
- `Button` - CTA buttons (primary, secondary)
- `Divider` - Section separators (hairline, thick)
- `TwoColumnLayout` - Responsive two-column grids
- `StatCard` - Metric display cards

## Key Differentiators from Home V5

### Home V5
- ✅ Pastel color cards
- ✅ Data visualizations
- ✅ Feature-focused
- ✅ Modern SaaS aesthetic

### Home V6 (BCG System)
- ✅ Diagram-first (no images)
- ✅ System flows and structures
- ✅ Outcome-focused
- ✅ Consulting-grade aesthetic
- ✅ Editorial typography
- ✅ Generous whitespace
- ✅ Hairline borders (no shadows)
- ✅ Restrained color usage

## Usage

### Navigation
Access the page via the app navigation:
```
App.tsx → currentPage === 'home-v6' → HomeV6Page
```

Or directly navigate to `/home-v6` route.

### Customization
All components use BCG design tokens defined in `/styles/bcg-tokens.css`. To customize:

1. **Colors**: Edit `--color-*` variables in bcg-tokens.css
2. **Typography**: Edit `--text-*` and `--line-*` variables
3. **Spacing**: Edit `--space-*` variables
4. **Components**: Modify in `/components/bcg/` directory

## Responsive Behavior

### Desktop (>1024px)
- Full layout with generous margins
- Max-width 1280px centered
- All diagrams visible at once

### Tablet (768-1024px)
- Reduced margins (48px)
- Single-column layout where appropriate
- Horizontal scroll for wide flows

### Mobile (<768px)
- Single-column stack
- 24px margins
- Diagrams scale down
- Maintain readability and hierarchy

## Performance

- **No images** = Fast load times
- **CSS-based diagrams** = Scalable graphics
- **Minimal dependencies** = Lightweight
- **Clean markup** = Accessible

## Accessibility

- **WCAG 2.1 AA** compliant color contrast
- **Semantic HTML** structure
- **Keyboard navigation** support
- **Screen reader** friendly
- **Focus indicators** on interactive elements

## Future Enhancements

### Potential Additions
- [ ] Animated line-draw for diagram arrows (on scroll)
- [ ] Interactive diagram states (hover reveals details)
- [ ] Exportable diagrams (SVG download)
- [ ] Print-optimized styles
- [ ] Dark mode variant

### Not Planned (Intentional)
- ❌ Photos or illustrations (diagram-first principle)
- ❌ Heavy animations (calm, purposeful only)
- ❌ Marketing language (editorial tone)
- ❌ Decorative elements (restraint over embellishment)

## Documentation

- **Design System**: `/docs/design-bcg/README.md`
- **Adaptation Plan**: `/docs/design-bcg/05-STARTUPAI-ADAPTATION-PLAN.md`
- **Design Tokens**: `/docs/design-bcg/01-DESIGN-TOKENS.md`
- **Components**: `/docs/design-bcg/02-COMPONENTS.md`
- **Layouts**: `/docs/design-bcg/03-LAYOUTS.md`

## Comparison

| Feature | Home V5 | Home V6 (BCG) |
|---------|---------|---------------|
| Visual Style | Modern SaaS | Consulting-grade |
| Colors | Pastels + Emerald | Restrained Emerald |
| Graphics | Charts + Data Viz | Diagrams + Flows |
| Typography | Sans-serif | Serif headlines |
| Spacing | Comfortable | Generous |
| Tone | Friendly | Professional |
| Focus | Features | Systems |
| Aesthetic | StartupAI Brand | BCG-inspired |

## Credits

- **Design System**: Inspired by BCG.com, McKinsey Insights, Financial Times Digital
- **Philosophy**: Clarity over decoration, typography carries hierarchy
- **Approach**: Diagram-first, image-free, systems thinking

---

**Status**: ✅ Production-Ready  
**Version**: 1.0  
**Last Updated**: February 2, 2026
