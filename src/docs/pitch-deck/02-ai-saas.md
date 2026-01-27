# Industry Focus: AI SaaS - Wizard Screen Specification

**Industry:** AI SaaS  
**Step:** 2 of 5 — Industry Focus  
**Status:** Design Specification  
**Last Updated:** January 27, 2026

---

## Goal

Help founders quickly shape industry-specific, investor-ready content with live AI guidance tailored to AI SaaS products.

---

## Audience

- AI SaaS founders
- B2B SaaS with AI features
- Pre-Seed to Series A stage

---

## Tone

- Professional
- Practical
- Automation-focused
- ROI-driven
- No hype

---

## Layout Structure

### Three-Column Layout

**Left Column:** Wizard progress + section list  
**Center Column:** Main content form  
**Right Column:** AI Suggestions panel

**Background:** `#FFFFFF` (White)  
**Dividers:** Soft gray  
**Cards:** Rounded, minimal borders  
**Spacing:** Clean, generous

---

## Left Column — Wizard Progress

### Step Indicator

```
Step 2 of 5

Progress:
• Startup Info ✓ (completed)
• Industry Focus (active)
• Market & Traction
• Deck Style
• Review & Generate
```

**Visual Treatment:**
- Active step: Bold, green accent
- Completed: Checkmark, gray text
- Upcoming: Gray text

---

## Center Column — Content

### Title

```
Industry Focus: AI SaaS
```

**Typography:** Large, bold, dark gray

---

### Section 1: Target Customer

**Label:**
```
Primary buyer
```

**Input Type:** Dropdown + Text field

**Dropdown Options:**
- SMB (Small and Medium Business)
- Mid-market
- Enterprise

**Text Field Placeholder:**
```
Customer support teams at B2B SaaS companies with 50–500 employees
```

**Helper Text:**
```
Be specific about team, company size, and industry vertical.
```

---

### Section 2: Core Problem

**Label:**
```
Core Problem (1 sentence)
```

**Input Type:** Textarea (2-3 rows)

**Placeholder:**
```
Manual workflows slow teams down and prevent scale as customer volume grows
```

**Character Limit:** 150 characters

**Helper Text:**
```
Focus on operational bottlenecks or cost drivers.
```

---

### Section 3: AI-Powered Solution

**Label:**
```
AI-Powered Solution
```

**Input Type:** Textarea (2-3 rows)

**Placeholder:**
```
AI copilots that automate repetitive tasks while keeping humans in the loop
```

**Character Limit:** 150 characters

**Helper Text:**
```
Emphasize automation + human collaboration.
```

---

### Section 4: Why This Wins in SaaS

**Label:**
```
Why This Wins in SaaS
```

**Input Type:** Bullet list (3 items)

**Pre-filled Examples (editable):**
- Fast ROI (< 90 days)
- Usage-based expansion
- Embedded in existing workflows

**Helper Text:**
```
Focus on business model advantages specific to SaaS.
```

---

### Section 5: Proof / Early Signals

**Label:**
```
Proof & Early Signals
```

**Input Type:** Inline fields (3 metrics)

**Fields:**
1. **Active users**
   - Placeholder: "e.g., 2,500"
   - Type: Number

2. **Monthly Recurring Revenue (MRR)**
   - Placeholder: "e.g., $50,000"
   - Type: Currency

3. **Month-over-month growth %**
   - Placeholder: "e.g., 15%"
   - Type: Percentage

**Helper Text:**
```
If you don't have these yet, use pilot metrics or letters of intent.
```

---

### Navigation

**Primary CTA:**
```
Button: "Continue →"
Style: Green background, white text
State: Enabled when at least 3 sections filled
```

**Secondary CTA:**
```
Button: "Back"
Style: Gray text, no background
```

---

## Right Column — AI Suggestions

### Card Title

```
AI Insights
```

**Icon:** Lightbulb  
**Background:** Light green tint  
**Border:** Soft green

---

### Insight Copy

```
Investors expect AI SaaS pitches to clearly show automation leverage and ROI.
```

**Typography:** Small, dark gray, regular weight

---

### Suggestions (Action Buttons)

**Title:**
```
Suggestions
```

**Buttons:**
1. "Make problem more specific"
2. "Add SaaS benchmark metrics"
3. "Tighten AI differentiation"

**Visual Treatment:**
- Small buttons
- Gray background
- Sparkle icon on each
- Hover: Darker gray
- Click: Apply AI enhancement (future)

---

### Validation Checklist (Auto-Updated)

**Title:**
```
Checklist
```

**Items:**
- ✓ Clear buyer defined  
- ✓ Problem is automation-driven  
- ✓ AI value is measurable  
- ⚠ Add retention or expansion metric

**States:**
- ✓ Green checkmark: Complete
- ⚠ Yellow warning: Needs attention
- ○ Gray circle: Not started

**Behavior:**
Updates in real-time as fields are filled.

---

### Pro Tip

**Icon:** Target

**Background:** Soft gray

**Copy:**
```
Top Seed-stage AI SaaS decks clearly explain how AI reduces cost or increases revenue within 90 days.
```

**Typography:** Extra small, dark gray, italic

---

## UX Rules

### Language

- **Use:** Automation, ROI, efficiency, leverage
- **Avoid:** Technical jargon, AI model details

### Validation

- No blocking errors (soft validation only)
- Yellow warnings, not red errors
- Allow progression even if incomplete

