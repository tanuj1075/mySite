import React from 'react';
import { CheckCircle2, ShieldAlert, ShieldCheck, ChevronRight, RotateCcw } from 'lucide-react';
import { CartItem } from '../types';
import { formatCurrency } from '../lib/currency';

interface CartItemListProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onMoveToWishlist: (item: CartItem) => void;
  onOpenSizeSelector: (item: CartItem) => void;
  onRestoreDefaultItems: () => void;
}

export const CartItemList: React.FC<CartItemListProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onMoveToWishlist,
  onOpenSizeSelector,
  onRestoreDefaultItems,
}) => {
  const totalItemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const formattedCount = totalItemCount < 10 ? `0${totalItemCount}` : totalItemCount;

  return (
    <section className="flex flex-col gap-8" id="cart-allocation-section">
      {/* Header & Series Metadata */}
      <div className="flex flex-col gap-2 pb-2">
        <div className="flex items-center justify-between border-b border-[#d5cdc0] pb-3">
          <span className="font-mono text-[11px] font-bold text-[#7b6e54] uppercase tracking-[0.14em]">
            SEC_01 // CART_ALLOCATION
          </span>
          <span className="font-mono text-[10px] text-[#59544c] tracking-wider">
            SERIES ID: VN-2025-Q1
          </span>
        </div>
        <h1
          id="cart-archive-title"
          className="font-headline text-[32px] md:text-[38px] text-[#1a1816] uppercase tracking-tight font-medium mt-2"
        >
          YOUR ARCHIVE BAG [{items.length > 0 ? `${formattedCount} ITEMS` : 'EMPTY'}]
        </h1>
      </div>

      {/* Cart Items List */}
      <div className="flex flex-col gap-6" id="cart-items-container">
        {items.length === 0 ? (
          <div className="bg-[#f5efe6] border border-[#d5cdc0] p-12 text-center flex flex-col items-center justify-center gap-4">
            <ShieldAlert className="w-10 h-10 text-[#7b6e54]" />
            <div className="font-headline text-2xl uppercase tracking-tight text-[#1a1816]">
              ALLOCATION QUEUE EMPTY
            </div>
            <p className="font-mono text-xs text-[#59544c] max-w-md">
              All reserved units have been temporarily released back to the global vault queue.
            </p>
            <button
              onClick={onRestoreDefaultItems}
              className="mt-4 px-6 py-3 bg-[#1a1816] text-[#ede7dd] font-mono text-[11px] font-bold tracking-widest uppercase hover:bg-[#35322e] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> RESTORE ARCHIVE ALLOCATION
            </button>
          </div>
        ) : (
          items.map((item) => (
            <article
              key={item.id}
              id={`cart-item-${item.id}`}
              className="bg-[#f5efe6] border border-[#d5cdc0] p-6 flex flex-col sm:flex-row gap-6 items-start relative group transition-all duration-300 hover:border-[#1a1816]"
            >
              {/* Product Visual Asset */}
              <div className="w-full sm:w-44 h-52 bg-[#ede7dd] shrink-0 overflow-hidden flex items-center justify-center relative border border-[#d5cdc0]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transition-all duration-700 select-none"
                  loading="eager"
                />
                <span className="absolute top-2 left-2 bg-[#ede7dd]/90 px-2 py-0.5 font-mono text-[10px] text-[#1a1816] tracking-wider border border-[#d5cdc0]">
                  {item.code}
                </span>
              </div>

              {/* Product Details & Controls */}
              <div className="flex flex-col justify-between w-full h-full min-h-52">
                <div className="flex flex-col gap-2">
                  {/* Title & Price Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-headline text-[22px] leading-7 font-semibold text-[#1a1816] uppercase tracking-tight">
                        {item.name}
                      </h2>
                      <p className="font-mono text-[10px] text-[#59544c] mt-1 tracking-wider">
                        {item.edition}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-mono text-[18px] font-bold text-[#1a1816] tracking-tight">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                      <span className="block font-mono text-[10px] text-[#7b6e54] tracking-wider">
                        TAX INCL.
                      </span>
                    </div>
                  </div>

                  {/* Tech Specs Matrix */}
                  <div className="grid grid-cols-2 gap-2 mt-3 bg-[#ede7dd] p-3 font-mono text-[10px] border border-[#d5cdc0]">
                    <div>
                      <span className="text-[#59544c] block uppercase tracking-wider mb-0.5">
                        Colorway
                      </span>
                      <span className="text-[#1a1816] font-bold">
                        {item.colorway}
                      </span>
                    </div>
                    <div
                      onClick={() => onOpenSizeSelector(item)}
                      className="cursor-pointer group/spec hover:bg-[#e4ddcf] p-1 -m-1 transition-colors"
                      title="Click to modify specification"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[#59544c] block uppercase tracking-wider mb-0.5">
                          Specification
                        </span>
                        <span className="text-[9px] text-[#7b6e54] underline font-bold">EDIT</span>
                      </div>
                      <span className="text-[#1a1816] font-bold flex items-center gap-1">
                        {item.specification}
                        <ChevronRight className="w-3 h-3 text-[#59544c] group-hover/spec:text-[#1a1816]" />
                      </span>
                    </div>
                  </div>

                  {/* Allocation Status */}
                  <div className="flex items-center gap-2 mt-2">
                    <CheckCircle2 className="w-4 h-4 text-[#7b6e54] shrink-0" />
                    <span className="font-mono text-[10px] text-[#7b6e54] uppercase tracking-wide font-bold">
                      {item.allocationStatus}
                    </span>
                  </div>
                </div>

                {/* Quantity Stepper & Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 mt-4 border-t border-[#d5cdc0]">
                  <div className="flex items-center bg-[#ede7dd] border border-[#d5cdc0]">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center text-[#1a1816] hover:bg-[#ded6c9] transition-colors font-mono text-sm cursor-pointer disabled:opacity-30"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-mono text-[11px] text-[#1a1816] font-bold">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center text-[#1a1816] hover:bg-[#ded6c9] transition-colors font-mono text-sm cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => onMoveToWishlist(item)}
                      className="font-mono text-[11px] font-bold text-[#59544c] hover:text-[#1a1816] uppercase underline underline-offset-4 transition-colors cursor-pointer"
                    >
                      Move to Wishlist
                    </button>
                    <span className="text-[#d5cdc0] font-mono">/</span>
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.id)}
                      className="font-mono text-[11px] font-bold text-[#b83b3b] hover:text-[#912020] uppercase underline underline-offset-4 transition-colors cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))
        )}
      </div>

      {/* Archival Packaging Protocol Callout */}
      <div
        id="archival-packaging-callout"
        className="bg-[#e4ddcf] border border-[#d5cdc0] p-6 flex flex-col md:flex-row gap-6 items-start justify-between"
      >
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 flex items-center justify-center bg-[#ede7dd] border border-[#d5cdc0] shrink-0 mt-0.5">
            <ShieldCheck className="w-4 h-4 text-[#7b6e54]" />
          </div>
          <div>
            <h3 className="font-mono text-[11px] font-bold text-[#1a1816] uppercase tracking-wider">
              Archival Dispatch Packaging
            </h3>
            <p className="font-mono text-[12px] leading-5 text-[#59544c] mt-1.5 max-w-xl">
              Each artifact is dispatched in reinforced obsidian climate-sealed micro-cell foam, accompanied by an individually serialized physical Certificate of Authenticity.
            </p>
          </div>
        </div>
        <div className="shrink-0 font-mono text-[10px] text-[#1a1816] font-bold bg-[#ede7dd] border border-[#d5cdc0] px-3 py-1.5 tracking-wider">
          SEAL NO. #8892014
        </div>
      </div>

      {/* Direct Courier Hand-off Bar */}
      <div
        id="transit-indemnity-bar"
        className="bg-[#f5efe6] border border-[#d5cdc0] p-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-4 h-4 text-[#7b6e54]" />
          <span className="font-mono text-[10px] text-[#1a1816] uppercase tracking-wider">
            Direct Courier Hand-Off &amp; Full Transit Indemnity
          </span>
        </div>
        <span className="font-mono text-[10px] font-bold text-[#7b6e54] uppercase tracking-wider">
          INCLUDED
        </span>
      </div>
    </section>
  );
};
