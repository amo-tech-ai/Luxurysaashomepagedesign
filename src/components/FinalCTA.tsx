import { ArrowRight } from 'lucide-react';

export function FinalCTA({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <section className="bg-[#1a1a1a] py-40 lg:py-48">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-12">
          <h2 className="text-5xl lg:text-7xl leading-[1.1] text-[#fafaf8]">
            Start with clarity.<br />
            Build with momentum.
          </h2>
          
          <div className="pt-8">
            <button 
              onClick={() => onNavigate?.('onboarding')}
              className="group bg-[#0d5f4e] hover:bg-[#0a4a3d] text-white px-12 py-5 rounded-sm transition-all duration-200 flex items-center justify-center gap-3 mx-auto text-xl"
            >
              <span>Start Your Strategy Session</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <p className="text-gray-500 text-sm pt-8">
            No credit card required • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
}