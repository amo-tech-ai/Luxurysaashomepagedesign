# Startup AI Validator - Implementation Plan

> **Project:** Idea Proof Decision-First Validation Report v2.0  
> **Philosophy:** Decision tool, not document. Scan-first, expand-later.  
> **Updated:** 2026-02-04

---

## 🎯 Overall Progress

```
████████░░░░░░░░░░░░░░░░░░░░░░░░░░ 25%

Phase 1: Structure & Layout    ████████░░░░░░░░ 50%
Phase 2: Core Components       ██░░░░░░░░░░░░░░ 15%
Phase 3: Evidence Blocks       ░░░░░░░░░░░░░░░░  0%
Phase 4: Polish & Mobile       ░░░░░░░░░░░░░░░░  0%
```

**Status:** 6 of 24 tasks completed

---

## 📊 Component Summary Table

| # | Component | Priority | Status | Complexity | Est. Time |
|---|-----------|----------|--------|------------|-----------|
| **PHASE 1: STRUCTURE & LAYOUT** |
| 1 | Page container & routing | P0 | 🟢 Done | Low | 15 min |
| 2 | Main 5-block layout structure | P0 | 🟢 Done | Low | 20 min |
| 3 | Responsive grid system | P0 | 🟡 In Progress | Medium | 30 min |
| 4 | BCG aesthetic styling setup | P0 | 🟡 In Progress | Medium | 45 min |
| **PHASE 2: VERDICT HEADER** |
| 5 | Score circle component (72/100) | P0 | 🟢 Done | Medium | 30 min |
| 6 | Verdict label with color scale | P0 | 🟡 In Progress | Low | 20 min |
| 7 | Two-line summary text | P0 | 🔴 Todo | Low | 10 min |
| 8 | Meta chips (Updated, Stage, Conf) | P0 | 🔴 Todo | Low | 20 min |
| 9 | Share & Export buttons | P2 | 🔴 Todo | Medium | 30 min |
| **PHASE 3: TRADEOFFS BLOCK** |
| 10 | Two-column grid layout | P0 | 🟢 Done | Low | 15 min |
| 11 | Strengths list with checkmarks | P0 | 🟡 In Progress | Low | 20 min |
| 12 | Concerns list with warnings | P0 | 🟡 In Progress | Low | 20 min |
| 13 | 4-5 item max validation | P1 | 🔴 Todo | Low | 10 min |
| **PHASE 4: CONFIDENCE BLOCK** |
| 14 | Confidence progress bar | P0 | 🔴 Todo | Medium | 25 min |
| 15 | Signal completion cards (3) | P0 | 🔴 Todo | Medium | 35 min |
| 16 | Expandable signal detail view | P1 | 🔴 Todo | High | 45 min |
| **PHASE 5: ACTIONS BLOCK** |
| 17 | Numbered action cards (1-3) | P0 | 🟢 Done | Medium | 30 min |
| 18 | Action titles & descriptions | P0 | 🔴 Todo | Low | 15 min |
| 19 | Start CTA buttons | P0 | 🔴 Todo | Low | 15 min |
| **PHASE 6: EVIDENCE BLOCK** |
| 20 | 7-card grid (collapsed state) | P0 | 🔴 Todo | Medium | 40 min |
| 21 | Card scores & key metrics | P0 | 🔴 Todo | Medium | 30 min |
| 22 | Accordion expand/collapse | P0 | 🔴 Todo | High | 60 min |
| 23 | 7 expanded detail views | P1 | 🔴 Todo | High | 120 min |
| **PHASE 7: POLISH** |
| 24 | Mobile responsive layout | P1 | 🔴 Todo | High | 90 min |

**Totals:**
- 🟢 Completed: 6 tasks (25%)
- 🟡 In Progress: 6 tasks (25%)
- 🔴 Todo: 12 tasks (50%)

---

## 🚀 Implementation Prompts

### PHASE 1: Structure & Layout

#### ✅ 1. Page Container & Routing
**Status:** 🟢 Done  
**Prompt:** N/A - Already implemented

