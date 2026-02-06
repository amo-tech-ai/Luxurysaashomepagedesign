# StartupAI - Implementation Prompts & Tasks

> **Purpose:** Actionable prompts for building StartupAI features  
> **Format:** Description, Rationale, User Stories, Success Criteria, Technical Details  
> **Status:** Active Development  
> **Last Updated:** 2026-02-04

---

## 📋 Table of Contents

1. [Backend Foundation](#backend-foundation)
2. [Authentication System](#authentication-system)
3. [Canvas Builder](#canvas-builder)
4. [Validator System](#validator-system)
5. [Coach AI Chatbot](#coach-ai-chatbot)
6. [Validation State Machine](#validation-state-machine)
7. [Agent Network](#agent-network)
8. [Dashboard & Analytics](#dashboard--analytics)

---

# Backend Foundation

## Task 001: Supabase Project Setup

### 📝 Description
Initialize Supabase project with PostgreSQL database, authentication, and Row Level Security (RLS) policies.

### 🎯 Rationale
StartupAI needs persistent data storage for user accounts, business canvases, validation reports, and conversation history. Without a database, all user work is lost on page refresh.

### 👤 User Stories

**Story 1: Sarah's First Canvas**
> Sarah, a first-time founder, spends 15 minutes building her lean canvas. She closes her laptop to grab coffee. When she returns and refreshes the page, her entire canvas is still there.

**Story 2: Mark's Progress Tracking**
> Mark has been validating his SaaS idea for 3 weeks. He logs in from his phone to check his validation score, sees it improved from 62 to 68, and reviews the conversation history where the Coach explained why.

**Story 3: Lisa's Team Collaboration**
> Lisa invites her co-founder to view their startup's canvas. The co-founder sees the same data, with proper permissions preventing accidental deletion.

### ✅ Success Criteria

- [ ] Supabase project created and accessible via API
- [ ] PostgreSQL database provisioned
- [ ] API keys generated and stored securely in environment variables
- [ ] Project URL configured for frontend connection
- [ ] Database can be accessed from local development environment
- [ ] Test query successfully reads/writes data

### 🛠️ Technical Implementation

**Edge Functions Required:**
- None (foundation setup)

**Database Tables:**
- `users` (via Supabase Auth)
- `startups`
- `canvas`
- `validation_sessions`
- `conversations`

**Schema (Initial):**

```sql
-- Users table (managed by Supabase Auth)
-- Automatically created

-- Startups table
CREATE TABLE startups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  industry TEXT,
  stage TEXT CHECK (stage IN ('idea', 'prototype', 'mvp', 'growth', 'scale')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE startups ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can only access their own startups
CREATE POLICY "Users can view own startups"
  ON startups FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own startups"
  ON startups FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own startups"
  ON startups FOR UPDATE
  USING (auth.uid() = user_id);
```

**Environment Variables:**

```env
# .env.local
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key (server-side only)
```

**Frontend Setup:**

```typescript
// /lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### 🎯 Key Points

- **Security First:** RLS policies prevent users from accessing each other's data
- **Scalable:** Supabase handles connection pooling, backups, and scaling
- **Developer Experience:** Instant REST API, real-time subscriptions built-in
- **Cost-Effective:** Free tier supports up to 500MB database, 50K monthly active users

### 📊 Mapping

- **Screens:** None (backend setup)
- **Features:** Foundation for all features
- **Agents:** None (infrastructure)
- **Use Cases:** All use cases require database

---

## Task 002: Database Schema - Canvas & Validation

### 📝 Description
Create database tables for storing lean canvases, validation sessions, assessments, campaigns, and sprints.

### 🎯 Rationale
The Lean Canvas is the single source of truth for a startup's business model. The Validator analyzes this canvas and tracks progress through 90-day validation cycles. We need structured storage for all validation data.

### 👤 User Stories

**Story 1: Alex's Canvas Evolution**
> Alex starts with a rough canvas. Over 2 months, he refines the problem statement 7 times based on customer interviews. He can see the full edit history and what changed each week.

**Story 2: Priya's Validation Journey**
> Priya completes onboarding and gets a validation score of 58/100. The Coach identifies "monetization" as her constraint and starts a 90-day campaign. After 5 sprints, her score is 74 and she has 12 paying customers.

**Story 3: Tom's Assessment Breakdown**
> Tom wants to understand why he scored 6/10 on "Desirability." He expands the dimension card and reads the AI's feedback: "Your UVP is feature-focused, not benefit-focused. Customers care about outcomes, not features."

### ✅ Success Criteria

- [ ] Canvas table stores all 9 blocks with proper relationships
- [ ] Validation sessions track state machine progress
- [ ] Assessments table stores 7 dimension scores + feedback
- [ ] Campaigns table links to sessions with goals and metrics
- [ ] Sprints table tracks PDCA cycles with outcomes
- [ ] Foreign keys maintain referential integrity
- [ ] Indexes optimize common queries (by user, by session, by date)
- [ ] RLS policies secure all tables

### 🛠️ Technical Implementation

**Database Schema:**

```sql
-- Canvas table (9 Lean Canvas blocks)
CREATE TABLE canvas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  startup_id UUID REFERENCES startups(id) ON DELETE CASCADE,
  
  -- 9 Canvas Blocks
  problem TEXT,
  solution TEXT,
  unique_value_proposition TEXT,
  unfair_advantage TEXT,
  customer_segments TEXT,
  channels TEXT,
  revenue_streams TEXT,
  cost_structure TEXT,
  key_metrics TEXT,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  
  -- Ensure one canvas per startup
  UNIQUE(startup_id)
);

-- Validation Sessions (state machine)
CREATE TABLE validation_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  startup_id UUID REFERENCES startups(id) ON DELETE CASCADE,
  
  -- State Machine
  state TEXT CHECK (state IN (
    'onboarding',
    'assessment',
    'constraint',
    'campaign_setup',
    'sprint_planning',
    'sprint_execution',
    'cycle_review'
  )) DEFAULT 'onboarding',
  
  -- Flags
  is_active BOOLEAN DEFAULT true,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Validation Assessments (7 dimensions)
CREATE TABLE validation_assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES validation_sessions(id) ON DELETE CASCADE,
  
  -- Which dimension?
  dimension TEXT CHECK (dimension IN (
    'clarity',
    'desirability',
    'viability',
    'feasibility',
    'defensibility',
    'timing',
    'mission'
  )),
  
  -- Score & Feedback
  score INTEGER CHECK (score BETWEEN 1 AND 10),
  feedback TEXT,
  evidence JSONB, -- Supporting data
  
  -- Metadata
  assessed_at TIMESTAMPTZ DEFAULT now()
);

-- Validation Campaigns (90-day cycles)
CREATE TABLE validation_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES validation_sessions(id) ON DELETE CASCADE,
  
  -- Constraint Type
  constraint_type TEXT CHECK (constraint_type IN (
    'acquisition',
    'monetization',
    'retention',
    'scalability'
  )),
  
  -- Campaign Details
  campaign_type TEXT, -- e.g., "Problem Validation", "Pricing Experiment"
  goal TEXT, -- SMART goal
  target_metric TEXT, -- e.g., "paying_customers"
  target_value NUMERIC, -- e.g., 20
  
  -- Timeline
  start_date DATE,
  end_date DATE,
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Validation Sprints (2-week PDCA cycles)
CREATE TABLE validation_sprints (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES validation_campaigns(id) ON DELETE CASCADE,
  
  -- Sprint Details
  sprint_number INTEGER CHECK (sprint_number BETWEEN 1 AND 5),
  purpose TEXT, -- What are we testing?
  
  -- PDCA Step
  pdca_step TEXT CHECK (pdca_step IN ('plan', 'do', 'check', 'act')),
  
  -- Outcomes
  outcomes JSONB, -- What did we learn?
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT now(),
  completed_at TIMESTAMPTZ
);

-- Enable RLS on all tables
ALTER TABLE canvas ENABLE ROW LEVEL SECURITY;
ALTER TABLE validation_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE validation_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE validation_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE validation_sprints ENABLE ROW LEVEL SECURITY;

-- RLS Policies (Canvas example, repeat for others)
CREATE POLICY "Users can view own canvas"
  ON canvas FOR SELECT
  USING (startup_id IN (
    SELECT id FROM startups WHERE user_id = auth.uid()
  ));

CREATE POLICY "Users can update own canvas"
  ON canvas FOR UPDATE
  USING (startup_id IN (
    SELECT id FROM startups WHERE user_id = auth.uid()
  ));

-- Indexes for performance
CREATE INDEX idx_canvas_startup ON canvas(startup_id);
CREATE INDEX idx_sessions_startup ON validation_sessions(startup_id);
CREATE INDEX idx_sessions_active ON validation_sessions(is_active);
CREATE INDEX idx_assessments_session ON validation_assessments(session_id);
CREATE INDEX idx_campaigns_session ON validation_campaigns(session_id);
CREATE INDEX idx_sprints_campaign ON validation_sprints(campaign_id);
```

### 🎯 Key Points

- **One Canvas Per Startup:** UNIQUE constraint ensures single source of truth
- **State Machine:** `validation_sessions.state` tracks where user is in validation journey
- **7 Dimensions:** Separate rows in `validation_assessments` for granular scoring
- **PDCA Tracking:** Sprints record Plan → Do → Check → Act outcomes
- **JSONB for Flexibility:** Evidence and outcomes use JSON for unstructured data

### 📊 Mapping

- **Screens:** Canvas Editor, Validator Report, Campaign Planner
- **Features:** Canvas Builder, Validator, 90-Day System
- **Agents:** Canvas Agent, Validator Agent
- **Edge Functions:** `/canvas-save`, `/validator-run`, `/chat` (context loading)

---

# Authentication System

## Task 003: Email & OAuth Authentication

### 📝 Description
Implement user signup, login, logout, and session management using Supabase Auth with email/password and Google OAuth.

### 🎯 Rationale
Users need accounts to save their work. Authentication enables personalized experiences, data persistence, and secure access control.

### 👤 User Stories

**Story 1: Emma's Quick Signup**
> Emma clicks "Get Started" on the homepage, signs up with Google OAuth in one click, and is immediately in the onboarding flow. No password to remember.

**Story 2: Carlos's Email Signup**
> Carlos prefers email. He enters his email, receives a magic link, clicks it, and is logged in without creating a password. Simple and secure.

**Story 3: Jen's Returning Session**
> Jen worked on her canvas last week. She opens the app today and is automatically logged in. Her canvas loads instantly.

### ✅ Success Criteria

- [ ] Users can sign up with email + password
- [ ] Users can sign up with Google OAuth
- [ ] Email verification sends confirmation link
- [ ] Password reset flow works via email
- [ ] Users stay logged in across sessions (refresh token)
- [ ] Logout clears session securely
- [ ] Protected routes redirect to login if not authenticated
- [ ] User profile data (name, email, avatar) accessible in app

### 🛠️ Technical Implementation

**Supabase Auth Setup:**

```typescript
// /lib/auth.ts
import { supabase } from './supabase'

// Sign up with email
export async function signUpWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  
  if (error) throw error
  return data
}

// Sign in with email
export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  
  if (error) throw error
  return data
}

// Sign in with Google
export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/onboarding`,
    },
  })
  
  if (error) throw error
  return data
}

// Sign out
export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

// Get current user
export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

// Listen to auth state changes
export function onAuthStateChange(callback: (user: any) => void) {
  return supabase.auth.onAuthStateChange((_event, session) => {
    callback(session?.user ?? null)
  })
}
```

**Auth Context Provider:**

```typescript
// /lib/AuthContext.tsx
import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChange } from './auth'

const AuthContext = createContext<{ user: any; loading: boolean }>({
  user: null,
  loading: true,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const { data: subscription } = onAuthStateChange((user) => {
      setUser(user)
      setLoading(false)
    })
    
    return () => subscription.subscription.unsubscribe()
  }, [])
  
  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
```

**Login Page:**

```typescript
// /app/login/page.tsx
import { useState } from 'react'
import { signInWithEmail, signInWithGoogle } from '@/lib/auth'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      await signInWithEmail(email, password)
      // Redirect to dashboard
      window.location.href = '/dashboard'
    } catch (error) {
      console.error('Login failed:', error)
      alert('Login failed. Please check your credentials.')
    } finally {
      setLoading(false)
    }
  }
  
  const handleGoogleLogin = async () => {
    setLoading(true)
    try {
      await signInWithGoogle()
    } catch (error) {
      console.error('Google login failed:', error)
      setLoading(false)
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF9F7]">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-sm border border-[#E8E6E0]">
        <h1 className="text-2xl font-serif mb-6">Sign in to StartupAI</h1>
        
        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-[#E8E6E0] rounded"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-[#E8E6E0] rounded"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0D5F4E] text-white py-2 rounded hover:bg-[#0E3E1B]"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
        
        <div className="mt-4">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full border border-[#E8E6E0] py-2 rounded hover:bg-[#F5F3EF]"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  )
}
```

**Protected Route Wrapper:**

```typescript
// /components/ProtectedRoute.tsx
import { useAuth } from '@/lib/AuthContext'
import { useEffect } from 'react'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  
  useEffect(() => {
    if (!loading && !user) {
      window.location.href = '/login'
    }
  }, [user, loading])
  
  if (loading) {
    return <div>Loading...</div>
  }
  
  if (!user) {
    return null
  }
  
  return <>{children}</>
}
```

### 🎯 Key Points

- **OAuth Simplifies Onboarding:** One-click Google login removes friction
- **Magic Links:** Email login without passwords improves security
- **Session Persistence:** Users stay logged in via refresh tokens
- **RLS Integration:** Supabase Auth automatically integrates with RLS policies

### 📊 Mapping

- **Screens:** Login, Signup, Password Reset
- **Features:** All features (authentication required)
- **Agents:** None (infrastructure)
- **Edge Functions:** None (Supabase handles auth)
- **Use Cases:** All logged-in users

---

# Canvas Builder

## Task 004: Interactive Canvas Editor with Auto-Save

### 📝 Description
Build an interactive 9-block Lean Canvas editor that auto-saves changes to the database and provides real-time AI suggestions.

### 🎯 Rationale
The Lean Canvas is the core artifact of the Lean Startup methodology. It's the single source of truth that feeds into the Validator, pitch deck, and all AI conversations. Users need a frictionless way to build and iterate on their business model.

### 👤 User Stories

**Story 1: Rachel's First Canvas**
> Rachel completes onboarding via Prompt Packs. The Coach asks her 15 questions about her idea. As she answers, the Canvas auto-populates in real-time. By the end, she has a complete business model without manually filling forms.

**Story 2: Mike's Iteration**
> Mike's been validating his idea for 3 weeks. He discovers his initial problem statement was too broad. He edits the "Problem" block, and within 2 seconds the change is saved. The Validator badge shows "Out of date - Revalidate to see new score."

**Story 3: Sara's AI Assistance**
> Sara is stuck on "Unfair Advantage." She clicks the block and the Canvas Agent suggests: "Your 15 years in healthcare give you unique insight. Frame it as: 'Deep domain expertise + regulatory know-how that takes competitors 5+ years to match.'"

### ✅ Success Criteria

- [ ] 9-block grid layout matches Lean Canvas structure
- [ ] Each block is editable inline (click to edit)
- [ ] Changes auto-save to database after 2-second debounce
- [ ] Save indicator shows "Saving..." → "Saved ✓"
- [ ] AI helper button per block triggers Canvas Agent suggestions
- [ ] Canvas loads instantly on page load (cached)
- [ ] Export to PDF/PNG functionality
- [ ] Mobile-responsive (single column on small screens)
- [ ] Empty state prompts user to start with Prompt Pack
- [ ] Undo/redo functionality

### 🛠️ Technical Implementation

**Frontend Component:**

```typescript
// /app/canvas/page.tsx
import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/AuthContext'
import { supabase } from '@/lib/supabase'
import { Sparkles } from 'lucide-react'

interface CanvasData {
  problem: string
  solution: string
  unique_value_proposition: string
  unfair_advantage: string
  customer_segments: string
  channels: string
  revenue_streams: string
  cost_structure: string
  key_metrics: string
}

export default function CanvasPage() {
  const { user } = useAuth()
  const [canvas, setCanvas] = useState<CanvasData | null>(null)
  const [saving, setSaving] = useState(false)
  const [saveTimeout, setSaveTimeout] = useState<any>(null)
  
  // Load canvas on mount
  useEffect(() => {
    loadCanvas()
  }, [user])
  
  async function loadCanvas() {
    if (!user) return
    
    // Get user's startup
    const { data: startups } = await supabase
      .from('startups')
      .select('id')
      .eq('user_id', user.id)
      .single()
    
    if (!startups) return
    
    // Load canvas
    const { data: canvasData } = await supabase
      .from('canvas')
      .select('*')
      .eq('startup_id', startups.id)
      .single()
    
    if (canvasData) {
      setCanvas(canvasData)
    }
  }
  
  // Auto-save with debounce
  function updateBlock(field: keyof CanvasData, value: string) {
    setCanvas((prev) => prev ? { ...prev, [field]: value } : null)
    
    // Clear existing timeout
    if (saveTimeout) clearTimeout(saveTimeout)
    
    // Set new timeout
    const timeout = setTimeout(() => {
      saveCanvas({ ...canvas!, [field]: value })
    }, 2000)
    
    setSaveTimeout(timeout)
  }
  
  async function saveCanvas(data: CanvasData) {
    setSaving(true)
    
    const { data: startups } = await supabase
      .from('startups')
      .select('id')
      .eq('user_id', user!.id)
      .single()
    
    await supabase
      .from('canvas')
      .upsert({
        startup_id: startups!.id,
        ...data,
      })
    
    setSaving(false)
  }
  
  if (!canvas) return <div>Loading...</div>
  
  return (
    <div className="min-h-screen bg-[#FAF9F7] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-serif">Lean Canvas</h1>
          <div className="text-sm text-[#6b9d89]">
            {saving ? 'Saving...' : 'Saved ✓'}
          </div>
        </div>
        
        {/* 9-block grid */}
        <div className="grid grid-cols-5 grid-rows-2 gap-4">
          {/* Row 1 */}
          <CanvasBlock
            title="Problem"
            value={canvas.problem}
            onChange={(v) => updateBlock('problem', v)}
          />
          <CanvasBlock
            title="Solution"
            value={canvas.solution}
            onChange={(v) => updateBlock('solution', v)}
          />
          <CanvasBlock
            title="Unique Value Proposition"
            value={canvas.unique_value_proposition}
            onChange={(v) => updateBlock('unique_value_proposition', v)}
            className="col-span-1"
          />
          <CanvasBlock
            title="Unfair Advantage"
            value={canvas.unfair_advantage}
            onChange={(v) => updateBlock('unfair_advantage', v)}
          />
          <CanvasBlock
            title="Customer Segments"
            value={canvas.customer_segments}
            onChange={(v) => updateBlock('customer_segments', v)}
          />
          
          {/* Row 2 */}
          <CanvasBlock
            title="Key Metrics"
            value={canvas.key_metrics}
            onChange={(v) => updateBlock('key_metrics', v)}
          />
          <CanvasBlock
            title="Channels"
            value={canvas.channels}
            onChange={(v) => updateBlock('channels', v)}
            className="col-span-2"
          />
          <CanvasBlock
            title="Cost Structure"
            value={canvas.cost_structure}
            onChange={(v) => updateBlock('cost_structure', v)}
          />
          <CanvasBlock
            title="Revenue Streams"
            value={canvas.revenue_streams}
            onChange={(v) => updateBlock('revenue_streams', v)}
          />
        </div>
      </div>
    </div>
  )
}

function CanvasBlock({
  title,
  value,
  onChange,
  className = '',
}: {
  title: string
  value: string
  onChange: (value: string) => void
  className?: string
}) {
  return (
    <div className={`bg-white border-2 border-[#E8E6E0] rounded-lg p-4 ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-[#0D5F4E]">{title}</h3>
        <button className="text-[#6b9d89] hover:text-[#0D5F4E]">
          <Sparkles className="w-4 h-4" />
        </button>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full min-h-[120px] text-sm resize-none focus:outline-none"
        placeholder={`Describe your ${title.toLowerCase()}...`}
      />
    </div>
  )
}
```

**Edge Function (AI Suggestions):**

```typescript
// /supabase/functions/canvas-suggest/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  const { block, currentContent, canvasData } = await req.json()
  
  // Call Gemini API
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': Deno.env.get('GEMINI_API_KEY')!,
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: `You are the Canvas Agent, an expert in Lean Startup methodology.

The user is working on the "${block}" block of their Lean Canvas.

Current content: "${currentContent}"

Full canvas context:
${JSON.stringify(canvasData, null, 2)}

Provide 3 concrete suggestions to improve this block. Be specific, actionable, and concise.

Format as JSON:
{
  "suggestions": [
    "Suggestion 1",
    "Suggestion 2",
    "Suggestion 3"
  ]
}`
        }]
      }]
    })
  })
  
  const data = await response.json()
  const text = data.candidates[0].content.parts[0].text
  
  // Parse JSON from response
  const suggestions = JSON.parse(text)
  
  return new Response(JSON.stringify(suggestions), {
    headers: { 'Content-Type': 'application/json' }
  })
})
```

### 🎯 Key Points

- **Auto-Save:** Users never lose work (2-second debounce prevents excessive writes)
- **Real-Time Feedback:** Save indicator shows status
- **AI Assistance:** Sparkle button per block triggers contextual suggestions
- **Single Source of Truth:** Canvas feeds Validator, Pitch Deck, Chat context

### 📊 Mapping

- **Screens:** Canvas Editor (`/canvas`)
- **Features:** Canvas Builder, Prompt Packs (auto-populate)
- **Agents:** Canvas Agent (suggestions per block)
- **Edge Functions:** `/canvas-suggest` (AI suggestions), `/canvas-save` (save to DB)
- **Database Tables:** `canvas`, `startups`
- **Use Cases:** Build business model, iterate based on validation, share with team

---

# Validator System

## Task 005: AI-Powered Validation Scoring Engine

### 📝 Description
Build the Validator backend that analyzes a startup's Lean Canvas + traction data, scores 7 dimensions (Clarity, Desirability, Viability, Feasibility, Defensibility, Timing, Mission), calculates an overall score, identifies the #1 constraint, and generates actionable feedback.

### 🎯 Rationale
The Validator is the core intelligence of StartupAI. It transforms a static business model into a decision tool by telling founders: (1) Is this idea worth pursuing? (2) What's the bottleneck? (3) What should I do next? Without the Validator, users have a canvas but no guidance.

### 👤 User Stories

**Story 1: Nina's Reality Check**
> Nina has a SaaS idea for HR teams. She completes her canvas and runs the Validator. Score: 42/100. The Validator says: "Your problem is clear, but you haven't validated demand. Talk to 10 HR managers before building anything." Nina saves 6 months of wasted development.

**Story 2: James's Pivot Decision**
> James has been building for 9 months with no traction. Validator score: 38/100. Constraint: "Monetization - Customers love the product but won't pay." The Coach suggests: "Test pricing with a landing page before adding more features." James pivots to paid early access and gets 5 customers in 2 weeks.

**Story 3: Amy's Confidence Boost**
> Amy is a first-time founder worried she's not ready. Validator score: 68/100. Constraint: "Acquisition - Product is solid, but you need distribution." The Coach shows her she's further along than she thought and suggests 3 acquisition experiments. Amy feels empowered.

### ✅ Success Criteria

- [ ] Validator analyzes Canvas + Traction data via Gemini API
- [ ] Returns scores for all 7 dimensions (1-10 scale)
- [ ] Calculates overall score (weighted average)
- [ ] Identifies #1 constraint (Acquisition, Monetization, Retention, Scalability)
- [ ] Generates 2-3 paragraph explanation per dimension
- [ ] Suggests 3-5 next actions based on constraint
- [ ] Saves assessment to `validation_assessments` table
- [ ] Creates or updates `validation_session` state
- [ ] Triggers Coach conversation in "Assessment" phase
- [ ] Returns results in <10 seconds

### 🛠️ Technical Implementation

**Edge Function:**

```typescript
// /supabase/functions/validator-run/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  const { startupId } = await req.json()
  
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  )
  
  // Load Canvas
  const { data: canvas } = await supabase
    .from('canvas')
    .select('*')
    .eq('startup_id', startupId)
    .single()
  
  // Load Traction Data (if exists)
  const { data: traction } = await supabase
    .from('traction')
    .select('*')
    .eq('startup_id', startupId)
    .maybeSingle()
  
  // Load Startup Context
  const { data: startup } = await supabase
    .from('startups')
    .select('*')
    .eq('id', startupId)
    .single()
  
  // Call Gemini for Validation
  const validationPrompt = `You are a startup validation expert. Analyze this business and score it across 7 dimensions.

CANVAS:
${JSON.stringify(canvas, null, 2)}

TRACTION:
${traction ? JSON.stringify(traction, null, 2) : 'No traction data yet'}

STARTUP CONTEXT:
- Industry: ${startup.industry}
- Stage: ${startup.stage}

SCORING RUBRIC (1-10 scale):

1. CLARITY (Problem-Solution Fit)
- Is the problem well-defined and urgent?
- Is the solution directly addressing the problem?
- Is the UVP clear and differentiated?

2. DESIRABILITY (Do people want this?)
- Is there evidence of demand?
- Have customers validated the problem?
- Will people pay for this solution?

3. VIABILITY (Business Model)
- Is the revenue model realistic?
- Are unit economics favorable?
- Is there a path to profitability?

4. FEASIBILITY (Can it be built?)
- Is the solution technically feasible?
- Does the team have the right skills?
- Are resources (time, money) sufficient?

5. DEFENSIBILITY (Competitive Advantage)
- Is the unfair advantage sustainable?
- Are there barriers to entry?
- How hard is it to copy?

6. TIMING (Market Timing)
- Is now the right time for this idea?
- Are market conditions favorable?
- Is the problem getting worse or better?

7. MISSION (Team Alignment)
- Is the founder passionate about this problem?
- Do they have domain expertise?
- Can they sustain effort for 5+ years?

Return JSON:
{
  "overall_score": 72,
  "dimensions": {
    "clarity": { "score": 8, "feedback": "..." },
    "desirability": { "score": 6, "feedback": "..." },
    "viability": { "score": 7, "feedback": "..." },
    "feasibility": { "score": 8, "feedback": "..." },
    "defensibility": { "score": 5, "feedback": "..." },
    "timing": { "score": 9, "feedback": "..." },
    "mission": { "score": 8, "feedback": "..." }
  },
  "constraint": "monetization",
  "constraint_explanation": "Your biggest bottleneck is...",
  "next_actions": [
    "Test pricing with 10 customers",
    "Run a landing page experiment",
    "Interview 5 users about willingness to pay"
  ]
}`
  
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': Deno.env.get('GEMINI_API_KEY')!,
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: validationPrompt }] }],
      generationConfig: {
        temperature: 0.3, // More deterministic
        topP: 0.8,
        topK: 40,
      }
    })
  })
  
  const data = await response.json()
  const resultText = data.candidates[0].content.parts[0].text
  
  // Parse JSON from response
  const validation = JSON.parse(resultText.replace(/```json\n|\n```/g, ''))
  
  // Create or update validation session
  const { data: session } = await supabase
    .from('validation_sessions')
    .upsert({
      startup_id: startupId,
      state: 'assessment',
      is_active: true,
    })
    .select()
    .single()
  
  // Save assessments
  for (const [dimension, data] of Object.entries(validation.dimensions)) {
    await supabase
      .from('validation_assessments')
      .insert({
        session_id: session.id,
        dimension: dimension,
        score: data.score,
        feedback: data.feedback,
      })
  }
  
  return new Response(JSON.stringify(validation), {
    headers: { 'Content-Type': 'application/json' }
  })
})
```

**Frontend (Validator Report):**

```typescript
// /app/validator/page.tsx
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Sparkles } from 'lucide-react'

