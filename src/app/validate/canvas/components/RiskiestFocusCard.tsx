'use client';

import { ArrowRight, User } from 'lucide-react';
import type { Assumption, Experiment, Interview } from '../../../../data/validation-board-types';

interface RiskiestFocusCardProps {
  assumption: Assumption;
  experiment?: Experiment;
  interviews?: Interview[];
  onRecordInterview?: () => void;
  onRecordResult?: () => void;
  onViewExperiment?: () => void;
  onViewInterviews?: () => void;
}

export function RiskiestFocusCard({
  assumption,
  experiment,
  interviews = [],
  onRecordInterview,
  onRecordResult,
  onViewExperiment,
  onViewInterviews,
}: RiskiestFocusCardProps) {
  const progressPercent = experiment
    ? Math.round((experiment.progress_current / experiment.progress_total) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl border border-red-200 shadow-sm overflow-hidden ring-2 ring-red-100">
      {/* Header */}
      <div className="px-6 py-4 bg-red-50 border-b border-red-200">
        <h2 className="text-base font-light text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
          🎯 Riskiest Assumption Focus
        </h2>
      </div>

      {/* Content */}
      <div className="px-6 py-5 space-y-5">
        {/* Assumption Text */}
        <div>
          <p className="text-lg font-medium text-gray-900 leading-relaxed">
            "{assumption.text}"
          </p>
        </div>

        {/* Why Riskiest */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <label className="block text-xs font-medium text-gray-500 mb-1">
            Why riskiest:
          </label>
          <p className="text-sm text-gray-700">
            If founders won't leave existing tools, our product has no market.
          </p>
        </div>

        {experiment && (
          <>
            {/* Divider */}
            <div className="border-t border-gray-200" />

            {/* How to Validate Section */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">
                How to Validate
              </h3>

              <div className="space-y-3">
                {/* Method */}
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    Method:
                  </label>
                  <p className="text-sm text-gray-900">{experiment.method}</p>
                </div>

                {/* Success Criterion */}
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    Success Criterion:
                  </label>
                  <p className="text-sm text-gray-900">{experiment.success_criterion}</p>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">
                    Status:
                  </label>
                  <p className="text-sm font-medium text-[#6b9d89]">
                    {experiment.status === 'in_progress' ? '[IN PROGRESS]' : '[NOT STARTED]'}
                  </p>
                </div>

                {/* Progress */}
                {experiment.status === 'in_progress' && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-medium text-gray-500">
                        Progress:
                      </label>
                      <span className="text-xs font-medium text-gray-900">
                        {experiment.progress_current}/{experiment.progress_total} interviews complete
                      </span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#0D5F4E] transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {progressPercent}% complete
                    </p>
                  </div>
                )}

                {/* Current Score (if in progress) */}
                {experiment.status === 'in_progress' && (
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Current Score:
                    </label>
                    <p className="text-sm text-gray-900">
                      {interviews.filter(i => i.response === 'yes').length} yes,{' '}
                      {interviews.filter(i => i.response === 'no').length} no (tracking towards validation)
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Recent Interviews */}
            {interviews.length > 0 && (
              <>
                <div className="border-t border-gray-200" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">
                    Recent Interviews
                  </h3>
                  <div className="space-y-2">
                    {interviews.slice(0, 4).map((interview) => (
                      <div
                        key={interview.id}
                        className="flex items-start gap-2 text-sm"
                      >
                        <User className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <span className="text-gray-600">
                            {interview.conducted_at.toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                            })}
                            :
                          </span>{' '}
                          <span className="font-medium text-gray-900">
                            {interview.interviewee_name}
                          </span>{' '}
                          <span className="text-gray-600">
                            ({interview.interviewee_role})
                          </span>{' '}
                          →{' '}
                          <span
                            className={`font-medium ${
                              interview.response === 'yes'
                                ? 'text-[#0D5F4E]'
                                : interview.response === 'no'
                                ? 'text-red-600'
                                : 'text-orange-600'
                            }`}
                          >
                            {interview.response.toUpperCase()}
                          </span>
                          {interview.response === 'yes' && ', would switch'}
                        </div>
                      </div>
                    ))}
                  </div>
                  {interviews.length > 4 && onViewInterviews && (
                    <button
                      onClick={onViewInterviews}
                      className="mt-3 text-xs text-gray-600 hover:text-[#0D5F4E] hover:underline"
                    >
                      View All Interviews ({interviews.length})
                    </button>
                  )}
                </div>
              </>
            )}

            {/* Actions */}
            <div className="flex items-center gap-2 pt-2">
              {onRecordInterview && experiment.status === 'in_progress' && (
                <button
                  onClick={onRecordInterview}
                  className="px-4 py-2 text-sm font-medium text-white bg-[#0D5F4E] hover:bg-[#0a4d3f] rounded-lg transition-colors"
                >
                  Record New Interview
                </button>
              )}
              {onRecordResult && experiment.status === 'in_progress' && (
                <button
                  onClick={onRecordResult}
                  className="px-4 py-2 text-sm font-medium text-[#0D5F4E] border border-[#0D5F4E] hover:bg-[#0D5F4E]/10 rounded-lg transition-colors"
                >
                  Record Final Result
                </button>
              )}
              {onViewExperiment && (
                <button
                  onClick={onViewExperiment}
                  className="ml-auto flex items-center gap-1 text-sm text-gray-600 hover:text-[#0D5F4E] hover:underline"
                >
                  View Full Experiment
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
