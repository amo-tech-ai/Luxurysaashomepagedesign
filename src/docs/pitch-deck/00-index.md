# Pitch Deck Wizard - Industry-Specific Screens Documentation

**Project:** StartupAI Pitch Deck Generator  
**Phase:** 13 - Industry-Specific Wizard  
**Status:** Design Specifications Complete  
**Last Updated:** January 27, 2026

---

## Overview

This directory contains design specifications for industry-specific wizard screens in the pitch deck generator. Each industry has unique questions, placeholders, metrics, AI suggestions, and investor expectations.

---

## Documentation Structure

### Master Specification

**File:** `01-industry.md`  
**Purpose:** Master specification covering all 13 industries  
**Scope:** Complete wizard structure, layout, design system, all industry variants

**Contents:**
- Three-column layout specification
- 5-step wizard flow
- 13 industry variants with full content
- AI suggestions panel design
- Progress tracking system
- Design tokens and spacing
- Validation logic
- Future enhancements

---

### Detailed Industry Specifications

Each industry has a dedicated specification document with:
- Industry-specific questions and placeholders
- Tailored metrics for that vertical
- AI insights and suggestions
- Pro tips for founders
- Sample filled content
- Validation logic
- UX rules and language guidelines

---

## Industry Documentation Files

### 02. AI SaaS

**File:** `02-ai-saas.md`  
**Industry:** AI SaaS platforms and tools  
**Focus:** Automation leverage, ROI, usage-based growth

**Key Questions:**
1. Primary buyer (SMB/Mid-market/Enterprise)
2. Core problem (1 sentence)
3. AI-powered solution
4. Why this wins in SaaS
5. Proof / Early signals

**Key Metrics:**
- Active users
- Monthly Recurring Revenue (MRR)
- Month-over-month growth %

**Pro Tip:**  
"Top Seed-stage AI SaaS decks clearly explain how AI reduces cost or increases revenue within 90 days."

---

### 03. Financial Services

**File:** `03-financial-services.md`  
**Industry:** FinTech, banking AI, financial risk  
**Focus:** Risk reduction, accuracy, regulatory compliance

**Key Questions:**
1. Who is the customer or buyer?
2. What financial risk, cost, or inefficiency exists?
3. How does AI improve financial decisions?
4. What does AI improve most? (select up to 2)
5. What measurable impact have you seen?

**Key Metrics:**
- Fraud loss reduction (%)
- False positive rate (%)
- Cost per transaction
- Time to decision
- Revenue protected ($)

**Pro Tip:**  
"Strong financial AI decks show how AI reduces losses or costs within months."

---

### 04. Sales & Marketing

**File:** `04-sales-marketing.md`  
**Industry:** Sales tech, marketing automation, RevOps  
**Focus:** Revenue impact, conversion, pipeline growth

**Key Questions:**
1. Who uses and who buys the product?
2. What revenue or growth problem exists?
3. How does AI improve sales or marketing outcomes?
4. What does AI make faster, cheaper, or more effective? (select up to 2)
5. What measurable impact have you seen?

**Key Metrics:**
- Conversion rate lift (%)
- Cost per lead reduction (%)
- Pipeline growth (%)
- Revenue influenced ($)
- Sales cycle reduction (days)

**Pro Tip:**  
"Strong Sales & Marketing decks quantify how AI improves revenue within one quarter."

---

### 05. Retail & Commerce

**File:** `05-retail-commerce.md`  
**Industry:** Retail tech, eCommerce, omnichannel  
**Focus:** Revenue, margin, inventory efficiency

**Key Questions:**
1. What retail problem are you solving?
2. Who is the customer? (DTC, Marketplace, Brick-and-mortar, Omnichannel)
3. Primary value driver (single select)
4. What measurable impact have you seen?

**Key Metrics:**
- Conversion rate (%)
- Average order value (AOV)
- Inventory turnover
- Gross margin improvement (%)
- Stockout reduction (%)

