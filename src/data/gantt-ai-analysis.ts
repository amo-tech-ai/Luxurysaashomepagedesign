// Gantt AI Analysis - Mock AI Responses
// Generated AI insights for each task type

import type { AIAnalysis } from './gantt-types';

// ============================================
// MOCK AI ANALYSES (Sample responses for different task scenarios)
// ============================================

// Example 1: CRM Implementation (In Progress, Has Dependencies)
export const mockAIAnalysis_CRM: AIAnalysis = {
  task_id: 'task-014',
  risk_level: 'medium',
  risk_score: 65,
  dependency_health: {
    status: 'weak',
    issues: [
      'Task System CRUD (task-010) only 45% complete - CRM contact actions depend on this',
      'Contact Enrichment API (task-015) blocked due to missing API keys',
    ],
    missing_dependencies: [],
    circular_dependencies: false,
  },
  blockers: [
    {
      task_id: 'task-010',
      task_name: 'Task System - CRUD Operations',
      reason: 'CRM needs task system for investor follow-up actions',
      severity: 'medium',
      estimated_delay_days: 3,
    },
  ],
  timeline_assessment: {
    is_realistic: true,
    suggested_shift_days: 3,
    reason: 'Task System dependency not yet complete. Suggest extending CRM timeline by 3 days to ensure stable foundation.',
    capacity_issues: [],
    sequencing_issues: [
      'CRM should wait for Task System completion before adding AI scoring features',
    ],
  },
  downstream_impact: [
    {
      task_id: 'task-019',
      task_name: 'Deal Scorer Agent',
      impact_level: 'high',
      reason: 'Deal Scorer requires 2+ weeks of CRM interaction history to train scoring model',
      estimated_delay_days: 5,
    },
    {
      task_id: 'task-015',
      task_name: 'Contact Enrichment API',
      impact_level: 'high',
      reason: 'Currently blocked - API keys needed before CRM can use enrichment',
      estimated_delay_days: 7,
    },
  ],
  strategic_recommendations: [
    'Complete Task System CRUD before adding AI scoring to CRM',
    'Delay Deal Scorer until CRM has 2-week data history (20+ investor interactions)',
    'Unblock Contact Enrichment by obtaining LinkedIn/Crunchbase API keys',
    'Add manual contact entry as fallback if enrichment API delayed',
  ],
  suggested_subtasks: [
    {
      title: 'Investor contact form with manual entry',
      description: 'Build basic contact form as fallback for enrichment API',
      priority: 'high',
      estimated_hours: 4,
      reason: 'Mitigates risk of enrichment API delays',
    },
    {
      title: 'Pipeline stage automation triggers',
      description: 'Auto-move investors through stages based on activity',
      priority: 'medium',
      estimated_hours: 6,
      reason: 'Improves CRM UX and enables future AI features',
    },
    {
      title: 'Interaction logging system',
      description: 'Track all investor touchpoints (emails, calls, meetings)',
      priority: 'high',
      estimated_hours: 8,
      reason: 'Required for Deal Scorer training data',
    },
  ],
  confidence: 87,
  generated_at: '2026-03-10T16:30:00Z',
};

