'use client';

import React, { useState } from 'react';
import { MessageCircle, Send, Check, ArrowRight } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  placeholder: string;
  tag: string;
}

interface Step3Props {
  onNext: () => void;
  onBack: () => void;
  onAnswersUpdate: (answers: Record<number, string>) => void;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "What's your current monthly recurring revenue (MRR)?",
    placeholder: "e.g., $5,000 or 'Pre-revenue'",
    tag: 'revenue',
  },
  {
    id: 2,
    text: 'How many active users or customers do you have?',
    placeholder: "e.g., '150 users' or 'In beta with 10 companies'",
    tag: 'traction',
  },
  {
    id: 3,
    text: 'Are you planning to raise funding in the next 12 months?',
    placeholder: "e.g., 'Yes, seed round' or 'Bootstrapping for now'",
    tag: 'fundraising',
  },
  {
    id: 4,
    text: "What's your biggest challenge right now?",
    placeholder: "e.g., 'Finding product-market fit' or 'Scaling sales'",
    tag: 'challenge',
  },
];

export function Step3SmartInterview({ onNext, onBack, onAnswersUpdate }: Step3Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentAnswer, setCurrentAnswer] = useState('');

  const handleSubmitAnswer = () => {
    if (!currentAnswer.trim()) return;

    const newAnswers = { ...answers, [QUESTIONS[currentQuestion].id]: currentAnswer };
    setAnswers(newAnswers);
    onAnswersUpdate(newAnswers);
    setCurrentAnswer('');

    if (currentQuestion < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitAnswer();
    }
  };

  const isComplete = Object.keys(answers).length === QUESTIONS.length;
  const progress = (Object.keys(answers).length / QUESTIONS.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] rounded-2xl mb-6 shadow-lg">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        <h1 className="font-serif text-4xl text-[#2D2D2D] mb-3">Quick Questions</h1>
        <p className="text-[#4A4A4A] text-lg">
          Help us understand where you are and where you want to go
        </p>

        {/* Progress */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="flex items-center justify-between text-xs text-[#A3A3A3] mb-2">
            <span>Question {Object.keys(answers).length + 1} of {QUESTIONS.length}</span>
            <span className="font-semibold text-[#0D5F4E]">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1.5 bg-[#F5F5F3] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="bg-white border-2 border-[#E8E6E1] rounded-2xl shadow-lg overflow-hidden">
        {/* Messages */}
        <div className="p-6 space-y-6 max-h-[400px] overflow-y-auto custom-scrollbar">
          {QUESTIONS.slice(0, currentQuestion + 1).map((question, index) => (
            <div key={question.id} className="space-y-4">
              {/* Question (AI) */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 bg-gradient-to-br from-[#0D5F4E]/5 to-[#0D5F4E]/10 border border-[#0D5F4E]/20 rounded-2xl rounded-tl-none p-4">
                  <p className="text-sm text-[#2D2D2D]">{question.text}</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-[#0D5F4E]/20 text-[#0D5F4E] text-xs font-semibold rounded-full">
                    {question.tag}
                  </span>
                </div>
              </div>

              {/* Answer (User) */}
              {answers[question.id] && (
                <div className="flex items-start gap-3 justify-end">
                  <div className="flex-1 max-w-md bg-white border-2 border-[#E8E6E1] rounded-2xl rounded-tr-none p-4">
                    <p className="text-sm text-[#2D2D2D]">{answers[question.id]}</p>
                  </div>
                  <div className="w-8 h-8 bg-[#F5F5F3] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#0D5F4E]" />
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* All done message */}
          {isComplete && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0D5F4E] to-[#0a4a3c] rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 bg-gradient-to-br from-[#0D5F4E]/5 to-[#0D5F4E]/10 border border-[#0D5F4E]/20 rounded-2xl rounded-tl-none p-4">
                <p className="text-sm font-semibold text-[#0D5F4E]">
                  Perfect! I have everything I need. Let me generate your personalized roadmap.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        {!isComplete && (
          <div className="border-t border-[#E8E6E1] p-4 bg-[#FAFAF8]">
            <div className="flex items-end gap-3">
              <div className="flex-1">
                <textarea
                  value={currentAnswer}
                  onChange={(e) => setCurrentAnswer(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={QUESTIONS[currentQuestion].placeholder}
                  rows={2}
                  className="w-full px-4 py-3 border-2 border-[#E8E6E1] rounded-xl text-[#2D2D2D] placeholder:text-[#A3A3A3] focus:border-[#0D5F4E] focus:outline-none resize-none transition-colors duration-200"
                />
              </div>
              <button
                onClick={handleSubmitAnswer}
                disabled={!currentAnswer.trim()}
                className={`p-3 rounded-xl transition-all duration-200 ${
                  currentAnswer.trim()
                    ? 'bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] text-white hover:shadow-lg hover:scale-105'
                    : 'bg-[#F5F5F3] text-[#A3A3A3] cursor-not-allowed'
                }`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-[#A3A3A3] mt-2">
              Press Enter to send • Shift + Enter for new line
            </p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mt-12 pt-8 border-t border-[#E8E6E1]">
        <button
          onClick={onBack}
          className="px-6 py-3 text-[#4A4A4A] font-semibold hover:text-[#0D5F4E] transition-colors duration-200"
        >
          ← Back
        </button>
        {isComplete && (
          <button
            onClick={onNext}
            className="px-8 py-3.5 bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            Generate Roadmap
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}