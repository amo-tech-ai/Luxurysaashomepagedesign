import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Target, Users, TrendingUp, Shield, AlertTriangle, 
  Rocket, Lightbulb, BarChart3, Code, DollarSign, Award, 
  TrendingDown, Info, X, CheckCircle2
} from 'lucide-react';
import { rightPanelData, type SectionId } from '../../data/validator-v2-content';

// ============================================
// MAIN COMPONENT
// ============================================

export default function ValidatorV2Page({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [selectedSection, setSelectedSection] = useState<SectionId | null>(null);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);

  const handleSectionClick = (sectionId: SectionId) => {
    setSelectedSection(sectionId);
    setRightPanelOpen(true);
  };

  const handleClosePanel = () => {
    setRightPanelOpen(false);
  };

  const sections: Array<{ id: SectionId; label: string; icon: React.ReactNode }> = [
    { id: 'problem-clarity', label: 'Problem', icon: <Target className="w-4 h-4" /> },
    { id: 'customer-profile', label: 'Customer', icon: <Users className="w-4 h-4" /> },
    { id: 'market-sizing', label: 'Market Size', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'competition', label: 'Competition', icon: <Shield className="w-4 h-4" /> },
    { id: 'risks-assumptions', label: 'Risks', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'mvp-scope', label: 'MVP Scope', icon: <Rocket className="w-4 h-4" /> },
    { id: 'next-steps', label: 'Next Steps', icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'scores-matrix', label: 'Scores', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'tech-stack', label: 'Technology', icon: <Code className="w-4 h-4" /> },
    { id: 'revenue-model', label: 'Revenue', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'team-hiring', label: 'Team', icon: <Award className="w-4 h-4" /> },
    { id: 'financials', label: 'Financials', icon: <TrendingDown className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <HeaderSection />

      {/* 3-Panel Layout */}
      <div className="flex relative">
        {/* Left Panel - Navigation */}
        <LeftPanel 
          sections={sections}
          activeSection={selectedSection}
          onSectionClick={handleSectionClick}
        />

        {/* Main Panel - Summaries (NEVER changes) */}
        <MainPanel 
          activeSection={selectedSection}
          onInfoClick={handleSectionClick}
        />

        {/* Right Panel - Additional Details (Slides in) */}
        <AnimatePresence>
          {rightPanelOpen && selectedSection && (
            <RightPanel 
              content={rightPanelData[selectedSection]}
              onClose={handleClosePanel}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ============================================
// HEADER COMPONENT
// ============================================

function HeaderSection() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-[#6B7280] hover:text-[#0d5f4e] transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-medium text-[#3B5F52]">Validation Report</h1>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#6B7280]">Score:</span>
              <span className="text-2xl font-light text-[#3B5F52]">62/100</span>
            </div>
            <div className="px-4 py-1.5 bg-[#FEF3C7] text-[#92400E] text-sm font-medium rounded-full">
              CAUTION
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 bg-[#DCF9E3] rounded-full">
              <CheckCircle2 className="w-4 h-4 text-[#0d5f4e]" />
              <span className="text-sm font-medium text-[#0d5f4e]">AI Verified</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// ============================================
// LEFT PANEL - NAVIGATION
// ============================================

function LeftPanel({ 
  sections, 
  activeSection, 
  onSectionClick 
}: { 
  sections: Array<{ id: SectionId; label: string; icon: React.ReactNode }>;
  activeSection: SectionId | null;
  onSectionClick: (id: SectionId) => void;
}) {
  return (
    <aside className="w-56 bg-white border-r border-[#E5E7EB] min-h-screen sticky top-[73px] self-start">
      <div className="p-6">
        <h2 className="text-xs uppercase tracking-wider text-[#6B7280] mb-4">
          SECTIONS
        </h2>
        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`
                w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all
                ${activeSection === section.id 
                  ? 'bg-[#0d5f4e] text-white' 
                  : 'text-[#6B7280] hover:bg-[#F5F3EF]'
                }
              `}
            >
              {section.icon}
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}

// ============================================
// MAIN PANEL - SUMMARIES
// ============================================

function MainPanel({ 
  activeSection, 
  onInfoClick 
}: { 
  activeSection: SectionId | null;
  onInfoClick: (id: SectionId) => void;
}) {
  return (
    <main 
      className="flex-1 max-w-3xl mx-auto px-8 py-8 overflow-y-auto"
      aria-label="Validation summary"
    >
      <div className="space-y-4">
        {/* Problem Clarity */}
        <SummaryCard
          title="Problem · Clarity"
          sectionId="problem-clarity"
          active={activeSection === 'problem-clarity'}
          onInfoClick={() => onInfoClick('problem-clarity')}
        >
          <p className="text-sm text-[#6B7280] mb-3">
            Travelers experience "mid-trip pivot chaos" when plans fail due to weather, closures, or preference changes. Requires rapid replanning with trusted real-time info.
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
          sectionId="customer-profile"
          active={activeSection === 'customer-profile'}
          onInfoClick={() => onInfoClick('customer-profile')}
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
          active={activeSection === 'market-sizing'}
          onInfoClick={() => onInfoClick('market-sizing')}
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
          <p className="text-xs text-[#6B7280] mt-3">
            Based on premium travel planning market with real-time replanning need.
          </p>
        </SummaryCard>

        {/* Competition */}
        <SummaryCard
          title="Competition · Landscape"
          sectionId="competition"
          active={activeSection === 'competition'}
          onInfoClick={() => onInfoClick('competition')}
        >
          <p className="text-sm text-[#6B7280] mb-3">
            4 major competitors: Google Maps (navigation giant), Mindtrip ($20M raised), Expedia (booking platform), Layla (AI assistant).
          </p>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-[#FEE2E2] text-[#DC2626] text-xs rounded font-medium">EXTREME</span>
            <span className="text-xs text-[#6B7280]">Score: 35/100</span>
          </div>
        </SummaryCard>

        {/* Risks & Assumptions */}
        <SummaryCard
          title="Risks · Analysis"
          sectionId="risks-assumptions"
          active={activeSection === 'risks-assumptions'}
          onInfoClick={() => onInfoClick('risks-assumptions')}
        >
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 flex-shrink-0" />
              <span className="text-sm text-[#6B7280]">Google launches AI planning feature</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 flex-shrink-0" />
              <span className="text-sm text-[#6B7280]">AI hallucinations destroy user trust</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 flex-shrink-0" />
              <span className="text-sm text-[#6B7280]">CAC exceeds $50 making unit economics negative</span>
            </div>
          </div>
        </SummaryCard>

        {/* MVP Scope */}
        <SummaryCard
          title="MVP · Roadmap"
          sectionId="mvp-scope"
          active={activeSection === 'mvp-scope'}
          onInfoClick={() => onInfoClick('mvp-scope')}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#6B7280]">Phase 1: Manual WhatsApp</span>
              <span className="text-xs text-[#3B5F52] font-medium">4 weeks</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#6B7280]">Phase 2: Hybrid AI + Human</span>
              <span className="text-xs text-[#3B5F52] font-medium">6 weeks</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#6B7280]">Phase 3: Full Automation</span>
              <span className="text-xs text-[#3B5F52] font-medium">8 weeks</span>
            </div>
          </div>
        </SummaryCard>

        {/* Next Steps */}
        <SummaryCard
          title="Next Steps · Action Plan"
          sectionId="next-steps"
          active={activeSection === 'next-steps'}
          onInfoClick={() => onInfoClick('next-steps')}
        >
          <div className="space-y-2">
            {['Hallucination audit', 'Beta user recruitment', 'B2B agency interviews'].map((step, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#DCF9E3] flex items-center justify-center text-xs text-[#0d5f4e] font-medium flex-shrink-0">
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
          active={activeSection === 'scores-matrix'}
          onInfoClick={() => onInfoClick('scores-matrix')}
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
          active={activeSection === 'tech-stack'}
          onInfoClick={() => onInfoClick('tech-stack')}
        >
          <p className="text-sm text-[#6B7280]">
            React Native (mobile), GPT-4 (AI planning), Google Places API (venue data), Supabase (backend), Stripe (payments).
          </p>
        </SummaryCard>

        {/* Revenue Model */}
        <SummaryCard
          title="Revenue · Model"
          sectionId="revenue-model"
          active={activeSection === 'revenue-model'}
          onInfoClick={() => onInfoClick('revenue-model')}
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
          active={activeSection === 'team-hiring'}
          onInfoClick={() => onInfoClick('team-hiring')}
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
          active={activeSection === 'financials'}
          onInfoClick={() => onInfoClick('financials')}
        >
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[#6B7280]">Seed Round:</span>
              <span className="text-[#3B5F52] font-medium">$500K</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#6B7280]">18-Month Runway:</span>
              <span className="text-[#3B5F52] font-medium">$28K/mo burn</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#6B7280]">Break-Even:</span>
              <span className="text-[#3B5F52] font-medium">1,400 users</span>
            </div>
          </div>
        </SummaryCard>
      </div>
    </main>
  );
}

// ============================================
// SUMMARY CARD COMPONENT
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
  sectionId?: SectionId;
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
            aria-label={`View additional details for ${title}`}
          >
            <Info className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      {children}
    </motion.div>
  );
}

// ============================================
// RIGHT PANEL - ADDITIONAL DETAILS
// ============================================

function RightPanel({ 
  content, 
  onClose 
}: { 
  content: typeof rightPanelData[SectionId];
  onClose: () => void;
}) {
  return (
    <motion.aside
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed right-0 top-[73px] w-96 bg-white border-l border-[#E5E7EB] h-[calc(100vh-73px)] overflow-y-auto shadow-[-4px_0_16px_rgba(0,0,0,0.08)]"
      aria-label="Additional details"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="inline-block px-3 py-1 bg-[#DCF9E3] text-[#0d5f4e] text-xs font-medium rounded-full mb-2">
              {content.title}
            </div>
            <h2 className="text-lg font-medium text-[#3B5F52] mb-1">Additional Details</h2>
            <p className="text-xs text-[#6B7280]">
              This expands on the summary shown in the main column.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#6B7280] hover:text-[#0d5f4e] transition-colors flex-shrink-0"
            aria-label="Close details panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="border-t border-[#E5E7EB] pt-6 space-y-6">
          {/* More Detail */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#6B7280] mb-2">
              MORE DETAIL
            </h3>
            <p className="text-sm text-[#3B5F52] leading-relaxed">
              {content.moreDetail}
            </p>
          </div>

          {/* Why This Matters */}
          <div className="bg-[#DCF9E3] rounded-lg p-4">
            <h3 className="text-xs uppercase tracking-wider text-[#0d5f4e] mb-2 font-medium">
              WHY THIS MATTERS
            </h3>
            <p className="text-sm text-[#0d5f4e] leading-relaxed">
              {content.whyThisMatters}
            </p>
          </div>

          {/* Risks & Gaps */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#6B7280] mb-3">
              RISKS & GAPS
            </h3>
            <ul className="space-y-2">
              {content.risksAndGaps.map((risk, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#DC2626] mt-1 flex-shrink-0">•</span>
                  <span className="text-sm text-[#3B5F52]">{risk}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Validate Next */}
          <div className="bg-[#0d5f4e] rounded-lg p-4">
            <h3 className="text-xs uppercase tracking-wider text-white mb-3 font-medium">
              VALIDATE NEXT
            </h3>
            <ol className="space-y-2">
              {content.validateNext.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-white font-medium flex-shrink-0">{idx + 1}.</span>
                  <span className="text-sm text-white leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}