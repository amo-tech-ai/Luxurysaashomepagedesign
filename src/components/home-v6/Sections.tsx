import React from 'react';
import { Section, SectionHeader, Card, Button } from '../bcg/LayoutComponents';
import { DiagramBox, DiagramArrow, DiagramLabel, SystemLoop } from '../bcg/DiagramComponents';
import { ChatWindow } from './ChatWindow';

export function HeroSection() {
  const handleChatSubmit = (message: string) => {
    console.log('Chat message submitted:', message);
    alert(`Starting your journey with: "${message}"\n\nThis would begin the AI-guided validation process.`);
  };

  return (
    <>
      {/* Row 1: Premium Centered Headline */}
      <Section className="pt-32 pb-20">
        <div className="max-w-[1000px] mx-auto text-center">
          {/* Eyebrow label */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--color-accent-primary)]" />
            <p className="text-[11px] uppercase tracking-[0.15em] text-[var(--color-accent-primary)] font-semibold">
              AI Operating System for Founders
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--color-accent-primary)]" />
          </div>
          
          {/* Main Headline */}
          <h1 
            className="text-[56px] md:text-[64px] lg:text-[72px] text-[var(--color-text-primary)] mb-8 leading-[1.1] tracking-[-0.02em] font-light"
            style={{ 
              fontFamily: 'Georgia, serif',
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            Start with a conversation.
            <br />
            <span className="text-[var(--color-accent-primary)]">End with clarity.</span>
          </h1>
          
          {/* Supporting Copy */}
          <p 
            className="text-[20px] md:text-[22px] leading-[1.65] text-[var(--color-text-secondary)] max-w-[720px] mx-auto tracking-[-0.01em]"
            style={{
              fontFamily: 'var(--font-sans)',
            }}
          >
            From idea to execution, guided by AI.
          </p>
        </div>
      </Section>

      {/* Row 2: Premium Chat Window */}
      <Section className="pb-32">
        <div className="max-w-[880px] mx-auto">
          <ChatWindow onSubmit={handleChatSubmit} />
        </div>
      </Section>
    </>
  );
}

export function ProblemSection() {
  return (
    <Section background="surface">
      <SectionHeader
        label="THE PROBLEM"
        title="Most founders have strategy. Few have a system."
        centered
      />
      
      <div className="grid grid-cols-2 gap-12 max-w-[1100px] mx-auto">
        {/* Before - Without System */}
        <Card>
          <div className="text-center mb-8">
            <DiagramLabel className="mb-4">Without a system</DiagramLabel>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <DiagramBox variant="muted" className="w-full text-center">
              <p className="text-body-small text-[var(--color-text-tertiary)]">STRATEGY WORK</p>
            </DiagramBox>
            
            <div className="flex flex-col items-center gap-2">
              <svg width="2" height="40" viewBox="0 0 2 40">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="40"
                  stroke="var(--color-border-strong)"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />
              </svg>
              <span className="text-h3 text-[var(--color-text-tertiary)]">?</span>
              <svg width="2" height="40" viewBox="0 0 2 40">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="40"
                  stroke="var(--color-border-strong)"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />
              </svg>
            </div>
            
            <DiagramBox variant="muted" className="w-full text-center">
              <p className="text-body-small text-[var(--color-text-tertiary)]">DAILY TASKS</p>
            </DiagramBox>
          </div>
          
          <p className="text-meta text-[var(--color-text-secondary)] text-center mt-8">
            Disconnected execution
          </p>
        </Card>
        
        {/* After - With StartupAI */}
        <Card variant="accent">
          <div className="text-center mb-8">
            <DiagramLabel className="mb-4">With StartupAI</DiagramLabel>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <DiagramBox className="w-full text-center">
              <p className="text-body-small font-medium">STRATEGY WORK</p>
            </DiagramBox>
            <DiagramArrow direction="down" />
            <DiagramBox variant="accent" className="w-full text-center">
              <p className="text-body-small font-medium">STARTUP AI SYSTEM</p>
            </DiagramBox>
            <DiagramArrow direction="down" />
            <DiagramBox className="w-full text-center">
              <p className="text-body-small font-medium">STRUCTURED PLAN</p>
            </DiagramBox>
            <DiagramArrow direction="down" />
            <DiagramBox className="w-full text-center">
              <p className="text-body-small font-medium">DAILY PRIORITIES</p>
            </DiagramBox>
            <DiagramArrow direction="down" />
            <DiagramBox className="w-full text-center">
              <p className="text-body-small font-medium">EXECUTION</p>
            </DiagramBox>
          </div>
          
          <p className="text-meta text-[var(--color-accent-primary)] text-center mt-8 font-medium">
            Guided flow
          </p>
        </Card>
      </div>
    </Section>
  );
}

