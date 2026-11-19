import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { ShoeProduct } from '../types';
import { formatCurrency } from '../lib/currency';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: ShoeProduct) => void;
  products: ShoeProduct[];
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  products,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const filtered = trimmed
    ? products
        .filter((p) => {
          const name = (p.name || '').toLowerCase();
          const brand = (p.brand || '').toLowerCase();
          const category = (p.category || '').toLowerCase();
          const sku = (p.sku || '').toLowerCase();
          const color = (p.color || '').toLowerCase();
          const colorVariants = (p.colors || []).map((c) => c.name.toLowerCase()).join(' ');
          const tags = [
            ...(p.tags || []),
            ...(p.sourceTags || []),
            ...(p.collections || []),
          ]
            .join(' ')
            .toLowerCase();

          return (
            name.includes(trimmed) ||
            brand.includes(trimmed) ||
            category.includes(trimmed) ||
            sku.includes(trimmed) ||
            color.includes(trimmed) ||
            colorVariants.includes(trimmed) ||
            tags.includes(trimmed)
          );
        })
        .slice(0, 20)
    : [];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#09090b]/85 backdrop-blur-md flex items-start justify-center pt-24 px-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#121215] border border-[#242429] max-w-xl w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#242429] pb-4">
          <div className="flex items-center gap-3 w-full mr-4">
            <Search className="w-5 h-5 text-[#c9a96e]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH CATALOG (NAME, BRAND, CATEGORY, COLOR, SKU, TAGS)..."
              className="bg-transparent border-none text-[#f4f4f6] font-mono text-[12px] w-full focus:outline-none placeholder:text-[#52525b]"
            />
          </div>
          <button
            onClick={onClose}
            className="text-[#8e8e98] hover:text-[#f4f4f6] p-1 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex items-center gap-2 flex-wrap font-mono text-[10px]">
          <span className="text-[#8e8e98] font-bold">SUGGESTIONS:</span>
          {['VANTA', 'NIKE', 'CAMPUS', 'ADIDAS', 'RUNNING', 'SNEAKERS'].map((pill) => (
            <button
              key={pill}
              onClick={() => setQuery(pill)}
              className="bg-[#18181c] border border-[#242429] px-2.5 py-1 text-[#8e8e98] hover:border-[#8e8e98] hover:text-[#f4f4f6] transition-colors cursor-pointer"
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="flex flex-col gap-3 max-h-80 overflow-y-auto">
          {!trimmed ? (
            <div className="py-8 text-center text-[#52525b] font-mono text-xs">
              TYPE TO SEARCH {products.length} ARCHIVE PRODUCTS...
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-8 text-center text-[#52525b] font-mono text-xs">
              NO MATCHING SPECIMENS LOCATED.
            </div>
          ) : (
            filtered.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="flex items-center justify-between p-3 bg-[#18181c] border border-[#242429] hover:border-[#3a3a42] cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#09090b] border border-[#242429] overflow-hidden shrink-0">
                    <img
                      src={product.colors[0]?.images.front}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#c9a96e] uppercase">
                      {product.brand} // {product.code}
                    </div>
                    <div className="font-headline text-xs font-bold text-[#f4f4f6] uppercase">
                      {product.name}
                    </div>
                    <div className="font-mono text-[10px] text-[#8e8e98]">
                      {product.category} • {formatCurrency(product.price)}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8e8e98] group-hover:text-[#f4f4f6] group-hover:translate-x-1 transition-all" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
