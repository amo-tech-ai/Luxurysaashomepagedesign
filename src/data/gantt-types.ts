// Gantt System - Complete TypeScript Interfaces
// Based on /docs/01-gantt/01-gantt-plan.md

// ============================================
// CORE TYPES
// ============================================

export type TaskStatus = 'not_started' | 'in_progress' | 'completed' | 'blocked' | 'at_risk';
export type TaskLayer = 'Foundation' | 'Core Screens' | 'Business Systems' | 'AI Intelligence' | 'Automation';
export type Priority = 'low' | 'medium' | 'high' | 'critical';
export type DependencyType = 'hard' | 'soft';
export type RiskLevel = 'low' | 'medium' | 'high';
export type ImpactLevel = 'low' | 'medium' | 'high';
export type DependencyHealthStatus = 'healthy' | 'weak' | 'critical';
export type ViewMode = 'timeline' | 'phase' | 'agent';

// ============================================
// GANTT PROJECT
// ============================================

export interface GanttProject {
  id: string;
  name: string;
  description: string;
  start_date: string; // YYYY-MM-DD
  end_date: string;
  current_phase: string;
  overall_progress: number; // 0-100
  phases: Phase[];
  tasks: Task[];
  dependencies: Dependency[];
  created_at: string;
  updated_at: string;
}

// ============================================
// PHASE
// ============================================

export interface Phase {
  id: string;
  name: string;
  description: string;
  start_week: number; // Week number from project start
  end_week: number;
  color: string; // Hex color for UI
  tasks_count: number;
  completed_tasks: number;
  progress: number; // 0-100
  milestones: Milestone[];
}

export interface Milestone {
  id: string;
  name: string;
  date: string;
  completed: boolean;
  description: string;
}

// ============================================
// TASK
// ============================================

export interface Task {
  id: string;
  name: string;
  description: string;
  layer: TaskLayer;
  phase: string; // Phase ID
  status: TaskStatus;
  start_date: string; // YYYY-MM-DD
  end_date: string;
  completion_percent: number; // 0-100
  assigned_to: string | null;
  priority: Priority;
  dependencies: string[]; // Task IDs this task depends on
  tags: string[];
  estimated_hours: number;
  actual_hours: number;
  notes: string;
  created_at: string;
  updated_at: string;
}

// ============================================
// DEPENDENCY
// ============================================

export interface Dependency {
  id: string;
  task_id: string; // Task that depends on another
  depends_on_task_id: string; // Task that must complete first
  type: DependencyType;
  lag_days: number; // Days delay after dependency completes
  created_at: string;
}

// ============================================
// AI ANALYSIS
// ============================================

export interface AIAnalysis {
  task_id: string;
  risk_level: RiskLevel;
  risk_score: number; // 0-100
  dependency_health: DependencyHealth;
  blockers: Blocker[];
  timeline_assessment: TimelineAssessment;
  downstream_impact: DownstreamImpact[];
  strategic_recommendations: string[];
  suggested_subtasks: SuggestedSubtask[];
  confidence: number; // 0-100
  generated_at: string;
}

export interface DependencyHealth {
  status: DependencyHealthStatus;
  issues: string[];
  missing_dependencies: string[];
  circular_dependencies: boolean;
}

export interface Blocker {
  task_id: string;
  task_name: string;
  reason: string;
  severity: RiskLevel;
  estimated_delay_days: number;
}

export interface TimelineAssessment {
  is_realistic: boolean;
  suggested_shift_days: number;
  reason: string;
  capacity_issues: string[];
  sequencing_issues: string[];
}

export interface DownstreamImpact {
  task_id: string;
  task_name: string;
  impact_level: ImpactLevel;
  reason: string;
  estimated_delay_days: number;
}

export interface SuggestedSubtask {
  title: string;
  description: string;
  priority: Priority;
  estimated_hours: number;
  reason: string;
}

// ============================================
// FILTERS & VIEW
// ============================================

export interface GanttFilters {
  phases: string[]; // Phase IDs
  layers: TaskLayer[];
  statuses: TaskStatus[];
  priorities: Priority[];
  assigned_to: string[];
  search: string;
}

export interface GanttViewConfig {
  mode: ViewMode;
  show_dependencies: boolean;
  show_today_marker: boolean;
  show_milestones: boolean;
  week_start: number; // Week number to start view
  week_end: number;
  collapsed_groups: string[]; // Group IDs that are collapsed
}

// ============================================
// TIMELINE RENDERING
// ============================================

export interface TimelineBar {
  task: Task;
  x: number; // Pixels from left
  y: number; // Pixels from top
  width: number; // Pixels wide
  height: number; // Pixels tall
  color: string;
  is_selected: boolean;
  is_hovered: boolean;
  is_dragging: boolean;
}

export interface TimelineWeek {
  week_number: number;
  start_date: string;
  end_date: string;
  is_current_week: boolean;
  x: number; // Position in grid
  width: number;
}

