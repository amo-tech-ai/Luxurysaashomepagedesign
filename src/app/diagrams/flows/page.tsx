export default function FlowDiagramsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#FAF9F7] py-20 lg:py-32 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <h1 className="text-4xl lg:text-6xl text-[#212427] font-light mb-6 max-w-4xl">
            Flow diagrams
          </h1>
          <p className="text-lg lg:text-xl text-[#696969] max-w-2xl">
            Visual process maps showing how StartupAI works—from strategy to execution, in clear sequential steps.
          </p>
        </div>
      </section>

      {/* Flow 1: Investor Materials */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <h2 className="text-3xl lg:text-4xl text-[#212427] font-light mb-12">
            From idea to investor-ready deck
          </h2>

          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-center gap-12 mb-6">
            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                Add context & URLs
              </p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                AI structures narrative
              </p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                You refine & brand
              </p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">
                Deck & one-pager ready
              </p>
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="flex lg:hidden flex-col items-center gap-6 mb-6">
            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                Add context & URLs
              </p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                AI structures narrative
              </p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                You refine & brand
              </p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">
                Deck & one-pager ready
              </p>
            </div>
          </div>

          <p className="text-sm text-[#696969] text-center italic">
            One path from clarity to execution.
          </p>
        </div>
      </section>

      {/* Flow 2: Lead Intelligence */}
      <section className="bg-[#F1EEEA] py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <h2 className="text-3xl lg:text-4xl text-[#212427] font-light mb-12">
            How lead intelligence works
          </h2>

          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-center gap-12 mb-6">
            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                Ingest leads & sources
              </p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                AI scores & segments
              </p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                Actions suggested
              </p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">
                Prioritized outreach
              </p>
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="flex lg:hidden flex-col items-center gap-6 mb-6">
            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                Ingest leads & sources
              </p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                AI scores & segments
              </p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                Actions suggested
              </p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">
                Prioritized outreach
              </p>
            </div>
          </div>

          <p className="text-sm text-[#696969] text-center italic">
            From raw leads to next-best action.
          </p>
        </div>
      </section>

      {/* Flow 3: Founder Onboarding */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <h2 className="text-3xl lg:text-4xl text-[#212427] font-light mb-12">
            From sign-up to live profile
          </h2>

          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-center gap-12 mb-6">
            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                Sign up or add LinkedIn
              </p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                AI pre-fills profile
              </p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                You review & confirm
              </p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">
                Profile & dashboard live
              </p>
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="flex lg:hidden flex-col items-center gap-6 mb-6">
            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                Sign up or add LinkedIn
              </p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                AI pre-fills profile
              </p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                You review & confirm
              </p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">
                Profile & dashboard live
              </p>
            </div>
          </div>

          <p className="text-sm text-[#696969] text-center italic">
            Minutes to a complete founder profile.
          </p>
        </div>
      </section>

      {/* Flow 4: Playbook Execution */}
      <section className="bg-[#F1EEEA] py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <h2 className="text-3xl lg:text-4xl text-[#212427] font-light mb-12">
            How playbook execution works
          </h2>

          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-center gap-12 mb-6">
            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                Choose playbook
              </p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                AI breaks into tasks
              </p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                You execute & log
              </p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">
                Progress & next steps
              </p>
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="flex lg:hidden flex-col items-center gap-6 mb-6">
            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                Choose playbook
              </p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                AI breaks into tasks
              </p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                You execute & log
              </p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">
                Progress & next steps
              </p>
            </div>
          </div>

          <p className="text-sm text-[#696969] text-center italic">
            One playbook, clear tasks, tracked progress.
          </p>
        </div>
      </section>

      {/* Flow 5: Market & Competitor Insight */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <h2 className="text-3xl lg:text-4xl text-[#212427] font-light mb-12">
            From URLs to strategy insight
          </h2>

          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-center gap-12 mb-6">
            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                Add URLs or keywords
              </p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                AI gathers & analyzes
              </p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                Insights & recommendations
              </p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-5 py-4 min-h-[80px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">
                Strategy updated
              </p>
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="flex lg:hidden flex-col items-center gap-6 mb-6">
            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                Add URLs or keywords
              </p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                AI gathers & analyzes
              </p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">
                Insights & recommendations
              </p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">
                Strategy updated
              </p>
            </div>
          </div>

          <p className="text-sm text-[#696969] text-center italic">
            Turn the web into a strategy input.
          </p>
        </div>
      </section>

      {/* AI Agent Flows Section Header */}
      <section className="bg-[#0E3E1B] py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-5xl text-white font-light mb-6">
            How AI agents work
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Advanced architectural flows showing the internal workings of AI agent systems.
          </p>
        </div>
      </section>

      {/* Flow 6: ReAct Reasoning Loop */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <h2 className="text-3xl lg:text-4xl text-[#212427] font-light mb-12">
            How the agent reasons
          </h2>

          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-center gap-8 mb-6">
            <div className="border border-gray-200 px-4 py-4 min-h-[100px] w-[160px] flex items-center justify-center text-center">
              <div>
                <p className="text-base font-medium text-[#212427]">Observe</p>
                <p className="text-sm text-[#696969] mt-1">(context & task)</p>
              </div>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 px-4 py-4 min-h-[100px] w-[160px] flex items-center justify-center text-center">
              <div>
                <p className="text-base font-medium text-[#212427]">Think</p>
                <p className="text-sm text-[#696969] mt-1">(plan next step)</p>
              </div>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 px-4 py-4 min-h-[100px] w-[160px] flex items-center justify-center text-center">
              <div>
                <p className="text-base font-medium text-[#212427]">Act</p>
                <p className="text-sm text-[#696969] mt-1">(tool or answer)</p>
              </div>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 px-4 py-4 min-h-[100px] w-[160px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">Observe again</p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-4 py-4 min-h-[100px] w-[160px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">Task done or next cycle</p>
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="flex lg:hidden flex-col items-center gap-6 mb-6">
            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <div>
                <p className="text-base font-medium text-[#212427]">Observe</p>
                <p className="text-sm text-[#696969] mt-1">(context & task)</p>
              </div>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <div>
                <p className="text-base font-medium text-[#212427]">Think</p>
                <p className="text-sm text-[#696969] mt-1">(plan next step)</p>
              </div>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <div>
                <p className="text-base font-medium text-[#212427]">Act</p>
                <p className="text-sm text-[#696969] mt-1">(tool or answer)</p>
              </div>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">Observe again</p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">Task done or next cycle</p>
            </div>
          </div>

          <p className="text-sm text-[#696969] text-center italic mb-4">
            One loop from observation to action.
          </p>
          <p className="text-xs text-[#898888] text-center">
            Agent repeats this cycle until the task is complete
          </p>
        </div>
      </section>

      {/* Flow 7: RAG */}
      <section className="bg-[#F1EEEA] py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <h2 className="text-3xl lg:text-4xl text-[#212427] font-light mb-12">
            From question to grounded answer
          </h2>

          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-center gap-12 mb-6">
            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[100px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">User question</p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[100px] w-[200px] flex items-center justify-center text-center">
              <div>
                <p className="text-base font-medium text-[#212427]">Retrieve</p>
                <p className="text-sm text-[#696969] mt-1">(knowledge base)</p>
              </div>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[100px] w-[200px] flex items-center justify-center text-center">
              <div>
                <p className="text-base font-medium text-[#212427]">Generate</p>
                <p className="text-sm text-[#696969] mt-1">(with sources)</p>
              </div>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-5 py-4 min-h-[100px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">Answer + citations</p>
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="flex lg:hidden flex-col items-center gap-6 mb-6">
            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">User question</p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <div>
                <p className="text-base font-medium text-[#212427]">Retrieve</p>
                <p className="text-sm text-[#696969] mt-1">(knowledge base)</p>
              </div>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <div>
                <p className="text-base font-medium text-[#212427]">Generate</p>
                <p className="text-sm text-[#696969] mt-1">(with sources)</p>
              </div>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">Answer + citations</p>
            </div>
          </div>

          <p className="text-sm text-[#696969] text-center italic">
            Your data, cited in every answer.
          </p>
        </div>
      </section>

      {/* Flow 8: Tool-Use Agent */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <h2 className="text-3xl lg:text-4xl text-[#212427] font-light mb-12">
            How the agent uses tools
          </h2>

          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-center gap-12 mb-6">
            <div className="border border-gray-200 px-5 py-4 min-h-[100px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">User request</p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[100px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">Agent plans & picks tools</p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[100px] w-[200px] flex items-center justify-center text-center">
              <div>
                <p className="text-base font-medium text-[#212427]">Execute</p>
                <p className="text-sm text-[#696969] mt-1">(API, search, code)</p>
              </div>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-5 py-4 min-h-[100px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">Response or next step</p>
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="flex lg:hidden flex-col items-center gap-6 mb-6">
            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">User request</p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">Agent plans & picks tools</p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <div>
                <p className="text-base font-medium text-[#212427]">Execute</p>
                <p className="text-sm text-[#696969] mt-1">(API, search, code)</p>
              </div>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">Response or next step</p>
            </div>
          </div>

          <p className="text-sm text-[#696969] text-center italic">
            One request, the right tools, one response.
          </p>
        </div>
      </section>

      {/* Flow 9: Multi-Agent Orchestration */}
      <section className="bg-[#F1EEEA] py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <h2 className="text-3xl lg:text-4xl text-[#212427] font-light mb-12">
            How specialist agents work together
          </h2>

          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-center gap-8 mb-6 flex-wrap">
            <div className="border border-gray-200 bg-white px-4 py-4 min-h-[100px] w-[140px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">Incoming task</p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 bg-white px-4 py-4 min-h-[100px] w-[140px] flex items-center justify-center text-center">
              <div>
                <p className="text-base font-medium text-[#212427]">Router</p>
                <p className="text-sm text-[#696969] mt-1">(assigns agent)</p>
              </div>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 bg-white px-4 py-4 min-h-[100px] w-[200px] flex flex-col items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427] mb-2">Specialist agents run</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-gray-100 text-xs rounded">Research</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded">Code</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded">Write</span>
              </div>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 bg-white px-4 py-4 min-h-[100px] w-[140px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">Synthesize outputs</p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-4 py-4 min-h-[100px] w-[140px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">Single response or artifact</p>
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="flex lg:hidden flex-col items-center gap-6 mb-6">
            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">Incoming task</p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <div>
                <p className="text-base font-medium text-[#212427]">Router</p>
                <p className="text-sm text-[#696969] mt-1">(assigns agent)</p>
              </div>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[80px] w-full flex flex-col items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427] mb-2">Specialist agents run</p>
              <div className="flex gap-2 flex-wrap justify-center">
                <span className="px-2 py-1 bg-gray-100 text-xs rounded">Research</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded">Code</span>
                <span className="px-2 py-1 bg-gray-100 text-xs rounded">Write</span>
              </div>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 bg-white px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">Synthesize outputs</p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">Single response or artifact</p>
            </div>
          </div>

          <p className="text-sm text-[#696969] text-center italic">
            One task, many specialists, one result.
          </p>
        </div>
      </section>

      {/* Flow 10: Human-in-the-Loop */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <h2 className="text-3xl lg:text-4xl text-[#212427] font-light mb-12">
            From agent draft to published output
          </h2>

          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-center gap-12 mb-6">
            <div className="border border-gray-200 px-5 py-4 min-h-[100px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">Input or brief</p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[100px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">Agent produces draft</p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[100px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">Human reviews & edits</p>
            </div>

            <div className="text-[#898888] text-2xl">→</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-5 py-4 min-h-[100px] w-[200px] flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">Approved & published</p>
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="flex lg:hidden flex-col items-center gap-6 mb-6">
            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">Input or brief</p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">Agent produces draft</p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-gray-200 px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#212427]">Human reviews & edits</p>
            </div>

            <div className="text-[#898888] text-2xl">↓</div>

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-5 py-4 min-h-[80px] w-full flex items-center justify-center text-center">
              <p className="text-base font-medium text-[#0E3E1B]">Approved & published</p>
            </div>
          </div>

          <p className="text-sm text-[#696969] text-center italic">
            AI drafts, you decide.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fafaf8] border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <button
              onClick={() => window.location.href = '/'}
              className="text-2xl text-gray-900 font-light hover:text-[#0d5f4e] transition-colors duration-200 cursor-pointer"
            >
              StartupAI
            </button>
            
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} StartupAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}