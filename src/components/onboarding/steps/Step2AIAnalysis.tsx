'use client';

import React, { useState, useEffect } from 'react';
import { Brain, TrendingUp, AlertCircle, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

interface Step2Props {
  companyName: string;
  industry: string;
  onNext: () => void;
  onBack: () => void;
}

export function Step2AIAnalysis({ companyName, industry, onNext, onBack }: Step2Props) {
  const [score, setScore] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  useEffect(() => {
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      // Animate score
      let current = 0;
      const target = 68;
      const interval = setInterval(() => {
        current += 2;
        setScore(current);
        if (current >= target) {
          clearInterval(interval);
        }
      }, 30);
    }, 2000);
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-[#0D5F4E]';
    if (score >= 60) return 'text-[#D4A574]';
    return 'text-[#EF4444]';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Strong';
    if (score >= 60) return 'Moderate';
    return 'Needs Work';
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] rounded-2xl mb-6 shadow-lg">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <h1 className="font-serif text-4xl text-[#2D2D2D] mb-3">
          AI Market Analysis
        </h1>
        <p className="text-[#4A4A4A] text-lg">
          Our AI agents are analyzing {companyName}'s market position
        </p>
      </div>

      {/* Analysis Progress */}
      {isAnalyzing && (
        <div className="bg-white border-2 border-[#E8E6E1] rounded-2xl p-8 mb-8">
          <div className="space-y-4">
            {[
              { agent: 'Market Analyst', status: 'complete' },
              { agent: 'Competitive Research Agent', status: 'analyzing' },
              { agent: 'Readiness Scoring Agent', status: 'pending' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    item.status === 'complete'
                      ? 'bg-[#0D5F4E] text-white'
                      : item.status === 'analyzing'
                      ? 'bg-[#0D5F4E]/20 text-[#0D5F4E]'
                      : 'bg-[#F5F5F3] text-[#A3A3A3]'
                  }`}
                >
                  {item.status === 'complete' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : item.status === 'analyzing' ? (
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  ) : (
                    <Brain className="w-5 h-5" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#2D2D2D]">{item.agent}</p>
                  <p className="text-xs text-[#A3A3A3] capitalize">{item.status}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {!isAnalyzing && (
        <div className="space-y-6">
          {/* Readiness Score */}
          <div className="bg-gradient-to-br from-white to-[#FAFAF8] border-2 border-[#E8E6E1] rounded-2xl p-8">
            <div className="text-center mb-6">
              <p className="text-sm font-semibold text-[#A3A3A3] uppercase tracking-wider mb-4">
                Investor Readiness Score
              </p>
              <div className="relative inline-block">
                {/* Score Dial */}
                <svg width="200" height="200" className="transform -rotate-90">
                  {/* Background Circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="85"
                    fill="none"
                    stroke="#F5F5F3"
                    strokeWidth="12"
                  />
                  {/* Progress Circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="85"
                    fill="none"
                    stroke="#0D5F4E"
                    strokeWidth="12"
                    strokeDasharray={`${(score / 100) * 534} 534`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className={`text-5xl font-bold ${getScoreColor(score)}`}>
                    {score}
                  </div>
                  <div className="text-sm text-[#A3A3A3] font-semibold mt-1">
                    {getScoreLabel(score)}
                  </div>
                </div>
              </div>
              <button className="mt-4 text-xs text-[#0D5F4E] font-semibold hover:underline">
                Why this score?
              </button>
            </div>
          </div>

          {/* Market Snapshot */}
          <div className="bg-white border-2 border-[#E8E6E1] rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#2D2D2D]">Market Snapshot</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#FAFAF8] rounded-xl p-4">
                <p className="text-xs text-[#A3A3A3] font-semibold uppercase tracking-wider mb-2">
                  Market Size
                </p>
                <p className="text-2xl font-bold text-[#2D2D2D]">$8.4B</p>
                <p className="text-xs text-[#0D5F4E] mt-1">Growing 23% YoY</p>
              </div>
              <div className="bg-[#FAFAF8] rounded-xl p-4">
                <p className="text-xs text-[#A3A3A3] font-semibold uppercase tracking-wider mb-2">
                  Competitors
                </p>
                <p className="text-2xl font-bold text-[#2D2D2D]">12</p>
                <p className="text-xs text-[#4A4A4A] mt-1">Direct rivals</p>
              </div>
              <div className="bg-[#FAFAF8] rounded-xl p-4">
                <p className="text-xs text-[#A3A3A3] font-semibold uppercase tracking-wider mb-2">
                  Opportunity
                </p>
                <p className="text-2xl font-bold text-[#0D5F4E]">High</p>
                <p className="text-xs text-[#4A4A4A] mt-1">Emerging niche</p>
              </div>
            </div>
          </div>

          {/* Strengths & Gaps */}
          <div className="grid grid-cols-2 gap-6">
            {/* Strengths */}
            <div className="bg-gradient-to-br from-[#0D5F4E]/5 to-[#0D5F4E]/10 border border-[#0D5F4E]/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-[#0D5F4E]" />
                <h3 className="text-sm font-bold text-[#0D5F4E] uppercase tracking-wider">
                  Strengths
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  'Clear value proposition',
                  'Growing market segment',
                  'Technical expertise',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-[#2D2D2D]">
                    <span className="text-[#0D5F4E] mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Gaps */}
            <div className="bg-white border-2 border-[#E8E6E1] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-[#D4A574]" />
                <h3 className="text-sm font-bold text-[#4A4A4A] uppercase tracking-wider">
                  Areas to Improve
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  'Limited traction proof',
                  'Go-to-market strategy',
                  'Financial projections',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-[#4A4A4A]">
                    <span className="text-[#D4A574] mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
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
        {!isAnalyzing && (
          <button
            onClick={onNext}
            className="px-8 py-3.5 bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            Continue to Interview
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}