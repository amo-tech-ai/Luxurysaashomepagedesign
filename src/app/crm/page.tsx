'use client';

import { useState } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { 
  Plus, 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  Building2,
  Calendar,
  MessageSquare,
  UserPlus,
  CheckCircle,
  Clock,
  XCircle,
  MoreVertical
} from 'lucide-react';

interface Investor {
  id: string;
  name: string;
  firm: string;
  type: 'Angel' | 'Micro VC' | 'VC' | 'Corporate VC';
  stage: 'Research' | 'Outreach' | 'Meeting' | 'Due Diligence' | 'Passed' | 'Committed';
  checkSize: string;
  focus: string[];
  email?: string;
  phone?: string;
  lastContact?: string;
  nextAction?: string;
  notes?: string;
}

interface CRMProps {
  onNavigate?: (page: string) => void;
}

const INITIAL_INVESTORS: Investor[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    firm: 'Summit Angels',
    type: 'Angel',
    stage: 'Meeting',
    checkSize: '$50K–$100K',
    focus: ['SaaS', 'B2B'],
    email: 'sarah@summitangels.com',
    lastContact: '2026-02-06',
    nextAction: 'Send pitch deck',
    notes: 'Met at TechCrunch. Interested in our go-to-market strategy.',
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    firm: 'Baseline Ventures',
    type: 'Micro VC',
    stage: 'Due Diligence',
    checkSize: '$500K–$1M',
    focus: ['SaaS', 'AI/ML', 'Early-Stage'],
    email: 'michael@baseline.vc',
    lastContact: '2026-02-07',
    nextAction: 'Schedule partner meeting',
    notes: 'Reviewing financial model. Asked for customer references.',
  },
  {
    id: '3',
    name: 'Jessica Park',
    firm: 'Sequoia Capital',
    type: 'VC',
    stage: 'Research',
    checkSize: '$2M–$10M',
    focus: ['Enterprise', 'SaaS'],
    email: 'jessica@sequoia.com',
    lastContact: '2026-02-01',
    nextAction: 'Warm intro needed',
    notes: 'Looking for Series A opportunities. Prefers warm introductions.',
  },
  {
    id: '4',
    name: 'David Kim',
    firm: 'Google Ventures',
    type: 'Corporate VC',
    stage: 'Outreach',
    checkSize: '$1M–$5M',
    focus: ['AI/ML', 'Developer Tools'],
    email: 'dkim@gv.com',
    lastContact: '2026-02-05',
    nextAction: 'Follow up email',
  },
  {
    id: '5',
    name: 'Amanda Foster',
    firm: 'First Round Capital',
    type: 'VC',
    stage: 'Passed',
    checkSize: '$1M–$3M',
    focus: ['SaaS', 'Consumer'],
    email: 'amanda@firstround.com',
    lastContact: '2026-01-28',
    notes: 'Too early for their thesis. Suggested reconnecting in 6 months.',
  },
  {
    id: '6',
    name: 'Robert Chang',
    firm: 'Chang Capital',
    type: 'Angel',
    stage: 'Committed',
    checkSize: '$75K',
    focus: ['SaaS', 'Marketplaces'],
    email: 'robert@changcapital.com',
    lastContact: '2026-02-08',
    nextAction: 'Send legal docs',
    notes: 'Committed $75K. Signing term sheet this week.',
  },
];

const STAGES = [
  { id: 'Research', color: 'bg-gray-100 text-gray-700', icon: Search },
  { id: 'Outreach', color: 'bg-blue-100 text-blue-700', icon: Mail },
  { id: 'Meeting', color: 'bg-purple-100 text-purple-700', icon: MessageSquare },
  { id: 'Due Diligence', color: 'bg-amber-100 text-amber-700', icon: Clock },
  { id: 'Passed', color: 'bg-red-100 text-red-700', icon: XCircle },
  { id: 'Committed', color: 'bg-emerald-100 text-emerald-700', icon: CheckCircle },
] as const;

