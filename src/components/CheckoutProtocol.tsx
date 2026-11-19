import React, { useEffect, useState } from 'react';
import {
  ShieldCheck,
  CreditCard,
  Banknote,
  Lock,
  ArrowRight,
  Plus,
  Phone,
  RefreshCw,
  Truck,
  QrCode,
} from 'lucide-react';
import { Address, PaymentMethod } from '../types';
import { CHECKOUT_STEPS } from '../data/mockData';
import { formatCurrency } from '../lib/currency';
import { authApi, customerApi } from '../lib/api';

interface PaymentQuote {
  currency: string;
  exchangeRate: number;
  amount: number;
  baseAmount: number;
}

interface DeliveryEstimate {
  minDays: number;
  maxDays: number;
  minDate: string;
  maxDate: string;
  zone: string;
}

interface CheckoutProtocolProps {
  addresses: Address[];
  selectedAddressId: string;
  onSelectAddress: (id: string) => void;
  onOpenNewAddressModal: () => void;
  subtotal: number;
  onPlaceOrder: (paymentMethod: PaymentMethod) => void;
  isOrderSubmitting: boolean;
}

export const CheckoutProtocol: React.FC<CheckoutProtocolProps> = ({
  addresses,
  selectedAddressId,
  onSelectAddress,
  onOpenNewAddressModal,
  subtotal,
  onPlaceOrder,
  isOrderSubmitting,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(2);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('UPI');
  const [paymentQuote, setPaymentQuote] = useState<PaymentQuote | null>(null);
  const [quoteError, setQuoteError] = useState<string | null>(null);
  const [isQuoteLoading, setIsQuoteLoading] = useState(false);
  const [deliveryEstimate, setDeliveryEstimate] = useState<DeliveryEstimate | null>(null);
  const [isDeliveryLoading, setIsDeliveryLoading] = useState(false);
  const [deliveryError, setDeliveryError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    if (!selectedAddressId || subtotal <= 0 || !authApi.hasSession()) {
      setPaymentQuote(null);
      setQuoteError(null);
      setIsQuoteLoading(false);
      return () => { active = false; };
    }

    setPaymentQuote(null);
    setQuoteError(null);
    setIsQuoteLoading(true);
    customerApi.paymentQuote(selectedAddressId)
      .then((quote) => {
        if (active) setPaymentQuote(quote);
      })
      .catch((error: unknown) => {
        if (active) setQuoteError(error instanceof Error ? error.message : 'Could not quote the local currency');
      })
      .finally(() => {
        if (active) setIsQuoteLoading(false);
      });

    return () => { active = false; };
  }, [selectedAddressId, subtotal]);

  useEffect(() => {
    if (paymentQuote && paymentQuote.currency !== 'INR' && paymentMethod === 'COD') {
      setPaymentMethod('UPI');
    }
  }, [paymentQuote, paymentMethod]);

  // Fetch delivery estimate whenever address changes
  useEffect(() => {
    let active = true;
    const addr = addresses.find((a) => a.id === selectedAddressId);
    if (!addr) {
      setDeliveryEstimate(null);
      setDeliveryError(null);
      return () => { active = false; };
    }
    setDeliveryEstimate(null);
    setDeliveryError(null);
    setIsDeliveryLoading(true);
    customerApi.deliveryEstimate({
      city: addr.city,
      state: addr.state,
      postalCode: addr.postalCode,
      country: addr.country,
    })
      .then((est) => { if (active) setDeliveryEstimate(est); })
      .catch((err: unknown) => { if (active) setDeliveryError(err instanceof Error ? err.message : 'Could not estimate delivery'); })
      .finally(() => { if (active) setIsDeliveryLoading(false); });
    return () => { active = false; };
  }, [selectedAddressId, addresses]);

  // Financial calculations
  const currency = paymentQuote?.currency ?? 'INR';
  const exchangeRate = paymentQuote?.exchangeRate ?? 1;
  const displayedSubtotal = (paymentQuote?.baseAmount ?? subtotal) * exchangeRate;
  const totalSettlement = paymentQuote?.amount ?? displayedSubtotal;

  const currentStepObj =
    CHECKOUT_STEPS.find((s) => s.id === currentStep) || CHECKOUT_STEPS[1];

  return (
    <section className="flex flex-col gap-6" id="checkout-protocol-section">
      {/* Primary Checkout Protocol Container */}
      <div className="bg-[#121215] border border-[#242429] p-6 md:p-8 flex flex-col gap-8 shadow-2xl">
        {/* Stepper Index Header */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="font-mono text-[11px] font-bold text-[#c9a96e] uppercase tracking-wider">
              CHECKOUT PROTOCOL
            </span>
            <span className="font-mono text-[10px] text-[#f4f4f6] tracking-widest font-bold">
              STEP 0{currentStep} OF 05
            </span>
          </div>

          {/* Stepper Progress Segments */}
          <div className="grid grid-cols-5 gap-1.5 w-full h-1 bg-[#18181c]">
            {CHECKOUT_STEPS.map((step) => {
              const isPassedOrActive = step.id <= currentStep;
              return (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(step.id)}
                  className={`h-full transition-all duration-300 cursor-pointer ${
                    isPassedOrActive ? 'bg-[#f4f4f6]' : 'bg-[#18181c] hover:bg-[#242429]'
                  }`}
                  aria-label={`Go to step ${step.id}: ${step.label}`}
                  title={`Step ${step.id}: ${step.label}`}
                />
              );
            })}
          </div>

          {/* Stepper Labels */}
          <div className="flex justify-between font-mono text-[9px] uppercase tracking-wider text-[#8e8e98] pt-1 select-none">
            {CHECKOUT_STEPS.map((step) => {
              const isActive = step.id === currentStep;
              const isPast = step.id < currentStep;
              return (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(step.id)}
                  className={`cursor-pointer transition-colors text-left ${
                    isActive
                      ? 'text-[#f4f4f6] font-bold underline underline-offset-2'
                      : isPast
                      ? 'text-[#c9a96e]'
                      : 'text-[#52525b] hover:text-[#8e8e98]'
                  }`}
                >
                  {step.id}. {step.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Indicator */}
        <div className="bg-[#18181c] border border-[#242429] p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#c9a96e]"></span>
            <span className="font-mono text-[11px] font-bold text-[#f4f4f6] uppercase tracking-wider">
              {currentStepObj.fullLabel}
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#c9a96e] font-bold uppercase tracking-widest">
            SECURE SESSION
          </span>
        </div>

        {/* STEP 1: AUTH (if navigated to) */}
        {currentStep === 1 && (
          <div className="bg-[#18181c] border border-[#242429] p-5 flex flex-col gap-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[#8e8e98] uppercase">VERIFIED IDENTITY</span>
              <span className="text-[#f4f4f6] font-bold">CLIENT SESSION</span>
            </div>
            <div className="text-[#f4f4f6]">ARCHIVE VIP PRIVILEGE LEVEL: ALPHA</div>
            <p className="text-[#8e8e98] text-[11px]">
              Session token verified via dual biometric vault authentication.
            </p>
            <button
              onClick={() => setCurrentStep(2)}
              className="mt-2 py-2.5 bg-[#121215] border border-[#242429] text-[#f4f4f6] hover:border-[#8e8e98] text-[10px] font-bold uppercase tracking-widest cursor-pointer transition-colors"
            >
              PROCEED TO DISPATCH LOCATION →
            </button>
          </div>
        )}

        {/* STEP 2: DISPATCH LOCATION */}
        <div className="flex flex-col gap-4" id="address-selection-block">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#c9a96e] uppercase tracking-[0.14em] font-bold">
              SELECT REGISTERED DESTINATION
            </span>
            <span className="font-mono text-[9px] text-[#8e8e98]">
              {addresses.length} VAULTS REGISTERED
            </span>
          </div>

          {/* Registered Address Radios */}
          <div className="flex flex-col gap-3">
            {addresses.map((addr) => {
              const isSelected = selectedAddressId === addr.id;
              return (
                <label
                  key={addr.id}
                  onClick={() => onSelectAddress(addr.id)}
                  className={`cursor-pointer p-4 flex items-start gap-4 transition-all duration-200 border ${
                    isSelected
                      ? 'bg-[#1e1e24] border-[#f4f4f6] shadow-md'
                      : 'bg-[#18181c] border-[#242429] hover:bg-[#1e1e24] hover:border-[#3a3a42]'
                  }`}
                >
                  <input
                    type="radio"
                    name="address_selection"
                    checked={isSelected}
                    onChange={() => onSelectAddress(addr.id)}
                    className="mt-1 accent-[#c9a96e] cursor-pointer"
                  />
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full">
                      <span className="font-mono text-[11px] font-bold text-[#f4f4f6] uppercase tracking-wider">
                        {addr.name}
                      </span>
                      {addr.isPrimary && (
                        <span className="font-mono text-[9px] font-bold bg-[#c9a96e] text-[#09090b] px-1.5 py-0.5 tracking-widest">
                          PRIMARY
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-[12px] leading-5 text-[#8e8e98] mt-2">
                      {addr.line1}
                      {addr.line2 && (
                        <>
                          <br />
                          {addr.line2}
                        </>
                      )}
                      <br />
                      {addr.city}, {addr.state ? `${addr.state} ` : ''}
                      {addr.postalCode}, {addr.country}
                    </p>
                    {addr.phone && (
                      <div className="flex items-center gap-2 mt-3 font-mono text-[10px] text-[#c9a96e]">
                        <Phone className="w-3 h-3" />
                        <span>{addr.phone}</span>
                      </div>
                    )}
                  </div>
                </label>
              );
            })}
          </div>

          {/* Enter New Address Trigger */}
          <button
            type="button"
            onClick={onOpenNewAddressModal}
            className="flex items-center justify-center gap-2 py-3 bg-[#18181c] border border-[#242429] text-[#f4f4f6] hover:bg-[#1e1e24] hover:border-[#8e8e98] transition-colors font-mono text-[11px] font-bold uppercase tracking-wider cursor-pointer"
          >
            <Plus className="w-4 h-4 text-[#c9a96e]" />
            ENTER NEW DISPATCH DESTINATION
          </button>

          {/* Delivery Estimate Banner */}
          {isDeliveryLoading && (
            <div className="bg-[#18181c] border border-[#242429] p-3 flex items-center gap-3 font-mono text-[10px] text-[#8e8e98]">
              <Truck className="w-4 h-4 text-[#c9a96e] shrink-0 animate-pulse" />
              <span>ESTIMATING DELIVERY...</span>
            </div>
          )}
          {deliveryError && (
            <div className="bg-[#18181c] border border-red-900/50 p-3 font-mono text-[10px] text-red-400" role="alert">
              ⚠ {deliveryError}
            </div>
          )}
          {deliveryEstimate && !isDeliveryLoading && (
            <div className="bg-[#18181c] border border-[#3a3a42] p-3 flex items-start gap-3">
              <Truck className="w-4 h-4 text-[#c9a96e] shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[9px] font-bold text-[#c9a96e] uppercase tracking-widest">ESTIMATED ARRIVAL</span>
                <span className="font-mono text-[12px] font-bold text-[#f4f4f6]">
                  {new Date(deliveryEstimate.minDate).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}
                  {' – '}
                  {new Date(deliveryEstimate.maxDate).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
                  {' '}
                  <span className="font-normal text-[#8e8e98]">({deliveryEstimate.minDays}–{deliveryEstimate.maxDays} business days)</span>
                </span>
                {addresses.find((a) => a.id === selectedAddressId) && (() => {
                  const addr = addresses.find((a) => a.id === selectedAddressId)!;
                  return (
                    <span className="font-mono text-[10px] text-[#8e8e98]">
                      Delivering to {addr.city}{addr.state ? `, ${addr.state}` : ''} {addr.postalCode}
                    </span>
                  );
                })()}
              </div>
            </div>
          )}
          {!deliveryEstimate && !isDeliveryLoading && !deliveryError && (
            <div className="bg-[#18181c] border border-[#242429] p-3 flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-[#c9a96e] shrink-0" />
              <span className="font-mono text-[10px] leading-tight text-[#8e8e98]">
                Select a delivery address to see estimated arrival.
              </span>
            </div>
          )}
        </div>

        {/* STEP 3 & 4: SETTLEMENT METHOD SELECTOR */}
        <div className="flex flex-col gap-3" id="settlement-methods-block">
          <span className="font-mono text-[10px] text-[#c9a96e] uppercase tracking-[0.14em] font-bold">
            SETTLEMENT METHOD
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'UPI' as const, label: 'UPI (QR / APP)', detail: 'GPAY, PHONEPE, PAYTM, BHIM', icon: QrCode },
              { id: 'COD' as const, label: 'CASH ON DELIVERY', detail: 'INDIA ONLY', icon: Banknote },
            ].map((method) => {
              const isActive = paymentMethod === method.id;
              const isUnavailable = method.id === 'COD' && currency !== 'INR';
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  type="button"
                  disabled={isUnavailable}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`p-3 border flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#f4f4f6] border-[#f4f4f6] text-[#09090b]'
                      : 'bg-[#18181c] border-[#242429] hover:bg-[#1e1e24] text-[#8e8e98] hover:text-[#f4f4f6]'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? 'text-[#09090b]' : 'text-[#8e8e98]'
                    }`}
                  />
                  <span
                    className={`font-mono text-[10px] uppercase font-bold tracking-wider ${
                      isActive ? 'text-[#09090b]' : 'text-[#f4f4f6]'
                    }`}
                  >
                    {method.label}
                  </span>
                  <span className={`font-mono text-[8px] tracking-wide ${
                    isActive ? 'text-[#09090b]' : 'text-[#52525b]'
                  }`}>
                    {method.detail}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-[#18181c] border border-[#242429] p-4 flex flex-col gap-2 font-mono text-xs">
          <span className="text-[#c9a96e] text-[10px] uppercase font-bold">
            {paymentMethod === 'UPI' ? 'GENUINE UPI DIRECT DISPATCH // NPCI 0% MDR' : 'CASH ON DELIVERY'}
          </span>
          <p className="text-[#8e8e98] text-[11px]">
            {paymentMethod === 'UPI'
              ? 'Scan dynamic UPI QR or authorize via Google Pay, PhonePe, Paytm, or BHIM UPI. Payments are cryptographically verified by the server.'
              : 'Pay the delivery agent when your order arrives.'}
          </p>
        </div>

        {/* FINANCIAL LEDGER / COST BREAKDOWN */}
        <div
          id="financial-ledger-breakdown"
          className="bg-[#18181c] border border-[#242429] p-5 flex flex-col gap-3 font-mono text-[11px]"
        >
          <div className="flex justify-between text-[#8e8e98]">
            <span className="tracking-wider">MERCHANDISE SUB-TOTAL</span>
            <span className="text-[#f4f4f6] font-bold">
              {formatCurrency(displayedSubtotal, currency)}
            </span>
          </div>
          <div className="flex justify-between text-[#8e8e98]">
            <span className="tracking-wider">PRIORITY ARMORED FREIGHT</span>
            <span className="text-[#c9a96e] font-bold">COMPLIMENTARY ({formatCurrency(0, currency)})</span>
          </div>
          <div className="flex justify-between text-[#8e8e98]">
            <span className="tracking-wider">PRODUCT TAX</span>
            <span className="text-[#f4f4f6]">INCLUDED IN LISTED PRICES</span>
          </div>
          <div className="flex justify-between text-[#8e8e98]">
            <span className="tracking-wider">IMPORT DUTIES</span>
            <span className="text-[#f4f4f6]">MAY BE DUE AT DESTINATION</span>
          </div>

          {/* Total Settlement Box */}
          <div className="pt-4 mt-2 bg-[#121215] border border-[#3a3a42] p-4 flex justify-between items-center">
            <div>
              <span className="font-mono text-[11px] font-bold text-[#f4f4f6] uppercase block tracking-wider">
                TOTAL SETTLEMENT
              </span>
              <span className="font-mono text-[9px] text-[#8e8e98] tracking-wider">
                TAX INCLUDED // IMPORT DUTIES MAY APPLY
              </span>
            </div>
            <span
              id="total-settlement-price"
              className="font-headline text-[24px] md:text-[28px] text-[#f4f4f6] font-bold tracking-tight"
            >
              {formatCurrency(totalSettlement, currency)}
            </span>
          </div>
          {isQuoteLoading && (
            <p className="text-[10px] text-[#8e8e98]" role="status">LOADING COUNTRY CURRENCY QUOTE...</p>
          )}
          {quoteError && (
            <p className="text-[10px] text-red-400" role="alert">{quoteError}</p>
          )}
          {paymentQuote && currency !== 'INR' && (
            <p className="text-[10px] text-[#8e8e98]">
              Indicative exchange rate: 1 INR = {exchangeRate.toPrecision(5)} {currency}. Final amount is fixed when the order is created.
            </p>
          )}
          {paymentQuote && currency === 'INR' && (
            <p className="text-[10px] text-[#8e8e98]">India shipping address // tax included in listed product prices.</p>
          )}
        </div>

        {/* Primary High-Contrast Call to Action */}
        <div className="flex flex-col gap-3">
          <button
            type="button"
            id="submit-order-btn"
            disabled={isOrderSubmitting || subtotal <= 0 || (authApi.hasSession() && (!paymentQuote || isQuoteLoading || Boolean(quoteError)))}
            onClick={() => onPlaceOrder(paymentMethod)}
            className="w-full py-5 bg-[#f4f4f6] text-[#09090b] font-mono text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#c9a96e] transition-all flex items-center justify-center gap-3 shadow-lg active:scale-[0.99] cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {isOrderSubmitting ? (
              <span className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin" />
                CRYPTOGRAPHIC ENCRYPTION IN PROGRESS...
              </span>
            ) : (
              <>
                <span>AUTHORIZE &amp; PLACE ORDER</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 text-center font-mono text-[10px] text-[#8e8e98] tracking-wider">
            <Lock className="w-3.5 h-3.5 text-[#c9a96e]" />
            <span>TOKENIZED CRYPTOGRAPHIC PAYMENT CONFIRMATION</span>
          </div>
        </div>
      </div>

      {/* Return Guarantee Module */}
      <div
        id="return-guarantee-module"
        className="bg-[#121215] border border-[#242429] p-5 flex items-center gap-4"
      >
        <div className="w-9 h-9 bg-[#18181c] border border-[#242429] flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5 text-[#c9a96e]" />
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-[11px] font-bold text-[#f4f4f6] uppercase tracking-wider">
            CONCIERGE COMPLIMENTARY RETURN
          </span>
          <span className="font-mono text-[11px] text-[#8e8e98] mt-0.5 leading-relaxed">
            14-day archival inspection period. Courier collection arranged at your convenience.
          </span>
        </div>
      </div>
    </section>
  );
};
