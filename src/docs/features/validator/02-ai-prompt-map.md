# AI Prompt Map — 14-Section Validation Report

**Feature:** Comprehensive Validation Report Generation  
**AI Model:** Gemini Pro  
**Sections:** 14 (36 prompts total)  
**Date:** February 4, 2026

---

## Prompt Architecture

Each validation report section uses dedicated AI prompts to generate content. The system follows a weighted scoring model and decision logic for GO/CAUTION/NO-GO verdicts.

---

## Section 1: Executive Summary (3 prompts)

### 1.1 Verdict
**Input:** Overall score, critical risks  
**Output:** GO / CAUTION / NO-GO  
**Logic:**
- Score ≥ 75 → GO: "Strong foundation, proceed with confidence"
- Score 50-74 → CAUTION: "Address red flags before scaling"
- Score < 50 → NO-GO: "Significant pivot or validation needed"

**Prompt:**
```
Based on overall validation score [SCORE] and critical risks [RISKS],
decide verdict (GO/CAUTION/NO-GO) and explain reasoning in one sentence.
```

### 1.2 Overall Score
**Input:** 7 dimension scores + weights  
**Output:** Weighted score (0-100)  
**Formula:** `Σ(dimension.score × dimension.weight)`

**Prompt:**
```
Calculate weighted validation score from 7 dimensions:
- Problem Clarity (15%)
- Solution Strength (15%)
- Market Size (15%)
- Competition (10%)
- Business Model (15%)
- Team Fit (15%)
- Timing (15%)

Return single integer 0-100.
```

### 1.3 Summary Text
**Input:** Canvas data, scores, verdict  
**Output:** 3-sentence executive summary

**Prompt:**
```
Summarize startup viability in exactly 3 sentences:
1. Core idea and market opportunity
2. Key strength
3. Primary concern or risk

Use executive tone, data-driven language.
```

---

## Section 2: Problem Analysis (3 prompts)

### 2.1 Clarity Score
**Input:** Problem statement from canvas  
**Output:** Score 0-10

**Prompt:**
```
Rate problem clarity (0-10) based on:
- Specificity of pain point
- Defined target customer
- Measurable impact
- Urgency indicators

Return score with 2-sentence justification.
```

### 2.2 Pain Severity
**Input:** Problem description, customer segment  
**Output:** Severity assessment

**Prompt:**
```
Describe pain severity for target customer:
- Economic impact (cost of problem)
- Frequency (how often it occurs)
- Workarounds (current solutions failing)

3-4 sentences, data-driven.
```

### 2.3 Urgency & Frequency
**Input:** Problem context  
**Output:** Urgency analysis

**Prompt:**
```
Explain problem urgency and frequency:
- How often does this problem occur?
- What triggers it?
- Why is solving it urgent?
- What happens if unsolved?

4-5 sentences.
```

---

## Section 3: Solution Assessment (3 prompts)

### 3.1 Uniqueness
**Input:** Solution description, competitors  
**Output:** Differentiation analysis

**Prompt:**
```
Assess solution uniqueness vs existing alternatives:
- What makes it different?
- Is difference meaningful to customers?
- Barriers to replication?

3-4 sentences.
```

### 3.2 Feasibility
**Input:** Solution approach, team skills  
**Output:** Feasibility assessment

**Prompt:**
```
Evaluate technical and operational feasibility for MVP:
- Technical complexity (1-10)
- Required skills vs team capabilities
- Time to first version (realistic estimate)
- Resource constraints

4-5 sentences.
```

### 3.3 10x Factor
**Input:** Solution value prop, alternatives  
**Output:** Boolean + explanation

**Prompt:**
```
Determine if solution is 10x better than alternatives:
- Compare to best existing solution
- Quantify improvement (speed, cost, quality)
- Is it meaningfully better or incrementally better?

Answer: YES/NO + 3-sentence explanation.
```

---

## Section 4: Market Size (4 prompts)

### 4.1 TAM (Total Addressable Market)
**Input:** Industry, geography, problem scope  
**Output:** TAM estimate in USD

**Prompt:**
```
Estimate Total Addressable Market (TAM):
- Use industry benchmarks and reports
- Consider global vs regional market
- Account for market growth rate

Return: $XX billion + methodology.
```

### 4.2 SAM (Serviceable Available Market)
**Input:** TAM, target ICP, geography  
**Output:** SAM estimate in USD

**Prompt:**
```
Estimate Serviceable Available Market (SAM):
- Subset of TAM reachable by this startup
- Filter by ICP characteristics
- Consider distribution limitations

Return: $XX million/billion + assumptions.
```

### 4.3 SOM (Serviceable Obtainable Market)
**Input:** SAM, competition, resources  
**Output:** SOM estimate in USD

