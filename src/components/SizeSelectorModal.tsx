import React from 'react';
import { X, Check } from 'lucide-react';
import { CartItem } from '../types';

interface SizeSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: CartItem | null;
  onSelectSize: (itemId: string, newSize: string) => void;
}

export const SizeSelectorModal: React.FC<SizeSelectorModalProps> = ({
  isOpen,
  onClose,
  item,
  onSelectSize,
}) => {
  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1a1816]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#f5efe6] border border-[#d5cdc0] max-w-md w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#d5cdc0] pb-4">
          <div>
            <span className="font-mono text-[10px] text-[#7b6e54] uppercase tracking-wider block font-bold">
              SPECIFICATION SELECTOR
            </span>
            <h3 className="font-headline text-lg font-bold text-[#1a1816] uppercase mt-0.5">
              {item.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#59544c] hover:text-[#1a1816] p-1 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="font-mono text-[11px] text-[#59544c]">
          Select desired archival scale specification for unit allocation:
        </div>

        <div className="grid grid-cols-2 gap-2">
          {item.availableSizes.map((size) => {
            const isSelected = item.specification === size;
            return (
              <button
                key={size}
                type="button"
                onClick={() => {
                  onSelectSize(item.id, size);
                  onClose();
                }}
                className={`p-3 text-left border font-mono text-[11px] flex items-center justify-between transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#1a1816] border-[#1a1816] text-[#ede7dd] font-bold'
                    : 'bg-[#ede7dd] border-[#d5cdc0] hover:bg-[#ded6c9] text-[#1a1816]'
                }`}
              >
                <span>{size}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#ede7dd]" />}
              </button>
            );
          })}
        </div>

        <div className="pt-3 border-t border-[#d5cdc0] text-[10px] font-mono text-[#59544c]">
          Note: Sizing strictly corresponds to architectural millimeter specifications.
        </div>
      </div>
    </div>
  );
};
