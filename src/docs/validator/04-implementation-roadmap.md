# Validator Flow - Implementation Roadmap

**Document:** 04-implementation-roadmap.md  
**Status:** Planning  
**Purpose:** Phased implementation plan with priorities and milestones  
**Date:** February 6, 2026

---

## Implementation Phases

### Phase 1: Core Flow (Week 1-2) — MVP

**Goal:** End-to-end validation flow working with all 7 agents

#### 1.1 Database Schema (Day 1)
```sql
-- Create 3 tables
CREATE TABLE validator_sessions (
  id uuid PRIMARY KEY,
  user_id uuid,
  input_text text NOT NULL,
  status text NOT NULL, -- draft, running, complete, partial, failed
  progress int DEFAULT 0,
  created_at timestamp,
  updated_at timestamp
);

CREATE TABLE validator_runs (
  id uuid PRIMARY KEY,
  session_id uuid REFERENCES validator_sessions,
  agent_name text NOT NULL,
  status text NOT NULL, -- queued, running, ok, partial, failed
  output_json jsonb,
  error_message text,
  duration_ms int,
  has_citations bool DEFAULT false,
  created_at timestamp
);

CREATE TABLE validation_reports (
  id uuid PRIMARY KEY,
  session_id uuid REFERENCES validator_sessions,
  score int NOT NULL,
  verdict text NOT NULL, -- GO, CAUTION, NO-GO
  summary_verdict text,
  highlights jsonb, -- 4 strengths
  red_flags jsonb, -- 4 concerns
  scores_matrix jsonb, -- 7 dimensions
  next_steps jsonb, -- 7 actions
  details jsonb, -- 14 sections
  verified bool DEFAULT false,
  verification_json jsonb,
  created_at timestamp
);

-- Add indexes
CREATE INDEX idx_sessions_user_id ON validator_sessions(user_id);
CREATE INDEX idx_sessions_status ON validator_sessions(status);
CREATE INDEX idx_runs_session_id ON validator_runs(session_id);
CREATE INDEX idx_runs_status ON validator_runs(status);
CREATE INDEX idx_reports_session_id ON validation_reports(session_id);
```

**Acceptance:** All tables created, indexes in place, RLS policies configured

---

#### 1.2 Edge Function: validator-followup (Day 2)
```typescript
// /supabase/functions/validator-followup/index.ts

import { Genkit } from 'genkit';
import { gemini3FlashPreview } from '@genkit-ai/googleai';

const ai = genkit({
  plugins: [googleAI()],
  model: gemini3FlashPreview,
});

Deno.serve(async (req) => {
  const { messages } = await req.json();
  
  // Track coverage
  const coverage = {
    customer: false,
    problem: false,
    competitors: false,
    innovation: false,
    demand: false,
    research: false,
    uniqueness: false,
    websites: false
  };
  
  // Analyze messages for coverage
  const userMessages = messages.filter(m => m.role === 'user');
  const conversationText = userMessages.map(m => m.content).join('\n');
  
  // Call Gemini to determine next question
  const prompt = `
You are a startup validator interviewing a founder.

Conversation so far:
${conversationText}

Determine:
1. What topics have been covered (customer, problem, competitors, etc.)
2. If we have enough information (5+ topics covered), respond with action: "ready"
3. Otherwise, ask the most important missing question

Output JSON:
{
  "action": "ask" | "ready",
  "question": "your next question",
  "coverage": {customer: true/false, problem: true/false, ...},
  "questionNumber": 3
}
  `;
  
  const result = await ai.generate(prompt);
  const response = JSON.parse(result.text);
  
  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' },
  });
});
```

**Acceptance:** Edge function deployed, returns next question or "ready" signal

---

