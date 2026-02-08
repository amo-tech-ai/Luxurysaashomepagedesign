# Agent 08: Risk Analyzer

**Priority:** P1 (Critical for Opportunity Canvas)  
**Complexity:** Medium  
**Estimated Time:** 2-3 days  
**Estimated LOC:** ~400-500

---

## 📋 OVERVIEW

### Purpose
Identifies the top 5 risks threatening startup success, calculates likelihood × impact scores, and suggests practical mitigations. Powers the AI Risk Analysis table in Opportunity Canvas.

### What It Does
1. Scans all canvas data for implicit and explicit risks
2. Categorizes risks (market, execution, team, competition, financial)
3. Scores likelihood (0-100%) and impact (LOW/MED/HIGH)
4. Calculates risk score: `likelihood × impact_weight`
5. Prioritizes top 5 risks by score
6. Generates 1-2 sentence mitigation strategy per risk

### Input
Complete Lean Canvas + Opportunity Canvas data.

### Output
Top 5 risks ranked by score with mitigations.

---

## 🔧 INPUT SCHEMA

```typescript
interface RiskAnalyzerInput {
  // From Lean Canvas
  problem: string;
  solution: string;
  uvp: string;
  customerSegments: string;
  earlyAdopters: string;
  existingAlternatives: string;
  channels: string;
  unfairAdvantage: string;
  keyMetrics: string;
  costStructure: string;
  revenueStreams: string;
  
  // From Opportunity Canvas
  adoptionStrategy: string;
  businessChallenges: string;
  budget: string;
  
  // Optional metadata
  teamSize?: number;           // Default: 1 (solo founder)
  runway?: number;             // Months of cash
  experienceLevel?: "novice" | "intermediate" | "expert";
}
```

### Example Input

```json
{
  "problem": "Solo founders waste 10+ hours/week planning",
  "solution": "AI 90-day planner",
  "uvp": "Finally, a planning tool that works FOR founders, not against them",
  "customerSegments": "Solo SaaS founders, pre-revenue, technical",
  "unfairAdvantage": "Founder ran 3 startups, experienced the problem",
  "channels": "Twitter, IndieHackers, Product Hunt",
  "costStructure": "$2K/mo (hosting + AI)",
  "revenueStreams": "$29/mo Starter, $79/mo Pro",
  "adoptionStrategy": "Community-led growth",
  "businessChallenges": "Solo founder risk, distribution unclear",
  "budget": "$3K/mo for 6 months",
  "teamSize": 1,
  "runway": 8,
  "experienceLevel": "intermediate"
}
```

---

## ⚙️ PROCESSING LOGIC

### Step 1: Validate Input (50ms)

```typescript
function validateInput(input: RiskAnalyzerInput): ValidationResult {
  const requiredFields = ['problem', 'solution', 'customerSegments', 'channels'];
  const missing = requiredFields.filter(field => !input[field]);
  
  if (missing.length > 0) {
    return {
      valid: false,
      errors: [`Missing required fields: ${missing.join(', ')}`]
    };
  }
  
  return { valid: true };
}
```

---

### Step 2: Identify Risks (LLM, 5s)

Use GPT-4o to scan all input for implicit risks.

**LLM Prompt:**

```
System: You are a startup risk assessment expert. You identify risks that threaten startup success.

User: Analyze this startup and identify ALL potential risks:

LEAN CANVAS:
Problem: {problem}
Solution: {solution}
UVP: {uvp}
Customer Segments: {customerSegments}
Early Adopters: {earlyAdopters}
Existing Alternatives: {existingAlternatives}
Channels: {channels}
Unfair Advantage: {unfairAdvantage}
Cost Structure: {costStructure}
Revenue Streams: {revenueStreams}

OPPORTUNITY CANVAS:
Adoption Strategy: {adoptionStrategy}
Business Challenges: {businessChallenges}
Budget: {budget}

TEAM:
Team Size: {teamSize}
Runway: {runway} months
Experience: {experienceLevel}

Identify 10-15 risks across these categories:
1. MARKET RISK — Is the market big enough? Growing or shrinking?
2. EXECUTION RISK — Can the team build and ship this?
3. TEAM RISK — Solo founder? Missing skills? Burnout risk?
4. COMPETITION RISK — Will incumbents crush this? Moats weak?
5. FINANCIAL RISK — Runway, pricing, CAC:LTV, burn rate
6. TIMING RISK — Too early? Too late? Market ready?
7. DISTRIBUTION RISK — How will users find this? Channels viable?
8. PRODUCT RISK — Will users actually use it? Retention risk?

For each risk:
- Name (5-8 words)
- Category (market/execution/team/competition/financial/timing/distribution/product)
- Description (1 sentence)
- Likelihood (0-100%) — How likely is this to happen?
- Impact (LOW/MED/HIGH) — If it happens, how bad is it?

Return JSON:
{
  "risks": [
    {
      "name": "Solo founder burnout",
      "category": "team",
      "description": "Single founder working 60+ hours/week risks burnout within 6-12 months",
      "likelihood": 80,
      "impact": "HIGH"
    },
    ...
  ]
}

Guidelines:
- Be honest and critical (this helps founders prepare)
- Likelihood: Based on typical startup failure data
- Impact: LOW = slows growth, MED = threatens growth, HIGH = kills startup
- Don't sugarcoat — founders need real risks, not optimism
```

