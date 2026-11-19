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
      className="fixed inset-0 z-50 bg-[#09090b]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto font-mono"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#121215] border border-[#242429] max-w-md w-full p-6 sm:p-8 flex flex-col gap-5 shadow-2xl animate-fade-in">
        <div className="flex items-center justify-between border-b border-[#242429] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#18181c] border border-[#242429] text-[#c9a96e] flex items-center justify-center">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[12px] font-bold text-[#f4f4f6] uppercase tracking-wider block">
                ALLOCATION RESTOCK NOTIFICATION
              </span>
              <span className="text-[9px] text-[#c9a96e]">
                PRIVATE ATELIER DISPATCH SYSTEM
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

        {isSubmitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-[#c9a96e] mx-auto" />
            <h4 className="text-sm font-bold uppercase text-[#f4f4f6]">
              PRIORITY NOTIFICATION SCHEDULED
            </h4>
            <p className="text-xs text-[#8e8e98] max-w-xs mx-auto leading-relaxed">
              We will send an immediate dispatch alert to <strong className="text-[#f4f4f6]">{contact}</strong> as soon as {productName} {size ? `(Size ${size})` : ''} restocks in the vault.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-[11px]">
            <div className="bg-[#18181c] border border-[#242429] p-4 space-y-1.5">
              <div className="text-[10px] text-[#c9a96e] font-bold uppercase">
                TARGET SPECIMEN
              </div>
              <div className="font-bold text-sm text-[#f4f4f6] uppercase">{productName}</div>
              <div className="text-[10px] text-[#8e8e98]">
                {color && <span>COLOR: {color} • </span>}
                {size ? (
                  <span className="font-bold text-[#ef4444]">
                    SIZE {size} — CURRENTLY OUT OF STOCK
                  </span>
                ) : (
                  <span>UPCOMING VAULT RELEASE</span>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[#f4f4f6] font-bold uppercase block">
                ENTER EMAIL OR MOBILE NUMBER:
              </label>
              <input
                type="text"
                required
                placeholder="email@domain.com or +1 (555) 000-0000"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full bg-[#18181c] border border-[#242429] px-3.5 py-2.5 text-[#f4f4f6] focus:outline-none focus:border-[#c9a96e]"
              />
              <p className="text-[10px] text-[#8e8e98]">
                You will receive a single private notification when vault inventory is unlocked.
              </p>
            </div>

            <div className="flex gap-3 pt-3 border-t border-[#242429]">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 py-2.5 border border-[#242429] text-[#8e8e98] hover:text-[#f4f4f6] hover:border-[#3a3a42] uppercase tracking-wider font-bold transition-colors cursor-pointer"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="w-1/2 py-2.5 bg-[#f4f4f6] text-[#09090b] font-bold uppercase tracking-wider hover:bg-[#c9a96e] transition-colors cursor-pointer"
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