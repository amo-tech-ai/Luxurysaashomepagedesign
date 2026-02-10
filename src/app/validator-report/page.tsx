import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Target, Users, TrendingUp, Shield, AlertTriangle, 
  Rocket, Lightbulb, FileText, DollarSign, Award, Zap, 
  BarChart3, Code, TrendingDown, CheckCircle2, Info
} from 'lucide-react';
import { rightPanelData } from './right-panel-content';

interface ValidatorReportPageProps {
  onNavigate?: (route: string) => void;
}

type SectionId = 
  | 'problem-clarity'
  | 'customer-use-case'
  | 'market-sizing'
  | 'competition'
  | 'risks-assumptions'
  | 'mvp-scope'
  | 'next-steps'
  | 'scores-matrix'
  | 'tech-stack'
  | 'revenue-model'
  | 'team-hiring'
  | 'financials';

export default function ValidatorReportPage({ onNavigate }: ValidatorReportPageProps) {
  const [selectedSection, setSelectedSection] = useState<SectionId>('problem-clarity');

  const sections = [
    { id: 'problem-clarity', label: 'Problem', icon: Target, shortLabel: 'Problem Clarity' },
    { id: 'customer-use-case', label: 'Customer', icon: Users, shortLabel: 'Customer Profile' },
    { id: 'market-sizing', label: 'Market Size', icon: TrendingUp, shortLabel: 'Market Opportunity' },
    { id: 'competition', label: 'Competition', icon: Shield, shortLabel: 'Competitive Landscape' },
    { id: 'risks-assumptions', label: 'Risks', icon: AlertTriangle, shortLabel: 'Risk Analysis' },
    { id: 'mvp-scope', label: 'MVP Scope', icon: Rocket, shortLabel: 'MVP Roadmap' },
    { id: 'next-steps', label: 'Next Steps', icon: Zap, shortLabel: 'Action Plan' },
    { id: 'scores-matrix', label: 'Scores', icon: BarChart3, shortLabel: 'Scoring Matrix' },
    { id: 'tech-stack', label: 'Tech Stack', icon: Code, shortLabel: 'Technology Stack' },
    { id: 'revenue-model', label: 'Revenue', icon: DollarSign, shortLabel: 'Revenue Model' },
    { id: 'team-hiring', label: 'Team', icon: Users, shortLabel: 'Team & Hiring' },
    { id: 'financials', label: 'Financials', icon: TrendingDown, shortLabel: 'Financial Projections' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7] flex flex-col">
      {/* HEADER */}
      <header className="bg-white border-b border-[#E5E7EB] sticky top-0 z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          {/* Left: Branding */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onNavigate?.('home')}
              className="flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#3B5F52] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <div className="h-6 w-px bg-[#E5E7EB]" />
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] flex items-center justify-center">
                <Award className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-sm font-medium text-[#3B5F52]">Validation Report</h1>
                <p className="text-xs text-[#6B7280]">AI-Verified Assessment</p>
              </div>
            </div>
          </div>

          {/* Center: Score */}
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-xs text-[#6B7280] mb-1">Overall Score</div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-light text-[#3B5F52]">62</span>
                <span className="text-sm text-[#6B7280]">/100</span>
              </div>
            </div>
            <div className="px-3 py-1.5 bg-gradient-to-br from-[#FEF3C7] to-[#FEE2E2] rounded-full">
              <span className="text-xs font-medium text-[#6b9d89]">CAUTION</span>
            </div>
            <div className="px-3 py-1.5 bg-[#DCF9E3] rounded-full">
              <span className="text-xs font-medium text-[#0d5f4e]">✓ AI Verified</span>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-xs text-[#6B7280] hover:text-[#3B5F52] transition-colors">
              Export PDF
            </button>
            <button className="px-3 py-1.5 text-xs text-[#6B7280] hover:text-[#3B5F52] transition-colors">
              Share
            </button>
          </div>
        </div>
      </header>

      {/* 3-PANEL LAYOUT */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT PANEL - Navigation */}
        <aside className="w-56 bg-white border-r border-[#E5E7EB] overflow-y-auto">
          <div className="p-4">
            <h3 className="text-xs font-medium text-[#6B7280] mb-3 px-2">SECTIONS</h3>
            <nav className="space-y-1">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setSelectedSection(section.id as SectionId)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                      selectedSection === section.id
                        ? 'bg-[#0d5f4e] text-white'
                        : 'text-[#6B7280] hover:bg-[#F5F3EF] hover:text-[#3B5F52]'
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="text-xs">{section.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* MAIN PANEL - Fixed Summary (Never Changes) */}
        <main className="flex-1 overflow-y-auto bg-[#FAF9F7]">
          <div className="max-w-3xl mx-auto p-8 space-y-6">
            
            {/* Executive Summary */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
              <h2 className="text-lg font-light text-[#3B5F52] mb-3">Validation Summary</h2>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Strong problem–solution fit with premium travelers, but faces extreme competition and requires proof of real-time trust advantage.
              </p>
            </div>

            {/* Problem Clarity */}
            <SummaryCard
              title="Problem · Clarity"
              sectionId="problem-clarity"
              active={selectedSection === 'problem-clarity'}
              onInfoClick={() => setSelectedSection('problem-clarity')}
            >
              <p className="text-sm text-[#6B7280] mb-3">
                Travelers experience "mid-trip pivots" when plans fail due to weather, closures, or preference changes. Requires rapid replanning with trusted real-time info.
              </p>
              <div className="flex gap-4 text-xs">
                <div><span className="text-[#6B7280]">Severity:</span> <span className="text-[#3B5F52] font-medium">8/10</span></div>
                <div><span className="text-[#6B7280]">Frequency:</span> <span className="text-[#3B5F52] font-medium">7/10</span></div>
                <div><span className="text-[#6B7280]">Urgency:</span> <span className="text-[#3B5F52] font-medium">9/10</span></div>
              </div>
            </SummaryCard>

            {/* Customer Profile */}
            <SummaryCard
              title="Customer · Profile"
              sectionId="customer-use-case"
              active={selectedSection === 'customer-use-case'}
              onInfoClick={() => setSelectedSection('customer-use-case')}
            >
              <p className="text-sm text-[#6B7280] mb-3">
                Premium leisure travelers (35-55, $150K+ income) who value spontaneity and trust. Experience mid-trip chaos 2-3 times per year.
              </p>
              <div className="flex gap-4 text-xs">
                <div><span className="text-[#6B7280]">Willingness:</span> <span className="text-[#3B5F52] font-medium">$15-30/trip</span></div>
                <div><span className="text-[#6B7280]">Frequency:</span> <span className="text-[#3B5F52] font-medium">2-3x/year</span></div>
              </div>
            </SummaryCard>

            {/* Market Sizing */}
            <SummaryCard
              title="Market · Opportunity"
              sectionId="market-sizing"
              active={selectedSection === 'market-sizing'}
              onInfoClick={() => setSelectedSection('market-sizing')}
            >
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-[#6B7280] mb-1">TAM</div>
                  <div className="text-lg font-light text-[#3B5F52]">$4.15B</div>
                </div>
                <div>
                  <div className="text-xs text-[#6B7280] mb-1">SAM</div>
                  <div className="text-lg font-light text-[#3B5F52]">$1.0B</div>
                </div>
                <div>
                  <div className="text-xs text-[#6B7280] mb-1">SOM</div>
                  <div className="text-lg font-light text-[#3B5F52]">$500M</div>
                </div>
              </div>
            </SummaryCard>

            {/* Competition */}
            <SummaryCard
              title="Competition · Landscape"
              sectionId="competition"
              active={selectedSection === 'competition'}
              onInfoClick={() => setSelectedSection('competition')}
            >
              <p className="text-sm text-[#6B7280] mb-3">
                4 major competitors: Google Maps (navigation giant), Mindtrip ($20M raised), Expedia (booking platform), Layla (AI assistant).
              </p>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-[#FEE2E2] text-[#DC2626] text-xs rounded">EXTREME</span>
                <span className="text-xs text-[#6B7280]">Score: 35/100</span>
              </div>
            </SummaryCard>

            {/* Risks & Assumptions */}
            <SummaryCard
              title="Risks · Analysis"
              sectionId="risks-assumptions"
              active={selectedSection === 'risks-assumptions'}
              onInfoClick={() => setSelectedSection('risks-assumptions')}
            >
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5" />
                  <span className="text-sm text-[#6B7280]">Google launches AI planning feature</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5" />
                  <span className="text-sm text-[#6B7280]">AI hallucinations destroy user trust</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5" />
                  <span className="text-sm text-[#6B7280]">CAC exceeds $50 making unit economics negative</span>
                </div>
              </div>
            </SummaryCard>

            {/* MVP Scope */}
            <SummaryCard
              title="MVP · Roadmap"
              sectionId="mvp-scope"
              active={selectedSection === 'mvp-scope'}
              onInfoClick={() => setSelectedSection('mvp-scope')}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#6B7280]">Phase 1: Manual WhatsApp</span>
                  <span className="text-xs text-[#3B5F52]">4 weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#6B7280]">Phase 2: Hybrid AI + Human</span>
                  <span className="text-xs text-[#3B5F52]">6 weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#6B7280]">Phase 3: Full Automation</span>
                  <span className="text-xs text-[#3B5F52]">8 weeks</span>
                </div>
              </div>
            </SummaryCard>

            {/* Next Steps */}
            <SummaryCard
              title="Next Steps · Action Plan"
              sectionId="next-steps"
              active={selectedSection === 'next-steps'}
              onInfoClick={() => setSelectedSection('next-steps')}
            >
              <div className="space-y-2">
                {['Hallucination audit', 'Beta user recruitment', 'B2B agency interviews'].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-[#DCF9E3] flex items-center justify-center text-xs text-[#0d5f4e]">
                      {idx + 1}
                    </div>
                    <span className="text-sm text-[#6B7280]">{step}</span>
                  </div>
                ))}
              </div>
            </SummaryCard>

            {/* Scores Matrix */}
            <SummaryCard
              title="Scores · Matrix"
              sectionId="scores-matrix"
              active={selectedSection === 'scores-matrix'}
              onInfoClick={() => setSelectedSection('scores-matrix')}
            >
              <div className="grid grid-cols-2 gap-3">
                <div><span className="text-xs text-[#6B7280]">Problem:</span> <span className="text-sm text-[#3B5F52] font-medium">85</span></div>
                <div><span className="text-xs text-[#6B7280]">Solution:</span> <span className="text-sm text-[#3B5F52] font-medium">72</span></div>
                <div><span className="text-xs text-[#6B7280]">Market:</span> <span className="text-sm text-[#3B5F52] font-medium">68</span></div>
                <div><span className="text-xs text-[#6B7280]">Competition:</span> <span className="text-sm text-[#DC2626] font-medium">35</span></div>
                <div><span className="text-xs text-[#6B7280]">Business Model:</span> <span className="text-sm text-[#3B5F52] font-medium">58</span></div>
                <div><span className="text-xs text-[#6B7280]">Team:</span> <span className="text-sm text-[#3B5F52] font-medium">70</span></div>
              </div>
            </SummaryCard>

            {/* Tech Stack */}
            <SummaryCard
              title="Tech Stack · Architecture"
              sectionId="tech-stack"
              active={selectedSection === 'tech-stack'}
              onInfoClick={() => setSelectedSection('tech-stack')}
            >
              <p className="text-sm text-[#6B7280]">
                React Native (mobile), GPT-4 (AI planning), Google Places API (venue data), Supabase (backend), Stripe (payments).
              </p>
            </SummaryCard>

            {/* Revenue Model */}
            <SummaryCard
              title="Revenue · Model"
              sectionId="revenue-model"
              active={selectedSection === 'revenue-model'}
              onInfoClick={() => setSelectedSection('revenue-model')}
            >
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-[#6B7280] mb-1">Basic</div>
                  <div className="text-lg font-light text-[#3B5F52]">$10</div>
                </div>
                <div>
                  <div className="text-xs text-[#6B7280] mb-1">Premium</div>
                  <div className="text-lg font-light text-[#3B5F52]">$20</div>
                </div>
                <div>
                  <div className="text-xs text-[#6B7280] mb-1">Pro</div>
                  <div className="text-lg font-light text-[#3B5F52]">$30</div>
                </div>
              </div>
              <div className="mt-3 text-xs text-[#6B7280]">
                LTV:CAC = 3.6:1 (target)
              </div>
            </SummaryCard>

            {/* Team & Hiring */}
            <SummaryCard
              title="Team · Hiring"
              sectionId="team-hiring"
              active={selectedSection === 'team-hiring'}
              onInfoClick={() => setSelectedSection('team-hiring')}
            >
              <div className="space-y-2">
                {['ML Engineer (hallucination detection)', 'Product Designer (trust signals)', 'Growth Marketer (B2B partnerships)'].map((role, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#6b9d89] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#6B7280]">{role}</span>
                  </div>
                ))}
              </div>
            </SummaryCard>

            {/* Financials */}
            <SummaryCard
              title="Financials · Projections"
              sectionId="financials"
              active={selectedSection === 'financials'}
              onInfoClick={() => setSelectedSection('financials')}
            >
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B7280]">Seed Round:</span>
                  <span className="text-[#3B5F52]">$500K</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B7280]">18-Month Runway:</span>
                  <span className="text-[#3B5F52]">$28K/mo burn</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B7280]">Break-Even:</span>
                  <span className="text-[#3B5F52]">1,400 users</span>
                </div>
              </div>
            </SummaryCard>

          </div>
        </main>

        {/* RIGHT PANEL - Section Details */}
        <aside className="w-96 bg-white border-l border-[#E5E7EB] overflow-y-auto">
          <div className="p-6">
            {/* Section Title */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#DCF9E3] text-[#0d5f4e] rounded-lg text-xs font-medium mb-3">
                {sections.find(s => s.id === selectedSection)?.shortLabel}
              </div>
              <h3 className="text-lg font-light text-[#3B5F52]">Section Details</h3>
            </div>

            {/* Content */}
            {rightPanelData[selectedSection] && (
              <div className="space-y-6">
                {/* More Detail */}
                <div>
                  <h4 className="text-xs font-medium text-[#6B7280] mb-2">MORE DETAIL</h4>
                  <p className="text-sm text-[#3B5F52] leading-relaxed">
                    {rightPanelData[selectedSection].details}
                  </p>
                </div>

                {/* Why it Matters */}
                <div className="p-4 bg-gradient-to-br from-[#DCF9E3] to-[#F5F3EF] rounded-lg border border-[#3B5F52]/20">
                  <h4 className="text-xs font-medium text-[#0d5f4e] mb-2">WHY THIS MATTERS</h4>
                  <p className="text-sm text-[#3B5F52] leading-relaxed">
                    {rightPanelData[selectedSection].whyItMatters}
                  </p>
                </div>

                {/* Risks & Gaps */}
                <div>
                  <h4 className="text-xs font-medium text-[#6B7280] mb-3">RISKS & GAPS</h4>
                  <div className="space-y-2">
                    {rightPanelData[selectedSection].risksGaps.map((risk, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6b9d89] mt-1.5 flex-shrink-0" />
                        <p className="text-sm text-[#3B5F52]">{risk}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Validate Next */}
                <div className="p-4 bg-[#0d5f4e] rounded-lg text-white">
                  <h4 className="text-xs font-medium mb-3 opacity-90">VALIDATE NEXT</h4>
                  <div className="space-y-3">
                    {rightPanelData[selectedSection].validateNext.map((action, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-xs font-medium">
                          {idx + 1}
                        </div>
                        <p className="text-sm leading-relaxed">{action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>

      </div>
    </div>
  );
}

// ============================================
// REUSABLE COMPONENTS
// ============================================

function SummaryCard({ 
  title, 
  children, 
  sectionId,
  active,
  onInfoClick
}: { 
  title: string; 
  children: React.ReactNode;
  sectionId?: string;
  active?: boolean;
  onInfoClick?: () => void;
}) {
  return (
    <motion.div
      className={`bg-white rounded-xl border p-5 transition-all relative group ${
        active 
          ? 'border-[#0d5f4e] shadow-lg' 
          : 'border-[#E5E7EB] hover:border-[#6b9d89] hover:shadow-md'
      }`}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-sm font-medium text-[#3B5F52]">{title}</h3>
        {onInfoClick && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onInfoClick();
            }}
            className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
              active
                ? 'bg-[#0d5f4e] text-white'
                : 'bg-[#F5F3EF] text-[#6B7280] hover:bg-[#DCF9E3] hover:text-[#0d5f4e]'
            }`}
            title="View details, risks, and validation steps"
          >
            <Info className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      {children}
    </motion.div>
  );
}