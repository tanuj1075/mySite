import React, { useEffect, useState } from 'react';
import { Search, UserCheck, ShieldCheck, ArrowRight, Download, Package, Mail, MapPin, Phone, Award, RefreshCw, Sparkles, Clock } from 'lucide-react';
import { CustomerItem, Order } from '../../types';
import { adminApi } from '../../lib/api';

interface AdminCustomersViewProps {
  orders?: Order[];
  onShowToast: (msg: string) => void;
  onBackToOrders?: () => void;
  onSelectOrder?: (orderId: string) => void;
}

export const AdminCustomersView: React.FC<AdminCustomersViewProps> = ({
  orders = [],
  onShowToast,
  onBackToOrders,
  onSelectOrder,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState('ALL TIERS');
  const [inspectingCustomer, setInspectingCustomer] = useState<CustomerItem | null>(null);
  const [customers, setCustomers] = useState<CustomerItem[]>([]);
  const [customersError, setCustomersError] = useState('');
  const [isLoadingCustomers, setIsLoadingCustomers] = useState(true);
  const [customerLoadKey, setCustomerLoadKey] = useState(0);

  // Real-time polling: Refresh customers every 15s so newly registered accounts appear live
  useEffect(() => {
    const interval = setInterval(() => {
      setCustomerLoadKey((k) => k + 1);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let isCurrent = true;
    setIsLoadingCustomers(true);
    setCustomersError('');
    adminApi.customers().then((records) => {
      if (!isCurrent) return;
      setCustomers(records.map((record) => {
        const customerOrders = Array.isArray(record.orders) ? record.orders as Array<{ total: string | number }> : [];
        const customerAddresses = Array.isArray(record.addresses) ? record.addresses as Array<{ city: string; country: string }> : [];
        const createdAt = new Date(String(record.createdAt));
        const isNew = !Number.isNaN(createdAt.getTime()) && (Date.now() - createdAt.getTime() < 86400000);
        return {
          id: String(record.id),
          name: String(record.name),
          email: String(record.email),
          phone: String(record.phone ?? ''),
          location: customerAddresses[0] ? `${customerAddresses[0].city}, ${customerAddresses[0].country}` : 'Not provided',
          tier: 'CUSTOMER',
          lifetimeOrders: customerOrders.length,
          totalSpent: customerOrders.reduce((sum, order) => sum + Number(order.total), 0),
          status: 'VERIFIED',
          isNew,
          registeredAt: Number.isNaN(createdAt.getTime()) ? undefined : createdAt.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' }),
          memberSince: Number.isNaN(createdAt.getTime()) ? 'Unknown' : createdAt.toLocaleDateString(undefined, { month: 'short', year: 'numeric' }),
        };
      }));
    }).catch((error: unknown) => {
      if (isCurrent) setCustomersError(error instanceof Error ? error.message : 'Could not load customer accounts.');
    }).finally(() => {
      if (isCurrent) setIsLoadingCustomers(false);
    });
    return () => { isCurrent = false; };
  }, [customerLoadKey]);

  // Filter customers
  const filteredCustomers = customers.filter((c) => {
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

  const totalClientsCount = customers.length;
  const vipClientsCount = customers.filter((customer) => customer.tier.includes('VIP')).length;
  const totalOrderCount = customers.reduce((count, customer) => count + customer.lifetimeOrders, 0);
  const avgOrderValue = totalOrderCount ? customers.reduce((sum, customer) => sum + customer.totalSpent, 0) / totalOrderCount : 0;
  const retentionRate = totalClientsCount ? customers.filter((customer) => customer.lifetimeOrders > 1).length / totalClientsCount * 100 : 0;

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
    <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#09090b] min-h-full">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between font-mono text-[10px] text-[#c9a96e] tracking-[0.2em] uppercase mb-1">
          <span>COMMERCE COMMAND // CUSTOMER DOSSIERS</span>
          {onBackToOrders && (
            <button
              onClick={onBackToOrders}
              className="text-[#f4f4f6] font-bold hover:underline cursor-pointer flex items-center gap-1"
            >
              ← BACK TO ORDERS
            </button>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#f4f4f6] tracking-tight">
              Client Dossiers &amp; Patron Registry
            </h1>
            <p className="font-sans text-[13px] text-[#8e8e98] mt-1 max-w-2xl">
              Cryptographic client identities, lifetime procurement records, tier privileges, and private concierge allocations.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setCustomerLoadKey((k) => k + 1);
                onShowToast('SYNCHRONIZING CLIENT REGISTRY WITH NEON DB...');
              }}
              className="px-4 py-2.5 bg-[#18181c] border border-[#242429] hover:border-[#c9a96e] text-[#f4f4f6] font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-2xs transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#c9a96e] ${isLoadingCustomers ? 'animate-spin' : ''}`} />
              <span>REFRESH REGISTRY</span>
            </button>

            <button
              onClick={handleExportClientsCSV}
              className="px-4 py-2.5 bg-[#121215] border border-[#242429] text-[#f4f4f6] hover:bg-[#1e1e24] font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>EXPORT CLIENT CSV</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
        <div className="bg-[#121215] border border-[#242429] p-4">
          <div className="text-[9px] text-[#c9a96e] uppercase tracking-wider font-bold">
            TOTAL VERIFIED CLIENTS
          </div>
          <div className="text-2xl font-bold text-[#f4f4f6] mt-1">{totalClientsCount.toLocaleString()}</div>
          <div className="text-[9px] text-[#16a34a] font-bold mt-0.5">Saved customer accounts</div>
        </div>

        <div className="bg-[#121215] border border-[#242429] p-4">
          <div className="text-[9px] text-[#c9a96e] uppercase tracking-wider font-bold">
            VIP PRIVILEGE TIER 01
          </div>
          <div className="text-2xl font-bold text-[#f4f4f6] mt-1">{vipClientsCount} Patrons</div>
          <div className="text-[9px] text-[#8e8e98] mt-0.5">VIP tier not configured</div>
        </div>

        <div className="bg-[#121215] border border-[#242429] p-4">
          <div className="text-[9px] text-[#c9a96e] uppercase tracking-wider font-bold">
            AVERAGE ORDER VALUE
          </div>
          <div className="text-2xl font-bold text-[#f4f4f6] mt-1">₹{avgOrderValue.toLocaleString()}</div>
          <div className="text-[9px] text-[#16a34a] font-bold mt-0.5">From saved orders</div>
        </div>

        <div className="bg-[#121215] border border-[#242429] p-4">
          <div className="text-[9px] text-[#c9a96e] uppercase tracking-wider font-bold">
            REPEAT PROCUREMENT
          </div>
          <div className="text-2xl font-bold text-[#16a34a] mt-1">{retentionRate}%</div>
          <div className="text-[9px] text-[#c9a96e] mt-0.5">Customers with multiple orders</div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-[11px]">
        <div className="flex items-center gap-2 bg-[#121215] border border-[#242429] px-3 py-2 flex-1 max-w-md">
          <Search className="w-3.5 h-3.5 text-[#c9a96e]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by Client Name, Email, or City..."
            className="bg-transparent border-none outline-none text-[#f4f4f6] w-full text-[11px] font-mono"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#c9a96e] uppercase font-bold">TIER:</span>
          <select
            value={selectedTier}
            onChange={(e) => setSelectedTier(e.target.value)}
            className="bg-[#121215] border border-[#242429] px-3 py-2 text-[#f4f4f6] font-mono text-[11px] outline-none font-bold"
          >
            <option value="ALL TIERS">ALL TIERS</option>
            <option value="VIP ONLY">VIP ONLY</option>
            <option value="TIER 01">TIER 01</option>
            <option value="TIER 02">TIER 02</option>
          </select>
        </div>
      </div>

      {/* Clients Table */}
      <div className="border border-[#242429] bg-[#121215] rounded-sm shadow-xs font-mono text-[11px] overflow-hidden">
        <div className="p-4 border-b border-[#242429] flex items-center justify-between">
          <div className="font-bold text-[#f4f4f6] uppercase">
            ACTIVE CLIENT REGISTRY ({filteredCustomers.length})
          </div>
          <div className="text-[10px] text-[#c9a96e]">ALL PROFILES TOKENIZED &amp; ENCRYPTED</div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#242429] text-[9px] text-[#c9a96e] tracking-widest uppercase bg-[#1e1e24]">
                <th className="py-2.5 px-3.5">CLIENT NAME &amp; EMAIL</th>
                <th className="py-2.5 px-3.5">RESIDENCE LOCATION</th>
                <th className="py-2.5 px-3.5">ATELIER TIER</th>
                <th className="py-2.5 px-3.5">ALLOCATIONS</th>
                <th className="py-2.5 px-3.5">LIFETIME PROCUREMENT</th>
                <th className="py-2.5 px-3.5">ENCLAVE STATUS</th>
                <th className="py-2.5 px-3.5 text-right">DOSSIER</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#242429]/70">
              {customersError && (
                <tr>
                  <td colSpan={7} className="py-6 px-4 text-center text-red-800" role="alert">
                    {customersError}{' '}
                    <button
                      type="button"
                      onClick={() => setCustomerLoadKey((key) => key + 1)}
                      className="font-bold underline cursor-pointer"
                    >
                      Retry
                    </button>
                  </td>
                </tr>
              )}
              {isLoadingCustomers && customers.length === 0 && (
                <tr><td colSpan={7} className="py-6 px-4 text-center text-[#8e8e98]">Loading customer accounts...</td></tr>
              )}
              {!isLoadingCustomers && !customersError && filteredCustomers.length === 0 && (
                <tr><td colSpan={7} className="py-6 px-4 text-center text-[#8e8e98]">No customer accounts found.</td></tr>
              )}
              {filteredCustomers.map((c) => (
                <tr
                  key={c.id}
                  onClick={() => setInspectingCustomer(c)}
                  className="hover:bg-[#1e1e24] transition-colors cursor-pointer"
                >
                  <td className="py-3 px-3.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#f4f4f6] text-[12px]">{c.name}</span>
                      {c.isNew && (
                        <span className="px-1.5 py-0.5 bg-[#c9a96e]/20 border border-[#c9a96e] text-[#c9a96e] text-[8px] font-bold uppercase tracking-wider animate-pulse flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>NEW PATRON</span>
                        </span>
                      )}
                    </div>
                    <div className="text-[9px] text-[#c9a96e]">{c.email}</div>
                    {c.registeredAt && (
                      <div className="text-[8px] text-[#8e8e98] mt-0.5 flex items-center gap-1 font-mono">
                        <Clock className="w-2.5 h-2.5" />
                        <span>Registered: {c.registeredAt}</span>
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-3.5 text-[#8e8e98]">{c.location}</td>
                  <td className="py-3 px-3.5 font-bold text-[#f4f4f6]">{c.tier}</td>
                  <td className="py-3 px-3.5 font-bold text-[#f4f4f6]">{c.lifetimeOrders} Orders</td>
                  <td className="py-3 px-3.5 font-bold text-[#f4f4f6]">
                    ₹{c.totalSpent.toLocaleString()}
                  </td>
                  <td className="py-3 px-3.5">
                    <span
                      className={`px-2 py-0.5 text-[9px] font-bold uppercase rounded-2xs ${
                        c.status === 'VIP'
                          ? 'bg-[#141312] text-[#18181c]'
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
                      className="px-2.5 py-1 bg-[#09090b] border border-[#242429] text-[#f4f4f6] hover:bg-[#242429] font-bold text-[9px] uppercase cursor-pointer inline-flex items-center gap-1"
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
        <div className="fixed inset-0 z-50 bg-[#f4f4f6]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#121215] border border-[#242429] max-w-2xl w-full p-6 sm:p-8 font-mono text-xs shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Dossier Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#242429]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#141312] text-[#18181c] flex items-center justify-center font-bold text-lg">
                  {inspectingCustomer.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <div className="text-[9px] text-[#c9a96e] uppercase tracking-wider font-bold">
                    ATELIER CLIENT DOSSIER // #{inspectingCustomer.id}
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-[#f4f4f6]">
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
                className="text-[#8e8e98] hover:text-[#f4f4f6] text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Client Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 bg-[#09090b] border border-[#242429] space-y-1">
                <div className="text-[9px] text-[#c9a96e] uppercase font-bold flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  <span>CONTACT PROTOCOL</span>
                </div>
                <div className="font-bold text-[#f4f4f6]">{inspectingCustomer.email}</div>
                <div className="text-[#8e8e98] text-[10px]">{inspectingCustomer.phone}</div>
              </div>

              <div className="p-3 bg-[#09090b] border border-[#242429] space-y-1">
                <div className="text-[9px] text-[#c9a96e] uppercase font-bold flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>PRIMARY RESIDENCE NODE</span>
                </div>
                <div className="font-bold text-[#f4f4f6]">{inspectingCustomer.location}</div>
                <div className="text-[#8e8e98] text-[10px]">Member Since {inspectingCustomer.memberSince}</div>
              </div>
            </div>

            {/* Procurement Stats */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-[#09090b] border border-[#242429] text-center">
              <div>
                <div className="text-[9px] text-[#c9a96e] uppercase font-bold">TOTAL ALLOCATIONS</div>
                <div className="text-xl font-bold text-[#f4f4f6] mt-0.5">
                  {inspectingCustomer.lifetimeOrders} Orders
                </div>
              </div>
              <div>
                <div className="text-[9px] text-[#c9a96e] uppercase font-bold">LIFETIME PROCUREMENT</div>
                <div className="text-xl font-bold text-[#f4f4f6] mt-0.5">
                  ₹{inspectingCustomer.totalSpent.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-[9px] text-[#c9a96e] uppercase font-bold">PATRON TIER</div>
                <div className="text-xl font-bold text-[#16a34a] mt-0.5">
                  {inspectingCustomer.status}
                </div>
              </div>
            </div>

            {/* VIP Privileges Section */}
            <div className="p-4 bg-[#09090b] border border-[#242429] space-y-2">
              <div className="text-[9px] font-bold text-[#c9a96e] uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#f4f4f6]" />
                <span>ACTIVE ATELIER PRIVILEGES</span>
              </div>
              <ul className="text-[10px] text-[#f4f4f6] space-y-1 list-disc list-inside">
                <li>Bespoke Direct Courier Dispatch via Milan Malpensa Hub</li>
                <li>Priority 24-Hour Advance Access to Chrono Sneaker Drops</li>
                <li>Complimentary Cryptographic Sizing Exchange with Zero Restocking Friction</li>
                <li>Dedicated Master Craftsman Verification on All Allocations</li>
              </ul>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#242429] flex items-center justify-between">
              <span className="text-[9px] text-[#c9a96e]">
                ENCRYPTED AUDIT RECORD VERIFIED // SHA-256
              </span>
              <button
                onClick={() => setInspectingCustomer(null)}
                className="px-5 py-2 bg-[#141312] text-[#18181c] font-bold uppercase text-[10px] hover:bg-[#35322e] cursor-pointer"
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
