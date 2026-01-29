import { useState } from 'react';
import { AIChatbot } from '../../../components/ai-chatbot/AIChatbot';
import { 
  Home,
  Presentation,
  Search,
  Plus,
  Sparkles,
  LayoutGrid,
  FileText,
  Clock,
  MoreHorizontal,
  Edit3,
  Copy,
  Share2,
  Trash2,
  ChevronDown,
  Filter,
  ArrowUpDown
} from 'lucide-react';

interface PitchDeck {
  id: string;
  title: string;
  thumbnail: string;
  industry: string;
  deckType: 'pre-seed' | 'seed' | 'series-a' | 'demo-day';
  status: 'draft' | 'generating' | 'ready';
  lastEdited: string;
  slideCount: number;
  deckScore?: number;
}

const SAMPLE_DECKS: PitchDeck[] = [
  {
    id: '1',
    title: 'StartupAI - Seed Round Deck',
    thumbnail: '/deck-preview-1.jpg',
    industry: 'SaaS',
    deckType: 'seed',
    status: 'ready',
    lastEdited: '2 hours ago',
    slideCount: 12,
    deckScore: 88
  },
  {
    id: '2',
    title: 'FinFlow - Series A Pitch',
    thumbnail: '/deck-preview-2.jpg',
    industry: 'FinTech',
    deckType: 'series-a',
    status: 'ready',
    lastEdited: '1 day ago',
    slideCount: 15,
    deckScore: 92
  },
  {
    id: '3',
    title: 'EcoMart Investor Deck',
    thumbnail: '/deck-preview-3.jpg',
    industry: 'E-commerce',
    deckType: 'pre-seed',
    status: 'draft',
    lastEdited: '3 days ago',
    slideCount: 8,
    deckScore: 65
  },
  {
    id: '4',
    title: 'TechConf 2026 Demo',
    thumbnail: '/deck-preview-4.jpg',
    industry: 'Events',
    deckType: 'demo-day',
    status: 'ready',
    lastEdited: '1 week ago',
    slideCount: 10,
    deckScore: 85
  },
  {
    id: '5',
    title: 'HealthSync Platform Pitch',
    thumbnail: '/deck-preview-5.jpg',
    industry: 'HealthTech',
    deckType: 'seed',
    status: 'generating',
    lastEdited: 'Just now',
    slideCount: 0
  },
  {
    id: '6',
    title: 'GreenEnergy Solutions',
    thumbnail: '/deck-preview-6.jpg',
    industry: 'CleanTech',
    deckType: 'seed',
    status: 'draft',
    lastEdited: '2 weeks ago',
    slideCount: 11,
    deckScore: 73
  }
];

