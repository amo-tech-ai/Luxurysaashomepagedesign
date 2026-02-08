import React, { useState } from 'react';
import { Home, Search, Sparkles, FileText, ArrowRight } from 'lucide-react';

interface AskTrendsProps {
  onNavigate?: (page: string) => void;
}

export default function AskTrendsPage({ onNavigate }: AskTrendsProps) {
  const [query, setQuery] = useState('What does the report say about AI in marketing in 2026?');
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = () => {
    setHasSearched(true);
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
                  Ask the Trends
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
          <div className="mb-8">
            <h1 className="font-serif text-3xl lg:text-4xl text-[#212427] mb-3">
              Ask the Trends
            </h1>
            <p className="text-lg text-[#6B7280]">
              Search industry reports for evidence-backed answers
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-10">
            <label className="block text-sm font-medium text-[#212427] mb-2">
              Search question:
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="What does the report say about..."
                className="flex-1 px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg text-[#212427] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0D5F4E] focus:ring-2 focus:ring-[#0D5F4E]/10 transition-all"
              />
              <button
                onClick={handleSearch}
                className="px-6 py-3 bg-[#0D5F4E] text-white rounded-lg hover:bg-[#0a4a3c] transition-all duration-200 flex items-center gap-2 font-medium"
              >
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </div>

          {/* Results */}
          {hasSearched && (
            <div className="space-y-8">
              {/* Answer */}
              <div>
                <h2 className="text-lg font-medium text-[#212427] mb-3">
                  Answer (short):
                </h2>
                <div className="p-6 bg-[#FBF9FA] border border-[#0D5F4E] rounded-lg">
                  <p className="text-base text-[#212427] leading-relaxed">
                    "The report indicates gen-AI is already being used in marketing tasks and that marketing/communications can see the biggest time savings from gen-AI."
                  </p>
                </div>
              </div>

              {/* Supporting Snippets */}
              <div>
                <h2 className="text-lg font-medium text-[#212427] mb-4">
                  Supporting snippets (with citations):
                </h2>

                <div className="space-y-4">
                  {/* Snippet 1 */}
                  <div className="p-6 bg-white border border-[#E5E7EB] rounded-lg hover:border-[#0D5F4E] transition-all">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#0D5F4E]/10 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-[#0D5F4E]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-[#212427] leading-relaxed mb-3">
                          "...already using it in areas such as image creation, copywriting..."
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-[#6B7280]">Citation:</span>
                          <span className="px-2 py-1 bg-[#F5F3EF] rounded text-xs font-medium text-[#212427]">
                            [SoF 2026 • AI brings opportunities]
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Snippet 2 */}
                  <div className="p-6 bg-white border border-[#E5E7EB] rounded-lg hover:border-[#0D5F4E] transition-all">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#0D5F4E]/10 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-[#0D5F4E]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-[#212427] leading-relaxed mb-3">
                          "Marketing and sales functions could see huge productivity gains from automation with gen AI..."
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-[#6B7280]">Citation:</span>
                          <span className="px-2 py-1 bg-[#F5F3EF] rounded text-xs font-medium text-[#212427]">
                            [SoF 2026 • Exhibit section]
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Suggested Actions */}
              <div className="pt-8 border-t border-[#E5E7EB]">
                <h2 className="text-lg font-medium text-[#212427] mb-4">
                  Suggested actions:
                </h2>

                <div className="space-y-3">
                  <button className="w-full p-4 bg-[#FBF9FA] border border-[#E5E7EB] rounded-lg hover:border-[#0D5F4E] transition-all text-left group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#0D5F4E] rounded-lg flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-[#212427]">
                          Build AI-assisted briefs + content plan generator first
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#6B7280] group-hover:text-[#0D5F4E] transition-colors" />
                    </div>
                  </button>

                  <button className="w-full p-4 bg-[#FBF9FA] border border-[#E5E7EB] rounded-lg hover:border-[#0D5F4E] transition-all text-left group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#0D5F4E] rounded-lg flex items-center justify-center">
                          <FileText className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-[#212427]">
                          Track Time-to-brief as the core KPI
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#6B7280] group-hover:text-[#0D5F4E] transition-colors" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
