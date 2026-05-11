# 📚 Kế Học Tập — Fullstack Data Platform Engineer

> **Họ Tên**: Khoa LPD
> **Vai Trò Mục Tiêu**: Junior/Mid Fullstack Engineer
> **Thời Gian**: 140 ngày (2026-05-11 → 2027-05-11)
> **Cam Kết**: 4 giờ/ngày, 6 ngày/tuần

---

## 🎯 Mục Tiêu: Bám Sát 100% Yêu Cầu JD

---

## PHASE 1: NỀN TẢNG (Tháng 1-2) — 56 Ngày

### Tuần 1-2: Frontend Dashboard (Next.js 14)

| Ngày | Học Gì | Liên Hệ JD |
|------|--------|------------|
| 1 | Next.js 14 + App Router + TypeScript | "NextJS (Thành thạo)" |
| 2 | Layout shell: navbar, sidebar, content | "Xây dựng Dashboard" |
| 3 | Tailwind CSS + shadcn/ui (Table, Card, Button) | "Frontend: ReactJS/NextJS" |
| 4 | 4 KPI cards: CAC, ROAS, Users, Revenue | "Tối ưu hóa chỉ số kinh doanh (CAC, ROAS)" |
| 5 | Recharts: Line, Bar, Pie chart | "Công cụ phân tích, Report" |
| 6 | Pagination, filter, search data table | "Dashboard, Report" |
| 7 | Review + README + commit conventions | "Viết code sạch, tuân thủ quy chuẩn" |

### Tuần 3-4: Backend API (FastAPI + PostgreSQL)

| Ngày | Học Gì | Liên Hệ JD |
|------|--------|------------|
| 8 | Python venv + FastAPI project structure | "Backend: Python (FastAPI)" |
| 9 | PostgreSQL setup + PgAdmin | "Database: SQL (PostgreSQL)" |
| 10 | SQLAlchemy models: User, DataSource, DataRecord | "Data Modeling" |
| 11 | CRUD DataSource: POST, GET, PUT, DELETE | "API Design (REST)" |
| 12 | CRUD DataRecord: POST, GET, PUT, DELETE | "API Design (REST)" |
| 13 | Pydantic schemas + validation + error middleware | "Đảm bảo chất lượng Code & Dữ liệu" |
| 14 | Test endpoint + viết API doc | "Tài liệu hóa kỹ thuật: API docs" |

### Tuần 5-6: Kết Nối Frontend ↔ Backend

| Ngày | Học Gì | Liên Hệ JD |
|------|--------|------------|
| 15 | Axios + API service layer | "Tích hợp hệ thống" |
| 16 | Kết nối dashboard với API thật | "Bảng điều khiển (Dashboard)" |
| 17 | Form tạo DataSource + validation | "Quản lý dữ liệu" |
| 18 | Edit/Delete + confirmation dialog | "CRUD UI hoàn chỉnh" |
| 19 | Loading states + error handling + toast | "UX, chất lượng code" |
| 20 | React Query: cache + auto-refetch | "State Management" |
| 21 | E2E flow test + fix bugs | "Đảm bảo chất lượng" |

### Tuần 7-8: Xác Thực + Phân Quyền

| Ngày | Học Gì | Liên Hệ JD |
|------|--------|------------|
| 22 | JWT + endpoint `/login` | "Authentication" |
| 23 | Endpoint `/register` + bcrypt | "Security" |
| 24 | Login page + httpOnly cookie | "Frontend auth flow" |
| 25 | Protected route middleware | "Phân quyền truy cập" |
| 26 | Role field (admin/viewer) + RBAC middleware | "RBAC" |
| 27 | Role-based UI (hide/show by role) | "Internal Platform" |
| 28 | Test auth flow + security notes | "An toàn thông tin" |

### Tuần 9-10: API Thu Thập Dữ Liệu

| Ngày | Học Gì | Liên Hệ JD |
|------|--------|------------|
| 29 | Design schema: events, metrics, timestamps | "Thu thập dữ liệu cross-product" |
| 30 | Bulk insert endpoint `POST /api/data/bulk` | "Hợp nhất dữ liệu" |
| 31 | Pydantic custom validators | "Data Integrity — kiểm tra đầu vào" |
| 32 | Data enrichment: merge, transform, normalize | "Chuẩn hóa vào kho dữ liệu chung" |
| 33 | Deduplication: unique key, upsert | "Tính chính xác của dữ liệu" |
| 34 | Aggregation: SUM, AVG, COUNT by date/source | "Công cụ phân tích" |
| 35 | Load test 10K records + benchmark | "Xử lý khối lượng dữ liệu lớn" |

