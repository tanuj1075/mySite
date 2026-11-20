import { after, test } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { once } from 'node:events';

process.env.NODE_ENV = 'test';
const { default: app } = await import('../api/[...path].ts');
const server = createServer(app);
server.listen(0, '127.0.0.1');
await once(server, 'listening');
const address = server.address();
assert(address && typeof address === 'object');
const baseUrl = `http://127.0.0.1:${address.port}`;

after(async () => {
  server.close();
  await once(server, 'close');
});

test('Vercel SPA fallback leaves API paths for the serverless function', () => {
  const vercel = JSON.parse(readFileSync(resolve('vercel.json'), 'utf8')) as {
    rewrites: Array<{ source: string; destination: string }>;
  };
  assert.equal(existsSync(resolve('api/[...path].ts')), true);
  assert.equal(existsSync(resolve('api/delivery/estimate.ts')), true, 'delivery estimate has an explicit function route');
  assert.equal(existsSync(resolve('api/payments/quote.ts')), true, 'payment quote has an explicit function route');
  assert.equal(existsSync(resolve('api/admin/orders.ts')), true, 'admin orders has an explicit function route');
  assert.equal(existsSync(resolve('api/admin/products.ts')), true, 'admin products has an explicit function route');
  assert.equal(existsSync(resolve('api/admin/coupons.ts')), true, 'admin coupons has an explicit function route');
  assert.equal(existsSync(resolve('api/admin/drops.ts')), true, 'admin drops has an explicit function route');
  assert.equal(existsSync(resolve('api/admin/exchanges.ts')), true, 'admin exchanges has an explicit function route');
  assert.equal(existsSync(resolve('api/admin/[...slug].ts')), true, 'admin wildcard slug route exists');
  assert.equal(existsSync(resolve('api/drops/index.ts')), true, 'drops index route exists');
  assert.equal(existsSync(resolve('api/exchanges/index.ts')), true, 'exchanges index route exists');
  assert.equal(existsSync(resolve('api/auth/[...slug].ts')), true, 'auth wildcard slug route exists');
  const spaFallback = vercel.rewrites.find(({ destination }) => destination === '/index.html');
  assert.ok(spaFallback, 'SPA deep links should resolve to index.html');
  const spaPattern = new RegExp('^' + spaFallback.source + '$');
  for (const path of ['/api', '/api/health', '/api/auth/register']) {
    assert.equal(spaPattern.test(path), false, path + ' must be handled by the API function');
  }
  assert.equal(spaPattern.test('/register'), true, 'SPA routes should still resolve to index.html');
});

test('Express receives the health and protected admin routes at their original paths', async () => {
  const health = await fetch(`${baseUrl}/api/health`);
  assert.equal(health.status, 200);
  assert.deepEqual(await health.json(), { status: 'ok' });

  const login = await fetch(`${baseUrl}/api/auth/admin/login`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({}),
  });
  assert.equal(login.status, 400, 'admin login should reach Express credential validation');
  assert.deepEqual(await login.json().then(({ error }) => ({ error })), { error: 'Invalid request' });

  for (const path of [
    '/api/auth/admin/session',
    '/api/admin/products',
    '/api/admin/orders',
  ]) {
    const response = await fetch(`${baseUrl}${path}`);
    assert.equal(response.status, 401, `${path} should reach Express auth middleware`);
    assert.deepEqual(await response.json(), { error: 'Authentication required' });
  }
});

test('CORS rejects unconfigured Vercel preview origins', async () => {
  const response = await fetch(`${baseUrl}/api/health`, {
    method: 'OPTIONS',
    headers: {
      Origin: 'https://untrusted-preview.vercel.app',
      'Access-Control-Request-Method': 'GET',
    },
  });
  assert.equal(response.headers.has('access-control-allow-origin'), false);
});

test('delivery estimate route is registered and validates Indian PIN codes', async () => {
  const valid = await fetch(`${baseUrl}/api/delivery/estimate`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ city: 'Pune', state: 'Maharashtra', postalCode: '411001', country: 'India' }),
  });
  assert.equal(valid.status, 200);
  assert.equal((await valid.json()).zone, 'INDIA_METRO');

  const invalid = await fetch(`${baseUrl}/api/delivery/estimate`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ city: 'Pune', state: 'Maharashtra', postalCode: '10040', country: 'India' }),
  });
  assert.equal(invalid.status, 400, 'five-digit Indian PIN should be rejected as invalid address data, not missing route');
});
