const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { label: 'Home V5', href: '/home-v5', isRoute: true, routeName: 'home-v5' },
      { label: 'Home V6', href: '/home-v6', isRoute: true, routeName: 'home-v6' },
      { label: 'Home V7', href: '/home-v7', isRoute: true, routeName: 'home-v7' },
      { label: 'How it works', href: '/how-it-works', isRoute: true, routeName: 'how-it-works' },
      { label: 'Pricing', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'Events', href: '/events', isRoute: true, routeName: 'events' },
      { label: 'Discover Events', href: '/events/discover', isRoute: true, routeName: 'events-discover' },
    ],
  },
  pages: {
    title: 'Pages',
    links: [
      { label: 'Onboarding Wizard', href: '/onboarding-v2', isRoute: true, routeName: 'onboarding-v2' },
      { label: 'Minimal Onboarding', href: '/onboarding-minimal', isRoute: true, routeName: 'onboarding-minimal' },
      { label: 'Onboarding V3', href: '/onboarding-v3', isRoute: true, routeName: 'onboarding-v3' },
      { label: 'Pitch Deck Generator', href: '/pitch-deck', isRoute: true, routeName: 'pitch-deck' },
    ],
  },
  dashboard: {
    title: 'Dashboard',
    links: [
      { label: 'Main Dashboard', href: '/dashboard/main', isRoute: true, routeName: 'dashboard-main' },
      { label: 'Kanban Dashboard', href: '/dashboard', isRoute: true, routeName: 'dashboard' },
      { label: 'Chat Intake', href: '/chat-intake', isRoute: true, routeName: 'chat-intake' },
      { label: 'Startup Profile', href: '/startup-profile', isRoute: true, routeName: 'startup-profile' },
      { label: 'Lean Canvas', href: '/lean-canvas', isRoute: true, routeName: 'lean-canvas' },
      { label: 'Lean Canvas with AI', href: '/lean-canvas-ai', isRoute: true, routeName: 'lean-canvas-ai' },
      { label: 'Lean Canvas V2', href: '/lean-canvas-v2', isRoute: true, routeName: 'lean-canvas-v2' },
      { label: 'Opportunity Canvas', href: '/opportunity-canvas', isRoute: true, routeName: 'opportunity-canvas' },
      { label: 'Market Research Hub', href: '/market-research-hub', isRoute: true, routeName: 'market-research-hub' },
      { label: 'Idea Wall', href: '/idea-wall', isRoute: true, routeName: 'idea-wall' },
      { label: 'Story Map', href: '/story-map', isRoute: true, routeName: 'story-map' },
      { label: 'Experiments Lab', href: '/experiments-lab', isRoute: true, routeName: 'experiments-lab' },
      { label: '90-Day Plan', href: '/90-day-plan', isRoute: true, routeName: '90-day-plan' },
      { label: 'Startup Validator', href: '/startup-validator', isRoute: true, routeName: 'startup-validator' },
      { label: 'Startup Validator V2', href: '/startup-validator-v2', isRoute: true, routeName: 'startup-validator-v2' },
      { label: 'Startup Validator V3', href: '/startup-validator-v3', isRoute: true, routeName: 'startup-validator-v3' },
      { label: 'Startup Validator V4', href: '/startup-validator-v4', isRoute: true, routeName: 'startup-validator-v4' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Style Guide', href: '/style-guide', isRoute: true, routeName: 'style-guide' },
    ],
  },
  diagrams: {
    title: 'Diagrams',
    links: [
      { label: 'Flow Diagrams', href: '/diagrams/flows', isRoute: true, routeName: 'diagrams-flows' },
      { label: 'AI Agent Flows', href: '/diagrams/ai-flows', isRoute: true, routeName: 'diagrams-ai-flows' },
      { label: 'Running AI Agents', href: '/running-agents', isRoute: true, routeName: 'running-agents' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Site Map', href: '/sitemap', isRoute: true, routeName: 'sitemap' },
      { label: 'AI Landscape', href: '/ai-landscape', isRoute: true, routeName: 'ai-landscape' },
      { label: 'AI Adoption Report 2025', href: '/infographics/ai-adoption-2025', isRoute: true, routeName: 'ai-adoption-2025' },
      { label: 'AI Industry Adoption 2025', href: '/infographics/ai-industry-adoption', isRoute: true, routeName: 'ai-industry-adoption' },
      { label: 'AI Jobs & Future of Work 2024-2026', href: '/infographics/ai-jobs', isRoute: true, routeName: 'ai-jobs-future-work' },
      { label: 'AI Jobs & Future of Work V2', href: '/infographics/ai-jobs-v2', isRoute: true, routeName: 'ai-jobs-v2' },
      { label: 'AI Investment Hubs 2025', href: '/infographics/ai-hubs', isRoute: true, routeName: 'ai-hubs' },
      { label: 'AI Startup Products 2024-2026', href: '/infographics/ai-products', isRoute: true, routeName: 'ai-products' },
      { label: 'AI Product Intelligence V2', href: '/infographics/ai-products-v2', isRoute: true, routeName: 'ai-products-v2' },
      { label: 'AI Products Intelligence 2024-2026', href: '/infographics/ai-products-v3', isRoute: true, routeName: 'ai-products-v3' },
      { label: 'AI GTM Report 2025', href: '/infographics/ai-gtm', isRoute: true, routeName: 'ai-gtm' },
      { label: 'AI Startup Landscape 2025-2026', href: '/infographics/ai-startup-landscape', isRoute: true, routeName: 'ai-startup-landscape' },
    ],
  },
  trendIntelligence: {
    title: 'Trend Intelligence',
    links: [
      { label: 'AI Impact Planner', href: '/ai-impact-planner', isRoute: true, routeName: 'ai-impact-planner' },
      { label: 'Ask the Trends', href: '/ask-trends', isRoute: true, routeName: 'ask-trends' },
    ],
  },
};

export function Footer({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: any) => {
    if (link.isRoute && onNavigate) {
      e.preventDefault();
      onNavigate(link.routeName || 'events');
    }
  };

  return (
    <footer className="bg-[#fafaf8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          {/* Logo at top of footer */}
          <div className="mb-12">
            <button
              onClick={() => onNavigate && onNavigate('home-v5')}
              className="text-3xl lg:text-4xl text-gray-900 font-light hover:text-[#0d5f4e] transition-colors duration-200 cursor-pointer"
            >
              StartupAI
            </button>
            <p className="text-sm text-gray-500 mt-2">
              From strategy to daily execution, in one guided flow.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-12 lg:gap-8">
            {/* Product Column */}
            <div className="space-y-6">
              <h3 className="text-sm text-gray-900 uppercase tracking-wider">
                {footerLinks.product.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.product.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link)}
                      className="text-gray-600 hover:text-[#0d5f4e] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pages Column */}
            <div className="space-y-6">
              <h3 className="text-sm text-gray-900 uppercase tracking-wider">
                {footerLinks.pages.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.pages.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link)}
                      className="text-gray-600 hover:text-[#0d5f4e] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dashboard Column */}
            <div className="space-y-6">
              <h3 className="text-sm text-gray-900 uppercase tracking-wider">
                {footerLinks.dashboard.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.dashboard.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link)}
                      className="text-gray-600 hover:text-[#0d5f4e] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-6">
              <h3 className="text-sm text-gray-900 uppercase tracking-wider">
                {footerLinks.company.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link)}
                      className="text-gray-600 hover:text-[#0d5f4e] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagrams Column */}
            <div className="space-y-6">
              <h3 className="text-sm text-gray-900 uppercase tracking-wider">
                {footerLinks.diagrams.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.diagrams.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link)}
                      className="text-gray-600 hover:text-[#0d5f4e] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="space-y-6">
              <h3 className="text-sm text-gray-900 uppercase tracking-wider">
                {footerLinks.resources.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link)}
                      className="text-gray-600 hover:text-[#0d5f4e] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trend Intelligence Column */}
            <div className="space-y-6">
              <h3 className="text-sm text-gray-900 uppercase tracking-wider">
                {footerLinks.trendIntelligence.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.trendIntelligence.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link)}
                      className="text-gray-600 hover:text-[#0d5f4e] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <button
              onClick={() => onNavigate && onNavigate('home-v5')}
              className="text-2xl text-gray-900 font-light hover:text-[#0d5f4e] transition-colors duration-200 cursor-pointer"
            >
              StartupAI
            </button>
            
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} StartupAI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}