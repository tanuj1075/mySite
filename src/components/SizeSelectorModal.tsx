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
      className="fixed inset-0 z-50 bg-[#09090b]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto font-mono"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#121215] border border-[#242429] max-w-md w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl animate-fade-in">
        <div className="flex items-center justify-between border-b border-[#242429] pb-4">
          <div>
            <span className="text-[10px] text-[#c9a96e] uppercase tracking-wider block font-bold">
              SPECIFICATION SELECTOR
            </span>
            <h3 className="font-headline text-lg font-bold text-[#f4f4f6] uppercase mt-0.5">
              {item.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#8e8e98] hover:text-[#f4f4f6] p-1 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-[11px] text-[#8e8e98]">
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
                    ? 'bg-[#f4f4f6] border-[#f4f4f6] text-[#09090b] font-bold'
                    : 'bg-[#18181c] border-[#242429] hover:border-[#3a3a42] text-[#f4f4f6]'
                }`}
              >
                <span>{size}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#09090b]" />}
              </button>
            );
          })}
        </div>

        <div className="pt-3 border-t border-[#242429] text-[10px] text-[#8e8e98]">
          Note: Sizing strictly corresponds to architectural millimeter specifications.
        </div>
      </div>
    </div>
  );
};