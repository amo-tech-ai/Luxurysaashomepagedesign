# Market Analysis - Implementation Plan

**Feature:** Market Analysis Report  
**Version:** 1.0  
**Date:** 2026-02-04  
**Status:** 📋 PLANNING → 🚧 IMPLEMENTATION

---

## Overview

Comprehensive market analysis page displaying TAM/SAM/SOM, competitive landscape, GTM strategy, revenue models, and risk assessment for startups. Follows BCG consulting aesthetic with structured layouts and "thinking visuals."

---

## Design System Alignment

### Color Palette

```css
/* Backgrounds */
--bg-primary: #FAF9F7    /* Cream */
--bg-secondary: #F5F3EF  /* Beige */
--bg-white: #FFFFFF

/* Emerald/Sage Accents */
--green-dark: #0D5F4E
--green-medium: #6B9D89
--green-forest: #0E3E1B

/* Borders */
--border: #E8E6E1

/* Text */
--text-primary: #2D2D2D
--text-secondary: #696969
--text-tertiary: #A3A3A3

/* Status Colors */
--success: #0D5F4E
--warning: #FFB84D
--danger: #DC2626
```

### Typography

- **Headlines:** Serif (font-serif), extralight/light
- **Body:** Sans-serif (default), regular
- **Data/Metrics:** Sans-serif, bold for emphasis
- **Labels:** Uppercase, tracking-wider, small

---

## Page Structure (17 Sections)

```
┌─────────────────────────────────────┐
│  1. Header / Status Bar             │
├─────────────────────────────────────┤
│  2. Summary Metrics Row             │
├─────────────────────────────────────┤
│  3. Market Overview & Size          │
├──────────────────┬──────────────────┤
│  4. Market       │  5. Target       │
│     Breakdown    │     Audience     │
├──────────────────┴──────────────────┤
│  6. Market Trends                   │
├─────────────────────────────────────┤
│  7. Industry Benchmarks             │
├─────────────────────────────────────┤
│  8. Competitive Positioning Matrix  │
├─────────────────────────────────────┤
│  9. Direct Competitors (7 cards)    │
├─────────────────────────────────────┤
│  10. Strategic Partners             │
├─────────────────────────────────────┤
│  11. Go-to-Market Strategy          │
├─────────────────────────────────────┤
│  12. Implementation Roadmap         │
├──────────────────┬──────────────────┤
│  13. Budget      │  14. Revenue     │
│      Breakdown   │      Models      │
├──────────────────┴──────────────────┤
│  15. Risk Assessment                │
├─────────────────────────────────────┤
│  16. Opportunities & Regulations    │
├─────────────────────────────────────┤
│  17. Research Sources               │
├─────────────────────────────────────┤
│  18. Bottom CTA Bar                 │
└─────────────────────────────────────┘
```

---

## Component Inventory

### New Components to Create

| Component | Purpose | Dependencies |
|-----------|---------|--------------|
| `MarketMetricCard` | TAM/SAM/SOM display | - |
| `CompetitorCard` | Competitor profile | Collapsible |
| `PositioningMatrix` | 2D scatter plot | recharts |
| `BudgetDonut` | Budget breakdown chart | recharts |
| `TimelinePhase` | Roadmap timeline | - |
| `ChannelCard` | GTM channel details | Badge |
| `RiskCard` | Risk with mitigation | Alert |
| `BenchmarkBar` | Horizontal bar chart | recharts |
| `TrendCard` | Market trend item | Badge |
| `SourceList` | Research sources | Collapsible |

### Reusable shadcn Components

- `Card`, `CardHeader`, `CardContent`
- `Badge`
- `Button`
- `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent`
- `Separator`
- `Alert`
- `Accordion`

### Charts (recharts)

- **Donut Chart:** Market breakdown, budget
- **Scatter Plot:** Competitive positioning
- **Bar Chart:** Industry benchmarks
- **Funnel Chart:** TAM/SAM/SOM (custom)

---

## Data Structure

### Mock Data Schema

