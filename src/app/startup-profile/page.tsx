'use client';

import { useState, useEffect } from 'react';
import { Save, ArrowRight, AlertCircle, Sparkles, Link as LinkIcon, CheckCircle } from 'lucide-react';

interface StartupProfile {
  name: string;
  industry: string;
  stage: string;
  teamSize: string;
  location: string;
  problem: string;
  solution: string;
  icp: string;
  pricingModel: string;
  goal: string;
  burnRate: string;
  fundingStatus: string;
  advisors: string;
}

const INITIAL_PROFILE: StartupProfile = {
  name: '',
  industry: 'SaaS',
  stage: 'Pre-revenue',
  teamSize: 'Solo founder',
  location: '',
  problem: '',
  solution: '',
  icp: '',
  pricingModel: '',
  goal: '',
  burnRate: '',
  fundingStatus: '',
  advisors: '',
};

const INDUSTRY_OPTIONS = ['SaaS', 'E-commerce', 'Fintech', 'Healthcare', 'EdTech', 'Other'];
const STAGE_OPTIONS = ['Idea', 'Pre-revenue', 'Revenue', 'Growth', 'Scale'];
const TEAM_SIZE_OPTIONS = ['Solo founder', '2-3 co-founders', '4-10 team', '10+ team'];
const FUNDING_OPTIONS = ['Bootstrapped', 'Pre-seed', 'Seed', 'Series A+', 'N/A'];

