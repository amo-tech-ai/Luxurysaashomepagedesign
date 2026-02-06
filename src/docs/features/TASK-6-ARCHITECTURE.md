# Task 6 Visual Architecture

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         BROWSER (Frontend)                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │                     /app/lean-canvas-db/                     │ │
│  │                         page.tsx                             │ │
│  │  ┌────────────────────────────────────────────────────────┐ │ │
│  │  │  Canvas UI (12 blocks)                                 │ │ │
│  │  │  • Problem                  • Unfair Advantage         │ │ │
│  │  │  • Solution                 • Customer Segments        │ │ │
│  │  │  • UVP                      • Channels                 │ │ │
│  │  │  • Cost Structure           • Revenue Streams          │ │ │
│  │  │                                                         │ │ │
│  │  │  State:                                                 │ │ │
│  │  │  • loading: boolean                                    │ │ │
│  │  │  • saving: boolean                                     │ │ │
│  │  │  • saved: boolean                                      │ │ │
│  │  │  • error: string                                       │ │ │
│  │  │  • canvasData: CanvasBlock[]                          │ │ │
│  │  └────────────────────────────────────────────────────────┘ │ │
│  │                          ↕                                   │ │
│  │  ┌────────────────────────────────────────────────────────┐ │ │
│  │  │          /lib/canvas-api.ts                           │ │ │
│  │  │  • getOrCreateStartup()                               │ │ │
│  │  │  • loadCanvas() → Promise<CanvasData>                │ │ │
│  │  │  • saveCanvas(data) → Promise<void>                  │ │ │
│  │  │  • itemsToText() / textToItems()                     │ │ │
│  │  └────────────────────────────────────────────────────────┘ │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │          /components/ProtectedRoute.tsx                      │ │
│  │  Wraps protected pages, redirects if not authenticated      │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                               ↕                                    │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │            /lib/AuthContext.tsx                              │ │
│  │  Provides:                                                   │ │
│  │  • user: User | null                                        │ │
│  │  • loading: boolean                                         │ │
│  │  • signOut()                                                │ │
│  │                                                              │ │
│  │  Listens to auth state changes                              │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                               ↕                                    │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │              /lib/supabase.ts                                │ │
│  │  createClient(url, anonKey)                                 │ │
│  └──────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
                               ↕
                    HTTPS (TLS 1.3 Encrypted)
                               ↕
┌─────────────────────────────────────────────────────────────────────┐
│                    SUPABASE (Backend as a Service)                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │                    Authentication                            │ │
│  │  • JWT token generation                                      │ │
│  │  • Session management                                        │ │
│  │  • OAuth providers                                          │ │
│  │  • Email verification                                        │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                               ↕                                    │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │             PostgreSQL Database (v15)                        │ │
│  │                                                              │ │
│  │  ┌────────────────────────────────────────────────────────┐ │ │
│  │  │  startups                                              │ │ │
│  │  │  ├─ id (PK)                                            │ │ │
│  │  │  ├─ user_id (FK → auth.users)                        │ │ │
│  │  │  ├─ name                                               │ │ │
│  │  │  ├─ industry                                           │ │ │
│  │  │  └─ stage (idea|mvp|growth)                          │ │ │
│  │  └────────────────────────────────────────────────────────┘ │ │
│  │                        ↕                                      │ │
│  │  ┌────────────────────────────────────────────────────────┐ │ │
│  │  │  lean_canvases (UNIQUE: startup_id)                   │ │ │
│  │  │  ├─ id (PK)                                            │ │ │
│  │  │  ├─ startup_id (FK → startups.id)                    │ │ │
│  │  │  ├─ problem (TEXT)                                    │ │ │
│  │  │  ├─ solution (TEXT)                                   │ │ │
│  │  │  ├─ unique_value_proposition (TEXT)                  │ │ │
│  │  │  ├─ unfair_advantage (TEXT)                          │ │ │
│  │  │  ├─ customer_segments (TEXT)                         │ │ │
│  │  │  ├─ existing_alternatives (TEXT)                     │ │ │
│  │  │  ├─ key_metrics (TEXT)                               │ │ │
│  │  │  ├─ high_level_concept (TEXT)                        │ │ │
│  │  │  ├─ channels (TEXT)                                   │ │ │
│  │  │  ├─ early_adopters (TEXT)                            │ │ │
│  │  │  ├─ cost_structure (TEXT)                            │ │ │
│  │  │  ├─ revenue_streams (TEXT)                           │ │ │
│  │  │  ├─ created_at                                        │ │ │
│  │  │  └─ updated_at (auto-updates via trigger)           │ │ │
│  │  └────────────────────────────────────────────────────────┘ │ │
│  │                                                              │ │
│  │  ┌────────────────────────────────────────────────────────┐ │ │
│  │  │  validation_sessions                                   │ │ │
│  │  │  • Coach state machine                                 │ │ │
│  │  │  • JSONB state column                                  │ │ │
│  │  └────────────────────────────────────────────────────────┘ │ │
│  │                                                              │ │
│  │  ┌────────────────────────────────────────────────────────┐ │ │
│  │  │  validation_assessments                                │ │ │
│  │  │  • 7 dimensions (clarity, desirability, etc.)         │ │ │
│  │  │  • score (1-10)                                        │ │ │
│  │  │  • feedback (TEXT)                                     │ │ │
│  │  └────────────────────────────────────────────────────────┘ │ │
│  │                                                              │ │
│  │  [6 more tables for validation system...]                   │ │
│  │                                                              │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                               ↕                                    │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │          Row Level Security (RLS) Layer                      │ │
│  │                                                              │ │
│  │  Policy: "Users can view own canvas"                        │ │
│  │  ┌────────────────────────────────────────────────────────┐ │ │
│  │  │  SELECT * FROM lean_canvases                           │ │ │
│  │  │  WHERE startup_id IN (                                 │ │ │
│  │  │    SELECT id FROM startups                             │ │ │
│  │  │    WHERE user_id = auth.uid()                         │ │ │
│  │  │  )                                                      │ │ │
│  │  └────────────────────────────────────────────────────────┘ │ │
│  │                                                              │ │
│  │  ✓ Automatically enforced on ALL queries                   │ │
│  │  ✓ Works for SELECT, INSERT, UPDATE, DELETE               │ │
│  │  ✓ Cannot be bypassed (database-level security)           │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Data Flow: Save Canvas

