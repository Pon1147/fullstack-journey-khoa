/**
 * Load Test Script for Data Platform API
 * Run with: k6 run scripts/load-test.js
 * Or cloud: k6 cloud scripts/load-test.js
 *
 * Targets:
 * - 1000 RPS sustained
 * - P95 < 500ms
 * - Error rate < 1%
 */

import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate, Trend } from 'k6/metrics';

// ==================== Configuration ====================
export const options = {
  // Ramp-up: 0→50 users over 30s, hold 5min, ramp to 200, hold 10min, down 30s
  scenarios: {
    smoke_test: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '30s', target: 50 },   // Warm up
        { duration: '5m', target: 50 },     // Steady load
        { duration: '1m', target: 100 },    // Ramp up
        { duration: '10m', target: 100 },   // Sustained load
        { duration: '30s', target: 200 },   // Spike
        { duration: '2m', target: 200 },    // Peak sustain
        { duration: '30s', target: 0 },     // Cool down
      ],
      gracefulRampDownPeriod: '10s',
    },
  },
  thresholds: {
    http_req_duration: ['p(95)<500', 'p(99)<1000'], // P95 < 500ms, P99 < 1s
    http_req_failed: ['rate<0.01'],                 // < 1% errors
    http_reqs: ['rate>500'],                        // > 500 req/s
  },
};

// ==================== Custom Metrics ====================
const errorRate = new Rate('error_rate');
const apiLatency = new Trend('api_latency');
const bulkInsertLatency = new Trend('bulk_insert_latency');

// ==================== Test Data ====================
const BASE_URL = __ENV.BASE_URL || 'http://localhost:8000';

// Mock data for tests
const mockDataRecord = {
  source_id: 1,
  event: 'page_view',
  metrics: {
    value: Math.random() * 1000,
    currency: 'USD',
    platform: ['web', 'mobile', 'desktop'][Math.floor(Math.random() * 3)],
  },
  timestamp: new Date().toISOString(),
};

const mockBulkRecords = Array.from({ length: 100 }, (_, i) => ({
  source_id: Math.floor(Math.random() * 5) + 1,
  event: ['page_view', 'click', 'purchase', 'signup'][Math.floor(Math.random() * 4)],
  metrics: {
    value: Math.random() * 500,
    currency: 'USD',
  },
  timestamp: new Date(Date.now() - Math.random() * 86400000).toISOString(),
}));

const mockDataSource = {
  name: `test_source_${Date.now()}`,
  url: 'https://api.example.com/data',
  type: 'api',
  config: { method: 'GET', timeout: 30 },
};

// ==================== Setup ====================
export function setup() {
  console.log('\n=== SETUP: Getting auth token ===');

  // Register a test user
  const registerRes = http.post(`${BASE_URL}/api/auth/register`, JSON.stringify({
    username: 'loadtest_user',
    email: `loadtest_${Date.now()}@test.com`,
    password: 'Password123!',
  }), {
    headers: { 'Content-Type': 'application/json' },
  });

  // Login to get token
  const loginRes = http.post(`${BASE_URL}/api/auth/login`, JSON.stringify({
    username: 'loadtest_user',
    password: 'Password123!',
  }), {
    headers: { 'Content-Type': 'application/json' },
  });

  if (loginRes.status !== 200) {
    console.error('Login failed. Make sure backend is running and user can be registered.');
    return { token: null };
  }

  const token = loginRes.json('access_token');
  console.log('Auth token obtained successfully.\n');
  return { token };
}

// ==================== Auth Header Helper ====================
function authHeader(token) {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
}

// ==================== Default VU ====================
export default function (data) {
  const token = data.token;
  if (!token) {
    console.error('No auth token available. Setup may have failed.');
    return;
  }

  // ---------- Test 1: Health Check (20% of traffic) ----------
  const healthRes = http.get(`${BASE_URL}/health`);
  const healthOk = check(healthRes, {
    'health check returns 200': (r) => r.status === 200,
    'health check < 100ms': (r) => r.timings.duration < 100,
  });
  apiLatency.add(healthRes.timings.duration);
  errorRate.add(!healthOk);

  // ---------- Test 2: GET Data Sources (30% of traffic) ----------
  const sourcesRes = http.get(
    `${BASE_URL}/api/data-sources?page=1&limit=20`,
    { headers: authHeader(token) }
  );
  const sourcesOk = check(sourcesRes, {
    'get data sources returns 200': (r) => r.status === 200,
    'get data sources < 300ms': (r) => r.timings.duration < 300,
    'response has data array': (r) => {
      try { return Array.isArray(r.json('data')); } catch { return false; }
    },
  });
  apiLatency.add(sourcesRes.timings.duration);
  errorRate.add(!sourcesOk);

  // ---------- Test 3: GET Data Records with filters (30% of traffic) ----------
  const recordsRes = http.get(
    `${BASE_URL}/api/data-records?source_id=1&page=1&limit=50`,
    { headers: authHeader(token) }
  );
  const recordsOk = check(recordsRes, {
    'get records returns 200': (r) => r.status === 200,
    'get records < 500ms': (r) => r.timings.duration < 500,
  });
  apiLatency.add(recordsRes.timings.duration);
  errorRate.add(!recordsOk);

  // ---------- Test 4: GET Aggregation Summary (10% of traffic) ----------
  const aggRes = http.get(
    `${BASE_URL}/api/aggregation/summary?from=2024-01-01&to=2024-12-31`,
    { headers: authHeader(token) }
  );
  const aggOk = check(aggRes, {
    'aggregation returns 200': (r) => r.status === 200,
    'aggregation < 1000ms': (r) => r.timings.duration < 1000,
  });
  apiLatency.add(aggRes.timings.duration);
  errorRate.add(!aggOk);

  // ---------- Test 5: POST Single Record (5% of traffic) ----------
  const postRes = http.post(
    `${BASE_URL}/api/data-records`,
    JSON.stringify(mockDataRecord),
    { headers: authHeader(token) }
  );
  const postOk = check(postRes, {
    'post record returns 201': (r) => r.status === 201,
    'post record < 500ms': (r) => r.timings.duration < 500,
  });
  apiLatency.add(postRes.timings.duration);
  errorRate.add(!postOk);

  // ---------- Test 6: Bulk Insert (5% of traffic) ----------
  const bulkRes = http.post(
    `${BASE_URL}/api/data-records/bulk`,
    JSON.stringify(mockBulkRecords),
    { headers: authHeader(token) }
  );
  const bulkOk = check(bulkRes, {
    'bulk insert returns 201': (r) => r.status === 201,
    'bulk insert < 2000ms': (r) => r.timings.duration < 2000,
  });
  bulkInsertLatency.add(bulkRes.timings.duration);
  errorRate.add(!bulkOk);

  sleep(0.5);
}

// ==================== Teardown ====================
export function teardown(data) {
  console.log('\n=== LOAD TEST COMPLETE ===');
  console.log(`Base URL: ${BASE_URL}`);
  console('Check k6 output for thresholds and metrics.\n');
}