---

#### ✅ 2. Main 5-Block Layout Structure
**Status:** 🟢 Done  
**Prompt:** N/A - Already implemented

---

#### 🔶 3. Responsive Grid System
**Status:** 🟡 In Progress  
**Prompt:**
```
Update the validator page to use responsive breakpoints:
- Mobile: single column, stack all blocks vertically
- Tablet: maintain single column but adjust card grids to 2-col
- Desktop: full layout with proper spacing

Use max-w-7xl container, px-6 lg:px-8 padding.
Ensure Evidence block cards adapt: 2 cols mobile, 3 cols tablet, 4 cols desktop.
```

---

#### 🔶 4. BCG Aesthetic Styling
**Status:** 🟡 In Progress  
**Prompt:**
```
Apply BCG consulting aesthetic to the validator page:
- Background: #FAF9F7 for page, #F5F3EF for cards
- Accent colors: #0d5f4e (emerald), #6b9d89 (sage green)
- Remove any blues, purples, reds
- Add generous spacing: py-16 between blocks, py-8 within cards
- Use architectural layouts with clear visual hierarchy
- Border colors: use gray-200 for subtle separation
- Serif headlines (text-3xl, text-4xl) with sans-serif body
```

---

### PHASE 2: Verdict Header

#### ✅ 5. Score Circle Component
**Status:** 🟢 Done  
**Prompt:** N/A - Already implemented

---

#### 🔶 6. Verdict Label with Color Scale
**Status:** 🟡 In Progress  
**Prompt:**
```
Enhance the verdict label to show:
- Score-based color coding:
  - 0-20: Red (#dc2626) "STOP"
  - 21-40: Orange (#ea580c) "HIGH RISK"
  - 41-60: Yellow (#ca8a04) "NEEDS WORK"
  - 61-80: Green (#0d5f4e) "WORTH PURSUING"
  - 81-100: Dark Green (#0E3E1B) "STRONG YES"

Add visual scale indicator below score with current position marked.
Display large, centered, bold label above the two-line summary.
```

---

#### 🔴 7. Two-Line Summary Text
**Status:** 🔴 Todo  
**Prompt:**
```
Add concise two-line summary below score circle:
- Line 1: Key finding (e.g., "Strong problem-solution fit with clear market demand.")
- Line 2: Primary directive (e.g., "Execute with focus on SMB teams.")
- Style: text-gray-600, max 2 lines, action-oriented language
- Center-aligned below verdict label
```

---

#### 🔴 8. Meta Chips
**Status:** 🔴 Todo  
**Prompt:**
```
Add metadata badge row below summary:
- Updated: "2h ago" with clock icon
- Stage: "PSF" (Problem-Solution Fit) with badge
- Confidence: "75%" with progress indicator
- Style: small badges, gray outline, spacing gap-4
- Horizontal layout, center-aligned
```

---

#### 🔴 9. Share & Export Buttons
**Status:** 🔴 Todo  
**Prompt:**
```
Add action buttons in top-right of header:
- [Share] button with link icon
- [Export] button with download icon
- Style: ghost buttons, emerald text on hover
- Horizontal layout with gap-2
- P2 priority - placeholder functionality for now
```

---

### PHASE 3: Tradeoffs Block

#### ✅ 10. Two-Column Grid Layout
**Status:** 🟢 Done  
**Prompt:** N/A - Already implemented

---

#### 🔶 11. Strengths List with Checkmarks
**Status:** 🟡 In Progress  
**Prompt:**
```
Populate strengths column with real data:
- Use CheckCircle icon in emerald (#0d5f4e)
- List items: single line each, max 10 words
- Example items:
  ✓ Clear pain point validated
  ✓ 15 interviews confirm need
  ✓ Simple solution resonates
  ✓ Team has relevant experience
- Max 4-5 items, no more
- Style: text-gray-700, icon size-4, gap-3 vertical spacing
```

---

