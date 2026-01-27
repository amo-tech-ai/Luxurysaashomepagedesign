# AI Prompt: Industry List Normalization

## Purpose
Simplify and normalize industry names to be investor-friendly, scannable, and consistent across the platform.

---

## Prompt Template

```
Rewrite the industry list to be simple, investor-friendly names.

Rules:
- Use common industry terms
- 1–3 words per item
- No slashes unless widely accepted (e.g., "Retail & eCommerce")
- No explanations
- Title Case
- Match how VCs label sectors

Input:
{{raw_industry_list}}

Output:
A clean Top 10 industry list.
```

---

## Example Input

```
1. Software as a Service (B2B/B2C)
2. HealthTech / Digital Health / MedTech
3. Financial Technology (FinTech)
4. Online Retail, E-commerce, and Marketplaces
5. Sales/Marketing Tools and Platforms
6. Communication & Collaboration
7. Mobile-First Apps
8. Education Technology
```

---

## Example Output

```
1. Enterprise SaaS
2. Health Care
3. Financial Services
4. Retail & eCommerce
5. Sales & Marketing
6. Communication
7. Mobile
8. Education
```

---

## Why This Format Works

### Investor-Friendly
- Matches how VCs categorize companies
- Used in pitch decks and investment memos
- Consistent with Crunchbase, PitchBook, CB Insights

### Scannable
- Short names (1-3 words)
- Easy to read in dropdowns
- Works in charts and filters

### Future-Proof
- Broad enough to accommodate sub-categories
- Doesn't use trendy jargon
- Aligns with 2025-2026 market classifications

---

## Top 10 Industries for AI Startups (2025–2026)

**Current Standard:**

```
1. Enterprise SaaS
2. Health Care
3. Financial Services
4. Retail & eCommerce
5. Sales & Marketing
6. Communication
7. Mobile
8. Education
```

---

## Usage in Pitch Deck Generator

### Industry Dropdown
Use these 8 clean names as primary categories

### Sub-Categories
Each industry has 7-10 specific sub-categories:

**Enterprise SaaS:**
- Sales & CRM
- Marketing Automation
- HR & Recruiting
- Analytics & BI
- Developer Tools
- Collaboration
- Security
- Customer Support
- Workflow Automation
- Data Management

**Health Care:**
- Telemedicine
- Digital Health
- Medical Devices
- Healthcare Analytics
- Mental Health
- Pharma Tech
- Care Management
- Health Insurance

**Financial Services:**
- Payments
- Lending
- Insurance
- Investment
- Banking
- Crypto & Web3
- Compliance
- Wealth Management

**Retail & eCommerce:**
- B2B Marketplace
- B2C Marketplace
- D2C Brands
- Vertical Commerce
- Retail Tech
- Supply Chain
- Fulfillment
- Inventory Management

**Sales & Marketing:**
- Marketing Automation
- Sales Enablement
- Advertising Tech
- Content Marketing
- SEO & Analytics
- Social Media
- Email Marketing
- Affiliate & Partners

**Communication:**
- Messaging
- Video Conferencing
- Team Collaboration
- Customer Communication
- VoIP & Telephony
- Unified Communications
- Contact Centers

**Mobile:**
- Mobile Apps
- Gaming
- Social
- Productivity
- Entertainment
- Utilities
- Mobile Commerce

**Education:**
- EdTech
- Online Learning
- Corporate Training
- K-12
- Higher Education
- Test Prep
- Language Learning
- Skill Development

---

## AI Enhancement Logic

When a founder inputs a one-liner, the AI can suggest a specific sub-category:

**Example 1:**
- One-liner: "AI SDRs that book qualified meetings for B2B sales teams"
- Industry: Sales & Marketing
- **AI Suggests:** Sales Enablement

**Example 2:**
- One-liner: "Stripe for embedded lending"
- Industry: Financial Services
- **AI Suggests:** Lending

**Example 3:**
- One-liner: "Telemedicine platform for mental health"
- Industry: Health Care
- **AI Suggests:** Mental Health

---

## Implementation Notes

### TypeScript Types
```typescript
export const INDUSTRIES: IndustryOption[] = [
  {
    id: 'enterprise-saas',
    name: 'Enterprise SaaS',
    subCategories: ['Sales & CRM', 'Marketing Automation', ...]
  },
  // ... other industries
];
```

### Dropdown Display
```html
<option value="enterprise-saas">Enterprise SaaS</option>
<option value="healthcare">Health Care</option>
<option value="financial-services">Financial Services</option>
```

### Auto-Description Generator
```typescript
const industryLabel = data.industry === 'enterprise-saas' ? 'Enterprise SaaS' : 
                     data.industry === 'healthcare' ? 'Health Care' :
                     // ... etc
```

---

## Migration Strategy

### Old → New Industry Mapping

| Old Industry | New Industry |
|-------------|-------------|
| SaaS | Enterprise SaaS |
| FinTech | Financial Services |
| HealthTech | Health Care |
| E-commerce | Retail & eCommerce |
| Marketplace | Retail & eCommerce |
| Consumer | Mobile |
| Enterprise | Enterprise SaaS |

### Backward Compatibility
- Check for old industry IDs
- Map to new IDs automatically
- Update database records in background

---

## Validation Rules

### Industry Name Format
- Title Case only
- No underscores
- No special characters except `&`
- Maximum 3 words
- Minimum 1 word

### Sub-Category Format
- Title Case
- Can include ampersands (`&`)
- Can include slashes for common terms (`B2B/B2C`)
- Maximum 4 words

---

## Quality Checks

### Before Adding New Industry
- [ ] Is it investor-recognized?
- [ ] Is it 1-3 words?
- [ ] Does it have 7-10 sub-categories?
- [ ] Does it match VC taxonomy?
- [ ] Is it future-proof (not trendy)?

### Before Adding Sub-Category
- [ ] Is it specific enough?
- [ ] Is it clear to investors?
- [ ] Does it match startup databases?
- [ ] Does it avoid jargon?

---

**Status:** ✅ Implemented  
**Last Updated:** January 27, 2026  
**Version:** 1.0.0
