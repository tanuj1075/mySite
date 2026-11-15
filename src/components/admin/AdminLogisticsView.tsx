import React, { useState, useEffect } from 'react';
import {
  Truck, CheckCircle2, Clock, Package, Download, Search, ChevronDown,
  FileText, ArrowRight, Check, AlertCircle, RotateCcw, Printer,
} from 'lucide-react';
import { Order, ExchangeReturnRequest } from '../../types';
import { AdminCustomersView } from './AdminCustomersView';

interface OrderItem {
  id: string;
  orderNumber: string;
  date: string;
  client: string;
  location: string;
  membership: string;
  lifetimeOrders: string;
  destination: string;
  snapshotItem: string;
  itemImage: string;
  shade: string;
  size: string;
  sku: string;
  status: 'SHIPPED' | 'PACKED' | 'CONFIRMED' | 'EXCHANGE REQ' | 'DELIVERED';
  total: number;
  awb: string;
  carrier?: string;
  events: {
    title: string;
    date: string;
    detail: string;
    completed: boolean;
  }[];
}

interface AdminLogisticsViewProps {
  orders?: Order[];
  onUpdateOrderStatus?: (orderId: string, newStatus: any) => Promise<boolean>;
  exchanges?: ExchangeReturnRequest[];
  onUpdateExchangeStatus?: (exchangeId: string, status: 'Approved' | 'Rejected') => Promise<boolean>;
  onShowToast: (msg: string) => void;
  focusWorkbench?: boolean;
  activeSection?: string;
  onSelectSection?: (section: any) => void;
}

