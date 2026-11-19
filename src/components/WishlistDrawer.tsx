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
      className="fixed inset-0 z-50 bg-[#09090b]/80 backdrop-blur-md flex justify-end"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-md bg-[#121215] border-l border-[#242429] h-full flex flex-col justify-between shadow-2xl p-6 sm:p-8 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#242429] pb-4">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#c9a96e]" />
              <span className="font-mono text-[11px] font-bold text-[#f4f4f6] uppercase tracking-wider">
                ARCHIVED WISHLIST [{items.length}]
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-[#8e8e98] hover:text-[#f4f4f6] p-1 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List of Wishlist items */}
          {items.length === 0 ? (
            <div className="py-16 text-center flex flex-col items-center gap-3">
              <Heart className="w-8 h-8 text-[#52525b]" />
              <span className="font-mono text-xs text-[#8e8e98] uppercase tracking-wider font-bold">
                NO SAVED ARTIFACTS
              </span>
              <p className="font-mono text-[11px] text-[#52525b] max-w-xs">
                Items moved to wishlist from your archive bag will be catalogued here
                for priority queuing.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#18181c] border border-[#242429] p-4 flex gap-4 items-center justify-between shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover border border-[#242429] bg-[#09090b]"
                  />
                  <div className="flex flex-col flex-1 min-w-0 font-mono text-[11px]">
                    <span className="font-bold text-[#f4f4f6] truncate uppercase">
                      {item.name}
                    </span>
                    <span className="text-[#8e8e98] text-[10px]">
                      {item.specification}
                    </span>
                    <span className="text-[#c9a96e] font-bold mt-1">
                      {formatCurrency(item.price)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    <button
                      onClick={() => onMoveToBag(item)}
                      title="Move back to bag"
                      className="p-2 bg-[#f4f4f6] hover:bg-[#c9a96e] text-[#09090b] transition-colors cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onRemoveFromWishlist(item.id)}
                      title="Remove from wishlist"
                      className="p-2 bg-[#121215] hover:bg-red-950/40 hover:text-red-400 border border-[#242429] text-[#8e8e98] transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="pt-6 border-t border-[#242429]">
            <button
              onClick={() => {
                items.forEach((item) => onMoveToBag(item));
                onClose();
              }}
              className="w-full py-3.5 bg-[#f4f4f6] text-[#09090b] font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-[#c9a96e] transition-colors cursor-pointer shadow-lg"
            >
              MOVE ALL TO ARCHIVE BAG
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
