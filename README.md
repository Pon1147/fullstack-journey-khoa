# Fullstack Data Platform Engineer

> **Lộ trình 140 ngày**: Junior → Mid → Senior Fullstack Engineer
> **Stack**: Next.js + TypeScript | FastAPI (Python) | PostgreSQL | Docker | Prometheus
> **Thời gian**: 2026-05-11 → 2027-05-11

---

## Tổng Quan

Nền tảng dữ liệu fullstack bao gồm: bảng điều khiển phân tích thời gian thực, REST API, đường ống xử lý dữ liệu, hệ thống webhook, và bộ giám sát/observability hoàn chỉnh.

### Tính Năng

- 📊 **Dashboard**: Trực quan hóa KPI thời gian thực với Next.js 14 + Recharts
- 🔌 **REST API**: CRUD, xác thực, nhập dữ liệu hàng loạt (FastAPI)
- 🔄 **Data Pipeline**: Xử lý batch với Celery, streaming thời gian thực với Kafka
- 🪝 **Webhook**: Tích hợp theo sự kiện, ký HMAC, cơ chế thử lại
- 🔐 **Authentication**: JWT + RBAC
- 📈 **Monitoring**: Prometheus metrics + Grafana dashboards
- 📝 **Logging**: ELK Stack (Elasticsearch, Logstash, Kibana)
- 🐳 **Docker**: Toàn bộ stack chạy trong container
- ⚡ **CI/CD**: GitHub Actions

---

## Kiến Trúc

```
Browser (Next.js 14) ←HTTP/WS→ FastAPI Backend ←SQL→ PostgreSQL 16
                                      │
                          ┌───────────┼───────────┐
                          ▼           ▼           ▼
                    Redis (Cache)  Kafka (Event)  Celery (Batch)
```

Chi tiết: [docs/architecture.md](docs/architecture.md)

---

## Bắt Đầu

### Yêu Cầu

- Docker Desktop 24+ (có docker-compose)
- Node.js 20+ (phát triển frontend cục bộ)
- Python 3.11+ (phát triển backend cục bộ)
- Git

### Cách 1: Docker (Khuyến Nghị)

```bash
git clone git@github.com:Pon1147/fullstack-journey-khoa.git
cd fullstack-journey-khoa
cp .env.example .env

# Khởi động hạ tầng
docker-compose up -d postgres redis kafka zookeeper

# Chạy backend
cd projects/backend && pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000

# Chạy frontend
cd projects/frontend && npm install && npm run dev
```

### Cách 2: Cục Bộ

```bash
# Backend
cd projects/backend && python -m venv venv && venv\Scripts\activate
pip install -r requirements.txt && uvicorn app.main:app --reload

# Frontend
cd projects/frontend && npm install && npm run dev
```

### Điểm Truy Cập

| Dịch Vụ | URL |
|---------|-----|
| Frontend | http://localhost:3001 |
| Backend API | http://localhost:8000 |
| Swagger Docs | http://localhost:8000/docs |
| Grafana | http://localhost:3000 (admin/admin) |
| Prometheus | http://localhost:9090 |
| Kibana | http://localhost:5601 |

---

## Cấu Trúc Dự Án

```
fullstack-journey-khoa/
├── projects/
│   ├── frontend/           # Next.js 14 + TypeScript + Tailwind
│   └── backend/            # FastAPI + Python + SQLAlchemy
├── docker-compose.yml      # Hạ tầng đầy đủ trong Docker
├── docs/                   # Tài liệu kỹ thuật
│   ├── architecture.md
│   ├── api.md
│   ├── troubleshooting.md
│   └── adr/
├── scripts/
│   └── load-test.js        # Test tải (k6)
├── .env.example
└── ROADMAP.md              # Lộ trình học tập 140 ngày
```

---

## Lộ Trình

Xem [ROADMAP.md](ROADMAP.md) để biết kế hoạch chi tiết 140 ngày.

| Giai ĐOẠN | Thời Gian | Trọng Tâm |
|-----------|-----------|-----------|
| 1: Nền Tảng | Tháng 1-2 | Next.js UI, FastAPI CRUD, Auth, Data API, Webhook, Pipeline |
| 2: Sẵn Sản Phẩm | Tháng 3-4 | Docker, CI/CD, Prometheus+Grafana, ELK Stack |
| 3: Tối Ưu | Tháng 5 | Cache, Test Tải, System Design, Bảo Mật |
| 4: Lãnh Đạo | Tháng 6 | Blog Kỹ Thuật, Tài Liệu, Mentoring |

---

## Kiểm Thử

```bash
# Test backend
cd projects/backend && pytest --cov=app --cov-report=term-missing

# Test frontend
cd projects/frontend && npm run test

# Test tải (cần cài k6)
k6 run scripts/load-test.js
```

---

## Tài Liệu

- [Kiến Trúc](docs/architecture.md)
- [API Reference](docs/api.md)
- [Xử Lý Lỗi](docs/troubleshooting.md)
- [ADR](docs/adr/README.md)

---

## Lệnh Phát Triển

```bash
docker-compose up -d
docker-compose logs -f [dich-vu]
curl http://localhost:8000/health
```

### Quy Trình Git

```bash
git checkout -b feature/ten-tinh-nang
git commit -m "feat: them tinh nang moi"
git push origin feature/ten-tinh-nang
```

---

## Mục Tiêu Hiệu Năng

| Chỉ Số | Mục Tiêu |
|--------|----------|
| P95 API Latency | < 500ms |
| P99 API Latency | < 1000ms |
| Error Rate | < 1% |
| Requests/Second | > 1000 |
| Test Coverage | > 60% |

---

> "Cách tốt nhất để dự đoán tương lai là xây dựng nó."
> **Khoa LPD** | Bắt đầu: 2026-05-11