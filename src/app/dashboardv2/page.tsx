'use client';

import { DashboardLayout } from '../../components/DashboardLayout';
import { 
  BarChart3, 
  CheckCircle, 
  AlertTriangle, 
  Target, 
  Lightbulb,
  Sparkles,
  ArrowRight,
  Lock,
  Unlock
} from 'lucide-react';

interface DashboardV2Props {
  onNavigate?: (page: string) => void;
}

export default function DashboardV2Page({ onNavigate }: DashboardV2Props) {
  // Mock data
  const healthScore = {
    overall: 82,
    status: 'At Risk',
    breakdown: {
      strategy: 84,
      market: 76,
      execution: 68,
      funding: 60,
    },
    biggestDrag: 'Execution consistency',
  };

  const completion = {
    percentage: 65,
    missing: ['Monthly burn rate', 'Funding status', 'Advisory board'],
    unlocks: ['Financial projections', 'Team section in report'],
  };

  const topRisks = [
    { risk: 'UVP not validated', severity: 'High' },
    { risk: 'Channel unclear', severity: 'Medium' },
    { risk: 'Weak proof points', severity: 'Medium' },
  ];

  const todaysFocus = [
    { task: 'Write 1-sentence UVP', time: '20m', priority: 'High' },
    { task: 'Define ICP persona', time: '30m', priority: 'High' },
    { task: 'Draft pricing assumption', time: '25m', priority: 'Medium' },
  ];

  const opportunity = {
    icp: 'Solo SaaS founders',
    problem: 'No clear roadmap',
    uvp: 'From idea→execution',
  };

  const market = {
    tam: '$3.1B',
    sam: '$310M–$620M',
    som: '$25M–$75M',
    competition: 'Medium',
    evidence: 60,
  };

  const fundraising = {
    readiness: 58,
    missing: ['Pitch deck draft', 'Key metrics baseline'],
  };

  const momentum = {
    weeklyTasks: 6,
    planProgress: 18,
    lastMilestone: 'ICP set',
  };

  const getSeverityColor = (severity: string) => {
    if (severity === 'High') return 'text-[#0d5f4e] font-semibold';
    if (severity === 'Medium') return 'text-[#6b9d89] font-medium';
    return 'text-gray-600';
  };

  const getPriorityColor = (priority: string) => {
    if (priority === 'High') return 'text-[#0d5f4e]';
    if (priority === 'Medium') return 'text-[#6b9d89]';
    return 'text-gray-600';
  };

  return (
    <DashboardLayout
      title="Command Centre"
      subtitle="Your startup command center with real-time metrics and AI-powered insights"
      onNavigate={onNavigate}
      activeNav="dashboardv2"
    >
      <div className="p-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Main Content - Spans 2 columns */}
          <div className="col-span-2 space-y-6">
            {/* 1. Startup Health Score */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-[#0E3E1B] mb-1">Startup Health Score</h2>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-[#0d5f4e]">{healthScore.overall}</span>
                    <span className="text-gray-500">/</span>
                    <span className="text-2xl text-gray-400">100</span>
                    <span className="ml-2 px-3 py-1 bg-[#E8F4F1] text-[#6b9d89] text-sm rounded-full font-medium">
                      ⚠️ {healthScore.status}
                    </span>
                  </div>
                </div>
                <BarChart3 className="w-6 h-6 text-gray-400" />
              </div>

              <div className="grid grid-cols-4 gap-4 mb-4">
                {Object.entries(healthScore.breakdown).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-sm text-gray-600 capitalize mb-1">{key}</div>
                    <div className="text-xl font-semibold text-gray-800">{value}</div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600 mb-3">
                  Biggest drag: <span className="font-medium text-gray-800">{healthScore.biggestDrag}</span>
                </div>
                <button 
                  onClick={() => onNavigate?.('startup-validator')}
                  className="text-sm text-[#0d5f4e] hover:text-[#0E3E1B] flex items-center gap-1"
                >
                  View validation <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 2. Completion & Unlocks + Top Risks */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-base font-semibold text-[#0E3E1B] mb-4">Completion & Unlocks</h3>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Completion</span>
                    <span className="text-lg font-semibold text-[#0d5f4e]">{completion.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#0d5f4e] transition-all duration-500"
                      style={{ width: `${completion.percentage}%` }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    Missing ({completion.missing.length}):
                  </div>
                  <ul className="space-y-1">
                    {completion.missing.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200 mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Unlocks when done:</div>
                  <ul className="space-y-1">
                    {completion.unlocks.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <Lock className="w-3 h-3 text-gray-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => onNavigate?.('startup-profile')}
                  className="text-sm text-[#0d5f4e] hover:text-[#0E3E1B] flex items-center gap-1"
                >
                  Complete fields <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-base font-semibold text-[#0E3E1B] mb-4">Top Risks</h3>
                
                <div className="space-y-3 mb-4">
                  {topRisks.map((item, idx) => (
                    <div key={idx} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-gray-800">{idx + 1}. {item.risk}</div>
                          <div className={`text-xs mt-1 ${getSeverityColor(item.severity)}`}>
                            Severity: {item.severity}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="text-sm text-[#0d5f4e] hover:text-[#0E3E1B] flex items-center gap-1">
                  Review risks <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 3. Today's Focus */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-base font-semibold text-[#0E3E1B] mb-4">Today's Focus (Top 3 tasks)</h3>
              
              <div className="space-y-3 mb-4">
                {todaysFocus.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-xs text-gray-500">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800">{item.task}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{item.time}</div>
                      </div>
                    </div>
                    <div className={`text-xs font-medium ${getPriorityColor(item.priority)}`}>
                      Priority: {item.priority}
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => onNavigate?.('kanban')}
                className="text-sm text-[#0d5f4e] hover:text-[#0E3E1B] flex items-center gap-1"
              >
                Open Kanban <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* 4. Primary Opportunity + Market Snapshot */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-base font-semibold text-[#0E3E1B] mb-4">Primary Opportunity</h3>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">ICP</div>
                    <div className="text-sm font-medium text-gray-800">{opportunity.icp}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Problem</div>
                    <div className="text-sm font-medium text-gray-800">"{opportunity.problem}"</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">UVP</div>
                    <div className="text-sm font-medium text-gray-800">"{opportunity.uvp}"</div>
                  </div>
                </div>

                <button 
                  onClick={() => onNavigate?.('opportunity-canvas')}
                  className="text-sm text-[#0d5f4e] hover:text-[#0E3E1B] flex items-center gap-1"
                >
                  View Opportunity <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-base font-semibold text-[#0E3E1B] mb-4">Market Snapshot</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-2 bg-gray-50 rounded">
                      <div className="text-xs text-gray-500 mb-1">TAM</div>
                      <div className="text-sm font-semibold text-gray-800">{market.tam}</div>
                    </div>
                    <div className="p-2 bg-gray-50 rounded">
                      <div className="text-xs text-gray-500 mb-1">SAM</div>
                      <div className="text-sm font-semibold text-gray-800">{market.sam}</div>
                    </div>
                    <div className="p-2 bg-gray-50 rounded">
                      <div className="text-xs text-gray-500 mb-1">SOM</div>
                      <div className="text-sm font-semibold text-gray-800">{market.som}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <div className="text-xs text-gray-500">Competition</div>
                      <div className="text-sm font-medium text-gray-800">{market.competition}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Evidence</div>
                      <div className="text-sm font-medium text-gray-800">{market.evidence}/100</div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => onNavigate?.('market-research-hub')}
                  className="text-sm text-[#0d5f4e] hover:text-[#0E3E1B] flex items-center gap-1"
                >
                  Open Research <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 5. Fundraising Readiness + Momentum */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-base font-semibold text-[#0E3E1B] mb-4">Fundraising Readiness</h3>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Readiness</span>
                    <span className="text-lg font-semibold text-[#0d5f4e]">{fundraising.readiness}/100</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#0d5f4e] transition-all duration-500"
                      style={{ width: `${fundraising.readiness}%` }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Missing:</div>
                  <ul className="space-y-1">
                    {fundraising.missing.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => onNavigate?.('investor-strategy')}
                  className="text-sm text-[#0d5f4e] hover:text-[#0E3E1B] flex items-center gap-1"
                >
                  Build investor plan <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-base font-semibold text-[#0E3E1B] mb-4">Momentum</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">This week</span>
                    <span className="text-lg font-semibold text-[#0d5f4e]">{momentum.weeklyTasks} tasks done</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">90-day plan</span>
                    <span className="text-lg font-semibold text-[#0d5f4e]">{momentum.planProgress}%</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <div className="text-xs text-gray-500 mb-1">Last milestone</div>
                    <div className="text-sm font-medium text-gray-800 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0d5f4e]" />
                      {momentum.lastMilestone}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => onNavigate?.('90-day-plan')}
                  className="text-sm text-[#0d5f4e] hover:text-[#0E3E1B] flex items-center gap-1"
                >
                  Review progress <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar - AI Insights */}
          <div className="col-span-1 space-y-6">
            {/* AI Summary */}
            <div className="bg-white rounded-lg border border-[#6b9d89] p-4">
              <div className="flex items-start gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-[#6b9d89] mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#0E3E1B] mb-2">AI Summary</h4>
                  <p className="text-sm text-gray-700">
                    "You're close to being investor-ready. Fix burn rate + funding status to unlock projections."
                  </p>
                </div>
              </div>
            </div>

            {/* Next Best Action */}
            <div className="bg-[#E8F4F1] rounded-lg border border-[#0D5F4E] p-4">
              <div className="flex items-start gap-2 mb-3">
                <Target className="w-5 h-5 text-[#0d5f4e] mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#0d5f4e] mb-2">Next Best Action</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Complete Monthly burn rate to unlock financial projections
                  </p>
                  <button 
                    onClick={() => onNavigate?.('startup-profile')}
                    className="text-sm text-[#0d5f4e] hover:text-[#0E3E1B] font-medium flex items-center gap-1"
                  >
                    Fix now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Smart Suggestions */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-start gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-[#6b9d89] mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-[#0E3E1B] mb-3">Smart Suggestions</h4>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-xs text-gray-500 mb-1">Burn Rate</div>
                      <div className="text-sm font-medium text-gray-800 mb-2">$2,000/mo</div>
                      <button className="text-xs text-[#0d5f4e] hover:text-[#0E3E1B] flex items-center gap-1">
                        Apply <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-xs text-gray-500 mb-1">Funding</div>
                      <div className="text-sm font-medium text-gray-800 mb-2">Bootstrapped</div>
                      <button className="text-xs text-[#0d5f4e] hover:text-[#0E3E1B] flex items-center gap-1">
                        Apply <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Unlocks Preview */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-start gap-2 mb-3">
                <Unlock className="w-5 h-5 text-[#6b9d89] mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#0E3E1B] mb-3">Unlocks Preview</h4>
                  <div className="text-xs text-gray-600 mb-2">When complete:</div>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-700 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0d5f4e]" />
                      Financial projections
                    </li>
                    <li className="text-sm text-gray-700 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0d5f4e]" />
                      Team section
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}