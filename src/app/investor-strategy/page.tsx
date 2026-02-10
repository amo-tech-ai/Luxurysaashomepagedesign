'use client';

import { useState } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { 
  Target, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Calendar,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  FileText,
  Building2
} from 'lucide-react';

interface InvestorStrategyProps {
  onNavigate?: (page: string) => void;
}

const FUNDING_STAGES = [
  { id: 'pre-seed', label: 'Pre-Seed', range: '$50K–$500K', typical: 'Friends/Family, Angels' },
  { id: 'seed', label: 'Seed', range: '$500K–$2M', typical: 'Angel Groups, Micro-VCs' },
  { id: 'series-a', label: 'Series A', range: '$2M–$15M', typical: 'VCs, Growth Funds' },
  { id: 'series-b', label: 'Series B+', range: '$15M+', typical: 'Growth VCs, PE' },
];

const INVESTOR_ARCHETYPES = [
  {
    type: 'Angel Investor',
    checkSize: '$25K–$100K',
    focus: 'Early traction, founder quality',
    timeline: '2–4 weeks',
    pros: ['Quick decisions', 'Hands-on mentorship', 'Network access'],
    cons: ['Smaller checks', 'Limited follow-on capital'],
  },
  {
    type: 'Micro VC',
    checkSize: '$250K–$1M',
    focus: 'Product-market fit signals',
    timeline: '4–8 weeks',
    pros: ['Structured support', 'Industry expertise', 'Follow-on potential'],
    cons: ['Formal process', 'Board expectations'],
  },
  {
    type: 'Traditional VC',
    checkSize: '$2M–$10M',
    focus: 'Proven metrics, large market',
    timeline: '8–16 weeks',
    pros: ['Large capital', 'Strategic guidance', 'Brand credibility'],
    cons: ['High bar for entry', 'Dilution concerns', 'Board control'],
  },
  {
    type: 'Corporate VC',
    checkSize: '$500K–$5M',
    focus: 'Strategic fit, partnerships',
    timeline: '12–24 weeks',
    pros: ['Strategic value', 'Customer access', 'Validation'],
    cons: ['Slow process', 'Conflict of interest risks'],
  },
];

const READINESS_CHECKLIST = [
  { item: 'Pitch deck (10-15 slides)', status: 'incomplete', priority: 'High' },
  { item: 'Financial model (3-year projection)', status: 'incomplete', priority: 'High' },
  { item: 'Customer validation evidence', status: 'complete', priority: 'High' },
  { item: 'Competitive analysis', status: 'in-progress', priority: 'Medium' },
  { item: 'Go-to-market strategy', status: 'incomplete', priority: 'High' },
  { item: 'Cap table & legal structure', status: 'incomplete', priority: 'Medium' },
  { item: 'Data room setup', status: 'incomplete', priority: 'Medium' },
  { item: 'Team bios & advisors', status: 'complete', priority: 'Low' },
];

