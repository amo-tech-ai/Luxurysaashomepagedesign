import { ArrowRight, Sparkles, Target, CheckCircle2, Circle, Clock, TrendingUp, AlertTriangle, Info, CheckCircle, BarChart3, Users, Zap, MessageSquare } from 'lucide-react';

interface FounderDashboardV2Props {
  onNavigate?: (page: string) => void;
}

export default function FounderDashboardV2({ onNavigate }: FounderDashboardV2Props) {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header Bar */}
      <div className="bg-white border-b border-[#0d5f4e]/10">
        <div className="max-w-[1800px] mx-auto px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Stage Status */}
            <div className="flex flex-col">
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-3 font-semibold">
                Current Stage
              </div>
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <div className="text-2xl font-medium text-[#212427]">PSF</div>
                  <div className="text-xs text-[#6B7280]">Stage 5/10</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0d5f4e]"></div>
                  <span className="text-xs text-[#0d5f4e] font-semibold">On Track</span>
                </div>
              </div>
            </div>

            {/* Gate Progress */}
            <div className="flex flex-col">
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-3 font-semibold">
                Gate Progress
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#212427]">78%</span>
                </div>
                <div className="w-full bg-[#F5F3EF] rounded-full h-2">
                  <div className="bg-[#0d5f4e] h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>

            {/* Sprint Info */}
            <div className="flex flex-col">
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-3 font-semibold">
                Current Sprint
              </div>
              <div className="flex flex-col">
                <div className="text-xl font-medium text-[#212427]">Sprint 3</div>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="w-3 h-3 text-[#6B7280]" />
                  <span className="text-xs text-[#6B7280]">Day 45/90 · 45 days left</span>
                </div>
              </div>
            </div>

            {/* Health Score */}
            <div className="flex flex-col">
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-3 font-semibold">
                Journey Health
              </div>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-medium text-[#0d5f4e]">72</div>
                <div className="text-sm text-[#6B7280]">/100</div>
              </div>
            </div>
          </div>

          {/* Learning Goal */}
          <div className="mt-6 pt-6 border-t border-[#0d5f4e]/10">
            <div className="flex items-center gap-3">
              <Target className="w-4 h-4 text-[#0d5f4e]" />
              <div>
                <span className="text-xs uppercase tracking-[0.15em] text-[#6B7280] font-semibold mr-3">Learning Goal:</span>
                <span className="text-sm text-[#212427]">Validate pricing willingness at $29/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout - Three Columns */}
      <div className="max-w-[1800px] mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT PANEL - 20% */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Stage Context */}
            <div className="bg-white border border-[#0d5f4e]/10 p-6">
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-4 font-semibold">
                Stage Context
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-xl font-medium text-[#212427] mb-2">PSF</div>
                  <div className="text-sm text-[#6B7280] mb-3">Problem-Solution Fit</div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#6B7280]">Progress</span>
                      <span className="text-[#212427] font-semibold">78%</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#6B7280]">Duration</span>
                      <span className="text-[#212427]">23 days in</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey Phase */}
            <div className="bg-white border border-[#0d5f4e]/10 p-6">
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-4 font-semibold">
                Journey Phase
              </div>
              
              <div className="space-y-3">
                <div className="text-base font-medium text-[#212427]">Consideration</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Touchpoints</span>
                    <span className="text-[#212427] font-semibold">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Pain Points</span>
                    <span className="text-[#212427] font-semibold">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Satisfaction</span>
                    <span className="text-[#0d5f4e] font-semibold">6.2/10</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gate Checklist */}
            <div className="bg-white border border-[#0d5f4e]/10 p-6">
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-4 font-semibold">
                Gate Checklist
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0d5f4e]" />
                  <span className="text-sm text-[#212427]">Canvas complete</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0d5f4e]" />
                  <span className="text-sm text-[#212427]">Story map done</span>
                </div>
                <div className="flex items-center gap-2">
                  <Circle className="w-4 h-4 text-[#6B7280]" />
                  <span className="text-sm text-[#6B7280]">3 validations (2/3)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Circle className="w-4 h-4 text-[#6B7280]" />
                  <span className="text-sm text-[#6B7280]">MVP scope defined</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0d5f4e]" />
                  <span className="text-sm text-[#212427]">Sprint goal set</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white border border-[#0d5f4e]/10 p-6">
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-4 font-semibold">
                Quick Actions
              </div>
              
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 text-sm text-[#212427] border border-[#0d5f4e]/20 hover:border-[#0d5f4e] hover:bg-[#0d5f4e]/5 transition-all duration-200">
                  + Add Assumption
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-[#212427] border border-[#0d5f4e]/20 hover:border-[#0d5f4e] hover:bg-[#0d5f4e]/5 transition-all duration-200">
                  Run Gate Check
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-[#212427] border border-[#0d5f4e]/20 hover:border-[#0d5f4e] hover:bg-[#0d5f4e]/5 transition-all duration-200">
                  → Journey Map
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-[#212427] border border-[#0d5f4e]/20 hover:border-[#0d5f4e] hover:bg-[#0d5f4e]/5 transition-all duration-200">
                  → Roadmap
                </button>
              </div>
            </div>
          </div>

          {/* MAIN PANEL - 55% */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Now Column */}
            <div className="bg-white border border-[#0d5f4e]/10 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-medium text-[#212427]">Now Column</h2>
                <span className="text-sm text-[#6B7280]">3 items</span>
              </div>
              
              <div className="space-y-4">
                {/* Item 1 */}
                <div className="border border-[#0d5f4e]/10 p-6 hover:border-[#0d5f4e]/30 transition-all duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-medium text-[#0d5f4e]">①</span>
                      <h3 className="text-base font-medium text-[#212427]">Pricing validation</h3>
                    </div>
                    <span className="text-xs px-3 py-1 bg-[#0d5f4e]/10 text-[#0d5f4e] font-semibold">In Progress</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full bg-[#F5F3EF] rounded-full h-1.5">
                      <div className="bg-[#0d5f4e] h-1.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-[#6B7280]">60% complete</span>
                      <span className="text-xs text-[#212427]">Outcome: +20% conversion</span>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="border border-[#0d5f4e]/10 p-6 hover:border-[#0d5f4e]/30 transition-all duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-medium text-[#0d5f4e]">②</span>
                      <h3 className="text-base font-medium text-[#212427]">Onboarding redesign</h3>
                    </div>
                    <span className="text-xs px-3 py-1 bg-[#6B7280]/10 text-[#6B7280] font-semibold">Scoped</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full bg-[#F5F3EF] rounded-full h-1.5">
                      <div className="bg-[#6B7280] h-1.5 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-[#6B7280]">Ready to start</span>
                      <span className="text-xs text-[#212427]">Outcome: -50% time-to-value</span>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="border border-[#0d5f4e]/10 p-6 hover:border-[#0d5f4e]/30 transition-all duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-medium text-[#0d5f4e]">③</span>
                      <h3 className="text-base font-medium text-[#212427]">Demo video</h3>
                    </div>
                    <span className="text-xs px-3 py-1 bg-[#0d5f4e] text-white font-semibold">Complete</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full bg-[#F5F3EF] rounded-full h-1.5">
                      <div className="bg-[#0d5f4e] h-1.5 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-[#0d5f4e]">100% complete</span>
                      <span className="text-xs text-[#212427]">Outcome: +15% signups</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sprint Progress */}
            <div className="bg-white border border-[#0d5f4e]/10 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-medium text-[#212427]">Sprint Progress</h2>
                <span className="text-sm text-[#6B7280]">Sprint 3</span>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-medium text-[#212427] mb-2">3/5</div>
                  <div className="text-xs text-[#6B7280] mb-3">Experiments</div>
                  <div className="w-full bg-[#F5F3EF] rounded-full h-1.5">
                    <div className="bg-[#0d5f4e] h-1.5 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <div className="text-xs text-[#0d5f4e] mt-2 font-semibold">On Track</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-medium text-[#212427] mb-2">12/15</div>
                  <div className="text-xs text-[#6B7280] mb-3">Interviews</div>
                  <div className="w-full bg-[#F5F3EF] rounded-full h-1.5">
                    <div className="bg-[#0d5f4e] h-1.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <div className="text-xs text-[#0d5f4e] mt-2 font-semibold">On Track</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-medium text-[#212427] mb-2">2/3</div>
                  <div className="text-xs text-[#6B7280] mb-3">Assumptions</div>
                  <div className="w-full bg-[#F5F3EF] rounded-full h-1.5">
                    <div className="bg-[#D97706] h-1.5 rounded-full" style={{ width: '66%' }}></div>
                  </div>
                  <div className="text-xs text-[#D97706] mt-2 font-semibold">At Risk</div>
                </div>
              </div>

              {/* Learning Log */}
              <div className="border-t border-[#0d5f4e]/10 pt-6">
                <div className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-4 font-semibold">
                  Learning Log · 8 entries
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="text-xs text-[#6B7280] whitespace-nowrap">Today</div>
                    <div className="text-sm text-[#212427]">"$29 resonates with SMB, $49 for mid-market"</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-xs text-[#6B7280] whitespace-nowrap">Yesterday</div>
                    <div className="text-sm text-[#212427]">"Time saved is more important than features as message"</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey Health */}
            <div className="bg-white border border-[#0d5f4e]/10 p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-medium text-[#212427]">Journey Health</h2>
                <span className="text-sm text-[#6B7280]">Avg: 6.4/10</span>
              </div>
              
              <div className="grid grid-cols-6 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-medium text-[#212427] mb-1">7.5</div>
                  <div className="text-[10px] text-[#6B7280] mb-2">/10</div>
                  <div className="w-full h-16 bg-[#F5F3EF] rounded relative">
                    <div className="absolute bottom-0 left-0 right-0 bg-[#0d5f4e] rounded" style={{ height: '75%' }}></div>
                  </div>
                  <div className="text-xs text-[#6B7280] mt-2">Awareness</div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-medium text-[#212427] mb-1">6.2</div>
                  <div className="text-[10px] text-[#6B7280] mb-2">/10</div>
                  <div className="w-full h-16 bg-[#F5F3EF] rounded relative">
                    <div className="absolute bottom-0 left-0 right-0 bg-[#6b9d89] rounded" style={{ height: '62%' }}></div>
                  </div>
                  <div className="text-xs text-[#6B7280] mt-2">Consider</div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-medium text-[#212427] mb-1">5.8</div>
                  <div className="text-[10px] text-[#6B7280] mb-2">/10</div>
                  <div className="w-full h-16 bg-[#F5F3EF] rounded relative">
                    <div className="absolute bottom-0 left-0 right-0 bg-[#6b9d89] rounded" style={{ height: '58%' }}></div>
                  </div>
                  <div className="text-xs text-[#6B7280] mt-2">Purchase</div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-medium text-[#D97706] mb-1">4.5</div>
                  <div className="text-[10px] text-[#6B7280] mb-2">/10</div>
                  <div className="w-full h-16 bg-[#F5F3EF] rounded relative">
                    <div className="absolute bottom-0 left-0 right-0 bg-[#D97706] rounded" style={{ height: '45%' }}></div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <AlertTriangle className="w-4 h-4 text-[#D97706]" />
                    </div>
                  </div>
                  <div className="text-xs text-[#D97706] mt-2 font-semibold">Onboard</div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-medium text-[#212427] mb-1">7.1</div>
                  <div className="text-[10px] text-[#6B7280] mb-2">/10</div>
                  <div className="w-full h-16 bg-[#F5F3EF] rounded relative">
                    <div className="absolute bottom-0 left-0 right-0 bg-[#0d5f4e] rounded" style={{ height: '71%' }}></div>
                  </div>
                  <div className="text-xs text-[#6B7280] mt-2">Retain</div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-medium text-[#212427] mb-1">8.0</div>
                  <div className="text-[10px] text-[#6B7280] mb-2">/10</div>
                  <div className="w-full h-16 bg-[#F5F3EF] rounded relative">
                    <div className="absolute bottom-0 left-0 right-0 bg-[#0d5f4e] rounded" style={{ height: '80%' }}></div>
                  </div>
                  <div className="text-xs text-[#6B7280] mt-2">Advocate</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#0d5f4e]/10">
                <div className="flex items-center gap-2 text-sm text-[#D97706]">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="font-semibold">Problem identified:</span>
                  <span>Onboarding needs work</span>
                </div>
              </div>
            </div>

            {/* Active Experiments */}
            <div className="bg-white border border-[#0d5f4e]/10 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-medium text-[#212427]">Active Experiments</h2>
                <span className="text-sm text-[#6B7280]">3 running</span>
              </div>
              
              <div className="space-y-4">
                {/* Experiment 1 */}
                <div className="border border-[#0d5f4e]/10 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-base font-medium text-[#212427] mb-1">Pricing A/B</h3>
                      <p className="text-sm text-[#6B7280]">$29 vs $49 conversion?</p>
                    </div>
                    <span className="text-xs px-3 py-1 bg-[#6B7280]/10 text-[#6B7280] font-semibold">Pending</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full bg-[#F5F3EF] rounded-full h-1.5">
                      <div className="bg-[#0d5f4e] h-1.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-[#6B7280]">80% complete</span>
                      <span className="text-xs text-[#0d5f4e]">Result: +35% (preliminary)</span>
                    </div>
                  </div>
                </div>

                {/* Experiment 2 */}
                <div className="border border-[#0d5f4e]/10 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-base font-medium text-[#212427] mb-1">Demo Modal</h3>
                      <p className="text-sm text-[#6B7280]">Video increases trial?</p>
                    </div>
                    <span className="text-xs px-3 py-1 bg-[#0d5f4e] text-white font-semibold">Validated</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full bg-[#F5F3EF] rounded-full h-1.5">
                      <div className="bg-[#0d5f4e] h-1.5 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-[#0d5f4e]">100% complete</span>
                      <span className="text-xs text-[#0d5f4e] font-semibold">Result: +18% signups</span>
                    </div>
                  </div>
                </div>

                {/* Experiment 3 */}
                <div className="border border-[#0d5f4e]/10 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-base font-medium text-[#212427] mb-1">Onboard Email</h3>
                      <p className="text-sm text-[#6B7280]">3-step vs 7-step?</p>
                    </div>
                    <span className="text-xs px-3 py-1 bg-[#0d5f4e]/10 text-[#0d5f4e] font-semibold">Running</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full bg-[#F5F3EF] rounded-full h-1.5">
                      <div className="bg-[#0d5f4e] h-1.5 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-[#6B7280]">45% complete</span>
                      <span className="text-xs text-[#6B7280]">Result: TBD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - 25% */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* AI Chat */}
            <div className="bg-white border border-[#0d5f4e]/10 p-6">
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-4 font-semibold">
                Task Orchestrator
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#0d5f4e] mt-1" />
                  <div className="flex-1">
                    <p className="text-sm text-[#212427] mb-2">Morning! You're 78% through PSF stage.</p>
                    <p className="text-sm text-[#6B7280] mb-3">2 validations done, 1 more needed for gate.</p>
                    <p className="text-sm text-[#0d5f4e] font-semibold">Focus on pricing experiment today.</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#0d5f4e]/10 pt-4">
                <button className="w-full px-4 py-2 text-sm text-[#212427] border border-[#0d5f4e]/20 hover:border-[#0d5f4e] hover:bg-[#0d5f4e]/5 transition-all duration-200 flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Ask AI...
                </button>
              </div>
            </div>

            {/* Next Actions */}
            <div className="bg-white border border-[#0d5f4e]/10 p-6">
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-4 font-semibold">
                Next Actions
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-6 h-6 rounded-full border-2 border-[#0d5f4e] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0d5f4e] transition-all duration-200">
                    <span className="text-xs font-semibold text-[#0d5f4e] group-hover:text-white">1</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#212427] group-hover:text-[#0d5f4e] transition-all duration-200">
                      Review pricing experiment results
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-6 h-6 rounded-full border-2 border-[#0d5f4e] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0d5f4e] transition-all duration-200">
                    <span className="text-xs font-semibold text-[#0d5f4e] group-hover:text-white">2</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#212427] group-hover:text-[#0d5f4e] transition-all duration-200">
                      Schedule 3 more customer interviews
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-6 h-6 rounded-full border-2 border-[#0d5f4e] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0d5f4e] transition-all duration-200">
                    <span className="text-xs font-semibold text-[#0d5f4e] group-hover:text-white">3</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#212427] group-hover:text-[#0d5f4e] transition-all duration-200">
                      Update onboarding touchpoints
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-white border border-[#0d5f4e]/10 p-6">
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] mb-4 font-semibold">
                Alerts
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-[#D97706]/5 border border-[#D97706]/20">
                  <AlertTriangle className="w-4 h-4 text-[#D97706] mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-[#D97706] mb-1">Low satisfaction</p>
                    <p className="text-xs text-[#6B7280]">Onboard sat. at 4.5/10</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#0d5f4e]/5 border border-[#0d5f4e]/20">
                  <Info className="w-4 h-4 text-[#0d5f4e] mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-[#0d5f4e] mb-1">Sprint midpoint</p>
                    <p className="text-xs text-[#6B7280]">Day 45/90 reached</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#0d5f4e]/5 border border-[#0d5f4e]/20">
                  <CheckCircle className="w-4 h-4 text-[#0d5f4e] mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-[#0d5f4e] mb-1">Experiment validated</p>
                    <p className="text-xs text-[#6B7280]">Demo exp +18% signups</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}