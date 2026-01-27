'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, Calendar, Target, Sparkles, ArrowRight, Home, TrendingUp } from 'lucide-react';

interface Step5Props {
  companyName: string;
  onFinish: () => void;
  onGoToDashboard: () => void;
}

export function Step5ActionSetup({ companyName, onFinish, onGoToDashboard }: Step5Props) {
  const [isCreating, setIsCreating] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Simulate task creation
    setTimeout(() => {
      setIsCreating(false);
      setTimeout(() => {
        setShowSuccess(true);
      }, 500);
    }, 2000);
  }, []);

  const tasks30Days = [
    { title: 'Create traction deck with current metrics', status: 'created' },
    { title: 'Document go-to-market strategy', status: 'created' },
    { title: 'Schedule founder sync meetings', status: 'created' },
  ];

  const tasks60Days = [
    { title: 'Build financial model (3-year projection)', status: 'created' },
    { title: 'Research investor landscape', status: 'created' },
    { title: 'Refine pitch deck messaging', status: 'created' },
  ];

  const tasks90Days = [
    { title: 'Prepare investor outreach list', status: 'created' },
    { title: 'Mock pitch with advisors', status: 'created' },
    { title: 'Finalize fundraising materials', status: 'created' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Creating State */}
      {isCreating && (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] rounded-2xl mb-6 shadow-lg">
            <Sparkles className="w-10 h-10 text-white animate-pulse" />
          </div>
          <h1 className="font-serif text-4xl text-[#2D2D2D] mb-3">
            Creating Your Action Plan
          </h1>
          <p className="text-[#4A4A4A] text-lg mb-8">
            Setting up your dashboard with personalized tasks...
          </p>
          <div className="max-w-md mx-auto">
            <div className="space-y-3">
              {[
                'Generating 30-day priorities',
                'Building 60-day milestones',
                'Planning 90-day objectives',
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white border-2 border-[#E8E6E1] rounded-xl p-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white animate-pulse" />
                  </div>
                  <span className="text-sm text-[#2D2D2D]">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Success State */}
      {!isCreating && (
        <div className="space-y-8">
          {/* Success Header */}
          <div className="text-center">
            <div
              className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] rounded-2xl mb-6 shadow-lg transition-all duration-500 ${
                showSuccess ? 'scale-100' : 'scale-0'
              }`}
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-serif text-4xl text-[#2D2D2D] mb-3">You're All Set!</h1>
            <p className="text-[#4A4A4A] text-lg">
              Your personalized roadmap for {companyName} is ready
            </p>
          </div>

          {/* Success Message */}
          <div className="bg-gradient-to-br from-[#0D5F4E]/5 to-[#0D5F4E]/10 border-2 border-[#0D5F4E]/30 rounded-2xl p-8 text-center">
            <p className="text-lg text-[#2D2D2D] mb-2">
              <span className="font-bold text-[#0D5F4E]">9 tasks created</span> across your 
              30-60-90 day plan
            </p>
            <p className="text-sm text-[#4A4A4A]">
              Each task is prioritized by impact and tagged with AI-generated guidance
            </p>
          </div>

          {/* 30-60-90 Day Plan Preview */}
          <div className="grid grid-cols-3 gap-6">
            {/* 30 Days */}
            <div className="bg-white border-2 border-[#E8E6E1] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#2D2D2D]">30 Days</h3>
                  <p className="text-xs text-[#A3A3A3]">Foundation</p>
                </div>
              </div>
              <div className="space-y-2">
                {tasks30Days.map((task, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-xs text-[#4A4A4A] p-2 bg-[#FAFAF8] rounded-lg"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#0D5F4E] flex-shrink-0 mt-0.5" />
                    <span className="flex-1">{task.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 60 Days */}
            <div className="bg-white border-2 border-[#E8E6E1] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#D4A574] rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#2D2D2D]">60 Days</h3>
                  <p className="text-xs text-[#A3A3A3]">Growth</p>
                </div>
              </div>
              <div className="space-y-2">
                {tasks60Days.map((task, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-xs text-[#4A4A4A] p-2 bg-[#FAFAF8] rounded-lg"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                    <span className="flex-1">{task.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 90 Days */}
            <div className="bg-white border-2 border-[#E8E6E1] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#4A4A4A] rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#2D2D2D]">90 Days</h3>
                  <p className="text-xs text-[#A3A3A3]">Scale</p>
                </div>
              </div>
              <div className="space-y-2">
                {tasks90Days.map((task, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-xs text-[#4A4A4A] p-2 bg-[#FAFAF8] rounded-lg"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#4A4A4A] flex-shrink-0 mt-0.5" />
                    <span className="flex-1">{task.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="bg-white border-2 border-[#E8E6E1] rounded-2xl p-8">
            <h2 className="text-xl font-bold text-[#2D2D2D] mb-4">What's Next?</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#2D2D2D] mb-1">
                    Your Kanban Board
                  </h3>
                  <p className="text-xs text-[#4A4A4A]">
                    All tasks organized by priority and stage
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#2D2D2D] mb-1">AI Guidance</h3>
                  <p className="text-xs text-[#4A4A4A]">
                    Ongoing suggestions to improve your readiness score
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#2D2D2D] mb-1">
                    Roadmap View
                  </h3>
                  <p className="text-xs text-[#4A4A4A]">
                    Visualize milestones and track progress
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#2D2D2D] mb-1">
                    Real-time Updates
                  </h3>
                  <p className="text-xs text-[#4A4A4A]">
                    See your investor readiness score improve as you complete tasks
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={onGoToDashboard}
              className="flex-1 px-8 py-4 bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Target className="w-5 h-5" />
              Go to Dashboard
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-4 bg-white border-2 border-[#E8E6E1] text-[#4A4A4A] rounded-xl font-semibold hover:border-[#0D5F4E] hover:text-[#0D5F4E] transition-all duration-200 flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </button>
          </div>

          {/* Footer Note */}
          <div className="text-center pt-4">
            <p className="text-xs text-[#A3A3A3]">
              🎉 Congratulations on completing onboarding! Your dashboard is ready to use.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}