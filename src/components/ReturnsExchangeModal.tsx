import React, { useState } from 'react';
import { X, RotateCcw, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { Order, OrderItem, ExchangeReturnRequest } from '../types';

interface ReturnsExchangeModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: Order | null;
  onSubmitRequest: (req: ExchangeReturnRequest) => void | Promise<void>;
}

const EXCHANGE_REASONS = [
  'Size too small (need larger size)',
  'Size too large (need smaller size)',
  'Instep / width too narrow',
  'Prefer different silhouette fit',
  'Manufacturing stasis imperfection',
  'Changed mind / standard return',
];

const AVAILABLE_SIZES = ['6', '7', '8', '9', '10', '11', '12'];

export const ReturnsExchangeModal: React.FC<ReturnsExchangeModalProps> = ({
  isOpen,
  onClose,
  order,
  onSubmitRequest,
}) => {
  const [requestType, setRequestType] = useState<'EXCHANGE' | 'RETURN'>('EXCHANGE');
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [reason, setReason] = useState(EXCHANGE_REASONS[0]);
  const [requestedSize, setRequestedSize] = useState('9');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  if (!isOpen || !order) return null;

  const targetItem: OrderItem = order.items[selectedItemIndex] || order.items[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetItem) return;

    const newRequest: ExchangeReturnRequest = {
      id: `EX-${Date.now().toString().slice(-4)}`,
      orderId: order.id,
      type: requestType,
      productId: targetItem.productId,
      productName: targetItem.name,
      productImage: targetItem.image,
      currentSize: targetItem.size,
      requestedSize: requestType === 'EXCHANGE' ? requestedSize : undefined,
      reason: `${reason}${notes ? ` — ${notes}` : ''}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending',
      adminNotes: 'Submitted by client. Awaiting atelier inspection authorization.',
    };

    setIsSubmitting(true);
    setSubmissionError(null);
    try {
      await onSubmitRequest(newRequest);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2800);
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : 'Request could not be saved');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1a1816]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto font-mono"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#f5efe6] border border-[#d5cdc0] max-w-xl w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#d5cdc0] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#141312] text-[#f5efe6] flex items-center justify-center">
              <RotateCcw className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[12px] font-bold text-[#1a1816] uppercase tracking-wider block">
                RETURNS & SIZE EXCHANGE PROTOCOL
              </span>
              <span className="text-[9px] text-[#7b6e54]">
                ORDER #{order.id} // COMPLIMENTARY REPLACEMENT
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

        {isSuccess ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-[#1a1816] mx-auto" />
            <h4 className="text-base font-bold uppercase text-[#1a1816]">
              {requestType} PROTOCOL INITIALIZED
            </h4>
            <p className="text-xs text-[#59544c] max-w-sm mx-auto leading-relaxed">
              Your request for <strong className="text-[#1a1816]">{targetItem.name}</strong>{' '}
              {requestType === 'EXCHANGE' ? `(Size ${targetItem.size} → Size ${requestedSize})` : ''} has been logged in the archive console. An armored courier pickup has been scheduled.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-xs">
            {submissionError && <p role="alert" className="text-red-700">{submissionError}</p>}
            {/* Request Type Toggle */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRequestType('EXCHANGE')}
                className={`py-2.5 px-3 font-bold uppercase tracking-wider border transition-colors cursor-pointer text-center ${
                  requestType === 'EXCHANGE'
                    ? 'bg-[#141312] text-[#f5efe6] border-[#141312]'
                    : 'bg-[#ede7dd] text-[#59544c] border-[#d5cdc0]'
                }`}
              >
                SIZE EXCHANGE (RECOMMENDED)
              </button>
              <button
                type="button"
                onClick={() => setRequestType('RETURN')}
                className={`py-2.5 px-3 font-bold uppercase tracking-wider border transition-colors cursor-pointer text-center ${
                  requestType === 'RETURN'
                    ? 'bg-[#141312] text-[#f5efe6] border-[#141312]'
                    : 'bg-[#ede7dd] text-[#59544c] border-[#d5cdc0]'
                }`}
              >
                RETURN FOR REFUND
              </button>
            </div>

            {/* Target Specimen Selector */}
            <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 space-y-2">
              <span className="text-[10px] text-[#7b6e54] font-bold uppercase block">
                SELECT ITEM FROM ORDER:
              </span>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#f5efe6] border border-[#d5cdc0] overflow-hidden flex-shrink-0">
                  <img src={targetItem.image} alt={targetItem.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-xs uppercase text-[#1a1816]">{targetItem.name}</div>
                  <div className="text-[10px] text-[#59544c]">
                    Current Size: <strong className="text-[#1a1816]">US {targetItem.size}</strong> • Color: {targetItem.color}
                  </div>
                </div>
              </div>
            </div>

            {/* If Exchange: Select New Desired Size */}
            {requestType === 'EXCHANGE' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-bold text-[#1a1816] uppercase block">
                    EXCHANGE TO NEW SIZE:
                  </label>
                  <span className="text-[10px] text-[#7b6e54]">
                    Current: US {targetItem.size}
                  </span>
                </div>
                <div className="grid grid-cols-7 gap-1.5">
                  {AVAILABLE_SIZES.map((sz) => {
                    const isCurrent = sz === targetItem.size;
                    const isSelected = sz === requestedSize;
                    return (
                      <button
                        type="button"
                        key={sz}
                        disabled={isCurrent}
                        onClick={() => setRequestedSize(sz)}
                        className={`py-2 text-xs font-bold border transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#141312] text-[#f5efe6] border-[#141312]'
                            : isCurrent
                            ? 'bg-[#ded6c9] text-[#8e8474] opacity-50 cursor-not-allowed border-[#d5cdc0]'
                            : 'bg-[#ede7dd] text-[#1a1816] border-[#d5cdc0] hover:border-[#1a1816]'
                        }`}
                      >
                        US {sz}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Select Reason */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-[#1a1816] uppercase block">
                PRIMARY REASON FOR {requestType}:
              </label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full bg-[#ede7dd] border border-[#d5cdc0] px-3 py-2 text-[#1a1816] focus:outline-none cursor-pointer"
              >
                {EXCHANGE_REASONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {/* Additional Details */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-[#1a1816] uppercase block">
                ADDITIONAL ATELIER NOTES (OPTIONAL):
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Describe your fit feedback or pickup address instructions..."
                className="w-full bg-[#ede7dd] border border-[#d5cdc0] px-3 py-2 text-[#1a1816] focus:outline-none"
              />
            </div>

            {/* Pickup policy note */}
            <div className="p-3 bg-[#ede7dd] border border-[#d5cdc0] text-[10px] text-[#59544c] space-y-1">
              <div className="font-bold text-[#1a1816] uppercase">PICKUP & REPLACEMENT POLICY:</div>
              <div>• Free courier pickup from your delivery destination within 48 hours.</div>
              <div>• Replacement specimen dispatches immediately upon verification.</div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3 pt-2 border-t border-[#d5cdc0]">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 py-2.5 border border-[#d5cdc0] text-[#59544c] hover:bg-[#ede7dd] uppercase tracking-wider font-bold transition-colors cursor-pointer"
              >
                CANCEL
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-1/2 py-2.5 bg-[#141312] text-[#f5efe6] font-bold uppercase tracking-wider hover:bg-[#35322e] transition-colors cursor-pointer"
              >
                {isSubmitting ? 'SAVING REQUEST...' : 'SUBMIT REQUEST'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
