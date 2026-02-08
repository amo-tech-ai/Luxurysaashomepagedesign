# Lean Canvas System - Mermaid Workflow Diagrams

**Document:** mermaid-diagrams.md  
**Purpose:** Complete system architecture, data flows, and user journeys  
**Date:** February 6, 2026  
**System:** Lean Canvas V2 → Opportunity Canvas → 90-Day Plan

---

## 1. USER JOURNEY FLOW

### Complete User Journey (Entry to Execution)

```mermaid
journey
    title Lean Canvas to 90-Day Execution - Complete User Journey
    section Discovery
      User visits homepage: 5: User
      Clicks "Build Your Lean Canvas": 5: User
      Navigates to Lean Canvas screen: 5: System
    section Canvas Creation
      Fills 11 sections: 3: User
      AI suggests improvements: 4: AI
      Auto-save every 30s: 5: System
      Completes canvas (11/11): 5: User
    section Opportunity Focus
      Clicks "Continue to Opportunity Canvas": 5: User
      Data auto-imported from Lean Canvas: 5: System
      Reviews 10 opportunity sections: 4: User
      Identifies top 5 risks: 4: AI
      Validates primary opportunity: 5: User
    section Execution Planning
      Clicks "Generate 90-Day Plan": 5: User
      System generates 24 validation cards: 5: System
      Reviews 6 sprints (2 weeks each): 4: User
      Drags cards across Kanban columns: 5: User
      Tracks progress per sprint: 5: User
    section Iteration
      Completes sprint 1 (4 cards): 4: User
      Records learnings: 4: User
      Adjusts sprint 2 priorities: 3: User
      Continues validation cycle: 5: User
```

---

## 2. SYSTEM ARCHITECTURE

### Component Hierarchy

```mermaid
graph TD
    A[App.tsx - Route Handler] --> B[Lean Canvas Page]
    A --> C[Opportunity Canvas Page]
    A --> D[90-Day Plan Page]
    
    B --> B1[CanvasCard Component]
    B --> B2[Auto-save Hook]
    B --> B3[localStorage Persistence]
    
    C --> C1[CanvasCard Component - Reused]
    C --> C2[Risk Analysis Panel]
    C --> C3[Import Lean Data]
    
    D --> D1[KanbanColumn Component]
    D --> D2[KanbanCard Component]
    D --> D3[Card Generator Lib]
    D --> D4[Sprint Selector]
    
    D1 --> D1A[DndContext]
    D1 --> D1B[SortableContext]
    
    D2 --> D2A[Expandable Details]
    D2 --> D2B[AI Coach Tips]
    D2 --> D2C[Evidence Status]
    
    D3 --> D3A[Import Lean Canvas Data]
    D3 --> D3B[Import Opportunity Data]
    D3 --> D3C[Generate 24 Cards]
    
    style A fill:#0D5F4E,color:#fff
    style B fill:#6B9D89,color:#fff
    style C fill:#6B9D89,color:#fff
    style D fill:#6B9D89,color:#fff
```

---

## 3. DATA FLOW ARCHITECTURE

### Complete Data Flow (All 3 Screens)

