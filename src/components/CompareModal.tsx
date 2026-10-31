import React from 'react';
import { X, Scale, ShoppingBag, Eye, Trash2 } from 'lucide-react';
import { ShoeProduct, CartItem } from '../types';
import { formatCurrency } from '../lib/currency';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  compareProducts: ShoeProduct[];
  onRemoveFromCompare: (productId: string) => void;
  onClearCompare: () => void;
  onSelectProduct: (product: ShoeProduct) => void;
  onQuickAddToCart: (item: CartItem) => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  isOpen,
  onClose,
  compareProducts,
  onRemoveFromCompare,
  onClearCompare,
  onSelectProduct,
  onQuickAddToCart,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1a1816]/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-mono"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#f5efe6] border border-[#d5cdc0] max-w-5xl w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#d5cdc0] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#141312] text-[#f5efe6] flex items-center justify-center">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[12px] font-bold text-[#1a1816] uppercase tracking-wider block">
                FOOTWEAR ARCHITECTURAL COMPARISON MATRIX
              </span>
              <span className="text-[10px] text-[#7b6e54]">
                SIDE-BY-SIDE SPECIFICATION ANALYSIS ({compareProducts.length} SPECIMENS)
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {compareProducts.length > 0 && (
              <button
                onClick={onClearCompare}
                className="text-[10px] text-[#8e8474] hover:text-[#1a1816] flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>CLEAR MATRIX</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="text-[#59544c] hover:text-[#1a1816] p-1 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {compareProducts.length === 0 ? (
          <div className="py-16 text-center space-y-3">
            <Scale className="w-12 h-12 text-[#b8ad9c] mx-auto" />
            <div className="text-sm font-bold uppercase text-[#1a1816]">
              NO SPECIMENS IN COMPARISON MATRIX
            </div>
            <p className="text-xs text-[#59544c] max-w-sm mx-auto">
              Select "COMPARE" on any product card in the catalog or product view to compare up to 4
              footwear models side-by-side.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-[#d5cdc0] bg-[#ede7dd]">
              <thead>
                <tr className="border-b border-[#d5cdc0] bg-[#e4ddcf]">
                  <th className="p-4 w-44 font-bold text-[#7b6e54] uppercase text-[10px]">
                    SPECIFICATION
                  </th>
                  {compareProducts.map((p) => (
                    <th key={p.id} className="p-4 min-w-[220px] max-w-[260px] align-top">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[9px] text-[#7b6e54] font-bold">{p.brand}</span>
                        <button
                          onClick={() => onRemoveFromCompare(p.id)}
                          className="text-[#8e8474] hover:text-[#1a1816] p-0.5 cursor-pointer"
                          title="Remove from comparison"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="relative aspect-[4/3] bg-[#f5efe6] border border-[#d5cdc0] overflow-hidden mb-3">
                        <img
                          src={p.colors[0]?.images.front}
                          alt={p.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="font-bold text-[#1a1816] uppercase text-[12px] leading-tight mb-1">
                        {p.name}
                      </div>
                      <div className="text-[13px] font-bold text-[#1a1816] mb-3">
                        {formatCurrency(p.price)}{' '}
                        <span className="line-through text-[#8e8474] text-xs font-normal">
                          {formatCurrency(p.mrp)}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            onSelectProduct(p);
                            onClose();
                          }}
                          className="flex-1 py-1.5 bg-[#141312] text-[#f5efe6] text-[10px] font-bold uppercase hover:bg-[#35322e] transition-colors cursor-pointer text-center"
                        >
                          VIEW DETAILS
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d5cdc0] text-[11px]">
                <tr>
                  <td className="p-3 font-bold text-[#59544c] bg-[#e4ddcf]/50">CATEGORY / SPORT</td>
                  {compareProducts.map((p) => (
                    <td key={p.id} className="p-3 text-[#1a1816] font-semibold">
                      {p.category} // {p.sport || 'Lifestyle'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#59544c] bg-[#e4ddcf]/50">RATING</td>
                  {compareProducts.map((p) => (
                    <td key={p.id} className="p-3 text-[#1a1816]">
                      {p.reviewsCount > 0 ? `⭐ ${p.rating} (${p.reviewsCount} reviews)` : 'Not rated'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#59544c] bg-[#e4ddcf]/50">WEIGHT</td>
                  {compareProducts.map((p) => (
                    <td key={p.id} className="p-3 text-[#1a1816] font-semibold">
                      {p.weight}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#59544c] bg-[#e4ddcf]/50">FIT RECOMMENDATION</td>
                  {compareProducts.map((p) => (
                    <td key={p.id} className="p-3 text-[#1a1816]">
                      <span className="font-bold">{p.fitIndicator}</span> ({p.fitType})
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#59544c] bg-[#e4ddcf]/50">UPPER MATERIAL</td>
                  {compareProducts.map((p) => (
                    <td key={p.id} className="p-3 text-[#59544c]">
                      {p.upper}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#59544c] bg-[#e4ddcf]/50">SOLE UNIT</td>
                  {compareProducts.map((p) => (
                    <td key={p.id} className="p-3 text-[#59544c]">
                      {p.sole}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#59544c] bg-[#e4ddcf]/50">PRIMARY USE</td>
                  {compareProducts.map((p) => (
                    <td key={p.id} className="p-3 text-[#1a1816]">
                      {p.use}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#59544c] bg-[#e4ddcf]/50">WATER RESISTANCE</td>
                  {compareProducts.map((p) => (
                    <td key={p.id} className="p-3 text-[#1a1816]">
                      {p.waterResistance}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#59544c] bg-[#e4ddcf]/50">PROVENANCE</td>
                  {compareProducts.map((p) => (
                    <td key={p.id} className="p-3 text-[#59544c]">
                      {p.countryOfOrigin}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[#59544c] bg-[#e4ddcf]/50">WARRANTY</td>
                  {compareProducts.map((p) => (
                    <td key={p.id} className="p-3 text-[#59544c]">
                      {p.warranty}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
