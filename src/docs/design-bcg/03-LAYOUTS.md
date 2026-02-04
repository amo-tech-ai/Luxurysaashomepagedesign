# Layout Patterns
## BCG-Inspired Page Structures

**Version**: 1.0  
**Philosophy**: One Idea Per Screen, Editorial Structure

---

## Layout Philosophy

### Core Principles

1. **Three-panel logic** — Left (context), Center (content), Right (insights)
2. **Generous whitespace** — Never cramped
3. **Clear hierarchy** — One focal point per screen
4. **Reading comfort** — Optimal text width (680px)
5. **Structural navigation** — Clear wayfinding

---

## Layout 1: Editorial Article

### Long-Form Analysis Page

**Structure**:
```
┌─────────────────────────────────────────────────────────────┐
│ Header (Logo, Nav)                                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    [Category Label]                         │
│                                                             │
│              Large Editorial Headline                       │
│            That Invites Deep Reading                        │
│                                                             │
│     Subheadline providing context and setting              │
│     expectations for what follows below                    │
│                                                             │
│     [Author] │ [Date] │ [Reading Time]                     │
│     ─────────────────────────────────────                  │
│                                                             │
├─────────┬───────────────────────────────┬─────────────────┤
│         │                               │                 │
│ [Nav]   │   MAIN CONTENT AREA           │   KEY FINDINGS  │
│         │                               │                 │
│ Contents│   Paragraph one with          │   • Finding 1   │
│         │   comfortable reading width   │                 │
│ • Intro │   and generous line-height.   │   • Finding 2   │
│ • Body  │                               │                 │
│ • Data  │   Paragraph two continues     │   • Finding 3   │
│ • Close │   the analysis...             │                 │
│         │                               │   ┌───────────┐ │
│         │   [Data Visualization]        │   │ STAT      │ │
│         │                               │   │           │ │
│         │   Paragraph three provides    │   │   75%     │ │
│         │   interpretation and links    │   │  Growth   │ │
│         │   back to key insights.       │   │           │ │
│         │                               │   └───────────┘ │
│         │                               │                 │
│         │   ### Section Headline        │   RELATED       │
│         │                               │                 │
│         │   More content follows with   │   [Article 1]   │
│         │   clear structure...          │   [Article 2]   │
│         │                               │   [Article 3]   │
│         │                               │                 │
└─────────┴───────────────────────────────┴─────────────────┘
```

### CSS Implementation

```css
.article-layout {
  display: grid;
  grid-template-columns: 240px 1fr 320px;
  gap: 64px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;
  background: #F7F6F3;
}

/* Article Header (Spans all columns) */
.article-hero {
  grid-column: 1 / -1;
  max-width: 800px;
  margin: 80px auto 64px;
  text-align: left;
}

/* Left: Table of Contents */
.article-nav {
  position: sticky;
  top: 120px;
  align-self: start;
}

/* Center: Main Content */
.article-content {
  max-width: 680px;
  font-size: 16px;
  line-height: 1.6;
  color: #1F1F1F;
}

.article-content h2 {
  font-family: var(--font-serif);
  font-size: 36px;
  font-weight: 400;
  margin-top: 64px;
  margin-bottom: 24px;
}

.article-content h3 {
  font-family: var(--font-serif);
  font-size: 24px;
  font-weight: 500;
  margin-top: 48px;
  margin-bottom: 16px;
}

.article-content p {
  margin-bottom: 24px;
}

/* Right: Insights Sidebar */
.article-sidebar {
  position: sticky;
  top: 120px;
  align-self: start;
}
```

---

## Layout 2: Strategy Dashboard

### Executive Overview Screen

