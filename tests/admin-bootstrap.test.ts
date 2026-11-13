import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import {
  chooseAdminBootstrapAction,
  getAdminBootstrapCredentials,
  type AdminBootstrapAccount,
} from '../server/lib/admin-bootstrap.js';

const matchingAdmin: AdminBootstrapAccount = {
  id: 'user-1',
  email: 'admin@vanta.com',
  role: 'ADMIN',
  passwordHash: 'stored-hash',
};

describe('admin credential bootstrap', () => {
  test('uses ADMIN_PASSWORD and normalizes the configured email', () => {
    const credentials = getAdminBootstrapCredentials({
      ADMIN_EMAIL: ' Admin@Vanta.com ',
      ADMIN_PASSWORD: 'CanonicalAdminPass!2026',
      ADMIN_PASSWORD_3: 'FallbackAdminPass!2026',
    });

    assert.deepEqual(credentials, {
      email: 'admin@vanta.com',
      password: 'CanonicalAdminPass!2026',
    });
  });

  test('uses the explicitly mapped ADMIN_PASSWORD_3 when ADMIN_PASSWORD is absent', () => {
    const credentials = getAdminBootstrapCredentials({
      ADMIN_EMAIL: 'admin@vanta.com',
      ADMIN_PASSWORD: undefined,
      ADMIN_PASSWORD_3: 'ConfiguredAdminPass!2026',
    });

    assert.equal(credentials.password, 'ConfiguredAdminPass!2026');
  });

  test('does not use ADMIN_PASSWORD_2 as an unrequested fallback', () => {
    assert.throws(
      () => getAdminBootstrapCredentials({
        ADMIN_EMAIL: 'admin@vanta.com',
        ADMIN_PASSWORD: undefined,
        ADMIN_PASSWORD_3: undefined,
      }),
      /ADMIN_PASSWORD/,
    );
  });

  test('creates one account only when the database has no admin or matching user', () => {
    assert.deepEqual(chooseAdminBootstrapAction([], []), { kind: 'create' });
  });

  test('synchronizes the existing configured admin in place', () => {
    assert.deepEqual(
      chooseAdminBootstrapAction([{ id: 'user-1', email: 'admin@vanta.com' }], [matchingAdmin]),
      { kind: 'sync', userId: 'user-1' },
    );
  });

  test('refuses to create a second admin for a different email', () => {
    assert.throws(
      () => chooseAdminBootstrapAction([{ id: 'existing-admin', email: 'owner@vanta.com' }], []),
      /refusing to create a duplicate admin/i,
    );
  });

  test('refuses to promote another user when a different admin already exists', () => {
    const customer = { ...matchingAdmin, id: 'user-2', role: 'CUSTOMER' as const };

    assert.throws(
      () => chooseAdminBootstrapAction(
        [{ id: 'existing-admin', email: 'owner@vanta.com' }],
        [customer],
      ),
      /refusing to create a duplicate admin/i,
    );
  });

  test('refuses duplicate case-insensitive matches instead of creating an account', () => {
    assert.throws(
      () => chooseAdminBootstrapAction([], [matchingAdmin, { ...matchingAdmin, id: 'user-2', email: 'ADMIN@VANTA.COM' }]),
      /multiple accounts match/i,
    );
  });
});
