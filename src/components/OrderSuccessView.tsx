import React from 'react';
import { CheckCircle2, Truck, ArrowRight, ShoppingBag, ShieldCheck, Clock, FileText, Printer, Check } from 'lucide-react';
import { Order } from '../types';
import { formatCurrency } from '../lib/currency';

interface OrderSuccessViewProps {
  order: Order;
  onTrackOrder: (orderId: string) => void;
  onContinueShopping: () => void;
  onRequestExchange: (order: Order) => void;
  onViewInvoice?: () => void;
  onBackToOrders?: () => void;
}

export const OrderSuccessView: React.FC<OrderSuccessViewProps> = ({
  order,
  onTrackOrder,
  onContinueShopping,
  onRequestExchange,
  onViewInvoice,
  onBackToOrders,
}) => {
  const displayId = order.id.startsWith('VA') ? order.id : `VA${order.id.replace(/[^0-9]/g, '').slice(-5) || '12345'}`;

  return (
    <div className="w-full bg-[#F7F2EC] dark:bg-[#09090b] text-[#242321] dark:text-[#f4f4f6] min-h-[80vh] py-10 sm:py-16">
      <div className="max-w-[800px] mx-auto px-5 sm:px-8">
        
        {/* Main Confirmation Container */}
        <div className="bg-white dark:bg-[#121215] border border-[#E9D9CA] dark:border-[#242429] rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
          
          {/* Status Icon & Banner */}
          <div className="text-center space-y-3 border-b border-[#E9D9CA] dark:border-[#242429] pb-8">
            <div className="w-16 h-16 bg-[#22C55E]/15 text-[#22C55E] rounded-full flex items-center justify-center mx-auto mb-2 ring-8 ring-[#22C55E]/10">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <span className="text-xs font-bold text-[#B4532A] uppercase tracking-widest block">
              Order Confirmed &amp; Verified
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#242321] dark:text-white">
              Thank You for Your Order!
            </h1>
            <p className="text-xs text-[#77716B] dark:text-[#8e8e98] max-w-md mx-auto">
              We have received your acquisition. An official confirmation email with shipment telemetry and your Atelier acquisition bill has been dispatched.
            </p>
            <div className="inline-block bg-[#F7F2EC] dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#2A2A32] px-4 py-1.5 rounded-full text-xs font-bold text-[#242321] dark:text-white tracking-wider mt-2">
              Order ID: #{displayId}
            </div>
          </div>

          {/* Official Atelier Invoice & Bill Banner (User requested fake buy bill) */}
          {onViewInvoice && (
            <div className="bg-[#F7F2EC] dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#2A2A32] rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#B4532A]/10 rounded-xl text-[#B4532A]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-[#B4532A] font-bold uppercase tracking-wider block">
                    Acquisition Invoice &amp; Bill
                  </span>
                  <span className="text-xs font-bold text-[#242321] dark:text-white">
                    Official Client Receipt Generated • Settlement Validated
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={onViewInvoice}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#B4532A] hover:bg-[#9C431F] text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>View &amp; Print Bill (PDF)</span>
              </button>
            </div>
          )}

          {/* Estimated Dispatch Card */}
          <div className="bg-[#F7F2EC] dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#2A2A32] rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6 text-[#B4532A]" />
              <div>
                <span className="text-[10px] text-[#77716B] font-bold uppercase block">
                  Estimated Delivery Date
                </span>
                <span className="text-sm font-bold text-[#242321] dark:text-white">
                  {order.expectedDelivery} via {order.carrier}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onTrackOrder(order.id)}
              className="bg-[#242321] dark:bg-white text-white dark:text-[#242321] px-5 py-2.5 text-xs font-bold rounded-xl hover:opacity-90 transition-all cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <span>Track Order</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Items Summary Ledger */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase text-[#242321] dark:text-white tracking-wider border-b border-[#E9D9CA] dark:border-[#242429] pb-2">
              Purchased Sneakers ({order.items.length})
            </h3>
            <div className="divide-y divide-[#E9D9CA]/60 dark:divide-[#242429]">
              {order.items.map((item, idx) => (
                <div key={idx} className="py-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-[#F7F2EC] dark:bg-[#18181c] rounded-xl border border-[#E9D9CA]/60 overflow-hidden shrink-0 flex items-center justify-center p-1.5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/images/cream_runner_pedestal_1788842341279.jpg';
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-[#242321] dark:text-white">{item.name}</h4>
                      <p className="text-[10px] text-[#77716B] dark:text-[#8e8e98]">
                        Size: {item.size} • Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-xs text-[#242321] dark:text-white">
                      {formatCurrency(item.price * item.quantity * (order.exchangeRate ?? 1), order.currency ?? 'INR')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping & Payment Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-[#F7F2EC] dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#2A2A32] rounded-2xl p-5">
            <div className="space-y-1">
              <span className="text-[10px] text-[#B4532A] uppercase font-bold block">
                Shipping Destination:
              </span>
              <div className="font-bold text-[#242321] dark:text-white">{order.shippingAddress.name}</div>
              <div className="text-[#77716B] dark:text-[#8e8e98]">{order.shippingAddress.line1}</div>
              {order.shippingAddress.line2 && (
                <div className="text-[#77716B] dark:text-[#8e8e98]">{order.shippingAddress.line2}</div>
              )}
              <div className="text-[#77716B] dark:text-[#8e8e98]">
                {order.shippingAddress.city}{order.shippingAddress.state ? `, ${order.shippingAddress.state}` : ''} {order.shippingAddress.postalCode}
              </div>
              <div className="text-[#77716B] dark:text-[#8e8e98]">{order.shippingAddress.country}</div>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-[#B4532A] uppercase font-bold block">
                Payment Method:
              </span>
              <div className="font-bold text-[#242321] dark:text-white">{order.paymentMethod}</div>
              <div className="text-[#22C55E] font-bold">Status: {order.paymentStatus}</div>
              <div className="text-sm font-extrabold text-[#242321] dark:text-white pt-2">
                Total Paid: {formatCurrency(order.paymentAmount ?? order.total, order.currency ?? 'INR')}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E9D9CA] dark:border-[#242429]">
            {onBackToOrders && (
              <button
                type="button"
                onClick={onBackToOrders}
                className="text-xs text-[#B4532A] hover:underline font-bold cursor-pointer"
              >
                View All Orders
              </button>
            )}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => onTrackOrder(order.id)}
                className="flex-1 sm:flex-none px-5 py-3 rounded-xl border border-[#E9D9CA] dark:border-[#2A2A32] text-[#242321] dark:text-white text-xs font-bold hover:border-[#B4532A] transition-colors cursor-pointer"
              >
                Track Shipment
              </button>
              <button
                type="button"
                onClick={onContinueShopping}
                className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-[#B4532A] hover:bg-[#9C431F] text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
