import React from 'react';
import { CheckCircle2, ShieldCheck, X, FileText, Download } from 'lucide-react';
import { Address } from '../types';

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  destinationAddress?: Address;
  totalAmount: number;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  isOpen,
  onClose,
  destinationAddress,
  totalAmount,
}) => {
  if (!isOpen) return null;

  const transactionHash = 'VN-8840291-NY';
  const sealNumber = '#8892014';
  const destinationText = destinationAddress
    ? `${destinationAddress.line1}, ${destinationAddress.city}`
    : '450 West 14th St, New York';

  return (
    <div
      id="order-confirm-dialog"
      className="fixed inset-0 z-50 bg-[#1a1816]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#f5efe6] border border-[#d5cdc0] max-w-lg w-full p-8 flex flex-col gap-6 relative shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#d5cdc0] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#1a1816]"></span>
            <span className="font-mono text-[10px] text-[#7b6e54] uppercase tracking-[0.16em] font-bold">
              TRANSACTION CONFIRMED // VNT-9812
            </span>
          </div>
          <button
            id="close-modal-btn"
            onClick={onClose}
            className="text-[#59544c] hover:text-[#1a1816] font-mono text-sm p-1 cursor-pointer transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Headline & Narrative */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle2 className="w-6 h-6 text-[#7b6e54]" />
            <h2 className="font-headline text-[24px] md:text-[28px] text-[#1a1816] uppercase font-bold tracking-tight">
              ORDER DISPATCH AUTHORIZED
            </h2>
          </div>
          <p className="font-mono text-[12px] leading-5 text-[#59544c] mt-3">
            Your allocation has been locked and transferred to the archival packaging facility.
            A dispatch tracking digest and physical cryptographic certificate have been
            issued to your registered destination.
          </p>
        </div>

        {/* Receipt Ledger */}
        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-5 font-mono text-[11px] flex flex-col gap-3">
          <div className="flex justify-between items-center border-b border-[#d5cdc0] pb-2">
            <span className="text-[#59544c] uppercase tracking-wider">
              DISPATCH IDENTIFIER
            </span>
            <span className="text-[#1a1816] font-bold">#{transactionHash}</span>
          </div>
          <div className="flex justify-between items-center border-b border-[#d5cdc0] pb-2">
            <span className="text-[#59544c] uppercase tracking-wider">DESTINATION</span>
            <span className="text-[#1a1816] text-right font-medium truncate max-w-[220px]">
              {destinationText}
            </span>
          </div>
          <div className="flex justify-between items-center border-b border-[#d5cdc0] pb-2">
            <span className="text-[#59544c] uppercase tracking-wider">
              CLIMATE SEAL NUMBER
            </span>
            <span className="text-[#1a1816] font-bold">{sealNumber}</span>
          </div>
          <div className="flex justify-between items-center border-b border-[#d5cdc0] pb-2">
            <span className="text-[#59544c] uppercase tracking-wider">TRANSIT CLASS</span>
            <span className="text-[#1a1816]">ARMORED 48H DIRECT</span>
          </div>
          <div className="flex justify-between items-center pt-1">
            <span className="text-[#59544c] uppercase tracking-wider font-bold">
              TOTAL SETTLEMENT CHARGED
            </span>
            <span className="text-[#1a1816] text-[13px] font-bold">
              ${totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD
            </span>
          </div>
        </div>

        {/* Security Certificate Notice */}
        <div className="bg-[#e4ddcf] border border-[#d5cdc0] p-3.5 flex items-center justify-between text-[#59544c] font-mono text-[10px]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#7b6e54]" />
            <span>CRYPTOGRAPHIC LEDGER HASH GENERATED</span>
          </div>
          <span className="text-[#1a1816] font-bold">0x8f2a...9c4e</span>
        </div>

        {/* Action Button */}
        <div className="flex flex-col gap-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-4 bg-[#141312] text-[#f5efe6] font-mono text-[11px] font-bold tracking-[0.16em] uppercase hover:bg-[#35322e] transition-colors cursor-pointer"
          >
            RETURN TO ARCHIVE
          </button>
        </div>
      </div>
    </div>
  );
};
