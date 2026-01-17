import { CheckCircle2 } from 'lucide-react';

export function ProfileScreen() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h3 className="text-xl text-gray-900">
          Startup Profile Wizard
        </h3>
        <p className="text-sm text-gray-600">
          Tell us about your company
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        {/* Startup Name */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Startup Name
          </label>
          <div className="border border-gray-300 rounded-sm px-4 py-3 bg-gray-50">
            <span className="text-gray-900">VertexAI</span>
          </div>
        </div>

        {/* Website URL - Active field */}
        <div className="relative">
          <label className="block text-sm text-gray-600 mb-2">
            Website URL
          </label>
          <div className="border-2 border-[#0d5f4e] rounded-sm px-4 py-3 bg-white">
            <span className="text-gray-900">https://vertex-ai.io</span>
            <span className="animate-pulse">|</span>
          </div>
          <div className="absolute right-3 top-9 text-[#6b9d89]">
            <div className="w-5 h-5 border-2 border-[#6b9d89] border-t-transparent rounded-full animate-spin" />
          </div>
        </div>

        {/* Industry - Auto-filled */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Industry
          </label>
          <div className="border border-gray-200 rounded-sm px-4 py-3 bg-white flex items-center justify-between">
            <span className="text-gray-900">AI Infrastructure</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#6b9d89]">auto</span>
              <CheckCircle2 className="w-4 h-4 text-[#0d5f4e]" />
            </div>
          </div>
        </div>

        {/* Stage - Auto-filled */}
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Stage
          </label>
          <div className="border border-gray-200 rounded-sm px-4 py-3 bg-white flex items-center justify-between">
            <span className="text-gray-900">Pre-seed</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#6b9d89]">auto</span>
              <CheckCircle2 className="w-4 h-4 text-[#0d5f4e]" />
            </div>
          </div>
        </div>
      </div>

      {/* Progress Dots and Button */}
      <div className="flex items-center justify-between pt-4">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-[#0d5f4e]" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
        <button className="bg-[#0d5f4e] text-white px-6 py-2 rounded-sm text-sm hover:bg-[#0a4a3d] transition-colors">
          Continue →
        </button>
      </div>
    </div>
  );
}