```
┌────────────────────────────────────────────────────────────────────┐
│ USER ACTION: Types "HR teams waste time" in Problem block         │
└────────────────────────────────────────────────────────────────────┘
                               ↓
┌────────────────────────────────────────────────────────────────────┐
│ onChange event → setCanvasData(updated)                           │
│ Timestamp: 0ms                                                     │
└────────────────────────────────────────────────────────────────────┘
                               ↓
┌────────────────────────────────────────────────────────────────────┐
│ triggerAutoSave() called                                           │
│ • Clear existing timeout                                           │
│ • Set new timeout (2000ms)                                         │
│ • Set saved = false                                                │
│ Timestamp: 5ms                                                     │
└────────────────────────────────────────────────────────────────────┘
                               ↓
┌────────────────────────────────────────────────────────────────────┐
│ UI UPDATES: Show "Saving..." indicator                             │
│ Timestamp: 10ms                                                    │
└────────────────────────────────────────────────────────────────────┘
                               ↓
                        [Wait 2 seconds]
                               ↓
┌────────────────────────────────────────────────────────────────────┐
│ setTimeout callback fires                                          │
│ • Set saving = true                                                │
│ • Call saveCanvas(canvasData)                                      │
│ Timestamp: 2010ms                                                  │
└────────────────────────────────────────────────────────────────────┘
                               ↓
┌────────────────────────────────────────────────────────────────────┐
│ saveCanvas() in canvas-api.ts                                      │
│ 1. Get current user from auth                                      │
│ 2. Get or create startup                                           │
│ 3. Prepare upsert data                                             │
│ Timestamp: 2015ms                                                  │
└────────────────────────────────────────────────────────────────────┘
                               ↓
┌────────────────────────────────────────────────────────────────────┐
│ HTTP POST to Supabase                                              │
│ URL: https://your-project.supabase.co/rest/v1/lean_canvases       │
│ Headers:                                                           │
│   Authorization: Bearer eyJhbGc...                                 │
│   Content-Type: application/json                                  │
│ Body:                                                              │
│   {                                                                │
│     "startup_id": "uuid-here",                                     │
│     "problem": "HR teams waste time",                              │
│     ...other fields                                                │
│   }                                                                │
│ Timestamp: 2020ms                                                  │
└────────────────────────────────────────────────────────────────────┘
                               ↓
                    [Network: ~500-800ms]
                               ↓
┌────────────────────────────────────────────────────────────────────┐
│ SUPABASE: Receives request                                         │
│ 1. Verify JWT token                                                │
│ 2. Extract user_id from token                                      │
│ 3. Check RLS policies                                              │
│ 4. Execute UPSERT                                                  │
│ Timestamp: 2520ms                                                  │
└────────────────────────────────────────────────────────────────────┘
                               ↓
┌────────────────────────────────────────────────────────────────────┐
│ POSTGRESQL: Executes query                                         │
│                                                                    │
│ BEGIN;                                                             │
│                                                                    │
│ INSERT INTO lean_canvases (startup_id, problem, ...)              │
│ VALUES ('uuid', 'HR teams waste time', ...)                       │
│ ON CONFLICT (startup_id)                                           │
│ DO UPDATE SET                                                      │
│   problem = 'HR teams waste time',                                 │
│   updated_at = now();                                              │
│                                                                    │
│ COMMIT;                                                            │
│                                                                    │
│ Trigger: update_lean_canvases_updated_at fires                    │
│ Timestamp: 2680ms                                                  │
└────────────────────────────────────────────────────────────────────┘
                               ↓
┌────────────────────────────────────────────────────────────────────┐
│ SUPABASE: Returns response                                         │
│ HTTP 200 OK                                                        │
│ Body: {                                                            │
│   "id": "canvas-uuid",                                             │
│   "startup_id": "startup-uuid",                                    │
│   "problem": "HR teams waste time",                                │
│   "updated_at": "2026-02-04T10:15:30.123Z"                        │
│ }                                                                  │
│ Timestamp: 2690ms                                                  │
└────────────────────────────────────────────────────────────────────┘
                               ↓
                    [Network: ~500-800ms]
                               ↓
┌────────────────────────────────────────────────────────────────────┐
│ Frontend receives response                                         │
│ • Set saving = false                                               │
│ • Set saved = true                                                 │
│ • Set lastSaved = new Date()                                       │
│ Timestamp: 3190ms                                                  │
└────────────────────────────────────────────────────────────────────┘
                               ↓
┌────────────────────────────────────────────────────────────────────┐
│ UI UPDATES: Show "Saved ✓" indicator                               │
│ Timestamp: 3200ms                                                  │
└────────────────────────────────────────────────────────────────────┘
                               ↓
                    [User sees "Saved ✓"]
                               ↓
                        ✅ COMPLETE
```

