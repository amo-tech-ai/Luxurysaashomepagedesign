import { Task, Feature, Project } from '@/types/dashboard';

export const MOCK_PROJECT: Project = {
  id: 'startupai16',
  name: 'startupai16',
  description: 'StartupAI Auto Task Runner',
  verified: true,
  progress: 0,
  totalTasks: 7,
  completedTasks: 0,
};

export const MOCK_TASKS: Task[] = [
  {
    id: 'task-001',
    title: 'Third-Party Integrations Hub',
    description: 'Connect StartupAI with popular tools like Slack, Gmail, Calendar.',
    status: 'planning',
    type: 'feature',
    priority: 'p2',
    phase: 'Phase 1',
    category: 'Integration',
    skills: ['/backend', '/api'],
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6h ago
    updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    completionPercentage: 0,
    tags: ['Pending', 'Feature'],
  },
  {
    id: 'task-002',
    title: 'Advanced AI Strategic Advisor',
    description: 'Deep strategic analysis for founders using high-trust workflows.',
    status: 'planning',
    type: 'feature',
    priority: 'p1',
    phase: 'Phase 1',
    category: 'AI',
    skills: ['/ai', '/frontend'],
    createdAt: new Date(Date.now() - 5 * 60 * 1000), // 5m ago
    updatedAt: new Date(Date.now() - 5 * 60 * 1000),
    completionPercentage: 0,
    tags: ['Pending', 'Feature'],
  },
  {
    id: 'task-003',
    title: 'Mobile-Responsive Optimization',
    description: 'Optimize the web application for mobile devices.',
    status: 'planning',
    type: 'enhancement',
    priority: 'p2',
    phase: 'Phase 2',
    category: 'UI/UX',
    skills: ['/frontend'],
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    completionPercentage: 0,
    tags: ['Pending', 'Enhancement'],
  },
  {
    id: 'task-004',
    title: 'Calendar Integration for Investor Meetings',
    description: 'Integrate with Google Calendar to track investor meetings.',
    status: 'planning',
    type: 'feature',
    priority: 'p3',
    phase: 'Phase 2',
    category: 'Integration',
    skills: ['/backend', '/api'],
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    completionPercentage: 0,
    tags: ['Pending', 'Feature'],
  },
  {
    id: 'task-005',
    title: 'Competitive Analysis Tools',
    description: 'Track competitors, monitor market changes, analyze positioning.',
    status: 'planning',
    type: 'feature',
    priority: 'p2',
    phase: 'Phase 1',
    category: 'Analytics',
    skills: ['/frontend', '/data'],
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    completionPercentage: 0,
    tags: ['Pending', 'Feature'],
  },
  {
    id: 'task-006',
    title: 'Email Integration for Investor Communication',
    description: 'Auto-link Gmail/Outlook threads to investors and deals.',
    status: 'planning',
    type: 'feature',
    priority: 'p2',
    phase: 'Phase 1',
    category: 'Integration',
    skills: ['/backend', '/api'],
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    completionPercentage: 0,
    tags: ['Pending', 'Feature'],
  },
  {
    id: 'task-007',
    title: 'Subscription Billing System',
    description: 'Stripe plans with usage-based AI credits + receipts.',
    status: 'planning',
    type: 'feature',
    priority: 'p1',
    phase: 'Phase 1',
    category: 'Payments',
    skills: ['/backend', '/api'],
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    completionPercentage: 0,
    tags: ['Pending', 'Feature'],
  },
  {
    id: 'task-008',
    title: 'Autosave Everywhere',
    description: 'Save edits across canvas, docs, CRM notes automatically.',
    status: 'queue',
    type: 'feature',
    priority: 'p1',
    phase: 'Phase 1',
    category: 'Foundation',
    skills: ['/frontend', '/backend'],
    createdAt: new Date(Date.now() - 1 * 60 * 1000), // 1m ago
    updatedAt: new Date(Date.now() - 1 * 60 * 1000),
    completionPercentage: 0,
    tags: ['Pending', 'Feature'],
  },
  {
    id: 'task-009',
    title: 'AI-Enriched Investor Profiles',
    description: 'Auto-enrich thesis, portfolio, warm intro paths.',
    status: 'queue',
    type: 'feature',
    priority: 'p2',
    phase: 'Phase 2',
    category: 'AI',
    skills: ['/ai', '/backend'],
    createdAt: new Date(Date.now() - 30 * 1000), // 30s ago
    updatedAt: new Date(Date.now() - 30 * 1000),
    completionPercentage: 0,
    tags: ['Pending', 'Feature'],
  },
];

export const MOCK_FEATURES: Feature[] = [
  {
    id: 'feature-001',
    title: 'Email Integration for Investor Communication Tracking',
    description: 'Auto-link Gmail/Outlook threads to investors and deals.',
    priority: 'must-have',
    category: 'Foundation',
    impact: 'high',
    status: 'under-review',
    tags: ['Must Have', 'Foundation', 'Impact: High'],
  },
  {
    id: 'feature-002',
    title: 'Subscription Billing System',
    description: 'Stripe plans with usage-based AI credits + receipts.',
    priority: 'must-have',
    category: 'Foundation',
    impact: 'high',
    status: 'under-review',
    tags: ['Must Have', 'Foundation', 'Impact: High'],
  },
  {
    id: 'feature-003',
    title: 'Mobile App (iOS/Android)',
    description: 'Native mobile experience for on-the-go founders.',
    priority: 'could-have',
    category: 'Mobile',
    impact: 'medium',
    status: 'under-review',
    tags: ['Could Have', 'Mobile', 'Impact: Medium'],
  },
  {
    id: 'feature-004',
    title: 'Autosave Everywhere',
    description: 'Save edits across canvas, docs, CRM notes automatically.',
    priority: 'must-have',
    category: 'Foundation',
    impact: 'medium',
    status: 'planned',
    tags: ['Must Have', 'Foundation', 'Impact: Medium'],
  },
  {
    id: 'feature-005',
    title: 'AI-Enriched Investor Profiles',
    description: 'Auto-enrich thesis, portfolio, warm intro paths.',
    priority: 'should-have',
    category: 'Collaboration',
    impact: 'high',
    status: 'planned',
    tags: ['Should Have', 'Collaboration', 'Impact: High'],
  },
  {
    id: 'feature-006',
    title: 'AI-Powered Pitch Deck Builder',
    description: 'Generate deck + slide-by-slide rewrites + export.',
    priority: 'must-have',
    category: 'Foundation',
    impact: 'high',
    status: 'in-progress',
    tags: ['Must Have', 'Foundation', 'Impact: High'],
  },
];

export const PHASES = ['All Phases', 'Phase 1', 'Phase 2', 'Phase 3'];
export const CATEGORIES = ['All Categories', 'Feature', 'Bug Fix', 'Enhancement', 'Research'];

export function getTasksByStatus(status: Task['status']): Task[] {
  return MOCK_TASKS.filter(task => task.status === status);
}

export function getTimeAgo(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}
