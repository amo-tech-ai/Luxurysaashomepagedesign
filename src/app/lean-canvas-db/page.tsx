/**
 * Lean Canvas with Database Integration
 * 
 * This version of the Lean Canvas connects to Supabase for data persistence.
 * Features:
 * - Auto-save with 2-second debounce
 * - Load canvas data on mount
 * - Save indicator (Saving.../Saved)
 * - Protected route (requires authentication)
 */

import React, { useState, useRef, useEffect } from 'react';
import {
  Download,
  Copy,
  RotateCcw,
  Sparkles,
  Check,
  X,
  Home,
  AlertTriangle,
  Loader,
  Plus,
} from 'lucide-react';
import { ProtectedRoute } from '../../components/ProtectedRoute';
import { loadCanvas, saveCanvas, type CanvasData, itemsToText, textToItems } from '../../lib/canvas-api';

interface CanvasBlock {
  id: keyof CanvasData;
  title: string;
  helper: string;
  items: string[];
  row: number;
  col: number;
  span?: number;
}

const initialCanvasBlocks: CanvasBlock[] = [
  // Row 1 - Strategy Core
  {
    id: 'problem',
    title: 'Problem',
    helper: 'List your top 1–3 problems',
    items: [],
    row: 1,
    col: 1,
  },
  {
    id: 'solution',
    title: 'Solution',
    helper: 'Outline a possible solution for each problem',
    items: [],
    row: 1,
    col: 2,
  },
  {
    id: 'unique_value_proposition',
    title: 'Unique Value Proposition',
    helper: 'Single, clear, compelling message that states why you are different',
    items: [],
    row: 1,
    col: 3,
  },
  {
    id: 'unfair_advantage',
    title: 'Unfair Advantage',
    helper: 'Something that cannot easily be bought or copied',
    items: [],
    row: 1,
    col: 4,
  },
  {
    id: 'customer_segments',
    title: 'Customer Segments',
    helper: 'List your target customers and users',
    items: [],
    row: 1,
    col: 5,
  },
  // Row 2 - Validation
  {
    id: 'existing_alternatives',
    title: 'Existing Alternatives',
    helper: 'List how these problems are solved today',
    items: [],
    row: 2,
    col: 1,
  },
  {
    id: 'key_metrics',
    title: 'Key Metrics',
    helper: 'List the key numbers that tell you how your business is doing',
    items: [],
    row: 2,
    col: 2,
  },
  {
    id: 'high_level_concept',
    title: 'High-Level Concept',
    helper: 'List your X for Y analogy (e.g. YouTube = Flickr for videos)',
    items: [],
    row: 2,
    col: 3,
  },
  {
    id: 'channels',
    title: 'Channels',
    helper: 'List your path to customers (inbound or outbound)',
    items: [],
    row: 2,
    col: 4,
  },
  {
    id: 'early_adopters',
    title: 'Early Adopters',
    helper: 'List the characteristics of your ideal customers',
    items: [],
    row: 2,
    col: 5,
  },
  // Row 3 - Economics
  {
    id: 'cost_structure',
    title: 'Cost Structure',
    helper: 'List your fixed and variable costs',
    items: [],
    row: 3,
    col: 1,
    span: 2,
  },
  {
    id: 'revenue_streams',
    title: 'Revenue Streams',
    helper: 'List your sources of revenue',
    items: [],
    row: 3,
    col: 3,
    span: 3,
  },
];

