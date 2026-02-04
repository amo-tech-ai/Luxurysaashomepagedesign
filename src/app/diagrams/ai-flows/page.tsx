export default function AIFlowsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0E3E1B] py-20 lg:py-32 border-b border-[#0d5f4e]">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <h1 className="text-4xl lg:text-6xl text-white font-light mb-6 max-w-4xl">
            How the agent works
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-2xl">
            Five architectural patterns showing how AI agents reason, retrieve, orchestrate, and collaborate with humans.
          </p>
        </div>
      </section>

      {/* Flow 1: ReAct Reasoning Loop */}
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
          <p className="text-xs text-[#898888] text-center max-w-3xl mx-auto">
            Agent receives context and task; reasons about next step; calls a tool or returns an answer; observes result and repeats until task is done.
          </p>
        </div>
      </section>

      {/* Flow 2: RAG */}
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

          <p className="text-sm text-[#696969] text-center italic mb-4">
            Your data, cited in every answer.
          </p>
          <p className="text-xs text-[#898888] text-center max-w-3xl mx-auto">
            User asks a question; agent retrieves relevant chunks from vector DB or docs; LLM generates answer conditioned on those chunks; response includes citations.
          </p>
        </div>
      </section>

      {/* Flow 3: Tool-Use Agent */}
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

          <p className="text-sm text-[#696969] text-center italic mb-4">
            One request, the right tools, one response.
          </p>
          <p className="text-xs text-[#898888] text-center max-w-3xl mx-auto">
            User sends a request; agent decides which tools to call and in what order; tools run (search, DB, API, etc.); agent formats and returns the response.
          </p>
        </div>
      </section>

      {/* Flow 4: Multi-Agent Orchestration */}
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

            <div className="border border-[#0E3E1B] bg-[#DCF9E3] px-4 py-4 min-h-[100px] w-[180px] flex items-center justify-center text-center">
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

          <p className="text-sm text-[#696969] text-center italic mb-4">
            One task, many specialists, one result.
          </p>
          <p className="text-xs text-[#898888] text-center max-w-3xl mx-auto">
            Task arrives; router agent assigns to one or more specialists (e.g. research, code, writing); specialists execute; orchestrator synthesizes their outputs into one response or artifact.
          </p>
        </div>
      </section>

      {/* Flow 5: Human-in-the-Loop */}
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

          <p className="text-sm text-[#696969] text-center italic mb-4">
            AI drafts, you decide.
          </p>
          <p className="text-xs text-[#898888] text-center max-w-3xl mx-auto">
            User provides input or brief; agent generates a first draft (copy, plan, code); human reviews, edits, and approves; final output is published or used.
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