# Coach UI - Implementation Plan

> **Task ID:** 103  
> **Feature:** 3-Panel Validator + Coach Layout  
> **Phase:** MVP  
> **Priority:** P0  
> **Updated:** 2026-02-04

---

## 🎯 Overall Progress

```
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0%

Phase 1: Layout & Structure    ░░░░░░░░░░░░░░░░  0%
Phase 2: Validator Components  ░░░░░░░░░░░░░░░░  0%
Phase 3: Coach Components      ░░░░░░░░░░░░░░░░  0%
Phase 4: Integration & Logic   ░░░░░░░░░░░░░░░░  0%
Phase 5: Responsive & Polish   ░░░░░░░░░░░░░░░░  0%
```

**Status:** 0 of 20 tasks completed

---

## 📊 Component Summary Table

| # | Component | Priority | Status | Complexity | Est. Time |
|---|-----------|----------|--------|------------|-----------|
| **PHASE 1: LAYOUT & STRUCTURE** |
| 1 | 3-panel layout container | P0 | 🔴 Todo | High | 60 min |
| 2 | Responsive breakpoint logic | P0 | 🔴 Todo | High | 45 min |
| 3 | Panel collapse/expand behavior | P0 | 🔴 Todo | Medium | 30 min |
| **PHASE 2: VALIDATOR COMPONENTS** |
| 4 | Verdict card component | P0 | 🔴 Todo | Medium | 40 min |
| 5 | Tradeoffs card (Strengths/Concerns) | P0 | 🔴 Todo | Medium | 45 min |
| 6 | Evidence blocks grid | P0 | 🔴 Todo | High | 60 min |
| 7 | Sprint progress bar | P0 | 🔴 Todo | Medium | 30 min |
| **PHASE 3: COACH COMPONENTS** |
| 8 | Coach panel container | P0 | 🔴 Todo | Medium | 40 min |
| 9 | Phase progress stepper | P0 | 🔴 Todo | Medium | 45 min |
| 10 | Message bubble component | P0 | 🔴 Todo | Low | 25 min |
| 11 | Quick actions buttons | P0 | 🔴 Todo | Low | 20 min |
| 12 | Coach input field | P0 | 🔴 Todo | Medium | 30 min |
| **PHASE 4: INTEGRATION** |
| 13 | useCoachSession hook | P0 | 🔴 Todo | High | 90 min |
| 14 | Message send/receive flow | P0 | 🔴 Todo | High | 60 min |
| 15 | Loading & error states | P0 | 🔴 Todo | Medium | 40 min |
| 16 | Session state management | P1 | 🔴 Todo | High | 50 min |
| **PHASE 5: POLISH** |
| 17 | Mobile drawer/toggle view | P0 | 🔴 Todo | High | 60 min |
| 18 | Smooth animations | P1 | 🔴 Todo | Medium | 45 min |
| 19 | Accessibility (ARIA, keyboard nav) | P1 | 🔴 Todo | Medium | 40 min |
| 20 | Testing & edge cases | P1 | 🔴 Todo | High | 90 min |

**Totals:**
- 🟢 Completed: 0 tasks (0%)
- 🟡 In Progress: 0 tasks (0%)
- 🔴 Todo: 20 tasks (100%)

---

## 🚀 Implementation Prompts

### PHASE 1: Layout & Structure

#### 🔴 1. 3-Panel Layout Container
**Status:** 🔴 Todo  
**Prompt:**
```
Create ValidatorLayout.tsx component with 3-panel structure:
- Left: Navigation (fixed 80px width)
- Center: Validator content (flexible ~60%)
- Right: Coach panel (flexible ~40%)

Desktop (>1200px):
- All 3 panels visible side-by-side
- Nav: 80px | Main: flex-grow | Coach: min-w-[400px] max-w-[500px]

Use CSS Grid with grid-template-columns: "80px 1fr minmax(400px, 500px)"
Background: #FAF9F7
Add emerald (#0d5f4e) accent borders between panels
```

---