export default function ValidatorPage() {
  const [loading, setLoading] = useState(false)
  const [report, setReport] = useState<any>(null)
  
  async function runValidator() {
    setLoading(true)
    
    // Get startup ID
    const { data: startups } = await supabase
      .from('startups')
      .select('id')
      .single()
    
    // Call validator edge function
    const { data } = await supabase.functions.invoke('validator-run', {
      body: { startupId: startups!.id }
    })
    
    setReport(data)
    setLoading(false)
  }
  
  if (!report) {
    return (
      <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center">
        <button
          onClick={runValidator}
          disabled={loading}
          className="bg-[#0D5F4E] text-white px-8 py-3 rounded-lg flex items-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          {loading ? 'Analyzing...' : 'Run Validation'}
        </button>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-[#FAF9F7] p-8">
      <div className="max-w-5xl mx-auto">
        {/* Score Circle */}
        <div className="text-center mb-8">
          <div className="inline-block">
            <div className="w-32 h-32 rounded-full border-8 border-[#0D5F4E] flex items-center justify-center">
              <span className="text-4xl font-serif">{report.overall_score}</span>
            </div>
            <p className="mt-2 text-sm text-[#6b9d89]">Overall Score</p>
          </div>
        </div>
        
        {/* Constraint */}
        <div className="bg-white border-2 border-[#E8E6E0] rounded-lg p-6 mb-6">
          <h2 className="text-xl font-serif mb-2">Your #1 Constraint</h2>
          <p className="text-lg font-medium text-[#0D5F4E] mb-2 capitalize">
            {report.constraint}
          </p>
          <p className="text-sm">{report.constraint_explanation}</p>
        </div>
        
        {/* 7 Dimensions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {Object.entries(report.dimensions).map(([name, data]: [string, any]) => (
            <div key={name} className="bg-white border-2 border-[#E8E6E0] rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium capitalize">{name}</h3>
                <span className="text-2xl font-serif">{data.score}/10</span>
              </div>
              <p className="text-sm text-gray-600">{data.feedback}</p>
            </div>
          ))}
        </div>
        
        {/* Next Actions */}
        <div className="bg-white border-2 border-[#E8E6E0] rounded-lg p-6">
          <h2 className="text-xl font-serif mb-4">Recommended Actions</h2>
          <ol className="space-y-2">
            {report.next_actions.map((action: string, i: number) => (
              <li key={i} className="flex gap-3">
                <span className="font-serif text-[#0D5F4E]">{i + 1}.</span>
                <span>{action}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
```

### 🎯 Key Points

- **AI-Powered Analysis:** Gemini 2.0 Flash scores each dimension with reasoning
- **Constraint Identification:** Automatically finds bottleneck (Acquisition, Monetization, etc.)
- **Actionable Feedback:** Not just scores, but "here's what to do next"
- **Context-Aware:** Uses Canvas + Traction + Industry for smart scoring

### 📊 Mapping

- **Screens:** Validator Report (`/validator`)
- **Features:** Validator, Assessment Phase
- **Agents:** Validator Agent (scoring), Coach (explains results)
- **Edge Functions:** `/validator-run`
- **Database Tables:** `validation_sessions`, `validation_assessments`, `canvas`, `traction`
- **Use Cases:** Validate idea, identify constraint, prioritize actions

---

# Coach AI Chatbot

## Task 006: Conversational AI with Context & Phase Awareness

### 📝 Description
Build a chat interface where founders talk to the Coach AI, which routes questions to specialized agents, loads full context (Canvas, Traction, Session state), and guides users through validation phases.

### 🎯 Rationale
Chat is the primary interface for StartupAI. Instead of clicking through menus, founders ask questions and get expert advice. The Coach needs to understand where the user is in their validation journey and respond accordingly.

### 👤 User Stories

**Story 1: David's First Question**
> David just completed onboarding. He asks: "How do I know if my problem is real?" The Coach (in Assessment phase) responds: "Great question. Let's dig into your problem statement. You said 'HR teams waste time on manual scheduling.' Have you talked to any HR managers to confirm this is their top pain point?"

**Story 2: Maya's Constraint Confusion**
> Maya's Validator identified "Monetization" as her constraint. She asks: "Why is monetization my bottleneck? People love my product." The Coach explains: "Your Desirability score is 8/10, which is strong. But you haven't tested pricing yet. Love doesn't equal willingness to pay. Let's run a pricing experiment."

**Story 3: Oliver's Tactical Question**
> Oliver is in Sprint Execution. He asks: "What's a good CAC for B2B SaaS?" The SaaS Agent responds: "For B2B SaaS, aim for CAC < 1/3 of LTV. If your annual contract value is $10K, target CAC under $3.3K. Your industry average is $2.8K."

### ✅ Success Criteria

- [ ] Chat UI sends messages to `/ai-chat` edge function
- [ ] Edge function loads full context (Canvas, Session, Traction, History)
- [ ] Router analyzes intent and routes to correct agent
- [ ] AI response includes citations/sources when making claims
- [ ] Conversation saved to `conversations` table
- [ ] Phase-aware: Coach tone/suggestions change based on validation state
- [ ] Quick actions appear contextually (e.g., "Run Validator" button when Canvas complete)
- [ ] Message history persists across sessions
- [ ] Typing indicator shows while AI is thinking
- [ ] Mobile-friendly chat interface

### 🛠️ Technical Implementation

**Edge Function:**

```typescript
// /supabase/functions/ai-chat/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  const { message, startupId } = await req.json()
  
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  )
  
  // Load context
  const [canvas, session, traction, history] = await Promise.all([
    supabase.from('canvas').select('*').eq('startup_id', startupId).single(),
    supabase.from('validation_sessions').select('*').eq('startup_id', startupId).maybeSingle(),
    supabase.from('traction').select('*').eq('startup_id', startupId).maybeSingle(),
    supabase.from('conversations').select('*').eq('startup_id', startupId).order('created_at', { ascending: false }).limit(10),
  ])
  
  // Build context prompt
  const contextPrompt = `You are the Startup Coach, a warm and encouraging AI mentor helping founders validate their ideas.

CURRENT PHASE: ${session.data?.state || 'onboarding'}

CANVAS:
${JSON.stringify(canvas.data, null, 2)}

TRACTION:
${traction.data ? JSON.stringify(traction.data, null, 2) : 'No traction data yet'}

RECENT CONVERSATION:
${history.data?.map(msg => `${msg.role}: ${msg.content}`).join('\n')}

USER MESSAGE: "${message}"

INSTRUCTIONS:
- If in "assessment" phase, help user understand their validation scores
- If in "constraint" phase, explain the bottleneck and suggest campaigns
- If in "sprint_execution" phase, coach them through experiments
- Always be warm, encouraging, and specific
- Use real numbers and examples
- End with a question to keep the conversation going

Respond naturally. No need for JSON formatting.`
  
  // Call Gemini
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': Deno.env.get('GEMINI_API_KEY')!,
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: contextPrompt }] }]
    })
  })
  
  const data = await response.json()
  const aiMessage = data.candidates[0].content.parts[0].text
  
  // Save conversation
  await supabase.from('conversations').insert([
    { startup_id: startupId, role: 'user', content: message },
    { startup_id: startupId, role: 'assistant', content: aiMessage },
  ])
  
  return new Response(JSON.stringify({ message: aiMessage }), {
    headers: { 'Content-Type': 'application/json' }
  })
})
```

**Frontend Component:**

```typescript
// /components/Coach.tsx
import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase'
import { Send, Sparkles } from 'lucide-react'

