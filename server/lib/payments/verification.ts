import type { ProviderPaymentStatusResult } from './types.js';

export function paymentAmountMatches(expectedAmount: number, actualAmount: number): boolean {
  return (
    Number.isFinite(expectedAmount) &&
    Number.isFinite(actualAmount) &&
    expectedAmount > 0 &&
    actualAmount > 0 &&
    Math.abs(expectedAmount - actualAmount) <= 0.01
  );
}

export function matchesVerifiedProviderPayment(
  expected: {
    orderId: string;
    providerOrderId?: string | null;
    amount: number;
    currency: string;
  },
  result: ProviderPaymentStatusResult,
): boolean {
  const acceptedOrderIds = new Set(
    [expected.orderId, expected.providerOrderId].filter((value): value is string => Boolean(value)),
  );
  const providerOrderId = result.providerOrderId;

  return (
    result.isFound &&
    result.status === 'SUCCESS' &&
    typeof providerOrderId === 'string' &&
    acceptedOrderIds.has(providerOrderId) &&
    typeof result.providerPaymentId === 'string' &&
    result.providerPaymentId.trim().length > 0 &&
    typeof result.amount === 'number' &&
    paymentAmountMatches(expected.amount, result.amount) &&
    typeof result.currency === 'string' &&
    result.currency.toUpperCase() === expected.currency.toUpperCase()
  );
}
