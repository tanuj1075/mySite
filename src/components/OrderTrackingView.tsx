import React from 'react';
import { Check, Clock, Package, Truck, MapPin, ChevronLeft, ArrowRight, ShieldCheck, RotateCcw } from 'lucide-react';
import { Order } from '../types';
import { formatCurrency } from '../lib/currency';

interface OrderTrackingViewProps {
  order: Order;
  onBackToOrders: () => void;
  onRequestExchange: (order: Order) => void;
}

const ORDER_STEPS = [
  'Order Placed',
  'Confirmed',
  'Packed',
  'Shipped',
  'Out for Delivery',
  'Delivered',
] as const;

export const OrderTrackingView: React.FC<OrderTrackingViewProps> = ({
  order,
  onBackToOrders,
  onRequestExchange,
}) => {
  const currentStepIndex = ORDER_STEPS.indexOf(order.orderStatus as any);

  return (
    <div className="w-full bg-[#ede7dd] text-[#1a1816] font-mono pb-24">
      <div className="max-w-[960px] mx-auto px-4 sm:px-8 pt-8">
        
        {/* Navigation Breadcrumb */}
        <button
          onClick={onBackToOrders}
          className="flex items-center gap-1.5 text-xs text-[#7b6e54] hover:text-[#1a1816] font-bold uppercase mb-6 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>BACK TO ALL ORDERS</span>
        </button>

        <div className="bg-[#f5efe6] border border-[#d5cdc0] p-6 sm:p-10 space-y-8 shadow-sm">
          
          {/* Header Title with Live Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#d5cdc0] pb-6">
            <div>
              <div className="flex items-center gap-2 text-[10px] text-[#7b6e54] uppercase font-bold tracking-wider mb-1">
                <span className="w-2 h-2 bg-[#1a1816] inline-block"></span>
                <span>CARRIER TRANSIT TELEMETRY // REAL-TIME DISPATCH</span>
              </div>
              <h1 className="font-headline text-3xl font-bold uppercase tracking-tight text-[#1a1816]">
                ORDER #{order.id}
              </h1>
              <p className="text-xs text-[#59544c] mt-1">
                Placed on {order.date} • Carrier: <strong className="text-[#1a1816]">{order.carrier}</strong>
              </p>
            </div>

            <div className="text-right sm:text-right">
              <span className="text-[10px] text-[#7b6e54] uppercase font-bold block">
                TRACKING NUMBER
              </span>
              <span className="text-xs font-bold text-[#1a1816] bg-[#ede7dd] border border-[#d5cdc0] px-3 py-1 inline-block mt-0.5">
                {order.trackingNumber}
              </span>
            </div>
          </div>

          {/* Expected Delivery Callout */}
          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6 text-[#1a1816]" />
              <div>
                <span className="text-[10px] text-[#7b6e54] uppercase font-bold block">
                  ESTIMATED ATELIER ARRIVAL
                </span>
                <span className="text-lg font-bold text-[#1a1816]">
                  {order.expectedDelivery}
                </span>
              </div>
            </div>
            <div className="text-xs bg-[#141312] text-[#f5efe6] px-3 py-1.5 font-bold uppercase tracking-wider">
              CURRENT STATUS: {order.orderStatus.toUpperCase()}
            </div>
          </div>

          {/* STEP-BY-STEP PROGRESS BAR (DESKTOP & MOBILE) */}
          <div className="space-y-4 pt-2">
            <h3 className="text-xs font-bold uppercase text-[#1a1816] tracking-wider">
              DISPATCH MILESTONES
            </h3>

            {/* Desktop Horizontal Milestone Bar */}
            <div className="hidden sm:grid grid-cols-6 gap-2 relative">
              {ORDER_STEPS.map((step, idx) => {
                const isCompleted = idx <= currentStepIndex;
                const isCurrent = idx === currentStepIndex;

                return (
                  <div key={step} className="flex flex-col items-center text-center relative group">
                    {/* Circle Node */}
                    <div
                      className={`w-9 h-9 flex items-center justify-center border text-xs font-bold transition-colors mb-2 z-10 ${
                        isCompleted
                          ? 'bg-[#141312] text-[#f5efe6] border-[#141312]'
                          : 'bg-[#ede7dd] text-[#8e8474] border-[#d5cdc0]'
                      } ${isCurrent ? 'ring-2 ring-[#7b6e54]' : ''}`}
                    >
                      {isCompleted ? <Check className="w-4 h-4" /> : idx + 1}
                    </div>

                    <span
                      className={`text-[10px] font-bold uppercase leading-tight ${
                        isCompleted ? 'text-[#1a1816]' : 'text-[#8e8474]'
                      }`}
                    >
                      {step}
                    </span>

                    {/* Connecting line */}
                    {idx < ORDER_STEPS.length - 1 && (
                      <div
                        className={`hidden sm:block absolute top-4.5 left-1/2 w-full h-[2px] z-0 ${
                          idx < currentStepIndex ? 'bg-[#141312]' : 'bg-[#d5cdc0]'
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Vertical Timeline */}
            <div className="sm:hidden space-y-4 border-l-2 border-[#d5cdc0] ml-4 pl-4">
              {ORDER_STEPS.map((step, idx) => {
                const isCompleted = idx <= currentStepIndex;
                return (
                  <div key={step} className="relative">
                    <div
                      className={`absolute -left-[23px] top-0 w-4 h-4 rounded-full border ${
                        isCompleted ? 'bg-[#141312] border-[#141312]' : 'bg-[#ede7dd] border-[#d5cdc0]'
                      }`}
                    />
                    <div className={`text-xs font-bold uppercase ${isCompleted ? 'text-[#1a1816]' : 'text-[#8e8474]'}`}>
                      {step}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline Audit Log */}
          <div className="space-y-3 pt-4 border-t border-[#d5cdc0]">
            <h3 className="text-xs font-bold uppercase text-[#1a1816] tracking-wider">
              TELEMETRY ACTIVITY LOG
            </h3>
            <div className="divide-y divide-[#d5cdc0] bg-[#ede7dd] border border-[#d5cdc0]">
              {order.timeline.map((event, idx) => (
                <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="space-y-0.5">
                    <div className="font-bold text-[#1a1816] uppercase flex items-center gap-2">
                      {event.completed && <Check className="w-3.5 h-3.5 text-[#1a1816]" />}
                      <span>{event.status}</span>
                    </div>
                    <p className="text-[11px] text-[#59544c]">{event.description}</p>
                  </div>
                  <div className="text-[10px] text-[#7b6e54] font-semibold whitespace-nowrap">
                    {event.date} • {event.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Items In Shipment & Exchange Trigger */}
          <div className="space-y-3 pt-4 border-t border-[#d5cdc0]">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase text-[#1a1816] tracking-wider">
                ITEMS IN THIS SHIPMENT
              </h3>
              <button
                onClick={() => onRequestExchange(order)}
                className="text-[11px] text-[#7b6e54] hover:text-[#1a1816] font-bold uppercase underline flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>REQUEST SIZE EXCHANGE</span>
              </button>
            </div>

            <div className="bg-[#ede7dd] border border-[#d5cdc0] divide-y divide-[#d5cdc0]">
              {order.items.map((item, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#f5efe6] border border-[#d5cdc0] overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-xs uppercase text-[#1a1816]">{item.name}</div>
                      <div className="text-[10px] text-[#59544c]">
                        {item.color} • <strong className="text-[#1a1816]">Size US {item.size}</strong> • Qty: {item.quantity}
                      </div>
                    </div>
                  </div>
                  <div className="font-bold text-xs text-[#1a1816]">
                    {formatCurrency(item.price * item.quantity * (order.exchangeRate ?? 1), order.currency ?? 'INR')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Assistance */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#d5cdc0] text-xs text-[#59544c]">
            <span>QUESTIONS ABOUT THIS DISPATCH? CONTACT ARCHIVE CONCIERGE.</span>
            <button
              onClick={() => onRequestExchange(order)}
              className="bg-[#141312] text-[#f5efe6] px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#35322e] transition-colors cursor-pointer"
            >
              RETURN / EXCHANGE PROTOCOL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
