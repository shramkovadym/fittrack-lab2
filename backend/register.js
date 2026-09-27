'use strict';

function registerUser(input) {
  const email = String((input && input.email) || '').trim().toLowerCase();
  const password = String((input && input.password) || '');

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: 'invalid_email' };
  }

  if (password.length < 8) {
    return { ok: false, error: 'weak_password' };
  }

  return {
    ok: true,
    user: {
      email,
      role: 'user',
    },
  };
}

module.exports = { registerUser };
