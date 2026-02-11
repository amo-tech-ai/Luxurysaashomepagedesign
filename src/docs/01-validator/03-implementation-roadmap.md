# Validator System Implementation Roadmap

**Status:** 🔄 In Progress  
**Updated:** February 10, 2026  
**Goal:** Production-ready validator flow with 3 screens + backend integration

---

## Current State Assessment

### ✅ What Exists
1. **Landing Page** - `/app/validator/page.tsx` (Basic input, demo mode)
2. **Progress Page** - `/app/validator/run/[sessionId]/page.tsx` (Basic 7-agent animation)
3. **Report Page** - `/app/validator/report/[reportId]/page.tsx` (Basic layout, mock data)
4. **Routing** - All routes configured in App.tsx
5. **Types** - Basic types in `/types/validator.ts`

### ❌ What's Missing
1. **Spec compliance** - Current pages don't match `/docs/01-validator/` specs
2. **3-panel layout** - Report page needs context panel + trace drawer
3. **AI context panel** - On-demand section details
4. **Progress polling** - Real-time agent status updates
5. **Citation tracking** - Linked sources
6. **PDF export** - Report download
7. **14-section structure** - Report needs all sections
8. **Execution trace** - Agent metadata display

---

## Implementation Plan (Sequential)

### Phase 1: Data Layer (Foundation) ✅ COMPLETE
**Goal:** Solid TypeScript interfaces + mock data

**Files to Create:**
1. ✅ `/data/validator-types.ts` - Complete interfaces for all 14 sections
2. ✅ `/data/validator-mock-data.ts` - Realistic mock report (dental AI example)
3. ✅ `/data/validator-context-data.ts` - Context panel content for all sections

**Acceptance:**
- All 14 section interfaces defined
- Mock data matches spec structure
- Context data has 4 blocks per section

---

### Phase 2: Progress Screen Rebuild 🔄 IN PROGRESS
**Goal:** Match `/docs/01-validator/01-progress.md` spec exactly

**File:** `/app/validator/run/[sessionId]/page.tsx`

**Changes:**
1. ✅ 7 agents with proper names/descriptions
2. ✅ Status icons: ✓ (done), ⚙ (running, animated), ○ (queued), ✗ (failed)
3. ✅ Progress bar (0-100%)
4. ✅ Estimated time remaining
5. ✅ Agent details (what each is checking)
6. ✅ Sequential execution (not parallel)
7. ✅ Auto-redirect after 1s delay when complete
8. 🔄 Error handling (partial success, total failure, timeout)

**Acceptance:**
- Matches wireframe exactly
- Shows agent work in real-time
- Graceful error states

---

### Phase 3: Report Components 🔄 NEXT
**Goal:** Build reusable section components

**Files to Create:**
1. `/app/validator/report/components/ReportSection.tsx` - Collapsible section wrapper
2. `/app/validator/report/components/ScoreBadge.tsx` - 72/100 circular badge
3. `/app/validator/report/components/TAMFunnelChart.tsx` - Market sizing visual
4. `/app/validator/report/components/CompetitorCard.tsx` - Individual competitor
5. `/app/validator/report/components/RiskMatrix.tsx` - 2×2 risk grid
6. `/app/validator/report/components/RadarChart.tsx` - 7-dimension scoring

**Acceptance:**
- Each component matches design spec
- Reusable and composable
- Proper TypeScript types

---

### Phase 4: Report Page Rebuild 📋 PENDING
**Goal:** Match `/docs/01-validator/02-validator-report.md` spec exactly

**File:** `/app/validator/report/[reportId]/page.tsx`

**Structure:**
```
Header (score badge + export button)
├── Left Panel (Report - 60%)
│   ├── Section 1 (expanded)
│   ├── Section 2 (expanded)
│   ├── Section 3-14 (collapsed, show count)
│   └── Each section has ⓘ button
├── Right Panel (Context - 40%)
│   ├── Section name
│   ├── More Detail block
│   ├── Why This Matters block
│   ├── Risks & Gaps block
│   └── Validate Next block
└── Bottom Drawer (Trace)
    └── 7 agents with metadata
```

**Acceptance:**
- 3-panel layout working
- Sections expand/collapse
- Context panel loads on ⓘ click
- Citations linked
- Trace drawer functional

---

