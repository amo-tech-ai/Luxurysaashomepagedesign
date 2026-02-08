# Validator Flow - 14-Section Report Structure

**Document:** 03-report-sections-content.md  
**Status:** Planning  
**Purpose:** Define all 14 report sections with content structure, AI prompts, and data schemas  
**Date:** February 6, 2026

---

## Report Overview

**Decision-First Principle:**  
- **Blocks 1-4:** Decision summary (verdict, tradeoffs, scores, next steps)
- **Block 5:** 14 evidence sections (collapsed by default, expand on demand)

**Total Sections:** 14 expandable sections  
**Source Agents:** All 7 agents contribute to different sections

---

## Section Mapping to Agents

| Section # | Title | Primary Agent | Supporting Agents |
|-----------|-------|---------------|-------------------|
| 1 | Problem Clarity | ExtractorAgent | ScoringAgent |
| 2 | Customer & Use Case | ExtractorAgent | ScoringAgent |
| 3 | Market Sizing | ResearchAgent | - |
| 4 | Competition | CompetitorAgent | - |
| 5 | Risks & Assumptions | ScoringAgent | All agents |
| 6 | MVP Scope | MVPAgent | ExtractorAgent |
| 7 | Technology Stack | ComposerAgent | MVPAgent |
| 8 | Revenue Model | ComposerAgent | ExtractorAgent |
| 9 | Team & Hiring | ComposerAgent | ExtractorAgent |
| 10 | Key Questions | ScoringAgent | All agents |
| 11 | Resources & Links | ResearchAgent | CompetitorAgent |
| 12 | Validation Status | VerifierAgent | All agents |
| 13 | Go-to-Market | ComposerAgent | CompetitorAgent |
| 14 | Next Steps | MVPAgent | ScoringAgent |

---

## SECTION 1: Problem Clarity

### Collapsed Preview
```
┌── 💡 Problem Clarity ──── 85/100 ──── [▶ Expand] ──┐
│  Clear pain point. 15/15 interviews confirmed daily  │
│  workflow frustration with manual task tracking...   │
└──────────────────────────────────────────────────────┘
```

### Expanded View
```
┌── 💡 Problem Clarity ──── 85/100 ──── [▼ Collapse] ──┐
│                                                       │
│  Problem Statement:                                   │
│  Remote teams waste 2+ hours per day tracking work    │
│  across fragmented tools (Slack, email, spreadsheets).│
│  This causes missed deadlines, duplicate work, and    │
│  team misalignment.                                   │
│                                                       │
│  ┌─────────────────────────────────────────────────┐  │
│  │ Pain Severity: HIGH                             │  │
│  │ Pain Frequency: Daily (multiple times per day)  │  │
│  │ Pain Urgency: Medium (annoying but not blocking)│  │
│  │ Willingness to Pay: Unvalidated                 │  │
│  └─────────────────────────────────────────────────┘  │
│                                                       │
│  Evidence:                                            │
│  • 15 customer interviews confirm frustration        │
│  • Average 2.3 hours/day lost to context switching   │
│  • 89% of teams use 3+ tools for task management     │
│                                                       │
│  Score Factors:                                       │
│  ✅ Problem is clearly articulated (+20)              │
│  ✅ High frequency (daily) (+25)                      │
│  ✅ Validated with interviews (+20)                   │
│  ⚠️ Willingness to pay not tested (-10)              │
│  ⚠️ Urgency is medium, not critical (-10)            │
│                                                       │
│  Final Score: 85/100                                  │
│                                                       │
│  ⚙️ Source: ExtractorAgent + ScoringAgent            │
│                                                       │
└───────────────────────────────────────────────────────┘
```

