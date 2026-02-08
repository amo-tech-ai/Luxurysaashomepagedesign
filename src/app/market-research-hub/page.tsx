'use client';

import { useState, useEffect } from 'react';
import { FileText, TrendingUp, AlertTriangle, Info, CheckCircle2, Search, ExternalLink } from 'lucide-react';

interface Source {
  id: string;
  name: string;
  type: 'industry-report' | 'competitor' | 'pricing' | 'news' | 'academic';
  credibility: 'high' | 'medium' | 'low';
  url?: string;
}

interface Competitor {
  name: string;
  price: string;
  users: string;
  threat: 'HIGH' | 'MEDIUM' | 'LOW';
}

interface Contradiction {
  id: string;
  text: string;
}

interface EvidenceGap {
  id: string;
  title: string;
  suggestion: string;
}

export default function MarketResearchHub() {
  const [filters, setFilters] = useState({
    industryReports: true,
    competitor: true,
    pricing: true,
    news: false,
    academic: false,
    high: true,
    medium: true,
    low: false,
  });

  const [sources] = useState<Source[]>([
    { id: '1', name: 'SBA Small Business Report 2025', type: 'industry-report', credibility: 'high', url: '#' },
    { id: '2', name: 'IndieHackers Survey 2025', type: 'industry-report', credibility: 'high', url: '#' },
    { id: '3', name: 'Bessemer SaaS Benchmarks', type: 'pricing', credibility: 'high', url: '#' },
    { id: '4', name: 'G2 Category Data - Planning Tools', type: 'competitor', credibility: 'medium', url: '#' },
    { id: '5', name: 'ProductHunt Trending Tools 2025', type: 'competitor', credibility: 'medium', url: '#' },
    { id: '6', name: 'TechCrunch Funding Trends', type: 'news', credibility: 'medium', url: '#' },
    { id: '7', name: 'Harvard Business Review - Solo Founders', type: 'academic', credibility: 'high', url: '#' },
  ]);

  const [competitors] = useState<Competitor[]>([
    { name: 'Notion AI', price: 'Free+$8', users: '30M', threat: 'HIGH' },
    { name: 'Motion', price: '$19/mo', users: '200K', threat: 'MEDIUM' },
    { name: 'Linear', price: '$8/mo', users: '150K', threat: 'LOW' },
    { name: 'Trello', price: 'Free+$5', users: '50M', threat: 'LOW' },
    { name: 'Todoist', price: '$4/mo', users: '25M', threat: 'LOW' },
  ]);

  const [contradictions] = useState<Contradiction[]>([
    {
      id: '1',
      text: 'IndieHackers says 62% of solo founders spend <$50/mo on tools. But SaaS benchmarks show avg spend is $127/mo. Check methodology.',
    },
  ]);

  const [evidenceGaps] = useState<EvidenceGap[]>([
    {
      id: '1',
      title: 'No data on founder willingness to pay for planning tools specifically',
      suggestion: 'Run a pricing survey with 20 founders to fill this gap. Use Typeform + $5 gift card incentive.',
    },
    {
      id: '2',
      title: 'Churn rates for solo founder SaaS tools are unknown',
      suggestion: 'Interview 10 founders about what tools they stopped using and why.',
    },
  ]);

  const filteredSources = sources.filter((source) => {
    const typeMatch =
      (filters.industryReports && source.type === 'industry-report') ||
      (filters.competitor && source.type === 'competitor') ||
      (filters.pricing && source.type === 'pricing') ||
      (filters.news && source.type === 'news') ||
      (filters.academic && source.type === 'academic');
    const credMatch =
      (filters.high && source.credibility === 'high') ||
      (filters.medium && source.credibility === 'medium') ||
      (filters.low && source.credibility === 'low');
    return typeMatch && credMatch;
  });

  const credibilityScore = {
    overall: 78,
    high: sources.filter((s) => s.credibility === 'high').length,
    medium: sources.filter((s) => s.credibility === 'medium').length,
    low: sources.filter((s) => s.credibility === 'low').length,
  };

  const getThreatColor = (threat: string) => {
    if (threat === 'HIGH') return 'text-[#0E3E1B] bg-[#0E3E1B]/10';
    if (threat === 'MEDIUM') return 'text-[#6b9d89] bg-[#6b9d89]/10';
    return 'text-gray-600 bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] p-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl mb-2">Market Research Hub</h1>
          <p className="text-gray-600">
            {filteredSources.length} sources found across {sources.length} categories
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Panel - Sources & Filters */}
          <div className="col-span-3">
            <div className="bg-[#F5F3EF] rounded-lg p-6 sticky top-6">
              <div className="mb-6">
                <h2 className="font-medium mb-4">Sources found: {sources.length}</h2>
              </div>

              {/* Filter by Type */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Filter by type:</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.industryReports}
                      onChange={(e) => setFilters({ ...filters, industryReports: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">Industry reports</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.competitor}
                      onChange={(e) => setFilters({ ...filters, competitor: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">Competitor data</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.pricing}
                      onChange={(e) => setFilters({ ...filters, pricing: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">Pricing benchmarks</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.news}
                      onChange={(e) => setFilters({ ...filters, news: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">News articles</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.academic}
                      onChange={(e) => setFilters({ ...filters, academic: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">Academic papers</span>
                  </label>
                </div>
              </div>

              {/* Filter by Credibility */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Filter by credibility:</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.high}
                      onChange={(e) => setFilters({ ...filters, high: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">High ({credibilityScore.high})</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.medium}
                      onChange={(e) => setFilters({ ...filters, medium: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">Medium ({credibilityScore.medium})</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.low}
                      onChange={(e) => setFilters({ ...filters, low: e.target.checked })}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">Low ({credibilityScore.low})</span>
                  </label>
                </div>
              </div>

              {/* Top Sources */}
              <div className="border-t border-gray-300 pt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">TOP SOURCES</h3>
                <div className="space-y-3">
                  {filteredSources.slice(0, 5).map((source) => (
                    <div key={source.id} className="text-sm">
                      <div className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-[#0d5f4e] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">{source.name}</p>
                          <p className="text-xs text-gray-600 uppercase mt-1">
                            [{source.credibility} trust]
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-4 text-sm text-[#0d5f4e] hover:underline">+ Add custom source</button>
              </div>
            </div>
          </div>

          {/* Center Panel - Main Content */}
          <div className="col-span-6">
            <div className="space-y-6">
              {/* Market Sizing */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-medium mb-4">MARKET SIZING</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-3xl font-medium">$4.7B</span>
                      <span className="text-gray-600">TAM</span>
                    </div>
                    <p className="text-sm text-gray-600">(4.7M solo founders × $1,000/yr spend)</p>
                    <p className="text-xs text-gray-500 mt-1">Source: SBA Small Business Report 2025</p>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-3xl font-medium">$1.2B</span>
                      <span className="text-gray-600">SAM</span>
                    </div>
                    <p className="text-sm text-gray-600">(1.2M building software products)</p>
                    <p className="text-xs text-gray-500 mt-1">Source: IndieHackers Survey 2025</p>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-3xl font-medium">$12M</span>
                      <span className="text-gray-600">SOM</span>
                    </div>
                    <p className="text-sm text-gray-600">(Target: 1% of SAM in Year 1)</p>
                  </div>
                </div>
              </div>

              {/* Competitor Landscape */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-medium mb-4">COMPETITOR LANDSCAPE</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Name</th>
                        <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Price</th>
                        <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Users</th>
                        <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Threat</th>
                      </tr>
                    </thead>
                    <tbody>
                      {competitors.map((comp, idx) => (
                        <tr key={idx} className="border-b border-gray-100">
                          <td className="py-3 px-2 font-medium">{comp.name}</td>
                          <td className="py-3 px-2 text-gray-600">{comp.price}</td>
                          <td className="py-3 px-2 text-gray-600">{comp.users}</td>
                          <td className="py-3 px-2">
                            <span
                              className={`inline-block px-2 py-1 rounded text-xs font-medium ${getThreatColor(
                                comp.threat
                              )}`}
                            >
                              {comp.threat}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Positioning Map */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-medium mb-4">POSITIONING MAP</h2>
                <div className="relative h-80 border border-gray-200 rounded">
                  {/* Axes */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-px bg-gray-300"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-px bg-gray-300"></div>
                  </div>

                  {/* Labels */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs text-gray-600">BROAD</div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-gray-600">FOCUSED</div>
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-gray-600">CHEAP</div>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-600">PREMIUM</div>

                  {/* Competitors */}
                  <div className="absolute top-[20%] left-[30%] bg-[#0d5f4e]/10 px-2 py-1 rounded text-xs">
                    Notion
                  </div>
                  <div className="absolute top-[20%] right-[25%] bg-[#0d5f4e]/10 px-2 py-1 rounded text-xs">
                    Linear
                  </div>
                  <div className="absolute bottom-[20%] left-[25%] bg-[#0d5f4e]/10 px-2 py-1 rounded text-xs">
                    Todoist
                  </div>
                  <div className="absolute bottom-[30%] right-[20%] bg-[#0d5f4e]/10 px-2 py-1 rounded text-xs">
                    Motion
                  </div>

                  {/* Your Spot */}
                  <div className="absolute bottom-[25%] right-[30%] bg-[#0d5f4e] text-white px-3 py-2 rounded font-medium text-sm">
                    YOUR SPOT
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">Your ideal position is the empty quadrant</p>
              </div>
            </div>
          </div>

          {/* Right Panel - AI Intelligence */}
          <div className="col-span-3">
            <div className="space-y-4 sticky top-6">
              {/* Credibility Score */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-sm font-medium mb-3">CREDIBILITY SCORE</h3>
                <div className="text-4xl font-medium text-[#0d5f4e] mb-4">{credibilityScore.overall}/100</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">High trust:</span>
                    <span className="font-medium">{credibilityScore.high}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Medium trust:</span>
                    <span className="font-medium">{credibilityScore.medium}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Low trust:</span>
                    <span className="font-medium">{credibilityScore.low}</span>
                  </div>
                </div>
              </div>

              {/* Contradictions */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  CONTRADICTIONS ({contradictions.length})
                </h3>
                <div className="space-y-3">
                  {contradictions.map((contradiction) => (
                    <div key={contradiction.id} className="border-l-4 border-amber-500 pl-3 py-2 text-sm">
                      {contradiction.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Evidence Gaps */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#6b9d89]" />
                  EVIDENCE GAPS ({evidenceGaps.length})
                </h3>
                <div className="space-y-4">
                  {evidenceGaps.map((gap, idx) => (
                    <div key={gap.id} className="border-l-4 border-[#6b9d89] pl-3 py-2">
                      <p className="text-sm font-medium mb-2">
                        {idx + 1}. {gap.title}
                      </p>
                      <div className="bg-[#F5F3EF] rounded p-3 text-sm text-gray-700 mb-2">{gap.suggestion}</div>
                      <button className="text-sm text-[#0d5f4e] hover:underline">Run research →</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
