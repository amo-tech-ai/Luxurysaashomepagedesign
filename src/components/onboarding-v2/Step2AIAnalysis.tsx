'use client';

import React, { useState } from 'react';
import {
  Globe,
  Search,
  Sparkles,
  Edit2,
  Check,
  X,
  RefreshCw,
  Plus,
  TrendingUp,
  Users,
  Target,
  Briefcase,
  AlertCircle,
} from 'lucide-react';

interface Founder {
  name: string;
  role: string;
  expertise: string[];
  experience: Array<{ company: string; role: string }>;
  education?: string;
}

interface WebsiteInsights {
  valueProposition: string;
  keyFeatures: string[];
  targetAudience: string;
  detectedPhrases: string[];
}

interface MarketIntelligence {
  trends: string[];
  marketLabels: string[];
  competitors: string[];
}

interface DetectedSignals {
  industry: string;
  stage: string;
  messagingStyle: string;
  coreProblem: string;
  solutionTheme: string;
  competitionDensity: string;
  trendAlignment: string;
}

interface FormData {
  summary: string;
  sourceTags: string[];
  founder: Founder;
  websiteInsights: WebsiteInsights;
  marketIntelligence: MarketIntelligence;
  detectedSignals: DetectedSignals;
}

interface Step2Props {
  companyName: string;
  data: FormData;
  onUpdate: (data: FormData) => void;
  onNext: () => void;
  onBack: () => void;
}

