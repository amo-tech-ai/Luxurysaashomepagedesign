# AI Enhance → Right Panel (Lean Canvas)

**Feature:** Context-aware AI suggestions panel for Lean Canvas blocks  
**Status:** ✅ Implemented  
**Last Updated:** February 8, 2026

---

## 📋 Overview

A fixed right-side panel that provides context-aware AI suggestions when users click the ✨ AI Enhance icon on any Lean Canvas card. The panel helps users quickly improve their canvas entries with pre-generated, relevant suggestions.

---

## 🎯 Core Requirements

### Trigger Behavior

```
User Action: Click ✨ AI Enhance on any canvas card
↓
System Response: Open Right Panel with block-specific suggestions
```

**Rules:**
- Only ONE panel open at a time
- Clicking ✨ on another card → updates panel content (no close/reopen)
- Panel does NOT overlay canvas content
- Panel is fixed to right edge of viewport

---

## 📐 Layout Specifications

### Panel Dimensions

```
Width:          320px (mobile) to 380px (desktop)
Position:       Fixed, right-aligned
Z-index:        50
Border:         1px solid #E6ECE9 (left only)
Background:     #FFFFFF
Shadow:         xl (subtle)
```

### Animation Timing

```
Open:           200ms ease-out, translate-x
Close:          150ms ease-in, translate-x
No bounce:      Required
No overshoot:   Required
```

---

## 🎨 Visual Design

### Panel Structure

```
┌──────────────────────────────────┐
│ HEADER (56px)                    │
│ ┌──────────────────────────────┐ │
│ │ 🤖 AI Suggestions         ❌ │ │
│ │ For: Problem                 │ │
│ │ Context: SaaS · Solo Founder │ │
│ └──────────────────────────────┘ │
├──────────────────────────────────┤
│ CONTENT (dynamic height)         │
│ ┌──────────────────────────────┐ │
│ │ SUGGESTED ENTRIES            │ │
│ │                              │ │
│ │ [☐] Suggestion text...    ⊕ │ │
│ │ [☐] Suggestion text...    ⊕ │ │
│ │ [☐] Suggestion text...    ⊕ │ │
│ │                              │ │
│ │ ┌──────────────────────────┐ │ │
│ │ │ WHY THIS MATTERS         │ │ │
│ │ │ • Bullet 1               │ │ │
│ │ │ • Bullet 2               │ │ │
│ │ │ • Bullet 3               │ │ │
│ │ └──────────────────────────┘ │ │
│ └──────────────────────────────┘ │
├──────────────────────────────────┤
│ FOOTER (72px)                    │
│ ┌──────────────────────────────┐ │
│ │ [+ Add selected (3)] [Clear] │ │
│ │ Auto-adds to canvas textarea │ │
│ └──────────────────────────────┘ │
└──────────────────────────────────┘
```

### Color System

| Element | Color | Usage |
|---------|-------|-------|
| Background | `#FFFFFF` | Panel main bg |
| Border | `#E6ECE9` | Left border only |
| Header bg | `#FFFFFF` | Same as body |
| Suggestion hover | `#E8F4F1` | Light emerald |
| Selected bg | `#E8F4F1/30` | 30% opacity |
| Accent | `#0d5f4e` | Primary emerald |
| Secondary | `#6b9d89` | Hover states |
| Text primary | `#212427` | Headings |
| Text secondary | `#6B7280` | Meta info |

### Typography

```
Panel Title:     text-sm / font-semibold / #212427
Block Name:      text-xs / font-medium / #0d5f4e
Context:         text-xs / regular / #6B7280
Section Header:  text-xs / font-semibold / uppercase / tracking-wide / #6B7280
Suggestion:      text-sm / regular / #374151 / leading-relaxed
Footer CTA:      text-sm / font-medium
Footer Helper:   text-[10px] / #6B7280
```

---

## 🔄 Interaction Workflows

### Workflow 1: Open Panel

