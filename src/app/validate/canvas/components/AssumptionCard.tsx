'use client';

import { Check, X, Clock, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import type { Assumption, Experiment } from '../../../../data/validation-board-types';

interface AssumptionCardProps {
  assumption: Assumption;
  experiment?: Experiment;
  onAddExperiment?: () => void;
  onSuggestMethod?: () => void;
  onViewExperiment?: () => void;
  onRecordResult?: () => void;
  onAISuggest?: () => void;
  isAIActive?: boolean;
}

const RISK_COLORS = {
  high: 'text-red-600 bg-red-50',
  medium: 'text-orange-600 bg-orange-50',
  low: 'text-gray-600 bg-gray-50',
};

const STATUS_CONFIG = {
  validated: {
    icon: Check,
    label: 'VALIDATED',
    color: 'bg-[#DCF9E3] text-[#0D5F4E] border-[#0D5F4E]',
  },
  invalidated: {
    icon: X,
    label: 'INVALIDATED',
    color: 'bg-red-50 text-red-600 border-red-600',
  },
  in_progress: {
    icon: Clock,
    label: 'IN PROGRESS',
    color: 'bg-[#E8F4F1] text-[#6b9d89] border-[#6b9d89]',
  },
  not_tested: {
    icon: AlertCircle,
    label: 'NOT TESTED',
    color: 'bg-gray-100 text-gray-500 border-gray-300',
  },
};

export function AssumptionCard({
  assumption,
  experiment,
  onAddExperiment,
  onSuggestMethod,
  onViewExperiment,
  onRecordResult,
  onAISuggest,
  isAIActive,
}: AssumptionCardProps) {
  const statusConfig = STATUS_CONFIG[assumption.status];
  const StatusIcon = statusConfig.icon;

  return (
    <div
      className={`
        bg-white rounded-lg border shadow-sm p-5
        ${assumption.is_riskiest ? 'border-red-200 ring-2 ring-red-100' : isAIActive ? 'border-[#0d5f4e] ring-2 ring-[#0d5f4e]/20' : 'border-gray-200'}
      `}
    >
      {/* Header: Assumption Text */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex-1">
          <div className="flex items-start gap-2 mb-2">
            <p className="text-sm font-medium text-gray-900 leading-relaxed">
              {assumption.text}
            </p>
            <div className="flex items-center gap-1 flex-shrink-0">
              {assumption.is_riskiest && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-50 text-red-600 text-xs font-medium rounded border border-red-200">
                  🔴 RISKIEST
                </span>
              )}
              {onAISuggest && (
                <button
                  onClick={onAISuggest}
                  className={`p-1.5 rounded transition-colors ${
                    isAIActive
                      ? 'bg-[#0d5f4e] text-white'
                      : 'text-[#0d5f4e] hover:bg-[#E8F4F1]'
                  }`}
                  title="AI Suggestions"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
          
          {/* Risk & Impact Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`px-2 py-0.5 text-xs rounded ${RISK_COLORS[assumption.risk_level]}`}>
              Risk: {assumption.risk_level.toUpperCase()}
            </span>
            <span className={`px-2 py-0.5 text-xs rounded ${RISK_COLORS[assumption.impact_level]}`}>
              Impact: {assumption.impact_level.toUpperCase()}
            </span>
            <span className="px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-600">
              Stage: {assumption.stage}
            </span>
          </div>
        </div>

        {/* Status Badge */}
        <div
          className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded border ${statusConfig.color}`}
        >
          <StatusIcon className="w-3.5 h-3.5" />
          {statusConfig.label}
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4">
        {/* Experiment Details (if exists) */}
        {experiment ? (
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Method:
              </label>
              <p className="text-sm text-gray-900">{experiment.method}</p>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Success Criterion:
              </label>
              <p className="text-sm text-gray-900">{experiment.success_criterion}</p>
            </div>

            {/* Progress (if in progress) */}
            {assumption.status === 'in_progress' && (
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-medium text-gray-500">
                    Progress:
                  </label>
                  <span className="text-xs font-medium text-gray-900">
                    {experiment.progress_current}/{experiment.progress_total} interviews complete
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#6b9d89] transition-all duration-500"
                    style={{
                      width: `${(experiment.progress_current / experiment.progress_total) * 100}%`,
                    }}
                  />
                </div>
              </div>
            )}

            {/* Result (if completed) */}
            {experiment.result && (
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  Result:
                </label>
                <p className="text-sm font-medium text-gray-900">
                  {experiment.progress_current}/{experiment.progress_total} {experiment.result === 'validated' ? '→ ✓ VALIDATED' : '→ ❌ INVALIDATED'}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center gap-2 pt-2">
              {assumption.status === 'in_progress' && onRecordResult && (
                <button
                  onClick={onRecordResult}
                  className="px-3 py-1.5 text-xs font-medium text-white bg-[#0D5F4E] hover:bg-[#0a4d3f] rounded transition-colors"
                >
                  Record Result
                </button>
              )}
              {onViewExperiment && (
                <button
                  onClick={onViewExperiment}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-gray-700 hover:text-[#0D5F4E] hover:bg-gray-100 rounded transition-colors"
                >
                  View Details
                  <ArrowRight className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        ) : (
          // No Experiment Yet
          <div className="space-y-3">
            <p className="text-sm text-gray-500 italic">No experiment defined yet.</p>
            <div className="flex items-center gap-2">
              {onAddExperiment && (
                <button
                  onClick={onAddExperiment}
                  className="px-3 py-1.5 text-xs font-medium text-white bg-[#0D5F4E] hover:bg-[#0a4d3f] rounded transition-colors"
                >
                  + Add Experiment
                </button>
              )}
              {onSuggestMethod && (
                <button
                  onClick={onSuggestMethod}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#0D5F4E] bg-[#0D5F4E]/10 hover:bg-[#0D5F4E]/20 rounded transition-colors"
                >
                  💡 Suggest Method
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Riskiest Call-out */}
      {assumption.is_riskiest && (
        <div className="mt-4 pt-4 border-t border-red-100">
          <p className="text-xs text-red-600 font-medium">
            ← Test this first
          </p>
        </div>
      )}
    </div>
  );
}