#### 1.3 Edge Function: validator-start (Day 3-4)
```typescript
// /supabase/functions/validator-start/index.ts

import { createClient } from '@supabase/supabase-js';
import { Genkit } from 'genkit';
import { gemini3FlashPreview, googleAI } from '@genkit-ai/googleai';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

const ai = genkit({
  plugins: [
    googleAI({ apiKey: Deno.env.get('GEMINI_API_KEY')! })
  ],
  model: gemini3FlashPreview,
});

Deno.serve(async (req) => {
  const { input_text } = await req.json();
  
  // 1. Create session
  const { data: session } = await supabase
    .from('validator_sessions')
    .insert({
      input_text,
      status: 'running',
      progress: 0
    })
    .select()
    .single();
  
  // 2. Create 7 agent runs (all queued)
  const agents = [
    'ExtractorAgent',
    'ResearchAgent',
    'CompetitorAgent',
    'ScoringAgent',
    'MVPAgent',
    'ComposerAgent',
    'VerifierAgent'
  ];
  
  for (const agent of agents) {
    await supabase.from('validator_runs').insert({
      session_id: session.id,
      agent_name: agent,
      status: 'queued'
    });
  }
  
  // 3. Execute agents asynchronously (don't await)
  executeAgentPipeline(session.id, input_text);
  
  return new Response(
    JSON.stringify({
      session_id: session.id,
      status: 'running',
      message: 'Validation pipeline started'
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
});

async function executeAgentPipeline(sessionId: string, inputText: string) {
  try {
    // STEP 1: ExtractorAgent (3-5s)
    const profile = await runExtractorAgent(sessionId, inputText);
    
    // STEP 2: PARALLEL — ResearchAgent + CompetitorAgent (8-12s each)
    const [marketResearch, competitors] = await Promise.all([
      runResearchAgent(sessionId, profile),
      runCompetitorAgent(sessionId, profile)
    ]);
    
    // STEP 3: ScoringAgent (5-8s)
    const scoring = await runScoringAgent(sessionId, profile, marketResearch, competitors);
    
    // STEP 4: MVPAgent (3-5s)
    const mvp = await runMVPAgent(sessionId, profile, scoring);
    
    // STEP 5: ComposerAgent (5-8s)
    const report = await runComposerAgent(sessionId, {
      profile,
      marketResearch,
      competitors,
      scoring,
      mvp
    });
    
    // STEP 6: VerifierAgent (<1s)
    const verification = await runVerifierAgent(sessionId, report);
    
    // STEP 7: Save report
    await supabase.from('validation_reports').insert({
      session_id: sessionId,
      ...report,
      verified: verification.verified,
      verification_json: verification
    });
    
    // Update session status
    await supabase
      .from('validator_sessions')
      .update({ status: 'complete', progress: 100 })
      .eq('id', sessionId);
      
  } catch (error) {
    console.error('Pipeline failed:', error);
    await supabase
      .from('validator_sessions')
      .update({ status: 'failed', progress: 0 })
      .eq('id', sessionId);
  }
}
```

**Acceptance:** Pipeline executes all 7 agents, saves report to DB

---

#### 1.4 Edge Function: validator-status (Day 5)
```typescript
// /supabase/functions/validator-status/index.ts

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const sessionId = url.searchParams.get('session_id');
  
  // Get session
  const { data: session } = await supabase
    .from('validator_sessions')
    .select('*')
    .eq('id', sessionId)
    .single();
  
  // Get all runs
  const { data: runs } = await supabase
    .from('validator_runs')
    .select('*')
    .eq('session_id', sessionId)
    .order('created_at');
  
  // Get report (if complete)
  const { data: report } = await supabase
    .from('validation_reports')
    .select('id, score, verdict, verified')
    .eq('session_id', sessionId)
    .single();
  
  // Map runs to steps
  const steps = runs.map(run => ({
    agent: run.agent_name,
    status: run.status,
    duration_ms: run.duration_ms,
    has_citations: run.has_citations
  }));
  
  return new Response(
    JSON.stringify({
      session_id: sessionId,
      status: session.status,
      progress: session.progress,
      steps,
      report: report ? {
        report_id: report.id,
        score: report.score,
        verdict: report.verdict,
        verified: report.verified
      } : null
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
});
```