#### 🔶 12. Concerns List with Warnings
**Status:** 🟡 In Progress  
**Prompt:**
```
Populate concerns column with real data:
- Use AlertTriangle icon in amber (#ca8a04)
- List items: single line each, max 10 words
- Example items:
  ⚠ Crowded market
  ⚠ No mobile experience yet
  ⚠ Pricing not fully validated
  ⚠ Limited runway (8 months)
- Max 4-5 items, no more
- Style: text-gray-700, icon size-4, gap-3 vertical spacing
```

---

#### 🔴 13. 4-5 Item Max Validation
**Status:** 🔴 Todo  
**Prompt:**
```
Add validation to ensure tradeoffs section stays scannable:
- If more than 5 strengths, show top 5 with "+X more" expandable link
- If more than 5 concerns, show top 5 with "+X more" expandable link
- Sort by priority/severity before displaying
- Expandable should open modal or inline expansion
```

---

### PHASE 4: Confidence Block

#### 🔴 14. Confidence Progress Bar
**Status:** 🔴 Todo  
**Prompt:**
```
Create confidence level visualization:
- Title: "Confidence Level"
- Horizontal progress bar with 3 zones:
  - Low (0-40%): gray
  - Medium (41-70%): amber
  - High (71-100%): emerald
- Current position marker at 75% with label "Medium-High"
- Visual scale labels: Low | Medium | High
- Bar should be 60-70% width of container
- Center-aligned with emerald fill color
```

---

#### 🔴 15. Signal Completion Cards
**Status:** 🔴 Todo  
**Prompt:**
```
Add 3 signal cards below confidence bar:
1. "15/15 interviews" with green checkmark "Done"
2. "8/12 assumptions" with yellow dot "In Progress"
3. "3/5 experiments" with yellow dot "In Progress"

Each card:
- Small badge with fraction count
- Status label with color coding
- Grid layout 3 columns equal width
- Card background #F5F3EF
- Border gray-200
```

---

#### 🔴 16. Expandable Signal Detail View
**Status:** 🔴 Todo  
**Prompt:**
```
Add "See all validation signals ▼" link below cards.
When clicked, expand to show detailed progress bars:
- Interviews: 15/15 (100% - green bar) "All target customer interviews completed"
- Assumptions: 8/12 (67% - amber bar) "4 critical assumptions still being tested"
- Experiments: 3/5 (60% - amber bar) "Pricing A/B test and 2 others in progress"

Each with progress bar, fraction, percentage, and status description.
Use Collapsible component. Smooth animation.
```

---

### PHASE 5: Actions Block

#### ✅ 17. Numbered Action Cards
**Status:** 🟢 Done  
**Prompt:** N/A - Already implemented

---

#### 🔴 18. Action Titles & Descriptions
**Status:** 🔴 Todo  
**Prompt:**
```
Populate 3 action cards with real content:

Card 1:
- Number: ① (circled)
- Title: "Validate $29 pricing"
- Description: "Highest risk assumption blocking your next stage"

Card 2:
- Number: ② (circled)
- Title: "Build mobile prototype"
- Description: "Top feature request from customer interviews"

Card 3:
- Number: ③ (circled)
- Title: "Close 5 more beta users"
- Description: "Need usage data to validate retention hypothesis"

Style: Bold titles, muted gray descriptions, circled numbers in emerald
```

---

#### 🔴 19. Start CTA Buttons
**Status:** 🔴 Todo  
**Prompt:**
```
Add [Start →] button to right side of each action card:
- Ghost button style
- Emerald text (#0d5f4e) on hover
- Arrow icon (ArrowRight from lucide)
- Right-aligned within card
- Placeholder click handler for now (P0 is visual only)
```

---

### PHASE 6: Evidence Block

