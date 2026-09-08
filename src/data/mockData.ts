import { CartItem, Address } from '../types';

export const INITIAL_CART_ITEMS: CartItem[] = [
  {
    id: 'vn-runner-01',
    code: 'RUNNER_01',
    name: 'X-01 CORE RUNNER',
    edition: 'PERMANENT TECH / 001',
    price: 480,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3ThghKA86_Q_fCtpbOYWUAXmvMm4Kf4vgJ-95R0P-GQ7-54iwFQ62OpUehTva7Lrre3Ck5BjdqT7PUtCCGH_Wwz9Qk1N3F51WG23E6k-tKfVRluMWnTRRYRy6YduVh0jcNpwIPzJKKLLQNu5rPsw0IaxUNhwzkbSAvw_vY21enZZWo4B3GBLdESGfe0zbL-6o1u1T3qeO9zjOjR-QtFgx4y4HeU92YYx41_HJVG_A7dJiUenDyx1z',
    colorway: 'Obsidian Black',
    specification: 'US 10 / EU 44',
    availableSizes: [
      'US 8 / EU 41',
      'US 8.5 / EU 41.5',
      'US 9 / EU 42.5',
      'US 9.5 / EU 43',
      'US 10 / EU 44',
      'US 10.5 / EU 44.5',
      'US 11 / EU 45',
      'US 12 / EU 46'
    ],
    allocationStatus: 'Allocation Secured // Vault Unit',
    quantity: 1,
  },
  {
    id: 'vn-derby-02',
    code: 'DERBY_02',
    name: 'SLATE PERFORMANCE DERBY',
    edition: 'EXPERIMENTAL HYBRID / 084',
    price: 540,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWMpXigzxhdIj1RlXkSXShH02NkcBTQuHgMX7b0Nqjm7EvezUQ0KbjyOK66K9tVk320d99qSb50XSUNKoMQVqSfwaxgbaJEHOe3fdwMmVGF97JYyglufvqM17P4F-i8wIwjsRUD8PVyzT5DLe7dUh3RfAtmzgtXQnrF4ub_fdckepg3UFGcZxgTHleFP-RZmYcLCVtRlHdzHFdsrKmvKg-c4k4Unv66kyNq1CFowryTIy5fRVfkcjF',
    colorway: 'Slate Grey / Noir',
    specification: 'US 9 / EU 42.5',
    availableSizes: [
      'US 8 / EU 41',
      'US 8.5 / EU 41.5',
      'US 9 / EU 42.5',
      'US 9.5 / EU 43',
      'US 10 / EU 44',
      'US 10.5 / EU 44.5',
      'US 11 / EU 45'
    ],
    allocationStatus: 'Allocation Secured // 1 Unit Remaining',
    quantity: 1,
  },
];

export const INITIAL_ADDRESSES: Address[] = [
  {
    id: 'addr-default',
    name: 'DEFAULT ATELIER',
    isPrimary: true,
    tag: 'PRIMARY',
    line1: 'VANTA ARCHIVE RESIDENCE',
    line2: '450 West 14th St, Fl 8',
    city: 'New York',
    state: 'NY',
    postalCode: '10014',
    country: 'United States',
    phone: '+1 (212) 902-8400',
  },
  {
    id: 'addr-berlin',
    name: 'SECONDARY VAULT // BERLIN',
    isPrimary: false,
    line1: 'Brunnenstraße 45, Mitte',
    city: 'Berlin',
    postalCode: '10115',
    country: 'Germany',
  },
];

export const CHECKOUT_STEPS = [
  { id: 1, label: 'AUTH', fullLabel: 'STAGE 01 // CLIENT AUTHENTICATION' },
  { id: 2, label: 'DISPATCH', fullLabel: 'STAGE 02 // DISPATCH LOCATION' },
  { id: 3, label: 'FREIGHT', fullLabel: 'STAGE 03 // ARMORED TRANSIT' },
  { id: 4, label: 'PAYMENT', fullLabel: 'STAGE 04 // CRYPTOGRAPHIC SETTLEMENT' },
  { id: 5, label: 'CONFIRM', fullLabel: 'STAGE 05 // FINAL ALLOCATION REVIEW' },
];