### Data Schema (JSON)
```json
{
  "problem_clarity": {
    "score": 85,
    "statement": "Remote teams waste 2+ hours per day...",
    "pain_severity": "HIGH",
    "pain_frequency": "Daily",
    "pain_urgency": "Medium",
    "willingness_to_pay": "Unvalidated",
    "evidence": [
      "15 customer interviews confirm frustration",
      "Average 2.3 hours/day lost",
      "89% use 3+ tools"
    ],
    "score_factors": [
      {
        "factor": "Problem clarity",
        "impact": "+20",
        "passed": true
      },
      {
        "factor": "High frequency",
        "impact": "+25",
        "passed": true
      },
      {
        "factor": "Validated with interviews",
        "impact": "+20",
        "passed": true
      },
      {
        "factor": "Willingness to pay",
        "impact": "-10",
        "passed": false
      },
      {
        "factor": "Urgency level",
        "impact": "-10",
        "passed": false
      }
    ]
  }
}
```

### AI Prompt (ScoringAgent)
```
You are evaluating the problem clarity of a startup idea.

Input:
{startup_profile from ExtractorAgent}

Output a JSON object with:
1. score (0-100)
2. statement (2-3 sentence problem description)
3. pain_severity (LOW/MEDIUM/HIGH)
4. pain_frequency (Rarely/Weekly/Daily/Hourly)
5. pain_urgency (LOW/MEDIUM/HIGH/CRITICAL)
6. willingness_to_pay (Unvalidated/Low/Medium/High)
7. evidence (array of 3-5 bullet points)
8. score_factors (array of factors with +/- impact)

Scoring rubric:
- Problem is clearly articulated: +20
- High frequency (daily+): +25
- High severity: +20
- Validated with customer research: +20
- Willingness to pay confirmed: +15
- Deductions for vague, low-frequency, or unvalidated problems

Use thinking mode: HIGH for comprehensive analysis.
```

---

## SECTION 2: Customer & Use Case

### Collapsed Preview
```
┌── 👥 Customer & Use Case ──── 82/100 ──── [▶ Expand] ──┐
│  Early-stage startup teams (5-20 people), remote-first,│
│  $20-50/mo budget, daily task tracking pain...         │
└─────────────────────────────────────────────────────────┘
```

