# StartupAI - System Diagrams

> **Version:** 1.0  
> **Status:** Complete  
> **Last Updated:** 2026-02-04  
> **Purpose:** Visual architecture and workflows

---

## 📋 Table of Contents

1. [System Architecture](#system-architecture)
2. [User Journey Map](#user-journey-map)
3. [Data Flow Workflows](#data-flow-workflows)
4. [Sequence Diagrams](#sequence-diagrams)
5. [State Machine](#state-machine)
6. [Entity-Relationship Model](#entity-relationship-model)
7. [Implementation Timeline](#implementation-timeline)

---

## 🏗️ System Architecture

### High-Level Architecture

```mermaid
graph TB
    subgraph User Interface
        A[Dashboard]
        B[Coach Chat]
        C[Canvas Editor]
        D[Validator Report]
        E[Pitch Deck]
        F[CRM]
        G[Analytics]
    end
    
    subgraph Orchestration
        H[Coach Agent Router]
    end
    
    subgraph AI Layer
        I[24 Specialized Agents]
        J[Gemini 2.0 Flash]
        K[Context Loader]
    end
    
    subgraph Knowledge
        L[Playbooks]
        M[Vector Database]
        N[Benchmarks]
    end
    
    subgraph Data
        O[(Startups)]
        P[(Canvas)]
        Q[(Validation)]
        R[(Conversations)]
        S[(Traction)]
    end
    
    A --> H
    B --> H
    C --> H
    D --> H
    E --> H
    F --> H
    G --> H
    
    H --> I
    I --> J
    I --> L
    I --> M
    I --> N
    
    H --> K
    K --> O
    K --> P
    K --> Q
    K --> R
    K --> S
    
    J --> R
    I --> Q
    C --> P
```

---

### Component Architecture

```mermaid
graph LR
    subgraph Frontend
        UI[React App]
        Router[React Router]
        State[Zustand Store]
    end
    
    subgraph Backend
        Edge[Supabase Edge Functions]
        Auth[Auth Service]
        DB[(PostgreSQL)]
        Vector[(pgvector)]
    end
    
    subgraph External
        Gemini[Gemini API]
        Stripe[Stripe]
        Analytics[Mixpanel]
    end
    
    UI --> Router
    UI --> State
    Router --> Edge
    Edge --> Auth
    Edge --> DB
    Edge --> Vector
    Edge --> Gemini
    UI --> Stripe
    UI --> Analytics
```

---

## 🗺️ User Journey Map

### Complete User Journey (Day 1 → Day 90)

```mermaid
journey
    title Founder's 90-Day Journey
    section Discovery (Day 1-3)
        Land on homepage: 3: Founder
        Sign up: 4: Founder
        Meet Coach AI: 5: Founder
        Complete onboarding: 4: Founder
        Build Canvas via Prompt Packs: 5: Founder, AI
    section Validation (Day 4-7)
        Get Validator score: 5: Founder, AI
        Understand constraint: 4: Founder, AI
        Choose 90-day campaign: 5: Founder, AI
        Set measurable goal: 4: Founder
    section Sprint 1 (Day 8-21)
        Plan experiments: 5: Founder, AI
        Run customer interviews: 3: Founder
        Test pricing: 4: Founder
        Record learnings: 4: Founder, AI
        Review Sprint 1: 5: Founder, AI
    section Sprints 2-5 (Day 22-90)
        Iterate experiments: 4: Founder
        Gain traction: 5: Founder
        Update metrics: 5: Founder
        Improve scores: 5: Founder, AI
    section Review (Day 90)
        90-day retrospective: 5: Founder, AI
        Persevere decision: 5: Founder
        Set next 90-day goal: 5: Founder, AI
```

---

### Onboarding Flow

```mermaid
flowchart TD
    Start([New User Signs Up]) --> Welcome[Welcome Screen]
    Welcome --> CoachIntro[Meet Your Coach]
    CoachIntro --> Discovery{Discovery Questions}
    
    Discovery --> Q1[What are you building?]
    Q1 --> Q2[Who is it for?]
    Q2 --> Q3[What problem does it solve?]
    Q3 --> Q4[How will you make money?]
    Q4 --> Q5[Current stage?]
    
    Q5 --> PromptPack[Launch Canvas Prompt Pack]
    PromptPack --> Block1[Problem Block]
    Block1 --> Block2[Customer Block]
    Block2 --> Block3[UVP Block]
    Block3 --> Block4[Solution Block]
    Block4 --> Block5[Channels Block]
    Block5 --> Block6[Revenue Block]
    Block6 --> Block7[Costs Block]
    Block7 --> Block8[Metrics Block]
    Block8 --> Block9[Advantage Block]
    
    Block9 --> CanvasComplete[Canvas Complete!]
    CanvasComplete --> FirstValidation[Run First Validation]
    FirstValidation --> Dashboard[Navigate to Dashboard]
    Dashboard --> End([Onboarding Complete])
    
    style Start fill:#e8f5e9
    style End fill:#e8f5e9
    style CanvasComplete fill:#fff9c4
    style FirstValidation fill:#fff9c4
```

---

## 🔄 Data Flow Workflows

### Chat → Agent → Response Flow

```mermaid
flowchart LR
    User[User Asks Question] --> Chat[Chat Interface]
    Chat --> Router{Agent Router}
    
    Router --> Analyze[Analyze Intent]
    Analyze --> Match[Match to Agent]
    
    Match --> Canvas[Canvas Agent]
    Match --> Sales[Sales Agent]
    Match --> SaaS[SaaS Agent]
    Match --> Validator[Validator Agent]
    Match --> Other[Other 20 Agents...]
    
    Canvas --> Context[Load Context]
    Sales --> Context
    SaaS --> Context
    Validator --> Context
    Other --> Context
    
    Context --> Playbook[(Playbooks)]
    Context --> VectorDB[(Vector DB)]
    Context --> Benchmarks[(Benchmarks)]
    
    Playbook --> AI[Gemini API]
    VectorDB --> AI
    Benchmarks --> AI
    
    AI --> Response[Generate Response]
    Response --> Citations[Add Citations]
    Citations --> Chat
    Chat --> Display[Display to User]
    
    style User fill:#e3f2fd
    style Display fill:#e3f2fd
```

---

### Canvas → Validator → Insights Pipeline

```mermaid
flowchart TD
    A[User Edits Canvas] --> B[Auto-save to Database]
    B --> C{Trigger Validator?}
    
    C -->|Manual Trigger| D[User Clicks 'Validate']
    C -->|Auto Trigger| E[Canvas Complete]
    
    D --> F[Load Canvas Data]
    E --> F
    
    F --> G[Load Traction Data]
    G --> H[Load Industry Context]
    
    H --> I[AI Analysis Engine]
    
    I --> J[Score 7 Dimensions]
    J --> K[Calculate Overall Score]
    K --> L[Identify Constraint]
    L --> M[Generate Explanations]
    
    M --> N[Save to validation_assessments]
    N --> O[Update Dashboard]
    O --> P[Notify User]
    
    P --> Q{Score Changed?}
    Q -->|Yes| R[Show Improvement Animation]
    Q -->|No| S[Display Report]
    
    R --> S
    S --> T[Suggest Next Actions]
    
    style A fill:#fff9c4
    style T fill:#c8e6c9
```

---

### 90-Day Validation Cycle

```mermaid
flowchart TD
    Start([Start Validation]) --> Assessment[Assessment Phase]
    
    Assessment --> Score7[Score 7 Dimensions]
    Score7 --> Overall[Calculate Overall Score]
    
    Overall --> Constraint[Identify #1 Constraint]
    
    Constraint --> Acquisition{Constraint Type?}
    Acquisition -->|Acquisition| CampA[Acquisition Campaign]
    Acquisition -->|Monetization| CampM[Monetization Campaign]
    Acquisition -->|Retention| CampR[Retention Campaign]
    Acquisition -->|Scalability| CampS[Scalability Campaign]
    
    CampA --> Goal[Set 90-Day Goal]
    CampM --> Goal
    CampR --> Goal
    CampS --> Goal
    
    Goal --> Sprint1[Sprint 1: Plan]
    Sprint1 --> Do1[Do Experiments]
    Do1 --> Check1[Check Results]
    Check1 --> Act1[Act on Learnings]
    
    Act1 --> Sprint2[Sprint 2-5: Repeat]
    Sprint2 --> Review[90-Day Review]
    
    Review --> Decision{Decision?}
    Decision -->|Persevere| Assessment
    Decision -->|Pivot| Constraint
    Decision -->|Pause| End([Archive & Exit])
    
    style Start fill:#e8f5e9
    style Goal fill:#fff9c4
    style End fill:#ffcdd2
```

---

## 📞 Sequence Diagrams

### Coach Conversation with Context Loading

```mermaid
sequenceDiagram
    participant U as User
    participant FE as Frontend
    participant Edge as Edge Function
    participant Context as Context Loader
    participant Router as Agent Router
    participant Agent as Specialized Agent
    participant AI as Gemini API
    participant DB as Database
    
    U->>FE: Sends message
    FE->>Edge: POST /ai-chat
    
    Edge->>Context: Load full context
    
    par Parallel Context Load
        Context->>DB: Get startup profile
        Context->>DB: Get Canvas
        Context->>DB: Get traction data
        Context->>DB: Get conversation history
        Context->>DB: Get validation session
    end
    
    DB-->>Context: Return all data
    Context-->>Edge: Formatted context
    
    Edge->>Router: Analyze intent
    Router-->>Edge: Route to Sales Agent
    
    Edge->>Agent: Build prompt with context
    Agent->>DB: Fetch Playbook
    Agent->>DB: Query Vector DB
    DB-->>Agent: Relevant knowledge
    
    Agent->>AI: Send enriched prompt
    AI-->>Agent: Generate response
    
    Agent-->>Edge: Response + citations
    Edge->>DB: Save conversation
    Edge-->>FE: Response + suggestions
    FE-->>U: Display message
```

---

### Validator Scoring Process

```mermaid
sequenceDiagram
    participant U as User
    participant FE as Frontend
    participant Edge as Validator Function
    participant DB as Database
    participant AI as Gemini API
    
    U->>FE: Clicks "Validate"
    FE->>Edge: POST /validate
    
    Edge->>DB: Get Canvas
    Edge->>DB: Get Traction
    Edge->>DB: Get Industry
    
    DB-->>Edge: Return data
    
    Edge->>AI: Analyze Canvas + Traction
    Note over AI: Scores 7 dimensions<br/>Identifies constraint<br/>Generates explanations
    
    AI-->>Edge: Validation results (JSON)
    
    Edge->>DB: Save assessment scores
    Edge->>DB: Update validator_reports
    
    Edge-->>FE: Validation report
    
    FE->>FE: Animate score changes
    FE-->>U: Display report
    
    alt Score improved
        FE->>U: Show celebration 🎉
    end
```

---

### Sprint Execution PDCA Loop

```mermaid
sequenceDiagram
    participant Coach as Coach AI
    participant Founder as Founder
    participant DB as Database
    
    Note over Coach,Founder: PLAN Phase
    Coach->>Founder: What should we focus on next 2 weeks?
    Founder->>Coach: Test pricing with 10 customers
    Coach->>Founder: Great. What's your hypothesis?
    Founder->>Coach: I believe $99/mo will convert better than $49/mo
    Coach->>DB: Save sprint plan
    
    Note over Coach,Founder: DO Phase (2 weeks later)
    Coach->>Founder: Check-in: How many tests done?
    Founder->>Coach: Tested with 7 customers so far
    Coach->>Founder: Nice progress! Keep going.
    
    Note over Coach,Founder: CHECK Phase (End of sprint)
    Coach->>Founder: Sprint's done. What were your results?
    Founder->>Coach: 4 of 7 preferred $99, higher perceived value
    Coach->>DB: Save experiment results
    
    Note over Coach,Founder: ACT Phase
    Coach->>Founder: Based on this, what changes?
    Founder->>Coach: Switching to $99 pricing tier
    Coach->>DB: Save action items
    Coach->>Founder: Perfect. Ready for Sprint 2?
```

---

## 🔄 State Machine

### Validation Session State Diagram

```mermaid
stateDiagram-v2
    [*] --> Onboarding
    
    Onboarding --> Assessment: User completes intro
    
    Assessment --> Assessment: Scoring dimension (1-7)
    Assessment --> Constraint: All 7 dimensions scored
    
    Constraint --> CampaignSetup: Bottleneck identified
    
    CampaignSetup --> SprintPlanning: 90-day goal set
    
    SprintPlanning --> SprintExecution: Plan created
    
    SprintExecution --> SprintExecution: PDCA loop (Plan→Do→Check→Act)
    SprintExecution --> SprintPlanning: Next sprint (if < 5)
    SprintExecution --> CycleReview: After Sprint 5
    
    CycleReview --> Assessment: Persevere (reassess)
    CycleReview --> CampaignSetup: Pivot (new constraint)
    CycleReview --> [*]: Pause (end validation)
    
    note right of Assessment
        Score 7 dimensions:
        - Clarity
        - Desirability
        - Viability
        - Feasibility
        - Defensibility
        - Timing
        - Mission
    end note
    
    note right of Constraint
        Identify bottleneck:
        - Acquisition
        - Monetization
        - Retention
        - Scalability
    end note
    
    note right of SprintExecution
        PDCA Loop:
        Plan → Do → Check → Act
        Repeat for 2 weeks
    end note
```

---

## 🗄️ Entity-Relationship Model

### Database Schema (Simplified)

```mermaid
erDiagram
    USERS ||--o{ STARTUPS : creates
    STARTUPS ||--|| CANVAS : has
    STARTUPS ||--o{ TRACTION : tracks
    STARTUPS ||--o{ VALIDATION_SESSIONS : runs
    STARTUPS ||--o{ CONVERSATIONS : contains
    STARTUPS ||--o{ TASKS : has
    
    VALIDATION_SESSIONS ||--o{ VALIDATION_ASSESSMENTS : includes
    VALIDATION_SESSIONS ||--o{ VALIDATION_CAMPAIGNS : runs
    VALIDATION_SESSIONS ||--o{ VALIDATION_CONVERSATIONS : logs
    
    VALIDATION_CAMPAIGNS ||--o{ VALIDATION_SPRINTS : contains
    VALIDATION_SPRINTS ||--o{ VALIDATION_EXPERIMENTS : executes
    
    USERS {
        uuid id PK
        string email
        string name
        timestamp created_at
    }
    
    STARTUPS {
        uuid id PK
        uuid user_id FK
        string name
        string industry
        string stage
        jsonb metadata
    }
    
    CANVAS {
        uuid id PK
        uuid startup_id FK
        text problem
        text solution
        text uvp
        text advantage
        text customers
        text channels
        text revenue
        text costs
        text metrics
    }
    
    VALIDATION_SESSIONS {
        uuid id PK
        uuid startup_id FK
        jsonb state
        boolean is_active
        timestamp created_at
    }
    
    VALIDATION_ASSESSMENTS {
        uuid id PK
        uuid session_id FK
        string dimension
        integer score
        text feedback
        timestamp assessed_at
    }
    
    VALIDATION_CAMPAIGNS {
        uuid id PK
        uuid session_id FK
        string constraint_type
        string campaign_type
        text goal
        date start_date
        date end_date
    }
    
    VALIDATION_SPRINTS {
        uuid id PK
        uuid campaign_id FK
        integer sprint_number
        text purpose
        string pdca_step
        jsonb outcomes
    }
    
    CONVERSATIONS {
        uuid id PK
        uuid startup_id FK
        string role
        text content
        timestamp created_at
    }
```

---

### Core Tables Relationships

```mermaid
graph TD
    A[(users)] --> B[(startups)]
    B --> C[(canvas)]
    B --> D[(traction)]
    B --> E[(conversations)]
    B --> F[(validation_sessions)]
    
    F --> G[(validation_assessments)]
    F --> H[(validation_conversations)]
    F --> I[(validation_campaigns)]
    
    I --> J[(validation_sprints)]
    J --> K[(validation_experiments)]
    
    style A fill:#e3f2fd
    style B fill:#fff9c4
    style F fill:#c8e6c9
```

---

## 📊 Implementation Timeline

### 5-Phase Gantt Chart

```mermaid
gantt
    title StartupAI Implementation Timeline (16 Weeks)
    dateFormat YYYY-MM-DD
    
    section Foundation
    Auth & Database Setup          :done, f1, 2026-01-15, 7d
    Homepage & UI Components       :done, f2, 2026-01-22, 8d
    Design System                  :done, f3, 2026-01-30, 5d
    
    section Phase 1: MVP Core
    Chat Interface                 :active, p1-1, 2026-02-04, 7d
    Prompt Packs                   :p1-2, after p1-1, 10d
    Canvas Builder                 :p1-3, after p1-1, 7d
    Validator v1                   :p1-4, after p1-3, 10d
    
    section Phase 2: Validation System
    Database Schema                :p2-1, after p1-4, 3d
    State Machine                  :p2-2, after p2-1, 5d
    Coach Persona                  :p2-3, after p2-2, 7d
    Phase Handlers                 :p2-4, after p2-3, 14d
    
    section Phase 3: Agent Network
    Agent Infrastructure           :p3-1, after p2-4, 5d
    Core Business Agents           :p3-2, after p3-1, 14d
    Execution Agents               :p3-3, after p3-2, 14d
    Industry Specialists           :p3-4, after p3-3, 10d
    
    section Phase 4: Knowledge Base
    Playbook System                :p4-1, 2026-03-15, 7d
    Vector DB Setup                :p4-2, after p4-1, 7d
    Content Ingestion              :p4-3, after p4-2, 14d
    
    section Phase 5: Polish & Scale
    Dashboard & Analytics          :p5-1, after p3-4, 10d
    Testing & QA                   :p5-2, after p5-1, 7d
    Performance Optimization       :p5-3, after p5-2, 7d
    Launch Prep                    :p5-4, after p5-3, 7d
    
    section Milestones
    Alpha Launch (20 users)        :milestone, m1, after p1-4, 0d
    Beta Launch (200 users)        :milestone, m2, after p2-4, 0d
    Public Launch (GA)             :milestone, m3, after p5-4, 0d
```

---

### Sprint Breakdown (Weeks)

```mermaid
gantt
    title Development Sprints
    dateFormat YYYY-MM-DD
    
    section Sprint Planning
    Sprint 1: Foundation           :done, s1, 2026-01-15, 2w
    Sprint 2: Chat & Canvas        :active, s2, 2026-01-29, 2w
    Sprint 3: Validator & Prompts  :s3, 2026-02-12, 2w
    Sprint 4: Validation System    :s4, 2026-02-26, 2w
    Sprint 5: Agent Core           :s5, 2026-03-12, 2w
    Sprint 6: Agent Expansion      :s6, 2026-03-26, 2w
    Sprint 7: Knowledge Base       :s7, 2026-04-09, 2w
    Sprint 8: Dashboard & Polish   :s8, 2026-04-23, 2w
```

---

## 🎯 Architecture Patterns

### Block Diagram: AI Context Stack

```mermaid
block-beta
    columns 3
    
    block:UI:3
        Dashboard
        Chat
        Canvas
        Validator
    end
    
    space
    Router["Agent Router"]
    space
    
    block:Agents:3
        Canvas_Agent
        Sales_Agent
        SaaS_Agent
        Validator_Agent
    end
    
    space
    Context["Context Loader"]
    space
    
    block:Knowledge:3
        Playbooks
        Vector_DB
        Benchmarks
    end
    
    space
    Database["PostgreSQL + pgvector"]
    space
    
    UI --> Router
    Router --> Agents
    Agents --> Context
    Context --> Knowledge
    Knowledge --> Database
    
    style UI fill:#e3f2fd
    style Router fill:#fff9c4
    style Agents fill:#c8e6c9
    style Context fill:#ffe0b2
    style Knowledge fill:#f8bbd0
    style Database fill:#d1c4e9
```

---

## 📐 System Integration Map

```mermaid
graph TB
    subgraph User_Interface["User Interface Layer"]
        UI1[Dashboard]
        UI2[Coach Chat]
        UI3[Canvas Editor]
        UI4[Validator]
        UI5[Analytics]
    end
    
    subgraph Business_Logic["Business Logic Layer"]
        BL1[Agent Router]
        BL2[Context Manager]
        BL3[Validation Engine]
        BL4[State Machine]
    end
    
    subgraph AI_Services["AI Services Layer"]
        AI1[24 Specialized Agents]
        AI2[Gemini API]
        AI3[Embedding Generator]
    end
    
    subgraph Data_Layer["Data Layer"]
        DB1[(Startups DB)]
        DB2[(Canvas DB)]
        DB3[(Validation DB)]
        DB4[(Vector DB)]
        DB5[(Playbooks DB)]
    end
    
    subgraph External_Services["External Services"]
        EXT1[Stripe]
        EXT2[Mixpanel]
        EXT3[Sentry]
    end
    
    UI1 --> BL1
    UI2 --> BL1
    UI3 --> BL2
    UI4 --> BL3
    UI5 --> BL2
    
    BL1 --> AI1
    BL2 --> DB1
    BL2 --> DB2
    BL3 --> DB3
    BL4 --> DB3
    
    AI1 --> AI2
    AI1 --> DB4
    AI1 --> DB5
    AI3 --> DB4
    
    UI1 --> EXT1
    UI1 --> EXT2
    BL1 --> EXT3
    
    style User_Interface fill:#e3f2fd
    style Business_Logic fill:#fff9c4
    style AI_Services fill:#c8e6c9
    style Data_Layer fill:#ffe0b2
    style External_Services fill:#f8bbd0
```

---

## 📝 Summary

**What These Diagrams Show:**

1. **System Architecture** - How all components connect (UI → Router → Agents → Knowledge → Database)
2. **User Journey** - The founder's experience from Day 1 → Day 90
3. **Data Flows** - How information moves through the system (Chat, Validator, Validation cycle)
4. **Sequence Diagrams** - Step-by-step interactions (Coach conversation, Validator scoring, Sprint execution)
5. **State Machine** - Validation phase progression (Onboarding → Assessment → Constraint → Sprints → Review)
6. **Entity-Relationship** - Database structure (Users → Startups → Canvas → Validation → Sprints)
7. **Gantt Chart** - 16-week implementation timeline across 5 phases

**Key Insights:**

- **Centralized Context:** Everything flows through the Context Loader (Canvas, Traction, History)
- **Agent Specialization:** 24 agents, each with domain expertise (Playbooks + Vector DB)
- **Cyclical Validation:** 90-day sprints loop indefinitely (Persevere → Reassess → Repeat)
- **One Source of Truth:** Canvas drives everything (Validator, Pitch Deck, Coach context)
- **Progressive Disclosure:** Users move through states (Onboarding → Validation → Sprints)

---

**Related Documentation:**
- `/docs/features/prd.md` - Full product requirements
- `/docs/features/tasks.md` - 67 implementation tasks
- `/docs/features/03-coach-plan.md` - Coach backend details

---

**Last Updated:** 2026-02-04  
**Maintained By:** Product & Engineering Teams
