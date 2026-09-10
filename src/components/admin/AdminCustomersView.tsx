import React, { useState } from 'react';
import { Search, UserCheck, ShieldCheck, ArrowRight, Download, Package, Mail, MapPin, Phone, Award } from 'lucide-react';
import { CustomerItem, Order } from '../../types';

interface AdminCustomersViewProps {
  orders?: Order[];
  onShowToast: (msg: string) => void;
  onBackToOrders?: () => void;
  onSelectOrder?: (orderId: string) => void;
}

const DEFAULT_CUSTOMERS: CustomerItem[] = [
  {
    id: 'cust-1',
    name: 'Julian Mercer',
    email: 'j.mercer@atelier-milano.it',
    phone: '+39 02 8942 1109',
    location: 'Milan, Italy',
    tier: 'VIP TIER 01',
    lifetimeOrders: 8,
    totalSpent: 340000,
    status: 'VIP',
    memberSince: 'OCT 2024',
  },
  {
    id: 'cust-2',
    name: 'Hélène Moreau',
    email: 'helene.moreau@chambre-paris.fr',
    phone: '+33 1 42 68 55 00',
    location: 'Paris, France',
    tier: 'VERIFIED TIER 02',
    lifetimeOrders: 4,
    totalSpent: 160000,
    status: 'VERIFIED',
    memberSince: 'JAN 2025',
  },
  {
    id: 'cust-3',
    name: 'Marcus Vance',
    email: 'm.vance@vanta-vault.jp',
    phone: '+81 3 5555 0198',
    location: 'Tokyo, Japan',
    tier: 'VIP TIER 01 (PATRON)',
    lifetimeOrders: 12,
    totalSpent: 580000,
    status: 'VIP',
    memberSince: 'MAY 2024',
  },
  {
    id: 'cust-4',
    name: 'Evelyn Zhang',
    email: 'evelyn.zhang@marina-bay.sg',
    phone: '+65 6789 2200',
    location: 'Singapore, SG',
    tier: 'VIP TIER 01',
    lifetimeOrders: 9,
    totalSpent: 410000,
    status: 'VIP',
    memberSince: 'AUG 2024',
  },
  {
    id: 'cust-5',
    name: 'Arthur Pendelton',
    email: 'arthur.p@mayfair-advisors.co.uk',
    phone: '+44 20 7946 0912',
    location: 'London, UK',
    tier: 'CLIENT TIER 03',
    lifetimeOrders: 2,
    totalSpent: 85000,
    status: 'VERIFIED',
    memberSince: 'NOV 2025',
  },
  {
    id: 'cust-6',
    name: 'Siddharth Rao',
    email: 'siddharth.rao@monolith-labs.in',
    phone: '+91 98450 12345',
    location: 'Bangalore, India',
    tier: 'VIP TIER 01',
    lifetimeOrders: 6,
    totalSpent: 275000,
    status: 'VIP',
    memberSince: 'FEB 2025',
  },
];