```typescript
interface MarketAnalysis {
  // Header
  status: 'draft' | 'in-progress' | 'complete';
  step: { current: number; total: number };
  counts: {
    competitors: number;
    sources: number;
    risks: number;
  };

  // Metrics
  tam: string;
  sam: string;
  som: string;
  cagr: string;
  europeMarket: string;

  // Summary
  topOpportunity: string;
  topRisk: string;
  revenueModel: string;

  // Market
  marketBreakdown: Array<{
    segment: string;
    value: string;
    percentage: number;
  }>;

  // Target Audience
  demographics: {
    description: string;
    age: string;
    industries: string;
    gender: string;
  };
  psychographics: {
    title: string;
    description: string;
  };

  // Trends
  trends: Array<{
    id: number;
    timeframe: 'short' | 'medium' | 'long';
    description: string;
    impact: 'low' | 'medium' | 'high';
  }>;

  // Benchmarks
  benchmarks: {
    cac: number;
    ltv: number;
    ltvCac: number;
  };

  // Competitors
  competitors: Array<{
    name: string;
    website: string;
    marketShare: string;
    stage: string;
    funding: string;
    pricing: string;
    products: string[];
    strengths: string[];
    weaknesses: string[];
    opportunity: string;
    position: { price: number; quality: number };
  }>;

  // Partners
  partners: Array<{
    name: string;
    type: 'strategic' | 'technology' | 'distribution';
    description: string;
    timeline: string;
  }>;

  // GTM
  gtmChannels: Array<{
    name: string;
    effort: 'low' | 'medium' | 'high';
    impact: 'low' | 'medium' | 'high';
    description: string;
    cost: string;
    time: string;
  }>;
  earlyAdopters: string[];
  launchStrategy: string;

  // Roadmap
  phases: Array<{
    name: string;
    duration: string;
    budget: string;
    activities: string[];
    milestones: string[];
  }>;

  // Budget
  budget: {
    total: string;
    breakdown: Array<{
      category: string;
      amount: string;
      percentage: number;
    }>;
  };

  // Revenue Models
  revenueModels: Array<{
    name: string;
    fit: 'low' | 'medium' | 'high';
    complexity: 'low' | 'medium' | 'high';
    description: string;
    advantages: string[];
    challenges: string[];
    timeline: string;
    examples: string[];
  }>;

  // Risks
  risks: Array<{
    title: string;
    impact: 'low' | 'medium' | 'high';
    impactDescription: string;
    mitigation: string;
  }>;

  // Sources
  sources: Array<{
    title: string;
    domain: string;
    type: string;
    url: string;
  }>;
}
```

---

## Implementation Phases

### Phase 1: Core Layout (Day 1)
- [x] Create plan document
- [ ] Create `/app/market-analysis/page.tsx`
- [ ] Implement header + status bar
- [ ] Implement summary metrics row
- [ ] Add to App.tsx routing
- [ ] Add to Footer links
- [ ] Add to Sitemap

**Deliverable:** Basic page loads with header

### Phase 2: Market Data Sections (Day 1-2)
- [ ] Market Overview & Size
- [ ] Market Breakdown (donut chart)
- [ ] Target Audience (two-column)
- [ ] Market Trends (cards)
- [ ] Industry Benchmarks (bar chart)

**Deliverable:** Top 5 sections render with mock data

### Phase 3: Competitive Analysis (Day 2)
- [ ] Positioning Matrix (scatter plot)
- [ ] Competitor Cards (expandable)
- [ ] Strategic Partners

**Deliverable:** Competitive landscape visualized

### Phase 4: Strategy & Planning (Day 2-3)
- [ ] GTM Strategy channels
- [ ] Implementation Roadmap timeline
- [ ] Budget Breakdown (donut)
- [ ] Revenue Models

**Deliverable:** Strategic sections complete

### Phase 5: Risk & Sources (Day 3)
- [ ] Risk Assessment cards
- [ ] Opportunities & Regulations (collapsible)
- [ ] Research Sources list
- [ ] Bottom CTA bar

**Deliverable:** All sections complete

### Phase 6: Polish & Responsive (Day 3)
- [ ] Mobile responsive layouts
- [ ] Hover states
- [ ] Loading states
- [ ] Export/Share buttons (UI only)

**Deliverable:** Production-ready page

---

## Technical Implementation

### File Structure

```
/app/market-analysis/
  ├── page.tsx                 # Main page component
  └── components/
      ├── MarketMetricCard.tsx
      ├── CompetitorCard.tsx
      ├── PositioningMatrix.tsx
      ├── BudgetChart.tsx
      ├── BenchmarkChart.tsx
      ├── TimelinePhase.tsx
      ├── ChannelCard.tsx
      ├── RiskCard.tsx
      └── mockData.ts          # Sample data
```