**Acceptance:** Returns real-time progress, auto-updates every 2s

---

#### 1.5 Frontend: ValidatorChat Component (Day 6)
```typescript
// /app/validator/components/ValidatorChat.tsx

'use client';

import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function ValidatorChat({ onGenerate }: { onGenerate: (text: string) => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Welcome! Tell me about your startup idea. What problem are you solving and for whom?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [canGenerate, setCanGenerate] = useState(false);
  
  const userMessageCount = messages.filter(m => m.role === 'user').length;
  const showGenerate = userMessageCount >= 2;
  
  const handleSend = async () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: 'user' as const, content: input }];
    setMessages(newMessages);
    setInput('');
    
    setIsTyping(true);
    
    try {
      const response = await fetch('/functions/v1/validator-followup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });
      
      const data = await response.json();
      
      if (data.action === 'ready') {
        setCanGenerate(true);
      } else {
        setMessages([...newMessages, {
          role: 'assistant',
          content: data.question
        }]);
      }
    } catch (error) {
      // Fallback question
      setMessages([...newMessages, {
        role: 'assistant',
        content: 'Tell me more about how you plan to solve this problem.'
      }]);
    } finally {
      setIsTyping(false);
    }
  };
  
  const handleGenerate = () => {
    const inputText = messages
      .filter(m => m.role === 'user')
      .map(m => m.content)
      .join('\n\n');
    onGenerate(inputText);
  };
  
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-[#0D5F4E]" />
          <span className="font-medium">Idea Validator</span>
        </div>
        {showGenerate && (
          <span className="text-sm text-green-600">● Ready to generate</span>
        )}
      </div>
      
      {/* Messages */}
      <div className="h-[500px] overflow-y-auto p-6 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-[#0D5F4E] text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-500 p-4 rounded-lg italic">
              ⌨ AI is typing...
            </div>
          </div>
        )}
      </div>
      
      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Type your answer..."
            className="flex-1 p-3 border border-gray-200 rounded-lg resize-none"
            rows={3}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="px-6 py-3 bg-[#0D5F4E] text-white rounded-lg hover:bg-[#0a4d3f] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Send
          </button>
        </div>
        
        {showGenerate && (
          <button
            onClick={handleGenerate}
            className="w-full mt-3 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-medium"
          >
            Generate Report ▶
          </button>
        )}
      </div>
    </div>
  );
}
```

**Acceptance:** Chat component works, handles followup, shows Generate button

---

#### 1.6 Frontend: Validator Pages (Day 7-8)
```
/app/validator/page.tsx                    (entry hero + chat)
/app/validator/run/[sessionId]/page.tsx    (progress tracking)
/app/validator/report/[reportId]/page.tsx  (decision-first report)
```

**Acceptance:** All 3 pages render, navigation works, data loads

---

#### 1.7 Frontend: Report Sections (Day 9-10)
```typescript
// Create reusable section component
<ReportSection
  title="Problem Clarity"
  icon="💡"
  badge="85/100"
  preview="Clear pain point. 15 interviews..."
  expanded={expandedSection === 1}
  onToggle={() => setExpandedSection(expandedSection === 1 ? null : 1)}
>
  {/* Full content when expanded */}
</ReportSection>
```

**Acceptance:** All 14 sections render, expand/collapse works

---

### Phase 2: Enhancements (Week 3-4)

#### 2.1 Trace Drawer
- Slide-out panel showing agent execution details
- Duration, model, tools used, citations count
- Error messages if any agent failed

#### 2.2 Verdict Scales
- Color-coded score circle (green/amber/red)
- Radar chart for 7 dimensions
- Tradeoffs table (strengths vs concerns)

#### 2.3 Mobile Responsiveness
- Stack columns vertically
- Full-width cards
- Bottom sheet for trace drawer

