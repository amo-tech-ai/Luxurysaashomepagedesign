# Industry Focus: Retail & Commerce - Wizard Screen Specification

**Industry:** Retail & Commerce AI  
**Step:** 2 of 5 — Industry Focus  
**Status:** Design Specification  
**Last Updated:** January 27, 2026

---

## Goal

Help founders frame their pitch using retail-specific language, metrics, and investor expectations.

---

## Audience

- Retail tech founders
- eCommerce and omnichannel startups
- DTC technology platforms
- Pre-Seed to Seed stage

---

## Tone

- Professional
- Practical
- Investor-focused
- Data-driven
- No hype

---

## Layout Structure

### Three-Panel Wizard Layout

**Left Panel:** Wizard steps (Step 2 highlighted)  
**Main Panel:** Industry-specific questions  
**Right Panel:** AI suggestions

**Background:** Light (#FFFFFF)  
**Spacing:** Clean, generous  
**UI:** Minimal, retail-focused

---

## Left Panel — Context

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

### Helper Text

```
"Tailor your deck to retail investor expectations."
```

---

## Main Panel — Content (Retail-Specific)

### Title

```
Industry Focus: Retail & Commerce
```

### Subtitle

```
Tailor your pitch to retail and eCommerce investors.
```

**Typography:** Large title, smaller subtitle in gray

---

### Section 1 — Retail Problem

**Label:**
```
What retail problem are you solving?
```

**Input Type:** Textarea (3 rows)

**Placeholder:**
```
Retail brands struggle to forecast demand accurately across online and in-store channels.
```

**Character Limit:** 200 characters

**Helper Text:**
```
Frame problem around revenue loss, margin compression, or operational inefficiency.
```

---

### Section 2 — Retail Customer

**Label:**
```
Who is the customer?
```

**Input Type:** Multi-select (select all that apply)

**Options:**
- ☐ DTC brands (Direct-to-Consumer)
- ☐ Marketplaces (e.g., Amazon sellers)
- ☐ Brick-and-mortar retailers
- ☐ Omnichannel retailers (online + stores)

**Helper Text:**
```
Select all customer types you serve. Be specific about size (SMB, mid-market, enterprise).
```

**Text Field (appears after selection):**
```
Additional details (optional):
Placeholder: "Mid-market DTC brands with $5M–$50M annual revenue"
```

---

### Section 3 — Retail Value Driver

**Label:**
```
Primary value driver
```

**Input Type:** Single select (radio buttons)

**Options:**
- ○ Revenue uplift
- ○ Cost reduction
- ○ Inventory efficiency
- ○ Customer retention

**Helper Text:**
```
Choose the #1 business outcome for retail buyers.
```

---

### Section 4 — Proof & Metrics

**Label:**
```
What measurable impact have you seen?
```

**Input Type:** Flexible metric fields (2-4 metrics)

**Field Structure:**
- Metric name (dropdown + custom option)
- Metric value (text input with unit)

**Suggested Metrics (shown as hints/dropdown):**
- Conversion rate (%)
- Average order value (AOV) ($)
- Inventory turnover (X per year)
- Gross margin improvement (%)
- Cart abandonment reduction (%)
- Stockout reduction (%)
- Customer lifetime value (LTV) ($)
- Cost per acquisition (CAC) ($)

**Example Entry:**
```
Metric: Conversion rate
Value: 3.5% (up from 2.8%)

Metric: Inventory turnover
Value: 8x per year (vs. 5x industry avg)
```

**Helper Text:**
```
Quantify impact per store, per SKU, or per month to show scale.
```

---

### Navigation

**Primary CTA:**
```
Button: "Continue →"
Style: Green background, white text
State: Enabled when 3 of 4 sections filled
```

**Secondary CTA:**
```
Button: "Back"
Style: Gray text, no background
```

---

## Right Panel — AI Suggestions (Retail-Specific)

### Title

```
AI Suggestions (Retail Investors)
```

**Background:** Light green card  
**Icon:** Lightbulb

---

### Insights (Educational Content)

**Display as bullet list:**

```
• Retail investors expect clear impact on revenue or margins.
• Mention where in the value chain you operate: demand, supply, or fulfillment.
• Strong decks quantify impact per store, per SKU, or per month.
```

**Typography:** Small, dark gray, line height 1.6

---

### Action Buttons (AI Enhancements)

**Title:**
```
Suggested Improvements
```

**Buttons:**
1. "Frame problem around lost revenue"
2. "Add per-store or per-SKU metrics"
3. "Clarify omnichannel impact"

**Visual Treatment:**
- Small buttons
- Soft gray background
- Sparkle icon prefix
- Hover: Darker gray
- Click: Apply AI suggestion (future)

---

### Auto-Suggestion Example

**Trigger:** User selects "Inventory efficiency" as value driver

**Suggestion Card:**
```
💡 Consider framing the problem around lost revenue due to stockouts.

Example: "Retailers lose $X per SKU per year due to stockouts and overstock."
```

**CTA (optional):**
```
Button: "Use this framing"
```

---

### Validation Checklist (Auto-Updated)

**Title:**
```
Checklist
```

**Items:**
- ✓ Problem defined  
- ✓ Customer segment clear  
- ✓ Value driver selected  
- ⚠ Add retail benchmark metric

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
Strong retail decks show impact on revenue or margin within one season or quarter.
```

**Typography:** Extra small, italic, dark gray

---

## UX Rules

### Language Guidelines

**Use:**
- Retail language: SKU, inventory, turnover, margin, conversion
- Operational terms: stockout, overstock, shrinkage, fulfillment
- Financial metrics: AOV, LTV, CAC, margin, revenue per store

**Avoid:**
- Generic SaaS terms: "engagement," "activation," "retention" (unless tied to retail)
- Technical jargon: algorithms, ML models
- Vague claims: "better decisions," "smarter inventory"

---

### Focus Areas

1. **Revenue Impact:** Show how AI increases sales
2. **Margin Improvement:** Demonstrate cost savings or efficiency
3. **Speed to Value:** How quickly do retailers see results?
4. **Per-Unit Economics:** Frame metrics per store, per SKU, per month

---

### AI Behavior

- AI suggests, founder decides
- No auto-fill without permission
- Retail-specific suggestions only
- Practical, not theoretical

---

## Content Strategy

### What Retail Investors Expect

1. **Clear Value Chain Position:** Are you demand (forecasting), supply (inventory), or fulfillment (logistics)?
2. **Per-Store/Per-SKU Metrics:** Show impact at unit economics level
3. **Omnichannel Awareness:** Address online + offline if relevant
4. **Seasonality Proof:** Can your solution handle holiday spikes?
5. **Speed of Implementation:** Retailers need fast ROI (< 1 quarter)

---

### Key Metrics for Retail & Commerce

**Revenue Metrics:**
- Conversion rate (%)
- Average order value (AOV) ($)
- Revenue per store ($)
- Revenue per SKU ($)

**Efficiency Metrics:**
- Inventory turnover (X per year)
- Stockout rate (%)
- Overstock rate (%)
- Fulfillment cost per order ($)

**Profitability Metrics:**
- Gross margin (%)
- Gross margin improvement (%)
- Cost per acquisition (CAC) ($)
- Customer lifetime value (LTV) ($)

**Customer Metrics:**
- Customer retention rate (%)
- Cart abandonment rate (%)
- Repeat purchase rate (%)

---

### Common Mistakes to Avoid

- ❌ Missing per-store or per-SKU impact
- ❌ Ignoring omnichannel complexity (online vs. offline)
- ❌ Vague customer segments ("retail companies")
- ❌ No mention of seasonality handling
- ❌ Focusing on features instead of business outcomes

---

## Design System

### Colors

- **Primary:** `#0d5f4e` (Emerald green)
- **Background:** `#FFFFFF` (White)
- **Secondary Background:** `#F9FAFB` (Light gray)
- **Border:** `#E5E7EB` (Gray-200)
- **Success:** `#10B981` (Green)
- **Warning:** `#F59E0B` (Orange)
- **Accent (Retail):** `#7C3AED` (Purple - commerce)

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

### Example 1: Demand Forecasting

**Problem:**  
"Retailers lose $50K per store annually due to stockouts and overstock from inaccurate demand forecasts."

**Customer:**
- ☑ Omnichannel retailers
  - "Mid-market fashion brands with 20–100 stores"

**Value Driver:**
- ○ Inventory efficiency

**Metrics:**
- Stockout reduction: 40% (from 12% to 7%)
- Inventory turnover: 8x per year (vs. 5x baseline)
- Gross margin improvement: 4%

---

### Example 2: Personalization Engine

**Problem:**  
"eCommerce brands struggle to personalize at scale, leaving 60% of visitors with generic experiences."

**Customer:**
- ☑ DTC brands
  - "DTC brands with 100K+ monthly visitors"

**Value Driver:**
- ○ Revenue uplift

**Metrics:**
- Conversion rate: 3.8% (up from 2.5%)
- AOV: $145 (up from $120)
- Revenue uplift: $2M per year

---

### Example 3: Dynamic Pricing

**Problem:**  
"Retailers use static pricing, missing revenue opportunities during high-demand periods."

**Customer:**
- ☑ Marketplaces
- ☑ DTC brands
  - "Mid-market brands selling on Amazon and Shopify"

**Value Driver:**
- ○ Revenue uplift

**Metrics:**
- Revenue uplift: 18%
- Gross margin: 42% (up from 38%)
- Price optimization per SKU: 2x per week

---

## Sample Content (Auto-Fill)

**Default Example (if user clicks "Show me an example"):**

**Problem:**  
"Retailers lose sales due to inaccurate demand forecasting."

**Customer:**  
"Mid-market DTC brands"

**Value Driver:**  
"Inventory efficiency"

**Metric:**  
"15% reduction in stockouts"

---

## Validation Logic

### Continue Button Enabled When:

**Minimum Requirements:**
- Problem filled (at least 75 chars)
- At least 1 customer type selected
- Value driver selected

**Ideal State:**
- All sections filled
- Customer details provided
- At least 2 metrics entered

---

## AI Suggestion Logic

### Trigger: "Frame problem around lost revenue"

**When to show:**
- Problem doesn't mention: "revenue," "sales," "loss," "cost," "$"
- OR problem is < 100 characters

**Suggested improvement:**
"Quantify problem with revenue loss. Example: 'Retailers lose $X per store per year due to stockouts.'"

---

### Trigger: "Add per-store or per-SKU metrics"

**When to show:**
- Metrics provided don't mention: "per store," "per SKU," "per month," "per location"
- OR no metrics provided

**Suggested improvement:**
"Frame metrics at unit economics level. Example: '$50K lost per store annually' or '15% stockout reduction per SKU.'"

---

### Trigger: "Clarify omnichannel impact"

**When to show:**
- "Omnichannel retailers" selected
- But no mention of: "online," "offline," "stores," "website," "channels"

**Suggested improvement:**
"Explain impact on both online and offline channels. Example: 'Improves demand forecasting across web, app, and 50+ stores.'"

---

## Future Enhancements

- [ ] Revenue calculator (input: conversion lift, output: annual revenue)
- [ ] Benchmark comparison to retail industry standards
- [ ] Seasonality impact visualizer
- [ ] Per-store/per-SKU metric templates
- [ ] AI-generated retail value props

---

## Technical Notes

### State Management

```typescript
interface RetailCommerceFormData {
  problem: string;
  customerTypes: Array<'dtc' | 'marketplace' | 'brick-and-mortar' | 'omnichannel'>;
  customerDetails?: string;
  valueDriver: 'revenue' | 'cost' | 'inventory' | 'retention';
  metrics: Array<{
    name: string;
    value: string;
  }>;
}
```

### Validation Rules

```typescript
const isValid = (data: RetailCommerceFormData) => {
  return (
    data.problem.length >= 75 &&
    data.customerTypes.length >= 1 &&
    data.valueDriver !== null
  );
};
```

---

**Status:** Design specification complete — Ready for implementation  
**Next Step:** Build React component based on this spec  
**Related Docs:** `/docs/pitch-deck/01-industry.md` (parent spec)
