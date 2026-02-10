/**
 * AI Readiness Canvas - Page Component
 * Route: /ai-readiness-canvas
 */

import { AIReadinessCanvas } from '@/components/ai-readiness/AIReadinessCanvas';

interface AIReadinessCanvasPageProps {
  onNavigate: (page: string) => void;
}

export default function AIReadinessCanvasPage({ onNavigate }: AIReadinessCanvasPageProps) {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <AIReadinessCanvas />
    </div>
  );
}