#### 🔴 20. 7-Card Grid (Collapsed State)
**Status:** 🔴 Todo  
**Prompt:**
```
Create Evidence & Analysis section with 7 cards in grid:
- Top row: Market, Problem, Solution, Business (4 cards)
- Bottom row: Risks, Roadmap, Sources (3 cards)
- Grid: 4 columns desktop, 2 columns tablet, 1 column mobile
- Each card shows: title, key metric, score (if applicable), [+] expand icon
- Background #F5F3EF, border gray-200
- Padding p-6, gap-4 between cards

Example collapsed card content:
- Market: "8/10" + "$12B TAM" + [+]
- Problem: "9/10" + "15 confirm" + [+]
- Solution: "7/10" + "5-min setup" + [+]
- Business: "7/10" + "8.5x LTV" + [+]
- Risks: "3 critical" + "See risks" + [+]
- Roadmap: "On Track" + "8-12 weeks" + [+]
- Sources: "5 links" + "View all" + [+]
```

---

#### 🔴 21. Card Scores & Key Metrics
**Status:** 🔴 Todo  
**Prompt:**
```
Style the collapsed card metrics:
- Large score (8/10) at top in emerald color, bold
- Key metric below in smaller gray text
- Centered layout
- Icon at bottom center (ChevronDown)
- Hover state: subtle scale up, emerald border

Use consistent sizing and spacing across all 7 cards
```

---

#### 🔴 22. Accordion Expand/Collapse
**Status:** 🔴 Todo  
**Prompt:**
```
Implement accordion behavior for Evidence cards:
- Use shadcn Accordion component
- Only one card can be expanded at a time
- Smooth height animation
- Icon changes from [+] to [-] or ChevronDown to ChevronUp
- Expanded card takes full width on mobile
- Collapsed cards stay visible in grid
- [Collapse ▲] button appears at bottom of expanded content
```

---

#### 🔴 23. Seven Expanded Detail Views
**Status:** 🔴 Todo  
**Prompt:**
```
Create detailed expanded views for each evidence card:

MARKET:
- TAM/SAM/SOM bar chart visualization
- Market stage bullets (Maturity, Seasonality, Competition)
- Target regions list
- Key insight callout

PROBLEM:
- 3 quote cards from customer interviews
- Name and role attribution
- Frequency metrics (90% daily pain)
- Severity score (8.2/10 average)

SOLUTION:
- Validation status checklist (4 items with check/warning icons)
- Competitor positioning tagline
- Feature-problem fit score

BUSINESS:
- 4-metric grid: LTV ($384), CAC ($45), LTV/CAC (8.5x), Payback (1.5mo)
- Pricing tiers display (Starter $29, Team $79, Business $199)
- Validation warning for pricing

RISKS:
- 3 risk cards with severity color coding (red/yellow)
- Risk description (1-2 lines)
- Mitigation strategy for each

ROADMAP:
- Timeline visualization (4 milestones)
- Milestone table (name, target, status)
- Progress indicator

SOURCES:
- 5 source link cards
- Format: [→] Title + domain + category tag
- External link behavior

Use generous spacing, clear hierarchy, emerald accents
```

---

### PHASE 7: Polish

#### 🔴 24. Mobile Responsive Layout
**Status:** 🔴 Todo  
**Prompt:**
```
Optimize entire page for mobile (< 640px):
- Stack all 5 blocks vertically
- Verdict: reduce score circle size, stack meta chips 2x2
- Tradeoffs: single column (Strengths full width, then Concerns full width)
- Confidence: full-width bar, stack signal cards 1 per row
- Actions: full-width cards, stack vertically
- Evidence: 2-column grid → 1-column on mobile
- Reduce padding from py-16 to py-8
- Font sizes: scale down headlines by 20%
- Test on 375px width minimum

Ensure touch targets are minimum 44x44px
Add mobile-specific spacing adjustments
```

---

## 📋 Data Requirements

### Mock Data Needed

**Verdict Data:**
- Overall score (0-100)
- Verdict label
- Summary text (2 lines)
- Last updated timestamp
- Stage label
- Confidence percentage

**Tradeoffs:**
- 4-5 strength items
- 4-5 concern items

**Confidence:**
- Signal completion data (interviews, assumptions, experiments)
- Detailed progress descriptions

**Actions:**
- 3 prioritized next steps with titles and reasons

