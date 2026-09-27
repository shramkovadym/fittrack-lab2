'use strict';

function weeklyProgress(done, goal) {
  const target = Number(goal);
  const current = Number(done);

  if (!Number.isFinite(target) || target <= 0 || !Number.isFinite(current) || current <= 0) {
    return 0;
  }

  return Math.min(100, Math.round((current / target) * 100));
}

module.exports = { weeklyProgress };
