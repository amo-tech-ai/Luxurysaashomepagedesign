'use client';

import { useState, useEffect } from 'react';
import { Save, ArrowRight, AlertCircle, Sparkles, Link as LinkIcon, CheckCircle, Lock, Unlock } from 'lucide-react';
import { DashboardLayout } from '@/components/DashboardLayout';

interface StartupProfile {
  name: string;
  industry: string;
  stage: string;
  teamSize: string;
  location: string;
  website: string;
  linkedin: string;
  twitter: string;
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
  website: '',
  linkedin: '',
  twitter: '',
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

// Circular Progress Indicator Component
function CircularProgress({ percentage, missingCount }: { percentage: number; missingCount: number }) {
  const [showDetails, setShowDetails] = useState(false);
  const radius = 60;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div 
      className="relative cursor-pointer"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          stroke="#E8E6E1"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress circle */}
        <circle
          stroke="#0d5f4e"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-500 ease-out"
        />
      </svg>
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-2xl font-bold text-[#0d5f4e]">{percentage}%</div>
        <div className="text-xs text-gray-500">Complete</div>
      </div>
      {/* Helper text */}
      <div className="text-center mt-3 text-sm text-gray-600">
        {missingCount > 0 ? `${missingCount} field${missingCount !== 1 ? 's' : ''} remaining` : 'All fields complete'}
      </div>
      
      {/* Hover details */}
      {showDetails && missingCount > 0 && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-[#0d5f4e] rounded-lg p-3 shadow-lg z-10 w-48">
          <div className="text-xs font-medium text-[#0d5f4e] mb-1">Missing Fields:</div>
          <div className="text-xs text-gray-600 space-y-1">
            {missingCount > 0 && <div>• Optional fields</div>}
          </div>
        </div>
      )}
    </div>
  );
}