### Tuần 11-12: Hệ Thống Webhook

| Ngày | Học Gì | Liên Hệ JD |
|------|--------|------------|
| 36 | Webhook model: url, events, secret, active | "Webhook" |
| 37 | CRUD webhook endpoints | "API Design" |
| 38 | Dispatcher service: send payload to URLs | "Tích hợp hệ thống bên ngoài" |
| 39 | HMAC signature verification | "An toàn thông tin" |
| 40 | Retry mechanism: 3 retries, exponential backoff | "Ổn định trong môi trường sản xuất" |
| 41 | Webhook test page + logs | "Công cụ hỗ trợ vận hành" |
| 42 | Test với ngrok + fix bugs | "Kết nối hệ thống bên ngoài" |

### Tuần 13-14: Đường Ống Dữ Liệu (Batch)

| Ngày | Học Gì | Liên Hệ JD |
|------|--------|------------|
| 43 | Celery + Redis: setup task queue | "Data Pipeline" |
| 44 | Scheduled task: fetch external API every hour | "Thu thập dữ liệu tự động" |
| 45 | Transform pipeline: clean, normalize, enrich | "Chuẩn hóa dữ liệu" |
| 46 | Pipeline status tracking: pending→running→done/failed | "Giám sát vận hành" |
| 47 | Auto-retry on failure (max 3 attempts) | "Khắc phục sự cố" |
| 48 | Pipeline log viewer page | "Công cụ hỗ trợ vận hành" |
| 49 | Run 5 pipelines + verify data accuracy | "Data Integrity" |

### Tuần 15-16: Dữ Liệu Thời Gian Thực

| Ngày | Học Gì | Liên Học JD |
|------|--------|-------------|
| 50 | WebSocket trong FastAPI | "Real-time" |
| 51 | Kafka producer: publish data events | "Data Pipeline — streaming" |
| 52 | Kafka consumer: consume → push to WS | "Đồng bộ dữ liệu" |
| 53 | Kafka consumer → WebSocket broadcast | "Real-time dashboard" |
| 54 | Next.js nhận real-time updates | "Dashboard cập nhật trực tiếp" |
| 55 | Chart auto-refresh on new data | "Hiển thị dữ liệu kịp thời" |
| 56 | Simulate real-time stream + fix latency | "Thời gian phản hồi nhanh" |

---

## PHASE 2: SẴN SẢN PHẨM (Tháng 3-4) — 56 Ngày

### Tuần 17-18: Docker

| Ngày | Học Gì | Liên Hệ JD |
|------|--------|------------|
| 57 | Dockerfile Next.js (multi-stage) | "DevOps: Docker" |
| 58 | Dockerfile FastAPI (multi-stage) | "DevOps: Docker" |
| 59 | docker-compose: app + db + redis + kafka | "Môi trường sản xuất" |
| 60 | `docker-compose up` + fix networking | "Vận hành hệ thống" |
| 61 | Volume mounts: data persistence | "An toàn dữ liệu" |
| 62 | Optimize image size: alpine, multi-stage | "Tối ưu hiệu năng" |
| 63 | Document docker commands + .env.example | "Tài liệu hóa kỹ thuật" |

### Tuần 19-20: CI/CD

| Ngày | Học Gì | Liên Hệ JD |
|------|--------|------------|
| 64 | GitHub Actions: lint + test on push/PR | "CI/CD pipelines" |
| 65 | Pre-commit hooks: black, flake8, prettier, eslint | "Code sạch, quy chuẩn" |
| 66 | Backend unit tests (pytest) — coverage >60% | "Đảm bảo chất lượng Code" |
| 67 | Frontend unit tests (Vitest + RTL) | "Đảm bảo chất lượng Code" |
| 68 | Deploy workflow: staging environment | "CI/CD: Deploy" |
| 69 | Health check + readiness probe | "Vận hành ổn định" |
| 70 | Verify auto-build/test/deploy | "Pipeline CI/CD hoạt động" |

### Tuần 21-22: Giám Sát (Prometheus + Grafana)

| Ngày | Học Gì | Liên Hệ JD |
|------|--------|------------|
| 71 | Prometheus client + metrics middleware | "Monitoring: Prometheus" |
| 72 | Custom metrics: request count, error rate, duration | "Giám sát hiệu năng" |
| 73 | Prometheus + Grafana via docker-compose | "Monitoring: Grafana" |
| 74 | Grafana dashboard: API performance | "Theo dõi hệ thống" |
| 75 | Grafana dashboard: pipeline status | "Giám sát data pipeline" |
| 76 | Alert rules: error >5%, P95 >1s, failure | "Cảnh báo sự cố" |
| 77 | Trigger alerts + verify notifications | "Hỗ trợ vận hành & khắc phục" |

