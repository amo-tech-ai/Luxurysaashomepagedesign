# AI Suggestions Panel - Design & Implementation Specification

**Project:** StartupAI Pitch Deck Generator  
**Component:** AI Suggestions Panel (Right Column)  
**Phase:** 13 - Industry-Specific Wizard  
**Status:** Production Ready  
**Last Updated:** January 27, 2026

---

## Overview

The AI Suggestions Panel is an intelligent right-side panel that provides real-time, actionable feedback powered by specialized AI agents. Each agent analyzes specific aspects of the pitch deck and offers concrete improvements.

---

## Goals

1. **Actionable Feedback:** Turn AI suggestions into clear, clickable actions
2. **Visible AI Agents:** Show specialized agents working on different aspects
3. **Real-time Validation:** Live status updates as user fills the form
4. **Sample Content:** Preview what improved content looks like
5. **Investor Readiness:** Focus on what investors care about
6. **Explicit Control:** Users explicitly add suggestions with "+" button (not automatic)
7. **Visual Traceability:** Show which fields were enhanced by AI

---

## Table of Contents

1. [Global Layout](#global-layout)
2. [AI Agent Architecture](#ai-agent-architecture)
3. [Component Structure](#component-structure)
4. [Section Specifications](#section-specifications)
5. [Interaction Design](#interaction-design)
6. [State Management](#state-management)
7. [Implementation Guide](#implementation-guide)
8. [Testing & Validation](#testing--validation)

---

## Global Layout

### Panel Specifications

```
┌─────────────────────────────────────┐
│  AI Suggestions Panel               │
│  Width: 360px (fixed)               │
│  Background: #F9FAFB (light gray)   │
│  Padding: 24px                      │
│  Position: Fixed (sticky on scroll) │
└─────────────────────────────────────┘
```

### Top Section - Signal Strength

```
┌─────────────────────────────────────┐
│   ┌────────────┐                    │
│   │     88%    │  Signal Strength   │
│   │   ●●●●●    │                    │
│   └────────────┘                    │
│   Investor readiness score          │
└─────────────────────────────────────┘
```

**Elements:**
- Circular progress indicator (0-100%)
- Dynamic color based on score:
  - 0-49%: Red (#EF4444)
  - 50-74%: Orange (#F59E0B)
  - 75-100%: Green (#10B981)
- Label: "Signal Strength"
- Subtext: "Investor readiness score"

---

## AI Agent Architecture

### Agent Overview

The panel features **6 specialized AI agents**, each responsible for analyzing and improving a specific aspect of the pitch:

| Agent | Focus Area | Triggers |
|-------|------------|----------|
| **ICP Agent** | Target Customer | Buyer clarity, company size, revenue owner |
| **Revenue Agent** | Problem Framing | Revenue impact, lost pipeline, benchmarks |
| **AI Strategy Agent** | Solution | Outcomes vs features, AI differentiation |
| **Integration Agent** | Workflow & APIs | Platform depth, data flow, tech stack |
| **Metrics Agent** | Proof & Traction | Quantitative metrics, benchmarks, impact |
| **Investor Lens Agent** | Overall Quality | Deck strength, readiness, gaps |

---

### Agent Responsibilities

#### 1. ICP Agent (Ideal Customer Profile)

**Analyzes:**
- Target customer description
- Buyer vs. user separation
- Company size specificity
- Revenue ownership clarity

**Suggests:**
- Clearer buyer/user distinction
- Specific company size ranges
- Revenue-owner framing

**Sample Output:**
```
"Primary buyer: RevOps leaders at B2B SaaS companies (50–500 employees)"
```

---

#### 2. Revenue Agent

**Analyzes:**
- Problem statement
- Revenue impact clarity
- Lost opportunity quantification
- Competitive positioning

**Suggests:**
- Investor-friendly problem framing
- Pipeline/revenue loss quantification
- Benchmark comparisons

**Sample Output:**
```
"Manual social workflows reduce pipeline velocity and attribution accuracy"
```

---

#### 3. AI Strategy Agent

**Analyzes:**
- AI solution description
- Feature vs. outcome language
- AI differentiation vs. rules-based
- AI loop simplicity

**Suggests:**
- Outcome-focused language
- AI vs. traditional tool comparison
- Simplified AI workflow

**Sample Output:**
```
"AI predicts engagement and automates posting based on CRM signals"
```

---

#### 4. Integration Agent

**Analyzes:**
- Integration depth
- Platform specificity
- Data flow clarity
- Tech stack completeness

**Suggests:**
- Common platform names (HubSpot, Salesforce)
- Social API integrations
- Data flow visualization

**Sample Output:**
```
"HubSpot → AI Engine → LinkedIn / Instagram → CRM Attribution"
```

---

#### 5. Metrics Agent

**Analyzes:**
- Metric presence
- Quantitative vs. qualitative
- Stage-appropriate metrics
- Benchmark context

**Suggests:**
- Seed-stage SaaS metrics
- Engagement benchmarks
- Pilot impact estimates

**Sample Output:**
```
"+28% engagement rate, 10 hrs/week saved per team"
```

---

#### 6. Investor Lens Agent

**Analyzes:**
- Overall pitch strength
- Completeness
- Investor objections
- Competitive positioning

**Suggests:**
- Revenue framing improvements
- Deck-to-deck comparison
- Investor-ready rewrites
- Simulated objections

**Sample Output:**
```
"Deck strength: 88/100. Strong problem-solution fit, add competitive moat."
```

---

## Component Structure

### Section Template

Each agent section follows this repeatable structure:

```tsx
<AgentSection>
  <AgentHeader>
    <AgentIcon /> {/* Unique icon per agent */}
    <AgentName>ICP Agent</AgentName>
  </AgentHeader>
  
  <Insight>
    "Buyer and user roles are not clearly separated."
  </Insight>
  
  <ActionButtons>
    <ActionButton>Clarify buyer vs user</ActionButton>
    <ActionButton>Suggest ICP by company size</ActionButton>
    <ActionButton>Refine to revenue owner</ActionButton>
  </ActionButtons>
  
  <SampleOutput>
    "Primary buyer: RevOps leaders at B2B SaaS companies..."
  </SampleOutput>
  
  <RealWorldExample>
    "Used by marketing managers, purchased by Heads of Growth."
  </RealWorldExample>
  
  <StatusIndicator status="complete" />
</AgentSection>
```

---

## Section Specifications

### Section 1 — ICP Agent (Target Customer)

**Visual Hierarchy:**

```
┌─────────────────────────────────────┐
│ 👥 ICP Agent                        │
├─────────────────────────────────────┤
│ 💡 Insight                          │
│ "Buyer and user roles are not      │
│ clearly separated."                 │
├─────────────────────────────────────┤
│ ✨ Action Options                   │
│ [Clarify buyer vs user]            │
│ [Suggest ICP by company size]      │
│ [Refine to revenue owner]          │
├─────────────────────────────────────┤
│ 📝 Sample Output                    │
│ "Primary buyer: RevOps leaders at  │
│ B2B SaaS companies (50–500 empl.)" │
├─────────────────────────────────────┤
│ 🌍 Real-World Example               │
│ "Used by marketing managers,       │
│ purchased by Heads of Growth."     │
├─────────────────────────────────────┤
│ Status: ✓ Target defined           │
└─────────────────────────────────────┘
```

**When to Show:**
- Always visible when on industry focus step
- Highlighted when target customer field is active

**Trigger Conditions:**
- User typing in target customer field
- Customer description < 50 characters
- Missing buyer/user distinction
- No company size mentioned

**Action Outcomes:**

1. **Clarify buyer vs user**
   - Splits single field into buyer + user
   - Suggests: "Buyer: VP Sales | User: SDRs"

2. **Suggest ICP by company size**
   - Adds company size range
   - Suggests: "50–500 employees" or "$5M–$50M ARR"

3. **Refine to revenue owner**
   - Identifies revenue decision-maker
   - Suggests: "RevOps leaders" or "VP Sales"

---

### Section 2 — Revenue Agent (Problem Framing)

**Visual Hierarchy:**

```
┌─────────────────────────────────────┐
│ 💰 Revenue Agent                    │
├─────────────────────────────────────┤
│ 💡 Insight                          │
│ "Problem is not tied to revenue    │
│ impact."                            │
├─────────────────────────────────────┤
│ ✨ Action Options                   │
│ [Rewrite problem for investors]    │
│ [Tie problem to lost pipeline]     │
│ [Compare vs existing tools]        │
├─────────────────────────────────────┤
│ 📝 Sample Output                    │
│ "Manual social workflows reduce    │
│ pipeline velocity and attribution  │
│ accuracy."                          │
├─────────────────────────────────────┤
│ 🌍 Real-World Example               │
│ "Teams lose leads because follow-  │
│ ups are inconsistent across chan." │
├─────────────────────────────────────┤
│ Status: ✓ Problem validated        │
└─────────────────────────────────────┘
```

**When to Show:**
- Always visible on industry focus step
- Highlighted when problem field is active

**Trigger Conditions:**
- Problem doesn't mention: "revenue," "pipeline," "cost," "loss"
- Problem is < 75 characters
- Missing quantification

**Action Outcomes:**

1. **Rewrite problem for investors**
   - Adds revenue/pipeline language
   - Example: "Teams miss quota due to..." → "Sales teams lose $500K/year due to..."

2. **Tie problem to lost pipeline**
   - Quantifies lost opportunity
   - Example: "Adds: 'costing $2M annually in lost deals'"

3. **Compare vs existing tools**
   - Positions against status quo
   - Example: "Manual tools require 15 hours/week vs. AI's 2 hours"

---

### Section 3 — AI Strategy Agent (Solution)

**Visual Hierarchy:**

```
┌─────────────────────────────────────┐
│ 🤖 AI Strategy Agent                │
├─────────────────────────────────────┤
│ 💡 Insight                          │
│ "AI value is described as features,│
│ not outcomes."                      │
├─────────────────────────────────────┤
│ ✨ Action Options                   │
│ [Convert features to outcomes]     │
│ [Highlight AI vs rules-based]      │
│ [Simplify to one AI loop]          │
├─────────────────────────────────────┤
│ 📝 Sample Output                    │
│ "AI predicts engagement and        │
│ automates posting based on CRM     │
│ signals."                           │
├─────────────────────────────────────┤
│ 🌍 Real-World Example               │
│ "Instead of scheduling posts       │
│ manually, AI adapts content daily."│
├─────────────────────────────────────┤
│ Status: ✓ AI solution framed       │
└─────────────────────────────────────┘
```

**When to Show:**
- Always visible on industry focus step
- Highlighted when solution field is active

**Trigger Conditions:**
- Solution uses: "AI-powered," "machine learning" without outcomes
- No mention of: "automates," "predicts," "reduces," "increases"
- Solution is vague or generic

**Action Outcomes:**

1. **Convert features to outcomes**
   - Replaces: "AI analyzes data" → "AI increases conversion by 30%"

2. **Highlight AI vs rules-based**
   - Adds: "Unlike static rules, AI adapts to customer behavior"

3. **Simplify to one AI loop**
   - Simplifies: "AI ingests data → Analyzes patterns → Suggests actions"

---

### Section 4 — Integration Agent (Workflow)

**Visual Hierarchy:**

```
┌─────────────────────────────────────┐
│ 🔗 Integration Agent                │
├─────────────────────────────────────┤
│ 💡 Insight                          │
│ "Integration depth is unclear."    │
├─────────────────────────────────────┤
│ ✨ Action Options                   │
│ [Suggest common CRM platforms]     │
│ [Add social platform APIs]         │
│ [Visualize data flow]              │
├─────────────────────────────────────┤
│ 📝 Sample Output                    │
│ "HubSpot → AI Engine → LinkedIn/   │
│ Instagram → CRM Attribution"       │
├─────────────────────────────────────┤
│ 🌍 Real-World Example               │
│ "Customer updates in CRM trigger   │
│ automated social posts."           │
├─────────────────────────────────────┤
│ Status: ⚠ Integration gap          │
└─────────────────────────────────────┘
```

**When to Show:**
- Always visible on industry focus step
- Highlighted when integrations field is active

**Trigger Conditions:**
- Fewer than 2 integrations selected
- No specific platform names (generic "CRM")
- Missing data flow explanation

**Action Outcomes:**

1. **Suggest common CRM platforms**
   - Suggests: "HubSpot, Salesforce, Pipedrive"

2. **Add social platform APIs**
   - Suggests: "LinkedIn API, Instagram Graph API, X API"

3. **Visualize data flow**
   - Creates: "CRM Data → AI Analysis → Social Posts → Attribution"

---

### Section 5 — Metrics Agent (Proof)

**Visual Hierarchy:**

```
┌─────────────────────────────────────┐
│ 📊 Metrics Agent                    │
├─────────────────────────────────────┤
│ 💡 Insight                          │
│ "Metrics are missing or qualitative│
├─────────────────────────────────────┤
│ ✨ Action Options                   │
│ [Suggest Seed-stage SaaS metrics]  │
│ [Estimate pilot impact]            │
│ [Add engagement benchmarks]        │
├─────────────────────────────────────┤
│ 📝 Sample Output                    │
│ "+28% engagement rate, 10 hrs/week │
│ saved per team"                     │
├─────────────────────────────────────┤
│ 🌍 Real-World Example               │
│ "Teams publish 3× more content     │
│ without hiring."                    │
├─────────────────────────────────────┤
│ Status: ⚠ Add one metric           │
└─────────────────────────────────────┘
```

**When to Show:**
- Always visible on industry focus step
- Highlighted when metrics field is active

**Trigger Conditions:**
- No metrics filled
- Metrics are qualitative ("better engagement")
- Missing benchmark comparison

**Action Outcomes:**

1. **Suggest Seed-stage SaaS metrics**
   - Suggests: "MRR growth %, active users, CAC payback"

2. **Estimate pilot impact**
   - Suggests: "Based on 10 customers: +25% engagement"

3. **Add engagement benchmarks**
   - Suggests: "Industry avg: 2.5% → Your tool: 3.8%"

---

### Global AI Actions (Sticky Footer)

**Visual Hierarchy:**

```
┌─────────────────────────────────────┐
│ 🚀 Global AI Actions                │
├─────────────────────────────────────┤
│ [Tighten revenue framing]          │
│ [Compare to top Seed decks]        │
│ [Generate investor-ready rewrite]  │
│ [Simulate investor objections]     │
└─────────────────────────────────────┘
```

**Position:** Sticky at bottom of panel

**Actions:**

1. **Tighten revenue framing**
   - Rewrites all fields with revenue focus
   - Adds: Lost revenue, cost savings, pipeline impact

2. **Compare to top Seed decks**
   - Shows: "Your deck vs. top 10% Seed decks"
   - Highlights: Gaps and strengths

3. **Generate investor-ready rewrite**
   - AI rewrites entire pitch in investor language
   - User can accept/reject each suggestion

4. **Simulate investor objections**
   - Generates: "Investors might ask: 'What's your moat?'"
   - Helps: Prepare for tough questions

---

## Interaction Design

### "+" Action Button Design

**Button Structure:**

```
[ Icon ]  Suggestion text            [ + ]
```

**Visual States:**

1. **Default State**
   - Icon: Plus (+)
   - Size: 14-16px
   - Color: Gray (#9CA3AF)
   - Position: Right side, vertically centered

2. **Hover State**
   - Icon: Plus (+)
   - Color: Brand green (#0d5f4e)
   - Tooltip: "Add to pitch deck"
   - Cursor: pointer

3. **Loading State**
   - Icon: Spinner (rotating)
   - Color: Gray (#9CA3AF)
   - Disabled: true

4. **Applied State**
   - Icon: Check (✓)
   - Color: Emerald green (#10B981)
   - Text: "Added" (next to checkmark)
   - Background: Emerald tint (#F0FDF4)
   - Border: Emerald (#D1FAE5)

**Interaction Flow:**

```
User hovers over "+"
    ↓
Tooltip appears: "Add to pitch deck"
    ↓
User clicks "+"
    ↓
Button changes to loading state (spinner)
    ↓
AI processes (300-500ms)
    ↓
Suggestion applied to form field
    ↓
Button changes to "✓ Added"
    ↓
Row background subtly highlights (emerald tint)
    ↓
Signal strength updates
    ↓
Field shows "AI-added" badge
```

### Bulk Add Feature

**Button Design:**

```
[ + Circle Icon ]  Add all suggestions (3)
```

**Behavior:**
- Appears at the top of each agent section
- Shows count of unapplied suggestions
- Applies all suggestions sequentially with 200ms delay between each
- Progress indication: "Adding 3 suggestions..."
- Success state: "All added to deck" with checkmark

### Click Flow

```
User Clicks "+" Button
    ↓
Show Loading State (spinner)
    ↓
AI Processes Request (300-500ms)
    ↓
Display Preview Modal
    ↓
User Reviews Suggestion
    ↓
User Clicks "Apply" or "Dismiss"
    ↓
If Apply: Update Form Field
    ↓
Show Success Confirmation (green checkmark)
    ↓
Update Signal Strength
    ↓
Refresh Agent Status
```

---

### State Transitions

**Agent Status States:**

| State | Icon | Color | Meaning |
|-------|------|-------|---------|
| **Complete** | ✓ | Green | All criteria met |
| **Warning** | ⚠ | Orange | Needs improvement |
| **Error** | ✗ | Red | Critical issue |
| **Empty** | ○ | Gray | Not started |

**Visual Feedback:**

```tsx
// Complete State
<StatusIndicator>
  <CheckCircle className="text-green-500" />
  <span className="text-green-700">Target defined</span>
</StatusIndicator>

// Warning State
<StatusIndicator>
  <AlertTriangle className="text-orange-500" />
  <span className="text-orange-700">Add one metric</span>
</StatusIndicator>
```

---

### Animation Specs

**Button Hover:**
```css
transition: all 150ms ease;
hover: {
  background: darker shade;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

**Status Update:**
```css
@keyframes statusUpdate {
  0% { opacity: 0; transform: scale(0.8); }
  50% { transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
}
```

**Signal Strength:**
```css
transition: all 500ms ease-out;
/* Smooth circular progress animation */
```

---

## State Management

### Panel State Structure

```typescript
interface AISuggestionsState {
  signalStrength: number; // 0-100
  agents: {
    icp: AgentState;
    revenue: AgentState;
    aiStrategy: AgentState;
    integration: AgentState;
    metrics: AgentState;
    investorLens: AgentState;
  };
  globalActions: GlobalAction[];
}

interface AgentState {
  id: string;
  name: string;
  icon: string;
  insight: string;
  actions: Action[];
  sampleOutput: string;
  realWorldExample: string;
  status: 'complete' | 'warning' | 'error' | 'empty';
  statusMessage: string;
}

interface Action {
  id: string;
  label: string;
  description: string;
  onClick: () => void;
  loading: boolean;
}

interface GlobalAction {
  id: string;
  label: string;
  description: string;
  onClick: () => void;
}
```

---

### Signal Strength Calculation

```typescript
const calculateSignalStrength = (formData: IndustryFormData): number => {
  let score = 0;
  const weights = {
    targetCustomer: 20,
    problem: 20,
    solution: 20,
    integrations: 15,
    metrics: 25,
  };
  
  // Target Customer (0-20 points)
  if (formData.targetCustomer) {
    score += 10; // Base points for filling
    if (formData.targetCustomer.length >= 50) score += 5;
    if (containsBuyerUserSeparation(formData.targetCustomer)) score += 5;
  }
  
  // Problem (0-20 points)
  if (formData.problem) {
    score += 10;
    if (formData.problem.length >= 75) score += 5;
    if (containsRevenueLanguage(formData.problem)) score += 5;
  }
  
  // Solution (0-20 points)
  if (formData.solution) {
    score += 10;
    if (containsOutcomeLanguage(formData.solution)) score += 5;
    if (containsAIDifferentiation(formData.solution)) score += 5;
  }
  
  // Integrations (0-15 points)
  if (formData.integrations.length >= 1) score += 7;
  if (formData.integrations.length >= 2) score += 8;
  
  // Metrics (0-25 points)
  if (formData.metrics.length >= 1) score += 12;
  if (formData.metrics.length >= 2) score += 13;
  
  return Math.min(score, 100);
};
```

---

## Implementation Guide

### File Structure

```
/components/pitch-deck/
  AISuggestionsPanel.tsx          # Main panel container
  SignalStrengthIndicator.tsx     # Circular progress
  AgentSection.tsx                 # Reusable agent section
  ActionButton.tsx                 # Reusable action button
  SampleOutputCard.tsx             # Sample output display
  StatusIndicator.tsx              # Status badge
  GlobalActionsFooter.tsx          # Sticky footer

/lib/ai-suggestions/
  agentConfigs.ts                  # Agent configurations
  signalStrength.ts                # Scoring logic
  actionHandlers.ts                # Action click handlers
  contentAnalysis.ts               # Text analysis utilities
```

---

### Component Implementation

**Main Panel:**

```tsx
// AISuggestionsPanel.tsx
export function AISuggestionsPanel({ formData, onApplySuggestion }) {
  const [signalStrength, setSignalStrength] = useState(0);
  const [agents, setAgents] = useState(initializeAgents());
  
  useEffect(() => {
    // Recalculate signal strength on form data change
    const newStrength = calculateSignalStrength(formData);
    setSignalStrength(newStrength);
    
    // Update agent states
    const updatedAgents = analyzeFormData(formData);
    setAgents(updatedAgents);
  }, [formData]);
  
  return (
    <div className="ai-suggestions-panel">
      <SignalStrengthIndicator value={signalStrength} />
      
      <div className="agents-container">
        {agents.map(agent => (
          <AgentSection
            key={agent.id}
            agent={agent}
            onActionClick={(actionId) => handleActionClick(agent.id, actionId)}
          />
        ))}
      </div>
      
      <GlobalActionsFooter
        actions={globalActions}
        onActionClick={handleGlobalAction}
      />
    </div>
  );
}
```

---

## Testing & Validation

### Test Cases

**1. Signal Strength Updates**
- ✅ Initial load: Signal = 0%
- ✅ Fill target customer: Signal increases
- ✅ Add 2 metrics: Signal increases by 25 points
- ✅ Complete all fields: Signal = 100%

**2. Agent Status Changes**
- ✅ Empty field: Status = ○ Empty
- ✅ Partial content: Status = ⚠ Warning
- ✅ Complete content: Status = ✓ Complete
- ✅ Critical issue: Status = ✗ Error

**3. Action Buttons**
- ✅ Click action: Shows loading state
- ✅ AI processes: Displays preview
- ✅ User applies: Updates form field
- ✅ Success animation: Green checkmark appears

**4. Real-time Updates**
- ✅ User types: Panel updates within 500ms
- ✅ Status changes: Smooth animation
- ✅ Signal strength: Smooth progress transition

---

## Design Tokens

### Colors

```css
--signal-low: #EF4444;        /* Red for 0-49% */
--signal-medium: #F59E0B;     /* Orange for 50-74% */
--signal-high: #10B981;       /* Green for 75-100% */

--agent-bg: #F9FAFB;          /* Light gray background */
--agent-border: #E5E7EB;      /* Border color */

--status-complete: #10B981;   /* Green */
--status-warning: #F59E0B;    /* Orange */
--status-error: #EF4444;      /* Red */
--status-empty: #9CA3AF;      /* Gray */
```

### Typography

```css
--agent-name: 14px font-medium;
--insight-text: 13px font-normal;
--action-button: 13px font-medium;
--sample-output: 12px font-normal;
--status-label: 12px font-medium;
```

### Spacing

```css
--panel-padding: 24px;
--section-gap: 20px;
--card-padding: 16px;
--button-padding: 8px 12px;
```

---

**Status:** Production specification complete  
**Next Step:** Implement React components  
**Related Docs:** `/docs/pitch-deck/wireframes.md`, `/docs/pitch-deck/mermaid-diagrams.md`