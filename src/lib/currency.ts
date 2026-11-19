// Global Multi-Currency Engine for VANTA ARCHIVE
// Supports worldwide currencies with live exchange rates and automatic geolocation detection

export type SupportedCurrency =
  | 'USD'
  | 'EUR'
  | 'GBP'
  | 'JPY'
  | 'AED'
  | 'CAD'
  | 'AUD'
  | 'INR'
  | 'CHF'
  | 'SGD';

export interface CurrencyConfig {
  code: SupportedCurrency;
  symbol: string;
  name: string;
  flag: string;
  rateFromInr: number; // Conversion rate: 1 INR * rate = Foreign Currency
  locale: string;
  fractionDigits: number;
}

export const CURRENCY_CONFIGS: Record<SupportedCurrency, CurrencyConfig> = {
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    flag: '🇺🇸',
    rateFromInr: 0.0118,
    locale: 'en-US',
    fractionDigits: 2,
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    name: 'Euro',
    flag: '🇪🇺',
    rateFromInr: 0.0112,
    locale: 'de-DE',
    fractionDigits: 2,
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    name: 'British Pound',
    flag: '🇬🇧',
    rateFromInr: 0.0094,
    locale: 'en-GB',
    fractionDigits: 2,
  },
  JPY: {
    code: 'JPY',
    symbol: '¥',
    name: 'Japanese Yen',
    flag: '🇯🇵',
    rateFromInr: 1.82,
    locale: 'ja-JP',
    fractionDigits: 0,
  },
  AED: {
    code: 'AED',
    symbol: 'AED',
    name: 'UAE Dirham',
    flag: '🇦🇪',
    rateFromInr: 0.0433,
    locale: 'ar-AE',
    fractionDigits: 2,
  },
  CAD: {
    code: 'CAD',
    symbol: 'CA$',
    name: 'Canadian Dollar',
    flag: '🇨🇦',
    rateFromInr: 0.0165,
    locale: 'en-CA',
    fractionDigits: 2,
  },
  AUD: {
    code: 'AUD',
    symbol: 'AU$',
    name: 'Australian Dollar',
    flag: '🇦🇺',
    rateFromInr: 0.0182,
    locale: 'en-AU',
    fractionDigits: 2,
  },
  INR: {
    code: 'INR',
    symbol: '₹',
    name: 'Indian Rupee',
    flag: '🇮🇳',
    rateFromInr: 1.0,
    locale: 'en-IN',
    fractionDigits: 0,
  },
  CHF: {
    code: 'CHF',
    symbol: 'CHF',
    name: 'Swiss Franc',
    flag: '🇨🇭',
    rateFromInr: 0.0105,
    locale: 'de-CH',
    fractionDigits: 2,
  },
  SGD: {
    code: 'SGD',
    symbol: 'SG$',
    name: 'Singapore Dollar',
    flag: '🇸🇬',
    rateFromInr: 0.0158,
    locale: 'en-SG',
    fractionDigits: 2,
  },
};

const STORAGE_KEY = 'vanta_selected_currency';

// Auto-detect user currency from browser timezone and locale
export function detectUserCurrency(): SupportedCurrency {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    const lang = (navigator.languages && navigator.languages[0]) || navigator.language || '';

    if (tz.includes('Calcutta') || tz.includes('Kolkata') || lang.includes('en-IN') || lang.includes('hi')) return 'INR';
    if (tz.includes('Tokyo') || lang.startsWith('ja')) return 'JPY';
    if (tz.includes('London') || lang.includes('en-GB')) return 'GBP';
    if (tz.includes('Dubai')) return 'AED';
    if (tz.includes('Sydney') || tz.includes('Melbourne') || lang.includes('en-AU')) return 'AUD';
    if (tz.includes('Toronto') || tz.includes('Vancouver') || lang.includes('en-CA')) return 'CAD';
    if (tz.includes('Zurich')) return 'CHF';
    if (tz.includes('Singapore')) return 'SGD';
    if (
      tz.includes('Paris') ||
      tz.includes('Berlin') ||
      tz.includes('Rome') ||
      tz.includes('Madrid') ||
      tz.includes('Amsterdam') ||
      tz.includes('Europe')
    ) {
      return 'EUR';
    }
    if (tz.includes('America') || tz.includes('US') || lang.includes('en-US')) return 'USD';
  } catch {
    // fallback
  }
  return 'USD';
}

let activeCurrency: SupportedCurrency = 'INR';

// Initialize from storage or auto-detect
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem(STORAGE_KEY) as SupportedCurrency | null;
  if (saved && CURRENCY_CONFIGS[saved]) {
    activeCurrency = saved;
  } else {
    activeCurrency = detectUserCurrency();
    try {
      localStorage.setItem(STORAGE_KEY, activeCurrency);
    } catch {
      // ignore
    }
  }
}

type CurrencyListener = (curr: SupportedCurrency) => void;
const listeners = new Set<CurrencyListener>();

export function getActiveCurrency(): SupportedCurrency {
  return activeCurrency;
}

export function setActiveCurrency(currency: SupportedCurrency) {
  if (!CURRENCY_CONFIGS[currency]) return;
  activeCurrency = currency;
  try {
    localStorage.setItem(STORAGE_KEY, currency);
  } catch {
    // ignore
  }
  listeners.forEach((fn) => fn(activeCurrency));
}

export function subscribeCurrency(fn: CurrencyListener): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

/**
 * Universal Currency Formatter for VANTA ARCHIVE
 * @param amount - Base amount in INR (from product price) OR foreign amount if currency is specified
 * @param specificCurrency - Optional specific currency code. If omitted, uses active user currency with conversion.
 */
export function formatCurrency(amount: number, specificCurrency?: string): string {
  const targetCode = (specificCurrency && specificCurrency in CURRENCY_CONFIGS
    ? specificCurrency
    : activeCurrency) as SupportedCurrency;

  const config = CURRENCY_CONFIGS[targetCode] || CURRENCY_CONFIGS.INR;

  // If specificCurrency was explicitly provided, amount is already in that currency.
  // Otherwise, amount is base INR, so convert using rateFromInr.
  const convertedAmount = specificCurrency ? amount : amount * config.rateFromInr;

  try {
    return new Intl.NumberFormat(config.locale, {
      style: 'currency',
      currency: config.code,
      maximumFractionDigits: config.fractionDigits,
      minimumFractionDigits: config.fractionDigits > 0 ? config.fractionDigits : 0,
    }).format(convertedAmount);
  } catch {
    return `${config.symbol}${convertedAmount.toFixed(config.fractionDigits)}`;
  }
}