### Phase 5: Context Panel Hook 🔄 NEXT
**Goal:** Efficient caching + loading

**File:** `/hooks/useReportContext.ts`

**Logic:**
```typescript
useReportContext(reportId: string) {
  const [context, setContext] = useState({})
  const [loading, setLoading] = useState(false)
  const cacheRef = useRef(new Map())

  const loadContext = async (section: number, content: string) => {
    // Check cache first
    if (cacheRef.current.has(section)) {
      return cacheRef.current.get(section)
    }

    // Call API (or mock for now)
    setLoading(true)
    const data = await fetchContextData(reportId, section, content)
    cacheRef.current.set(section, data)
    setContext(prev => ({ ...prev, [section]: data }))
    setLoading(false)
  }

  return { context, loading, loadContext }
}
```

**Acceptance:**
- Cache hit: <100ms
- Cache miss: <2s (with loading state)
- No duplicate API calls

---

### Phase 6: PDF Export 📄 PENDING
**Goal:** Professional A4 report download

**File:** `/app/validator/report/utils/exportPDF.ts`

**Libraries:**
- `jspdf` - PDF generation
- `html2canvas` - Section rendering

**Content:**
1. Cover page (score, idea name, date)
2. All 14 sections
3. Citations page
4. Table of contents

**Acceptance:**
- File size: 1.5-3 MB
- Professional formatting
- All content included
- Filename: `validation-report-{ideaName}-{date}.pdf`

---

### Phase 7: Polish & Testing ✨ PENDING
**Goal:** Production-ready quality

**Tasks:**
1. Mobile responsive (bottom sheet for context)
2. Keyboard navigation
3. Loading states
4. Error boundaries
5. Accessibility (ARIA labels)
6. Performance optimization

**Testing:**
1. All 3 screens load correctly
2. Navigation flow works
3. Mock data displays properly
4. Context panel caching works
5. PDF export generates
6. Mobile layout works

---

## Success Metrics

### Must Have (P0)
- ✅ All 3 screens functional
- ✅ Mock data displays correctly
- ✅ Navigation between screens works
- 🔄 14-section report renders
- 🔄 Context panel loads
- 🔄 Citations linked

### Should Have (P1)
- 📋 PDF export working
- 📋 Execution trace visible
- 📋 Mobile responsive
- 📋 Error handling

### Nice to Have (P2)
- 📋 Real backend integration
- 📋 Share link functionality
- 📋 Section regeneration
- 📋 Analytics tracking

---

## Current Sprint Focus

### This Session Goals
1. ✅ Create comprehensive data types
2. ✅ Build mock data (dental AI example)
3. 🔄 Rebuild progress screen
4. 🔄 Create report components
5. 🔄 Rebuild report page

### Next Session Goals
1. Context panel implementation
2. PDF export
3. Polish & testing
4. Backend integration planning

---

## File Structure

```
/app/validator/
├── page.tsx                          ✅ EXISTS (needs minor updates)
├── run/
│   └── [sessionId]/
│       └── page.tsx                  🔄 REBUILD IN PROGRESS
└── report/
    ├── [reportId]/
    │   └── page.tsx                  🔄 REBUILD PLANNED
    ├── components/
    │   ├── ReportSection.tsx         📋 TO CREATE
    │   ├── ScoreBadge.tsx            📋 TO CREATE
    │   ├── TAMFunnelChart.tsx        📋 TO CREATE
    │   ├── CompetitorCard.tsx        📋 TO CREATE
    │   ├── RiskMatrix.tsx            📋 TO CREATE
    │   └── RadarChart.tsx            📋 TO CREATE
    └── utils/
        └── exportPDF.ts              📋 TO CREATE

/data/
├── validator-types.ts                ✅ CREATED
├── validator-mock-data.ts            ✅ CREATED
└── validator-context-data.ts         ✅ CREATED

/hooks/
└── useReportContext.ts               📋 TO CREATE

/docs/01-validator/
├── 00-wireframes.md                  ✅ SPEC COMPLETE
├── 01-progress.md                    ✅ SPEC COMPLETE
└── 02-validator-report.md            ✅ SPEC COMPLETE
```

---

## Status Legend
- ✅ Complete
- 🔄 In Progress
- 📋 Planned
- ❌ Blocked

---

**Next Action:** Create validator data types and mock data.
