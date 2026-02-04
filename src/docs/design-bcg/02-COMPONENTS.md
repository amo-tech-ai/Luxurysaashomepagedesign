# Component Library
## BCG-Inspired Consulting-Grade Components

**Version**: 1.0  
**Philosophy**: Minimal, Structural, Content-First

---

## Design Philosophy

### Component Principles

1. **Structural, not decorative**
2. **Hairline borders, no shadows** (unless elevation needed)
3. **Generous internal padding**
4. **Content dictates size**
5. **White backgrounds on canvas**
6. **Accent color only for insight**

---

## 1. Card Component

### Standard Card

**Visual Specifications**:
```
┌────────────────────────────────────────┐
│                                        │
│  Card Title                            │
│                                        │
│  Body content goes here with          │
│  comfortable reading width and         │
│  generous line-height. No cramping.   │
│                                        │
│  Supporting metadata                   │
│                                        │
└────────────────────────────────────────┘
```

**CSS**:
```css
.card {
  background: #FFFFFF;
  border: 1px solid #E6E4E1;
  padding: 48px;
  margin-bottom: 32px;
}

.card-title {
  font-family: var(--font-serif);
  font-size: 28px;
  font-weight: 400;
  line-height: 1.3;
  color: #1F1F1F;
  margin-bottom: 24px;
}

.card-body {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  color: #1F1F1F;
  max-width: 680px;
}

.card-meta {
  font-size: 13px;
  color: #5A5A5A;
  margin-top: 24px;
}
```

**Variants**:

**Minimal Card** (No border):
```css
.card-minimal {
  background: #FFFFFF;
  border: none;
  padding: 48px;
}
```

**Insight Card** (Accent border):
```css
.card-insight {
  background: #FFFFFF;
  border: 2px solid #0D5F4E;
  border-left-width: 4px;  /* Emphasis on left */
  padding: 48px;
}
```

---

## 2. Three-Panel Layout

### BCG Standard Layout

**Structure**:
```
┌──────────┬───────────────────────────┬──────────┐
│          │                           │          │
│  Left    │       Center              │  Right   │
│  Panel   │       Content             │  Panel   │
│          │                           │          │
│ Context/ │  Primary article/         │ Insights/│
│ Nav      │  dashboard content        │ Related  │
│          │                           │          │
└──────────┴───────────────────────────┴──────────┘
```

**CSS Grid**:
```css
.three-panel-layout {
  display: grid;
  grid-template-columns: 240px 1fr 320px;
  gap: 48px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px;
  background: #F7F6F3;
}

.panel-left {
  /* Navigation, context */
}

.panel-center {
  /* Main content area */
  max-width: 800px;
}

.panel-right {
  /* Insights, related content */
}
```

**Responsive Collapse**:
```css
@media (max-width: 1024px) {
  .three-panel-layout {
    grid-template-columns: 1fr;
    padding: 48px 24px;
  }
  
  .panel-left {
    order: 1;
  }
  
  .panel-center {
    order: 2;
  }
  
  .panel-right {
    order: 3;
  }
}
```

---

## 3. Insight Panel (Right Sidebar)

### Key Findings Panel

**Visual**:
```
┌────────────────────────┐
│ KEY FINDINGS           │
├────────────────────────┤
│                        │
│ • Finding one with     │
│   supporting detail    │
│                        │
│ • Finding two with     │
│   context              │
│                        │
│ • Finding three        │
│                        │
└────────────────────────┘
```

**CSS**:
```css
.insight-panel {
  background: #FFFFFF;
  border: 1px solid #E6E4E1;
  padding: 32px;
  position: sticky;
  top: 80px;
}

.insight-panel-header {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #5A5A5A;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #E6E4E1;
}

.insight-panel-item {
  font-size: 14px;
  line-height: 1.5;
  color: #1F1F1F;
  margin-bottom: 20px;
  padding-left: 16px;
  border-left: 2px solid #0D5F4E;
}

.insight-panel-item:last-child {
  margin-bottom: 0;
}
```

