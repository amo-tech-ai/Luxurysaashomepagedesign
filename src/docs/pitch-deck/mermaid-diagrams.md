# Pitch Deck Wizard - Workflows & Logic Diagrams

**Project:** StartupAI Pitch Deck Generator  
**Phase:** 13 - Industry-Specific Wizard  
**Document Type:** Workflows, User Journeys, Logic Flows  
**Last Updated:** January 27, 2026

---

## Overview

This document contains Mermaid diagrams for all workflows, user journeys, conditional logic, AI agent interactions, and state management in the pitch deck wizard.

---

## Table of Contents

1. [Overall User Journey](#1-overall-user-journey)
2. [Step-by-Step Flow](#2-step-by-step-flow)
3. [Industry Selection Logic](#3-industry-selection-logic)
4. [AI Suggestion Engine](#4-ai-suggestion-engine)
5. [Validation Logic](#5-validation-logic)
6. [State Management](#6-state-management)
7. [Data Flow](#7-data-flow)
8. [Component Architecture](#8-component-architecture)

---

## 1. Overall User Journey

### High-Level Flow

```mermaid
graph TD
    A[User Lands on Wizard] --> B[Step 1: Startup Info]
    B --> C{Info Valid?}
    C -->|Yes| D[Step 2: Industry Selection]
    C -->|No| B
    D --> E[Industry-Specific Questions]
    E --> F{Questions Complete?}
    F -->|Yes| G[Step 3: Market & Traction]
    F -->|No| E
    G --> H[Step 4: Deck Style]
    H --> I[Step 5: Review & Generate]
    I --> J{User Confirms?}
    J -->|Yes| K[Generate Deck]
    J -->|Edit| L{Which Step?}
    L -->|Info| B
    L -->|Industry| E
    L -->|Market| G
    L -->|Style| H
    K --> M[Display Generated Deck]
    M --> N{User Action?}
    N -->|Download PDF| O[Export PDF]
    N -->|Edit Slides| P[Slide Editor]
    N -->|Share| Q[Generate Share Link]
    
    style A fill:#e8f5e9
    style K fill:#fff3e0
    style M fill:#e3f2fd
```

---

## 2. Step-by-Step Flow

### Step 1: Startup Info

```mermaid
graph TD
    A[Enter Step 1] --> B[Display Form]
    B --> C[User Fills Startup Name]
    C --> D[User Writes One-Liner]
    D --> E{Character Count}
    E -->|< 50 chars| F[Show Warning]
    E -->|50-120 chars| G[Show Success]
    E -->|> 120 chars| H[Block Input]
    F --> I[Continue Anyway]
    G --> J[User Selects Stage]
    I --> J
    J --> K[Optional: Founder Names]
    K --> L{Continue Button}
    L -->|Minimum Met| M[Navigate to Step 2]
    L -->|Missing Required| N[Highlight Missing Fields]
    N --> B
    
    style A fill:#e8f5e9
    style M fill:#e3f2fd
```

### Step 2: Industry Focus

```mermaid
graph TD
    A[Enter Step 2] --> B[Show Industry Grid]
    B --> C[User Selects Industry]
    C --> D{Industry Type}
    D -->|AI SaaS| E[Load AI SaaS Questions]
    D -->|Financial| F[Load Financial Questions]
    D -->|Sales| G[Load Sales Questions]
    D -->|Other| H[Load Industry Questions]
    E --> I[Display Three-Column Layout]
    F --> I
    G --> I
    H --> I
    I --> J[User Fills Questions]
    J --> K[AI Agent Analyzes Input]
    K --> L[Update Right Panel]
    L --> M{Real-time Validation}
    M -->|Pass| N[Enable Continue]
    M -->|Fail| O[Show Warnings]
    O --> J
    N --> P[Navigate to Step 3]
    
    style A fill:#e8f5e9
    style K fill:#fff3e0
    style P fill:#e3f2fd
```

### Step 3: Market & Traction

```mermaid
graph TD
    A[Enter Step 3] --> B[Display Market Form]
    B --> C[User Enters TAM]
    C --> D[User Enters SAM]
    D --> E[User Enters SOM]
    E --> F[Generate Visual Chart]
    F --> G{Validation}
    G -->|TAM > SAM > SOM| H[Show Success]
    G -->|Invalid Hierarchy| I[Show Error]
    I --> C
    H --> J[User Enters Traction]
    J --> K[AI Benchmarks Stage]
    K --> L{Compare to Benchmarks}
    L -->|Strong| M[Highlight Strength]
    L -->|Weak| N[Suggest Improvements]
    M --> O[Enable Continue]
    N --> O
    O --> P[Navigate to Step 4]
    
    style A fill:#e8f5e9
    style K fill:#fff3e0
    style P fill:#e3f2fd
```

### Step 4: Deck Style

```mermaid
graph TD
    A[Enter Step 4] --> B[Show Style Options]
    B --> C{User Selects Style}
    C -->|Minimal| D[Preview Minimal]
    C -->|Bold| E[Preview Bold]
    C -->|Classic| F[Preview Classic]
    D --> G[User Selects Tone]
    E --> G
    F --> G
    G --> H{Tone Type}
    H -->|Professional| I[Set Professional Tone]
    H -->|Confident| J[Set Confident Tone]
    H -->|Clear| K[Set Clear Tone]
    I --> L[Save Preferences]
    J --> L
    K --> L
    L --> M[Navigate to Step 5]
    
    style A fill:#e8f5e9
    style M fill:#e3f2fd
```

### Step 5: Review & Generate

```mermaid
graph TD
    A[Enter Step 5] --> B[Aggregate All Data]
    B --> C[Run AI Analysis]
    C --> D[Calculate Confidence Score]
    D --> E[Detect Risks & Gaps]
    E --> F[Generate Preview]
    F --> G[Display Review Screen]
    G --> H{User Action}
    H -->|Edit Step| I[Navigate Back]
    H -->|Generate| J[Call AI API]
    J --> K{API Response}
    K -->|Success| L[Generate 12 Slides]
    K -->|Error| M[Show Error Message]
    M --> G
    L --> N[Display Generated Deck]
    N --> O{User Action}
    O -->|Edit Slide| P[Open Slide Editor]
    O -->|Download| Q[Export PDF]
    O -->|Share| R[Generate Link]
    
    style A fill:#e8f5e9
    style C fill:#fff3e0
    style J fill:#fff3e0
    style N fill:#e3f2fd
```

---

## 3. Industry Selection Logic

### Industry Routing

```mermaid
flowchart TD
    A[User on Industry Selection] --> B{Which Industry?}
    B -->|AI SaaS| C[Load AI SaaS Config]
    B -->|Financial Services| D[Load Financial Config]
    B -->|Sales & Marketing| E[Load Sales Config]
    B -->|Retail & Commerce| F[Load Retail Config]
    B -->|CRM & Social Media| G[Load CRM Config]
    B -->|Events Management| H[Load Events Config]
    B -->|eCommerce| I[Load eCommerce Config]
    B -->|Healthcare| J[Load Healthcare Config]
    B -->|Cybersecurity| K[Load Cybersecurity Config]
    B -->|Logistics| L[Load Logistics Config]
    B -->|Education| M[Load Education Config]
    B -->|Legal| N[Load Legal Config]
    B -->|FinTech| O[Load FinTech Config]
    
    C --> P[Render Questions]
    D --> P
    E --> P
    F --> P
    G --> P
    H --> P
    I --> P
    J --> P
    K --> P
    L --> P
    M --> P
    N --> P
    O --> P
    
    P --> Q[Initialize AI Panel]
    Q --> R[Start Real-time Validation]
    
    style A fill:#e8f5e9
    style P fill:#e3f2fd
    style Q fill:#fff3e0
```

### Industry Configuration Schema

```mermaid
classDiagram
    class IndustryConfig {
        +string id
        +string name
        +string icon
        +Question[] questions
        +Metric[] suggestedMetrics
        +AIInsight[] insights
        +string[] suggestions
        +ValidationRule[] validationRules
        +string proTip
    }
    
    class Question {
        +string id
        +string label
        +string type
        +string placeholder
        +number minLength
        +number maxLength
        +boolean required
        +Option[] options
    }
    
    class Metric {
        +string name
        +string unit
        +string description
    }
    
    class AIInsight {
        +string text
        +string type
    }
    
    class ValidationRule {
        +string field
        +string condition
        +string message
    }
    
    IndustryConfig "1" --> "*" Question
    IndustryConfig "1" --> "*" Metric
    IndustryConfig "1" --> "*" AIInsight
    IndustryConfig "1" --> "*" ValidationRule
```

---

## 4. AI Suggestion Engine

### AI Analysis Flow

```mermaid
graph TD
    A[User Types in Field] --> B[Debounce 500ms]
    B --> C[Capture Current State]
    C --> D[Send to AI Agent]
    D --> E{AI Agent Processing}
    E --> F[Analyze Text Length]
    E --> G[Analyze Keywords]
    E --> H[Check Industry Context]
    E --> I[Compare to Benchmarks]
    F --> J[Aggregate Analysis]
    G --> J
    H --> J
    I --> J
    J --> K{Generate Suggestions}
    K -->|Text Too Short| L[Suggest: Add Detail]
    K -->|Missing Keywords| M[Suggest: Add Industry Terms]
    K -->|Vague Problem| N[Suggest: Be Specific]
    K -->|No Metrics| O[Suggest: Add Metrics]
    L --> P[Update Right Panel]
    M --> P
    N --> P
    O --> P
    P --> Q[Update Checklist]
    Q --> R[Display to User]
    
    style D fill:#fff3e0
    style E fill:#fff3e0
    style K fill:#fff3e0
```

### AI Suggestion Triggers

```mermaid
flowchart TD
    A[User Input Event] --> B{Trigger Type}
    
    B -->|Character Count| C[Text Length Check]
    C -->|< Min Length| D[Trigger: Add More Detail]
    C -->|> Max Length| E[Trigger: Shorten Text]
    
    B -->|Keyword Presence| F[Keyword Analysis]
    F -->|Missing Revenue Terms| G[Trigger: Add Revenue Framing]
    F -->|Missing Metrics| H[Trigger: Add Benchmark Metrics]
    
    B -->|Industry Context| I[Context Check]
    I -->|AI SaaS| J[Check: Automation, ROI]
    I -->|Financial| K[Check: Risk, Compliance]
    I -->|Sales| L[Check: Revenue, Pipeline]
    
    B -->|Integration Depth| M[Integration Check]
    M -->|< 2 Integrations| N[Trigger: Add Platforms]
    M -->|No CRM Mentioned| O[Trigger: Specify Workflow]
    
    D --> P[Queue Suggestion]
    E --> P
    G --> P
    H --> P
    J --> P
    K --> P
    L --> P
    N --> P
    O --> P
    
    P --> Q[Display Suggestion Button]
    
    style F fill:#fff3e0
    style I fill:#fff3e0
    style M fill:#fff3e0
```

### Suggestion Priority Logic

```mermaid
graph TD
    A[All Suggestions Generated] --> B[Categorize by Impact]
    B --> C{Impact Level}
    C -->|Critical| D[Priority 1: Blocking Issues]
    C -->|High| E[Priority 2: Important Gaps]
    C -->|Medium| F[Priority 3: Improvements]
    C -->|Low| G[Priority 4: Nice-to-Have]
    
    D --> H[Sort by Step Progress]
    E --> H
    F --> H
    G --> H
    
    H --> I[Select Top 3-4]
    I --> J[Display in Right Panel]
    
    J --> K{User Clicks Suggestion}
    K -->|Yes| L[Apply AI Enhancement]
    K -->|No| M[Keep as Reference]
    
    L --> N[Update Form Field]
    N --> O[Re-run Analysis]
    O --> A
    
    style A fill:#fff3e0
    style I fill:#e3f2fd
```

---

## 5. Validation Logic

### Field Validation

```mermaid
graph TD
    A[Field Change Event] --> B{Field Type}
    
    B -->|Text Input| C[Validate Text]
    C --> D{Check Length}
    D -->|< Min| E[Show Warning]
    D -->|OK| F[Show Success]
    D -->|> Max| G[Block Input]
    
    B -->|Dropdown| H[Validate Selection]
    H --> I{Selected?}
    I -->|Yes| J[Mark Valid]
    I -->|No| K[Mark Invalid]
    
    B -->|Multi-select| L[Validate Count]
    L --> M{Count Check}
    M -->|0 selected| N[Show Error]
    M -->|1-2 selected| O[Show Success]
    M -->|> 2| P[Disable Others]
    
    B -->|Number| Q[Validate Number]
    Q --> R{Range Check}
    R -->|In Range| S[Mark Valid]
    R -->|Out of Range| T[Show Error]
    
    E --> U[Update UI State]
    F --> U
    G --> U
    J --> U
    K --> U
    N --> U
    O --> U
    P --> U
    S --> U
    T --> U
    
    U --> V[Update Continue Button]
    
    style A fill:#e8f5e9
    style V fill:#e3f2fd
```

### Step Validation

```mermaid
flowchart TD
    A[User Clicks Continue] --> B{Step Type}
    
    B -->|Step 1| C[Validate Startup Info]
    C --> D{All Required Filled?}
    D -->|Yes| E[Check One-Liner Length]
    E -->|50-120 chars| F[Pass Validation]
    E -->|< 50| G[Show Warning, Allow Continue]
    D -->|No| H[Block, Highlight Missing]
    
    B -->|Step 2| I[Validate Industry]
    I --> J{Industry Selected?}
    J -->|Yes| K[Check Question Answers]
    K -->|Min 3 of 5| L[Pass Validation]
    K -->|< 3| M[Block, Show Requirements]
    J -->|No| N[Block, Show Error]
    
    B -->|Step 3| O[Validate Market]
    O --> P{TAM/SAM/SOM Hierarchy}
    P -->|Valid| Q[Pass Validation]
    P -->|Invalid| R[Block, Show Error]
    
    B -->|Step 4| S[Validate Style]
    S --> T{Style & Tone Selected?}
    T -->|Yes| U[Pass Validation]
    T -->|No| V[Block, Show Error]
    
    F --> W[Navigate Next]
    G --> W
    L --> W
    Q --> W
    U --> W
    
    H --> X[Stay on Step]
    M --> X
    N --> X
    R --> X
    V --> X
    
    style F fill:#4caf50
    style W fill:#e3f2fd
    style X fill:#ef5350
```

### Checklist Validation

```mermaid
graph TD
    A[Form State Change] --> B[Get All Field Values]
    B --> C[Run Checklist Rules]
    
    C --> D{Rule 1: Buyer Defined}
    D -->|Target customer filled & > 50 chars| E[✓ Pass]
    D -->|Not filled or too short| F[⚠ Fail]
    
    C --> G{Rule 2: Problem Clear}
    G -->|Problem filled & contains keywords| H[✓ Pass]
    G -->|Missing or vague| I[⚠ Fail]
    
    C --> J{Rule 3: AI Impact Measurable}
    J -->|Solution filled & quantified| K[✓ Pass]
    J -->|Missing or not quantified| L[⚠ Fail]
    
    C --> M{Rule 4: Metrics Present}
    M -->|At least 1 metric added| N[✓ Pass]
    M -->|No metrics| O[⚠ Fail]
    
    E --> P[Update Checklist UI]
    F --> P
    H --> P
    I --> P
    K --> P
    L --> P
    N --> P
    O --> P
    
    P --> Q[Calculate Completion %]
    Q --> R[Display to User]
    
    style E fill:#4caf50
    style H fill:#4caf50
    style K fill:#4caf50
    style N fill:#4caf50
    style F fill:#ff9800
    style I fill:#ff9800
    style L fill:#ff9800
    style O fill:#ff9800
```

---

## 6. State Management

### Global State Structure

```mermaid
graph TD
    A[WizardState] --> B[currentStep: number]
    A --> C[startupInfo: StartupInfo]
    A --> D[industryData: IndustryData]
    A --> E[marketData: MarketData]
    A --> F[styleData: StyleData]
    A --> G[generatedDeck: Deck]
    
    C --> C1[name: string]
    C --> C2[oneLiner: string]
    C --> C3[stage: string]
    C --> C4[founders: string]
    
    D --> D1[industryId: string]
    D --> D2[answers: Record]
    D --> D3[metrics: Metric[]]
    
    E --> E1[tam: number]
    E --> E2[sam: number]
    E --> E3[som: number]
    E --> E4[traction: Traction]
    
    F --> F1[style: string]
    F --> F2[tone: string]
    
    G --> G1[slides: Slide[]]
    G --> G2[confidence: number]
    G --> G3[analysis: Analysis]
    
    style A fill:#e3f2fd
    style C fill:#fff3e0
    style D fill:#fff3e0
    style E fill:#fff3e0
    style F fill:#fff3e0
    style G fill:#e8f5e9
```

### State Updates

```mermaid
sequenceDiagram
    participant User
    participant Component
    participant State
    participant AI Agent
    
    User->>Component: Types in Field
    Component->>State: Update Field Value
    State->>Component: Trigger Re-render
    Component->>AI Agent: Send for Analysis
    AI Agent->>AI Agent: Process Input
    AI Agent->>State: Update Suggestions
    State->>Component: Trigger Re-render
    Component->>User: Display Updated UI
    
    User->>Component: Clicks Continue
    Component->>State: Validate Current Step
    State->>State: Run Validation Rules
    State->>Component: Return Validation Result
    alt Validation Pass
        Component->>State: Increment Step
        State->>Component: Navigate to Next Step
    else Validation Fail
        Component->>User: Show Validation Errors
    end
```

---

## 7. Data Flow

### Complete Data Flow

```mermaid
graph LR
    A[User Input] --> B[Component State]
    B --> C[Validation Layer]
    C --> D{Valid?}
    D -->|Yes| E[Global State]
    D -->|No| F[Error State]
    F --> G[Display Errors]
    G --> A
    
    E --> H[AI Analysis Service]
    H --> I[AI Suggestions]
    I --> J[Update Right Panel]
    
    E --> K[Progress Tracking]
    K --> L[Update Progress Bar]
    
    E --> M{Continue Clicked?}
    M -->|Yes| N[Next Step]
    M -->|No| O[Stay on Step]
    
    N --> P[New Component Renders]
    P --> Q[Load Step Data]
    Q --> B
    
    style E fill:#e3f2fd
    style H fill:#fff3e0
```

### API Integration Points

```mermaid
graph TD
    A[Step 5: Generate Deck] --> B[Aggregate All Data]
    B --> C[Format Payload]
    C --> D{API Call}
    D -->|POST /api/generate-deck| E[AI API]
    E --> F{Response}
    F -->|Success 200| G[Parse Response]
    F -->|Error 4xx/5xx| H[Error Handler]
    
    G --> I[Extract Slides]
    I --> J[Store in State]
    J --> K[Render Generated Deck]
    
    H --> L[Display Error Message]
    L --> M[Retry Option]
    M --> D
    
    K --> N{User Action}
    N -->|Edit Slide| O[PUT /api/update-slide]
    N -->|Export PDF| P[POST /api/export-pdf]
    N -->|Share| Q[POST /api/create-share-link]
    
    O --> R[Update Slide in State]
    P --> S[Download File]
    Q --> T[Display Share URL]
    
    style E fill:#fff3e0
    style K fill:#e3f2fd
```

---

## 8. Component Architecture

### Component Hierarchy

```mermaid
graph TD
    A[WizardPage] --> B[ProgressBar]
    A --> C[StepRouter]
    
    C --> D[Step1: StartupInfo]
    C --> E[Step2: IndustryFocus]
    C --> F[Step3: MarketTraction]
    C --> G[Step4: DeckStyle]
    C --> H[Step5: ReviewGenerate]
    
    E --> I[LeftColumn: Progress]
    E --> J[CenterColumn: Questions]
    E --> K[RightColumn: AIPanel]
    
    J --> L[IndustrySelector]
    J --> M[QuestionForm]
    
    M --> N[TextInput]
    M --> O[Textarea]
    M --> P[Dropdown]
    M --> Q[MultiSelect]
    M --> R[MetricInput]
    
    K --> S[AIInsights]
    K --> T[SuggestionButtons]
    K --> U[Checklist]
    K --> V[ProTip]
    
    H --> W[AnalysisPanel]
    H --> X[PreviewPanel]
    
    style A fill:#e3f2fd
    style E fill:#fff3e0
    style M fill:#e8f5e9
```

### Component Props Flow

```mermaid
sequenceDiagram
    participant WizardPage
    participant StepRouter
    participant IndustryStep
    participant QuestionForm
    participant AIPanel
    
    WizardPage->>StepRouter: currentStep, wizardState
    StepRouter->>IndustryStep: industryData, onChange
    IndustryStep->>QuestionForm: questions, answers, onChange
    QuestionForm->>QuestionForm: User types
    QuestionForm->>IndustryStep: onChange(field, value)
    IndustryStep->>WizardPage: updateIndustryData(data)
    WizardPage->>AIPanel: currentAnswers, industryId
    AIPanel->>AIPanel: Analyze & Generate Suggestions
    AIPanel->>WizardPage: Display Suggestions
```

---

## 9. Conditional Logic Flows

### Industry-Specific Question Rendering

```mermaid
graph TD
    A[Load Industry Questions] --> B{Industry Type}
    
    B -->|AI SaaS| C[Render 5 Questions]
    C --> C1[Target Customer with Dropdown]
    C --> C2[Core Problem Textarea]
    C --> C3[AI Solution Textarea]
    C --> C4[Why This Wins Bullets]
    C --> C5[Proof Metrics 3 Fields]
    
    B -->|Financial Services| D[Render 5 Questions]
    D --> D1[Customer/Buyer Textarea]
    D --> D2[Financial Problem Textarea]
    D --> D3[AI Solution Textarea]
    D --> D4[Value Drivers Multi-Select]
    D --> D5[Metrics 3-5 Fields]
    
    B -->|CRM & Social| E[Render 6 Questions]
    E --> E1[User/Buyer Textarea]
    E --> E2[Growth Problem Textarea]
    E --> E3[AI Solution Textarea]
    E --> E4[Integrations Multi-Select]
    E --> E5[Value Drivers Multi-Select]
    E --> E6[Metrics 2-4 Fields]
    
    C1 --> F[Render Question Components]
    C2 --> F
    C3 --> F
    C4 --> F
    C5 --> F
    D1 --> F
    D2 --> F
    D3 --> F
    D4 --> F
    D5 --> F
    E1 --> F
    E2 --> F
    E3 --> F
    E4 --> F
    E5 --> F
    E6 --> F
    
    style B fill:#fff3e0
    style F fill:#e3f2fd
```

### Multi-Select Logic

```mermaid
graph TD
    A[User Clicks Checkbox] --> B{Current Count}
    
    B -->|0 selected| C[Add Selection]
    C --> D[Update State]
    
    B -->|1 selected| E{Max Limit?}
    E -->|No Limit| C
    E -->|Max 2| F[Add Selection]
    F --> G[Count = 2]
    
    B -->|2 selected Max 2| H{Clicking Selected?}
    H -->|Yes| I[Remove Selection]
    H -->|No| J[Block, Show Message]
    
    I --> K[Update State]
    J --> L["Max 2 selections"]
    
    G --> M[Disable Remaining]
    
    D --> N[Re-render UI]
    K --> N
    M --> N
    L --> N
    
    style A fill:#e8f5e9
    style N fill:#e3f2fd
```

---

## 10. Error Handling

### Error Flow

```mermaid
graph TD
    A[Error Occurs] --> B{Error Type}
    
    B -->|Validation Error| C[Display Inline Error]
    C --> D[Highlight Field]
    D --> E[Show Error Message]
    E --> F[Block Continue Button]
    
    B -->|API Error| G[Display Toast Notification]
    G --> H{Retry Available?}
    H -->|Yes| I[Show Retry Button]
    H -->|No| J[Show Support Link]
    
    B -->|Network Error| K[Display Connection Error]
    K --> L[Show Offline Message]
    L --> M[Auto-retry on Reconnect]
    
    B -->|Timeout Error| N[Display Timeout Message]
    N --> O[Suggest: Simplify Input]
    O --> P[Show Retry Button]
    
    F --> Q[User Corrects Input]
    I --> R[User Retries]
    P --> R
    
    Q --> S[Clear Error State]
    R --> T[Retry Operation]
    
    S --> U[Re-validate]
    T --> V{Success?}
    V -->|Yes| W[Continue Flow]
    V -->|No| A
    
    style A fill:#ef5350
    style W fill:#4caf50
```

---

## 11. Performance Optimization

### Debouncing & Caching

```mermaid
graph TD
    A[User Types] --> B[Start Debounce Timer]
    B --> C{Timer Active?}
    C -->|Yes| D[Reset Timer]
    C -->|No| E[Start New Timer]
    
    D --> F[Wait 500ms]
    E --> F
    
    F --> G{Still Typing?}
    G -->|Yes| D
    G -->|No| H[Execute Analysis]
    
    H --> I{Result Cached?}
    I -->|Yes| J[Return Cached Result]
    I -->|No| K[Call AI API]
    
    K --> L[Store in Cache]
    L --> M[Return Result]
    J --> M
    
    M --> N[Update UI]
    
    style H fill:#fff3e0
    style J fill:#4caf50
    style K fill:#ff9800
```

---

## 12. Accessibility Flow

### Keyboard Navigation

```mermaid
graph TD
    A[User Presses Tab] --> B[Move to Next Field]
    B --> C[Add Focus Indicator]
    C --> D{Field Type}
    
    D -->|Input| E[Allow Text Entry]
    D -->|Dropdown| F[Press Space to Open]
    D -->|Checkbox| G[Press Space to Toggle]
    D -->|Button| H[Press Enter to Click]
    
    E --> I[Continue Tabbing]
    F --> I
    G --> I
    H --> I
    
    I --> J{Shift+Tab Pressed?}
    J -->|Yes| K[Move to Previous Field]
    J -->|No| B
    
    K --> C
    
    style C fill:#e3f2fd
```

---

## 13. Mobile Responsive Flow

### Layout Adaptation

```mermaid
graph TD
    A[Page Loads] --> B{Screen Width}
    
    B -->|< 768px Mobile| C[Single Column Layout]
    C --> C1[Stack Progress Bar]
    C --> C2[Stack Content]
    C --> C3[Stack AI Panel Below]
    
    B -->|768-1024px Tablet| D[Two Column Layout]
    D --> D1[Progress Bar Full Width]
    D --> D2[Content 60% + AI 40%]
    
    B -->|> 1024px Desktop| E[Three Column Layout]
    E --> E1[Left Progress 240px]
    E --> E2[Center Content Flex]
    E --> E3[Right AI 320px]
    
    C1 --> F[Render Responsive UI]
    C2 --> F
    C3 --> F
    D1 --> F
    D2 --> F
    E1 --> F
    E2 --> F
    E3 --> F
    
    F --> G{Orientation Change?}
    G -->|Yes| B
    G -->|No| H[Maintain Layout]
    
    style B fill:#fff3e0
    style F fill:#e3f2fd
```

---

## 14. Analytics & Tracking

### Event Tracking Flow

```mermaid
graph TD
    A[User Action] --> B{Event Type}
    
    B -->|Page View| C[Track: Step Viewed]
    B -->|Field Change| D[Track: Field Edited]
    B -->|Button Click| E[Track: Button Clicked]
    B -->|Error Shown| F[Track: Error Encountered]
    B -->|AI Suggestion| G[Track: Suggestion Displayed]
    B -->|Deck Generated| H[Track: Deck Created]
    
    C --> I[Send to Analytics]
    D --> I
    E --> I
    F --> I
    G --> I
    H --> I
    
    I --> J{Include Metadata}
    J --> K[Add Timestamp]
    J --> L[Add User Session]
    J --> M[Add Industry Type]
    J --> N[Add Step Number]
    
    K --> O[Queue Event]
    L --> O
    M --> O
    N --> O
    
    O --> P{Batch Ready?}
    P -->|Yes| Q[Send Batch]
    P -->|No| R[Wait for More Events]
    
    Q --> S[Analytics Dashboard]
    
    style I fill:#fff3e0
    style S fill:#e3f2fd
```

---

**Status:** Complete workflow and logic diagrams  
**Last Updated:** January 27, 2026  
**Related Docs:** `/docs/pitch-deck/wireframes.md` (UI layouts)  
**Next Step:** Implement state management and component logic
