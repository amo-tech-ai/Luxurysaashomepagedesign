// Validation Board Canvas - Mock Data
// Production-ready sample data for testing

import type {
  ValidationBoardState,
  CurrentBet,
  Assumption,
  Experiment,
  Pivot,
  Interview,
  StageGate,
} from './validation-board-types';

// Sample Current Bet (Idea Stage)
export const SAMPLE_CURRENT_BET: CurrentBet = {
  id: 'bet-001',
  audience: 'Startups raising seed/pre-seed rounds (especially first-time founders)',
  pain_point:
    'Pitch decks take 20+ hours to create, often look generic, and founders struggle to tell a compelling story that resonates with investors',
  solution: null, // null in idea stage
  stage: 'idea',
  created_at: new Date('2026-02-01'),
  updated_at: new Date('2026-02-09'),
};

// Sample Assumptions
export const SAMPLE_ASSUMPTIONS: Assumption[] = [
  {
    id: 'assume-001',
    bet_id: 'bet-001',
    text: 'Do startups really need pitch decks?',
    risk_level: 'high',
    impact_level: 'high',
    stage: 'idea',
    status: 'validated',
    is_riskiest: false,
    created_at: new Date('2026-02-02'),
    updated_at: new Date('2026-02-05'),
  },
  {
    id: 'assume-002',
    bet_id: 'bet-001',
    text: 'Will they switch from Canva/PowerPoint?',
    risk_level: 'high',
    impact_level: 'high',
    stage: 'idea',
    status: 'in_progress',
    is_riskiest: true,
    created_at: new Date('2026-02-02'),
    updated_at: new Date('2026-02-09'),
  },
  {
    id: 'assume-003',
    bet_id: 'bet-001',
    text: 'Will they pay $29/month?',
    risk_level: 'medium',
    impact_level: 'high',
    stage: 'idea',
    status: 'not_tested',
    is_riskiest: false,
    created_at: new Date('2026-02-02'),
    updated_at: new Date('2026-02-02'),
  },
  {
    id: 'assume-004',
    bet_id: 'bet-001',
    text: 'Can we reach startups via content marketing?',
    risk_level: 'low',
    impact_level: 'medium',
    stage: 'MVP',
    status: 'not_tested',
    is_riskiest: false,
    created_at: new Date('2026-02-02'),
    updated_at: new Date('2026-02-02'),
  },
];

// Sample Experiments
export const SAMPLE_EXPERIMENTS: Experiment[] = [
  {
    id: 'exp-001',
    assumption_id: 'assume-001',
    method: '10 customer interviews with seed-stage founders',
    success_criterion: '7/10 say they actively need pitch decks',
    status: 'completed',
    result: 'validated',
    progress_current: 10,
    progress_total: 10,
    evidence_links: ['int-001', 'int-002', 'int-003', 'int-004', 'int-005'],
    started_at: new Date('2026-02-03'),
    completed_at: new Date('2026-02-05'),
    created_at: new Date('2026-02-03'),
    updated_at: new Date('2026-02-05'),
  },
  {
    id: 'exp-002',
    assumption_id: 'assume-002',
    method: '10 customer interviews with follow-up validation',
    success_criterion: '6/10 say they would definitely switch (not "maybe")',
    status: 'in_progress',
    result: null,
    progress_current: 4,
    progress_total: 10,
    evidence_links: ['int-006', 'int-007', 'int-008', 'int-009'],
    started_at: new Date('2026-02-06'),
    completed_at: null,
    created_at: new Date('2026-02-06'),
    updated_at: new Date('2026-02-09'),
  },
];

// Sample Interviews
export const SAMPLE_INTERVIEWS: Interview[] = [
  {
    id: 'int-006',
    experiment_id: 'exp-002',
    interviewee_name: 'Sarah K.',
    interviewee_role: 'Founder, EdTech startup',
    response: 'yes',
    notes: 'Frustrated with PowerPoint. Wants faster workflow and better templates.',
    conducted_at: new Date('2026-02-09'),
    created_at: new Date('2026-02-09'),
  },
  {
    id: 'int-007',
    experiment_id: 'exp-002',
    interviewee_name: 'Mike T.',
    interviewee_role: 'Founder, B2B SaaS',
    response: 'yes',
    notes: 'Struggles with storytelling in PPT. Would switch for AI-powered narrative.',
    conducted_at: new Date('2026-02-08'),
    created_at: new Date('2026-02-08'),
  },
  {
    id: 'int-008',
    experiment_id: 'exp-002',
    interviewee_name: 'Lisa M.',
    interviewee_role: 'Founder, FinTech',
    response: 'yes',
    notes: 'Spent 30 hours on last deck. Wants faster turnaround.',
    conducted_at: new Date('2026-02-07'),
    created_at: new Date('2026-02-07'),
  },
  {
    id: 'int-009',
    experiment_id: 'exp-002',
    interviewee_name: 'John D.',
    interviewee_role: 'Founder, HealthTech',
    response: 'yes',
    notes: 'Needs better templates. Current tools feel generic.',
    conducted_at: new Date('2026-02-06'),
    created_at: new Date('2026-02-06'),
  },
];

