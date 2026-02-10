# Progress Screen — Validator Pipeline

**Route:** `/validator/run/:sessionId`  
**Purpose:** Real-time 7-agent execution with visible progress  
**Status:** 📋 Spec Complete, Not Implemented  
**Updated:** February 10, 2026

---

## Mental Model

```
7 agents → Sequential execution → Live updates → Auto-redirect
```

**User Experience:** Trust through transparency. Show the work.

---

## Screen Wireframe

**URL:** `/validator/run/:sessionId`

```
┌─────────────────────────────────────────────────────────┐
│  StartupAI                                  [Settings]  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│          Validating Your Startup Idea                   │
│          ▰▰▰▰▰▰▰▰▱▱▱▱▱▱ 54%                           │
│          ~35 seconds remaining                          │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │                                                   │  │
│  │  ✓ 1. Extract Profile             done    5.2s  │  │
│  │     Structured data from conversation            │  │
│  │     → Extracted: problem, customer, market       │  │
│  │                                                   │  │
│  ├───────────────────────────────────────────────────┤  │
│  │                                                   │  │
│  │  ⚙ 2. Market Research             running 12.4s  │  │
│  │     TAM/SAM/SOM, trends, benchmarks              │  │
│  │     → Searching: dental software market...       │  │
│  │                                                   │  │
│  ├───────────────────────────────────────────────────┤  │
│  │                                                   │  │
│  │  ⚙ 3. Competitor Analysis         running 8.1s   │  │
│  │     Direct & indirect competitors, SWOT          │  │
│  │     → Found 4 direct competitors...              │  │
│  │                                                   │  │
│  ├───────────────────────────────────────────────────┤  │
│  │                                                   │  │
│  │  ○ 4. Scoring                     queued         │  │
│  │     7-dimension weighted scoring                 │  │
│  │                                                   │  │
│  ├───────────────────────────────────────────────────┤  │
│  │                                                   │  │
│  │  ○ 5. MVP Plan                    queued         │  │
│  │     Phased build plan with timeline              │  │
│  │                                                   │  │
│  ├───────────────────────────────────────────────────┤  │
│  │                                                   │  │
│  │  ○ 6. Compose Report              queued         │  │
│  │     14-section comprehensive analysis            │  │
│  │                                                   │  │
│  ├───────────────────────────────────────────────────┤  │
│  │                                                   │  │
│  │  ○ 7. Verification                queued         │  │
│  │     Completeness & quality check                 │  │
│  │                                                   │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  ⓘ Takes 60-90s. You'll be redirected automatically.   │
│                                                         │
│  [Cancel Validation]                                    │
│                                                         │
└─────────────────────────────────────────────────────────┘

Status Icons:
  ✓ = done (green)
  ⚙ = running (emerald, animated)
  ○ = queued (gray)
  ✗ = failed (red)
  ⚠ = partial (yellow)
```

---

## Agent Execution Flow

```
Agent 1: Extract Profile (2-4s)
  ↓
Agent 2: Market Research (8-12s) ←┐
Agent 3: Competitors (6-10s) ────┘ (parallel)
  ↓
Agent 4: Scoring (3-5s)
  ↓
Agent 5: MVP Plan (5-8s)
  ↓
5s grace period (wait for Agent 3 if still running)
  ↓
Agent 6: Compose Report (6-10s)
  ↓
Agent 7: Verify (4-6s)
  ↓
Complete → Auto-redirect to /validator/report/:id
```

**Total:** 45-60 seconds (optimal path)

---

## Status Polling

**Endpoint:** `/validator-status`

**Poll Interval:** 2000ms (every 2 seconds)

**Max Duration:** 180s (90 polls)

**Query:**
```
GET /validator-status?sessionId=xxx
```

