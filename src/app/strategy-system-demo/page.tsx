import { StrategySystem } from '../../components/StrategySystem';

interface StrategySystemDemoPageProps {
  onNavigate?: (page: string) => void;
}

export default function StrategySystemDemoPage({ onNavigate }: StrategySystemDemoPageProps) {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Simple Header */}
      <header className="bg-white border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900 mb-1">Strategy System — Demo</h1>
              <p className="text-sm text-gray-600">Consulting-grade modular feature cards</p>
            </div>
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="px-4 py-2 text-sm text-gray-600 hover:text-[#0d5f4e] transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </header>

      {/* Strategy System Component */}
      <StrategySystem onNavigate={onNavigate} />
    </div>
  );
}
