# 🚀 Fullstack Data Platform Engineer

> **Lộ trình 140 ngày**: Junior → Mid → Senior Fullstack Engineer
> **Stack**: Next.js + TypeScript | FastAPI (Python) | PostgreSQL | Docker | Prometheus
> **Thời gian**: 2026-05-11 → 2027-05-11

[![CI](https://github.com/Pon1147/fullstack-journey-khoa/actions/workflows/ci.yml/badge.svg)](.github/workflows/ci.yml)
[![CD](https://github.com/Pon1147/fullstack-journey-khoa/actions/workflows/cd.yml/badge.svg)](.github/workflows/cd.yml)

---

## 📋 Tổng Quan

Nền tảng dữ liệu fullstack bao gồm: bảng điều khiển phân tích thời gian thực, REST API, đường ống xử lý dữ liệu, hệ thống webhook, và bộ giám sát/observability hoàn chỉnh.

### Tính Năng

- 📊 **Bảng Điều Khiển**: Trực quan hóa KPI thời gian thực với Next.js 14 + Recharts
- 🔌 **REST API**: CRUD, xác thực, nhập dữ liệu hàng loạt (FastAPI)
- 🔄 **Đường Ống Dữ Liệu**: Xử lý batch với Celery, streaming thời gian thực với Kafka
- 🪝 **Webhook**: Tích hợp theo sự kiện, ký HMAC, cơ chế thử lại
- 🔐 **Xác Thực**: JWT + kiểm soát truy cập theo vai trò (RBAC)
- 📈 **Giám Sát**: Prometheus metrics + Grafana dashboards
- 📝 **Nhật Ký**: ELK Stack (Elasticsearch, Logstash, Kibana)
- 🐳 **Docker**: Toàn bộ stack chạy trong container
- ⚡ **CI/CD**: GitHub Actions tự động kiểm thử & triển khai

---

## 🏗️ Kiến Trúc

```bash
┌──────────────┐    HTTP/WS    ┌──────────────┐    SQL    ┌──────────────┐
│   Trình Duyệt │ ◄───────────► │   FastAPI    │ ─────────► │  PostgreSQL  │
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

📖 [Sơ Đồ Kiến Trúc Chi Tiết](docs/architecture.md)

---

## 🚀 Bắt Đầu Nhanh

### Yêu Cầu

- **Docker Desktop** 24+ (có docker-compose)
- **Node.js** 20+ (phát triển frontend cục bộ)
- **Python** 3.11+ (phát triển backend cục bộ)
- **Git**

### Cách 1: Docker (Khuyến Nghị)

```bash
# 1. Clone kho mã nguồn
git clone git@github.com:Pon1147/fullstack-journey-khoa.git
cd fullstack-journey-khoa

# 2. Cấu hình môi trường
cp .env.example .env
# Sửa .env theo cài đặt của bạn

# 3. Khởi động hạ tầng
docker-compose up -d postgres redis kafka zookeeper

# 4. Chờ dịch vụ sẵn sàng
docker-compose ps

# 5. Khởi động backend
cd projects/backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000

# 6. Khởi động frontend (terminal mới)
cd projects/frontend
npm install
npm run dev
```

### Cách 2: Phát Triển Cục Bộ

```bash
# Backend
cd projects/backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload

# Frontend
cd projects/frontend
npm install
npm run dev
```

### Điểm Truy Cập

| Dịch Vụ      | URL                                   |
| ------------ | ------------------------------------- |
| Frontend     | <http://localhost:3001>               |
| Backend API  | <http://localhost:8000>               |
| Swagger Docs | <http://localhost:8000/docs>          |
| Grafana      | <http://localhost:3000> (admin/admin) |
| Prometheus   | <http://localhost:9090>               |
| Kibana       | <http://localhost:5601>               |

---

## 📁 Cấu Trúc Dự Án

```bash
fullstack-journey-khoa/
├── projects/
│   ├── frontend/           # Next.js 14 + TypeScript + Tailwind
│   └── backend/            # FastAPI + Python + SQLAlchemy
├── docker-compose.yml      # Hạ tầng đầy đủ trong Docker
├── docs/                   # Tài liệu kỹ thuật
│   ├── architecture.md     # Kiến trúc hệ thống
│   ├── api.md              # Tài liệu API
│   ├── troubleshooting.md  # Xử lý lỗi thường gặp
│   └── adr/                # Ghi nhận quyết định kiến trúc
├── scripts/
│   └── load-test.js        # Script test tải (k6)
├── .github/workflows/
│   ├── ci.yml              # CI: kiểm tra lint + test
│   └── cd.yml              # CD: triển khai tự động
├── .env.example            # Mẫu biến môi trường
└── ROADMAP.md              # Lộ trình học tập 140 ngày
```

---

## 📊 Lộ Trình

Xem [ROADMAP.md](ROADMAP.md) để biết kế hoạch chi tiết 140 ngày.

| Giai Đoạn           | Thời Gian | Trọng Tâm                                                       |
| ------------------- | --------- | --------------------------------------------------------------- |
| **1: Nền Tảng**     | Tháng 1-2 | Next.js UI, FastAPI CRUD, Xác thực, Data API, Webhook, Pipeline |
| **2: Sẵn Sản Phẩm** | Tháng 3-4 | Docker, CI/CD, Prometheus+Grafana, ELK Stack                    |
| **3: Tối Ưu**       | Tháng 5   | Cache, Test Tải, Thiết Kế Hệ Thống, Bảo Mật                     |
| **4: Lãnh Đạo**     | Tháng 6   | Blog Kỹ Thuật, Tài Liệu, Chuẩn Bị Mentoring                     |

---

## 🧪 Kiểm Thử

```bash
# Test backend
cd projects/backend
pytest --cov=app --cov-report=term-missing

# Test frontend
cd projects/frontend
npm run test

# Test tải (cần cài k6)
k6 run scripts/load-test.js
```

---

## 📚 Tài Liệu

- [Kiến Trúc](docs/architecture.md) — Thiết kế hệ thống, luồng dữ liệu, công nghệ
- [API Reference](docs/api.md) — Tất cả endpoint, định dạng yêu cầu/phản hồi
- [Xử Lý Lỗi](docs/troubleshooting.md) — Lỗi thường gặp và cách sửa
- [ADR](docs/adr/README.md) — Ghi nhận quyết định kiến trúc

---

## 🛠️ Phát Triển

### Lệnh Thường Dùng

```bash
# Khởi động tất cả dịch vụ
docker-compose up -d

# Xem nhật ký
docker-compose logs -f [dich-vu]

# Chạy migration database (tương lai)
cd projects/backend && alembic upgrade head

# Test tải
k6 run scripts/load-test.js

# Kiểm tra sức khỏe
curl http://localhost:8000/health
```

### Quy Trình Git

```bash
# Tạo nhánh tính năng
git checkout -b feature/ten-tinh-nang
git commit -m "feat: thêm tính năng mới"
git push origin feature/ten-tinh-nang
# Tạo PR trên GitHub
```

---

## 📈 Mục Tiêu Hiệu Suất

| Chỉ Số         | Mục Tiêu |
| -------------- | -------- |
| Độ Trễ P95 API | < 500ms  |
| Độ Trễ P99 API | < 1000ms |
| Tỷ Lỗi         | < 1%     |
| Request/Giây   | > 1000   |
| Phủ Trợ Test   | > 60%    |

---

## 📝 Giấy Phép

Dự án riêng tư — Lộ trình Fullstack Data Platform Engineer

---

> "Cách tốt nhất để dự đoán tương lai là xây dựng nó."
> **Khoa LPD** | Bắt đầu: 2026-05-11
