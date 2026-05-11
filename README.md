# 🚀 Fullstack Data Platform Engineer

> **140-Day Journey**: Junior → Mid → Senior Fullstack Engineer
> **Stack**: Next.js + TypeScript | FastAPI (Python) | PostgreSQL | Docker | Prometheus
> **Period**: 2026-05-11 → 2027-05-11

[![CI](https://github.com/Pon1147/fullstack-journey-khoa/actions/workflows/ci.yml/badge.svg)](.github/workflows/ci.yml)
[![CD](https://github.com/Pon1147/fullstack-journey-khoa/actions/workflows/cd.yml/badge.svg)](.github/workflows/cd.yml)

---

## 📋 Overview

A fullstack data platform featuring a real-time analytics dashboard, REST API, data pipelines, webhook system, and complete monitoring/observability stack.

### Features

- 📊 **Dashboard**: Real-time KPI visualization with Next.js 14 + Recharts
- 🔌 **REST API**: CRUD operations, authentication, bulk data ingestion (FastAPI)
- 🔄 **Data Pipeline**: Batch processing with Celery, real-time streaming with Kafka
- 🪝 **Webhooks**: Event-driven integrations with HMAC signing & retry logic
- 🔐 **Auth**: JWT-based authentication with role-based access control (RBAC)
- 📈 **Monitoring**: Prometheus metrics + Grafana dashboards
- 📝 **Logging**: ELK Stack (Elasticsearch, Logstash, Kibana)
- 🐳 **Docker**: Full stack containerized with docker-compose
- ⚡ **CI/CD**: GitHub Actions for automated testing & deployment

---

## 🏗️ Architecture

```
┌──────────────┐    HTTP/WS    ┌──────────────┐    SQL    ┌──────────────┐
│   Browser    │ ◄───────────► │   FastAPI    │ ─────────► │  PostgreSQL  │
│  Next.js 14  │               │   Backend    │            │    16        │
└──────────────┘               └──────┬───────┘            └──────────────┘
                                      │
                          ┌───────────┼───────────┐
                          ▼           ▼           ▼
                    ┌──────────┐ ┌────────┐ ┌─────────┐
                    │   Redis  │ │ Kafka  │ │ Celery  │
                    │  (Cache) │ │(Event) │ │ (Batch) │
                    └──────────┘ └────────┘ └─────────┘
```

📖 [Full Architecture Diagram](docs/architecture.md)

---

## 🚀 Quick Start

### Prerequisites

- **Docker Desktop** 24+ (with docker-compose)
- **Node.js** 20+ (for local frontend dev)
- **Python** 3.11+ (for local backend dev)
- **Git**

### Option 1: Docker (Recommended)

```bash
# 1. Clone repository
git clone git@github.com:Pon1147/fullstack-journey-khoa.git
cd fullstack-journey-khoa

# 2. Configure environment
cp .env.example .env
# Edit .env with your settings

# 3. Start infrastructure
docker-compose up -d postgres redis kafka zookeeper

# 4. Wait for services to be healthy
docker-compose ps

# 5. Start backend
cd projects/backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000

# 6. Start frontend (new terminal)
cd projects/frontend
npm install
npm run dev
```

### Option 2: Local Development

```bash
# Backend
cd projects/backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn app.main:app --reload

# Frontend
cd projects/frontend
npm install
npm run dev
```

### Access Points

| Service      | URL                                      |
|--------------|------------------------------------------|
| Frontend     | http://localhost:3001                    |
| Backend API  | http://localhost:8000                    |
| Swagger Docs | http://localhost:8000/docs               |
| Grafana      | http://localhost:3000 (admin/admin)      |
| Prometheus   | http://localhost:9090                    |
| Kibana       | http://localhost:5601                    |

---

## 📁 Project Structure

```
fullstack-journey-khoa/
├── projects/
│   ├── frontend/           # Next.js 14 + TypeScript + Tailwind
│   └── backend/            # FastAPI + Python + SQLAlchemy
├── docker-compose.yml      # Full stack infrastructure
├── docs/                   # Technical documentation
│   ├── architecture.md
│   ├── api.md
│   ├── troubleshooting.md
│   └── adr/                # Architecture Decision Records
├── scripts/
│   └── load-test.js        # k6 load testing script
├── .github/workflows/
│   ├── ci.yml              # CI: lint + test
│   └── cd.yml              # CD: deploy
├── .env.example            # Environment variables template
└── ROADMAP.md              # 140-day learning roadmap
```

---

## 📊 Roadmap

See [ROADMAP.md](ROADMAP.md) for the complete 140-day plan.

| Phase | Duration | Focus |
|-------|----------|-------|
| **1: Foundation** | Month 1-2 | Next.js UI, FastAPI CRUD, Auth, Data API, Webhooks, Pipelines |
| **2: Production** | Month 3-4 | Docker, CI/CD, Prometheus+Grafana, ELK Stack |
| **3: Optimization** | Month 5 | Caching, Load Testing, System Design, Security |
| **4: Leadership** | Month 6 | Technical Blogs, Documentation, Mentorship Prep |

---

## 🧪 Testing

```bash
# Backend tests
cd projects/backend
pytest --cov=app --cov-report=term-missing

# Frontend tests
cd projects/frontend
npm run test

# Load testing (requires k6)
k6 run scripts/load-test.js
```

---

## 📚 Documentation

- [Architecture](docs/architecture.md) - System design, data flow, tech stack
- [API Reference](docs/api.md) - All endpoints, request/response formats
- [Troubleshooting](docs/troubleshooting.md) - Common issues and fixes
- [ADR](docs/adr/README.md) - Architecture Decision Records

---

## 🛠️ Development

### Commands

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f [service]

# Run database migrations (future)
cd projects/backend && alembic upgrade head

# Load test
k6 run scripts/load-test.js

# Health check
curl http://localhost:8000/health
```

### Git Workflow

```bash
# Feature branch
git checkout -b feature/your-feature
git commit -m "feat: add your feature"
git push origin feature/your-feature
# Create PR on GitHub
```

---

## 📈 Performance Targets

| Metric | Target |
|--------|--------|
| API P95 Latency | < 500ms |
| API P99 Latency | < 1000ms |
| Error Rate | < 1% |
| Sustained RPS | > 1000 |
| Test Coverage | > 60% |

---

## 📝 License

Private project - Fullstack Data Platform Engineer Journey

---

> "The best way to predict the future is to build it."
> **Khoa LPD** | Started: 2026-05-11