**Structure**:
```
┌─────────────────────────────────────────────────────────────┐
│ Header (Logo, Nav, User)                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Dashboard Title                          [Actions]          │
│ Last updated: March 15, 2026                               │
│                                                             │
├─────────┬───────────────────────────────────────────────────┤
│         │                                                   │
│ [Nav]   │   KPI OVERVIEW                                    │
│         │                                                   │
│ • Over  │   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌────────┐│
│ • Perf  │   │  75%    │ │  +12%   │ │  2,400  │ │ $4.2M  ││
│ • Team  │   │Accuracy │ │ Growth  │ │ Users   │ │Revenue ││
│ • Data  │   └─────────┘ └─────────┘ └─────────┘ └────────┘│
│         │                                                   │
│         │   KEY INSIGHTS                                    │
│         │                                                   │
│         │   ┌─────────────────────────────────────────────┐│
│         │   │                                             ││
│         │   │ Chart: Revenue Growth by Quarter            ││
│         │   │ [Clean bar chart visualization]             ││
│         │   │                                             ││
│         │   └─────────────────────────────────────────────┘│
│         │                                                   │
│         │   ┌─────────────────┐  ┌─────────────────────┐  │
│         │   │ Market Share    │  │ Customer Segments  │  │
│         │   │ Analysis        │  │ Breakdown          │  │
│         │   │                 │  │                    │  │
│         │   │ [Chart/Table]   │  │ [Chart/Table]      │  │
│         │   │                 │  │                    │  │
│         │   └─────────────────┘  └─────────────────────┘  │
│         │                                                   │
└─────────┴───────────────────────────────────────────────────┘
```

### CSS Implementation

```css
.dashboard-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 48px;
  min-height: 100vh;
  background: #F7F6F3;
}

/* Sidebar Navigation */
.dashboard-nav {
  background: #FFFFFF;
  border-right: 1px solid #E6E4E1;
  padding: 32px 24px;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}

/* Main Dashboard Area */
.dashboard-main {
  padding: 48px 80px 48px 0;
}

.dashboard-header {
  margin-bottom: 48px;
}

.dashboard-title {
  font-family: var(--font-serif);
  font-size: 40px;
  font-weight: 400;
  color: #1F1F1F;
  margin-bottom: 8px;
}

.dashboard-meta {
  font-size: 14px;
  color: #5A5A5A;
}

/* KPI Grid */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}

/* Charts Grid */
.charts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 48px;
}
```

---

## Layout 3: AI Insight Screen (Three-Panel)

### Intelligence Dashboard

**Structure**:
```
┌─────────────────────────────────────────────────────────────┐
│ Header                                                      │
├──────────┬────────────────────────────────┬─────────────────┤
│          │                                │                 │
│ CONTEXT  │   PRIMARY INSIGHT              │  ACTIONS        │
│          │                                │                 │
│ Topic:   │   AI-Generated Analysis        │  What to do:    │
│ Industry │                                │                 │
│          │   [Key visualization showing   │  1. Validate    │
│ Related: │    the main finding]           │     findings    │
│ • Link 1 │                                │                 │
│ • Link 2 │   Summary paragraph explaining │  2. Share with  │
│ • Link 3 │   the core insight and why it  │     team        │
│          │   matters for strategic        │                 │
│ Sources: │   decision-making.             │  3. Schedule    │
│ • Data 1 │                                │     review      │
│ • Data 2 │   Supporting evidence and      │                 │
│          │   data points follow...        │  Downloads:     │
│ Date:    │                                │  • PDF Report   │
│ Mar 2026 │   ### Key Implications         │  • Raw Data     │
│          │                                │  • Slides       │
│          │   Bullet points highlighting:  │                 │
│          │   • Implication one            │  Share:         │
│          │   • Implication two            │  [Email] [Link] │
│          │   • Implication three          │                 │
│          │                                │                 │
└──────────┴────────────────────────────────┴─────────────────┘
```

### CSS Implementation