### Tuần 23-24: Nhật Ký (ELK Stack)

| Ngày | Học Gì | Liên Hệ JD |
|------|--------|------------|
| 78 | Structured logging: JSON + request_id | "Logging: ELK" |
| 79 | Elasticsearch + Logstash + Kibana | "ELK Stack" |
| 80 | Logstash ingest app logs | "Tập trung nhật ký" |
| 81 | Kibana dashboard: errors, slow queries | "Phân tích sự cố" |
| 82 | Log correlation: request_id tracing | "Tìm nguyên nhân gốc rễ" |
| 83 | Log search page in app | "Công cụ hỗ trợ vận hành" |
| 84 | Test error tracking + correlation | "Khắc phục sự cố" |

---

## PHASE 3: TỐI ƯU (Tháng 5) — 28 Ngày

### Tuần 25-26: Tối Ưu Hiệu Suất

| Ngày | Học Gì | Liên Hệ JD |
|------|--------|------------|
| 85 | Redis caching layer for GET endpoints | "Tối ưu hiệu năng hệ thống" |
| 86 | Cache invalidation: TTL + manual | "Quản lý cache" |
| 87 | Optimize slow SQL: EXPLAIN ANALYZE + index | "Thời gian phản hồi nhanh" |
| 88 | Database indexes on queried columns | "Hiệu năng database" |
| 89 | Cursor-based pagination for large datasets | "Xử lý dữ liệu lớn" |
| 90 | Frontend bundle analysis + code splitting | "Tối ưu frontend" |
| 91 | Benchmark before/after + document | "Đo lường cải thiện" |

### Tuần 27-28: Load Testing + Mở Rộng

| Ngày | Học Gì | Liên Hệ JD |
|------|--------|------------|
| 92 | k6: write load test script | "Test tải hệ thống" |
| 93 | Run: 100 concurrent users, 30 min | "Xử lý khối lượng lớn" |
| 94 | Fix top 3 bottlenecks | "Tối ưu hiệu năng" |
| 95 | Pipeline test: 100K records batch | "Data Pipeline quy mô" |
| 96 | WebSocket test: 500 connections | "Real-time ổn định" |
| 97 | Scaling strategy doc: horizontal, vertical, replica | "System Design" |
| 98 | Target: P95 < 500ms, 1000 RPS | "Hiệu năng mục tiêu" |

### Tuần 29-30: System Design

| Ngày | Học Gì | Liên Hệ JD |
|------|--------|------------|
| 99 | Architecture diagram (draw.io) | "Kiến trúc hệ thống" |
| 100 | Data flow doc: source → pipeline → DB → dashboard | "Hiểu luồng dữ liệu" |
| 101 | 5 Architecture Decision Records (ADR) | "Ra quyết định công nghệ" |
| 102 | Kafka vs RabbitMQ comparison | "Technology Decision Making" |
| 103 | Horizontal scaling design: LB + stateless | "System Design" |
| 104 | Disaster recovery: backup, restore, RTO/RPO | "Vận hành ổn định" |
| 105 | Present + collect feedback | "Code Review tư duy" |

### Tuần 31-32: Bảo Mật

| Ngày | Học Gì | Liên Hệ JD |
|------|--------|------------|
| 106 | OWASP Top 10 audit | "An toàn thông tin" |
| 107 | Rate limiting: slowapi/redis | "Bảo vệ API" |
| 108 | CORS + CSP headers + HSTS | "Security headers" |
| 109 | Input sanitization | "Data Integrity" |
| 110 | SQL injection protection verification | "Bảo vệ database" |
| 111 | Secret management: env vars, no hardcode | "Quản lý bí mật" |
| 112 | Security scan: safety, trivy, eslint-security | "Tự động hóa bảo mật" |

---

## PHASE 4: LÃNH ĐẠO + HỒ SƠ (Tháng 6) — 28 Ngày

### Tuần 33-34: Blog Kỹ Thuật

| Ngày | Học Gì | Liên Hệ JD |
|------|--------|------------|
| 113 | Blog 1: Dashboard Next.js + FastAPI | "Tài liệu hóa, chia sẻ" |
| 114 | Publish Blog 1 + LinkedIn | "Xây dựng portfolio" |
| 115 | Blog 2: Real-time Pipeline Kafka + WS | "Chia sẻ kiến thức" |
| 116 | Publish Blog 2 | "Portfolio" |
| 117 | Blog 3: Monitoring Prometheus + Grafana | "Tài liệu kỹ thuật" |
| 118 | Publish Blog 3 | "Portfolio hoàn chỉnh" |
| 119 | Share + collect feedback | "Giao tiếp, phối hợp" |