**Response:**
```json
{
  "status": "running",
  "progress": 54,
  "estimatedTimeRemaining": 35,
  "steps": [
    {
      "step": 1,
      "name": "Extract Profile",
      "agent": "extractor",
      "status": "ok",
      "duration_ms": 5200,
      "progress_text": "Extracted: problem, customer, market"
    },
    {
      "step": 2,
      "name": "Market Research",
      "agent": "research",
      "status": "running",
      "duration_ms": 12400,
      "progress_text": "Searching: dental software market..."
    },
    ...
  ],
  "reportId": null,
  "errorMessage": null
}
```

---

## State Transitions

| Status | Progress | UI Behavior |
|--------|----------|-------------|
| `running` | 0-99% | Poll every 2s, show progress |
| `complete` | 100% | Wait 1s, redirect to report |
| `partial` | 70-99% | Stop polling, show warning + retry |
| `failed` | Any | Stop polling, show error + retry |

**Auto-redirect:**
```javascript
if (status === "complete" && reportId) {
  setTimeout(() => {
    navigate(`/validator/report/${reportId}`)
  }, 1000)
}
```

---

## 7 Agents (durations)

| # | Agent | Duration | What It Does |
|---|-------|----------|--------------|
| 1 | Extract | 2-4s | Chat → structured profile |
| 2 | Research | 8-12s | Market size, trends |
| 3 | Competitors | 6-10s | SWOT, positioning |
| 4 | Scoring | 3-5s | 6-dimension scoring |
| 5 | MVP | 5-8s | Build recommendations |
| 6 | Composer | 6-10s | Report generation |
| 7 | Verifier | 4-6s | Quality check |

**Critical Path:** 1 → 2 → 4 → 5 → 6 → 7 (no Agent 3 = ~40s)  
**With Background:** Agent 3 runs parallel with Agent 2 (~45-60s total)

---

## Error Handling

### Partial Success

```
┌─────────────────────────────────────────────┐
│  ⚠ Validation Partially Complete            │
│                                             │
│  ✓ 5 agents completed successfully          │
│  ✗ Agent 3 (Competitors): No data found    │
│  ✗ Agent 6 (Composer): Timeout             │
│                                             │
│  Your report is available with 5/7 sections │
│                                             │
│  [View Report]  [Retry Missing Agents]      │
└─────────────────────────────────────────────┘
```

**Behavior:**
- Show completed sections in report
- Mark missing sections as "Data unavailable"
- Offer retry for failed agents only

### Total Failure

```
┌─────────────────────────────────────────────┐
│  ✗ Validation Failed                        │
│                                             │
│  Agent 1 (Extract): Unable to parse input  │
│                                             │
│  No report generated. Please try again.    │
│                                             │
│  [Retry Validation]  [Contact Support]      │
└─────────────────────────────────────────────┘
```

**Behavior:**
- Stop pipeline immediately
- No report created
- User returns to chat to refine input

### Timeout

```
┌─────────────────────────────────────────────┐
│  ⏱ Validation Timeout                       │
│                                             │
│  Pipeline exceeded 5-minute limit.          │
│  This usually means high server load.       │
│                                             │
│  [Retry Now]  [Try Later]                   │
└─────────────────────────────────────────────┘
```

**Thresholds:**
- Frontend timeout: 180s (stop polling)
- Backend zombie cleanup: 360s (6 minutes)

---

## Progress Calculation

```javascript
// Calculate progress percentage
const completed = steps.filter(s => s.status === 'ok' || s.status === 'partial').length
const progress = Math.round((completed / 7) * 100)

// Estimate time remaining
const queued = steps.filter(s => s.status === 'queued' || s.status === 'running')
const avgDuration = {
  extractor: 6.5,
  research: 20,
  competitors: 19,
  scoring: 12.5,
  mvp: 11,
  composer: 40,
  verifier: 0.5
}
const remaining = queued.reduce((sum, step) => sum + avgDuration[step.agent], 0)
```

---

## Database Schema

**validator_sessions:**
```sql
- id: uuid
- status: 'running' | 'complete' | 'partial' | 'failed'
- created_at: timestamp
```

