export interface DeliveryEstimateInput {
  city: string;
  state?: string;
  postalCode: string;
  country: string;
}

export interface DeliveryEstimateResult {
  minDays: number;
  maxDays: number;
  minDate: string; // ISO date string YYYY-MM-DD
  maxDate: string; // ISO date string YYYY-MM-DD
  zone: 'INDIA_METRO' | 'REST_OF_INDIA' | 'INTERNATIONAL';
}

const INDIA_METRO_CITIES = new Set([
  'pune',
  'mumbai',
  'delhi',
  'new delhi',
  'bengaluru',
  'bangalore',
  'hyderabad',
  'chennai',
  'kolkata',
]);

/**
 * Adds business days (skipping Sundays).
 * Order processing takes 1 business day, included in the returned business days count.
 */
function addBusinessDays(startDate: Date, businessDays: number): Date {
  const current = new Date(startDate);
  let added = 0;
  while (added < businessDays) {
    current.setDate(current.getDate() + 1);
    // Sunday is day 0
    if (current.getDay() !== 0) {
      added++;
    }
  }
  return current;
}

function formatDateISO(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function estimateDelivery(address: DeliveryEstimateInput): DeliveryEstimateResult {
  if (!address) {
    throw new Error('Address is required for delivery estimation');
  }

  const country = (address.country || '').trim();
  const rawPostal = (address.postalCode || '').trim();
  const city = (address.city || '').trim().toLowerCase();

  if (!rawPostal) {
    throw new Error('Valid postal code is required');
  }

  const isIndia = !country || /^(india|in|ind)$/i.test(country);

  let zone: DeliveryEstimateResult['zone'];
  let minDays: number;
  let maxDays: number;

  if (isIndia) {
    // Validate Indian PIN code: exactly 6 digits, first digit cannot be 0
    const pinRegex = /^[1-9][0-9]{5}$/;
    if (!pinRegex.test(rawPostal.replace(/\s+/g, ''))) {
      throw new Error(`Invalid Indian PIN code: "${address.postalCode}". Must be a valid 6-digit PIN code.`);
    }

    if (INDIA_METRO_CITIES.has(city)) {
      zone = 'INDIA_METRO';
      minDays = 2;
      maxDays = 4;
    } else {
      zone = 'REST_OF_INDIA';
      minDays = 4;
      maxDays = 7;
    }
  } else {
    // International destination
    // Basic postal validation (alphanumeric, 3 to 10 characters)
    const cleanPostal = rawPostal.replace(/[\s-]+/g, '');
    if (cleanPostal.length < 3 || cleanPostal.length > 10) {
      throw new Error(`Invalid international postal code: "${address.postalCode}"`);
    }

    zone = 'INTERNATIONAL';
    minDays = 7;
    maxDays = 14;
  }

  // Add 1 business processing day to every order
  const today = new Date();
  // Start from next day after processing day
  const effectiveMinBusinessDays = minDays + 1;
  const effectiveMaxBusinessDays = maxDays + 1;

  const minDate = addBusinessDays(today, effectiveMinBusinessDays);
  const maxDate = addBusinessDays(today, effectiveMaxBusinessDays);

  return {
    minDays,
    maxDays,
    minDate: formatDateISO(minDate),
    maxDate: formatDateISO(maxDate),
    zone,
  };
}
