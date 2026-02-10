/**
 * AI Readiness Canvas - TypeScript Type Definitions
 * Template: Incremental Excellence (Peter Scheffer)
 * License: CC BY-SA 4.0
 */

// ============================================================================
// CORE CANVAS STRUCTURE (9-Box Model)
// ============================================================================

export interface AIReadinessCanvas {
  id: string;
  startup_id: string;
  created_at: string;
  updated_at: string;
  
  // THE STRATEGIC IMPERATIVE — WHY? (2 boxes)
  ai_vision: AIVisionOutcomes;
  key_use_cases: KeyUseCases;
  
  // FOUNDATIONAL CAPABILITIES — HOW? (3 boxes)
  data_strategy: DataStrategy;
  ai_platform: AIPlatform;
  people_skills: PeopleSkills;
  
  // EXECUTION & OPERATIONS — WHAT? (4 boxes)
  value_proposition: ValueProposition;
  governance: Governance;
  costs: CostStructure;
  success_metrics: SuccessMetrics;
  
  // Meta
  assessment_mode: 'nine-box' | 'four-category';
  completion_percentage: number;
  last_edited_section: string | null;
}

// ============================================================================
// SECTION 1: AI VISION & BUSINESS OUTCOMES
// ============================================================================

export interface AIVisionOutcomes {
  vision_statement: string;
  business_outcomes: string[];
  competitive_advantage: string;
  transformational_opportunities: string[];
  timeline: string;
  
  // Optional: Structured data for metrics
  target_metrics?: {
    cost_reduction_percentage?: number;
    revenue_increase?: number;
    customer_satisfaction_improvement?: number;
    capacity_multiplier?: number;
  };
}

// ============================================================================
// SECTION 2: AI VALUE PROPOSITION
// ============================================================================

export interface ValueProposition {
  customer_benefits: string[];
  business_benefits: string[];
  new_products_services: string[];
  unique_differentiation: string[];
  customer_problems_solved: CustomerProblem[];
}

export interface CustomerProblem {
  pain_point: string;
  ai_solution: string;
}

// ============================================================================
// SECTION 3: KEY USE CASES & PRIORITISATION
// ============================================================================

export interface KeyUseCases {
  use_cases: AIUseCase[];
  evaluation_criteria: string[];
  prioritization_framework: string;
}

export interface AIUseCase {
  id: string;
  name: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  timeframe: string; // e.g., "Q1-Q2 2026"
  
  // Evaluation scores (1-5 stars)
  impact_score: number;
  impact_rationale: string;
  
  feasibility_score: number;
  feasibility_rationale: string;
  
  viability_score: number;
  viability_rationale: string;
  
  // Meta
  status?: 'not-started' | 'in-progress' | 'completed' | 'on-hold';
  roi_estimate?: number;
}

// ============================================================================
// SECTION 4: DATA STRATEGY & ASSETS
// ============================================================================

export interface DataStrategy {
  internal_data_sources: DataSource[];
  external_data_sources: DataSource[];
  data_quality: DataQuality;
  data_accessibility: DataAccessibility;
  data_governance: string[];
  ai_flywheel_design: string;
}

export interface DataSource {
  name: string;
  description: string;
  volume?: string; // e.g., "2M+ support tickets"
  timespan?: string; // e.g., "5 years"
  quality_score?: number; // 0-100
}

export interface DataQuality {
  cleanliness_percentage: number;
  labeling_status: string;
  pii_handling: string;
  audit_frequency: string;
}

export interface DataAccessibility {
  data_warehouse: string;
  api_access: string[];
  self_service_tools: string[];
  compliance_standards: string[];
}

// ============================================================================
// SECTION 5: AI PLATFORM & TECHNOLOGY STACK
// ============================================================================

export interface AIPlatform {
  cloud_infrastructure: string[];
  llm_providers: string[];
  vector_databases: string[];
  orchestration_tools: string[];
  monitoring_tools: string[];
  
  build_vs_buy: BuildVsBuy;
  ai_lifecycle: AILifecycle;
  operating_model: string;
  deployment_strategy: string;
}

export interface BuildVsBuy {
  build: string[]; // Components to build in-house
  buy: string[];   // Components to purchase/license
  partner: string[]; // Components via partnerships
}

