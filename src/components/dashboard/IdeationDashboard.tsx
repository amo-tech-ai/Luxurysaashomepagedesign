'use client';

import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Filter,
  CheckSquare,
  MoreHorizontal,
  RefreshCw,
  ChevronDown,
} from 'lucide-react';
import { Idea, IdeaCategory, MOCK_IDEAS, IDEA_CATEGORIES } from '@/lib/dashboard/ideationMockData';
import { LeftNav } from './LeftNav';
import { IdeationCard } from './IdeationCard';
import { IdeationDetailsPanel } from './IdeationDetailsPanel';
import { useToast } from './ui/Toast';
import { ToastProvider } from './ui/Toast';

export function IdeationDashboard({ onNavigate }: { onNavigate?: (route: string) => void }) {
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const [checkedIdeas, setCheckedIdeas] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<IdeaCategory | 'all'>('all');
  const [isRightPanelCollapsed, setIsRightPanelCollapsed] = useState(true); // Start collapsed
  const [ideas, setIdeas] = useState<Idea[]>(MOCK_IDEAS);

  const { showToast } = useToast();

  // Filter ideas by category
  const filteredIdeas = useMemo(() => {
    if (activeCategory === 'all') return ideas;
    return ideas.filter(idea => idea.category === activeCategory);
  }, [ideas, activeCategory]);

  // Count by category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: ideas.length };
    ideas.forEach(idea => {
      counts[idea.category] = (counts[idea.category] || 0) + 1;
    });
    return counts;
  }, [ideas]);

  const handleIdeaSelect = (idea: Idea) => {
    setSelectedIdea(idea);
    setIsRightPanelCollapsed(false); // Auto-expand when idea selected
  };

  const handleIdeaCheck = (ideaId: string, checked: boolean) => {
    const newChecked = new Set(checkedIdeas);
    if (checked) {
      newChecked.add(ideaId);
    } else {
      newChecked.delete(ideaId);
    }
    setCheckedIdeas(newChecked);
  };

  const handleConvertToTask = (idea: Idea) => {
    showToast(`"${idea.title}" converted to task successfully`, 'success');
    // Remove idea from list
    setIdeas(prev => prev.filter(i => i.id !== idea.id));
    setSelectedIdea(null);
    setIsRightPanelCollapsed(true); // Collapse after action
  };

  const handleDismiss = (idea: Idea) => {
    showToast(`"${idea.title}" dismissed`, 'info');
    // Remove idea from list
    setIdeas(prev => prev.filter(i => i.id !== idea.id));
    setSelectedIdea(null);
    setIsRightPanelCollapsed(true); // Collapse after action
  };

  const handleBulkConvert = () => {
    if (checkedIdeas.size === 0) return;
    showToast(`${checkedIdeas.size} ideas converted to tasks`, 'success');
    setIdeas(prev => prev.filter(i => !checkedIdeas.has(i.id)));
    setCheckedIdeas(new Set());
    setSelectedIdea(null);
  };

  const handleRefresh = () => {
    showToast('Scanning for new ideas...', 'info');
    // Simulate refresh - in real app would fetch from API
    setTimeout(() => {
      showToast('No new ideas found', 'success');
    }, 1500);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#FAFAF8] via-[#FAFAF8] to-[#F5F5F3]">
      {/* Left Navigation */}
      <LeftNav activeView="ideation" onNavigate={onNavigate} />

      {/* Center Panel - Ideas Feed */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-[#E8E6E1] shadow-sm">
          <div className="px-8 py-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] flex items-center justify-center text-white shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="font-serif text-3xl text-[#2D2D2D] tracking-tight">
                      Ideation
                    </h1>
                    <p className="text-sm text-[#A3A3A3]">
                      AI-generated ideas for your project
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Total Count */}
              <div className="text-right">
                <p className="text-xs text-[#A3A3A3] font-semibold uppercase tracking-wider mb-1">
                  Total Ideas
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-[#0D5F4E]">{filteredIdeas.length}</span>
                  <span className="text-sm text-[#A3A3A3]">/ {ideas.length}</span>
                </div>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeCategory === 'all'
                    ? 'bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] text-white shadow-md'
                    : 'bg-[#F5F5F3] text-[#4A4A4A] hover:bg-white'
                }`}
              >
                All <span className="ml-1.5 text-xs opacity-75">({categoryCounts.all})</span>
              </button>
              {Object.entries(IDEA_CATEGORIES).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key as IdeaCategory)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                    activeCategory === key
                      ? 'bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] text-white shadow-md'
                      : 'bg-[#F5F5F3] text-[#4A4A4A] hover:bg-white'
                  }`}
                >
                  {value.label} <span className="ml-1.5 text-xs opacity-75">({categoryCounts[key] || 0})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        {checkedIdeas.size > 0 && (
          <div className="bg-gradient-to-r from-[#0D5F4E]/5 to-[#0D5F4E]/10 border-b border-[#0D5F4E]/20 px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckSquare className="w-5 h-5 text-[#0D5F4E]" />
                <span className="text-sm font-semibold text-[#2D2D2D]">
                  {checkedIdeas.size} {checkedIdeas.size === 1 ? 'idea' : 'ideas'} selected
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleBulkConvert}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] text-white rounded-lg hover:shadow-lg hover:shadow-[#0D5F4E]/20 transition-all duration-200 text-sm font-semibold"
                >
                  Convert All to Tasks
                </button>
                <button
                  onClick={() => setCheckedIdeas(new Set())}
                  className="px-4 py-2.5 bg-white border border-[#E8E6E1] text-[#4A4A4A] rounded-lg text-sm font-medium hover:bg-[#F5F5F3] transition-all duration-200"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Actions */}
        <div className="bg-white border-b border-[#E8E6E1] px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg bg-[#F5F5F3] hover:bg-white transition-all duration-200">
              <Filter className="w-4 h-4 text-[#4A4A4A]" />
            </button>
            <span className="text-xs text-[#A3A3A3]">
              Showing {filteredIdeas.length} {filteredIdeas.length === 1 ? 'idea' : 'ideas'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              className="p-2 rounded-lg bg-white border border-[#E8E6E1] hover:border-[#0D5F4E] transition-all duration-200"
            >
              <RefreshCw className="w-4 h-4 text-[#4A4A4A]" />
            </button>
            <button className="p-2 rounded-lg bg-white border border-[#E8E6E1] hover:border-[#0D5F4E] transition-all duration-200">
              <MoreHorizontal className="w-4 h-4 text-[#4A4A4A]" />
            </button>
          </div>
        </div>

        {/* Ideas List */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
          {filteredIdeas.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-[#D1D5DB] mb-4 text-6xl animate-gentle-float">💡</div>
              <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">No ideas in this category</h3>
              <p className="text-sm text-[#A3A3A3] max-w-md text-center">
                {activeCategory === 'all'
                  ? 'All ideas have been processed. Check back later for new suggestions.'
                  : `No ${IDEA_CATEGORIES[activeCategory as IdeaCategory]?.label} ideas available right now.`}
              </p>
            </div>
          ) : (
            <div className="space-y-4 max-w-5xl">
              {filteredIdeas.map((idea) => (
                <IdeationCard
                  key={idea.id}
                  idea={idea}
                  isSelected={selectedIdea?.id === idea.id}
                  isChecked={checkedIdeas.has(idea.id)}
                  onSelect={handleIdeaSelect}
                  onCheck={handleIdeaCheck}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Panel - Intelligence */}
      <IdeationDetailsPanel
        idea={selectedIdea}
        onClose={() => {
          setSelectedIdea(null);
          setIsRightPanelCollapsed(true); // Collapse when closing
        }}
        onConvertToTask={handleConvertToTask}
        onDismiss={handleDismiss}
        isCollapsed={isRightPanelCollapsed}
        onToggleCollapse={() => setIsRightPanelCollapsed(!isRightPanelCollapsed)}
      />
    </div>
  );
}

// Wrap with toast provider for the page
export default function IdeationDashboardWithToast({ onNavigate }: { onNavigate?: (route: string) => void }) {
  return (
    <ToastProvider>
      <IdeationDashboard onNavigate={onNavigate} />
    </ToastProvider>
  );
}