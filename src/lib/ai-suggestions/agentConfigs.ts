import { Users, DollarSign, Brain, Link, BarChart3, Eye } from 'lucide-react';
import { AgentSectionData } from '@/components/pitch-deck/ai-suggestions/AgentSection';
import { StatusType } from '@/components/pitch-deck/ai-suggestions/StatusIndicator';

export interface IndustryFormData {
  targetCustomer?: string;
  problem?: string;
  solution?: string;
  integrations?: string[];
  metrics?: Array<{ name: string; value: string }>;
  valueDrivers?: string[];
  appliedSuggestions?: Set<string>; // Track which suggestions have been applied
}

/**
 * Analyzes form data and returns configured agent states
 */
export function getAgentStates(
  formData: IndustryFormData,
  onApplySuggestion: (field: string, value: string) => void
): AgentSectionData[] {
  return [
    getICPAgentState(formData, onApplySuggestion),
    getRevenueAgentState(formData, onApplySuggestion),
    getAIStrategyAgentState(formData, onApplySuggestion),
    getIntegrationAgentState(formData, onApplySuggestion),
    getMetricsAgentState(formData, onApplySuggestion),
  ];
}

/**
 * ICP Agent (Target Customer)
 */
function getICPAgentState(
  formData: IndustryFormData,
  onApply: (field: string, value: string) => void
): AgentSectionData {
  const targetCustomer = formData.targetCustomer || '';
  
  // Determine status
  let status: StatusType = 'empty';
  let statusMessage = 'Not started';
  
  if (targetCustomer.length > 0) {
    status = 'warning';
    statusMessage = 'Needs more detail';
    
    if (targetCustomer.length >= 50) {
      status = 'complete';
      statusMessage = 'Target defined';
      
      // Check for buyer/user separation
      const hasBuyerUser = /buyer|user|purchased|used/i.test(targetCustomer);
      if (!hasBuyerUser) {
        status = 'warning';
        statusMessage = 'Clarify buyer vs user';
      }
    }
  }

  return {
    id: 'icp',
    name: 'ICP Agent',
    icon: Users,
    insight: 'Buyer and user roles are not clearly separated.',
    actions: [
      {
        id: 'clarify-buyer-user',
        label: 'Clarify buyer vs user',
        description: 'Separate buyer and user roles',
        onClick: async () => {
          await simulateAIProcessing();
          onApply('targetCustomer', 
            'Used by marketing managers, purchased by VP Marketing at mid-market B2B SaaS companies (50–500 employees)'
          );
        },
      },
      {
        id: 'suggest-company-size',
        label: 'Suggest ICP by company size',
        description: 'Add specific company size range',
        onClick: async () => {
          await simulateAIProcessing();
          const enhanced = targetCustomer 
            ? `${targetCustomer} with 50–500 employees` 
            : 'Marketing teams at B2B SaaS companies with 50–500 employees';
          onApply('targetCustomer', enhanced);
        },
      },
      {
        id: 'refine-revenue-owner',
        label: 'Refine to revenue owner',
        description: 'Identify revenue decision-maker',
        onClick: async () => {
          await simulateAIProcessing();
          onApply('targetCustomer', 
            'RevOps leaders and VP Sales at mid-market B2B SaaS companies'
          );
        },
      },
    ],
    sampleOutput: 'Primary buyer: RevOps leaders at B2B SaaS companies (50–500 employees)',
    realWorldExample: 'Used by marketing managers, purchased by Heads of Growth.',
    status,
    statusMessage,
  };
}

/**
 * Revenue Agent (Problem Framing)
 */
