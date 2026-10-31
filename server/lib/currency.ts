import { createRequire } from 'node:module';
import countryToCurrency from 'country-to-currency';
import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export class CurrencyQuoteError extends Error {
  constructor(message: string, readonly statusCode: 422 | 503) {
    super(message);
    this.name = 'CurrencyQuoteError';
  }
}

const require = createRequire(import.meta.url);
const countries = require('i18n-iso-countries') as typeof import('i18n-iso-countries');
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

const razorpayCurrencies = new Set([
  'AED', 'ALL', 'AMD', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD',
  'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BZD', 'CAD', 'CHF',
  'CLP', 'CNY', 'COP', 'CRC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD',
  'EGP', 'ETB', 'EUR', 'FJD', 'GBP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD',
  'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'ISK', 'JMD',
  'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK',
  'LKR', 'LRD', 'LSL', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MUR',
  'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD',
  'OMR', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB',
  'RWF', 'SAR', 'SCR', 'SEK', 'SGD', 'SLL', 'SOS', 'SVC', 'SZL', 'THB', 'TND',
  'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VND', 'VUV',
  'XAF', 'XCD', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW',
]);

const minorUnits = new Map<string, number>();
for (const currency of razorpayCurrencies) {
  minorUnits.set(
    currency,
    new Intl.NumberFormat('en', { style: 'currency', currency }).resolvedOptions().maximumFractionDigits,
  );
}

let cachedRates: { expiresAt: number; rates: Record<string, number> } | null = null;

export function currencyForCountry(country: string) {
  const normalized = country.trim().toUpperCase();
  const countryCode = countries.isValid(normalized)
    ? countries.toAlpha2(normalized)
    : countries.getAlpha2Code(country.trim(), 'en');
  if (!countryCode) throw new CurrencyQuoteError(`Could not identify shipping country "${country}"`, 422);

  const currency = (countryToCurrency as Record<string, string>)[countryCode];
  if (!currency || !razorpayCurrencies.has(currency)) {
    throw new CurrencyQuoteError(`Razorpay international checkout does not support the currency for ${country}`, 422);
  }
  return currency;
}

export function currencyExponent(currency: string) {
  const exponent = minorUnits.get(currency);
  if (exponent === undefined) throw new CurrencyQuoteError(`Razorpay does not support ${currency}`, 422);
  return exponent;
}

async function getInrExchangeRates() {
  if (cachedRates && cachedRates.expiresAt > Date.now()) return cachedRates.rates;

  let response: Response;
  try {
    response = await fetch('https://open.er-api.com/v6/latest/INR', {
      signal: AbortSignal.timeout(5000),
    });
  } catch (error) {
    throw new CurrencyQuoteError(
      error instanceof Error && error.name === 'TimeoutError'
        ? 'Exchange-rate service timed out; please try again'
        : 'Exchange-rate service is temporarily unavailable',
      503,
    );
  }
  if (!response.ok) {
    throw new CurrencyQuoteError(`Exchange-rate provider returned HTTP ${response.status}`, 503);
  }
  let body: unknown;
  try {
    body = await response.json();
  } catch {
    throw new CurrencyQuoteError('Exchange-rate provider returned invalid JSON', 503);
  }
  const resultSchema = z.object({
    result: z.literal('success'),
    rates: z.record(z.string(), z.number().positive()),
    time_last_update_unix: z.number().positive(),
  });
  const result = resultSchema.safeParse(body);
  if (!result.success || !result.data.rates.INR) {
    throw new CurrencyQuoteError('Exchange-rate provider returned invalid INR rates', 503);
  }

  cachedRates = {
    expiresAt: Math.min(
      result.data.time_last_update_unix * 1000 + 24 * 60 * 60 * 1000,
      Date.now() + 60 * 60 * 1000,
    ),
    rates: result.data.rates,
  };
  return cachedRates.rates;
}

export async function quoteInrAmount(amountInr: number, currency: string) {
  const exponent = currencyExponent(currency);
  if (!Number.isFinite(amountInr) || amountInr < 0) {
    throw new CurrencyQuoteError('Order amount must be a valid non-negative number', 422);
  }
  if (currency === 'INR') {
    return { currency, exchangeRate: 1, amount: amountInr };
  }

  const rates = await getInrExchangeRates();
  const exchangeRate = rates[currency];
  if (!Number.isFinite(exchangeRate) || exchangeRate <= 0) {
    throw new CurrencyQuoteError(`A current exchange rate for ${currency} is unavailable`, 503);
  }
  const factor = 10 ** exponent;
  return {
    currency,
    exchangeRate,
    amount: Math.round(amountInr * exchangeRate * factor) / factor,
  };
}

export function amountInMinorUnits(amount: Prisma.Decimal | number, currency: string) {
  const exponent = currencyExponent(currency);
  return Math.round(Number(amount) * 10 ** exponent);
}