export function Step2AIAnalysis({ companyName, data, onUpdate, onNext, onBack }: Step2Props) {
  const [editingField, setEditingField] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState<string>('');
  const [isEnhancing, setIsEnhancing] = useState(false);

  const handleEdit = (field: string, currentValue: string) => {
    setEditingField(field);
    setTempValue(currentValue);
  };

  const handleSave = (field: string) => {
    if (field === 'summary') {
      onUpdate({ ...data, summary: tempValue });
    } else if (field === 'valueProposition') {
      onUpdate({
        ...data,
        websiteInsights: { ...data.websiteInsights, valueProposition: tempValue },
      });
    }
    setEditingField(null);
  };

  const handleCancel = () => {
    setEditingField(null);
    setTempValue('');
  };

  const handleEnhance = () => {
    setIsEnhancing(true);
    setTimeout(() => {
      onUpdate({
        ...data,
        summary: data.summary + ' Our platform combines AI-powered automation with human creativity to deliver exceptional results.',
      });
      setIsEnhancing(false);
    }, 2000);
  };

  const handleRescan = () => {
    // Simulate re-scan
    alert('Re-scanning market data...');
  };

  const handleAddCompetitor = () => {
    const competitor = prompt('Enter competitor name:');
    if (competitor) {
      onUpdate({
        ...data,
        marketIntelligence: {
          ...data.marketIntelligence,
          competitors: [...data.marketIntelligence.competitors, competitor],
        },
      });
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="relative pb-6 border-b border-[#E8E6E1]">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold text-[#0D5F4E] uppercase tracking-wider bg-[#0D5F4E]/10 px-3 py-1 rounded-full">
            Step 2 of 4
          </span>
        </div>
        <h1 className="font-serif text-3xl text-[#2D2D2D] mb-2 tracking-tight">AI Analysis</h1>
        <p className="text-sm text-[#4A4A4A] leading-relaxed">
          Review what AI discovered about your startup
        </p>
      </div>

      {/* 1. Startup Summary */}
      <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-xl p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-serif text-xl text-[#2D2D2D]">{companyName}</h2>
              <div className="flex items-center gap-2 mt-1">
                {data.sourceTags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-0.5 rounded-full bg-[#0D5F4E]/10 text-[#0D5F4E] font-medium flex items-center gap-1"
                  >
                    {tag === 'Search Grounded' && <Search className="w-3 h-3" />}
                    {tag === 'URL Context Extracted' && <Globe className="w-3 h-3" />}
                    {tag === 'AI' && <Sparkles className="w-3 h-3" />}
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={handleEnhance}
            disabled={isEnhancing}
            className="px-4 py-2 rounded-lg text-sm font-bold text-[#0D5F4E] border border-[#0D5F4E] hover:bg-[#0D5F4E] hover:text-white transition-colors flex items-center gap-2"
          >
            {isEnhancing ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Enhancing...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Enhance with AI
              </>
            )}
          </button>
        </div>

        <div className="relative group">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-[#A3A3A3] uppercase tracking-wider">
              AI Summary
            </span>
            <span className="text-xs text-[#0D5F4E] bg-[#0D5F4E]/10 px-2 py-0.5 rounded">
              AI-generated
            </span>
          </div>

          {editingField === 'summary' ? (
            <div className="space-y-2">
              <textarea
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-[#0D5F4E] rounded-lg text-[#2D2D2D] bg-white focus:outline-none resize-none"
              />
              <div className="flex gap-2">
                <button
                  onClick={() => handleSave('summary')}
                  className="px-4 py-2 bg-[#0D5F4E] text-white rounded-lg text-sm font-bold hover:bg-[#0a4a3c] flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 border border-[#E8E6E1] text-[#4A4A4A] rounded-lg text-sm font-bold hover:border-[#0D5F4E] hover:text-[#0D5F4E] flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div
              onClick={() => handleEdit('summary', data.summary)}
              className="p-4 bg-white border border-[#E8E6E1] rounded-lg cursor-pointer hover:border-[#0D5F4E] transition-colors group-hover:shadow-sm"
            >
              <p className="text-sm text-[#2D2D2D] leading-relaxed">{data.summary}</p>
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-[#0D5F4E] font-medium flex items-center gap-1">
                  <Edit2 className="w-3 h-3" />
                  Click to edit
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 2. Founder Identity & Experience */}
      <div className="bg-white border border-[#E8E6E1] rounded-xl p-6">
        <div className="flex items-center gap-2 mb-5">
          <Users className="w-5 h-5 text-[#0D5F4E]" />
          <h3 className="font-serif text-lg text-[#2D2D2D]">Founder Identity & Experience</h3>
        </div>

        <div className="flex items-start gap-4 mb-5">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] flex items-center justify-center text-white text-xl font-bold">
            {data.founder.name.charAt(0)}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-[#2D2D2D] mb-1">{data.founder.name}</h4>
            <p className="text-sm text-[#4A4A4A] mb-3">{data.founder.role}</p>

            <div className="mb-4">
              <span className="text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-2 block">
                Key Signals
              </span>
              <div className="flex flex-wrap gap-2">
                {data.founder.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs font-bold bg-[#0D5F4E] text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-2 block">
                Experience Highlights
              </span>
              {data.founder.experience.map((exp, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0D5F4E] mt-1.5" />
                  <div>
                    <p className="text-sm text-[#2D2D2D] font-medium">
                      {exp.role} @ {exp.company}
                    </p>
                  </div>
                </div>
              ))}
              {data.founder.education && (
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0D5F4E] mt-1.5" />
                  <p className="text-sm text-[#2D2D2D]">{data.founder.education}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Website Context Insights */}
      <div className="bg-white border border-[#E8E6E1] rounded-xl p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#0D5F4E]" />
            <h3 className="font-serif text-lg text-[#2D2D2D]">Website Context Insights</h3>
          </div>
          <button className="text-xs font-bold text-[#0D5F4E] hover:underline flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            AI Enhance
          </button>
        </div>

        {/* Value Proposition */}
        <div className="mb-5 relative group">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#4A4A4A] uppercase tracking-wider">
              Detected Value Proposition
            </span>
            <button
              onClick={() => handleEdit('valueProposition', data.websiteInsights.valueProposition)}
              className="text-xs text-[#0D5F4E] hover:underline flex items-center gap-1"
            >
              <Edit2 className="w-3 h-3" />
              Edit
            </button>
          </div>

          {editingField === 'valueProposition' ? (
            <div className="space-y-2">
              <textarea
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-[#0D5F4E] rounded-lg text-[#2D2D2D] bg-white focus:outline-none resize-none"
              />
              <div className="flex gap-2">
                <button
                  onClick={() => handleSave('valueProposition')}
                  className="px-4 py-2 bg-[#0D5F4E] text-white rounded-lg text-sm font-bold hover:bg-[#0a4a3c] flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 border border-[#E8E6E1] text-[#4A4A4A] rounded-lg text-sm font-bold hover:border-[#0D5F4E] hover:text-[#0D5F4E] flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <p className="text-sm text-[#2D2D2D] p-3 bg-[#FAFAF8] rounded-lg border border-[#E8E6E1]">
              {data.websiteInsights.valueProposition}
            </p>
          )}
        </div>

        {/* Key Features */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#4A4A4A] uppercase tracking-wider">
              Key Features
            </span>
            <button className="text-xs text-[#0D5F4E] hover:underline flex items-center gap-1">
              <Edit2 className="w-3 h-3" />
              Edit
            </button>
          </div>
          {data.websiteInsights.keyFeatures.length > 0 ? (
            <div className="grid grid-cols-2 gap-2">
              {data.websiteInsights.keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-3 bg-[#FAFAF8] rounded-lg border border-[#E8E6E1] flex items-center gap-2"
                >
                  <Check className="w-4 h-4 text-[#0D5F4E] flex-shrink-0" />
                  <span className="text-xs text-[#2D2D2D]">{feature}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 bg-[#FAFAF8] rounded-lg border border-[#E8E6E1] text-center">
              <AlertCircle className="w-5 h-5 text-[#A3A3A3] mx-auto mb-2" />
              <p className="text-xs text-[#A3A3A3] italic">Not detected</p>
            </div>
          )}
        </div>

        {/* Target Audience */}
        <div className="mb-5">
          <span className="text-xs font-bold text-[#4A4A4A] uppercase tracking-wider mb-2 block">
            Target Audience
          </span>
          <p className="text-sm text-[#2D2D2D] p-3 bg-[#FAFAF8] rounded-lg border border-[#E8E6E1]">
            {data.websiteInsights.targetAudience}
          </p>
        </div>

        {/* Detected Phrases */}
        <div>
          <span className="text-xs font-bold text-[#4A4A4A] uppercase tracking-wider mb-2 block">
            Detected Phrases
          </span>
          <div className="space-y-2">
            {data.websiteInsights.detectedPhrases.map((phrase, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-[#0D5F4E] mt-2" />
                <p className="text-sm text-[#4A4A4A] italic">"{phrase}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Competitor & Market Intelligence */}
      <div className="bg-white border border-[#E8E6E1] rounded-xl p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#0D5F4E]" />
            <h3 className="font-serif text-lg text-[#2D2D2D]">Competitor & Market Intelligence</h3>
          </div>
          <button
            onClick={handleRescan}
            className="text-xs font-bold text-[#0D5F4E] hover:underline flex items-center gap-1"
          >
            <RefreshCw className="w-3 h-3" />
            Re-scan
          </button>
        </div>

        {/* Industry Trends */}
        <div className="mb-5">
          <span className="text-xs font-bold text-[#4A4A4A] uppercase tracking-wider mb-3 block">
            Industry Trends
          </span>
          <div className="space-y-2">
            {data.marketIntelligence.trends.map((trend, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-[#FAFAF8] rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0D5F4E] mt-1.5" />
                <p className="text-sm text-[#2D2D2D]">{trend}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Market Labels */}
        <div className="mb-5">
          <span className="text-xs font-bold text-[#4A4A4A] uppercase tracking-wider mb-3 block">
            Market Labels
          </span>
          <div className="flex flex-wrap gap-2">
            {data.marketIntelligence.marketLabels.map((label, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#F5F5F3] text-[#2D2D2D] border border-[#E8E6E1]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Competitors */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-[#4A4A4A] uppercase tracking-wider">
              Added Competitors
            </span>
            <button
              onClick={handleAddCompetitor}
              className="text-xs font-bold text-[#0D5F4E] hover:underline flex items-center gap-1"
            >
              <Plus className="w-3 h-3" />
              Add Competitor
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.marketIntelligence.competitors.map((competitor, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-[#E8E6E1] text-[#2D2D2D]"
              >
                {competitor}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Detected Signals */}
      <div className="bg-[#FAFAF8] border border-[#E8E6E1] rounded-xl p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-[#0D5F4E]" />
            <h3 className="font-serif text-lg text-[#2D2D2D]">Detected Signals</h3>
          </div>
          <span className="text-xs px-2 py-1 rounded bg-[#A3A3A3]/20 text-[#4A4A4A] font-medium">
            Read-only
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-1 block">
              Industry
            </span>
            <p className="text-sm text-[#2D2D2D] font-medium">{data.detectedSignals.industry}</p>
          </div>
          <div>
            <span className="text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-1 block">
              Stage
            </span>
            <p className="text-sm text-[#2D2D2D] font-medium">{data.detectedSignals.stage}</p>
          </div>
          <div>
            <span className="text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-1 block">
              Messaging Style
            </span>
            <p className="text-sm text-[#2D2D2D] font-medium">
              {data.detectedSignals.messagingStyle}
            </p>
          </div>
          <div>
            <span className="text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-1 block">
              Core Problem
            </span>
            <p className="text-sm text-[#2D2D2D] font-medium">
              {data.detectedSignals.coreProblem}
            </p>
          </div>
          <div>
            <span className="text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-1 block">
              Solution Theme
            </span>
            <p className="text-sm text-[#2D2D2D] font-medium">
              {data.detectedSignals.solutionTheme}
            </p>
          </div>
          <div>
            <span className="text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-1 block">
              Competition Density
            </span>
            <p className="text-sm text-[#2D2D2D] font-medium">
              {data.detectedSignals.competitionDensity}
            </p>
          </div>
          <div className="col-span-2">
            <span className="text-xs font-bold text-[#A3A3A3] uppercase tracking-wider mb-1 block">
              Trend Alignment
            </span>
            <p className="text-sm text-[#2D2D2D] font-medium">
              {data.detectedSignals.trendAlignment}
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-6 border-t border-[#E8E6E1]">
        <div className="flex gap-3">
          <button
            onClick={onBack}
            className="px-6 py-3 border border-[#E8E6E1] text-[#4A4A4A] rounded-lg font-medium hover:border-[#0D5F4E] hover:text-[#0D5F4E] transition-colors flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <button className="text-sm text-[#4A4A4A] font-medium hover:text-[#0D5F4E] transition-colors px-4 py-2 rounded-lg hover:bg-[#F5F5F3]">
            Save & Continue Later
          </button>
        </div>
        <button
          onClick={onNext}
          className="px-8 py-3 rounded-lg font-bold text-white bg-[#0D5F4E] hover:bg-[#0a4a3c] hover:shadow-lg transition-all duration-200 flex items-center gap-2"
        >
          Continue
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
