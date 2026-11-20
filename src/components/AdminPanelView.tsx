import React, { useState } from 'react';
import { ShoeProduct, Order, ExchangeReturnRequest, SneakerDrop, Coupon } from '../types';
import { AdminHeader } from './admin/AdminHeader';
import { AdminSidebar, AdminSection } from './admin/AdminSidebar';
import { AdminProductsView } from './admin/AdminProductsView';
import { AdminLogisticsView } from './admin/AdminLogisticsView';
import { AdminSecurityView } from './admin/AdminSecurityView';
import { AdminOverviewView } from './admin/AdminOverviewView';
import { AdminReviewsView } from './admin/AdminReviewsView';
import { AdminPaymentsView } from './admin/AdminPaymentsView';
import { AdminCustomersView } from './admin/AdminCustomersView';
import { AdminSettingsView } from './admin/AdminSettingsView';


interface AdminPanelViewProps {
  isOpen: boolean;
  adminIdentity: { email: string; name: string; role: string } | null;
  onClose: () => void;
  onLogoutAdmin?: () => void;
  products: ShoeProduct[];
  onUpdateProductStock: (productId: string, colorName: string, size: string, newStock: number) => void;
  onAddNewProduct: (product: ShoeProduct) => void;
  onDeleteProduct?: (productId: string) => void;
  onUpdateProduct?: (product: ShoeProduct) => void;
  orders: Order[];
  onUpdateOrderStatus: (orderId: string, newStatus: any) => Promise<boolean>;
  exchanges: ExchangeReturnRequest[];
  onUpdateExchangeStatus: (exchangeId: string, status: 'Approved' | 'Rejected') => Promise<boolean>;
  drops: SneakerDrop[];
  onAddNewDrop: (drop: SneakerDrop) => void;
  onUpdateDropStatus: (dropId: string, status: any) => void;
  coupons: Coupon[];
  onAddNewCoupon: (coupon: Coupon) => void;
  customers?: any[];
  onShowToast: (msg: string) => void;
}

