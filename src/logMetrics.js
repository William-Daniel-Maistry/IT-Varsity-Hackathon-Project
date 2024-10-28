// src/logMetrics.js

import db from "./db";

export const logHealthMetric = async (type, value) => {
  await db.metrics.add({
    type,
    value,
    timestamp: new Date(),
  });
};

export const getHealthMetrics = async () => {
  return await db.metrics.toArray();
};