**Prompt:**
```
Estimate realistic Serviceable Obtainable Market (SOM) over 3-5 years:
- Market share achievable with constraints
- Competitive landscape
- Go-to-market strategy

Return: $XX million + 3-year projection.
```

### 4.4 Methodology
**Input:** All market sizing inputs  
**Output:** Explanation of assumptions

**Prompt:**
```
Explain TAM/SAM/SOM methodology:
- Data sources used
- Key assumptions
- Calculation logic
- Confidence level (High/Medium/Low)

4-6 sentences, transparent.
```

---

## Section 5: Competition (3 prompts)

### 5.1 Direct Competitors
**Input:** Solution category, features  
**Output:** List of 3-5 direct competitors

**Prompt:**
```
Identify direct competitors solving the same core problem:
- Company name
- Key product/service
- Market position
- Strengths

Return structured list.
```

### 5.2 Indirect / Alternatives
**Input:** Problem, customer segment  
**Output:** List of indirect competitors

**Prompt:**
```
Identify indirect competitors or substitute solutions:
- Alternative approaches to same problem
- Manual processes being replaced
- Adjacent tools customers might use

Return 2-4 alternatives.
```

### 5.3 Differentiation Notes
**Input:** Solution, competitors  
**Output:** Positioning analysis

**Prompt:**
```
Explain how this startup differs meaningfully from competitors:
- Unique value proposition
- Target customer differences
- Technology/approach advantages
- Sustainable competitive moat

3-5 sentences.
```

---

## Section 6: Business Model (3 prompts)

### 6.1 Revenue Streams
**Input:** Business model from canvas  
**Output:** Revenue stream list

**Prompt:**
```
Identify primary and secondary revenue streams:
- Main monetization method
- Potential additional revenue sources
- Revenue mix over time

Return structured list.
```

### 6.2 Pricing Assumptions
**Input:** Value prop, competitors, market  
**Output:** Pricing recommendation

**Prompt:**
```
Propose realistic pricing based on:
- Market norms for similar solutions
- Value delivered to customer
- Competitive pricing
- Customer willingness to pay

Return: Price range + rationale.
```

### 6.3 Unit Economics
**Input:** Pricing, costs, scale  
**Output:** Unit economics analysis

**Prompt:**
```
Assess unit economics and scalability:
- Gross margin estimate (%)
- CAC/LTV assumptions
- Break-even timeline
- Scalability potential (High/Medium/Low)

4-6 sentences with numbers.
```

---

## Section 7: Go-To-Market (2 prompts)

### 7.1 Primary Channels
**Input:** ICP, product type, budget  
**Output:** Channel recommendations

**Prompt:**
```
Identify best acquisition channels for target ICP:
- Rank top 3 channels by fit
- Explain why each channel works
- Estimated CAC per channel

Return prioritized list.
```

### 7.2 Acquisition Strategy
**Input:** Channels, ICP, product  
**Output:** GTM playbook

**Prompt:**
```
Describe how early customers will be acquired and activated:
- Onboarding approach
- Sales motion (self-serve vs sales-led)
- Activation tactics
- First 100 customers strategy

5-7 sentences, actionable.
```

---

## Section 8: Team Assessment (2 prompts)

### 8.1 Founder-Market Fit
**Input:** Founder background, problem domain  
**Output:** Fit assessment

**Prompt:**
```
Evaluate founder alignment with problem domain:
- Relevant experience
- Domain expertise
- Network in industry
- Passion/commitment signals

Score: Strong/Moderate/Weak + 3 sentences.
```

### 8.2 Skill Gaps
**Input:** Required skills, current team  
**Output:** Gap analysis

**Prompt:**
```
Identify key missing skills or roles:
- Critical gaps (must-have)
- Nice-to-have additions
- Hiring priority order

Return list with urgency levels.
```

---

## Section 9: Timing Analysis (2 prompts)

### 9.1 Why Now
**Input:** Market trends, technology shifts  
**Output:** Timing thesis

**Prompt:**
```
Explain market or technology shifts making now the right time:
- Recent changes enabling this solution
- Customer behavior shifts
- Technology maturation
- Regulatory/economic factors

4-5 sentences, specific.
```

### 9.2 Market Readiness
**Input:** Customer segment, adoption curve  
**Output:** Readiness assessment

**Prompt:**
```
Assess customer readiness and adoption timing:
- Early adopter vs mainstream market
- Education required
- Adoption barriers
- Timeline to product-market fit

3-4 sentences.
```

---

## Section 10: Risk Assessment (2 prompts)

### 10.1 Top Risks
**Input:** All validation data  
**Output:** Prioritized risk list

**Prompt:**
```
List top 5 risks threatening success:
- Rank by likelihood × impact
- Include market, execution, competitive risks
- Be specific (not generic)

Return structured list with severity.
```

### 10.2 Mitigation Ideas
**Input:** Risk list  
**Output:** Mitigation strategies

