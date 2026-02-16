# Gantt System Implementation Roadmap

**Status:** 🔄 Ready to Start  
**Updated:** February 10, 2026  
**Goal:** Production-ready 3-panel AI Gantt system with interactive timeline + AI strategy panel

---

## Mental Model

```
Left = Filters & Phases
Main = Interactive Gantt Timeline  
Right = AI Strategy + Risks + Dependencies + Next Actions
```

**Product Truth:** Timeline shows execution sequence. AI panel explains strategic dependencies and risks.

---

## Current State Assessment

### ✅ What Exists
1. **Specifications** - Complete docs in `/docs/01-gantt/01-gantt-plan.md`
2. **Wireframes** - 3-panel layout, component structure, AI prompt design
3. **Visual Design** - Figma component specs, color system, interaction states

### ❌ What's Missing
1. **Data types** - TypeScript interfaces for tasks, dependencies, phases
2. **Mock data** - Sample StartupAI roadmap with real tasks
3. **Components** - All Gantt UI components (timeline, bars, AI panel)
4. **AI integration** - Gemini Pro analysis endpoint
5. **Page** - Main Gantt route + layout
6. **Drag-drop** - Timeline adjustment logic
7. **Dependency visualization** - Lines connecting tasks

---

## Implementation Plan (Sequential - 8 Phases)

### Phase 1: Data Layer (Foundation) 🔄 STARTING NOW
**Goal:** Complete TypeScript interfaces + realistic mock data

**Files to Create:**
1. ✅ `/data/gantt-types.ts` - Complete interfaces (Task, Dependency, Phase, AIAnalysis)
2. ✅ `/data/gantt-mock-data.ts` - StartupAI roadmap (50+ tasks, 5 layers, 12 weeks)
3. ✅ `/data/gantt-ai-analysis.ts` - Mock AI responses for each task type

**Acceptance:**
- All task properties defined (id, name, layer, start_date, end_date, status, dependencies)
- Mock roadmap covers: Foundation → Core Screens → Business → AI → Automation
- AI analysis includes: risk_level, blockers, timeline_assessment, recommendations
- Dependency graph validated (no circular dependencies)

---

### Phase 2: Timeline Components 📋 NEXT
**Goal:** Build core Gantt timeline visualization

**Files to Create:**
1. `/app/gantt/components/TimelineHeader.tsx` - Week columns + today marker
2. `/app/gantt/components/GanttRow.tsx` - Single task row with name + track
3. `/app/gantt/components/GanttTaskBar.tsx` - Interactive task bar with variants
4. `/app/gantt/components/GanttGroup.tsx` - Layer grouping (Foundation, Core, etc.)
5. `/app/gantt/components/DependencyLine.tsx` - SVG lines connecting tasks
6. `/app/gantt/components/GanttCanvas.tsx` - Main timeline container

**Acceptance:**
- Timeline scrolls horizontally (weeks) and vertically (tasks)
- Task bars positioned correctly based on start/end dates
- Clicking bar highlights it with emerald border
- Grid lines visible (week boundaries, today marker)
- Layer groups collapsible

---

### Phase 3: Left Panel (Filters) 📋 PLANNED
**Goal:** Build context panel with filters + phase navigation

**Files to Create:**
1. `/app/gantt/components/GanttSidebar.tsx` - Main left panel
2. `/app/gantt/components/FilterChip.tsx` - Phase/Layer/Status filter chips
3. `/app/gantt/components/ViewSwitch.tsx` - Timeline/Phase/Agent view toggle
4. `/app/gantt/components/PhaseProgress.tsx` - Phase completion indicators

**Features:**
- Filter by: Phase, Layer, Status, Agent Type
- View modes: Timeline (default), Phase (grouped), Agent (AI-focused)
- Phase progress bars (% complete per phase)
- Collapsible filter sections

**Acceptance:**
- Filters update timeline in real-time
- Active filters show emerald highlight
- View switch changes Gantt grouping
- Phase progress accurate

---

### Phase 4: Right Panel (AI Strategy) 📋 PLANNED
**Goal:** Build AI analysis panel that opens when clicking task

