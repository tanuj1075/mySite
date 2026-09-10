import React from 'react';
import { CheckCircle, Truck, ArrowRight, ShoppingBag, Shield, Clock } from 'lucide-react';
import { Order } from '../types';

interface OrderSuccessViewProps {
  order: Order;
  onTrackOrder: (orderId: string) => void;
  onContinueShopping: () => void;
  onRequestExchange: (order: Order) => void;
}

export const OrderSuccessView: React.FC<OrderSuccessViewProps> = ({
  order,
  onTrackOrder,
  onContinueShopping,
  onRequestExchange,
}) => {
  return (
    <div className="w-full bg-[#ede7dd] text-[#1a1816] font-mono pb-24">
      <div className="max-w-[800px] mx-auto px-4 sm:px-8 pt-10">
        
        {/* Main Confirmation Container */}
        <div className="bg-[#f5efe6] border border-[#d5cdc0] p-8 sm:p-12 space-y-8 shadow-sm">
          
          {/* Status Icon & Banner */}
          <div className="text-center space-y-3 border-b border-[#d5cdc0] pb-8">
            <div className="w-16 h-16 bg-[#141312] text-[#f5efe6] flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <span className="text-[11px] text-[#7b6e54] font-bold uppercase tracking-[0.2em] block">
              ALLOCATION CRYPTOGRAPHICALLY CONFIRMED
            </span>
            <h1 className="font-headline text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#1a1816]">
              ORDER CONFIRMED
            </h1>
            <div className="inline-block bg-[#ede7dd] border border-[#d5cdc0] px-4 py-1.5 text-xs font-bold text-[#1a1816] tracking-widest mt-2">
              ORDER ID: #{order.id}
            </div>
          </div>

          {/* Delivery & Transit Banner */}
          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6 text-[#1a1816]" />
              <div>
                <span className="text-[10px] text-[#7b6e54] font-bold uppercase block">
                  EXPECTED DISPATCH DELIVERY
                </span>
                <span className="text-base font-bold text-[#1a1816]">
                  {order.expectedDelivery} via {order.carrier}
                </span>
              </div>
            </div>
            <button
              onClick={() => onTrackOrder(order.id)}
              className="bg-[#141312] text-[#f5efe6] px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#35322e] transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>TRACK ORDER</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Items Summary Ledger */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase text-[#1a1816] tracking-wider border-b border-[#d5cdc0] pb-2">
              SECURED ALLOCATION SPECIMENS ({order.items.length})
            </h3>
            <div className="divide-y divide-[#d5cdc0]">
              {order.items.map((item, idx) => (
                <div key={idx} className="py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#ede7dd] border border-[#d5cdc0] overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase text-[#1a1816]">{item.name}</h4>
                      <p className="text-[10px] text-[#59544c]">
                        {item.brand} • {item.color} • <strong className="text-[#1a1816]">Size US {item.size}</strong>
                      </p>
                      <span className="text-[10px] text-[#7b6e54]">QTY: {item.quantity}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-sm text-[#1a1816]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping & Payment Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-[#ede7dd] border border-[#d5cdc0] p-5">
            <div className="space-y-1">
              <span className="text-[10px] text-[#7b6e54] uppercase font-bold block">
                DISPATCH DESTINATION:
              </span>
              <div className="font-bold text-[#1a1816]">{order.shippingAddress.name}</div>
              <div className="text-[#59544c]">{order.shippingAddress.line1}</div>
              <div className="text-[#59544c]">
                {order.shippingAddress.city}, {order.shippingAddress.postalCode}
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-[#7b6e54] uppercase font-bold block">
                PAYMENT SETTLEMENT:
              </span>
              <div className="font-bold text-[#1a1816]">{order.paymentMethod}</div>
              <div className="text-[#7b6e54] font-bold">STATUS: {order.paymentStatus}</div>
              <div className="text-sm font-bold text-[#1a1816] pt-1">
                TOTAL PAID: ${order.total.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#d5cdc0]">
            <button
              onClick={() => onRequestExchange(order)}
              className="text-xs text-[#7b6e54] hover:text-[#1a1816] font-bold uppercase underline cursor-pointer"
            >
              SIZE EXCHANGE / RETURN POLICY
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onTrackOrder(order.id)}
                className="bg-[#ede7dd] border border-[#141312] text-[#1a1816] px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#ded6c9] transition-colors cursor-pointer"
              >
                TRACK TIMELINE
              </button>
              <button
                onClick={onContinueShopping}
                className="bg-[#141312] text-[#f5efe6] px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#35322e] transition-colors cursor-pointer"
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