export function SystemOverviewSection() {
  const stages = [
    { label: '1. IDEA INTAKE', description: 'Profile Created' },
    { label: '2. VALIDATION', description: 'Score + Risks' },
    { label: '3. MARKET', description: 'Positioning Defined' },
    { label: '4. BUSINESS', description: 'Revenue Model' },
    { label: '5. BRAND', description: 'Identity Developed' },
    { label: '6. EXECUTION', description: 'Launch Plan' }
  ];
  
  return (
    <Section>
      <SectionHeader
        title="Six stages. One guided flow."
        subtitle="Each stage builds on the last. AI validates, you decide, the system structures."
        centered
      />
      
      <div className="overflow-x-auto pb-8">
        <div className="flex items-start gap-6 min-w-max mx-auto justify-center">
          {stages.map((stage, index) => (
            <React.Fragment key={index}>
              <div className="w-[160px]">
                <Card className="text-center h-full">
                  <div className="text-h4 text-[var(--color-accent-primary)] mb-3">
                    {stage.label.split('.')[0]}
                  </div>
                  <DiagramLabel className="mb-4">
                    {stage.label.split('.')[1].trim()}
                  </DiagramLabel>
                  <p className="text-body-small text-[var(--color-text-secondary)] mt-4">
                    {stage.description}
                  </p>
                </Card>
              </div>
              {index < stages.length - 1 && (
                <div className="pt-16">
                  <DiagramArrow direction="right" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <p className="text-meta text-[var(--color-text-secondary)] text-center mt-8">
        Average timeline: 6–8 weeks
      </p>
    </Section>
  );
}

export function AIRoleSection() {
  const aiResponsibilities = [
    'Analyze market data',
    'Validate assumptions',
    'Structure information',
    'Generate insights',
    'Surface risks',
    'Recommend next steps'
  ];
  
  const founderResponsibilities = [
    'Define vision',
    'Make strategic choices',
    'Prioritize direction',
    'Approve key decisions',
    'Execute daily work',
    'Adapt based on feedback'
  ];
  
  return (
    <Section background="surface">
      <SectionHeader
        title="AI assists. You decide."
        subtitle="The system ensures nothing is overlooked."
        centered
      />
      
      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-2 gap-0">
          {/* AI Column */}
          <div className="bg-[var(--color-accent-primary-light)] border border-[var(--color-accent-primary)] border-r-0 p-8">
            <h3 className="text-h3 text-[var(--color-text-primary)] mb-2">
              AI Responsibilities
            </h3>
            <p className="text-meta text-[var(--color-text-secondary)] mb-8">
              Continuous analysis and guidance
            </p>
            <ul className="space-y-4">
              {aiResponsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[var(--color-accent-primary)] mt-1">•</span>
                  <span className="text-body text-[var(--color-text-primary)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Founder Column */}
          <div className="bg-white border border-[var(--color-border)] p-8">
            <h3 className="text-h3 text-[var(--color-text-primary)] mb-2">
              Your Responsibilities
            </h3>
            <p className="text-meta text-[var(--color-text-secondary)] mb-8">
              Strategic decisions and execution
            </p>
            <ul className="space-y-4">
              {founderResponsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[var(--color-accent-primary)] mt-1">•</span>
                  <span className="text-body text-[var(--color-text-primary)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <p className="text-body-large text-[var(--color-text-primary)] text-center mt-12 max-w-[680px] mx-auto">
          StartupAI automates analysis, not autonomy.
        </p>
      </div>
    </Section>
  );
}

export function SpeedSection() {
  return (
    <Section>
      <SectionHeader
        title="Structure accelerates. Chaos delays."
        subtitle="You move faster because the system structures your work, validates assumptions early, and prevents backtracking."
        centered
      />
      
      <div className="max-w-[1200px] mx-auto space-y-8">
        {/* Traditional Path */}
        <Card>
          <div className="mb-6">
            <DiagramLabel className="mb-2">Without structure: 12+ months</DiagramLabel>
            <p className="text-meta text-[var(--color-text-secondary)]">
              Time spent searching, reworking, aligning
            </p>
          </div>
          <div className="flex gap-2">
            {['Research', 'Analysis', 'Business Model', 'Branding', 'Branding', 'Launch'].map((stage, index) => (
              <div
                key={index}
                className="flex-1 bg-[var(--color-border-medium)] px-3 py-4 text-center"
              >
                <p className="text-body-small text-[var(--color-text-tertiary)]">{stage}</p>
              </div>
            ))}
          </div>
        </Card>
        
        {/* StartupAI Path */}
        <Card variant="accent">
          <div className="mb-6">
            <DiagramLabel className="mb-2">With guided flow: 6-8 weeks</DiagramLabel>
            <p className="text-meta text-[var(--color-text-secondary)]">
              Structured stages, AI validation, clear decisions
            </p>
          </div>
          <div className="flex gap-2 max-w-[50%]">
            {['Validate', 'Analyze', 'Plan'].map((stage, index) => (
              <div
                key={index}
                className="flex-1 bg-[var(--color-accent-primary)] px-3 py-4 text-center"
              >
                <p className="text-body-small text-white font-medium">{stage}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}

export function CapabilityMatrixSection() {
  const capabilities = [
    { stage: 'Idea', output: 'Structured Profile', format: 'Document' },
    { stage: 'Validation', output: 'Score + Risk Report', format: 'Analysis' },
    { stage: 'Market', output: 'Positioning Brief', format: 'Strategy' },
    { stage: 'Business', output: 'Revenue Model', format: 'Financial' },
    { stage: 'Brand', output: 'Identity System', format: 'Guide' },
    { stage: 'Execution', output: 'Launch Roadmap', format: 'Plan' }
  ];
  
  return (
    <Section background="surface">
      <SectionHeader
        title="Concrete outputs, not abstract advice"
        subtitle="Every stage produces a structured document you can use, share, and build upon."
        centered
      />
      
      <div className="max-w-[900px] mx-auto">
        <table className="w-full border-collapse border border-[var(--color-border)]">
          <thead>
            <tr className="bg-[var(--color-accent-primary-light)]">
              <th className="text-left p-4 border-b-2 border-[var(--color-border)] text-label text-[var(--color-accent-primary)]">
                STAGE
              </th>
              <th className="text-left p-4 border-b-2 border-[var(--color-border)] text-label text-[var(--color-accent-primary)]">
                OUTPUT
              </th>
              <th className="text-left p-4 border-b-2 border-[var(--color-border)] text-label text-[var(--color-accent-primary)]">
                FORMAT
              </th>
            </tr>
          </thead>
          <tbody>
            {capabilities.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-white' : 'bg-[var(--color-canvas)]'}
              >
                <td className="p-4 border-b border-[var(--color-border)] text-body font-medium">
                  {item.stage}
                </td>
                <td className="p-4 border-b border-[var(--color-border)] text-body">
                  {item.output}
                </td>
                <td className="p-4 border-b border-[var(--color-border)] text-body text-[var(--color-text-secondary)]">
                  {item.format}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export function TransformationSection() {
  return (
    <Section>
      <SectionHeader
        title="From idea to structured insight"
        subtitle="Every AI recommendation is explained. You see the logic, not just the output."
        centered
      />
      
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-[30%_40%_30%] gap-12 items-start">
          {/* Input */}
          <Card variant="minimal" className="bg-[var(--color-canvas)]">
            <DiagramLabel className="mb-4">Your initial idea</DiagramLabel>
            <p className="text-body-small text-[var(--color-text-secondary)] italic">
              "I want to build a tool for X"
            </p>
            <p className="text-meta text-[var(--color-text-tertiary)] mt-4">
              [Unstructured idea]
            </p>
          </Card>
          
          {/* Process */}
          <div className="pt-8">
            <DiagramLabel className="mb-6 text-center">AI analysis</DiagramLabel>
            <div className="space-y-3">
              {[
                '1. Extracts problem',
                '2. Identifies market',
                '3. Analyzes competitors',
                '4. Validates assumptions',
                '5. Structures data'
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <DiagramArrow direction="right" />
                  <p className="text-body-small text-[var(--color-text-secondary)]">{step}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Output */}
          <Card variant="accent">
            <DiagramLabel className="mb-4">Structured deliverable</DiagramLabel>
            <div className="space-y-2 text-body-small">
              <p><strong>Problem:</strong> [Clear]</p>
              <p><strong>Market:</strong> [Defined]</p>
              <p><strong>Competitors:</strong> [List]</p>
              <p><strong>Risks:</strong> [Flagged]</p>
              <p><strong>Next steps:</strong> [Clear]</p>
            </div>
            <p className="text-meta text-[var(--color-text-secondary)] mt-4">
              [Actionable document]
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}

export function DailyExecutionSection() {
  return (
    <Section background="surface">
      <SectionHeader
        title="Strategy informs daily work. Daily work refines strategy."
        subtitle="StartupAI doesn't end at the plan. It guides daily decisions and adapts as you learn."
        centered
      />
      
      <div className="max-w-[600px] mx-auto">
        <div className="grid grid-cols-2 gap-6">
          <DiagramBox variant="accent" className="text-center">
            <p className="text-body font-medium">Strategic Plan</p>
          </DiagramBox>
          <DiagramBox className="text-center">
            <p className="text-body font-medium">Daily Priorities</p>
          </DiagramBox>
          <DiagramBox className="text-center">
            <p className="text-body font-medium">Execution</p>
          </DiagramBox>
          <DiagramBox className="text-center">
            <p className="text-body font-medium">Feedback Loop</p>
          </DiagramBox>
        </div>
        
        {/* Visual loop indicator */}
        <div className="mt-8 text-center">
          <svg width="200" height="80" viewBox="0 0 200 80" className="mx-auto">
            <path
              d="M 100 10 C 150 10, 180 40, 180 70 L 20 70 C 20 40, 50 10, 100 10"
              stroke="var(--color-accent-primary)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5 5"
            />
            <path
              d="M 100 10 L 95 15 L 105 15 Z"
              fill="var(--color-accent-primary)"
            />
          </svg>
          <p className="text-meta text-[var(--color-text-secondary)] mt-4">
            Continuous adaptation
          </p>
        </div>
      </div>
    </Section>
  );
}

export function PitchDeckSection() {
  const deckSections = [
    { number: 1, name: 'Problem', source: 'Validated through AI analysis' },
    { number: 2, name: 'Solution', source: 'Structured from your profile' },
    { number: 3, name: 'Market Size', source: 'Researched and calculated' },
    { number: 4, name: 'Business Model', source: 'Revenue projections included' },
    { number: 5, name: 'Traction', source: 'Metrics formatted' },
    { number: 6, name: 'Team', source: 'Positioned strategically' },
    { number: 7, name: 'Ask', source: 'Funding needs structured' }
  ];
  
  return (
    <Section>
      <SectionHeader
        title="From startup profile to investor pitch"
        subtitle="Every pitch deck section is backed by your validated analysis. No guessing, no templates."
        centered
      />
      
      <div className="max-w-[800px] mx-auto">
        <Card>
          <DiagramLabel className="mb-8 text-center">
            PITCH DECK SECTIONS (Generated by StartupAI)
          </DiagramLabel>
          
          <div className="space-y-0">
            {deckSections.map((section, index) => (
              <div
                key={index}
                className="flex items-start justify-between py-6 border-b border-[var(--color-border)] last:border-b-0"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-8 h-8 rounded-full border-2 border-[var(--color-accent-primary)] flex items-center justify-center flex-shrink-0">
                    <span className="text-body-small font-semibold text-[var(--color-accent-primary)]">
                      {section.number}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-h4 text-[var(--color-text-primary)] mb-1">
                      {section.name}
                    </h4>
                    <p className="text-body-small text-[var(--color-text-secondary)]">
                      {section.source}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-meta text-[var(--color-text-secondary)] text-center mt-8 pt-6 border-t border-[var(--color-border)]">
            Export as PDF or Google Slides
          </p>
        </Card>
      </div>
    </Section>
  );
}

export function FinalCTASection() {
  return (
    <Section>
      <SectionHeader
        title="Begin with clarity. Build with structure."
        centered
      />
      
      <div className="max-w-[1000px] mx-auto mb-12">
        <div className="flex justify-center items-start gap-8">
          <div className="text-center max-w-[200px]">
            <DiagramLabel className="mb-4">TODAY</DiagramLabel>
            <DiagramBox className="mb-4">
              <p className="text-body-small">Share Your Idea</p>
            </DiagramBox>
            <p className="text-meta text-[var(--color-text-secondary)]">(5 minutes)</p>
          </div>
          
          <div className="pt-12">
            <DiagramArrow direction="right" />
          </div>
          
          <div className="text-center max-w-[200px]">
            <DiagramLabel className="mb-4">THIS WEEK</DiagramLabel>
            <DiagramBox className="mb-4">
              <p className="text-body-small">Complete Validation</p>
            </DiagramBox>
            <p className="text-meta text-[var(--color-text-secondary)]">(AI-guided)</p>
          </div>
          
          <div className="pt-12">
            <DiagramArrow direction="right" />
          </div>
          
          <div className="text-center max-w-[200px]">
            <DiagramLabel className="mb-4">WEEK 6-8</DiagramLabel>
            <DiagramBox className="mb-4">
              <p className="text-body-small">Structured Plan</p>
            </DiagramBox>
            <p className="text-meta text-[var(--color-text-secondary)]">(Full system)</p>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <Button variant="primary" className="mb-4">
          Start Your Validation
        </Button>
        <p className="text-body-large text-[var(--color-text-secondary)] max-w-[680px] mx-auto">
          5 minutes to submit your idea. AI validates within 24 hours. You decide next steps.
        </p>
      </div>
    </Section>
  );
}

export function FooterSection() {
  return (
    <Section background="canvas" className="border-t border-[var(--color-border)]">
      <div className="grid grid-cols-3 gap-12">
        <div>
          <p className="text-body-large text-[var(--color-text-primary)] mb-4">
            StartupAI: The AI operating system for founders.
          </p>
          <p className="text-body text-[var(--color-text-secondary)]">
            From strategy to daily execution, in one guided flow.
          </p>
        </div>
        
        <div>
          <h4 className="text-label text-[var(--color-text-secondary)] mb-4">PRODUCT</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-body text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)]">How It Works</a></li>
            <li><a href="#" className="text-body text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)]">Stages</a></li>
            <li><a href="#" className="text-body text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)]">Outputs</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-label text-[var(--color-text-secondary)] mb-4">COMPANY</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-body text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)]">About</a></li>
            <li><a href="#" className="text-body text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)]">Pricing</a></li>
            <li><a href="#" className="text-body text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)]">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
        <p className="text-meta text-[var(--color-text-tertiary)] text-center">
          © 2026 StartupAI. All rights reserved.
        </p>
      </div>
    </Section>
  );
}