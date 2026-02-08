# AI Agents - Implementation Guide

**Version:** 1.0  
**Date:** February 6, 2026  
**Purpose:** Step-by-step guide to building all 12+ AI agents  
**Estimated Timeline:** 14 weeks (full-time developer)

---

## 🎯 OVERVIEW

This guide walks you through implementing the complete AI agent system for LeanAI, from infrastructure setup to production deployment.

**What You'll Build:**
- 12+ specialized AI agents
- API layer for agent orchestration
- Integration with existing UI screens
- Testing and monitoring infrastructure

---

## 📅 IMPLEMENTATION ROADMAP

### Week 1-2: Infrastructure Setup

**Goal:** Build the foundation for all agents

**Tasks:**
1. Set up Next.js API routes structure
2. Create base Agent class (reusable)
3. Configure OpenAI SDK
4. Implement rate limiting
5. Set up error logging (Sentry)
6. Create testing framework
7. Build mock agent for testing

**Deliverable:** `/api/agents/test` endpoint working

---

### Week 3-4: First Agent (Market Researcher)

**Goal:** Build the most complex agent end-to-end

**Why Start Here:**
- Most complex (validates infrastructure)
- High value (validates market opportunity)
- Tests LLM + optional web scraping

**Tasks:**
1. Implement input validation
2. Write LLM prompts (keyword extraction, TAM/SAM/SOM, trends)
3. Add web scraping (optional, can defer)
4. Create output parser
5. Write unit tests (10 test cases)
6. Deploy to staging
7. Integrate with Validator Report UI

**Deliverable:** Market Researcher working in production

---

### Week 5-6: Validation Agents (Batch 1)

**Goal:** Complete 3 simpler validation agents

**Agents:**
1. **Competitor Agent** (2 days) — Identify competitors, positioning
2. **Risk Analyzer** (2 days) — Top 5 risks with mitigations
3. **Demand Validator** (1 day) — Validate demand signals

**Why These:**
- All use similar pattern (LLM analysis → structured output)
- Build on Market Researcher learnings
- Can reuse code (DRY)

**Deliverable:** 4/12 agents complete (33%)

---

### Week 7-8: Validation Agents (Batch 2)

**Goal:** Complete remaining validation agents

**Agents:**
4. **Problem Validator** (1 day) — Problem-solution fit score
5. **ICP Validator** (1 day) — ICP quality score

**Plus:**
- Refactor shared code into utils
- Optimize LLM prompts (reduce tokens)
- Add caching for repeated requests

**Deliverable:** 6/12 agents complete (50%)

---

### Week 9-10: Canvas Agents

**Goal:** Add AI coaching to canvas screens

**Agents:**
6. **Canvas Coach** (3 days) — Detect weak blocks, rewrite UVP
7. **Opportunity Analyst** (2 days) — Adoption risk analysis

**Integration:**
- Replace mock data in Lean Canvas UI
- Replace mock data in Opportunity Canvas UI
- Add real-time AI feedback

**Deliverable:** 8/12 agents complete (67%), Canvas screens have real AI

---

### Week 11-12: Planning Agents

**Goal:** Make 90-Day Plan intelligent

**Agents:**
8. **Card Generator** (3 days) — Generate 24 validation cards from canvases
9. **Experiment Designer** (2 days) — Design testable experiments

**Integration:**
- Replace mock card generation in 90-Day Plan
- Add "Regenerate Cards" button
- Dynamic card updates when canvases change

**Deliverable:** 10/12 agents complete (83%), 90-Day Plan fully AI-powered

---

### Week 13-14: Polish & Optimization

**Goal:** Production-ready quality

**Tasks:**
1. Performance optimization (reduce latency)
2. Cost optimization (use GPT-4o-mini where possible)
3. Error handling improvements
4. Add metrics dashboard (tokens, latency, errors)
5. Load testing (100 concurrent users)
6. Security audit
7. Documentation updates
8. Demo video

**Deliverable:** System production-ready, all agents deployed

---

## 🏗️ INFRASTRUCTURE SETUP (Week 1-2)

### Step 1: Create API Routes Structure

```bash
/app/api/agents/
├── test/
│   └── route.ts              # Test endpoint
├── market-researcher/
│   └── route.ts
├── competitor/
│   └── route.ts
├── risk-analyzer/
│   └── route.ts
└── ...
```

---

### Step 2: Create Base Agent Class