function getRevenueAgentState(
  formData: IndustryFormData,
  onApply: (field: string, value: string) => void
): AgentSectionData {
  const problem = formData.problem || '';
  
  // Determine status
  let status: StatusType = 'empty';
  let statusMessage = 'Not started';
  
  if (problem.length > 0) {
    status = 'warning';
    statusMessage = 'Add revenue impact';
    
    // Check for revenue-related keywords
    const hasRevenueLanguage = /revenue|pipeline|cost|loss|ROI|payback/i.test(problem);
    
    if (problem.length >= 75 && hasRevenueLanguage) {
      status = 'complete';
      statusMessage = 'Problem validated';
    }
  }

  return {
    id: 'revenue',
    name: 'Revenue Agent',
    icon: DollarSign,
    insight: 'Problem is not clearly tied to revenue impact.',
    actions: [
      {
        id: 'rewrite-for-investors',
        label: 'Rewrite problem for investors',
        description: 'Add investor-friendly language',
        onClick: async () => {
          await simulateAIProcessing();
          onApply('problem', 
            'Manual workflows slow teams down, reducing pipeline velocity by 30% and costing $500K annually in lost deals'
          );
        },
      },
      {
        id: 'tie-to-pipeline',
        label: 'Tie problem to lost pipeline',
        description: 'Quantify lost opportunity',
        onClick: async () => {
          await simulateAIProcessing();
          const enhanced = problem 
            ? `${problem}, costing an average of $2M annually in lost revenue` 
            : 'Manual processes cost companies an average of $2M annually in lost revenue';
          onApply('problem', enhanced);
        },
      },
      {
        id: 'compare-tools',
        label: 'Compare vs existing tools',
        description: 'Position against status quo',
        onClick: async () => {
          await simulateAIProcessing();
          onApply('problem', 
            'Manual workflows require 15 hours/week vs. AI solutions that complete the same work in 2 hours, reducing pipeline velocity'
          );
        },
      },
    ],
    sampleOutput: 'Manual social workflows reduce pipeline velocity and attribution accuracy.',
    realWorldExample: 'Teams lose leads because follow-ups are inconsistent across channels.',
    status,
    statusMessage,
  };
}

/**
 * AI Strategy Agent (Solution)
 */
function getAIStrategyAgentState(
  formData: IndustryFormData,
  onApply: (field: string, value: string) => void
): AgentSectionData {
  const solution = formData.solution || '';
  
  // Determine status
  let status: StatusType = 'empty';
  let statusMessage = 'Not started';
  
  if (solution.length > 0) {
    status = 'warning';
    statusMessage = 'Focus on outcomes';
    
    // Check for outcome language
    const hasOutcomes = /automates|reduces|increases|predicts|improves|saves/i.test(solution);
    
    // Check if it's feature-focused
    const isFeatureFocused = /AI-powered|machine learning|neural network/i.test(solution) && !hasOutcomes;
    
    if (solution.length >= 75 && hasOutcomes && !isFeatureFocused) {
      status = 'complete';
      statusMessage = 'AI solution framed';
    }
  }

  return {
    id: 'ai-strategy',
    name: 'AI Strategy Agent',
    icon: Brain,
    insight: 'AI value is described as features, not outcomes.',
    actions: [
      {
        id: 'convert-to-outcomes',
        label: 'Convert features to outcomes',
        description: 'Focus on business results',
        onClick: async () => {
          await simulateAIProcessing();
          onApply('solution', 
            'AI automates content creation and posting, increasing engagement rates by 30% while saving 10 hours per week'
          );
        },
      },
      {
        id: 'highlight-ai-advantage',
        label: 'Highlight AI vs rules-based',
        description: 'Differentiate from traditional tools',
        onClick: async () => {
          await simulateAIProcessing();
          onApply('solution', 
            'Unlike static rules-based tools, our AI adapts to customer behavior in real-time, personalizing content for each segment'
          );
        },
      },
      {
        id: 'simplify-ai-loop',
        label: 'Simplify to one AI loop',
        description: 'Make AI workflow clear',
        onClick: async () => {
          await simulateAIProcessing();
          onApply('solution', 
            'AI analyzes CRM signals → Predicts engagement timing → Auto-generates personalized content → Posts across channels'
          );
        },
      },
    ],
    sampleOutput: 'AI predicts engagement and automates posting based on CRM signals.',
    realWorldExample: 'Instead of scheduling posts manually, AI adapts content daily.',
    status,
    statusMessage,
  };
}

