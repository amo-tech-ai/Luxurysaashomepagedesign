'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle2, Clock, XCircle, Plus, TrendingUp } from 'lucide-react';

type AssumptionType = 'demand' | 'adoption' | 'pricing' | 'retention' | 'technical';
type RiskLevel = 'FATAL' | 'IMPORTANT' | 'MINOR';
type ExperimentStatus = 'planned' | 'running' | 'validated' | 'failed';

interface Experiment {
  id: string;
  assumption: string;
  type: AssumptionType;
  risk: RiskLevel;
  status: ExperimentStatus;
  design: string;
  duration: string;
  sample: string;
  cost: string;
  successCriteria: string;
  evidence?: {
    items: string[];
    progress: number;
  };
  result?: string;
}

export default function ExperimentsLab() {
  const [filters, setFilters] = useState({
    demand: true,
    adoption: true,
    pricing: true,
    retention: true,
    technical: false,
    planned: true,
    running: true,
    validated: true,
    failed: true,
  });

  const [experiments] = useState<Experiment[]>([
    {
      id: '1',
      assumption: 'Solo founders will pay $29/mo for an AI tool that replaces their Notion planning workflow.',
      type: 'demand',
      risk: 'FATAL',
      status: 'running',
      design:
        'Create a landing page at taskflow.ai with pricing ($29/mo and $79/mo). Drive 200 visitors from 3 Twitter threads about solo founder productivity. Track signups.',
      duration: '2 weeks',
      sample: '200 visitors',
      cost: '$0 (organic traffic)',
      successCriteria:
        "10+ email signups from 200 visitors (5% conversion). At least 3 respond to 'would you pay?' follow-up email.",
      evidence: {
        items: [
          'Landing page live since Feb 1',
          '147 visitors so far (day 10 of 14)',
          '8 email signups (5.4% conversion)',
          '2 replied "yes would pay"',
          '1 replied "maybe, needs more features"',
        ],
        progress: 74,
      },
    },
    {
      id: '2',
      assumption: 'Founders experience planning paralysis weekly, not just occasionally.',
      type: 'demand',
      risk: 'IMPORTANT',
      status: 'validated',
      design:
        'Interview 15 solo founders. Ask: How often do you feel stuck on what to build next? Daily? Weekly? Monthly?',
      duration: '1 week',
      sample: '15 founders',
      cost: '$0',
      successCriteria: '12 of 15 say weekly or more often',
      result: '12 of 15 founders said "at least weekly." 3 said "daily." None said "rarely."',
    },
    {
      id: '3',
      assumption: 'AI-generated plans feel more actionable than templates',
      type: 'adoption',
      risk: 'IMPORTANT',
      status: 'planned',
      design:
        'Create two versions: AI-generated plan vs template. Give each to 20 founders. Track completion rate after 7 days.',
      duration: '2 weeks',
      sample: '40 founders',
      cost: '$0',
      successCriteria: 'AI version has 50%+ higher completion rate',
    },
    {
      id: '4',
      assumption: 'Founders will use a daily planning tool 5+ days per week',
      type: 'retention',
      risk: 'FATAL',
      status: 'planned',
      design:
        'Give 30 beta users free access. Track daily active usage over 4 weeks. No prompts or reminders.',
      duration: '4 weeks',
      sample: '30 users',
      cost: '$0',
      successCriteria: '15+ users (50%) log in 5+ days per week',
    },
    {
      id: '5',
      assumption: '$79/mo tier is too expensive for solo founders',
      type: 'pricing',
      risk: 'IMPORTANT',
      status: 'planned',
      design: 'A/B test landing page with two price anchors: $29 vs $79. Track signup rate and tier selection.',
      duration: '2 weeks',
      sample: '400 visitors',
      cost: '$50 (Facebook ads)',
      successCriteria: '<10% choose $79 tier (validates it\'s too high)',
    },
    {
      id: '6',
      assumption: 'Notion users are willing to switch to a specialized planning tool',
      type: 'adoption',
      risk: 'FATAL',
      status: 'failed',
      design: 'Survey 50 active Notion users. Ask: Would you switch to a dedicated planning tool? Why or why not?',
      duration: '1 week',
      sample: '50 users',
      cost: '$0',
      successCriteria: '25+ say yes',
      result:
        'Only 12 of 50 said yes. Most (31) said "Notion already does this." Learning: Need to target founders who DON\'T use Notion, or offer 10x better experience.',
    },
  ]);

  const filteredExperiments = experiments.filter((exp) => {
    const typeMatch = filters[exp.type];
    const statusMatch = filters[exp.status];
    return typeMatch && statusMatch;
  });

  const stats = {
    total: experiments.length,
    planned: experiments.filter((e) => e.status === 'planned').length,
    running: experiments.filter((e) => e.status === 'running').length,
    validated: experiments.filter((e) => e.status === 'validated').length,
    failed: experiments.filter((e) => e.status === 'failed').length,
  };

  const getStatusColor = (status: ExperimentStatus) => {
    switch (status) {
      case 'planned':
        return 'bg-gray-100 text-gray-700';
      case 'running':
        return 'bg-blue-100 text-blue-700';
      case 'validated':
        return 'bg-green-100 text-green-700';
      case 'failed':
        return 'bg-red-100 text-red-700';
    }
  };

  const getRiskColor = (risk: RiskLevel) => {
    switch (risk) {
      case 'FATAL':
        return 'bg-[#0E3E1B] text-white';
      case 'IMPORTANT':
        return 'bg-amber-500 text-white';
      case 'MINOR':
        return 'bg-green-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] p-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl mb-2">Experiments Lab</h1>
          <p className="text-gray-600">Turn guesses into proof. One experiment at a time.</p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Panel - Filters & Stats */}
          <div className="col-span-3">
            <div className="bg-[#F5F3EF] rounded-lg p-6 sticky top-6">
              {/* Filter by Type */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Filter by type:</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.demand}
                      onChange={(e) => setFilters({ ...filters, demand: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">Demand ({experiments.filter((e) => e.type === 'demand').length})</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.adoption}
                      onChange={(e) => setFilters({ ...filters, adoption: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">
                      Adoption ({experiments.filter((e) => e.type === 'adoption').length})
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.pricing}
                      onChange={(e) => setFilters({ ...filters, pricing: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">Pricing ({experiments.filter((e) => e.type === 'pricing').length})</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.retention}
                      onChange={(e) => setFilters({ ...filters, retention: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">
                      Retention ({experiments.filter((e) => e.type === 'retention').length})
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.technical}
                      onChange={(e) => setFilters({ ...filters, technical: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">
                      Technical ({experiments.filter((e) => e.type === 'technical').length})
                    </span>
                  </label>
                </div>
              </div>

              {/* Filter by Status */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Filter by status:</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.planned}
                      onChange={(e) => setFilters({ ...filters, planned: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">Planned ({stats.planned})</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.running}
                      onChange={(e) => setFilters({ ...filters, running: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">Running ({stats.running})</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.validated}
                      onChange={(e) => setFilters({ ...filters, validated: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">Validated ({stats.validated})</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.failed}
                      onChange={(e) => setFilters({ ...filters, failed: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">Failed ({stats.failed})</span>
                  </label>
                </div>
              </div>

              {/* Stats */}
              <div className="border-t border-gray-300 pt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">EXPERIMENT STATS</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total:</span>
                    <span className="font-medium">{stats.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Planned:</span>
                    <span className="font-medium">{stats.planned}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Running:</span>
                    <span className="font-medium">{stats.running}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Validated:</span>
                    <span className="font-medium text-green-600">{stats.validated}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Failed:</span>
                    <span className="font-medium text-red-600">{stats.failed}</span>
                  </div>
                </div>
              </div>

              {/* Quick Add */}
              <div className="border-t border-gray-300 pt-6 mt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">QUICK ADD</h3>
                <textarea
                  placeholder="What assumption needs testing?"
                  className="w-full p-2 text-sm border border-gray-300 rounded resize-none"
                  rows={3}
                />
                <button className="mt-2 text-sm text-[#0d5f4e] hover:underline flex items-center gap-1">
                  <Plus className="w-4 h-4" />
                  Quick add
                </button>
              </div>
            </div>
          </div>

          {/* Center Panel - Experiments */}
          <div className="col-span-6">
            <div className="space-y-6">
              {filteredExperiments.map((exp) => (
                <div
                  key={exp.id}
                  className={`bg-white rounded-lg border-l-4 p-6 ${
                    exp.status === 'validated'
                      ? 'border-green-500'
                      : exp.status === 'failed'
                      ? 'border-red-500'
                      : 'border-gray-300'
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium uppercase ${getRiskColor(exp.risk)}`}>
                          {exp.risk}
                        </span>
                        <span className="px-2 py-1 rounded text-xs font-medium uppercase bg-gray-100 text-gray-700">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded text-xs font-medium uppercase ${getStatusColor(exp.status)}`}
                    >
                      {exp.status}
                    </span>
                  </div>

                  {/* Assumption */}
                  <div className="bg-[#F5F3EF] rounded p-4 mb-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">ASSUMPTION</h3>
                    <p className="text-sm">{exp.assumption}</p>
                  </div>

                  {/* Experiment Design */}
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">EXPERIMENT DESIGN</h3>
                    <p className="text-sm text-gray-600 mb-3">{exp.design}</p>
                    <div className="flex gap-6 text-sm">
                      <div>
                        <span className="text-gray-500">Duration:</span>{' '}
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Sample:</span>{' '}
                        <span className="font-medium">{exp.sample}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Cost:</span> <span className="font-medium">{exp.cost}</span>
                      </div>
                    </div>
                  </div>

                  {/* Success Criteria */}
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">SUCCESS CRITERIA</h3>
                    <p className="text-sm text-gray-600">{exp.successCriteria}</p>
                  </div>

                  {/* Evidence Collected */}
                  {exp.evidence && (
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-gray-700 mb-2">EVIDENCE COLLECTED</h3>
                      <ul className="space-y-1 text-sm text-gray-600 mb-3">
                        {exp.evidence.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#0d5f4e]">−</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Progress:</span>
                          <span className="font-medium">{exp.evidence.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-[#0d5f4e] h-2 rounded-full transition-all"
                            style={{ width: `${exp.evidence.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Result */}
                  {exp.result && (
                    <div
                      className={`rounded p-4 ${
                        exp.status === 'validated' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {exp.status === 'validated' ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        )}
                        <div>
                          <h3 className="text-sm font-medium mb-1">
                            {exp.status === 'validated' ? 'RESULT: VALIDATED' : 'RESULT: FAILED'}
                          </h3>
                          <p className="text-sm text-gray-700">{exp.result}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <button className="w-full py-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-[#0d5f4e] hover:text-[#0d5f4e] transition-colors flex items-center justify-center gap-2">
                <Plus className="w-5 h-5" />
                Add New Experiment
              </button>
            </div>
          </div>

          {/* Right Panel - AI Coach */}
          <div className="col-span-3">
            <div className="space-y-4 sticky top-6">
              {/* Riskiest Assumption */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-sm font-medium mb-3">RISKIEST ASSUMPTION</h3>
                <div className="bg-[#F5F3EF] rounded p-3 mb-3">
                  <p className="text-sm">"Will founders pay $29/mo for AI planning?"</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-600">Risk level:</span>
                    <span className="font-medium text-[#0E3E1B]">FATAL</span>
                  </div>
                  <p className="text-gray-600 text-xs">(if wrong, no business)</p>
                </div>
              </div>

              {/* Test Type Suggestion */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-sm font-medium mb-3">TEST TYPE SUGGESTION</h3>
                <p className="text-sm text-gray-700">
                  For this assumption, the best test is a landing page with real pricing. This is better than interviews
                  because people say they will pay but do not pull out their wallet.
                </p>
              </div>

              {/* Sample Size */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-sm font-medium mb-3">SAMPLE SIZE</h3>
                <p className="text-sm text-gray-700">
                  200 visitors is enough for a 5% conversion test. You need at least 10 signups to have statistical
                  meaning.
                </p>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  TIMELINE
                </h3>
                <p className="text-sm text-gray-700 mb-2">Day 10 of 14</p>
                <p className="text-sm text-gray-600">
                  On track for success. 8 signups with 4 days remaining. Likely to hit 10+ target.
                </p>
              </div>

              {/* Confidence */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-sm font-medium mb-3">CONFIDENCE</h3>
                <div className="text-3xl font-medium text-[#0d5f4e] mb-2">74%</div>
                <p className="text-xs text-gray-600">(will increase if 10+ signups confirmed)</p>
              </div>

              {/* What to Do Next */}
              <div className="bg-[#F5F3EF] rounded-lg p-6">
                <h3 className="text-sm font-medium mb-3">WHAT TO DO NEXT</h3>
                <p className="text-sm text-gray-700 mb-3">When Experiment 1 finishes:</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>
                    <span className="font-medium">If PASS:</span> Start Experiment 3 (pricing test)
                  </div>
                  <div>
                    <span className="font-medium">If FAIL:</span> Pivot to weekly planning tool ($9/mo) or interview to
                    find why they won't pay.
                  </div>
                </div>
                <button className="mt-4 text-sm text-[#0d5f4e] hover:underline">Create Kanban card →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
