import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import jwt from 'jsonwebtoken';
import { hashPassword, verifyPassword, issueAccessToken, verifyAccessToken, AuthPayload } from '../server/lib/auth.js';
import { requireAuth, requireAdmin } from '../server/middleware/auth.js';
import type { Request, Response, NextFunction } from 'express';

describe('Authentication & Security Middleware Tests', () => {
  // Set test environment secret
  process.env.JWT_SECRET = 'test-super-secret-key-12345678901234567890';

  test('password hashing and verification with bcrypt (cost 12)', async () => {
    const plain = 'VantaAtelierSecretPass!2026';
    const hash = await hashPassword(plain);

    assert.notEqual(plain, hash);
    assert.ok(hash.startsWith('$2')); // bcrypt format
    assert.equal(await verifyPassword(plain, hash), true);
    assert.equal(await verifyPassword('WrongPassword', hash), false);
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
    // Create an expired token
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
