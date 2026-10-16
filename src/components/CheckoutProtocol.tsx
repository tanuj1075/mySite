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
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('CARD');
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
      setPaymentMethod('CARD');
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
      <div className="bg-[#f5efe6] border border-[#d5cdc0] p-6 md:p-8 flex flex-col gap-8 shadow-sm">
        {/* Stepper Index Header */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="font-mono text-[11px] font-bold text-[#7b6e54] uppercase tracking-wider">
              CHECKOUT PROTOCOL
            </span>
            <span className="font-mono text-[10px] text-[#1a1816] tracking-widest font-bold">
              STEP 0{currentStep} OF 05
            </span>
          </div>

          {/* Stepper Progress Segments */}
          <div className="grid grid-cols-5 gap-1.5 w-full h-1 bg-[#ded6c8]">
            {CHECKOUT_STEPS.map((step) => {
              const isPassedOrActive = step.id <= currentStep;
              return (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(step.id)}
                  className={`h-full transition-all duration-300 cursor-pointer ${
                    isPassedOrActive ? 'bg-[#1a1816]' : 'bg-[#ded6c8] hover:bg-[#b8ad9c]'
                  }`}
                  aria-label={`Go to step ${step.id}: ${step.label}`}
                  title={`Step ${step.id}: ${step.label}`}
                />
              );
            })}
          </div>

          {/* Stepper Labels */}
          <div className="flex justify-between font-mono text-[9px] uppercase tracking-wider text-[#59544c] pt-1 select-none">
            {CHECKOUT_STEPS.map((step) => {
              const isActive = step.id === currentStep;
              const isPast = step.id < currentStep;
              return (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(step.id)}
                  className={`cursor-pointer transition-colors text-left ${
                    isActive
                      ? 'text-[#1a1816] font-bold underline underline-offset-2'
                      : isPast
                      ? 'text-[#1a1816]'
                      : 'text-[#8e8474] hover:text-[#59544c]'
                  }`}
                >
                  {step.id}. {step.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Indicator */}
        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#1a1816]"></span>
            <span className="font-mono text-[11px] font-bold text-[#1a1816] uppercase tracking-wider">
              {currentStepObj.fullLabel}
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#7b6e54] font-bold uppercase tracking-widest">
            SECURE SESSION
          </span>
        </div>

        {/* STEP 1: AUTH (if navigated to) */}
        {currentStep === 1 && (
          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-5 flex flex-col gap-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[#59544c] uppercase">VERIFIED IDENTITY</span>
              <span className="text-[#1a1816] font-bold">CLIENT #0084</span>
            </div>
            <div className="text-[#1a1816]">ARCHIVE VIP PRIVILEGE LEVEL: ALPHA</div>
            <p className="text-[#59544c] text-[11px]">
              Session token verified via dual biometric vault authentication.
            </p>
            <button
              onClick={() => setCurrentStep(2)}
              className="mt-2 py-2.5 bg-[#e4ddcf] border border-[#d5cdc0] text-[#1a1816] hover:bg-[#ded6c9] text-[10px] font-bold uppercase tracking-widest cursor-pointer"
            >
              PROCEED TO DISPATCH LOCATION →
            </button>
          </div>
        )}

        {/* STEP 2: DISPATCH LOCATION */}
        <div className="flex flex-col gap-4" id="address-selection-block">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#7b6e54] uppercase tracking-[0.14em] font-bold">
              SELECT REGISTERED DESTINATION
            </span>
            <span className="font-mono text-[9px] text-[#59544c]">
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
                      ? 'bg-[#ede7dd] border-[#1a1816] shadow-sm'
                      : 'bg-[#f5efe6] border-[#d5cdc0] hover:bg-[#ede7dd] hover:border-[#8e8474]'
                  }`}
                >
                  <input
                    type="radio"
                    name="address_selection"
                    checked={isSelected}
                    onChange={() => onSelectAddress(addr.id)}
                    className="mt-1 accent-[#1a1816] cursor-pointer"
                  />
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full">
                      <span className="font-mono text-[11px] font-bold text-[#1a1816] uppercase tracking-wider">
                        {addr.name}
                      </span>
                      {addr.isPrimary && (
                        <span className="font-mono text-[9px] font-bold bg-[#1a1816] text-[#ede7dd] px-1.5 py-0.5 tracking-widest">
                          PRIMARY
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-[12px] leading-5 text-[#59544c] mt-2">
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
                      <div className="flex items-center gap-2 mt-3 font-mono text-[10px] text-[#7b6e54]">
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
            className="flex items-center justify-center gap-2 py-3 bg-[#ede7dd] border border-[#d5cdc0] text-[#1a1816] hover:bg-[#ded6c9] hover:border-[#1a1816] transition-colors font-mono text-[11px] font-bold uppercase tracking-wider cursor-pointer"
          >
            <Plus className="w-4 h-4 text-[#1a1816]" />
            ENTER NEW DISPATCH DESTINATION
          </button>

          {/* Delivery Estimate Banner */}
          {isDeliveryLoading && (
            <div className="bg-[#ede7dd] border border-[#d5cdc0] p-3 flex items-center gap-3 font-mono text-[10px] text-[#59544c]">
              <Truck className="w-4 h-4 text-[#7b6e54] shrink-0 animate-pulse" />
              <span>ESTIMATING DELIVERY...</span>
            </div>
          )}
          {deliveryError && (
            <div className="bg-[#ede7dd] border border-[#d5cdc0] p-3 font-mono text-[10px] text-red-800" role="alert">
              ⚠ {deliveryError}
            </div>
          )}
          {deliveryEstimate && !isDeliveryLoading && (
            <div className="bg-[#ede7dd] border border-[#1a1816] p-3 flex items-start gap-3">
              <Truck className="w-4 h-4 text-[#1a1816] shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[9px] font-bold text-[#7b6e54] uppercase tracking-widest">ESTIMATED ARRIVAL</span>
                <span className="font-mono text-[12px] font-bold text-[#1a1816]">
                  {new Date(deliveryEstimate.minDate).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}
                  {' – '}
                  {new Date(deliveryEstimate.maxDate).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
                  {' '}
                  <span className="font-normal text-[#59544c]">({deliveryEstimate.minDays}–{deliveryEstimate.maxDays} business days)</span>
                </span>
                {addresses.find((a) => a.id === selectedAddressId) && (() => {
                  const addr = addresses.find((a) => a.id === selectedAddressId)!;
                  return (
                    <span className="font-mono text-[10px] text-[#59544c]">
                      Delivering to {addr.city}{addr.state ? `, ${addr.state}` : ''} {addr.postalCode}
                    </span>
                  );
                })()}
              </div>
            </div>
          )}
          {!deliveryEstimate && !isDeliveryLoading && !deliveryError && (
            <div className="bg-[#ede7dd] border border-[#d5cdc0] p-3 flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-[#7b6e54] shrink-0" />
              <span className="font-mono text-[10px] leading-tight text-[#1a1816]">
                Select a delivery address to see estimated arrival.
              </span>
            </div>
          )}
        </div>

        {/* STEP 3 & 4: SETTLEMENT METHOD SELECTOR */}
        <div className="flex flex-col gap-3" id="settlement-methods-block">
          <span className="font-mono text-[10px] text-[#7b6e54] uppercase tracking-[0.14em] font-bold">
            SETTLEMENT METHOD
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'CARD' as const, label: 'RAZORPAY', detail: currency === 'INR' ? 'CARD, UPI, NET BANKING' : 'INTERNATIONAL METHODS', icon: CreditCard },
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
                      ? 'bg-[#1a1816] border-[#1a1816] text-[#ede7dd]'
                      : 'bg-[#ede7dd] border-[#d5cdc0] hover:bg-[#ded6c9] text-[#59544c] hover:text-[#1a1816]'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? 'text-[#ede7dd]' : 'text-[#59544c]'
                    }`}
                  />
                  <span
                    className={`font-mono text-[10px] uppercase font-bold tracking-wider ${
                      isActive ? 'text-[#ede7dd]' : 'text-[#59544c]'
                    }`}
                  >
                    {method.label}
                  </span>
                  <span className={`font-mono text-[8px] tracking-wide ${
                    isActive ? 'text-[#ede7dd]' : 'text-[#59544c]'
                  }`}>
                    {method.detail}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex flex-col gap-2 font-mono text-xs">
          <span className="text-[#7b6e54] text-[10px] uppercase font-bold">
            {paymentMethod === 'CARD' ? 'SECURE RAZORPAY CHECKOUT' : 'CASH ON DELIVERY'}
          </span>
          <p className="text-[#1a1816] text-[11px]">
            {paymentMethod === 'CARD'
              ? currency === 'INR'
                ? 'Choose card, UPI, net banking, or supported wallets in Razorpay Checkout. Your card details are never entered or stored on this site.'
                : 'Razorpay Checkout will show international payment methods enabled for your account and currency. Your card details are never entered or stored on this site.'
              : 'Pay the delivery agent when your order arrives.'}
          </p>
        </div>

        {/* FINANCIAL LEDGER / COST BREAKDOWN */}
        <div
          id="financial-ledger-breakdown"
          className="bg-[#ede7dd] border border-[#d5cdc0] p-5 flex flex-col gap-3 font-mono text-[11px]"
        >
          <div className="flex justify-between text-[#59544c]">
            <span className="tracking-wider">MERCHANDISE SUB-TOTAL</span>
            <span className="text-[#1a1816] font-bold">
              {formatCurrency(displayedSubtotal, currency)}
            </span>
          </div>
          <div className="flex justify-between text-[#59544c]">
            <span className="tracking-wider">PRIORITY ARMORED FREIGHT</span>
            <span className="text-[#7b6e54] font-bold">COMPLIMENTARY ({formatCurrency(0, currency)})</span>
          </div>
          <div className="flex justify-between text-[#59544c]">
            <span className="tracking-wider">PRODUCT TAX</span>
            <span className="text-[#1a1816]">INCLUDED IN LISTED PRICES</span>
          </div>
          <div className="flex justify-between text-[#59544c]">
            <span className="tracking-wider">IMPORT DUTIES</span>
            <span className="text-[#1a1816]">MAY BE DUE AT DESTINATION</span>
          </div>

          {/* Total Settlement Box */}
          <div className="pt-4 mt-2 bg-[#e4ddcf] border border-[#d5cdc0] p-4 flex justify-between items-center">
            <div>
              <span className="font-mono text-[11px] font-bold text-[#1a1816] uppercase block tracking-wider">
                TOTAL SETTLEMENT
              </span>
              <span className="font-mono text-[9px] text-[#59544c] tracking-wider">
                TAX INCLUDED // IMPORT DUTIES MAY APPLY
              </span>
            </div>
            <span
              id="total-settlement-price"
              className="font-headline text-[24px] md:text-[28px] text-[#1a1816] font-bold tracking-tight"
            >
              {formatCurrency(totalSettlement, currency)}
            </span>
          </div>
          {isQuoteLoading && (
            <p className="text-[10px] text-[#59544c]" role="status">LOADING COUNTRY CURRENCY QUOTE...</p>
          )}
          {quoteError && (
            <p className="text-[10px] text-red-800" role="alert">{quoteError}</p>
          )}
          {paymentQuote && currency !== 'INR' && (
            <p className="text-[10px] text-[#59544c]">
              Indicative exchange rate: 1 INR = {exchangeRate.toPrecision(5)} {currency}. Final amount is fixed when the order is created.
            </p>
          )}
          {paymentQuote && currency === 'INR' && (
            <p className="text-[10px] text-[#59544c]">India shipping address // tax included in listed product prices.</p>
          )}
        </div>

        {/* Primary High-Contrast Call to Action */}
        <div className="flex flex-col gap-3">
          <button
            type="button"
            id="submit-order-btn"
            disabled={isOrderSubmitting || subtotal <= 0 || (authApi.hasSession() && (!paymentQuote || isQuoteLoading || Boolean(quoteError)))}
            onClick={() => onPlaceOrder(paymentMethod)}
            className="w-full py-5 bg-[#141312] text-[#f5efe6] font-mono text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-[#35322e] transition-all flex items-center justify-center gap-3 shadow-md active:scale-[0.99] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
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

          <div className="flex items-center justify-center gap-2 text-center font-mono text-[10px] text-[#59544c] tracking-wider">
            <Lock className="w-3.5 h-3.5 text-[#7b6e54]" />
            <span>TOKENIZED CRYPTOGRAPHIC PAYMENT CONFIRMATION</span>
          </div>
        </div>
      </div>

      {/* Return Guarantee Module */}
      <div
        id="return-guarantee-module"
        className="bg-[#e4ddcf] border border-[#d5cdc0] p-5 flex items-center gap-4"
      >
        <div className="w-9 h-9 bg-[#ede7dd] border border-[#d5cdc0] flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5 text-[#7b6e54]" />
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-[11px] font-bold text-[#1a1816] uppercase tracking-wider">
            CONCIERGE COMPLIMENTARY RETURN
          </span>
          <span className="font-mono text-[11px] text-[#59544c] mt-0.5 leading-relaxed">
            14-day archival inspection period. Courier collection arranged at your convenience.
          </span>
        </div>
      </div>
    </section>
  );
};