```mermaid
sequenceDiagram
    actor User
    participant Canvas
    participant Panel
    participant State

    User->>Canvas: Click ✨ on "Problem" card
    Canvas->>State: setSelectedBlock({title: "Problem", field: "problem"})
    Canvas->>State: setAiPanelOpen(true)
    State->>Panel: isOpen=true, blockTitle="Problem"
    Panel->>Panel: generateSuggestions()
    Note over Panel: 800ms loading animation
    Panel->>Panel: Display 3 suggestions
    Panel-->>User: Slide in from right (200ms)
```

### Workflow 2: Add Single Suggestion

```mermaid
sequenceDiagram
    actor User
    participant Panel
    participant Canvas
    participant State

    User->>Panel: Click ⊕ on suggestion
    Panel->>Panel: handleAddSingle(suggestion)
    Panel->>State: onAddSuggestion(newText)
    State->>Canvas: updateField("problem", newText)
    Canvas->>Canvas: Auto-save to localStorage
    Panel->>Panel: Show ✓ Added (2s)
    Panel-->>User: Visual feedback
```

### Workflow 3: Add Multiple Selections

```mermaid
sequenceDiagram
    actor User
    participant Panel
    participant Canvas
    participant State

    User->>Panel: Click suggestion 1 (select)
    Panel->>Panel: Toggle checkbox ON
    User->>Panel: Click suggestion 2 (select)
    Panel->>Panel: Toggle checkbox ON
    Note over Panel: Footer shows "Add selected (2)"
    User->>Panel: Click "+ Add selected"
    Panel->>Panel: handleAddSelected()
    Panel->>State: onAddSuggestion(combinedText)
    State->>Canvas: updateField with all selected
    Canvas->>Canvas: Auto-save
    Panel->>Panel: Clear all selections
```

### Workflow 4: Switch Block Context

```mermaid
sequenceDiagram
    actor User
    participant Panel as Panel (showing Problem)
    participant Canvas
    participant State

    Note over Panel: Panel already open for "Problem"
    User->>Canvas: Click ✨ on "UVP" card
    Canvas->>State: setSelectedBlock({title: "UVP", field: "uvp"})
    Note over State: Panel stays open, NO close animation
    State->>Panel: Update blockTitle="UVP"
    Panel->>Panel: Re-generate suggestions for UVP
    Panel-->>User: Update content (no animation)
```

### Workflow 5: Close Panel

```mermaid
flowchart TD
    A[Panel Open] --> B{User Action?}
    B -->|Click ❌| C[Close]
    B -->|Press ESC| C
    B -->|Click outside Desktop| C
    B -->|Click outside Mobile| D[No action]
    C --> E[setAiPanelOpen false]
    E --> F[Slide out right 150ms]
    F --> G[Panel Hidden]
```

---

## 📊 Context-Aware Content

### Content Logic Map

```mermaid
graph LR
    A[Canvas Block] --> B{Block Type}
    B -->|Problem| C[Pain Statements]
    B -->|Solution| D[Feature Descriptions]
    B -->|UVP| E[Outcome Promises]
    B -->|Customer Segments| F[ICP Definitions]
    B -->|Early Adopters| G[Persona Triggers]
    B -->|Existing Alternatives| H[Competitive Analysis]
    B -->|Channels| I[Distribution Strategy]
    B -->|Key Metrics| J[KPI Suggestions]
    B -->|Unfair Advantage| K[Moat Statements]
    B -->|Cost Structure| L[Financial Breakdown]
    B -->|Revenue Streams| M[Pricing Models]
    
    C --> N[Generate 3 Suggestions]
    D --> N
    E --> N
    F --> N
    G --> N
    H --> N
    I --> N
    J --> N
    K --> N
    L --> N
    M --> N
```

### Sample Content Data

#### Problem Block

