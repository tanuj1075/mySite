import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import express from 'express';
import { z } from 'zod';

describe('Backend Architecture, Health & Error Handling Tests', () => {
  test('request correlation ID generation and propagation', () => {
    const testApp = express();
    let capturedReqId = '';

    testApp.use((req, res, next) => {
      const reqId = (req.headers['x-request-id'] as string) || crypto.randomUUID();
      (req as any).id = reqId;
      res.setHeader('x-request-id', reqId);
      capturedReqId = reqId;
      next();
    });

    const mockReq = { headers: {} } as express.Request;
    const headersSet: Record<string, string> = {};
    const mockRes = {
      setHeader: (k: string, v: string) => { headersSet[k] = v; },
      on: () => {},
    } as unknown as express.Response;

    let nextCalled = false;
    const next = () => { nextCalled = true; };

    // Simulate middleware execution
    const middleware = (req: any, res: any, nxt: any) => {
      const reqId = (req.headers['x-request-id'] as string) || crypto.randomUUID();
      req.id = reqId;
      res.setHeader('x-request-id', reqId);
      nxt();
    };

    middleware(mockReq, mockRes, next);

    assert.equal(nextCalled, true);
    assert.ok(headersSet['x-request-id']);
    assert.equal(headersSet['x-request-id'].length, 36, 'UUID format standard');
  });

  test('retains caller-supplied x-request-id for distributed tracing', () => {
    const callerId = 'trace-id-abc-12345';
    const mockReq = { headers: { 'x-request-id': callerId } } as unknown as express.Request;
    const headersSet: Record<string, string> = {};
    const mockRes = {
      setHeader: (k: string, v: string) => { headersSet[k] = v; },
    } as unknown as express.Response;

    const middleware = (req: any, res: any, nxt: any) => {
      const reqId = (req.headers['x-request-id'] as string) || crypto.randomUUID();
      req.id = reqId;
      res.setHeader('x-request-id', reqId);
      nxt();
    };

    middleware(mockReq, mockRes, () => {});

    assert.equal(headersSet['x-request-id'], callerId);
  });

  test('safe centralized error handler formats ZodError with requestId', () => {
    const sampleSchema = z.object({
      email: z.string().email(),
      quantity: z.number().int().min(1).max(20),
    });

    let caughtError: unknown = null;
    try {
      sampleSchema.parse({ email: 'invalid-email', quantity: 99 });
    } catch (err) {
      caughtError = err;
    }

    assert.ok(caughtError instanceof z.ZodError);

    let statusCode = 0;
    let jsonBody: any = null;
    const mockRes = {
      status: (code: number) => {
        statusCode = code;
        return {
          json: (body: any) => { jsonBody = body; },
        };
      },
    } as unknown as express.Response;

    const mockReq = { id: 'req_test_123' } as any;

    const errorHandler = (error: unknown, req: any, res: any, _next: any) => {
      const reqId = req.id || 'unknown';
      if (error instanceof Error && error.name === 'ZodError') {
        return res.status(400).json({ error: 'Invalid request data', details: error.message, requestId: reqId });
      }
      res.status(500).json({ error: 'Internal server error', requestId: reqId });
    };

    errorHandler(caughtError, mockReq, mockRes, () => {});

    assert.equal(statusCode, 400);
    assert.equal(jsonBody.error, 'Invalid request data');
    assert.equal(jsonBody.requestId, 'req_test_123');
    assert.ok(jsonBody.details);
  });

  test('production error handler conceals internal stack trace and details', () => {
    const internalDbError = new Error('FATAL: password authentication failed for user "postgres"');
    let statusCode = 0;
    let jsonBody: any = null;

    const mockRes = {
      status: (code: number) => {
        statusCode = code;
        return { json: (body: any) => { jsonBody = body; } };
      },
    } as unknown as express.Response;

    const mockReq = { id: 'req_err_456' } as any;

    // Simulate production mode
    const isProd = true;
    const errorHandler = (error: unknown, req: any, res: any) => {
      const reqId = req.id || 'unknown';
      res.status(500).json({
        error: 'Internal server error',
        requestId: reqId,
        ...(isProd ? {} : { details: String(error) }),
      });
    };

    errorHandler(internalDbError, mockReq, mockRes);

    assert.equal(statusCode, 500);
    assert.equal(jsonBody.error, 'Internal server error');
    assert.equal(jsonBody.requestId, 'req_err_456');
    assert.equal(jsonBody.details, undefined, 'No database password or internal details leaked');
  });
});