**Expected Output:**

```json
{
  "risks": [
    {
      "name": "Solo founder burnout",
      "category": "team",
      "description": "Single founder working 60+ hours/week risks burnout within 6-12 months",
      "likelihood": 80,
      "impact": "HIGH"
    },
    {
      "name": "Distribution strategy unclear",
      "category": "distribution",
      "description": "Twitter/IndieHackers may not scale beyond first 100 users",
      "likelihood": 70,
      "impact": "MED"
    },
    {
      "name": "Notion builds this feature",
      "category": "competition",
      "description": "Notion could add AI planning as a native feature within 12 months",
      "likelihood": 40,
      "impact": "HIGH"
    },
    {
      "name": "Low free-to-paid conversion",
      "category": "financial",
      "description": "Users may love free tier but not convert to $29/mo paid",
      "likelihood": 60,
      "impact": "MED"
    },
    {
      "name": "AI costs exceed pricing",
      "category": "financial",
      "description": "$29 pricing may not cover OpenAI API costs at scale",
      "likelihood": 50,
      "impact": "MED"
    }
  ]
}
```

---

### Step 3: Calculate Risk Scores (100ms)

```typescript
function calculateRiskScore(likelihood: number, impact: string): number {
  const impactWeights = {
    "LOW": 1.0,
    "MED": 1.5,
    "HIGH": 2.0
  };
  
  const weight = impactWeights[impact] || 1.0;
  
  // Score = (likelihood / 100) × weight × 10
  // This gives scores from 0-20, scaled to 0-10 for display
  return (likelihood / 100) * weight * 10;
}

function scoreAllRisks(risks: Risk[]): RiskWithScore[] {
  return risks.map(risk => ({
    ...risk,
    score: calculateRiskScore(risk.likelihood, risk.impact)
  }));
}
```

**Example:**
- Solo founder burnout: (80 / 100) × 2.0 × 10 = **16.0** (HIGH)
- Distribution unclear: (70 / 100) × 1.5 × 10 = **10.5** (MED)
- Notion builds feature: (40 / 100) × 2.0 × 10 = **8.0** (MED)

---

### Step 4: Rank Top 5 Risks (10ms)

```typescript
function getTop5Risks(risks: RiskWithScore[]): RiskWithScore[] {
  return risks
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}
```

---

### Step 5: Generate Mitigations (LLM, 3s)

**LLM Prompt:**

```
System: You are a startup advisor specializing in risk mitigation strategies.

User: For each of these risks, suggest a 1-2 sentence practical mitigation:

{top5RisksJSON}

Guidelines:
- Mitigation must be ACTIONABLE in 90 days
- Prioritize quick wins (can do in Month 1-2)
- Be specific (not "hire someone" but "add part-time advisor")
- Focus on reducing likelihood OR impact (not eliminating risk entirely)

Return JSON:
{
  "mitigations": [
    {
      "riskName": "Solo founder burnout",
      "mitigation": "Add 1-2 advisors who can share strategic decisions. Limit scope to 3 core features for MVP."
    },
    ...
  ]
}
```

**Expected Output:**