export const AdminCustomersView: React.FC<AdminCustomersViewProps> = ({
  orders = [],
  onShowToast,
  onBackToOrders,
  onSelectOrder,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState('ALL TIERS');
  const [inspectingCustomer, setInspectingCustomer] = useState<CustomerItem | null>(null);

  // Filter customers
  const filteredCustomers = DEFAULT_CUSTOMERS.filter((c) => {
    const matchesSearch =
      !searchQuery.trim() ||
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTier =
      selectedTier === 'ALL TIERS' ||
      (selectedTier === 'VIP ONLY' && c.tier.includes('VIP')) ||
      (selectedTier === 'TIER 01' && c.tier.includes('TIER 01')) ||
      (selectedTier === 'TIER 02' && c.tier.includes('TIER 02'));
    return matchesSearch && matchesTier;
  });

  const totalClientsCount = 1428;
  const vipClientsCount = 142;
  const avgOrderValue = 42500;
  const retentionRate = 78.4;

  const handleExportClientsCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Location', 'Tier', 'Orders', 'TotalSpent', 'Status'];
    const rows = filteredCustomers.map((c) => [
      c.id,
      `"${c.name}"`,
      c.email,
      c.phone,
      `"${c.location}"`,
      c.tier,
      c.lifetimeOrders,
      c.totalSpent,
      c.status,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `VANTA_CLIENT_REGISTRY_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onShowToast('CLIENT REGISTRY CSV EXPORTED');
  };

  return (
    <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#faf7f2] min-h-full">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between font-mono text-[10px] text-[#7b6e54] tracking-[0.2em] uppercase mb-1">
          <span>COMMERCE COMMAND // CUSTOMER DOSSIERS</span>
          {onBackToOrders && (
            <button
              onClick={onBackToOrders}
              className="text-[#1a1816] font-bold hover:underline cursor-pointer flex items-center gap-1"
            >
              ← BACK TO ORDERS
            </button>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#1a1816] tracking-tight">
              Client Dossiers &amp; Patron Registry
            </h1>
            <p className="font-sans text-[13px] text-[#59544c] mt-1 max-w-2xl">
              Cryptographic client identities, lifetime procurement records, tier privileges, and private concierge allocations.
            </p>
          </div>

          <button
            onClick={handleExportClientsCSV}
            className="px-4 py-2.5 bg-[#ede7dd] border border-[#d5cdc0] text-[#1a1816] hover:bg-[#e4ddcf] font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-2xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>EXPORT CLIENT CSV</span>
          </button>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4">
          <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">
            TOTAL VERIFIED CLIENTS
          </div>
          <div className="text-2xl font-bold text-[#1a1816] mt-1">{totalClientsCount.toLocaleString()}</div>
          <div className="text-[9px] text-[#16a34a] font-bold mt-0.5">+48 this cycle</div>
        </div>

        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4">
          <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">
            VIP PRIVILEGE TIER 01
          </div>
          <div className="text-2xl font-bold text-[#1a1816] mt-1">{vipClientsCount} Patrons</div>
          <div className="text-[9px] text-[#59544c] mt-0.5">Private Concierge Gated</div>
        </div>

        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4">
          <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">
            AVERAGE ORDER VALUE
          </div>
          <div className="text-2xl font-bold text-[#1a1816] mt-1">₹{avgOrderValue.toLocaleString()}</div>
          <div className="text-[9px] text-[#16a34a] font-bold mt-0.5">+12.2% vs last quarter</div>
        </div>

        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4">
          <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">
            REPEAT PROCUREMENT
          </div>
          <div className="text-2xl font-bold text-[#16a34a] mt-1">{retentionRate}%</div>
          <div className="text-[9px] text-[#7b6e54] mt-0.5">Archival Member Loyalty</div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-[11px]">
        <div className="flex items-center gap-2 bg-[#ede7dd] border border-[#d5cdc0] px-3 py-2 flex-1 max-w-md">
          <Search className="w-3.5 h-3.5 text-[#7b6e54]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by Client Name, Email, or City..."
            className="bg-transparent border-none outline-none text-[#1a1816] w-full text-[11px] font-mono"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#7b6e54] uppercase font-bold">TIER:</span>
          <select
            value={selectedTier}
            onChange={(e) => setSelectedTier(e.target.value)}
            className="bg-[#ede7dd] border border-[#d5cdc0] px-3 py-2 text-[#1a1816] font-mono text-[11px] outline-none font-bold"
          >
            <option value="ALL TIERS">ALL TIERS</option>
            <option value="VIP ONLY">VIP ONLY</option>
            <option value="TIER 01">TIER 01</option>
            <option value="TIER 02">TIER 02</option>
          </select>
        </div>
      </div>

      {/* Clients Table */}
      <div className="border border-[#d5cdc0] bg-[#ede7dd] rounded-sm shadow-xs font-mono text-[11px] overflow-hidden">
        <div className="p-4 border-b border-[#d5cdc0] flex items-center justify-between">
          <div className="font-bold text-[#1a1816] uppercase">
            ACTIVE CLIENT REGISTRY ({filteredCustomers.length})
          </div>
          <div className="text-[10px] text-[#7b6e54]">ALL PROFILES TOKENIZED &amp; ENCRYPTED</div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#d5cdc0] text-[9px] text-[#7b6e54] tracking-widest uppercase bg-[#e4ddcf]">
                <th className="py-2.5 px-3.5">CLIENT NAME &amp; EMAIL</th>
                <th className="py-2.5 px-3.5">RESIDENCE LOCATION</th>
                <th className="py-2.5 px-3.5">ATELIER TIER</th>
                <th className="py-2.5 px-3.5">ALLOCATIONS</th>
                <th className="py-2.5 px-3.5">LIFETIME PROCUREMENT</th>
                <th className="py-2.5 px-3.5">ENCLAVE STATUS</th>
                <th className="py-2.5 px-3.5 text-right">DOSSIER</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d5cdc0]/70">
              {filteredCustomers.map((c) => (
                <tr
                  key={c.id}
                  onClick={() => setInspectingCustomer(c)}
                  className="hover:bg-[#e4ddcf] transition-colors cursor-pointer"
                >
                  <td className="py-3 px-3.5">
                    <div className="font-bold text-[#1a1816] text-[12px]">{c.name}</div>
                    <div className="text-[9px] text-[#7b6e54]">{c.email}</div>
                  </td>
                  <td className="py-3 px-3.5 text-[#59544c]">{c.location}</td>
                  <td className="py-3 px-3.5 font-bold text-[#1a1816]">{c.tier}</td>
                  <td className="py-3 px-3.5 font-bold text-[#1a1816]">{c.lifetimeOrders} Orders</td>
                  <td className="py-3 px-3.5 font-bold text-[#1a1816]">
                    ₹{c.totalSpent.toLocaleString()}
                  </td>
                  <td className="py-3 px-3.5">
                    <span
                      className={`px-2 py-0.5 text-[9px] font-bold uppercase rounded-2xs ${
                        c.status === 'VIP'
                          ? 'bg-[#141312] text-[#f5efe6]'
                          : 'bg-[#dcfce7] text-[#166534]'
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="py-3 px-3.5 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setInspectingCustomer(c);
                      }}
                      className="px-2.5 py-1 bg-[#faf7f2] border border-[#d5cdc0] text-[#1a1816] hover:bg-[#ded6c9] font-bold text-[9px] uppercase cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>INSPECT</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Inspect Customer Dossier Modal */}
      {inspectingCustomer && (
        <div className="fixed inset-0 z-50 bg-[#1a1816]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#ede7dd] border border-[#d5cdc0] max-w-2xl w-full p-6 sm:p-8 font-mono text-xs shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Dossier Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#d5cdc0]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#141312] text-[#f5efe6] flex items-center justify-center font-bold text-lg">
                  {inspectingCustomer.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">
                    ATELIER CLIENT DOSSIER // #{inspectingCustomer.id}
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-[#1a1816]">
                    {inspectingCustomer.name}
                  </h3>
                  <div className="text-[10px] text-[#16a34a] font-bold flex items-center gap-1.5 mt-0.5">
                    <ShieldCheck className="w-3 h-3" />
                    <span>AUTHENTICATED CLIENT ENCLAVE // {inspectingCustomer.tier}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setInspectingCustomer(null)}
                className="text-[#59544c] hover:text-[#1a1816] text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Client Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 bg-[#faf7f2] border border-[#d5cdc0] space-y-1">
                <div className="text-[9px] text-[#7b6e54] uppercase font-bold flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  <span>CONTACT PROTOCOL</span>
                </div>
                <div className="font-bold text-[#1a1816]">{inspectingCustomer.email}</div>
                <div className="text-[#59544c] text-[10px]">{inspectingCustomer.phone}</div>
              </div>

              <div className="p-3 bg-[#faf7f2] border border-[#d5cdc0] space-y-1">
                <div className="text-[9px] text-[#7b6e54] uppercase font-bold flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>PRIMARY RESIDENCE NODE</span>
                </div>
                <div className="font-bold text-[#1a1816]">{inspectingCustomer.location}</div>
                <div className="text-[#59544c] text-[10px]">Member Since {inspectingCustomer.memberSince}</div>
              </div>
            </div>

            {/* Procurement Stats */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-[#faf7f2] border border-[#d5cdc0] text-center">
              <div>
                <div className="text-[9px] text-[#7b6e54] uppercase font-bold">TOTAL ALLOCATIONS</div>
                <div className="text-xl font-bold text-[#1a1816] mt-0.5">
                  {inspectingCustomer.lifetimeOrders} Orders
                </div>
              </div>
              <div>
                <div className="text-[9px] text-[#7b6e54] uppercase font-bold">LIFETIME PROCUREMENT</div>
                <div className="text-xl font-bold text-[#1a1816] mt-0.5">
                  ₹{inspectingCustomer.totalSpent.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-[9px] text-[#7b6e54] uppercase font-bold">PATRON TIER</div>
                <div className="text-xl font-bold text-[#16a34a] mt-0.5">
                  {inspectingCustomer.status}
                </div>
              </div>
            </div>

            {/* VIP Privileges Section */}
            <div className="p-4 bg-[#faf7f2] border border-[#d5cdc0] space-y-2">
              <div className="text-[9px] font-bold text-[#7b6e54] uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#1a1816]" />
                <span>ACTIVE ATELIER PRIVILEGES</span>
              </div>
              <ul className="text-[10px] text-[#1a1816] space-y-1 list-disc list-inside">
                <li>Bespoke Direct Courier Dispatch via Milan Malpensa Hub</li>
                <li>Priority 24-Hour Advance Access to Chrono Sneaker Drops</li>
                <li>Complimentary Cryptographic Sizing Exchange with Zero Restocking Friction</li>
                <li>Dedicated Master Craftsman Verification on All Allocations</li>
              </ul>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#d5cdc0] flex items-center justify-between">
              <span className="text-[9px] text-[#7b6e54]">
                ENCRYPTED AUDIT RECORD VERIFIED // SHA-256
              </span>
              <button
                onClick={() => setInspectingCustomer(null)}
                className="px-5 py-2 bg-[#141312] text-[#f5efe6] font-bold uppercase text-[10px] hover:bg-[#35322e] cursor-pointer"
              >
                CLOSE DOSSIER
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