export default function CRMPage({ onNavigate }: CRMProps) {
  const [investors, setInvestors] = useState<Investor[]>(INITIAL_INVESTORS);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStage, setFilterStage] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');

  const filteredInvestors = investors.filter((investor) => {
    const matchesSearch =
      investor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      investor.firm.toLowerCase().includes(searchQuery.toLowerCase()) ||
      investor.focus.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStage = filterStage === 'all' || investor.stage === filterStage;
    const matchesType = filterType === 'all' || investor.type === filterType;
    return matchesSearch && matchesStage && matchesType;
  });

  const stats = {
    total: investors.length,
    active: investors.filter((i) => !['Passed', 'Committed'].includes(i.stage)).length,
    committed: investors.filter((i) => i.stage === 'Committed').length,
    dueDiligence: investors.filter((i) => i.stage === 'Due Diligence').length,
  };

  const getStageInfo = (stage: string) => {
    return STAGES.find((s) => s.id === stage) || STAGES[0];
  };

  return (
    <DashboardLayout
      title="Investor CRM"
      subtitle="Track and manage your investor relationships and fundraising pipeline"
      onNavigate={onNavigate}
      activeNav="crm"
    >
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#0E3E1B] mb-2">Investor Pipeline</h1>
          <p className="text-sm text-gray-600">
            {stats.total} total investors • {stats.active} active • {stats.committed} committed
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Total Pipeline</div>
            <div className="text-2xl font-semibold text-[#0d5f4e]">{stats.total}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Active Conversations</div>
            <div className="text-2xl font-semibold text-blue-600">{stats.active}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Due Diligence</div>
            <div className="text-2xl font-semibold text-amber-600">{stats.dueDiligence}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Committed</div>
            <div className="text-2xl font-semibold text-emerald-600">{stats.committed}</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search investors, firms, or focus areas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
              />
            </div>

            {/* Stage Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={filterStage}
                onChange={(e) => setFilterStage(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
              >
                <option value="all">All Stages</option>
                {STAGES.map((stage) => (
                  <option key={stage.id} value={stage.id}>
                    {stage.id}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
            >
              <option value="all">All Types</option>
              <option value="Angel">Angel</option>
              <option value="Micro VC">Micro VC</option>
              <option value="VC">VC</option>
              <option value="Corporate VC">Corporate VC</option>
            </select>

            {/* Add Investor Button */}
            <button className="flex items-center gap-2 px-4 py-2 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0E3E1B] transition-colors">
              <Plus className="w-4 h-4" />
              Add Investor
            </button>
          </div>
        </div>

        {/* Investor List */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Investor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Stage
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Check Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Focus
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Last Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Next Action
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredInvestors.map((investor) => {
                  const stageInfo = getStageInfo(investor.stage);
                  const StageIcon = stageInfo.icon;

                  return (
                    <tr key={investor.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-800">{investor.name}</div>
                          <div className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                            <Building2 className="w-3 h-3" />
                            {investor.firm}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-700">{investor.type}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium ${stageInfo.color}`}>
                          <StageIcon className="w-3 h-3" />
                          {investor.stage}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-700">{investor.checkSize}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {investor.focus.slice(0, 2).map((focus) => (
                            <span
                              key={focus}
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                            >
                              {focus}
                            </span>
                          ))}
                          {investor.focus.length > 2 && (
                            <span className="text-xs text-gray-500">+{investor.focus.length - 2}</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {investor.lastContact && (
                          <div className="text-sm text-gray-600 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(investor.lastContact).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {investor.nextAction && (
                          <span className="text-sm text-gray-700">{investor.nextAction}</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {investor.email && (
                            <button className="text-gray-400 hover:text-[#0d5f4e] transition-colors">
                              <Mail className="w-4 h-4" />
                            </button>
                          )}
                          {investor.phone && (
                            <button className="text-gray-400 hover:text-[#0d5f4e] transition-colors">
                              <Phone className="w-4 h-4" />
                            </button>
                          )}
                          <button className="text-gray-400 hover:text-[#0d5f4e] transition-colors">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State */}
        {filteredInvestors.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center mt-6">
            <UserPlus className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-medium text-gray-800 mb-2">No investors found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters or search query</p>
            <button className="px-4 py-2 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0E3E1B] transition-colors">
              Add Your First Investor
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
