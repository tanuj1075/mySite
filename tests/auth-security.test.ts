import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { hashPassword, verifyPassword, issueAccessToken, verifyAccessToken, AuthPayload } from '../server/lib/auth.js';
import { requireAuth, requireAdmin } from '../server/middleware/auth.js';
import {
  generateTotpSecret,
  generateTotpCode,
  verifyTotpToken,
  getTotpUri,
  generateTotpQrDataUrl,
  generateBackupCodes,
  verifyBackupCode,
  base32Encode,
  base32Decode,
} from '../server/lib/totp.js';
import type { Request, Response, NextFunction } from 'express';

describe('Authentication & Security Architecture Tests', () => {
  // Set test environment secret
  process.env.JWT_SECRET = 'test-super-secret-key-12345678901234567890';

  test('password hashing produces Argon2id hash', async () => {
    const plain = 'VantaAtelierSecretPass!2026';
    const hash = await hashPassword(plain);

    assert.notEqual(plain, hash);
    assert.ok(hash.startsWith('$argon2id$'), `Expected Argon2id format, got: ${hash}`);
    assert.equal(await verifyPassword(plain, hash), true);
    assert.equal(await verifyPassword('WrongPassword', hash), false);
  });

  test('backwards-compatible verification of legacy bcrypt hashes', async () => {
    const plain = 'LegacyPassword!123';
    const legacyBcryptHash = await bcrypt.hash(plain, 10);

    assert.ok(legacyBcryptHash.startsWith('$2'));
    assert.equal(await verifyPassword(plain, legacyBcryptHash), true);
    assert.equal(await verifyPassword('IncorrectPassword', legacyBcryptHash), false);
  });

  test('rejects malformed password hashes without throwing', async () => {
    assert.equal(await verifyPassword('any-password', 'not-a-supported-hash'), false);
    assert.equal(await verifyPassword('any-password', '$argon2id$invalid'), false);
    assert.equal(await verifyPassword('any-password', '$2b$malformed'), false);
  });

  test('issues and verifies access token with correct payload', () => {
    const payload: AuthPayload = { sub: 'usr_test123', email: 'test@vanta.com', role: 'CUSTOMER' };
    const token = issueAccessToken(payload);

    assert.ok(token);
    const decoded = verifyAccessToken(token);
    assert.equal(decoded.sub, payload.sub);
    assert.equal(decoded.email, payload.email);
    assert.equal(decoded.role, payload.role);
  });

  test('rejects expired access token safely', () => {
    const payload: AuthPayload = { sub: 'usr_test123', email: 'test@vanta.com', role: 'CUSTOMER' };
    const expiredToken = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '-1s' });

    assert.throws(() => {
      verifyAccessToken(expiredToken);
    }, (err: unknown) => {
      assert(err instanceof jwt.TokenExpiredError);
      return true;
    });
  });

  test('rejects token signed with foreign secret key', () => {
    const payload: AuthPayload = { sub: 'usr_test123', email: 'test@vanta.com', role: 'CUSTOMER' };
    const forgedToken = jwt.sign(payload, 'attacker-unauthorized-secret-key');

    assert.throws(() => {
      verifyAccessToken(forgedToken);
    }, (err: unknown) => {
      assert(err instanceof jwt.JsonWebTokenError);
      return true;
    });
  });

  test('requireAuth blocks requests without Authorization header', () => {
    const req = { headers: {} } as Request;
    let statusCode = 0;
    let responseBody: unknown = null;
    const res = {
      status: (code: number) => {
        statusCode = code;
        return { json: (body: unknown) => { responseBody = body; } };
      },
    } as unknown as Response;
    let nextCalled = false;
    const next: NextFunction = () => { nextCalled = true; };

    requireAuth(req, res, next);
    assert.equal(statusCode, 401);
    assert.equal(nextCalled, false);
    assert.deepEqual(responseBody, { error: 'Authentication required' });
  });

  test('requireAdmin blocks non-admin users with 403', () => {
    const req = { auth: { sub: 'usr_1', email: 'cust@vanta.com', role: 'CUSTOMER' } } as Request;
    let statusCode = 0;
    let responseBody: unknown = null;
    const res = {
      status: (code: number) => {
        statusCode = code;
        return { json: (body: unknown) => { responseBody = body; } };
      },
    } as unknown as Response;
    let nextCalled = false;
    const next: NextFunction = () => { nextCalled = true; };

    requireAdmin(req, res, next);
    assert.equal(statusCode, 403);
    assert.equal(nextCalled, false);
    assert.deepEqual(responseBody, { error: 'Admin role required' });
  });

  test('requireAdmin passes for verified ADMIN role', () => {
    const req = { auth: { sub: 'admin_1', email: 'admin@vanta.com', role: 'ADMIN' } } as Request;
    const res = {} as Response;
    let nextCalled = false;
    const next: NextFunction = () => { nextCalled = true; };

    requireAdmin(req, res, next);
    assert.equal(nextCalled, true);
  });

  test('timingSafeEqual detects signature tampering safely', () => {
    const secret = 'vanta_hmac_test_secret';
    const payload = 'order_123|pay_456';
    const validSignature = crypto.createHmac('sha256', secret).update(payload).digest('hex');
    const forgedSignature = 'a'.repeat(64);

    const expectedBuf = crypto.createHmac('sha256', secret).update(payload).digest();
    const validBuf = Buffer.from(validSignature, 'hex');
    const forgedBuf = Buffer.from(forgedSignature, 'hex');

    assert.equal(crypto.timingSafeEqual(expectedBuf, validBuf), true);
    assert.equal(crypto.timingSafeEqual(expectedBuf, forgedBuf), false);
  });
});

