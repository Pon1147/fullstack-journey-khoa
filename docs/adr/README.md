# Architecture Decision Records (ADR)

> ADRs document architectural decisions for this project. Each ADR explains a significant design choice and its rationale.

## Format

Each ADR follows this structure:
- **Title**: One-line summary
- **Status**: Proposed | Accepted | Deprecated | Superseded
- **Context**: What problem are we solving?
- **Decision**: What did we decide?
- **Consequences**: What are the results?

## Index

| # | Title | Status | Date |
|---|-------|--------|------|
| 001 | Use Next.js 14 with App Router | Accepted | 2026-05-11 |
| 002 | Use FastAPI for Backend API | Accepted | 2026-05-11 |
| 003 | PostgreSQL as Primary Database | Accepted | 2026-05-11 |
| 004 | Docker Compose for Local Infrastructure | Accepted | 2026-05-11 |
| 005 | Kafka for Real-time Event Streaming | Accepted | 2026-05-11 |

---

## ADR-001: Use Next.js 14 with App Router

**Status**: Accepted
**Date**: 2026-05-11

### Context
Need a frontend framework for building a data dashboard with server-side rendering, good TypeScript support, and strong ecosystem.

### Decision
Use Next.js 14 with App Router (not Pages Router) for the frontend dashboard.

### Consequences
- ✅ SSR/SSG support for better performance and SEO
- ✅ File-based routing with powerful layouts
- ✅ Built-in API routes (if needed)
- ✅ Strong TypeScript integration
- ⚠️ Learning curve for team members familiar with Pages Router

---

## ADR-002: Use FastAPI for Backend API

**Status**: Accepted
**Date**: 2026-05-11

### Context
Need a backend framework for REST API, data processing pipelines, and real-time features. Python preferred for data engineering ecosystem.

### Decision
Use FastAPI (Python) for the backend API layer.

### Consequences
- ✅ High performance (async support, Starlette)
- ✅ Auto-generated OpenAPI/Swagger docs
- ✅ Pydantic validation built-in
- ✅ Native WebSocket support
- ✅ Rich Python data ecosystem (pandas, numpy)
- ⚠️ Python GIL limits CPU-bound tasks (mitigated by Celery workers)

---

## ADR-003: PostgreSQL as Primary Database

**Status**: Accepted
**Date**: 2026-05-11

### Context
Need a relational database for structured data storage, complex queries, and data integrity.

### Decision
Use PostgreSQL 16 as the primary database.

### Consequences
- ✅ ACID compliance, strong data integrity
- ✅ JSONB support for semi-structured data
- ✅ Powerful query engine for aggregations
- ✅ Mature ecosystem (SQLAlchemy, Alembic)
- ✅ Full-text search built-in
- ⚠️ Vertical scaling limits (mitigated by read replicas later)

---

## ADR-004: Docker Compose for Local Infrastructure

**Status**: Accepted
**Date**: 2026-05-11

### Context
Need consistent local development environment with all services (DB, cache, message broker, monitoring).

### Decision
Use Docker Compose to orchestrate all infrastructure services locally.

### Consequences
- ✅ Reproducible environments
- ✅ "Works on my machine" eliminated
- ✅ Easy service management (start/stop/logs)
- ✅ Close to production deployment
- ⚠️ Resource intensive (multiple containers)
- ⚠️ Requires Docker Desktop installation

---

## ADR-005: Kafka for Real-time Event Streaming

**Status**: Accepted
**Date**: 2026-05-11

### Context
Need a message broker for real-time data events between pipeline and dashboard.

### Decision
Use Apache Kafka for event streaming.

### Consequences
- ✅ High throughput, fault-tolerant
- ✅ Persistent message log (replay capability)
- ✅ Multiple consumers per topic
- ✅ Mature ecosystem
- ⚠️ Complex to operate (Zookeeper dependency)
- ⚠️ Overkill for simple use cases (but needed for scale)

---

## Creating a New ADR

1. Copy this template:
```markdown
## ADR-XXX: [Title]

**Status**: Proposed
**Date**: YYYY-MM-DD

### Context
[What problem are we solving?]

### Decision
[What did we decide?]

### Consequences
[What are the results?]
```
2. Add to the Index table above
3. Discuss with team/mentor
4. Update Status when accepted