#### 🔴 2. Responsive Breakpoint Logic
**Status:** 🔴 Todo  
**Prompt:**
```
Implement responsive behavior with media queries:

Desktop (>1200px):
- 3 panels side-by-side
- Coach panel always visible

Tablet (768-1200px):
- Nav + Main visible
- Coach panel as slide-over drawer from right
- Floating button to open coach (bottom-right, emerald circle with chat icon)
- Drawer: w-[400px], shadow-2xl, slide animation

Mobile (<768px):
- Single column view
- Toggle between Main and Coach with tab buttons at top
- Full-screen overlay when coach active
- Bottom nav for mobile

Use useMediaQuery hook or Tailwind responsive classes
Add transition-all duration-300 for smooth resizing
```

---

#### 🔴 3. Panel Collapse/Expand Behavior
**Status:** 🔴 Todo  
**Prompt:**
```
Add collapse/expand controls to coach panel:

Desktop:
- [−] button in panel header to minimize
- Minimized: show thin 60px sidebar with expand button [→]
- Main panel grows to fill space when collapsed

State management:
- useState for isCoachOpen
- Save preference to localStorage
- Smooth width transition with transition-width duration-300

Panel header:
- "Your Coach" title (left)
- [−] minimize and [×] close buttons (right)
- Emerald hover states
```

---

### PHASE 2: Validator Components

#### 🔴 4. Verdict Card Component
**Status:** 🔴 Todo  
**Prompt:**
```
Create VerdictCard.tsx showing validation score:

Layout:
- Score circle: 78/100 (large, centered)
- Status label: "Promising" (based on score)
- One-line summary: "needs customer validation"
- Color-coded by score:
  - 0-20: Red (#dc2626) "STOP"
  - 21-40: Orange (#ea580c) "HIGH RISK"  
  - 41-60: Yellow (#ca8a04) "NEEDS WORK"
  - 61-80: Emerald (#0d5f4e) "PROMISING"
  - 81-100: Dark green (#0E3E1B) "STRONG YES"

Style:
- Card background: #F5F3EF
- Border: gray-200
- Padding: p-6
- Score: text-5xl font-bold
- Status: text-2xl
- Summary: text-gray-600

Props: { score: number; status: string; summary: string }
```

---

#### 🔴 5. Tradeoffs Card
**Status:** 🔴 Todo  
**Prompt:**
```
Create TradeoffsCard.tsx with 3 columns:

Column 1: Strengths
- CheckCircle icon (emerald)
- List of 3-4 items
- Example: "Problem clarity", "Market opportunity"

Column 2: Concerns  
- AlertTriangle icon (amber #ca8a04)
- List of 3-4 items
- Example: "No customers", "Unproven pricing"

Column 3: Next Steps
- Numbered list (1, 2, 3)
- Action items
- Example: "1. Interview 10 users", "2. Test $29 pricing"

Layout:
- Grid: grid-cols-3 gap-6
- Each column: p-4, border-r (except last)
- Icons: size-4, inline with text
- Text: text-sm, text-gray-700

Props: { 
  strengths: string[]; 
  concerns: string[]; 
  nextSteps: string[] 
}
```

---

#### 🔴 6. Evidence Blocks Grid
**Status:** 🔴 Todo  
**Prompt:**
```
Create EvidenceBlocks.tsx with expandable cards:

Cards (7 total):
1. Market (8/10)
2. Problem (9/10)
3. Solution (7/10)
4. Business (7/10)
5. Risks (3 critical)
6. Roadmap (On Track)
7. Sources (5 links)

Collapsed state:
- Grid: grid-cols-4 gap-4 (top row 4 cards, bottom row 3 cards)
- Each card shows: title, score/metric, [+] expand icon
- Centered layout, bg-[#F5F3EF], border-gray-200

Expanded state:
- Accordion behavior (one at a time)
- Full details with charts, lists, etc.
- [−] collapse button at bottom

Use shadcn Accordion component
Hover: scale-105, emerald border transition
```

---

