import React, { useState } from 'react';
import { X, Bell, CheckCircle2 } from 'lucide-react';

interface NotifyMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  size?: string;
  color?: string;
  onSubmitNotification: (contact: string, productName: string, size?: string) => void;
}

export const NotifyMeModal: React.FC<NotifyMeModalProps> = ({
  isOpen,
  onClose,
  productName,
  size,
  color,
  onSubmitNotification,
}) => {
  const [contact, setContact] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) return;
    onSubmitNotification(contact.trim(), productName, size);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1a1816]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto font-mono"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#f5efe6] border border-[#d5cdc0] max-w-md w-full p-6 sm:p-8 flex flex-col gap-5 shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#d5cdc0] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#141312] text-[#f5efe6] flex items-center justify-center">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[12px] font-bold text-[#1a1816] uppercase tracking-wider block">
                ALLOCATION RESTOCK NOTIFICATION
              </span>
              <span className="text-[9px] text-[#7b6e54]">
                PRIVATE ATELIER DISPATCH SYSTEM
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#59544c] hover:text-[#1a1816] p-1 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-[#1a1816] mx-auto" />
            <h4 className="text-sm font-bold uppercase text-[#1a1816]">
              PRIORITY NOTIFICATION SCHEDULED
            </h4>
            <p className="text-xs text-[#59544c] max-w-xs mx-auto leading-relaxed">
              We will send an immediate dispatch alert to <strong className="text-[#1a1816]">{contact}</strong> as soon as {productName} {size ? `(Size ${size})` : ''} restocks in the vault.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-[11px]">
            <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 space-y-1.5">
              <div className="text-[10px] text-[#7b6e54] font-bold uppercase">
                TARGET SPECIMEN
              </div>
              <div className="font-bold text-sm text-[#1a1816] uppercase">{productName}</div>
              <div className="text-[10px] text-[#59544c]">
                {color && <span>COLOR: {color} • </span>}
                {size ? (
                  <span className="font-bold text-[#b83b3b]">
                    SIZE {size} — CURRENTLY OUT OF STOCK
                  </span>
                ) : (
                  <span>UPCOMING VAULT RELEASE</span>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[#1a1816] font-bold uppercase block">
                ENTER EMAIL OR MOBILE NUMBER:
              </label>
              <input
                type="text"
                required
                placeholder="email@domain.com or +1 (555) 000-0000"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full bg-[#ede7dd] border border-[#d5cdc0] px-3.5 py-2.5 text-[#1a1816] focus:outline-none focus:border-[#1a1816]"
              />
              <p className="text-[10px] text-[#59544c]">
                You will receive a single private notification when vault inventory is unlocked.
              </p>
            </div>

            <div className="flex gap-3 pt-3 border-t border-[#d5cdc0]">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 py-2.5 border border-[#d5cdc0] text-[#59544c] hover:bg-[#ede7dd] uppercase tracking-wider font-bold transition-colors cursor-pointer"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="w-1/2 py-2.5 bg-[#141312] text-[#f5efe6] font-bold uppercase tracking-wider hover:bg-[#35322e] transition-colors cursor-pointer"
              >
                NOTIFY ME
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