**Files to Create:**
1. `/app/gantt/components/GanttAIPanel.tsx` - Main AI panel
2. `/app/gantt/components/AIPanelHeader.tsx` - Task name + status + dates
3. `/app/gantt/components/AIInsightCard.tsx` - Risk/Suggestion/Warning cards
4. `/app/gantt/components/ImpactCard.tsx` - Timeline shift projection
5. `/app/gantt/components/AIActionGroup.tsx` - Generate Subtasks, Recalculate buttons
6. `/app/gantt/components/DependencyCard.tsx` - Dependency health visualization

**Structure (4 sections):**
1. **Task Header** - Name, status, timeline, dependency summary
2. **AI Analysis** - Risk level, blockers, dependency health
3. **Impact Projection** - Downstream effects, timeline shift
4. **Actions** - Generate subtasks, recalculate, identify blockers

**Acceptance:**
- Panel slides in from right (300ms ease-out)
- Shows AI analysis for clicked task
- Risk badges color-coded (red/yellow/green)
- Action buttons functional
- ESC closes panel

---

### Phase 5: Main Gantt Page 📋 PLANNED
**Goal:** 3-panel layout with routing + state management

**File:** `/app/gantt/page.tsx`

**Layout:**
```
Header (Roadmap title + filters)
├── Left Panel (240px) - Filters + Phase nav
├── Main Panel (flex) - Timeline canvas
└── Right Panel (360px) - AI strategy (hidden by default)
```

**State Management:**
```typescript
const [selectedTask, setSelectedTask] = useState<string | null>(null)
const [filters, setFilters] = useState<GanttFilters>({
  phases: [],
  layers: [],
  statuses: []
})
const [viewMode, setViewMode] = useState<'timeline' | 'phase' | 'agent'>('timeline')
```

**Acceptance:**
- 3-panel layout responsive
- Click task → right panel opens
- Filters update visible tasks
- View mode changes grouping
- URL updates with selected task ID

---

### Phase 6: AI Integration Hook 📋 PLANNED
**Goal:** Efficient caching + loading for AI analysis

**File:** `/hooks/useGanttAI.ts`

**Logic:**
```typescript
useGanttAI(projectId: string) {
  const [analyses, setAnalyses] = useState<Map<string, AIAnalysis>>()
  const [loading, setLoading] = useState(false)
  const cacheRef = useRef(new Map())

  const analyzeTask = async (taskId: string, context: TaskContext) => {
    // Check cache first
    if (cacheRef.current.has(taskId)) {
      return cacheRef.current.get(taskId)
    }

    // Call API (or mock for now)
    setLoading(true)
    const analysis = await fetchAIAnalysis(taskId, context)
    cacheRef.current.set(taskId, analysis)
    setAnalyses(prev => prev.set(taskId, analysis))
    setLoading(false)
  }

  return { analyses, loading, analyzeTask }
}
```

**Acceptance:**
- Cache hit: <100ms
- Cache miss: <2s (with loading state)
- No duplicate API calls
- Context includes dependencies + downstream tasks

---

### Phase 7: Drag & Drop Timeline Adjustment 📋 PLANNED
**Goal:** Drag task bars to adjust dates + AI recalculates impact

**File:** `/app/gantt/hooks/useDragTimeline.ts`

**Features:**
- Drag task bar left/right to adjust dates
- Snap to week boundaries
- Ghost preview while dragging
- Drop updates task dates
- AI recalculates downstream impact

**Library:** `react-dnd` or custom drag logic

**Acceptance:**
- Drag works smoothly (60fps)
- Dates update on drop
- Dependency lines update
- AI panel shows "Timeline adjusted" impact

---

### Phase 8: Polish & Testing ✨ PLANNED
**Goal:** Production-ready quality

**Tasks:**
1. Mobile responsive (timeline horizontal scroll on mobile)
2. Keyboard navigation (arrow keys to navigate tasks)
3. Export to PNG/PDF
4. Print-friendly view
5. Loading states
6. Error boundaries
7. Accessibility (ARIA labels, focus management)
8. Performance optimization (virtualization for 100+ tasks)

