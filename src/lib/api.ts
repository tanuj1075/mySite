import type { ShoeProduct } from '../types';

const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();

function isLocalHostname(hostname: string) {
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]' || hostname.endsWith('.localhost');
}

function pointsToLocalApi(url: string) {
  try {
    return isLocalHostname(new URL(url).hostname);
  } catch {
    return false;
  }
}

const isDeployedBrowser =
  typeof window !== 'undefined' && !isLocalHostname(window.location.hostname);
const shouldUseSameOriginApi =
  isDeployedBrowser && (!configuredApiUrl || pointsToLocalApi(configuredApiUrl));
const API_URL = (
  shouldUseSameOriginApi
    ? '/api'
    : configuredApiUrl || (isDeployedBrowser ? '/api' : 'http://localhost:4000/api')
).replace(/\/+$/, '');

type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: { id: string; name: string; email: string; role: string; memberId: string };
};

const ADMIN_ACCESS_KEY = 'vanta_admin_access_token';
const ADMIN_REFRESH_KEY = 'vanta_admin_refresh_token';
const CUSTOMER_ACCESS_KEY = 'vanta_access_token';
const CUSTOMER_REFRESH_KEY = 'vanta_refresh_token';

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(init.headers ?? {}) },
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.error ?? 'Request failed');
  return body as T;
}

export const authApi = {
  hasSession() {
    return localStorage.getItem(CUSTOMER_ACCESS_KEY) !== null;
  },
  async login(email: string, password: string, totpToken?: string, backupCode?: string) {
    const result = await request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password, totpToken, backupCode }),
    });
    saveCustomerSession(result);
    return result.user;
  },
  async register(name: string, email: string, password: string) {
    const result = await request<AuthResponse>('/auth/register', { method: 'POST', body: JSON.stringify({ name, email, password }) });
    saveCustomerSession(result);
    return result.user;
  },
  session() {
    return requestCustomer<AuthResponse['user'] & { mfaEnabled?: boolean }>('/auth/session');
  },
  async logout() {
    const refreshToken = localStorage.getItem(CUSTOMER_REFRESH_KEY);
    clearSession();
    if (refreshToken) {
      try {
        await request('/auth/logout', { method: 'POST', body: JSON.stringify({ refreshToken }) });
      } catch {
        // Network/server errors ignored on client-side cleanup
      }
    }
  },
  async adminLogin(email: string, password: string, rememberDevice = true, totpToken?: string) {
    const result = await request<AuthResponse>('/auth/admin/login', {
      method: 'POST',
      body: JSON.stringify({ email, password, totpToken }),
    });
    if (result.user.role !== 'ADMIN') throw new Error('Admin role required');
    saveAdminSession(result, rememberDevice);
    return result.user;
  },
  setupMfa() {
    return requestCustomer<{ secret: string; qrDataUrl: string; message: string }>('/auth/mfa/setup', { method: 'POST' });
  },
  verifyMfa(totpToken: string) {
    return requestCustomer<{ message: string; backupCodes: string[] }>('/auth/mfa/verify', {
      method: 'POST',
      body: JSON.stringify({ totpToken }),
    });
  },
  disableMfa(password: string, totpToken: string) {
    return requestCustomer<{ message: string }>('/auth/mfa/disable', {
      method: 'POST',
      body: JSON.stringify({ password, totpToken }),
    });
  },
  requestPasswordReset(email: string) {
    return request<{ message: string }>('/auth/password-reset/request', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },
  confirmPasswordReset(token: string, password: string) {
    return request<{ message: string }>('/auth/password-reset/confirm', {
      method: 'POST',
      body: JSON.stringify({ token, password }),
    });
  },
};