```css
.insight-layout {
  display: grid;
  grid-template-columns: 280px 1fr 320px;
  gap: 48px;
  max-width: 1600px;
  margin: 0 auto;
  padding: 48px 80px;
  background: #F7F6F3;
  min-height: 100vh;
}

/* Left: Context Panel */
.context-panel {
  background: #FFFFFF;
  border: 1px solid #E6E4E1;
  padding: 32px;
  position: sticky;
  top: 48px;
  align-self: start;
}

.context-section {
  margin-bottom: 32px;
}

.context-label {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #5A5A5A;
  margin-bottom: 12px;
}

/* Center: Main Insight Content */
.insight-content {
  background: #FFFFFF;
  border: 1px solid #E6E4E1;
  padding: 64px;
}

.insight-title {
  font-family: var(--font-serif);
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  color: #1F1F1F;
  margin-bottom: 32px;
}

.insight-visualization {
  margin: 48px 0;
  padding: 32px;
  background: #F7F6F3;
  border: 1px solid #E6E4E1;
}

/* Right: Actions Panel */
.actions-panel {
  position: sticky;
  top: 48px;
  align-self: start;
}

.action-card {
  background: #E8F3F0;  /* Accent light */
  border: 1px solid #0D5F4E;
  border-left-width: 4px;
  padding: 32px;
  margin-bottom: 24px;
}

.action-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.action-list li {
  padding: 12px 0;
  border-bottom: 1px solid rgba(13, 95, 78, 0.2);
}

.action-list li:last-child {
  border-bottom: none;
}
```

---

## Layout 4: Data Report Page

### Structured Analysis Document

**Structure**:
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                     REPORT TITLE                            │
│                  Strategic Analysis Report                  │
│                                                             │
│              [Executive Summary in center]                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ TABLE OF CONTENTS                                           │
│ 1. Overview                                                 │
│ 2. Market Analysis                                          │
│ 3. Key Findings                                             │
│ 4. Recommendations                                          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ 1. OVERVIEW                                                 │
│                                                             │
│ Content paragraph introducing the scope and purpose of      │
│ this analysis document...                                   │
│                                                             │
│ ┌───────────────────────────────────────────────────────┐  │
│ │                                                       │  │
│ │ [Full-width chart or data visualization]              │  │
│ │                                                       │  │
│ └───────────────────────────────────────────────────────┘  │
│                                                             │
│ ──────────────────────────────────────────────────────────  │
│                                                             │
│ 2. MARKET ANALYSIS                                          │
│                                                             │
│ ┌─────────────────────┐  ┌─────────────────────┐          │
│ │ Segment A           │  │ Segment B           │          │
│ │ [Data]              │  │ [Data]              │          │
│ └─────────────────────┘  └─────────────────────┘          │
│                                                             │
│ Supporting analysis and interpretation...                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### CSS Implementation

```css
.report-layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px;
  background: #F7F6F3;
}

/* Report Header */
.report-header {
  text-align: center;
  padding: 64px 0;
  margin-bottom: 64px;
  border-bottom: 2px solid #E6E4E1;
}

.report-title {
  font-family: var(--font-serif);
  font-size: 56px;
  font-weight: 400;
  line-height: 1.1;
  color: #1F1F1F;
  margin-bottom: 16px;
}

.report-subtitle {
  font-size: 20px;
  color: #5A5A5A;
}

/* Table of Contents */
.report-toc {
  background: #FFFFFF;
  border: 1px solid #E6E4E1;
  padding: 48px;
  margin-bottom: 64px;
}

.report-toc-title {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #5A5A5A;
  margin-bottom: 24px;
}

.report-toc-list {
  list-style: none;
  padding: 0;
}

.report-toc-list li {
  padding: 12px 0;
  font-size: 16px;
  color: #1F1F1F;
  border-bottom: 1px solid #E6E4E1;
}

.report-toc-list li:last-child {
  border-bottom: none;
}

/* Report Sections */
.report-section {
  background: #FFFFFF;
  border: 1px solid #E6E4E1;
  padding: 64px;
  margin-bottom: 48px;
}

.report-section-number {
  font-size: 14px;
  font-weight: 600;
  color: #0D5F4E;
  margin-bottom: 8px;
}

.report-section-title {
  font-family: var(--font-serif);
  font-size: 32px;
  font-weight: 400;
  color: #1F1F1F;
  margin-bottom: 32px;
}
```

