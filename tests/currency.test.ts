import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { currencyForCountry, currencyExponent, amountInMinorUnits, quoteInrAmount, CurrencyQuoteError } from '../server/lib/currency.js';

describe('Currency and International Payment Tests', () => {
  test('maps known shipping countries to correct currencies', () => {
    assert.equal(currencyForCountry('India'), 'INR');
    assert.equal(currencyForCountry('IN'), 'INR');
    assert.equal(currencyForCountry('United States'), 'USD');
    assert.equal(currencyForCountry('US'), 'USD');
    assert.equal(currencyForCountry('United Kingdom'), 'GBP');
    assert.equal(currencyForCountry('Germany'), 'EUR');
    assert.equal(currencyForCountry('Japan'), 'JPY');
    assert.equal(currencyForCountry('United Arab Emirates'), 'AED');
  });

  test('rejects unidentifiable or unsupported countries safely', () => {
    assert.throws(() => currencyForCountry('Atlantis'), (err: unknown) => {
      assert(err instanceof CurrencyQuoteError);
      assert.equal(err.statusCode, 422);
      return true;
    });
  });

  test('returns correct currency exponent (minor units)', () => {
    assert.equal(currencyExponent('INR'), 2);
    assert.equal(currencyExponent('USD'), 2);
    assert.equal(currencyExponent('EUR'), 2);
    assert.equal(currencyExponent('JPY'), 0); // Zero decimal currency
    assert.equal(currencyExponent('BHD'), 3); // Three decimal currency
  });

  test('converts amounts to Razorpay minor units accurately', () => {
    // 100 INR = 10000 paise
    assert.equal(amountInMinorUnits(100, 'INR'), 10000);
    // 49.99 USD = 4999 cents
    assert.equal(amountInMinorUnits(49.99, 'USD'), 4999);
    // 5000 JPY = 5000 (no minor units)
    assert.equal(amountInMinorUnits(5000, 'JPY'), 5000);
  });

  test('quoteInrAmount handles INR directly without remote network call', async () => {
    const quote = await quoteInrAmount(1500, 'INR');
    assert.equal(quote.currency, 'INR');
    assert.equal(quote.exchangeRate, 1);
    assert.equal(quote.amount, 1500);
  });

  test('quoteInrAmount rejects negative or non-finite amounts', async () => {
    await assert.rejects(async () => {
      await quoteInrAmount(-50, 'INR');
    }, /Order amount must be a valid non-negative number/);

    await assert.rejects(async () => {
      await quoteInrAmount(NaN, 'INR');
    }, /Order amount must be a valid non-negative number/);
  });
});
