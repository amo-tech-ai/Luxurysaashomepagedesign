'use client';

import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Feature } from '@/types/dashboard';
import { MOCK_FEATURES } from '@/lib/dashboard/mockData';
import { LeftNav } from './LeftNav';
import { KanbanColumn } from './KanbanColumn';
import { FeatureCard } from './FeatureCard';
import { EmptyState } from './ui/EmptyState';
import { Tag } from './ui/Tag';

export function RoadmapContainer({ onNavigate }: { onNavigate?: (route: string) => void }) {
  const [features] = useState<Feature[]>(MOCK_FEATURES);
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const underReviewFeatures = features.filter(f => f.status === 'under-review');
  const plannedFeatures = features.filter(f => f.status === 'planned');
  const inProgressFeatures = features.filter(f => f.status === 'in-progress');
  const doneFeatures = features.filter(f => f.status === 'done');

  const mustHaveCount = features.filter(f => f.priority === 'must-have').length;
  const shouldHaveCount = features.filter(f => f.priority === 'should-have').length;
  const couldHaveCount = features.filter(f => f.priority === 'could-have').length;
  const wontHaveCount = features.filter(f => f.priority === 'wont-have').length;

  return (
    <div className="flex h-screen bg-[#FAFAF8]">
      {/* Left Navigation */}
      <LeftNav activeView="roadmap" onNavigate={onNavigate} />

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-[#FAFAF8] border-b border-[#E8E6E1] px-8 py-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="font-serif text-3xl font-medium text-[#2D2D2D] mb-2">
                StartupAI <span className="text-[#A3A3A3] text-2xl">(draft)</span>
              </h1>
              <p className="text-sm text-[#737373]">
                Competitor Analysis • Target: First-time founders, solo founders
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#737373]">
              <CheckCircle className="w-4 h-4 text-[#0D5F4E]" />
              <span>Verified 2026-01-27</span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-6 mb-4">
            <div className="text-sm text-[#4A4A4A]">
              <span className="font-semibold">{features.length}</span> features
            </div>
            <div className="text-sm text-[#4A4A4A]">
              <span className="font-semibold">4</span> phases
            </div>
            <div className="flex items-center gap-2">
              <Tag color="red">Must ({mustHaveCount})</Tag>
              <Tag color="blue">Should ({shouldHaveCount})</Tag>
              <Tag color="green">Could ({couldHaveCount})</Tag>
              <Tag color="gray">Won't ({wontHaveCount})</Tag>
            </div>
          </div>

          {/* View Switcher */}
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-[#0D5F4E] text-white rounded-lg text-sm font-medium">
              Kanban
            </button>
            <button className="px-4 py-2 bg-white border border-[#E8E6E1] text-[#737373] rounded-lg text-sm font-medium hover:bg-[#F5F5F3] transition-colors">
              Phases
            </button>
            <button className="px-4 py-2 bg-white border border-[#E8E6E1] text-[#737373] rounded-lg text-sm font-medium hover:bg-[#F5F5F3] transition-colors">
              All Features
            </button>
            <button className="px-4 py-2 bg-white border border-[#E8E6E1] text-[#737373] rounded-lg text-sm font-medium hover:bg-[#F5F5F3] transition-colors">
              By Priority
            </button>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="flex-1 overflow-hidden">
          <div className="grid grid-cols-4 h-full">
            {/* Under Review */}
            <div className="flex flex-col h-full bg-white border-r border-[#E8E6E1]">
              <div className="flex items-center justify-between px-4 py-3 bg-[#F5F5F3] border-b border-[#E8E6E1]">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-[#2D2D2D]">Under Review</h3>
                  <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-white text-xs font-medium text-[#737373]">
                    {underReviewFeatures.length}
                  </span>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-3">
                {underReviewFeatures.length === 0 ? (
                  <EmptyState
                    icon={<div className="text-5xl">📋</div>}
                    title="No features under review"
                    description="Features will appear here for review"
                  />
                ) : (
                  underReviewFeatures.map((feature) => (
                    <FeatureCard
                      key={feature.id}
                      feature={feature}
                      onSelect={setSelectedFeature}
                      isSelected={feature.id === selectedFeature?.id}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Planned */}
            <div className="flex flex-col h-full bg-white border-r border-[#E8E6E1]">
              <div className="flex items-center justify-between px-4 py-3 bg-[#F5F5F3] border-b border-[#E8E6E1]">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-[#2D2D2D]">Planned</h3>
                  <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-white text-xs font-medium text-[#737373]">
                    {plannedFeatures.length}
                  </span>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-3">
                {plannedFeatures.length === 0 ? (
                  <EmptyState
                    icon={<div className="text-5xl">📅</div>}
                    title="No planned features"
                    description="Approved features will appear here"
                  />
                ) : (
                  plannedFeatures.map((feature) => (
                    <FeatureCard
                      key={feature.id}
                      feature={feature}
                      onSelect={setSelectedFeature}
                      isSelected={feature.id === selectedFeature?.id}
                    />
                  ))
                )}
              </div>
            </div>

            {/* In Progress */}
            <div className="flex flex-col h-full bg-white border-r border-[#E8E6E1]">
              <div className="flex items-center justify-between px-4 py-3 bg-[#F5F5F3] border-b border-[#E8E6E1]">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-[#2D2D2D]">In Progress</h3>
                  <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-white text-xs font-medium text-[#737373]">
                    {inProgressFeatures.length}
                  </span>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-3">
                {inProgressFeatures.length === 0 ? (
                  <EmptyState
                    icon={<div className="text-5xl">⚙️</div>}
                    title="No features in progress"
                    description="Active development will appear here"
                  />
                ) : (
                  inProgressFeatures.map((feature) => (
                    <FeatureCard
                      key={feature.id}
                      feature={feature}
                      onSelect={setSelectedFeature}
                      isSelected={feature.id === selectedFeature?.id}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Done */}
            <div className="flex flex-col h-full bg-white">
              <div className="flex items-center justify-between px-4 py-3 bg-[#F5F5F3] border-b border-[#E8E6E1]">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-[#2D2D2D]">Done</h3>
                  <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-white text-xs font-medium text-[#737373]">
                    {doneFeatures.length}
                  </span>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-3">
                {doneFeatures.length === 0 ? (
                  <EmptyState
                    icon={<div className="text-5xl">✅</div>}
                    title="No completed features"
                    description="Shipped features will appear here"
                  />
                ) : (
                  doneFeatures.map((feature) => (
                    <FeatureCard
                      key={feature.id}
                      feature={feature}
                      onSelect={setSelectedFeature}
                      isSelected={feature.id === selectedFeature?.id}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}