import React from 'react';
import {
  Home,
  LayoutDashboard,
  FileText,
  GraduationCap,
  Calendar,
  TrendingUp,
  Map,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

interface SitemapPageProps {
  onNavigate?: (page: string) => void;
}

interface RouteLink {
  name: string;
  route: string;
  status: 'active' | 'planned' | 'placeholder';
  icon?: React.ReactNode;
  children?: RouteLink[];
}

export default function SitemapPage({ onNavigate }: SitemapPageProps) {
  const routes: RouteLink[] = [
    {
      name: 'Homepage',
      route: 'home',
      status: 'active',
      icon: <Home className="w-5 h-5" />,
      children: [
        { name: 'Home V1 (Original)', route: 'home', status: 'active' },
        { name: 'Home V5 (Enhanced)', route: 'home-v5', status: 'active' },
        { name: 'Home V6 (BCG Design)', route: 'home-v6', status: 'active' },
      ],
    },
    {
      name: 'Dashboard',
      route: 'dashboard',
      status: 'active',
      icon: <LayoutDashboard className="w-5 h-5" />,
      children: [
        { name: 'Kanban Board', route: 'dashboard', status: 'active' },
        { name: 'Roadmap', route: 'dashboard-roadmap', status: 'active' },
        { name: 'Agent Terminals', route: 'dashboard-agents', status: 'planned' },
        { name: 'Insights', route: 'dashboard-insights', status: 'planned' },
        { name: 'Ideation', route: 'dashboard-ideation', status: 'active' },
        { name: 'Content', route: 'dashboard-content', status: 'planned' },
        { name: 'MCP Overview', route: 'dashboard-mcp', status: 'planned' },
        { name: 'Worktrees', route: 'dashboard-worktrees', status: 'planned' },
        { name: 'GitHub Issues', route: 'dashboard-issues', status: 'planned' },
        { name: 'GitHub PRs', route: 'dashboard-prs', status: 'planned' },
        { name: 'Settings', route: 'dashboard-settings', status: 'planned' },
      ],
    },
    {
      name: 'Pitch Deck',
      route: 'pitch-deck',
      status: 'active',
      icon: <FileText className="w-5 h-5" />,
      children: [
        { name: 'Generator', route: 'pitch-deck', status: 'active' },
        { name: 'Wizard (11 Phases)', route: 'pitch-deck-wizard', status: 'active' },
        { name: 'AI Suggestions Demo', route: 'pitch-deck-ai-demo', status: 'active' },
        { name: 'AI Suggestions Enhanced', route: 'pitch-deck-ai-enhanced', status: 'active' },
      ],
    },
    {
      name: 'How It Works',
      route: 'how-it-works',
      status: 'active',
      icon: <GraduationCap className="w-5 h-5" />,
      children: [
        { name: 'Overview', route: 'how-it-works', status: 'active' },
        { name: 'Pitch Generator', route: 'how-it-works-pitch', status: 'active' },
        { name: 'Screenshots Version', route: 'how-pitch-works', status: 'active' },
        { name: 'Version 2', route: 'how-it-works-v2', status: 'active' },
        { name: 'Version 3 (Editorial)', route: 'how-it-works-v3', status: 'active' },
      ],
    },
    {
      name: 'Events',
      route: 'events',
      status: 'active',
      icon: <Calendar className="w-5 h-5" />,
      children: [
        { name: 'Events List', route: 'events', status: 'active' },
        { name: 'Event Detail', route: 'event-detail', status: 'active' },
      ],
    },
    {
      name: 'Infographics & Research',
      route: 'ai-landscape',
      status: 'active',
      icon: <TrendingUp className="w-5 h-5" />,
      children: [
        { name: 'AI Landscape', route: 'ai-landscape', status: 'active' },
        { name: 'AI Adoption 2025', route: 'ai-adoption-2025', status: 'active' },
        { name: 'AI Industry Adoption', route: 'ai-industry-adoption', status: 'active' },
        { name: 'AI Jobs & Future of Work', route: 'ai-jobs-future-work', status: 'active' },
        { name: 'AI Jobs V2', route: 'ai-jobs-v2', status: 'active' },
        { name: 'AI Investment Hubs', route: 'ai-hubs', status: 'active' },
        { name: 'AI Startup Products', route: 'ai-products', status: 'active' },
        { name: 'AI Product Intelligence V2', route: 'ai-products-v2', status: 'active' },
      ],
    },
    {
      name: 'Onboarding',
      route: 'onboarding-v3',
      status: 'active',
      icon: <CheckCircle className="w-5 h-5" />,
      children: [
        { name: 'Onboarding V3 (5 Steps)', route: 'onboarding-v3', status: 'active' },
        { name: 'Smart Interview (Strategy Session)', route: 'smart-interview', status: 'active' },
        { name: 'Startup Validator', route: 'startup-validator', status: 'active' },
      ],
    },
  ];

  const handleNavigateClick = (route: string, status: string) => {
    if (status === 'active' && onNavigate) {
      onNavigate(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getStatusBadge = (status: string) => {
    if (status === 'active') {
      return (
        <span className="px-2 py-1 text-xs font-medium bg-[#0D5F4E] text-white rounded">
          Active
        </span>
      );
    }
    if (status === 'planned') {
      return (
        <span className="px-2 py-1 text-xs font-medium bg-[#E8E6E1] text-[#4A4A4A] rounded">
          Planned
        </span>
      );
    }
    return (
      <span className="px-2 py-1 text-xs font-medium bg-[#F5F5F3] text-[#A3A3A3] rounded">
        Placeholder
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <header className="bg-white border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-4xl lg:text-5xl text-[#2D2D2D] mb-2">
                Site Map
              </h1>
              <p className="text-lg text-[#4A4A4A]">
                Complete navigation structure and routes
              </p>
            </div>
            {onNavigate && (
              <button
                onClick={() => handleNavigateClick('home', 'active')}
                className="px-6 py-3 bg-[#0D5F4E] text-white rounded-sm hover:bg-[#0a4a3d] transition-colors flex items-center gap-2"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Statistics Banner */}
      <div className="bg-[#2D2D2D] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-serif mb-1">47</div>
              <div className="text-sm text-gray-400">Total Pages</div>
            </div>
            <div>
              <div className="text-3xl font-serif mb-1 text-[#0D5F4E]">22</div>
              <div className="text-sm text-gray-400">Active Pages</div>
            </div>
            <div>
              <div className="text-3xl font-serif mb-1">9</div>
              <div className="text-sm text-gray-400">Planned Pages</div>
            </div>
            <div>
              <div className="text-3xl font-serif mb-1">16</div>
              <div className="text-sm text-gray-400">Placeholders</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Legend */}
        <div className="mb-12 p-6 bg-white border border-[#E8E6E1] rounded-lg">
          <h3 className="font-serif text-xl text-[#2D2D2D] mb-4">Legend</h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#0D5F4E]" />
              <span className="text-sm text-[#4A4A4A]">Active - Fully implemented and working</span>
            </div>
            <div className="flex items-center gap-2">
              <Map className="w-5 h-5 text-[#A3A3A3]" />
              <span className="text-sm text-[#4A4A4A]">Planned - In development roadmap</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-dashed border-[#E8E6E1] rounded" />
              <span className="text-sm text-[#4A4A4A]">Placeholder - Future enhancement</span>
            </div>
          </div>
        </div>

        {/* Route Tree */}
        <div className="space-y-8">
          {routes.map((section, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E6E1] rounded-lg overflow-hidden"
            >
              {/* Section Header */}
              <button
                onClick={() => handleNavigateClick(section.route, section.status)}
                disabled={section.status !== 'active'}
                className={`w-full p-6 flex items-center justify-between transition-all ${
                  section.status === 'active'
                    ? 'hover:bg-[#F5F5F3] cursor-pointer'
                    : 'cursor-not-allowed opacity-75'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#0D5F4E] bg-opacity-10 rounded-lg">
                    {section.icon}
                  </div>
                  <div className="text-left">
                    <h2 className="font-serif text-2xl text-[#2D2D2D] mb-1">
                      {section.name}
                    </h2>
                    {section.children && (
                      <p className="text-sm text-[#A3A3A3]">
                        {section.children.length} page{section.children.length !== 1 ? 's' : ''}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {getStatusBadge(section.status)}
                  {section.status === 'active' && (
                    <ArrowRight className="w-5 h-5 text-[#0D5F4E]" />
                  )}
                </div>
              </button>

              {/* Children Routes */}
              {section.children && section.children.length > 0 && (
                <div className="border-t border-[#E8E6E1] bg-[#FAFAF8]">
                  <div className="p-6 space-y-2">
                    {section.children.map((child, childIdx) => (
                      <button
                        key={childIdx}
                        onClick={() => handleNavigateClick(child.route, child.status)}
                        disabled={child.status !== 'active'}
                        className={`w-full flex items-center justify-between p-4 rounded-lg transition-all ${
                          child.status === 'active'
                            ? 'bg-white hover:bg-[#F5F5F3] cursor-pointer border border-[#E8E6E1]'
                            : 'bg-white cursor-not-allowed opacity-60 border border-dashed border-[#E8E6E1]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#0D5F4E]" />
                          <span className="text-sm font-medium text-[#2D2D2D]">
                            {child.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusBadge(child.status)}
                          {child.status === 'active' && (
                            <ArrowRight className="w-4 h-4 text-[#0D5F4E]" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Supporting Pages Section */}
        <div className="mt-12 bg-white border border-[#E8E6E1] rounded-lg p-8">
          <h2 className="font-serif text-2xl text-[#2D2D2D] mb-6">
            Supporting Pages (Placeholders)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold text-[#A3A3A3] uppercase tracking-wider mb-3">
                Product
              </h3>
              <div className="space-y-2">
                {['Features', 'Pricing', 'Security'].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-[#F5F5F3] rounded text-sm text-[#A3A3A3]"
                  >
                    <span>{item}</span>
                    {getStatusBadge('placeholder')}
                  </div>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-[#A3A3A3] uppercase tracking-wider mb-3">
                Company
              </h3>
              <div className="space-y-2">
                {['About', 'Blog', 'Careers', 'Contact'].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-[#F5F5F3] rounded text-sm text-[#A3A3A3]"
                  >
                    <span>{item}</span>
                    {getStatusBadge('placeholder')}
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-[#A3A3A3] uppercase tracking-wider mb-3">
                Resources
              </h3>
              <div className="space-y-2">
                {['Documentation', 'Help Center', 'Community', 'Founder Stories', 'API Reference'].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-[#F5F5F3] rounded text-sm text-[#A3A3A3]"
                  >
                    <span>{item}</span>
                    {getStatusBadge('placeholder')}
                  </div>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-[#A3A3A3] uppercase tracking-wider mb-3">
                Legal
              </h3>
              <div className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Data Processing'].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-[#F5F5F3] rounded text-sm text-[#A3A3A3]"
                  >
                    <span>{item}</span>
                    {getStatusBadge('placeholder')}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Hierarchy */}
        <div className="mt-12 bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3d] text-white rounded-lg p-8">
          <h2 className="font-serif text-2xl mb-6">Site Hierarchy</h2>
          <div className="space-y-3 font-mono text-sm">
            <div>StartupAI</div>
            <div className="pl-4">├── Homepage (Entry Point)</div>
            <div className="pl-4">├── Dashboard (11 views)</div>
            <div className="pl-8">│   ├── Kanban Board ✓</div>
            <div className="pl-8">│   ├── Roadmap ✓</div>
            <div className="pl-8">│   └── 9 Planned Views</div>
            <div className="pl-4">├── Pitch Deck (4 versions)</div>
            <div className="pl-4">├── How It Works (5 versions)</div>
            <div className="pl-4">├── Events (2 pages)</div>
            <div className="pl-4">├── Infographics (8 reports)</div>
            <div className="pl-4">└── Supporting (16 placeholders)</div>
          </div>
        </div>

        {/* Quick Actions */}
        {onNavigate && (
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <button
              onClick={() => handleNavigateClick('dashboard', 'active')}
              className="p-6 bg-white border-2 border-[#0D5F4E] rounded-lg hover:bg-[#F5F5F3] transition-all group"
            >
              <LayoutDashboard className="w-8 h-8 text-[#0D5F4E] mb-3" />
              <h3 className="font-serif text-xl text-[#2D2D2D] mb-2">Go to Dashboard</h3>
              <p className="text-sm text-[#A3A3A3]">View kanban board and manage tasks</p>
              <ArrowRight className="w-5 h-5 text-[#0D5F4E] mt-3 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleNavigateClick('events', 'active')}
              className="p-6 bg-white border-2 border-[#0D5F4E] rounded-lg hover:bg-[#F5F5F3] transition-all group"
            >
              <Calendar className="w-8 h-8 text-[#0D5F4E] mb-3" />
              <h3 className="font-serif text-xl text-[#2D2D2D] mb-2">Browse Events</h3>
              <p className="text-sm text-[#A3A3A3]">Find networking and learning opportunities</p>
              <ArrowRight className="w-5 h-5 text-[#0D5F4E] mt-3 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleNavigateClick('pitch-deck', 'active')}
              className="p-6 bg-white border-2 border-[#0D5F4E] rounded-lg hover:bg-[#F5F5F3] transition-all group"
            >
              <FileText className="w-8 h-8 text-[#0D5F4E] mb-3" />
              <h3 className="font-serif text-xl text-[#2D2D2D] mb-2">Create Pitch Deck</h3>
              <p className="text-sm text-[#A3A3A3]">Generate AI-powered pitch presentations</p>
              <ArrowRight className="w-5 h-5 text-[#0D5F4E] mt-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              StartupAI - Complete Site Map
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Last Updated: January 27, 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}