export const AdminPanelView: React.FC<AdminPanelViewProps> = ({
  isOpen,
  adminIdentity,
  onClose,
  onLogoutAdmin,
  products,
  onUpdateProductStock,
  onAddNewProduct,
  onDeleteProduct,
  onUpdateProduct,
  orders,
  onUpdateOrderStatus,
  exchanges,
  onUpdateExchangeStatus,
  drops,
  onAddNewDrop,
  onUpdateDropStatus,
  coupons,
  onAddNewCoupon,
  customers = [],
  onShowToast,
}) => {
  // Open on the dashboard overview shown in the admin reference.
  const [activeSection, setActiveSection] = useState<AdminSection>('OVERVIEW');
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState<boolean>(true);

  if (!isOpen) return null;

  const handleLogout = () => {
    if (onLogoutAdmin) {
      onLogoutAdmin();
    } else {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#09090b] text-[#f4f4f6] flex flex-col font-sans select-text overflow-hidden"
      role="dialog"
      aria-modal="true"
    >
      {/* Top Admin Console Navigation Bar matching Image 1, 2, 3, 4 */}
      <AdminHeader
        onToggleSidebar={() => setIsSidebarOpenMobile((prev) => !prev)}
        onNavigateStorefront={onClose}
        onLogoutAdmin={handleLogout}
        onOpenAuditLog={() => {
          setActiveSection('SECURITY_CLUSTER');
          onShowToast('ROUTED TO IMMUTABLE AUDIT TRAIL // SYSTEM INTEGRITY');
        }}
        adminName={adminIdentity?.name ?? 'Administrator'}
        adminEmail={adminIdentity?.email ?? ''}
        adminRole={adminIdentity?.role ?? 'ADMIN'}
        onShowToast={onShowToast}
      />

      {/* Main Console Workspace: Left Navigation Sidebar + Right Content Area */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Sidebar matching Image 2, 3, 4 */}
        <div
          className={`${
            isSidebarOpenMobile ? 'block' : 'hidden'
          } md:block absolute md:static z-40 h-full shadow-xl md:shadow-none transition-all duration-200`}
        >
          <AdminSidebar
            activeSection={activeSection}
            onSelectSection={(sec) => {
              setActiveSection(sec);
              if (window.innerWidth < 768) {
                setIsSidebarOpenMobile(false);
              }
            }}
            ordersCount={orders.length}
            customersCount={customers.length}
            lowStockCount={products.reduce((acc, p) => {
              let count = 0;
              const inventory = p.sizeInventory || {};
              Object.keys(inventory).forEach((colorKey) => {
                const stocks = inventory[colorKey] || [];
                stocks.forEach((st) => {
                  if (st && st.stock > 0 && st.stock <= 3) count++;
                });
              });
              return acc + count;
            }, 0)}
            returnsCount={exchanges.length}
          />
        </div>

        {/* Right Scrollable Content Pane */}
        <main className="flex-1 overflow-y-auto bg-[#09090b]">
          {/* CATALOG -> PRODUCTS / SPECIMENS */}
          {(activeSection === 'PRODUCTS' ||
            activeSection === 'CATEGORIES' ||
            activeSection === 'BRANDS' ||
            activeSection === 'COLLECTIONS' ||
            activeSection === 'SIZES_COLORS' ||
            activeSection === 'SKU_MATRIX') && (
            <AdminProductsView
              products={products}
              onAddNewProduct={onAddNewProduct}
              onUpdateProductStock={onUpdateProductStock}
              onDeleteProduct={onDeleteProduct}
              onUpdateProduct={onUpdateProduct}
              onShowToast={onShowToast}
              activeSection={activeSection}
              onSelectSection={(sec) => setActiveSection(sec as AdminSection)}
            />
          )}

          {/* COMMERCE -> CUSTOMERS DOSSIER */}
          {activeSection === 'CUSTOMERS' && (
            <AdminCustomersView
              orders={orders}
              onShowToast={onShowToast}
              onBackToOrders={() => setActiveSection('ORDERS')}
              onSelectOrder={(ordId) => {
                setActiveSection('ORDERS');
                onShowToast(`NAVIGATED TO ORDER #${ordId}`);
              }}
            />
          )}

          {/* COMMERCE -> ORDERS */}
          {activeSection === 'ORDERS' && (
            <AdminLogisticsView
              orders={orders}
              onUpdateOrderStatus={onUpdateOrderStatus}
              exchanges={exchanges}
              onUpdateExchangeStatus={onUpdateExchangeStatus}
              onShowToast={onShowToast}
              activeSection={activeSection}
              onSelectSection={(sec) => setActiveSection(sec as AdminSection)}
            />
          )}

          {/* COMMERCE -> UPI & PAYMENTS AUDIT TRAIL */}
          {activeSection === 'PAYMENTS' && (
            <AdminPaymentsView onShowToast={onShowToast} />
          )}

          {/* CUSTOMER EXPERIENCE -> RETURNS & EXCHANGES (IMAGE 3 - BOTTOM) */}
          {activeSection === 'RETURNS_EXCHANGES' && (
            <AdminLogisticsView
              orders={orders}
              onUpdateOrderStatus={onUpdateOrderStatus}
              exchanges={exchanges}
              onUpdateExchangeStatus={onUpdateExchangeStatus}
              focusWorkbench={true}
              onShowToast={onShowToast}
              activeSection={activeSection}
              onSelectSection={(sec) => setActiveSection(sec as AdminSection)}
            />
          )}

          {/* CUSTOMER EXPERIENCE -> REVIEWS & APPRAISALS */}
          {activeSection === 'REVIEWS' && (
            <AdminReviewsView
              products={products}
              onShowToast={onShowToast}
              onSelectSection={(sec) => setActiveSection(sec as AdminSection)}
            />
          )}

          {/* SECURITY ENGINE -> AES-256 CLUSTER (IMAGE 4) */}
          {activeSection === 'SECURITY_CLUSTER' && (
            <AdminSecurityView onShowToast={onShowToast} />
          )}

          {/* STORE SETTINGS (REFERENCE PANEL 12) */}
          {activeSection === 'SETTINGS' && (
            <AdminSettingsView onShowToast={onShowToast} />
          )}

          {/* MAIN -> OVERVIEW / DROPS / COUPONS / LOGISTICS */}
          {(activeSection === 'OVERVIEW' ||
            activeSection === 'STOCK_LOGISTICS' ||
            activeSection === 'LOW_STOCK_RADAR' ||
            activeSection === 'CHRONO_DROPS' ||
            activeSection === 'BANNERS' ||
            activeSection === 'NOTIFICATIONS' ||
            activeSection === 'COUPONS') && (
            <AdminOverviewView
              drops={drops}
              onAddNewDrop={onAddNewDrop}
              onUpdateDropStatus={onUpdateDropStatus}
              coupons={coupons}
              onAddNewCoupon={onAddNewCoupon}
              onSelectSection={(sec) => setActiveSection(sec as AdminSection)}
              onShowToast={onShowToast}
              products={products}
              orders={orders}
              customers={customers}
              activeSection={activeSection}
            />
          )}
        </main>
      </div>
    </div>
  );
};