### AI Behavior

- AI suggests, founder decides
- No auto-fill without permission
- Suggestions are contextual, not pushy

### Accessibility

- High contrast text
- Keyboard navigation support
- Screen reader friendly labels

---

## Content Strategy

### What Makes AI SaaS Different

1. **Fast ROI:** Investors expect < 90-day payback
2. **Automation Leverage:** More value with fewer headcount
3. **Usage-Based Growth:** Revenue scales with customer usage
4. **Workflow Integration:** Embedded, not standalone

### Key Metrics Investors Expect

- MRR and growth rate
- Active users (not just signups)
- Retention and expansion
- Time to value (onboarding speed)

### Common Mistakes to Avoid

- ❌ Focusing on AI model architecture
- ❌ Generic "we use AI" statements
- ❌ Missing ROI or efficiency metrics
- ❌ Vague buyer personas ("all SaaS companies")

---

## Design System

### Colors

- **Primary:** `#0d5f4e` (Emerald green)
- **Background:** `#FFFFFF` (White)
- **Secondary Background:** `#F9FAFB` (Light gray)
- **Border:** `#E5E7EB` (Gray-200)
- **Success:** `#10B981` (Green)
- **Warning:** `#F59E0B` (Orange)

### Typography

- **Title:** `text-3xl font-normal` (36px)
- **Section Labels:** `text-sm font-medium` (14px)
- **Input Text:** `text-base` (16px)
- **Helper Text:** `text-xs text-gray-500` (12px)
- **Pro Tip:** `text-xs italic text-gray-600` (12px)

### Spacing

- **Section Gaps:** `24px` (space-y-6)
- **Card Padding:** `20px` (p-5)
- **Input Padding:** `12px 16px` (px-4 py-3)

### Border Radius

- **Inputs:** `8px` (rounded-lg)
- **Cards:** `12px` (rounded-xl)
- **Buttons:** `8px` (rounded-lg)

---

## Sample Filled Content

### Example 1: AI Customer Support

**Primary Buyer:** Mid-market  
**Customer Description:** "Customer support teams at B2B SaaS companies with 50–500 employees"

**Core Problem:**  
"Support teams spend 60% of time on repetitive tier-1 questions instead of complex issues"

**AI Solution:**  
"AI-powered ticket triage and auto-responses that resolve 40% of inquiries instantly"

**Why This Wins:**
- 50% cost reduction in support ops
- Usage grows with customer base
- Integrates with Zendesk, Intercom

**Proof:**
- Active users: 1,200
- MRR: $25,000
- Growth: 20% MoM

---

### Example 2: AI Sales Assistant

**Primary Buyer:** Enterprise  
**Customer Description:** "Sales operations teams at enterprise B2B companies with 500+ reps"

**Core Problem:**  
"Sales reps waste 30% of time on CRM data entry and manual lead research"

**AI Solution:**  
"AI copilot that auto-logs calls, updates CRM, and suggests next actions"

**Why This Wins:**
- 3-month ROI (increased pipeline)
- Per-seat pricing scales with growth
- Works inside Salesforce

**Proof:**
- Active users: 5,000
- MRR: $150,000
- Growth: 15% MoM

---

## Validation Logic

### Continue Button Enabled When:

**Minimum Requirements:**
- Primary buyer selected
- Core problem filled (at least 50 chars)
- AI solution filled (at least 50 chars)

**Ideal State:**
- All sections filled
- At least 2 of 3 metrics provided
- Why This Wins section has 3 bullets

---

## AI Suggestion Logic

### Trigger: "Make problem more specific"

**When to show:**
- Problem text < 75 characters
- Contains generic words: "challenges," "issues," "problems"

**Suggested improvement:**
"Reframe problem with a specific operational cost or bottleneck."

---

### Trigger: "Add SaaS benchmark metrics"

**When to show:**
- No metrics filled
- OR growth rate < 10%

**Suggested improvement:**
"Add industry benchmarks like 'typical support cost: $50/ticket' to show scale of problem."

---

### Trigger: "Tighten AI differentiation"

**When to show:**
- AI solution contains: "AI-powered," "machine learning," "smart"
- But no mention of: "automate," "predict," "reduce," "increase"

**Suggested improvement:**
"Replace 'AI-powered' with a specific outcome: 'automates X' or 'reduces Y by Z%'."

---

## Future Enhancements

- [ ] Auto-suggest buyer persona based on one-liner
- [ ] Benchmark comparison to similar AI SaaS companies
- [ ] ROI calculator (input: cost saved, output: payback period)
- [ ] Industry-specific metric templates (support, sales, ops)
- [ ] AI-generated bullet points for "Why This Wins"

---

## Technical Notes

### State Management

```typescript
interface AISaaSFormData {
  buyerSegment: 'smb' | 'mid-market' | 'enterprise';
  buyerDescription: string;
  coreProblem: string;
  aiSolution: string;
  whyThisWins: string[];
  activeUsers?: number;
  mrr?: number;
  growthRate?: number;
}
```

### Validation Rules

```typescript
const isValid = (data: AISaaSFormData) => {
  return (
    data.buyerSegment &&
    data.coreProblem.length >= 50 &&
    data.aiSolution.length >= 50
  );
};
```

---

**Status:** Design specification complete — Ready for implementation  
**Next Step:** Build React component based on this spec  
**Related Docs:** `/docs/pitch-deck/01-industry.md` (parent spec)
