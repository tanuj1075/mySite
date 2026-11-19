// Global Address & Location Auto-Detection Service for VANTA ARCHIVE
import { Address } from '../types';

export interface GlobalLocationPreset {
  id: string;
  name: string;
  city: string;
  country: string;
  countryCode: string;
  line1: string;
  line2?: string;
  postalCode: string;
  state?: string;
  phonePrefix: string;
  phoneExample: string;
  flag: string;
}

export const GLOBAL_LOCATION_PRESETS: GlobalLocationPreset[] = [
  {
    id: 'tokyo-vault',
    name: 'TOKYO ATELIER VAULT',
    city: 'Tokyo',
    country: 'Japan',
    countryCode: 'JP',
    line1: '5-7-2 Minami-Aoyama',
    line2: 'The Archive Suite 402',
    postalCode: '107-0062',
    state: 'Tokyo',
    phonePrefix: '+81',
    phoneExample: '+81 3-5412-8900',
    flag: '🇯🇵',
  },
  {
    id: 'ny-loft',
    name: 'NEW YORK SOHO ARCHIVE',
    city: 'New York',
    country: 'United States',
    countryCode: 'US',
    line1: '742 Broadway',
    line2: 'Floor 5, Penthouse B',
    postalCode: '10003',
    state: 'NY',
    phonePrefix: '+1',
    phoneExample: '+1 212-555-0199',
    flag: '🇺🇸',
  },
  {
    id: 'milan-atelier',
    name: 'MILAN GALLERIA ATELIER',
    city: 'Milan',
    country: 'Italy',
    countryCode: 'IT',
    line1: 'Via Monte Napoleone 8',
    line2: 'Cortile Nobile 2A',
    postalCode: '20121',
    state: 'Lombardy',
    phonePrefix: '+39',
    phoneExample: '+39 02 8901 2345',
    flag: '🇮🇹',
  },
  {
    id: 'london-mayfair',
    name: 'LONDON MAYFAIR SUITE',
    city: 'London',
    country: 'United Kingdom',
    countryCode: 'GB',
    line1: '14 Savile Row',
    line2: 'Private Archive Saloon',
    postalCode: 'W1S 3JN',
    state: 'Greater London',
    phonePrefix: '+44',
    phoneExample: '+44 20 7946 0912',
    flag: '🇬🇧',
  },
  {
    id: 'dubai-vault',
    name: 'DUBAI ALSERKAL VAULT',
    city: 'Dubai',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    line1: 'Alserkal Avenue, Warehouse 17',
    line2: 'Al Quoz Industrial 1',
    postalCode: '00000',
    state: 'Dubai',
    phonePrefix: '+971',
    phoneExample: '+971 4 333 4455',
    flag: '🇦🇪',
  },
  {
    id: 'mumbai-bkc',
    name: 'MUMBAI BKC RESERVE',
    city: 'Mumbai',
    country: 'India',
    countryCode: 'IN',
    line1: 'Bandra Kurla Complex, G Block',
    line2: 'Tower 3, Level 14',
    postalCode: '400051',
    state: 'Maharashtra',
    phonePrefix: '+91',
    phoneExample: '+91 98200 12345',
    flag: '🇮🇳',
  },
  {
    id: 'paris-atelier',
    name: 'PARIS FAUBOURG ARCHIVE',
    city: 'Paris',
    country: 'France',
    countryCode: 'FR',
    line1: '28 Rue du Faubourg Saint-Honoré',
    line2: 'Appartement de Maître',
    postalCode: '75008',
    state: 'Île-de-France',
    phonePrefix: '+33',
    phoneExample: '+33 1 42 68 00 11',
    flag: '🇫🇷',
  },
  {
    id: 'berlin-studio',
    name: 'BERLIN MITTE PAVILION',
    city: 'Berlin',
    country: 'Germany',
    countryCode: 'DE',
    line1: 'Friedrichstraße 43',
    line2: 'Loft 3.1',
    postalCode: '10117',
    state: 'Berlin',
    phonePrefix: '+49',
    phoneExample: '+49 30 2096 4410',
    flag: '🇩🇪',
  },
  {
    id: 'toronto-yorkville',
    name: 'TORONTO YORKVILLE ATELIER',
    city: 'Toronto',
    country: 'Canada',
    countryCode: 'CA',
    line1: '130 Bloor Street West',
    line2: 'Suite 1100',
    postalCode: 'M5S 1N5',
    state: 'ON',
    phonePrefix: '+1',
    phoneExample: '+1 416-555-0144',
    flag: '🇨🇦',
  },
  {
    id: 'sydney-harbour',
    name: 'SYDNEY HARBOUR RESIDENCE',
    city: 'Sydney',
    country: 'Australia',
    countryCode: 'AU',
    line1: '188 Pitt Street',
    line2: 'Penthouse Pavilion',
    postalCode: '2000',
    state: 'NSW',
    phonePrefix: '+61',
    phoneExample: '+61 2 9232 5500',
    flag: '🇦🇺',
  },
];

