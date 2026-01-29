'use client';

import React, { useState } from 'react';
import { Globe, RefreshCw, Plus, X, Check, Sparkles, Link, AlertCircle, ChevronDown } from 'lucide-react';

interface FormData {
  companyName: string;
  description: string;
  targetMarket: string;
  industryDropdown: string;
  subCategory: string;
  websiteUrl: string;
  linkedinUrl: string;
  additionalUrls: string[];
  industry: string[];
  businessModel: string[];
  stage: string;
}

interface Step1Props {
  data: FormData;
  onUpdate: (data: FormData) => void;
  onNext: () => void;
}

const INDUSTRY_DROPDOWN_OPTIONS = [
  { value: '', label: 'Select an industry' },
  { value: 'Retail & eCommerce', label: 'Retail & eCommerce' },
  { value: 'SaaS', label: 'SaaS' },
  { value: 'Fintech', label: 'Fintech' },
  { value: 'Healthcare', label: 'Healthcare' },
  { value: 'EdTech', label: 'EdTech' },
  { value: 'AI/ML', label: 'AI/ML' },
  { value: 'Marketplace', label: 'Marketplace' },
  { value: 'Consumer', label: 'Consumer' },
  { value: 'Enterprise', label: 'Enterprise' },
  { value: 'Other', label: 'Other' },
];

const SUB_CATEGORY_OPTIONS: Record<string, Array<{ value: string; label: string; competitors?: string }>> = {
  'Retail & eCommerce': [
    { value: '', label: 'Select a sub-category' },
    { value: 'B2B Marketplace', label: 'B2B Marketplace', competitors: 'Retail & eCommerce B2B Marketplace (3,829 startups) competes: FashionOS is an AI-native, creative-workflow platform' },
    { value: 'B2C Marketplace', label: 'B2C Marketplace' },
    { value: 'D2C Brand', label: 'D2C Brand' },
    { value: 'Ecommerce Platform', label: 'Ecommerce Platform' },
  ],
  'SaaS': [
    { value: '', label: 'Select a sub-category' },
    { value: 'B2B SaaS', label: 'B2B SaaS' },
    { value: 'B2C SaaS', label: 'B2C SaaS' },
    { value: 'Vertical SaaS', label: 'Vertical SaaS' },
    { value: 'Horizontal SaaS', label: 'Horizontal SaaS' },
  ],
  'Fintech': [
    { value: '', label: 'Select a sub-category' },
    { value: 'Payments', label: 'Payments' },
    { value: 'Lending', label: 'Lending' },
    { value: 'Banking', label: 'Banking' },
    { value: 'Insurance', label: 'Insurance' },
  ],
  'Healthcare': [
    { value: '', label: 'Select a sub-category' },
    { value: 'Telehealth', label: 'Telehealth' },
    { value: 'MedTech', label: 'MedTech' },
    { value: 'BioTech', label: 'BioTech' },
    { value: 'HealthTech', label: 'HealthTech' },
  ],
  'EdTech': [
    { value: '', label: 'Select a sub-category' },
    { value: 'K-12', label: 'K-12' },
    { value: 'Higher Education', label: 'Higher Education' },
    { value: 'Corporate Training', label: 'Corporate Training' },
    { value: 'Online Courses', label: 'Online Courses' },
  ],
};

const INDUSTRY_OPTIONS = [
  'SaaS', 'Marketplace', 'AI/ML', 'E-commerce', 'Fintech', 'Healthcare', 'EdTech', 'AITMC', 'Consumer', 'Other'
];

const BUSINESS_MODEL_OPTIONS = [
  'B2B', 'B2C', 'B2B2C', 'Marketplace', 'Platform', 'Services'
];

const STAGE_OPTIONS = [
  'Idea', 'Pre-seed', 'Seed', 'Series A', 'Series B+'
];

