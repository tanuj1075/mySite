import React from 'react';
import {
  LayoutDashboard,
  Package,
  Layers,
  Tag,
  Grid,
  Palette,
  Binary,
  ShoppingBag,
  Users,
  Ticket,
  Boxes,
  Radar,
  Sparkles,
  Image,
  Bell,
  MessageSquare,
  RotateCcw,
  ShieldCheck,
  CreditCard,
} from 'lucide-react';

export type AdminSection =
  | 'OVERVIEW'
  | 'PRODUCTS'
  | 'CATEGORIES'
  | 'BRANDS'
  | 'COLLECTIONS'
  | 'SIZES_COLORS'
  | 'SKU_MATRIX'
  | 'ORDERS'
  | 'PAYMENTS'
  | 'CUSTOMERS'
  | 'COUPONS'
  | 'STOCK_LOGISTICS'
  | 'LOW_STOCK_RADAR'
  | 'CHRONO_DROPS'
  | 'BANNERS'
  | 'NOTIFICATIONS'
  | 'REVIEWS'
  | 'RETURNS_EXCHANGES'
  | 'SECURITY_CLUSTER';

interface AdminSidebarProps {
  activeSection: AdminSection;
  onSelectSection: (section: AdminSection) => void;
  ordersCount?: number;
  lowStockCount?: number;
  returnsCount?: number;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  activeSection,
  onSelectSection,
  ordersCount = 12,
  lowStockCount = 4,
  returnsCount = 2,
}) => {
  const navGroups = [
    {
      group: 'MAIN',
      items: [
        { id: 'OVERVIEW' as AdminSection, label: 'OVERVIEW', icon: LayoutDashboard },
      ],
    },
    {
      group: 'CATALOG',
      items: [
        { id: 'PRODUCTS' as AdminSection, label: 'PRODUCTS', icon: Package },
        { id: 'CATEGORIES' as AdminSection, label: 'CATEGORIES', icon: Layers },
        { id: 'BRANDS' as AdminSection, label: 'BRANDS', icon: Tag },
        { id: 'COLLECTIONS' as AdminSection, label: 'COLLECTIONS', icon: Grid },
        { id: 'SIZES_COLORS' as AdminSection, label: 'SIZES & COLORS', icon: Palette },
        { id: 'SKU_MATRIX' as AdminSection, label: 'SKU MATRIX', icon: Binary },
      ],
    },
    {
      group: 'COMMERCE',
      items: [
        { id: 'ORDERS' as AdminSection, label: 'ORDERS', icon: ShoppingBag, badge: ordersCount },
        { id: 'PAYMENTS' as AdminSection, label: 'PAYMENTS & UPI', icon: CreditCard },
        { id: 'CUSTOMERS' as AdminSection, label: 'CUSTOMERS', icon: Users },
        { id: 'COUPONS' as AdminSection, label: 'COUPONS', icon: Ticket },
      ],
    },
    {
      group: 'INVENTORY',
      items: [
        { id: 'STOCK_LOGISTICS' as AdminSection, label: 'STOCK LOGISTICS', icon: Boxes },
        { id: 'LOW_STOCK_RADAR' as AdminSection, label: 'LOW-STOCK RADAR', icon: Radar, badge: lowStockCount, badgeColor: 'bg-[#991b1b]' },
      ],
    },
    {
      group: 'MARKETING',
      items: [
        { id: 'CHRONO_DROPS' as AdminSection, label: 'CHRONO DROPS', icon: Sparkles },
        { id: 'BANNERS' as AdminSection, label: 'BANNERS', icon: Image },
        { id: 'NOTIFICATIONS' as AdminSection, label: 'NOTIFICATIONS', icon: Bell },
      ],
    },
    {
      group: 'CUSTOMER EXPERIENCE',
      items: [
        { id: 'REVIEWS' as AdminSection, label: 'REVIEWS', icon: MessageSquare },
        { id: 'RETURNS_EXCHANGES' as AdminSection, label: 'RETURNS & EXCHANGES', icon: RotateCcw, badge: returnsCount },
      ],
    },
  ];

  return (
    <aside className="w-64 bg-[#ede7dd] border-r border-[#d5cdc0] flex flex-col justify-between font-mono text-[11px] select-none shrink-0 overflow-y-auto">
      <div className="py-4 px-3 space-y-6">
        {navGroups.map((grp) => (
          <div key={grp.group}>
            <div className="text-[9px] font-bold text-[#7b6e54] tracking-[0.2em] px-3 mb-1.5 uppercase">
              {grp.group}
            </div>
            <div className="space-y-0.5">
              {grp.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelectSection(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-left transition-colors cursor-pointer rounded-xs ${
                      isActive
                        ? 'bg-[#ded6c9] text-[#1a1816] font-bold shadow-2xs'
                        : 'text-[#59544c] hover:bg-[#e4ddcf] hover:text-[#1a1816]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-3.5 h-3.5 shrink-0 opacity-80" />
                      <span className="tracking-wide uppercase text-[10px] sm:text-[11px] truncate">
                        {item.label}
                      </span>
                    </div>

                    {item.badge !== undefined && (
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.2 rounded-2xs ${
                          item.badgeColor
                            ? `${item.badgeColor} text-white`
                            : 'bg-[#cfc5b4] text-[#1a1816]'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Security Engine Section */}
      <div className="p-3 border-t border-[#d5cdc0] bg-[#e4ddcf]">
        <button
          onClick={() => onSelectSection('SECURITY_CLUSTER')}
          className={`w-full flex items-center justify-between px-3 py-2.5 transition-colors cursor-pointer rounded-xs ${
            activeSection === 'SECURITY_CLUSTER'
              ? 'bg-[#141312] text-[#f5efe6] font-bold'
              : 'text-[#1a1816] hover:bg-[#ded6c9]'
          }`}
        >
          <div className="text-left">
            <span className="text-[9px] block tracking-widest text-[#7b6e54] uppercase">
              SECURITY ENGINE
            </span>
            <span className="text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5">
              <span>AES-256 CLUSTER</span>
            </span>
          </div>
          <ShieldCheck className="w-4 h-4 text-[#16a34a]" />
        </button>
      </div>
    </aside>
  );
};