```mermaid
flowchart TB
    subgraph "Screen 1: Lean Canvas"
        LC1[User Input - 11 Sections]
        LC2[Auto-save Timer - 30s]
        LC3[localStorage.setItem]
        LC4{All 11 sections filled?}
        LC5[Enable Continue Button]
        
        LC1 --> LC2
        LC2 --> LC3
        LC3 --> LC4
        LC4 -->|Yes| LC5
        LC4 -->|No| LC1
    end
    
    subgraph "Screen 2: Opportunity Canvas"
        OC1[Load from localStorage]
        OC2[Import Lean Canvas Data]
        OC3[User Input - 10 Sections]
        OC4[Risk Scoring Algorithm]
        OC5[Top 5 Risks Panel]
        OC6[localStorage.setItem]
        OC7{Primary opportunity validated?}
        OC8[Enable Generate Button]
        
        OC1 --> OC2
        OC2 --> OC3
        OC3 --> OC4
        OC4 --> OC5
        OC3 --> OC6
        OC6 --> OC7
        OC7 -->|Yes| OC8
        OC7 -->|No| OC3
    end
    
    subgraph "Screen 3: 90-Day Plan"
        KA1[Load Both Canvas Data]
        KA2[cardGenerator.ts]
        KA3[Generate 24 Cards]
        KA4[Initialize 5 Columns]
        KA5[User Drag & Drop]
        KA6[Update Card Positions]
        KA7[localStorage.setItem]
        KA8[Sprint Progress Tracking]
        
        KA1 --> KA2
        KA2 --> KA3
        KA3 --> KA4
        KA4 --> KA5
        KA5 --> KA6
        KA6 --> KA7
        KA7 --> KA8
    end
    
    LC5 --> OC1
    OC8 --> KA1
    
    style LC3 fill:#FFD700
    style OC6 fill:#FFD700
    style KA7 fill:#FFD700
```

---

## 4. NAVIGATION FLOW

### Route Navigation Map

```mermaid
stateDiagram-v2
    [*] --> Home
    Home --> LeanCanvas: Click "Build Lean Canvas"
    
    LeanCanvas --> LeanCanvas: Auto-save every 30s
    LeanCanvas --> OpportunityCanvas: Click "Continue"
    
    OpportunityCanvas --> OpportunityCanvas: Auto-save every 30s
    OpportunityCanvas --> LeanCanvas: Click "Back"
    OpportunityCanvas --> NinetyDayPlan: Click "Generate 90-Day Plan"
    
    NinetyDayPlan --> NinetyDayPlan: Drag & drop cards
    NinetyDayPlan --> OpportunityCanvas: Click "Back"
    NinetyDayPlan --> [*]: Complete execution
    
    note right of LeanCanvas
        Route: /lean-canvas
        Data: localStorage('lean-canvas-v2')
        Sections: 11
    end note
    
    note right of OpportunityCanvas
        Route: /opportunity-canvas
        Data: localStorage('opportunity-canvas')
        Sections: 10
        Imports: lean-canvas-v2
    end note
    
    note right of NinetyDayPlan
        Route: /90-day-plan
        Data: localStorage('90-day-plan')
        Cards: 24 (6 sprints × 4 cards)
        Imports: lean-canvas-v2 + opportunity-canvas
    end note
```

---

## 5. DRAG & DROP WORKFLOW

### Kanban Drag & Drop Sequence

```mermaid
sequenceDiagram
    participant User
    participant KanbanCard
    participant DndContext
    participant KanbanColumn
    participant localStorage
    participant State
    
    User->>KanbanCard: Clicks and drags card
    KanbanCard->>DndContext: handleDragStart(event)
    DndContext->>State: Set activeId = card.id
    
    User->>KanbanColumn: Drags over column
    KanbanColumn->>DndContext: handleDragOver(event)
    DndContext->>State: Update visual feedback
    
    User->>KanbanColumn: Releases card (drop)
    KanbanColumn->>DndContext: handleDragEnd(event)
    DndContext->>State: Update card.status
    DndContext->>State: Update column.items[]
    State->>localStorage: Save new positions
    localStorage-->>State: Confirm saved
    State->>User: Show updated board
    
    Note over User,State: Smooth animation (300ms)
    Note over State,localStorage: Persistence for refresh
```

---

## 6. CARD GENERATION ALGORITHM

### 24-Card Generation from Canvas Data

