'use client';

import React, { useState } from 'react';
import { Check, Sparkles, Globe, Users, TrendingUp } from 'lucide-react';

interface CompanyData {
  name: string;
  website: string;
  industry: string;
  stage: string;
  teamSize: string;
}

interface Step1Props {
  data: CompanyData;
  onUpdate: (data: CompanyData) => void;
  onNext: () => void;
}

export function Step1CompanyContext({ data, onUpdate, onNext }: Step1Props) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiDetected, setAiDetected] = useState({
    industry: false,
    competitors: false,
  });

  const handleWebsiteBlur = () => {
    if (data.website && data.website.includes('.')) {
      setIsAnalyzing(true);
      // Simulate AI analysis
      setTimeout(() => {
        if (!data.industry) {
          onUpdate({ ...data, industry: 'B2B SaaS' });
          setAiDetected({ ...aiDetected, industry: true });
        }
        setIsAnalyzing(false);
      }, 1500);
    }
  };

  const canContinue = data.name && data.website && data.industry && data.stage && data.teamSize;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] rounded-2xl mb-6 shadow-lg">
          <Globe className="w-8 h-8 text-white" />
        </div>
        <h1 className="font-serif text-4xl text-[#2D2D2D] mb-3">
          Tell us about your startup
        </h1>
        <p className="text-[#4A4A4A] text-lg">
          We'll use AI to understand your market and create a personalized roadmap
        </p>
      </div>

      {/* Form */}
      <div className="space-y-6">
        {/* Company Name */}
        <div>
          <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
            Company Name *
          </label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => onUpdate({ ...data, name: e.target.value })}
            placeholder="e.g., StartupAI"
            className="w-full px-4 py-3.5 border-2 border-[#E8E6E1] rounded-xl text-[#2D2D2D] placeholder:text-[#A3A3A3] focus:border-[#0D5F4E] focus:outline-none transition-colors duration-200"
          />
        </div>

        {/* Website URL */}
        <div>
          <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
            Website URL *
          </label>
          <div className="relative">
            <input
              type="url"
              value={data.website}
              onChange={(e) => onUpdate({ ...data, website: e.target.value })}
              onBlur={handleWebsiteBlur}
              placeholder="e.g., https://startupai.com"
              className="w-full px-4 py-3.5 border-2 border-[#E8E6E1] rounded-xl text-[#2D2D2D] placeholder:text-[#A3A3A3] focus:border-[#0D5F4E] focus:outline-none transition-colors duration-200"
            />
            {isAnalyzing && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Sparkles className="w-5 h-5 text-[#0D5F4E] animate-pulse" />
              </div>
            )}
          </div>
          {isAnalyzing && (
            <p className="text-xs text-[#0D5F4E] mt-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Analyzing your website...
            </p>
          )}
        </div>

        {/* Industry */}
        <div>
          <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
            Industry *
            {aiDetected.industry && (
              <span className="ml-2 text-xs text-[#0D5F4E] font-normal inline-flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                AI detected
              </span>
            )}
          </label>
          <select
            value={data.industry}
            onChange={(e) => onUpdate({ ...data, industry: e.target.value })}
            className="w-full px-4 py-3.5 border-2 border-[#E8E6E1] rounded-xl text-[#2D2D2D] focus:border-[#0D5F4E] focus:outline-none transition-colors duration-200 bg-white"
          >
            <option value="">Select industry</option>
            <option value="B2B SaaS">B2B SaaS</option>
            <option value="B2C SaaS">B2C SaaS</option>
            <option value="Fintech">Fintech</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Marketplace">Marketplace</option>
            <option value="Healthcare">Healthcare</option>
            <option value="EdTech">EdTech</option>
            <option value="AI/ML">AI/ML</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-2 gap-6">
          {/* Stage */}
          <div>
            <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
              Stage *
            </label>
            <select
              value={data.stage}
              onChange={(e) => onUpdate({ ...data, stage: e.target.value })}
              className="w-full px-4 py-3.5 border-2 border-[#E8E6E1] rounded-xl text-[#2D2D2D] focus:border-[#0D5F4E] focus:outline-none transition-colors duration-200 bg-white"
            >
              <option value="">Select stage</option>
              <option value="Idea">Idea</option>
              <option value="MVP">MVP</option>
              <option value="Early Revenue">Early Revenue</option>
              <option value="Growth">Growth</option>
              <option value="Scale">Scale</option>
            </select>
          </div>

          {/* Team Size */}
          <div>
            <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">
              Team Size *
            </label>
            <select
              value={data.teamSize}
              onChange={(e) => onUpdate({ ...data, teamSize: e.target.value })}
              className="w-full px-4 py-3.5 border-2 border-[#E8E6E1] rounded-xl text-[#2D2D2D] focus:border-[#0D5F4E] focus:outline-none transition-colors duration-200 bg-white"
            >
              <option value="">Select size</option>
              <option value="Solo">Solo Founder</option>
              <option value="2-5">2-5 people</option>
              <option value="6-10">6-10 people</option>
              <option value="11-25">11-25 people</option>
              <option value="25+">25+ people</option>
            </select>
          </div>
        </div>

        {/* AI Insights Card */}
        {data.website && data.industry && (
          <div className="bg-gradient-to-br from-[#0D5F4E]/5 to-[#0D5F4E]/10 border border-[#0D5F4E]/20 rounded-xl p-6 mt-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-[#0D5F4E] uppercase tracking-wider mb-2">
                  AI Quick Analysis
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-[#2D2D2D]">
                    <span className="font-semibold">Detected:</span> {data.industry} in {data.stage.toLowerCase() || 'early'} stage
                  </p>
                  <p className="text-sm text-[#2D2D2D]">
                    <span className="font-semibold">Market:</span> 3 similar competitors found
                  </p>
                  <p className="text-sm text-[#2D2D2D]">
                    <span className="font-semibold">Team:</span> {data.teamSize || 'Size not specified'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action */}
      <div className="flex items-center justify-between mt-12 pt-8 border-t border-[#E8E6E1]">
        <p className="text-sm text-[#A3A3A3]">
          Step 1 of 5 · Takes about 2 minutes
        </p>
        <button
          onClick={onNext}
          disabled={!canContinue}
          className={`px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 flex items-center gap-2 ${
            canContinue
              ? 'bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] hover:shadow-lg hover:scale-105'
              : 'bg-[#A3A3A3] cursor-not-allowed'
          }`}
        >
          Continue
          <TrendingUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}