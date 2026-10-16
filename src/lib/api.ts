import type { ShoeProduct } from '../types';

const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();
const API_URL = (configuredApiUrl || 'http://localhost:4000/api').replace(/\/+$/, '');

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
  async login(email: string, password: string) {
    const result = await request<AuthResponse>('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    saveCustomerSession(result);
    return result.user;
  },
  async register(name: string, email: string, password: string) {
    const result = await request<AuthResponse>('/auth/register', { method: 'POST', body: JSON.stringify({ name, email, password }) });
    saveCustomerSession(result);
    return result.user;
  },
  session() {
    return requestCustomer<AuthResponse['user']>('/auth/session');
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
  async adminLogin(email: string, password: string, rememberDevice = true) {
    const result = await request<AuthResponse>('/auth/admin/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    if (result.user.role !== 'ADMIN') throw new Error('Admin role required');
    saveAdminSession(result, rememberDevice);
    return result.user;
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
  createRazorpayOrder(orderId: string) {
    return requestCustomer<{ keyId: string; orderId: string; amount: number; currency: string }>('/payments/razorpay/order', {
      method: 'POST',
      body: JSON.stringify({ orderId }),
    });
  },
  verifyRazorpayPayment(input: { orderId: string; razorpayOrderId: string; razorpayPaymentId: string; razorpaySignature: string }) {
    return requestCustomer<{ status: 'paid'; order: Record<string, unknown> }>('/payments/razorpay/verify', {
      method: 'POST',
      body: JSON.stringify(input),
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
    return requestAdmin<Array<{ id: string; createdAt: string; expiresAt: string; isCurrent: boolean; environment: string }>>('/admin/security/sessions');
  },
  revokeAllSessions() {
    return requestAdmin<{ revokedCount: number; message: string }>('/admin/security/sessions/revoke-all', { method: 'POST' });
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