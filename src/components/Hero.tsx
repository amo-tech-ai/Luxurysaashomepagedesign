import { ArrowRight, Play, Target, TrendingUp, Circle, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-[#fafaf8] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl leading-[1.1] tracking-tight text-gray-900">
              From strategy to daily execution, in one guided flow.
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
              StartupAI organizes your thinking, priorities, and next steps into a single intelligent system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-[#0d5f4e] hover:bg-[#0a4a3d] text-white px-8 py-4 rounded-sm transition-all duration-200 flex items-center justify-center gap-2">
                <span className="text-lg">Start Strategy Session</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-transparent border border-gray-300 hover:border-gray-400 text-gray-900 px-8 py-4 rounded-sm transition-all duration-200 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                <span className="text-lg">View Demo</span>
              </button>
            </div>
          </div>
          
          {/* Right Column - Premium Dashboard Preview */}
          <div className="relative scale-90">
            {/* Main Dashboard Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-br from-white to-gray-50 border-b border-gray-100 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0d5f4e] to-[#0a4a3d] flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">StartupAI Dashboard</h3>
                      <p className="text-sm text-gray-500">Monday, January 13</p>
                    </div>
                  </div>
                  <div className="px-4 py-1.5 bg-[#0d5f4e] bg-opacity-10 rounded-full">
                    <span className="text-xs font-medium text-[#0d5f4e]">Active</span>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="px-8 py-6 space-y-6">
                {/* Today's Priorities */}
                <div>
                  <h4 className="text-xs uppercase tracking-wide text-gray-400 mb-4 font-medium">Today's Priorities</h4>
                  <div className="space-y-3">
                    {/* Priority 1 */}
                    <div className="group flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all cursor-pointer border border-transparent hover:border-gray-200">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700 font-medium">Follow up with Sequoia partner</span>
                    </div>

                    {/* Priority 2 */}
                    <div className="group flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all cursor-pointer border border-transparent hover:border-gray-200">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">Finalize Q1 product roadmap</span>
                    </div>

                    {/* Priority 3 */}
                    <div className="group flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all cursor-pointer border border-transparent hover:border-gray-200">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0">
                        <Circle className="w-5 h-5 text-gray-600" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">Review burn rate projections</span>
                    </div>
                  </div>
                </div>

                {/* AI Insight */}
                <div className="bg-gradient-to-br from-[#0d5f4e] to-[#0a4a3d] rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="text-xs font-medium text-[#6b9d89] mb-2">AI Insight</h5>
                      <p className="text-sm text-white leading-relaxed">
                        Based on your runway of 14 months, prioritizing the Sequoia follow-up aligns with your fundraising timeline for Series A.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Runway Indicator */}
                <div className="flex items-center justify-end pt-2">
                  <div className="text-right">
                    <div className="text-2xl font-medium text-gray-900">14mo</div>
                    <div className="text-xs text-gray-500">runway</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] opacity-5 blur-3xl -z-10 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}