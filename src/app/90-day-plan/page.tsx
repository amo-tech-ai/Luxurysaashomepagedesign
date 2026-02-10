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
import { Download, Share2, Save, ChevronDown } from 'lucide-react';
import { KanbanCard } from './components/KanbanCard';
import { KanbanColumn } from './components/KanbanColumn';
import { generateKanbanCards } from './lib/cardGenerator';
import { DashboardLayout } from '../../components/DashboardLayout';

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
    <DashboardLayout
      title="90-Day Validation Plan"
      subtitle="Transform your startup assumptions into a 6-sprint validation roadmap. Drag cards to track progress and build evidence."
      onNavigate={onNavigate}
      activeNav="90-day-plan"
    >
      {/* Action Bar */}
      <div className="bg-white border-b border-[#E8E6E1] px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Sprint Selector */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setSprintDropdownOpen(!sprintDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <span className="text-sm font-medium">{currentSprintData.name}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {sprintDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {SPRINTS.map((sprint) => (
                    <button
                      key={sprint.id}
                      onClick={() => {
                        setCurrentSprint(sprint.id);
                        setSprintDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                        currentSprint === sprint.id ? 'bg-[#E8F4F1]' : ''
                      }`}
                    >
                      <div className="font-medium text-sm">{sprint.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{sprint.goal}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
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
              title="Export plan"
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

        {/* Sprint Goal */}
        <div className="mt-4 p-3 bg-[#E8F4F1] rounded-lg">
          <div className="text-xs text-gray-600 mb-1">Sprint Goal:</div>
          <div className="text-sm font-medium text-[#0d5f4e]">{currentSprintData.goal}</div>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="p-8 overflow-x-auto">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="flex gap-6 min-w-max">
            {COLUMNS.map((column) => (
              <KanbanColumn
                key={column.id}
                column={column}
                cards={sprintCards.filter(card => card.columnId === column.id)}
              />
            ))}
          </div>
          <DragOverlay>
            {activeCard ? (
              <div className="opacity-50">
                <KanbanCard card={activeCard} />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>

        {/* Empty State */}
        {sprintCards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No validation cards for this sprint yet.</p>
            <p className="text-sm text-gray-400 mt-2">
              Complete the Lean Canvas and Opportunity Canvas to generate cards.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