function LeanCanvasContent({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [canvasData, setCanvasData] = useState<CanvasBlock[]>(initialCanvasBlocks);
  const [editingBlock, setEditingBlock] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(true);
  const [error, setError] = useState('');
  const [lastSaved, setLastSaved] = useState<Date>(new Date());
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const inputRefs = useRef<{ [key: string]: HTMLTextAreaElement | null }>({});

  // Load canvas on mount
  useEffect(() => {
    loadCanvasData();
  }, []);

  async function loadCanvasData() {
    try {
      setLoading(true);
      setError('');
      const data = await loadCanvas();
      
      // Convert loaded data to block format
      const updatedBlocks = initialCanvasBlocks.map((block) => ({
        ...block,
        items: textToItems(data[block.id] || ''),
      }));
      
      setCanvasData(updatedBlocks);
      setLastSaved(new Date());
    } catch (err: any) {
      setError(`Failed to load canvas: ${err.message}`);
      console.error('Load error:', err);
    } finally {
      setLoading(false);
    }
  }

  // Convert blocks to CanvasData format for saving
  function blocksToCanvasData(blocks: CanvasBlock[]): CanvasData {
    const canvasData: any = {};
    blocks.forEach((block) => {
      canvasData[block.id] = itemsToText(block.items);
    });
    return canvasData as CanvasData;
  }

  // Auto-save with debounce
  function triggerAutoSave(updatedBlocks: CanvasBlock[]) {
    setSaved(false);
    setError('');

    // Clear existing timeout
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    // Set new timeout (2 seconds)
    saveTimeoutRef.current = setTimeout(async () => {
      setSaving(true);
      try {
        const canvasData = blocksToCanvasData(updatedBlocks);
        await saveCanvas(canvasData);
        setSaved(true);
        setLastSaved(new Date());
      } catch (err: any) {
        setError(`Save failed: ${err.message}`);
        console.error('Save error:', err);
      } finally {
        setSaving(false);
      }
    }, 2000);
  }

  const handleAddItem = (blockId: string, value: string) => {
    if (!value.trim()) return;

    const updatedBlocks = canvasData.map((block) =>
      block.id === blockId
        ? { ...block, items: [...block.items, value.trim()] }
        : block
    );
    
    setCanvasData(updatedBlocks);
    triggerAutoSave(updatedBlocks);
  };

  const handleRemoveItem = (blockId: string, index: number) => {
    const updatedBlocks = canvasData.map((block) =>
      block.id === blockId
        ? { ...block, items: block.items.filter((_, i) => i !== index) }
        : block
    );
    
    setCanvasData(updatedBlocks);
    triggerAutoSave(updatedBlocks);
  };

  const handleReset = async () => {
    if (confirm('Are you sure you want to reset the canvas? This cannot be undone.')) {
      const emptyBlocks = initialCanvasBlocks;
      setCanvasData(emptyBlocks);
      triggerAutoSave(emptyBlocks);
    }
  };

  const getTimeSinceLastSave = () => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - lastSaved.getTime()) / 1000);
    if (diff < 60) return 'just now';
    const minutes = Math.floor(diff / 60);
    return `${minutes} min ago`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8]">
        <div className="text-center">
          <Loader className="w-12 h-12 animate-spin text-[#0D5F4E] mx-auto mb-4" />
          <p className="text-sm text-gray-600">Loading your canvas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <header className="bg-white border-b border-[#E8E6E1] sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <button
                onClick={() => onNavigate?.('home')}
                className="text-sm text-[#0D5F4E] hover:text-[#0a4a3c] transition-colors flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </button>
              <div className="w-px h-6 bg-[#E8E6E1]" />
              <div>
                <h1 className="font-serif text-2xl text-[#2D2D2D]">Lean Canvas</h1>
                <p className="text-sm text-[#A3A3A3]">Your business model on one page</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              {/* Autosave Status */}
              <div className="flex items-center gap-2 text-sm">
                {saving && (
                  <>
                    <Loader className="w-4 h-4 animate-spin text-[#6B9D89]" />
                    <span className="text-[#6B9D89]">Saving...</span>
                  </>
                )}
                {saved && !saving && !error && (
                  <>
                    <Check className="w-4 h-4 text-[#0D5F4E]" />
                    <span className="text-[#A3A3A3]">Autosaved · {getTimeSinceLastSave()}</span>
                  </>
                )}
                {error && (
                  <>
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span className="text-red-600 text-xs">Save Failed</span>
                  </>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-sm font-medium text-[#EF4444] hover:bg-[#FEF2F2] rounded-lg transition-all duration-200 flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Error Banner */}
      {error && (
        <div className="bg-red-50 border-b border-red-200 px-8 py-3">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-red-700">
            <AlertTriangle className="w-4 h-4" />
            <span>{error}</span>
            <button
              onClick={loadCanvasData}
              className="ml-auto text-red-700 underline hover:no-underline"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-5 gap-4">
          {/* Row 1 - Strategy Core */}
          {canvasData
            .filter((block) => block.row === 1)
            .map((block) => (
              <CanvasBlockComponent
                key={block.id}
                block={block}
                isEditing={editingBlock === block.id}
                onStartEdit={() => setEditingBlock(block.id)}
                onEndEdit={() => setEditingBlock(null)}
                onAddItem={handleAddItem}
                onRemoveItem={handleRemoveItem}
                inputRef={(el) => (inputRefs.current[block.id] = el)}
              />
            ))}

          {/* Row 2 - Validation */}
          {canvasData
            .filter((block) => block.row === 2)
            .map((block) => (
              <CanvasBlockComponent
                key={block.id}
                block={block}
                isEditing={editingBlock === block.id}
                onStartEdit={() => setEditingBlock(block.id)}
                onEndEdit={() => setEditingBlock(null)}
                onAddItem={handleAddItem}
                onRemoveItem={handleRemoveItem}
                inputRef={(el) => (inputRefs.current[block.id] = el)}
              />
            ))}

          {/* Row 3 - Economics */}
          {canvasData
            .filter((block) => block.row === 3)
            .map((block) => (
              <div
                key={block.id}
                className={block.span ? `col-span-${block.span}` : ''}
                style={{ gridColumn: block.span ? `span ${block.span}` : undefined }}
              >
                <CanvasBlockComponent
                  block={block}
                  isEditing={editingBlock === block.id}
                  onStartEdit={() => setEditingBlock(block.id)}
                  onEndEdit={() => setEditingBlock(null)}
                  onAddItem={handleAddItem}
                  onRemoveItem={handleRemoveItem}
                  inputRef={(el) => (inputRefs.current[block.id] = el)}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

// Canvas Block Component
function CanvasBlockComponent({
  block,
  isEditing,
  onStartEdit,
  onEndEdit,
  onAddItem,
  onRemoveItem,
  inputRef,
}: {
  block: CanvasBlock;
  isEditing: boolean;
  onStartEdit: () => void;
  onEndEdit: () => void;
  onAddItem: (blockId: string, value: string) => void;
  onRemoveItem: (blockId: string, index: number) => void;
  inputRef: (el: HTMLTextAreaElement | null) => void;
}) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (inputValue.trim()) {
        onAddItem(block.id, inputValue);
        setInputValue('');
      }
    }
  };

  return (
    <div
      className="bg-white border border-[#E8E6E1] rounded-lg p-5 min-h-[280px] flex flex-col hover:border-[#0D5F4E] transition-all duration-200 group relative"
      onClick={() => !isEditing && onStartEdit()}
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xs font-semibold text-[#2D2D2D] uppercase tracking-wider mb-1">
          {block.title}
        </h3>
        <p className="text-xs text-[#A3A3A3] leading-relaxed">{block.helper}</p>
      </div>

      {/* Items */}
      <div className="flex-1 space-y-2 mb-3 pb-8">
        {block.items.length === 0 && !isEditing && (
          <p className="text-sm text-[#A3A3A3] italic">Add 1–3 key points</p>
        )}
        {block.items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-2 text-sm text-[#2D2D2D] group/item"
          >
            <span className="text-[#0D5F4E] mt-1">•</span>
            <span className="flex-1 leading-relaxed">{item}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemoveItem(block.id, index);
              }}
              className="opacity-0 group-hover/item:opacity-100 p-1 hover:bg-[#FEF2F2] rounded transition-all duration-200"
            >
              <X className="w-3 h-3 text-[#EF4444]" />
            </button>
          </div>
        ))}
      </div>

      {/* Input */}
      {isEditing && (
        <div className="border-t border-[#E8E6E1] pt-3">
          <textarea
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={onEndEdit}
            placeholder="Type and press Enter to add..."
            className="w-full text-sm text-[#2D2D2D] placeholder:text-[#A3A3A3] focus:outline-none resize-none"
            rows={2}
            autoFocus
          />
          <p className="text-xs text-[#A3A3A3] mt-2">Press Enter to add · Shift+Enter for new line</p>
        </div>
      )}

      {/* AI Icon - Bottom Right Corner */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          // AI functionality placeholder
        }}
        className="absolute bottom-3 right-3 p-2 rounded-lg bg-[#F5F5F3] text-[#6B9D89] hover:bg-[#0D5F4E] hover:text-white transition-all duration-200 opacity-0 group-hover:opacity-100"
        title="AI Assist (Coming Soon)"
      >
        <Sparkles className="w-4 h-4" />
      </button>
    </div>
  );
}

export default function LeanCanvasPageDB({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <ProtectedRoute>
      <LeanCanvasContent onNavigate={onNavigate} />
    </ProtectedRoute>
  );
}