---

## Layout 5: Homepage / Overview

### Entry Point Design

**Structure**:
```
┌─────────────────────────────────────────────────────────────┐
│ Header (Logo, Nav)                                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                                                             │
│              Main Value Proposition                         │
│           One Clear Editorial Headline                      │
│                                                             │
│     Supporting text that explains the core offering         │
│                                                             │
│              [Primary CTA]                                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ FEATURED INSIGHTS                                           │
│                                                             │
│ ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│ │              │  │              │  │              │      │
│ │ [Image]      │  │ [Image]      │  │ [Image]      │      │
│ │              │  │              │  │              │      │
│ │ Article 1    │  │ Article 2    │  │ Article 3    │      │
│ │ Title        │  │ Title        │  │ Title        │      │
│ │              │  │              │  │              │      │
│ │ Brief desc   │  │ Brief desc   │  │ Brief desc   │      │
│ │              │  │              │  │              │      │
│ └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ DATA HIGHLIGHTS                                             │
│                                                             │
│ ┌──────────────────────────────────────────────────────┐   │
│ │                                                      │   │
│ │ [Clean data visualization showing key metrics]       │   │
│ │                                                      │   │
│ └──────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### CSS Implementation

```css
.homepage-layout {
  background: #F7F6F3;
}

/* Hero Section */
.hero {
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 80px;
  text-align: center;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: 56px;
  font-weight: 400;
  line-height: 1.15;
  color: #1F1F1F;
  margin-bottom: 24px;
}

.hero-subtitle {
  font-size: 20px;
  line-height: 1.6;
  color: #5A5A5A;
  margin-bottom: 48px;
}

/* Featured Grid */
.featured-section {
  max-width: 1280px;
  margin: 0 auto;
  padding: 96px 80px;
}

.featured-title {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #5A5A5A;
  margin-bottom: 48px;
  text-align: center;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
}

.featured-card {
  background: #FFFFFF;
  border: 1px solid #E6E4E1;
  overflow: hidden;
  transition: border-color 150ms ease;
}

.featured-card:hover {
  border-color: #0D5F4E;
}

.featured-card-image {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-bottom: 1px solid #E6E4E1;
}

.featured-card-content {
  padding: 32px;
}

.featured-card-title {
  font-family: var(--font-serif);
  font-size: 24px;
  font-weight: 400;
  color: #1F1F1F;
  margin-bottom: 16px;
}

.featured-card-desc {
  font-size: 14px;
  line-height: 1.5;
  color: #5A5A5A;
}
```

---

## Responsive Patterns

### Desktop (>1024px)
- Use full three-panel layouts
- Max-width 1440px (with generous margins)
- Grid: 240px | 1fr | 320px

### Tablet (768-1024px)
- Collapse to two-panel (remove right sidebar)
- Reduce margins: 48px
- Grid: 200px | 1fr

### Mobile (<768px)
- Single-column layout
- Stack all panels vertically
- Reduce margins: 24px
- Maintain generous line-height

```css
@media (max-width: 1024px) {
  .three-panel-layout {
    grid-template-columns: 200px 1fr;
    gap: 32px;
    padding: 0 48px;
  }
  
  .panel-right {
    display: none;  /* Or move to bottom */
  }
}

@media (max-width: 768px) {
  .three-panel-layout {
    grid-template-columns: 1fr;
    padding: 0 24px;
  }
  
  .panel-left,
  .panel-center,
  .panel-right {
    width: 100%;
  }
  
  .article-title {
    font-size: 36px;
  }
  
  .card {
    padding: 24px;
  }
}
```

---

## Layout Decision Tree

### Which layout to use?

**Long-form article** → Editorial Article Layout  
**Executive dashboard** → Strategy Dashboard Layout  
**AI-generated insight** → Three-Panel Insight Layout  
**Structured report** → Data Report Layout  
**Homepage/landing** → Overview Layout

---

**End of Layout Patterns**

Next: See [Data Visualization](./04-DATA-VIZ.md) for chart styling.
