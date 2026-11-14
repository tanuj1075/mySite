import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { matchesVerifiedProviderPayment, paymentAmountMatches } from '../server/lib/payments/verification.js';
import type { ProviderPaymentStatusResult } from '../server/lib/payments/types.js';

const expected = {
  orderId: 'order_123',
  providerOrderId: 'provider_order_123',
  amount: 2500,
  currency: 'INR',
};

const validResult: ProviderPaymentStatusResult = {
  isFound: true,
  status: 'SUCCESS',
  providerOrderId: 'order_123',
  providerPaymentId: 'provider_payment_123',
  amount: 2500,
  currency: 'inr',
};

describe('trusted provider payment verification', () => {
  it('accepts a success response matching order, amount, currency, and provider payment reference', () => {
    assert.equal(matchesVerifiedProviderPayment(expected, validResult), true);
  });

  it('accepts the recorded provider order reference', () => {
    assert.equal(
      matchesVerifiedProviderPayment(expected, { ...validResult, providerOrderId: 'provider_order_123' }),
      true,
    );
  });

  it('rejects mismatched amounts, currencies, order references, and missing payment IDs', () => {
    assert.equal(matchesVerifiedProviderPayment(expected, { ...validResult, amount: 100 }), false);
    assert.equal(matchesVerifiedProviderPayment(expected, { ...validResult, currency: 'USD' }), false);
    assert.equal(matchesVerifiedProviderPayment(expected, { ...validResult, providerOrderId: 'other_order' }), false);
    assert.equal(matchesVerifiedProviderPayment(expected, { ...validResult, providerPaymentId: undefined }), false);
  });

  it('rejects responses that are not found or are not a provider-confirmed success', () => {
    assert.equal(matchesVerifiedProviderPayment(expected, { ...validResult, isFound: false }), false);
    assert.equal(matchesVerifiedProviderPayment(expected, { ...validResult, status: 'PENDING' }), false);
  });

  it('rejects non-finite and non-positive payment amounts', () => {
    assert.equal(paymentAmountMatches(2500, Number.NaN), false);
    assert.equal(paymentAmountMatches(2500, Number.POSITIVE_INFINITY), false);
    assert.equal(paymentAmountMatches(2500, 0), false);
  });
});