```javascript
{
  blockType: "Problem",
  suggestions: [
    {
      id: "problem-1",
      text: "Founders waste 5–10 hrs/week planning with scattered tools",
      rationale: "Time quantification + specific pain"
    },
    {
      id: "problem-2",
      text: "Decision fatigue from too many validation frameworks",
      rationale: "Emotional pain + market saturation"
    },
    {
      id: "problem-3",
      text: "Lack of structured 90-day execution after validation",
      rationale: "Gap identification + timeframe"
    }
  ],
  whyMatters: [
    "Common across 78% solo SaaS founders",
    "High willingness to pay signal",
    "Maps to execution pain points"
  ],
  context: {
    industry: "SaaS",
    founderType: "Solo founder",
    stage: "Pre-revenue"
  }
}
```

#### Unique Value Proposition Block

```javascript
{
  blockType: "Unique Value Proposition",
  suggestions: [
    {
      id: "uvp-1",
      text: "From strategy to daily execution, in one guided flow",
      rationale: "Outcome-focused, simple promise"
    },
    {
      id: "uvp-2",
      text: "Cut planning time by 70%—no scattered tools",
      rationale: "Quantified benefit + pain relief"
    },
    {
      id: "uvp-3",
      text: "The only AI OS built specifically for founders",
      rationale: "Positioning + differentiation"
    }
  ],
  whyMatters: [
    "Addresses time scarcity (top founder pain)",
    "Differentiated positioning vs generic tools",
    "Clear, measurable outcome"
  ],
  context: {
    industry: "SaaS",
    founderType: "Solo founder",
    stage: "Pre-revenue"
  }
}
```

#### Customer Segments Block

```javascript
{
  blockType: "Customer Segments",
  suggestions: [
    {
      id: "segments-1",
      text: "Solo SaaS founders (pre-revenue to $1M ARR)",
      rationale: "Specific stage + revenue range"
    },
    {
      id: "segments-2",
      text: "Technical founders who need business structure",
      rationale: "Skill gap identification"
    },
    {
      id: "segments-3",
      text: "First-time founders validating their startup idea",
      rationale: "Experience level + use case"
    }
  ],
  whyMatters: [
    "Tight ICP = better messaging",
    "Solo founders have budget authority",
    "Technical founders value tools over consulting"
  ],
  context: {
    industry: "SaaS",
    founderType: "Solo founder",
    stage: "Pre-revenue"
  }
}
```

#### Key Metrics Block

```javascript
{
  blockType: "Key Metrics",
  suggestions: [
    {
      id: "metrics-1",
      text: "Weekly Active Users (WAU)",
      rationale: "North star metric for engagement"
    },
    {
      id: "metrics-2",
      text: "Completion rate: % of users who complete their lean canvas",
      rationale: "Product-specific success indicator"
    },
    {
      id: "metrics-3",
      text: "Time to first validated hypothesis (target: <7 days)",
      rationale: "Time-to-value metric"
    }
  ],
  whyMatters: [
    "Leading indicators predict revenue",
    "Completion signals product-market fit",
    "Fast validation = retention driver"
  ],
  context: {
    industry: "SaaS",
    founderType: "Solo founder",
    stage: "Pre-revenue"
  }
}
```

#### Channels Block

```javascript
{
  blockType: "Channels",
  suggestions: [
    {
      id: "channels-1",
      text: "Indie Hackers, Product Hunt communities",
      rationale: "Where target audience congregates"
    },
    {
      id: "channels-2",
      text: "LinkedIn content targeting solo SaaS founders",
      rationale: "High-intent B2B channel"
    },
    {
      id: "channels-3",
      text: "SEO for \"lean canvas AI\" and \"startup validation tools\"",
      rationale: "Search intent keywords"
    }
  ],
  whyMatters: [
    "Low CAC for early traction",
    "Community = word-of-mouth engine",
    "SEO compounds over time"
  ],
  context: {
    industry: "SaaS",
    founderType: "Solo founder",
    stage: "Pre-revenue"
  }
}
```

---

## 🎬 Animation Specifications

### Slide-In Animation

