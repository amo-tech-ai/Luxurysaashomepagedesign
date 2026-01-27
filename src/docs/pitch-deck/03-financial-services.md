# Industry Focus: Financial Services - Wizard Screen Specification

**Industry:** Financial Services AI  
**Step:** 2 of 5 — Industry Focus  
**Status:** Design Specification  
**Last Updated:** January 27, 2026

---

## Goal

Help founders frame their pitch using finance-specific language, risks, metrics, and investor expectations.

---

## Audience

- FinTech founders
- Financial AI startups
- Banking technology companies
- Pre-Seed to Series A stage

---

## Tone

- Professional
- Trust-focused
- Risk-aware
- Compliance-conscious
- No hype, no buzzwords

---

## Layout Structure

### Three-Column Layout

**Left Column:** Wizard steps (Step 2 highlighted)  
**Center Column:** Industry-specific questions  
**Right Column:** AI suggestions

**Background:** Light (#FFFFFF)  
**Spacing:** Clean, generous  
**UI:** Minimal, professional

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
"Tailor your deck to financial and FinTech investors."
```

---

## Center Column — Content

### Title

```
Industry Focus: Financial Services
```

### Subtitle

```
Tailor your pitch to financial and FinTech investors.
```

**Typography:** Large title, smaller subtitle in gray

---

### Question 1 — Target Customer

**Label:**
```
Who is the customer or buyer?
```

**Input Type:** Textarea (2 rows)

**Placeholder:**
```
Risk and compliance teams at digital banks and fintech platforms
```

**Character Limit:** 120 characters

**Helper Text:**
```
Be specific: team, institution type, and size.
```

---

### Question 2 — Core Financial Problem

**Label:**
```
What financial risk, cost, or inefficiency exists today?
```

**Input Type:** Textarea (3 rows)

**Placeholder:**
```
Manual fraud reviews increase losses and slow transaction approvals
```

**Character Limit:** 200 characters

**Helper Text:**
```
Frame problem around risk, cost, or regulatory burden.
```

---

### Question 3 — AI-Powered Solution

**Label:**
```
How does AI improve financial decisions or operations?
```

**Input Type:** Textarea (3 rows)

**Placeholder:**
```
AI models detect fraud in real time with fewer false positives
```

**Character Limit:** 200 characters

**Helper Text:**
```
Emphasize accuracy, speed, and risk reduction.
```

---

### Question 4 — Where AI Adds Value

**Label:**
```
What does AI improve most?
```

**Input Type:** Multi-select (select up to 2)

**Options:**
- ☐ Risk reduction
- ☐ Cost savings
- ☐ Speed of decision-making
- ☐ Accuracy of predictions
- ☐ Regulatory compliance

**Helper Text:**
```
Choose the top 2 value drivers for financial buyers.
```

---

### Question 5 — Proof & Metrics

**Label:**
```
What measurable impact have you seen?
```

**Input Type:** 3-5 inline metric fields

**Field Structure:**
- Metric name (dropdown)
- Metric value (text input)

**Suggested Metrics (shown as hints):**
- Fraud loss reduction (%)
- False positive rate (%)
- Cost per transaction ($)
- Time to decision (seconds/minutes)
- Revenue protected ($)
- Compliance violations prevented (#)

**Example Entry:**
```
Metric: Fraud loss reduction
Value: 35%
```

**Helper Text:**
```
Quantify impact with real numbers. Estimates are okay if labeled clearly.
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
AI Suggestions (Financial Investors)
```

**Background:** Light gray card  
**Icon:** Lightbulb

---

### Insights (Educational Content)

**Display as bullet list:**

```
• Financial investors prioritize risk reduction and accuracy.
• Clear metrics matter more than model details.
• Explain how AI performs under regulatory constraints.
```

**Typography:** Small, dark gray, line height 1.6

---

### Action Buttons (AI Enhancements)

**Title:**
```
Suggested Improvements
```

**Buttons:**
1. "Tighten risk framing"
2. "Add finance benchmarks"
3. "Clarify compliance impact"

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
- ✓ Financial risk clear  
- ✓ AI impact measurable  
- ⚠ Add one risk or cost metric

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
Strong financial AI decks show how AI reduces losses or costs within months.
```

**Typography:** Extra small, italic, dark gray

---

## UX Rules

### Language Guidelines

**Use:**
- Financial language: risk, loss, accuracy, compliance
- Quantitative terms: reduction, improvement, efficiency
- Trust signals: audit, validation, certification

**Avoid:**
- Technical jargon: neural networks, algorithms, models
- Hype: revolutionary, game-changing, disruptive
- Vague claims: "better decisions," "smarter insights"

---

### Focus Areas

1. **Trust:** Emphasize accuracy and reliability
2. **Outcomes:** Show financial impact (cost/risk reduction)
3. **Compliance:** Address regulatory concerns proactively

---

### AI Behavior

- AI suggests, founder decides
- No auto-fill without permission
- Finance-specific suggestions only
- Respectful of regulatory sensitivity

---

## Content Strategy

### What Financial Investors Expect

1. **Risk Reduction:** Quantified decrease in fraud, losses, or errors
2. **Accuracy Metrics:** False positive rate, precision, recall
3. **Speed Improvement:** Time saved per transaction or decision
4. **Compliance:** How AI meets regulatory requirements
5. **Trust Signals:** Partnerships, certifications, audits

---

### Key Metrics for Financial Services

**Risk & Security:**
- Fraud detection rate (%)
- False positive rate (%)
- Security incidents prevented (#)

**Efficiency:**
- Cost per transaction ($)
- Processing time reduction (%)
- Manual review time saved (hours)

**Financial Impact:**
- Losses prevented ($)
- Revenue protected ($)
- Cost savings ($)

**Compliance:**
- Regulatory violations prevented (#)
- Audit preparation time reduced (%)

---

### Common Mistakes to Avoid

- ❌ Focusing on AI architecture instead of outcomes
- ❌ Missing accuracy or error rate metrics
- ❌ Ignoring regulatory compliance
- ❌ Vague buyer personas ("financial institutions")
- ❌ Overpromising on risk elimination

---

## Design System

### Colors

- **Primary:** `#0d5f4e` (Emerald green)
- **Background:** `#FFFFFF` (White)
- **Secondary Background:** `#F9FAFB` (Light gray)
- **Border:** `#E5E7EB` (Gray-200)
- **Success:** `#10B981` (Green)
- **Warning:** `#F59E0B` (Orange)
- **Accent (Financial):** `#1E40AF` (Blue - trust)

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

### Example 1: Fraud Detection

**Customer:**  
"Fraud prevention teams at digital banks with 1M+ monthly transactions"

**Financial Problem:**  
"Manual fraud reviews catch only 60% of fraud, causing $2M annual losses"

**AI Solution:**  
"Real-time AI fraud detection with 95% accuracy and 80% fewer false positives"

**Value Drivers:**
- ☑ Risk reduction
- ☑ Accuracy of predictions

**Metrics:**
- Fraud detection rate: 95%
- False positive rate: 2% (down from 10%)
- Losses prevented: $1.8M annually

---

### Example 2: Credit Risk Assessment

**Customer:**  
"Risk underwriting teams at mid-size lenders and fintechs"

**Financial Problem:**  
"Traditional credit scoring misses 30% of creditworthy applicants, losing revenue"

**AI Solution:**  
"AI credit models analyze alternative data to approve more qualified borrowers"

**Value Drivers:**
- ☑ Revenue growth (more approvals)
- ☑ Accuracy of predictions

**Metrics:**
- Approval rate increase: 25%
- Default rate: 1.2% (vs. 1.5% industry avg)
- Revenue uplift: $5M annually

---

### Example 3: Compliance Monitoring

**Customer:**  
"Compliance officers at regional banks and credit unions"

**Financial Problem:**  
"Manual transaction monitoring misses suspicious activity, risking fines"

**AI Solution:**  
"AI-powered AML monitoring detects suspicious patterns with 90% accuracy"

**Value Drivers:**
- ☑ Regulatory compliance
- ☑ Risk reduction

**Metrics:**
- Suspicious activity detection: 90%
- False alerts reduced: 70%
- Compliance violations prevented: 15 in first year

---

## Validation Logic

### Continue Button Enabled When:

**Minimum Requirements:**
- Customer description filled (at least 50 chars)
- Financial problem filled (at least 75 chars)
- AI solution filled (at least 75 chars)
- At least 1 value driver selected

**Ideal State:**
- All questions answered
- 2 value drivers selected
- At least 2 metrics provided

---

## AI Suggestion Logic

### Trigger: "Tighten risk framing"

**When to show:**
- Problem text doesn't contain: "risk," "loss," "cost," "fraud," "error"
- OR problem is < 100 characters

**Suggested improvement:**
"Reframe problem with specific financial risk or cost. Example: '$X in losses' or 'Y% error rate.'"

---

### Trigger: "Add finance benchmarks"

**When to show:**
- No metrics provided
- OR metric values seem unrealistic (>99% or <1%)

**Suggested improvement:**
"Add industry benchmarks to show scale of problem. Example: 'Industry average fraud rate: 3%'"

---

### Trigger: "Clarify compliance impact"

**When to show:**
- "Regulatory compliance" selected as value driver
- But no mention of: "SOC 2," "PCI," "GDPR," "KYC," "AML," "regulations"

**Suggested improvement:**
"Specify which regulations you address: SOC 2, PCI DSS, GDPR, KYC, AML, etc."

---

## Future Enhancements

- [ ] Regulatory framework dropdown (SOC 2, PCI, GDPR, etc.)
- [ ] Benchmark comparison to industry standards
- [ ] Risk calculator (input: fraud rate, output: losses)
- [ ] Financial metric templates by use case
- [ ] AI-generated compliance statements

---

## Technical Notes

### State Management

```typescript
interface FinancialServicesFormData {
  customer: string;
  financialProblem: string;
  aiSolution: string;
  valueDrivers: Array<'risk-reduction' | 'cost-savings' | 'speed' | 'accuracy' | 'compliance'>;
  metrics: Array<{
    name: string;
    value: string;
  }>;
}
```

### Validation Rules

```typescript
const isValid = (data: FinancialServicesFormData) => {
  return (
    data.customer.length >= 50 &&
    data.financialProblem.length >= 75 &&
    data.aiSolution.length >= 75 &&
    data.valueDrivers.length >= 1
  );
};
```

---

**Status:** Design specification complete — Ready for implementation  
**Next Step:** Build React component based on this spec  
**Related Docs:** `/docs/pitch-deck/01-industry.md` (parent spec)