```mermaid
flowchart LR
    subgraph "Input Sources"
        A1[Lean Canvas Data]
        A2[Opportunity Canvas Data]
    end
    
    subgraph "cardGenerator.ts"
        B1{Has Canvas Data?}
        B2[Extract Key Fields]
        B3[Problem Assumptions]
        B4[Solution Hypotheses]
        B5[Customer Segments]
        B6[Channel Tests]
        B7[MVP Specs]
        B8[Traction Goals]
    end
    
    subgraph "24 Validation Cards"
        C1[Sprint 1: Foundation - 4 cards]
        C2[Sprint 2: Solution Fit - 4 cards]
        C3[Sprint 3: Willingness to Pay - 4 cards]
        C4[Sprint 4: Channel Validation - 4 cards]
        C5[Sprint 5: MVP Build - 4 cards]
        C6[Sprint 6: Early Traction - 4 cards]
    end
    
    subgraph "Output"
        D1[Kanban Board State]
        D2[5 Columns Initialized]
        D3[All cards in Backlog]
    end
    
    A1 --> B1
    A2 --> B1
    B1 -->|Yes| B2
    B1 -->|No| Mock[Use Mock Data]
    
    B2 --> B3
    B2 --> B4
    B2 --> B5
    B2 --> B6
    B2 --> B7
    B2 --> B8
    
    B3 --> C1
    B4 --> C2
    B5 --> C3
    B6 --> C4
    B7 --> C5
    B8 --> C6
    
    C1 --> D1
    C2 --> D1
    C3 --> D1
    C4 --> D1
    C5 --> D1
    C6 --> D1
    
    D1 --> D2
    D2 --> D3
    
    style B1 fill:#FFD700
    style D1 fill:#0D5F4E,color:#fff
```

---

## 7. AUTO-SAVE MECHANISM

### localStorage Auto-Save Flow

```mermaid
flowchart TD
    A[User Types in Canvas Section] --> B{Timer Active?}
    B -->|No| C[Start 30s Timer]
    B -->|Yes| D[Reset Timer to 30s]
    
    C --> E[Wait 30 seconds]
    D --> E
    
    E --> F[Trigger Save Function]
    F --> G[Show Saving Indicator]
    G --> H[Serialize Canvas State to JSON]
    H --> I[localStorage.setItem]
    
    I --> J{Save Success?}
    J -->|Yes| K[Update lastSaved timestamp]
    J -->|No| L[Show Error Toast]
    
    K --> M[Show Saved Checkmark]
    M --> N[Hide Indicator after 2s]
    
    L --> O[Retry Save]
    O --> I
    
    N --> P[Listen for Next Change]
    P --> A
    
    style F fill:#0D5F4E,color:#fff
    style I fill:#FFD700
    style K fill:#90EE90
    style L fill:#FF6B6B
```

---

## 8. RISK ANALYSIS WORKFLOW

### Opportunity Canvas Risk Scoring

```mermaid
graph TB
    subgraph "Risk Input Sources"
        R1[Problem Assumptions]
        R2[Solution Hypotheses]
        R3[Customer Validation Status]
        R4[Channel Tests]
        R5[Revenue Model]
    end
    
    subgraph "Risk Scoring Algorithm"
        S1{Has Evidence?}
        S2[Low Risk: 1-3 points]
        S3[Medium Risk: 4-6 points]
        S4[High Risk: 7-10 points]
    end
    
    subgraph "Risk Output"
        T1[Top 5 Riskiest Assumptions]
        T2[Validation Methods]
        T3[Priority Ranking]
        T4[Sprint Assignment]
    end
    
    R1 --> S1
    R2 --> S1
    R3 --> S1
    R4 --> S1
    R5 --> S1
    
    S1 -->|Validated| S2
    S1 -->|Partial| S3
    S1 -->|Unvalidated| S4
    
    S2 --> T1
    S3 --> T1
    S4 --> T1
    
    T1 --> T2
    T2 --> T3
    T3 --> T4
    
    T4 --> K1[Feed into Card Generator]
    K1 --> K2[Prioritize in Sprint 1-2]
    
    style S1 fill:#FFD700
    style S4 fill:#FF6B6B
    style T4 fill:#0D5F4E,color:#fff
```

---

## 9. SPRINT PROGRESS TRACKING

### Sprint Completion Flow