#### 🔴 7. Sprint Progress Bar
**Status:** 🔴 Todo  
**Prompt:**
```
Create SprintProgress.tsx showing campaign progress:

Layout:
- Title: "Sprint Progress" with "Sprint 1/5" badge
- Progress bar: full width, height-4
- Percentage: 12% completed
- Color: emerald (#0d5f4e) fill, gray-200 background

Visual:
- ████████░░░░░░░░░░░░░░░░░░░░░░  12%
- Rounded corners: rounded-full
- Smooth fill animation

Below bar:
- Current milestone: "Customer Discovery"
- Time remaining: "18 days left"

Props: { 
  current: number; 
  total: number; 
  percentage: number; 
  milestone: string 
}
```

---

### PHASE 3: Coach Components

#### 🔴 8. Coach Panel Container
**Status:** 🔴 Todo  
**Prompt:**
```
Create CoachPanel.tsx as right sidebar:

Structure:
┌─────────────────────────────┐
│ YOUR COACH          [−][×] │ ← Header
├─────────────────────────────┤
│ Progress Stepper            │ ← CoachProgress
├─────────────────────────────┤
│                             │
│ Message bubbles             │ ← Message list
│ (scrollable)                │
│                             │
├─────────────────────────────┤
│ [Quick Action Buttons]      │ ← QuickActions
├─────────────────────────────┤
│ Type message...       [→]   │ ← CoachInput
└─────────────────────────────┘

Styling:
- Background: bg-muted/30 (subtle)
- Full height: h-full
- Flex column: flex-col
- Message area: flex-1 overflow-y-auto
- Padding: p-6
- Border-left: border-l-2 border-gray-200

Props: { 
  sessionId: string; 
  onClose: () => void; 
  onMinimize: () => void 
}
```

---

#### 🔴 9. Phase Progress Stepper
**Status:** 🔴 Todo  
**Prompt:**
```
Create CoachProgress.tsx showing 5 validation phases:

Phases:
1. Assessment (Discovery)
2. Constraint (Bottleneck)
3. Campaign (90-day plan)
4. Sprint (Execution)
5. Review (Results)

Visual:
━━●━━○━━○━━○━━○

- Current phase: filled circle (●) emerald
- Completed: filled circle (●) with checkmark
- Pending: empty circle (○) gray
- Lines between: solid if completed, dashed if pending

Layout:
- Horizontal stepper on desktop
- Vertical stepper on mobile
- Phase labels below circles
- Current phase highlighted with emerald text

Props: { 
  currentPhase: number; 
  phases: Array<{ name: string; status: 'complete' | 'active' | 'pending' }> 
}
```

---

#### 🔴 10. Message Bubble Component
**Status:** 🔴 Todo  
**Prompt:**
```
Create CoachMessage.tsx for chat bubbles:

Coach message (left-aligned):
- Avatar: small circle with coach icon (left)
- Bubble: bg-primary/5, rounded-2xl
- Text: text-gray-800
- Timestamp: text-xs text-gray-500 (bottom)

User message (right-aligned):
- No avatar
- Bubble: bg-secondary (emerald tint), rounded-2xl
- Text: text-white
- Right-aligned with ml-auto

Animation:
- Fade in from bottom: opacity 0→1, translateY 10→0
- Duration: 200ms

Props: { 
  role: 'user' | 'assistant'; 
  content: string; 
  timestamp?: string 
}
```

---

#### 🔴 11. Quick Actions Buttons
**Status:** 🔴 Todo  
**Prompt:**
```
Create QuickActions.tsx for suggested responses:

Display:
- 2-4 action buttons in vertical stack
- Examples:
  - [Yes, let's plan]
  - [Show details]
  - [I have questions]

Styling:
- Button: full width, py-3, px-4
- Variant: outline with emerald border
- Hover: bg-emerald/10, border-emerald
- Text: text-left, text-sm
- Icon: optional arrow-right at end

Behavior:
- onClick sends action as user message
- Disabled during loading
- Hide section if no actions available

Props: { 
  actions: string[]; 
  onSelect: (action: string) => void; 
  disabled?: boolean 
}
```

---