export default function InvestorStrategyPage({ onNavigate }: InvestorStrategyProps) {
  const [selectedStage, setSelectedStage] = useState('seed');
  const [targetAmount, setTargetAmount] = useState('1000000');

  const readinessScore = Math.round(
    (READINESS_CHECKLIST.filter((i) => i.status === 'complete').length / READINESS_CHECKLIST.length) * 100
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete':
        return 'text-emerald-600 bg-emerald-50';
      case 'in-progress':
        return 'text-amber-600 bg-amber-50';
      case 'incomplete':
        return 'text-gray-500 bg-gray-50';
      default:
        return 'text-gray-500 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
        return <CheckCircle className="w-4 h-4 text-emerald-600" />;
      case 'in-progress':
        return <AlertCircle className="w-4 h-4 text-amber-600" />;
      default:
        return <div className="w-4 h-4 rounded-full border-2 border-gray-300" />;
    }
  };

  return (
    <DashboardLayout
      title="Investor Strategy"
      subtitle="Define your fundraising approach and investor targeting"
      onNavigate={onNavigate}
      activeNav="investor-strategy"
    >
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#0E3E1B] mb-2">Fundraising Strategy</h1>
          <p className="text-sm text-gray-600">
            Plan your capital raise with clarity on who to target, when, and with what story
          </p>
        </div>

        {/* Readiness Overview */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Readiness Score</h3>
              <Target className="w-5 h-5 text-[#0d5f4e]" />
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-[#0d5f4e]">{readinessScore}</span>
              <span className="text-gray-500">/100</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0d5f4e] transition-all duration-500"
                style={{ width: `${readinessScore}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Target Stage</h3>
              <TrendingUp className="w-5 h-5 text-[#6b9d89]" />
            </div>
            <select
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
            >
              {FUNDING_STAGES.map((stage) => (
                <option key={stage.id} value={stage.id}>
                  {stage.label} ({stage.range})
                </option>
              ))}
            </select>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Target Amount</h3>
              <DollarSign className="w-5 h-5 text-[#6b9d89]" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">$</span>
              <input
                type="number"
                value={targetAmount}
                onChange={(e) => setTargetAmount(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(
                Number(targetAmount)
              )}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Readiness Checklist */}
          <div className="col-span-2 space-y-6">
            {/* Readiness Checklist */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                <h3 className="font-semibold text-gray-800">Fundraising Readiness Checklist</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {READINESS_CHECKLIST.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#0d5f4e] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {getStatusIcon(item.status)}
                        <div>
                          <div className="text-sm font-medium text-gray-800">{item.item}</div>
                          <div className="text-xs text-gray-500 mt-0.5">Priority: {item.priority}</div>
                        </div>
                      </div>
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(item.status)}`}
                      >
                        {item.status === 'complete'
                          ? 'Complete'
                          : item.status === 'in-progress'
                          ? 'In Progress'
                          : 'Not Started'}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <button 
                    onClick={() => onNavigate?.('pitch-deck')}
                    className="flex items-center gap-2 px-4 py-2 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0E3E1B] transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Build Pitch Deck
                  </button>
                  <button 
                    onClick={() => onNavigate?.('data-room')}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Set Up Data Room
                  </button>
                </div>
              </div>
            </div>

            {/* Investor Archetypes */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                <h3 className="font-semibold text-gray-800">Investor Archetypes</h3>
              </div>
              <div className="p-6">
                <div className="grid gap-4">
                  {INVESTOR_ARCHETYPES.map((archetype, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-5 hover:border-[#0d5f4e] transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">{archetype.type}</h4>
                          <p className="text-sm text-gray-600">{archetype.focus}</p>
                        </div>
                        <Building2 className="w-5 h-5 text-[#6b9d89]" />
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                        <div>
                          <span className="text-gray-500">Check Size:</span>
                          <div className="font-medium text-gray-800">{archetype.checkSize}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Timeline:</span>
                          <div className="font-medium text-gray-800">{archetype.timeline}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-200">
                        <div>
                          <div className="text-xs font-semibold text-emerald-700 mb-2">Pros</div>
                          <ul className="space-y-1">
                            {archetype.pros.map((pro, i) => (
                              <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                                <CheckCircle className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-amber-700 mb-2">Cons</div>
                          <ul className="space-y-1">
                            {archetype.cons.map((con, i) => (
                              <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                                <AlertCircle className="w-3 h-3 text-amber-600 mt-0.5 flex-shrink-0" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Actions & Timeline */}
          <div className="space-y-6">
            {/* Next Actions */}
            <div className="bg-[#E8F4F1] rounded-lg border border-[#0d5f4e] p-6">
              <h3 className="font-semibold text-[#0d5f4e] mb-4">Next Actions</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => onNavigate?.('pitch-deck')}
                  className="w-full text-left p-3 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-800">Complete pitch deck</div>
                    <ArrowRight className="w-4 h-4 text-[#0d5f4e]" />
                  </div>
                </button>

                <button className="w-full text-left p-3 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-800">Build financial model</div>
                    <ArrowRight className="w-4 h-4 text-[#0d5f4e]" />
                  </div>
                </button>

                <button 
                  onClick={() => onNavigate?.('crm')}
                  className="w-full text-left p-3 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-800">Build investor list</div>
                    <ArrowRight className="w-4 h-4 text-[#0d5f4e]" />
                  </div>
                </button>

                <button className="w-full text-left p-3 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-800">Practice pitch</div>
                    <ArrowRight className="w-4 h-4 text-[#0d5f4e]" />
                  </div>
                </button>
              </div>
            </div>

            {/* Timeline Estimate */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-[#6b9d89]" />
                <h3 className="font-semibold text-gray-800">Timeline Estimate</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Prep Phase</span>
                    <span className="text-sm font-medium text-gray-800">4–6 weeks</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0d5f4e] w-1/3" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Outreach Phase</span>
                    <span className="text-sm font-medium text-gray-800">6–8 weeks</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#6b9d89] w-0" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Due Diligence</span>
                    <span className="text-sm font-medium text-gray-800">4–8 weeks</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#6b9d89] w-0" />
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Total Estimated Time</div>
                  <div className="text-xl font-semibold text-[#0d5f4e]">14–22 weeks</div>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
              <div className="space-y-2 text-sm">
                <button 
                  onClick={() => onNavigate?.('pitch-deck')}
                  className="block text-[#0d5f4e] hover:underline"
                >
                  → Pitch Deck Templates
                </button>
                <button 
                  onClick={() => onNavigate?.('crm')}
                  className="block text-[#0d5f4e] hover:underline"
                >
                  → Investor CRM
                </button>
                <button className="block text-[#0d5f4e] hover:underline">
                  → Financial Model Template
                </button>
                <button 
                  onClick={() => onNavigate?.('data-room')}
                  className="block text-[#0d5f4e] hover:underline"
                >
                  → Data Room Checklist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