export interface DependencyLine {
  id: string;
  from_task_id: string;
  to_task_id: string;
  from_x: number;
  from_y: number;
  to_x: number;
  to_y: number;
  type: DependencyType;
  is_highlighted: boolean;
}

// ============================================
// DRAG & DROP
// ============================================

export interface DragState {
  is_dragging: boolean;
  task_id: string | null;
  original_start_date: string | null;
  original_end_date: string | null;
  new_start_date: string | null;
  new_end_date: string | null;
  offset_weeks: number;
}

export interface DropResult {
  task_id: string;
  old_start_date: string;
  old_end_date: string;
  new_start_date: string;
  new_end_date: string;
  affected_tasks: string[]; // Tasks with updated dependencies
}

// ============================================
// AI CONTEXT (for API calls)
// ============================================

export interface TaskAnalysisContext {
  project_context: {
    project_name: string;
    current_phase: string;
    overall_progress: number;
  };
  task: Task;
  dependencies: Array<{
    id: string;
    name: string;
    status: TaskStatus;
    completion_percent: number;
  }>;
  downstream_tasks: Array<{
    id: string;
    name: string;
    status: TaskStatus;
    depends_on_current: boolean;
  }>;
  related_metrics: {
    blocked_tasks_count: number;
    overdue_tasks: number;
    phase_progress: number;
  };
}

// ============================================
// STATISTICS
// ============================================

export interface GanttStatistics {
  total_tasks: number;
  completed_tasks: number;
  in_progress_tasks: number;
  blocked_tasks: number;
  at_risk_tasks: number;
  overall_progress: number;
  estimated_completion_date: string;
  days_remaining: number;
  average_task_duration: number;
  critical_path: string[]; // Task IDs on critical path
  by_layer: LayerStatistics[];
  by_phase: PhaseStatistics[];
}

export interface LayerStatistics {
  layer: TaskLayer;
  total_tasks: number;
  completed_tasks: number;
  progress: number;
  estimated_hours: number;
  actual_hours: number;
}

export interface PhaseStatistics {
  phase_id: string;
  phase_name: string;
  total_tasks: number;
  completed_tasks: number;
  progress: number;
  start_date: string;
  end_date: string;
  is_current: boolean;
}

// ============================================
// API RESPONSES
// ============================================

export interface GanttProjectResponse {
  project: GanttProject;
  statistics: GanttStatistics;
}

export interface TaskUpdateRequest {
  task_id: string;
  updates: Partial<Task>;
}

export interface TaskUpdateResponse {
  success: boolean;
  task: Task;
  affected_tasks: Task[];
  new_analysis: AIAnalysis | null;
}

export interface BulkTimelineUpdateRequest {
  updates: Array<{
    task_id: string;
    new_start_date: string;
    new_end_date: string;
  }>;
  recalculate_dependencies: boolean;
}

export interface BulkTimelineUpdateResponse {
  success: boolean;
  updated_tasks: Task[];
  new_dependencies: Dependency[];
  impact_report: {
    tasks_affected: number;
    timeline_shift_days: number;
    new_completion_date: string;
  };
}

// ============================================
// EXPORT FORMATS
// ============================================

export interface GanttExportConfig {
  format: 'png' | 'pdf' | 'json' | 'csv';
  include_ai_analysis: boolean;
  include_dependencies: boolean;
  date_range: {
    start: string;
    end: string;
  } | null;
  filters: GanttFilters | null;
}

export interface GanttExportResult {
  success: boolean;
  download_url: string | null;
  file_size_bytes: number;
  error: string | null;
}

// ============================================
// REAL-TIME COLLABORATION
// ============================================

export interface GanttCollaborationEvent {
  event_type: 'task_updated' | 'task_created' | 'task_deleted' | 'timeline_adjusted' | 'user_joined' | 'user_left';
  user_id: string;
  user_name: string;
  timestamp: string;
  data: any;
}

export interface ActiveUser {
  user_id: string;
  user_name: string;
  avatar_url: string | null;
  viewing_task_id: string | null;
  last_active: string;
}

// ============================================
// SUBTASK GENERATION
// ============================================

export interface SubtaskGenerationRequest {
  task_id: string;
  generation_mode: 'smart' | 'standard' | 'detailed';
  max_subtasks: number;
}

export interface SubtaskGenerationResponse {
  parent_task_id: string;
  suggested_subtasks: SuggestedSubtask[];
  estimated_total_hours: number;
  ai_rationale: string;
  confidence: number;
}

// ============================================
// TIMELINE RECALCULATION
// ============================================

export interface TimelineRecalculationRequest {
  project_id: string;
  anchor_date: string; // Date to start calculation from
  respect_dependencies: boolean;
  optimize_for: 'speed' | 'resource_balance' | 'risk_minimization';
}

export interface TimelineRecalculationResponse {
  success: boolean;
  updated_tasks: Task[];
  new_end_date: string;
  timeline_shift_days: number;
  warnings: string[];
  optimization_notes: string[];
}
