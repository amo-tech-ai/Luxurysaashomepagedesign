-- StartupAI Database Schema Migration
-- Created: 2026-02-04
-- Description: Initial schema for Lean Canvas, Validation, and Coach features

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ====================
-- CORE TABLES
-- ====================

-- Startups table (already exists, ensuring schema)
CREATE TABLE IF NOT EXISTS startups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  industry TEXT,
  stage TEXT CHECK (stage IN ('idea', 'prototype', 'mvp', 'growth', 'scale')) DEFAULT 'idea',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Lean Canvas table
CREATE TABLE IF NOT EXISTS lean_canvases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  startup_id UUID REFERENCES startups(id) ON DELETE CASCADE NOT NULL,
  
  -- Row 1: Strategy Core
  problem TEXT DEFAULT '',
  solution TEXT DEFAULT '',
  unique_value_proposition TEXT DEFAULT '',
  unfair_advantage TEXT DEFAULT '',
  customer_segments TEXT DEFAULT '',
  
  -- Row 2: Validation
  existing_alternatives TEXT DEFAULT '',
  key_metrics TEXT DEFAULT '',
  high_level_concept TEXT DEFAULT '',
  channels TEXT DEFAULT '',
  early_adopters TEXT DEFAULT '',
  
  -- Row 3: Economics
  cost_structure TEXT DEFAULT '',
  revenue_streams TEXT DEFAULT '',
  
  -- Metadata
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  
  -- One canvas per startup
  UNIQUE(startup_id)
);

-- ====================
-- COACH & VALIDATION TABLES
-- ====================

-- Validation Sessions (state machine tracker)
CREATE TABLE IF NOT EXISTS validation_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  startup_id UUID REFERENCES startups(id) ON DELETE CASCADE NOT NULL,
  
  state JSONB DEFAULT '{"phase": "onboarding", "scores": {}}'::jsonb,
  is_active BOOLEAN DEFAULT true,
  
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Validation Assessments (7 dimensions)
CREATE TABLE IF NOT EXISTS validation_assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES validation_sessions(id) ON DELETE CASCADE NOT NULL,
  
  dimension TEXT CHECK (dimension IN (
    'clarity',
    'desirability',
    'viability',
    'feasibility',
    'defensibility',
    'timing',
    'mission'
  )) NOT NULL,
  
  score INTEGER CHECK (score BETWEEN 1 AND 10) NOT NULL,
  feedback TEXT,
  evidence JSONB DEFAULT '{}'::jsonb,
  
  assessed_at TIMESTAMPTZ DEFAULT now()
);

-- Validation Campaigns (90-day cycles)
CREATE TABLE IF NOT EXISTS validation_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES validation_sessions(id) ON DELETE CASCADE NOT NULL,
  
  constraint_type TEXT CHECK (constraint_type IN (
    'acquisition',
    'monetization',
    'retention',
    'scalability'
  )),
  
  campaign_type TEXT,
  goal TEXT,
  target_metric TEXT,
  target_value NUMERIC,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'paused')),
  
  start_date DATE,
  end_date DATE,
  
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Validation Sprints (2-week PDCA cycles)
CREATE TABLE IF NOT EXISTS validation_sprints (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES validation_campaigns(id) ON DELETE CASCADE NOT NULL,
  
  sprint_number INTEGER CHECK (sprint_number BETWEEN 1 AND 6) NOT NULL,
  purpose TEXT,
  pdca_step TEXT CHECK (pdca_step IN ('plan', 'do', 'check', 'act')),
  outcomes JSONB DEFAULT '{}'::jsonb,
  
  created_at TIMESTAMPTZ DEFAULT now(),
  completed_at TIMESTAMPTZ
);

-- Validation Experiments (hypothesis testing)
CREATE TABLE IF NOT EXISTS validation_experiments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sprint_id UUID REFERENCES validation_sprints(id) ON DELETE CASCADE NOT NULL,
  
  hypothesis TEXT NOT NULL,
  results JSONB DEFAULT '{}'::jsonb,
  
  created_at TIMESTAMPTZ DEFAULT now(),
  completed_at TIMESTAMPTZ
);