// Example 2: Deal Scorer Agent (Not Started, Heavy Dependencies)
export const mockAIAnalysis_DealScorer: AIAnalysis = {
  task_id: 'task-019',
  risk_level: 'high',
  risk_score: 78,
  dependency_health: {
    status: 'critical',
    issues: [
      'CRM Implementation (task-014) only 35% complete',
      'CRM requires 2+ weeks of data history before Deal Scorer can train',
      'No investor interaction data exists yet - scoring model cannot train on empty dataset',
    ],
    missing_dependencies: [
      'Minimum 20 investor contacts in CRM',
      'At least 50 logged interactions (emails, meetings, calls)',
    ],
    circular_dependencies: false,
  },
  blockers: [
    {
      task_id: 'task-014',
      task_name: 'CRM Implementation',
      reason: 'CRM must be complete with 2+ weeks of real usage data',
      severity: 'high',
      estimated_delay_days: 14,
    },
  ],
  timeline_assessment: {
    is_realistic: false,
    suggested_shift_days: 14,
    reason: 'Cannot build scoring model without CRM data. Recommend starting Deal Scorer 2 weeks after CRM launch to accumulate training data.',
    capacity_issues: [
      'AI team may lack access to sufficient investor interaction samples',
    ],
    sequencing_issues: [
      'Premature AI complexity - building scorer before data exists violates Data → Screens → AI order',
      'Deal Scorer should be delayed until CRM proves stable and has real usage',
    ],
  },
  downstream_impact: [
    {
      task_id: 'task-022',
      task_name: 'Claude Orchestrator',
      impact_level: 'medium',
      reason: 'Orchestrator depends on Deal Scorer + Task Generator + Discovery agents all being complete',
      estimated_delay_days: 14,
    },
  ],
  strategic_recommendations: [
    'Shift Deal Scorer start date from Week 10 to Week 12 (after CRM has 2 weeks of data)',
    'Define minimum viable dataset: 20+ investors, 50+ interactions, 10+ stage transitions',
    'Build rule-based scoring first (firm stage match, sector fit) before AI model',
    'Consider manual scoring by founders for first 20 investors to generate training labels',
  ],
  suggested_subtasks: [
    {
      title: 'Define scoring model features',
      description: 'List all inputs: stage, sector, check size, geography, response rate, etc.',
      priority: 'high',
      estimated_hours: 4,
      reason: 'Clarifies data requirements before building model',
    },
    {
      title: 'Build rule-based scorer MVP',
      description: 'Simple if/then logic: stage match = +20 points, sector match = +15 points',
      priority: 'high',
      estimated_hours: 8,
      reason: 'Faster to ship than ML model, provides immediate value',
    },
    {
      title: 'Collect founder feedback on scoring accuracy',
      description: 'Manual review of first 20 scored investors to calibrate model',
      priority: 'medium',
      estimated_hours: 3,
      reason: 'Human feedback improves AI training quality',
    },
    {
      title: 'Train ML model on CRM interaction data',
      description: 'Use logged interactions to predict investor engagement likelihood',
      priority: 'high',
      estimated_hours: 12,
      reason: 'Core AI capability - but only after data exists',
    },
  ],
  confidence: 92,
  generated_at: '2026-03-10T16:35:00Z',
};

// Example 3: Kanban Board UI (Not Started, Clean Dependencies)
export const mockAIAnalysis_Kanban: AIAnalysis = {
  task_id: 'task-011',
  risk_level: 'low',
  risk_score: 28,
  dependency_health: {
    status: 'healthy',
    issues: [],
    missing_dependencies: [],
    circular_dependencies: false,
  },
  blockers: [
    {
      task_id: 'task-010',
      task_name: 'Task System - CRUD Operations',
      reason: 'Kanban needs task CRUD endpoints for drag-drop updates',
      severity: 'low',
      estimated_delay_days: 0,
    },
  ],
  timeline_assessment: {
    is_realistic: true,
    suggested_shift_days: 0,
    reason: 'Timeline is realistic. Task CRUD on track for completion before Kanban start date.',
    capacity_issues: [],
    sequencing_issues: [],
  },
  downstream_impact: [
    {
      task_id: 'task-012',
      task_name: 'Task AI Assist Panel',
      impact_level: 'low',
      reason: 'AI panel is soft dependency - can delay without major impact',
      estimated_delay_days: 0,
    },
  ],
  strategic_recommendations: [
    'Use react-dnd library for drag-drop functionality (proven, well-documented)',
    'Implement optimistic UI updates for instant feedback on task moves',
    'Add keyboard shortcuts (j/k navigation, x to mark complete) for power users',
    'Consider adding swimlanes (by assignee or priority) in Phase 2',
  ],
  suggested_subtasks: [
    {
      title: 'Drag-drop library integration (react-dnd)',
      description: 'Set up react-dnd with 5 kanban columns',
      priority: 'high',
      estimated_hours: 6,
      reason: 'Core kanban functionality',
    },
    {
      title: 'Optimistic UI for task moves',
      description: 'Update UI immediately when dragging, revert if API fails',
      priority: 'high',
      estimated_hours: 4,
      reason: 'Improves perceived performance',
    },
    {
      title: 'Column collapse/expand functionality',
      description: 'Allow hiding Done column to focus on active work',
      priority: 'medium',
      estimated_hours: 3,
      reason: 'Reduces visual clutter',
    },
    {
      title: 'Task quick-add from column header',
      description: 'Inline form at top of each column for fast task creation',
      priority: 'medium',
      estimated_hours: 4,
      reason: 'Improves task creation UX',
    },
  ],
  confidence: 94,
  generated_at: '2026-03-10T16:40:00Z',
};