### Expanded View
```
┌── 👥 Customer & Use Case ──── 82/100 ──── [▼ Collapse] ──┐
│                                                          │
│  Primary Customer Segment:                               │
│  Early-stage startup teams (5-20 employees), remote-     │
│  first, technical founders, B2B SaaS focus               │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Geography: US/EU                                   │  │
│  │ Budget: $20-50/mo per team                         │  │
│  │ Decision Maker: Founder or Ops Lead                │  │
│  │ Buying Process: Self-serve SaaS trial → paid       │  │
│  │ Current Tools: Slack (100%), Sheets (70%), Email   │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  Use Case:                                               │
│  Replace ad-hoc task tracking with AI-organized workflow │
│  that automatically pulls tasks from Slack messages,     │
│  emails, and mentions into a unified dashboard.          │
│                                                          │
│  Job to Be Done:                                         │
│  "When I join a daily standup, I want to see what       │
│  everyone is working on without asking, so I can make   │
│  informed decisions about priorities and blockers."     │
│                                                          │
│  Customer Journey:                                       │
│  1. Pain: Frustrated with scattered task tracking       │
│  2. Discovery: Google search or Product Hunt            │
│  3. Trial: Sign up, connect Slack, 5-min setup          │
│  4. Aha moment: See all team tasks in one view          │
│  5. Conversion: Upgrade to paid after 2 weeks           │
│  6. Expansion: Add integrations (GitHub, Email)         │
│                                                          │
│  ⚙️ Source: ExtractorAgent                              │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Data Schema (JSON)
```json
{
  "customer_use_case": {
    "score": 82,
    "primary_segment": "Early-stage startup teams (5-20 employees)",
    "geography": "US/EU",
    "budget": "$20-50/mo per team",
    "decision_maker": "Founder or Ops Lead",
    "buying_process": "Self-serve SaaS trial → paid",
    "current_tools": ["Slack (100%)", "Sheets (70%)", "Email"],
    "use_case": "Replace ad-hoc task tracking...",
    "job_to_be_done": "When I join a daily standup...",
    "customer_journey": [
      "Pain: Frustrated with scattered tracking",
      "Discovery: Google search or Product Hunt",
      "Trial: Sign up, connect Slack, 5-min setup",
      "Aha moment: See all team tasks in one view",
      "Conversion: Upgrade after 2 weeks",
      "Expansion: Add integrations"
    ]
  }
}
```

---

## SECTION 3: Market Sizing

### Collapsed Preview
```
┌── 💼 Market Sizing ──── $12B TAM ──── [▶ Expand] ──┐
│  TAM $12B · SAM $2.4B · SOM $24M · 15% CAGR        │
└────────────────────────────────────────────────────┘
```

### Expanded View
```
┌── 💼 Market Sizing ──── $12B TAM ──── [▼ Collapse] ──┐
│                                                       │
│  ┌──────────────────────────────────────────────┐    │
│  │                                              │    │
│  │  ┌──────────┐  →  ┌──────────┐  →  ┌──────────┐ │
│  │  │   TAM    │     │   SAM    │     │   SOM    │ │
│  │  │  $12B    │     │  $2.4B   │     │  $24M    │ │
│  │  │  Total   │     │ SMB SaaS │     │  Year 1  │ │
│  │  └──────────┘     └──────────┘     └──────────┘ │
│  │                                              │    │
│  │  SAM: 20% of TAM    SOM: 1% of SAM          │    │
│  │                                              │    │
│  └──────────────────────────────────────────────┘    │
│                                                       │
│  TAM (Total Addressable Market): $12B                │
│  Global project management software market for       │
│  all company sizes and industries                    │
│                                                       │
│  SAM (Serviceable Addressable Market): $2.4B         │
│  SMB segment (5-500 employees) in SaaS/tech          │
│  industries, remote-first teams                      │
│                                                       │
│  SOM (Serviceable Obtainable Market): $24M           │
│  Realistic Year 1 capture: 1% of SAM                 │
│  Assumes 350 customers at $70K ACV                   │
│                                                       │
│  Growth Rate: 15% CAGR (2025-2030)                   │
│                                                       │
│  Methodology:                                         │
│  Top-down from Gartner project management market     │
│  report ($45B), filtered for:                        │
│  • SMB segment (20% = $9B)                           │
│  • Remote-first adoption (30% = $2.7B)               │
│  • Adjusted for SaaS delivery model                  │
│                                                       │
│  ┌────────────────────────────────────────────────┐  │
│  │ 📎 Citations (3 sources):                     │  │
│  │                                                │  │
│  │ 1. Gartner: Project Management Software       │  │
│  │    Market 2025 Report                         │  │
│  │    https://gartner.com/en/... [View]          │  │
│  │                                                │  │
│  │ 2. Statista: Remote Work Adoption Trends      │  │
│  │    2024-2026                                   │  │
│  │    https://statista.com/... [View]            │  │
│  │                                                │  │
│  │ 3. McKinsey: Future of Work Analysis 2025     │  │
│  │    https://mckinsey.com/... [View]            │  │
│  │                                                │  │
│  └────────────────────────────────────────────────┘  │
│                                                       │
│  ⚙️ Source: ResearchAgent                            │
│  Tools: Google Search + URL Context                  │
│  Duration: 12.4 seconds                              │
│                                                       │
└───────────────────────────────────────────────────────┘
```

### Data Schema (JSON)
```json
{
  "market_sizing": {
    "tam": "$12B",
    "sam": "$2.4B",
    "som": "$24M",
    "growth_rate": "15% CAGR",
    "methodology": "Top-down from Gartner...",
    "tam_description": "Global project management software...",
    "sam_description": "SMB segment (5-500 employees)...",
    "som_description": "Year 1 capture: 1% of SAM...",
    "citations": [
      {
        "title": "Gartner Project Management Software Market 2025",
        "url": "https://gartner.com/...",
        "relevance": "Market size baseline"
      },
      {
        "title": "Statista Remote Work Adoption Trends",
        "url": "https://statista.com/...",
        "relevance": "Remote-first filtering"
      },
      {
        "title": "McKinsey Future of Work Analysis 2025",
        "url": "https://mckinsey.com/...",
        "relevance": "Growth rate projection"
      }
    ]
  }
}
```

### AI Prompt (ResearchAgent)
```
You are researching the market size for a startup idea.

