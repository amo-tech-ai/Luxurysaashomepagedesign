'use client';

import { useState } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { 
  FileText, 
  Download, 
  Eye, 
  Calendar,
  TrendingUp,
  BarChart3,
  Users,
  DollarSign,
  Filter,
  Search
} from 'lucide-react';

interface Report {
  id: string;
  title: string;
  type: 'Validator' | 'Market Research' | 'Financial' | 'Strategy' | 'Pitch Deck';
  date: string;
  status: 'Draft' | 'Final' | 'Archived';
  size: string;
}

interface ReportsProps {
  onNavigate?: (page: string) => void;
}

const INITIAL_REPORTS: Report[] = [
  {
    id: '1',
    title: 'Startup Validation Report - TravelAI',
    type: 'Validator',
    date: '2026-02-08',
    status: 'Final',
    size: '2.4 MB',
  },
  {
    id: '2',
    title: 'Market Sizing Analysis - SaaS Platform',
    type: 'Market Research',
    date: '2026-02-07',
    status: 'Final',
    size: '1.8 MB',
  },
  {
    id: '3',
    title: 'Financial Projections - 3 Year Model',
    type: 'Financial',
    date: '2026-02-06',
    status: 'Draft',
    size: '892 KB',
  },
  {
    id: '4',
    title: 'Investor Pitch Deck - Series A',
    type: 'Pitch Deck',
    date: '2026-02-05',
    status: 'Final',
    size: '4.2 MB',
  },
  {
    id: '5',
    title: 'Competitive Analysis - Q1 2026',
    type: 'Market Research',
    date: '2026-02-03',
    status: 'Final',
    size: '1.5 MB',
  },
  {
    id: '6',
    title: 'Go-to-Market Strategy',
    type: 'Strategy',
    date: '2026-02-01',
    status: 'Draft',
    size: '1.1 MB',
  },
  {
    id: '7',
    title: 'Customer Discovery Insights',
    type: 'Market Research',
    date: '2026-01-28',
    status: 'Archived',
    size: '756 KB',
  },
];

const REPORT_TYPES = [
  { type: 'Validator', icon: BarChart3, color: 'text-[#0d5f4e]' },
  { type: 'Market Research', icon: TrendingUp, color: 'text-blue-600' },
  { type: 'Financial', icon: DollarSign, color: 'text-emerald-600' },
  { type: 'Strategy', icon: Users, color: 'text-purple-600' },
  { type: 'Pitch Deck', icon: FileText, color: 'text-amber-600' },
];

export default function ReportsPage({ onNavigate }: ReportsProps) {
  const [reports] = useState<Report[]>(INITIAL_REPORTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredReports = reports.filter((report) => {
    const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || report.type === filterType;
    const matchesStatus = filterStatus === 'all' || report.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Final':
        return 'bg-emerald-100 text-emerald-700';
      case 'Draft':
        return 'bg-amber-100 text-amber-700';
      case 'Archived':
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getTypeInfo = (type: string) => {
    return REPORT_TYPES.find((t) => t.type === type) || REPORT_TYPES[0];
  };

  const stats = {
    total: reports.length,
    final: reports.filter((r) => r.status === 'Final').length,
    draft: reports.filter((r) => r.status === 'Draft').length,
    archived: reports.filter((r) => r.status === 'Archived').length,
  };

  return (
    <DashboardLayout
      title="Reports"
      subtitle="Access and manage all your generated reports and analyses"
      onNavigate={onNavigate}
      activeNav="reports"
    >
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#0E3E1B] mb-2">Report Library</h1>
          <p className="text-sm text-gray-600">
            {stats.total} total reports • {stats.final} finalized • {stats.draft} in draft
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Total Reports</div>
            <div className="text-2xl font-semibold text-[#0d5f4e]">{stats.total}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Final</div>
            <div className="text-2xl font-semibold text-emerald-600">{stats.final}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Draft</div>
            <div className="text-2xl font-semibold text-amber-600">{stats.draft}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Archived</div>
            <div className="text-2xl font-semibold text-gray-500">{stats.archived}</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search reports..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
              >
                <option value="all">All Types</option>
                {REPORT_TYPES.map((type) => (
                  <option key={type.type} value={type.type}>
                    {type.type}
                  </option>
                ))}
              </select>
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
            >
              <option value="all">All Status</option>
              <option value="Final">Final</option>
              <option value="Draft">Draft</option>
              <option value="Archived">Archived</option>
            </select>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid gap-4">
          {filteredReports.map((report) => {
            const typeInfo = getTypeInfo(report.type);
            const TypeIcon = typeInfo.icon;

            return (
              <div
                key={report.id}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:border-[#0d5f4e] hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`p-3 rounded-lg bg-gray-50 ${typeInfo.color}`}>
                      <TypeIcon className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-base font-semibold text-gray-800 mb-1">
                            {report.title}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <span>{report.type}</span>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(report.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </div>
                            <span>•</span>
                            <span>{report.size}</span>
                          </div>
                        </div>

                        <span
                          className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(
                            report.status
                          )}`}
                        >
                          {report.status}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 mt-4">
                        <button 
                          onClick={() => {
                            if (report.type === 'Validator') {
                              onNavigate?.('validator-report');
                            }
                          }}
                          className="flex items-center gap-2 px-4 py-2 bg-[#0d5f4e] text-white text-sm rounded-lg hover:bg-[#0E3E1B] transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                          View Report
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredReports.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-medium text-gray-800 mb-2">No reports found</h3>
            <p className="text-gray-600">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