-- Validation Conversations (coach chat history)
CREATE TABLE IF NOT EXISTS validation_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES validation_sessions(id) ON DELETE CASCADE NOT NULL,
  
  role TEXT CHECK (role IN ('user', 'assistant', 'system')) NOT NULL,
  content TEXT NOT NULL,
  
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Traction Metrics (KPI tracking)
CREATE TABLE IF NOT EXISTS traction (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  startup_id UUID REFERENCES startups(id) ON DELETE CASCADE NOT NULL,
  
  users INTEGER DEFAULT 0,
  paying_customers INTEGER DEFAULT 0,
  mrr NUMERIC DEFAULT 0,
  runway_months INTEGER,
  
  updated_at TIMESTAMPTZ DEFAULT now(),
  
  UNIQUE(startup_id)
);

-- ====================
-- INDEXES
-- ====================

CREATE INDEX IF NOT EXISTS idx_startups_user ON startups(user_id);
CREATE INDEX IF NOT EXISTS idx_lean_canvases_startup ON lean_canvases(startup_id);
CREATE INDEX IF NOT EXISTS idx_validation_sessions_startup ON validation_sessions(startup_id);
CREATE INDEX IF NOT EXISTS idx_validation_sessions_active ON validation_sessions(is_active);
CREATE INDEX IF NOT EXISTS idx_validation_assessments_session ON validation_assessments(session_id);
CREATE INDEX IF NOT EXISTS idx_validation_campaigns_session ON validation_campaigns(session_id);
CREATE INDEX IF NOT EXISTS idx_validation_sprints_campaign ON validation_sprints(campaign_id);
CREATE INDEX IF NOT EXISTS idx_validation_experiments_sprint ON validation_experiments(sprint_id);
CREATE INDEX IF NOT EXISTS idx_validation_conversations_session ON validation_conversations(session_id);
CREATE INDEX IF NOT EXISTS idx_validation_conversations_created ON validation_conversations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_traction_startup ON traction(startup_id);

-- ====================
-- ROW LEVEL SECURITY (RLS)
-- ====================

-- Enable RLS on all tables
ALTER TABLE startups ENABLE ROW LEVEL SECURITY;
ALTER TABLE lean_canvases ENABLE ROW LEVEL SECURITY;
ALTER TABLE validation_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE validation_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE validation_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE validation_sprints ENABLE ROW LEVEL SECURITY;
ALTER TABLE validation_experiments ENABLE ROW LEVEL SECURITY;
ALTER TABLE validation_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE traction ENABLE ROW LEVEL SECURITY;

-- STARTUPS POLICIES
DROP POLICY IF EXISTS "Users can view own startups" ON startups;
CREATE POLICY "Users can view own startups"
  ON startups FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own startups" ON startups;
CREATE POLICY "Users can insert own startups"
  ON startups FOR INSERT
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own startups" ON startups;
CREATE POLICY "Users can update own startups"
  ON startups FOR UPDATE
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own startups" ON startups;
CREATE POLICY "Users can delete own startups"
  ON startups FOR DELETE
  USING (auth.uid() = user_id);

-- LEAN CANVASES POLICIES
DROP POLICY IF EXISTS "Users can view own canvas" ON lean_canvases;
CREATE POLICY "Users can view own canvas"
  ON lean_canvases FOR SELECT
  USING (startup_id IN (
    SELECT id FROM startups WHERE user_id = auth.uid()
  ));

DROP POLICY IF EXISTS "Users can insert own canvas" ON lean_canvases;
CREATE POLICY "Users can insert own canvas"
  ON lean_canvases FOR INSERT
  WITH CHECK (startup_id IN (
    SELECT id FROM startups WHERE user_id = auth.uid()
  ));

DROP POLICY IF EXISTS "Users can update own canvas" ON lean_canvases;
CREATE POLICY "Users can update own canvas"
  ON lean_canvases FOR UPDATE
  USING (startup_id IN (
    SELECT id FROM startups WHERE user_id = auth.uid()
  ));