export interface AILifecycle {
  experiment_phase: string;
  staging_phase: string;
  production_phase: string;
  rollback_strategy: string;
}

// ============================================================================
// SECTION 6: PEOPLE, SKILLS & CULTURE
// ============================================================================

export interface PeopleSkills {
  current_talent: TalentInventory;
  hiring_roadmap: HiringPlan[];
  skills_development: SkillsDevelopment;
  culture_shifts: CultureInitiative[];
  change_management: ChangeManagement;
}

export interface TalentInventory {
  ml_engineers: number;
  data_scientists: number;
  ai_product_managers: number;
  mlops_engineers: number;
  ai_ethicists: number;
  other_roles: { role: string; count: number }[];
}

export interface HiringPlan {
  quarter: string; // e.g., "Q1 2026"
  roles: { role: string; count: number; salary_range?: string }[];
  total_cost?: number;
}

export interface SkillsDevelopment {
  all_employees: string[];
  product_managers: string[];
  engineers: string[];
  support_staff: string[];
  leadership: string[];
}

export interface CultureInitiative {
  from_state: string;
  to_state: string;
  tactics: string[];
}

export interface ChangeManagement {
  employee_concerns: EmployeeConcern[];
  pilot_team_approach: string;
  metrics_tracked: string[];
}

export interface EmployeeConcern {
  concern: string;
  response: string;
}

// ============================================================================
// SECTION 7: GOVERNANCE & RESPONSIBLE AI
// ============================================================================

export interface Governance {
  accountability_structure: AccountabilityStructure;
  responsible_ai_framework: ResponsibleAIFramework;
  risks_and_mitigation: AIRisk[];
  compliance_requirements: ComplianceRequirement[];
  human_in_loop_rules: HumanInLoopRule[];
}

export interface AccountabilityStructure {
  steering_committee: string;
  ai_ethics_officer: string;
  data_privacy_lead: string;
  model_owners: string;
}

export interface ResponsibleAIFramework {
  fairness: string[];
  transparency: string[];
  privacy: string[];
  safety: string[];
  accountability: string[];
  reliability: string[];
}

export interface AIRisk {
  risk_type: 'bias' | 'hallucination' | 'prompt-injection' | 'data-leakage' | 'model-drift' | 'other';
  description: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  mitigation_strategies: string[];
  status: 'mitigated' | 'in-progress' | 'identified';
}

export interface ComplianceRequirement {
  regulation: string; // e.g., "GDPR", "EU AI Act", "SOC 2"
  requirements: string[];
  status: 'compliant' | 'in-progress' | 'not-started';
}

export interface HumanInLoopRule {
  trigger: string;
  description: string;
  approval_required: boolean;
}

// ============================================================================
// SECTION 8: COST STRUCTURE & FINANCIAL MANAGEMENT
// ============================================================================

export interface CostStructure {
  cost_drivers: CostDriver[];
  year_1_total: number;
  zig_zag_pattern: ZigZagPattern;
  compute_optimization: string[];
  finops_strategy: FinOpsStrategy;
  tco_3_years: TCO;
}

export interface CostDriver {
  category: string; // e.g., "LLM API calls", "Compute", "Storage", "Talent"
  monthly_cost?: number;
  annual_cost?: number;
  percentage_of_total: number;
  notes?: string;
}

export interface ZigZagPattern {
  launch_spike_multiplier: number; // e.g., 3x
  optimization_drop_month: number; // e.g., month 6
  plateau_percentage: number; // e.g., 0.7x (70% of normal)
}

export interface FinOpsStrategy {
  cost_allocation_method: string;
  budget_alert_threshold: number; // e.g., 80 (%)
  review_frequency: string;
  roi_tracking_method: string;
}

export interface TCO {
  year_1: number;
  year_2: number;
  year_3: number;
  total_3_year: number;
  value_created_3_year: number;
  roi_percentage: number;
}

// ============================================================================
// SECTION 9: SUCCESS METRICS & ROI
// ============================================================================

export interface SuccessMetrics {
  business_kpis: BusinessKPI[];
  financial_roi: FinancialROI;
  non_financial_metrics: NonFinancialMetric[];
  three_es_framework: ThreeEsFramework;
  post_deployment_tracking: PostDeploymentTracking;
  justification_statement: string;
}

