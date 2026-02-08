'use client';

import { useState } from 'react';
import { Plus, TrendingUp, AlertCircle, Lightbulb } from 'lucide-react';

interface Idea {
  id: string;
  title: string;
  notes?: string;
  cluster?: string;
  source: 'chat' | 'validation' | 'founder';
}

interface Cluster {
  name: string;
  ideas: Idea[];
  impact: 'HIGH' | 'MEDIUM' | 'LOW';
  novelty: 'HIGH' | 'MEDIUM' | 'LOW';
  color: string;
  badge?: 'best-bet' | 'scope-creep' | 'adjacent';
}

export default function IdeaWall() {
  const [filters, setFilters] = useState({
    theme: 'all',
    source: 'all',
    impact: 'all',
  });

  const [sortBy, setSortBy] = useState<'newest' | 'ai-ranking' | 'votes'>('ai-ranking');

  const [clusters] = useState<Cluster[]>([
    {
      name: '90-Day Planning',
      impact: 'HIGH',
      novelty: 'HIGH',
      color: 'bg-[#DCF9E3]',
      badge: 'best-bet',
      ideas: [
        { id: '1', title: 'AI-generate 90-day plan from chat', cluster: '90-Day Planning', source: 'chat' },
        { id: '2', title: 'Editable sprint goals', cluster: '90-Day Planning', source: 'validation' },
        { id: '3', title: 'Daily task priorities list', cluster: '90-Day Planning', source: 'founder' },
        { id: '4', title: 'Weekly progress report', cluster: '90-Day Planning', source: 'founder' },
        { id: '5', title: 'Pivot trigger alerts', cluster: '90-Day Planning', source: 'validation' },
      ],
    },
    {
      name: 'Social & Community',
      impact: 'MEDIUM',
      novelty: 'LOW',
      color: 'bg-[#F5F3EF]',
      badge: 'scope-creep',
      ideas: [
        { id: '6', title: 'Share plan with co-founder', cluster: 'Social & Community', source: 'founder' },
        { id: '7', title: 'Founder leaderboard and streaks', cluster: 'Social & Community', source: 'founder' },
        {
          id: '8',
          title: 'Community challenges (build in public)',
          cluster: 'Social & Community',
          source: 'founder',
        },
        { id: '9', title: 'Mentor matching', cluster: 'Social & Community', source: 'founder' },
      ],
    },
    {
      name: 'Analytics',
      impact: 'MEDIUM',
      novelty: 'MEDIUM',
      color: 'bg-[#FBF9FA]',
      ideas: [
        { id: '10', title: 'Revenue tracking', cluster: 'Analytics', source: 'founder' },
        { id: '11', title: 'Competitor tracking', cluster: 'Analytics', source: 'validation' },
        { id: '12', title: 'Sprint velocity chart', cluster: 'Analytics', source: 'founder' },
        { id: '13', title: 'Time tracking', cluster: 'Analytics', source: 'founder' },
        { id: '14', title: 'Habit score', cluster: 'Analytics', source: 'founder' },
      ],
    },
    {
      name: 'Integrations',
      impact: 'LOW',
      novelty: 'LOW',
      color: 'bg-gray-50',
      ideas: [
        { id: '15', title: 'Notion sync', cluster: 'Integrations', source: 'founder' },
        { id: '16', title: 'Linear integration', cluster: 'Integrations', source: 'founder' },
        { id: '17', title: 'Slack notifications', cluster: 'Integrations', source: 'founder' },
      ],
    },
  ]);

  const [unclustered] = useState<Idea[]>([
    { id: '18', title: 'Dark mode', source: 'founder' },
    { id: '19', title: 'Mobile app', source: 'founder' },
  ]);

  const totalIdeas = clusters.reduce((sum, cluster) => sum + cluster.ideas.length, 0) + unclustered.length;

  const sources = {
    chat: clusters.reduce((sum, c) => sum + c.ideas.filter((i) => i.source === 'chat').length, 0),
    validation: clusters.reduce((sum, c) => sum + c.ideas.filter((i) => i.source === 'validation').length, 0),
    founder: clusters.reduce((sum, c) => sum + c.ideas.filter((i) => i.source === 'founder').length, 0) + unclustered.length,
  };

  const getImpactColor = (impact: string) => {
    if (impact === 'HIGH') return 'text-[#3B5F52]';
    if (impact === 'MEDIUM') return 'text-gray-600';
    return 'text-gray-500';
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] p-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl mb-2">Idea Wall</h1>
          <p className="text-gray-600">Brainstorm freely. AI will organize.</p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Panel - Filters & Stats */}
          <div className="col-span-3">
            <div className="bg-[#F5F3EF] rounded-lg p-6 sticky top-6">
              {/* Stats */}
              <div className="mb-6">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ideas:</span>
                    <span className="font-medium">{totalIdeas}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Clusters:</span>
                    <span className="font-medium">{clusters.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Unclustered:</span>
                    <span className="font-medium">{unclustered.length}</span>
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div className="mb-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Theme:</label>
                  <select
                    value={filters.theme}
                    onChange={(e) => setFilters({ ...filters, theme: e.target.value })}
                    className="w-full p-2 text-sm border border-gray-300 rounded"
                  >
                    <option value="all">All</option>
                    {clusters.map((cluster) => (
                      <option key={cluster.name} value={cluster.name}>
                        {cluster.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Source:</label>
                  <select
                    value={filters.source}
                    onChange={(e) => setFilters({ ...filters, source: e.target.value })}
                    className="w-full p-2 text-sm border border-gray-300 rounded"
                  >
                    <option value="all">All</option>
                    <option value="chat">Chat</option>
                    <option value="validation">Validation</option>
                    <option value="founder">Founder</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Impact:</label>
                  <select
                    value={filters.impact}
                    onChange={(e) => setFilters({ ...filters, impact: e.target.value })}
                    className="w-full p-2 text-sm border border-gray-300 rounded"
                  >
                    <option value="all">All</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>

              {/* Sort by */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Sort by:</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="sort"
                      checked={sortBy === 'newest'}
                      onChange={() => setSortBy('newest')}
                      className="text-[#0d5f4e]"
                    />
                    <span className="text-sm">Newest</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="sort"
                      checked={sortBy === 'ai-ranking'}
                      onChange={() => setSortBy('ai-ranking')}
                      className="text-[#0d5f4e]"
                    />
                    <span className="text-sm">AI ranking</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="sort"
                      checked={sortBy === 'votes'}
                      onChange={() => setSortBy('votes')}
                      className="text-[#0d5f4e]"
                    />
                    <span className="text-sm">Votes</span>
                  </label>
                </div>
              </div>

              {/* Sources */}
              <div className="border-t border-gray-300 pt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">SOURCES</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Chat intake:</span>
                    <span className="font-medium">{sources.chat}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Validation report:</span>
                    <span className="font-medium">{sources.validation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Founder added:</span>
                    <span className="font-medium">{sources.founder}</span>
                  </div>
                </div>
              </div>

              {/* Add New Idea */}
              <div className="border-t border-gray-300 pt-6 mt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">ADD NEW IDEA</h3>
                <input
                  type="text"
                  placeholder="Title:"
                  className="w-full p-2 text-sm border border-gray-300 rounded mb-2"
                />
                <textarea
                  placeholder="Notes:"
                  className="w-full p-2 text-sm border border-gray-300 rounded resize-none"
                  rows={3}
                />
                <button className="mt-2 text-sm text-[#0d5f4e] hover:underline flex items-center gap-1">
                  <Plus className="w-4 h-4" />
                  Add to wall
                </button>
              </div>
            </div>
          </div>

          {/* Center Panel - Idea Clusters */}
          <div className="col-span-6">
            <div className="space-y-6">
              {clusters.map((cluster) => (
                <div key={cluster.name} className="bg-white rounded-lg border border-gray-200 p-6">
                  {/* Cluster Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-medium">
                        {cluster.name} ({cluster.ideas.length})
                      </h2>
                      {cluster.badge === 'best-bet' && (
                        <span className="px-3 py-1 bg-[#0d5f4e] text-white text-xs font-medium rounded">
                          BEST BET
                        </span>
                      )}
                      {cluster.badge === 'scope-creep' && (
                        <span className="px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded">
                          SCOPE CREEP
                        </span>
                      )}
                      {cluster.badge === 'adjacent' && (
                        <span className="px-3 py-1 bg-[#6b9d89] text-white text-xs font-medium rounded">
                          ADJACENT
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Ideas Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {cluster.ideas.map((idea) => (
                      <div
                        key={idea.id}
                        className={`${cluster.color} p-4 rounded shadow-sm hover:shadow-md transition-shadow cursor-move`}
                        style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
                      >
                        <p className="text-sm font-medium">{idea.title}</p>
                        {idea.notes && <p className="text-xs text-gray-600 mt-2">{idea.notes}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Unclustered */}
              {unclustered.length > 0 && (
                <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-6">
                  <h2 className="text-xl font-medium mb-4">UNCLUSTERED ({unclustered.length})</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {unclustered.map((idea) => (
                      <div
                        key={idea.id}
                        className="bg-gray-50 p-4 rounded shadow-sm hover:shadow-md transition-shadow cursor-move"
                      >
                        <p className="text-sm font-medium">{idea.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - AI Strategist */}
          <div className="col-span-3">
            <div className="space-y-4 sticky top-6">
              {/* Themes Found */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-sm font-medium mb-3">THEMES FOUND: {clusters.length}</h3>
                <div className="space-y-3">
                  {clusters.map((cluster, idx) => (
                    <div key={cluster.name} className="text-sm">
                      <div className="font-medium mb-1">
                        {idx + 1}. {cluster.name} ({cluster.ideas.length})
                      </div>
                      <div className="text-xs text-gray-600 space-y-0.5">
                        <div className={getImpactColor(cluster.impact)}>Impact: {cluster.impact}</div>
                        <div className={getImpactColor(cluster.novelty)}>Novelty: {cluster.novelty}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best Bet */}
              <div className="bg-[#F5F3EF] rounded-lg p-6">
                <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#0d5f4e]" />
                  BEST BET FOR MVP
                </h3>
                <p className="text-sm text-gray-700">
                  "90-Day Planning" is your core value. Every other cluster is a distraction until this works. Build
                  this cluster first.
                </p>
              </div>

              {/* Scope Creep Warning */}
              <div className="bg-white rounded-lg border border-amber-500 p-6">
                <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  SCOPE CREEP WARNING
                </h3>
                <p className="text-sm text-gray-700">
                  "The 'Social & Community' cluster has 4 ideas but none of them validate your core problem (planning
                  paralysis). Defer to v2."
                </p>
              </div>

              {/* Adjacent Plays */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-[#6b9d89]" />
                  ADJACENT PLAYS
                </h3>
                <p className="text-sm text-gray-700">
                  "Consider: AI meeting prep for founders. Same ICP, same AI capability, different use case. Could be a
                  v2 feature or a separate product."
                </p>
              </div>

              {/* CTA */}
              <button className="w-full py-3 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0a4a3c] transition-colors">
                Define MVP scope →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}