export const customerApi = {
  catalog() {
    return request<unknown[]>('/products');
  },
  drops() {
    return request<Array<Record<string, unknown>>>('/drops');
  },
  deliveryEstimate(address: { city: string; state?: string; postalCode: string; country?: string }) {
    return request<{ minDays: number; maxDays: number; minDate: string; maxDate: string; zone: string }>('/delivery/estimate', {
      method: 'POST',
      body: JSON.stringify(address),
    });
  },
  cart() {
    return requestCustomer<{ items: Array<{ id: string; productId: string; color: string; size: string; quantity: number; product: { catalog: unknown } }> }>('/cart');
  },
  addCartItem(productId: string, color: string, size: string, quantity: number) {
    return requestCustomer<{ id: string; quantity: number }>('/cart/items', { method: 'POST', body: JSON.stringify({ productId, color, size, quantity }) });
  },
  updateCartItem(id: string, quantity: number) {
    return requestCustomer(`/cart/items/${encodeURIComponent(id)}`, { method: 'PATCH', body: JSON.stringify({ quantity }) });
  },
  removeCartItem(id: string) {
    return requestCustomer(`/cart/items/${encodeURIComponent(id)}`, { method: 'DELETE' });
  },
  addresses() {
    return requestCustomer<Array<{ id: string; name: string; isPrimary: boolean; tag: string | null; line1: string; line2: string | null; city: string; state: string | null; postalCode: string; country: string; phone: string | null }>>('/addresses');
  },
  addAddress(address: { name: string; isPrimary?: boolean; tag?: string; line1: string; line2?: string; city: string; state?: string; postalCode: string; country: string; phone?: string }) {
    return requestCustomer<{ id: string; name: string; isPrimary: boolean; tag: string | null; line1: string; line2: string | null; city: string; state: string | null; postalCode: string; country: string; phone: string | null }>('/addresses', { method: 'POST', body: JSON.stringify(address) });
  },
  orders() {
    return requestCustomer<Array<Record<string, unknown>>>('/orders');
  },
  createOrder(addressId: string, paymentMethod: 'CARD' | 'UPI' | 'NET_BANKING' | 'WALLET' | 'COD', couponCode?: string) {
    return requestCustomer<Record<string, unknown>>('/orders', { method: 'POST', body: JSON.stringify({ addressId, paymentMethod, couponCode }) });
  },
  paymentQuote(addressId: string) {
    return requestCustomer<{ currency: string; exchangeRate: number; amount: number; baseAmount: number }>(
      `/payments/quote?addressId=${encodeURIComponent(addressId)}`,
    );
  },
  initiateUpiPayment(orderId: string) {
    return requestCustomer<{
      paymentId: string;
      orderId: string;
      displayId: string;
      amount: number;
      currency: string;
      status: string;
      upiPaymentUrl: string;
      qrCodeDataUrl: string;
      expiresAt: string;
      provider: string;
    }>('/payments/upi/initiate', {
      method: 'POST',
      body: JSON.stringify({ orderId }),
    });
  },
  checkUpiPaymentStatus(orderId: string) {
    return requestCustomer<{
      orderId: string;
      displayId: string;
      orderStatus: string;
      paymentStatus: string;
      amount: number;
      currency: string;
      upiUtr?: string;
      verifiedAt?: string;
      expiresAt?: string;
    }>(`/payments/upi/status/${encodeURIComponent(orderId)}`);
  },
  submitUpiUtr(orderId: string, utr: string) {
    return requestCustomer<{
      success: boolean;
      orderId: string;
      upiUtr: string;
      paymentStatus: string;
      message: string;
    }>('/payments/upi/verify-utr', {
      method: 'POST',
      body: JSON.stringify({ orderId, utr }),
    });
  },
  exchanges() {
    return requestCustomer<Array<Record<string, unknown>>>('/exchanges');
  },
  createExchange(input: { orderId: string; type: 'EXCHANGE' | 'RETURN'; productId: string; productName: string; productImage: string; currentSize: string; requestedSize?: string; reason: string; adminNotes?: string }) {
    return requestCustomer<Record<string, unknown>>('/exchanges', { method: 'POST', body: JSON.stringify(input) });
  },
  wishlist() {
    return requestCustomer<Array<Record<string, unknown>>>('/wishlist');
  },
  saveWishlistItem(productId: string, colorway: string, specification: string) {
    return requestCustomer(`/wishlist/${encodeURIComponent(productId)}`, { method: 'PUT', body: JSON.stringify({ colorway, specification }) });
  },
  removeWishlistItem(productId: string) {
    return requestCustomer(`/wishlist/${encodeURIComponent(productId)}`, { method: 'DELETE' });
  },
};

