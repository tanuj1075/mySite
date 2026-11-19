import React, { useState } from 'react';
import { Check, Clock, Package, Truck, MapPin, ChevronLeft, ArrowRight, ShieldCheck, RotateCcw, Search } from 'lucide-react';
import { Order } from '../types';
import { formatCurrency } from '../lib/currency';

interface OrderTrackingViewProps {
  order: Order;
  onBackToOrders: () => void;
  onRequestExchange: (order: Order) => void;
  onSearchOrderId?: (id: string) => void;
}

const MILESTONES = [
  { key: 'placed', label: 'Placed', defaultDate: 'Nov 18' },
  { key: 'confirmed', label: 'Confirmed', defaultDate: 'Nov 18' },
  { key: 'shipped', label: 'Shipped', defaultDate: 'Nov 20' },
  { key: 'delivered', label: 'Delivered', defaultDate: 'Nov 21' },
] as const;

export const OrderTrackingView: React.FC<OrderTrackingViewProps> = ({
  order,
  onBackToOrders,
  onRequestExchange,
  onSearchOrderId,
}) => {
  const [inputOrderId, setInputOrderId] = useState(order.id);

  const displayId = order.id.startsWith('VA') ? order.id : `VA${order.id.replace(/[^0-9]/g, '').slice(-5) || '12345'}`;

  // Map order status to milestone index (0 to 3)
  const getMilestoneIndex = (status: string) => {
    const st = status.toLowerCase();
    if (st.includes('delivered')) return 3;
    if (st.includes('shipped') || st.includes('transit') || st.includes('out for delivery')) return 2;
    if (st.includes('confirmed') || st.includes('packed')) return 1;
    return 0;
  };

  const currentMilestone = getMilestoneIndex(order.orderStatus);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchOrderId && inputOrderId.trim()) {
      onSearchOrderId(inputOrderId.trim());
    }
  };

  return (
    <div className="w-full bg-[#F7F2EC] dark:bg-[#09090b] text-[#242321] dark:text-[#f4f4f6] min-h-[80vh] pb-24">
      
      {/* Sub-Hero with Curved Warm Beige Organic Element (Exact Match to Reference Panel 8) */}
      <section className="relative overflow-hidden bg-white dark:bg-[#121215] border-b border-[#E9D9CA] dark:border-[#242429]">
        {/* Background decorative curved beige shape */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#E9D9CA]/40 dark:bg-[#1e1e24] rounded-l-[120px] pointer-events-none hidden md:block" />

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-10 sm:py-14 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: Tracker Query Header */}
          <div className="w-full md:w-3/5 space-y-4">
            <button
              onClick={onBackToOrders}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B4532A] hover:underline cursor-pointer mb-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Orders</span>
            </button>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#242321] dark:text-white tracking-tight">
              Track Your Order
            </h1>
            <p className="text-sm text-[#77716B] dark:text-[#8e8e98]">
              Enter your order ID to track your shipment in real time
            </p>

            {/* Order ID Input Form */}
            <form onSubmit={handleTrackSubmit} className="pt-2 flex flex-col sm:flex-row gap-3 max-w-lg">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={inputOrderId}
                  onChange={(e) => setInputOrderId(e.target.value)}
                  placeholder="Order ID (e.g. VA12345)"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#E9D9CA] dark:border-[#2A2A32] bg-white dark:bg-[#18181c] text-[#242321] dark:text-white text-xs font-semibold focus:outline-none focus:border-[#B4532A] shadow-xs"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3.5 bg-[#B4532A] hover:bg-[#9C431F] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm shrink-0"
              >
                <span>Track Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right: Floating Hero Sneaker Visual (Panel 8) */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <div className="w-64 sm:w-80 h-48 sm:h-56 relative flex items-center justify-center">
              <img
                src={order.items[0]?.image || '/assets/images/cream_runner_pedestal_1788842341279.jpg'}
                alt="Tracked Sneaker"
                className="w-full h-full object-contain -rotate-12 drop-shadow-2xl hover:rotate-0 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 mt-10 space-y-8">
        
        {/* Milestone Timeline Card (Exact Match to Reference Panel 8) */}
        <div className="bg-white dark:bg-[#121215] border border-[#E9D9CA] dark:border-[#242429] rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E9D9CA] dark:border-[#242429] pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#B4532A] mb-1">
                <span className="w-2 h-2 rounded-full bg-[#B4532A] animate-pulse"></span>
                <span>Active Tracking: #{displayId}</span>
              </div>
              <p className="text-xs text-[#77716B] dark:text-[#8e8e98]">
                Carrier: <strong className="text-[#242321] dark:text-white">{order.carrier}</strong> • Tracking #{order.trackingNumber}
              </p>
            </div>

            <div className="text-right">
              <span className="text-xs text-[#77716B] dark:text-[#8e8e98] block">Estimated Delivery</span>
              <span className="text-sm font-extrabold text-[#242321] dark:text-white">
                {order.expectedDelivery}
              </span>
            </div>
          </div>

          {/* 4-Step Stepper (Placed -> Confirmed -> Shipped -> Delivered) */}
          <div className="pt-4 pb-2">
            <div className="grid grid-cols-4 relative">
              {/* Connector line */}
              <div className="absolute top-4 left-[12.5%] right-[12.5%] h-1 bg-[#E9D9CA] dark:bg-[#2A2A32] z-0" />
              <div
                className="absolute top-4 left-[12.5%] h-1 bg-[#B4532A] z-0 transition-all duration-500"
                style={{ width: `${(currentMilestone / 3) * 75}%` }}
              />

              {MILESTONES.map((m, idx) => {
                const isPassed = idx <= currentMilestone;
                const isCurrent = idx === currentMilestone;

                return (
                  <div key={m.key} className="flex flex-col items-center text-center relative z-10">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                        isPassed
                          ? 'bg-[#B4532A] text-white shadow-sm ring-4 ring-[#B4532A]/20'
                          : 'bg-white dark:bg-[#18181c] border-2 border-[#E9D9CA] dark:border-[#2A2A32] text-[#77716B]'
                      }`}
                    >
                      {isPassed ? <Check className="w-4 h-4" /> : idx + 1}
                    </div>

                    <span className={`text-xs font-bold mt-2.5 ${isCurrent ? 'text-[#B4532A]' : 'text-[#242321] dark:text-white'}`}>
                      {m.label}
                    </span>

                    <span className="text-[10px] text-[#77716B] dark:text-[#8e8e98] mt-0.5">
                      {order.timeline[idx]?.date || m.defaultDate}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Shipping Address & Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Destination */}
          <div className="bg-white dark:bg-[#121215] border border-[#E9D9CA] dark:border-[#242429] rounded-2xl p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#B4532A] uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Delivery Destination</span>
            </div>
            <div className="text-sm font-bold text-[#242321] dark:text-white">
              {order.shippingAddress.name}
            </div>
            <p className="text-xs text-[#77716B] dark:text-[#8e8e98] leading-relaxed">
              {order.shippingAddress.line1}
              {order.shippingAddress.line2 && <><br />{order.shippingAddress.line2}</>}
              <br />
              {order.shippingAddress.city}{order.shippingAddress.state ? `, ${order.shippingAddress.state}` : ''} {order.shippingAddress.postalCode}
              <br />
              {order.shippingAddress.country}
            </p>
            {order.shippingAddress.phone && (
              <p className="text-xs text-[#77716B] dark:text-[#8e8e98] pt-1">
                Phone: {order.shippingAddress.phone}
              </p>
            )}
          </div>

          {/* Items In Shipment */}
          <div className="bg-white dark:bg-[#121215] border border-[#E9D9CA] dark:border-[#242429] rounded-2xl p-6 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-[#B4532A] uppercase tracking-wider">
                <Package className="w-4 h-4" />
                <span>Package Contents ({order.items.length})</span>
              </div>
              <button
                type="button"
                onClick={() => onRequestExchange(order)}
                className="text-xs font-semibold text-[#B4532A] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Size Exchange</span>
              </button>
            </div>

            <div className="divide-y divide-[#E9D9CA]/60 dark:divide-[#242429] max-h-48 overflow-y-auto pr-1">
              {order.items.map((item, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-[#F7F2EC] dark:bg-[#18181c] border border-[#E9D9CA]/60 overflow-hidden shrink-0 flex items-center justify-center p-1">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#242321] dark:text-white truncate max-w-[180px]">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-[#77716B]">
                        Size: {item.size} • Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#242321] dark:text-white shrink-0">
                    {formatCurrency(item.price * item.quantity * (order.exchangeRate ?? 1), order.currency ?? 'INR')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
