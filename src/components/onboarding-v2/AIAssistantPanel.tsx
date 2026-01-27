'use client';

import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp, Check, Database, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface AIAssistantPanelProps {
  agentName: string;
  capabilities?: string[];
  suggestions?: string[];
  risks?: string[];
  questions?: string[];
  confidenceScore?: number;
  sourcesAnalyzed?: Array<{ type: string; count: number }>;
  primaryStrengths?: string[];
  primaryRisks?: string[];
  recommendedActions?: Array<{ action: string; completed: boolean }>;
  showReadyPrompt?: boolean;
}

export function AIAssistantPanel({
  agentName,
  capabilities = [],
  suggestions = [],
  risks = [],
  questions = [],
  confidenceScore,
  sourcesAnalyzed = [],
  primaryStrengths = [],
  primaryRisks = [],
  recommendedActions = [],
  showReadyPrompt = false,
}: AIAssistantPanelProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [checkedActions, setCheckedActions] = useState<boolean[]>(
    recommendedActions.map((a) => a.completed)
  );

  const toggleAction = (index: number) => {
    const newChecked = [...checkedActions];
    newChecked[index] = !newChecked[index];
    setCheckedActions(newChecked);
  };

  return (
    <div className="bg-white border border-[#E8E6E1] rounded-xl overflow-hidden sticky top-24">
      {/* Header */}
      <div
        className="bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] p-5 cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-white font-bold text-sm">Gemini</h3>
                <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse" />
              </div>
              <p className="text-white/80 text-xs mt-0.5">{agentName}</p>
            </div>
          </div>
          <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-white" />
            ) : (
              <ChevronDown className="w-4 h-4 text-white" />
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      {isExpanded && (
        <div className="p-5 space-y-5 animate-in fade-in duration-300">
          {/* Confidence Score (Step 2) */}
          {confidenceScore !== undefined && (
            <div>
              <h4 className="text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-3">
                AI Analysis Confidence
              </h4>
              <div className="relative">
                <div className="flex items-center justify-center mb-2">
                  <div className="relative w-20 h-20">
                    <svg className="w-20 h-20 transform -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="#E8E6E1"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="#0D5F4E"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 32}`}
                        strokeDashoffset={`${2 * Math.PI * 32 * (1 - confidenceScore / 100)}`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#0D5F4E]">{confidenceScore}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sources Analyzed (Step 2) */}
          {sourcesAnalyzed.length > 0 && (
            <div className="pt-5 border-t border-[#E8E6E1]">
              <h4 className="text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-3">
                Sources Analyzed
              </h4>
              <div className="space-y-2">
                {sourcesAnalyzed.map((source, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-[#FAFAF8] rounded-lg">
                    <span className="text-xs text-[#4A4A4A]">{source.type}</span>
                    <span className="text-xs font-bold text-[#0D5F4E]">{source.count}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Primary Strengths (Step 2) */}
          {primaryStrengths.length > 0 && (
            <div className="pt-5 border-t border-[#E8E6E1]">
              <h4 className="text-xs font-bold text-[#2D2D2D] uppercase tracking-wider mb-3 flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-[#0D5F4E]" />
                Primary Strengths
              </h4>
              <div className="space-y-2">
                {primaryStrengths.map((strength, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0D5F4E] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-[#4A4A4A] leading-relaxed">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Primary Risks (Step 2) */}
          {primaryRisks.length > 0 && (
            <div className="pt-5 border-t border-[#E8E6E1]">
              <h4 className="text-xs font-bold text-[#2D2D2D] uppercase tracking-wider mb-3 flex items-center gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-[#EF4444]" />
                Primary Risks
              </h4>
              <div className="space-y-2">
                {primaryRisks.map((risk, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#EF4444] flex-shrink-0 mt-1.5" />
                    <span className="text-xs text-[#4A4A4A] leading-relaxed">{risk}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommended Actions (Step 2) */}
          {recommendedActions.length > 0 && (
            <div className="pt-5 border-t border-[#E8E6E1]">
              <h4 className="text-xs font-bold text-[#2D2D2D] uppercase tracking-wider mb-3">
                Recommended Actions
              </h4>
              <div className="space-y-2">
                {recommendedActions.map((item, index) => (
                  <label
                    key={index}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-[#FAFAF8] cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={checkedActions[index]}
                      onChange={() => toggleAction(index)}
                      className="mt-0.5 w-4 h-4 rounded border-2 border-[#E8E6E1] text-[#0D5F4E] focus:ring-[#0D5F4E] focus:ring-offset-0 cursor-pointer"
                    />
                    <span className={`text-xs leading-relaxed ${checkedActions[index] ? 'text-[#A3A3A3] line-through' : 'text-[#4A4A4A]'}`}>
                      {item.action}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* What Gemini Will Do (Step 1) */}
          {capabilities.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-[#2D2D2D] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#0D5F4E]" />
                What Gemini Will Do
              </h4>
              <div className="space-y-2.5">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded bg-[#0D5F4E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#0D5F4E]" />
                    </div>
                    <span className="text-xs text-[#4A4A4A] leading-relaxed">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Extracted Data Section (Step 1) */}
          {capabilities.length > 0 && (
            <div className="pt-5 border-t border-[#E8E6E1]">
              <h4 className="text-xs font-bold text-[#2D2D2D] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-[#0D5F4E]" />
                Extracted Data
              </h4>
              <div className="bg-[#FAFAF8] rounded-lg p-4 border border-[#E8E6E1]">
                <p className="text-xs text-[#4A4A4A] leading-relaxed italic">
                  Most details—team details, four tiers (Pro, One-Page, and Financial Models) will be returned by this enrichment.
                </p>
              </div>
            </div>
          )}

          {/* Ready to Proceed (Step 2) */}
          {showReadyPrompt && (
            <div className="pt-5 border-t border-[#E8E6E1]">
              <div className="bg-gradient-to-br from-[#0D5F4E]/5 to-[#0D5F4E]/10 rounded-lg p-4 border border-[#0D5F4E]/20">
                <h4 className="text-sm font-bold text-[#0D5F4E] mb-2">Ready to proceed?</h4>
                <p className="text-xs text-[#4A4A4A] leading-relaxed">
                  Review the insights above. You can edit or refine as needed before moving to the next step.
                </p>
              </div>
            </div>
          )}

          {/* Powered By */}
          <div className="pt-5 border-t border-[#E8E6E1]">
            <p className="text-xs text-[#A3A3A3] text-center">
              Powered by Gemini 3 with Google Search Grounding
            </p>
          </div>
        </div>
      )}
    </div>
  );
}