// Missing Fields Breakdown Component
function MissingFieldsBreakdown({ profile }: { profile: StartupProfile }) {
  const fields = [
    { name: 'Monthly burn rate', key: 'burnRate', value: profile.burnRate },
    { name: 'Funding status', key: 'fundingStatus', value: profile.fundingStatus },
    { name: 'Advisory board', key: 'advisors', value: profile.advisors },
  ];

  return (
    <div className="space-y-3">
      <div className="text-sm font-medium text-gray-700 mb-3">Field Completion</div>
      {fields.map((field) => (
        <div key={field.key} className="space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-600">{field.name}</span>
            {field.value ? (
              <CheckCircle className="w-3 h-3 text-[#0d5f4e]" />
            ) : (
              <div className="w-3 h-3 border border-gray-300 rounded-full" />
            )}
          </div>
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                field.value ? 'bg-[#0d5f4e] w-full' : 'w-0'
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// Unlock Impact Map Component
function UnlockImpactMap({ profile }: { profile: StartupProfile }) {
  const impacts = [
    {
      field: 'Monthly burn rate',
      unlocks: 'Financial projections',
      completed: !!profile.burnRate,
    },
    {
      field: 'Funding status',
      unlocks: 'Runway analysis',
      completed: !!profile.fundingStatus,
    },
    {
      field: 'Advisory board',
      unlocks: 'Team section',
      completed: !!profile.advisors,
    },
  ];

  return (
    <div className="space-y-3">
      <div className="text-sm font-medium text-gray-700 mb-3">Unlock Features</div>
      {impacts.map((impact, idx) => (
        <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              {impact.completed ? (
                <Unlock className="w-3 h-3 text-[#0d5f4e]" />
              ) : (
                <Lock className="w-3 h-3 text-gray-400" />
              )}
              <span className={impact.completed ? 'text-[#0d5f4e]' : 'text-gray-400'}>
                {impact.field}
              </span>
            </div>
            <div className="text-xs text-gray-500 mt-1 ml-5">→ {impact.unlocks}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Completion Milestone Strip Component
function CompletionMilestoneStrip({ percentage }: { percentage: number }) {
  const milestones = [
    { threshold: 0, label: 'Basics', range: '0-40%' },
    { threshold: 41, label: 'Strategy-ready', range: '41-80%' },
    { threshold: 81, label: 'Advanced', range: '81-100%' },
  ];

  const currentMilestone = milestones.reduce((current, milestone) => {
    return percentage >= milestone.threshold ? milestone : current;
  }, milestones[0]);

  return (
    <div className="mb-6">
      <div className="text-xs font-medium text-gray-600 mb-3">Progress Stage</div>
      <div className="relative">
        {/* Progress bar background */}
        <div className="h-2 bg-gray-200 rounded-full mb-3" />
        
        {/* Milestone markers */}
        <div className="absolute top-0 left-0 right-0 flex justify-between">
          {milestones.map((milestone, idx) => {
            const isActive = percentage >= milestone.threshold;
            const isCurrent = currentMilestone.label === milestone.label;
            
            return (
              <div key={idx} className="flex flex-col items-center" style={{ width: '33.33%' }}>
                <div
                  className={`w-2 h-2 rounded-full transition-all ${
                    isActive ? 'bg-[#0d5f4e]' : 'bg-gray-300'
                  } ${isCurrent ? 'ring-2 ring-[#6b9d89] ring-offset-2' : ''}`}
                />
                <div className={`text-xs mt-2 text-center ${isActive ? 'text-[#0d5f4e] font-medium' : 'text-gray-400'}`}>
                  {milestone.label}
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5">{milestone.range}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Profile Match Confidence Gauge Component
function ProfileMatchConfidence({ industry, teamSize }: { industry: string; teamSize: string }) {
  // Calculate confidence based on how specific the profile is
  const confidence = industry === 'SaaS' && teamSize === 'Solo founder' ? 82 : 65;
  const angle = (confidence / 100) * 180; // Semi-circle (0-180 degrees)

  return (
    <div className="bg-white rounded-lg p-4 border border-[#6b9d89] mb-4">
      <div className="text-sm font-medium text-[#0E3E1B] mb-3">Match Confidence</div>
      
      {/* Semi-circular gauge */}
      <div className="relative flex justify-center mb-3">
        <svg width="120" height="70" viewBox="0 0 120 70">
          {/* Background arc */}
          <path
            d="M 10 60 A 50 50 0 0 1 110 60"
            fill="none"
            stroke="#E8E6E1"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Progress arc */}
          <path
            d="M 10 60 A 50 50 0 0 1 110 60"
            fill="none"
            stroke="#0d5f4e"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${(angle / 180) * 157} 157`}
            className="transition-all duration-500"
          />
          {/* Center text */}
          <text x="60" y="50" textAnchor="middle" className="text-xl font-bold fill-[#0d5f4e]">
            {confidence}%
          </text>
        </svg>
      </div>
      
      <div className="text-xs text-gray-600 text-center">
        Based on {industry} + {teamSize}
      </div>
    </div>
  );
}

// Burn Rate Benchmark Component
function BurnRateBenchmark({ suggestedRate }: { suggestedRate: string }) {
  return (
    <div className="mb-4">
      <div className="text-sm text-gray-700 mb-3">Burn Rate Benchmark</div>
      
      {/* Range bar */}
      <div className="relative h-8 bg-gray-200 rounded-lg overflow-hidden mx-2">
        {/* Typical range indicator */}
        <div className="absolute inset-y-0 left-[25%] right-[25%] bg-[#E8F4F1]" />
        
        {/* Marker at suggested rate */}
        <div className="absolute inset-y-0 left-1/2 w-1 bg-[#0d5f4e]">
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#0d5f4e] rounded-full" />
        </div>
      </div>
      
      <div className="flex justify-between text-xs text-gray-500 mt-2 px-2">
        <span>$500</span>
        <span className="text-[#0d5f4e] font-medium">{suggestedRate}</span>
        <span>$5,000</span>
      </div>
      
      <div className="text-xs text-gray-600 mt-2 text-center px-2">
        Aligned with similar solo SaaS founders
      </div>
    </div>
  );
}

// Funding Path Distribution Donut Chart Component
function FundingPathDistribution({ 
  distribution, 
  onApply 
}: { 
  distribution: { type: string; percent: number }[];
  onApply: (type: string) => void;
}) {
  const radius = 50;
  const innerRadius = 35;
  const centerX = 60;
  const centerY = 60;

  // Calculate angles for each segment
  let currentAngle = -90; // Start from top
  const segments = distribution.map((item) => {
    const angle = (item.percent / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;
    return { ...item, startAngle, endAngle };
  });

  const polarToCartesian = (angle: number, r: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: centerX + r * Math.cos(rad),
      y: centerY + r * Math.sin(rad),
    };
  };

  const createArcPath = (startAngle: number, endAngle: number) => {
    const outerStart = polarToCartesian(startAngle, radius);
    const outerEnd = polarToCartesian(endAngle, radius);
    const innerStart = polarToCartesian(startAngle, innerRadius);
    const innerEnd = polarToCartesian(endAngle, innerRadius);
    
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;

    return [
      `M ${outerStart.x} ${outerStart.y}`,
      `A ${radius} ${radius} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
      `L ${innerEnd.x} ${innerEnd.y}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y}`,
      'Z',
    ].join(' ');
  };

  const colors = ['#0d5f4e', '#6b9d89', '#E8F4F1'];

  return (
    <div>
      <div className="text-sm text-gray-700 mb-3">Funding Distribution</div>
      
      <div className="flex items-center gap-4">
        {/* Donut chart */}
        <svg width="120" height="120" className="flex-shrink-0">
          {segments.map((segment, idx) => (
            <path
              key={segment.type}
              d={createArcPath(segment.startAngle, segment.endAngle)}
              fill={colors[idx]}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => onApply(segment.type)}
            />
          ))}
          <circle cx={centerX} cy={centerY} r={innerRadius} fill="#FAF9F7" />
        </svg>
        
        {/* Legend */}
        <div className="space-y-2 flex-1">
          {distribution.map((item, idx) => (
            <div key={item.type} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[idx] }} />
                <span className="text-xs text-gray-700">{item.type}</span>
              </div>
              <span className="text-xs font-medium text-gray-700">{item.percent}%</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-xs text-gray-500 mt-3 text-center">
        Click a segment to apply
      </div>
    </div>
  );
}

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
  const totalFields = 16; // Total profile fields (including website & social)
  const missingCount = totalFields - Object.values(profile).filter(v => v && v.trim().length > 0).length;

  return (
    <DashboardLayout
      title="Startup Profile"
      subtitle="Complete your startup details to unlock personalized insights and validation"
      onNavigate={onNavigate}
      activeNav="startup-profile"
    >
      <div className="flex">
        {/* Left Sidebar: Completeness Check */}
        <div className="w-64 bg-[#F5F3EF] border-r border-[#E8E6E1] p-6">
          <div className="mb-6 flex flex-col items-center">
            <div className="text-sm text-gray-600 mb-4">Completeness Check</div>
            <CircularProgress percentage={completeness} missingCount={missingCount} />
          </div>

          {/* Completion Milestone Strip */}
          <div className="mb-6 pt-6 border-t border-gray-300">
            <CompletionMilestoneStrip percentage={completeness} />
          </div>

          <nav className="space-y-2 pt-6 border-t border-gray-300">
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

          {/* Website & Social Links */}
          <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              WEBSITE & SOCIAL
            </label>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-gray-600 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  value={profile.website}
                  onChange={(e) => updateField('website', e.target.value)}
                  placeholder="https://yourcompany.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-2">
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    value={profile.linkedin}
                    onChange={(e) => updateField('linkedin', e.target.value)}
                    placeholder="https://linkedin.com/company/..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-2">
                    Twitter/X
                  </label>
                  <input
                    type="url"
                    value={profile.twitter}
                    onChange={(e) => updateField('twitter', e.target.value)}
                    placeholder="https://twitter.com/..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
                  />
                </div>
              </div>
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
          <div className="bg-[#E8F4F1] border border-[#0D5F4E] rounded-lg p-6 mb-6">
            <div className="flex items-start gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-[#0d5f4e] mt-0.5" />
              <div>
                <div className="font-medium text-[#0d5f4e] mb-1">Optional Fields</div>
                <div className="text-sm text-[#0d5f4e]">
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

        {/* Right Sidebar: Insights & Suggestions */}
        <div className="w-80 bg-[#F5F3EF] border-l border-[#E8E6E1] p-6 overflow-y-auto">
          
          {/* Profile Match Confidence */}
          {suggestions && (
            <ProfileMatchConfidence industry={profile.industry} teamSize={profile.teamSize} />
          )}

          {/* Missing Fields Breakdown */}
          {missingFields.length > 0 && (
            <div className="bg-[#E8F4F1] rounded-lg p-4 mb-6 border border-[#0D5F4E]">
              <MissingFieldsBreakdown profile={profile} />
            </div>
          )}

          {/* Unlock Impact Map */}
          {missingFields.length > 0 && (
            <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
              <UnlockImpactMap profile={profile} />
            </div>
          )}

          {/* Smart Suggestions */}
          {suggestions && showSuggestions && (
            <div className="bg-white rounded-lg p-4 border border-[#6b9d89] mb-6">
              <div className="flex items-start gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[#6b9d89] mt-0.5" />
                <div className="flex-1">
                  <div className="font-medium text-[#0E3E1B] mb-1">Smart Suggestions</div>
                  <div className="text-xs text-gray-600 mb-4">
                    Based on "{profile.industry}" + "{profile.teamSize}"
                  </div>

                  {/* Burn Rate Benchmark */}
                  {!profile.burnRate && (
                    <div className="mb-4">
                      <BurnRateBenchmark suggestedRate={suggestions.burnRate} />
                      <button
                        onClick={() => applySuggestion('burnRate', suggestions.burnRate)}
                        className="text-sm text-[#0d5f4e] hover:text-[#0E3E1B] flex items-center gap-1 mt-2"
                      >
                        Apply {suggestions.burnRate} →
                      </button>
                    </div>
                  )}

                  {/* Funding Path Distribution */}
                  {!profile.fundingStatus && (
                    <div className="pt-4 border-t border-gray-200">
                      <FundingPathDistribution
                        distribution={suggestions.fundingDistribution}
                        onApply={(type) => applySuggestion('fundingStatus', type)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* URL Import (placeholder for future) */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
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
    </DashboardLayout>
  );
}