# API Documentation - Data Platform

> Base URL: `http://localhost:8000`
> Generated from FastAPI (auto Swagger at `/docs`)

---

## Authentication

### POST /api/auth/register
Register a new user.

**Request Body:**
```json
{
  "username": "string (3-50 chars)",
  "email": "string (valid email)",
  "password": "string (min 8 chars)"
}
```

**Response:** `201 Created`
```json
{
  "id": 1,
  "username": "string",
  "email": "string",
  "role": "viewer"
}
```

### POST /api/auth/login
Login and receive JWT token.

**Request Body:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Response:** `200 OK`
```json
{
  "access_token": "string (JWT)",
  "token_type": "bearer"
}
```

---

## Data Sources

### POST /api/data-sources
Create a new data source.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "name": "string",
  "url": "string",
  "type": "api | webhook | file",
  "config": {}
}
```

**Response:** `201 Created`

### GET /api/data-sources
List all data sources (paginated).

**Query Params:** `?page=1&limit=20&search=...`

**Response:** `200 OK`
```json
{
  "data": [],
  "total": 100,
  "page": 1,
  "limit": 20
}
```

### GET /api/data-sources/{id}
Get data source by ID.

**Response:** `200 OK`

### PUT /api/data-sources/{id}
Update data source.

**Response:** `200 OK`

### DELETE /api/data-sources/{id}
Delete data source.

**Response:** `204 No Content`

---

## Data Records

### POST /api/data-records
Insert a single data record.

**Request Body:**
```json
{
  "source_id": 1,
  "event": "string",
  "metrics": {},
  "timestamp": "ISO 8601"
}
```

### POST /api/data-records/bulk
Bulk insert data records.

**Request Body:**
```json
[
  { "source_id": 1, "event": "page_view", "metrics": {}, "timestamp": "..." }
]
```

### GET /api/data-records
List records with filters.

**Query Params:** `?source_id=1&from=2024-01-01&to=2024-12-31&page=1&limit=50`

### GET /api/data-records/{id}
Get record by ID.

### PUT /api/data-records/{id}
Update record.

### DELETE /api/data-records/{id}
Delete record.

---

## Aggregation

### GET /api/aggregation/summary
Get KPI summary.

**Query Params:** `?from=2024-01-01&to=2024-12-31`

**Response:**
```json
{
  "total_users": 0,
  "total_revenue": 0.0,
  "avg_roas": 0.0,
  "total_events": 0
}
```

### GET /api/aggregation/by-source
Aggregate metrics grouped by data source.

### GET /api/aggregation/by-date
Aggregate metrics grouped by date range.

---

## Webhooks

### POST /api/webhooks
Register a new webhook endpoint.

**Request Body:**
```json
{
  "url": "https://your-app.com/webhook",
  "events": ["data.inserted", "data.updated"],
  "secret": "your-secret-key"
}
```

### GET /api/webhooks
List all webhooks.

### PUT /api/webhooks/{id}
Update webhook.

### DELETE /api/webhooks/{id}
Delete webhook.

### POST /api/webhooks/{id}/test
Send test payload to webhook.

---

## Pipelines

### GET /api/pipelines
List all pipeline runs.

### GET /api/pipelines/{id}
Get pipeline run details.

### POST /api/pipelines/{id}/trigger
Manually trigger a pipeline.

---

## Monitoring

### GET /health
Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "database": "connected",
  "redis": "connected",
  "kafka": "connected"
}
```

### GET /metrics
Prometheus metrics endpoint.

---

## Error Responses

| Code  | Meaning             |
|-------|---------------------|
| 400   | Bad Request         |
| 401   | Unauthorized        |
| 403   | Forbidden           |
| 404   | Not Found           |
| 409   | Conflict            |
| 422   | Validation Error    |
| 429   | Rate Limit Exceeded |
| 500   | Internal Server Error |

**Error Format:**
```json
{
  "detail": "Error description",
  "error_code": "VALIDATION_ERROR",
  "timestamp": "2024-01-01T00:00:00Z"
}