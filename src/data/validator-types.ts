// Validator System - Complete TypeScript Interfaces
// Based on /docs/01-validator/02-validator-report.md

// ============================================
// CORE TYPES
// ============================================

export type Verdict = 'GO' | 'PIVOT' | 'STOP';
export type ImpactLevel = 'high' | 'medium' | 'low';
export type Priority = 'critical' | 'high' | 'medium' | 'low';
export type RiskLevel = 'high' | 'medium' | 'low';
export type SourceType = 'report' | 'article' | 'company_website' | 'database';
export type AgentStatus = 'queued' | 'running' | 'ok' | 'partial' | 'failed';
export type SessionStatus = 'running' | 'complete' | 'partial' | 'failed';

// ============================================
// SECTION 1: PROBLEM CLARITY
// ============================================

export interface Section1ProblemClarity {
  problem_statement: string;
  problem_magnitude: string;
  current_solutions: string[];
  problem_validation: string;
}

// ============================================
// SECTION 2: CUSTOMER & USE CASE
// ============================================

export interface Section2CustomerUseCase {
  primary_customer: {
    persona: string;
    demographics: string[];
    psychographics: string;
  };
  secondary_customers: Array<{
    persona: string;
    use_case: string;
  }>;
  use_case_description: string;
  buying_process: string;
}

// ============================================
// SECTION 3: MARKET SIZING
// ============================================

export interface Citation {
  id: number;
  title: string;
  url: string;
  source_type: SourceType;
  accessed_date: string;
  snippet?: string;
}

export interface Section3MarketSizing {
  tam: {
    value: number;
    description: string;
    methodology: string;
    sources: Citation[];
  };
  sam: {
    value: number;
    description: string;
    calculation: string;
    sources: Citation[];
  };
  som: {
    value: number;
    description: string;
    assumptions: string[];
    timeline: string;
  };
  growth_rate: {
    cagr: number;
    timeframe: string;
    sources: Citation[];
  };
}

// ============================================
// SECTION 4: COMPETITION
// ============================================

export interface Competitor {
  name: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  pricing: string;
  market_share: string | null;
  url: string;
}

export interface Section4Competition {
  direct_competitors: Competitor[];
  indirect_competitors: Array<{
    name: string;
    description: string;
    substitution_risk: RiskLevel;
  }>;
  feature_matrix: {
    features: string[];
    competitors: string[];
    grid: boolean[][];
  };
  positioning_map: {
    x_axis: string;
    y_axis: string;
    competitors: Array<{
      name: string;
      x: number;
      y: number;
    }>;
  };
  competitive_moat: string;
}

// ============================================
// SECTION 5: RISKS & ASSUMPTIONS
// ============================================

export interface Risk {
  category: 'market' | 'execution' | 'technical' | 'regulatory' | 'financial';
  risk: string;
  severity: Priority;
  likelihood: RiskLevel;
  mitigation: string;
}

export interface Assumption {
  assumption: string;
  impact_if_wrong: string;
  validation_method: string;
}

export interface Section5RisksAssumptions {
  risks: Risk[];
  assumptions: Assumption[];
}

// ============================================
// SECTION 6: MVP SCOPE
// ============================================

export interface MVPFeature {
  feature: string;
  priority: 'must' | 'should' | 'could';
  effort: 'high' | 'medium' | 'low';
}

export interface MVPPhase {
  phase: number;
  name: string;
  duration: string;
  features: MVPFeature[];
  success_criteria: string[];
}

export interface Section6MVPScope {
  phases: MVPPhase[];
  tech_dependencies: string[];
  team_requirements: string;
}

// ============================================
// SECTION 7: NEXT STEPS
// ============================================

export interface ActionItem {
  action: string;
  why: string;
  timeline: string;
  owner: string | null;
}

export interface Section7NextSteps {
  immediate: ActionItem[];
  short_term: Array<{
    action: string;
    timeline: string;
  }>;
  medium_term: Array<{
    action: string;
    timeline: string;
  }>;
}

// ============================================
// SECTION 8: SCORES MATRIX
// ============================================

export interface ScoreDimension {
  dimension: string;
  score: number;
  weight: number;
  rationale: string;
  sub_scores: Array<{
    factor: string;
    score: number;
  }>;
}

export interface Section8ScoresMatrix {
  overall_score: number;
  verdict: Verdict;
  dimensions: ScoreDimension[];
  market_factors: {
    tam_quality: number;
    growth_rate: number;
    competition_intensity: number;
  };
  execution_factors: {
    founder_fit: number;
    mvp_feasibility: number;
    go_to_market_clarity: number;
  };
}

// ============================================
// SECTION 9: TECHNOLOGY STACK
// ============================================

export interface TechStackItem {
  tech: string;
  rationale: string;
  risk_level: RiskLevel;
}

export interface Section9TechnologyStack {
  frontend: TechStackItem[];
  backend: TechStackItem[];
  infrastructure: TechStackItem[];
  third_party_apis: Array<{
    name: string;
    purpose: string;
    cost: string;
    risk: string;
  }>;
  technical_risks: string[];
  estimated_timeline: {
    setup: string;
    mvp: string;
  };
}