Input:
{startup_profile from ExtractorAgent}

Use Google Search + URL Context tools to find:
1. TAM (Total Addressable Market) - global market size
2. SAM (Serviceable Addressable Market) - filtered by segment, geography
3. SOM (Serviceable Obtainable Market) - realistic Year 1 capture (0.5-2% of SAM)
4. Growth rate (CAGR for next 5 years)
5. Methodology explanation
6. At least 3 citations with URLs

Search queries to try:
- "[industry] market size 2025"
- "[category] SaaS market report"
- "SMB [category] market size"
- "remote work [category] adoption"

Output JSON with tam, sam, som, growth_rate, methodology, descriptions, and citations array.

CRITICAL: citations array must have at least 3 sources with URLs.
```

---

## SECTION 4: Competition

### Collapsed Preview
```
┌── 🏢 Competition ──── 5 found ──── [▶ Expand] ──┐
│  Asana (high threat) · Trello (medium) · Linear  │
│  (high) · Monday (medium) · Notion (low)...      │
└──────────────────────────────────────────────────┘
```

### Expanded View
```
┌── 🏢 Competition ──── 5 competitors ──── [▼ Collapse] ──┐
│                                                          │
│  Direct Competitors (3):                                 │
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │ Name      │ Threat │ Strengths     │ Weaknesses  │    │
│  │───────────│────────│───────────────│─────────────│    │
│  │ Linear    │ 🔴 High│ Dev-focused,  │ Enterprise  │    │
│  │           │        │ fast UI       │ only, $$$   │    │
│  │───────────│────────│───────────────│─────────────│    │
│  │ Asana     │ 🔴 High│ Full-featured,│ Complex UI, │    │
│  │           │        │ established   │ slow setup  │    │
│  │───────────│────────│───────────────│─────────────│    │
│  │ Monday    │ 🟡 Med │ Visual,       │ Expensive,  │    │
│  │           │        │ flexible      │ overwhelming│    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  Indirect Competitors (2):                               │
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │ Trello    │ 🟡 Med │ Simple, free  │ Limited     │    │
│  │           │        │ tier          │ features    │    │
│  │───────────│────────│───────────────│─────────────│    │
│  │ Notion    │ 🟢 Low │ All-in-one    │ Not task-   │    │
│  │           │        │ workspace     │ focused     │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  Market Gaps:                                            │
│  • No AI-native task extraction from existing tools      │
│  • Pricing too high for early-stage startups             │
│  • Setup takes >1 hour (you promise 5 min)               │
│  • Mobile experience lacking in most tools               │
│                                                          │
│  Your Differentiation:                                   │
│  1. AI-powered task extraction from Slack/Email          │
│  2. 5-minute setup (vs 1-2 hours)                        │
│  3. $29/mo pricing (vs $50-100/mo)                       │
│  4. Mobile-first design                                  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ 📎 Citations (5 sources):                         │  │
│  │                                                    │  │
│  │ 1. Linear - https://linear.app                    │  │
│  │ 2. Asana - https://asana.com                       │  │
│  │ 3. Monday - https://monday.com                     │  │
│  │ 4. Trello - https://trello.com                     │  │
│  │ 5. Notion - https://notion.so                      │  │
│  │                                                    │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ⚙️ Source: CompetitorAgent                             │
│  Tools: Google Search + URL Context                     │
│  Duration: 18.7 seconds                                 │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Data Schema (JSON)
```json
{
  "competition": {
    "direct_competitors": [
      {
        "name": "Linear",
        "threat_level": "HIGH",
        "strengths": ["Dev-focused", "Fast UI"],
        "weaknesses": ["Enterprise only", "$$$"],
        "url": "https://linear.app"
      },
      {
        "name": "Asana",
        "threat_level": "HIGH",
        "strengths": ["Full-featured", "Established"],
        "weaknesses": ["Complex UI", "Slow setup"],
        "url": "https://asana.com"
      },
      {
        "name": "Monday",
        "threat_level": "MEDIUM",
        "strengths": ["Visual", "Flexible"],
        "weaknesses": ["Expensive", "Overwhelming"],
        "url": "https://monday.com"
      }
    ],
    "indirect_competitors": [
      {
        "name": "Trello",
        "threat_level": "MEDIUM",
        "strengths": ["Simple", "Free tier"],
        "weaknesses": ["Limited features"],
        "url": "https://trello.com"
      },
      {
        "name": "Notion",
        "threat_level": "LOW",
        "strengths": ["All-in-one"],
        "weaknesses": ["Not task-focused"],
        "url": "https://notion.so"
      }
    ],
    "market_gaps": [
      "No AI-native task extraction",
      "Pricing too high for early-stage",
      "Setup takes >1 hour",
      "Mobile experience lacking"
    ],
    "differentiation": [
      "AI-powered task extraction from Slack/Email",
      "5-minute setup (vs 1-2 hours)",
      "$29/mo pricing (vs $50-100/mo)",
      "Mobile-first design"
    ]
  }
}
```