**Prompt:**
```
Suggest mitigation strategies for each major risk:
- Actionable steps
- Resources required
- Timeline to mitigate

Return paired with each risk.
```

---

## Section 11: Financial Projections (2 prompts)

### 11.1 3-Year Assumptions
**Input:** Business model, market size  
**Output:** Key assumptions

**Prompt:**
```
Outline key assumptions behind 3-year projections:
- Customer acquisition rate
- Churn/retention
- Pricing stability
- Market growth
- Team scaling

Return 5-7 assumptions.
```

### 11.2 Revenue Trajectory
**Input:** Unit economics, market  
**Output:** Growth projection

**Prompt:**
```
Describe expected revenue growth path:
- Year 1: $XX (rationale)
- Year 2: $XX (rationale)
- Year 3: $XX (rationale)
- Growth rate assumptions

4-5 sentences with numbers.
```

---

## Section 12: Validation Status (2 prompts)

### 12.1 Customer Evidence
**Input:** Traction data, interviews  
**Output:** Validation level

**Prompt:**
```
Assess level of real customer validation so far:
- Customer interviews completed
- LOIs or pre-orders
- Beta users
- Paying customers

Score: Strong/Moderate/Weak + evidence.
```

### 12.2 Traction Signals
**Input:** Metrics, milestones  
**Output:** Traction indicators

**Prompt:**
```
Identify any traction or early success indicators:
- User growth
- Engagement metrics
- Revenue signals
- Partnership/investor interest

List observable signals.
```

---

## Section 13: Recommendations (2 prompts)

### 13.1 Next Actions
**Input:** Validation gaps, scores  
**Output:** Top 3 action items

**Prompt:**
```
Recommend the top 3 actions to increase validation score:
- Specific, measurable actions
- Focus on highest-impact gaps
- Realistic for next 30-90 days

Return prioritized list.
```

### 13.2 Priority & Impact
**Input:** Action items  
**Output:** Priority matrix

**Prompt:**
```
Assign priority and expected impact to each action:
- Priority: High/Medium/Low
- Impact on score: +5-20 points
- Time estimate: days/weeks

Return structured table.
```

---

## Section 14: Appendix (3 prompts)

### 14.1 Sources
**Input:** Research used in analysis  
**Output:** Source list

**Prompt:**
```
List data sources and reports used in analysis:
- Industry reports
- Market research
- Competitor data
- Benchmarks

Return categorized list.
```

### 14.2 Benchmarks
**Input:** Industry, stage  
**Output:** Relevant benchmarks

**Prompt:**
```
Include relevant industry benchmarks:
- Typical CAC/LTV ratios
- Churn rates
- Growth rates
- Funding amounts by stage

Return data table.
```

### 14.3 Citations
**Input:** Knowledge chunks from vector DB  
**Output:** Citation list

**Prompt:**
```
Attach citations from knowledge_chunks:
- Link to source documents
- Relevant excerpts
- Confidence scores

Return formatted references.
```

---

## Scoring Weights

| Dimension | Weight | Max Score |
|-----------|--------|-----------|
| Problem Clarity | 15% | 10 |
| Solution Strength | 15% | 10 |
| Market Size | 15% | 10 |
| Competition | 10% | 10 |
| Business Model | 15% | 10 |
| Team Fit | 15% | 10 |
| Timing | 15% | 10 |

**Overall Score Formula:**
```
score = (problem × 0.15) + 
        (solution × 0.15) + 
        (market × 0.15) + 
        (competition × 0.10) + 
        (business × 0.15) + 
        (team × 0.15) + 
        (timing × 0.15)
```

**Result:** 0-100 (rounded to integer)

---

## Verdict Decision Tree

```
IF score >= 75:
  verdict = "GO"
  message = "Strong foundation, proceed with confidence"
  color = emerald

ELSE IF score >= 50:
  verdict = "CAUTION"
  message = "Address red flags before scaling"
  color = yellow

ELSE:
  verdict = "NO-GO"
  message = "Significant pivot or validation needed"
  color = red
```

---

## Prompt Template Structure

All prompts follow this structure:

```
CONTEXT: [Canvas data, user inputs, research]

TASK: [Specific analysis or generation task]

FORMAT: [Expected output format]

CONSTRAINTS:
- Length: [sentence/paragraph count]
- Tone: [executive/data-driven/honest]
- Specificity: [avoid generic advice]

OUTPUT: [Final generated content]
```

---

## Quality Control

**Prompt Testing:**
- Each prompt tested with 10+ sample canvases
- Edge cases: minimal data, contradictory inputs
- Output consistency validated

**Validation Checks:**
- Scores sum correctly (weights)
- Verdicts align with scores
- No hallucinated data
- Citations verifiable

---

**Status:** 36 prompts defined, ready for AI integration  
**Next:** Implement edge function with prompt orchestration
