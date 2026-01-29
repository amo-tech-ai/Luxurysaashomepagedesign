import { useState } from 'react';
import { 
  Check, 
  ChevronLeft,
  ChevronRight,
  Download,
  Sparkles,
  AlertCircle,
  Plus,
  Copy,
  Trash2,
  Edit3,
  BarChart3,
  Target,
  TrendingUp,
  X,
  ChevronDown,
  Eye,
  List,
  Home
} from 'lucide-react';
import { TractionChart } from '@/components/pitch-deck/charts/TractionChart';
import { RevenueChart } from '@/components/pitch-deck/charts/RevenueChart';

interface Slide {
  id: string;
  type: string;
  title: string;
  bullets: string[];
  notes: string;
  slideScore?: number;
}

// Demo deck data
const DEMO_SLIDES: Slide[] = [
  {
    id: '1',
    type: 'title',
    title: 'StartupAI',
    bullets: ['The AI Operating System for Founders', 'From Strategy to Daily Execution'],
    notes: 'Opening slide - keep it simple and impactful',
    slideScore: 85
  },
  {
    id: '2',
    type: 'problem',
    title: 'The Problem',
    bullets: [
      '47M small businesses struggle with fragmented tools',
      'Average 8 hours/week wasted on manual workflows',
      '$12B annual market impact from inefficiency'
    ],
    notes: 'Emphasize the cost impact during Q&A',
    slideScore: 72
  },
  {
    id: '3',
    type: 'solution',
    title: 'Our Solution',
    bullets: [
      'AI-powered operating system that unifies strategy and execution',
      'Guided workflows that transform ideas into action',
      'Real-time insights from specialized AI agents'
    ],
    notes: 'Demo the product if possible',
    slideScore: 88
  },
  {
    id: '4',
    type: 'market',
    title: 'Market Opportunity',
    bullets: [
      'TAM: $47B (Global SMB software market)',
      'SAM: $12B (AI-enabled productivity tools)',
      'SOM: $800M (Early-stage founders)'
    ],
    notes: 'Reference Gartner study if asked',
    slideScore: 55
  },
  {
    id: '5',
    type: 'traction',
    title: 'Early Traction',
    bullets: [
      '3,200 beta users in 6 months',
      '68% weekly active user rate',
      '$45K MRR with 15% MoM growth'
    ],
    notes: 'Be ready to share customer testimonials',
    slideScore: 78
  },
  {
    id: '6',
    type: 'business_model',
    title: 'Business Model',
    bullets: [
      'Freemium SaaS: $0/$29/$99 per month',
      'Average conversion: 18% free to paid',
      'CAC: $120, LTV: $1,440 (12x ratio)'
    ],
    notes: 'Explain why our CAC is so low',
    slideScore: 82
  },
  {
    id: '7',
    type: 'team',
    title: 'Team',
    bullets: [
      'CEO: 10 years building AI products at Google',
      'CTO: Former Stanford AI lab, 3 exits',
      'CPO: Led product at $100M SaaS company'
    ],
    notes: 'Highlight complementary skill sets',
    slideScore: 90
  },
  {
    id: '8',
    type: 'ask',
    title: 'The Ask',
    bullets: [
      'Raising $2M Seed round',
      '18 months runway to reach $1M ARR',
      'Use of funds: 60% engineering, 30% GTM, 10% ops'
    ],
    notes: 'Be clear on milestones for Series A',
    slideScore: 75
  }
];

