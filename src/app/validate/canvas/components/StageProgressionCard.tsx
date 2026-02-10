'use client';

import { Lock, ArrowRight } from 'lucide-react';
import type { StageType, StageGate } from '../../../../data/validation-board-types';

interface StageProgressionCardProps {
  currentStage: StageType;
  stageGates: {
    idea: StageGate;
    MVP: StageGate;
    selling: StageGate;
  };
  onAdvanceStage?: () => void;
}

const STAGE_INFO = {
  idea: {
    label: 'BRAINSTORM',
    description: 'Test: Audience + pain',
    gate: 'Validate ≥1 idea assumption',
  },
  MVP: {
    label: 'START BUILDING',
    description: 'Test: MVP + solution',
    gate: 'Validate ≥1 MVP assumption',
  },
  selling: {
    label: 'START SELLING',
    description: 'Test: Business model',
    gate: 'Validate revenue assumptions',
  },
};

export function StageProgressionCard({
  currentStage,
  stageGates,
  onAdvanceStage,
}: StageProgressionCardProps) {
  const currentGate = stageGates[currentStage];
  const canAdvance = currentGate.unlocked;

  // Determine next stage message
  let nextStageMessage = '';
  if (currentStage === 'idea') {
    nextStageMessage = 'Validate idea assumptions to unlock BUILD stage';
  } else if (currentStage === 'MVP') {
    nextStageMessage = 'Validate MVP assumptions to unlock SELL stage';
  } else {
    nextStageMessage = 'Ready to launch!';
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-base font-light text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
          🚀 Stage Progression
        </h2>
      </div>

      {/* Content */}
      <div className="px-6 py-5 space-y-5">
        {/* Current Stage Label */}
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-2">
            Current:
          </label>
          <p className="text-base font-medium text-gray-900">
            {STAGE_INFO[currentStage].label} ({STAGE_INFO[currentStage].description})
          </p>
        </div>

        {/* Three Stages Visual */}
        <div className="grid grid-cols-3 gap-4">
          {/* Idea Stage */}
          <div
            className={`
              p-4 rounded-lg border-2 transition-all
              ${
                currentStage === 'idea'
                  ? 'border-[#0D5F4E] bg-[#0D5F4E]/5'
                  : 'border-gray-200 bg-gray-50'
              }
            `}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-medium text-gray-900">
                {STAGE_INFO.idea.label}
              </h3>
              {currentStage === 'idea' && (
                <div className="w-2 h-2 bg-[#0D5F4E] rounded-full" />
              )}
              {currentStage !== 'idea' && stageGates.idea.unlocked && (
                <div className="w-4 h-4 bg-[#0D5F4E] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-600 mb-2">
              {STAGE_INFO.idea.description}
            </p>
            <p className="text-xs text-gray-500">
              Gate: {STAGE_INFO.idea.gate}
            </p>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>

          {/* MVP Stage */}
          <div
            className={`
              p-4 rounded-lg border-2 transition-all
              ${
                currentStage === 'MVP'
                  ? 'border-[#0D5F4E] bg-[#0D5F4E]/5'
                  : stageGates.MVP.unlocked
                  ? 'border-gray-200 bg-gray-50'
                  : 'border-gray-200 bg-gray-100 opacity-60'
              }
            `}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-medium text-gray-900">
                {STAGE_INFO.MVP.label}
              </h3>
              {currentStage === 'MVP' && (
                <div className="w-2 h-2 bg-[#0D5F4E] rounded-full" />
              )}
              {!stageGates.MVP.unlocked && currentStage !== 'MVP' && (
                <Lock className="w-4 h-4 text-gray-400" />
              )}
            </div>
            <p className="text-xs text-gray-600 mb-2">
              {STAGE_INFO.MVP.description}
            </p>
            <p className="text-xs text-gray-500">
              Gate: {STAGE_INFO.MVP.gate}
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2" />
          
          {/* Selling Stage */}
          <div
            className={`
              p-4 rounded-lg border-2 transition-all
              ${
                currentStage === 'selling'
                  ? 'border-[#0D5F4E] bg-[#0D5F4E]/5'
                  : stageGates.selling.unlocked
                  ? 'border-gray-200 bg-gray-50'
                  : 'border-gray-200 bg-gray-100 opacity-60'
              }
            `}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-medium text-gray-900">
                {STAGE_INFO.selling.label}
              </h3>
              {currentStage === 'selling' && (
                <div className="w-2 h-2 bg-[#0D5F4E] rounded-full" />
              )}
              {!stageGates.selling.unlocked && currentStage !== 'selling' && (
                <Lock className="w-4 h-4 text-gray-400" />
              )}
            </div>
            <p className="text-xs text-gray-600 mb-2">
              {STAGE_INFO.selling.description}
            </p>
            <p className="text-xs text-gray-500">
              Gate: {STAGE_INFO.selling.gate}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Next Milestone */}
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-2">
            Next milestone:
          </label>
          <p className="text-sm text-gray-700">{nextStageMessage}</p>
        </div>

        {/* Advance Button */}
        {currentStage !== 'selling' && (
          <button
            onClick={onAdvanceStage}
            disabled={!canAdvance}
            className={`
              w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-colors
              ${
                canAdvance
                  ? 'bg-[#0D5F4E] text-white hover:bg-[#0a4d3f]'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            {canAdvance
              ? `Advance to ${currentStage === 'idea' ? 'BUILD' : 'SELL'} Stage`
              : `(disabled — validate ${currentStage} assumptions first)`}
          </button>
        )}
      </div>
    </div>
  );
}
