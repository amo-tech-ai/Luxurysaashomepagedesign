import { Database, BarChart3, Network, Rocket, ArrowRight } from 'lucide-react';

export function StartupSystem() {
  return (
    <section className="relative bg-gradient-to-br from-[#0B0F0E] via-[#0d1210] to-[#0B0F0E] py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#0d5f4e] opacity-[0.03] blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-24">
          <div className="text-xs uppercase tracking-[0.25em] text-[#0d5f4e] mb-6 font-medium">
            THE STARTUPAI SYSTEM
          </div>
          <h2 className="text-4xl lg:text-6xl text-[#F4F3EF] mb-7 leading-[1.15] tracking-tight">
            Go from profile to investor-ready—fast.
          </h2>
          <p className="text-lg text-[#F4F3EF] opacity-70 max-w-3xl mx-auto leading-relaxed">
            Our 4-phase guided workflow is engineered to transform your vision into a scalable, high-performance startup infrastructure.
          </p>
        </div>

        {/* Timeline Line (Desktop) */}
        <div className="hidden lg:block relative mb-20">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#0d5f4e] opacity-60 -translate-y-1/2"></div>
          <div className="relative flex justify-between items-center">
            <div className="w-3 h-3 rounded-full border-2 border-[#0d5f4e] bg-[#0d5f4e]"></div>
            <div className="w-3 h-3 rounded-full border-2 border-[#0d5f4e] bg-[#0d5f4e]"></div>
            <div className="w-3 h-3 rounded-full border-2 border-[#0d5f4e] bg-[#0d5f4e]"></div>
            <div className="w-3 h-3 rounded-full border-2 border-[#0d5f4e] bg-[#0d5f4e]"></div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1 */}
          <div className="group">
            <div className="relative h-full bg-[#0f1412] bg-opacity-40 border border-[#F4F3EF] border-opacity-[0.08] rounded-lg p-8 transition-all duration-300 hover:border-[#0d5f4e] hover:border-opacity-50 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#0d5f4e] bg-opacity-10 border border-[#0d5f4e] border-opacity-20 mb-8">
                <Database className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
              </div>
              <div className="text-xs uppercase tracking-[0.15em] text-[#0d5f4e] mb-4 font-medium">
                WEEKS 1-2
              </div>
              <h3 className="text-xl text-[#F4F3EF] mb-4 font-medium leading-tight">
                Profile & Foundation
              </h3>
              <p className="text-sm text-[#F4F3EF] opacity-65 leading-relaxed">
                Secure data ingestion, infrastructure setup, and competitive landscape benchmarking.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group">
            <div className="relative h-full bg-[#0f1412] bg-opacity-40 border border-[#F4F3EF] border-opacity-[0.08] rounded-lg p-8 transition-all duration-300 hover:border-[#0d5f4e] hover:border-opacity-50 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#0d5f4e] bg-opacity-10 border border-[#0d5f4e] border-opacity-20 mb-8">
                <BarChart3 className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
              </div>
              <div className="text-xs uppercase tracking-[0.15em] text-[#0d5f4e] mb-4 font-medium">
                WEEKS 3-5
              </div>
              <h3 className="text-xl text-[#F4F3EF] mb-4 font-medium leading-tight">
                Intelligence & Materials
              </h3>
              <p className="text-sm text-[#F4F3EF] opacity-65 leading-relaxed">
                Autonomous generation of high-fidelity pitch decks, financial models, and market intelligence reports.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group">
            <div className="relative h-full bg-[#0f1412] bg-opacity-40 border border-[#F4F3EF] border-opacity-[0.08] rounded-lg p-8 transition-all duration-300 hover:border-[#0d5f4e] hover:border-opacity-50 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#0d5f4e] bg-opacity-10 border border-[#0d5f4e] border-opacity-20 mb-8">
                <Network className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
              </div>
              <div className="text-xs uppercase tracking-[0.15em] text-[#0d5f4e] mb-4 font-medium">
                WEEKS 6-7
              </div>
              <h3 className="text-xl text-[#F4F3EF] mb-4 font-medium leading-tight">
                Fundraising Workflow
              </h3>
              <p className="text-sm text-[#F4F3EF] opacity-65 leading-relaxed">
                Deployment of targeted investor outreach strategies and automated CRM synchronization.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group">
            <div className="relative h-full bg-[#0f1412] bg-opacity-40 border border-[#F4F3EF] border-opacity-[0.08] rounded-lg p-8 transition-all duration-300 hover:border-[#0d5f4e] hover:border-opacity-50 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#0d5f4e] bg-opacity-10 border border-[#0d5f4e] border-opacity-20 mb-8">
                <Rocket className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
              </div>
              <div className="text-xs uppercase tracking-[0.15em] text-[#0d5f4e] mb-4 font-medium">
                WEEK 8
              </div>
              <h3 className="text-xl text-[#F4F3EF] mb-4 font-medium leading-tight">
                Execution & Momentum
              </h3>
              <p className="text-sm text-[#F4F3EF] opacity-65 leading-relaxed">
                Active market engagement, data-driven negotiation support, and round closing acceleration.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-[#F4F3EF] border-opacity-15 rounded-sm text-[#F4F3EF] hover:border-[#0d5f4e] hover:border-opacity-50 transition-all duration-300">
            <span className="text-sm font-medium">Explore the full roadmap</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
          </button>
        </div>

      </div>
    </section>
  );
}
