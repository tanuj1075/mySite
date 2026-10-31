import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { estimateDelivery } from '../server/lib/delivery.js';

describe('Delivery Estimation & Pincode Validation Tests', () => {
  test('estimates India Metro delivery with 2-4 days transit', () => {
    const res = estimateDelivery({
      city: 'Mumbai',
      postalCode: '400001',
      country: 'India',
    });
    assert.equal(res.zone, 'INDIA_METRO');
    assert.equal(res.minDays, 2);
    assert.equal(res.maxDays, 4);
    assert.ok(res.minDate);
    assert.ok(res.maxDate);
    assert(new Date(res.maxDate) >= new Date(res.minDate));
  });

  test('estimates Rest of India delivery with 4-7 days transit', () => {
    const res = estimateDelivery({
      city: 'Jaipur',
      state: 'Rajasthan',
      postalCode: '302001',
      country: 'India',
    });
    assert.equal(res.zone, 'REST_OF_INDIA');
    assert.equal(res.minDays, 4);
    assert.equal(res.maxDays, 7);
  });

  test('estimates International delivery with 7-14 days transit', () => {
    const res = estimateDelivery({
      city: 'London',
      postalCode: 'EC1A 1BB',
      country: 'United Kingdom',
    });
    assert.equal(res.zone, 'INTERNATIONAL');
    assert.equal(res.minDays, 7);
    assert.equal(res.maxDays, 14);
  });

  test('rejects invalid Indian PIN codes safely', () => {
    // Too short
    assert.throws(() => {
      estimateDelivery({ city: 'Delhi', postalCode: '1100', country: 'India' });
    }, /Invalid Indian PIN code/);

    // Starts with 0
    assert.throws(() => {
      estimateDelivery({ city: 'Delhi', postalCode: '012345', country: 'India' });
    }, /Invalid Indian PIN code/);

    // Contains letters
    assert.throws(() => {
      estimateDelivery({ city: 'Delhi', postalCode: '1100AA', country: 'India' });
    }, /Invalid Indian PIN code/);
  });

  test('rejects invalid international postal codes safely', () => {
    assert.throws(() => {
      estimateDelivery({ city: 'Berlin', postalCode: '1', country: 'Germany' });
    }, /Invalid international postal code/);
  });
});