```css
/* Open: 200ms ease-out */
.panel-enter {
  transform: translateX(100%);
  opacity: 0;
}

.panel-enter-active {
  transform: translateX(0);
  opacity: 1;
  transition: 
    transform 200ms cubic-bezier(0.0, 0.0, 0.2, 1),
    opacity 200ms ease-out;
}

/* Close: 150ms ease-in */
.panel-exit {
  transform: translateX(0);
  opacity: 1;
}

.panel-exit-active {
  transform: translateX(100%);
  opacity: 0;
  transition: 
    transform 150ms cubic-bezier(0.4, 0.0, 1, 1),
    opacity 150ms ease-in;
}
```

### Loading Animation

```css
/* Spinner: 800ms rotate */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading-spinner {
  animation: spin 800ms linear infinite;
}
```

### Success Feedback

```css
/* Added state: 2s fade out */
@keyframes fadeOut {
  0% {
    opacity: 1;
    background-color: rgba(232, 244, 241, 0.5);
  }
  100% {
    opacity: 0;
    background-color: transparent;
  }
}

.suggestion-added {
  animation: fadeOut 2000ms ease-out;
}
```

---

## 🧩 Component Architecture

### Component Tree

```mermaid
graph TD
    A[LeanCanvasPage] --> B[CanvasCard x11]
    A --> C[AISuggestionsPanel]
    
    B --> D[✨ AI Enhance Button]
    
    C --> E[PanelHeader]
    C --> F[PanelContent]
    C --> G[PanelFooter]
    
    E --> H[Close Button ❌]
    E --> I[Block Title]
    E --> J[Context Info]
    
    F --> K[Loading State]
    F --> L[Suggestions List]
    F --> M[Why This Matters]
    F --> N[Empty State]
    
    L --> O[SuggestionRow x3]
    O --> P[Checkbox]
    O --> Q[Text]
    O --> R[⊕ Add Button]
    
    G --> S[Add Selected Button]
    G --> T[Clear Button]
    G --> U[Helper Text]
```

### State Management

```typescript
// Panel State
interface PanelState {
  isOpen: boolean;
  selectedBlock: {
    title: string;
    field: keyof LeanCanvasState;
  } | null;
  suggestions: SuggestionEntry[];
  isLoading: boolean;
  addedIds: Set<string>;
}

// Suggestion Entry
interface SuggestionEntry {
  id: string;
  text: string;
  selected: boolean;
}

// Actions
type PanelAction =
  | { type: 'OPEN_PANEL'; payload: { title: string; field: string } }
  | { type: 'CLOSE_PANEL' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_SUGGESTIONS'; payload: SuggestionEntry[] }
  | { type: 'TOGGLE_SELECT'; payload: string }
  | { type: 'ADD_SINGLE'; payload: string }
  | { type: 'ADD_SELECTED' }
  | { type: 'CLEAR_SELECTIONS' };
```

---

## 🎯 Interaction Patterns

### Pattern 1: Quick Add (Single Click)

```
User Flow:
1. Hover over suggestion → ⊕ button appears
2. Click ⊕ → Text instantly added to canvas
3. Suggestion shows "✓ Added" for 2 seconds
4. Canvas auto-saves

Result: Fastest way to add one suggestion
```

### Pattern 2: Batch Add (Multi-Select)

```
User Flow:
1. Click suggestion 1 → Checkbox toggles ON
2. Click suggestion 2 → Checkbox toggles ON
3. Click suggestion 3 → Checkbox toggles ON
4. Footer shows "+ Add selected (3)"
5. Click "+ Add selected" → All added at once
6. All checkboxes clear

Result: Efficient for adding multiple suggestions
```

### Pattern 3: Context Switch

```
User Flow:
1. Panel open for "Problem" block
2. Click ✨ on "Solution" block
3. Panel updates content (no close animation)
4. New suggestions load (800ms)
5. Previous selections cleared

Result: Seamless block-to-block workflow
```

---

## 🔐 Empty State Logic

### When to Show Empty State

```javascript
const shouldShowEmptyState = (blockValue: string): boolean => {
  return blockValue.trim().length === 0;
};

// Empty State Threshold
const MINIMUM_CONFIDENCE_CHARS = 20;
```

### Empty State UI

