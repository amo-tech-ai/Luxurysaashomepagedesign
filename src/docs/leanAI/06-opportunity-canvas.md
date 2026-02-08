# Screen 06: Opportunity Canvas

> **Question this screen answers:** "How will users actually adopt this?"
> **Status:** BUILT ✅ | **Route:** `/opportunity-canvas` | **File:** `page.tsx`  
> **Implementation:** `/app/opportunity-canvas/page.tsx`

---

## What This Screen Does (Plain English)

The Opportunity Canvas zooms in on customer adoption — the hardest part of any startup. While Lean Canvas maps the business model, Opportunity Canvas answers: "How do users discover, try, adopt, and pay for this?"

It features **10 sections focused on adoption strategy**, plus an **AI Risk Analyzer** that identifies the top 5 risks threatening user adoption.

---

## ASCII Wireframe (with sample data — TaskFlow AI)

```
+------------------------------------------------------------------+
|  OPPORTUNITY CANVAS                             [Save] [Export]  |
|  Imported from Lean Canvas ✓                                     |
+------------------------------------------------------------------+

+------------------------+------------------------+------------------------+
| USERS / CUSTOMERS      | PROBLEMS               | SOLUTIONS TODAY        |
| ====================== | ====================== | ======================|
|                        |                        |                        |
| Who experiences the    | What problems do they  | How do they solve it   |
| problem?               | have?                  | now?                   |
|                        |                        |                        |
| [Auto-filled from      | [Auto-filled from      | [Auto-filled from      |
|  Lean Canvas:          |  Lean Canvas:          |  Lean Canvas:          |
|  Customer Segments]    |  Problem]              |  Existing Alternatives]|
|                        |                        |                        |
| Solo SaaS founders,    | 1. Waste 10+ hrs/week  | 1. Notion + sheets     |
| pre-revenue,           |    on planning         | 2. Wing it / no plan   |
| bootstrapped,          | 2. Analysis paralysis  | 3. Sticky notes        |
| technical background   | 3. Don't know what to  |                        |
|                        |    work on first       | Why they fail:         |
| Editable ✎             |                        | - Too generic          |
|                        | Editable ✎             | - Not AI-powered       |
|                        |                        |                        |
|                        |                        | Editable ✎             |
+------------------------+------------------------+------------------------+

+------------------------+------------------------+
| SOLUTION IDEAS         | HOW USERS GET VALUE    |
| ====================== | ======================|
|                        |                        |
| What are you building? | When do they say "aha"?|
|                        |                        |
| [Auto-filled from      | First value moment:    |
| Lean Canvas: Solution] |                        |
|                        | User completes chat    |
| 1. AI 90-day plan from | intake → sees their    |
|    chat intake         | personalized 90-day    |
| 2. Weekly sprint tasks | plan in <5 minutes     |
| 3. Built-in validation |                        |
|                        | Time to value: <10 min |
| Editable ✎             |                        |
|                        | Journey:               |
|                        | 1. Sign up (Google)    |
|                        | 2. Chat about startup  |
|                        | 3. Review + edit plan  |
|                        | 4. Mark first task done|
|                        |    👈 VALUE MOMENT     |
|                        |                        |
|                        | Editable ✎             |
+------------------------+------------------------+

+------------------------+------------------------+
| ADOPTION STRATEGY      | USER METRICS           |
| ====================== | ======================|
|                        |                        |
| How do you get users?  | How do you measure     |
|                        | success?               |
| 1. Twitter threads     |                        |
|    (founder stories)   | Acquisition:           |
| 2. IndieHackers        | - Weekly signups       |
|    showcase            | - Source (Twitter/IH/  |
| 3. Reddit (r/SaaS)     |   Reddit)              |
| 4. Product Hunt        |                        |
| 5. Referrals           | Activation:            |
|                        | - Plans generated      |
| First 10 users:        | - Task completion %    |
| - Personal network     |                        |
| - #buildinpublic tweets| Retention:             |
|                        | - Day 7, 30 retention  |
| First 100 users:       | - Weekly active users  |
| - Community-led growth |                        |
|                        | Revenue:               |
| Editable ✎             | - Free → Paid %        |
|                        | - MRR                  |
|                        |                        |
|                        | Editable ✎             |
+------------------------+------------------------+

+------------------------+------------------------+
| BUSINESS CHALLENGES    | BUDGET                 |
| ====================== | ======================|
|                        |                        |
| What could go wrong?   | What resources do you  |
|                        | need?                  |
| 1. Solo founder risk   |                        |
|    (burnout, bandwidth)| Month 1-3 (MVP):       |
| 2. Distribution unclear| - $1,500 hosting + AI  |
|    (how to reach 100?  | - $500 tools           |
| 3. Notion builds this  | - $1,000 ads (test)    |
|    feature             | Total: $3K/mo          |
| 4. Users don't convert |                        |
|    free → paid         | Month 4-6 (Growth):    |
| 5. Competition is weak | - $2K hosting + AI     |
|    today, won't stay   | - $3K ads              |
|    weak                | - $1K tools            |
|                        | Total: $6K/mo          |
| Editable ✎             |                        |
|                        | Editable ✎             |
+------------------------+------------------------+

+-------------------------------------------------+
| BUSINESS BENEFITS / OUTCOMES                    |
| =============================================== |
|                                                 |
| What success looks like in 90 days              |
|                                                 |
| Revenue: $2,900 MRR (100 customers @ $29)       |
| Users: 500 signups, 100 paid (20% conversion)  |
| Retention: 60% Day 30 retention                 |
| Product: MVP shipped, 3 features validated      |
| Learning: Know CAC, LTV, conversion funnel      |
|                                                 |
| Editable ✎                                      |
+-------------------------------------------------+

+------------------------------------------------------------------+
|  AI RISK ANALYSIS                                                |
+------------------------------------------------------------------+

| Risk | Likelihood | Impact | Score | Mitigation |
|------|:----------:|:------:|:-----:|------------|
| 1. Solo founder burnout | 80% | HIGH | 🔴 9.6 | Add advisor, limit scope |
| 2. Distribution unclear | 70% | MED | 🟡 7.0 | Test 3 channels in Month 1 |
| 3. Notion builds this | 40% | HIGH | 🟡 6.4 | Speed to market, niche focus |
| 4. Low free→paid conversion | 60% | MED | 🟡 6.0 | Paywall core feature |
| 5. Weak retention | 50% | HIGH | 🟡 6.5 | Weekly habit triggers |

[Continue to 90-Day Plan ->]
```

