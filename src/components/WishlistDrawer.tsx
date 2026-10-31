import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { WishlistItem } from '../types';
import { formatCurrency } from '../lib/currency';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: WishlistItem[];
  onMoveToBag: (item: WishlistItem) => void;
  onRemoveFromWishlist: (id: string) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onMoveToBag,
  onRemoveFromWishlist,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1a1816]/70 backdrop-blur-sm flex justify-end"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-md bg-[#f5efe6] border-l border-[#d5cdc0] h-full flex flex-col justify-between shadow-2xl p-6 sm:p-8 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#d5cdc0] pb-4">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#7b6e54]" />
              <span className="font-mono text-[11px] font-bold text-[#1a1816] uppercase tracking-wider">
                ARCHIVED WISHLIST [{items.length}]
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-[#59544c] hover:text-[#1a1816] p-1 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List of Wishlist items */}
          {items.length === 0 ? (
            <div className="py-16 text-center flex flex-col items-center gap-3">
              <Heart className="w-8 h-8 text-[#7b6e54]" />
              <span className="font-mono text-xs text-[#59544c] uppercase tracking-wider font-bold">
                NO SAVED ARTIFACTS
              </span>
              <p className="font-mono text-[11px] text-[#59544c] max-w-xs">
                Items moved to wishlist from your archive bag will be catalogued here
                for priority queuing.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex gap-4 items-center justify-between"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover border border-[#d5cdc0]"
                  />
                  <div className="flex flex-col flex-1 min-w-0 font-mono text-[11px]">
                    <span className="font-bold text-[#1a1816] truncate uppercase">
                      {item.name}
                    </span>
                    <span className="text-[#59544c] text-[10px]">
                      {item.specification}
                    </span>
                    <span className="text-[#1a1816] font-bold mt-1">
                      {formatCurrency(item.price)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    <button
                      onClick={() => onMoveToBag(item)}
                      title="Move back to bag"
                      className="p-2 bg-[#141312] hover:bg-[#35322e] text-[#f5efe6] transition-colors cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onRemoveFromWishlist(item.id)}
                      title="Remove from wishlist"
                      className="p-2 bg-[#f5efe6] hover:bg-[#b83b3b] hover:text-white border border-[#d5cdc0] text-[#59544c] transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pt-6 border-t border-[#d5cdc0]">
          <button
            onClick={onClose}
            className="w-full py-3 bg-[#ede7dd] border border-[#d5cdc0] text-[#1a1816] font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-[#ded6c9] transition-colors cursor-pointer"
          >
            RETURN TO BAG
          </button>
        </div>
      </div>
    </div>
  );
};