**validator_runs:**
```sql
- id: uuid
- session_id: uuid (FK)
- step: integer (1-7)
- agent: text
- status: 'queued' | 'running' | 'ok' | 'partial' | 'failed'
- duration_ms: integer
- progress_text: text
- error: text
- started_at: timestamp
- completed_at: timestamp
```

**validator_reports:**
```sql
- id: uuid
- session_id: uuid (FK)
- created_at: timestamp
```

---

## Mobile Version

```
┌───────────────────────────┐
│  StartupAI       [Cancel] │
├───────────────────────────┤
│                           │
│  Validating...            │
│  ▰▰▰▰▰▰▱▱▱▱ 54%         │
│  ~35s remaining           │
│                           │
│  ✓ Extract       5.2s     │
│  ⚙ Research      12.4s    │
│  ⚙ Competitors   8.1s     │
│  ○ Scoring       queued   │
│  ○ MVP           queued   │
│  ○ Compose       queued   │
│  ○ Verify        queued   │
│                           │
│  ⓘ Takes 60-90 seconds    │
│                           │
└───────────────────────────┘
```

**Compact Layout:**
- No descriptions (save space)
- Status icons only
- Simplified progress text

---

## Zombie Cleanup

**Cron Job:** Every 5 minutes

**Logic:**
```sql
UPDATE validator_sessions
SET status = 'failed',
    error_message = 'Pipeline timeout: exceeded 6-minute limit'
WHERE status = 'running'
  AND created_at < NOW() - INTERVAL '360 seconds'
```

**Purpose:** Prevent stuck sessions from blocking database

---

## Technical Notes

### Polling Hook

```typescript
useValidatorPipeline(sessionId: string) {
  const [state, setState] = useState<PipelineProgress | null>(null)
  const [isComplete, setIsComplete] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let pollCount = 0
    const MAX_POLLS = 90

    const poll = async () => {
      try {
        const res = await fetch(`/validator-status?sessionId=${sessionId}`)
        const data = await res.json()
        setState(data)

        if (data.status === 'complete' && data.reportId) {
          clearInterval(interval)
          setIsComplete(true)
          setTimeout(() => {
            navigate(`/validator/report/${data.reportId}`)
          }, 1000)
        }

        if (data.status === 'partial' || data.status === 'failed') {
          clearInterval(interval)
          setIsComplete(true)
        }

        pollCount++
        if (pollCount >= MAX_POLLS) {
          clearInterval(interval)
          setError('Validation timeout. Please retry.')
        }
      } catch (err) {
        setTimeout(poll, 5000) // Retry after 5s
      }
    }

    poll() // Initial poll
    const interval = setInterval(poll, 2000)

    return () => clearInterval(interval)
  }, [sessionId])

  return { state, isComplete, error }
}
```

---

## Design System

**Colors:**
- Progress bar: `#0d5f4e` (emerald)
- Complete: `#0d5f4e` (emerald ✓)
- Running: `#6b9d89` (sage ⚙, animated pulse)
- Queued: `#9CA3AF` (gray ○)
- Partial: `#F59E0B` (amber ⚠)
- Failed: `#DC2626` (red ✗)

**Typography:**
- Title: Georgia serif, font-light
- Agent names: System sans-serif, font-medium
- Progress text: System sans-serif, text-sm, text-gray-600

**Animation:**
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.running-icon {
  animation: pulse 2s infinite;
}
```

---

## Next Steps

1. **Implement:** Create `/app/validator/run/[sessionId]/page.tsx`
2. **Hook:** Build `useValidatorPipeline()` polling hook
3. **Backend:** Create `/validator-status` edge function
4. **Cron:** Set up zombie cleanup job
5. **Test:** Simulate all 4 terminal states (complete, partial, failed, timeout)

---

## Status: 📋 Spec Complete

**This document is the complete specification.**  
**Ready for implementation.**
