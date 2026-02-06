// Validator Pipeline Types

export type SessionStatus = 'running' | 'complete' | 'partial' | 'failed';
export type RunStatus = 'queued' | 'running' | 'done' | 'failed';

export interface ValidatorSession {
  id: string;
  user_id: string;
  input_text: string;
  status: SessionStatus;
  created_at: string;
}

export interface ValidatorRun {
  id: string;
  session_id: string;
  agent_name: string;
  model_used: string;
  tool_used: Record<string, any>;
  input_json: Record<string, any>;
  output_json: Record<string, any>;
  citations: Citation[];
  status: RunStatus;
  error_message?: string;
  started_at?: string;
  finished_at?: string;
  created_at: string;
}

export interface Citation {
  url?: string;
  title?: string;
  snippet?: string;
  source?: string;
}

export interface ValidatorReport {
  id: string;
  session_id: string;
  user_id: string;
  report_json: ReportContent;
  verified: boolean;
  verification_json: VerificationResult;
  created_at: string;
}

export interface ReportContent {
  summary_verdict: SummaryVerdict;
  problem_clarity: ProblemClarity;
  customer_use_case: CustomerUseCase;
  market_sizing: MarketSizing;
  competition: Competition;
  risks_assumptions: RisksAssumptions;
  mvp_scope: MVPScope;
  next_steps: NextSteps;
}

export interface SummaryVerdict {
  overall_verdict: 'GO' | 'CAUTION' | 'NO-GO';
  score: number; // 0-100
  confidence: 'High' | 'Medium' | 'Low';
  one_sentence_summary: string;
}

export interface ProblemClarity {
  problem_statement: string;
  severity_score: number; // 0-10
  frequency_score: number; // 0-10
  urgency_score: number; // 0-10
  problem_validation: string;
}

export interface CustomerUseCase {
  target_customer: string;
  use_case_description: string;
  value_proposition: string;
  willingness_to_pay_estimate: string;
}

export interface MarketSizing {
  tam: string; // e.g., "$12.4B"
  sam: string;
  som: string;
  market_growth_rate: string;
  methodology: string;
  citations: Citation[];
}

export interface Competition {
  competitors: Competitor[];
  differentiation_summary: string;
  competitive_moat: string;
  citations: Citation[];
}

export interface Competitor {
  name: string;
  description: string;
  strength: 'High' | 'Medium' | 'Low';
  weakness: string;
}

export interface RisksAssumptions {
  top_risks: Risk[];
  critical_assumptions: Assumption[];
}

export interface Risk {
  risk_description: string;
  severity: 'High' | 'Medium' | 'Low';
  mitigation_strategy: string;
}

export interface Assumption {
  assumption: string;
  validation_method: string;
}

export interface MVPScope {
  mvp_description: string;
  core_features: string[];
  phased_approach: Phase[];
  estimated_timeline: string;
}

export interface Phase {
  phase_name: string;
  description: string;
  duration: string;
  key_milestones: string[];
}

export interface NextSteps {
  immediate_actions: Action[];
}

export interface Action {
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  title: string;
  description: string;
  effort: string;
  impact: string;
}

export interface VerificationResult {
  verified: boolean;
  missing_sections: string[];
  failed_agents: string[];
  warnings: string[];
  timestamp: string;
}

// Agent Input/Output Types

export interface StartupProfile {
  startup_name?: string;
  one_liner: string;
  problem_description: string;
  solution_description: string;
  target_customer: string;
  industry?: string;
  stage?: string;
}

export interface MarketResearchOutput {
  market_sizing: MarketSizing;
  industry_trends: string[];
  growth_drivers: string[];
}

export interface CompetitorAnalysisOutput {
  competitors: Competitor[];
  differentiation_summary: string;
  competitive_moat: string;
}

export interface ScoringOutput {
  overall_score: number;
  dimension_scores: {
    problem_clarity: number;
    solution_strength: number;
    market_size: number;
    competition: number;
    business_model: number;
    team_fit: number;
    timing: number;
  };
  verdict: 'GO' | 'CAUTION' | 'NO-GO';
  confidence: 'High' | 'Medium' | 'Low';
  risks: Risk[];
  assumptions: Assumption[];
}

export interface MVPPlanOutput {
  mvp_description: string;
  core_features: string[];
  phased_approach: Phase[];
  estimated_timeline: string;
}

// API Types

export interface ValidatorStartRequest {
  input_text: string;
}

export interface ValidatorStartResponse {
  session_id: string;
  report_id?: string;
  status: SessionStatus;
  error?: string;
}

export interface ValidatorStatusResponse {
  session_id: string;
  status: SessionStatus;
  runs: ValidatorRun[];
  report_id?: string;
}

export interface ValidatorRegenerateRequest {
  session_id: string;
  agent_name: string;
}

export interface ValidatorRegenerateResponse {
  report_id: string;
  verified: boolean;
  status: SessionStatus;
}
