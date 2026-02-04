import { ArrowRight, TrendingUp, Building2, Briefcase, Rocket, Lightbulb, BarChart3, ExternalLink } from 'lucide-react';

interface AIStartupLandscapePageProps {
  onNavigate?: (route: string) => void;
}

export default function AIStartupLandscapePage({ onNavigate }: AIStartupLandscapePageProps) {
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <button
            onClick={() => onNavigate?.('home')}
            className="text-sm text-gray-600 hover:text-[#0d5f4e] transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-white via-[#fafaf8] to-[#f5f5f3] border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#0d5f4e]/10 border border-[#0d5f4e]/20 text-[#0d5f4e] rounded-full text-sm font-medium mb-8">
              <TrendingUp className="w-4 h-4" />
              2025–2026 Report
            </div>
            <h1 className="text-7xl text-gray-900 mb-8 font-light tracking-tight leading-tight">
              The AI Startup Landscape
            </h1>
            <p className="text-2xl text-gray-600 mb-12 font-light leading-relaxed max-w-4xl mx-auto">
              Who's Building What, Where the Money Goes, and What Founders Should Watch
            </p>
            <button className="group px-10 py-5 bg-[#0d5f4e] text-white rounded-2xl hover:bg-[#0a4a3b] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg font-medium inline-flex items-center gap-3">
              Explore the Data
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-gray-900 mb-4 font-light tracking-tight">
              Key Statistics
            </h2>
            <p className="text-xl text-gray-600 font-light">
              The numbers shaping the AI startup ecosystem
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <StatCard
              number="55"
              label="US AI startups raised at least $100M in 2025"
              source="TechCrunch, Jan 2026"
              icon={<Rocket className="w-8 h-8" />}
            />
            <StatCard
              number="52%"
              label="Of top 50 Gen AI web products are content generation or editing"
              source="a16z"
              icon={<Lightbulb className="w-8 h-8" />}
            />
            <StatCard
              number="1,402"
              label="AI companies funded by Y Combinator"
              source="YC industry filter, Jan 2026"
              icon={<Building2 className="w-8 h-8" />}
            />
            <StatCard
              number="6.2%"
              label="Of global startups are in AI; 9.2% of unicorns are AI"
              source="StartupBlink"
              icon={<TrendingUp className="w-8 h-8" />}
            />
            <StatCard
              number="$109.1B"
              label="U.S. private AI investment in 2024"
              source="Stanford HAI 2025"
              icon={<BarChart3 className="w-8 h-8" />}
              highlight
            />
          </div>
        </div>
      </section>

      {/* Section 1 - Product Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              title="Product Types"
              subtitle="What AI Startups Build"
              description="AI startups cluster into model providers, infrastructure, copilots and assistants, creative and media, vertical SaaS, and agents/automation. CB Insights' 2025 AI 100 shows agents and infrastructure dominating; verticals pulled the most funding."
            />

            {/* Product Type Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <ProductTypeCard
                title="Model Providers"
                examples={['OpenAI', 'Anthropic', 'xAI', 'Mistral']}
              />
              <ProductTypeCard
                title="Infrastructure"
                examples={['Cerebras', 'Groq', 'Fireworks AI', 'Baseten']}
              />
              <ProductTypeCard
                title="AI Copilots & Assistants"
                examples={['ChatGPT', 'Claude', 'Perplexity', 'Cursor']}
              />
              <ProductTypeCard
                title="Creative & Media"
                examples={['Luma', 'Runway', 'Suno', 'ElevenLabs']}
              />
              <ProductTypeCard
                title="Vertical SaaS"
                examples={['Abridge', 'Harvey', 'Sierra', 'Uniphore']}
              />
              <ProductTypeCard
                title="Agents & Automation"
                examples={['Sierra', 'Crow', 'Chamber']}
              />
            </div>

            {/* Chart Placeholder */}
            <ChartPlaceholder
              title="AI 100 by Category"
              caption="Share of companies and/or funding by CB Insights category (agents, vertical, infrastructure)."
              source="CB Insights AI 100 2025, Deep Learning AI The Batch"
              type="Stacked Bar Chart"
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Industries */}
      <section className="py-24 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              title="Industries"
              subtitle="Who They Serve"
              description="Healthcare, legal, fintech, enterprise IT, and media lead. Healthcare AI and legal are well represented in mega-rounds and YC. Sales and support and creative/media also attract large rounds."
            />

            {/* Industry Pills */}
            <div className="flex flex-wrap gap-4 mb-16">
              <IndustryPill industry="Healthcare" example="Abridge" active />
              <IndustryPill industry="Legal" example="Harvey" active />
              <IndustryPill industry="Sales & Support" example="Sierra" />
              <IndustryPill industry="Enterprise IT" example="Highspot" />
              <IndustryPill industry="Ad Tech" example="StackAdapt" />
              <IndustryPill industry="Fintech" example="Fenrock" />
            </div>

            {/* Chart Placeholder */}
            <ChartPlaceholder
              title="Top Industries by Number of Funded AI Startups (2025)"
              caption="Count or share by industry (Healthcare, Legal, Enterprise IT, Media, Fintech)."
              source="TechCrunch $100M+ list, StartupBlink, YC sample"
              type="Horizontal Bar Chart"
            />
          </div>
        </div>
      </section>

      {/* Section 3 - Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              title="Use Cases"
              subtitle="What Jobs They Do"
              description="Use cases map to 'jobs to be done': automate support and sales, transcribe and summarize meetings and clinical notes, generate and edit creative content, code and ship software, run compliance checks, and automate back-office workflows. Agent-led workflows are recurring themes."
            />

            {/* Use Case Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <UseCaseCard
                title="Support & Sales Automation"
                example="Sierra, Uniphore"
                description="Automate customer support conversations and sales workflows with intelligent agents."
              />
              <UseCaseCard
                title="Meeting & Clinical Transcription"
                example="Otter, Abridge"
                description="Transcribe and summarize meetings, clinical notes, and medical consultations."
              />
              <UseCaseCard
                title="Creative Content Generation"
                example="Luma, Runway, Suno, ElevenLabs"
                description="Generate and edit video, audio, music, and visual content with AI tools."
              />
              <UseCaseCard
                title="Software Development"
                example="Cursor, Cognition/Devin"
                description="AI-powered coding assistants that help developers ship software faster."
              />
              <UseCaseCard
                title="Compliance & Verification"
                example="Fenrock"
                description="Run financial crime checks, compliance verification, and risk assessment."
              />
              <UseCaseCard
                title="Back-Office Automation"
                example="Ruma Care, Panta"
                description="Automate prior authorization, insurance brokerage, and administrative tasks."
              />
            </div>

            {/* Chart Placeholder */}
            <ChartPlaceholder
              title="Top Use-Case Themes"
              caption="Count of startups or rounds by use-case theme (support, sales, legal, healthcare, creative, dev, infra)."
              source="Report classification table"
              type="Bar Chart or Table"
            />
          </div>
        </div>
      </section>

      {/* Section 4 - Startups to Watch */}
      <section className="py-24 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              title="Startups to Watch"
              subtitle="High Signal Companies"
              description="55 US AI startups raised $100M+ in 2025 (TechCrunch). a16z Top 100 Gen AI and StartupBlink SB Score highlight usage leaders. YC has funded 1,402 AI companies, with recent batches heavy on agentic infrastructure and vertical AI."
            />

            {/* Startup Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <StartupCard
                name="OpenAI"
                type="Model Provider"
                useCase="Foundation models & ChatGPT"
                source="TC $100M+, a16z"
                featured
              />
              <StartupCard
                name="Anthropic"
                type="Model Provider"
                useCase="Claude AI assistant"
                source="TC $100M+, a16z"
                featured
              />
              <StartupCard
                name="Cursor"
                type="Dev Tools"
                useCase="AI-powered code editor"
                source="a16z Top 100"
              />
              <StartupCard
                name="Glean"
                type="Enterprise Search"
                useCase="AI-powered work assistant"
                source="TC $100M+"
              />
              <StartupCard
                name="Sierra"
                type="Agents"
                useCase="Customer support automation"
                source="TC $100M+, CB Insights"
              />
              <StartupCard
                name="Scale AI"
                type="Data Infrastructure"
                useCase="AI training data"
                source="TC $100M+"
              />
              <StartupCard
                name="xAI"
                type="Model Provider"
                useCase="Grok AI assistant"
                source="TC $100M+"
              />
              <StartupCard
                name="Mistral AI"
                type="Model Provider"
                useCase="Open-source models"
                source="TC $100M+"
              />
              <StartupCard
                name="Chamber"
                type="Agentic Infra"
                useCase="Agent development platform"
                source="YC W26"
              />
              <StartupCard
                name="Ruma Care"
                type="Healthcare"
                useCase="Prior authorization automation"
                source="YC W26"
              />
              <StartupCard
                name="Harvey"
                type="Legal"
                useCase="AI legal assistant"
                source="TC $100M+, a16z"
              />
              <StartupCard
                name="Abridge"
                type="Healthcare"
                useCase="Clinical documentation"
                source="TC $100M+"
              />
            </div>

            {/* Chart Placeholder */}
            <ChartPlaceholder
              title="Sample of High-Signal AI Startups (Funding + List Overlap)"
              caption="Table showing name, product type, use case, and source for startups appearing in multiple high-signal lists."
              source="Report classification table"
              type="Table or Card Grid"
            />
          </div>
        </div>
      </section>

      {/* Section 5 - Trends & Takeaways */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              title="Trends & Takeaways"
              subtitle="What This Means for Founders"
              description="Five key insights from the AI startup landscape in 2025–2026."
            />

            {/* Takeaway Cards */}
            <div className="space-y-6 mb-16">
              <TakeawayCard
                number="1"
                title="Capital Concentration"
                description="US AI private investment reached $109.1B in 2024, with 55 US startups raising at least $100M in 2025 alone. The majority of capital flows to a small number of high-profile companies."
                source="Stanford HAI 2025, TechCrunch"
              />
              <TakeawayCard
                number="2"
                title="Creative & Assistants Lead Consumer"
                description="Approximately 52% of top Gen AI web products are content generation or editing tools. ChatGPT remains #1, while Perplexity and Claude have risen significantly in usage."
                source="a16z Top 100 Gen AI Apps"
              />
              <TakeawayCard
                number="3"
                title="Agents & Infrastructure Lead 'Next Wave'"
                description="More than 20% of CB Insights AI 100 companies build or support agents. Verticals and infrastructure lead funding rounds, indicating a shift toward practical applications."
                source="CB Insights via The Batch"
              />
              <TakeawayCard
                number="4"
                title="YC Pipeline"
                description="Y Combinator has funded 1,402 AI companies total. Recent batches are heavy on agents, vertical AI (health, legal, insurance), and infrastructure—signaling where experienced founders are betting."
                source="YC industry filter"
              />
              <TakeawayCard
                number="5"
                title="Efficiency & Access"
                description="Inference cost for GPT-3.5-level models fell 280× from Nov 2022 to Oct 2024. Open-weight models are closing the gap with proprietary ones, democratizing AI access."
                source="Stanford HAI 2025"
              />
            </div>

            {/* Chart Placeholders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ChartPlaceholder
                title="U.S. vs Others: Private AI Investment 2024"
                caption="Bar chart comparing US ($109.1B), China ($9.3B), UK ($4.5B), and other countries."
                source="Stanford HAI 2025 AI Index"
                type="Bar Chart"
              />
              <ChartPlaceholder
                title="Gen AI Consumer Apps: Creative vs Assistant vs Other (%)"
                caption="Distribution of top Gen AI web products by category from a16z Top 50."
                source="a16z Top 100 Gen AI Apps 3rd ed"
                type="Pie or Bar Chart"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sources Footer */}
      <section className="py-16 bg-[#f5f5f3] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">
              Data Sources
            </h3>
            <p className="text-base text-gray-700 font-light leading-relaxed mb-6">
              TechCrunch, StartupBlink, a16z (Andreessen Horowitz), Deep Learning AI The Batch, 
              Y Combinator, Stanford HAI 2025 AI Index, CB Insights AI 100 2025
            </p>
            <button className="text-sm text-[#0d5f4e] hover:text-[#0a4a3b] transition-colors font-medium inline-flex items-center gap-2">
              View Full Research List
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0d5f4e] to-[#0a4a3b] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl text-white mb-6 font-light tracking-tight">
            Ready to Build Your AI Startup?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Join StartupAI and get AI-powered tools to validate your idea, build your strategy, and execute with confidence.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate?.('onboarding-v2')}
              className="px-10 py-5 bg-white text-[#0d5f4e] rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg font-medium"
            >
              Get Started Free
            </button>
            <button 
              onClick={() => onNavigate?.('home')}
              className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-2xl hover:bg-white/10 transition-all duration-300 text-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-[#fafaf8] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-lg mb-6 font-light tracking-tight">Product</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Features</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Pricing</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-6 font-light tracking-tight">Resources</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Documentation</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Help Center</a></li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('ai-startup-landscape')}
                    className="text-sm text-[#0d5f4e] hover:text-[#6b9d89] transition-colors"
                  >
                    AI Startup Landscape
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-6 font-light tracking-tight">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-6 font-light tracking-tight">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-4 font-light">
                Get insights on AI startups and trends.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#0d5f4e] focus:ring-2 focus:ring-[#0d5f4e]/20 text-sm"
                />
                <button className="px-5 py-2.5 bg-[#0d5f4e] text-white rounded-xl hover:bg-[#0a4a3b] transition-colors text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-gray-500">© 2026 StartupAI. All rights reserved.</p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-gray-500 hover:text-[#0d5f4e] transition-colors">Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-[#0d5f4e] transition-colors">Terms</a>
              <a href="#" className="text-sm text-gray-500 hover:text-[#0d5f4e] transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Stat Card Component
function StatCard({ 
  number, 
  label, 
  source, 
  icon,
  highlight 
}: { 
  number: string; 
  label: string; 
  source: string; 
  icon: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div className={`group bg-white rounded-3xl shadow-lg border p-10 text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
      highlight ? 'border-[#0d5f4e] bg-gradient-to-br from-white to-[#0d5f4e]/5' : 'border-gray-200'
    }`}>
      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
        highlight ? 'bg-[#0d5f4e] text-white' : 'bg-[#0d5f4e]/10 text-[#0d5f4e]'
      }`}>
        {icon}
      </div>
      <div className={`text-6xl mb-4 font-light ${
        highlight ? 'text-[#0d5f4e]' : 'text-gray-900'
      }`}>
        {number}
      </div>
      <div className="text-base text-gray-700 mb-4 font-light leading-relaxed min-h-[60px]">
        {label}
      </div>
      <div className="text-xs text-gray-500 uppercase tracking-wider">
        {source}
      </div>
    </div>
  );
}

// Section Heading Component
function SectionHeading({ 
  title, 
  subtitle, 
  description 
}: { 
  title: string; 
  subtitle: string; 
  description: string;
}) {
  return (
    <div className="mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d5f4e]/10 border border-[#0d5f4e]/20 text-[#0d5f4e] rounded-full text-sm font-medium mb-6">
        {title}
      </div>
      <h2 className="text-5xl text-gray-900 mb-6 font-light tracking-tight">
        {subtitle}
      </h2>
      <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl">
        {description}
      </p>
    </div>
  );
}

// Product Type Card Component
function ProductTypeCard({ 
  title, 
  examples 
}: { 
  title: string; 
  examples: string[];
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:border-[#0d5f4e]/30 transition-all duration-300">
      <h3 className="text-xl text-gray-900 font-medium mb-4">
        {title}
      </h3>
      <div className="space-y-2">
        {examples.map((example, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0d5f4e]" />
            <span className="text-sm text-gray-600 font-light">{example}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Industry Pill Component
function IndustryPill({ 
  industry, 
  example, 
  active 
}: { 
  industry: string; 
  example: string; 
  active?: boolean;
}) {
  return (
    <div className={`px-6 py-4 rounded-2xl transition-all ${
      active 
        ? 'bg-[#0d5f4e] text-white shadow-lg' 
        : 'bg-white border border-gray-200 text-gray-700 hover:border-[#0d5f4e]/50'
    }`}>
      <div className="font-medium mb-1">{industry}</div>
      <div className={`text-sm ${active ? 'text-white/80' : 'text-gray-500'}`}>
        e.g., {example}
      </div>
    </div>
  );
}

// Use Case Card Component
function UseCaseCard({ 
  title, 
  example, 
  description 
}: { 
  title: string; 
  example: string; 
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:border-[#0d5f4e]/30 transition-all duration-300">
      <h3 className="text-xl text-gray-900 font-medium mb-3">
        {title}
      </h3>
      <p className="text-sm text-gray-600 font-light mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center gap-2 text-sm text-[#0d5f4e]">
        <Briefcase className="w-4 h-4" />
        <span className="font-light">{example}</span>
      </div>
    </div>
  );
}

// Startup Card Component
function StartupCard({ 
  name, 
  type, 
  useCase, 
  source,
  featured 
}: { 
  name: string; 
  type: string; 
  useCase: string; 
  source: string;
  featured?: boolean;
}) {
  return (
    <div className={`rounded-2xl shadow-lg border p-6 transition-all duration-300 hover:shadow-xl ${
      featured 
        ? 'bg-gradient-to-br from-[#0d5f4e] to-[#0a4a3b] text-white border-transparent' 
        : 'bg-white border-gray-200 hover:border-[#0d5f4e]/30'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <h3 className={`text-lg font-medium ${featured ? 'text-white' : 'text-gray-900'}`}>
          {name}
        </h3>
        {featured && (
          <span className="px-2 py-1 bg-white/20 text-white rounded text-xs font-medium">
            Featured
          </span>
        )}
      </div>
      <div className={`text-sm mb-2 ${featured ? 'text-white/80' : 'text-gray-600'}`}>
        {type}
      </div>
      <div className={`text-sm font-light mb-4 leading-relaxed ${
        featured ? 'text-white/90' : 'text-gray-700'
      }`}>
        {useCase}
      </div>
      <div className={`text-xs uppercase tracking-wider ${
        featured ? 'text-white/70' : 'text-gray-500'
      }`}>
        {source}
      </div>
    </div>
  );
}

// Takeaway Card Component
function TakeawayCard({ 
  number, 
  title, 
  description, 
  source 
}: { 
  number: string; 
  title: string; 
  description: string; 
  source: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-10 hover:shadow-xl hover:border-[#0d5f4e]/30 transition-all duration-300">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#0d5f4e] text-white flex items-center justify-center text-2xl font-light">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl text-gray-900 font-light mb-4">
            {title}
          </h3>
          <p className="text-base text-gray-700 font-light leading-relaxed mb-4">
            {description}
          </p>
          <div className="text-xs text-gray-500 uppercase tracking-wider">
            Source: {source}
          </div>
        </div>
      </div>
    </div>
  );
}

// Chart Placeholder Component
function ChartPlaceholder({ 
  title, 
  caption, 
  source, 
  type 
}: { 
  title: string; 
  caption: string; 
  source: string; 
  type: string;
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-10">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0d5f4e]/10 flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-[#0d5f4e]" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl text-gray-900 font-light mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 font-light leading-relaxed">
            {caption}
          </p>
        </div>
      </div>
      <div className="bg-[#fafaf8] rounded-2xl border-2 border-dashed border-gray-300 p-16 text-center">
        <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <div className="text-base text-gray-600 font-medium mb-2">
          {type}
        </div>
        <div className="text-sm text-gray-500 font-light">
          Chart placeholder - Data visualization goes here
        </div>
      </div>
      <div className="mt-4 text-xs text-gray-500 uppercase tracking-wider">
        Data: {source}
      </div>
    </div>
  );
}