// Example 4: Contact Enrichment API (Blocked)
export const mockAIAnalysis_ContactEnrichment: AIAnalysis = {
  task_id: 'task-015',
  risk_level: 'high',
  risk_score: 85,
  dependency_health: {
    status: 'critical',
    issues: [
      'BLOCKED: Missing LinkedIn API key',
      'BLOCKED: Missing Crunchbase API key',
      'BLOCKED: Missing AngelList API key',
    ],
    missing_dependencies: [
      'LinkedIn Developer Application approved',
      'Crunchbase API subscription ($500/month)',
      'AngelList partner status',
    ],
    circular_dependencies: false,
  },
  blockers: [
    {
      task_id: 'task-014',
      task_name: 'CRM Implementation',
      reason: 'CRM blocked until enrichment API provides data',
      severity: 'high',
      estimated_delay_days: 7,
    },
  ],
  timeline_assessment: {
    is_realistic: false,
    suggested_shift_days: 7,
    reason: 'API key procurement takes 5-7 days. LinkedIn requires developer application review. Suggest 1-week delay.',
    capacity_issues: [
      'No fallback plan if API keys not approved',
    ],
    sequencing_issues: [
      'Should have applied for API keys 2 weeks ago',
    ],
  },
  downstream_impact: [
    {
      task_id: 'task-014',
      task_name: 'CRM Implementation',
      impact_level: 'high',
      reason: 'CRM UX significantly degraded without auto-fill investor data',
      estimated_delay_days: 7,
    },
    {
      task_id: 'task-019',
      task_name: 'Deal Scorer Agent',
      impact_level: 'medium',
      reason: 'Enriched data improves scoring accuracy (firm size, funding history)',
      estimated_delay_days: 7,
    },
  ],
  strategic_recommendations: [
    'IMMEDIATE: Apply for LinkedIn API access today (5-7 day approval)',
    'IMMEDIATE: Subscribe to Crunchbase API ($500/month)',
    'Fallback: Build manual contact entry form to unblock CRM',
    'Alternative: Use Clearbit API as backup enrichment source',
    'Consider web scraping LinkedIn public profiles as temporary solution',
  ],
  suggested_subtasks: [
    {
      title: 'Submit LinkedIn developer application',
      description: 'Apply for LinkedIn API access with use case documentation',
      priority: 'critical',
      estimated_hours: 2,
      reason: 'Unblocks enrichment integration',
    },
    {
      title: 'Purchase Crunchbase API subscription',
      description: 'Sign up for $500/month Crunchbase API tier',
      priority: 'critical',
      estimated_hours: 1,
      reason: 'Immediate access to investor funding data',
    },
    {
      title: 'Build Clearbit fallback integration',
      description: 'Use Clearbit Enrichment API as backup data source',
      priority: 'high',
      estimated_hours: 6,
      reason: 'Risk mitigation if LinkedIn/Crunchbase delayed',
    },
    {
      title: 'Manual contact form as MVP',
      description: 'Allow founders to manually enter investor details',
      priority: 'high',
      estimated_hours: 4,
      reason: 'Unblocks CRM immediately',
    },
  ],
  confidence: 96,
  generated_at: '2026-03-10T16:45:00Z',
};