export default function StartupProfilePage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [profile, setProfile] = useState<StartupProfile>(INITIAL_PROFILE);
  const [completeness, setCompleteness] = useState(0);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(true);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('startup-profile');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setProfile(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.error('Failed to parse saved profile', e);
      }
    }
  }, []);

  // Calculate completeness
  useEffect(() => {
    const totalFields = Object.keys(profile).length;
    const filledFields = Object.values(profile).filter(v => v && v.trim().length > 0).length;
    setCompleteness(Math.round((filledFields / totalFields) * 100));
  }, [profile]);

  const handleSave = () => {
    localStorage.setItem('startup-profile', JSON.stringify(profile));
    setLastSaved(new Date());
  };

  const handleValidate = () => {
    handleSave();
    // Assuming the router is available in the context
    // router.push('/startup-validator-v4');
  };

  const updateField = (field: keyof StartupProfile, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const getMissingFields = () => {
    const missing: string[] = [];
    if (!profile.burnRate) missing.push('Monthly burn rate');
    if (!profile.fundingStatus) missing.push('Funding status');
    if (!profile.advisors) missing.push('Advisory board');
    return missing;
  };

  const getSuggestions = () => {
    if (profile.industry === 'SaaS' && profile.teamSize === 'Solo founder') {
      return {
        burnRate: '$2,000/mo',
        burnRateSource: 'Avg for solo bootstrapped SaaS',
        fundingDistribution: [
          { type: 'Bootstrapped', percent: 78 },
          { type: 'Pre-seed', percent: 15 },
          { type: 'Angel', percent: 7 },
        ],
      };
    }
    return null;
  };

  const applySuggestion = (field: keyof StartupProfile, value: string) => {
    updateField(field, value);
    setShowSuggestions(false);
    setTimeout(() => setShowSuggestions(true), 100);
  };

  const suggestions = getSuggestions();
  const missingFields = getMissingFields();

  return (
    <div className="min-h-screen bg-[#FAF9F7] flex">
      {/* Left Sidebar: Navigation */}
      <div className="w-64 bg-[#F5F3EF] border-r border-[#E8E6E1] p-6">
        <div className="mb-6">
          <div className="text-sm text-gray-600 mb-2">Profile Completeness</div>
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-gray-200 rounded-full h-3">
              <div
                className="bg-[#0d5f4e] h-3 rounded-full transition-all duration-500"
                style={{ width: `${completeness}%` }}
              ></div>
            </div>
            <span className="text-lg font-bold text-[#0d5f4e]">{completeness}%</span>
          </div>
        </div>

        <nav className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-gray-800">Basic Info</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-gray-800">Problem & Solution</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-[#0d5f4e]" />
            <span className="text-gray-800">Market</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            {profile.burnRate && profile.fundingStatus ? (
              <CheckCircle className="w-4 h-4 text-[#0d5f4e]" />
            ) : (
              <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
            )}
            <span className={profile.burnRate && profile.fundingStatus ? 'text-gray-800' : 'text-gray-400'}>
              Financials
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            {profile.advisors ? (
              <CheckCircle className="w-4 h-4 text-[#0d5f4e]" />
            ) : (
              <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
            )}
            <span className={profile.advisors ? 'text-gray-800' : 'text-gray-400'}>Team</span>
          </div>
        </nav>

        {lastSaved && (
          <div className="mt-6 pt-6 border-t border-gray-300">
            <div className="text-xs text-gray-500">
              Last updated: {lastSaved.toLocaleDateString()}
            </div>
          </div>
        )}
      </div>

      {/* Main Content: Profile Form */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-semibold text-[#0E3E1B] mb-8">Startup Profile</h1>

        {/* Startup Name */}
        <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            STARTUP NAME
          </label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => updateField('name', e.target.value)}
            placeholder="e.g., TaskFlow AI"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
          />
        </div>

        {/* Industry & Stage */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              INDUSTRY
            </label>
            <select
              value={profile.industry}
              onChange={(e) => updateField('industry', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
            >
              {INDUSTRY_OPTIONS.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              STAGE
            </label>
            <select
              value={profile.stage}
              onChange={(e) => updateField('stage', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
            >
              {STAGE_OPTIONS.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Team Size & Location */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              TEAM SIZE
            </label>
            <select
              value={profile.teamSize}
              onChange={(e) => updateField('teamSize', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
            >
              {TEAM_SIZE_OPTIONS.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              LOCATION
            </label>
            <input
              type="text"
              value={profile.location}
              onChange={(e) => updateField('location', e.target.value)}
              placeholder="e.g., San Francisco"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
            />
          </div>
        </div>

        {/* Problem */}
        <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            PROBLEM
          </label>
          <textarea
            value={profile.problem}
            onChange={(e) => updateField('problem', e.target.value)}
            placeholder="What specific pain does your customer experience?"
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent resize-none"
          />
        </div>

        {/* Solution */}
        <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            SOLUTION
          </label>
          <textarea
            value={profile.solution}
            onChange={(e) => updateField('solution', e.target.value)}
            placeholder="What does your product do?"
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent resize-none"
          />
        </div>

        {/* ICP */}
        <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ICP (Ideal Customer)
          </label>
          <textarea
            value={profile.icp}
            onChange={(e) => updateField('icp', e.target.value)}
            placeholder="Who is your ideal customer? Be specific."
            rows={2}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent resize-none"
          />
        </div>

        {/* Pricing Model */}
        <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            PRICING MODEL
          </label>
          <input
            type="text"
            value={profile.pricingModel}
            onChange={(e) => updateField('pricingModel', e.target.value)}
            placeholder="e.g., $29/mo Starter | $79/mo Pro"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
          />
        </div>

        {/* Goal (90 days) */}
        <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            GOAL (90 days)
          </label>
          <input
            type="text"
            value={profile.goal}
            onChange={(e) => updateField('goal', e.target.value)}
            placeholder="e.g., 10 paying customers"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
          />
        </div>

        {/* Optional: Financials */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
          <div className="flex items-start gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
            <div>
              <div className="font-medium text-amber-900 mb-1">Optional Fields</div>
              <div className="text-sm text-amber-800">
                These fields unlock additional insights in your validation report
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Burn Rate
              </label>
              <input
                type="text"
                value={profile.burnRate}
                onChange={(e) => updateField('burnRate', e.target.value)}
                placeholder="e.g., $2,000/mo"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Funding Status
              </label>
              <select
                value={profile.fundingStatus}
                onChange={(e) => updateField('fundingStatus', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
              >
                <option value="">Select...</option>
                {FUNDING_OPTIONS.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Advisory Board
            </label>
            <input
              type="text"
              value={profile.advisors}
              onChange={(e) => updateField('advisors', e.target.value)}
              placeholder="e.g., 2 advisors (product, marketing)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-white text-[#0d5f4e] border border-[#0d5f4e] rounded-lg hover:bg-[#F5F3EF] flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            Save Profile
          </button>

          <button
            onClick={handleValidate}
            disabled={completeness < 50}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
              completeness >= 50
                ? 'bg-[#0d5f4e] text-white hover:bg-[#0E3E1B]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Run Validation
            <ArrowRight className="w-4 h-4" />
          </button>

          {completeness < 50 && (
            <span className="text-sm text-gray-500">
              Complete at least 50% to validate
            </span>
          )}
        </div>
      </div>

      {/* Right Sidebar: Suggestions */}
      <div className="w-80 bg-[#F5F3EF] border-l border-[#E8E6E1] p-6 overflow-y-auto">
        {missingFields.length > 0 && (
          <div className="bg-white rounded-lg p-4 mb-6 border border-amber-300">
            <div className="flex items-start gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <div className="font-medium text-[#0E3E1B] mb-1">Completeness Check</div>
                <div className="text-sm text-gray-600 mb-2">Missing fields:</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  {missingFields.map(field => (
                    <li key={field}>• {field}</li>
                  ))}
                </ul>
                <div className="text-xs text-gray-500 mt-3">
                  These fields unlock: Financial projections, Team section in report
                </div>
              </div>
            </div>
          </div>
        )}

        {suggestions && showSuggestions && (
          <div className="bg-white rounded-lg p-4 border border-[#6b9d89]">
            <div className="flex items-start gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-[#6b9d89] mt-0.5" />
              <div>
                <div className="font-medium text-[#0E3E1B] mb-1">Smart Suggestions</div>
                <div className="text-sm text-gray-600 mb-3">
                  Based on "{profile.industry}" + "{profile.teamSize}":
                </div>

                {!profile.burnRate && (
                  <div className="mb-4">
                    <div className="text-sm text-gray-700 mb-2">
                      Avg burn rate: <strong>{suggestions.burnRate}</strong>
                    </div>
                    <div className="text-xs text-gray-500 mb-2">
                      {suggestions.burnRateSource}
                    </div>
                    <button
                      onClick={() => applySuggestion('burnRate', suggestions.burnRate)}
                      className="text-sm text-[#0d5f4e] hover:text-[#0E3E1B] flex items-center gap-1"
                    >
                      Apply suggestion →
                    </button>
                  </div>
                )}

                {!profile.fundingStatus && (
                  <div>
                    <div className="text-sm text-gray-700 mb-2">Typical funding:</div>
                    <ul className="text-sm text-gray-600 space-y-1 mb-2">
                      {suggestions.fundingDistribution.map(item => (
                        <li key={item.type}>• {item.type} ({item.percent}%)</li>
                      ))}
                    </ul>
                    <button
                      onClick={() => applySuggestion('fundingStatus', 'Bootstrapped')}
                      className="text-sm text-[#0d5f4e] hover:text-[#0E3E1B] flex items-center gap-1"
                    >
                      Apply "Bootstrapped" →
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* URL Import (placeholder for future) */}
        <div className="bg-white rounded-lg p-4 mt-6 border border-gray-200">
          <div className="flex items-start gap-2 mb-3">
            <LinkIcon className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <div className="font-medium text-[#0E3E1B] mb-1">URL Import</div>
              <div className="text-sm text-gray-600 mb-3">
                Paste a landing page or LinkedIn URL to auto-fill missing fields:
              </div>
              <input
                type="url"
                placeholder="https://..."
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm mb-2 opacity-50 cursor-not-allowed"
              />
              <button
                disabled
                className="text-sm text-gray-400 cursor-not-allowed"
              >
                Import → (Coming soon)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}