export default function PitchDeckDashboardPage() {
  const [decks, setDecks] = useState<PitchDeck[]>(SAMPLE_DECKS);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'name' | 'status'>('recent');
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const filteredDecks = decks.filter(deck => 
    deck.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    deck.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedDecks = [...filteredDecks].sort((a, b) => {
    if (sortBy === 'name') return a.title.localeCompare(b.title);
    if (sortBy === 'status') return a.status.localeCompare(b.status);
    return 0; // 'recent' is default order
  });

  const handleNavigate = (route: string) => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: route }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready': return 'bg-green-100 text-green-700 border-green-200';
      case 'draft': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'generating': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getDeckTypeLabel = (type: string) => {
    switch (type) {
      case 'pre-seed': return 'Pre-Seed';
      case 'seed': return 'Seed';
      case 'series-a': return 'Series A';
      case 'demo-day': return 'Demo Day';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Left Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200 z-40">
        <div className="p-6">
          {/* Logo */}
          <div className="mb-8">
            <div className="text-xl font-medium text-gray-900">StartupAI</div>
            <div className="text-xs text-gray-500 mt-0.5">AI Operating System</div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            <button
              onClick={() => handleNavigate('home')}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors group"
            >
              <Home className="w-4 h-4 group-hover:text-[#0d5f4e]" />
              <span className="text-sm font-medium">Home</span>
            </button>
            
            <button
              className="w-full flex items-center gap-3 px-4 py-2.5 bg-[#0d5f4e] text-white rounded-lg"
            >
              <Presentation className="w-4 h-4" />
              <span className="text-sm font-medium">My Presentations</span>
            </button>

            <button
              onClick={() => handleNavigate('pitch-deck-editor')}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors group"
            >
              <Edit3 className="w-4 h-4 group-hover:text-[#0d5f4e]" />
              <span className="text-sm font-medium">Pitch Deck Editor</span>
            </button>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <div className="bg-gradient-to-br from-[#0d5f4e]/5 to-[#0d5f4e]/10 rounded-xl p-4 border border-[#0d5f4e]/20">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#0d5f4e]" />
              <span className="text-xs font-medium text-gray-900">AI Credits</span>
            </div>
            <div className="text-lg font-light text-gray-900 mb-1">47 / 100</div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#0d5f4e] rounded-full" style={{ width: '47%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        <div className="max-w-7xl mx-auto px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="text-3xl font-medium text-gray-900 mb-1">My Presentations</h1>
                <p className="text-gray-600">Manage and edit your pitch decks</p>
              </div>

              {/* Create Pitch Deck CTA */}
              <div className="relative">
                <button
                  onClick={() => setShowCreateMenu(!showCreateMenu)}
                  className="px-6 py-3 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0a4a3b] transition-all flex items-center gap-2 shadow-lg shadow-[#0d5f4e]/20"
                >
                  <Plus className="w-4 h-4" />
                  Create Pitch Deck
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>

                {/* Dropdown Menu */}
                {showCreateMenu && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                    <button
                      onClick={() => {
                        handleNavigate('pitch-deck-v2');
                        setShowCreateMenu(false);
                      }}
                      className="w-full px-4 py-3 hover:bg-[#0d5f4e]/5 transition-colors text-left border-b border-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0d5f4e] to-[#0a4a3b] flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 mb-0.5">Create with AI</div>
                          <div className="text-xs text-gray-500">Answer questions, AI builds deck</div>
                        </div>
                      </div>
                    </button>

                    <button
                      className="w-full px-4 py-3 hover:bg-gray-50 transition-colors text-left border-b border-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <LayoutGrid className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 mb-0.5">Use a Template</div>
                          <div className="text-xs text-gray-500">Start from proven investor decks</div>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        handleNavigate('pitch-deck-editor');
                        setShowCreateMenu(false);
                      }}
                      className="w-full px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <FileText className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 mb-0.5">Blank Deck</div>
                          <div className="text-xs text-gray-500">Build slides manually</div>
                        </div>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Create Options - Large Cards */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            {/* Create with AI - Primary */}
            <button
              onClick={() => handleNavigate('pitch-deck-v2')}
              className="relative bg-gradient-to-br from-[#0d5f4e] to-[#0a4a3b] rounded-2xl p-8 text-left hover:shadow-2xl hover:scale-[1.02] transition-all group overflow-hidden"
            >
              <div className="absolute top-3 right-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                  Recommended
                </span>
              </div>
              
              <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-medium text-white mb-2">Create with AI</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Answer a few questions. AI builds your investor-ready deck in minutes.
              </p>
            </button>

            {/* Use a Template */}
            <button className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-left hover:border-[#0d5f4e]/30 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-[#0d5f4e]/10 transition-colors">
                <LayoutGrid className="w-7 h-7 text-gray-600 group-hover:text-[#0d5f4e]" />
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-2">Use a Template</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Start from proven investor decks used by successful startups.
              </p>
            </button>

            {/* Blank Deck */}
            <button
              onClick={() => handleNavigate('pitch-deck-editor')}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-left hover:border-[#0d5f4e]/30 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-[#0d5f4e]/10 transition-colors">
                <Plus className="w-7 h-7 text-gray-600 group-hover:text-[#0d5f4e]" />
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-2">Blank Deck</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Build slides manually with full control over every element.
              </p>
            </button>
          </div>

          {/* Search & Sort Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search decks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
              />
            </div>

            <div className="flex items-center gap-3">
              <button className="px-4 py-2.5 border border-gray-300 rounded-lg hover:border-[#0d5f4e] transition-colors text-sm text-gray-700 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>

              <div className="relative">
                <button
                  onClick={() => setActiveMenu(activeMenu === 'sort' ? null : 'sort')}
                  className="px-4 py-2.5 border border-gray-300 rounded-lg hover:border-[#0d5f4e] transition-colors text-sm text-gray-700 flex items-center gap-2"
                >
                  <ArrowUpDown className="w-4 h-4" />
                  Sort: {sortBy === 'recent' ? 'Last edited' : sortBy === 'name' ? 'Name' : 'Status'}
                  <ChevronDown className="w-4 h-4" />
                </button>

                {activeMenu === 'sort' && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                    <button
                      onClick={() => { setSortBy('recent'); setActiveMenu(null); }}
                      className="w-full px-4 py-2 hover:bg-gray-50 text-left text-sm text-gray-700"
                    >
                      Last edited
                    </button>
                    <button
                      onClick={() => { setSortBy('name'); setActiveMenu(null); }}
                      className="w-full px-4 py-2 hover:bg-gray-50 text-left text-sm text-gray-700"
                    >
                      Name
                    </button>
                    <button
                      onClick={() => { setSortBy('status'); setActiveMenu(null); }}
                      className="w-full px-4 py-2 hover:bg-gray-50 text-left text-sm text-gray-700"
                    >
                      Status
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Decks Grid */}
          {sortedDecks.length > 0 ? (
            <div className="grid grid-cols-3 gap-6">
              {sortedDecks.map((deck) => (
                <div
                  key={deck.id}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-[#0d5f4e]/30 transition-all"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    {deck.status === 'generating' ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 border-4 border-gray-300 border-t-[#0d5f4e] rounded-full animate-spin mx-auto mb-3" />
                          <div className="text-sm text-gray-600">Generating...</div>
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* Mock thumbnail preview */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                          <div className="text-xl font-medium text-gray-800">{deck.title}</div>
                          <div className="space-y-2">
                            <div className="h-2 bg-gray-300 rounded w-full" />
                            <div className="h-2 bg-gray-300 rounded w-4/5" />
                            <div className="h-2 bg-gray-300 rounded w-3/5" />
                          </div>
                        </div>
                        
                        {/* Hover Actions */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <button
                            onClick={() => handleNavigate('pitch-deck-editor')}
                            className="px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                          >
                            Open
                          </button>
                          <button className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="font-medium text-gray-900 mb-3 truncate">{deck.title}</h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        {deck.industry}
                      </span>
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        {getDeckTypeLabel(deck.deckType)}
                      </span>
                      <span className={`px-2.5 py-1 text-xs rounded-md border ${getStatusColor(deck.status)}`}>
                        {deck.status.charAt(0).toUpperCase() + deck.status.slice(1)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {deck.lastEdited}
                      </div>
                      {deck.slideCount > 0 && (
                        <div>{deck.slideCount} slides</div>
                      )}
                    </div>

                    {deck.deckScore && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="text-gray-600">Deck Score</span>
                          <span className="font-medium text-gray-900">{deck.deckScore}/100</span>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all ${
                              deck.deckScore >= 80 ? 'bg-green-600' :
                              deck.deckScore >= 60 ? 'bg-yellow-600' :
                              'bg-red-600'
                            }`}
                            style={{ width: `${deck.deckScore}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Quick Actions (Bottom) */}
                  <div className="px-5 pb-4 flex items-center gap-2">
                    <button className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center gap-1.5">
                      <Copy className="w-3.5 h-3.5" />
                      Duplicate
                    </button>
                    <button className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center gap-1.5">
                      <Share2 className="w-3.5 h-3.5" />
                      Share
                    </button>
                    <button className="p-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Presentation className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No decks found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or create a new pitch deck</p>
              <button
                onClick={() => handleNavigate('pitch-deck-v2')}
                className="px-6 py-3 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0a4a3b] transition-colors inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Create your first pitch deck with AI
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* AI Chatbot */}
      <AIChatbot 
        currentContext="pitch-deck"
        startupStage="mvp"
        onActionApply={(actionId) => {
          console.log('Action applied:', actionId);
        }}
      />
    </div>
  );
}