---

## UI Microcopy

| Element | Text |
|---------|------|
| Page title | "Opportunity Canvas" |
| Subtitle | "From idea to paying customers — map the adoption journey" |
| Import indicator | "Imported from Lean Canvas ✓" |
| Section headers | Users/Customers, Problems, Solutions Today, Solution Ideas, How Users Get Value, Adoption Strategy, User Metrics, Business Challenges, Budget, Business Benefits |
| AI Risk section title | "AI Risk Analysis" |
| Risk score labels | "🔴 Critical (8-10)", "🟡 Watch (5-7)", "🟢 Low (0-4)" |
| Continue CTA | "Continue to 90-Day Plan" |

---

## What the AI Does (Opportunity Analyst Agent)

**Analysis 1: Risk Identification**
- Scans all 10 sections for implicit risks
- Combines with external knowledge (solo founder failure rates, market competition data)
- Calculates likelihood (0-100%) and impact (LOW/MED/HIGH)
- Scores each risk: `likelihood × impact_weight` (HIGH=2, MED=1.5, LOW=1)
- Ranks top 5 risks by score

**Analysis 2: Mitigation Suggestions**
- For each risk, generates 1-2 sentence mitigation strategy
- Prioritizes quick wins (can be done in 90 days)
- Links mitigations to 90-Day Plan tasks

**Analysis 3: Adoption Readiness**
- Checks if "How Users Get Value" defines a clear first value moment
- Validates that "Adoption Strategy" matches where users are
- Flags if time-to-value is >30 minutes (too long)

**Output:** Risk matrix (5 rows) + adoption readiness score (0-100)

---

## Figma-Ready Prompt

Design an opportunity and adoption canvas screen.

Layout: Grid layout (3 rows).
Row 1: 3 equal columns (Users, Problems, Solutions Today)
Row 2: 2 equal columns (Solution Ideas, How Users Get Value) + 2 columns below (Adoption, Metrics)
Row 3: 2 equal columns (Challenges, Budget) + 1 wide column (Benefits)
Below grid: AI Risk Analysis table (5 rows, 5 columns)

Each section: Reusable CanvasCard component (same as Lean Canvas). Auto-filled sections show "Imported from Lean Canvas ✓" badge with edit icon.

Risk table: Color-coded scores (red 8-10, amber 5-7, green 0-4). Likelihood and Impact use semantic badges. Mitigation column shows 1-line text, expandable.

Style: Same design system as Lean Canvas. Cream background, beige cards, emerald accents. Risk table has alternating row colors for readability.

---

## Connections

| Direction | Screen | What flows |
|-----------|--------|------------|
| Input <- | Screen 05: Lean Canvas | Auto-fills Users, Problems, Solutions, Solution Ideas |
| Output -> | Screen 10: 90-Day Plan | Top 5 risks become sprint tasks, Adoption strategy defines card priorities |

---

## Technical Implementation

**File:** `/app/opportunity-canvas/page.tsx` (~600 LOC)

**State Management:**
```typescript
interface OpportunityCanvasState {
  usersCustomers: string;
  problems: string;
  solutionsToday: string;
  solutionIdeas: string;
  howUsersUseIt: string;
  adoptionStrategy: string;
  userMetrics: string;
  businessChallenges: string;
  budget: string;
  businessBenefits: string;
}
```

**Data Import:**
```typescript
useEffect(() => {
  const leanSaved = localStorage.getItem('lean-canvas-v2');
  if (leanSaved) {
    const leanData = JSON.parse(leanSaved);
    setCanvas(prev => ({
      ...prev,
      usersCustomers: leanData.customerSegments || '',
      problems: leanData.problem || '',
      solutionsToday: leanData.existingAlternatives || '',
      solutionIdeas: leanData.solution || '',
    }));
  }
}, []);
```

**Features:**
- ✅ 10 editable sections
- ✅ Auto-import from Lean Canvas
- ✅ localStorage persistence (`opportunity-canvas` key)
- ✅ Auto-save every 30 seconds
- ⚠️ AI Risk Analysis (mock data, 5 hardcoded risks)
- ✅ Navigation to 90-Day Plan

**Status:** ✅ 100% complete (UI), 🔴 0% AI agent