export default function PitchDeckEditorPage() {
  const [slides, setSlides] = useState<Slide[]>(DEMO_SLIDES);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllActions, setShowAllActions] = useState(false);
  const [viewMode, setViewMode] = useState<'edit' | 'visual'>('edit');
  const [autoSaveStatus, setAutoSaveStatus] = useState<'saved' | 'saving'>('saved');

  const slide = slides[currentSlide];

  // Calculate slide score
  const calculateSlideScore = (s: Slide): number => {
    if (s.slideScore) return s.slideScore;
    let score = 50;
    if (s.title && s.title.length > 5) score += 10;
    if (s.bullets.length >= 3) score += 15;
    if (s.bullets.every(b => b.length > 10)) score += 15;
    if (s.notes && s.notes.length > 10) score += 10;
    return Math.min(score, 100);
  };

  // Update slide
  const updateSlide = (updates: Partial<Slide>) => {
    const newSlides = [...slides];
    newSlides[currentSlide] = { ...newSlides[currentSlide], ...updates };
    setSlides(newSlides);
    
    // Trigger auto-save
    setAutoSaveStatus('saving');
    setTimeout(() => setAutoSaveStatus('saved'), 1000);
  };

  // Slide management
  const moveSlide = (index: number, direction: 'up' | 'down') => {
    const newSlides = [...slides];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    [newSlides[index], newSlides[targetIndex]] = [newSlides[targetIndex], newSlides[index]];
    setSlides(newSlides);
    setCurrentSlide(targetIndex);
  };

  const duplicateSlide = (index: number) => {
    const newSlides = [...slides];
    const duplicated = { ...slides[index], id: `${Date.now()}` };
    newSlides.splice(index + 1, 0, duplicated);
    setSlides(newSlides);
    setCurrentSlide(index + 1);
  };

  const deleteSlide = (index: number) => {
    if (slides.length <= 1) return;
    const newSlides = slides.filter((_, i) => i !== index);
    setSlides(newSlides);
    setCurrentSlide(Math.max(0, index - 1));
  };

  const improveSlide = (type: 'concise' | 'investor') => {
    // Simulate AI improvement
    setAutoSaveStatus('saving');
    setTimeout(() => {
      if (type === 'concise') {
        updateSlide({
          bullets: slide.bullets.map(b => b.split(' ').slice(0, 12).join(' ') + '...')
        });
      }
      setAutoSaveStatus('saved');
    }, 1000);
  };

  const deckScore = Math.round(
    slides.reduce((acc, s) => acc + calculateSlideScore(s), 0) / slides.length
  );

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="text-lg font-medium text-gray-900">StartupAI Pitch Deck</div>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/';
                }}
                className="flex items-center gap-2 text-sm text-[#0D5F4E] hover:text-[#0a4a3b] transition-colors group"
              >
                <Home className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
                Back to Home
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                {autoSaveStatus === 'saved' ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    Saved
                  </>
                ) : (
                  <>
                    <div className="w-4 h-4 border-2 border-gray-300 border-t-[#0d5f4e] rounded-full animate-spin" />
                    Saving...
                  </>
                )}
              </div>
              <div className="text-sm font-medium text-gray-700">
                Deck Score: {deckScore}/100
              </div>
              <button className="px-4 py-2 bg-[#0d5f4e] text-white rounded-lg text-sm hover:bg-[#0a4a3b] transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* LEFT PANEL - Slide Outline */}
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-gray-700">Deck Outline</div>
                  <div className="text-xs text-gray-500">{slides.length} slides</div>
                </div>
                
                {/* Status Legend */}
                <div className="flex items-center gap-3 mb-4 px-2 py-2 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-1.5" title="Strong - Investor ready">
                    <Check className="w-3 h-3 text-green-600" />
                    <span className="text-xs text-gray-600">Strong</span>
                  </div>
                  <div className="flex items-center gap-1.5" title="Needs improvement">
                    <AlertCircle className="w-3 h-3 text-yellow-600" />
                    <span className="text-xs text-gray-600">Review</span>
                  </div>
                  <div className="flex items-center gap-1.5" title="AI suggestion available">
                    <Sparkles className="w-3 h-3 text-blue-600" />
                    <span className="text-xs text-gray-600">AI Help</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {slides.map((s, index) => {
                    const slideScore = calculateSlideScore(s);
                    const isActive = currentSlide === index;
                    
                    return (
                      <div
                        key={s.id}
                        className={`group rounded-lg transition-all ${
                          isActive
                            ? 'bg-[#0d5f4e] text-white ring-2 ring-[#0d5f4e]/20'
                            : 'bg-white border border-gray-200 hover:border-[#0d5f4e]/30'
                        }`}
                      >
                        <div
                          onClick={() => setCurrentSlide(index)}
                          className="flex items-center gap-3 p-3 cursor-pointer"
                        >
                          <div className={`text-xs font-medium w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isActive ? 'bg-white/20' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {index + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`text-xs capitalize mb-0.5 ${isActive ? 'opacity-80' : 'text-gray-500'}`}>
                              {s.type.replace('_', ' ')}
                            </div>
                            <div className="text-sm font-medium truncate">{s.title}</div>
                          </div>
                          {!isActive && (
                            <div className="flex items-center gap-1">
                              {slideScore >= 80 ? (
                                <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center" title="Strong - Investor ready">
                                  <Check className="w-4 h-4 text-green-600" />
                                </div>
                              ) : slideScore >= 60 ? (
                                <div className="w-7 h-7 rounded-full bg-yellow-50 flex items-center justify-center" title="Needs improvement">
                                  <AlertCircle className="w-4 h-4 text-yellow-600" />
                                </div>
                              ) : (
                                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center" title="AI suggestion available">
                                  <Sparkles className="w-4 h-4 text-blue-600" />
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        
                        {isActive && (
                          <div className="px-3 pb-3 flex items-center gap-1">
                            <button
                              onClick={() => moveSlide(index, 'up')}
                              disabled={index === 0}
                              className={`p-1.5 rounded hover:bg-white/20 transition-colors ${
                                index === 0 ? 'opacity-30 cursor-not-allowed' : ''
                              }`}
                              title="Move up"
                            >
                              <ChevronLeft className="w-3.5 h-3.5 rotate-90" />
                            </button>
                            <button
                              onClick={() => moveSlide(index, 'down')}
                              disabled={index === slides.length - 1}
                              className={`p-1.5 rounded hover:bg-white/20 transition-colors ${
                                index === slides.length - 1 ? 'opacity-30 cursor-not-allowed' : ''
                              }`}
                              title="Move down"
                            >
                              <ChevronRight className="w-3.5 h-3.5 rotate-90" />
                            </button>
                            <button
                              onClick={() => duplicateSlide(index)}
                              className="p-1.5 rounded hover:bg-white/20 transition-colors ml-auto"
                              title="Duplicate slide"
                            >
                              <Copy className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => deleteSlide(index)}
                              disabled={slides.length <= 1}
                              className={`p-1.5 rounded hover:bg-white/20 transition-colors ${
                                slides.length <= 1 ? 'opacity-30 cursor-not-allowed' : ''
                              }`}
                              title="Delete slide"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                
                {/* Add New Slide Button */}
                <button
                  onClick={() => {
                    const newSlide: Slide = {
                      id: `${Date.now()}`,
                      type: 'custom',
                      title: 'New Slide',
                      bullets: ['Add your content here', 'Point 2', 'Point 3'],
                      notes: ''
                    };
                    setSlides([...slides, newSlide]);
                    setCurrentSlide(slides.length);
                  }}
                  className="w-full mt-4 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-[#0d5f4e] hover:text-[#0d5f4e] transition-all flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Slide
                </button>
              </div>
            </div>

            {/* CENTER PANEL - Slide Editor */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12">
                <div className="mb-8">
                  <input
                    type="text"
                    value={slide.title}
                    onChange={(e) => updateSlide({ title: e.target.value })}
                    className="w-full text-3xl font-medium text-gray-900 border-none focus:outline-none focus:ring-0 p-0"
                    placeholder="Slide title"
                  />
                </div>

                <div className="space-y-4 mb-6">
                  {slide.bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#0d5f4e] rounded-full mt-2 flex-shrink-0" />
                      <input
                        type="text"
                        value={bullet}
                        onChange={(e) => {
                          const newBullets = [...slide.bullets];
                          newBullets[index] = e.target.value;
                          updateSlide({ bullets: newBullets });
                        }}
                        className="flex-1 text-gray-700 border-none focus:outline-none focus:ring-0 p-0"
                        placeholder="Bullet point"
                      />
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Speaker Notes (optional)
                  </label>
                  <textarea
                    value={slide.notes}
                    onChange={(e) => updateSlide({ notes: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent resize-none text-sm"
                    placeholder="Add notes for this slide..."
                  />
                </div>
              </div>
            </div>

            {/* RIGHT PANEL - AI Intelligence */}
            <div className="lg:col-span-3">
              <div className="sticky top-24">
                {/* Slide Strength Score */}
                <div className="bg-gradient-to-br from-[#0d5f4e]/5 to-[#0d5f4e]/10 rounded-2xl p-6 border border-[#0d5f4e]/20 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-900">Slide Strength</span>
                    <div className="flex items-center gap-2">
                      <div className={`text-2xl font-light ${
                        calculateSlideScore(slide) >= 80 ? 'text-green-600' :
                        calculateSlideScore(slide) >= 60 ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {calculateSlideScore(slide)}
                      </div>
                      <span className="text-sm text-gray-500">/100</span>
                    </div>
                  </div>
                  
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${
                        calculateSlideScore(slide) >= 80 ? 'bg-green-600' :
                        calculateSlideScore(slide) >= 60 ? 'bg-yellow-600' :
                        'bg-red-600'
                      }`}
                      style={{ width: `${calculateSlideScore(slide)}%` }}
                    />
                  </div>
                  
                  <div className="mt-2 text-xs text-gray-600">
                    {calculateSlideScore(slide) >= 80 ? '✨ Investor-ready' :
                     calculateSlideScore(slide) >= 60 ? '⚡ Good foundation, needs polish' :
                     '🔧 Needs improvement'}
                  </div>
                </div>

                {/* AI Agents */}
                <div className="bg-gradient-to-br from-[#0d5f4e]/5 to-[#0d5f4e]/10 rounded-2xl p-6 border border-[#0d5f4e]/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-5 h-5 text-[#0d5f4e]" />
                    <span className="text-sm font-medium text-gray-900">AI Agents</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">Get feedback from different perspectives</p>

                  <div className="space-y-3">
                    {/* Pitch Coach */}
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <Edit3 className="w-3 h-3 text-blue-600" />
                        </div>
                        <span className="text-xs font-medium text-gray-900">Pitch Coach</span>
                      </div>
                      <div className="space-y-1.5">
                        <button
                          onClick={() => improveSlide('concise')}
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 hover:border-[#0d5f4e] hover:bg-white transition-all"
                        >
                          Make More Concise
                        </button>
                        <button className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 hover:border-[#0d5f4e] hover:bg-white transition-all">
                          Simplify Language
                        </button>
                      </div>
                    </div>

                    {/* Investor Reviewer */}
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                          <TrendingUp className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-xs font-medium text-gray-900">Investor Reviewer</span>
                      </div>
                      <div className="space-y-1.5">
                        <button
                          onClick={() => improveSlide('investor')}
                          className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 hover:border-[#0d5f4e] hover:bg-white transition-all"
                        >
                          Investor-Focused Rewrite
                        </button>
                        <button className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 hover:border-[#0d5f4e] hover:bg-white transition-all">
                          Add Proof Points
                        </button>
                      </div>
                    </div>

                    {/* Industry Expert */}
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                          <Target className="w-3 h-3 text-purple-600" />
                        </div>
                        <span className="text-xs font-medium text-gray-900">Industry Expert</span>
                      </div>
                      <div className="space-y-1.5">
                        <button className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 hover:border-[#0d5f4e] hover:bg-white transition-all">
                          Industry Benchmark
                        </button>
                        <button className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded text-xs text-gray-700 hover:border-[#0d5f4e] hover:bg-white transition-all">
                          Add Market Context
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