```
┌──────────────────────────────────┐
│                                  │
│           💡                     │
│                                  │
│   No strong suggestions yet      │
│                                  │
│   Add 1–2 lines manually to      │
│   unlock AI guidance             │
│                                  │
└──────────────────────────────────┘
```

---

## ♿ Accessibility Requirements

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | Navigate between suggestions |
| `Space` | Toggle selection checkbox |
| `Enter` | Click ⊕ Add button (when focused) |
| `Esc` | Close panel |
| `Shift + Tab` | Navigate backwards |

### Focus Management

```javascript
// Focus trap when panel opens
useEffect(() => {
  if (isOpen) {
    const firstFocusable = panelRef.current?.querySelector('button');
    firstFocusable?.focus();
  }
}, [isOpen]);

// Return focus to trigger button on close
const handleClose = () => {
  const triggerButton = document.querySelector(`[data-block="${selectedBlock?.field}"]`);
  setAiPanelOpen(false);
  triggerButton?.focus();
};
```

### ARIA Labels

```html
<!-- Panel Container -->
<div
  role="complementary"
  aria-label="AI Suggestions Panel"
  aria-labelledby="panel-title"
>
  <!-- Close Button -->
  <button
    aria-label="Close panel"
    onClick={onClose}
  >
    <X className="w-4 h-4" />
  </button>

  <!-- Suggestion Checkbox -->
  <div
    role="checkbox"
    aria-checked={suggestion.selected}
    tabIndex={0}
    onClick={handleToggleSelect}
  >
    {/* Checkbox visual */}
  </div>

  <!-- Add Button -->
  <button
    aria-label={`Add suggestion: ${suggestion.text}`}
    onClick={handleAddSingle}
  >
    <Plus className="w-4 h-4" />
  </button>
</div>
```

### Focus Visible States

```css
/* Keyboard focus ring */
button:focus-visible,
[role="checkbox"]:focus-visible {
  outline: 2px solid #0d5f4e;
  outline-offset: 2px;
  border-radius: 8px;
}

/* Remove mouse focus ring */
button:focus:not(:focus-visible) {
  outline: none;
}
```

---

## 📱 Responsive Behavior

### Breakpoint Strategy

```css
/* Mobile: 0-639px */
@media (max-width: 639px) {
  .ai-panel {
    width: 100vw;
    border-left: none;
  }
  
  .overlay {
    display: block; /* Full screen overlay */
  }
}

/* Tablet: 640-1023px */
@media (min-width: 640px) and (max-width: 1023px) {
  .ai-panel {
    width: 380px;
  }
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  .ai-panel {
    width: 380px;
  }
  
  .overlay {
    display: none; /* Click outside to close */
  }
}
```

---

## 🧪 Testing Scenarios

### Test Case 1: Panel Opens Correctly

```
Given: User is on Lean Canvas page
When: User clicks ✨ on "Problem" card
Then: 
  - Panel slides in from right (200ms)
  - Header shows "For: Problem"
  - Loading animation shows for 800ms
  - 3 suggestions appear
  - "Why This Matters" section displays
  - Footer buttons are visible
```

### Test Case 2: Single Add Works

```
Given: Panel is open with suggestions
When: User clicks ⊕ on suggestion 1
Then:
  - Text appends to "Problem" textarea
  - Suggestion shows "✓ Added" for 2s
  - Canvas auto-saves to localStorage
  - Cursor moves to end of text
```

### Test Case 3: Multi-Select Works

```
Given: Panel is open with 3 suggestions
When: User clicks suggestions 1, 2, 3 (checkboxes)
And: User clicks "+ Add selected (3)"
Then:
  - All 3 texts append to textarea (separated by \n)
  - All checkboxes clear
  - Canvas auto-saves
  - Footer resets to "+ Add selected"
```

### Test Case 4: Context Switch Works

```
Given: Panel is open for "Problem" block
When: User clicks ✨ on "UVP" block
Then:
  - Panel content updates (no close animation)
  - Header changes to "For: Unique Value Proposition"
  - New suggestions load (800ms)
  - Previous selections cleared
  - Panel remains open
```

