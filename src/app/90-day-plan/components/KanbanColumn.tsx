'use client';

import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { KanbanCard } from './KanbanCard';

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

interface KanbanColumnProps {
  id: string;
  title: string;
  color: string;
  cards: Card[];
  cardCount: number;
}

export function KanbanColumn({ id, title, color, cards, cardCount }: KanbanColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex flex-col rounded-xl border-2 transition-all ${
        isOver 
          ? 'border-[#0D5F4E] bg-[#0D5F4E]/5' 
          : 'border-gray-200 bg-[#F5F3EF]'
      }`}
    >
      {/* Column Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm font-medium text-[#212427]">{title}</h3>
          <span className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded">
            {cardCount}
          </span>
        </div>
        <div className="h-1 w-full rounded-full overflow-hidden bg-gray-200">
          <div 
            className="h-full transition-all duration-300"
            style={{ 
              width: '100%', 
              backgroundColor: color,
              opacity: cardCount > 0 ? 1 : 0.3
            }}
          />
        </div>
      </div>

      {/* Cards List */}
      <div className="flex-1 p-4 space-y-3 min-h-[400px] overflow-y-auto">
        <SortableContext
          items={cards.map(card => card.id)}
          strategy={verticalListSortingStrategy}
        >
          {cards.length === 0 ? (
            <div className="flex items-center justify-center h-32 text-sm text-gray-400">
              Drag cards here
            </div>
          ) : (
            cards.map(card => (
              <KanbanCard key={card.id} card={card} />
            ))
          )}
        </SortableContext>
      </div>
    </div>
  );
}