**File:** `/lib/agents/BaseAgent.ts`

```typescript
import { OpenAI } from 'openai';

export abstract class BaseAgent<TInput, TOutput> {
  protected openai: OpenAI;
  protected name: string;
  
  constructor(name: string) {
    this.name = name;
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  
  // Abstract methods (each agent implements)
  abstract validateInput(input: TInput): { valid: boolean; errors?: string[] };
  abstract process(input: TInput): Promise<TOutput>;
  
  // Shared utility methods
  async callLLM(
    prompt: string,
    systemMessage: string,
    options?: {
      model?: string;
      temperature?: number;
      jsonMode?: boolean;
      maxTokens?: number;
    }
  ): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: options?.model || 'gpt-4o',
      messages: [
        { role: 'system', content: systemMessage },
        { role: 'user', content: prompt }
      ],
      temperature: options?.temperature || 0.5,
      max_tokens: options?.maxTokens || 2000,
      response_format: options?.jsonMode ? { type: 'json_object' } : undefined,
    });
    
    return response.choices[0].message.content || '';
  }
  
  async retry<T>(
    fn: () => Promise<T>,
    maxRetries: number = 3,
    delay: number = 1000
  ): Promise<T> {
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await fn();
      } catch (error) {
        if (i === maxRetries - 1) throw error;
        await new Promise(resolve => setTimeout(resolve, delay * (i + 1)));
      }
    }
    throw new Error('Max retries exceeded');
  }
  
  log(level: 'info' | 'error', message: string, data?: any) {
    console[level](`[${this.name}] ${message}`, data);
    // Later: Send to Sentry/DataDog
  }
}
```

---

### Step 3: Configure Environment Variables

**File:** `.env.local`

```bash
OPENAI_API_KEY=sk-proj-...
SENTRY_DSN=https://...
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW=60000
```

---

### Step 4: Implement Rate Limiting

**File:** `/lib/rateLimit.ts`

```typescript
import { LRUCache } from 'lru-cache';

type RateLimitOptions = {
  interval: number;
  uniqueTokenPerInterval: number;
};

export function rateLimit(options: RateLimitOptions) {
  const tokenCache = new LRUCache({
    max: options.uniqueTokenPerInterval || 500,
    ttl: options.interval || 60000,
  });

  return {
    check: (limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= limit;

        return isRateLimited ? reject() : resolve();
      }),
  };
}

// Usage in API route
const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500,
});

export async function POST(req: NextRequest) {
  const ip = req.ip ?? '127.0.0.1';
  
  try {
    await limiter.check(10, ip); // 10 requests per minute
  } catch {
    return new Response('Rate limit exceeded', { status: 429 });
  }
  
  // Process request...
}
```

---

### Step 5: Set Up Error Logging

**File:** `/lib/logger.ts`

```typescript
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1,
});

export function logError(error: Error, context?: any) {
  console.error(error);
  Sentry.captureException(error, { extra: context });
}

export function logInfo(message: string, data?: any) {
  console.log(message, data);
  // Later: Send to DataDog/LogRocket
}
```

---

### Step 6: Create Test Endpoint

**File:** `/app/api/agents/test/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    
    return NextResponse.json({
      success: true,
      data: {
        echo: message,
        timestamp: new Date().toISOString(),
        agent: 'test'
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: { message: error.message }
    }, { status: 500 });
  }
}
```

**Test:**
```bash
curl -X POST http://localhost:3000/api/agents/test \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, agent!"}'
```

---

## 🚀 BUILDING YOUR FIRST AGENT (Week 3-4)

### Step 1: Create Agent File Structure

```bash
/lib/agents/MarketResearcher.ts    # Agent class
/app/api/agents/market-researcher/
└── route.ts                        # API endpoint
/lib/agents/__tests__/
└── MarketResearcher.test.ts       # Unit tests
```

---

### Step 2: Implement Agent Class

**File:** `/lib/agents/MarketResearcher.ts`

