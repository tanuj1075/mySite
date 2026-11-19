import React, { useEffect, useState } from 'react';
import {
  ShieldCheck,
  Truck,
  QrCode,
  Banknote,
  Lock,
  ArrowRight,
  Plus,
  Phone,
  RefreshCw,
  CheckCircle2,
} from 'lucide-react';
import { Address, PaymentMethod } from '../types';
import { formatCurrency, getActiveCurrency, CURRENCY_CONFIGS } from '../lib/currency';
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

  // Financial calculations with worldwide multi-currency support
  const activeCurrency = getActiveCurrency();
  const activeConfig = CURRENCY_CONFIGS[activeCurrency] || CURRENCY_CONFIGS.INR;
  const currency = paymentQuote?.currency ?? activeCurrency;
  const exchangeRate = paymentQuote?.exchangeRate ?? (activeCurrency === 'INR' ? 1 : activeConfig.rateFromInr);
  const displayedSubtotal = (paymentQuote?.baseAmount ?? subtotal) * exchangeRate;
  const totalSettlement = paymentQuote?.amount ?? displayedSubtotal;

  return (
    <section className="flex flex-col gap-6" id="checkout-protocol-section">
      {/* Primary Checkout Card (Exact Match to Reference Panel 5) */}
      <div className="bg-white dark:bg-[#121215] border border-[#E9D9CA] dark:border-[#242429] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm">
        
        {/* Shipping Information Header */}
        <div className="border-b border-[#E9D9CA] dark:border-[#242429] pb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#242321] dark:text-white">
              Shipping Information
            </h2>
            <p className="text-xs text-[#77716B] dark:text-[#8e8e98] mt-0.5">
              Select or register your verified delivery destination
            </p>
          </div>
          <span className="text-[11px] font-semibold text-[#B4532A] bg-[#E9D9CA]/40 dark:bg-[#242429] px-2.5 py-1 rounded-full">
            {addresses.length} Saved {addresses.length === 1 ? 'Address' : 'Addresses'}
          </span>
        </div>

        {/* Saved Addresses List */}
        <div className="flex flex-col gap-3" id="address-selection-block">
          {addresses.length === 0 ? (
            <div className="p-5 border border-dashed border-[#E9D9CA] dark:border-[#2A2A32] rounded-xl text-center">
              <p className="text-xs text-[#77716B] dark:text-[#8e8e98] mb-3">
                No saved shipping address found for your profile.
              </p>
              <button
                type="button"
                onClick={onOpenNewAddressModal}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#B4532A] hover:bg-[#9C431F] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add Delivery Address</span>
              </button>
            </div>
          ) : (
            addresses.map((addr) => {
              const isSelected = selectedAddressId === addr.id;
              return (
                <label
                  key={addr.id}
                  onClick={() => onSelectAddress(addr.id)}
                  className={`cursor-pointer p-4 rounded-xl flex items-start gap-3.5 transition-all border ${
                    isSelected
                      ? 'bg-[#F7F2EC] dark:bg-[#18181c] border-[#B4532A] ring-1 ring-[#B4532A] shadow-sm'
                      : 'bg-white dark:bg-[#121215] border-[#E9D9CA] dark:border-[#242429] hover:border-[#B4532A]/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="address_selection"
                    checked={isSelected}
                    onChange={() => onSelectAddress(addr.id)}
                    className="mt-1 accent-[#B4532A] cursor-pointer"
                  />
                  <div className="flex flex-col w-full text-xs">
                    <div className="flex items-center justify-between w-full">
                      <span className="font-bold text-[#242321] dark:text-white">
                        {addr.name}
                      </span>
                      {addr.isPrimary && (
                        <span className="text-[10px] font-bold bg-[#B4532A] text-white px-2 py-0.5 rounded-full">
                          PRIMARY
                        </span>
                      )}
                    </div>
                    <p className="text-[#77716B] dark:text-[#8e8e98] mt-1 leading-relaxed">
                      {addr.line1}{addr.line2 ? `, ${addr.line2}` : ''}<br />
                      {addr.city}, {addr.state ? `${addr.state} ` : ''}{addr.postalCode}, {addr.country}
                    </p>
                    {addr.phone && (
                      <div className="flex items-center gap-1.5 mt-2 text-[#77716B] dark:text-[#8e8e98]">
                        <Phone className="w-3.5 h-3.5 text-[#B4532A]" />
                        <span>{addr.phone}</span>
                      </div>
                    )}
                  </div>
                </label>
              );
            })
          )}

          {/* Enter New Address Trigger */}
          {addresses.length > 0 && (
            <button
              type="button"
              onClick={onOpenNewAddressModal}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-dashed border-[#E9D9CA] dark:border-[#242429] hover:border-[#B4532A] text-[#77716B] hover:text-[#B4532A] dark:text-[#8e8e98] text-xs font-semibold transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4 text-[#B4532A]" />
              <span>Add Another Delivery Address</span>
            </button>
          )}

          {/* Delivery Estimate Banner */}
          {isDeliveryLoading && (
            <div className="bg-[#F7F2EC] dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#242429] rounded-xl p-3 flex items-center gap-3 text-xs text-[#77716B]">
              <Truck className="w-4 h-4 text-[#B4532A] shrink-0 animate-pulse" />
              <span>Calculating estimated transit time...</span>
            </div>
          )}
          {deliveryError && (
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-xl p-3 text-xs text-red-600 dark:text-red-400" role="alert">
              ⚠ {deliveryError}
            </div>
          )}
          {deliveryEstimate && !isDeliveryLoading && (
            <div className="bg-[#F7F2EC] dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#2A2A32] rounded-xl p-3.5 flex items-start gap-3">
              <Truck className="w-4 h-4 text-[#B4532A] shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5 text-xs">
                <span className="text-[10px] font-bold text-[#B4532A] uppercase tracking-wider">
                  Estimated Delivery
                </span>
                <span className="font-bold text-[#242321] dark:text-white">
                  {new Date(deliveryEstimate.minDate).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}
                  {' – '}
                  {new Date(deliveryEstimate.maxDate).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
                  {' '}
                  <span className="font-normal text-[#77716B] dark:text-[#8e8e98]">({deliveryEstimate.minDays}–{deliveryEstimate.maxDays} business days)</span>
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Payment Method Selector */}
        <div className="space-y-3 pt-2 border-t border-[#E9D9CA] dark:border-[#242429]" id="settlement-methods-block">
          <span className="text-xs font-bold text-[#242321] dark:text-white uppercase tracking-wider block">
            Payment Method
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'UPI' as const, label: 'UPI (QR / APP)', detail: 'GPay, PhonePe, Paytm, BHIM', icon: QrCode },
              { id: 'COD' as const, label: 'Cash on Delivery', detail: 'India shipments only', icon: Banknote },
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
                  className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all cursor-pointer text-left ${
                    isActive
                      ? 'bg-[#F7F2EC] dark:bg-[#18181c] border-[#B4532A] ring-1 ring-[#B4532A]'
                      : 'bg-white dark:bg-[#121215] border-[#E9D9CA] dark:border-[#242429] hover:border-[#B4532A]/50'
                  } ${isUnavailable ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-[#B4532A] text-white' : 'bg-[#F7F2EC] dark:bg-[#242429] text-[#77716B]'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#242321] dark:text-white">
                      {method.label}
                    </span>
                    <span className="text-[10px] text-[#77716B] dark:text-[#8e8e98]">
                      {method.detail}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Financial Ledger / Cost Breakdown (Exact Match to Reference Panel 5 Order Summary) */}
        <div
          id="financial-ledger-breakdown"
          className="bg-[#F7F2EC] dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#2A2A32] rounded-xl p-5 flex flex-col gap-3 text-xs"
        >
          <div className="flex justify-between text-[#77716B] dark:text-[#8e8e98]">
            <span>Subtotal</span>
            <span className="text-[#242321] dark:text-white font-bold">
              {formatCurrency(displayedSubtotal, currency)}
            </span>
          </div>
          <div className="flex justify-between text-[#77716B] dark:text-[#8e8e98]">
            <span>Shipping</span>
            <span className="text-[#22C55E] font-bold">Free</span>
          </div>
          <div className="border-t border-[#E9D9CA] dark:border-[#242429] pt-3 flex justify-between items-center text-sm">
            <span className="font-extrabold text-[#242321] dark:text-white">
              Total
            </span>
            <span
              id="total-settlement-price"
              className="text-xl font-extrabold text-[#242321] dark:text-white"
            >
              {formatCurrency(totalSettlement, currency)}
            </span>
          </div>

          {isQuoteLoading && (
            <p className="text-[10px] text-[#77716B] dark:text-[#8e8e98]" role="status">Loading international currency quote...</p>
          )}
          {quoteError && (
            <p className="text-[10px] text-red-500" role="alert">{quoteError}</p>
          )}
        </div>

        {/* Primary Call to Action Button (Exact Match to Reference Panel 5) */}
        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            id="submit-order-btn"
            disabled={isOrderSubmitting || subtotal <= 0}
            onClick={() => onPlaceOrder(paymentMethod)}
            className="w-full py-4 bg-[#B4532A] hover:bg-[#9C431F] text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.99] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isOrderSubmitting ? (
              <span className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin" />
                Processing Order...
              </span>
            ) : (
              <>
                <span>Place Order</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-1.5 text-center text-xs text-[#77716B] dark:text-[#8e8e98] pt-1">
            <Lock className="w-3.5 h-3.5 text-[#B4532A]" />
            <span>Secure Checkout • 256-bit SSL Encryption</span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#E9D9CA] dark:border-[#242429] text-[11px] text-[#77716B]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
            <span>100% Authentic Guaranteed</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B4532A]" />
            <span>14-Day Free Returns</span>
          </div>
        </div>
      </div>
    </section>
  );
};