export const adminApi = {
  hasSession() {
    return getAdminAccessToken() !== null;
  },
  async session() {
    return requestAdmin<AuthResponse['user']>('/auth/admin/session');
  },
  async customers() {
    return requestAdmin<Array<Record<string, unknown>>>('/admin/customers');
  },
  async orders() {
    return requestAdmin<Array<Record<string, unknown>>>('/admin/orders');
  },
  async updateOrderStatus(id: string, status: string) {
    return requestAdmin(`/admin/orders/${encodeURIComponent(id)}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  },
  products() {
    return requestAdmin<Array<Record<string, unknown>>>('/admin/products');
  },
  saveProduct(product: ShoeProduct) {
    return requestAdmin(`/admin/products/${encodeURIComponent(product.id)}`, {
      method: 'PUT',
      body: JSON.stringify({ id: product.id, sku: product.sku, name: product.name, brand: product.brand, category: product.category, price: product.price, mrp: product.mrp, catalog: product }),
    });
  },
  deleteProduct(id: string) {
    return requestAdmin(`/admin/products/${encodeURIComponent(id)}`, { method: 'DELETE' });
  },
  coupons() {
    return requestAdmin<Array<Record<string, unknown>>>('/admin/coupons');
  },
  saveCoupon(coupon: { code: string; discountPercent: number; minOrderValue: number; maxDiscount?: number; description: string; isActive: boolean }) {
    return requestAdmin(`/admin/coupons/${encodeURIComponent(coupon.code)}`, { method: 'PUT', body: JSON.stringify(coupon) });
  },
  drops() {
    return requestAdmin<Array<Record<string, unknown>>>('/admin/drops');
  },
  saveDrop(drop: Record<string, unknown> & { id: string }) {
    return requestAdmin(`/admin/drops/${encodeURIComponent(drop.id)}`, { method: 'PUT', body: JSON.stringify(drop) });
  },
  updateDropStatus(id: string, status: string) {
    return requestAdmin(`/admin/drops/${encodeURIComponent(id)}/status`, { method: 'PATCH', body: JSON.stringify({ status }) });
  },
  exchanges() {
    return requestAdmin<Array<Record<string, unknown>>>('/admin/exchanges');
  },
  updateExchangeStatus(id: string, status: string) {
    return requestAdmin(`/admin/exchanges/${encodeURIComponent(id)}/status`, { method: 'PATCH', body: JSON.stringify({ status }) });
  },
  sessions() {
    return requestAdmin<Array<{ id: string; createdAt: string; expiresAt: string; isCurrent: boolean; ip: string; environment: string }>>('/admin/security/sessions');
  },
  revokeAllSessions() {
    return requestAdmin<{ revokedCount: number; message: string }>('/admin/security/sessions/revoke-all', { method: 'POST' });
  },
  securityLogs(params?: { page?: number; limit?: number; severity?: string; eventType?: string; search?: string }) {
    const search = new URLSearchParams();
    if (params?.page) search.set('page', String(params.page));
    if (params?.limit) search.set('limit', String(params.limit));
    if (params?.severity) search.set('severity', params.severity);
    if (params?.eventType) search.set('eventType', params.eventType);
    if (params?.search) search.set('search', params.search);
    const qs = search.toString();
    return requestAdmin<{
      logs: Array<{
        id: string;
        userId?: string;
        eventType: string;
        severity: string;
        ipAddress?: string;
        userAgent?: string;
        details?: unknown;
        createdAt: string;
        user?: { email: string; name: string; role: string };
      }>;
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    }>(`/admin/security/logs${qs ? `?${qs}` : ''}`);
  },
  securityStats() {
    return requestAdmin<{
      totalLogs: number;
      criticalEvents: number;
      threatsBlocked24h: number;
      activeSessions: number;
      mfaComplianceRate: number;
      totalAdmins: number;
      mfaAdmins: number;
      lockedAccounts: number;
      recentLogs: Array<{
        id: string;
        eventType: string;
        severity: string;
        ipAddress?: string;
        userAgent?: string;
        createdAt: string;
        user?: { email: string; name: string };
      }>;
    }>('/admin/security/stats');
  },
  payments(params?: { q?: string; status?: string; provider?: string; page?: number; limit?: number }) {
    const search = new URLSearchParams();
    if (params?.q) search.set('q', params.q);
    if (params?.status) search.set('status', params.status);
    if (params?.provider) search.set('provider', params.provider);
    if (params?.page) search.set('page', String(params.page));
    if (params?.limit) search.set('limit', String(params.limit));
    const qs = search.toString();
    return requestAdmin<{
      payments: Array<Record<string, unknown>>;
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    }>(`/admin/payments${qs ? `?${qs}` : ''}`);
  },
  paymentDetail(id: string) {
    return requestAdmin<Record<string, unknown>>(`/admin/payments/${encodeURIComponent(id)}`);
  },
  reconcilePayment(id: string) {
    return requestAdmin<{ success: boolean; message: string; status?: string; upiUtr?: string }>(
      `/admin/payments/${encodeURIComponent(id)}/reconcile`,
      { method: 'POST' }
    );
  },
  adjustPayment(id: string, newStatus: string, reason: string) {
    return requestAdmin<{ success: boolean; payment: Record<string, unknown> }>(
      `/admin/payments/${encodeURIComponent(id)}/adjust`,
      { method: 'POST', body: JSON.stringify({ newStatus, reason }) }
    );
  },
  reconcileAllPayments() {
    return requestAdmin<{ checkedCount: number; confirmedCount: number; expiredCount: number; failedCount: number; errors: string[] }>(
      '/admin/payments/reconcile-all',
      { method: 'POST' }
    );
  },
  getPaymentsCsvExportUrl() {
    return `${API_URL}/admin/payments/export/csv`;
  },
  async logout() {
    const refreshToken = getAdminRefreshToken();
    clearAdminSession();
    if (!refreshToken) return;
    await request('/auth/admin/logout', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    });
  },
};

async function requestAdmin<T>(path: string, init: RequestInit = {}, canRefresh = true): Promise<T> {
  const accessToken = getAdminAccessToken();
  if (!accessToken) throw new Error('Admin session required');

  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init.headers ?? {}),
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401 && canRefresh) {
    const refreshToken = getAdminRefreshToken();
    if (refreshToken) {
      try {
        const refreshed = await request<{ accessToken: string; refreshToken: string }>('/auth/refresh', {
          method: 'POST',
          body: JSON.stringify({ refreshToken }),
        });
        saveAdminTokens(refreshed, isAdminSessionPersistent());
        return requestAdmin<T>(path, init, false);
      } catch {
        clearAdminSession();
      }
    }
  }

  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.error ?? 'Admin request failed');
  return body as T;
}

function saveCustomerSession(result: Pick<AuthResponse, 'accessToken' | 'refreshToken'>) {
  localStorage.setItem(CUSTOMER_ACCESS_KEY, result.accessToken);
  localStorage.setItem(CUSTOMER_REFRESH_KEY, result.refreshToken);
}

async function requestCustomer<T>(path: string, init: RequestInit = {}, canRefresh = true): Promise<T> {
  const accessToken = localStorage.getItem(CUSTOMER_ACCESS_KEY);
  if (!accessToken) throw new Error('User session required');
  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(init.headers ?? {}), Authorization: `Bearer ${accessToken}` },
  });
  if (response.status === 401 && canRefresh) {
    const refreshToken = localStorage.getItem(CUSTOMER_REFRESH_KEY);
    if (refreshToken) {
      try {
        const tokens = await request<{ accessToken: string; refreshToken: string }>('/auth/refresh', { method: 'POST', body: JSON.stringify({ refreshToken }) });
        saveCustomerSession(tokens);
        return requestCustomer<T>(path, init, false);
      } catch {
        clearSession();
      }
    }
  }
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.error ?? 'User request failed');
  return body as T;
}

function saveAdminSession(result: Pick<AuthResponse, 'accessToken' | 'refreshToken'>, rememberDevice: boolean) {
  clearAdminSession();
  const storage = rememberDevice ? localStorage : sessionStorage;
  storage.setItem(ADMIN_ACCESS_KEY, result.accessToken);
  storage.setItem(ADMIN_REFRESH_KEY, result.refreshToken);
}

function saveAdminTokens(tokens: { accessToken: string; refreshToken: string }, rememberDevice: boolean) {
  saveAdminSession(tokens, rememberDevice);
}

function getAdminAccessToken() {
  return localStorage.getItem(ADMIN_ACCESS_KEY) ?? sessionStorage.getItem(ADMIN_ACCESS_KEY);
}

function getAdminRefreshToken() {
  return localStorage.getItem(ADMIN_REFRESH_KEY) ?? sessionStorage.getItem(ADMIN_REFRESH_KEY);
}

function isAdminSessionPersistent() {
  return localStorage.getItem(ADMIN_REFRESH_KEY) !== null;
}

export function clearAdminSession() {
  localStorage.removeItem(ADMIN_ACCESS_KEY);
  localStorage.removeItem(ADMIN_REFRESH_KEY);
  sessionStorage.removeItem(ADMIN_ACCESS_KEY);
  sessionStorage.removeItem(ADMIN_REFRESH_KEY);
}

export function clearSession() {
  localStorage.removeItem(CUSTOMER_ACCESS_KEY);
  localStorage.removeItem(CUSTOMER_REFRESH_KEY);
}