**Pro Tip:**  
"Strong retail decks show impact on revenue or margin within one season or quarter."

---

### 06. CRM & Social Media AI

**File:** `06-socialmedia.md`  
**Industry:** CRM & social media AI, marketing automation  
**Focus:** Customer growth, engagement, automation

**Key Questions:**
1. Who uses and buys this product?
2. What customer growth or engagement problem exists?
3. How does AI improve content creation or posting?
4. What systems does this integrate with? (multi-select)
5. What improves the most? (select up to 2)
6. What measurable impact have you seen?

**Key Metrics:**
- Engagement rate increase (%)
- Posts automated per week (#)
- Time saved (hours/week)
- Leads generated from content (#)

**Pro Tip:**  
"Strong decks show how AI replaces manual posting and improves engagement within weeks."

---

### 07. Events Management

**File:** `07-events.md`  
**Industry:** Events management AI, conference technology  
**Focus:** Planning efficiency, attendee experience, operational automation

**Key Questions:**
1. Who plans or manages the events?
2. What event management problem exists?
3. How does AI improve event planning or execution?
4. What does this integrate with? (multi-select)
5. What improves the most? (select up to 2)
6. What measurable impact have you seen?

**Key Metrics:**
- Events managed per month (#)
- Time saved per event (hours)
- Attendee engagement rate (%)
- Cost reduction per event (%)
- Net Promoter Score (NPS)

**Pro Tip:**  
"Strong event tech decks show how AI scales across multiple events without extra staff."

---

### 08. eCommerce

**File:** `08-ecommerce.md`  
**Industry:** eCommerce AI, online retail technology  
**Focus:** Revenue growth, conversion optimization, operational efficiency

**Key Questions:**
1. Who is the customer?
2. What commerce problem exists today?
3. How does AI improve eCommerce performance?
4. What platforms does this integrate with? (multi-select)
5. What improves the most? (select up to 2)
6. What measurable impact have you seen?

**Key Metrics:**
- Conversion rate lift (%)
- Average order value (AOV) increase (%)
- Revenue per visitor ($)
- Cart abandonment reduction (%)
- Time saved on merchandising (hours/week)

**Pro Tip:**  
"Strong eCommerce AI decks show revenue lift within weeks, not quarters."

---

## Common Design Patterns

### Three-Column Layout

**All industry screens use consistent layout:**

```
┌─────────────────────────────────────────────────────┐
│  Left (240px)  │  Center (Flex)  │  Right (320px)  │
│                │                 │                  │
│  Progress      │  Questions      │  AI Suggestions  │
│  Steps list    │  Form inputs    │  Insights        │
│  Back link     │  Navigation     │  Checklist       │
│                │                 │  Pro Tip         │
└─────────────────────────────────────────────────────┘
```

---

### Content Structure

**Every industry screen includes:**

1. **Title:** "Industry Focus: [Industry Name]"
2. **Subtitle:** Investor-focused description
3. **3-5 Questions:** Industry-specific
4. **Metrics Section:** Relevant KPIs
5. **Navigation:** Back + Continue buttons

---

### AI Suggestions Panel

**Every industry has:**

1. **AI Insights Card:** Industry-specific investor expectations
2. **3-4 Suggestion Buttons:** Actionable improvements
3. **Validation Checklist:** Real-time progress tracking
4. **Pro Tip:** Investor-focused advice

---

## Design System

### Colors (Consistent Across All Industries)

```
Primary: #0d5f4e (Emerald green)
Background: #FFFFFF (White)
Secondary BG: #F9FAFB (Light gray)
Border: #E5E7EB (Gray-200)
Text Primary: #111827 (Gray-900)
Text Secondary: #6B7280 (Gray-600)
Success: #10B981 (Green)
Warning: #F59E0B (Orange)
Error: #EF4444 (Red)
```

---

### Typography

```
Title: text-3xl (36px)
Subtitle: text-base (16px) text-gray-600
Labels: text-sm font-medium (14px)
Input Text: text-base (16px)
Helper Text: text-xs text-gray-500 (12px)
Pro Tip: text-xs italic text-gray-600 (12px)
```

---

### Spacing

```
Section Gaps: 24px (space-y-6)
Card Padding: 20px (p-5)
Input Padding: 12px 16px (px-4 py-3)
Button Padding: 12px 24px (px-6 py-3)
```

---

### Border Radius

```
Inputs: 8px (rounded-lg)
Cards: 12px (rounded-xl)
Buttons: 8px (rounded-lg)
```

---

## UX Principles

### Language Guidelines

**Every industry follows:**

1. **Industry-Specific Language:** Use vertical terminology
2. **Investor Focus:** Frame for investor understanding
3. **Outcome-Driven:** Show impact, not features
4. **Quantitative:** Use numbers and metrics
5. **Clear Buyers:** Define who pays

**Avoid:**
- Technical jargon (neural networks, algorithms)
- Generic claims ("better," "faster," "smarter")
- Vanity metrics (unless revenue-tied)
- Vague personas ("companies," "businesses")

---

### AI Behavior

**Consistent principles:**

1. **AI Suggests, Founder Decides:** No forced changes
2. **Contextual Suggestions:** Based on filled content
3. **Actionable Feedback:** Specific improvements
4. **Non-Intrusive:** Soft validation, no blocking
5. **Educational:** Teach why suggestions matter

---

### Validation Strategy

**Soft Validation (No Blocking):**

- ✓ Green checkmarks: Field complete
- ⚠ Yellow warnings: Could be improved
- ○ Gray circles: Not started

**Continue Button:**
- Enabled when minimum fields filled
- Doesn't require 100% completion
- Allows forward progress

---

## Implementation Guidelines

### Component Structure

**Each industry screen should:**

1. Import shared layout components
2. Define industry-specific content as constants
3. Use consistent state management
4. Apply validation logic
5. Render AI suggestions dynamically

---

### State Management

**Typical state structure:**

```typescript
interface IndustryFormData {
  // Common fields
  industry: string;
  
  // Industry-specific answers
  answers: Record<string, string>;
  
  // Metrics
  metrics: Array<{
    name: string;
    value: string;
  }>;
  
  // Validation
  isValid: boolean;
  completionPercentage: number;
}
```

---

### Validation Logic

**Per-industry validation:**

```typescript
const validateAISaaS = (data: AISaaSFormData) => {
  return (
    data.buyerSegment &&
    data.coreProblem.length >= 50 &&
    data.aiSolution.length >= 50
  );
};

const validateFinancial = (data: FinancialFormData) => {
  return (
    data.customer.length >= 50 &&
    data.financialProblem.length >= 75 &&
    data.aiSolution.length >= 75 &&
    data.valueDrivers.length >= 1
  );
};
```

---

## Remaining Industries (To Be Documented)

### In Master Spec (`01-industry.md`) But Not Yet Detailed:

9. **Healthcare** - Clinical validation, patient outcomes, HIPAA
10. **Cybersecurity** - Threat detection, zero-day, enterprise traction
11. **Logistics & Supply Chain** - Route optimization, delivery efficiency
12. **Education** - Learning outcomes, engagement, institutional adoption
13. **Legal / Professional Services** - Document automation, accuracy
14. **FinTech** - Separate from Financial Services, regulatory focus

**Status:** Content defined in `01-industry.md`, detailed specs pending

---

## Testing & Quality Assurance

### Test Cases Per Industry

**Each industry screen should be tested for:**

1. **Content Accuracy:** Industry-specific language correct
2. **Placeholder Relevance:** Examples match use cases
3. **Metric Appropriateness:** KPIs align with vertical
4. **AI Suggestion Quality:** Contextual and actionable
5. **Validation Logic:** Allows progress, flags issues
6. **Responsive Design:** Works on desktop, tablet, mobile

---

### Sample Test Flows

**Test 1: AI SaaS (Complete Flow)**
- Fill all fields with valid data
- Verify checklist updates in real-time
- Confirm Continue button enables
- Check AI suggestions appear correctly

**Test 2: Financial Services (Partial Flow)**
- Fill minimum required fields only
- Verify Continue button enables
- Confirm warnings appear for optional fields
- Test multi-select value drivers

**Test 3: Sales & Marketing (Error States)**
- Leave required fields empty
- Verify soft validation (yellow warnings)
- Confirm no blocking errors
- Test character limit enforcement

---

## Future Enhancements

### Planned Features

- [ ] Auto-suggest based on one-liner analysis
- [ ] Benchmark comparison to similar companies
- [ ] Industry-specific calculators (ROI, payback period)
- [ ] AI-generated content improvements (click to apply)
- [ ] Metric templates per use case
- [ ] Industry glossary (hover for definitions)
- [ ] Video tutorials per vertical
- [ ] Example decks from similar companies

---

### Advanced AI Features

- [ ] Smart placeholder suggestions based on company description
- [ ] Anomaly detection (metrics seem unrealistic)
- [ ] Competitive intelligence (how do you compare?)
- [ ] Investor persona matching (YC vs. traditional VC)
- [ ] Risk assessment per vertical

---

## File Organization

```
/docs/pitch-deck/
├── 00-index.md                  ← You are here
├── 01-industry.md               ← Master specification
├── 02-ai-saas.md                ← Detailed spec
├── 03-financial-services.md     ← Detailed spec
├── 04-sales-marketing.md        ← Detailed spec
├── 05-retail-commerce.md        ← Detailed spec
└── (06-13 to be created)        ← Future detailed specs
```

---

## Related Documentation

### Parent Documentation
- `/docs/progress-tracker.md` - Overall project progress
- `/docs/11-pitch-improve.md` - Core pitch deck features

### Design & Architecture
- `/docs/pitch-deck/wireframes.md` - UI wireframes and layout specifications
- `/docs/pitch-deck/mermaid-diagrams.md` - Workflows, user journeys, and logic flows
- `/docs/pitch-deck/09-ai-suggestions.md` - AI Suggestions panel design & implementation

### Implementation Files
- `/app/pitch-deck-wizard/page.tsx` - Main wizard component (to be created)
- `/app/pitch-deck/ai-suggestions-demo/page.tsx` - AI Suggestions demo page ✅

### Components
- `/components/pitch-deck/ai-suggestions/` - AI Suggestions panel components ✅

### Design Assets
- Lucide React icons (used throughout)
- Tailwind CSS v4 (styling system)

---

## Version History

**v1.0.0** - January 27, 2026
- Created master specification (01-industry.md)
- Created detailed specs for 4 industries:
  - AI SaaS (02)
  - Financial Services (03)
  - Sales & Marketing (04)
  - Retail & Commerce (05)
- Defined design system and UX principles
- Documented validation logic and state management

---

## Contributors

**Design:** StartupAI Design Team  
**Content Strategy:** Industry experts + investor feedback  
**Implementation:** StartupAI Development Team

---

## Contact & Support

**Questions about specifications?**  
→ Review detailed spec for specific industry

**Need to add new industry?**  
→ Follow template in `01-industry.md` section

**Implementation questions?**  
→ See state management and validation sections

---

**Status:** Design specifications complete for 4 of 13 industries  
**Next Step:** Create detailed specs for remaining 9 industries  
**Timeline:** Q1 2026

---

## Quick Links

- [Master Spec](./01-industry.md) - All 13 industries overview
- [AI SaaS Spec](./02-ai-saas.md) - Detailed specification
- [Financial Services Spec](./03-financial-services.md) - Detailed specification
- [Sales & Marketing Spec](./04-sales-marketing.md) - Detailed specification
- [Retail & Commerce Spec](./05-retail-commerce.md) - Detailed specification

---

**Last Updated:** January 27, 2026  
**Maintained By:** StartupAI Product Team