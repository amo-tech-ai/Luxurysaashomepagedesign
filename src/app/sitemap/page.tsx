import React, { useState } from 'react';

interface SitemapPageProps {
  onNavigate?: (page: string) => void;
}

interface PageCard {
  name: string;
  route: string;
  description?: string;
}

interface Category {
  title: string;
  subtitle: string;
  pages: PageCard[];
  color: string;
}

export default function SitemapPage({ onNavigate }: SitemapPageProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories: Category[] = [
    {
      title: 'Homepage',
      subtitle: 'Entry points & landing experiences',
      color: '#0d5f4e',
      pages: [
        { name: 'Home V1', route: 'home', description: 'Original homepage design' },
        { name: 'Home V5', route: 'home-v5', description: 'Enhanced modern layout' },
        { name: 'Home V6', route: 'home-v6', description: 'BCG consulting aesthetic' },
      ],
    },
    {
      title: 'Onboarding & Validation',
      subtitle: 'User setup & idea validation flows',
      color: '#0d5f4e',
      pages: [
        { name: 'Onboarding V2', route: 'onboarding-v2', description: 'Guided wizard experience' },
        { name: 'Minimal Onboarding', route: 'onboarding-minimal', description: 'Streamlined setup' },
        { name: 'Onboarding V3', route: 'onboarding-v3', description: '5-step structured flow' },
        { name: 'Smart Interview', route: 'smart-interview', description: 'AI strategy session' },
        { name: 'Startup Validator', route: 'startup-validator', description: 'Idea validation tool' },
        { name: 'Startup Validator V2', route: 'startup-validator-v2', description: 'Enhanced validator' },
        { name: 'Startup Validator V3', route: 'startup-validator-v3', description: 'Latest validation system' },
        { name: 'Startup Validator V4', route: 'startup-validator-v4', description: 'Decision-first report (Idea Proof style)' },
        { name: 'Validator Chat', route: 'validator-chat', description: 'Conversational validation entry' },
      ],
    },
    {
      title: 'Dashboard Suite',
      subtitle: 'Command center & workspace tools',
      color: '#0d5f4e',
      pages: [
        { name: 'Main Dashboard', route: 'dashboard-main', description: 'Overview & metrics' },
        { name: 'Kanban Dashboard', route: 'dashboard', description: 'Task management board' },
        { name: 'Roadmap View', route: 'dashboard-roadmap', description: 'Timeline & milestones' },
        { name: 'Ideation Lab', route: 'dashboard-ideation', description: 'Brainstorm & explore' },
        { name: 'Lean Canvas', route: 'lean-canvas', description: 'Business model canvas' },
        { name: 'Lean Canvas AI', route: 'lean-canvas-ai', description: 'AI-assisted canvas' },
        { name: 'Dashboard V2', route: 'dashboard-v2', description: 'Alternative layout' },
      ],
    },
    {
      title: 'Pitch Deck Generator',
      subtitle: 'Investor presentation creation',
      color: '#0d5f4e',
      pages: [
        { name: 'Pitch Deck', route: 'pitch-deck', description: 'Main generator' },
        { name: 'Pitch Deck V2', route: 'pitch-deck-v2', description: 'Enhanced version' },
        { name: 'Pitch Deck Wizard', route: 'pitch-deck-wizard', description: '11-phase guided flow' },
        { name: 'Pitch Deck Editor', route: 'pitch-deck-editor', description: 'Visual editor' },
        { name: 'Pitch Deck Dashboard', route: 'pitch-deck-dashboard', description: 'Manage presentations' },
        { name: 'AI Demo', route: 'pitch-deck-ai-demo', description: 'AI suggestions showcase' },
        { name: 'AI Enhanced', route: 'pitch-deck-ai-enhanced', description: 'Advanced AI features' },
      ],
    },
    {
      title: 'How It Works',
      subtitle: 'Product education & walkthroughs',
      color: '#0d5f4e',
      pages: [
        { name: 'How It Works', route: 'how-it-works', description: 'Platform overview' },
        { name: 'How It Works V2', route: 'how-it-works-v2', description: 'Refined experience' },
        { name: 'How It Works V3', route: 'how-it-works-v3', description: 'Editorial design' },
        { name: 'Pitch Generator Guide', route: 'how-it-works-pitch', description: 'Deck creation guide' },
        { name: 'Pitch Screenshots', route: 'how-pitch-works', description: 'Visual walkthrough' },
      ],
    },
    {
      title: 'Events & Community',
      subtitle: 'Networking & learning opportunities',
      color: '#0d5f4e',
      pages: [
        { name: 'Events List', route: 'events', description: 'Browse all events' },
        { name: 'Discover Events', route: 'events-discover', description: 'Curated recommendations' },
        { name: 'Event Detail', route: 'event-detail', description: 'Individual event page' },
      ],
    },
    {
      title: 'AI Research & Infographics',
      subtitle: 'Data visualizations & industry insights',
      color: '#0d5f4e',
      pages: [
        { name: 'AI Landscape', route: 'ai-landscape', description: 'Market overview 2025' },
        { name: 'AI Adoption Report 2025', route: 'ai-adoption-2025', description: 'Enterprise adoption trends' },
        { name: 'AI Industry Adoption', route: 'ai-industry-adoption', description: 'Sector-by-sector analysis' },
        { name: 'AI Jobs & Future of Work', route: 'ai-jobs-future-work', description: 'Employment impact 2024-2026' },
        { name: 'AI Jobs V2', route: 'ai-jobs-v2', description: 'Enhanced job market data' },
        { name: 'AI Investment Hubs', route: 'ai-hubs', description: 'Geographic funding patterns' },
        { name: 'AI Startup Products', route: 'ai-products', description: 'Product landscape 2024-2026' },
        { name: 'AI Product Intelligence V2', route: 'ai-products-v2', description: 'Enhanced product analysis' },
        { name: 'AI Products V3', route: 'ai-products-v3', description: 'Latest intelligence' },
        { name: 'AI GTM Report', route: 'ai-gtm', description: 'Go-to-market strategies' },
        { name: 'AI Startup Landscape', route: 'ai-startup-landscape', description: 'Ecosystem map 2025-2026' },
      ],
    },
    {
      title: 'Flow Diagrams',
      subtitle: 'Process maps & AI agent visualizations',
      color: '#0d5f4e',
      pages: [
        { name: 'Flow Diagrams', route: 'diagrams-flows', description: 'Business process flows' },
        { name: 'AI Agent Flows', route: 'diagrams-ai-flows', description: 'Agent architecture' },
      ],
    },
    {
      title: 'Additional Tools',
      subtitle: 'Specialized utilities & demos',
      color: '#6b9d89',
      pages: [
        { name: 'AI Chatbot Demo', route: 'ai-chatbot-demo', description: 'Conversational AI showcase' },
        { name: 'Onboarding Animation Demo', route: 'onboarding-animation-demo', description: 'Motion design examples' },
      ],
    },
  ];

  const totalPages = categories.reduce((sum, cat) => sum + cat.pages.length, 0);

  const handleCardClick = (route: string) => {
    if (onNavigate) {
      onNavigate(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <div className="bg-[#F5F3EF] border-b border-[#e5e2da]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-16 lg:py-20">
          <div className="max-w-4xl">
            <div className="mb-4">
              <button
                onClick={() => onNavigate?.('home-v6')}
                className="text-sm text-[#0d5f4e] hover:text-[#0a4a3d] transition-colors"
              >
                ← Back to home
              </button>
            </div>
            <h1 className="font-serif text-5xl lg:text-7xl text-[#212427] mb-6 leading-[0.95]">
              Site Map
            </h1>
            <p className="text-xl text-[#696969] leading-relaxed max-w-2xl">
              Complete navigation structure showing all {totalPages} active pages across {categories.length} functional areas.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Strip */}
      <div className="bg-[#0d5f4e] text-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="border-l-2 border-white/20 pl-6">
              <div className="font-serif text-4xl mb-1">{totalPages}</div>
              <div className="text-sm text-white/70 uppercase tracking-wider">Active Pages</div>
            </div>
            <div className="border-l-2 border-white/20 pl-6">
              <div className="font-serif text-4xl mb-1">{categories.length}</div>
              <div className="text-sm text-white/70 uppercase tracking-wider">Categories</div>
            </div>
            <div className="border-l-2 border-white/20 pl-6">
              <div className="font-serif text-4xl mb-1">11</div>
              <div className="text-sm text-white/70 uppercase tracking-wider">Research Reports</div>
            </div>
            <div className="border-l-2 border-white/20 pl-6">
              <div className="font-serif text-4xl mb-1">7</div>
              <div className="text-sm text-white/70 uppercase tracking-wider">Dashboard Tools</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-8 lg:px-12 py-16 lg:py-24">
        {/* Category Sections */}
        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <section key={catIndex} className="space-y-8">
              {/* Category Header */}
              <div className="border-b border-[#e5e2da] pb-6">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-mono text-sm text-[#696969]">
                    {String(catIndex + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-serif text-3xl lg:text-4xl text-[#212427]">
                    {category.title}
                  </h2>
                </div>
                <p className="text-[#696969] ml-14">{category.subtitle}</p>
                <div className="mt-4 ml-14">
                  <span className="text-sm text-[#969696]">
                    {category.pages.length} page{category.pages.length !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              {/* Page Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {category.pages.map((page, pageIndex) => (
                  <button
                    key={pageIndex}
                    onClick={() => handleCardClick(page.route)}
                    onMouseEnter={() => setActiveCategory(category.title + pageIndex)}
                    onMouseLeave={() => setActiveCategory(null)}
                    className="group relative bg-white border border-[#e5e2da] p-8 text-left transition-all duration-300 hover:border-[#0d5f4e] hover:shadow-lg hover:-translate-y-1"
                  >
                    {/* Card Number */}
                    <div className="absolute top-6 right-6 font-mono text-xs text-[#c5c3bc]">
                      {String(pageIndex + 1).padStart(2, '0')}
                    </div>

                    {/* Page Name */}
                    <h3 className="font-serif text-xl lg:text-2xl text-[#212427] mb-3 pr-12 leading-tight">
                      {page.name}
                    </h3>

                    {/* Description */}
                    {page.description && (
                      <p className="text-sm text-[#696969] leading-relaxed mb-4">
                        {page.description}
                      </p>
                    )}

                    {/* Route Path */}
                    <div className="pt-4 border-t border-[#f0ede7] mt-auto">
                      <code className="font-mono text-xs text-[#969696]">
                        /{page.route === 'home' ? '' : page.route}
                      </code>
                    </div>

                    {/* Hover Indicator */}
                    <div
                      className="absolute bottom-0 left-0 h-1 bg-[#0d5f4e] transition-all duration-300"
                      style={{
                        width: activeCategory === category.title + pageIndex ? '100%' : '0%',
                      }}
                    />

                    {/* Arrow */}
                    <div className="absolute bottom-8 right-8 text-[#0d5f4e] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Navigation Map */}
        <section className="mt-24 bg-[#F5F3EF] border border-[#e5e2da] p-12">
          <h2 className="font-serif text-3xl text-[#212427] mb-8">
            Navigation Structure
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 font-mono text-sm">
            <div className="space-y-2">
              <div className="text-[#212427] font-semibold">/ (root)</div>
              <div className="pl-4 text-[#696969]">├── Homepage variants (3)</div>
              <div className="pl-4 text-[#696969]">├── Onboarding flows (7)</div>
              <div className="pl-4 text-[#696969]">├── Dashboard suite (7)</div>
              <div className="pl-4 text-[#696969]">└── Pitch deck tools (7)</div>
            </div>
            <div className="space-y-2">
              <div className="text-[#212427] font-semibold">/resources</div>
              <div className="pl-4 text-[#696969]">├── How it works (5)</div>
              <div className="pl-4 text-[#696969]">├── Events (3)</div>
              <div className="pl-4 text-[#696969]">├── Infographics (11)</div>
              <div className="pl-4 text-[#696969]">└── Diagrams (2)</div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mt-16 grid md:grid-cols-3 gap-6">
          <button
            onClick={() => handleCardClick('dashboard')}
            className="bg-white border-2 border-[#0d5f4e] p-8 text-left hover:bg-[#F5F3EF] transition-colors"
          >
            <div className="text-[#0d5f4e] font-mono text-xs mb-4 uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="font-serif text-2xl text-[#212427] mb-2">
              Dashboard
            </h3>
            <p className="text-sm text-[#696969]">
              Access your kanban board and task management
            </p>
          </button>

          <button
            onClick={() => handleCardClick('ai-landscape')}
            className="bg-white border-2 border-[#0d5f4e] p-8 text-left hover:bg-[#F5F3EF] transition-colors"
          >
            <div className="text-[#0d5f4e] font-mono text-xs mb-4 uppercase tracking-wider">
              Research
            </div>
            <h3 className="font-serif text-2xl text-[#212427] mb-2">
              AI Landscape
            </h3>
            <p className="text-sm text-[#696969]">
              Explore industry insights and market data
            </p>
          </button>

          <button
            onClick={() => handleCardClick('pitch-deck')}
            className="bg-white border-2 border-[#0d5f4e] p-8 text-left hover:bg-[#F5F3EF] transition-colors"
          >
            <div className="text-[#0d5f4e] font-mono text-xs mb-4 uppercase tracking-wider">
              Tools
            </div>
            <h3 className="font-serif text-2xl text-[#212427] mb-2">
              Pitch Deck
            </h3>
            <p className="text-sm text-[#696969]">
              Generate investor presentations with AI
            </p>
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#212427] text-white mt-24 py-12">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 text-center">
          <p className="text-sm text-white/60">
            StartupAI — From strategy to daily execution, in one guided flow.
          </p>
          <p className="text-xs text-white/40 mt-2">
            Last updated: February 4, 2026
          </p>
        </div>
      </footer>
    </div>
  );
}