### Tuần 35-36: Tài Liệu Hóa

| Ngày | Học Gì | Liên Hệ JD |
|------|--------|------------|
| 120 | API docs (Swagger/OpenAPI) | "Tài liệu API" |
| 121 | Deployment guide | "Hướng dẫn vận hành" |
| 122 | Troubleshooting guide | "Khắc phục sự cố" |
| 123 | Onboarding checklist for new devs | "Tính kế thừa" |
| 124 | Data model + ER diagram | "Data Modeling documentation" |
| 125 | Demo video 5 min | "Trình bày hệ thống" |
| 126 | Polish README + professional repo | "Hồ sơ chuyên nghiệp" |

### Tuần 37-38: Mentoring + Code Review

| Ngày | Học Gì | Liên Hệ JD |
|------|--------|------------|
| 127 | Tutorial: setup project 10 min | "Hướng dẫn junior" |
| 128 | Inline comments complex code | "Code sạch, dễ đọc" |
| 129 | Code review checklist | "Code Review" |
| 130 | Practice reviewing 3 OSS PRs | "Review code thành viên" |
| 131 | "Common mistakes" doc | "Hướng dẫn junior" |
| 132 | Interview prep guide | "Chuẩn bị phỏng vấn" |
| 133 | Share with community | "Phối hợp liên team" |

### Tuần 39-40: Gói Thăng Chức

| Ngày | Học Gì | Liên Hệ JD |
|------|--------|------------|
| 134 | Impact metrics: features, performance, uptime | "Đo lường giá trị" |
| 135 | Code quality: coverage %, PRs, bugs fixed | "Chất lượng đảm bảo" |
| 136 | System design presentation | "Kiến trúc hệ thống" |
| 137 | Self-assessment + growth + goals | "Phản ánh, phát triển" |
| 138 | Peer feedback survey | "Giao tiếp, nhận phản hồi" |
| 139 | Promotion defense prep | "Chuẩn bị thăng chức" |
| 140 | Complete package + celebrate | "Hoàn thành contract" |

---

## 📊 Tóm Tắt: JD Requirement → Được Học Ở Đâu

| Yêu Cầu JD | Phase | Tuần | Ngày |
|------------|-------|------|------|
| **NextJS (Thành thạo)** | 1 | 1-2 | 1-7 |
| **State Management** | 1 | 5-6 | 20 |
| **Python (FastAPI)** | 1 | 3-4 | 8-14 |
| **PostgreSQL + Data Modeling** | 1 | 3-4 | 9-10 |
| **Redis** | 1-3 | 13, 25 | 43, 85 |
| **API Design (REST)** | 1 | 3-4 | 11-13 |
| **Webhook** | 1 | 11-12 | 36-42 |
| **Data Pipeline** | 1 | 13-14 | 43-49 |
| **Docker** | 2 | 17-18 | 57-63 |
| **CI/CD** | 2 | 19-20 | 64-70 |
| **Prometheus + Grafana** | 2 | 21-22 | 71-77 |
| **ELK Stack** | 2 | 23-24 | 78-84 |
| **System Design** | 3 | 29-30 | 99-105 |
| **Tư duy dữ liệu** | 1 | 9-10 | 29-34 |
| **Giao tiếp** | 4 | 33-34 | 113-119 |
| **Giải quyết vấn đề** | 2-3 | 23-28 | 78-98 |
| **Code Review** | 4 | 37-38 | 129-130 |
| **Tài liệu hóa** | 4 | 35-36 | 120-126 |

---

## 🏆 Kết Quả Đầu Ra (Ngày 140)

- [ ] Fullstack app: Next.js + FastAPI + PostgreSQL + Redis + Kafka
- [ ] Dashboard real-time: chart, filter, data collection
- [ ] Dockerized: docker-compose (8+ services)
- [ ] CI/CD: GitHub Actions (lint → test → deploy)
- [ ] Monitoring: Prometheus + Grafana + alerts
- [ ] Logging: ELK Stack (Elasticsearch + Logstash + Kibana)
- [ ] Load tested: 1000 RPS, P95 < 500ms
- [ ] 3 blog kỹ thuật xuất bản
- [ ] Tài liệu hoàn chỉnh (API, deploy, troubleshooting, onboarding)
- [ ] Gói thăng chức Junior → Mid

---

**Khoa LPD** | Bắt đầu: 2026-05-11 | 4h/ngày × 6 ngày/tuần × 52 tuần