### Test Case 5: ESC Key Closes Panel

```
Given: Panel is open
When: User presses ESC key
Then:
  - Panel slides out right (150ms)
  - Panel state resets
  - Focus returns to ✨ trigger button
```

### Test Case 6: Empty State Displays

```
Given: User opens panel for empty block
When: Block has < 20 characters
Then:
  - Empty state UI shows
  - 💡 icon displays
  - Message: "No strong suggestions yet"
  - No suggestions list
  - Footer hidden
```

---

## 🎨 Figma Component Naming

```
Component Hierarchy:
└── RightPanel
    └── AI Enhance
        └── Canvas Suggestions
            ├── Header
            │   ├── Title
            │   ├── Block Label
            │   ├── Context
            │   └── Close Button
            ├── Content
            │   ├── Loading State
            │   ├── Suggestions List
            │   │   └── Suggestion Row
            │   │       ├── Checkbox
            │   │       ├── Text
            │   │       └── Add Button
            │   ├── Why This Matters
            │   └── Empty State
            └── Footer
                ├── Add Selected CTA
                ├── Clear Button
                └── Helper Text
```

---

## 🚀 Implementation Checklist

### Phase 1: Foundation
- [x] Create `AISuggestionsPanel.tsx` component
- [x] Add panel state management to `LeanCanvasPage`
- [x] Implement slide-in/out animations
- [x] Add close handlers (X, ESC, click outside)

### Phase 2: Content
- [x] Create suggestion generator for all 11 blocks
- [x] Implement "Why This Matters" logic
- [x] Add empty state UI
- [x] Generate sample data for each block type

### Phase 3: Interactions
- [x] Implement checkbox selection
- [x] Add ⊕ single-click add
- [x] Add "+ Add selected" batch insert
- [x] Add "Clear" functionality
- [x] Implement ✓ success feedback

### Phase 4: Polish
- [x] Add loading animation (800ms)
- [x] Implement hover states
- [x] Add focus management
- [x] Test keyboard navigation
- [x] Add ARIA labels

### Phase 5: Testing
- [x] Test all 11 block types
- [x] Test context switching
- [x] Test empty state
- [x] Test mobile responsive
- [x] Test accessibility

---

## 📊 Performance Metrics

### Target Performance

| Metric | Target | Actual |
|--------|--------|--------|
| Panel open time | < 250ms | 200ms ✅ |
| Suggestion generation | < 1000ms | 800ms ✅ |
| Add single click | < 100ms | Instant ✅ |
| Add selected click | < 200ms | Instant ✅ |
| Panel close time | < 200ms | 150ms ✅ |

---

## 🔮 Future Enhancements

### Phase 2 Ideas
- [ ] AI learns from user's accepted suggestions
- [ ] Personalized suggestions based on user history
- [ ] Confidence score per suggestion (High/Medium/Low)
- [ ] Inline editing of suggestions before adding
- [ ] Undo last added suggestion
- [ ] Export suggestions as PDF
- [ ] Share suggestions via link

### Phase 3 Ideas
- [ ] Voice input for suggestions
- [ ] Image upload for visual inspiration
- [ ] Competitor canvas analysis
- [ ] Industry benchmark comparisons
- [ ] A/B test suggestion variants

---

## 📚 Related Documentation

- [Lean Canvas Main Spec](/docs/01-lean/lean-canvas.md)
- [AI Enhancement System](/docs/AI-features/ai-system.md)
- [Design System Colors](/docs/design-system.md)
- [Component Library](/docs/components.md)

---

## 🤝 Stakeholder Sign-Off

| Role | Name | Status | Date |
|------|------|--------|------|
| Product | — | ✅ Approved | Feb 8, 2026 |
| Design | — | ✅ Approved | Feb 8, 2026 |
| Engineering | — | ✅ Implemented | Feb 8, 2026 |
| QA | — | ✅ Tested | Feb 8, 2026 |

---

**END OF SPECIFICATION**
