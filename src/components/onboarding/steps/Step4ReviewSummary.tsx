'use client';

import React, { useState, useEffect } from 'react';
import { FileText, TrendingUp, AlertTriangle, Target, ArrowRight, Sparkles } from 'lucide-react';

interface Step4Props {
  companyName: string;
  industry: string;
  stage: string;
  onNext: () => void;
  onBack: () => void;
}

export function Step4ReviewSummary({ companyName, industry, stage, onNext, onBack }: Step4Props) {
  const [isGenerating, setIsGenerating] = useState(true);
  const [readinessScore, setReadinessScore] = useState(0);

  useEffect(() => {
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      // Animate score
      let current = 0;
      const target = 78;
      const interval = setInterval(() => {
        current += 2;
        setReadinessScore(current);
        if (current >= target) {
          clearInterval(interval);
        }
      }, 30);
    }, 2500);
  }, []);

  const suggestedTasks = [
    {
      title: 'Create traction deck with current metrics',
      priority: 'High',
      timeframe: '30 days',
      impact: 'Investor readiness +15%',
    },
    {
      title: 'Document go-to-market strategy',
      priority: 'High',
      timeframe: '30 days',
      impact: 'Clarity +20%',
    },
    {
      title: 'Build financial model (3-year projection)',
      priority: 'Medium',
      timeframe: '60 days',
      impact: 'Fundraising readiness +25%',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] rounded-2xl mb-6 shadow-lg">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h1 className="font-serif text-4xl text-[#2D2D2D] mb-3">Your Strategic Summary</h1>
        <p className="text-[#4A4A4A] text-lg">
          AI-generated insights and recommended next steps
        </p>
      </div>

      {/* Generating State */}
      {isGenerating && (
        <div className="bg-white border-2 border-[#E8E6E1] rounded-2xl p-12 text-center">
          <Sparkles className="w-12 h-12 text-[#0D5F4E] mx-auto mb-4 animate-pulse" />
          <p className="text-lg font-semibold text-[#2D2D2D] mb-2">
            Analyzing your responses...
          </p>
          <p className="text-sm text-[#A3A3A3]">
            Summary Agent • Investor Readiness Agent • Task Generator Agent
          </p>
        </div>
      )}

      {/* Results */}
      {!isGenerating && (
        <div className="space-y-6">
          {/* Startup Summary */}
          <div className="bg-white border-2 border-[#E8E6E1] rounded-2xl p-8">
            <h2 className="text-xl font-bold text-[#2D2D2D] mb-6">Startup Summary</h2>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-xs text-[#A3A3A3] font-semibold uppercase tracking-wider mb-2">
                  Company
                </p>
                <p className="text-lg font-bold text-[#2D2D2D]">{companyName}</p>
              </div>
              <div>
                <p className="text-xs text-[#A3A3A3] font-semibold uppercase tracking-wider mb-2">
                  Industry
                </p>
                <p className="text-lg font-bold text-[#2D2D2D]">{industry}</p>
              </div>
              <div>
                <p className="text-xs text-[#A3A3A3] font-semibold uppercase tracking-wider mb-2">
                  Stage
                </p>
                <p className="text-lg font-bold text-[#2D2D2D]">{stage}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#E8E6E1]">
              <p className="text-sm text-[#4A4A4A] leading-relaxed">
                {companyName} is a {stage.toLowerCase()} stage {industry} company building in a growing market segment. 
                Based on your inputs, we've identified key opportunities and critical gaps that need attention 
                before your next fundraising milestone.
              </p>
            </div>
          </div>

          {/* Investor Readiness Score */}
          <div className="bg-gradient-to-br from-[#0D5F4E]/5 to-[#0D5F4E]/10 border-2 border-[#0D5F4E]/30 rounded-2xl p-8">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-[#0D5F4E]" />
                  <h2 className="text-xl font-bold text-[#0D5F4E]">Investor Readiness</h2>
                </div>
                <p className="text-[#2D2D2D] text-lg mb-2">
                  You are <span className="font-bold text-[#0D5F4E]">{readinessScore}%</span> ready to 
                  approach investors
                </p>
                <p className="text-sm text-[#4A4A4A]">
                  Complete the recommended tasks below to increase your score to 90%+
                </p>
              </div>
              <div className="relative">
                <svg width="120" height="120" className="transform -rotate-90">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#E8E6E1" strokeWidth="8" />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#0D5F4E"
                    strokeWidth="8"
                    strokeDasharray={`${(readinessScore / 100) * 314} 314`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#0D5F4E]">{readinessScore}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Risks */}
          <div className="bg-white border-2 border-[#E8E6E1] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-[#D4A574]" />
              <h2 className="text-xl font-bold text-[#2D2D2D]">Top Gaps to Address</h2>
            </div>
            <div className="space-y-3">
              {[
                { gap: 'Limited traction proof', impact: 'High' },
                { gap: 'No documented GTM strategy', impact: 'High' },
                { gap: 'Missing financial projections', impact: 'Medium' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-[#FAFAF8] rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-white border-2 border-[#E8E6E1] rounded-full flex items-center justify-center text-xs font-bold text-[#4A4A4A]">
                      {index + 1}
                    </span>
                    <span className="text-sm text-[#2D2D2D]">{item.gap}</span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.impact === 'High'
                        ? 'bg-[#EF4444]/10 text-[#EF4444]'
                        : 'bg-[#D4A574]/10 text-[#D4A574]'
                    }`}
                  >
                    {item.impact} Impact
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Next Steps */}
          <div className="bg-white border-2 border-[#E8E6E1] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-[#0D5F4E]" />
              <h2 className="text-xl font-bold text-[#2D2D2D]">Recommended Actions</h2>
            </div>
            <div className="space-y-4">
              {suggestedTasks.map((task, index) => (
                <div
                  key={index}
                  className="p-5 border-2 border-[#E8E6E1] rounded-xl hover:border-[#0D5F4E] transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-sm font-semibold text-[#2D2D2D] flex-1">
                      {task.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ml-4 ${
                        task.priority === 'High'
                          ? 'bg-[#EF4444]/10 text-[#EF4444]'
                          : 'bg-[#D4A574]/10 text-[#D4A574]'
                      }`}
                    >
                      {task.priority}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 text-xs text-[#A3A3A3]">
                    <span>⏱️ {task.timeframe}</span>
                    <span className="text-[#0D5F4E] font-semibold">↗ {task.impact}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gradient-to-br from-[#0D5F4E]/5 to-[#0D5F4E]/10 rounded-xl">
              <p className="text-xs text-[#2D2D2D]">
                <span className="font-semibold">💡 AI Suggestion:</span> Focus on high-priority 
                tasks first. Completing these will increase your investor readiness score to <span className="font-bold text-[#0D5F4E]">93%</span>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between mt-12 pt-8 border-t border-[#E8E6E1]">
        <button
          onClick={onBack}
          className="px-6 py-3 text-[#4A4A4A] font-semibold hover:text-[#0D5F4E] transition-colors duration-200"
        >
          ← Back
        </button>
        {!isGenerating && (
          <button
            onClick={onNext}
            className="px-8 py-3.5 bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            Setup Your Dashboard
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}