### AI Prompt (CompetitorAgent)
```
You are analyzing the competitive landscape for a startup.

Input:
{startup_profile from ExtractorAgent}

Use Google Search + URL Context tools to find:
1. 3-5 direct competitors (same solution, same customer)
2. 2-3 indirect competitors (alternative solutions)
3. For each competitor:
   - Name
   - Threat level (LOW/MEDIUM/HIGH)
   - 2-3 key strengths
   - 2-3 key weaknesses
   - URL
4. Market gaps (what competitors don't do well)
5. Your differentiation (how you're uniquely positioned)

Search queries:
- "[problem] software alternatives"
- "[customer segment] task management tools"
- "Linear vs Asana vs Monday"
- "[solution] competitors"

Output JSON with direct_competitors, indirect_competitors, market_gaps, and differentiation arrays.

CRITICAL: Must include URLs for all competitors found.
```

---

## SECTION 5: Risks & Assumptions

### Collapsed Preview
```
┌── ⚠️ Risks & Assumptions ──── 5 risks ──── [▶ Expand] ──┐
│  Pricing not validated · Crowded market · Limited       │
│  runway · AI accuracy · Team gaps...                     │
└──────────────────────────────────────────────────────────┘
```

### Expanded View
```
┌── ⚠️ Risks & Assumptions ──── 5 risks ──── [▼ Collapse] ──┐
│                                                            │
│  🔴 CRITICAL RISKS (2):                                    │
│                                                            │
│  1. Pricing not validated — will SMBs pay $29/mo?         │
│     Why fatal: No revenue = no business                   │
│     Mitigation: Landing page with payment form, target    │
│                 10 beta signups before building           │
│                                                            │
│  2. Crowded market — unclear differentiation at scale     │
│     Why fatal: Hard to stand out vs Asana, Linear         │
│     Mitigation: Competitor teardown, identify 3 unique    │
│                 value props, test messaging A/B           │
│                                                            │
│  🟡 IMPORTANT RISKS (2):                                   │
│                                                            │
│  3. Limited runway — 8 months to reach revenue            │
│     Why important: Need to show traction for fundraising  │
│     Mitigation: Focus on MVP, defer nice-to-haves,        │
│                 track burn vs milestones weekly           │
│                                                            │
│  4. AI accuracy — task extraction may be noisy            │
│     Why important: Core value prop depends on accuracy    │
│     Mitigation: Test with 100 real Slack messages,        │
│                 measure F1 score, add human review        │
│                                                            │
│  🟢 MINOR RISKS (1):                                       │
│                                                            │
│  5. Team dependency — no designer or growth marketer yet  │
│     Why minor: Can outsource or delay                     │
│     Mitigation: Contract designer for MVP, founder-led    │
│                 growth initially                           │
│                                                            │
│  Key Assumptions to Test:                                 │
│  ✅ Founders have task tracking pain (validated)           │
│  ⚠️ They will pay $29/mo (NOT validated)                  │
│  ⚠️ 5-min setup is a differentiator (NOT validated)       │
│  ⚠️ AI can extract tasks accurately (NOT validated)       │
│  ⚠️ Slack integration is enough (Email/GH needed?)        │
│                                                            │
│  ⚙️ Source: ScoringAgent (thinking: HIGH)                 │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Data Schema (JSON)
```json
{
  "risks_assumptions": {
    "critical_risks": [
      {
        "risk": "Pricing not validated",
        "why_fatal": "No revenue = no business",
        "mitigation": "Landing page with payment form..."
      },
      {
        "risk": "Crowded market",
        "why_fatal": "Hard to stand out vs Asana, Linear",
        "mitigation": "Competitor teardown, identify 3 unique..."
      }
    ],
    "important_risks": [
      {
        "risk": "Limited runway",
        "why_important": "Need traction for fundraising",
        "mitigation": "Focus on MVP, defer nice-to-haves..."
      },
      {
        "risk": "AI accuracy",
        "why_important": "Core value prop depends on accuracy",
        "mitigation": "Test with 100 Slack messages..."
      }
    ],
    "minor_risks": [
      {
        "risk": "Team dependency",
        "why_minor": "Can outsource or delay",
        "mitigation": "Contract designer for MVP..."
      }
    ],
    "assumptions": [
      {
        "assumption": "Founders have task tracking pain",
        "validated": true
      },
      {
        "assumption": "They will pay $29/mo",
        "validated": false
      },
      {
        "assumption": "5-min setup is differentiator",
        "validated": false
      },
      {
        "assumption": "AI can extract tasks accurately",
        "validated": false
      },
      {
        "assumption": "Slack integration is enough",
        "validated": false
      }
    ]
  }
}
```

---

## SECTION 6-14 SUMMARY

Due to length constraints, here's a high-level overview of the remaining 8 sections:

### Section 6: MVP Scope
- 3-phase roadmap (Weeks 1-4, 5-8, 9-12)
- Core features per phase
- Technical feasibility assessment
- Timeline and resource needs

### Section 7: Technology Stack
- Frontend/Backend/Infrastructure choices
- Build vs Buy analysis
- Technical risks with mitigations
- Feasibility score (LOW/MEDIUM/HIGH)

### Section 8: Revenue Model
- Recommended model (SaaS subscription)
- Alternative models (Freemium, Per-seat)
- Unit economics (CAC, LTV, payback period)
- Pricing validation status

### Section 9: Team & Hiring
- Current gaps (roles needed)
- Priority hiring plan (P1, P2, P3)
- Monthly burn rate
- Advisory needs

### Section 10: Key Questions
- 🔴 FATAL questions (1-2)
- 🟡 IMPORTANT questions (2-3)
- 🟢 MINOR questions (1-2)
- Validation methods for each

### Section 11: Resources & Links
- 📊 Reports (market research)
- 🏢 Competitors (websites)
- 📚 Frameworks (methodologies)
- 🔧 Tools (tech stack)

### Section 12: Validation Status
- Verification result (✅ Verified or ⚠️ Partial)
- Warnings (missing sections, low citation count)
- Quality score
- Next validation steps

### Section 13: Go-to-Market
- Primary channel (LinkedIn, PH, SEO)
- Customer acquisition strategy
- Messaging & positioning
- Launch plan

### Section 14: Next Steps
- Top 7 actions (prioritized)
- Timeline (next 30/60/90 days)
- Success metrics
- Decision points

---

## Next Document

**04-ai-agent-specifications.md** — Detailed prompts and schemas for all 7 agents

---

**Status:** Report structure complete  
**Next:** Define AI agent specifications
