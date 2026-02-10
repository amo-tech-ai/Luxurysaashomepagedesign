// Validation Board Canvas - Data Types
// Route: /validate/canvas
// Purpose: Risk & Assumption Testing Board

export type StageType = 'idea' | 'MVP' | 'selling';
export type RiskLevel = 'high' | 'medium' | 'low';
export type AssumptionStatus = 'not_tested' | 'in_progress' | 'validated' | 'invalidated';
export type ExperimentStatus = 'not_started' | 'in_progress' | 'completed';
export type ExperimentResult = 'validated' | 'invalidated' | null;
export type PivotType = 'audience' | 'pain' | 'solution';

// Current Bet: What we're testing now
export interface CurrentBet {
  id: string;
  audience: string;          // "Startups raising seed/pre-seed"
  pain_point: string;        // "Pitch decks take 20+ hours..."
  solution: string | null;   // null in idea stage
  stage: StageType;
  created_at: Date;
  updated_at: Date;
}

// Assumptions: Testable beliefs
export interface Assumption {
  id: string;
  bet_id: string;            // link to CurrentBet
  text: string;              // "Will they switch from Canva?"
  risk_level: RiskLevel;
  impact_level: RiskLevel;
  stage: StageType;
  status: AssumptionStatus;
  is_riskiest: boolean;      // only one can be true at a time
  created_at: Date;
  updated_at: Date;
}

// Experiments: How to test assumptions
export interface Experiment {
  id: string;
  assumption_id: string;     // link to Assumption (1:1 or 1:many)
  method: string;            // "10 customer interviews"
  success_criterion: string; // "6/10 say they'd switch"
  status: ExperimentStatus;
  result: ExperimentResult;
  progress_current: number;  // 4 (interviews done)
  progress_total: number;    // 10 (interviews needed)
  evidence_links: string[];  // interview IDs or note IDs
  started_at: Date | null;
  completed_at: Date | null;
  created_at: Date;
  updated_at: Date;
}

// Pivots: Changes to bet when assumptions fail
export interface Pivot {
  id: string;
  bet_id_before: string;     // original bet
  bet_id_after: string;      // new bet
  pivot_type: PivotType;
  what_changed: string;      // "Office workers → Startups"
  reason: string;            // "Assumption X invalidated"
  failed_assumption_id: string | null;
  canvas_changes: {
    block: string;
    old_value: string;
    new_value: string;
  }[];
  created_at: Date;
}

// Interviews: Evidence for experiments
export interface Interview {
  id: string;
  experiment_id: string;
  interviewee_name: string;  // "Sarah K."
  interviewee_role: string;  // "Founder, EdTech"
  response: 'yes' | 'no' | 'maybe';
  notes: string;
  conducted_at: Date;
  created_at: Date;
}

// Stage Gates: Checklist for stage advancement
export interface StageGate {
  id: string;
  stage: StageType;
  checklist_items: {
    name: string;            // "5+ interviews"
    completed: boolean;
    auto_rule?: string;      // "count(interviews) >= 5"
  }[];
  unlocked: boolean;         // can advance to next stage?
  updated_at: Date;
}

// Complete validation board state
export interface ValidationBoardState {
  current_bet: CurrentBet | null;
  assumptions: Assumption[];
  experiments: Experiment[];
  pivots: Pivot[];
  interviews: Interview[];
  stage_gates: {
    idea: StageGate;
    MVP: StageGate;
    selling: StageGate;
  };
  lastSaved?: string;
}
