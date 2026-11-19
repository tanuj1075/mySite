import React from 'react';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, RotateCcw, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { formatCurrency } from '../lib/currency';

interface CartItemListProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onMoveToWishlist: (item: CartItem) => void;
  onOpenSizeSelector: (item: CartItem) => void;
  onRestoreDefaultItems: () => void;
  onContinueShopping?: () => void;
}

export const CartItemList: React.FC<CartItemListProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onMoveToWishlist,
  onOpenSizeSelector,
  onRestoreDefaultItems,
  onContinueShopping,
}) => {
  const totalItemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <section className="flex flex-col gap-6" id="cart-allocation-section">
      {/* Header (Exact Match to Reference Panel 4) */}
      <div className="flex items-center justify-between pb-4 border-b border-[#E9D9CA] dark:border-[#242429]">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#242321] dark:text-white tracking-tight">
            Your Cart
          </h1>
          <p className="text-xs text-[#77716B] dark:text-[#8e8e98] mt-1">
            {items.length === 0 ? 'Your shopping bag is currently empty.' : `${totalItemCount} item${totalItemCount > 1 ? 's' : ''} in your cart`}
          </p>
        </div>
        <button
          onClick={onContinueShopping}
          className="text-xs sm:text-sm font-bold text-[#B4532A] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>Continue Shopping</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Cart Items List */}
      <div className="flex flex-col gap-4" id="cart-items-container">
        {items.length === 0 ? (
          <div className="bg-white dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#242429] rounded-3xl p-12 text-center flex flex-col items-center justify-center gap-4 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#E9D9CA]/40 dark:bg-[#242429] flex items-center justify-center text-[#B4532A]">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-[#242321] dark:text-white">
              Your Cart is Empty
            </h2>
            <p className="text-xs text-[#77716B] dark:text-[#8e8e98] max-w-sm">
              Discover our handpicked archival collection and performance runners to add specimens to your cart.
            </p>
            <button
              onClick={onRestoreDefaultItems}
              className="mt-2 px-6 py-3 bg-[#B4532A] hover:bg-[#9C431F] text-white text-xs font-semibold rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Restore Sample Sneakers</span>
            </button>
          </div>
        ) : (
          items.map((item) => (
            <article
              key={item.id}
              id={`cart-item-${item.id}`}
              className="bg-white dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#2A2A32] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-5 items-center justify-between shadow-sm hover:shadow-md transition-all group"
            >
              {/* Product Visual Asset */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#F7F2EC] dark:bg-[#121215] rounded-xl shrink-0 overflow-hidden flex items-center justify-center p-2 border border-[#E9D9CA]/60">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/images/cream_runner_pedestal_1788842341279.jpg';
                    }}
                  />
                </div>

                {/* Product Title & Size */}
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#242321] dark:text-white leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#77716B] dark:text-[#8e8e98]">
                    Size: {item.selectedSize || '9'} • {item.colorway || 'White'}
                  </p>
                  <p className="text-sm font-extrabold text-[#242321] dark:text-white sm:hidden">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
              </div>

              {/* Price, Stepper & Trash Controls (Exact Match to Reference Panel 4) */}
              <div className="flex items-center justify-between w-full sm:w-auto sm:gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E9D9CA]/60">
                {/* Desktop Price */}
                <span className="hidden sm:inline text-base font-extrabold text-[#242321] dark:text-white">
                  {formatCurrency(item.price * item.quantity)}
                </span>

                {/* Quantity Stepper */}
                <div className="flex items-center bg-[#F7F2EC] dark:bg-[#121215] border border-[#E9D9CA] dark:border-[#2A2A32] rounded-xl overflow-hidden">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="w-8 h-8 flex items-center justify-center text-[#242321] dark:text-[#f4f4f6] hover:bg-[#E9D9CA]/50 transition-colors text-sm cursor-pointer disabled:opacity-30"
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-[#242321] dark:text-[#f4f4f6]">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="w-8 h-8 flex items-center justify-center text-[#242321] dark:text-[#f4f4f6] hover:bg-[#E9D9CA]/50 transition-colors text-sm cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Remove Trash Can Action */}
                <button
                  type="button"
                  onClick={() => onRemoveItem(item.id)}
                  className="w-9 h-9 rounded-full text-[#77716B] hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors flex items-center justify-center cursor-pointer"
                  title="Remove from Cart"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))
        )}
      </div>

      {/* Trust Notice */}
      <div className="bg-white dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#242429] rounded-2xl p-4 flex items-center gap-3 shadow-sm">
        <ShieldCheck className="w-5 h-5 text-[#B4532A] shrink-0" />
        <span className="text-xs text-[#77716B] dark:text-[#8e8e98]">
          Complimentary insured shipping &amp; 30-day hassle-free return protection included.
        </span>
      </div>
    </section>
  );
};