export function Step1ContextEnrichment({ data, onUpdate, onNext }: Step1Props) {
  const [isExtracting, setIsExtracting] = useState(false);
  const [aiDetected, setAiDetected] = useState(false);
  const [newUrl, setNewUrl] = useState('');
  const [isEditingAI, setIsEditingAI] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleExtract = () => {
    if (!data.websiteUrl) return;
    setIsExtracting(true);
    setErrors({});
    
    // Simulate AI extraction
    setTimeout(() => {
      onUpdate({
        ...data,
        industry: ['SaaS', 'AI/ML'],
        businessModel: ['B2B', 'Platform'],
        stage: 'Seed',
      });
      setAiDetected(true);
      setIsExtracting(false);
    }, 2000);
  };

  const handleAddUrl = () => {
    if (newUrl.trim() && !data.additionalUrls.includes(newUrl.trim())) {
      onUpdate({
        ...data,
        additionalUrls: [...data.additionalUrls, newUrl.trim()],
      });
      setNewUrl('');
    }
  };

  const handleRemoveUrl = (url: string) => {
    onUpdate({
      ...data,
      additionalUrls: data.additionalUrls.filter((u) => u !== url),
    });
  };

  const toggleIndustry = (industry: string) => {
    if (!isEditingAI && !aiDetected) return;
    const newIndustries = data.industry.includes(industry)
      ? data.industry.filter((i) => i !== industry)
      : [...data.industry, industry];
    onUpdate({ ...data, industry: newIndustries });
  };

  const toggleBusinessModel = (model: string) => {
    if (!isEditingAI && !aiDetected) return;
    const newModels = data.businessModel.includes(model)
      ? data.businessModel.filter((m) => m !== model)
      : [...data.businessModel, model];
    onUpdate({ ...data, businessModel: newModels });
  };

  const setStage = (stage: string) => {
    if (!isEditingAI && !aiDetected) return;
    onUpdate({ ...data, stage });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!data.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!data.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (data.description.length < 20) {
      newErrors.description = 'Description must be at least 20 characters';
    } else if (data.description.length > 500) {
      newErrors.description = 'Description must not exceed 500 characters';
    }

    if (!data.targetMarket.trim()) {
      newErrors.targetMarket = 'Target market is required';
    }

    if (!data.industryDropdown.trim()) {
      newErrors.industryDropdown = 'Industry is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateForm()) {
      onNext();
    }
  };

  const descriptionCount = data.description.length;
  const targetMarketCount = data.targetMarket.length;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="relative pb-6 border-b border-[#E8E6E1]">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold text-[#0D5F4E] uppercase tracking-wider bg-[#0D5F4E]/10 px-3 py-1 rounded-full">
            Step 1 of 4
          </span>
        </div>
        <h1 className="font-serif text-3xl text-[#2D2D2D] mb-2 tracking-tight">
          Context & Enrichment
        </h1>
        <p className="text-sm text-[#4A4A4A] leading-relaxed">
          Add your links and Gemini 3 will build your profile
        </p>
      </div>

      {/* Primary Fields */}
      <div className="space-y-6">
        {/* Company Name */}
        <div className="group">
          <label className="block text-sm font-bold text-[#2D2D2D] mb-2 flex items-center gap-2">
            Company Name
            <span className="text-[#EF4444]">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={data.companyName}
              onChange={(e) => {
                onUpdate({ ...data, companyName: e.target.value });
                if (errors.companyName) setErrors({ ...errors, companyName: '' });
              }}
              onFocus={() => setFocusedField('companyName')}
              onBlur={() => setFocusedField(null)}
              placeholder="FashionOS"
              className={`w-full px-4 py-3 border rounded-lg text-[#2D2D2D] placeholder:text-[#A3A3A3] transition-all duration-200 ${
                errors.companyName
                  ? 'border-[#EF4444] bg-[#EF4444]/5'
                  : focusedField === 'companyName'
                  ? 'border-[#0D5F4E] bg-white shadow-sm'
                  : 'border-[#E8E6E1] bg-[#FAFAF8] hover:border-[#0D5F4E]/50'
              }`}
            />
            {data.companyName && !errors.companyName && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Check className="w-4 h-4 text-[#0D5F4E]" />
              </div>
            )}
          </div>
          {errors.companyName && (
            <p className="text-xs text-[#EF4444] mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.companyName}
            </p>
          )}
        </div>

        {/* Description */}
        <div className="group">
          <label className="block text-sm font-bold text-[#2D2D2D] mb-2 flex items-center gap-2">
            Describe your startup
            <span className="text-[#EF4444]">*</span>
          </label>
          <div className="relative">
            <textarea
              value={data.description}
              onChange={(e) => {
                onUpdate({ ...data, description: e.target.value });
                if (errors.description) setErrors({ ...errors, description: '' });
              }}
              onFocus={() => setFocusedField('description')}
              onBlur={() => setFocusedField(null)}
              placeholder="What do you build and for whom?"
              rows={4}
              maxLength={500}
              className={`w-full px-4 py-3 border rounded-lg text-[#2D2D2D] placeholder:text-[#A3A3A3] resize-none transition-all duration-200 leading-relaxed ${
                errors.description
                  ? 'border-[#EF4444] bg-[#EF4444]/5'
                  : focusedField === 'description'
                  ? 'border-[#0D5F4E] bg-white shadow-sm'
                  : 'border-[#E8E6E1] bg-[#FAFAF8] hover:border-[#0D5F4E]/50'
              }`}
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-[#A3A3A3] italic">
              e.g., "FashionOS is an AI-powered operating system for fashion brands and event organizers that turns complex planning, content creation, and collaboration into bite-fast, structured workflows."
            </p>
            <div className="flex items-center gap-2 flex-shrink-0 ml-4">
              <span
                className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                  descriptionCount < 20
                    ? 'bg-[#A3A3A3]/10 text-[#A3A3A3]'
                    : descriptionCount > 450
                    ? 'bg-[#EF4444]/10 text-[#EF4444]'
                    : 'bg-[#0D5F4E]/10 text-[#0D5F4E]'
                }`}
              >
                {descriptionCount}/500
              </span>
            </div>
          </div>
          {errors.description && (
            <p className="text-xs text-[#EF4444] mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.description}
            </p>
          )}
        </div>

        {/* Target Market */}
        <div className="group">
          <label className="block text-sm font-bold text-[#2D2D2D] mb-2 flex items-center gap-2">
            Target market
            <span className="text-[#EF4444]">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={data.targetMarket}
              onChange={(e) => {
                onUpdate({ ...data, targetMarket: e.target.value });
                if (errors.targetMarket) setErrors({ ...errors, targetMarket: '' });
              }}
              onFocus={() => setFocusedField('targetMarket')}
              onBlur={() => setFocusedField(null)}
              placeholder="Fashion designers, retailers & media event organizers"
              maxLength={200}
              className={`w-full px-4 py-3 border rounded-lg text-[#2D2D2D] placeholder:text-[#A3A3A3] transition-all duration-200 ${
                errors.targetMarket
                  ? 'border-[#EF4444] bg-[#EF4444]/5'
                  : focusedField === 'targetMarket'
                  ? 'border-[#0D5F4E] bg-white shadow-sm'
                  : 'border-[#E8E6E1] bg-[#FAFAF8] hover:border-[#0D5F4E]/50'
              }`}
            />
            {data.targetMarket && !errors.targetMarket && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Check className="w-4 h-4 text-[#0D5F4E]" />
              </div>
            )}
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-[#A3A3A3] italic">
              Who uses, advocates, and whom they operate.
            </p>
            <span className="text-xs text-[#A3A3A3] font-medium">
              {targetMarketCount}/200
            </span>
          </div>
          {errors.targetMarket && (
            <p className="text-xs text-[#EF4444] mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.targetMarket}
            </p>
          )}
        </div>

        {/* Industry Dropdown */}
        <div className="group">
          <label className="block text-sm font-bold text-[#2D2D2D] mb-2 flex items-center gap-2">
            Industry
            <span className="text-[#EF4444]">*</span>
          </label>
          <div className="relative">
            <select
              value={data.industryDropdown}
              onChange={(e) => {
                onUpdate({ ...data, industryDropdown: e.target.value, subCategory: '' });
                if (errors.industryDropdown) setErrors({ ...errors, industryDropdown: '' });
              }}
              onFocus={() => setFocusedField('industryDropdown')}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 pr-10 border rounded-lg text-[#2D2D2D] bg-white appearance-none cursor-pointer transition-all duration-200 ${
                errors.industryDropdown
                  ? 'border-[#EF4444] bg-[#EF4444]/5'
                  : focusedField === 'industryDropdown'
                  ? 'border-[#0D5F4E] shadow-sm'
                  : 'border-[#E8E6E1] hover:border-[#0D5F4E]/50'
              }`}
            >
              {INDUSTRY_DROPDOWN_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-[#A3A3A3] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          {errors.industryDropdown && (
            <p className="text-xs text-[#EF4444] mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.industryDropdown}
            </p>
          )}
        </div>

        {/* Sub-category Dropdown */}
        {data.industryDropdown && SUB_CATEGORY_OPTIONS[data.industryDropdown] && (
          <div className="group">
            <label className="block text-sm font-bold text-[#2D2D2D] mb-2 flex items-center gap-2">
              Sub-category (optional)
              <button className="text-xs text-[#0D5F4E] hover:underline flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                AI Refine
              </button>
            </label>
            <div className="relative">
              <select
                value={data.subCategory}
                onChange={(e) => onUpdate({ ...data, subCategory: e.target.value })}
                onFocus={() => setFocusedField('subCategory')}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-3 pr-10 border rounded-lg text-[#2D2D2D] bg-white appearance-none cursor-pointer transition-all duration-200 ${
                  focusedField === 'subCategory'
                    ? 'border-[#0D5F4E] shadow-sm'
                    : 'border-[#E8E6E1] hover:border-[#0D5F4E]/50'
                }`}
              >
                {SUB_CATEGORY_OPTIONS[data.industryDropdown].map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-[#A3A3A3] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <p className="text-xs text-[#A3A3A3] mt-2 italic">
              Be specific to reduce the category keywords
            </p>
            {data.subCategory && SUB_CATEGORY_OPTIONS[data.industryDropdown].find(opt => opt.value === data.subCategory)?.competitors && (
              <div className="mt-3 p-3 bg-[#FAFAF8] border border-[#E8E6E1] rounded-lg">
                <p className="text-xs text-[#4A4A4A] leading-relaxed">
                  {SUB_CATEGORY_OPTIONS[data.industryDropdown].find(opt => opt.value === data.subCategory)?.competitors}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Enrichment Section */}
      <div className="pt-6 border-t border-[#E8E6E1]">
        {/* Website URL */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-[#2D2D2D] mb-2 flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#0D5F4E]" />
            Website URL
            <span className="text-xs font-medium text-[#0D5F4E] px-2 py-0.5 rounded bg-[#0D5F4E]/10">
              recommended
            </span>
          </label>
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <input
                type="url"
                value={data.websiteUrl}
                onChange={(e) => onUpdate({ ...data, websiteUrl: e.target.value })}
                onFocus={() => setFocusedField('websiteUrl')}
                onBlur={() => setFocusedField(null)}
                placeholder="https://www.fashionos.co/"
                className={`w-full px-4 py-3 pl-10 border rounded-lg text-[#2D2D2D] placeholder:text-[#A3A3A3] transition-all duration-200 ${
                  focusedField === 'websiteUrl'
                    ? 'border-[#0D5F4E] bg-white shadow-sm'
                    : 'border-[#E8E6E1] bg-[#FAFAF8] hover:border-[#0D5F4E]/50'
                }`}
              />
              <Globe className="w-4 h-4 text-[#A3A3A3] absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
            <button
              onClick={handleExtract}
              disabled={!data.websiteUrl || isExtracting}
              className={`px-6 py-3 rounded-lg font-bold text-sm text-white transition-all duration-200 flex items-center gap-2 ${
                data.websiteUrl && !isExtracting
                  ? 'bg-[#0D5F4E] hover:bg-[#0a4a3c] hover:shadow-md'
                  : 'bg-[#A3A3A3] cursor-not-allowed'
              }`}
            >
              {isExtracting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Extracting
                </>
              ) : aiDetected ? (
                <>
                  <RefreshCw className="w-4 h-4" />
                  Re-extract
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Extract
                </>
              )}
            </button>
          </div>
        </div>

        {/* LinkedIn URL */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-[#2D2D2D] mb-2 flex items-center gap-2">
            <Link className="w-4 h-4 text-[#4A4A4A]" />
            LinkedIn URL
          </label>
          <input
            type="url"
            value={data.linkedinUrl}
            onChange={(e) => onUpdate({ ...data, linkedinUrl: e.target.value })}
            onFocus={() => setFocusedField('linkedinUrl')}
            onBlur={() => setFocusedField(null)}
            placeholder="https://linkedin.com/company/..."
            className={`w-full px-4 py-3 border rounded-lg text-[#2D2D2D] placeholder:text-[#A3A3A3] transition-all duration-200 ${
              focusedField === 'linkedinUrl'
                ? 'border-[#0D5F4E] bg-white shadow-sm'
                : 'border-[#E8E6E1] bg-[#FAFAF8] hover:border-[#0D5F4E]/50'
            }`}
          />
        </div>

        {/* Additional URLs */}
        <div>
          <label className="block text-sm font-bold text-[#2D2D2D] mb-2 flex items-center gap-2">
            <Link className="w-4 h-4 text-[#4A4A4A]" />
            Additional URLs (optional)
          </label>
          <p className="text-xs text-[#A3A3A3] mb-3 italic">
            Blog, press releases, docs...
          </p>
          <div className="space-y-2 mb-3">
            {data.additionalUrls.map((url, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={url}
                  readOnly
                  className="flex-1 px-3 py-2 bg-[#F5F5F3] border border-[#E8E6E1] rounded-lg text-sm text-[#4A4A4A]"
                />
                <button
                  onClick={() => handleRemoveUrl(url)}
                  className="p-2 text-[#EF4444] hover:bg-[#EF4444]/10 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="url"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddUrl()}
              placeholder="blog, press release, docs..."
              className="flex-1 px-4 py-2 border border-[#E8E6E1] rounded-lg text-sm text-[#2D2D2D] placeholder:text-[#A3A3A3] bg-[#FAFAF8] focus:border-[#0D5F4E] focus:outline-none transition-colors"
            />
            <button
              onClick={handleAddUrl}
              disabled={!newUrl.trim()}
              className={`px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-1.5 transition-colors ${
                newUrl.trim()
                  ? 'bg-[#0D5F4E] text-white hover:bg-[#0a4a3c]'
                  : 'bg-[#F5F5F3] text-[#A3A3A3] cursor-not-allowed'
              }`}
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
        </div>
      </div>

      {/* AI-Detected Section */}
      {aiDetected && (
        <div className="pt-6 border-t border-[#E8E6E1] animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0D5F4E]" />
              <span className="text-sm font-bold text-[#2D2D2D]">
                AI DETECTED (click to edit)
              </span>
            </div>
            <button
              onClick={() => setIsEditingAI(!isEditingAI)}
              className="text-xs font-bold text-[#0D5F4E] hover:underline"
            >
              From AI
            </button>
          </div>

          {/* Industry */}
          <div className="mb-5">
            <label className="block text-xs font-bold text-[#4A4A4A] uppercase tracking-wider mb-2.5">
              Industry (select multiple) *
            </label>
            <div className="flex flex-wrap gap-2">
              {INDUSTRY_OPTIONS.map((industry) => (
                <button
                  key={industry}
                  onClick={() => toggleIndustry(industry)}
                  disabled={!isEditingAI && !aiDetected}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    data.industry.includes(industry)
                      ? 'bg-[#0D5F4E] text-white'
                      : 'bg-[#F5F5F3] text-[#4A4A4A] hover:bg-[#E8E6E1]'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          {/* Business Model */}
          <div className="mb-5">
            <label className="block text-xs font-bold text-[#4A4A4A] uppercase tracking-wider mb-2.5">
              Business Model (select multiple) *
            </label>
            <div className="flex flex-wrap gap-2">
              {BUSINESS_MODEL_OPTIONS.map((model) => (
                <button
                  key={model}
                  onClick={() => toggleBusinessModel(model)}
                  disabled={!isEditingAI && !aiDetected}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    data.businessModel.includes(model)
                      ? 'bg-[#0D5F4E] text-white'
                      : 'bg-[#F5F5F3] text-[#4A4A4A] hover:bg-[#E8E6E1]'
                  }`}
                >
                  {model}
                </button>
              ))}
            </div>
          </div>

          {/* Stage */}
          <div>
            <label className="block text-xs font-bold text-[#4A4A4A] uppercase tracking-wider mb-2.5">
              Stage *
            </label>
            <div className="flex flex-wrap gap-2">
              {STAGE_OPTIONS.map((stage) => (
                <button
                  key={stage}
                  onClick={() => setStage(stage)}
                  disabled={!isEditingAI && !aiDetected}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    data.stage === stage
                      ? 'bg-[#0D5F4E] text-white'
                      : 'bg-[#F5F5F3] text-[#4A4A4A] hover:bg-[#E8E6E1]'
                  }`}
                >
                  {stage}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-6 border-t border-[#E8E6E1]">
        <button className="text-sm text-[#4A4A4A] font-medium hover:text-[#0D5F4E] transition-colors px-4 py-2 rounded-lg hover:bg-[#F5F5F3]">
          Save & Continue Later
        </button>
        <button
          onClick={handleContinue}
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