**Testing:**
1. Timeline renders correctly
2. Filters work
3. AI panel opens/closes
4. Drag-drop updates dates
5. Dependencies visualized correctly
6. Mobile layout works

---

## Data Structure

### GanttProject
```typescript
{
  id: string
  name: string
  start_date: string
  end_date: string
  current_phase: string
  overall_progress: number
  phases: Phase[]
  tasks: Task[]
  dependencies: Dependency[]
}
```

### Task
```typescript
{
  id: string
  name: string
  layer: 'Foundation' | 'Core Screens' | 'Business Systems' | 'AI Intelligence' | 'Automation'
  status: 'not_started' | 'in_progress' | 'completed' | 'blocked'
  start_date: string  // YYYY-MM-DD
  end_date: string
  completion_percent: number
  assigned_to: string | null
  priority: 'low' | 'medium' | 'high'
  dependencies: string[]  // task IDs
  phase: string
}
```

### Dependency
```typescript
{
  id: string
  task_id: string
  depends_on_task_id: string
  type: 'hard' | 'soft'
}
```

### AIAnalysis
```typescript
{
  task_id: string
  risk_level: 'low' | 'medium' | 'high'
  risk_score: number  // 0-100
  dependency_health: {
    status: 'healthy' | 'weak' | 'critical'
    issues: string[]
  }
  blockers: Array<{
    task_id: string
    reason: string
  }>
  timeline_assessment: {
    is_realistic: boolean
    suggested_shift_days: number
    reason: string
  }
  downstream_impact: Array<{
    task_id: string
    impact_level: 'low' | 'medium' | 'high'
    reason: string
  }>
  strategic_recommendations: string[]
  suggested_subtasks: Array<{
    title: string
    priority: 'low' | 'medium' | 'high'
    reason: string
  }>
  confidence: number  // 0-100
  generated_at: string
}
```

---

## Real-World Example: StartupAI Roadmap

### Phase 1: Foundation (Weeks 1-2)
- Supabase setup
- RLS validation
- Edge gateway
- Auth system

### Phase 2: Core Screens (Weeks 3-6)
- Wizard
- Dashboard
- Tasks system
- Kanban board

### Phase 3: Business Systems (Weeks 7-9)
- CRM
- Events
- Deck Generator
- Reports

### Phase 4: AI Intelligence (Weeks 10-11)
- Task Generator
- Deal Scorer
- Discovery Agent

### Phase 5: Automation (Week 12)
- Workflow triggers
- Claude Orchestrator
- Agent coordination

**Example Task with AI Analysis:**

**Task:** "CRM Implementation" (Week 7-9)
**Dependencies:** Wizard (complete), Tasks (in progress)
**Status:** In Progress (35%)

**AI Analysis:**
- **Risk:** Medium (65/100)
- **Blocker:** Task system not complete (hard dependency)
- **Timeline:** Realistic but tight (suggest +3 days)
- **Downstream:** DealScorer delayed if CRM slips
- **Recommendations:**
  1. Complete Task CRUD before adding AI scoring
  2. Delay DealScorer until CRM has 2-week data history
  3. Add contact enrichment as subtask

---

## Component Architecture

```
/app/gantt/
├── page.tsx                          📋 Main 3-panel layout
├── components/
│   ├── GanttSidebar.tsx              📋 Left panel
│   ├── GanttCanvas.tsx               📋 Main timeline
│   ├── GanttAIPanel.tsx              📋 Right panel
│   ├── TimelineHeader.tsx            📋 Week columns
│   ├── GanttRow.tsx                  📋 Task row
│   ├── GanttTaskBar.tsx              📋 Interactive bar
│   ├── GanttGroup.tsx                📋 Layer grouping
│   ├── DependencyLine.tsx            📋 SVG connectors
│   ├── FilterChip.tsx                📋 Filter UI
│   ├── ViewSwitch.tsx                📋 View toggle
│   ├── AIInsightCard.tsx             📋 Risk cards
│   ├── ImpactCard.tsx                📋 Impact projection
│   ├── AIActionGroup.tsx             📋 Action buttons
│   └── DependencyCard.tsx            📋 Dependency viz
├── hooks/
│   ├── useGanttAI.ts                 📋 AI analysis hook
│   └── useDragTimeline.ts            📋 Drag-drop logic
└── utils/
    ├── dateCalculations.ts           📋 Week grid math
    ├── dependencySort.ts             📋 Topological sort
    └── ganttLayout.ts                📋 Bar positioning

/data/
├── gantt-types.ts                    ✅ TO CREATE
├── gantt-mock-data.ts                ✅ TO CREATE
└── gantt-ai-analysis.ts              ✅ TO CREATE
```

