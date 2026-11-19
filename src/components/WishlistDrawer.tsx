import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { WishlistItem } from '../types';
import { formatCurrency } from '../lib/currency';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: WishlistItem[];
  onMoveToBag: (item: WishlistItem) => void;
  onRemoveFromWishlist: (id: string) => void;
  onClearWishlist?: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onMoveToBag,
  onRemoveFromWishlist,
  onClearWishlist,
}) => {
  if (!isOpen) return null;

  const handleClearAll = () => {
    if (onClearWishlist) {
      onClearWishlist();
    } else {
      items.forEach((item) => onRemoveFromWishlist(item.id));
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#242321]/60 backdrop-blur-sm flex justify-center sm:justify-end"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-2xl bg-[#F7F2EC] dark:bg-[#121215] h-full flex flex-col justify-between shadow-2xl p-6 sm:p-8 overflow-y-auto border-l border-[#E9D9CA] dark:border-[#242429]">
        <div className="flex flex-col gap-6">
          
          {/* Header (Exact Match to Reference Panel 6) */}
          <div className="flex items-center justify-between border-b border-[#E9D9CA] dark:border-[#242429] pb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#242321] dark:text-white">
                My Wishlist
              </h1>
              <p className="text-xs text-[#77716B] dark:text-[#8e8e98] mt-1">
                {items.length === 0
                  ? 'Your wishlist is currently empty.'
                  : `You have ${items.length} item${items.length > 1 ? 's' : ''} in your wishlist.`}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {items.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="text-xs font-semibold text-[#B4532A] hover:underline cursor-pointer"
                >
                  Clear All
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#242429] flex items-center justify-center text-[#77716B] hover:text-[#242321] dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close Wishlist"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* List of Wishlist items (Panel 6 2-column or 3-column cards) */}
          {items.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center gap-4 bg-white dark:bg-[#18181c] rounded-2xl border border-[#E9D9CA] dark:border-[#242429] p-8">
              <div className="w-14 h-14 rounded-full bg-[#E9D9CA]/40 dark:bg-[#242429] flex items-center justify-center text-[#B4532A]">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#242321] dark:text-white">
                Your Wishlist is Empty
              </h2>
              <p className="text-xs text-[#77716B] dark:text-[#8e8e98] max-w-xs">
                Explore our curated catalog and tap the heart icon on any sneaker to save it here.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 px-6 py-2.5 bg-[#B4532A] hover:bg-[#9C431F] text-white text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-sm flex items-center gap-2"
              >
                <span>Browse Sneakers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="bg-white dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#2A2A32] rounded-2xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group relative"
                >
                  {/* Remove Heart Trigger */}
                  <button
                    type="button"
                    onClick={() => onRemoveFromWishlist(item.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#F7F2EC] dark:bg-[#121215] flex items-center justify-center text-[#B4532A] hover:scale-110 transition-transform cursor-pointer shadow-xs z-10"
                    title="Remove from Wishlist"
                  >
                    <Heart className="w-4 h-4 fill-[#B4532A]" />
                  </button>

                  {/* Sneaker Image */}
                  <div className="w-full h-36 bg-[#F7F2EC] dark:bg-[#121215] rounded-xl overflow-hidden flex items-center justify-center p-3 mb-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/images/cream_runner_pedestal_1788842341279.jpg';
                      }}
                    />
                  </div>

                  {/* Details */}
                  <div className="space-y-1 mb-3">
                    <h3 className="text-sm font-bold text-[#242321] dark:text-white truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#77716B] dark:text-[#8e8e98]">
                      {item.specification || 'Standard Fit'}
                    </p>
                    <p className="text-sm font-extrabold text-[#242321] dark:text-white pt-1">
                      {formatCurrency(item.price)}
                    </p>
                  </div>

                  {/* Add to Cart CTA (Exact Match to Reference Panel 6) */}
                  <button
                    type="button"
                    onClick={() => onMoveToBag(item)}
                    className="w-full py-2.5 px-4 rounded-xl border border-[#E9D9CA] dark:border-[#2A2A32] bg-[#F7F2EC] dark:bg-[#121215] hover:bg-[#B4532A] hover:border-[#B4532A] hover:text-white text-[#242321] dark:text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </button>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Footer Close */}
        <div className="pt-6 border-t border-[#E9D9CA] dark:border-[#242429]">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 bg-[#242321] dark:bg-white text-white dark:text-[#242321] font-bold text-xs rounded-xl hover:opacity-90 transition-opacity cursor-pointer text-center"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};