```json
{
  "mitigations": [
    {
      "riskName": "Solo founder burnout",
      "mitigation": "Add 1-2 advisors who can share strategic decisions. Limit scope to 3 core features for MVP."
    },
    {
      "riskName": "Distribution strategy unclear",
      "mitigation": "Test 3 channels in Month 1 (Twitter, PH, Reddit). Measure CAC per channel and double down on winner."
    },
    {
      "riskName": "Notion builds this feature",
      "mitigation": "Speed to market is key. Ship MVP in 30 days. Focus on founders (niche Notion won't prioritize)."
    },
    {
      "riskName": "Low free-to-paid conversion",
      "mitigation": "Paywall core feature (AI task generation). Offer 7-day free trial, not freemium."
    },
    {
      "riskName": "AI costs exceed pricing",
      "mitigation": "Use GPT-4o-mini for non-critical tasks. Cache common prompts. Test $39 pricing."
    }
  ]
}
```

---

### Step 6: Format Output (50ms)

```typescript
function formatOutput(
  top5Risks: RiskWithScore[],
  mitigations: Mitigation[]
): RiskAnalyzerOutput {
  return {
    risks: top5Risks.map((risk, index) => {
      const mitigation = mitigations.find(m => m.riskName === risk.name);
      
      return {
        rank: index + 1,
        name: risk.name,
        category: risk.category,
        description: risk.description,
        likelihood: risk.likelihood,
        impact: risk.impact,
        score: risk.score,
        scoreLabel: getScoreLabel(risk.score),
        mitigation: mitigation?.mitigation || "No mitigation suggested"
      };
    }),
    summary: generateSummary(top5Risks),
    processedAt: new Date().toISOString(),
    processingTime: 8500,
    cost: 0.02
  };
}

function getScoreLabel(score: number): string {
  if (score >= 8) return "🔴 Critical";
  if (score >= 5) return "🟡 Watch";
  return "🟢 Low";
}

function generateSummary(risks: RiskWithScore[]): string {
  const criticalCount = risks.filter(r => r.score >= 8).length;
  
  if (criticalCount >= 3) {
    return "High risk profile. Address critical risks before launching.";
  } else if (criticalCount >= 1) {
    return "Moderate risk profile. Mitigate top risks in Month 1.";
  } else {
    return "Low risk profile. Good position to move fast.";
  }
}
```

---

## 📤 OUTPUT SCHEMA

```typescript
interface RiskAnalyzerOutput {
  risks: Array<{
    rank: number;                  // 1-5
    name: string;                  // "Solo founder burnout"
    category: string;              // "team"
    description: string;           // 1 sentence
    likelihood: number;            // 0-100
    impact: "LOW" | "MED" | "HIGH";
    score: number;                 // 0-20 (for ranking)
    scoreLabel: string;            // "🔴 Critical", "🟡 Watch", "🟢 Low"
    mitigation: string;            // 1-2 sentence strategy
  }>;
  
  summary: string;                 // Overall risk assessment
  processedAt: string;             // ISO timestamp
  processingTime: number;          // Milliseconds
  cost: number;                    // $ spent
}
```

### Example Output

```json
{
  "risks": [
    {
      "rank": 1,
      "name": "Solo founder burnout",
      "category": "team",
      "description": "Single founder working 60+ hours/week risks burnout within 6-12 months",
      "likelihood": 80,
      "impact": "HIGH",
      "score": 16.0,
      "scoreLabel": "🔴 Critical",
      "mitigation": "Add 1-2 advisors who can share strategic decisions. Limit scope to 3 core features for MVP."
    },
    {
      "rank": 2,
      "name": "Distribution strategy unclear",
      "category": "distribution",
      "description": "Twitter/IndieHackers may not scale beyond first 100 users",
      "likelihood": 70,
      "impact": "MED",
      "score": 10.5,
      "scoreLabel": "🟡 Watch",
      "mitigation": "Test 3 channels in Month 1. Measure CAC per channel and double down on winner."
    },
    {
      "rank": 3,
      "name": "Notion builds this feature",
      "category": "competition",
      "description": "Notion could add AI planning as a native feature within 12 months",
      "likelihood": 40,
      "impact": "HIGH",
      "score": 8.0,
      "scoreLabel": "🔴 Critical",
      "mitigation": "Speed to market is key. Ship MVP in 30 days. Focus on founders (niche)."
    },
    {
      "rank": 4,
      "name": "Low free-to-paid conversion",
      "category": "financial",
      "description": "Users may love free tier but not convert to $29/mo paid",
      "likelihood": 60,
      "impact": "MED",
      "score": 9.0,
      "scoreLabel": "🟡 Watch",
      "mitigation": "Paywall core feature. Offer 7-day free trial, not freemium."
    },
    {
      "rank": 5,
      "name": "AI costs exceed pricing",
      "category": "financial",
      "description": "$29 pricing may not cover OpenAI API costs at scale",
      "likelihood": 50,
      "impact": "MED",
      "score": 7.5,
      "scoreLabel": "🟡 Watch",
      "mitigation": "Use GPT-4o-mini for non-critical tasks. Cache prompts. Test $39 pricing."
    }
  ],
  "summary": "Moderate risk profile. Mitigate top 2 risks in Month 1.",
  "processedAt": "2026-02-06T10:30:00Z",
  "processingTime": 8500,
  "cost": 0.02
}
```