#### 🔴 12. Coach Input Field
**Status:** 🔴 Todo  
**Prompt:**
```
Create CoachInput.tsx for message input:

Layout:
- Textarea: auto-expand, max-height-32
- Send button: emerald circle with arrow icon
- Placeholder: "Type message..." in gray-400

Features:
- Enter to send (Shift+Enter for new line)
- Auto-focus on mount
- Clear after send
- Disable during loading
- Character limit: 1000 chars

Styling:
- Container: flex items-end gap-2
- Textarea: flex-1, rounded-xl, border-gray-200
- Button: size-10, bg-emerald, hover:bg-emerald-dark
- Loading: show spinner in button

Props: { 
  onSend: (message: string) => void; 
  disabled?: boolean 
}
```

---

### PHASE 4: Integration

#### 🔴 13. useCoachSession Hook
**Status:** 🔴 Todo  
**Prompt:**
```
Create useCoachSession.ts hook for session management:

Interface:
interface UseCoachSessionReturn {
  session: ValidationSession | null;
  messages: ConversationMessage[];
  isLoading: boolean;
  error: Error | null;
  sendMessage: (message: string) => Promise<void>;
  suggestedActions: string[];
  progress: {
    phase: number;
    percentage: number;
    milestone: string;
  };
}

Implementation:
- Fetch session on mount (GET /api/validation/session)
- Load message history
- WebSocket connection for real-time updates
- Optimistic UI updates for sent messages
- Error handling with retry logic
- Local state persistence (sessionStorage)

Usage:
const { messages, sendMessage, progress } = useCoachSession(startupId);
```

---

#### 🔴 14. Message Send/Receive Flow
**Status:** 🔴 Todo  
**Prompt:**
```
Implement message flow in CoachPanel:

Send flow:
1. User types message or clicks quick action
2. Add user message to UI immediately (optimistic)
3. POST /api/coach/message with { message, sessionId }
4. Show loading indicator
5. Receive AI response
6. Add assistant message to UI
7. Update suggested actions

Receive flow:
- Stream response if supported (word by word)
- Or show typing indicator then full message
- Auto-scroll to bottom on new message
- Play subtle sound/haptic on receive (optional)

Error handling:
- Retry failed send (show retry button)
- Timeout after 30 seconds
- Show error toast, keep message in input

State:
- messages: Message[]
- isSending: boolean
- error: string | null
```

---

#### 🔴 15. Loading & Error States
**Status:** 🔴 Todo  
**Prompt:**
```
Add loading and error states throughout:

Loading states:
1. Initial session load: skeleton for entire panel
2. Sending message: disable input, show spinner in send button
3. Waiting for response: typing indicator "Coach is typing..."
4. Loading evidence: skeleton cards in grid

Error states:
1. Session fetch failed: "Unable to load session" with [Retry]
2. Message send failed: show in message bubble with [Retry] button
3. Network error: toast notification at top
4. Session expired: redirect to create new session

Skeletons:
- Message: rounded rectangle, pulsing animation
- Progress bar: gray bar, shimmer effect
- Cards: outline with pulsing background

Use shadcn Skeleton component
Colors: gray-200 bg, gray-300 shimmer
```

---

#### 🔴 16. Session State Management
**Status:** 🔴 Todo  
**Prompt:**
```
Implement session state with context:

Create CoachSessionContext.tsx:
- Wraps Validator page
- Provides session state to all components
- Handles session lifecycle (start, pause, resume, end)

State:
interface CoachSessionState {
  sessionId: string | null;
  startupId: string;
  isActive: boolean;
  currentPhase: ValidationPhase;
  progress: ProgressInfo;
  conversationHistory: Message[];
}

Actions:
- startSession()
- pauseSession()
- resumeSession()
- endSession()
- updateProgress()

Persistence:
- Save to sessionStorage on state change
- Restore on page reload
- Clear on logout
```

---

### PHASE 5: Polish

#### 🔴 17. Mobile Drawer/Toggle View
**Status:** 🔴 Todo  
**Prompt:**
```
Implement mobile-specific behavior (<768px):

Tab toggle (top of page):
┌─────────────┬─────────────┐
│ Validator ● │   Coach     │
└─────────────┴─────────────┘

- Active tab: emerald background, white text
- Inactive: gray text
- Smooth transition between views

Coach view (full screen):
- Header: "Your Coach" with [← Back] button
- Full height content
- Fixed input at bottom (above keyboard)
- Progress stepper: vertical, left side

Behavior:
- Swipe gesture to switch tabs (optional)
- Back button returns to validator
- Keep coach session alive in background
- Show notification badge on coach tab if new message

Layout:
- Use fixed positioning for header and input
- Scrollable message area between
- Ensure keyboard doesn't cover input (adjust viewport)
```