```mermaid
stateDiagram-v2
    [*] --> Sprint1: Start 90-Day Plan
    
    Sprint1 --> Sprint2: 4/4 cards complete
    Sprint1 --> Sprint1: Move card to Done
    
    Sprint2 --> Sprint3: 4/4 cards complete
    Sprint2 --> Sprint2: Move card to Done
    
    Sprint3 --> Sprint4: 4/4 cards complete
    Sprint3 --> Sprint3: Move card to Done
    
    Sprint4 --> Sprint5: 4/4 cards complete
    Sprint4 --> Sprint4: Move card to Done
    
    Sprint5 --> Sprint6: 4/4 cards complete
    Sprint5 --> Sprint5: Move card to Done
    
    Sprint6 --> [*]: 24/24 cards complete
    Sprint6 --> Sprint6: Move card to Done
    
    note right of Sprint1
        Goal: Problem Validation
        Duration: 2 weeks
        Cards: 4 (Foundation)
    end note
    
    note right of Sprint3
        Goal: Willingness to Pay
        Duration: 2 weeks
        Cards: 4 (Pricing)
    end note
    
    note right of Sprint6
        Goal: Early Traction
        Duration: 2 weeks
        Cards: 4 (Launch & Metrics)
    end note
```

---

## 10. COMPONENT INTERACTION

### Inter-Component Communication

```mermaid
graph LR
    subgraph "Parent: 90-Day Plan Page"
        A1[useState: cards]
        A2[useState: activeSprint]
        A3[useState: activeCard]
        A4[handleDragEnd]
    end
    
    subgraph "Child: KanbanColumn"
        B1[Droppable Zone]
        B2[SortableContext]
        B3[Render KanbanCards]
    end
    
    subgraph "Child: KanbanCard"
        C1[Draggable Item]
        C2[Expand/Collapse]
        C3[Evidence Status Toggle]
    end
    
    A1 --> B3
    A2 --> B3
    A4 --> B2
    
    B3 --> C1
    B2 --> C1
    
    C1 --> A4
    C2 --> A3
    C3 --> A1
    
    style A1 fill:#0D5F4E,color:#fff
    style A4 fill:#0D5F4E,color:#fff
```

---

## 11. ERROR HANDLING FLOW

### localStorage Error Recovery

```mermaid
flowchart TD
    A[App Loads] --> B{localStorage Available?}
    
    B -->|No| C[Show Warning Banner]
    B -->|Yes| D[Try Load Data]
    
    C --> E[Disable Auto-save]
    E --> F[Manual Save Only]
    
    D --> G{Data Exists?}
    G -->|No| H[Use Empty State]
    G -->|Yes| I{JSON Valid?}
    
    I -->|No| J[Show Corruption Error]
    I -->|Yes| K[Load Data Successfully]
    
    J --> L[Offer Recovery Options]
    L --> M1[Reset to Empty]
    L --> M2[Download Backup]
    L --> M3[Retry Parse]
    
    M1 --> H
    M2 --> N[Export as JSON File]
    M3 --> I
    
    H --> O[User Can Start Fresh]
    K --> P[Normal Operation]
    
    style B fill:#FFD700
    style I fill:#FFD700
    style J fill:#FF6B6B
    style K fill:#90EE90
```

---

## 12. EXPORT/SHARE WORKFLOW

### Future Export Feature Flow

```mermaid
sequenceDiagram
    participant User
    participant UI
    participant State
    participant ExportService
    participant Download
    
    User->>UI: Clicks Export Button
    UI->>State: Get all canvas + plan data
    State-->>UI: Return complete state
    
    UI->>User: Show export options modal
    User->>UI: Select format (PDF/CSV/JSON)
    
    UI->>ExportService: generateExport(data, format)
    ExportService->>ExportService: Format data
    ExportService->>ExportService: Generate file
    ExportService-->>UI: Return blob
    
    UI->>Download: Trigger download
    Download->>User: Save file
    
    Note over User,Download: Future enhancement (not implemented)
    Note over ExportService: Placeholder in codebase
```

---