```typescript
import { BaseAgent } from './BaseAgent';

interface MarketResearcherInput {
  problem: string;
  solution: string;
  icp: string;
  targetACV?: number;
}

interface MarketResearcherOutput {
  overallScore: number;
  tam: number;
  sam: number;
  som: number;
  // ... (full schema from agent spec)
}

export class MarketResearcher extends BaseAgent<MarketResearcherInput, MarketResearcherOutput> {
  constructor() {
    super('MarketResearcher');
  }
  
  validateInput(input: MarketResearcherInput) {
    const errors: string[] = [];
    
    if (!input.problem || input.problem.length < 10) {
      errors.push('Problem too short');
    }
    if (!input.solution || input.solution.length < 10) {
      errors.push('Solution too short');
    }
    if (!input.icp || input.icp.length < 10) {
      errors.push('ICP too short');
    }
    
    return errors.length > 0 ? { valid: false, errors } : { valid: true };
  }
  
  async process(input: MarketResearcherInput): Promise<MarketResearcherOutput> {
    const startTime = Date.now();
    
    try {
      // Step 1: Extract keywords
      const keywords = await this.extractKeywords(input);
      
      // Step 2: Calculate market size
      const marketSize = await this.calculateMarketSize(input, keywords);
      
      // Step 3: Analyze trends
      const trends = await this.analyzeTrends(keywords);
      
      // Step 4: Generate report
      const report = await this.generateReport(input, marketSize, trends);
      
      const processingTime = Date.now() - startTime;
      
      return {
        ...report,
        processedAt: new Date().toISOString(),
        processingTime,
        cost: this.estimateCost(input),
      };
      
    } catch (error) {
      this.log('error', 'Processing failed', { input, error });
      throw error;
    }
  }
  
  private async extractKeywords(input: MarketResearcherInput): Promise<string[]> {
    const prompt = `Extract 5-10 market research keywords:
Problem: ${input.problem}
Solution: ${input.solution}
ICP: ${input.icp}

Return JSON: {"keywords": ["keyword1", "keyword2", ...]}`;

    const response = await this.callLLM(
      prompt,
      'You are a market research analyst.',
      { jsonMode: true, temperature: 0.3 }
    );
    
    const parsed = JSON.parse(response);
    return parsed.keywords || [];
  }
  
  private async calculateMarketSize(
    input: MarketResearcherInput,
    keywords: string[]
  ) {
    // Implementation from agent spec (Step 4)
    // ...
  }
  
  private estimateCost(input: MarketResearcherInput): number {
    // Rough estimate: ~4,100 input + 1,550 output tokens
    // GPT-4o: $5/1M input, $15/1M output
    return (4100 * 0.000005) + (1550 * 0.000015);
  }
}
```

---

### Step 3: Create API Endpoint

**File:** `/app/api/agents/market-researcher/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { MarketResearcher } from '@/lib/agents/MarketResearcher';
import { rateLimit } from '@/lib/rateLimit';
import { logError } from '@/lib/logger';

const limiter = rateLimit({ interval: 60000, uniqueTokenPerInterval: 500 });

export async function POST(req: NextRequest) {
  const ip = req.ip ?? '127.0.0.1';
  
  // Rate limiting
  try {
    await limiter.check(10, ip);
  } catch {
    return NextResponse.json(
      { success: false, error: { code: 'RATE_LIMIT', message: 'Too many requests' } },
      { status: 429 }
    );
  }
  
  try {
    const input = await req.json();
    
    const agent = new MarketResearcher();
    
    // Validate
    const validation = agent.validateInput(input);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, error: { code: 'INVALID_INPUT', message: validation.errors } },
        { status: 400 }
      );
    }
    
    // Process
    const result = await agent.process(input);
    
    return NextResponse.json({
      success: true,
      data: result
    });
    
  } catch (error) {
    logError(error, { endpoint: 'market-researcher' });
    
    return NextResponse.json(
      { success: false, error: { code: 'INTERNAL_ERROR', message: error.message } },
      { status: 500 }
    );
  }
}
```

---

### Step 4: Write Unit Tests

**File:** `/lib/agents/__tests__/MarketResearcher.test.ts`

