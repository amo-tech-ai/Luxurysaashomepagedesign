import { Sparkles } from 'lucide-react';

interface ProfileScreenProps {
  uiState?: string | null;
}

export function ProfileScreen({ uiState }: ProfileScreenProps) {
  return (
    <div className="p-6 space-y-4">
      {/* Header */}
      <div className="space-y-1">
        <h3 className="text-xl text-gray-900 font-light">
          Startup Profile Wizard
        </h3>
        <p className="text-sm text-gray-500 font-light leading-relaxed">
          Tell us about your company
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-3.5">
        {/* Startup Name */}
        <div>
          <label className="block text-xs text-gray-500 mb-2 font-light uppercase tracking-wide">
            Startup Name
          </label>
          <div className="border border-gray-200 rounded-lg px-4 py-2.5 bg-gray-50">
            <span className="text-gray-800 font-light">VertexAI</span>
          </div>
        </div>

        {/* Website URL - Active field */}
        <div className="relative">
          <label className="block text-xs text-gray-500 mb-2 font-light uppercase tracking-wide">
            Website URL
          </label>
          <div
            className={`border rounded-lg px-4 py-2.5 transition-all duration-200 ${
              uiState === 'focus-url'
                ? 'border-[#0d5f4e] bg-white shadow-sm ring-2 ring-[#0d5f4e] ring-opacity-20'
                : 'border-[#0d5f4e] bg-white shadow-sm'
            }`}
          >
            <span className="text-gray-800 font-light">https://vertex-ai.io</span>
            <span className="animate-pulse text-[#0d5f4e]">|</span>
          </div>
        </div>

        {/* Industry - Auto-filled */}
        <div>
          <label className="block text-xs text-gray-500 mb-2 font-light uppercase tracking-wide">
            Industry
          </label>
          <div className="border border-gray-200 rounded-lg px-4 py-2.5 bg-white flex items-center justify-between group">
            <span className="text-gray-800 font-light">AI Infrastructure</span>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-[#0d5f4e] bg-opacity-5 px-2.5 py-1 rounded-md">
                <Sparkles className="w-3 h-3 text-[#0d5f4e]" />
                <span className="text-xs text-[#0d5f4e] font-medium">AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stage - Auto-filled */}
        <div>
          <label className="block text-xs text-gray-500 mb-2 font-light uppercase tracking-wide">
            Stage
          </label>
          <div className="border border-gray-200 rounded-lg px-4 py-2.5 bg-white flex items-center justify-between">
            <span className="text-gray-800 font-light">Pre-seed</span>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-[#0d5f4e] bg-opacity-5 px-2.5 py-1 rounded-md">
                <Sparkles className="w-3 h-3 text-[#0d5f4e]" />
                <span className="text-xs text-[#0d5f4e] font-medium">AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Dots and Button */}
      <div className="flex items-center justify-between pt-4">
        <div className="flex gap-2.5">
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-[#0d5f4e]" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
        <button
          className={`bg-[#0d5f4e] text-white px-8 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
            uiState === 'click-continue'
              ? 'bg-[#0a4a3d] shadow-lg scale-95'
              : 'hover:bg-[#0a4a3d] shadow-sm'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}