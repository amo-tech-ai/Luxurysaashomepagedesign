'use client';

import { Edit2, Sparkles } from 'lucide-react';
import type { CurrentBet } from '../../../../data/validation-board-types';

interface CurrentBetCardProps {
  bet: CurrentBet;
  onEdit?: () => void;
  onAISuggest?: () => void;
  isAIActive?: boolean;
}

const STAGE_LABELS = {
  idea: 'BRAINSTORM (Idea Testing)',
  MVP: 'START BUILDING (MVP Testing)',
  selling: 'START SELLING (Market Testing)',
};

export function CurrentBetCard({ bet, onEdit, onAISuggest, isAIActive }: CurrentBetCardProps) {
  return (
    <div className={`bg-white rounded-xl border shadow-sm overflow-hidden ${
      isAIActive ? 'border-[#0d5f4e] ring-2 ring-[#0d5f4e]/20' : 'border-gray-200'
    }`}>
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-base font-light text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
          🎯 Current Bet
          <span className="ml-2 text-sm text-gray-500 font-normal" style={{ fontFamily: 'system-ui, sans-serif' }}>
            (What we're testing now)
          </span>
        </h2>
        <div className="flex items-center gap-2">
          {onAISuggest && (
            <button
              onClick={onAISuggest}
              className={`p-2 rounded-lg transition-colors ${
                isAIActive
                  ? 'bg-[#0d5f4e] text-white'
                  : 'text-[#0d5f4e] hover:bg-[#E8F4F1]'
              }`}
              title="AI Suggestions"
            >
              <Sparkles className="w-4 h-4" />
            </button>
          )}
          {onEdit && (
            <button
              onClick={onEdit}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-700 hover:text-[#0D5F4E] hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Edit2 className="w-3.5 h-3.5" />
              Edit Bet
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-5 space-y-4">
        {/* Audience */}
        <div>
          <label className="block text-xs font-medium text-[#0D5F4E] mb-1.5">
            Audience:
          </label>
          <p className="text-sm text-gray-900 leading-relaxed">{bet.audience}</p>
        </div>

        {/* Pain Point */}
        <div>
          <label className="block text-xs font-medium text-[#0D5F4E] mb-1.5">
            Pain:
          </label>
          <p className="text-sm text-gray-900 leading-relaxed">{bet.pain_point}</p>
        </div>

        {/* Solution (if defined) */}
        {bet.solution ? (
          <div>
            <label className="block text-xs font-medium text-[#0D5F4E] mb-1.5">
              Solution:
            </label>
            <p className="text-sm text-gray-900 leading-relaxed">{bet.solution}</p>
          </div>
        ) : (
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">
              Solution:
            </label>
            <p className="text-sm text-gray-400 italic">
              (blank — we're in BRAINSTORM stage, build comes after validation)
            </p>
          </div>
        )}

        {/* Stage Indicator */}
        <div className="pt-2 border-t border-gray-100">
          <label className="block text-xs font-medium text-gray-500 mb-2">
            Stage:
          </label>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#0D5F4E] rounded-full" />
            <span className="text-sm font-medium text-gray-900">
              {STAGE_LABELS[bet.stage]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}