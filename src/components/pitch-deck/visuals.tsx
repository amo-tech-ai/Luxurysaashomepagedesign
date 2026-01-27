import { ArrowRight, Check, Users, FileText, Zap, TrendingUp } from 'lucide-react';

// GLOBAL STYLE: YC-style minimal, white background, dark green accent (#0d5f4e)

// ==================== 1️⃣ PROBLEM WORKFLOW ====================
export interface ProblemWorkflowProps {
  steps?: {
    label: string;
    highlighted?: boolean;
    pain?: string;
  }[];
}

export function ProblemWorkflowDiagram({ steps }: ProblemWorkflowProps) {
  const defaultSteps = [
    { label: 'Customer' },
    { label: 'Support Ticket' },
    { label: 'Human Agent' },
    { label: 'Manual Reply', highlighted: true, pain: 'Time-consuming' },
    { label: 'Slow Resolution' }
  ];

  const workflowSteps = steps || defaultSteps;

  return (
    <div className="py-8">
      <div className="text-sm text-gray-500 mb-6 text-center">Current Workflow</div>
      <div className="flex items-center justify-between gap-4">
        {workflowSteps.map((step, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex flex-col items-center flex-1">
              <div className={`px-6 py-4 rounded-lg border-2 min-w-[140px] text-center transition-all ${
                step.highlighted 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-gray-200 bg-white'
              }`}>
                <div className={`font-medium ${
                  step.highlighted ? 'text-red-700' : 'text-gray-900'
                }`}>
                  {step.label}
                </div>
              </div>
              {step.pain && (
                <div className="text-xs text-red-600 mt-2">{step.pain}</div>
              )}
            </div>
            {index < workflowSteps.length - 1 && (
              <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-500 mt-6 text-center">
        Repetitive manual work causes delays and agent burnout
      </div>
    </div>
  );
}

// ==================== 2️⃣ SOLUTION WORKFLOW ====================
export interface SolutionWorkflowProps {
  steps?: {
    label: string;
    highlighted?: boolean;
    tag?: string;
  }[];
}

export function SolutionWorkflowDiagram({ steps }: SolutionWorkflowProps) {
  const defaultSteps = [
    { label: 'Customer' },
    { label: 'AI Copilot', highlighted: true },
    { label: 'Human Review', tag: 'Human-in-the-loop' },
    { label: 'Instant Resolution' }
  ];

  const workflowSteps = steps || defaultSteps;

  return (
    <div className="py-8">
      <div className="text-sm text-gray-500 mb-6 text-center">With AI Solution</div>
      <div className="flex items-center justify-between gap-4">
        {workflowSteps.map((step, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex flex-col items-center flex-1">
              <div className={`px-6 py-4 rounded-lg border-2 min-w-[140px] text-center relative ${
                step.highlighted 
                  ? 'border-[#0d5f4e] bg-[#0d5f4e]/5' 
                  : 'border-gray-200 bg-white'
              }`}>
                <div className={`font-medium ${
                  step.highlighted ? 'text-[#0d5f4e]' : 'text-gray-900'
                }`}>
                  {step.label}
                </div>
                {step.tag && (
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 bg-[#0d5f4e] text-white text-xs rounded-full">
                    {step.tag}
                  </div>
                )}
              </div>
            </div>
            {index < workflowSteps.length - 1 && (
              <ArrowRight className="w-5 h-5 text-[#0d5f4e] flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-500 mt-10 text-center">
        AI automates while humans maintain control and quality
      </div>
    </div>
  );
}

// ==================== 3️⃣ SYSTEM DIAGRAM ====================
export interface SystemDiagramProps {
  steps?: {
    number: number;
    title: string;
    desc: string;
  }[];
}

export function SystemDiagram({ steps }: SystemDiagramProps) {
  const defaultSteps = [
    { 
      number: 1, 
      title: 'Ingest Context',
      desc: 'Analyzes ticket history and knowledge base'
    },
    { 
      number: 2, 
      title: 'Generate Response',
      desc: 'AI creates context-aware draft reply'
    },
    { 
      number: 3, 
      title: 'Learn & Improve',
      desc: 'Learns from human feedback continuously'
    }
  ];

  const systemSteps = steps || defaultSteps;

  return (
    <div className="py-8">
      <div className="text-sm text-gray-500 mb-6 text-center">How It Works</div>
      <div className="flex items-stretch gap-6">
        {systemSteps.map((step, index) => (
          <div key={index} className="flex items-center flex-1">
            <div className="flex flex-col bg-white border-2 border-gray-200 rounded-xl p-6 w-full">
              <div className="w-10 h-10 rounded-full bg-[#0d5f4e] text-white flex items-center justify-center font-medium mb-4">
                {step.number}
              </div>
              <div className="font-medium text-gray-900 mb-2">{step.title}</div>
              <div className="text-sm text-gray-600">{step.desc}</div>
            </div>
            {index < systemSteps.length - 1 && (
              <ArrowRight className="w-6 h-6 text-gray-400 mx-4 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ==================== 4️⃣ MARKET FUNNEL ====================
export interface MarketFunnelProps {
  layers?: {
    label: 'TAM' | 'SAM' | 'SOM';
    value: string;
    desc: string;
  }[];
  growth?: string;
}

export function MarketFunnel({ layers, growth }: MarketFunnelProps) {
  const defaultLayers = [
    { label: 'TAM' as const, value: '$12B', desc: 'Global customer support software market' },
    { label: 'SAM' as const, value: '$3B', desc: 'Mid-market SaaS teams (50-500 employees)' },
    { label: 'SOM' as const, value: '$150M', desc: 'Initial target: AI-ready support teams' }
  ];

  const funnelLayers = layers || defaultLayers;
  const growthRate = growth || '18% CAGR';

  const widths = { TAM: 'w-full', SAM: 'w-3/4', SOM: 'w-1/2' };

  return (
    <div className="py-8">
      <div className="text-sm text-gray-500 mb-8 text-center">Market Opportunity</div>
      <div className="flex gap-8">
        <div className="flex-1 space-y-6">
          {funnelLayers.map((layer, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`${widths[layer.label]} transition-all`}>
                <div className={`p-6 rounded-lg border-2 relative ${
                  index === 0 ? 'bg-[#0d5f4e]/10 border-[#0d5f4e]/30' :
                  index === 1 ? 'bg-[#0d5f4e]/5 border-[#0d5f4e]/20' :
                  'bg-gray-50 border-gray-300'
                }`}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-xs font-medium text-gray-600">{layer.label}</div>
                    <div className="text-2xl font-light text-gray-900">{layer.value}</div>
                  </div>
                  <div className="text-xs text-gray-600">{layer.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center min-w-[100px]">
          <TrendingUp className="w-8 h-8 text-[#0d5f4e] mb-2" />
          <div className="text-sm font-medium text-[#0d5f4e]">{growthRate}</div>
          <div className="text-xs text-gray-500 mt-1">Market growth</div>
        </div>
      </div>
    </div>
  );
}

// ==================== 5️⃣ TRACTION DASHBOARD ====================
export interface TractionDashboardProps {
  metrics?: {
    label: string;
    value: string;
    change?: string;
  }[];
  chartData?: {
    month: string;
    revenue: number;
  }[];
}

export function TractionDashboard({ metrics, chartData }: TractionDashboardProps) {
  const defaultMetrics = [
    { label: 'Active Users', value: '2.3K', change: '+40%' },
    { label: 'MRR', value: '$12K', change: '+35%' },
    { label: 'MoM Growth', value: '40%', change: 'Strong' }
  ];

  const defaultChartData = [
    { month: 'Jan', revenue: 5 },
    { month: 'Feb', revenue: 7 },
    { month: 'Mar', revenue: 10 },
    { month: 'Apr', revenue: 12 }
  ];

  const tractionMetrics = metrics || defaultMetrics;
  const data = chartData || defaultChartData;

  const maxRevenue = Math.max(...data.map(d => d.revenue));

  return (
    <div className="py-8 space-y-8">
      {/* Stat Cards */}
      <div className="grid grid-cols-3 gap-6">
        {tractionMetrics.map((metric, index) => (
          <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="text-4xl font-light text-gray-900 mb-2">{metric.value}</div>
            <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
            {metric.change && (
              <div className="text-xs text-green-600 font-medium">{metric.change}</div>
            )}
          </div>
        ))}
      </div>

      {/* Simple Growth Chart */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="text-sm font-medium text-gray-700 mb-6">Revenue Growth</div>
        <div className="flex items-end justify-between gap-4 h-40">
          {data.map((point, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full flex flex-col justify-end h-full">
                <div 
                  className="w-full bg-[#0d5f4e] rounded-t transition-all relative"
                  style={{ height: `${(point.revenue / maxRevenue) * 100}%` }}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-900">
                    ${point.revenue}k
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-2">{point.month}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-xs text-gray-500 text-center">
        As of {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </div>
    </div>
  );
}

// ==================== 6️⃣ PRICING TIERS ====================
export interface PricingTiersProps {
  tiers?: {
    name: string;
    target: string;
    price: string;
    value: string;
    highlighted?: boolean;
  }[];
}

export function PricingTiers({ tiers }: PricingTiersProps) {
  const defaultTiers = [
    { 
      name: 'Starter',
      target: 'Small teams (1-10)',
      price: '$99/mo',
      value: 'Basic AI assistance + analytics'
    },
    { 
      name: 'Pro',
      target: 'Growing companies (11-50)',
      price: '$299/mo',
      value: 'Full automation + priority support',
      highlighted: true
    },
    { 
      name: 'Enterprise',
      target: 'Large organizations (50+)',
      price: 'Custom',
      value: 'Dedicated support + customization'
    }
  ];

  const pricingTiers = tiers || defaultTiers;

  return (
    <div className="py-8">
      <div className="text-sm text-gray-500 mb-8 text-center">Business Model</div>
      <div className="grid grid-cols-3 gap-6">
        {pricingTiers.map((tier, index) => (
          <div 
            key={index} 
            className={`bg-white border-2 rounded-xl p-6 transition-all ${
              tier.highlighted 
                ? 'border-[#0d5f4e] shadow-lg' 
                : 'border-gray-200'
            }`}
          >
            <div className="text-center mb-6">
              <div className="text-xl font-medium text-gray-900 mb-2">{tier.name}</div>
              <div className="text-xs text-gray-500 mb-4">{tier.target}</div>
              <div className="text-3xl font-light text-gray-900">{tier.price}</div>
            </div>
            <div className="text-sm text-gray-600 text-center pt-6 border-t border-gray-200">
              {tier.value}
            </div>
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-500 mt-6 text-center">
        Usage-based pricing with annual discount available
      </div>
    </div>
  );
}

// ==================== 7️⃣ COMPETITIVE MATRIX ====================
export interface CompetitiveMatrixProps {
  xAxis?: { left: string; right: string };
  yAxis?: { bottom: string; top: string };
  competitors?: { name: string; x: number; y: number }[];
  ourPosition?: { name: string; x: number; y: number; label?: string };
}

export function CompetitiveMatrix({ xAxis, yAxis, competitors, ourPosition }: CompetitiveMatrixProps) {
  const defaultXAxis = { left: 'Manual', right: 'Automated' };
  const defaultYAxis = { bottom: 'Generic', top: 'Industry-Specific' };
  const defaultCompetitors = [
    { name: 'Zendesk', x: 30, y: 40 },
    { name: 'Intercom', x: 50, y: 45 },
    { name: 'Helpscout', x: 35, y: 35 },
    { name: 'Freshdesk', x: 40, y: 38 }
  ];
  const defaultOurPosition = { name: 'Us', x: 85, y: 80, label: 'Best positioned' };

  const xLabels = xAxis || defaultXAxis;
  const yLabels = yAxis || defaultYAxis;
  const competitorData = competitors || defaultCompetitors;
  const ourPos = ourPosition || defaultOurPosition;

  return (
    <div className="py-8">
      <div className="text-sm text-gray-500 mb-8 text-center">Competitive Positioning</div>
      <div className="relative bg-white border border-gray-200 rounded-xl p-8">
        {/* Grid */}
        <div className="relative w-full h-80">
          {/* Quadrant lines */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />

          {/* Y-axis label */}
          <div className="absolute -left-6 top-0 -rotate-90 origin-left text-xs text-gray-500 whitespace-nowrap">
            {yLabels.top}
          </div>
          <div className="absolute -left-6 bottom-0 -rotate-90 origin-left text-xs text-gray-500 whitespace-nowrap">
            {yLabels.bottom}
          </div>

          {/* X-axis label */}
          <div className="absolute bottom-0 left-0 text-xs text-gray-500">
            {xLabels.left}
          </div>
          <div className="absolute bottom-0 right-0 text-xs text-gray-500">
            {xLabels.right}
          </div>

          {/* Competitors */}
          {competitorData.map((comp, index) => (
            <div
              key={index}
              className="absolute w-3 h-3 bg-gray-400 rounded-full"
              style={{
                left: `${comp.x}%`,
                top: `${100 - comp.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              title={comp.name}
            />
          ))}

          {/* Our Position */}
          <div
            className="absolute"
            style={{
              left: `${ourPos.x}%`,
              top: `${100 - ourPos.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="w-4 h-4 bg-[#0d5f4e] rounded-full" />
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className="text-xs font-medium text-[#0d5f4e]">{ourPos.name}</div>
              {ourPos.label && (
                <div className="text-xs text-gray-500">{ourPos.label}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-4 text-center">
        Positioned for AI-native, industry-specific automation
      </div>
    </div>
  );
}

// ==================== 8️⃣ GTM FUNNEL ====================
export interface GTMFunnelProps {
  stages?: {
    name: string;
    tactic: string;
    width: number;
  }[];
}

export function GTMFunnel({ stages }: GTMFunnelProps) {
  const defaultStages = [
    { name: 'Awareness', tactic: 'Content + SEO', width: 100 },
    { name: 'Trial', tactic: 'Free 14-day trial', width: 75 },
    { name: 'Paid', tactic: 'Self-serve checkout', width: 50 },
    { name: 'Expansion', tactic: 'Usage-based upsells', width: 35 }
  ];

  const funnelStages = stages || defaultStages;

  return (
    <div className="py-8">
      <div className="text-sm text-gray-500 mb-8 text-center">Go-to-Market Strategy</div>
      <div className="space-y-6 max-w-3xl mx-auto">
        {funnelStages.map((stage, index) => (
          <div key={index} className="flex flex-col items-center">
            <div 
              className="bg-[#0d5f4e] text-white rounded-lg p-4 transition-all"
              style={{ width: `${stage.width}%` }}
            >
              <div className="text-center font-medium mb-1">{stage.name}</div>
              <div className="text-center text-sm opacity-90">{stage.tactic}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-500 mt-8 text-center">
        Product-led growth with self-serve conversion
      </div>
    </div>
  );
}

// ==================== 9️⃣ TEAM LAYOUT ====================
export interface TeamLayoutProps {
  members?: {
    name: string;
    role: string;
    highlight: string;
  }[];
}

export function TeamLayout({ members }: TeamLayoutProps) {
  const defaultMembers = [
    { 
      name: 'Sarah Chen',
      role: 'CEO',
      highlight: 'Former VP Product at Zendesk, 10+ years in CS tech'
    },
    { 
      name: 'Michael Torres',
      role: 'CTO',
      highlight: 'Ex-Google AI, Stanford PhD in Natural Language Processing'
    },
    { 
      name: 'Alex Kumar',
      role: 'Head of Product',
      highlight: 'Built Intercom\'s AI features, shipped to 25K+ customers'
    }
  ];

  const teamMembers = members || defaultMembers;

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <div className="py-8">
      <div className="text-sm text-gray-500 mb-8 text-center">The Team</div>
      <div className="grid grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#0d5f4e]/10 border-2 border-[#0d5f4e]/20 flex items-center justify-center mx-auto mb-4">
              <div className="text-xl font-medium text-[#0d5f4e]">
                {getInitials(member.name)}
              </div>
            </div>
            <div className="font-medium text-gray-900 mb-1">{member.name}</div>
            <div className="text-sm text-[#0d5f4e] mb-3">{member.role}</div>
            <div className="text-xs text-gray-600 leading-relaxed">{member.highlight}</div>
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-500 mt-6 text-center">
        15+ years combined experience in customer support + AI
      </div>
    </div>
  );
}

// ==================== 🔟 USE OF FUNDS ====================
export interface UseOfFundsProps {
  allocations?: {
    category: string;
    percentage: number;
    description: string;
  }[];
  totalRaise?: string;
}

export function UseOfFunds({ allocations, totalRaise }: UseOfFundsProps) {
  const defaultAllocations = [
    { 
      category: 'Product',
      percentage: 40,
      description: 'AI model improvements and platform development'
    },
    { 
      category: 'Growth',
      percentage: 35,
      description: 'Sales, marketing, and customer success expansion'
    },
    { 
      category: 'Team',
      percentage: 25,
      description: 'Key engineering and go-to-market hires'
    }
  ];

  const fundAllocations = allocations || defaultAllocations;
  const raise = totalRaise || '$2M Seed Round';

  return (
    <div className="py-8">
      <div className="text-sm text-gray-500 mb-2 text-center">Use of Funds</div>
      <div className="text-xl font-medium text-gray-900 mb-8 text-center">{raise}</div>
      
      {/* Stacked Bar */}
      <div className="flex w-full h-16 rounded-lg overflow-hidden mb-8">
        {fundAllocations.map((allocation, index) => (
          <div
            key={index}
            className={`flex items-center justify-center text-white font-medium ${
              index === 0 ? 'bg-[#0d5f4e]' :
              index === 1 ? 'bg-[#0d5f4e]/70' :
              'bg-[#0d5f4e]/40'
            }`}
            style={{ width: `${allocation.percentage}%` }}
          >
            {allocation.percentage}%
          </div>
        ))}
      </div>

      {/* Breakdown */}
      <div className="space-y-4">
        {fundAllocations.map((allocation, index) => (
          <div key={index} className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
            <div className="text-2xl font-light text-gray-900 min-w-[60px]">
              {allocation.percentage}%
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900 mb-1">{allocation.category}</div>
              <div className="text-sm text-gray-600">{allocation.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-xs text-gray-500 mt-6 text-center">
        18-month runway with key milestones tracked quarterly
      </div>
    </div>
  );
}

// ==================== HELPER: GET VISUAL BY SLIDE TYPE ====================
export function getVisualForSlideType(slideType: string) {
  const visualComponents: Record<string, any> = {
    'problem': ProblemWorkflowDiagram,
    'solution': SolutionWorkflowDiagram,
    'product': SystemDiagram,
    'market': MarketFunnel,
    'traction': TractionDashboard,
    'business-model': PricingTiers,
    'competition': CompetitiveMatrix,
    'gtm': GTMFunnel,
    'team': TeamLayout,
    'financials': UseOfFunds
  };

  return visualComponents[slideType] || null;
}