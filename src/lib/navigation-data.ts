/**
 * StartupAI Navigation Data Structure
 * Organized by founder journey: BUILD → FUNDRAISE → INSIGHTS → LEARN
 * Status: active (live), planned (coming), placeholder (future)
 */

export interface NavLink {
  name: string;
  route: string;
  status: 'active' | 'planned' | 'placeholder';
  badge?: string;
}

export interface NavSection {
  title: string;
  icon: string;
  description?: string;
  links: NavLink[];
}

// PRODUCT MEGA MENU DATA
export const productNavigation = {
  build: {
    title: 'Build',
    icon: 'LayoutDashboard',
    description: 'Daily execution tools',
    links: [
      { name: 'Main Dashboard', route: 'dashboard-main', status: 'active' as const, badge: 'New' },
      { name: 'Kanban Board', route: 'dashboard', status: 'active' as const },
      { name: 'Dashboard V2 (Premium)', route: 'dashboard-v2', status: 'active' as const },
      { name: 'Roadmap', route: 'dashboard-roadmap', status: 'active' as const },
      { name: 'Lean Canvas', route: 'lean-canvas', status: 'active' as const },
      { name: 'Lean Canvas with AI', route: 'lean-canvas-ai', status: 'active' as const, badge: 'New' },
      { name: 'Projects', route: 'projects', status: 'coming-soon' as const },
      { name: 'Insights', route: 'dashboard-insights', status: 'planned' as const },
      { name: 'Ideation', route: 'dashboard-ideation', status: 'planned' as const },
      { name: 'Agent Terminals', route: 'dashboard-agents', status: 'planned' as const },
      { name: 'Content', route: 'dashboard-content', status: 'planned' as const },
      { name: 'MCP Overview', route: 'dashboard-mcp', status: 'planned' as const, badge: 'Soon' },
      { name: 'Worktrees', route: 'dashboard-worktrees', status: 'planned' as const, badge: 'Soon' },
      { name: 'GitHub Issues', route: 'dashboard-issues', status: 'planned' as const, badge: 'Soon' },
      { name: 'GitHub PRs', route: 'dashboard-prs', status: 'planned' as const, badge: 'Soon' },
      { name: 'Settings', route: 'dashboard-settings', status: 'planned' as const },
    ],
  },
  fundraise: {
    title: 'Fundraise',
    icon: 'Presentation',
    description: 'Pitch decks & networking',
    links: [
      { name: 'Pitch Generator', route: 'pitch-deck', status: 'active' as const },
      { name: 'Pitch Wizard (11 Phases)', route: 'pitch-deck-wizard', status: 'active' as const },
      { name: 'AI Suggestions Demo', route: 'pitch-deck-ai-demo', status: 'active' as const },
      { name: 'AI Suggestions Enhanced', route: 'pitch-deck-ai-enhanced', status: 'active' as const },
      { name: 'Events', route: 'events', status: 'active' as const },
      { name: 'Event Detail', route: 'event-detail', status: 'active' as const },
    ],
  },
  insights: {
    title: 'Insights',
    icon: 'TrendingUp',
    description: 'Market intelligence',
    links: [
      { name: 'AI Landscape', route: 'ai-landscape', status: 'active' as const },
      { name: 'AI Adoption 2025', route: 'ai-adoption-2025', status: 'active' as const },
      { name: 'AI Industry Adoption', route: 'ai-industry-adoption', status: 'active' as const },
      { name: 'AI Jobs & Future of Work', route: 'ai-jobs-future-work', status: 'active' as const },
      { name: 'AI Jobs V2', route: 'ai-jobs-v2', status: 'active' as const },
      { name: 'AI Investment Hubs', route: 'ai-hubs', status: 'active' as const },
      { name: 'AI Startup Products', route: 'ai-products', status: 'active' as const },
      { name: 'AI Product Intelligence V2', route: 'ai-products-v2', status: 'active' as const },
    ],
  },
  learn: {
    title: 'Learn',
    icon: 'GraduationCap',
    description: 'Product tutorials',
    links: [
      { name: 'How It Works - Overview', route: 'how-it-works', status: 'active' as const },
      { name: 'How Pitch Works', route: 'how-pitch-works', status: 'active' as const },
      { name: 'How It Works - Pitch Generator', route: 'how-it-works-pitch', status: 'active' as const },
      { name: 'How It Works V2', route: 'how-it-works-v2', status: 'active' as const },
      { name: 'How It Works V3 (Editorial)', route: 'how-it-works-v3', status: 'active' as const },
    ],
  },
};

// RESOURCES MEGA MENU DATA
export const resourcesNavigation = {
  documentation: {
    title: 'Documentation',
    icon: 'Book',
    links: [
      { name: 'Site Map', route: 'sitemap', status: 'active' as const },
      { name: 'API Reference', route: 'api-docs', status: 'placeholder' as const },
      { name: 'Help Center', route: 'help', status: 'placeholder' as const },
      { name: 'Documentation', route: 'docs', status: 'placeholder' as const },
    ],
  },
  community: {
    title: 'Community',
    icon: 'Users',
    links: [
      { name: 'Founder Stories', route: 'founder-stories', status: 'placeholder' as const },
      { name: 'Community', route: 'community', status: 'placeholder' as const },
      { name: 'Blog', route: 'blog', status: 'placeholder' as const },
      { name: 'Events', route: 'events', status: 'active' as const },
    ],
  },
  research: {
    title: 'Research',
    icon: 'BarChart',
    links: [
      { name: 'View All Reports', route: 'ai-landscape', status: 'active' as const },
      { name: 'Industry Data', route: 'ai-industry-adoption', status: 'active' as const },
      { name: 'Market Trends', route: 'ai-adoption-2025', status: 'active' as const },
    ],
  },
};

// COMPANY DROPDOWN DATA
export const companyNavigation = {
  main: [
    { name: 'About', route: 'about', status: 'placeholder' as const },
    { name: 'Careers', route: 'careers', status: 'placeholder' as const },
    { name: 'Blog', route: 'blog', status: 'placeholder' as const },
    { name: 'Contact', route: 'contact', status: 'placeholder' as const },
  ],
  legal: [
    { name: 'Privacy', route: 'privacy', status: 'placeholder' as const },
    { name: 'Terms', route: 'terms', status: 'placeholder' as const },
  ],
};

// Helper function to get route counts
export const getRouteStats = () => {
  const buildCount = productNavigation.build.links.length;
  const fundraiseCount = productNavigation.fundraise.links.length;
  const insightsCount = productNavigation.insights.links.length;
  const learnCount = productNavigation.learn.links.length;

  return {
    build: buildCount,
    fundraise: fundraiseCount,
    insights: insightsCount,
    learn: learnCount,
    total: buildCount + fundraiseCount + insightsCount + learnCount,
  };
};