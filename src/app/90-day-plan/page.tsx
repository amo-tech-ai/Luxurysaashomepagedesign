'use client';

import { useState, useEffect } from 'react';
import { 
  DndContext, 
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent
} from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { ArrowLeft, Download, Share2, Save, ChevronDown } from 'lucide-react';
import { KanbanCard } from './components/KanbanCard';
import { KanbanColumn } from './components/KanbanColumn';
import { generateKanbanCards } from './lib/cardGenerator';

interface Card {
  id: string;
  title: string;
  source: string;
  successCriteria: string;
  evidenceStatus: 'not-started' | 'in-progress' | 'complete';
  aiTip: string;
  columnId: string;
  sprintId: number;
}

interface NineDayPlanPageProps {
  onNavigate?: (page: string) => void;
}

const COLUMNS = [
  { id: 'backlog', title: 'Backlog', color: '#9CA3AF' },
  { id: 'todo', title: 'To Do', color: '#6B9D89' },
  { id: 'doing', title: 'Doing', color: '#0D5F4E' },
  { id: 'done', title: 'Done', color: '#0E3E1B' },
  { id: 'learnings', title: 'Learnings', color: '#F59E0B' }
];

const SPRINTS = [
  { id: 1, name: 'Sprint 1: Foundation', goal: 'Validate problem severity with 10 customer interviews' },
  { id: 2, name: 'Sprint 2: Solution Fit', goal: 'Test solution concept with 5 mockup demos' },
  { id: 3, name: 'Sprint 3: Willingness to Pay', goal: 'Get 3 pre-orders or LOIs at target price' },
  { id: 4, name: 'Sprint 4: Channel Test', goal: 'Validate primary acquisition channel (100 leads)' },
  { id: 5, name: 'Sprint 5: MVP Build', goal: 'Ship minimum viable product to 5 design partners' },
  { id: 6, name: 'Sprint 6: Early Traction', goal: 'Achieve first $5K MRR or 50 active users' }
];

