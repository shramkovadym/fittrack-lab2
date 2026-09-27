'use strict';

function ingestPacket(store, packet) {
  if (!packet || typeof packet.id !== 'string' || packet.id.length === 0) {
    throw new Error('packet id is required');
  }

  if (store.has(packet.id)) {
    return { status: 'duplicate', id: packet.id };
  }

  store.set(packet.id, {
    id: packet.id,
    userId: packet.userId,
    kind: packet.kind,
    value: packet.value,
  });

  return { status: 'created', id: packet.id };
}

module.exports = { ingestPacket };
