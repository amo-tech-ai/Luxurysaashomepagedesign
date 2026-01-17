export function SingleSource() {
  return (
    <section className="bg-[#1a1a1a] py-32 lg:py-40">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8 mb-20">
          <h2 className="text-4xl lg:text-6xl leading-[1.1] text-[#fafaf8]">
            One source of truth for<br />
            <span className="text-[#0d5f4e]">everything that matters</span>.
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Strategy, tasks, progress, and investors—connected in one system.
          </p>
        </div>
        
        {/* System diagram */}
        <div className="max-w-4xl mx-auto">
          <div className="relative py-16">
            {/* Center hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#0d5f4e] bg-opacity-10 border-2 border-[#0d5f4e] flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl text-[#fafaf8] mb-1">StartupAI</div>
                <div className="text-sm text-[#6b9d89]">Operating System</div>
              </div>
            </div>
            
            {/* Connected nodes */}
            <div className="grid grid-cols-2 gap-8 lg:gap-16">
              <div className="text-right space-y-8 lg:space-y-16">
                <div className="inline-block bg-[#252525] border border-gray-700 px-6 py-4 rounded-sm">
                  <div className="text-lg text-[#fafaf8]">Strategy</div>
                </div>
                <div className="inline-block bg-[#252525] border border-gray-700 px-6 py-4 rounded-sm">
                  <div className="text-lg text-[#fafaf8]">Tasks</div>
                </div>
              </div>
              
              <div className="text-left space-y-8 lg:space-y-16">
                <div className="inline-block bg-[#252525] border border-gray-700 px-6 py-4 rounded-sm">
                  <div className="text-lg text-[#fafaf8]">Investors</div>
                </div>
                <div className="inline-block bg-[#252525] border border-gray-700 px-6 py-4 rounded-sm">
                  <div className="text-lg text-[#fafaf8]">Progress</div>
                </div>
              </div>
            </div>
            
            {/* Connection lines (decorative) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <line x1="25%" y1="20%" x2="50%" y2="50%" stroke="#6b9d89" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
              <line x1="25%" y1="80%" x2="50%" y2="50%" stroke="#6b9d89" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
              <line x1="75%" y1="20%" x2="50%" y2="50%" stroke="#6b9d89" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
              <line x1="75%" y1="80%" x2="50%" y2="50%" stroke="#6b9d89" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
