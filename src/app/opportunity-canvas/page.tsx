'use client';

import { useState, useEffect } from 'react';
import { Save, Download, Share2, ArrowLeft, Check, AlertTriangle } from 'lucide-react';
import { CanvasCard } from '../lean-canvas/components/CanvasCard';
import { DashboardLayout } from '../../components/DashboardLayout';

interface OpportunityCanvasState {
  usersCustomers: string;
  problems: string;
  solutionsToday: string;
  solutionIdeas: string;
  howUsersUseIt: string;
  adoptionStrategy: string;
  userMetrics: string;
  businessChallenges: string;
  budget: string;
  businessBenefits: string;
  lastSaved?: string;
}

const INITIAL_STATE: OpportunityCanvasState = {
  usersCustomers: '',
  problems: '',
  solutionsToday: '',
  solutionIdeas: '',
  howUsersUseIt: '',
  adoptionStrategy: '',
  userMetrics: '',
  businessChallenges: '',
  budget: '',
  businessBenefits: '',
};

interface Risk {
  assumption: string;
  riskScore: number;
  reasoning: string;
  validationMethod: string;
}

interface OpportunityCanvasPageProps {
  onNavigate?: (page: string) => void;
}

export default function OpportunityCanvasPage({ onNavigate }: OpportunityCanvasPageProps) {
  const [canvas, setCanvas] = useState<OpportunityCanvasState>(INITIAL_STATE);
  const [isSaving, setIsSaving] = useState(false);
  const [leanCanvasData, setLeanCanvasData] = useState<any>(null);

  // Load from localStorage on mount
  useEffect(() => {
    // Load Lean Canvas data
    const leanSaved = localStorage.getItem('lean-canvas-v2');
    if (leanSaved) {
      try {
        setLeanCanvasData(JSON.parse(leanSaved));
      } catch (e) {
        console.error('Failed to parse lean canvas', e);
      }
    }

    // Load Opportunity Canvas data
    const oppSaved = localStorage.getItem('opportunity-canvas');
    if (oppSaved) {
      try {
        setCanvas(JSON.parse(oppSaved));
      } catch (e) {
        console.error('Failed to parse opportunity canvas', e);
      }
    }
  }, []);

  // Auto-save every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleSave(true);
    }, 30000);
    return () => clearInterval(interval);
  }, [canvas]);

  const handleSave = (isAuto = false) => {
    setIsSaving(true);
    const updated = {
      ...canvas,
      lastSaved: new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      }),
    };
    localStorage.setItem('opportunity-canvas', JSON.stringify(updated));
    setCanvas(updated);
    setTimeout(() => setIsSaving(false), 500);
  };

  const handleExport = () => {
    alert('Export to PDF feature coming soon!');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const updateField = (field: keyof OpportunityCanvasState, value: string) => {
    setCanvas((prev) => ({ ...prev, [field]: value }));
  };

  // Calculate completion
  const totalSections = 10;
  const completedSections = Object.entries(canvas).filter(
    ([key, value]) => key !== 'lastSaved' && value.trim().length > 0
  ).length;
  const completionPercentage = Math.round(
    (completedSections / totalSections) * 100
  );

  const handleContinue = () => {
    if (completedSections < 7) {
      const confirmed = window.confirm(
        `You've only completed ${completedSections} of ${totalSections} sections. Continue anyway?`
      );
      if (!confirmed) return;
    }
    handleSave();
    if (onNavigate) {
      onNavigate('90-day-plan');
    }
  };

  const handleBack = () => {
    if (onNavigate) {
      onNavigate('lean-canvas');
    }
  };

  const handleHome = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  // Mock risk analysis (will be replaced with AI)
  const mockRisks: Risk[] = [
    {
      assumption: 'Founders will pay $99/month for validation tools',
      riskScore: 85,
      reasoning: 'Willingness to pay is completely unvalidated. No pricing research done.',
      validationMethod: 'Run paid pilot campaign with 20 founders, measure conversion rate'
    },
    {
      assumption: 'AI can accurately identify riskiest assumptions',
      riskScore: 78,
      reasoning: 'AI accuracy depends on training data quality and prompt engineering',
      validationMethod: 'Compare AI recommendations vs expert founder feedback on 10 canvases'
    },
    {
      assumption: 'Founders will complete 90-day validation cycles',
      riskScore: 72,
      reasoning: 'Completion rate unknown. Founders often abandon tools after 2-3 weeks',
      validationMethod: 'Track usage data: % who reach sprint 3, sprint 6, completion'
    },
    {
      assumption: 'Kanban-style validation is better than ad-hoc',
      riskScore: 65,
      reasoning: 'No evidence that structured process improves outcomes vs flexible approach',
      validationMethod: 'A/B test: Kanban group vs free-form group, measure validated assumptions'
    },
    {
      assumption: 'Integration with existing tools (Notion, etc.) is critical',
      riskScore: 58,
      reasoning: 'Unknown if founders prefer standalone tool or integration',
      validationMethod: 'Survey 50 founders: standalone vs integrated tool preference'
    }
  ];

  return (
    <DashboardLayout
      title="Opportunity Canvas"
      subtitle="Focus on your primary opportunity. Define who you'll serve, what problem you'll solve, and how you'll validate your assumptions."
      onNavigate={onNavigate}
      activeNav="opportunity-canvas"
      lastUpdated={canvas.lastSaved}
    >
      {/* Action Buttons Bar */}
      <div className="bg-white border-b border-[#E8E6E1] px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Completion Tracker */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Completion</span>
            <span className="text-sm font-medium">
              {completedSections}/{totalSections}
            </span>
            <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0D5F4E] transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <span className="text-sm font-medium">{completionPercentage}%</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSave(false)}
              disabled={isSaving}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-[#0D5F4E] hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span className="hidden sm:inline">
                {isSaving ? 'Saving...' : 'Save'}
              </span>
            </button>
            <button
              onClick={handleExport}
              className="p-2 text-gray-700 hover:text-[#0D5F4E] hover:bg-gray-100 rounded-lg transition-colors"
              title="Download as PDF"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={handleShare}
              className="p-2 text-gray-700 hover:text-[#0D5F4E] hover:bg-gray-100 rounded-lg transition-colors"
              title="Share link"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column: User & Problem Focus */}
          <div className="space-y-6 lg:space-y-8">
            <CanvasCard
              title="Users & Customers"
              helperText="Who specifically are you targeting? Be extremely specific."
              placeholder="e.g., Solo founders of pre-seed B2B SaaS startups with <$100K raised, technical background, struggling with customer discovery"
              value={canvas.usersCustomers}
              onChange={(value) => updateField('usersCustomers', value)}
              maxLength={250}
              hasAIEnhance
            />

            <CanvasCard
              title="Problems"
              helperText="What are their top problems? Rank by severity."
              placeholder="e.g., 1. Don't know which assumptions to test first (critical)&#10;2. No structure for customer interviews (high)&#10;3. Can't track validation progress (medium)"
              value={canvas.problems}
              onChange={(value) => updateField('problems', value)}
              maxLength={250}
              hasAIEnhance
            />

            <CanvasCard
              title="Solutions Today"
              helperText="How do they solve these problems now? What are they using?"
              placeholder="e.g., Manual spreadsheets, reading Lean Startup book, hiring consultants ($5K-$20K), attending YC Startup School"
              value={canvas.solutionsToday}
              onChange={(value) => updateField('solutionsToday', value)}
              maxLength={200}
              hasAIEnhance
            />

            <CanvasCard
              title="User Metrics"
              helperText="What will you measure to know if users are succeeding?"
              placeholder="e.g., # assumptions validated per week, interview completion rate, pivot/persevere decisions made"
              value={canvas.userMetrics}
              onChange={(value) => updateField('userMetrics', value)}
              maxLength={200}
              hasAIEnhance
            />
          </div>

          {/* Middle Column: Solution & Adoption */}
          <div className="space-y-6 lg:space-y-8">
            <CanvasCard
              title="Solution Ideas"
              helperText="What are you considering building? List 2-3 options."
              placeholder="e.g., 1. AI-guided validation tool with Kanban board&#10;2. Community platform with expert feedback&#10;3. Template library + weekly workshops"
              value={canvas.solutionIdeas}
              onChange={(value) => updateField('solutionIdeas', value)}
              maxLength={250}
              hasAIEnhance
            />

            <CanvasCard
              title="How Users Use It"
              helperText="Describe the ideal user workflow. What do they do step-by-step?"
              placeholder="e.g., 1. Fill Lean Canvas → 2. AI identifies top 3 risks → 3. Generate 90-day plan → 4. Execute Kanban cards → 5. Review results → 6. Decide pivot/persevere"
              value={canvas.howUsersUseIt}
              onChange={(value) => updateField('howUsersUseIt', value)}
              maxLength={250}
              hasAIEnhance
            />

            <CanvasCard
              title="Adoption Strategy"
              helperText="How will you get your first 10, 100, 1000 users?"
              placeholder="e.g., First 10: Personal network&#10;Next 90: LinkedIn content + founder communities&#10;Next 900: SEO + partnerships with accelerators"
              value={canvas.adoptionStrategy}
              onChange={(value) => updateField('adoptionStrategy', value)}
              maxLength={250}
              hasAIEnhance
            />
          </div>

          {/* Right Column: Business Value */}
          <div className="space-y-6 lg:space-y-8">
            <CanvasCard
              title="Business Challenges"
              helperText="What could prevent this from working? Be honest."
              placeholder="e.g., Founders may not trust AI advice, 90 days may be too long, willingness to pay unproven, execution complexity high"
              value={canvas.businessChallenges}
              onChange={(value) => updateField('businessChallenges', value)}
              maxLength={250}
              hasAIEnhance
            />

            <CanvasCard
              title="Budget"
              helperText="What resources do you have? Time, money, team?"
              placeholder="e.g., $50K runway (6 months), 1 founder full-time, $2K/mo for tools/ads, 10 hours/week from 2 advisors"
              value={canvas.budget}
              onChange={(value) => updateField('budget', value)}
              maxLength={200}
              hasAIEnhance
            />

            <CanvasCard
              title="Business Benefits"
              helperText="If this works, what do you gain? Be specific."
              placeholder="e.g., $10K MRR in 6 months, 200 active users, 70% complete 90-day cycle, 5-star reviews, interest from YC/500 Startups"
              value={canvas.businessBenefits}
              onChange={(value) => updateField('businessBenefits', value)}
              maxLength={200}
              hasAIEnhance
            />

            {/* Risk Analysis Panel */}
            <div className="p-6 bg-orange-50 border border-orange-200 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                <h3 className="text-sm font-medium text-orange-900">
                  Top 5 Riskiest Assumptions
                </h3>
              </div>
              <p className="text-xs text-orange-700 mb-4">
                These are the assumptions most likely to kill your business if wrong. Test them first.
              </p>
              <div className="space-y-3">
                {mockRisks.map((risk, index) => (
                  <div key={index} className="p-3 bg-white rounded-lg border border-orange-200">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-medium text-orange-900">
                        #{index + 1}
                      </span>
                      <span className="text-xs font-bold text-orange-600">
                        {risk.riskScore}/100
                      </span>
                    </div>
                    <p className="text-sm text-gray-900 mb-2 font-medium">
                      {risk.assumption}
                    </p>
                    <p className="text-xs text-gray-600 mb-2">
                      {risk.reasoning}
                    </p>
                    <p className="text-xs text-[#0D5F4E] font-medium">
                      → {risk.validationMethod}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleContinue}
            className="px-8 py-3 bg-[#0D5F4E] text-white font-medium rounded-lg hover:bg-[#0a4d3f] transition-colors shadow-sm"
          >
            Generate 90-Day Plan →
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}