// Sample Pivots
export const SAMPLE_PIVOTS: Pivot[] = [
  {
    id: 'pivot-001',
    bet_id_before: 'bet-000',
    bet_id_after: 'bet-001',
    pivot_type: 'audience',
    what_changed: 'From: "Office workers (100-500 employees)" → To: "Startups raising seed/pre-seed rounds"',
    reason: 'Assumption "Do offices need deck tools?" invalidated (4/10 said yes, needed 6+)',
    failed_assumption_id: 'assume-000',
    canvas_changes: [
      {
        block: 'Customer Segments',
        old_value: 'Office workers (100-500 employees)',
        new_value: 'Startups raising seed/pre-seed rounds',
      },
      {
        block: 'Problem',
        old_value: 'Internal presentations take too long',
        new_value: 'Pitch decks take 20+ hours, look generic',
      },
    ],
    created_at: new Date('2026-02-08'),
  },
];

// Sample Stage Gates
export const SAMPLE_STAGE_GATES: {
  idea: StageGate;
  MVP: StageGate;
  selling: StageGate;
} = {
  idea: {
    id: 'gate-idea',
    stage: 'idea',
    checklist_items: [
      {
        name: 'Idea clarity',
        completed: true,
      },
      {
        name: '5+ interviews',
        completed: true,
        auto_rule: 'count(interviews) >= 5',
      },
      {
        name: 'Riskiest tested',
        completed: false,
      },
      {
        name: 'Market view',
        completed: false,
      },
    ],
    unlocked: false, // need to complete riskiest assumption
    updated_at: new Date('2026-02-09'),
  },
  MVP: {
    id: 'gate-mvp',
    stage: 'MVP',
    checklist_items: [
      {
        name: 'MVP defined',
        completed: false,
      },
      {
        name: 'Solution validated',
        completed: false,
      },
      {
        name: 'Feature priorities',
        completed: false,
      },
    ],
    unlocked: false,
    updated_at: new Date('2026-02-09'),
  },
  selling: {
    id: 'gate-selling',
    stage: 'selling',
    checklist_items: [
      {
        name: 'Pricing validated',
        completed: false,
      },
      {
        name: 'Channel proven',
        completed: false,
      },
      {
        name: 'First customer',
        completed: false,
      },
    ],
    unlocked: false,
    updated_at: new Date('2026-02-09'),
  },
};

// Initial Empty State
export const INITIAL_VALIDATION_STATE: ValidationBoardState = {
  current_bet: null,
  assumptions: [],
  experiments: [],
  pivots: [],
  interviews: [],
  stage_gates: {
    idea: {
      id: 'gate-idea',
      stage: 'idea',
      checklist_items: [
        { name: 'Idea clarity', completed: false },
        { name: '5+ interviews', completed: false },
        { name: 'Riskiest tested', completed: false },
        { name: 'Market view', completed: false },
      ],
      unlocked: false,
      updated_at: new Date(),
    },
    MVP: {
      id: 'gate-mvp',
      stage: 'MVP',
      checklist_items: [
        { name: 'MVP defined', completed: false },
        { name: 'Solution validated', completed: false },
        { name: 'Feature priorities', completed: false },
      ],
      unlocked: false,
      updated_at: new Date(),
    },
    selling: {
      id: 'gate-selling',
      stage: 'selling',
      checklist_items: [
        { name: 'Pricing validated', completed: false },
        { name: 'Channel proven', completed: false },
        { name: 'First customer', completed: false },
      ],
      unlocked: false,
      updated_at: new Date(),
    },
  },
};

// Sample State (with data)
export const SAMPLE_VALIDATION_STATE: ValidationBoardState = {
  current_bet: SAMPLE_CURRENT_BET,
  assumptions: SAMPLE_ASSUMPTIONS,
  experiments: SAMPLE_EXPERIMENTS,
  pivots: SAMPLE_PIVOTS,
  interviews: SAMPLE_INTERVIEWS,
  stage_gates: SAMPLE_STAGE_GATES,
  lastSaved: '19:36',
};
