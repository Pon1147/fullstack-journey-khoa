# Architecture - Data Platform

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT (Browser)                         │
│                      Next.js 14 + TypeScript                     │
└────────────────────────────┬────────────────────────────────────┘
                             │ HTTP / WebSocket
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API LAYER (FastAPI)                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │   REST API   │  │   Webhook    │  │   WebSocket API      │  │
│  │   Endpoints  │  │   Dispatcher │  │   (Real-time)        │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │   Auth (JWT) │  │   Pipeline   │  │   Aggregation        │  │
│  │   Middleware │  │   (Celery)   │  │   Engine             │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
└──────────┬─────────────────────┬────────────────────────────────┘
           │                     │
           ▼                     ▼
┌─────────────────────┐  ┌─────────────────────┐
│   PostgreSQL 16     │  │   Redis 7            │
│   (Primary Storage) │  │   (Cache + Broker)   │
└─────────────────────┘  └─────────────────────┘
           │
           ▼
┌─────────────────────┐  ┌─────────────────────┐
│   Kafka + Zookeeper │──│   Celery Workers     │
│   (Event Streaming) │  │   (Batch Processing) │
└─────────────────────┘  └─────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────────────────┐
│                      MONITORING & LOGGING                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │ Prometheus   │  │   Grafana    │  │   ELK Stack          │  │
│  │ (Metrics)    │  │ (Dashboards) │  │ (Logs)               │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

## Technology Stack

| Layer        | Technology              | Purpose                    |
|--------------|-------------------------|----------------------------|
| Frontend     | Next.js 14 + TypeScript | Dashboard UI, SSR          |
| Backend      | FastAPI (Python)        | REST API, Business Logic   |
| Database     | PostgreSQL 16           | Primary data storage       |
| Cache        | Redis 7                 | Session, Cache, Celery     |
| Streaming    | Kafka                   | Real-time event pipeline   |
| Tasks        | Celery + Redis          | Batch data processing      |
| Monitoring   | Prometheus + Grafana    | Metrics & dashboards       |
| Logging      | ELK Stack               | Centralized logging        |
| Infra        | Docker + docker-compose | Containerization           |
| CI/CD        | GitHub Actions          | Automated pipeline         |

## Data Flow

```
Data Source → Webhook/API → Validation → Kafka → Pipeline → PostgreSQL → Dashboard
                              ↓
                          Redis Cache
                              ↓
                      Real-time WebSocket
```

## Project Structure

```
fullstack-journey-khoa/
├── projects/
│   ├── frontend/           # Next.js 14 + TypeScript
│   └── backend/            # FastAPI + Python
├── docker-compose.yml      # Local infrastructure
├── docs/                   # Technical documentation
│   ├── architecture.md
│   ├── api.md
│   ├── troubleshooting.md
│   └── adr/                # Architecture Decision Records
├── scripts/                # Automation scripts
│   └── load-test.js        # k6 load testing
├── .github/workflows/      # CI/CD pipelines
│   ├── ci.yml
│   └── cd.yml
└── .env.example            # Environment template
```

## Ports Map

| Service      | Port  |
|--------------|-------|
| Frontend     | 3001  |
| Backend      | 8000  |
| PostgreSQL   | 5432  |
| Redis        | 6379  |
| Kafka        | 9092  |
| Prometheus   | 9090  |
| Grafana      | 3000  |
| Elasticsearch| 9200  |
| Kibana       | 5601  |