---

#### 🔴 18. Smooth Animations
**Status:** 🔴 Todo  
**Prompt:**
```
Add animations with Framer Motion:

Panel transitions:
- Slide in: from right (x: 100% → 0)
- Slide out: to right (x: 0 → 100%)
- Duration: 300ms, easing: spring(20)

Message animations:
- Appear: fade + slide up (opacity 0→1, y: 10→0)
- Duration: 200ms
- Stagger: 50ms between messages

Collapse/expand:
- Width transition: smooth resize with transition-width
- Opacity: fade content during transition

Quick actions:
- Fade in: delay 500ms after coach message
- Hover: scale-105, duration: 150ms

Loading states:
- Skeleton: pulse animation (opacity 50%→100%)
- Typing indicator: bouncing dots

Performance:
- Use transform and opacity (GPU accelerated)
- Avoid animating width/height when possible
- will-change: transform for better performance
```

---

#### 🔴 19. Accessibility
**Status:** 🔴 Todo  
**Prompt:**
```
Implement accessibility features:

ARIA labels:
- Coach panel: role="complementary" aria-label="Validation Coach"
- Message list: role="log" aria-live="polite"
- Input: aria-label="Type message to coach"
- Quick actions: aria-label="Suggested action: {text}"

Keyboard navigation:
- Tab through all interactive elements
- Enter to send message
- Escape to close coach panel
- Arrow keys to navigate quick actions

Focus management:
- Focus input when panel opens
- Trap focus in modal on mobile
- Restore focus when closing
- Skip link to main content

Screen reader:
- Announce new messages
- Announce progress changes
- Label all icons with sr-only text

Color contrast:
- All text meets WCAG AA (4.5:1)
- Emerald #0d5f4e passes on white
- Error red #dc2626 passes on white
```

---

#### 🔴 20. Testing & Edge Cases
**Status:** 🔴 Todo  
**Prompt:**
```
Test and handle edge cases:

Unit tests:
- Component rendering with various props
- Hook state management
- Message send/receive logic
- Responsive behavior

Integration tests:
- Full conversation flow
- Session creation/restoration
- Error recovery
- WebSocket connection

Edge cases:
1. No active session → Show "Start Validation" CTA
2. Session expired → Auto-refresh or redirect
3. Extremely long message → Truncate with "Read more"
4. Coach panel closed → Show floating reopen button
5. Network offline → Queue messages, send when online
6. Empty suggested actions → Hide component
7. Multiple messages in quick succession → Batch/throttle
8. Browser tab inactive → Pause WebSocket, resume on focus
9. Mobile keyboard open → Adjust layout height
10. Slow network → Show timeout after 30s with retry

E2E tests (Playwright):
- Open validator page
- Send message to coach
- Receive response
- Click quick action
- Collapse/expand panel
- Switch to mobile view
- Test accessibility with screen reader

Manual testing checklist:
□ Desktop 3-panel layout
□ Tablet drawer behavior  
□ Mobile toggle view
□ Send/receive messages
□ Quick actions work
□ Progress updates
□ Collapse/expand
□ Loading states
□ Error handling
□ Accessibility
```

---

## 📋 Data Structure

### ValidationSession
```typescript
interface ValidationSession {
  id: string;
  startupId: string;
  phase: 'assessment' | 'constraint' | 'campaign' | 'sprint' | 'review';
  status: 'active' | 'paused' | 'completed';
  startedAt: string;
  updatedAt: string;
  progress: {
    percentage: number;
    currentStep: number;
    totalSteps: number;
    milestone: string;
  };
}
```

### ConversationMessage
```typescript
interface ConversationMessage {
  id: string;
  sessionId: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  metadata?: {
    suggestedActions?: string[];
    attachments?: any[];
  };
}
```