/**
 * Integration Agent (Workflow & APIs)
 */
function getIntegrationAgentState(
  formData: IndustryFormData,
  onApply: (field: string, value: string) => void
): AgentSectionData {
  const integrations = formData.integrations || [];
  
  // Determine status
  let status: StatusType = 'empty';
  let statusMessage = 'Not started';
  
  if (integrations.length >= 1) {
    status = 'warning';
    statusMessage = 'Add more platforms';
    
    if (integrations.length >= 2) {
      status = 'complete';
      statusMessage = 'Integrations defined';
    }
  }

  return {
    id: 'integration',
    name: 'Integration Agent',
    icon: Link,
    insight: 'Integration depth is unclear.',
    actions: [
      {
        id: 'suggest-crm',
        label: 'Suggest common CRM platforms',
        description: 'Add popular CRM integrations',
        onClick: async () => {
          await simulateAIProcessing();
          // This would trigger selecting CRM integrations in the multi-select
          alert('Suggestion: Add HubSpot, Salesforce, or Pipedrive integrations');
        },
      },
      {
        id: 'add-social-apis',
        label: 'Add social platform APIs',
        description: 'Include social media platforms',
        onClick: async () => {
          await simulateAIProcessing();
          alert('Suggestion: Add LinkedIn API, Instagram Graph API, and X API integrations');
        },
      },
      {
        id: 'visualize-flow',
        label: 'Visualize data flow',
        description: 'Show integration workflow',
        onClick: async () => {
          await simulateAIProcessing();
          onApply('solution', 
            'HubSpot CRM → AI Analysis Engine → LinkedIn/Instagram posting → Attribution tracking back to CRM'
          );
        },
      },
    ],
    sampleOutput: 'HubSpot → AI Engine → LinkedIn / Instagram → CRM Attribution',
    realWorldExample: 'Customer updates in CRM trigger automated social posts.',
    status,
    statusMessage,
  };
}

/**
 * Metrics Agent (Proof & Traction)
 */
function getMetricsAgentState(
  formData: IndustryFormData,
  onApply: (field: string, value: string) => void
): AgentSectionData {
  const metrics = formData.metrics || [];
  
  // Determine status
  let status: StatusType = 'empty';
  let statusMessage = 'Not started';
  
  if (metrics.length >= 1) {
    status = 'warning';
    statusMessage = 'Add one more metric';
    
    if (metrics.length >= 2) {
      status = 'complete';
      statusMessage = 'Metrics validated';
    }
  }

  return {
    id: 'metrics',
    name: 'Metrics Agent',
    icon: BarChart3,
    insight: 'Metrics are missing or qualitative.',
    actions: [
      {
        id: 'suggest-saas-metrics',
        label: 'Suggest Seed-stage SaaS metrics',
        description: 'Add appropriate metrics',
        onClick: async () => {
          await simulateAIProcessing();
          alert('Suggestion: Add MRR growth rate, active users, or CAC payback period');
        },
      },
      {
        id: 'estimate-pilot',
        label: 'Estimate pilot impact',
        description: 'Project early results',
        onClick: async () => {
          await simulateAIProcessing();
          alert('Suggestion: Based on typical pilot results - expect +25% engagement, 10 hrs/week saved');
        },
      },
      {
        id: 'add-benchmarks',
        label: 'Add engagement benchmarks',
        description: 'Compare to industry averages',
        onClick: async () => {
          await simulateAIProcessing();
          alert('Suggestion: Industry avg engagement: 2.5% → Your tool: 3.8% (+52% improvement)');
        },
      },
    ],
    sampleOutput: '+28% engagement rate, 10 hrs/week saved per team',
    realWorldExample: 'Teams publish 3× more content without hiring.',
    status,
    statusMessage,
  };
}

/**
 * Helper function to simulate AI processing delay
 */
async function simulateAIProcessing(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, 300 + Math.random() * 200); // 300-500ms delay
  });
}