**Total Time:** ~3.2 seconds (2s debounce + 1.2s network/db)

---

## Security Flow: RLS in Action

```
USER A                          USER B
  │                               │
  ├─ Login                        ├─ Login
  ↓                               ↓
JWT Token A                    JWT Token B
{                              {
  user_id: "aaa-111",            user_id: "bbb-222",
  role: "authenticated"          role: "authenticated"
}                              }
  │                               │
  ├─ Request Canvas              ├─ Request Canvas
  ↓                               ↓
┌─────────────────────────────────────────────┐
│         SUPABASE RLS LAYER                  │
│                                             │
│  User A's Request:                          │
│  SELECT * FROM lean_canvases                │
│                                             │
│  RLS Adds Filter:                           │
│  WHERE startup_id IN (                      │
│    SELECT id FROM startups                  │
│    WHERE user_id = 'aaa-111'  ← User A     │
│  )                                          │
│                                             │
│  User B's Request:                          │
│  SELECT * FROM lean_canvases                │
│                                             │
│  RLS Adds Filter:                           │
│  WHERE startup_id IN (                      │
│    SELECT id FROM startups                  │
│    WHERE user_id = 'bbb-222'  ← User B     │
│  )                                          │
└─────────────────────────────────────────────┘
  │                               │
  ↓                               ↓
┌─────────────────┐         ┌─────────────────┐
│ Canvas A Data   │         │ Canvas B Data   │
│ "User A Problem"│         │ "User B Problem"│
└─────────────────┘         └─────────────────┘
  │                               │
  ↓                               ↓
User A sees                   User B sees
ONLY Canvas A                 ONLY Canvas B

❌ User A CANNOT access Canvas B
❌ User B CANNOT access Canvas A
✅ Data is isolated at DATABASE level
```

---

## File Dependency Graph

```
App.tsx
  └─ AuthProvider (wraps entire app)
      ↓
  /app/lean-canvas-db/page.tsx
      ├─ imports ProtectedRoute
      │   └─ uses useAuth() hook
      │       └─ from AuthContext
      │           └─ uses supabase client
      │
      └─ imports canvas-api functions
          ├─ loadCanvas()
          │   └─ uses supabase client
          │   └─ calls getOrCreateStartup()
          │       └─ uses supabase.auth.getUser()
          │       └─ queries startups table
          │
          └─ saveCanvas()
              └─ uses supabase client
              └─ calls getOrCreateStartup()
              └─ upserts lean_canvases table
```

---

## Component Hierarchy

