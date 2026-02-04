# Onboarding V3 — Step 3: Smart Interviewer

## Screen Purpose
Fill knowledge gaps through targeted questions. This adaptive interview refines the startup profile by asking strategic questions across business model, market, traction, team, and funding categories.

---

## Layout Structure

### Three-Panel Layout

**LEFT PANEL — Vertical Step Indicator**
- Logo: "StartupAI" (top-left corner)
- Step list (vertical):
  1. ✓ Context & Enrichment — "Add your links and info" (completed - green checkmark)
  2. ✓ AI Analysis — "Review what AI discovered" (completed - green checkmark)
  3. ✓ Smart Interviewer — "Answer questions" (ACTIVE STATE - green checkmark, in progress)
  4. Review & Score — "Finalize your profile" (inactive)

**CENTER PANEL — Interview Questions**
- Clean, focused question interface
- One question at a time
- Radio button answer options

**RIGHT PANEL — AI Assistant**
- Sage avatar (sage green circular icon)
- Name: "Sage"
- Title: "Strategy Advisor"
- Message: "I'll ask a few questions to understand your unique position."

---

## Content Elements

### Header
- Step indicator: "STEP 3 OF 4"
- Title: "Smart Interviewer" (large serif, 4xl)
- Subtitle: "Answer a few questions to refine your profile."

---

## Question Progress
- Top-right indicator: "Question 1 of 5"
- Progress percentage: "0%"

---

## Category Tabs
Horizontal navigation showing question categories:

1. **Business Model** (active)
2. Market
3. Traction
4. Team
5. Funding

---

## Question Display

### Question 1
**Category:** Business Model

**Question:**
"What's your current monthly revenue or traction?"

**Answer Options (radio buttons):**
- ○ Pre-revenue
- ○ Under $1K MRR
- ○ $1K - $10K MRR
- ○ $10K+ MRR

**Helper Text (below options):**
"Answer honestly — accuracy improves your score more than optimism."

**Skip Option:**
"⏭ Skip Question" (bottom-left)

---

## Interview Progress Panel (Right Side)

### Header
- "Interview Progress" (with document icon)

### Stats
- "Questions Answered" 
- "0/5" (large number)

### How This Works
- Heading: "📋 How This Works" (expandable)

**Bullets:**
- Adaptive questions based on gaps
- Extracting traction signals
- Understanding your strategy
- Building investor narrative

**Additional Text:**
"Answer honestly — accuracy improves your score more than optimism."

**Footer:**
"Powered by Gemini 3 with Google Search (Grounding)"

---

## Bottom Navigation
- Progress bar: 50% (green fill)
- "← Back" button (left side)
- "Continue →" button (right, deep emerald green, disabled until answer selected)
- "Save & Continue Later" link (bottom-left)

---

## Sample Questions (Additional)

### Question 2 (Market)
**Question:**
"Who is your primary customer?"

**Answer Options:**
- ○ Individual consumers (B2C)
- ○ Small businesses (SMB)
- ○ Mid-market companies
- ○ Enterprise organizations

---

### Question 3 (Traction)
**Question:**
"What's your strongest proof point today?"

**Answer Options:**
- ○ Product is live with users
- ○ Signed paying customers
- ○ Letters of intent / pilots
- ○ Product still in development

---

### Question 4 (Team)
**Question:**
"How many full-time team members do you have?"

**Answer Options:**
- ○ Just founders (1-2 people)
- ○ Small team (3-5 people)
- ○ Growing team (6-10 people)
- ○ Larger team (10+ people)

---

### Question 5 (Funding)
**Question:**
"Have you raised external funding?"

**Answer Options:**
- ○ Bootstrapped / no external funding
- ○ Pre-seed or angel round
- ○ Seed round
- ○ Series A or beyond

---

## Completion State

### After Final Question
- Title: "Interview complete" (large serif with green checkmark)
- Subtitle: "Your profile is now investor-ready"
- Confetti or subtle celebration animation
- Auto-advance to Step 4 after 2 seconds
- Or manual "Continue to Review →" button

---

## Visual Style

### Colors
- Background: Off-white (#fafaf8)
- Question card: White with subtle border
- Radio buttons: Grey when unselected, green when selected
- Active tab: Deep emerald green underline
- Inactive tabs: Grey text

### Typography
- Question text: Large serif (2xl), confident
- Answer options: Sans-serif, medium size
- Helper text: Small, grey
- Category tabs: Sans-serif, uppercase tracking

### Spacing
- Wide padding around question card
- 16px between answer options
- 32px between question and answers
- Generous margins on left/right

### Interactive States
- Radio button hover: Subtle grey background
- Selected radio: Green checkmark circle
- Continue button: Disabled grey → Active green
- Tab hover: Underline appears

---

## Animation Notes

### Question Transitions
- Current question slides out left
- New question slides in from right
- Smooth 300ms ease-in-out
- Progress percentage counts up

### Answer Selection
- Radio button scales slightly on click
- Green fill animates in (100ms)
- Continue button activates with subtle pulse

### Progress Updates
- Progress bar fills smoothly
- Question counter increments
- Answered count updates with bounce

### Completion Animation
- Final answer triggers checkmark
- "Interview complete" fades in
- Subtle success pulse
- Optional confetti or sparkle effect

---

## Adaptive Behavior

### Smart Question Logic
- Questions appear based on previous answers
- If revenue is "Pre-revenue", skip certain funding questions
- If team is "Just founders", skip org structure questions
- Maximum 5 questions, minimum 3
- AI selects most valuable gaps to fill

### Skip Handling
- Skipped questions marked as optional
- Profile completeness score adjusts
- Skipped questions may reappear in different context
- User can go back to answer skipped questions

---

## Accessibility
- Keyboard navigation (arrow keys + Enter)
- Radio buttons have clear focus states
- Screen reader announces progress
- Color not sole indicator (text + icons)
- Sufficient contrast for all text
- Skip option always available