export const WORLDWIDE_COUNTRIES = [
  { name: 'United States', code: 'US', flag: '🇺🇸', phoneCode: '+1', defaultCity: 'New York', defaultPostal: '10001' },
  { name: 'United Kingdom', code: 'GB', flag: '🇬🇧', phoneCode: '+44', defaultCity: 'London', defaultPostal: 'W1S 3JN' },
  { name: 'Japan', code: 'JP', flag: '🇯🇵', phoneCode: '+81', defaultCity: 'Tokyo', defaultPostal: '107-0062' },
  { name: 'Italy', code: 'IT', flag: '🇮🇹', phoneCode: '+39', defaultCity: 'Milan', defaultPostal: '20121' },
  { name: 'France', code: 'FR', flag: '🇫🇷', phoneCode: '+33', defaultCity: 'Paris', defaultPostal: '75008' },
  { name: 'Germany', code: 'DE', flag: '🇩🇪', phoneCode: '+49', defaultCity: 'Berlin', defaultPostal: '10117' },
  { name: 'United Arab Emirates', code: 'AE', flag: '🇦🇪', phoneCode: '+971', defaultCity: 'Dubai', defaultPostal: '00000' },
  { name: 'India', code: 'IN', flag: '🇮🇳', phoneCode: '+91', defaultCity: 'Mumbai', defaultPostal: '400051' },
  { name: 'Canada', code: 'CA', flag: '🇨🇦', phoneCode: '+1', defaultCity: 'Toronto', defaultPostal: 'M5S 1N5' },
  { name: 'Australia', code: 'AU', flag: '🇦🇺', phoneCode: '+61', defaultCity: 'Sydney', defaultPostal: '2000' },
  { name: 'Switzerland', code: 'CH', flag: '🇨🇭', phoneCode: '+41', defaultCity: 'Zurich', defaultPostal: '8001' },
  { name: 'Singapore', code: 'SG', flag: '🇸🇬', phoneCode: '+65', defaultCity: 'Singapore', defaultPostal: '018956' },
  { name: 'South Korea', code: 'KR', flag: '🇰🇷', phoneCode: '+82', defaultCity: 'Seoul', defaultPostal: '06000' },
  { name: 'Netherlands', code: 'NL', flag: '🇳🇱', phoneCode: '+31', defaultCity: 'Amsterdam', defaultPostal: '1012 JS' },
  { name: 'Spain', code: 'ES', flag: '🇪🇸', phoneCode: '+34', defaultCity: 'Madrid', defaultPostal: '28001' },
  { name: 'Saudi Arabia', code: 'SA', flag: '🇸🇦', phoneCode: '+966', defaultCity: 'Riyadh', defaultPostal: '11564' },
];