```
<AuthProvider>                        ← Provides auth state
  <App>
    <LeanCanvasPageDB>                ← Page component
      <ProtectedRoute>                ← Checks authentication
        <LeanCanvasContent>           ← Main canvas logic
          │
          ├─ <header>                 ← Top bar with save indicator
          │   ├─ Home button
          │   ├─ Title
          │   └─ Save status
          │
          ├─ <div.error-banner>       ← Shows if save fails
          │
          └─ <div.canvas-grid>        ← 5-column grid
              │
              ├─ Row 1 (Strategy Core)
              │   ├─ <CanvasBlockComponent id="problem" />
              │   ├─ <CanvasBlockComponent id="solution" />
              │   ├─ <CanvasBlockComponent id="unique_value_proposition" />
              │   ├─ <CanvasBlockComponent id="unfair_advantage" />
              │   └─ <CanvasBlockComponent id="customer_segments" />
              │
              ├─ Row 2 (Validation)
              │   ├─ <CanvasBlockComponent id="existing_alternatives" />
              │   ├─ <CanvasBlockComponent id="key_metrics" />
              │   ├─ <CanvasBlockComponent id="high_level_concept" />
              │   ├─ <CanvasBlockComponent id="channels" />
              │   └─ <CanvasBlockComponent id="early_adopters" />
              │
              └─ Row 3 (Economics)
                  ├─ <CanvasBlockComponent id="cost_structure" span={2} />
                  └─ <CanvasBlockComponent id="revenue_streams" span={3} />
```

---

## State Management Flow

```
Component State (React useState)
┌──────────────────────────────────────┐
│  canvasData: CanvasBlock[]          │  ← Local UI state
│  editingBlock: string | null        │
│  loading: boolean                   │
│  saving: boolean                    │
│  saved: boolean                     │
│  error: string                      │
│  lastSaved: Date                    │
└──────────────────────────────────────┘
              ↕
        triggerAutoSave()
              ↕
┌──────────────────────────────────────┐
│  Debounce (2 seconds)                │  ← Batches rapid changes
└──────────────────────────────────────┘
              ↕
        saveCanvas(data)
              ↕
┌──────────────────────────────────────┐
│  Supabase Client                     │  ← Network layer
└──────────────────────────────────────┘
              ↕
┌──────────────────────────────────────┐
│  PostgreSQL Database                 │  ← Source of truth
│  lean_canvases table                 │
└──────────────────────────────────────┘
              ↕
        loadCanvas()
              ↕
┌──────────────────────────────────────┐
│  Component State (updated)           │  ← UI synced with DB
└──────────────────────────────────────┘
```

---

## Auto-Save State Machine

```
                ┌──────────┐
                │   IDLE   │  saved: true, saving: false
                └──────────┘
                      ↓
               [User types]
                      ↓
                ┌──────────┐
                │ PENDING  │  saved: false, saving: false
                │ (2s wait)│  ← Debounce timer active
                └──────────┘
                      ↓
            [Timer completes]
                      ↓
                ┌──────────┐
                │  SAVING  │  saved: false, saving: true
                │          │  ← Network request in flight
                └──────────┘
                   ↙      ↘
            [Success]   [Error]
                ↓            ↓
          ┌──────────┐  ┌──────────┐
          │  SAVED   │  │  ERROR   │  error: "message"
          │          │  │          │  saved: false
          └──────────┘  └──────────┘
                ↓            ↓
          [User types]  [User retries]
                ↓            ↓
          Back to IDLE  Back to SAVING
```

---

## Database Indexing Strategy

```
lean_canvases table
┌──────────────────────────────────┐
│ Columns:                         │
│ • id (PK) ← Clustered Index     │  ← Fast by ID
│ • startup_id (FK)                │
│ • problem                        │
│ • solution                       │
│ • ... (10 more TEXT columns)    │
│ • created_at                     │
│ • updated_at                     │
└──────────────────────────────────┘
        ↓
┌──────────────────────────────────┐
│ Index: idx_lean_canvases_startup │  ← Fast by startup_id
│ CREATE INDEX ON lean_canvases    │
│   (startup_id)                   │
└──────────────────────────────────┘

Query Performance:
• SELECT by id: O(log n)        ← Very fast
• SELECT by startup_id: O(log n) ← Fast (indexed)
• SELECT by problem: O(n)       ← Slow (full scan)

Why we don't index TEXT columns:
• TEXT fields are large
• Full-text search not needed yet
• Would slow INSERT/UPDATE
• Future: Add gin/gist index for search
```

---

This visual documentation provides a complete architectural overview of Task 6.
All diagrams use ASCII art for maximum compatibility and no external dependencies.
