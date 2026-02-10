'use client';

import { useState } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { 
  Folder, 
  File, 
  Lock, 
  Unlock,
  Upload,
  Share2,
  Eye,
  Download,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface DataRoomProps {
  onNavigate?: (page: string) => void;
}

const FOLDERS = [
  {
    id: '1',
    name: 'Company Documents',
    status: 'complete',
    files: 5,
    required: 5,
    items: [
      { name: 'Certificate of Incorporation', uploaded: true },
      { name: 'Bylaws', uploaded: true },
      { name: 'Cap Table', uploaded: true },
      { name: 'Shareholder Agreements', uploaded: true },
      { name: 'Board Resolutions', uploaded: true },
    ],
  },
  {
    id: '2',
    name: 'Financial Information',
    status: 'in-progress',
    files: 2,
    required: 4,
    items: [
      { name: 'Financial Model (3-year projection)', uploaded: true },
      { name: 'Bank Statements (last 6 months)', uploaded: false },
      { name: 'Historical Financials', uploaded: true },
      { name: 'Cap Table & Waterfall', uploaded: false },
    ],
  },
  {
    id: '3',
    name: 'Product & Technology',
    status: 'incomplete',
    files: 1,
    required: 3,
    items: [
      { name: 'Product Roadmap', uploaded: true },
      { name: 'Tech Stack Documentation', uploaded: false },
      { name: 'IP/Patent Documentation', uploaded: false },
    ],
  },
  {
    id: '4',
    name: 'Customer & Market',
    status: 'complete',
    files: 4,
    required: 4,
    items: [
      { name: 'Market Research Report', uploaded: true },
      { name: 'Customer References', uploaded: true },
      { name: 'Key Metrics Dashboard', uploaded: true },
      { name: 'Competitive Analysis', uploaded: true },
    ],
  },
  {
    id: '5',
    name: 'Team & HR',
    status: 'in-progress',
    files: 2,
    required: 3,
    items: [
      { name: 'Team Bios & Org Chart', uploaded: true },
      { name: 'Employment Agreements', uploaded: true },
      { name: 'Advisor Agreements', uploaded: false },
    ],
  },
  {
    id: '6',
    name: 'Legal & Compliance',
    status: 'incomplete',
    files: 0,
    required: 3,
    items: [
      { name: 'Customer Contracts (samples)', uploaded: false },
      { name: 'Vendor Agreements', uploaded: false },
      { name: 'Privacy Policy & Terms of Service', uploaded: false },
    ],
  },
];

export default function DataRoomPage({ onNavigate }: DataRoomProps) {
  const [selectedFolder, setSelectedFolder] = useState(FOLDERS[0]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete':
        return 'text-emerald-600 bg-emerald-50';
      case 'in-progress':
        return 'text-amber-600 bg-amber-50';
      case 'incomplete':
        return 'text-gray-500 bg-gray-50';
      default:
        return 'text-gray-500 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
        return <CheckCircle className="w-4 h-4 text-emerald-600" />;
      case 'in-progress':
        return <AlertCircle className="w-4 h-4 text-amber-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const totalFiles = FOLDERS.reduce((sum, folder) => sum + folder.files, 0);
  const totalRequired = FOLDERS.reduce((sum, folder) => sum + folder.required, 0);
  const completionRate = Math.round((totalFiles / totalRequired) * 100);

  return (
    <DashboardLayout
      title="Data Room"
      subtitle="Organize and share due diligence materials with investors"
      onNavigate={onNavigate}
      activeNav="data-room"
    >
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#0E3E1B] mb-2">Investor Data Room</h1>
          <p className="text-sm text-gray-600">
            {totalFiles} of {totalRequired} documents uploaded • {completionRate}% complete
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Completion Rate</div>
            <div className="text-2xl font-semibold text-[#0d5f4e]">{completionRate}%</div>
            <div className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-[#0d5f4e] transition-all duration-500"
                style={{ width: `${completionRate}%` }}
              />
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Total Folders</div>
            <div className="text-2xl font-semibold text-gray-800">{FOLDERS.length}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Documents</div>
            <div className="text-2xl font-semibold text-gray-800">
              {totalFiles}/{totalRequired}
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Shared Access</div>
            <div className="flex items-center gap-2 mt-1">
              <Lock className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">Private</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left - Folder List */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
                <h3 className="font-semibold text-gray-800">Folders</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {FOLDERS.map((folder) => (
                  <button
                    key={folder.id}
                    onClick={() => setSelectedFolder(folder)}
                    className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${
                      selectedFolder.id === folder.id ? 'bg-[#E8F4F1]' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Folder className="w-4 h-4 text-[#0d5f4e]" />
                        <span className="text-sm font-medium text-gray-800">{folder.name}</span>
                      </div>
                      {getStatusIcon(folder.status)}
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>
                        {folder.files}/{folder.required} files
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full ${getStatusColor(folder.status)}`}
                      >
                        {Math.round((folder.files / folder.required) * 100)}%
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right - File Details */}
          <div className="col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">{selectedFolder.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {selectedFolder.files} of {selectedFolder.required} documents uploaded
                    </p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#0d5f4e] text-white text-sm rounded-lg hover:bg-[#0E3E1B] transition-colors">
                    <Upload className="w-4 h-4" />
                    Upload
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-3">
                  {selectedFolder.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#0d5f4e] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <File className={`w-5 h-5 ${item.uploaded ? 'text-[#0d5f4e]' : 'text-gray-300'}`} />
                        <div>
                          <div className={`text-sm font-medium ${item.uploaded ? 'text-gray-800' : 'text-gray-400'}`}>
                            {item.name}
                          </div>
                          {item.uploaded && (
                            <div className="text-xs text-gray-500 mt-0.5">
                              Uploaded • PDF • 1.2 MB
                            </div>
                          )}
                        </div>
                      </div>

                      {item.uploaded ? (
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-gray-400 hover:text-[#0d5f4e] transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-[#0d5f4e] transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                          <CheckCircle className="w-5 h-5 text-emerald-600" />
                        </div>
                      ) : (
                        <button className="px-3 py-1 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
                          Upload
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Share Options */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6">
              <div className="flex items-start gap-3 mb-4">
                <Share2 className="w-5 h-5 text-[#6b9d89] mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2">Share Data Room</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Grant secure access to investors for due diligence review
                  </p>

                  <div className="flex items-center gap-3">
                    <button className="px-4 py-2 bg-[#0d5f4e] text-white text-sm rounded-lg hover:bg-[#0E3E1B] transition-colors">
                      Generate Share Link
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                      Invite Investor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