export interface BusinessKPI {
  metric_name: string;
  current_value: string | number;
  target_value: string | number;
  timeframe: string;
  category: 'customer-satisfaction' | 'operational-efficiency' | 'scalability' | 'revenue';
  measurement_method: string;
}

export interface FinancialROI {
  investment_year_1: number;
  cost_savings_year_1: number;
  new_revenue_year_1: number;
  total_value_created: number;
  net_gain: number;
  roi_percentage: number;
  payback_period_months: number;
}

export interface NonFinancialMetric {
  category: 'employee-satisfaction' | 'brand-perception' | 'innovation-velocity';
  metric_name: string;
  target: string;
  measurement_method: string;
  why_it_matters: string;
}

export interface ThreeEsFramework {
  efficiency: ThreeEsMetric;
  effectiveness: ThreeEsMetric;
  user_experience: ThreeEsMetric;
}

export interface ThreeEsMetric {
  description: string;
  metrics: { name: string; improvement: string }[];
}

export interface PostDeploymentTracking {
  dashboards: string[];
  weekly_reviews: string;
  monthly_reviews: string;
  quarterly_audits: string[];
  annual_review: string;
}

// ============================================================================
// AI SUGGESTIONS & INTELLIGENCE PANEL
// ============================================================================

export interface AISuggestion {
  section_id: string; // Maps to box 1-9
  section_name: string;
  key_questions: string[];
  examples: string[];
  templates: string[];
  industry_best_practices: string[];
}

export interface AIIntelligencePanel {
  selected_section: string | null;
  suggestions: AISuggestion | null;
  generated_draft: string | null;
  is_loading: boolean;
}

// ============================================================================
// LINDENBERG 4-CATEGORY ALTERNATIVE VIEW
// ============================================================================

export interface Lindenberg4Category {
  strategy_readiness: {
    strategic_orientation: string; // Maps to #1 + #3
    business_value_and_ai: string; // Maps to #2
    goals_and_evaluation: string;  // Maps to #9
  };
  legal_readiness: {
    compliance: string;            // Maps to #7
    internal_data_policy: string;  // Maps to #4 governance
  };
  business_readiness: {
    ai_competencies: string;       // Maps to #6
    processes_and_use_cases: string; // Maps to #3
    business_culture_and_ai: string; // Maps to #6 culture
  };
  systems_data_readiness: {
    system_landscape: string;      // Maps to #5
    data_access: string;           // Maps to #4 accessibility
    data_quality: string;          // Maps to #4 quality
  };
}

// ============================================================================
// DELOITTE 4 QUESTIONS
// ============================================================================

export interface Deloitte4Questions {
  question_1_genai_inform_strategy: {
    answer: string;
    personas_validated: boolean;
    new_segments_discovered: boolean;
    differentiated_cx: boolean;
  };
  question_2_use_cases_evaluated: {
    answer: string;
    impact_assessed: boolean;
    feasibility_assessed: boolean;
    viability_assessed: boolean;
  };
  question_3_risk_mitigation: {
    answer: string;
    data_security_in_place: boolean;
    bias_audits_scheduled: boolean;
    human_oversight_defined: boolean;
    governance_structure_exists: boolean;
  };
  question_4_trust_and_ethics: {
    answer: string;
    transparency_measures: string[];
    ethics_framework_adopted: boolean;
    customer_trust_mechanisms: string[];
  };
}

// ============================================================================
// HELPER TYPES & UTILITIES
// ============================================================================

export type AIReadinessSection = 
  | 'ai_vision'
  | 'value_proposition'
  | 'key_use_cases'
  | 'data_strategy'
  | 'ai_platform'
  | 'people_skills'
  | 'governance'
  | 'costs'
  | 'success_metrics';

export type AssessmentMode = 'nine-box' | 'four-category';

export interface ReadinessGapAnalysis {
  section: AIReadinessSection;
  completion_percentage: number;
  missing_items: string[];
  priority: 'critical' | 'high' | 'medium' | 'low';
  recommendation: string;
}

export interface ReadinessScore {
  overall_score: number; // 0-100
  strategy_readiness: number;
  legal_readiness: number;
  business_readiness: number;
  systems_data_readiness: number;
  
  strengths: string[];
  gaps: string[];
  next_steps: string[];
}
