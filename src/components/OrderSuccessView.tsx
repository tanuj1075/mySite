import React from 'react';
import { CheckCircle, Truck, ArrowRight, ShoppingBag, Shield, Clock, FileText, Printer } from 'lucide-react';
import { Order } from '../types';
import { formatCurrency } from '../lib/currency';

interface OrderSuccessViewProps {
  order: Order;
  onTrackOrder: (orderId: string) => void;
  onContinueShopping: () => void;
  onRequestExchange: (order: Order) => void;
  onViewInvoice?: () => void;
}

export const OrderSuccessView: React.FC<OrderSuccessViewProps> = ({
  order,
  onTrackOrder,
  onContinueShopping,
  onRequestExchange,
  onViewInvoice,
}) => {
  return (
    <div className="w-full bg-[#09090b] text-[#f4f4f6] font-mono pb-24">
      <div className="max-w-[800px] mx-auto px-4 sm:px-8 pt-10">
        
        {/* Main Confirmation Container */}
        <div className="bg-[#121215] border border-[#242429] p-8 sm:p-12 space-y-8 shadow-2xl">
          
          {/* Status Icon & Banner */}
          <div className="text-center space-y-3 border-b border-[#242429] pb-8">
            <div className="w-16 h-16 bg-[#f4f4f6] text-[#09090b] flex items-center justify-center mx-auto mb-4 shadow-lg">
              <CheckCircle className="w-8 h-8" />
            </div>
            <span className="text-[11px] text-[#c9a96e] font-bold uppercase tracking-[0.2em] block">
              ALLOCATION CRYPTOGRAPHICALLY CONFIRMED
            </span>
            <h1 className="font-headline text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#f4f4f6]">
              ORDER CONFIRMED
            </h1>
            <div className="inline-block bg-[#18181c] border border-[#3a3a42] px-4 py-1.5 text-xs font-bold text-[#c9a96e] tracking-widest mt-2">
              ORDER ID: #{order.id}
            </div>
          </div>

          {/* Official Atelier Invoice & Bill Banner */}
          {onViewInvoice && (
            <div className="bg-gradient-to-r from-[#17171C] via-[#1E1E24] to-[#17171C] border border-[#C9A96E]/50 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_0_20px_rgba(201,169,110,0.1)]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#C9A96E]/15 border border-[#C9A96E]/40 text-[#C9A96E]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-[#C9A96E] font-bold uppercase tracking-wider block">
                    ATELIER ACQUISITION BILL & PROVENANCE DOSSIER
                  </span>
                  <span className="text-xs font-bold text-[#F4F4F6]">
                    Official Client Receipt Generated // Settlement Clearance Validated
                  </span>
                </div>
              </div>
              <button
                onClick={onViewInvoice}
                className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-[#C9A96E] via-[#EAE3D5] to-[#C9A96E] text-[#09090B] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(201,169,110,0.2)]"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>VIEW & PRINT BILL (PDF)</span>
              </button>
            </div>
          )}
          <div className="bg-[#18181c] border border-[#242429] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6 text-[#c9a96e]" />
              <div>
                <span className="text-[10px] text-[#c9a96e] font-bold uppercase block">
                  EXPECTED DISPATCH DELIVERY
                </span>
                <span className="text-base font-bold text-[#f4f4f6]">
                  {order.expectedDelivery} via {order.carrier}
                </span>
              </div>
            </div>
            <button
              onClick={() => onTrackOrder(order.id)}
              className="bg-[#f4f4f6] text-[#09090b] px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#c9a96e] transition-colors cursor-pointer flex items-center gap-2 shadow-md"
            >
              <span>TRACK ORDER</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Items Summary Ledger */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase text-[#f4f4f6] tracking-wider border-b border-[#242429] pb-2">
              SECURED ALLOCATION SPECIMENS ({order.items.length})
            </h3>
            <div className="divide-y divide-[#242429]">
              {order.items.map((item, idx) => (
                <div key={idx} className="py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#09090b] border border-[#242429] overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase text-[#f4f4f6]">{item.name}</h4>
                      <p className="text-[10px] text-[#8e8e98]">
                        {item.brand} • {item.color} • <strong className="text-[#f4f4f6]">Size {item.sizeSystem && item.sizeSystem !== 'Size' ? `${item.sizeSystem} ` : item.sizeSystem ? '' : 'US '}{item.size}</strong>
                      </p>
                      <span className="text-[10px] text-[#c9a96e]">QTY: {item.quantity}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-sm text-[#f4f4f6]">
                      {formatCurrency(item.price * item.quantity * (order.exchangeRate ?? 1), order.currency ?? 'INR')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping & Payment Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-[#18181c] border border-[#242429] p-5">
            <div className="space-y-1">
              <span className="text-[10px] text-[#c9a96e] uppercase font-bold block">
                DISPATCH DESTINATION:
              </span>
              <div className="font-bold text-[#f4f4f6]">{order.shippingAddress.name}</div>
              <div className="text-[#8e8e98]">{order.shippingAddress.line1}</div>
              {order.shippingAddress.line2 && (
                <div className="text-[#8e8e98]">{order.shippingAddress.line2}</div>
              )}
              <div className="text-[#8e8e98]">
                {order.shippingAddress.city}{order.shippingAddress.state ? `, ${order.shippingAddress.state}` : ''} {order.shippingAddress.postalCode}
              </div>
              <div className="text-[#8e8e98]">{order.shippingAddress.country}</div>
              {order.shippingAddress.phone && (
                <div className="text-[#c9a96e]">📞 {order.shippingAddress.phone}</div>
              )}
              {order.expectedDelivery && (
                <div className="mt-2 text-[10px] font-bold text-[#f4f4f6]">ETA: {order.expectedDelivery}</div>
              )}
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-[#c9a96e] uppercase font-bold block">
                PAYMENT SETTLEMENT:
              </span>
              <div className="font-bold text-[#f4f4f6]">{order.paymentMethod}</div>
              <div className="text-[#c9a96e] font-bold">STATUS: {order.paymentStatus}</div>
              <div className="text-sm font-bold text-[#f4f4f6] pt-1">
                TOTAL PAID: {formatCurrency(order.paymentAmount ?? order.total, order.currency ?? 'INR')}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#242429]">
            <button
              onClick={() => onRequestExchange(order)}
              className="text-xs text-[#c9a96e] hover:text-[#f4f4f6] font-bold uppercase underline cursor-pointer transition-colors"
            >
              SIZE EXCHANGE / RETURN POLICY
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onTrackOrder(order.id)}
                className="bg-[#18181c] border border-[#242429] text-[#f4f4f6] px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:border-[#8e8e98] transition-colors cursor-pointer"
              >
                TRACK TIMELINE
              </button>
              <button
                onClick={onContinueShopping}
                className="bg-[#f4f4f6] text-[#09090b] px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#c9a96e] transition-colors cursor-pointer shadow-md"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
