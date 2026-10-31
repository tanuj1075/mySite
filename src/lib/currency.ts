export function formatCurrency(amount: number, currency = 'INR') {
  const locale = currency === 'INR' ? 'en-IN' : 'en';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}
