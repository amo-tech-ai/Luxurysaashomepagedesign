-- Validator Pipeline Tables
-- Run: supabase db reset (dev) or supabase migration up (prod)

-- 1) validator_sessions
CREATE TABLE validator_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  input_text TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'running' CHECK (status IN ('running', 'complete', 'partial', 'failed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2) validator_runs (agent execution trace)
CREATE TABLE validator_runs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID NOT NULL REFERENCES validator_sessions(id) ON DELETE CASCADE,
  agent_name TEXT NOT NULL,
  model_used TEXT NOT NULL,
  tool_used JSONB DEFAULT '{}',
  input_json JSONB DEFAULT '{}',
  output_json JSONB DEFAULT '{}',
  citations JSONB DEFAULT '[]',
  status TEXT NOT NULL DEFAULT 'queued' CHECK (status IN ('queued', 'running', 'done', 'failed')),
  error_message TEXT,
  started_at TIMESTAMP WITH TIME ZONE,
  finished_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3) validator_reports
CREATE TABLE validator_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID NOT NULL REFERENCES validator_sessions(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  report_json JSONB NOT NULL DEFAULT '{}',
  verified BOOLEAN DEFAULT FALSE,
  verification_json JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_sessions_user ON validator_sessions(user_id);
CREATE INDEX idx_sessions_status ON validator_sessions(status);
CREATE INDEX idx_runs_session ON validator_runs(session_id);
CREATE INDEX idx_runs_agent ON validator_runs(agent_name);
CREATE INDEX idx_reports_session ON validator_reports(session_id);
CREATE INDEX idx_reports_user ON validator_reports(user_id);

-- RLS Policies
ALTER TABLE validator_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE validator_runs ENABLE ROW LEVEL SECURITY;
ALTER TABLE validator_reports ENABLE ROW LEVEL SECURITY;

-- Sessions: users can only access their own
CREATE POLICY "Users can view own sessions"
  ON validator_sessions FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own sessions"
  ON validator_sessions FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own sessions"
  ON validator_sessions FOR UPDATE
  USING (user_id = auth.uid());

-- Runs: users can view runs for their sessions
CREATE POLICY "Users can view runs for own sessions"
  ON validator_runs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM validator_sessions
      WHERE validator_sessions.id = validator_runs.session_id
      AND validator_sessions.user_id = auth.uid()
    )
  );

CREATE POLICY "Service role can insert runs"
  ON validator_runs FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Service role can update runs"
  ON validator_runs FOR UPDATE
  USING (true);

-- Reports: users can only access their own
CREATE POLICY "Users can view own reports"
  ON validator_reports FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "Service role can insert reports"
  ON validator_reports FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Service role can update reports"
  ON validator_reports FOR UPDATE
  USING (true);
