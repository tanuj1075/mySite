import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { formatCurrency } from '../lib/currency';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: CartItem) => void;
  availableItems: CartItem[];
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectItem,
  availableItems,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = availableItems.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.edition.toLowerCase().includes(query.toLowerCase()) ||
      item.colorway.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1a1816]/70 backdrop-blur-sm flex items-start justify-center pt-24 px-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#f5efe6] border border-[#d5cdc0] max-w-xl w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#d5cdc0] pb-4">
          <div className="flex items-center gap-3 w-full mr-4">
            <Search className="w-5 h-5 text-[#7b6e54]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH ARCHIVE ARTIFACTS, EDITIONS, COLORWAYS..."
              className="bg-transparent border-none text-[#1a1816] font-mono text-[12px] w-full focus:outline-none placeholder:text-[#59544c]"
            />
          </div>
          <button
            onClick={onClose}
            className="text-[#59544c] hover:text-[#1a1816] p-1 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex items-center gap-2 flex-wrap font-mono text-[10px]">
          <span className="text-[#59544c] font-bold">SUGGESTIONS:</span>
          {['CORE RUNNER', 'DERBY', 'OBSIDIAN', 'HYBRID', 'SHELL'].map((pill) => (
            <button
              key={pill}
              onClick={() => setQuery(pill)}
              className="bg-[#ede7dd] border border-[#d5cdc0] px-2.5 py-1 text-[#59544c] hover:border-[#1a1816] hover:text-[#1a1816] transition-colors cursor-pointer"
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="flex flex-col gap-3 max-h-72 overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-[#59544c] font-mono text-xs">
              NO MATCHING ARTIFACT ALLOCATIONS FOUND
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectItem(item);
                  onClose();
                }}
                className="bg-[#ede7dd] border border-[#d5cdc0] p-3.5 flex items-center justify-between hover:border-[#1a1816] cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover border border-[#d5cdc0]"
                  />
                  <div className="font-mono text-[11px]">
                    <span className="text-[#1a1816] font-bold block">{item.name}</span>
                    <span className="text-[#59544c] text-[10px]">{item.edition}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px]">
                  <span className="text-[#1a1816] font-bold">{formatCurrency(item.price)}</span>
                  <ArrowRight className="w-4 h-4 text-[#59544c] group-hover:text-[#1a1816] transition-colors" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