### ValidationData
```typescript
interface ValidationData {
  score: number;
  status: string;
  summary: string;
  strengths: string[];
  concerns: string[];
  nextSteps: string[];
  evidence: {
    market: EvidenceCard;
    problem: EvidenceCard;
    solution: EvidenceCard;
    business: EvidenceCard;
    risks: RiskCard[];
    roadmap: RoadmapMilestone[];
    sources: Source[];
  };
}
```

---

## 🎨 Design Tokens

**Colors:**
- Panel background: `#FAF9F7`
- Card background: `#F5F3EF`
- Coach panel: `bg-muted/30`
- Primary (emerald): `#0d5f4e`
- Secondary (sage): `#6b9d89`
- Success: `#16a34a`
- Warning: `#ca8a04`
- Danger: `#dc2626`
- Text: `gray-900`, `gray-700`, `gray-600`
- Borders: `gray-200`

**Typography:**
- Headlines: text-2xl, text-3xl (serif)
- Body: text-base, text-sm (sans-serif)
- Small: text-xs

**Spacing:**
- Panel padding: `p-6`, `p-8`
- Card padding: `p-4`, `p-6`
- Gaps: `gap-4`, `gap-6`
- Section spacing: `py-8`, `py-12`

**Borders:**
- Card: `border border-gray-200`
- Panel divider: `border-l-2 border-gray-200`
- Rounded: `rounded-xl`, `rounded-2xl`

---

## ✅ Acceptance Criteria

### Layout
- [ ] 3-panel layout on desktop (>1200px)
- [ ] Nav (80px) + Main (~60%) + Coach (~40%)
- [ ] Responsive drawer on tablet
- [ ] Toggle view on mobile

### Validator Content
- [ ] Verdict card with score
- [ ] Tradeoffs (Strengths/Concerns/Next Steps)
- [ ] Evidence blocks grid (7 cards)
- [ ] Sprint progress bar

### Coach Panel
- [ ] Phase progress stepper (5 phases)
- [ ] Message list (scrollable)
- [ ] Quick action buttons
- [ ] Input field with send

### Interactions
- [ ] Send message → receive response
- [ ] Click quick action → sends message
- [ ] Collapse/expand panel
- [ ] Smooth animations

### States
- [ ] Loading skeletons
- [ ] Error handling with retry
- [ ] Empty states
- [ ] Typing indicators

### Accessibility
- [ ] ARIA labels
- [ ] Keyboard navigation
- [ ] Focus management
- [ ] Screen reader support
- [ ] Color contrast WCAG AA

---

## 🚦 Next Steps

### Week 1:
1. Build 3-panel layout structure (#1, #2)
2. Implement responsive breakpoints (#2, #3)
3. Create validator components (#4, #5, #6, #7)

### Week 2:
4. Build coach panel components (#8, #9, #10, #11, #12)
5. Create useCoachSession hook (#13)
6. Implement message flow (#14)

### Week 3:
7. Add loading/error states (#15)
8. Session state management (#16)
9. Mobile responsive (#17)

### Week 4:
10. Polish animations (#18)
11. Accessibility audit (#19)
12. Testing & edge cases (#20)

---

## 📈 Success Metrics

**User Experience:**
- Coach responds within 2 seconds
- Can see validation data while chatting
- No context switching between views
- Smooth transitions under 300ms

**Technical:**
- Component load < 1 second
- WebSocket connection stable
- Mobile performance 60fps
- Accessibility score 100/100

**Business:**
- Users engage with coach in first session
- Average conversation length > 3 messages
- Quick actions used 40%+ of time
- Mobile usage > 30%

---

## 📚 References

**Design:**
- See: `/tasks/plan/2026-02-04-startup-coach-design.md`
- BCG aesthetic: `/docs/01-style-guide.md`
- Validator v2.0: `/docs/features/01-validator-implementation-plan.md`

**Code:**
- Layout patterns: `src/components/layout/`
- Hooks: `src/hooks/useValidation.ts`
- shadcn components: `src/components/ui/`

---

**Last Updated:** 2026-02-04  
**Document Version:** 1.0  
**Owner:** StartupAI Product Team
