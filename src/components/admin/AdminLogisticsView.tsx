import React, { useState, useEffect } from 'react';
import {
  Truck,
  CheckCircle2,
  Clock,
  Package,
  Download,
  Search,
  ChevronDown,
  ShieldCheck,
  FileText,
  Lock,
  ArrowRight,
  Check,
  AlertCircle,
  RotateCcw,
  Printer,
  Copy,
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

const INITIAL_ORDERS: OrderItem[] = [
  {
    id: 'ord-9821',
    orderNumber: '#VNT-9821',
    date: 'OCT 24 // 06:12',
    client: 'Julian Mercer',
    location: 'Milan, IT',
    membership: 'Verified Member // Tier 01',
    lifetimeOrders: '8 Lifetime Orders // ₹3.4L',
    destination: 'Via Montenapoleone 14, Piano 3, Apt 12B, 20121 Milan, Italy',
    snapshotItem: 'X-01 Core Runner Travertine / US 9',
    itemImage: '/src/assets/images/cream_runner_pedestal_1788842341279.jpg',
    shade: 'Cream Travertine',
    size: 'EU 43 / US 9',
    sku: 'VNT-X01-CRM-09',
    status: 'SHIPPED',
    total: 42500,
    awb: 'DHL-9482-IT',
    events: [
      {
        title: 'Order Confirmed & Payment Cleared',
        date: 'OCT 24 06:12',
        detail: 'AES-256 Tokenized Transaction Validated',
        completed: true,
      },
      {
        title: 'Packed in Atelier Presentation Box',
        date: 'OCT 24 07:30',
        detail: 'NFC Tag #88A9F Sealed // Inspector #04',
        completed: true,
      },
      {
        title: 'Departed Milan Malpensa Air Freight Hub',
        date: 'OCT 24 09:15',
        detail: 'In Transit via DHL Express Priority 10:30',
        completed: true,
      },
      {
        title: 'Out for Courier Final Mile Delivery',
        date: 'EST OCT 25',
        detail: 'Local Milan Courier Van Node 02',
        completed: false,
      },
      {
        title: 'Signed Handover & Archive',
        date: 'EST OCT 25',
        detail: 'Signature Required upon recipient reception',
        completed: false,
      },
    ],
  },
  {
    id: 'ord-9820',
    orderNumber: '#VNT-9820',
    date: 'OCT 24 // 05:44',
    client: 'Hélène Moreau',
    location: 'Paris, FR',
    membership: 'Verified Member // Tier 02',
    lifetimeOrders: '4 Lifetime Orders // ₹1.6L',
    destination: '42 Rue du Faubourg Saint-Honoré, 75008 Paris, France',
    snapshotItem: 'Aero Minimalist Derby Obsidian / US 8',
    itemImage: '/src/assets/images/void_shadow_low_1788838363234.jpg',
    shade: 'Obsidian Black',
    size: 'EU 42 / US 8',
    sku: 'VNT-M04-DER-01',
    status: 'PACKED',
    total: 38200,
    awb: 'DHL-3912-FR',
    events: [
      {
        title: 'Order Confirmed & Payment Cleared',
        date: 'OCT 24 05:44',
        detail: 'Card Authorized via Stripe Node',
        completed: true,
      },
      {
        title: 'Packed in Atelier Presentation Box',
        date: 'OCT 24 08:10',
        detail: 'NFC Tag #41F9B Verified',
        completed: true,
      },
      {
        title: 'Awaiting Malpensa Express Handoff',
        date: 'EST OCT 24',
        detail: 'Courier dispatch window 14:00',
        completed: false,
      },
    ],
  },
  {
    id: 'ord-9819',
    orderNumber: '#VNT-9819',
    date: 'OCT 23 // 22:18',
    client: 'Caspar Lindqvist',
    location: 'Stockholm, SE',
    membership: 'Patron Archival Circle',
    lifetimeOrders: '12 Lifetime Orders // ₹5.8L',
    destination: 'Biblioteksgatan 9, 111 46 Stockholm, Sweden',
    snapshotItem: 'Monolith Mules S-02 Raw Slate / US 11',
    itemImage: '/src/assets/images/taupe_runner_pedestal_1788842355799.jpg',
    shade: 'Raw Slate',
    size: 'EU 45 / US 11',
    sku: 'VNT-S02-MUL-11',
    status: 'CONFIRMED',
    total: 29800,
    awb: 'POSTNORD-7812',
    events: [
      {
        title: 'Order Confirmed & Allocation Reserved',
        date: 'OCT 23 22:18',
        detail: 'Stock Reserved at Milan MXP Vault',
        completed: true,
      },
      {
        title: 'Queue for Precision Assembly Box',
        date: 'EST OCT 24',
        detail: 'Scheduled for Box inspection 11:00',
        completed: false,
      },
    ],
  },
  {
    id: 'ord-9818',
    orderNumber: '#VNT-9818',
    date: 'OCT 23 // 19:40',
    client: 'Siddharth Rao',
    location: 'Mumbai, IN',
    membership: 'Verified Member // Tier 01',
    lifetimeOrders: '6 Lifetime Orders // ₹2.9L',
    destination: 'Altamount Road, Tower B-14, Cumballa Hill, Mumbai 400026',
    snapshotItem: 'Tectonic Chelsea Boot Nocciola / US 10',
    itemImage: '/src/assets/images/core_silhouettes_shoe_1788838314612.jpg',
    shade: 'Nocciola Brown',
    size: 'EU 44 / US 10',
    sku: 'VNT-C01-NOC-10',
    status: 'EXCHANGE REQ',
    total: 54000,
    awb: 'BLUEDART-8821',
    events: [
      {
        title: 'Exchange Ticket #EX-104 Initiated',
        date: 'OCT 23 19:40',
        detail: 'Requested swap from US 9 to US 10',
        completed: true,
      },
      {
        title: 'Under Optical Appraisal Workbench',
        date: 'OCT 24 07:15',
        detail: 'Awaiting sole optical QC verification',
        completed: true,
      },
    ],
  },
  {
    id: 'ord-9817',
    orderNumber: '#VNT-9817',
    date: 'OCT 23 // 14:10',
    client: 'Evelyn Zhang',
    location: 'Singapore, SG',
    membership: 'Verified Member // Tier 01',
    lifetimeOrders: '9 Lifetime Orders // ₹4.1L',
    destination: '10 Marina Boulevard, Tower 2 #24-02, Singapore 018983',
    snapshotItem: 'X-01 Core Runner Chalk Bone / US 7',
    itemImage: '/src/assets/images/cream_runner_pedestal_1788842341279.jpg',
    shade: 'Chalk Bone',
    size: 'EU 40 / US 7',
    sku: 'VNT-X01-CHK-07',
    status: 'DELIVERED',
    total: 42500,
    awb: 'DHL-1194-SG',
    events: [
      {
        title: 'Delivered and Signed Handover',
        date: 'OCT 23 14:10',
        detail: 'Cryptographic NFC chip authenticated by client',
        completed: true,
      },
    ],
  },
];

interface AdminLogisticsViewProps {
  orders?: Order[];
  onUpdateOrderStatus?: (orderId: string, newStatus: any) => void;
  exchanges?: ExchangeReturnRequest[];
  onUpdateExchangeStatus?: (exchangeId: string, status: 'Approved' | 'Rejected') => void;
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
        name: 'Vanta Specimen',
        color: 'Onyx',
        size: 'US 9',
        sku: 'VNT-SPEC-01',
        image: '/src/assets/images/cream_runner_pedestal_1788842341279.jpg',
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
        date: ord.date || 'OCT 24 // 12:00',
        client: ord.shippingAddress.name || 'Atelier Client',
        location: `${ord.shippingAddress.city}, ${ord.shippingAddress.country}`,
        membership: 'Verified Client // Archive Member',
        lifetimeOrders: 'Verified Purchase Record',
        destination: `${ord.shippingAddress.line1}, ${ord.shippingAddress.city}, ${ord.shippingAddress.postalCode}, ${ord.shippingAddress.country}`,
        snapshotItem: `${firstItem.name} ${firstItem.color} / Size ${firstItem.size}`,
        itemImage: firstItem.image || '/src/assets/images/cream_runner_pedestal_1788842341279.jpg',
        shade: firstItem.color,
        size: `US ${firstItem.size}`,
        sku: firstItem.sku,
        status: mappedStatus,
        total: ord.total,
        awb: ord.trackingNumber || 'DHL-PENDING',
        carrier: ord.carrier || 'DHL Express Priority',
        events: (ord.timeline && ord.timeline.length > 0)
          ? ord.timeline.map((t) => ({
              title: t.status,
              date: `${t.date} ${t.time}`.trim() || 'LOGGED',
              detail: t.description,
              completed: t.completed,
            }))
          : [
              {
                title: 'Order Confirmed & Payment Cleared',
                date: ord.date || 'OCT 24',
                detail: 'Cryptographic Payment Token Authorized',
                completed: true,
              },
            ],
      };
    });

    const liveIds = new Set(formattedLive.map((o) => o.id));
    const extraInitials = INITIAL_ORDERS.filter((o) => !liveIds.has(o.id));
    return [...formattedLive, ...extraInitials];
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
  const [selectedHub, setSelectedHub] = useState('HUB: MILAN');

  // Modals state
  const [showAwbModal, setShowAwbModal] = useState(false);
  const [newAwbVal, setNewAwbVal] = useState('');
  const [newCarrierVal, setNewCarrierVal] = useState('DHL Express Priority');

  const [showDispatchNoteModal, setShowDispatchNoteModal] = useState(false);
  const [showNfcCertModal, setShowNfcCertModal] = useState(false);

  // Exchange state
  const [exchangeApproved, setExchangeApproved] = useState(false);
  const [qcChecked, setQcChecked] = useState({
    soles: true,
    packaging: true,
    nfc: true,
  });

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

  const handleStatusChange = (newStatus: OrderItem['status']) => {
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

    if (onUpdateOrderStatus) {
      const typeStatus =
        newStatus === 'SHIPPED'
          ? 'Shipped'
          : newStatus === 'DELIVERED'
          ? 'Delivered'
          : newStatus === 'PACKED'
          ? 'Packed'
          : 'Confirmed';
      onUpdateOrderStatus(selectedOrder.id, typeStatus);
    }

    onShowToast(`ORDER ${selectedOrder.orderNumber} ADVANCED TO: ${newStatus}`);
  };

  const handleBatchDispatch = () => {
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.status === 'PACKED' || ord.status === 'CONFIRMED') {
          if (onUpdateOrderStatus) onUpdateOrderStatus(ord.id, 'Shipped');
          return { ...ord, status: 'SHIPPED' as const };
        }
        return ord;
      })
    );
    onShowToast('BATCH DISPATCH COMPLETE // ALL PACKED ORDERS ADVANCED TO SHIPPED');
  };

  const handleSaveAwb = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAwbVal) return;
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.id !== selectedOrder.id) return ord;
        return {
          ...ord,
          awb: newAwbVal.toUpperCase(),
          carrier: newCarrierVal,
        };
      })
    );
    setShowAwbModal(false);
    onShowToast(`AWB UPDATED: ${newAwbVal.toUpperCase()} (${newCarrierVal})`);
  };

  const handleApproveExchange = () => {
    setExchangeApproved(true);
    if (exchanges.length > 0 && onUpdateExchangeStatus) {
      onUpdateExchangeStatus(exchanges[0].id, 'Approved');
    }
    onShowToast('EXCHANGE APPROVED: RESERVED SPECIMEN ALLOCATION IN MILAN MXP-01 HUB');
  };

  const handleRejectExchange = () => {
    if (exchanges.length > 0 && onUpdateExchangeStatus) {
      onUpdateExchangeStatus(exchanges[0].id, 'Rejected');
    }
    onShowToast('CASE RE-ROUTED TO STORE CREDIT // CLIENT NOTIFIED');
  };

  const handleGenerateNFC = () => {
    setShowNfcCertModal(true);
  };

  return (
    <div className="p-4 sm:p-8 font-sans space-y-12 bg-[#faf7f2] min-h-full">
      {/* SECTION 1: FULFILLMENT & LOGISTICS COMMAND matching Image 3 */}
      <div className="space-y-6">
        {/* Header Metadata */}
        <div>
          <div className="font-mono text-[10px] text-[#7b6e54] tracking-[0.2em] uppercase mb-1">
            OPERATIONAL PROTOCOL // NODE 04
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
                <span className="uppercase tracking-wider">DISPATCH ENGINE ACTIVE</span>
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

              <div className="flex items-center gap-1.5 bg-[#faf7f2] border border-[#d5cdc0] px-3 py-1.5 text-[#1a1816]">
                <select
                  value={selectedHub}
                  onChange={(e) => setSelectedHub(e.target.value)}
                  className="bg-transparent border-none outline-none font-bold uppercase cursor-pointer"
                >
                  <option value="HUB: MILAN">HUB: MILAN</option>
                  <option value="HUB: PARIS">HUB: PARIS</option>
                  <option value="HUB: LONDON">HUB: LONDON</option>
                  <option value="HUB: TOKYO">HUB: TOKYO</option>
                </select>
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
                onClick={() => {
                  setNewAwbVal(selectedOrder.awb);
                  setNewCarrierVal(selectedOrder.carrier || 'DHL Express Priority');
                  setShowAwbModal(true);
                }}
                className="w-full py-2.5 px-3 bg-[#faf7f2] border border-[#d5cdc0] hover:bg-[#e4ddcf] transition-colors flex items-center justify-between uppercase font-bold text-[#1a1816] cursor-pointer"
              >
                <span>UPDATE TRACKING AWB &amp; COURIER NODE</span>
                <ArrowRight className="w-3 h-3" />
              </button>

              <button
                onClick={() => setShowDispatchNoteModal(true)}
                className="w-full py-2.5 px-3 bg-[#faf7f2] border border-[#d5cdc0] hover:bg-[#e4ddcf] transition-colors flex items-center justify-between uppercase font-bold text-[#1a1816] cursor-pointer"
              >
                <span>PRINT ATELIER DISPATCH NOTE &amp; CUSTOMS PACK</span>
                <Printer className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleGenerateNFC}
                className="w-full py-2.5 px-3 bg-[#141312] text-[#f5efe6] hover:bg-[#35322e] transition-colors flex items-center justify-center gap-2 uppercase font-bold tracking-widest cursor-pointer shadow-sm"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>GENERATE CRYPTOGRAPHIC AUTHENTICITY NFC CERTIFICATE</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: RETURNS & EXCHANGES WORKBENCH matching Image 3 (Lower Half) */}
      <div id="workbench-section" className="pt-8 border-t-2 border-[#d5cdc0] space-y-6">
        <div>
          <div className="font-mono text-[10px] text-[#7b6e54] tracking-[0.2em] uppercase mb-1">
            APPRAISAL &amp; ALLOCATION BENCH
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#1a1816] tracking-tight">
              Returns &amp; Exchanges Workbench
            </h2>
            <div className="font-mono text-[10px] text-[#7b6e54] flex items-center gap-2">
              <span className="font-bold text-[#1a1816]">
                ACTIVE QUEUE: {Math.max(1, exchanges.length)} CASE{exchanges.length > 1 ? 'S' : ''}
              </span>
              <span>•</span>
              <span className="text-[#16a34a] font-bold">AUTO-ALLOCATION ENGINE: LIVE</span>
            </div>
          </div>
        </div>

        {/* Case Card matching Image 3 */}
        <div className="border border-[#d5cdc0] bg-[#ede7dd] p-5 sm:p-8 space-y-6 rounded-xs shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#d5cdc0] font-mono text-[10px]">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#1a1816] bg-[#141312] text-[#f5efe6] px-2 py-0.5">
                {exchanges[0]?.id ? `CASE #${exchanges[0].id}` : 'CASE #EX-104'}
              </span>
              <span className="text-[#59544c]">
                ORIGINAL ORDER {exchanges[0]?.orderId ? `#${exchanges[0].orderId}` : '#VNT-9780'}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[#16a34a] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse"></span>
              <span>INTELLIGENT SIZE SWAP DISPATCH</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Returned Artifact vs Desired Replacement */}
            <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left: Returned Artifact */}
                <div className="bg-[#faf7f2] border border-[#d5cdc0] p-4 font-mono text-[10px]">
                  <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold mb-2">
                    RETURNED ARTIFACT (CURRENT)
                  </div>
                  <div className="flex gap-3">
                    <img
                      src="/src/assets/images/cream_runner_pedestal_1788842341279.jpg"
                      alt="Returned"
                      className="w-20 h-20 object-cover border border-[#d5cdc0] rounded-2xs"
                    />
                    <div className="space-y-1">
                      <div className="font-bold text-[#1a1816] text-[11px]">
                        VANTA X-01 Core Runner
                      </div>
                      <div className="text-[#59544c]">Travertine // Size US 9 / EU 43</div>
                      <div className="text-[#7b6e54] text-[9px]">
                        Status: Arrived at Milan Hub for Optical QC
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#d5cdc0] font-sans text-[11px] text-[#59544c] italic">
                    <span className="font-mono not-italic font-bold text-[9px] text-[#7b6e54] block mb-0.5">
                      Client Reason:
                    </span>
                    {exchanges[0]?.reason
                      ? `"${exchanges[0].reason}"`
                      : '"Width along instep too structured; requesting Size 10 for ease of architectural wear."'}
                  </div>
                </div>

                {/* Right: Desired Replacement Allocation */}
                <div className="bg-[#faf7f2] border border-[#d5cdc0] p-4 font-mono text-[10px] flex flex-col justify-between">
                  <div>
                    <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold mb-2">
                      DESIRED REPLACEMENT ALLOCATION
                    </div>
                    <div className="flex gap-3">
                      <img
                        src="/src/assets/images/cream_runner_pedestal_1788842341279.jpg"
                        alt="Replacement"
                        className="w-20 h-20 object-cover border border-[#d5cdc0] rounded-2xs"
                      />
                      <div className="space-y-1">
                        <div className="font-bold text-[#1a1816] text-[11px]">
                          VANTA X-01 Core Runner
                        </div>
                        <div className="text-[#59544c]">
                          Travertine // {exchanges[0]?.desiredSize ? `Size US ${exchanges[0].desiredSize}` : 'Size US 10 / EU 44'}
                        </div>
                        <div className="text-[#7b6e54] text-[9px]">SKU: VNT-X01-CRM-10</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#d5cdc0]">
                    <div className="px-3 py-2 bg-[#dcfce7] border border-[#bbf7d0] text-[#166534] font-bold text-[10px] flex items-center justify-between">
                      <span>✓ SIZE 10 AVAILABLE IN MILAN HUB (3 UNITS)</span>
                      <span className="bg-[#166534] text-white text-[8px] px-1.5 py-0.5">READY</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Automation Decision & Buttons */}
              <div className="bg-[#f5efe6] border border-[#d5cdc0] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[10px]">
                <div className="max-w-md">
                  <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold mb-0.5">
                    RECOMMENDED AUTOMATION DECISION
                  </div>
                  <div className="text-[#59544c]">
                    Instant reservation locks Milan inventory SKU #VNT-X01-CRM-10 with zero latency.
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={handleRejectExchange}
                    className="px-3 py-2 bg-[#ede7dd] border border-[#d5cdc0] hover:bg-[#e4ddcf] font-bold uppercase text-[#1a1816] cursor-pointer"
                  >
                    UNAVAILABLE - STORE CREDIT
                  </button>

                  <button
                    onClick={handleApproveExchange}
                    className={`px-4 py-2 uppercase font-bold tracking-widest transition-colors cursor-pointer ${
                      exchangeApproved
                        ? 'bg-[#16a34a] text-white'
                        : 'bg-[#141312] text-[#f5efe6] hover:bg-[#35322e]'
                    }`}
                  >
                    {exchangeApproved ? '✓ APPROVED & RESERVED' : '✓ APPROVE & RESERVE SIZE'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Hub Inventory Spread & Checklist matching Image 3 */}
            <div className="lg:col-span-4 space-y-4 font-mono text-[10px]">
              {/* Hub Inventory Spread */}
              <div className="bg-[#faf7f2] border border-[#d5cdc0] p-4 space-y-2">
                <div className="flex items-center justify-between text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold pb-2 border-b border-[#d5cdc0]">
                  <span>HUB INVENTORY SPREAD</span>
                  <span className="text-[#1a1816]">MILAN (MXP-01)</span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between py-1 border-b border-[#d5cdc0]/50">
                    <span>US 8 (EU 41)</span>
                    <span className="font-bold text-[#1a1816]">1 UNIT IN VAULT</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-[#d5cdc0]/50">
                    <span>US 9 (EU 42.5)</span>
                    <span className="text-[#b45309] font-bold">RESERVED ALLOCATION</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-[#d5cdc0]/50 bg-[#e4ddcf]/50 px-1 font-bold">
                    <span>US 10 (EU 44)</span>
                    <span className="text-[#166534]">3 UNITS ALLOCABLE</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-[#d5cdc0]/50">
                    <span>US 11 (EU 45)</span>
                    <span className="text-[#ef4444] font-bold">0 UNITS (WAITLIST: 4)</span>
                  </div>
                </div>

                <div className="pt-2 text-[9px] text-[#7b6e54] text-right">
                  CENTRAL WAREHOUSE SYNC: 2 MINS AGO
                </div>
              </div>

              {/* Protocol Checklist */}
              <div className="bg-[#faf7f2] border border-[#d5cdc0] p-4 space-y-2.5">
                <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold pb-1 border-b border-[#d5cdc0]">
                  EXCHANGE RETURN POLICY PROTOCOL
                </div>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={qcChecked.soles}
                    onChange={(e) => setQcChecked({ ...qcChecked, soles: e.target.checked })}
                    className="accent-[#1a1816] mt-0.5"
                  />
                  <span className="text-[#59544c]">
                    Footwear soles must pass 100% micro-abrasion optic inspection.
                  </span>
                </label>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={qcChecked.packaging}
                    onChange={(e) => setQcChecked({ ...qcChecked, packaging: e.target.checked })}
                    className="accent-[#1a1816] mt-0.5"
                  />
                  <span className="text-[#59544c]">
                    All internal archival packaging and numbered dust bags present.
                  </span>
                </label>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={qcChecked.nfc}
                    onChange={(e) => setQcChecked({ ...qcChecked, nfc: e.target.checked })}
                    className="accent-[#1a1816] mt-0.5"
                  />
                  <span className="text-[#59544c]">
                    Cryptographic identity chip verified intact and non-tampered.
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
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
                <div className="font-bold text-[#1a1816]">VANTA ATELIER MILANO HUB</div>
                <div>Via Montenapoleone 8B</div>
                <div>20121 Milan, Italy</div>
                <div>VAT: IT-88291048201</div>
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
                <span>HS 6404.11.00</span>
                <span>1 PR</span>
                <span className="font-bold text-[#1a1816]">₹{selectedOrder.total.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#d5cdc0]">
              <div className="text-[9px] text-[#7b6e54]">
                SEAL ID: SHA-256//B7A1-9492-F029-A512 // CLEARED FOR EXPORT
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
                    onShowToast('PRINT JOB DISPATCHED TO ATELIER HARDWARE SPOOLER');
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

      {/* MODAL 3: Generate Cryptographic NFC Certificate */}
      {showNfcCertModal && (
        <div className="fixed inset-0 z-50 bg-[#1a1816]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#faf7f2] border border-[#d5cdc0] max-w-lg w-full p-6 sm:p-8 font-mono text-xs shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#d5cdc0]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#16a34a]" />
                <h3 className="font-headline text-2xl font-bold text-[#1a1816]">
                  NFC Authenticity Certificate
                </h3>
              </div>
              <button
                onClick={() => setShowNfcCertModal(false)}
                className="text-[#7b6e54] hover:text-[#1a1816] font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <div className="border border-[#d5cdc0] p-5 bg-[#ede7dd] space-y-3 text-[11px]">
              <div className="flex justify-between">
                <span className="text-[#7b6e54]">SPECIMEN IDENTITY:</span>
                <span className="font-bold text-[#1a1816]">{selectedOrder.snapshotItem}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7b6e54]">ORDER NUMBER:</span>
                <span className="font-bold text-[#1a1816]">{selectedOrder.orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7b6e54]">AUTHENTICATION SEAL:</span>
                <span className="text-[#16a34a] font-bold">CRYPTO-TAG NXP NTAG424 DNA</span>
              </div>
              <div className="pt-2 border-t border-[#d5cdc0] space-y-1">
                <span className="text-[9px] text-[#7b6e54] block uppercase font-bold">
                  SHA-256 PROVENANCE CERTIFICATE HASH:
                </span>
                <div className="p-2 bg-white border border-[#d5cdc0] font-mono text-[10px] break-all text-[#1a1816]">
                  e4b1049b7a3746cfa35824c0d12e6245f7823e41bcf03a29487fa8395bd92041
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#d5cdc0]">
              <button
                onClick={() => setShowNfcCertModal(false)}
                className="px-3.5 py-1.5 uppercase font-bold text-[10px] text-[#59544c] hover:bg-[#ede7dd]"
              >
                CLOSE
              </button>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText('e4b1049b7a3746cfa35824c0d12e6245f7823e41bcf03a29487fa8395bd92041');
                  onShowToast('CERTIFICATE HASH COPIED TO CLIPBOARD');
                }}
                className="px-4 py-1.5 bg-[#141312] text-[#f5efe6] uppercase font-bold text-[10px] hover:bg-[#35322e] flex items-center gap-1.5 cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>COPY HASH</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
