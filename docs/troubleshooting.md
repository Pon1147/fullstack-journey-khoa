# Troubleshooting Guide - Data Platform

---

## Database Issues

### PostgreSQL won't start in Docker
**Symptom:** `dp_postgres` container keeps restarting.
**Cause:** Corrupted data volume or permission issue.
**Fix:**
```bash
# Backup first, then reset volume
docker-compose down -v
docker-compose up -d postgres
```

### Connection refused to PostgreSQL
**Symptom:** `could not connect to server: Connection refused`
**Cause:** Database not healthy yet or wrong connection string.
**Fix:**
```bash
# Check container status
docker-compose ps postgres
# Verify DATABASE_URL in .env
echo $DATABASE_URL
# Should be: postgresql://admin:password123@localhost:5432/data_platform
```

### "FATAL: too many connections"
**Symptom:** Application can't connect after running for a while.
**Cause:** Connection leak or pool exhaustion.
**Fix:**
```sql
-- Check active connections
SELECT count(*) FROM pg_stat_activity;

-- Kill idle connections
SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE state = 'idle' AND duration > interval '5 minutes';
```

---

## Redis Issues

### Redis connection refused
**Symptom:** `Error: connect ECONNREFUSED 127.0.0.1:6379`
**Cause:** Redis container not running.
**Fix:**
```bash
docker-compose up -d redis
docker-compose logs redis
```

### Celery can't connect to Redis broker
**Symptom:** Tasks stay in PENDING state forever.
**Cause:** Wrong broker URL or Redis not accessible from backend container.
**Fix:**
```bash
# In Docker, use service name instead of localhost
CELERY_BROKER_URL=redis://redis:6379/1
```

---

## Kafka Issues

### Kafka producer can't connect
**Symptom:** `org.apache.kafka.common.errors.TimeoutException`
**Cause:** Wrong broker address in Docker network.
**Fix:**
```bash
# Inside Docker containers, use:
KAFKA_BROKER=kafka:9092

# From host machine, use:
KAFKA_BROKER=localhost:29092
```

### Kafka topics not auto-created
**Symptom:** `NoTopicException: Topic does not exist`
**Cause:** `auto.create.topics.enable` is false.
**Fix:** Ensure `KAFKA_AUTO_CREATE_TOPICS_ENABLE=true` in docker-compose.yml.

---

## Frontend Issues

### Next.js module not found
**Symptom:** `Cannot find module 'xxx'`
**Cause:** Missing dependency or corrupted node_modules.
**Fix:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### API calls fail with CORS error
**Symptom:** `Access to fetch has been blocked by CORS policy`
**Cause:** Backend CORS middleware not configured or wrong origin.
**Fix:** Add to FastAPI:
```python
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:3001"])
```

### WebSocket connection fails
**Symptom:** `WebSocket connection to 'ws://localhost:8000/ws' failed`
**Cause:** Backend WebSocket endpoint not running or blocked by proxy.
**Fix:**
```bash
# Check backend is running
curl http://localhost:8000/health
# Verify WS URL matches backend
```

---

## Docker Issues

### Port already in use
**Symptom:** `Bind for 0.0.0.0:5432 failed: port is already allocated`
**Cause:** Another service using the same port.
**Fix:**
```bash
# Find what's using the port
netstat -ano | findstr :5432
# Either kill the process or change the port mapping in docker-compose.yml
# Change "5432:5432" to "15432:5432"
```

### Docker-compose services can't reach each other
**Symptom:** `Name or service not known` between containers.
**Cause:** Containers not on same network.
**Fix:** Ensure all services use `dp_network` in docker-compose.yml. Use service name as hostname (e.g., `postgres`, `redis`, `kafka`).

### Docker images take too much disk space
**Symptom:** Docker disk usage > 50GB.
**Fix:**
```bash
# Clean unused resources
docker system prune -a --volumes
# Build with multi-stage Dockerfiles to reduce image size
```

---

## Monitoring Issues

### Grafana can't connect to Prometheus
**Symptom:** "No datasources" or connection error in Grafana.
**Cause:** Wrong Prometheus URL.
**Fix:** In Grafana datasource settings, use: `http://prometheus:9090` (Docker) or `http://localhost:9090` (browser).

### Prometheus not scraping metrics
**Symptom:** Empty graphs in Grafana.
**Cause:** Backend `/metrics` endpoint not reachable.
**Fix:** Verify `prometheus.yml` scrape config:
```yaml
scrape_configs:
  - job_name: 'backend'
    static_configs:
      - targets: ['backend:8000']  # Use service name in Docker
```

### ELK Stack - No logs in Kibana
**Symptom:** Kibana Discovery shows no data.
**Cause:** Logstash not receiving logs or index pattern not created.
**Fix:**
```bash
# Check Logstash is running
docker-compose logs logstash
# Create index pattern in Kibana: logstash-*
# Verify app sends logs to Logstash port 5000
```

---

## Performance Issues

### API responses are slow (> 2s)
**Diagnosis Steps:**
1. Check database queries: `EXPLAIN ANALYZE <your_query>`
2. Check if indexes exist on filtered columns
3. Enable Redis caching for GET endpoints
4. Check Grafana for slow endpoints

**Quick Fixes:**
```sql
-- Add indexes to frequently queried columns
CREATE INDEX IF NOT EXISTS idx_records_source_id ON data_records(source_id);
CREATE INDEX IF NOT EXISTS idx_records_timestamp ON data_records(timestamp);
```

### Dashboard loads slowly
**Cause:** Too much data fetched at once.
**Fix:** Implement pagination, limit date range, add Redis caching.

---

## Security Issues

### JWT token expired
**Symptom:** All API calls return 401.
**Fix:** Re-login to get a new token. Check token expiry time in `.env`.

### Rate limiter blocking requests
**Symptom:** HTTP 429 Too Many Requests.
**Cause:** Exceeded rate limit (default: 100 req/min per IP).
**Fix:** Wait for reset or increase limit in FastAPI config.

---

## Development Workflow

### Reset entire environment
```bash
# WARNING: This deletes all data!
docker-compose down -v
docker-compose up -d
```

### View all service logs
```bash
docker-compose logs -f
# Or specific service
docker-compose logs -f backend
```

### Rebuild a single service
```bash
docker-compose up -d --build backend
```

---

## Quick Health Check Script

```bash
# Check all services
echo "=== Service Status ==="
docker-compose ps

echo -e "\n=== Backend Health ==="
curl -s http://localhost:8000/health

echo -e "\n=== Redis Ping ==="
docker exec dp_redis redis-cli ping

echo -e "\n=== PostgreSQL Status ==="
docker exec dp_postgres pg_isready

echo -e "\n=== Kafka Topics ==="
docker exec dp_kafka kafka-topics.sh --bootstrap-server kafka:9092 --list