import React, { useState } from 'react';
import {
  ShieldCheck,
  CreditCard,
  Smartphone,
  Landmark,
  ConciergeBell,
  Lock,
  ArrowRight,
  Plus,
  Phone,
  RefreshCw,
} from 'lucide-react';
import { Address, PaymentMethod } from '../types';
import { CHECKOUT_STEPS } from '../data/mockData';

interface CheckoutProtocolProps {
  addresses: Address[];
  selectedAddressId: string;
  onSelectAddress: (id: string) => void;
  onOpenNewAddressModal: () => void;
  subtotal: number;
  onPlaceOrder: () => void;
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
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4099');
  const [expiry, setExpiry] = useState('11 / 28');
  const [cvc, setCvc] = useState('•••');
  const [isEditingCard, setIsEditingCard] = useState(false);

  // Financial calculations
  const shippingCost = 0; // Complimentary Armored Freight
  const estimatedDuties = 0;
  const totalSettlement = subtotal + shippingCost + estimatedDuties;

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

          {/* Transit Verified Badge */}
          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-3 flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-[#7b6e54] shrink-0" />
            <span className="font-mono text-[10px] leading-tight text-[#1a1816]">
              ✓ Verified Transit: Guaranteed 2-Day Express via DHL Carbon-Neutral Priority
            </span>
          </div>
        </div>

        {/* STEP 3 & 4: SETTLEMENT METHOD SELECTOR */}
        <div className="flex flex-col gap-3" id="settlement-methods-block">
          <span className="font-mono text-[10px] text-[#7b6e54] uppercase tracking-[0.14em] font-bold">
            SETTLEMENT METHOD
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'CARD', label: 'CARD', icon: CreditCard },
              { id: 'APPLE_PAY', label: 'APPLE PAY', icon: Smartphone },
              { id: 'WIRE', label: 'WIRE', icon: Landmark },
              { id: 'CONCIERGE', label: 'CONCIERGE', icon: ConciergeBell },
            ].map((method) => {
              const isActive = paymentMethod === method.id;
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setPaymentMethod(method.id as PaymentMethod)}
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
                </button>
              );
            })}
          </div>
        </div>

        {/* ENCRYPTED VAULT CHANNEL / CARD INPUT */}
        {paymentMethod === 'CARD' ? (
          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-[#d5cdc0] pb-2">
              <span className="font-mono text-[10px] font-bold text-[#7b6e54] uppercase tracking-widest">
                ENCRYPTED VAULT CHANNEL
              </span>
              <span className="font-mono text-[10px] text-[#1a1816] font-bold tracking-wider">
                AES-256 GCM
              </span>
            </div>

            {/* Card Number Input */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#59544c] uppercase tracking-wider">
                  Card Number
                </span>
                <button
                  type="button"
                  onClick={() => setIsEditingCard(!isEditingCard)}
                  className="font-mono text-[9px] text-[#7b6e54] underline cursor-pointer font-bold"
                >
                  {isEditingCard ? 'LOCK' : 'CHANGE'}
                </button>
              </div>
              <div className="bg-[#f5efe6] border border-[#d5cdc0] p-2.5 font-mono text-[11px] text-[#1a1816] flex justify-between items-center">
                {isEditingCard ? (
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="bg-transparent text-[#1a1816] w-full focus:outline-none font-mono text-[11px]"
                    placeholder="4000 0000 0000 4099"
                  />
                ) : (
                  <span>{cardNumber}</span>
                )}
                <span className="text-[#7b6e54] text-[10px] font-bold shrink-0 ml-2">
                  VISA / MC
                </span>
              </div>
            </div>

            {/* Expiry & CVC Inputs */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-[#59544c] uppercase tracking-wider">
                  Expiry
                </span>
                <div className="bg-[#f5efe6] border border-[#d5cdc0] p-2.5 font-mono text-[11px] text-[#1a1816]">
                  {isEditingCard ? (
                    <input
                      type="text"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      className="bg-transparent text-[#1a1816] w-full focus:outline-none font-mono text-[11px]"
                      placeholder="MM / YY"
                    />
                  ) : (
                    <span>{expiry}</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-[#59544c] uppercase tracking-wider">
                  Security CVC
                </span>
                <div className="bg-[#f5efe6] border border-[#d5cdc0] p-2.5 font-mono text-[11px] text-[#1a1816]">
                  {isEditingCard ? (
                    <input
                      type="password"
                      maxLength={4}
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      className="bg-transparent text-[#1a1816] w-full focus:outline-none font-mono text-[11px]"
                      placeholder="•••"
                    />
                  ) : (
                    <span>{cvc}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : paymentMethod === 'APPLE_PAY' ? (
          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex flex-col gap-2 font-mono text-xs">
            <span className="text-[#7b6e54] text-[10px] uppercase font-bold">APPLE PAY BIOMETRIC</span>
            <p className="text-[#1a1816] text-[11px]">
              Ready for Face ID / Touch ID validation upon placing order.
            </p>
          </div>
        ) : paymentMethod === 'WIRE' ? (
          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex flex-col gap-2 font-mono text-xs">
            <span className="text-[#7b6e54] text-[10px] uppercase font-bold">DIRECT VAULT WIRE (SWIFT/IBAN)</span>
            <p className="text-[#1a1816] text-[11px]">
              Archival escrow coordinates will be generated upon authorization.
            </p>
          </div>
        ) : (
          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex flex-col gap-2 font-mono text-xs">
            <span className="text-[#7b6e54] text-[10px] uppercase font-bold">PRIVATE CLIENT CONCIERGE</span>
            <p className="text-[#1a1816] text-[11px]">
              Your dedicated curator will contact you via encrypted phone line.
            </p>
          </div>
        )}

        {/* FINANCIAL LEDGER / COST BREAKDOWN */}
        <div
          id="financial-ledger-breakdown"
          className="bg-[#ede7dd] border border-[#d5cdc0] p-5 flex flex-col gap-3 font-mono text-[11px]"
        >
          <div className="flex justify-between text-[#59544c]">
            <span className="tracking-wider">MERCHANDISE SUB-TOTAL</span>
            <span className="text-[#1a1816] font-bold">
              ${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </span>
          </div>
          <div className="flex justify-between text-[#59544c]">
            <span className="tracking-wider">PRIORITY ARMORED FREIGHT</span>
            <span className="text-[#7b6e54] font-bold">COMPLIMENTARY ($0.00)</span>
          </div>
          <div className="flex justify-between text-[#59544c]">
            <span className="tracking-wider">CARBON VOLUNTARY OFFSET</span>
            <span className="text-[#1a1816]">INCLUDED</span>
          </div>
          <div className="flex justify-between text-[#59544c]">
            <span className="tracking-wider">ESTIMATED LOCAL DUTIES</span>
            <span className="text-[#1a1816]">$0.00</span>
          </div>

          {/* Total Settlement Box */}
          <div className="pt-4 mt-2 bg-[#e4ddcf] border border-[#d5cdc0] p-4 flex justify-between items-center">
            <div>
              <span className="font-mono text-[11px] font-bold text-[#1a1816] uppercase block tracking-wider">
                TOTAL SETTLEMENT
              </span>
              <span className="font-mono text-[9px] text-[#59544c] tracking-wider">
                ALL DUTIES &amp; FEES ASSUMED
              </span>
            </div>
            <span
              id="total-settlement-price"
              className="font-headline text-[24px] md:text-[28px] text-[#1a1816] font-bold tracking-tight"
            >
              ${totalSettlement.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD
            </span>
          </div>
        </div>

        {/* Primary High-Contrast Call to Action */}
        <div className="flex flex-col gap-3">
          <button
            type="button"
            id="submit-order-btn"
            disabled={isOrderSubmitting || subtotal <= 0}
            onClick={onPlaceOrder}
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
