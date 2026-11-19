import React, { useState } from 'react';
import { Package, ArrowRight, FileText, CheckCircle2, Clock, Truck, ShoppingBag } from 'lucide-react';
import { Order } from '../types';
import { formatCurrency } from '../lib/currency';

interface MyOrdersViewProps {
  orders: Order[];
  onSelectOrder: (order: Order) => void;
  onContinueShopping: () => void;
  onViewInvoice?: (order: Order) => void;
}

type OrderFilter = 'All' | 'Processing' | 'Shipped' | 'Delivered';

export const MyOrdersView: React.FC<MyOrdersViewProps> = ({
  orders,
  onSelectOrder,
  onContinueShopping,
  onViewInvoice,
}) => {
  const [activeFilter, setActiveFilter] = useState<OrderFilter>('All');

  // Filter orders according to selected tab
  const filteredOrders = orders.filter((order) => {
    if (activeFilter === 'All') return true;
    const st = order.orderStatus.toLowerCase();
    if (activeFilter === 'Processing') {
      return st.includes('placed') || st.includes('confirmed') || st.includes('packed') || st.includes('process');
    }
    if (activeFilter === 'Shipped') {
      return st.includes('shipped') || st.includes('transit') || st.includes('out for delivery');
    }
    if (activeFilter === 'Delivered') {
      return st.includes('delivered');
    }
    return true;
  });

  const getStatusBadge = (status: string) => {
    const st = status.toLowerCase();
    if (st.includes('delivered')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          Delivered
        </span>
      );
    }
    if (st.includes('shipped') || st.includes('transit') || st.includes('delivery')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          Shipped
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
        Processing
      </span>
    );
  };

  return (
    <div className="w-full bg-[#F7F2EC] dark:bg-[#09090b] text-[#242321] dark:text-[#f4f4f6] min-h-[70vh] py-10 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        
        {/* Header (Exact Match to Reference Panel 7) */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#242321] dark:text-white tracking-tight">
            My Orders
          </h1>
          <p className="text-xs text-[#77716B] dark:text-[#8e8e98] mt-1">
            Track, view provenance dossiers, and manage deliveries
          </p>
        </div>

        {/* Filter Tabs (Exact Match to Reference Panel 7) */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {(['All', 'Processing', 'Shipped', 'Delivered'] as OrderFilter[]).map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#B4532A] text-white shadow-sm'
                    : 'bg-white dark:bg-[#18181c] text-[#77716B] dark:text-[#8e8e98] border border-[#E9D9CA] dark:border-[#242429] hover:border-[#B4532A]'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Orders Listing Grid */}
        {filteredOrders.length === 0 ? (
          <div className="bg-white dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#242429] rounded-2xl p-12 text-center flex flex-col items-center justify-center gap-4 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#E9D9CA]/40 dark:bg-[#242429] flex items-center justify-center text-[#B4532A]">
              <Package className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#242321] dark:text-white">
              No Orders in This Category
            </h2>
            <p className="text-xs text-[#77716B] dark:text-[#8e8e98] max-w-sm">
              You do not have any {activeFilter !== 'All' ? activeFilter.toLowerCase() : ''} orders currently recorded.
            </p>
            <button
              type="button"
              onClick={onContinueShopping}
              className="mt-2 px-6 py-2.5 bg-[#B4532A] hover:bg-[#9C431F] text-white text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-sm flex items-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Explore Sneakers</span>
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {filteredOrders.map((order) => {
              const displayId = order.id.startsWith('VA') ? order.id : `VA${order.id.replace(/[^0-9]/g, '').slice(-5) || '12345'}`;
              return (
                <article
                  key={order.id}
                  className="bg-white dark:bg-[#18181c] border border-[#E9D9CA] dark:border-[#2A2A32] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col gap-5"
                >
                  {/* Order Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E9D9CA] dark:border-[#242429] pb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-base font-extrabold text-[#242321] dark:text-white">
                        Order #{displayId}
                      </span>
                      <span className="text-xs text-[#77716B] dark:text-[#8e8e98]">
                        {order.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      {getStatusBadge(order.orderStatus)}
                      <span className="text-base font-extrabold text-[#242321] dark:text-white">
                        {formatCurrency(order.total)}
                      </span>
                    </div>
                  </div>

                  {/* Order Items Thumbnails Row & CTAs (Exact Match to Reference Panel 7) */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Item Thumbnails Preview */}
                    <div className="flex items-center gap-3 overflow-x-auto pb-1">
                      {order.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="w-16 h-16 sm:w-20 sm:h-20 bg-[#F7F2EC] dark:bg-[#121215] rounded-xl border border-[#E9D9CA]/60 dark:border-[#2A2A32] overflow-hidden p-1.5 flex items-center justify-center shrink-0"
                          title={`${item.name} (${item.specification || 'Size 9'})`}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/assets/images/cream_runner_pedestal_1788842341279.jpg';
                            }}
                          />
                        </div>
                      ))}
                      <div className="text-xs text-[#77716B] dark:text-[#8e8e98] pl-2 font-medium">
                        {order.items.length} item{order.items.length > 1 ? 's' : ''} • Carrier: {order.carrier}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 shrink-0">
                      {onViewInvoice && (
                        <button
                          type="button"
                          onClick={() => onViewInvoice(order)}
                          className="px-4 py-2 rounded-xl border border-[#E9D9CA] dark:border-[#2A2A32] hover:border-[#B4532A] text-xs font-bold text-[#77716B] hover:text-[#B4532A] transition-colors cursor-pointer flex items-center gap-1.5"
                          title="View Official Bill"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Invoice</span>
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => onSelectOrder(order)}
                        className="px-5 py-2.5 rounded-xl bg-[#B4532A] hover:bg-[#9C431F] text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
