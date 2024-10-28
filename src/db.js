// src/db.js

import Dexie from "dexie";

const db = new Dexie("HealthMetricsDB");
db.version(1).stores({
  metrics: "++id, type, value, timestamp",
});

export default db;