```typescript
import { MarketResearcher } from '../MarketResearcher';

describe('MarketResearcher', () => {
  let agent: MarketResearcher;
  
  beforeEach(() => {
    agent = new MarketResearcher();
  });
  
  describe('validateInput', () => {
    it('should reject missing problem', () => {
      const result = agent.validateInput({
        problem: '',
        solution: 'AI planner',
        icp: 'Solo founders'
      });
      
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Problem too short');
    });
    
    it('should accept valid input', () => {
      const result = agent.validateInput({
        problem: 'Solo founders waste 10+ hours planning',
        solution: 'AI 90-day planner',
        icp: 'Solo SaaS founders, pre-revenue'
      });
      
      expect(result.valid).toBe(true);
    });
  });
  
  describe('process', () => {
    it('should return market report', async () => {
      const result = await agent.process({
        problem: 'Solo founders waste 10+ hours planning',
        solution: 'AI 90-day planner',
        icp: 'Solo SaaS founders, pre-revenue',
        targetACV: 348
      });
      
      expect(result.overallScore).toBeGreaterThan(0);
      expect(result.tam).toBeGreaterThan(0);
      expect(result.sam).toBeGreaterThan(0);
      expect(result.som).toBeGreaterThan(0);
      expect(result.evidence).toBeInstanceOf(Array);
      expect(result.recommendation).toBeTruthy();
    }, 30000); // 30s timeout for LLM call
  });
});
```

**Run tests:**
```bash
npm test -- MarketResearcher.test.ts
```

---

### Step 5: Integrate with UI

**File:** `/app/startup-validator-v4/page.tsx`

```typescript
// Replace mock data with API call

async function fetchMarketAnalysis() {
  setLoading(true);
  
  try {
    const response = await fetch('/api/agents/market-researcher', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        problem: leanCanvas.problem,
        solution: leanCanvas.solution,
        icp: leanCanvas.customerSegments,
        targetACV: 348
      })
    });
    
    const result = await response.json();
    
    if (result.success) {
      setMarketData(result.data);
    } else {
      setError(result.error.message);
    }
  } catch (error) {
    setError('Failed to analyze market');
  } finally {
    setLoading(false);
  }
}

useEffect(() => {
  if (leanCanvas.problem && leanCanvas.solution) {
    fetchMarketAnalysis();
  }
}, [leanCanvas]);
```

---

## ✅ VERIFICATION CHECKLIST

After implementing each agent, verify:

### Functionality
- [ ] API endpoint returns valid JSON
- [ ] Handles all test cases (happy path + edge cases)
- [ ] Error messages are clear and actionable
- [ ] Output matches schema exactly

### Performance
- [ ] Response time < 15s (p95)
- [ ] Cost < $0.10 per request
- [ ] Rate limiting works (429 after limit)
- [ ] Concurrent requests don't crash

### Quality
- [ ] Unit tests pass (90%+ coverage)
- [ ] LLM outputs are consistent (test 10x)
- [ ] Edge cases handled gracefully
- [ ] Logs are structured and searchable

### Integration
- [ ] UI displays agent output correctly
- [ ] Loading states work
- [ ] Error states are user-friendly
- [ ] Data flows to dependent screens

---

## 📊 PROGRESS TRACKING

Use this checklist to track implementation:

```
WEEK 1-2: INFRASTRUCTURE
  [ ] API routes structure
  [ ] BaseAgent class
  [ ] OpenAI SDK setup
  [ ] Rate limiting
  [ ] Error logging
  [ ] Test endpoint working

WEEK 3-4: FIRST AGENT
  [ ] Market Researcher agent
  [ ] Unit tests (10 cases)
  [ ] API endpoint
  [ ] UI integration
  [ ] Deployed to staging

WEEK 5-6: VALIDATION BATCH 1
  [ ] Competitor Agent
  [ ] Risk Analyzer Agent
  [ ] Demand Validator Agent

WEEK 7-8: VALIDATION BATCH 2
  [ ] Problem Validator Agent
  [ ] ICP Validator Agent
  [ ] Code refactoring

WEEK 9-10: CANVAS AGENTS
  [ ] Canvas Coach Agent
  [ ] Opportunity Analyst Agent
  [ ] Lean Canvas integration
  [ ] Opportunity Canvas integration

WEEK 11-12: PLANNING AGENTS
  [ ] Card Generator Agent
  [ ] Experiment Designer Agent
  [ ] 90-Day Plan integration

WEEK 13-14: POLISH
  [ ] Performance optimization
  [ ] Cost optimization
  [ ] Security audit
  [ ] Metrics dashboard
  [ ] Load testing
  [ ] Production deployment

TOTAL: 0/14 agents complete (0%)
```

---

**IMPLEMENTATION GUIDE COMPLETE** ✅

**Next Step:** Start Week 1-2 infrastructure setup. Follow this guide sequentially for best results.

---

**Last Updated:** February 6, 2026  
**Maintained By:** AI Implementation Team  
**Estimated Completion:** 14 weeks from start
