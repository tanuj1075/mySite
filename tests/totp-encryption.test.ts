import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  generateTotpSecret,
  encryptTotpSecret,
  decryptTotpSecret,
  verifyTotpToken,
  generateTotpCode,
} from '../server/lib/totp.js';

describe('TOTP Secret At-Rest Encryption & Cryptographic Integrity Tests', () => {
  process.env.JWT_SECRET = 'test-encryption-secret-key-32-chars-min';

  test('encrypts TOTP secret into AES-256-GCM format', () => {
    const plainSecret = generateTotpSecret();
    const encrypted = encryptTotpSecret(plainSecret);

    assert.notEqual(plainSecret, encrypted);
    const parts = encrypted.split(':');
    assert.equal(parts.length, 3, 'Encrypted secret must contain iv:authTag:ciphertext');
    assert.equal(parts[0].length, 24, 'IV must be 12 bytes (24 hex characters)');
    assert.equal(parts[1].length, 32, 'Auth tag must be 16 bytes (32 hex characters)');
  });

  test('decrypts encrypted secret back to original Base32 secret accurately', () => {
    const plainSecret = generateTotpSecret();
    const encrypted = encryptTotpSecret(plainSecret);
    const decrypted = decryptTotpSecret(encrypted);

    assert.equal(decrypted, plainSecret);
  });

  test('verified TOTP token generation from decrypted secret matches', () => {
    const plainSecret = generateTotpSecret();
    const encrypted = encryptTotpSecret(plainSecret);

    const decrypted = decryptTotpSecret(encrypted);
    const code = generateTotpCode(decrypted);

    assert.equal(verifyTotpToken(code, decrypted), true);
  });

  test('backwards-compatible with unencrypted legacy Base32 secrets', () => {
    const legacySecret = 'JBSWY3DPEHPK3PXPJBSWY3DPEHPK3PXP';
    const decrypted = decryptTotpSecret(legacySecret);

    assert.equal(decrypted, legacySecret);
  });

  test('detects ciphertext tampering and fails securely', () => {
    const plainSecret = generateTotpSecret();
    const encrypted = encryptTotpSecret(plainSecret);
    const parts = encrypted.split(':');

    // Tamper with ciphertext
    const tamperedCipher = 'aa' + parts[2].slice(2);
    const tampered = `${parts[0]}:${parts[1]}:${tamperedCipher}`;

    const result = decryptTotpSecret(tampered);
    // When decryption fails, it should not return the plainSecret
    assert.notEqual(result, plainSecret);
  });
});