---

## Success Metrics

### Must Have (P0)
- ✅ Timeline displays 50+ tasks correctly
- ✅ Click task → AI panel opens with analysis
- ✅ Filters work (phase, layer, status)
- ✅ Dependencies visualized with lines
- ✅ Risk badges color-coded

### Should Have (P1)
- 📋 Drag-drop timeline adjustment
- 📋 AI recalculates impact on change
- 📋 Export to PNG/PDF
- 📋 Mobile responsive

### Nice to Have (P2)
- 📋 Real backend integration (Supabase)
- 📋 Multi-user collaboration
- 📋 Auto-schedule AI agent
- 📋 Cost forecast overlay

---

## Current Sprint Focus

### This Session Goals
1. ✅ Create TypeScript types (gantt-types.ts)
2. ✅ Build mock StartupAI roadmap (gantt-mock-data.ts)
3. ✅ Generate AI analysis samples (gantt-ai-analysis.ts)
4. 🔄 Create timeline components (TimelineHeader, GanttRow, GanttTaskBar)
5. 🔄 Build main Gantt page with 3-panel layout

### Next Session Goals
1. AI panel implementation
2. Dependency visualization
3. Filter system
4. Drag-drop timeline
5. Polish & testing

---

## Design System Compliance

**Colors:**
- Primary: #0d5f4e (emerald)
- Sage: #6b9d89
- Beige/Cream: #FAF9F7, #F5F3EF, #E8F4F1
- Risk Red: #EF4444
- Warning Yellow: #F59E0B
- Success Green: #10B981

**Typography:**
- Title: Georgia serif, 20px, font-light
- Section: System sans-serif, 16px, font-medium
- Body: System sans-serif, 14px
- Meta: System sans-serif, 12px

**Layout:**
- Left panel: 240px fixed
- Right panel: 360px fixed
- Main: Flexible
- Spacing: 16px, 20px, 24px
- Border radius: 8px (cards), 12px (bars)

---

## Technical Notes

### Timeline Grid Calculation
```typescript
const WEEK_WIDTH = 120  // px per week
const ROW_HEIGHT = 56   // px per task row

function getBarPosition(task: Task, startDate: Date) {
  const weekOffset = differenceInWeeks(task.start_date, startDate)
  const duration = differenceInWeeks(task.end_date, task.start_date)
  
  return {
    x: weekOffset * WEEK_WIDTH,
    width: duration * WEEK_WIDTH,
    y: taskIndex * ROW_HEIGHT
  }
}
```

### Dependency Line SVG
```typescript
function getDependencyPath(from: Task, to: Task) {
  const fromX = getBarPosition(from).x + getBarPosition(from).width
  const fromY = getBarPosition(from).y + ROW_HEIGHT / 2
  const toX = getBarPosition(to).x
  const toY = getBarPosition(to).y + ROW_HEIGHT / 2
  
  return `M ${fromX} ${fromY} L ${toX} ${toY}`
}
```

### AI Analysis Caching
- Cache AI responses for 5 minutes
- Re-analyze if task dates change
- Invalidate cache if dependencies update
- Show "Analyzing..." spinner during API call

---

## Status Legend
- ✅ Complete
- 🔄 In Progress
- 📋 Planned
- ❌ Blocked

---

**Next Action:** Create gantt-types.ts with complete TypeScript interfaces for all data structures.