#### 2.4 Error Handling
- Agent timeout handling
- Partial report display
- Regenerate failed sections

---

### Phase 3: Polish (Week 5)

#### 3.1 PDF Export
- Generate PDF from report
- Include all 14 sections
- Logo, branding, formatting

#### 3.2 Share Link
- Public report URL
- Optional password protection
- Analytics (views, time spent)

#### 3.3 Save to Account
- Link report to user account
- History of all validations
- Compare reports side-by-side

---

## Testing Strategy

### Unit Tests
```typescript
// Test each agent independently
describe('ExtractorAgent', () => {
  it('should extract startup profile from text', async () => {
    const input = "I'm building an AI task manager...";
    const profile = await extractorAgent(input);
    
    expect(profile.problem).toBeDefined();
    expect(profile.customer_segment).toBeDefined();
    expect(profile.solution).toBeDefined();
  });
});
```

### Integration Tests
```typescript
// Test full pipeline
describe('Validator Pipeline', () => {
  it('should complete all 7 agents', async () => {
    const sessionId = await startValidation("AI task manager...");
    
    // Poll until complete
    let status;
    do {
      status = await getStatus(sessionId);
      await sleep(2000);
    } while (status.status === 'running');
    
    expect(status.status).toBe('complete');
    expect(status.report).toBeDefined();
    expect(status.report.score).toBeGreaterThan(0);
  });
});
```

### E2E Tests
```typescript
// Test user flow
describe('Validator Flow', () => {
  it('should complete chat → progress → report', async () => {
    // 1. Start chat
    await page.goto('/validator');
    await page.type('textarea', 'I'm building...');
    await page.click('button:has-text("Send")');
    
    // 2. Wait for AI response
    await page.waitForSelector('.assistant-message');
    
    // 3. Send 2nd message
    await page.type('textarea', 'For remote teams...');
    await page.click('button:has-text("Send")');
    
    // 4. Click Generate
    await page.click('button:has-text("Generate Report")');
    
    // 5. Verify progress page
    await page.waitForURL('/validator/run/*');
    expect(page.locator('text=ExtractorAgent')).toBeVisible();
    
    // 6. Wait for completion
    await page.waitForURL('/validator/report/*');
    
    // 7. Verify report
    expect(page.locator('text=VERDICT')).toBeVisible();
    expect(page.locator('text=CAUTION|GO|NO-GO')).toBeVisible();
  });
});
```

---

## Deployment Checklist

### Prerequisites
- [x] Supabase project created
- [x] Gemini API key obtained
- [x] Google Search API key obtained

### Database Setup
```bash
# Run migrations
supabase db push

# Verify tables
supabase db inspect
```

### Edge Functions
```bash
# Deploy all functions
supabase functions deploy validator-followup
supabase functions deploy validator-start
supabase functions deploy validator-status

# Set secrets
supabase secrets set GEMINI_API_KEY=your_key_here
supabase secrets set GOOGLE_SEARCH_API_KEY=your_key_here
```

### Frontend
```bash
# Build
npm run build

# Deploy to Vercel
vercel deploy --prod
```

---

## Monitoring

### Key Metrics
- **Pipeline success rate:** >80%
- **Average execution time:** <80s
- **Agent failure rate:** <10%
- **User completion rate:** >60% (start → report)

### Alerts
- Pipeline execution >120s → Slack alert
- Agent failure rate >20% → Email alert
- Database errors → PagerDuty

---

## Future Enhancements

### V2 Features
- Integration with Lean Canvas (auto-import data)
- Team collaboration (comments, shared reports)
- A/B testing (compare 2 ideas side-by-side)
- Investor view mode (simplified report)

### V3 Features
- Real-time AI coach during validation
- Automated validation experiments (landing page tests)
- Integration with Stripe (billing, payment validation)
- Mobile app (React Native)

---

**Status:** Implementation roadmap complete  
**Ready for:** Development kickoff

