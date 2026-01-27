// Dashboard System Type Definitions

export type TaskStatus = 'planning' | 'queue' | 'in-progress' | 'ai-review' | 'done';
export type TaskType = 'feature' | 'bug' | 'enhancement' | 'research';
export type TaskPriority = 'p1' | 'p2' | 'p3' | 'p4';
export type FeaturePriority = 'must-have' | 'should-have' | 'could-have' | 'wont-have';
export type ImpactLevel = 'high' | 'medium' | 'low';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  type: TaskType;
  priority: TaskPriority;
  phase?: string;
  category?: string;
  skills?: string[];
  createdAt: Date;
  updatedAt: Date;
  completionPercentage: number;
  tags?: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  priority: FeaturePriority;
  category: string;
  impact: ImpactLevel;
  status: 'under-review' | 'planned' | 'in-progress' | 'done';
  tags?: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  verified: boolean;
  progress: number;
  totalTasks: number;
  completedTasks: number;
}

export interface KanbanColumn {
  id: TaskStatus;
  title: string;
  count: number;
  maxCapacity?: number;
  icon?: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  shortcut?: string;
  active?: boolean;
  href: string;
}

export interface TaskMetadata {
  status: string;
  priority: string;
  skills: string[];
  estimatedTime?: string;
  assignee?: string;
}

export interface AcceptanceCriteria {
  id: string;
  text: string;
  completed: boolean;
}

export interface TaskLog {
  id: string;
  timestamp: Date;
  action: string;
  user?: string;
}

export interface TaskFile {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadedAt: Date;
}

export interface DashboardFilters {
  phase?: string;
  category?: string;
  search?: string;
}

export interface AIInsight {
  type: 'insight' | 'next-step' | 'risk';
  message: string;
  actionable: boolean;
}
