const test = require('node:test');
const assert = require('node:assert');
const { ingestPacket } = require('./sync');

test('saves a health packet once', () => {
  const store = new Map();
  const result = ingestPacket(store, {
    id: 'pkt-1',
    userId: 'user-1',
    kind: 'steps',
    value: 4200,
  });

  assert.deepStrictEqual(result, { status: 'created', id: 'pkt-1' });
  assert.strictEqual(store.size, 1);
});

test('repeated sync with the same id does not create a second record', () => {
  const store = new Map();
  const packet = { id: 'pkt-1', userId: 'user-1', kind: 'heart_rate', value: 72 };

  ingestPacket(store, packet);
  const again = ingestPacket(store, packet);

  assert.deepStrictEqual(again, { status: 'duplicate', id: 'pkt-1' });
  assert.strictEqual(store.size, 1);
  assert.strictEqual(store.get('pkt-1').value, 72);
});

test('rejects a packet without an id', () => {
  assert.throws(() => ingestPacket(new Map(), { kind: 'steps', value: 10 }), /packet id is required/);
});