### Dependencies

Already available:
- `recharts` - Charts
- `lucide-react` - Icons
- Tailwind CSS v4

No new dependencies needed.

---

## Key Design Decisions

### 1. Collapsible Sections

**Competitor Cards:** Show 3 by default, "Show more" expands rest  
**Sources:** Show 5, "Show all 60 sources" expands  
**Opportunities/Regulations:** Accordion, collapsed by default

**Rationale:** Reduce initial cognitive load, allow power users to drill down

### 2. Charts

**TAM/SAM/SOM:** Metric cards (not funnel) for clarity  
**Market Breakdown:** Donut chart with legend  
**Positioning Matrix:** Scatter plot with star for user  
**Budget:** Donut with category breakdown  
**Benchmarks:** Horizontal bars for easy comparison

**Rationale:** "Thinking visuals" - structured, consultant-style

### 3. Competitor Cards

**Layout:** Horizontal card with:
- Header: Name + website link
- Metadata: Market share, stage, funding
- Highlight: "Your Opportunity" box
- Products: Chips
- Two-column: Strengths vs Weaknesses

**Rationale:** Scannable, consistent, action-oriented

### 4. Color Coding

- **Success (Green):** Opportunities, strengths, high impact
- **Warning (Yellow/Orange):** Risks, concerns, medium impact
- **Neutral (Gray):** Informational, low priority
- **Accent (Emerald):** Primary actions, CTAs

**Rationale:** Visual hierarchy without using blues/purples

### 5. Mobile Strategy

- Stack two-column layouts
- Collapse competitor cards (show 1)
- Simplify positioning matrix to list view
- Horizontal scroll for wide charts

---

## UX Improvements (from Wireframe Feedback)

### High Priority

✅ **Sticky Section Nav:** Add jump links to sections  
✅ **Competitor Collapse:** Show 3, expand to see all 7  
✅ **TAM/SAM/SOM Consolidation:** Single section, not repeated  
✅ **Mobile Stack:** All two-column layouts stack vertically

### Medium Priority

⏳ **Interactive Charts:** Hover tooltips on all charts  
⏳ **Export/Share:** PDF export, share link (UI only for now)  
⏳ **Risk Heat Map:** Impact x Likelihood matrix (Phase 2)  
⏳ **Revenue Calculator:** Interactive projection tool (Phase 2)

### Low Priority

⏳ **Edit Mode:** Allow users to customize assumptions  
⏳ **Competitor Compare:** Side-by-side table view  
⏳ **Source Quality:** Star ratings per source  
⏳ **Gantt Timeline:** Visual dependencies (currently linear)

---

## Accessibility Checklist

- [ ] All charts have accessible data tables
- [ ] Color-blind safe palette (no red-green only)
- [ ] Focus states on all interactive elements
- [ ] ARIA labels on collapsibles
- [ ] Keyboard navigation (tab, enter, space)
- [ ] Screen reader friendly headings (H1, H2, H3)
- [ ] Alt text on all icons (decorative = aria-hidden)

---

## Testing Plan

### Manual Testing

**Desktop (Chrome, Safari, Firefox):**
- [ ] All sections render
- [ ] Charts display correctly
- [ ] Collapsibles expand/collapse
- [ ] Hover states work
- [ ] Links open correctly

**Mobile (iOS, Android):**
- [ ] Layouts stack properly
- [ ] Charts remain readable
- [ ] Cards expand without overflow
- [ ] Touch targets adequate (44px)

**Accessibility:**
- [ ] Tab navigation works
- [ ] Screen reader reads content
- [ ] Color contrast passes WCAG AA

### Performance

- [ ] Initial load < 3s
- [ ] Charts render smoothly
- [ ] No layout shift (CLS)
- [ ] Images/charts lazy load

---

## Integration Points

### With Canvas (Task 6)

```typescript
// Future: Fetch canvas data to pre-fill market analysis
const { data: canvas } = await supabase
  .from('lean_canvases')
  .select('customer_segments, value_proposition')
  .eq('startup_id', startupId);

// Use canvas.customer_segments for Target Audience
// Use canvas.value_proposition for Competitive Advantage
```

### With Chat AI (Task 7)

```typescript
// Future: AI generates market insights from conversation
const analysis = await supabase.functions.invoke('analyze-market', {
  body: { 
    startupId, 
    conversationHistory,
    industry: 'fashion'
  }
});
```

