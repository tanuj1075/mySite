import React from 'react';
import { X, User, Shield, Package, Key, LogOut } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1a1816]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto font-mono"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#f5efe6] border border-[#d5cdc0] max-w-md w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#d5cdc0] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#141312] flex items-center justify-center text-[#ede7dd]">
              <User className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[12px] font-bold text-[#1a1816] uppercase tracking-wider block">
                PRIVATE CLIENT PROTOCOL
              </span>
              <span className="text-[9px] text-[#7b6e54]">MEMBER #0084 // VIP ALPHA</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#59544c] hover:text-[#1a1816] p-1 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-4 text-[11px]">
          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center text-[#59544c]">
              <span>AUTHENTICATED CLIENT</span>
              <span className="text-[#1a1816] font-bold">VERIFIED</span>
            </div>
            <div className="text-[#1a1816] font-bold">TANUJ D.</div>
            <div className="text-[#59544c] text-[10px]">tanujdorugade0226@gmail.com</div>
          </div>

          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-[#1a1816] font-bold">
              <Shield className="w-3.5 h-3.5 text-[#7b6e54]" />
              <span>ALLOCATION PRIVILEGES</span>
            </div>
            <div className="text-[#59544c] text-[10px] leading-relaxed">
              • Guaranteed 15-Minute Archive Hold Window
              <br />
              • Complimentary Priority Armored Freight
              <br />• Dedicated Concierge Direct Hotline Access
            </div>
          </div>

          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex justify-between items-center">
            <div className="flex items-center gap-2 text-[#1a1816]">
              <Package className="w-3.5 h-3.5 text-[#7b6e54]" />
              <span>DISPATCH HISTORY</span>
            </div>
            <span className="text-[#1a1816] font-bold">04 VAULT SHIPMENTS</span>
          </div>
        </div>

        <div className="pt-2 border-t border-[#d5cdc0] flex gap-3">
          <button
            onClick={onClose}
            className="w-full py-3 bg-[#141312] text-[#f5efe6] hover:bg-[#35322e] text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            RETURN TO ARCHIVE
          </button>
        </div>
      </div>
    </div>
  );
};
