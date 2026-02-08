import React, { useState } from 'react';
import { Home, Sparkles } from 'lucide-react';

interface AIImpactPlannerProps {
  onNavigate?: (page: string) => void;
}

export default function AIImpactPlannerPage({ onNavigate }: AIImpactPlannerProps) {
  const [formData, setFormData] = useState({
    industry: 'Fashion',
    stage: 'MVP',
    teamSize: '3–10 people',
    functions: {
      marketing: true,
      sales: true,
      operations: true,
      supplyChain: false,
      finance: false,
      customerSupport: false,
    },
    description: 'We help fashion brands launch campaigns faster with AI-assisted briefs and content planning.',
  });

  const handleFunctionToggle = (func: keyof typeof formData.functions) => {
    setFormData(prev => ({
      ...prev,
      functions: {
        ...prev.functions,
        [func]: !prev.functions[func],
      },
    }));
  };

  const handleAnalyze = () => {
    onNavigate?.('ai-impact-results');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <header className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate?.('home')}
              className="text-sm text-[#0D5F4E] hover:text-[#0a4a3c] transition-colors flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </button>
            <div className="w-px h-6 bg-[#E5E7EB]" />
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#0D5F4E]" />
              <div>
                <div className="text-sm text-[#6B7280]">
                  StartupAI <span className="text-[#D1D5DB]">▸</span> Trend Intelligence <span className="text-[#D1D5DB]">▸</span> AI Impact Planner
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 lg:py-16">
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-8 lg:p-12 shadow-sm">
          {/* Title */}
          <div className="mb-12">
            <h1 className="font-serif text-3xl lg:text-4xl text-[#212427] mb-3">
              Where AI Helps Your Startup Most
            </h1>
            <p className="text-lg text-[#6B7280]">
              Evidence-backed recommendations from trusted industry reports.
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-8">
            {/* Industry */}
            <div>
              <label className="block text-sm font-medium text-[#212427] mb-2">
                Industry
              </label>
              <select
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg text-[#212427] focus:outline-none focus:border-[#0D5F4E] focus:ring-2 focus:ring-[#0D5F4E]/10 transition-all"
              >
                <option>Fashion</option>
                <option>SaaS</option>
                <option>Ecommerce</option>
                <option>Fintech</option>
                <option>Healthcare</option>
                <option>EdTech</option>
              </select>
            </div>

            {/* Stage */}
            <div>
              <label className="block text-sm font-medium text-[#212427] mb-2">
                Stage
              </label>
              <select
                value={formData.stage}
                onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg text-[#212427] focus:outline-none focus:border-[#0D5F4E] focus:ring-2 focus:ring-[#0D5F4E]/10 transition-all"
              >
                <option>Idea</option>
                <option>MVP</option>
                <option>Growth</option>
              </select>
            </div>

            {/* Team Size */}
            <div>
              <label className="block text-sm font-medium text-[#212427] mb-2">
                Team Size
              </label>
              <select
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg text-[#212427] focus:outline-none focus:border-[#0D5F4E] focus:ring-2 focus:ring-[#0D5F4E]/10 transition-all"
              >
                <option>Solo</option>
                <option>3–10 people</option>
                <option>11–50 people</option>
                <option>50+ people</option>
              </select>
            </div>

            {/* Functions */}
            <div>
              <label className="block text-sm font-medium text-[#212427] mb-3">
                Select functions you want to improve:
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <button
                  onClick={() => handleFunctionToggle('marketing')}
                  className={`px-4 py-3 rounded-lg border transition-all text-sm font-medium ${
                    formData.functions.marketing
                      ? 'bg-[#0D5F4E] border-[#0D5F4E] text-white'
                      : 'bg-white border-[#E5E7EB] text-[#6B7280] hover:border-[#0D5F4E]'
                  }`}
                >
                  Marketing & Content
                </button>
                <button
                  onClick={() => handleFunctionToggle('sales')}
                  className={`px-4 py-3 rounded-lg border transition-all text-sm font-medium ${
                    formData.functions.sales
                      ? 'bg-[#0D5F4E] border-[#0D5F4E] text-white'
                      : 'bg-white border-[#E5E7EB] text-[#6B7280] hover:border-[#0D5F4E]'
                  }`}
                >
                  Sales
                </button>
                <button
                  onClick={() => handleFunctionToggle('operations')}
                  className={`px-4 py-3 rounded-lg border transition-all text-sm font-medium ${
                    formData.functions.operations
                      ? 'bg-[#0D5F4E] border-[#0D5F4E] text-white'
                      : 'bg-white border-[#E5E7EB] text-[#6B7280] hover:border-[#0D5F4E]'
                  }`}
                >
                  Operations
                </button>
                <button
                  onClick={() => handleFunctionToggle('supplyChain')}
                  className={`px-4 py-3 rounded-lg border transition-all text-sm font-medium ${
                    formData.functions.supplyChain
                      ? 'bg-[#0D5F4E] border-[#0D5F4E] text-white'
                      : 'bg-white border-[#E5E7EB] text-[#6B7280] hover:border-[#0D5F4E]'
                  }`}
                >
                  Supply Chain
                </button>
                <button
                  onClick={() => handleFunctionToggle('finance')}
                  className={`px-4 py-3 rounded-lg border transition-all text-sm font-medium ${
                    formData.functions.finance
                      ? 'bg-[#0D5F4E] border-[#0D5F4E] text-white'
                      : 'bg-white border-[#E5E7EB] text-[#6B7280] hover:border-[#0D5F4E]'
                  }`}
                >
                  Finance
                </button>
                <button
                  onClick={() => handleFunctionToggle('customerSupport')}
                  className={`px-4 py-3 rounded-lg border transition-all text-sm font-medium ${
                    formData.functions.customerSupport
                      ? 'bg-[#0D5F4E] border-[#0D5F4E] text-white'
                      : 'bg-white border-[#E5E7EB] text-[#6B7280] hover:border-[#0D5F4E]'
                  }`}
                >
                  Customer Support
                </button>
              </div>
            </div>

            {/* Startup Description */}
            <div>
              <label className="block text-sm font-medium text-[#212427] mb-2">
                Your startup (1–2 sentences):
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg text-[#212427] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0D5F4E] focus:ring-2 focus:ring-[#0D5F4E]/10 transition-all resize-none"
                placeholder="Describe what your startup does..."
              />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 pt-8 border-t border-[#E5E7EB]">
            <button
              onClick={handleAnalyze}
              className="w-full md:w-auto px-8 py-4 bg-[#0D5F4E] text-white rounded-lg hover:bg-[#0a4a3c] transition-all duration-200 flex items-center justify-center gap-2 font-medium"
            >
              <Sparkles className="w-5 h-5" />
              Analyze Impact
            </button>
            <p className="text-sm text-[#6B7280] mt-4">
              💡 <span className="font-medium">Tip:</span> You'll get a heatmap, evidence citations, and a step-by-step action plan
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
