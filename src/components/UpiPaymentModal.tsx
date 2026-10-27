import React, { useEffect, useState, useRef } from 'react';
import {
  X,
  QrCode,
  Smartphone,
  ShieldCheck,
  RefreshCw,
  Copy,
  Check,
  AlertCircle,
  ExternalLink,
  Lock,
} from 'lucide-react';
import { customerApi } from '../lib/api';
import { formatCurrency } from '../lib/currency';

interface UpiPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
  displayId: string;
  amount: number;
  currency: string;
  upiPaymentUrl: string;
  qrCodeDataUrl: string;
  expiresAt: string | Date;
  onPaymentVerified: (order: Record<string, unknown>) => void;
  onShowToast: (msg: string) => void;
}

export const UpiPaymentModal: React.FC<UpiPaymentModalProps> = ({
  isOpen,
  onClose,
  orderId,
  displayId,
  amount,
  currency,
  upiPaymentUrl,
  qrCodeDataUrl,
  expiresAt,
  onPaymentVerified,
  onShowToast,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedVpa, setCopiedVpa] = useState(false);
  const [status, setStatus] = useState<'PENDING' | 'VERIFYING' | 'PAID' | 'EXPIRED' | 'FAILED'>('PENDING');
  const [upiUtr, setUpiUtr] = useState<string | null>(null);
  const [inputUtr, setInputUtr] = useState('');
  const [submittingUtr, setSubmittingUtr] = useState(false);
  const [utrError, setUtrError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60);
  const pollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Parse VPA for easy copy
  const vpaMatch = upiPaymentUrl.match(/[?&]pa=([^&]+)/);
  const payeeVpa = vpaMatch ? decodeURIComponent(vpaMatch[1]) : 'vanta.archive@icici';

  // Calculate timer
  useEffect(() => {
    if (!isOpen) return;

    const expiryTime = new Date(expiresAt).getTime();
    const updateCountdown = () => {
      const remainingSeconds = Math.max(0, Math.floor((expiryTime - Date.now()) / 1000));
      setTimeLeft(remainingSeconds);
      if (remainingSeconds <= 0 && status === 'PENDING') {
        setStatus('EXPIRED');
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [isOpen, expiresAt, status]);

  // Real-time backend status polling
  useEffect(() => {
    if (!isOpen || status === 'PAID' || status === 'EXPIRED') return;

    const checkStatus = async () => {
      try {
        const res = await customerApi.checkUpiPaymentStatus(orderId);
        if (res.paymentStatus === 'PAID') {
          setStatus('PAID');
          if (res.upiUtr) setUpiUtr(res.upiUtr);
          onShowToast('CRYPTOGRAPHIC UPI PAYMENT CONFIRMED // ALLOCATION LOCKED');
          // Allow customer to see the green checkmark before navigating
          setTimeout(() => {
            onPaymentVerified(res as unknown as Record<string, unknown>);
          }, 1500);
        } else if (res.paymentStatus === 'EXPIRED') {
          setStatus('EXPIRED');
        } else if (res.paymentStatus === 'FAILED') {
          setStatus('FAILED');
        }
      } catch (err) {
        // Polling error silently handled
      }
    };

    // Initial check and interval
    checkStatus();
    pollIntervalRef.current = setInterval(checkStatus, 2500);

    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
        pollIntervalRef.current = null;
      }
    };
  }, [isOpen, orderId, status, onPaymentVerified, onShowToast]);

  if (!isOpen) return null;

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(upiPaymentUrl);
    setCopiedLink(true);
    onShowToast('UPI PAYMENT INTENT URL COPIED TO CLIPBOARD');
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyVpa = () => {
    navigator.clipboard.writeText(payeeVpa);
    setCopiedVpa(true);
    onShowToast(`MERCHANT VPA COPIED: ${payeeVpa}`);
    setTimeout(() => setCopiedVpa(false), 2000);
  };

  const handleVerifyUtr = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputUtr.trim();
    if (!trimmed) {
      setUtrError('PLEASE ENTER THE 12-DIGIT UPI REFERENCE / UTR');
      return;
    }
    setSubmittingUtr(true);
    setUtrError(null);
    try {
      const res = await customerApi.submitUpiUtr(orderId, trimmed);
      setStatus('PAID');
      setUpiUtr(res.upiUtr);
      onShowToast('BANK UTR VERIFIED // ORDER CONFIRMED');
      setTimeout(() => {
        onPaymentVerified(res as unknown as Record<string, unknown>);
      }, 1500);
    } catch (err: any) {
      setUtrError(err.message || 'Verification failed. Please check the UTR.');
    } finally {
      setSubmittingUtr(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1a1816]/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#f5efe6] border border-[#d5cdc0] max-w-lg w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl relative">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#d5cdc0] pb-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#1a1816] animate-pulse"></span>
              <span className="font-mono text-[10px] font-bold text-[#7b6e54] uppercase tracking-widest">
                ARCHIVE SETTLEMENT ENCLAVE
              </span>
            </div>
            <h2 className="font-headline text-lg sm:text-xl font-bold text-[#1a1816] tracking-tight">
              UPI DIRECT DISPATCH PROTOCOL
            </h2>
            <span className="font-mono text-[11px] text-[#59544c]">
              ORDER REF: {displayId}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 hover:bg-[#ede7dd] text-[#59544c] hover:text-[#1a1816] transition-colors cursor-pointer"
            aria-label="Cancel and close payment"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {status === 'PAID' ? (
          <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-[#16a34a]/10 border-2 border-[#16a34a] flex items-center justify-center text-[#16a34a]">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-headline text-xl font-bold text-[#1a1816]">
                PAYMENT CRYPTOGRAPHICALLY VERIFIED
              </span>
              <span className="font-mono text-xs text-[#59544c]">
                Vault allocation secured for Order {displayId}
              </span>
              {upiUtr && (
                <div className="mt-2 bg-[#ede7dd] border border-[#d5cdc0] px-3 py-1.5 font-mono text-[11px] text-[#1a1816]">
                  BANK UTR / RRN: <span className="font-bold">{upiUtr}</span>
                </div>
              )}
            </div>
            <p className="font-mono text-[10px] text-[#7b6e54] uppercase tracking-wider animate-pulse">
              FINALIZING ORDER &amp; INVENTORY SYNC...
            </p>
          </div>
        ) : status === 'EXPIRED' ? (
          <div className="flex flex-col items-center justify-center py-6 gap-4 text-center">
            <div className="w-12 h-12 rounded-full bg-red-100 border border-red-500 flex items-center justify-center text-red-700">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-sm font-bold text-[#1a1816] uppercase">
                UPI QR SESSION EXPIRED
              </span>
              <p className="font-mono text-xs text-[#59544c] max-w-sm">
                The 15-minute dynamic cryptographic payment window for this session has elapsed. Your cart remains intact.
              </p>
            </div>
            <button
              onClick={onClose}
              className="py-2.5 px-6 bg-[#1a1816] text-[#f5efe6] font-mono text-xs uppercase font-bold hover:bg-[#35322e] transition-colors cursor-pointer"
            >
              RETURN TO CHECKOUT &amp; RETRY
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {/* Amount Banner */}
            <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex justify-between items-center">
              <div>
                <span className="font-mono text-[10px] text-[#7b6e54] uppercase font-bold tracking-wider block">
                  AMOUNT PAYABLE
                </span>
                <span className="font-mono text-[11px] text-[#59544c]">
                  NPCI 0% MDR // ZERO SURCHARGE
                </span>
              </div>
              <span className="font-headline text-2xl font-bold text-[#1a1816]">
                {formatCurrency(amount, currency)}
              </span>
            </div>

            {/* QR Code Presentation */}
            <div className="flex flex-col items-center justify-center gap-3 bg-[#ede7dd] border border-[#d5cdc0] p-5 shadow-inner">
              <div className="bg-white p-3 border border-[#d5cdc0] shadow-sm relative">
                <img
                  src={qrCodeDataUrl}
                  alt={`UPI QR Code for ${displayId}`}
                  className="w-56 h-56 object-contain"
                />
              </div>

              {/* Status and Countdown Timer */}
              <div className="flex items-center justify-between w-full font-mono text-[11px] pt-1">
                <div className="flex items-center gap-2 text-[#7b6e54]">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#1a1816]" />
                  <span className="font-bold text-[#1a1816] uppercase tracking-wide">
                    LISTENING FOR SETTLEMENT...
                  </span>
                </div>
                <div className="flex items-center gap-1 font-bold text-[#1a1816] bg-[#ded6c9] px-2 py-0.5">
                  <span>EXPIRES IN:</span>
                  <span className={timeLeft < 180 ? 'text-red-700 font-bold' : ''}>
                    {formatTimer(timeLeft)}
                  </span>
                </div>
              </div>

              <p className="font-mono text-[10px] text-[#59544c] text-center max-w-xs mt-1">
                Scan with Google Pay, PhonePe, Paytm, BHIM, Cred, or any BHIM UPI mobile application.
              </p>
            </div>

            {/* Mobile / Direct Intent Buttons */}
            <div className="flex flex-col gap-2">
              <a
                href={upiPaymentUrl}
                className="w-full py-3.5 bg-[#1a1816] text-[#ede7dd] font-mono text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#35322e] transition-colors cursor-pointer"
              >
                <Smartphone className="w-4 h-4" />
                <span>TAP TO PAY VIA UPI APP (MOBILE)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleCopyVpa}
                  className="py-2.5 px-3 bg-[#ede7dd] border border-[#d5cdc0] text-[#1a1816] hover:bg-[#ded6c9] font-mono text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedVpa ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedVpa ? 'COPIED VPA' : 'COPY UPI ID'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="py-2.5 px-3 bg-[#ede7dd] border border-[#d5cdc0] text-[#1a1816] hover:bg-[#ded6c9] font-mono text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'COPIED LINK' : 'COPY UPI INTENT'}</span>
                </button>
              </div>
            </div>

            {/* UPI PG Direct Settlement - UTR Verification Input */}
            <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-[#1a1816] uppercase tracking-wider">
                  ALREADY PAID VIA UPI APP?
                </span>
                <span className="font-mono text-[9px] text-[#7b6e54] uppercase tracking-wide">
                  DIRECT VERIFICATION
                </span>
              </div>
              <p className="font-mono text-[10px] text-[#59544c] leading-relaxed">
                Enter the 12-digit UPI Reference / UTR Number from your Google Pay, PhonePe, or Paytm receipt to instantly lock allocation:
              </p>
              <form onSubmit={handleVerifyUtr} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="e.g. 428901234567"
                  value={inputUtr}
                  onChange={(e) => {
                    setInputUtr(e.target.value.toUpperCase());
                    if (utrError) setUtrError(null);
                  }}
                  maxLength={22}
                  className="flex-1 bg-white border border-[#d5cdc0] px-3 py-2 font-mono text-xs text-[#1a1816] uppercase placeholder:normal-case placeholder:text-neutral-400 focus:outline-none focus:border-[#1a1816]"
                />
                <button
                  type="submit"
                  disabled={submittingUtr || !inputUtr.trim()}
                  className="py-2 px-4 bg-[#1a1816] text-[#ede7dd] font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-[#35322e] disabled:opacity-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  {submittingUtr ? (
                    <>
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      <span>VERIFYING...</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-3 h-3 text-[#16a34a]" />
                      <span>CONFIRM UTR</span>
                    </>
                  )}
                </button>
              </form>
              {utrError && (
                <span className="font-mono text-[10px] text-red-600 block">
                  {utrError}
                </span>
              )}
            </div>

            {/* Security Guarantee */}
            <div className="flex items-center gap-2.5 bg-[#e4ddcf] border border-[#d5cdc0] p-3 text-[10px] font-mono text-[#59544c]">
              <Lock className="w-4 h-4 text-[#7b6e54] shrink-0" />
              <span>
                256-bit cryptographically verified. Order confirmation triggers automatically upon bank settlement.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
