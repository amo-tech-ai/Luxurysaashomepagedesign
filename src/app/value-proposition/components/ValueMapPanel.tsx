import { Plus, Package, Shield, Sparkles } from 'lucide-react';
import type { ValuePropItem } from '../../../data/value-proposition-types';
import { ValuePropItemCard } from './ValuePropItemCard';

interface ValueMapPanelProps {
  products: ValuePropItem[];
  painRelievers: ValuePropItem[];
  gainCreators: ValuePropItem[];
  onAddProduct?: () => void;
  onAddReliever?: () => void;
  onAddCreator?: () => void;
}

export function ValueMapPanel({ 
  products, 
  painRelievers, 
  gainCreators,
  onAddProduct,
  onAddReliever,
  onAddCreator
}: ValueMapPanelProps) {
  return (
    <div className="bg-[#F0F9FF] rounded-xl border border-[#E8E6E1] p-6 h-full">
      <div className="mb-6">
        <h2 className="text-2xl font-light text-[#0E3E1B] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
          Value Map
        </h2>
        <p className="text-sm text-gray-600">
          How your product creates value
        </p>
      </div>
      
      <div className="space-y-6">
        {/* Products & Services */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Package className="w-4 h-4 text-[#0d5f4e]" />
            <h3 className="text-base font-medium text-[#0E3E1B]">
              Products & Services
            </h3>
          </div>
          <p className="text-xs text-gray-500 mb-3">
            What you offer to customers
          </p>
          <div className="space-y-2">
            {products.map((product) => (
              <ValuePropItemCard
                key={product.id}
                item={product}
                isMatched={false} // Products don't need matching status
              />
            ))}
          </div>
          <button className="w-full mt-2 px-3 py-2 text-sm text-gray-600 hover:text-[#0d5f4e] hover:bg-white rounded-lg transition-colors flex items-center justify-center gap-2 border border-dashed border-gray-300"
            onClick={onAddProduct}
          >
            <Plus className="w-4 h-4" />
            Add Product/Service
          </button>
        </section>
        
        {/* Pain Relievers */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-4 h-4 text-[#0d5f4e]" />
            <h3 className="text-base font-medium text-[#0E3E1B]">
              Pain Relievers
            </h3>
          </div>
          <p className="text-xs text-gray-500 mb-3">
            How your products alleviate customer pains
          </p>
          <div className="space-y-2">
            {painRelievers.map((reliever) => (
              <ValuePropItemCard
                key={reliever.id}
                item={reliever}
                isMatched={reliever.matched_to && reliever.matched_to.length > 0}
              />
            ))}
          </div>
          <button className="w-full mt-2 px-3 py-2 text-sm text-gray-600 hover:text-[#0d5f4e] hover:bg-white rounded-lg transition-colors flex items-center justify-center gap-2 border border-dashed border-gray-300"
            onClick={onAddReliever}
          >
            <Plus className="w-4 h-4" />
            Add Pain Reliever
          </button>
        </section>
        
        {/* Gain Creators */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#0d5f4e]" />
            <h3 className="text-base font-medium text-[#0E3E1B]">
              Gain Creators
            </h3>
          </div>
          <p className="text-xs text-gray-500 mb-3">
            How your products create customer gains
          </p>
          <div className="space-y-2">
            {gainCreators.map((creator) => (
              <ValuePropItemCard
                key={creator.id}
                item={creator}
                isMatched={creator.matched_to && creator.matched_to.length > 0}
              />
            ))}
          </div>
          <button className="w-full mt-2 px-3 py-2 text-sm text-gray-600 hover:text-[#0d5f4e] hover:bg-white rounded-lg transition-colors flex items-center justify-center gap-2 border border-dashed border-gray-300"
            onClick={onAddCreator}
          >
            <Plus className="w-4 h-4" />
            Add Gain Creator
          </button>
        </section>
      </div>
    </div>
  );
}