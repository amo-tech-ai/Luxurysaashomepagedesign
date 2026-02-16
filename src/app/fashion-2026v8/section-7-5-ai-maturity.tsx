// Section 7.5 - AI Maturity & Competitive Positioning Component
// To be inserted in main page.tsx after Section 7

export const AIMaturitySection = () => (
  <section className="min-h-screen flex items-center py-32 px-8 lg:px-20 bg-white">
    <div className="max-w-[1200px] mx-auto w-full">
      <div className="mb-8">
        <span className="text-xs tracking-wider uppercase text-[#0E3E1B] font-medium">
          AI CAPABILITY · ORGANIZATIONAL READINESS
        </span>
      </div>

      <div className="text-center mb-16">
        <h2 
          className="text-4xl lg:text-6xl leading-tight text-[#212427] font-medium mb-6"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Most Fashion Brands Are Still Early — But Their Ambitions Are Aggressive
        </h2>
        <p className="text-lg leading-relaxed text-[#212427]">
          AI adoption is widespread. True AI maturity is not.
        </p>
      </div>

      {/* Dual Donut Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Current State Donut */}
        <div className="bg-[#F1EEEA] p-10 rounded-2xl">
          <h3 className="text-xl font-medium mb-8 text-center text-[#212427]">Current AI Maturity (1–5)</h3>
          <div className="relative w-64 h-64 mx-auto mb-8">
            <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
              {/* Somewhat Mature (1-3): 48% */}
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="#697485"
                strokeWidth="40"
                strokeDasharray={`${48 * 4.4} ${(100-48) * 4.4}`}
                strokeDashoffset="0"
              />
              {/* Mature (4): 37% */}
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="#2A4E45"
                strokeWidth="40"
                strokeDasharray={`${37 * 4.4} ${(100-37) * 4.4}`}
                strokeDashoffset={`-${48 * 4.4}`}
              />
              {/* Very Mature (5): 15% */}
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="#0E3E1B"
                strokeWidth="40"
                strokeDasharray={`${15 * 4.4} ${(100-15) * 4.4}`}
                strokeDashoffset={`-${(48+37) * 4.4}`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm font-semibold text-[#212427]">CURRENT</p>
                <p className="text-xs text-[#697485]">STATE</p>
              </div>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#697485]" />
              <span className="text-[#212427]">48% Somewhat Mature (1-3)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#2A4E45]" />
              <span className="text-[#212427]">37% Mature (4)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#0E3E1B]" />
              <span className="text-[#212427]">15% Very Mature (5)</span>
            </div>
          </div>
        </div>

        {/* Target State Donut */}
        <div className="bg-[#F1EEEA] p-10 rounded-2xl">
          <h3 className="text-xl font-medium mb-8 text-center text-[#212427]">Target AI Maturity (Next 2–3 Years)</h3>
          <div className="relative w-64 h-64 mx-auto mb-8">
            <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
              {/* Match Competitors: 7% */}
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="#697485"
                strokeWidth="40"
                strokeDasharray={`${7 * 4.4} ${(100-7) * 4.4}`}
                strokeDashoffset="0"
              />
              {/* More Mature: 36% */}
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="#2A4E45"
                strokeWidth="40"
                strokeDasharray={`${36 * 4.4} ${(100-36) * 4.4}`}
                strokeDashoffset={`-${7 * 4.4}`}
              />
              {/* Industry Leading: 42% */}
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="#CB9FD2"
                strokeWidth="40"
                strokeDasharray={`${42 * 4.4} ${(100-42) * 4.4}`}
                strokeDashoffset={`-${(7+36) * 4.4}`}
              />
              {/* Market Leader: 14% */}
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="#0E3E1B"
                strokeWidth="40"
                strokeDasharray={`${14 * 4.4} ${(100-14) * 4.4}`}
                strokeDashoffset={`-${(7+36+42) * 4.4}`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm font-semibold text-[#212427]">TARGET</p>
                <p className="text-xs text-[#697485]">STATE</p>
              </div>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#697485]" />
              <span className="text-[#212427]">7% Match Competitors</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#2A4E45]" />
              <span className="text-[#212427]">36% More Mature</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#CB9FD2]" />
              <span className="text-[#212427]">42% Industry Leading</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#0E3E1B]" />
              <span className="text-[#212427]">14% Market Leader in AI</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-16 p-6 bg-[#F1EEEA] rounded-xl">
        <p className="text-base text-[#212427]">
          <span className="font-bold text-[#0E3E1B]">83%</span> of high-maturity brands aim to be industry-leading. <span className="font-bold text-[#0E3E1B]">92%</span> expect to grow more mature within 3 years.
        </p>
      </div>

      {/* Maturity Progression Bar */}
      <div className="mb-16 bg-white p-10 rounded-2xl border border-[#697485]/20">
        <h3 className="text-xl font-medium mb-8 text-[#212427]">Maturity Progression Scale</h3>
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            {[
              { level: '1', label: 'Experimental', color: '#697485' },
              { level: '2', label: 'Pilot Stage', color: '#697485' },
              { level: '3', label: 'Functional', color: '#2A4E45' },
              { level: '4', label: 'Integrated', color: '#0E3E1B' },
              { level: '5', label: 'AI-Native', color: '#0E3E1B' },
            ].map((stage, i) => (
              <div key={i} className="flex-1 text-center">
                <div 
                  className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 border-2"
                  style={{ borderColor: stage.color, backgroundColor: i >= 3 ? `${stage.color}20` : 'white' }}
                >
                  <span className="font-bold" style={{ color: stage.color }}>{stage.level}</span>
                </div>
                <p className="text-xs font-medium text-[#212427]">{stage.label}</p>
              </div>
            ))}
          </div>
          <div className="relative h-3 bg-[#697485]/10 rounded-full overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-[60%] bg-gradient-to-r from-[#697485] via-[#2A4E45] to-[#0E3E1B] rounded-full" />
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-[#697485]">
            <span>Industry average: Level 3</span>
            <span className="text-[#0E3E1B] font-semibold">Top performers: Level 4–5</span>
          </div>
        </div>
      </div>

      {/* Capability Stack Diagram */}
      <div className="mb-16 bg-[#F1EEEA] p-10 rounded-2xl">
        <h3 className="text-xl font-medium mb-8 text-center text-[#212427]">Capability Stack: Three-Layer Model</h3>
        <div className="max-w-[600px] mx-auto">
          <div className="relative">
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-32 h-32 rounded-full bg-[#0E3E1B] flex items-center justify-center shadow-lg">
                <div className="text-center text-white">
                  <p className="text-sm font-bold">AI</p>
                  <p className="text-xs">STRATEGY</p>
                </div>
              </div>
            </div>

            {/* Layers */}
            <div className="space-y-6">
              {[
                { 
                  title: 'Outcomes', 
                  items: ['Revenue lift', 'Margin improvement', 'Speed to market'],
                  color: '#0E3E1B',
                  position: 'top'
                },
                { 
                  title: 'Technology', 
                  items: ['Data architecture', 'AI models', 'Knowledge graph'],
                  color: '#2A4E45',
                  position: 'middle'
                },
                { 
                  title: 'Human Enablement', 
                  items: ['AI talent', 'Process redesign', 'Governance'],
                  color: '#697485',
                  position: 'bottom'
                },
              ].map((layer, i) => (
                <div key={i} className="grid grid-cols-3 gap-4">
                  {layer.items.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl border-2 bg-white text-center"
                      style={{ borderColor: layer.color }}
                    >
                      <p className="text-xs font-medium" style={{ color: layer.color }}>{item}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Gap Panel */}
      <div className="mb-12 bg-[#12211D] text-[#F1EEEA] p-12 rounded-2xl">
        <h3 className="text-2xl font-medium mb-6" style={{ fontFamily: 'Georgia, serif' }}>The Gap</h3>
        <p className="text-lg mb-6">Adoption is widespread. Operational integration is limited.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-sm font-semibold mb-3 text-[#697485] uppercase tracking-wider">Most Brands:</h4>
            <ul className="space-y-2">
              <li>• Run pilots</li>
              <li>• Test AI search</li>
              <li>• Experiment with generative design</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3 text-[#0E3E1B] uppercase tracking-wider">Few Brands:</h4>
            <ul className="space-y-2">
              <li>• Integrate AI across the full value chain</li>
              <li>• Redesign workflows around intelligence</li>
              <li>• Build AI-native operating models</li>
            </ul>
          </div>
        </div>

        <p className="text-base italic border-t border-[#F1EEEA]/20 pt-6" style={{ fontFamily: 'Georgia, serif' }}>
          "AI advantage compounds. Early adoption improves efficiency. Full integration rewrites the competitive structure."
        </p>
      </div>

      {/* Competitive Positioning Quadrant */}
      <div className="bg-white p-10 rounded-2xl border border-[#697485]/20">
        <h3 className="text-xl font-medium mb-8 text-center text-[#212427]">Competitive Positioning Grid</h3>
        <div className="relative aspect-square max-w-[500px] mx-auto">
          {/* Grid */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2">
            {/* Bottom Left: Experimental */}
            <div className="border-2 border-[#697485]/30 rounded-xl p-6 flex items-center justify-center bg-[#697485]/5">
              <p className="text-sm font-medium text-[#697485] text-center">Experimental</p>
            </div>
            {/* Bottom Right: Tool-Based */}
            <div className="border-2 border-[#2A4E45]/30 rounded-xl p-6 flex items-center justify-center bg-[#2A4E45]/5">
              <p className="text-sm font-medium text-[#2A4E45] text-center">Tool-Based</p>
            </div>
            {/* Top Left: Isolated Excellence */}
            <div className="border-2 border-[#2A4E45]/30 rounded-xl p-6 flex items-center justify-center bg-[#2A4E45]/5">
              <p className="text-sm font-medium text-[#2A4E45] text-center">Isolated Excellence</p>
            </div>
            {/* Top Right: AI-Native Leader */}
            <div className="border-2 border-[#CB9FD2] rounded-xl p-6 flex items-center justify-center bg-[#CB9FD2]/20 shadow-lg shadow-[#CB9FD2]/30">
              <div className="text-center">
                <p className="text-base font-bold text-[#CB9FD2] mb-1">AI-Native Leader</p>
                <span className="text-2xl">★</span>
              </div>
            </div>
          </div>

          {/* Axis Labels */}
          <div className="absolute -bottom-8 left-0 right-0 text-center">
            <p className="text-xs text-[#697485]">AI Capability →</p>
          </div>
          <div className="absolute -left-28 top-0 bottom-0 flex items-center">
            <p className="text-xs text-[#697485] transform -rotate-90 whitespace-nowrap">Operational Integration →</p>
          </div>
        </div>
        <p className="text-sm text-center text-[#697485] mt-12 italic">
          The next leaders in fashion will not simply use AI. They will operate through it.
        </p>
      </div>
    </div>
  </section>
);