**Evidence - 7 sections:**
1. Market: TAM/SAM/SOM, stage, regions, insight
2. Problem: 3+ quotes, frequency, severity
3. Solution: validation checklist, positioning, fit score
4. Business: LTV, CAC, pricing tiers
5. Risks: 3+ risks with severity and mitigation
6. Roadmap: 4+ milestones with timeline
7. Sources: 5+ source links with metadata

---

## 🎨 Design Tokens

**Colors:**
- Background: `#FAF9F7`, `#F5F3EF`
- Primary: `#0d5f4e` (emerald)
- Secondary: `#6b9d89` (sage)
- Dark: `#0E3E1B`
- Success: `#16a34a`
- Warning: `#ca8a04`
- Danger: `#dc2626`
- Text: `gray-900`, `gray-700`, `gray-600`, `gray-500`
- Border: `gray-200`, `gray-300`

**Typography:**
- Headlines: Serif font family
- Body: Sans-serif font family
- Sizes: text-4xl (headlines), text-xl (subheads), text-base (body)

**Spacing:**
- Section gaps: `py-16` (desktop), `py-8` (mobile)
- Card padding: `p-6` or `p-8`
- Element gaps: `gap-4`, `gap-6`, `gap-8`

**Effects:**
- Transitions: `transition-colors duration-200`
- Hover: `hover:scale-105`, `hover:border-emerald`
- Shadows: Use sparingly, subtle only

---

## ✅ Definition of Done

### Per Component:
- [ ] Matches wireframe layout exactly
- [ ] Uses BCG color palette only (no blues/purples/reds)
- [ ] Responsive on mobile, tablet, desktop
- [ ] Proper spacing and typography
- [ ] Hover states implemented
- [ ] Accessible (keyboard nav, ARIA labels)
- [ ] Smooth animations (< 300ms)

### Per Phase:
- [ ] All components in phase completed
- [ ] Visual QA passed on 3 screen sizes
- [ ] No layout shift or overflow issues
- [ ] Consistent with design system

### Overall Project:
- [ ] All 24 tasks completed
- [ ] Mobile layout fully functional
- [ ] Data structure defined and integrated
- [ ] Performance optimized (< 2s load)
- [ ] Cross-browser tested
- [ ] Passes accessibility audit
- [ ] Documentation updated

---

## 🚦 Next Steps

### Immediate (Today):
1. Complete responsive grid system (#3)
2. Finish BCG aesthetic styling (#4)
3. Complete verdict label color scale (#6)

### This Week:
4. Finish tradeoffs block (#11, #12, #13)
5. Build confidence block (#14, #15, #16)
6. Populate action cards (#18, #19)

### Next Week:
7. Build evidence card grid (#20, #21)
8. Implement accordion behavior (#22)
9. Create all expanded views (#23)

### Final Week:
10. Mobile responsive polish (#24)
11. Testing and bug fixes
12. Performance optimization

---

## 📈 Success Metrics

**User Goals:**
- Can make go/no-go decision in < 30 seconds
- Scan-first, expand-later works intuitively
- Verdict is clear without reading details
- Actions are immediately obvious

**Technical Goals:**
- Page load < 2 seconds
- Smooth 60fps animations
- Works on all modern browsers
- Passes WCAG AA accessibility
- Mobile-first responsive

**Design Goals:**
- Premium, consulting-firm aesthetic
- Calm, intelligent, trustworthy feeling
- Color palette strictly BCG (beige/cream/emerald)
- Generous white space maintained
- Typography hierarchy clear

---

## 📝 Notes

- Prioritize P0 tasks before P1 or P2
- Use shadcn/ui components consistently
- Maintain BCG aesthetic throughout
- Test mobile layout continuously
- Keep data structure flexible for API integration later
- Focus on decision-making UX over data display
- Collapse by default, expand on demand
- No code in this doc - implementation happens in components

---

**Last Updated:** 2026-02-04  
**Document Version:** 1.0  
**Owner:** StartupAI Product Team
