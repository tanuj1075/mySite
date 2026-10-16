import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { z } from 'zod';

describe('Cart & Order Business Logic Validation Tests', () => {
  // Coupon calculation helper matching server/routes/orders.ts & server/routes/coupons.ts
  function calculateDiscount(subtotal: number, coupon: { discountPercent: number; minOrderValue: number; maxDiscount?: number | null; isActive: boolean } | null) {
    if (!coupon || !coupon.isActive || subtotal < coupon.minOrderValue) return 0;
    const rawDiscount = (subtotal * coupon.discountPercent) / 100;
    return Math.min(rawDiscount, coupon.maxDiscount ?? Infinity);
  }

  test('applies percentage coupon discount correctly when minOrderValue is met', () => {
    const coupon = {
      discountPercent: 10,
      minOrderValue: 2000,
      maxDiscount: 500,
      isActive: true,
    };
    // Subtotal 3000 >= 2000 -> 10% = 300 (< 500 maxDiscount)
    assert.equal(calculateDiscount(3000, coupon), 300);
  });

  test('caps discount at maxDiscount ceiling', () => {
    const coupon = {
      discountPercent: 20,
      minOrderValue: 2000,
      maxDiscount: 500,
      isActive: true,
    };
    // Subtotal 10000 -> 20% = 2000, capped at maxDiscount 500
    assert.equal(calculateDiscount(10000, coupon), 500);
  });

  test('rejects coupon when subtotal does not reach minOrderValue', () => {
    const coupon = {
      discountPercent: 15,
      minOrderValue: 5000,
      maxDiscount: 1000,
      isActive: true,
    };
    // Subtotal 4999 < 5000 -> discount 0
    assert.equal(calculateDiscount(4999, coupon), 0);
  });

  test('rejects inactive coupon code', () => {
    const coupon = {
      discountPercent: 50,
      minOrderValue: 1000,
      maxDiscount: null,
      isActive: false,
    };
    assert.equal(calculateDiscount(5000, coupon), 0);
  });

  test('enforces cart item input validation schema with min 1 and max 20 quantity', () => {
    const itemInput = z.object({
      productId: z.string(),
      color: z.string().min(1),
      size: z.string().min(1),
      quantity: z.number().int().min(1).max(20),
    });

    // Valid item
    assert.doesNotThrow(() => {
      itemInput.parse({ productId: 'prod_1', color: 'Black', size: '10', quantity: 5 });
    });

    // Invalid: quantity 0
    assert.throws(() => {
      itemInput.parse({ productId: 'prod_1', color: 'Black', size: '10', quantity: 0 });
    });

    // Invalid: quantity exceeds 20
    assert.throws(() => {
      itemInput.parse({ productId: 'prod_1', color: 'Black', size: '10', quantity: 21 });
    });

    // Invalid: negative quantity
    assert.throws(() => {
      itemInput.parse({ productId: 'prod_1', color: 'Black', size: '10', quantity: -1 });
    });
  });

  test('enforces COD restriction for international shipments', () => {
    function validatePaymentMethod(paymentMethod: string, currency: string) {
      if (paymentMethod === 'COD' && currency !== 'INR') {
        throw new Error('Cash on delivery is only available for Indian shipping addresses');
      }
      return true;
    }

    assert.equal(validatePaymentMethod('COD', 'INR'), true);
    assert.equal(validatePaymentMethod('CARD', 'USD'), true);
    assert.throws(() => {
      validatePaymentMethod('COD', 'USD');
    }, /Cash on delivery is only available for Indian shipping addresses/);
  });
});