// Example 5: Command Centre Dashboard (In Progress, On Track)
export const mockAIAnalysis_Dashboard: AIAnalysis = {
  task_id: 'task-009',
  risk_level: 'low',
  risk_score: 32,
  dependency_health: {
    status: 'healthy',
    issues: [],
    missing_dependencies: [],
    circular_dependencies: false,
  },
  blockers: [],
  timeline_assessment: {
    is_realistic: true,
    suggested_shift_days: 0,
    reason: 'On track for March 17 completion. Metrics cards complete, AI insights panel in progress.',
    capacity_issues: [],
    sequencing_issues: [],
  },
  downstream_impact: [
    {
      task_id: 'task-010',
      task_name: 'Task System - CRUD Operations',
      impact_level: 'low',
      reason: 'Dashboard will display task summary - no blocking dependency',
      estimated_delay_days: 0,
    },
  ],
  strategic_recommendations: [
    'Prioritize AI insights panel - highest value feature for founders',
    'Add quick action buttons (Create Task, Add Investor, Schedule Event)',
    'Consider adding "What to focus on this week" AI recommendation',
    'Add celebration animation when founder completes key milestone',
  ],
  suggested_subtasks: [
    {
      title: 'AI insights panel with top 3 recommendations',
      description: 'Display AI-generated insights: tasks to prioritize, investors to contact, events to attend',
      priority: 'high',
      estimated_hours: 8,
      reason: 'Highest value feature for dashboard',
    },
    {
      title: 'Quick action buttons',
      description: 'Add Create Task, Add Investor, Schedule Event buttons to header',
      priority: 'medium',
      estimated_hours: 4,
      reason: 'Improves founder workflow efficiency',
    },
    {
      title: 'Progress celebration animation',
      description: 'Confetti animation when founder hits 50% profile completion',
      priority: 'low',
      estimated_hours: 3,
      reason: 'Delight moment to encourage usage',
    },
  ],
  confidence: 91,
  generated_at: '2026-03-10T16:50:00Z',
};

// ============================================
// HELPER: Get AI Analysis for Task
// ============================================

export function getAIAnalysisForTask(taskId: string): AIAnalysis | null {
  const analyses: Record<string, AIAnalysis> = {
    'task-009': mockAIAnalysis_Dashboard,
    'task-011': mockAIAnalysis_Kanban,
    'task-014': mockAIAnalysis_CRM,
    'task-015': mockAIAnalysis_ContactEnrichment,
    'task-019': mockAIAnalysis_DealScorer,
  };

  return analyses[taskId] || null;
}

// ============================================
// MOCK: Generate AI Analysis (Simulated API Call)
// ============================================

export async function generateMockAIAnalysis(taskId: string, context: any): Promise<AIAnalysis> {
  // Simulate 1.5s API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Return pre-generated analysis if exists
  const existing = getAIAnalysisForTask(taskId);
  if (existing) {
    return existing;
  }

  // Generate generic analysis for unknown tasks
  return {
    task_id: taskId,
    risk_level: 'low',
    risk_score: 40,
    dependency_health: {
      status: 'healthy',
      issues: [],
      missing_dependencies: [],
      circular_dependencies: false,
    },
    blockers: [],
    timeline_assessment: {
      is_realistic: true,
      suggested_shift_days: 0,
      reason: 'Timeline appears realistic based on current dependencies.',
      capacity_issues: [],
      sequencing_issues: [],
    },
    downstream_impact: [],
    strategic_recommendations: [
      'Break task into smaller subtasks for better progress tracking',
      'Define clear acceptance criteria before starting',
      'Schedule daily standup to monitor blockers',
    ],
    suggested_subtasks: [],
    confidence: 75,
    generated_at: new Date().toISOString(),
  };
}