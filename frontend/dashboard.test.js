const test = require('node:test');
const assert = require('node:assert');
const { weeklyProgress } = require('./dashboard');

test('returns percent of a weekly goal', () => {
  assert.strictEqual(weeklyProgress(3, 5), 60);
});

test('caps progress at 100 percent', () => {
  assert.strictEqual(weeklyProgress(12, 5), 100);
});

test('returns zero when the goal is missing', () => {
  assert.strictEqual(weeklyProgress(3, 0), 0);
});
