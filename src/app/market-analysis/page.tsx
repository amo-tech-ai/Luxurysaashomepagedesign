/**
 * Market Analysis Page
 * 
 * Comprehensive market analysis report with 17 sections:
 * TAM/SAM/SOM, competitive landscape, GTM strategy, revenue models, risks
 */

import { useState } from 'react';
import {
  Home,
  CheckCircle2,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  DollarSign,
  Shield,
  Map,
  Lightbulb,
  AlertTriangle,
  Clock,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Download,
  Share2,
  FileText,
  Zap,
  Award,
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ScatterChart, Scatter, ZAxis, Legend } from 'recharts';
import { marketAnalysisData } from './components/mockData';

interface MarketAnalysisPageProps {
  onNavigate?: (page: string) => void;
}

export default function MarketAnalysisPage({ onNavigate }: MarketAnalysisPageProps) {
  const [expandedCompetitors, setExpandedCompetitors] = useState(false);
  const [expandedSources, setExpandedSources] = useState(false);
  const [expandedOpportunities, setExpandedOpportunities] = useState(false);
  const [expandedRegulations, setExpandedRegulations] = useState(false);

  const data = marketAnalysisData;

  // Colors for charts
  const COLORS = {
    primary: '#0D5F4E',
    secondary: '#6B9D89',
    accent: '#0E3E1B',
    light: '#C1E8D0',
  };

  const getStatusColor = (status: string) => {
    if (status === 'complete') return 'bg-[#0D5F4E] text-white';
    if (status === 'in-progress') return 'bg-[#FFB84D] text-white';
    return 'bg-[#A3A3A3] text-white';
  };

  const getEffortColor = (effort: string) => {
    if (effort === 'high') return 'bg-[#DC2626] text-white';
    if (effort === 'medium') return 'bg-[#FFB84D] text-white';
    return 'bg-[#6B9D89] text-white';
  };

  const getImpactColor = (impact: string) => {
    if (impact === 'high') return 'bg-[#0D5F4E] text-white';
    if (impact === 'medium') return 'bg-[#FFB84D] text-white';
    return 'bg-[#A3A3A3] text-white';
  };

  const getFitColor = (fit: string) => {
    if (fit === 'high') return 'bg-[#0D5F4E] text-white';
    if (fit === 'medium') return 'bg-[#FFB84D] text-white';
    return 'bg-[#A3A3A3] text-white';
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header / Status Bar */}
      <header className="bg-white border-b-2 border-[#E8E6E1] sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-6">
              {onNavigate && (
                <button
                  onClick={() => onNavigate('home-v5')}
                  className="text-[#0D5F4E] hover:text-[#0a4a3c] transition-colors"
                >
                  <Home className="w-5 h-5" />
                </button>
              )}
              <h1 className="font-serif text-3xl text-[#2D2D2D]">Market Analysis</h1>
              <div className={`px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 ${getStatusColor(data.status)}`}>
                <CheckCircle2 className="w-4 h-4" />
                Complete
              </div>
              <div className="text-sm text-[#A3A3A3]">
                Step {data.step.current}/{data.step.total}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-sm text-[#0D5F4E] hover:bg-[#F5F3EF] rounded-lg transition-colors flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="px-4 py-2 text-sm text-[#0D5F4E] hover:bg-[#F5F3EF] rounded-lg transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>

          {/* KPI Chips */}
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-[#F5F3EF] rounded-lg">
              <div className="text-2xl font-light text-[#2D2D2D]">{data.counts.competitors}</div>
              <div className="text-xs text-[#A3A3A3]">Competitors</div>
            </div>
            <div className="px-4 py-2 bg-[#F5F3EF] rounded-lg">
              <div className="text-2xl font-light text-[#2D2D2D]">{data.counts.sources}</div>
              <div className="text-xs text-[#A3A3A3]">Sources</div>
            </div>
            <div className="px-4 py-2 bg-[#F5F3EF] rounded-lg">
              <div className="text-2xl font-light text-[#2D2D2D]">{data.counts.risks}</div>
              <div className="text-xs text-[#A3A3A3]">Risks</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Summary Metrics Row */}
        <section className="space-y-6">
          {/* TAM/SAM/SOM */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[#E8E6E1] rounded-lg p-6 text-center">
              <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-2">TAM</div>
              <div className="text-4xl font-light text-[#0D5F4E] mb-2">{data.tam}</div>
              <div className="text-sm text-[#696969]">Total Addressable Market</div>
            </div>
            <div className="bg-white border-2 border-[#E8E6E1] rounded-lg p-6 text-center">
              <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-2">SAM</div>
              <div className="text-4xl font-light text-[#0D5F4E] mb-2">{data.sam}</div>
              <div className="text-sm text-[#696969]">Serviceable Addressable Market</div>
            </div>
            <div className="bg-white border-2 border-[#E8E6E1] rounded-lg p-6 text-center">
              <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-2">SOM</div>
              <div className="text-4xl font-light text-[#0D5F4E] mb-2">{data.som}</div>
              <div className="text-sm text-[#696969]">Serviceable Obtainable Market</div>
            </div>
          </div>

          {/* Top Opportunity/Risk/Revenue */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[#0D5F4E] rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#0D5F4E]" />
                <div className="text-xs uppercase tracking-wider text-[#0D5F4E] font-medium">Top Opportunity</div>
              </div>
              <p className="text-[#2D2D2D]">{data.topOpportunity}</p>
            </div>
            <div className="bg-white border-2 border-[#FFB84D] rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-[#FFB84D]" />
                <div className="text-xs uppercase tracking-wider text-[#FFB84D] font-medium">Top Risk</div>
              </div>
              <p className="text-[#2D2D2D]">{data.topRisk}</p>
            </div>
            <div className="bg-white border-2 border-[#E8E6E1] rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-5 h-5 text-[#696969]" />
                <div className="text-xs uppercase tracking-wider text-[#696969] font-medium">Revenue Model</div>
              </div>
              <p className="text-[#2D2D2D]">{data.revenueModel}</p>
            </div>
          </div>
        </section>

        {/* Market Overview & Size */}
        <section className="bg-white border-2 border-[#E8E6E1] rounded-lg p-8">
          <h2 className="font-serif text-2xl text-[#2D2D2D] mb-6">Market Overview & Size</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-[#A3A3A3] mb-4">Market Size</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#F5F3EF] rounded-lg">
                  <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-1">TAM</div>
                  <div className="text-2xl font-light text-[#0D5F4E]">{data.tam}</div>
                  <div className="text-sm text-[#696969]">Total Addressable Market</div>
                </div>
                <div className="p-4 bg-[#F5F3EF] rounded-lg">
                  <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-1">SAM</div>
                  <div className="text-2xl font-light text-[#0D5F4E]">{data.sam}</div>
                  <div className="text-sm text-[#696969]">Serviceable Addressable Market</div>
                </div>
                <div className="p-4 bg-[#F5F3EF] rounded-lg">
                  <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-1">SOM</div>
                  <div className="text-2xl font-light text-[#0D5F4E]">{data.som}</div>
                  <div className="text-sm text-[#696969]">Serviceable Obtainable Market</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-[#A3A3A3] mb-4">Growth & Regional</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#F5F3EF] rounded-lg">
                  <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-1">CAGR</div>
                  <div className="text-3xl font-light text-[#0D5F4E]">{data.cagr}</div>
                  <div className="text-sm text-[#696969]">Compound Annual Growth Rate</div>
                </div>
                <div className="p-4 bg-[#F5F3EF] rounded-lg">
                  <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-1">Europe Market</div>
                  <div className="text-sm text-[#2D2D2D] mt-2">{data.europeMarket}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Breakdown & Target Audience (Two Column) */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Market Breakdown */}
          <section className="bg-white border-2 border-[#E8E6E1] rounded-lg p-8">
            <h2 className="font-serif text-2xl text-[#2D2D2D] mb-6">Market Breakdown by Segment</h2>
            
            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.marketBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill={COLORS.primary}
                    paddingAngle={2}
                    dataKey="percentage"
                  >
                    {data.marketBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? COLORS.primary : COLORS.secondary} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              {data.marketBreakdown.map((segment, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: i === 0 ? COLORS.primary : COLORS.secondary }} />
                    <span className="text-sm text-[#2D2D2D]">{segment.segment}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-[#2D2D2D]">{segment.value}</div>
                    <div className="text-xs text-[#A3A3A3]">{segment.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Target Audience */}
          <section className="bg-white border-2 border-[#E8E6E1] rounded-lg p-8">
            <h2 className="font-serif text-2xl text-[#2D2D2D] mb-6">Target Audience</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-[#0D5F4E] font-medium mb-3">Demographics</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-1">Primary</div>
                    <p className="text-[#2D2D2D]">{data.demographics.description}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-1">Age Range</div>
                    <p className="text-[#2D2D2D]">{data.demographics.age}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-1">Industries</div>
                    <p className="text-[#2D2D2D]">{data.demographics.industries}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-1">Gender</div>
                    <p className="text-[#2D2D2D]">{data.demographics.gender}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#E8E6E1] pt-6">
                <h3 className="text-sm uppercase tracking-wider text-[#0D5F4E] font-medium mb-3">Psychographics</h3>
                <div>
                  <div className="text-base font-medium text-[#2D2D2D] mb-2">{data.psychographics.title}</div>
                  <p className="text-sm text-[#696969]">{data.psychographics.description}</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Market Trends */}
        <section className="bg-white border-2 border-[#E8E6E1] rounded-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl text-[#2D2D2D]">Market Trends</h2>
            <span className="text-sm text-[#A3A3A3]">{data.trends.length} trends</span>
          </div>

          <div className="space-y-4">
            {data.trends.map((trend) => (
              <div key={trend.id} className="p-6 bg-[#F5F3EF] rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0D5F4E] text-white flex items-center justify-center text-sm font-medium">
                      #{trend.id}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      trend.timeframe === 'short' ? 'bg-[#FFB84D] text-white' :
                      trend.timeframe === 'medium' ? 'bg-[#6B9D89] text-white' :
                      'bg-[#0D5F4E] text-white'
                    }`}>
                      {trend.timeframe.charAt(0).toUpperCase() + trend.timeframe.slice(1)}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getImpactColor(trend.impact)}`}>
                    Impact: {trend.impact.charAt(0).toUpperCase() + trend.impact.slice(1)}
                  </span>
                </div>
                <p className="text-[#2D2D2D]">{trend.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Benchmarks */}
        <section className="bg-white border-2 border-[#E8E6E1] rounded-lg p-8">
          <h2 className="font-serif text-2xl text-[#2D2D2D] mb-6">Industry Benchmarks</h2>
          
          <div className="h-64 mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { name: 'CAC', value: data.benchmarks.cac, max: 500 },
                  { name: 'LTV', value: data.benchmarks.ltv, max: 1500 },
                  { name: 'LTV/CAC', value: data.benchmarks.ltvCac, max: 10 },
                ]}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E8E6E1" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <RechartsTooltip />
                <Bar dataKey="value" fill={COLORS.primary} radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[#F5F3EF] rounded-lg">
              <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-2">CAC</div>
              <div className="text-3xl font-light text-[#0D5F4E] mb-1">${data.benchmarks.cac}</div>
              <div className="text-xs text-[#696969]">Customer Acquisition Cost</div>
            </div>
            <div className="text-center p-6 bg-[#F5F3EF] rounded-lg">
              <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-2">LTV</div>
              <div className="text-3xl font-light text-[#0D5F4E] mb-1">${data.benchmarks.ltv}</div>
              <div className="text-xs text-[#696969]">Lifetime Value</div>
            </div>
            <div className="text-center p-6 bg-[#F5F3EF] rounded-lg">
              <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-2">LTV/CAC</div>
              <div className="text-3xl font-light text-[#0D5F4E] mb-1">{data.benchmarks.ltvCac}:1</div>
              <div className="text-xs text-[#696969]">Ratio</div>
            </div>
          </div>
        </section>

        {/* Competitive Positioning Matrix */}
        <section className="bg-white border-2 border-[#E8E6E1] rounded-lg p-8">
          <h2 className="font-serif text-2xl text-[#2D2D2D] mb-6">Competitive Positioning Matrix</h2>
          
          <div className="h-96 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid stroke="#E8E6E1" />
                <XAxis type="number" dataKey="price" name="Price" domain={[0, 100]} label={{ value: 'Price →', position: 'bottom' }} />
                <YAxis type="number" dataKey="quality" name="Quality" domain={[0, 100]} label={{ value: 'Quality →', angle: -90, position: 'left' }} />
                <ZAxis range={[100, 100]} />
                <RechartsTooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter
                  name="Competitors"
                  data={data.competitors.map(c => c.position)}
                  fill={COLORS.secondary}
                />
                <Scatter
                  name="Your Position"
                  data={[{ price: 60, quality: 75 }]}
                  fill={COLORS.primary}
                  shape="star"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#6B9D89]" />
              <span className="text-[#696969]">Competitor</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#0D5F4E]" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
              <span className="text-[#696969]">Your Position</span>
            </div>
          </div>
        </section>

        {/* Direct Competitors */}
        <section className="bg-white border-2 border-[#E8E6E1] rounded-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl text-[#2D2D2D]">Direct Competitors</h2>
            <span className="text-sm text-[#A3A3A3]">{data.competitors.length} competitors</span>
          </div>

          <div className="space-y-6">
            {data.competitors.slice(0, expandedCompetitors ? undefined : 3).map((competitor, i) => (
              <div key={i} className="p-6 border-2 border-[#E8E6E1] rounded-lg hover:border-[#0D5F4E] transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-medium text-[#2D2D2D]">{competitor.name}</h3>
                  <a
                    href={competitor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0D5F4E] hover:text-[#0a4a3c] flex items-center gap-1 text-sm"
                  >
                    Visit website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-[#A3A3A3]">Market Share:</span>{' '}
                    <span className="text-[#2D2D2D] font-medium">{competitor.marketShare}</span>
                  </div>
                  <div className="w-px h-4 bg-[#E8E6E1]" />
                  <div>
                    <span className="text-[#A3A3A3]">Stage:</span>{' '}
                    <span className="text-[#2D2D2D] font-medium">{competitor.stage}</span>
                  </div>
                  <div className="w-px h-4 bg-[#E8E6E1]" />
                  <div>
                    <span className="text-[#A3A3A3]">Funding:</span>{' '}
                    <span className="text-[#2D2D2D] font-medium">{competitor.funding}</span>
                  </div>
                </div>

                <div className="p-4 bg-[#E8F5F1] border-l-4 border-[#0D5F4E] rounded mb-4">
                  <div className="text-xs uppercase tracking-wider text-[#0D5F4E] font-medium mb-2">YOUR OPPORTUNITY</div>
                  <p className="text-[#2D2D2D]">{competitor.opportunity}</p>
                </div>

                <div className="mb-4">
                  <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-2">Pricing</div>
                  <p className="text-[#2D2D2D]">{competitor.pricing}</p>
                </div>

                <div className="mb-4">
                  <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-2">Products</div>
                  <div className="flex flex-wrap gap-2">
                    {competitor.products.map((product, j) => (
                      <span key={j} className="px-3 py-1 bg-[#F5F3EF] text-[#2D2D2D] rounded-full text-sm">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#0D5F4E] font-medium mb-3">Strengths</div>
                    <ul className="space-y-2">
                      {competitor.strengths.map((strength, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#2D2D2D]">
                          <CheckCircle2 className="w-4 h-4 text-[#0D5F4E] flex-shrink-0 mt-0.5" />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#DC2626] font-medium mb-3">Weaknesses</div>
                    <ul className="space-y-2">
                      {competitor.weaknesses.map((weakness, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#2D2D2D]">
                          <AlertTriangle className="w-4 h-4 text-[#DC2626] flex-shrink-0 mt-0.5" />
                          {weakness}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {!expandedCompetitors && data.competitors.length > 3 && (
              <button
                onClick={() => setExpandedCompetitors(true)}
                className="w-full py-3 text-[#0D5F4E] hover:bg-[#F5F3EF] rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Show {data.competitors.length - 3} more competitors
                <ChevronDown className="w-4 h-4" />
              </button>
            )}

            {expandedCompetitors && (
              <button
                onClick={() => setExpandedCompetitors(false)}
                className="w-full py-3 text-[#0D5F4E] hover:bg-[#F5F3EF] rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Show less
                <ChevronUp className="w-4 h-4" />
              </button>
            )}
          </div>
        </section>

        {/* Strategic Partners */}
        <section className="bg-white border-2 border-[#E8E6E1] rounded-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl text-[#2D2D2D]">Strategic Partners</h2>
            <span className="text-sm text-[#A3A3A3]">{data.partners.length} partners</span>
          </div>

          <div className="space-y-4">
            {data.partners.map((partner, i) => (
              <div key={i} className="p-6 bg-[#F5F3EF] rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-medium text-[#2D2D2D]">{partner.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    partner.type === 'strategic' ? 'bg-[#0D5F4E] text-white' :
                    partner.type === 'technology' ? 'bg-[#6B9D89] text-white' :
                    'bg-[#A3A3A3] text-white'
                  }`}>
                    {partner.type.charAt(0).toUpperCase() + partner.type.slice(1)}
                  </span>
                </div>
                <p className="text-[#2D2D2D] mb-3">{partner.description}</p>
                <div className="flex items-center gap-2 text-sm text-[#696969]">
                  <Clock className="w-4 h-4" />
                  Timeline: {partner.timeline}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Go-to-Market Strategy */}
        <section className="bg-white border-2 border-[#E8E6E1] rounded-lg p-8">
          <h2 className="font-serif text-2xl text-[#2D2D2D] mb-6">Go-to-Market Strategy</h2>

          <div className="space-y-8">
            {/* Distribution Channels */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-[#A3A3A3] mb-4">Distribution Channels</h3>
              <div className="space-y-4">
                {data.gtmChannels.map((channel, i) => (
                  <div key={i} className="p-6 border-2 border-[#E8E6E1] rounded-lg">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h4 className="text-lg font-medium text-[#2D2D2D]">{channel.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs ${getEffortColor(channel.effort)}`}>
                        {channel.effort.charAt(0).toUpperCase() + channel.effort.slice(1)} Effort
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs ${getImpactColor(channel.impact)}`}>
                        {channel.impact.charAt(0).toUpperCase() + channel.impact.slice(1)} Impact
                      </span>
                    </div>
                    <p className="text-[#2D2D2D] mb-4">{channel.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#696969]">
                      <div>Cost: <span className="text-[#2D2D2D] font-medium">{channel.cost}</span></div>
                      <div className="w-px h-4 bg-[#E8E6E1]" />
                      <div>Time: <span className="text-[#2D2D2D] font-medium">{channel.time}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Early Adopter Segments */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-[#A3A3A3] mb-4">Early Adopter Segments</h3>
              <ul className="space-y-2">
                {data.earlyAdopters.map((segment, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0D5F4E] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#2D2D2D]">{segment}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Launch Strategy */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-[#A3A3A3] mb-4">Launch Strategy</h3>
              <p className="text-[#2D2D2D] leading-relaxed">{data.launchStrategy}</p>
            </div>
          </div>
        </section>

        {/* Implementation Roadmap */}
        <section className="bg-white border-2 border-[#E8E6E1] rounded-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl text-[#2D2D2D]">Implementation Roadmap</h2>
            <span className="text-sm text-[#A3A3A3]">{data.phases.length} phases</span>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#E8E6E1]" />

            <div className="space-y-8">
              {data.phases.map((phase, i) => (
                <div key={i} className="relative pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-[#0D5F4E] border-4 border-white" />

                  <div className="p-6 bg-[#F5F3EF] rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-medium text-[#2D2D2D]">{phase.name}</h3>
                      <div className="text-right">
                        <div className="text-sm text-[#696969]">{phase.duration}</div>
                        <div className="text-lg font-medium text-[#0D5F4E]">{phase.budget}</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-2">Activities</div>
                        <ul className="space-y-1">
                          {phase.activities.map((activity, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-[#2D2D2D]">
                              <div className="w-1.5 h-1.5 bg-[#0D5F4E] rounded-full mt-1.5 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-[#A3A3A3] mb-2">Milestones</div>
                        <ul className="space-y-1">
                          {phase.milestones.map((milestone, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-[#2D2D2D]">
                              <CheckCircle2 className="w-4 h-4 text-[#0D5F4E] flex-shrink-0 mt-0.5" />
                              {milestone}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Budget Breakdown & Revenue Models (Two Column) */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Budget Breakdown */}
          <section className="bg-white border-2 border-[#E8E6E1] rounded-lg p-8">
            <h2 className="font-serif text-2xl text-[#2D2D2D] mb-6">Budget Breakdown</h2>
            <div className="text-center mb-6">
              <div className="text-3xl font-light text-[#0D5F4E]">{data.budget.total}</div>
            </div>

            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.budget.breakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill={COLORS.primary}
                    paddingAngle={2}
                    dataKey="percentage"
                    label={(entry) => `${entry.percentage}%`}
                  >
                    {data.budget.breakdown.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={[COLORS.primary, COLORS.secondary, COLORS.accent, COLORS.light][index % 4]}
                      />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              {data.budget.breakdown.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: [COLORS.primary, COLORS.secondary, COLORS.accent, COLORS.light][i % 4] }}
                    />
                    <span className="text-sm text-[#2D2D2D]">{item.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-[#2D2D2D]">{item.amount}</div>
                    <div className="text-xs text-[#A3A3A3]">{item.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Revenue Models */}
          <section className="bg-white border-2 border-[#E8E6E1] rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl text-[#2D2D2D]">Revenue Models</h2>
              <span className="text-sm text-[#A3A3A3]">{data.revenueModels.length}</span>
            </div>

            <div className="space-y-4">
              {data.revenueModels.map((model, i) => (
                <div key={i} className="p-4 border-2 border-[#E8E6E1] rounded-lg">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-lg font-medium text-[#2D2D2D]">{model.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs ${getFitColor(model.fit)}`}>
                      {model.fit.charAt(0).toUpperCase() + model.fit.slice(1)} Fit
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      model.complexity === 'low' ? 'bg-[#6B9D89] text-white' :
                      model.complexity === 'medium' ? 'bg-[#FFB84D] text-white' :
                      'bg-[#DC2626] text-white'
                    }`}>
                      {model.complexity.charAt(0).toUpperCase() + model.complexity.slice(1)} Complexity
                    </span>
                  </div>
                  <p className="text-sm text-[#2D2D2D] mb-3">{model.description}</p>
                  <div className="text-xs text-[#696969]">
                    Timeline: {model.timeline}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Risk Assessment */}
        <section className="bg-white border-2 border-[#E8E6E1] rounded-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl text-[#2D2D2D]">Risk Assessment</h2>
            <span className="text-sm text-[#A3A3A3]">{data.risks.length} risks</span>
          </div>

          <div className="space-y-4">
            {data.risks.map((risk, i) => (
              <div key={i} className="p-6 border-2 border-[#FFB84D] bg-[#FFF4E6] rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-medium text-[#2D2D2D]">{risk.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs ${getImpactColor(risk.impact)}`}>
                    {risk.impact.charAt(0).toUpperCase() + risk.impact.slice(1)} Impact
                  </span>
                </div>
                <p className="text-sm text-[#696969] mb-4">{risk.impactDescription}</p>
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-[#0D5F4E] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#0D5F4E] font-medium mb-1">Mitigation</div>
                    <p className="text-sm text-[#2D2D2D]">{risk.mitigation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Sources */}
        <section className="bg-white border-2 border-[#E8E6E1] rounded-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl text-[#2D2D2D]">Research Sources</h2>
            <span className="text-sm text-[#A3A3A3]">{data.sources.length} sources</span>
          </div>

          <div className="space-y-3">
            {data.sources.slice(0, expandedSources ? undefined : 5).map((source, i) => (
              <a
                key={i}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 hover:bg-[#F5F3EF] rounded-lg transition-colors group"
              >
                <FileText className="w-5 h-5 text-[#696969] flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-[#2D2D2D] group-hover:text-[#0D5F4E] font-medium mb-1">{source.title}</div>
                  <div className="text-sm text-[#A3A3A3]">
                    {source.domain} | {source.type}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#0D5F4E] flex-shrink-0 mt-1" />
              </a>
            ))}
          </div>

          {!expandedSources && data.sources.length > 5 && (
            <button
              onClick={() => setExpandedSources(true)}
              className="w-full mt-4 py-3 text-[#0D5F4E] hover:bg-[#F5F3EF] rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Show all {data.sources.length} sources
              <ChevronDown className="w-4 h-4" />
            </button>
          )}

          {expandedSources && (
            <button
              onClick={() => setExpandedSources(false)}
              className="w-full mt-4 py-3 text-[#0D5F4E] hover:bg-[#F5F3EF] rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Show less
              <ChevronUp className="w-4 h-4" />
            </button>
          )}
        </section>

        {/* Bottom CTA Bar */}
        <section className="bg-gradient-to-r from-[#0E3E1B] to-[#0D5F4E] text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-light mb-2">Ready for your curated Business Plan?</h2>
          <p className="text-white/80 mb-6">
            Comprehensive strategy to take your startup from idea to funding
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-white text-[#0D5F4E] font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Award className="w-5 h-5" />
              Upgrade
            </button>
            <button className="px-8 py-3 bg-[#6B9D89] hover:bg-[#5a8778] text-white font-medium rounded-lg transition-colors flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Generate Plan
              <span className="ml-2 px-2 py-0.5 bg-white/20 rounded text-xs">200</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