// ============================================
// SECTION 10: REVENUE MODEL
// ============================================

export interface PricingTier {
  tier: string;
  price: number;
  features: string[];
}

export interface Section10RevenueModel {
  recommended_model: 'SaaS' | 'Marketplace' | 'Transactional' | 'Hybrid';
  rationale: string;
  pricing_strategy: {
    model: 'per_seat' | 'per_chair' | 'tiered' | 'usage_based';
    tiers: PricingTier[];
  };
  unit_economics: {
    cac: number;
    ltv: number;
    ltv_cac_ratio: number;
    payback_period: number;
  };
  revenue_streams: Array<{
    stream: string;
    contribution: number;
  }>;
}

// ============================================
// SECTION 11: TEAM & HIRING
// ============================================

export interface TeamGap {
  role: string;
  why_needed: string;
  priority: Priority;
  timeline: string;
}

export interface Section11TeamHiring {
  team_gaps: TeamGap[];
  mvp_team: {
    roles: string[];
    estimated_cost: number;
    equity_budget: number;
  };
  advisor_needs: Array<{
    expertise: string;
    contribution: string;
  }>;
}

// ============================================
// SECTION 12: KEY QUESTIONS
// ============================================

export interface KeyQuestion {
  question: string;
  category: 'market' | 'product' | 'team' | 'business_model';
  risk_level: 'fatal' | 'important' | 'minor';
  validation_method: string;
  estimated_cost: string;
}

export interface Section12KeyQuestions {
  questions: KeyQuestion[];
}

// ============================================
// SECTION 13: RESOURCES & LINKS
// ============================================

export interface ResourceLink {
  title: string;
  url: string;
  description: string;
  relevance: ImpactLevel;
}

export interface Section13Resources {
  categories: Array<{
    category: 'Market Research' | 'Competitors' | 'Technical' | 'Industry News' | 'Tools';
    links: ResourceLink[];
  }>;
}

// ============================================
// SECTION 14: FINANCIAL PROJECTIONS
// ============================================

export interface FinancialScenario {
  scenario: 'conservative' | 'realistic' | 'optimistic';
  assumptions: string[];
  year_1: {
    revenue: number;
    costs: number;
    profit: number;
  };
  year_2: {
    revenue: number;
    costs: number;
    profit: number;
  };
  year_3: {
    revenue: number;
    costs: number;
    profit: number;
  };
}

export interface Section14FinancialProjections {
  scenarios: FinancialScenario[];
  break_even: {
    month: number;
    customers_needed: number;
    assumptions: string[];
  };
  funding_needed: {
    amount: number;
    use_of_funds: Array<{
      category: string;
      amount: number;
    }>;
    runway: number;
  };
}

// ============================================
// COMPLETE REPORT
// ============================================

export interface ValidatorReport {
  id: string;
  session_id: string;
  score: number;
  verdict: Verdict;
  summary: string;
  idea_name: string;
  details: {
    problem_clarity: Section1ProblemClarity;
    customer_use_case: Section2CustomerUseCase;
    market_sizing: Section3MarketSizing;
    competition: Section4Competition;
    risks_assumptions: Section5RisksAssumptions;
    mvp_scope: Section6MVPScope;
    next_steps: Section7NextSteps;
    scores_matrix: Section8ScoresMatrix;
    tech_stack: Section9TechnologyStack;
    revenue_model: Section10RevenueModel;
    team_hiring: Section11TeamHiring;
    key_questions: Section12KeyQuestions;
    resources: Section13Resources;
    financials: Section14FinancialProjections;
  };
  citations: Citation[];
  verification_result: VerificationResult;
  created_at: string;
  updated_at: string;
}

export interface VerificationResult {
  verified: boolean;
  missing_sections: number[];
  warnings: string[];
  section_mappings: {
    [key: number]: {
      agent: string;
      has_citations: boolean;
      word_count: number;
      completeness: 'complete' | 'partial' | 'missing';
    };
  };
  quality_score: number;
}

// ============================================
// AGENT EXECUTION
// ============================================

export interface AgentRun {
  agent: string;
  model: string;
  duration_ms: number;
  input_tokens: number;
  output_tokens: number;
  sections_produced: number[];
  metadata: {
    [key: string]: any;
  };
}

export interface ExecutionTrace {
  total_duration_ms: number;
  agents: AgentRun[];
}

// ============================================
// SESSION & PIPELINE
// ============================================

export interface ValidatorSession {
  id: string;
  status: SessionStatus;
  created_at: string;
}

export interface PipelineStep {
  step: number;
  name: string;
  agent: string;
  status: AgentStatus;
  duration_ms: number;
  progress_text: string;
  error?: string;
}

export interface PipelineProgress {
  status: SessionStatus;
  progress: number;
  estimated_time_remaining: number;
  steps: PipelineStep[];
  report_id: string | null;
  error_message: string | null;
}

// ============================================
// CONTEXT PANEL
// ============================================

export interface PanelDetailResponse {
  section: number;
  more_detail: string;
  why_matters: string;
  risks_gaps: string[];
  validate_next: string[];
  generated_at: string;
}