DROP POLICY IF EXISTS "Users can delete own canvas" ON lean_canvases;
CREATE POLICY "Users can delete own canvas"
  ON lean_canvases FOR DELETE
  USING (startup_id IN (
    SELECT id FROM startups WHERE user_id = auth.uid()
  ));

-- VALIDATION SESSIONS POLICIES
DROP POLICY IF EXISTS "Users can manage own sessions" ON validation_sessions;
CREATE POLICY "Users can manage own sessions"
  ON validation_sessions FOR ALL
  USING (startup_id IN (
    SELECT id FROM startups WHERE user_id = auth.uid()
  ));

-- VALIDATION ASSESSMENTS POLICIES
DROP POLICY IF EXISTS "Users can manage own assessments" ON validation_assessments;
CREATE POLICY "Users can manage own assessments"
  ON validation_assessments FOR ALL
  USING (
    session_id IN (
      SELECT vs.id FROM validation_sessions vs
      JOIN startups s ON vs.startup_id = s.id
      WHERE s.user_id = auth.uid()
    )
  );

-- VALIDATION CAMPAIGNS POLICIES
DROP POLICY IF EXISTS "Users can manage own campaigns" ON validation_campaigns;
CREATE POLICY "Users can manage own campaigns"
  ON validation_campaigns FOR ALL
  USING (
    session_id IN (
      SELECT vs.id FROM validation_sessions vs
      JOIN startups s ON vs.startup_id = s.id
      WHERE s.user_id = auth.uid()
    )
  );

-- VALIDATION SPRINTS POLICIES
DROP POLICY IF EXISTS "Users can manage own sprints" ON validation_sprints;
CREATE POLICY "Users can manage own sprints"
  ON validation_sprints FOR ALL
  USING (
    campaign_id IN (
      SELECT vc.id FROM validation_campaigns vc
      JOIN validation_sessions vs ON vc.session_id = vs.id
      JOIN startups s ON vs.startup_id = s.id
      WHERE s.user_id = auth.uid()
    )
  );

-- VALIDATION EXPERIMENTS POLICIES
DROP POLICY IF EXISTS "Users can manage own experiments" ON validation_experiments;
CREATE POLICY "Users can manage own experiments"
  ON validation_experiments FOR ALL
  USING (
    sprint_id IN (
      SELECT vsp.id FROM validation_sprints vsp
      JOIN validation_campaigns vc ON vsp.campaign_id = vc.id
      JOIN validation_sessions vs ON vc.session_id = vs.id
      JOIN startups s ON vs.startup_id = s.id
      WHERE s.user_id = auth.uid()
    )
  );

-- VALIDATION CONVERSATIONS POLICIES
DROP POLICY IF EXISTS "Users can manage own conversations" ON validation_conversations;
CREATE POLICY "Users can manage own conversations"
  ON validation_conversations FOR ALL
  USING (
    session_id IN (
      SELECT vs.id FROM validation_sessions vs
      JOIN startups s ON vs.startup_id = s.id
      WHERE s.user_id = auth.uid()
    )
  );

-- TRACTION POLICIES
DROP POLICY IF EXISTS "Users can manage own traction" ON traction;
CREATE POLICY "Users can manage own traction"
  ON traction FOR ALL
  USING (startup_id IN (
    SELECT id FROM startups WHERE user_id = auth.uid()
  ));

-- ====================
-- FUNCTIONS & TRIGGERS
-- ====================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
DROP TRIGGER IF EXISTS update_startups_updated_at ON startups;
CREATE TRIGGER update_startups_updated_at
  BEFORE UPDATE ON startups
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_lean_canvases_updated_at ON lean_canvases;
CREATE TRIGGER update_lean_canvases_updated_at
  BEFORE UPDATE ON lean_canvases
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_validation_sessions_updated_at ON validation_sessions;
CREATE TRIGGER update_validation_sessions_updated_at
  BEFORE UPDATE ON validation_sessions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_traction_updated_at ON traction;
CREATE TRIGGER update_traction_updated_at
  BEFORE UPDATE ON traction
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