### With Validator V4 (Task 8)

```typescript
// Market Analysis data feeds into Validator
// - TAM/SAM/SOM → Market score
// - Competitors → Competition risk
// - GTM Strategy → Execution readiness
```

---

## Mock Data Source

Currently using FashionOS example:
- **Industry:** AI Event Management for Fashion
- **TAM:** $3.1B
- **SAM:** $310M-$620M
- **SOM:** $25M-$75M
- **Competitors:** 7 (FashionGPT, SpreeAI, Perfect Corp, etc.)
- **GTM:** Conferences, direct sales, content marketing

**Future:** Replace with user-specific data from AI analysis

---

## Success Metrics

### User Engagement
- **Time on page:** 3-5 minutes (comprehensive review)
- **Section clicks:** 80% expand at least 1 section
- **Export rate:** 30% click PDF export (Phase 2)

### Clarity
- **Survey question:** "Do you understand your market opportunity?"
- **Target:** 90% "Yes" or "Somewhat"

### Actionability
- **Survey question:** "Do you know your next steps for GTM?"
- **Target:** 85% "Yes"

---

## Future Enhancements (Post-Launch)

### Phase 2 Features
- [ ] Interactive revenue calculator
- [ ] Risk heat map (Impact x Likelihood)
- [ ] Competitor comparison table
- [ ] Gantt chart roadmap
- [ ] Source quality ratings

### Phase 3 Features
- [ ] PDF export (server-side rendering)
- [ ] Share link with access control
- [ ] Edit/customize mode
- [ ] Version history
- [ ] Comments/collaboration

### Integration
- [ ] Connect to Supabase for real data
- [ ] AI-generated insights
- [ ] Real-time market data (APIs)
- [ ] Competitive intelligence scraping

---

## Open Questions

1. **Data Source:** Where does market analysis data come from?
   - **Answer:** Initially mock data; later AI-generated from chat + external APIs

2. **Update Frequency:** How often should market data refresh?
   - **Answer:** On-demand (user clicks "Refresh analysis")

3. **Export Format:** PDF, DOCX, or both?
   - **Answer:** Start with PDF; add DOCX in Phase 2

4. **Permissions:** Who can view/edit market analysis?
   - **Answer:** Startup owner + invited collaborators (Phase 3)

---

## Dependencies & Blockers

### Dependencies
- ✅ Tailwind CSS v4 configured
- ✅ recharts installed
- ✅ lucide-react installed
- ✅ Design system established

### Blockers
- ❌ None currently

### Nice-to-Have
- ⏳ Real market data API (not blocking)
- ⏳ PDF export service (Phase 2)
- ⏳ AI market analysis function (Phase 3)

---

## Estimated Effort

| Phase | Duration | Deliverable |
|-------|----------|-------------|
| Phase 1: Core Layout | 4 hours | Header + routing |
| Phase 2: Market Data | 6 hours | Top 5 sections |
| Phase 3: Competitive | 4 hours | Competitors + positioning |
| Phase 4: Strategy | 6 hours | GTM + roadmap + budget |
| Phase 5: Risk & Sources | 3 hours | Final sections |
| Phase 6: Polish | 3 hours | Mobile + interactions |
| **Total** | **26 hours** | **Full page** |

**Target:** 3 days (8-9 hours/day)

---

## Status Tracking

| Task | Status | Owner | Due |
|------|--------|-------|-----|
| Plan document | ✅ Done | - | 2026-02-04 |
| Page creation | 🚧 In Progress | - | 2026-02-04 |
| Header + routing | ⏳ Pending | - | 2026-02-04 |
| Market sections | ⏳ Pending | - | 2026-02-05 |
| Competitive sections | ⏳ Pending | - | 2026-02-05 |
| Strategy sections | ⏳ Pending | - | 2026-02-05 |
| Polish + mobile | ⏳ Pending | - | 2026-02-06 |

---

## Related Documentation

- [Validator V4 Complete](./VALIDATOR-V4-COMPLETE.md)
- [Task 6: Canvas Database](./TASK-6-COMPLETE-SUMMARY.md)
- [Task 7: Chat AI](./TASK-7-COMPLETE-SUMMARY.md)

---

**Plan Status:** ✅ COMPLETE  
**Next Step:** 🚀 BEGIN IMPLEMENTATION

**Progress:** 35% → 45% (+10% for Market Analysis)