export default function Coach({ startupId }: { startupId: string }) {
  const [messages, setMessages] = useState<any[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  // Load conversation history
  useEffect(() => {
    loadHistory()
  }, [startupId])
  
  async function loadHistory() {
    const { data } = await supabase
      .from('conversations')
      .select('*')
      .eq('startup_id', startupId)
      .order('created_at', { ascending: true })
    
    if (data) setMessages(data)
  }
  
  async function sendMessage() {
    if (!input.trim()) return
    
    setLoading(true)
    const userMessage = input
    setInput('')
    
    // Optimistically add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    
    // Call AI
    const { data } = await supabase.functions.invoke('ai-chat', {
      body: { message: userMessage, startupId }
    })
    
    // Add AI response
    setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
    setLoading(false)
    
    // Auto-scroll
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <div className="flex flex-col h-full bg-white border-2 border-[#E8E6E0] rounded-lg">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg ${
              msg.role === 'user'
                ? 'bg-[#0D5F4E] text-white'
                : 'bg-[#F5F3EF] text-gray-900'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-[#F5F3EF] p-3 rounded-lg">
              <Sparkles className="w-5 h-5 animate-pulse text-[#6b9d89]" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <div className="border-t-2 border-[#E8E6E0] p-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask the Coach anything..."
          className="flex-1 px-3 py-2 border border-[#E8E6E0] rounded-lg focus:outline-none focus:border-[#0D5F4E]"
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="bg-[#0D5F4E] text-white px-4 py-2 rounded-lg hover:bg-[#0E3E1B] disabled:opacity-50"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
```

### 🎯 Key Points

- **Context-Aware:** AI knows full Canvas, Session state, Traction data
- **Phase-Aware:** Coach changes behavior based on validation phase
- **Conversational:** Natural language, not rigid forms
- **Persistent:** Conversation history saved and loaded

### 📊 Mapping

- **Screens:** Chat Panel (on Validator, Dashboard, Canvas pages)
- **Features:** Coach, Agent Routing, Context Loading
- **Agents:** Coach, Canvas Agent, Validator Agent, SaaS Agent (24 total)
- **Edge Functions:** `/ai-chat`
- **Database Tables:** `conversations`, `validation_sessions`, `canvas`, `traction`
- **Use Cases:** Ask questions, get advice, understand scores, plan experiments

---

## 📊 Summary Table: All Implementation Tasks

| # | Task | Priority | Complexity | Est. Time | Dependencies |
|---|------|----------|------------|-----------|--------------|
| **Backend Foundation** |
| 001 | Supabase Project Setup | P0 | Low | 2h | None |
| 002 | Database Schema (Canvas + Validation) | P0 | Medium | 4h | Task 001 |
| 003 | Authentication (Email + OAuth) | P0 | Medium | 6h | Task 001 |
| **Canvas Builder** |
| 004 | Interactive Canvas Editor | P0 | Medium | 8h | Task 002, 003 |
| **Validator** |
| 005 | AI Validation Scoring Engine | P0 | High | 10h | Task 002, 004 |
| **Coach Chatbot** |
| 006 | Conversational AI with Context | P0 | High | 8h | Task 002, 003, 005 |
| **Validation System** |
| 007 | State Machine Logic | P1 | High | 8h | Task 002, 006 |
| 008 | Phase Handlers (Onboarding, Assessment, etc.) | P1 | High | 14h | Task 007 |
| 009 | Campaign Planning UI | P1 | Medium | 6h | Task 008 |
| 010 | Sprint Tracking System | P1 | Medium | 8h | Task 009 |
| **Agent Network** |
| 011 | Agent Router System | P1 | Medium | 6h | Task 006 |
| 012 | 6 Core Agents (Canvas, Validator, Sales, SaaS, CRM, Pitch) | P1 | High | 16h | Task 011 |
| 013 | 18 Additional Agents | P2 | High | 30h | Task 012 |
| **Knowledge Base** |
| 014 | Vector Database Setup (pgvector) | P1 | Medium | 6h | Task 001 |
| 015 | Playbook Structure & Ingestion | P1 | Medium | 12h | Task 014 |
| **Dashboard & Analytics** |
| 016 | Dashboard UI (Home, Metrics, Tasks) | P1 | Medium | 10h | Task 002, 003 |
| 017 | Analytics & Benchmarking | P2 | Medium | 8h | Task 016 |
| **Polish** |
| 018 | Mobile Responsive Design | P1 | Medium | 12h | All features |
| 019 | E2E Testing | P1 | Medium | 16h | All features |
| 020 | Performance Optimization | P2 | Low | 8h | All features |

**Total Estimated Time:** ~178 hours (~4.5 weeks for 1 developer, ~2.5 weeks for 2 developers)

---

## 🎯 Next Steps

1. **Read full documentation:**
   - `/docs/features/progress-tracker.md` - Current status
   - `/docs/features/system-diagrams.md` - Architecture diagrams
   - `/docs/features/prd.md` - Product requirements

2. **Start with Backend Foundation:**
   - Task 001: Supabase Setup
   - Task 002: Database Schema
   - Task 003: Authentication

3. **Build MVP Core (Weeks 1-2):**
   - Task 004: Canvas Editor
   - Task 005: Validator
   - Task 006: Coach Chat

4. **Add Validation System (Weeks 3-4):**
   - Task 007-010: State Machine + Phase Handlers

5. **Expand Intelligence (Weeks 5-6):**
   - Task 011-012: Agent Network
   - Task 014-015: Vector DB + Playbooks

---

**Last Updated:** 2026-02-04  
**Maintained By:** Engineering Team  
**Format:** Ready-to-execute implementation prompts
