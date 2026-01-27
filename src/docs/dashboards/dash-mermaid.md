# Auto StartupAI Dashboard - Mermaid Diagrams

**Project:** StartupAI Auto Task Runner  
**Document:** Workflows, User Journeys, State Machines  
**Design System:** Luxury 3-Panel Dashboard  
**Last Updated:** January 27, 2026

---

## Table of Contents

1. [User Flows](#user-flows)
2. [State Machines](#state-machines)
3. [System Architecture](#system-architecture)
4. [Data Flow Diagrams](#data-flow-diagrams)
5. [Interaction Sequences](#interaction-sequences)

---

## User Flows

### 1. User Journey - Start a Task

```mermaid
graph TD
    A[User Opens Dashboard] --> B[Sees Planning Column]
    B --> C{Selects Card?}
    C -->|Yes| D[Right Panel Opens]
    C -->|No| E[Browses Cards]
    E --> C
    D --> F[Reads Task Details]
    F --> G{Ready to Start?}
    G -->|Yes| H[Clicks Start Button]
    G -->|No| I[Reads More or Closes]
    I --> C
    H --> J[Card Moves to In Progress]
    J --> K{Parallel Limit Reached?}
    K -->|Yes| L[Card Moves to Queue]
    K -->|No| M[Task Starts Running]
    L --> N[Shows Queue Notification]
    M --> O[Right Panel Updates Status]
    O --> P[User Can View Logs]
```

### 2. User Journey - View Task Details

```mermaid
graph TD
    A[User Clicks Card] --> B[Right Panel Opens]
    B --> C[Shows Summary, Rationale, Next Action]
    C --> D{User Action?}
    D -->|Open Full Task| E[Modal Opens]
    D -->|Start Task| F[Move to In Progress]
    D -->|Close Panel| G[Return to Kanban]
    E --> H[User Reads Full Doc]
    H --> I[Switches Tabs: Overview/Subtasks/Logs]
    I --> J{User Action?}
    J -->|Start Task| K[Move to In Progress]
    J -->|Edit Task| L[Opens Edit Mode]
    J -->|Delete Task| M[Shows Delete Confirmation]
    J -->|Close| G
```

### 3. User Journey - Complete Task Flow

```mermaid
graph LR
    A[Planning] --> B[Queue]
    A --> C[In Progress]
    B --> C
    C --> D[AI Review]
    D --> E[Human Review]
    E --> F{Approved?}
    F -->|Yes| G[Done]
    F -->|No| H[Back to Planning]
    H --> A
```

### 4. User Journey - Mobile Experience

```mermaid
graph TD
    A[User Opens App] --> B[Hamburger Menu Closed]
    B --> C[Sees Vertical Task List]
    C --> D[Planning Section Expanded]
    D --> E{Taps Card?}
    E -->|Yes| F[Bottom Sheet Slides Up]
    E -->|No| G[Scrolls to Queue Section]
    G --> E
    F --> H[Shows Task Summary]
    H --> I{User Action?}
    I -->|Open Full Task| J[Full Screen Modal]
    I -->|Start Task| K[Task Moves Column]
    I -->|Swipe Down| L[Close Bottom Sheet]
    L --> C
```

### 5. User Journey - Roadmap View

```mermaid
graph TD
    A[User Clicks Roadmap Nav] --> B[Switches to Roadmap View]
    B --> C[Sees 4 Columns: Under Review/Planned/In Progress/Done]
    C --> D{Selects Feature Card?}
    D -->|Yes| E[Right Panel Shows Feature Details]
    D -->|No| F[Browses Features]
    F --> D
    E --> G{User Action?}
    G -->|Build Feature| H[Creates Task in Kanban]
    G -->|View Tasks| I[Switches to Kanban View]
    G -->|Edit Feature| J[Opens Edit Modal]
    G -->|Close| F
    H --> K[Navigates to Kanban]
    K --> L[New Task Appears in Planning]
```

---

## State Machines

### 1. Task State Machine

```mermaid
stateDiagram-v2
    [*] --> Planning
    Planning --> Queue: Start (parallel limit reached)
    Planning --> InProgress: Start (slots available)
    Queue --> InProgress: Slot becomes available
    InProgress --> AIReview: Task completes
    InProgress --> Planning: Task fails
    AIReview --> HumanReview: AI approves
    AIReview --> Planning: AI flags issues
    HumanReview --> Done: Human approves
    HumanReview --> Planning: Human rejects
    Done --> [*]
```

### 2. Right Panel State Machine

```mermaid
stateDiagram-v2
    [*] --> Closed
    Closed --> Preview: Card selected
    Preview --> FullTask: Open Full Task clicked
    Preview --> Closed: Close clicked
    FullTask --> Preview: Back clicked
    FullTask --> Closed: Close clicked
    Preview --> Editing: Edit clicked
    Editing --> Preview: Save clicked
    Editing --> Closed: Cancel clicked
```

### 3. Card State Machine

```mermaid
stateDiagram-v2
    [*] --> Default
    Default --> Hover: Mouse enters
    Hover --> Default: Mouse leaves
    Hover --> Selected: Click
    Selected --> Dragging: Drag starts
    Dragging --> Selected: Drag ends
    Selected --> Default: Click elsewhere
    Default --> Dragging: Drag starts
```

### 4. Column State Machine

```mermaid
stateDiagram-v2
    [*] --> Empty
    Empty --> HasCards: Card added
    HasCards --> Empty: Last card removed
    HasCards --> Full: Max capacity reached
    Full --> HasCards: Card removed
    HasCards --> DragOver: Drag enters
    DragOver --> HasCards: Drag leaves
    DragOver --> HasCards: Drop
```

### 5. Queue Management State Machine

```mermaid
stateDiagram-v2
    [*] --> CheckingCapacity
    CheckingCapacity --> HasSlots: In Progress < 3
    CheckingCapacity --> AtCapacity: In Progress = 3
    HasSlots --> AcceptTask: New task started
    AcceptTask --> MoveToInProgress: Move directly
    AtCapacity --> QueueTask: New task started
    QueueTask --> AddToQueue: Wait for slot
    AddToQueue --> CheckingCapacity: Task added
    MoveToInProgress --> CheckingCapacity: Check queue
```

---

## System Architecture

### 1. Component Hierarchy

```mermaid
graph TD
    A[Dashboard Container] --> B[Left Navigation]
    A --> C[Main Workspace]
    A --> D[Right Panel]
    B --> E[Nav Items]
    B --> F[Settings Button]
    C --> G[Header Strip]
    C --> H[Filter Row]
    C --> I[Kanban Board]
    I --> J[Planning Column]
    I --> K[Queue Column]
    I --> L[In Progress Column]
    I --> M[AI Review Column]
    J --> N[Task Card 1]
    J --> O[Task Card 2]
    J --> P[Task Card N]
    N --> Q[Card Header]
    N --> R[Card Body]
    N --> S[Card Footer]
    D --> T[Task Preview]
    D --> U[Metadata Grid]
    D --> V[Action Buttons]
```

### 2. Data Flow Architecture

```mermaid
graph LR
    A[User Action] --> B[UI Component]
    B --> C[State Manager]
    C --> D[API Layer]
    D --> E[Backend Service]
    E --> F[Database]
    F --> E
    E --> D
    D --> C
    C --> B
    B --> G[UI Update]
```

### 3. Mobile Layout Architecture

```mermaid
graph TD
    A[Mobile Container] --> B[Header]
    A --> C[Main Content]
    A --> D[Hamburger Menu]
    A --> E[Bottom Sheet]
    B --> F[Logo]
    B --> G[Notifications]
    B --> H[User Avatar]
    C --> I[Filter Row]
    C --> J[Task List Vertical]
    J --> K[Planning Section]
    J --> L[Queue Section]
    J --> M[In Progress Section]
    K --> N[Task Card 1]
    K --> O[Task Card 2]
    D --> P[Nav Items]
    E --> Q[Task Details]
```

### 4. Responsive Layout Switching

```mermaid
graph TD
    A{Screen Width?} --> B[< 768px: Mobile]
    A --> C[768-1279px: Tablet]
    A --> D[>= 1280px: Desktop]
    B --> E[Single Column]
    B --> F[Hamburger Menu]
    B --> G[Bottom Sheet]
    C --> H[Left Nav + Main]
    C --> I[Right Drawer]
    D --> J[3-Panel Layout]
    D --> K[Fixed Right Panel]
```

---

## Data Flow Diagrams

### 1. Task Creation Flow

```mermaid
sequenceDiagram
    participant U as User
    participant UI as UI Component
    participant S as State Manager
    participant API as API Layer
    participant DB as Database

    U->>UI: Clicks "New Task"
    UI->>S: Dispatch CREATE_TASK
    S->>API: POST /tasks
    API->>DB: INSERT task
    DB-->>API: Task ID
    API-->>S: Task created
    S-->>UI: Update state
    UI-->>U: Show new task in Planning
```

### 2. Drag & Drop Flow

```mermaid
sequenceDiagram
    participant U as User
    participant Card as Task Card
    participant Col as Column
    participant S as State Manager
    participant Logic as Queue Logic
    participant API as API Layer

    U->>Card: Drag starts
    Card->>Col: Drag over column
    Col->>Col: Highlight drop zone
    U->>Col: Drop card
    Col->>S: Dispatch MOVE_TASK
    S->>Logic: Check parallel limit
    Logic-->>S: Target column (adjusted)
    S->>API: PATCH /tasks/:id
    API-->>S: Task updated
    S-->>Card: Update position
    Card-->>U: Visual confirmation
```

### 3. Queue Management Flow

```mermaid
sequenceDiagram
    participant U as User
    participant Task as Task
    participant Queue as Queue Logic
    participant IP as In Progress
    participant S as State Manager

    U->>Task: Start Task
    Task->>Queue: Check capacity
    Queue->>IP: Count tasks
    IP-->>Queue: 3 tasks (limit reached)
    Queue->>S: Move to Queue
    S-->>U: Notification: "Task queued"
    
    Note over IP: Task completes
    
    IP->>Queue: Slot available
    Queue->>Queue: Get first queued task
    Queue->>S: Move to In Progress
    S-->>U: Notification: "Task started"
```

### 4. Right Panel Update Flow

```mermaid
sequenceDiagram
    participant U as User
    participant Card as Task Card
    participant Panel as Right Panel
    participant S as State Manager
    participant API as API Layer

    U->>Card: Click card
    Card->>S: SELECT_TASK
    S->>API: GET /tasks/:id/details
    API-->>S: Task details
    S->>Panel: Update content
    Panel-->>U: Show task details
    
    Note over Panel: User interacts
    
    U->>Panel: Click "Open Full Task"
    Panel->>S: OPEN_MODAL
    S-->>U: Show full task modal
```

### 5. AI Review Flow

```mermaid
sequenceDiagram
    participant Task as Task
    participant AI as AI Review
    participant Human as Human Review
    participant S as State Manager
    participant API as API Layer

    Task->>AI: Task completes
    AI->>API: POST /ai/review
    API-->>AI: Analysis results
    AI->>AI: Check quality gates
    
    alt Passes AI review
        AI->>Human: Send to human review
        Human->>S: Approve/Reject
    else Fails AI review
        AI->>S: Return to Planning
        S-->>Task: Add AI feedback
    end
```

---

## Interaction Sequences

### 1. Start Task Interaction

```mermaid
sequenceDiagram
    participant U as User
    participant C as Card
    participant R as Right Panel
    participant S as State Manager
    participant K as Kanban

    U->>C: Click Start button
    C->>S: START_TASK
    S->>S: Check parallel limit
    
    alt Slot available
        S->>K: Move to In Progress
        K-->>U: Card animates to column
    else No slot available
        S->>K: Move to Queue
        K-->>U: Card animates to Queue
        K-->>U: Show notification
    end
    
    S->>R: Update task status
    R-->>U: Show new status
```

### 2. Filter Tasks Interaction

```mermaid
sequenceDiagram
    participant U as User
    participant F as Filter Dropdown
    participant S as State Manager
    participant K as Kanban

    U->>F: Selects "Phase 1"
    F->>S: FILTER_BY_PHASE
    S->>S: Filter tasks
    S->>K: Update visible cards
    K-->>U: Animate transition
    
    U->>F: Selects "Feature"
    F->>S: FILTER_BY_CATEGORY
    S->>S: Apply additional filter
    S->>K: Update visible cards
    K-->>U: Smooth transition
```

### 3. Mobile Bottom Sheet Interaction

```mermaid
sequenceDiagram
    participant U as User
    participant Card as Task Card
    participant Sheet as Bottom Sheet
    participant Overlay as Dim Overlay

    U->>Card: Tap card
    Card->>Overlay: Show overlay
    Overlay-->>U: Dim background
    Card->>Sheet: Trigger slide up
    Sheet->>Sheet: Animate up (300ms)
    Sheet-->>U: Show task details
    
    alt User swipes down
        U->>Sheet: Swipe down gesture
        Sheet->>Sheet: Animate down (250ms)
        Sheet->>Overlay: Hide overlay
        Overlay-->>U: Remove dim
    else User taps overlay
        U->>Overlay: Tap outside
        Overlay->>Sheet: Close sheet
        Sheet->>Sheet: Animate down
        Overlay-->>U: Remove dim
    end
```

### 4. Responsive Layout Switch

```mermaid
sequenceDiagram
    participant W as Window
    participant D as Dashboard
    participant L as Left Nav
    participant R as Right Panel

    W->>D: Resize to 1200px
    D->>D: Check breakpoint
    
    alt Entering tablet range
        D->>L: Compress to 200px
        D->>R: Convert to drawer
        R-->>D: Slide out
    end
    
    W->>D: Resize to 600px
    D->>D: Check breakpoint
    
    alt Entering mobile range
        D->>L: Hide (hamburger menu)
        D->>R: Convert to bottom sheet
        R-->>D: Move to bottom
    end
```

### 5. Task Edit & Save Flow

```mermaid
sequenceDiagram
    participant U as User
    participant Modal as Task Modal
    participant Form as Edit Form
    participant S as State Manager
    participant API as API Layer

    U->>Modal: Click Edit icon
    Modal->>Form: Enter edit mode
    Form-->>U: Show editable fields
    
    U->>Form: Edit title, description
    Form->>Form: Local state update
    
    U->>Form: Click Save
    Form->>S: SAVE_TASK
    S->>API: PATCH /tasks/:id
    
    alt Save successful
        API-->>S: Task updated
        S->>Modal: Update content
        Modal-->>U: Show success
        Modal->>Form: Exit edit mode
    else Save fails
        API-->>S: Error
        S-->>U: Show error message
        Form-->>U: Keep in edit mode
    end
```

### 6. Real-time Collaboration Flow

```mermaid
sequenceDiagram
    participant U1 as User 1
    participant U2 as User 2
    participant S as State Manager
    participant WS as WebSocket
    participant Server as Server

    U1->>S: Move task to In Progress
    S->>WS: Send update
    WS->>Server: Broadcast task.moved
    Server->>WS: Send to all clients
    WS->>U2: Receive task.moved
    U2->>U2: Update local state
    U2->>U2: Animate card movement
    U2-->>U2: Show notification
```

---

## Workflow Diagrams

### 1. Complete Task Lifecycle

```mermaid
graph TD
    A[Task Created] --> B[Added to Planning]
    B --> C{User Starts Task}
    C -->|Slots Available| D[Move to In Progress]
    C -->|No Slots| E[Move to Queue]
    E --> F[Wait for Slot]
    F --> D
    D --> G[Task Executes]
    G --> H{Task Completes?}
    H -->|Success| I[Move to AI Review]
    H -->|Failure| J[Move to Planning with Error]
    I --> K{AI Approves?}
    K -->|Yes| L[Move to Human Review]
    K -->|No| J
    L --> M{Human Approves?}
    M -->|Yes| N[Move to Done]
    M -->|No| J
    N --> O[Task Archived]
```

### 2. User Navigation Flow

```mermaid
graph TD
    A[Dashboard Home] --> B{Select Module}
    B -->|Kanban| C[Kanban View]
    B -->|Agent Terminals| D[Agent View]
    B -->|Insights| E[Insights View]
    B -->|Roadmap| F[Roadmap View]
    B -->|Settings| G[Settings View]
    C --> H{User Action}
    H -->|View Task| I[Open Right Panel]
    H -->|Start Task| J[Update Task Status]
    H -->|Create Task| K[Open Create Modal]
    F --> L{User Action}
    L -->|View Feature| M[Open Right Panel]
    L -->|Build Feature| N[Create Task in Kanban]
    L -->|Edit Feature| O[Open Edit Modal]
```

### 3. Error Handling Flow

```mermaid
graph TD
    A[User Action] --> B{Action Valid?}
    B -->|Yes| C[Process Action]
    B -->|No| D[Show Validation Error]
    C --> E{API Call Succeeds?}
    E -->|Yes| F[Update UI]
    E -->|No| G[Show Error Message]
    F --> H[Success State]
    G --> I{Retryable Error?}
    I -->|Yes| J[Show Retry Button]
    I -->|No| K[Show Contact Support]
    D --> L[User Corrects Input]
    L --> A
    J --> A
```

### 4. Parallel Task Management

```mermaid
graph TD
    A[Check In Progress Count] --> B{Count < 3?}
    B -->|Yes| C[Accept New Task]
    B -->|No| D[Add to Queue]
    C --> E[Start Task Execution]
    D --> F[Monitor In Progress]
    F --> G{Task Completes}
    G -->|Yes| H[Decrement Count]
    H --> I{Queue Has Tasks?}
    I -->|Yes| J[Get First Queued Task]
    I -->|No| F
    J --> K[Move to In Progress]
    K --> E
```

---

**Status:** Complete Mermaid diagram specification  
**Related Docs:** `/docs/dashboards/auto-startupai.md`, `/docs/dashboards/dash-wireframe.md`
