import React from 'react';
import { X, User, Shield, Package, LogOut } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser?: { name: string; email: string; memberId?: string } | null;
  onLogout?: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLogout,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#09090b]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto font-mono"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#121215] border border-[#242429] max-w-md w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl animate-fade-in">
        <div className="flex items-center justify-between border-b border-[#242429] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#18181c] border border-[#242429] flex items-center justify-center text-[#c9a96e]">
              <User className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[12px] font-bold text-[#f4f4f6] uppercase tracking-wider block">
                PRIVATE CLIENT PROTOCOL
              </span>
              <span className="text-[9px] text-[#c9a96e]">
                {currentUser?.memberId ? `MEMBER #${currentUser.memberId}` : 'MEMBER // VIP ACCESS'}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#8e8e98] hover:text-[#f4f4f6] p-1 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-4 text-[11px]">
          <div className="bg-[#18181c] border border-[#242429] p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center text-[#8e8e98]">
              <span>AUTHENTICATED CLIENT</span>
              <span className="text-[#c9a96e] font-bold">VERIFIED</span>
            </div>
            <div className="text-[#f4f4f6] font-bold text-sm tracking-wider uppercase">
              {currentUser?.name || 'VERIFIED CLIENT'}
            </div>
            <div className="text-[#8e8e98] text-[10px]">
              {currentUser?.email || 'Authenticated Account'}
            </div>
          </div>

          <div className="bg-[#18181c] border border-[#242429] p-4 flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-[#f4f4f6] font-bold">
              <Shield className="w-3.5 h-3.5 text-[#c9a96e]" />
              <span>ALLOCATION PRIVILEGES</span>
            </div>
            <div className="text-[#8e8e98] text-[10px] leading-relaxed">
              • Guaranteed 15-Minute Archive Hold Window
              <br />
              • Complimentary Priority Armored Freight
              <br />
              • Dedicated Concierge Direct Hotline Access
            </div>
          </div>

          <div className="bg-[#18181c] border border-[#242429] p-4 flex justify-between items-center">
            <div className="flex items-center gap-2 text-[#f4f4f6]">
              <Package className="w-3.5 h-3.5 text-[#c9a96e]" />
              <span>DISPATCH REPOSITORY</span>
            </div>
            <span className="text-[#c9a96e] font-bold">ACTIVE PROTOCOL</span>
          </div>
        </div>

        <div className="pt-2 border-t border-[#242429] flex flex-col gap-2">
          {onLogout && (
            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="w-full py-2.5 bg-transparent border border-[#b83b3b]/40 text-[#ef4444] hover:bg-[#b83b3b]/10 text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>TERMINATE SESSION</span>
            </button>
          )}
          <button
            onClick={onClose}
            className="w-full py-3 bg-[#f4f4f6] text-[#09090b] hover:bg-[#c9a96e] text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            RETURN TO ARCHIVE
          </button>
        </div>
      </div>
    </div>
  );
};