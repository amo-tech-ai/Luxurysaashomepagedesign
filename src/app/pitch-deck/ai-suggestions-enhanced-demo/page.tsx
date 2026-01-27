'use client';

import React, { useState } from 'react';
import { AISuggestionsPanel } from '@/components/pitch-deck/ai-suggestions';
import { IndustryFormData } from '@/lib/ai-suggestions/agentConfigs';
import { Check } from 'lucide-react';

export default function AISuggestionsEnhancedDemoPage() {
  // Sample form data for demonstration
  const [formData, setFormData] = useState<IndustryFormData>({
    targetCustomer: 'Marketing teams at B2B companies',
    problem: 'Teams struggle with manual social media posting',
    solution: 'AI-powered content automation',
    integrations: ['HubSpot'],
    metrics: [
      { name: 'Engagement rate', value: '3.5%' },
    ],
    valueDrivers: ['Time saved', 'Engagement'],
    appliedSuggestions: new Set(),
  });

  const [addedFields, setAddedFields] = useState<Set<string>>(new Set());

  const handleApplySuggestion = (field: string, value: string) => {
    console.log('Applying suggestion:', field, value);
    
    // Update form data
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Track which fields were added via AI
    setAddedFields((prev) => new Set(prev).add(field));

    // Show temporary notification
    showNotification(`AI suggestion added to ${field}`);
  };

  const showNotification = (message: string) => {
    // Simple notification (in production, use a toast library)
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-emerald-600 text-white px-4 py-3 rounded-lg shadow-lg z-50 animate-[fadeIn_150ms_ease-out]';
    notification.innerHTML = `
      <div class="flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span class="font-medium">${message}</span>
      </div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  };

  const handleFieldChange = (field: keyof IndustryFormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-normal text-gray-900 mb-2">
            AI Suggestions Panel (Enhanced)
          </h1>
          <p className="text-gray-600 mb-4">
            Click the "+" button to explicitly add AI suggestions to your pitch deck.
          </p>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-emerald-600 font-medium text-sm mb-1">✨ Explicit Control</div>
              <div className="text-xs text-gray-600">Click "+" to add suggestions individually</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-emerald-600 font-medium text-sm mb-1">⚡ Bulk Actions</div>
              <div className="text-xs text-gray-600">Add all suggestions at once per agent</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-emerald-600 font-medium text-sm mb-1">📊 Visual Feedback</div>
              <div className="text-xs text-gray-600">"+" changes to "✓ Added" when applied</div>
            </div>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Form (2/3 width) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-normal text-gray-900 mb-6">
                Industry Focus: CRM & Social Media
              </h2>

              <div className="space-y-6">
                {/* Target Customer */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    Target Customer
                    {addedFields.has('targetCustomer') && (
                      <span className="flex items-center gap-1 text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        <Check className="w-3 h-3" />
                        AI-added
                      </span>
                    )}
                  </label>
                  <textarea
                    value={formData.targetCustomer}
                    onChange={(e) => handleFieldChange('targetCustomer', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Who is your target customer?"
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    {formData.targetCustomer?.length || 0} characters
                  </div>
                </div>

                {/* Problem */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    Core Problem
                    {addedFields.has('problem') && (
                      <span className="flex items-center gap-1 text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        <Check className="w-3 h-3" />
                        AI-added
                      </span>
                    )}
                  </label>
                  <textarea
                    value={formData.problem}
                    onChange={(e) => handleFieldChange('problem', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="What problem does your product solve?"
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    {formData.problem?.length || 0} characters
                  </div>
                </div>

                {/* Solution */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    AI-Powered Solution
                    {addedFields.has('solution') && (
                      <span className="flex items-center gap-1 text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        <Check className="w-3 h-3" />
                        AI-added
                      </span>
                    )}
                  </label>
                  <textarea
                    value={formData.solution}
                    onChange={(e) => handleFieldChange('solution', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="How does AI solve this problem?"
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    {formData.solution?.length || 0} characters
                  </div>
                </div>

                {/* Integrations */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Integrations
                  </label>
                  <div className="space-y-2">
                    {['HubSpot', 'Salesforce', 'LinkedIn', 'Instagram'].map((integration) => (
                      <label key={integration} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={formData.integrations?.includes(integration)}
                          onChange={(e) => {
                            const current = formData.integrations || [];
                            const updated = e.target.checked
                              ? [...current, integration]
                              : current.filter((i) => i !== integration);
                            handleFieldChange('integrations', updated);
                          }}
                          className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                        />
                        <span className="text-sm text-gray-700">{integration}</span>
                      </label>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    {formData.integrations?.length || 0} selected
                  </div>
                </div>

                {/* Metrics */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Metrics
                  </label>
                  <div className="space-y-3">
                    {formData.metrics?.map((metric, index) => (
                      <div key={index} className="flex gap-3">
                        <input
                          type="text"
                          value={metric.name}
                          onChange={(e) => {
                            const updated = [...(formData.metrics || [])];
                            updated[index] = { ...metric, name: e.target.value };
                            handleFieldChange('metrics', updated);
                          }}
                          placeholder="Metric name"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                        <input
                          type="text"
                          value={metric.value}
                          onChange={(e) => {
                            const updated = [...(formData.metrics || [])];
                            updated[index] = { ...metric, value: e.target.value };
                            handleFieldChange('metrics', updated);
                          }}
                          placeholder="Value"
                          className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      const updated = [
                        ...(formData.metrics || []),
                        { name: '', value: '' },
                      ];
                      handleFieldChange('metrics', updated);
                    }}
                    className="mt-3 text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    + Add metric
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: AI Suggestions Panel (1/3 width) */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <AISuggestionsPanel
                formData={formData}
                onApplySuggestion={handleApplySuggestion}
              />
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">How to Use</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <div className="font-medium text-gray-900 mb-2">1. Individual Suggestions</div>
              <p>Click the "+" button next to any suggestion to add it to the form field above.</p>
            </div>
            <div>
              <div className="font-medium text-gray-900 mb-2">2. Bulk Add</div>
              <p>Click "Add all suggestions" to apply all suggestions from one agent at once.</p>
            </div>
            <div>
              <div className="font-medium text-gray-900 mb-2">3. Visual Feedback</div>
              <p>When a suggestion is added, the "+" changes to "✓ Added" and the form field shows an "AI-added" badge.</p>
            </div>
            <div>
              <div className="font-medium text-gray-900 mb-2">4. Signal Strength</div>
              <p>Watch the signal strength indicator update in real-time as you add suggestions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