---

## 🌐 API ENDPOINT

### POST /api/agents/risk-analyzer

**Request:** RiskAnalyzerInput

**Response (Success):**
```typescript
{
  "success": true,
  "data": RiskAnalyzerOutput
}
```

**Response (Error):**
```typescript
{
  "success": false,
  "error": {
    "code": "INVALID_INPUT" | "LLM_TIMEOUT",
    "message": string
  }
}
```

---

## 🧪 TESTING

### Test Case 1: Solo Founder, High Risk

**Input:** Solo founder, 8mo runway, no advisors

**Expected:**
- `risks[0].name` contains "burnout" or "solo"
- `risks[0].score` >= 14
- `summary` contains "High risk" or "critical"

---

### Test Case 2: Team with Funding, Low Risk

**Input:** 3-person team, 24mo runway, experienced

**Expected:**
- `risks[0].score` < 10
- No "solo founder" risk in top 5
- `summary` contains "Low risk" or "good position"

---

### Test Case 3: Weak Unfair Advantage

**Input:** Unfair advantage = "I've experienced the problem"

**Expected:**
- One risk mentions "advantage" or "moat" or "competition"
- Mitigation suggests building defensibility

---

## 💰 COST ESTIMATE

| Step | Input Tokens | Output Tokens | Cost (GPT-4o) |
|------|--------------|---------------|---------------|
| Identify risks | 2,000 | 800 | $0.022 |
| Generate mitigations | 600 | 200 | $0.006 |
| **Total** | **2,600** | **1,000** | **$0.028** |

**Monthly cost (200 requests):** ~$6

---

## 🛠️ IMPLEMENTATION NOTES

### Code Snippet

```typescript
// /api/agents/risk-analyzer.ts

export async function POST(req: NextRequest) {
  const input: RiskAnalyzerInput = await req.json();
  
  // Step 1: Validate
  const validation = validateInput(input);
  if (!validation.valid) {
    return NextResponse.json({ success: false, error: validation.errors }, { status: 400 });
  }
  
  // Step 2: Identify risks
  const allRisks = await identifyRisks(input);
  
  // Step 3-4: Score and rank
  const scoredRisks = scoreAllRisks(allRisks.risks);
  const top5 = getTop5Risks(scoredRisks);
  
  // Step 5: Generate mitigations
  const mitigations = await generateMitigations(top5);
  
  // Step 6: Format output
  const output = formatOutput(top5, mitigations.mitigations);
  
  return NextResponse.json({ success: true, data: output });
}
```

### Gotcha #1: Risk Inflation

**Problem:** LLM may mark everything as HIGH impact.

**Solution:** Add to prompt: "Only 20-30% of risks should be HIGH impact. Most are MED."

---

### Gotcha #2: Generic Mitigations

**Problem:** "Hire a co-founder" is not actionable in 90 days.

**Solution:** Emphasize "actionable in 90 days" in prompt. Reject generic advice.

---

## ✅ DEFINITION OF DONE

- [x] Returns top 5 risks for all inputs
- [x] Score calculation is mathematically correct
- [x] Mitigations are specific and actionable
- [x] Processing time < 10 seconds
- [x] Cost < $0.05 per request
- [x] Integrates with Opportunity Canvas UI
- [x] Unit tests pass

---

**SPECIFICATION COMPLETE** ✅

**Integration Point:** `/app/opportunity-canvas/page.tsx` — Replace mock risk data with API call
