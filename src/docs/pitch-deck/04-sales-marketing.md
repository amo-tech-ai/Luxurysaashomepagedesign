# Industry Focus: Sales & Marketing - Wizard Screen Specification

**Industry:** Sales & Marketing AI SaaS  
**Step:** 2 of 5 — Industry Focus  
**Status:** Design Specification  
**Last Updated:** January 27, 2026

---

## Goal

Help founders frame their pitch using sales and marketing–specific language, metrics, and investor expectations.

---

## Audience

- Sales tech founders
- Marketing automation startups
- RevOps platforms
- Pre-Seed to Seed stage

---

## Tone

- Professional
- Practical
- Revenue-focused
- Results-driven
- No hype

---

## Layout Structure

### Three-Column Layout

**Left Column:** Wizard steps  
**Center Column:** Industry-specific questions  
**Right Column:** AI suggestions

**Background:** Light (#FFFFFF)  
**Spacing:** Clean, generous  
**UI:** Minimal, revenue-focused

---

## Left Column — Wizard Progress

### Step Indicator

```
Step 2 of 5 — Industry Focus

Progress:
• Startup Info ✓ (completed)
• Industry Focus (active)
• Market & Traction
• Deck Style
• Review & Generate
```

**Helper Text:**
```
"Tailor your pitch to revenue-driven investors."
```

---

## Center Column — Content

### Title

```
Industry Focus: Sales & Marketing
```

### Subtitle

```
Tailor your pitch to revenue-driven investors.
```

**Typography:** Large title, smaller subtitle in gray

---

### Question 1 — Target Customer

**Label:**
```
Who uses and who buys the product?
```

**Input Type:** Textarea (2 rows)

**Placeholder:**
```
Revenue operations and marketing teams at B2B SaaS companies
```

**Character Limit:** 150 characters

**Helper Text:**
```
Clarify both the end user and the economic buyer.
```

**Why This Matters:**
In sales/marketing products, the user (sales rep, marketer) is often different from the buyer (VP Sales, CMO). Investors want to see you understand this distinction.

---

### Question 2 — Core Revenue Problem

**Label:**
```
What revenue or growth problem exists today?
```

**Input Type:** Textarea (3 rows)

**Placeholder:**
```
Sales teams waste time on low-quality leads and manual follow-ups
```

**Character Limit:** 200 characters

**Helper Text:**
```
Frame problem around lost revenue, wasted time, or slow growth.
```

---

### Question 3 — AI-Powered Solution

**Label:**
```
How does AI improve sales or marketing outcomes?
```

**Input Type:** Textarea (3 rows)

**Placeholder:**
```
AI scores leads and automates outreach to increase conversion rates
```

**Character Limit:** 200 characters

**Helper Text:**
```
Focus on conversion, efficiency, or pipeline growth.
```

---

### Question 4 — Where AI Adds Leverage

**Label:**
```
What does AI make faster, cheaper, or more effective?
```

**Input Type:** Multi-select (select up to 2)

**Options:**
- ☐ Lead qualification
- ☐ Personalization at scale
- ☐ Attribution accuracy
- ☐ Pipeline forecasting
- ☐ Campaign optimization

**Helper Text:**
```
Choose the top 2 leverage points for sales/marketing teams.
```

---

### Question 5 — Proof & Metrics

**Label:**
```
What measurable impact have you seen?
```

**Input Type:** Metric fields (flexible, 2-4 metrics)

**Field Structure:**
- Metric name (dropdown or text)
- Metric value (text input with unit)

**Suggested Metrics (shown as hints):**
- Conversion rate lift (%)
- Cost per lead reduction (%)
- Pipeline growth (%)
- Revenue influenced ($)
- Sales cycle reduction (days)
- Email open/reply rate (%)

**Example Entry:**
```
Metric: Conversion rate lift
Value: 30%

Metric: Pipeline growth
Value: $2M in 6 months
```

**Helper Text:**
```
Focus on revenue or pipeline metrics. Avoid vanity metrics (clicks, impressions).
```

---

### Navigation

**Primary CTA:**
```
Button: "Continue →"
Style: Green background, white text
State: Enabled when 4 of 5 questions answered
```

**Secondary CTA:**
```
Button: "Back"
Style: Gray text, no background
```

---

## Right Column — AI Suggestions

### Title

```
AI Suggestions (Sales & Marketing)
```

**Background:** Light green card  
**Icon:** Lightbulb

---

### Insights (Educational Content)

**Display as bullet list:**

```
• Investors expect clear revenue impact.
• Tie AI output directly to conversion or pipeline growth.
• Avoid vanity metrics. Focus on money or efficiency.
```

**Typography:** Small, dark gray, line height 1.6

---

### Action Buttons (AI Enhancements)

**Title:**
```
Suggested Improvements
```

**Buttons:**
1. "Tighten revenue framing"
2. "Add benchmark metrics"
3. "Clarify buyer vs user"

**Visual Treatment:**
- Small buttons
- Soft gray background
- Sparkle icon prefix
- Hover: Darker gray
- Click: Apply AI suggestion (future)

---

### Validation Checklist (Auto-Updated)

**Title:**
```
Checklist
```

**Items:**
- ✓ Buyer defined  
- ✓ Revenue problem clear  
- ✓ AI impact measurable  
- ⚠ Add one pipeline or conversion metric

**States:**
- ✓ Green checkmark: Complete
- ⚠ Yellow warning: Needs attention
- ○ Gray circle: Not started

**Behavior:**
Real-time updates as fields are filled.

---

### Pro Tip

**Icon:** Target

**Background:** Soft yellow tint

**Copy:**
```
Strong Sales & Marketing decks quantify how AI improves revenue within one quarter.
```

**Typography:** Extra small, italic, dark gray

---

## UX Rules

### Language Guidelines

**Use:**
- Revenue language: pipeline, conversion, CAC, LTV
- Efficiency terms: time saved, cost reduced, faster
- Growth metrics: MRR, ARR, expansion, churn

**Avoid:**
- Technical jargon: neural networks, algorithms
- Vanity metrics: clicks, impressions, page views
- Vague claims: "better leads," "smarter campaigns"

---

### Focus Areas

1. **Revenue Impact:** Show clear connection to money
2. **Time to Value:** How fast do customers see results?
3. **Buyer vs User:** Clarify who pays and who uses

---

### AI Behavior

- AI suggests, founder decides
- No auto-fill without permission
- Revenue-focused suggestions only
- Practical, not theoretical

---

## Content Strategy

### What Sales & Marketing Investors Expect

1. **Revenue Metrics:** Pipeline, conversion, CAC, LTV
2. **Time to ROI:** How quickly customers see value
3. **Scalability:** Can this grow without linear headcount?
4. **User Adoption:** Do sales reps/marketers actually use it?
5. **Buyer Clarity:** Who signs the check?

---

### Key Metrics for Sales & Marketing

**Sales Metrics:**
- Conversion rate (lead → opp → closed)
- Pipeline generated ($)
- Sales cycle length (days)
- Win rate (%)
- Revenue per rep ($)

**Marketing Metrics:**
- Cost per lead ($)
- Lead qualification rate (%)
- Attribution accuracy (%)
- Campaign ROI (%)
- Email/outreach response rate (%)

**Efficiency Metrics:**
- Time saved per rep (hours/week)
- Cost per acquisition reduction (%)
- Manual tasks automated (#)

---

### Common Mistakes to Avoid

- ❌ Focusing on features instead of revenue impact
- ❌ Using vanity metrics (clicks, impressions)
- ❌ Confusing user and buyer
- ❌ Missing time-to-ROI data
- ❌ Vague buyer personas ("B2B companies")

---

## Design System

### Colors

- **Primary:** `#0d5f4e` (Emerald green)
- **Background:** `#FFFFFF` (White)
- **Secondary Background:** `#F9FAFB` (Light gray)
- **Border:** `#E5E7EB` (Gray-200)
- **Success:** `#10B981` (Green)
- **Warning:** `#F59E0B` (Orange)
- **Accent (Revenue):** `#DC2626` (Red - urgency)

### Typography

- **Title:** `text-3xl font-normal` (36px)
- **Subtitle:** `text-base text-gray-600` (16px)
- **Labels:** `text-sm font-medium` (14px)
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

### Example 1: Lead Scoring AI

**Who Uses/Buys:**  
"Sales reps use it daily; VP Sales buys it for the team"

**Revenue Problem:**  
"Sales teams waste 40% of time chasing unqualified leads, missing quota"

**AI Solution:**  
"AI lead scoring prioritizes high-intent buyers, increasing close rates by 30%"

**Leverage Points:**
- ☑ Lead qualification
- ☑ Pipeline forecasting

**Metrics:**
- Conversion rate lift: 30%
- Pipeline growth: $3M in Q1
- Time saved per rep: 10 hrs/week

---

### Example 2: Marketing Attribution

**Who Uses/Buys:**  
"Marketing ops teams use it; CMO approves budget"

**Revenue Problem:**  
"Marketers can't prove ROI, causing budget cuts and inefficient spend"

**AI Solution:**  
"AI multi-touch attribution shows which channels drive revenue, optimizing spend"

**Leverage Points:**
- ☑ Attribution accuracy
- ☑ Campaign optimization

**Metrics:**
- Attribution accuracy: 85% (vs. 40% with last-touch)
- Marketing ROI improvement: 45%
- CAC reduction: 25%

---

### Example 3: Sales Outreach Automation

**Who Uses/Buys:**  
"SDRs use it for prospecting; Sales Ops buys it for the team"

**Revenue Problem:**  
"SDRs send generic emails with <5% reply rates, missing pipeline targets"

**AI Solution:**  
"AI personalizes outreach at scale, increasing reply rates to 18%"

**Leverage Points:**
- ☑ Personalization at scale
- ☑ Lead qualification

**Metrics:**
- Reply rate: 18% (vs. 4% baseline)
- Pipeline generated: $5M in 6 months
- Outreach volume: 3x increase per SDR

---

## Validation Logic

### Continue Button Enabled When:

**Minimum Requirements:**
- User/buyer description filled (at least 50 chars)
- Revenue problem filled (at least 75 chars)
- AI solution filled (at least 75 chars)
- At least 1 leverage point selected

**Ideal State:**
- All questions answered
- 2 leverage points selected
- At least 2 revenue metrics provided

---

## AI Suggestion Logic

### Trigger: "Tighten revenue framing"

**When to show:**
- Problem text doesn't mention: "revenue," "pipeline," "conversion," "growth," "quota," "CAC"
- OR problem is < 100 characters

**Suggested improvement:**
"Reframe problem with revenue impact. Example: 'Teams miss quota by X%' or 'CAC is Y% above target.'"

---

### Trigger: "Add benchmark metrics"

**When to show:**
- No metrics provided
- OR metrics don't include: "conversion," "pipeline," "revenue," "CAC," "LTV"

**Suggested improvement:**
"Add pipeline or conversion benchmarks. Example: 'Industry average conversion rate: 2.5%'"

---

### Trigger: "Clarify buyer vs user"

**When to show:**
- User/buyer description doesn't contain: "buys," "approves," "signs," "pays"
- OR description is < 75 characters

**Suggested improvement:**
"Clarify who uses (rep, marketer) vs. who buys (VP, CMO). Example: 'SDRs use it; Sales Ops buys it.'"

---

## Future Enhancements

- [ ] Revenue calculator (input: conversion lift, output: ARR impact)
- [ ] Benchmark comparison to similar sales/marketing tools
- [ ] Buyer persona templates (VP Sales, CMO, RevOps)
- [ ] Time-to-ROI calculator
- [ ] AI-generated value props based on metrics

---

## Technical Notes

### State Management

```typescript
interface SalesMarketingFormData {
  userAndBuyer: string;
  revenueProblem: string;
  aiSolution: string;
  leveragePoints: Array<'lead-qualification' | 'personalization' | 'attribution' | 'forecasting' | 'optimization'>;
  metrics: Array<{
    name: string;
    value: string;
  }>;
}
```

### Validation Rules

```typescript
const isValid = (data: SalesMarketingFormData) => {
  return (
    data.userAndBuyer.length >= 50 &&
    data.revenueProblem.length >= 75 &&
    data.aiSolution.length >= 75 &&
    data.leveragePoints.length >= 1
  );
};
```

---

**Status:** Design specification complete — Ready for implementation  
**Next Step:** Build React component based on this spec  
**Related Docs:** `/docs/pitch-deck/01-industry.md` (parent spec)