**Variant: Stat Panel**:
```css
.stat-panel {
  background: #E8F3F0;  /* Accent light background */
  border: none;
  padding: 32px;
}

.stat-value {
  font-size: 48px;
  font-weight: 300;
  line-height: 1.1;
  color: #0D5F4E;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: #5A5A5A;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

---

## 4. KPI Block

### Metric Display

**Visual**:
```
┌──────────────┬──────────────┬──────────────┐
│              │              │              │
│    75%       │    +12%      │    2,400     │
│  Accuracy    │  Growth      │  Users       │
│              │              │              │
└──────────────┴──────────────┴──────────────┘
```

**CSS**:
```css
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
}

.kpi-block {
  background: #FFFFFF;
  border: 1px solid #E6E4E1;
  padding: 32px;
  text-align: center;
}

.kpi-value {
  font-size: 48px;
  font-weight: 300;
  line-height: 1.1;
  color: #1F1F1F;
  margin-bottom: 8px;
}

.kpi-label {
  font-size: 13px;
  font-weight: 400;
  color: #5A5A5A;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Accent variant */
.kpi-block.accent .kpi-value {
  color: #0D5F4E;
}
```

---

## 5. Data Table

### Clean Tabular Data

**CSS**:
```css
.data-table {
  width: 100%;
  border-collapse: collapse;
  background: #FFFFFF;
  border: 1px solid #E6E4E1;
}

.data-table th {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #5A5A5A;
  text-align: left;
  padding: 16px 24px;
  border-bottom: 2px solid #E6E4E1;
  background: #F7F6F3;
}

.data-table td {
  font-size: 14px;
  color: #1F1F1F;
  padding: 16px 24px;
  border-bottom: 1px solid #E6E4E1;
}

.data-table tr:last-child td {
  border-bottom: none;
}

.data-table tr:hover {
  background: #F7F6F3;
}

/* Numeric columns */
.data-table td.numeric {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* Accent row */
.data-table tr.highlight {
  background: #E8F3F0;
}

.data-table tr.highlight td {
  color: #0D5F4E;
  font-weight: 500;
}
```

---

## 6. Chart Container

### Data Visualization Wrapper

**CSS**:
```css
.chart-container {
  background: #FFFFFF;
  border: 1px solid #E6E4E1;
  padding: 48px;
  margin-bottom: 48px;
}

.chart-title {
  font-family: var(--font-serif);
  font-size: 24px;
  font-weight: 400;
  color: #1F1F1F;
  margin-bottom: 8px;
}

.chart-subtitle {
  font-size: 14px;
  color: #5A5A5A;
  margin-bottom: 32px;
}

.chart-wrapper {
  /* Chart library content */
  margin-bottom: 24px;
}

.chart-source {
  font-size: 12px;
  color: #888888;
  border-top: 1px solid #E6E4E1;
  padding-top: 16px;
}
```

### Chart Style Guidelines

**Bar Charts**:
```css
/* Use Recharts or similar */
.recharts-bar-rectangle {
  fill: #0D5F4E;  /* Primary emerald */
}

.recharts-bar-rectangle:hover {
  fill: #0A4D3F;
}

/* Axis styling */
.recharts-cartesian-axis-tick-value {
  font-size: 12px;
  fill: #5A5A5A;
}

.recharts-cartesian-axis-line {
  stroke: #E6E4E1;
}

.recharts-cartesian-grid-horizontal line {
  stroke: #E6E4E1;
  stroke-dasharray: 0;  /* Solid, not dashed */
}
```

**Line Charts**:
```css
.recharts-line-curve {
  stroke: #0D5F4E;
  stroke-width: 2px;
}

.recharts-line-dots circle {
  fill: #0D5F4E;
  stroke: #FFFFFF;
  stroke-width: 2px;
}
```

---

## 7. Author/Byline Component

### Article Metadata

**Visual**:
```
┌────────────────────────────────────────┐
│                                        │
│  [Photo]  John Smith                   │
│           Partner, BCG                 │
│           March 15, 2026               │
│                                        │
└────────────────────────────────────────┘
```

**CSS**:
```css
.author-block {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px 0;
  border-top: 1px solid #E6E4E1;
  border-bottom: 1px solid #E6E4E1;
  margin: 48px 0;
}

.author-photo {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #E6E4E1;
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: 16px;
  font-weight: 500;
  color: #1F1F1F;
  margin-bottom: 4px;
}

.author-title {
  font-size: 14px;
  color: #5A5A5A;
  margin-bottom: 4px;
}

.author-date {
  font-size: 13px;
  color: #888888;
}
```

---

## 8. Section Divider

### Structural Breaks

**Hairline Divider**:
```css
.section-divider {
  border: none;
  border-top: 1px solid #E6E4E1;
  margin: 64px 0;
}
```

**Thick Divider** (Major sections):
```css
.section-divider-thick {
  border: none;
  border-top: 2px solid #B8B6B3;
  margin: 96px 0;
}
```

**Accent Divider** (Rare):
```css
.section-divider-accent {
  border: none;
  border-top: 2px solid #0D5F4E;
  margin: 64px 0;
  width: 80px;  /* Short, left-aligned */
}
```

---

## 9. Callout / Pullquote

### Highlighted Content

**Visual**:
```
┌────────────────────────────────────────┐
│ │                                      │
│ │  "Important insight or quote         │
│ │   that deserves emphasis."           │
│ │                                      │
│ │  — Source attribution                │
│ │                                      │
└────────────────────────────────────────┘
```

**CSS**:
```css
.callout {
  background: #E8F3F0;
  border-left: 4px solid #0D5F4E;
  padding: 32px 48px;
  margin: 48px 0;
  font-style: italic;
}

.callout-text {
  font-size: 20px;
  line-height: 1.6;
  color: #1F1F1F;
  margin-bottom: 16px;
}

.callout-attribution {
  font-size: 14px;
  font-style: normal;
  color: #5A5A5A;
}
```

**Pullquote** (Floating):
```css
.pullquote {
  float: right;
  width: 320px;
  margin: 0 0 24px 48px;
  padding: 24px;
  border-left: 2px solid #0D5F4E;
}

.pullquote-text {
  font-family: var(--font-serif);
  font-size: 24px;
  line-height: 1.4;
  font-style: italic;
  color: #1F1F1F;
}
```

---

## 10. Button / CTA (Minimal)

### Rare, Purposeful CTAs

**Primary Button**:
```css
.button-primary {
  display: inline-flex;
  align-items: center;
  padding: 16px 32px;
  background: #0D5F4E;
  border: none;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: background 150ms ease;
  cursor: pointer;
}

.button-primary:hover {
  background: #0A4D3F;
}

.button-primary:focus {
  outline: 2px solid #0D5F4E;
  outline-offset: 4px;
}
```

**Secondary Button** (Outline):
```css
.button-secondary {
  display: inline-flex;
  align-items: center;
  padding: 16px 32px;
  background: transparent;
  border: 1px solid #0D5F4E;
  color: #0D5F4E;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: all 150ms ease;
  cursor: pointer;
}

.button-secondary:hover {
  background: #E8F3F0;
}
```

**Text Link**:
```css
.text-link {
  color: #0D5F4E;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 150ms ease;
}

.text-link:hover {
  border-bottom-color: #0D5F4E;
}
```

---

## 11. Navigation (Left Sidebar)

### Structural Navigation

**CSS**:
```css
.nav-sidebar {
  position: sticky;
  top: 80px;
  padding: 32px 0;
}

.nav-section {
  margin-bottom: 32px;
}

.nav-section-title {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #5A5A5A;
  margin-bottom: 16px;
}

.nav-link {
  display: block;
  font-size: 14px;
  color: #1F1F1F;
  text-decoration: none;
  padding: 8px 0;
  border-left: 2px solid transparent;
  padding-left: 16px;
  margin-left: -16px;
  transition: all 150ms ease;
}

.nav-link:hover {
  color: #0D5F4E;
  border-left-color: #6B9D89;
}

.nav-link.active {
  color: #0D5F4E;
  border-left-color: #0D5F4E;
  font-weight: 500;
}
```

---

## 12. Article Header

### Editorial Article Top

**Visual**:
```
Category Label

Large Editorial Headline
That Spans Multiple Lines

Subheadline or introduction text that provides 
context and invites reading.

[Author Block]
──────────────────────
```

**CSS**:
```css
.article-header {
  max-width: 800px;
  margin: 0 auto 64px;
  text-align: left;
}

.article-category {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0D5F4E;
  margin-bottom: 24px;
}

.article-title {
  font-family: var(--font-serif);
  font-size: 56px;
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.015em;
  color: #1F1F1F;
  margin-bottom: 24px;
}

.article-subtitle {
  font-size: 20px;
  line-height: 1.6;
  color: #5A5A5A;
  margin-bottom: 48px;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px 0;
  border-top: 1px solid #E6E4E1;
  border-bottom: 1px solid #E6E4E1;
}
```

---

## 13. Image with Caption

### Editorial Photography

**CSS**:
```css
.figure {
  margin: 48px 0;
}

.figure-image {
  width: 100%;
  height: auto;
  display: block;
  border: 1px solid #E6E4E1;
}

.figure-caption {
  font-size: 13px;
  line-height: 1.5;
  color: #5A5A5A;
  margin-top: 16px;
  padding-left: 16px;
  border-left: 2px solid #E6E4E1;
}
```

**Full-Bleed Image**:
```css
.figure-fullbleed {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: 64px;
  margin-bottom: 64px;
}

.figure-fullbleed img {
  width: 100%;
  height: auto;
  display: block;
}
```

---

## 14. List Styles

### Structured Lists

**Unordered List**:
```css
.content-list {
  list-style: none;
  padding: 0;
  margin: 32px 0;
}

.content-list li {
  position: relative;
  padding-left: 32px;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 1.6;
  color: #1F1F1F;
}

.content-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 12px;
  width: 6px;
  height: 6px;
  background: #0D5F4E;
  border-radius: 50%;
}
```

**Ordered List** (Numbered):
```css
.content-list-ordered {
  list-style: none;
  counter-reset: list-counter;
  padding: 0;
  margin: 32px 0;
}

.content-list-ordered li {
  position: relative;
  padding-left: 48px;
  margin-bottom: 24px;
  counter-increment: list-counter;
}

.content-list-ordered li::before {
  content: counter(list-counter);
  position: absolute;
  left: 0;
  top: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: #0D5F4E;
  border: 1px solid #0D5F4E;
  border-radius: 50%;
}
```

---

## Component Usage Guidelines

### When to Use Each Component

**Card**: Default container for distinct content blocks  
**Three-Panel Layout**: Complex pages with navigation + insights  
**Insight Panel**: Key findings, stats, related content  
**KPI Block**: Dashboard metrics, at-a-glance data  
**Data Table**: Structured tabular information  
**Chart Container**: Data visualizations  
**Author Block**: Article attribution  
**Callout**: Important quotes or insights  
**Button**: Rare, purposeful CTAs only  
**Navigation**: Table of contents, section links  
**Article Header**: Long-form editorial introductions

---

## Responsive Behavior

### Desktop (>1024px)
- Use three-panel layouts
- Full card padding (48px)
- Generous margins

### Tablet (768-1024px)
- Collapse to two-panel or single column
- Reduce padding (32px)
- Maintain readability

### Mobile (<768px)
- Single-column layout
- Reduce padding (24px)
- Stack all panels
- Maintain generous line-height

---

**End of Component Library**

Next: See [Layout Patterns](./03-LAYOUTS.md) for complete page examples.