describe('MFA & RFC 6238 TOTP Architecture Tests', () => {
  test('Base32 encoding and decoding symmetry', () => {
    const input = Buffer.from('VANTA-SECURITY-KEY-2026');
    const encoded = base32Encode(input);
    const decoded = base32Decode(encoded);

    assert.equal(decoded.toString(), input.toString());
  });

  test('TOTP secret generation produces valid Base32', () => {
    const secret = generateTotpSecret();
    assert.ok(secret);
    assert.ok(secret.length >= 32);
    // Should decode without throwing
    const decoded = base32Decode(secret);
    assert.equal(decoded.length, 20);
  });

  test('TOTP token generation and verification succeeds for current window', () => {
    const secret = generateTotpSecret();
    const code = generateTotpCode(secret);

    assert.equal(code.length, 6);
    assert.ok(/^\d{6}$/.test(code));
    assert.equal(verifyTotpToken(code, secret), true);
    assert.equal(verifyTotpToken('000000', secret === 'JBSWY3DPEHPK3PXP' ? 'A' : secret), false);
  });

  test('TOTP token verification rejects invalid format or wrong secret', () => {
    const secret = generateTotpSecret();
    const otherSecret = generateTotpSecret();
    const code = generateTotpCode(secret);

    assert.equal(verifyTotpToken('abc', secret), false);
    assert.equal(verifyTotpToken('12345', secret), false);
    assert.equal(verifyTotpToken('1234567', secret), false);
    assert.equal(verifyTotpToken(code, otherSecret), false);
  });

  test('Generates valid otpauth URI and QR code data URL', async () => {
    const secret = generateTotpSecret();
    const uri = getTotpUri('admin@vanta.com', secret, 'VANTA ATELIER');

    assert.ok(uri.startsWith('otpauth://totp/'));
    assert.ok(uri.includes(encodeURIComponent('admin@vanta.com')));
    assert.ok(uri.includes(secret));

    const qrDataUrl = await generateTotpQrDataUrl(uri);
    assert.ok(qrDataUrl.startsWith('data:image/png;base64,'));
  });

  test('Backup codes generation and single-use consumption', () => {
    const { plainCodes, hashedCodes } = generateBackupCodes(8);

    assert.equal(plainCodes.length, 8);
    assert.equal(hashedCodes.length, 8);

    // Consume first code
    const codeToUse = plainCodes[0];
    const result1 = verifyBackupCode(codeToUse, hashedCodes);
    assert.equal(result1.isValid, true);
    assert.equal(result1.remainingHashedCodes.length, 7);

    // Attempting to consume same code again fails (replay protection)
    const result2 = verifyBackupCode(codeToUse, result1.remainingHashedCodes);
    assert.equal(result2.isValid, false);
    assert.equal(result2.remainingHashedCodes.length, 7);

    // Invalid code fails
    const invalidResult = verifyBackupCode('INVALID-CODE-99', result1.remainingHashedCodes);
    assert.equal(invalidResult.isValid, false);
  });
});
