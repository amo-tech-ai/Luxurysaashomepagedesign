import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-[#fafaf8] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl leading-[1.1] tracking-tight text-gray-900">
              From strategy to daily execution, in one guided flow.
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
              StartupAI organizes your thinking, priorities, and next steps into a single intelligent system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-[#0d5f4e] hover:bg-[#0a4a3d] text-white px-8 py-4 rounded-sm transition-all duration-200 flex items-center justify-center gap-2">
                <span className="text-lg">Start Strategy Session</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-transparent border border-gray-300 hover:border-gray-400 text-gray-900 px-8 py-4 rounded-sm transition-all duration-200 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                <span className="text-lg">View Demo</span>
              </button>
            </div>
          </div>
          
          {/* Right Column - Product Preview */}
          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-sm p-8 shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Strategy Session</div>
                  <div className="w-2 h-2 rounded-full bg-[#6b9d89]"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-3 bg-gray-100 rounded-sm w-3/4"></div>
                  <div className="h-3 bg-gray-100 rounded-sm w-full"></div>
                  <div className="h-3 bg-gray-100 rounded-sm w-5/6"></div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1 h-1 rounded-full bg-[#0d5f4e]"></div>
                    <span className="text-sm text-gray-600">Current Focus</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-100 rounded-sm w-full"></div>
                    <div className="h-2 bg-gray-100 rounded-sm w-2/3"></div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0d5f4e] w-2/3 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">67% complete</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