export const AdminLogisticsView: React.FC<AdminLogisticsViewProps> = ({
  orders: liveOrders = [],
  onUpdateOrderStatus,
  exchanges = [],
  onUpdateExchangeStatus,
  onShowToast,
  focusWorkbench,
  activeSection,
  onSelectSection,
}) => {
  // If user navigated to Customers Dossiers
  if (activeSection === 'CUSTOMERS') {
    return (
      <AdminCustomersView
        orders={liveOrders}
        onShowToast={onShowToast}
        onBackToOrders={() => {
          if (onSelectSection) onSelectSection('ORDERS');
        }}
      />
    );
  }

  // Build unified order items list
  const mapLiveOrders = (): OrderItem[] => {
    const formattedLive: OrderItem[] = liveOrders.map((ord) => {
      const firstItem = ord.items[0] || {
        name: 'Item details not recorded',
        color: 'Not recorded',
        size: 'Not recorded',
        sku: 'Not recorded',
        image: '',
        price: ord.total,
      };

      const mappedStatus: OrderItem['status'] =
        ord.orderStatus === 'Shipped'
          ? 'SHIPPED'
          : ord.orderStatus === 'Delivered'
          ? 'DELIVERED'
          : ord.orderStatus === 'Packed'
          ? 'PACKED'
          : 'CONFIRMED';

      return {
        id: ord.id,
        orderNumber: ord.id.startsWith('#') ? ord.id : `#${ord.id}`,
        date: ord.date || 'DATE NOT RECORDED',
        client: ord.shippingAddress.name || 'NAME NOT RECORDED',
        location: `${ord.shippingAddress.city}, ${ord.shippingAddress.country}`,
        membership: 'NOT TRACKED',
        lifetimeOrders: 'NOT TRACKED',
        destination: [
          ord.shippingAddress.line1,
          ord.shippingAddress.line2,
          `${ord.shippingAddress.city}${ord.shippingAddress.state ? `, ${ord.shippingAddress.state}` : ''} ${ord.shippingAddress.postalCode}`,
          ord.shippingAddress.country,
          ord.shippingAddress.phone ? `📞 ${ord.shippingAddress.phone}` : null,
        ].filter(Boolean).join(', '),
        snapshotItem: `${firstItem.name} ${firstItem.color} / Size ${firstItem.size}`,
        itemImage: firstItem.image || '/assets/images/cream_runner_pedestal_1788842341279.jpg',
        shade: firstItem.color,
        size: `${firstItem.sizeSystem && firstItem.sizeSystem !== 'Size' ? `${firstItem.sizeSystem} ` : firstItem.sizeSystem ? '' : 'US '}${firstItem.size}`,
        sku: firstItem.sku,
        status: mappedStatus,
        total: ord.total,
        awb: ord.trackingNumber || 'NOT ASSIGNED',
        carrier: ord.carrier || 'NOT ASSIGNED',
        events: (ord.timeline && ord.timeline.length > 0)
          ? ord.timeline.map((t) => ({
              title: t.status,
              date: `${t.date} ${t.time}`.trim() || 'LOGGED',
              detail: t.description,
              completed: t.completed,
            }))
          : [],
      };
    });

    return formattedLive;
  };

  const [orders, setOrders] = useState<OrderItem[]>(mapLiveOrders);

  // Sync orders when liveOrders updates
  useEffect(() => {
    setOrders(mapLiveOrders());
  }, [liveOrders]);
  const [selectedOrderId, setSelectedOrderId] = useState<string>(
    orders[0]?.id || 'ord-9821'
  );
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [showAwbModal, setShowAwbModal] = useState(false);
  const [newAwbVal, setNewAwbVal] = useState('');
  const [newCarrierVal, setNewCarrierVal] = useState('DHL Express Priority');

  const [showDispatchNoteModal, setShowDispatchNoteModal] = useState(false);

  useEffect(() => {
    if (focusWorkbench) {
      const el = document.getElementById('workbench-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [focusWorkbench]);

  const selectedOrder = orders.find((o) => o.id === selectedOrderId) || orders[0];

  const filteredOrders = orders.filter((o) => {
    const matchesStatus = statusFilter === 'ALL' || o.status === statusFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      o.orderNumber.toLowerCase().includes(q) ||
      o.client.toLowerCase().includes(q) ||
      o.snapshotItem.toLowerCase().includes(q) ||
      o.awb.toLowerCase().includes(q) ||
      o.sku.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  const handleStatusChange = async (newStatus: OrderItem['status']) => {
    if (!selectedOrder || !onUpdateOrderStatus) {
      onShowToast('Order status updates are unavailable');
      return;
    }
    const typeStatus = newStatus === 'SHIPPED'
      ? 'Shipped'
      : newStatus === 'DELIVERED'
        ? 'Delivered'
        : newStatus === 'PACKED'
          ? 'Packed'
          : 'Confirmed';
    if (!await onUpdateOrderStatus(selectedOrder.id, typeStatus)) return;
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.id !== selectedOrder.id) return ord;
        return {
          ...ord,
          status: newStatus,
          events: [
            ...ord.events,
            {
              title: `Advanced to ${newStatus}`,
              date: 'JUST NOW',
              detail: `Status update executed via Administrative Operations Command.`,
              completed: true,
            },
          ],
        };
      })
    );

  };

  const handleBatchDispatch = async () => {
    const pending = orders.filter((ord) => ord.status === 'PACKED' || ord.status === 'CONFIRMED');
    if (!pending.length || !onUpdateOrderStatus) {
      onShowToast('No eligible orders are available for dispatch');
      return;
    }
    for (const order of pending) {
      if (!await onUpdateOrderStatus(order.id, 'Shipped')) return;
    }
    setOrders((prev) => prev.map((ord) => pending.some(({ id }) => id === ord.id) ? { ...ord, status: 'SHIPPED' } : ord));
  };

  const handleSaveAwb = (e: React.FormEvent) => {
    e.preventDefault();
    onShowToast('Tracking updates are not connected to the backend');
  };

  if (!selectedOrder) {
    return (
      <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#faf7f2] min-h-full">
        <h1 className="font-headline text-3xl text-[#1a1816]">Fulfillment &amp; Logistics</h1>
        <p className="border border-[#d5cdc0] bg-[#ede7dd] p-5 text-sm text-[#59544c]">No order records were returned by the database.</p>
        <section id="workbench-section" className="space-y-3">
          <h2 className="font-headline text-2xl text-[#1a1816]">Returns &amp; Exchanges</h2>
          {exchanges.length === 0 ? <p className="text-sm text-[#59544c]">No return or exchange requests were returned by the database.</p> : exchanges.map((exchange) => (
            <article key={exchange.id} className="border border-[#d5cdc0] bg-[#ede7dd] p-4 text-sm">
              <div className="font-bold">{exchange.type} · {exchange.id} · {exchange.status}</div>
              <div>Order {exchange.orderId} · {exchange.productName} · Size {exchange.currentSize}{exchange.requestedSize ? ` → ${exchange.requestedSize}` : ''}</div>
              <p>{exchange.reason}</p>
              {exchange.status === 'Pending' && <div className="flex gap-2 pt-2">
                <button onClick={() => onUpdateExchangeStatus?.(exchange.id, 'Rejected')}>Reject</button>
                <button onClick={() => onUpdateExchangeStatus?.(exchange.id, 'Approved')}>Approve</button>
              </div>}
            </article>
          ))}
        </section>
      </div>
    );
  };

  return (
    <div className="p-4 sm:p-8 font-sans space-y-12 bg-[#faf7f2] min-h-full">
      {/* SECTION 1: FULFILLMENT & LOGISTICS COMMAND matching Image 3 */}
      <div className="space-y-6">
        {/* Header Metadata */}
        <div>
          <div className="font-mono text-[10px] text-[#7b6e54] tracking-[0.2em] uppercase mb-1">
            ORDER FULFILLMENT // ADMIN
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="font-headline text-3xl sm:text-4xl text-[#1a1816] tracking-tight">
                Fulfillment &amp; Logistics Command
              </h1>
              <p className="font-sans text-[13px] text-[#59544c] mt-1 max-w-2xl">
                End-to-end dispatch tracking, return appraisals, and size exchange allocations across regional hubs.
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono text-[11px] shrink-0">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#ede7dd] border border-[#d5cdc0] text-[#1a1816] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse"></span>
                <span className="uppercase tracking-wider">DATABASE ORDERS</span>
              </div>

              <button
                onClick={handleBatchDispatch}
                className="px-4 py-2 bg-[#141312] text-[#f5efe6] hover:bg-[#35322e] transition-colors uppercase tracking-widest font-bold cursor-pointer"
              >
                BATCH DISPATCH
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills matching Image 3 */}
        <div className="flex overflow-x-auto gap-2 border-b border-[#d5cdc0] pb-2 font-mono text-[10px] tracking-wider uppercase">
          {[
            { id: 'ALL', label: 'ALL ORDERS', count: orders.length.toString() },
            { id: 'CONFIRMED', label: 'CONFIRMED', count: orders.filter(o => o.status === 'CONFIRMED').length.toString() },
            { id: 'PACKED', label: 'PACKED', count: orders.filter(o => o.status === 'PACKED').length.toString() },
            { id: 'SHIPPED', label: 'SHIPPED', count: orders.filter(o => o.status === 'SHIPPED').length.toString(), dot: true },
            { id: 'DELIVERED', label: 'DELIVERED', count: orders.filter(o => o.status === 'DELIVERED').length.toString() },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id)}
              className={`px-3 py-1.5 border transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                statusFilter === tab.id
                  ? 'bg-[#141312] text-[#f5efe6] border-[#141312] font-bold'
                  : 'bg-[#ede7dd] border-[#d5cdc0] text-[#59544c] hover:bg-[#e4ddcf]'
              }`}
            >
              {tab.dot && <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"></span>}
              <span>{tab.label}</span>
              <span className="opacity-75">[{tab.count}]</span>
            </button>
          ))}
        </div>

        {/* Main Grid: Orders Table on Left + Selected Order Dossier on Right */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Left Column: Order Table + KPI cards */}
          <div className="xl:col-span-7 space-y-6">
            {/* Search and Hub Selector */}
            <div className="flex items-center gap-3 font-mono text-[11px]">
              <div className="flex items-center gap-2 bg-[#faf7f2] border border-[#d5cdc0] px-3 py-1.5 flex-1">
                <Search className="w-3.5 h-3.5 text-[#7b6e54]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by Order #, Client, AWB or SKU..."
                  className="w-full bg-transparent border-none outline-none text-[#1a1816] font-mono text-[11px]"
                />
              </div>

              <button
                onClick={() => {
                  const headers = ['Order Number', 'Date', 'Client', 'Destination', 'Item', 'Status', 'AWB', 'Carrier', 'Total (INR)'];
                  const rows = filteredOrders.map(o => [
                    `"${o.orderNumber}"`,
                    `"${o.date}"`,
                    `"${o.client}"`,
                    `"${o.destination.replace(/"/g, '""')}"`,
                    `"${o.snapshotItem.replace(/"/g, '""')}"`,
                    `"${o.status}"`,
                    `"${o.awb}"`,
                    `"${o.carrier || 'DHL'}"`,
                    o.total
                  ]);
                  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
                  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `vanta_logistics_manifest_${Date.now()}.csv`;
                  a.click();
                  URL.revokeObjectURL(url);
                  onShowToast('LOGISTICS MANIFEST CSV EXPORTED');
                }}
                className="p-2 bg-[#ede7dd] border border-[#d5cdc0] text-[#1a1816] hover:bg-[#e4ddcf] transition-colors cursor-pointer"
                title="Export Manifest CSV"
              >
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Orders Table matching Image 3 */}
            <div className="border border-[#d5cdc0] bg-[#ede7dd] overflow-hidden rounded-xs">
              <table className="w-full text-left font-mono text-[11px] border-collapse">
                <thead>
                  <tr className="border-b border-[#d5cdc0] text-[9px] text-[#7b6e54] tracking-widest uppercase bg-[#e4ddcf]">
                    <th className="p-2.5 w-8">
                      <input type="checkbox" className="accent-[#1a1816]" />
                    </th>
                    <th className="p-2.5">ORDER ID</th>
                    <th className="p-2.5">CLIENT</th>
                    <th className="p-2.5">SNAPSHOT ITEM</th>
                    <th className="p-2.5">STATUS</th>
                    <th className="p-2.5 text-right">TOTAL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d5cdc0]/70">
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-[#7b6e54] uppercase text-[10px]">
                        No dispatch orders match criteria
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((o) => {
                      const isSelected = selectedOrderId === o.id;
                      return (
                        <tr
                          key={o.id}
                          onClick={() => setSelectedOrderId(o.id)}
                          className={`hover:bg-[#ded6c9] transition-colors cursor-pointer ${
                            isSelected ? 'bg-[#ded6c9] font-bold' : ''
                          }`}
                        >
                          <td className="p-2.5" onClick={(e) => e.stopPropagation()}>
                            <input type="checkbox" className="accent-[#1a1816]" />
                          </td>
                          <td className="p-2.5">
                            <div className="font-bold text-[#1a1816]">{o.orderNumber}</div>
                            <div className="text-[9px] text-[#7b6e54]">{o.date}</div>
                          </td>
                          <td className="p-2.5">
                            <div className="font-bold text-[#1a1816]">{o.client}</div>
                            <div className="text-[9px] text-[#7b6e54] uppercase">{o.location}</div>
                          </td>
                          <td className="p-2.5 text-[#59544c] max-w-[160px] truncate">
                            {o.snapshotItem}
                          </td>
                          <td className="p-2.5">
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-bold uppercase rounded-2xs ${
                                o.status === 'SHIPPED'
                                  ? 'bg-[#dcfce7] text-[#166534]'
                                  : o.status === 'PACKED'
                                  ? 'bg-[#e0e7ff] text-[#3730a3]'
                                  : o.status === 'CONFIRMED'
                                  ? 'bg-[#fef3c7] text-[#92400e]'
                                  : o.status === 'EXCHANGE REQ'
                                  ? 'bg-[#ffedd5] text-[#9a3412]'
                                  : 'bg-[#f3f4f6] text-[#374151]'
                              }`}
                            >
                              {o.status === 'SHIPPED' && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"></span>
                              )}
                              <span>{o.status}</span>
                            </span>
                          </td>
                          <td className="p-2.5 text-right font-bold text-[#1a1816]">
                            ₹{o.total.toLocaleString()}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>

              {/* Table pagination row */}
              <div className="p-3 border-t border-[#d5cdc0] flex items-center justify-between font-mono text-[10px] text-[#7b6e54] bg-[#e4ddcf]">
                <span>SHOWING 1-5 OF 1,428 ENTRIES</span>
                <div className="flex items-center gap-1">
                  <span className="px-2 py-0.5 bg-[#141312] text-white font-bold">1</span>
                  <span className="px-2 py-0.5 hover:bg-[#d5cdc0] cursor-pointer">2</span>
                  <span className="px-2 py-0.5 hover:bg-[#d5cdc0] cursor-pointer">3</span>
                  <span className="px-1">...</span>
                  <span className="px-2 py-0.5 hover:bg-[#d5cdc0] cursor-pointer">286</span>
                </div>
              </div>
            </div>

            {/* 3 KPI metric blocks at bottom matching Image 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
              <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4">
                <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider">
                  DISPATCH VELOCITY
                </div>
                <div className="text-2xl font-bold text-[#1a1816] mt-1">3.8 hrs</div>
                <div className="text-[9px] text-[#59544c] mt-0.5">Atelier to Courier Handoff</div>
              </div>

              <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4">
                <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider">
                  CARRIER PERFORMANCE
                </div>
                <div className="text-2xl font-bold text-[#1a1816] mt-1">99.4%</div>
                <div className="text-[9px] text-[#59544c] mt-0.5">DHL Express Priority SLA</div>
              </div>

              <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4">
                <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider">
                  EXCHANGE RESOLUTION
                </div>
                <div className="text-2xl font-bold text-[#1a1816] mt-1">&lt; 14 mins</div>
                <div className="text-[9px] text-[#59544c] mt-0.5">Hub Reservation Latency</div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Dossier matching Image 3 */}
          <div className="xl:col-span-5 border border-[#d5cdc0] bg-[#ede7dd] p-5 sm:p-6 space-y-6 rounded-xs shadow-xs">
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between font-mono text-[9px] tracking-widest uppercase pb-2 border-b border-[#d5cdc0]">
                <span className="text-[#7b6e54]">DOSSIER DOS-9821</span>
                <span className="text-[#7b6e54]">AIR FREIGHT</span>
                <span className="text-[#16a34a] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"></span>
                  <span>{selectedOrder.status}</span>
                </span>
              </div>

              <div className="flex items-center justify-between mt-3">
                <h2 className="font-headline text-3xl font-bold text-[#1a1816] tracking-tight">
                  Order {selectedOrder.orderNumber}
                </h2>
              </div>

              {/* Status progression quick switcher */}
              <div className="mt-3 pt-2 border-t border-[#d5cdc0]/70 flex items-center gap-1.5 font-mono text-[9px]">
                <span className="text-[#7b6e54] font-bold uppercase mr-1">STATUS:</span>
                {(['CONFIRMED', 'PACKED', 'SHIPPED', 'DELIVERED'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => handleStatusChange(st)}
                    className={`px-2 py-0.5 border cursor-pointer uppercase transition-colors ${
                      selectedOrder.status === st
                        ? 'bg-[#141312] text-[#f5efe6] border-[#141312] font-bold'
                        : 'bg-[#faf7f2] border-[#d5cdc0] text-[#59544c] hover:bg-[#e4ddcf]'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Profile & Destination */}
            <div className="grid grid-cols-2 gap-4 font-mono text-[10px] pb-4 border-b border-[#d5cdc0]">
              <div>
                <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">
                  CLIENT PROFILE
                </div>
                <div className="font-bold text-[#1a1816] text-[11px] mt-1">
                  {selectedOrder.client}
                </div>
                <div className="text-[#7b6e54]">{selectedOrder.membership}</div>
                <div className="text-[#59544c] mt-0.5">{selectedOrder.lifetimeOrders}</div>
              </div>

              <div>
                <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">
                  DESTINATION
                </div>
                <div className="text-[#1a1816] mt-1 font-sans leading-relaxed text-[11px]">
                  {selectedOrder.destination}
                </div>
              </div>
            </div>

            {/* Authenticated Line Item */}
            <div>
              <div className="font-mono text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold mb-2">
                AUTHENTICATED LINE ITEM
              </div>
              <div className="bg-[#faf7f2] border border-[#d5cdc0] p-3 flex items-center gap-3">
                <img
                  src={selectedOrder.itemImage}
                  alt={selectedOrder.snapshotItem}
                  className="w-16 h-16 object-cover border border-[#d5cdc0] rounded-2xs"
                />
                <div className="flex-1 font-mono text-[10px]">
                  <div className="text-[9px] text-[#7b6e54] uppercase">VANTA CORE FOOTWEAR</div>
                  <div className="font-bold text-[#1a1816] text-[11px] uppercase">
                    {selectedOrder.snapshotItem.split(' / ')[0]}
                  </div>
                  <div className="text-[#59544c] mt-0.5">
                    Shade: {selectedOrder.shade} • Size: {selectedOrder.size}
                  </div>
                  <div className="text-[#7b6e54]">SKU: {selectedOrder.sku}</div>
                </div>
                <div className="font-mono font-bold text-right text-[#1a1816]">
                  <div className="text-[9px] text-[#7b6e54]">UNIT VALUE</div>
                  <div className="text-sm">₹{selectedOrder.total.toLocaleString()}</div>
                </div>
              </div>
            </div>

            {/* Dispatch Progression Timeline */}
            <div>
              <div className="flex items-center justify-between font-mono text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold mb-3">
                <span>DISPATCH PROGRESSION TIMELINE</span>
                <span className="text-[#1a1816] font-bold">AWB: {selectedOrder.awb}</span>
              </div>

              <div className="space-y-4 font-mono text-[10px]">
                {selectedOrder.events.map((evt, idx) => (
                  <div key={idx} className="flex items-start gap-3 relative">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        evt.completed
                          ? 'bg-[#141312] text-[#f5efe6]'
                          : 'border border-[#7b6e54] text-[#7b6e54]'
                      }`}
                    >
                      {evt.completed ? <Check className="w-3 h-3" /> : <Clock className="w-2.5 h-2.5" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between font-bold text-[#1a1816]">
                        <span>{evt.title}</span>
                        <span className="text-[9px] text-[#7b6e54] font-normal">{evt.date}</span>
                      </div>
                      <div className="text-[9px] text-[#59544c] mt-0.5">{evt.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Command Operations Action Buttons */}
            <div className="pt-4 border-t border-[#d5cdc0] space-y-2 font-mono text-[10px]">
              <button
                type="button"
                disabled
                className="w-full py-2.5 px-3 bg-[#ede7dd] border border-[#d5cdc0] flex items-center justify-between uppercase font-bold text-[#59544c] cursor-not-allowed"
                title="Tracking updates are not connected to the backend"
              >
                <span>TRACKING UPDATES UNAVAILABLE</span>
              </button>

              <button
                onClick={() => setShowDispatchNoteModal(true)}
                className="w-full py-2.5 px-3 bg-[#faf7f2] border border-[#d5cdc0] hover:bg-[#e4ddcf] transition-colors flex items-center justify-between uppercase font-bold text-[#1a1816] cursor-pointer"
              >
                <span>PRINT ATELIER DISPATCH NOTE &amp; CUSTOMS PACK</span>
                <Printer className="w-3.5 h-3.5" />
              </button>

              <p className="w-full border border-[#d5cdc0] bg-[#ede7dd] p-3 text-center text-[10px] uppercase tracking-wider text-[#59544c]">
                NFC certificate signing is not configured.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="workbench-section" className="pt-8 border-t-2 border-[#d5cdc0] space-y-6">
        <div>
          <div className="font-mono text-[10px] text-[#7b6e54] tracking-[0.2em] uppercase mb-1">RETURNS &amp; EXCHANGES</div>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#1a1816] tracking-tight">Returns &amp; Exchanges Workbench</h2>
        </div>
        {exchanges.length === 0 ? (
          <p className="border border-[#d5cdc0] bg-[#ede7dd] p-5 text-sm text-[#59544c]">No return or exchange requests were returned by the database.</p>
        ) : (
          <div className="space-y-3">
            {exchanges.map((exchange) => (
              <article key={exchange.id} className="border border-[#d5cdc0] bg-[#ede7dd] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1 text-sm">
                  <div className="font-bold text-[#1a1816]">{exchange.type} · {exchange.id}</div>
                  <div className="text-[#59544c]">Order {exchange.orderId} · {exchange.productName}</div>
                  <div className="text-[#59544c]">Size {exchange.currentSize}{exchange.requestedSize ? ` → ${exchange.requestedSize}` : ''} · {exchange.status}</div>
                  <div className="text-[#7b6e54]">{exchange.reason}</div>
                </div>
                {exchange.status === 'Pending' && (
                  <div className="flex gap-2">
                    <button onClick={() => onUpdateExchangeStatus?.(exchange.id, 'Rejected')} className="px-3 py-2 border border-[#d5cdc0] text-xs font-bold uppercase">Reject</button>
                    <button onClick={() => onUpdateExchangeStatus?.(exchange.id, 'Approved')} className="px-3 py-2 bg-[#141312] text-[#f5efe6] text-xs font-bold uppercase">Approve</button>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>

      {/* MODAL 1: Update AWB & Courier Node */}
      {showAwbModal && (
        <div className="fixed inset-0 z-50 bg-[#1a1816]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#faf7f2] border border-[#d5cdc0] max-w-md w-full p-6 font-mono text-xs shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#d5cdc0]">
              <h3 className="font-headline text-xl font-bold text-[#1a1816]">
                Assign Air Waybill (AWB)
              </h3>
              <span className="text-[10px] text-[#7b6e54] font-bold">{selectedOrder.orderNumber}</span>
            </div>

            <form onSubmit={handleSaveAwb} className="space-y-4">
              <div>
                <label className="block text-[9px] font-bold uppercase text-[#1a1816] mb-1">
                  CARRIER / NODE *
                </label>
                <select
                  value={newCarrierVal}
                  onChange={(e) => setNewCarrierVal(e.target.value)}
                  className="w-full bg-white border border-[#d5cdc0] p-2 text-[11px] font-mono outline-none"
                >
                  <option value="DHL Express Priority">DHL Express Priority</option>
                  <option value="FedEx International Priority">FedEx International Priority</option>
                  <option value="Chronopost Air Node">Chronopost Air Node</option>
                  <option value="Yamato Transport Air">Yamato Transport Air</option>
                </select>
              </div>

              <div>
                <label className="block text-[9px] font-bold uppercase text-[#1a1816] mb-1">
                  AWB TRACKING NUMBER *
                </label>
                <input
                  type="text"
                  required
                  value={newAwbVal}
                  onChange={(e) => setNewAwbVal(e.target.value)}
                  placeholder="e.g. DHL-9842-IT"
                  className="w-full bg-white border border-[#d5cdc0] p-2 text-[11px] font-mono outline-none uppercase font-bold"
                />
              </div>

              <div className="pt-3 flex justify-end gap-2 border-t border-[#d5cdc0]">
                <button
                  type="button"
                  onClick={() => setShowAwbModal(false)}
                  className="px-3.5 py-1.5 uppercase font-bold text-[10px] text-[#59544c] hover:bg-[#ede7dd]"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#141312] text-[#f5efe6] uppercase font-bold text-[10px] hover:bg-[#35322e]"
                >
                  UPDATE NODE &amp; DISPATCH
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: Print Atelier Dispatch Note & Customs Pack */}
      {showDispatchNoteModal && (
        <div className="fixed inset-0 z-50 bg-[#1a1816]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#faf7f2] border border-[#d5cdc0] max-w-2xl w-full p-6 sm:p-8 font-mono text-xs shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#d5cdc0]">
              <div>
                <div className="text-[9px] text-[#7b6e54] uppercase tracking-widest font-bold">
                  ATELIER DISPATCH MANIFEST // FORM CN23
                </div>
                <h3 className="font-headline text-2xl font-bold text-[#1a1816]">
                  Consignment #{selectedOrder.orderNumber}
                </h3>
              </div>
              <button
                onClick={() => setShowDispatchNoteModal(false)}
                className="text-[#7b6e54] hover:text-[#1a1816] font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 border border-[#d5cdc0] p-4 bg-[#ede7dd] text-[10px]">
              <div>
                <div className="text-[9px] text-[#7b6e54] font-bold uppercase mb-1">CONSIGNOR (ORIGIN)</div>
                <div className="font-bold text-[#1a1816]">Consignor details not configured</div>
              </div>
              <div>
                <div className="text-[9px] text-[#7b6e54] font-bold uppercase mb-1">CONSIGNEE (RECIPIENT)</div>
                <div className="font-bold text-[#1a1816]">{selectedOrder.client}</div>
                <div>{selectedOrder.destination}</div>
                <div>AWB: {selectedOrder.awb}</div>
              </div>
            </div>

            <div className="border border-[#d5cdc0] p-4 bg-white text-[10px] space-y-2">
              <div className="text-[9px] text-[#7b6e54] font-bold uppercase mb-2">CUSTOMS DECLARATION OF CONTENTS</div>
              <div className="flex justify-between py-1 border-b border-[#d5cdc0]/50 font-bold text-[#1a1816]">
                <span>ITEM DESCRIPTION</span>
                <span>HARMONIZED CODE</span>
                <span>QTY</span>
                <span>DECLARED VALUE</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#d5cdc0]/50 text-[#59544c]">
                <span>{selectedOrder.snapshotItem}</span>
                <span>Not recorded</span>
                <span>1 PR</span>
                <span className="font-bold text-[#1a1816]">₹{selectedOrder.total.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#d5cdc0]">
              <div className="text-[9px] text-[#7b6e54]">
                Dispatch details shown here come from the order record.
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowDispatchNoteModal(false)}
                  className="px-3.5 py-1.5 uppercase font-bold text-[10px] text-[#59544c] hover:bg-[#ede7dd]"
                >
                  CLOSE
                </button>
                <button
                  type="button"
                  onClick={() => {
                    window.print();
                    onShowToast('Browser print dialog opened');
                  }}
                  className="px-4 py-1.5 bg-[#141312] text-[#f5efe6] uppercase font-bold text-[10px] hover:bg-[#35322e] flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>PRINT MANIFEST</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