## 13. MOBILE RESPONSIVE FLOW

### Layout Adaptation Strategy

```mermaid
graph TD
    A[Screen Size Detection] --> B{Width < 768px?}
    
    B -->|Yes - Mobile| C[Mobile Layout]
    B -->|No - Desktop| D[Desktop Layout]
    
    subgraph "Mobile Layout"
        C1[Stack Columns Vertically]
        C2[Single Column View]
        C3[Tab Navigation for Columns]
        C4[Full-width Cards]
        C5[Touch-optimized Drag]
    end
    
    subgraph "Desktop Layout"
        D1[5 Columns Horizontal]
        D2[Fixed Column Widths]
        D3[Side-by-side View]
        D4[Mouse Drag & Drop]
        D5[Hover States]
    end
    
    C --> C1
    C1 --> C2
    C2 --> C3
    C3 --> C4
    C4 --> C5
    
    D --> D1
    D1 --> D2
    D2 --> D3
    D3 --> D4
    D4 --> D5
    
    style B fill:#FFD700
    style C fill:#0D5F4E,color:#fff
    style D fill:#0D5F4E,color:#fff
```

---

## 14. COMPLETE SYSTEM STATE

### Global State Management

```mermaid
flowchart TB
    subgraph "localStorage Keys"
        LS1["'lean-canvas-v2'"]
        LS2["'opportunity-canvas'"]
        LS3["'90-day-plan'"]
    end
    
    subgraph "React State (Screen 1)"
        S1[canvas: LeanCanvasState]
        S2[isSaving: boolean]
        S3[lastSaved: string]
    end
    
    subgraph "React State (Screen 2)"
        S4[canvas: OpportunityCanvasState]
        S5[risks: Risk[]]
        S6[isSaving: boolean]
    end
    
    subgraph "React State (Screen 3)"
        S7[cards: Card[]]
        S8[activeSprint: number]
        S9[activeCard: string | null]
        S10[columns: Column[]]
    end
    
    S1 --> LS1
    S2 --> LS1
    S3 --> LS1
    
    S4 --> LS2
    S5 --> LS2
    S6 --> LS2
    
    S7 --> LS3
    S8 --> LS3
    S9 --> LS3
    S10 --> LS3
    
    LS1 --> S4
    LS1 --> S7
    LS2 --> S7
    
    style LS1 fill:#FFD700
    style LS2 fill:#FFD700
    style LS3 fill:#FFD700
```

---

## 15. VALIDATION CARD LIFECYCLE

### Individual Card Journey

```mermaid
stateDiagram-v2
    [*] --> Backlog: Card Generated
    
    Backlog --> ToDo: User drags to To Do
    ToDo --> Doing: Start working
    Doing --> Done: Complete task
    Done --> Learnings: Document insights
    
    Doing --> ToDo: Blocked/paused
    Done --> Doing: Need rework
    
    Learnings --> [*]: Sprint complete
    
    note right of Backlog
        Status: not-started
        Evidence: none
        AI Tips: visible
    end note
    
    note right of Doing
        Status: in-progress
        Evidence: collecting
        AI Tips: expanded
    end note
    
    note right of Done
        Status: complete
        Evidence: validated
        Success criteria: met
    end note
    
    note right of Learnings
        Status: complete
        Evidence: documented
        Insights: recorded
    end note
```

---

## Summary

**Total Diagrams:** 15 comprehensive Mermaid workflows  
**Coverage:**
- User journeys (1)
- System architecture (2)
- Data flows (3)
- Navigation (1)
- Drag & drop (2)
- Auto-save (1)
- Risk analysis (1)
- Progress tracking (1)
- Component interaction (1)
- Error handling (1)
- Export/share (1)
- Mobile responsive (1)

**Format:** GitHub-compatible Mermaid syntax  
**Purpose:** Complete visual documentation of Lean Canvas system  
**Status:** ✅ Production-ready diagrams

---

**Last Updated:** February 6, 2026  
**Maintainer:** StartupAI Development Team
