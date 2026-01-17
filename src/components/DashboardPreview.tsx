import { CheckCircle2, Circle, TrendingUp } from 'lucide-react';

const tasks = [
  { title: 'Finalize product roadmap Q1', status: 'complete', priority: 'high' },
  { title: 'Schedule investor check-in calls', status: 'complete', priority: 'high' },
  { title: 'Review user feedback analysis', status: 'active', priority: 'medium' },
  { title: 'Prepare board deck outline', status: 'pending', priority: 'medium' },
];

const metrics = [
  { label: 'Strategic Clarity', value: 94, trend: 'up' },
  { label: 'Execution Velocity', value: 78, trend: 'up' },
  { label: 'Team Alignment', value: 89, trend: 'stable' },
];

export function DashboardPreview() {
  return (
    <section className="bg-[#1a1a1a] py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-[#fafaf8] mb-4">
            Built for serious execution
          </h2>
          <p className="text-xl text-gray-400">
            Every view designed for clarity and momentum
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* System Layer - Top */}
          <div className="bg-[#252525] border border-gray-700 p-8 rounded-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl text-[#fafaf8]">Strategic Priorities</h3>
              <div className="flex items-center gap-2 text-[#6b9d89] text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>On track</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {metrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{metric.label}</span>
                    <span className="text-[#fafaf8]">{metric.value}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0d5f4e] rounded-full transition-all duration-500"
                      style={{ width: `${metric.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Execution Layer - Top */}
          <div className="bg-white border border-gray-200 p-8 rounded-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl text-gray-900">This Week's Focus</h3>
              <span className="text-sm text-gray-500">4 tasks</span>
            </div>
            
            <div className="space-y-3">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-sm hover:bg-gray-50 transition-colors"
                >
                  {task.status === 'complete' ? (
                    <CheckCircle2 className="w-5 h-5 text-[#0d5f4e] flex-shrink-0 mt-0.5" />
                  ) : task.status === 'active' ? (
                    <div className="w-5 h-5 rounded-full border-2 border-[#0d5f4e] flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#0d5f4e]"></div>
                    </div>
                  ) : (
                    <Circle className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <div className={`text-sm ${
                      task.status === 'complete' ? 'text-gray-500 line-through' : 'text-gray-900'
                    }`}>
                      {task.title}
                    </div>
                  </div>
                  {task.priority === 'high' && task.status !== 'complete' && (
                    <div className="w-2 h-2 rounded-full bg-[#0d5f4e] flex-shrink-0 mt-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Investor Communication */}
          <div className="bg-white border border-gray-200 p-8 rounded-sm lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl text-gray-900">Investor Update Draft</h3>
              <span className="text-sm text-[#6b9d89]">Auto-generated • Review & send</span>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0d5f4e] mt-2 flex-shrink-0"></div>
                <p className="text-sm leading-relaxed">
                  <span className="text-gray-900">Product Progress:</span> Completed user research phase with 40+ interviews. Key insight: founders need execution clarity more than strategy tools.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0d5f4e] mt-2 flex-shrink-0"></div>
                <p className="text-sm leading-relaxed">
                  <span className="text-gray-900">Traction:</span> Onboarded 12 beta users this month. Avg. session time up 34%. High engagement with strategy-to-task linking feature.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6b9d89] mt-2 flex-shrink-0"></div>
                <p className="text-sm leading-relaxed">
                  <span className="text-gray-900">Next Milestone:</span> Launch to 50 users by end of Q1. Focus on retention and workflow completion rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}