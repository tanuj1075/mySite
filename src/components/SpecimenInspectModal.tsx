import React from 'react';
import { X, Shield, Cpu, Activity, ArrowRight, Layers } from 'lucide-react';
import { ArchiveSpecimen, CartItem } from '../types';

interface SpecimenInspectModalProps {
  isOpen: boolean;
  onClose: () => void;
  specimen: ArchiveSpecimen | null;
  onClaimAllocation?: (item: CartItem) => void;
}

export const SpecimenInspectModal: React.FC<SpecimenInspectModalProps> = ({
  isOpen,
  onClose,
  specimen,
  onClaimAllocation,
}) => {
  if (!isOpen || !specimen) return null;

  const handleClaim = () => {
    if (onClaimAllocation && specimen.price) {
      const cartItem: CartItem = {
        id: specimen.id,
        code: specimen.specCode,
        name: specimen.name,
        edition: `${specimen.badge} // ${specimen.year}`,
        price: specimen.price,
        image: specimen.image,
        colorway: 'Obsidian Archive Specimen',
        specification: 'US 10 / EU 44',
        availableSizes: ['US 9 / EU 42.5', 'US 10 / EU 44', 'US 11 / EU 45'],
        allocationStatus: `Allocation Secured // ${specimen.code}`,
        quantity: 1,
      };
      onClaimAllocation(cartItem);
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1a1816]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto font-mono"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#f5efe6] border border-[#d5cdc0] max-w-2xl w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#d5cdc0] pb-4">
          <div className="flex items-center gap-3">
            <span
              className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                specimen.badge === 'VAULTED'
                  ? 'bg-[#b83b3b]/15 text-[#b83b3b] border border-[#b83b3b]/40'
                  : 'bg-[#ede7dd] text-[#1a1816] border border-[#d5cdc0]'
              }`}
            >
              {specimen.badge}
            </span>
            <span className="text-xs text-[#59544c] tracking-widest font-bold">{specimen.code}</span>
          </div>

          <button
            onClick={onClose}
            className="text-[#59544c] hover:text-[#1a1816] p-1 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
          <div className="sm:col-span-5 bg-[#ede7dd] border border-[#d5cdc0] p-2">
            <img
              src={specimen.image}
              alt={specimen.name}
              referrerPolicy="no-referrer"
              className="w-full aspect-square object-cover"
            />
            <div className="mt-2 text-center text-[9px] text-[#7b6e54] border-t border-[#d5cdc0] pt-1 font-bold">
              DIGITAL STASIS ARCHIVE RECORD
            </div>
          </div>

          <div className="sm:col-span-7 flex flex-col gap-4">
            <div>
              <span className="text-[10px] text-[#7b6e54] tracking-widest block font-bold">
                YEAR // {specimen.year} • {specimen.era}
              </span>
              <h2 className="font-headline text-2xl font-bold uppercase text-[#1a1816] tracking-tight">
                {specimen.name}
              </h2>
            </div>

            <p className="text-xs text-[#59544c] leading-relaxed">
              {specimen.description}
            </p>

            <div className="bg-[#ede7dd] border border-[#d5cdc0] p-3 flex flex-col gap-2 text-[10px]">
              <div className="flex justify-between border-b border-[#d5cdc0] pb-1.5">
                <span className="text-[#59544c]">COMPOSITION</span>
                <span className="text-[#1a1816] font-bold">{specimen.composition}</span>
              </div>
              <div className="flex justify-between border-b border-[#d5cdc0] pb-1.5">
                <span className="text-[#59544c]">CHASSIS / OUTSOLE</span>
                <span className="text-[#1a1816] font-bold">{specimen.outsoleOrChassis}</span>
              </div>
              {specimen.dimensions && (
                <div className="flex justify-between border-b border-[#d5cdc0] pb-1.5">
                  <span className="text-[#59544c]">DIMENSIONS</span>
                  <span className="text-[#1a1816]">{specimen.dimensions}</span>
                </div>
              )}
              {specimen.weight && (
                <div className="flex justify-between">
                  <span className="text-[#59544c]">MASS WEIGHT</span>
                  <span className="text-[#1a1816]">{specimen.weight}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 text-[10px] text-[#7b6e54] font-bold">
              <Shield className="w-3.5 h-3.5" />
              <span>AUTHENTICATED BY VANTA LABORATORY // BERLIN</span>
            </div>
          </div>
        </div>

        {/* Action Bottom */}
        <div className="border-t border-[#d5cdc0] pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono">
            <span className="text-[#59544c] mr-2">ESTIMATED VALUATION:</span>
            <span className="text-[#1a1816] font-bold text-sm">
              {specimen.price ? `$${specimen.price.toFixed(2)}` : 'RESERVED ARCHIVE'}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="py-2.5 px-4 bg-[#ede7dd] border border-[#d5cdc0] text-[#59544c] hover:text-[#1a1816] text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              CLOSE DOSSIER
            </button>
            {specimen.price && (
              <button
                onClick={handleClaim}
                className="py-2.5 px-5 bg-[#141312] text-[#f5efe6] hover:bg-[#35322e] text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>REQUEST ALLOCATION</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
