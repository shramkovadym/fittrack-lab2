const test = require('node:test');
const assert = require('node:assert');
const { registerUser } = require('./register');

test('registers a user with a normal email and password', () => {
  const result = registerUser({
    email: 'Vadym@Example.com',
    password: 'fittrack1',
  });

  assert.strictEqual(result.ok, true);
  assert.strictEqual(result.user.email, 'vadym@example.com');
  assert.strictEqual(result.user.role, 'user');
});

test('rejects an invalid email', () => {
  const result = registerUser({ email: 'not-an-email', password: 'fittrack1' });
  assert.deepStrictEqual(result, { ok: false, error: 'invalid_email' });
});

test('rejects a short password', () => {
  const result = registerUser({ email: 'a@b.co', password: 'short' });
  assert.deepStrictEqual(result, { ok: false, error: 'weak_password' });
});