// Detect User's Estimated Location using Browser Context & Timezone
export function detectUserLocation(): {
  country: string;
  city: string;
  countryCode: string;
  phoneCode: string;
  defaultPostal: string;
  presetMatch?: GlobalLocationPreset;
} {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    const lang = (navigator.languages && navigator.languages[0]) || navigator.language || '';

    if (tz.includes('Kolkata') || tz.includes('Calcutta') || lang.includes('en-IN') || lang.includes('hi')) {
      const match = GLOBAL_LOCATION_PRESETS.find((p) => p.countryCode === 'IN');
      return { country: 'India', city: 'Mumbai', countryCode: 'IN', phoneCode: '+91', defaultPostal: '400051', presetMatch: match };
    }
    if (tz.includes('Tokyo') || lang.startsWith('ja')) {
      const match = GLOBAL_LOCATION_PRESETS.find((p) => p.countryCode === 'JP');
      return { country: 'Japan', city: 'Tokyo', countryCode: 'JP', phoneCode: '+81', defaultPostal: '107-0062', presetMatch: match };
    }
    if (tz.includes('London') || lang.includes('en-GB')) {
      const match = GLOBAL_LOCATION_PRESETS.find((p) => p.countryCode === 'GB');
      return { country: 'United Kingdom', city: 'London', countryCode: 'GB', phoneCode: '+44', defaultPostal: 'W1S 3JN', presetMatch: match };
    }
    if (tz.includes('Dubai')) {
      const match = GLOBAL_LOCATION_PRESETS.find((p) => p.countryCode === 'AE');
      return { country: 'United Arab Emirates', city: 'Dubai', countryCode: 'AE', phoneCode: '+971', defaultPostal: '00000', presetMatch: match };
    }
    if (tz.includes('Paris')) {
      const match = GLOBAL_LOCATION_PRESETS.find((p) => p.countryCode === 'FR');
      return { country: 'France', city: 'Paris', countryCode: 'FR', phoneCode: '+33', defaultPostal: '75008', presetMatch: match };
    }
    if (tz.includes('Rome') || tz.includes('Milan')) {
      const match = GLOBAL_LOCATION_PRESETS.find((p) => p.countryCode === 'IT');
      return { country: 'Italy', city: 'Milan', countryCode: 'IT', phoneCode: '+39', defaultPostal: '20121', presetMatch: match };
    }
    if (tz.includes('Berlin')) {
      const match = GLOBAL_LOCATION_PRESETS.find((p) => p.countryCode === 'DE');
      return { country: 'Germany', city: 'Berlin', countryCode: 'DE', phoneCode: '+49', defaultPostal: '10117', presetMatch: match };
    }
    if (tz.includes('Sydney') || tz.includes('Melbourne')) {
      const match = GLOBAL_LOCATION_PRESETS.find((p) => p.countryCode === 'AU');
      return { country: 'Australia', city: 'Sydney', countryCode: 'AU', phoneCode: '+61', defaultPostal: '2000', presetMatch: match };
    }
    if (tz.includes('Toronto') || tz.includes('Vancouver')) {
      const match = GLOBAL_LOCATION_PRESETS.find((p) => p.countryCode === 'CA');
      return { country: 'Canada', city: 'Toronto', countryCode: 'CA', phoneCode: '+1', defaultPostal: 'M5S 1N5', presetMatch: match };
    }
  } catch {
    // fallback
  }

  const defaultMatch = GLOBAL_LOCATION_PRESETS.find((p) => p.countryCode === 'US');
  return {
    country: 'United States',
    city: 'New York',
    countryCode: 'US',
    phoneCode: '+1',
    defaultPostal: '10003',
    presetMatch: defaultMatch,
  };
}

// Search suggestions when patron types in street or city
export function getAddressSuggestions(query: string, currentCountry?: string): GlobalLocationPreset[] {
  const q = query.trim().toLowerCase();
  if (!q) return GLOBAL_LOCATION_PRESETS.slice(0, 4);

  return GLOBAL_LOCATION_PRESETS.filter((p) => {
    const matchesCountry = currentCountry ? p.country.toLowerCase() === currentCountry.toLowerCase() : true;
    const matchesQuery =
      p.city.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.line1.toLowerCase().includes(q) ||
      p.country.toLowerCase().includes(q) ||
      p.postalCode.toLowerCase().includes(q);
    return matchesQuery && (matchesCountry || q.length > 2);
  });
}