export default function NineDayPlanPage({ onNavigate }: NineDayPlanPageProps) {
  const [currentSprint, setCurrentSprint] = useState(1);
  const [cards, setCards] = useState<Card[]>([]);
  const [activeCard, setActiveCard] = useState<Card | null>(null);
  const [sprintDropdownOpen, setSprintDropdownOpen] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    // Load canvas data from localStorage
    const leanCanvas = localStorage.getItem('lean-canvas-v2');
    const opportunityCanvas = localStorage.getItem('opportunity-canvas');

    if (leanCanvas && opportunityCanvas) {
      const leanData = JSON.parse(leanCanvas);
      const oppData = JSON.parse(opportunityCanvas);
      
      // Generate cards from canvas data
      const generatedCards = generateKanbanCards(leanData, oppData);
      setCards(generatedCards);
    } else {
      // Use mock data if no canvas data
      setCards(generateKanbanCards({}, {}));
    }
  }, []);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const card = cards.find(c => c.id === active.id);
    if (card) {
      setActiveCard(card);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (!over) {
      setActiveCard(null);
      return;
    }

    const activeCard = cards.find(c => c.id === active.id);
    const overId = over.id.toString();

    if (!activeCard) {
      setActiveCard(null);
      return;
    }

    // Check if dropped on a column
    const targetColumn = COLUMNS.find(col => col.id === overId);
    
    if (targetColumn) {
      // Move card to new column
      setCards(cards.map(card => 
        card.id === activeCard.id 
          ? { ...card, columnId: targetColumn.id }
          : card
      ));
    } else {
      // Reorder within same column
      const activeIndex = cards.findIndex(c => c.id === active.id);
      const overIndex = cards.findIndex(c => c.id === overId);
      
      if (activeIndex !== overIndex) {
        setCards(arrayMove(cards, activeIndex, overIndex));
      }
    }

    setActiveCard(null);
  };

  const handleBack = () => {
    if (onNavigate) {
      onNavigate('opportunity-canvas');
    }
  };

  const handleHome = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  const handleSave = () => {
    localStorage.setItem('90-day-plan', JSON.stringify(cards));
    alert('Progress saved!');
  };

  const handleExport = () => {
    alert('Export to CSV/PDF feature coming soon!');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  // Filter cards by current sprint
  const sprintCards = cards.filter(card => card.sprintId === currentSprint);
  const completedCards = sprintCards.filter(card => card.columnId === 'done' || card.columnId === 'learnings').length;
  const totalCards = sprintCards.length;
  const progressPercentage = totalCards > 0 ? Math.round((completedCards / totalCards) * 100) : 0;

  const currentSprintData = SPRINTS.find(s => s.id === currentSprint) || SPRINTS[0];

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={handleHome}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-[#0D5F4E] rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold text-sm">S</span>
            </div>
            <span className="text-lg font-light">StartupAI</span>
          </button>

          {/* Sprint Selector (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-gray-500">Sprint Progress</span>
            <span className="text-sm font-medium">
              {completedCards}/{totalCards} cards
            </span>
            <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0D5F4E] transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-sm font-medium">{progressPercentage}%</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-[#0D5F4E] hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Save className="w-4 h-4" />
              <span className="hidden sm:inline">Save</span>
            </button>
            <button
              onClick={handleExport}
              className="p-2 text-gray-700 hover:text-[#0D5F4E] hover:bg-gray-100 rounded-lg transition-colors"
              title="Export board"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={handleShare}
              className="p-2 text-gray-700 hover:text-[#0D5F4E] hover:bg-gray-100 rounded-lg transition-colors"
              title="Share link"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Progress Bar */}
        <div className="md:hidden px-6 pb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-500">
              {completedCards}/{totalCards} cards
            </span>
            <span className="text-xs font-medium">{progressPercentage}%</span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#0D5F4E] transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1800px] mx-auto px-6 lg:px-12 py-8 lg:py-12">
        {/* Title Section */}
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="text-sm text-[#0D5F4E] hover:text-[#0a4d3f] mb-4 inline-flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Opportunity Canvas
          </button>

          <h1 className="text-4xl lg:text-5xl font-light text-[#212427] mb-3">
            90-Day Validation Plan
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-6">
            Execute your validation strategy in 6 two-week sprints. Drag cards between columns to track progress.
          </p>

          {/* Sprint Selector */}
          <div className="relative">
            <button
              onClick={() => setSprintDropdownOpen(!sprintDropdownOpen)}
              className="flex items-center gap-3 px-6 py-4 bg-white border border-gray-200 rounded-xl hover:border-[#0D5F4E] transition-colors w-full md:w-auto"
            >
              <div>
                <div className="text-sm text-gray-500 text-left">Current Sprint</div>
                <div className="text-lg font-medium text-[#212427]">{currentSprintData.name}</div>
              </div>
              <ChevronDown className="w-5 h-5 text-gray-400 ml-auto" />
            </button>

            {sprintDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-full md:w-[500px] bg-white border border-gray-200 rounded-xl shadow-xl z-50">
                {SPRINTS.map(sprint => (
                  <button
                    key={sprint.id}
                    onClick={() => {
                      setCurrentSprint(sprint.id);
                      setSprintDropdownOpen(false);
                    }}
                    className={`w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors first:rounded-t-xl last:rounded-b-xl border-b last:border-b-0 ${
                      currentSprint === sprint.id ? 'bg-[#F5F3EF]' : ''
                    }`}
                  >
                    <div className="font-medium text-[#212427] mb-1">{sprint.name}</div>
                    <div className="text-sm text-gray-600">{sprint.goal}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sprint Goal */}
          <div className="mt-6 p-4 bg-[#0D5F4E]/5 border border-[#0D5F4E]/20 rounded-lg">
            <div className="text-sm text-[#0D5F4E] font-medium mb-1">Sprint Goal</div>
            <div className="text-base text-gray-900">{currentSprintData.goal}</div>
          </div>
        </div>

        {/* Kanban Board */}
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {COLUMNS.map(column => {
              const columnCards = sprintCards.filter(card => card.columnId === column.id);
              
              return (
                <KanbanColumn
                  key={column.id}
                  id={column.id}
                  title={column.title}
                  color={column.color}
                  cards={columnCards}
                  cardCount={columnCards.length}
                />
              );
            })}
          </div>

          <DragOverlay>
            {activeCard ? (
              <div className="rotate-3 opacity-90">
                <KanbanCard card={activeCard} isDragging />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>

        {/* Help Text */}
        <div className="mt-12 p-6 bg-white border border-gray-200 rounded-xl">
          <h3 className="text-lg font-medium text-[#212427] mb-3">How to Use This Board</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><strong>Backlog:</strong> Cards to be started this sprint</li>
            <li><strong>To Do:</strong> Ready to work on next</li>
            <li><strong>Doing:</strong> Currently in progress</li>
            <li><strong>Done:</strong> Completed with evidence collected</li>
            <li><strong>Learnings:</strong> Key insights and decisions documented</li>
          </ul>
          <p className="mt-4 text-sm text-gray-500">
            Tip: Move cards to "Learnings" when you've analyzed results and made a decision (pivot, persevere, or iterate).
          </p>
        </div>
      </main>
    </div>
  );
}
