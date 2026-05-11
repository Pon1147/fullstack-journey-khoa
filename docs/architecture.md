# Kiến Trúc - Nền Tảng Dữ Liệu

## Tổng Quan Hệ Thống

```bash
┌─────────────────────────────────────────────────────────────────┐
│                     TRình Duyệt (Khách Hàng)                    │
│                      Next.js 14 + TypeScript                    │
└────────────────────────────┬────────────────────────────────────┘
                             │ HTTP / WebSocket
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      LỚP API (FastAPI)                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐   │
│  │   REST API   │  │   Webhook    │  │   WebSocket API      │   │
│  │  Endpoint    │  │   Phân Phát  │  │   (Thời Gian Thực)   │   │
│  └──────────────┘  └──────────────┘  └──────────────────────┘   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐   │
│  │ Xác Thực JWT │  │  Đường Ống   │  │    Tổng Hợp          │   │
│  │  Middleware  │  │  (Celery)    │  │    (Aggregation)     │   │
│  └──────────────┘  └──────────────┘  └──────────────────────┘   │
└──────────┬─────────────────────┬────────────────────────────────┘
           │                     │
           ▼                     ▼
┌─────────────────────┐  ┌───────────────────────┐
│   PostgreSQL 16     │  │   Redis 7             │
│  (Lưu Trữ Chính)    │  │  (Đệm + Trung Chuyển) │
└─────────────────────┘  └───────────────────────┘
           │
           ▼
┌─────────────────────┐  ┌─────────────────────┐
│   Kafka + Zookeeper │──│  Worker Celery      │
│  (Truyền Sự Kiện)   │  │  (Xử Lý Batch)      │
└─────────────────────┘  └─────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────────────────┐
│                     GIÁM SÁT VÀ NHẬT KÝ                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐   │
│  │ Prometheus   │  │   Grafana    │  │   ELK Stack          │   │
│  │  (Chỉ Số)    │  │  (Bảng Điều) │  │   (Nhật Ký)          │   │
│  └──────────────┘  └──────────────┘  └──────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

## Bưu Công Nghệ

| Lớp       | Công Nghệ               | Mục Đích                         |
| --------- | ----------------------- | -------------------------------- |
| Frontend  | Next.js 14 + TypeScript | Bảng điều khiển, SSR             |
| Backend   | FastAPI (Python)        | REST API, Logic Nghiệp Vụ        |
| Database  | PostgreSQL 16           | Lưu trữ dữ liệu chính            |
| Đệm       | Redis 7                 | Phiên, Đệm, Celery               |
| Streaming | Kafka                   | Đường ống sự kiện thời gian thực |
| Tác Vụ    | Celery + Redis          | Xử lý dữ liệu batch              |
| Giám Sát  | Prometheus + Grafana    | Chỉ số & bảng điều khiển         |
| Nhật Ký   | ELK Stack               | Nhật ký tập trung                |
| Hạ Tầng   | Docker + docker-compose | Đóng hộp container               |
| CI/CD     | GitHub Actions          | Pipeline tự động                 |

## Luồng Dữ Liệu

```bash
Nguồn Dữ Liệu → Webhook/API → Xác Thực → Kafka → Đường Ống → PostgreSQL → Bảng Điều Khiển
                                    ↓
                                Đệm Redis
                                    ↓
                            WebSocket Thời Gian Thực
```

## Cấu Trúc Dự Án

```bash
fullstack-journey-khoa/
├── projects/
│   ├── frontend/           # Next.js 14 + TypeScript
│   └── backend/            # FastAPI + Python
├── docker-compose.yml      # Hạ tầng cục bộ
├── docs/                   # Tài liệu kỹ thuật
│   ├── architecture.md
│   ├── api.md
│   ├── troubleshooting.md
│   └── adr/                # Ghi nhận quyết định kiến trúc
├── scripts/                # Script tự động
│   └── load-test.js        # Test tải k6
├── .github/workflows/      # Pipeline CI/CD
│   ├── ci.yml
│   └── cd.yml
└── .env.example            # Mẫu môi trường
```

## Bản Đồ Cổng

| Dịch Vụ       | Cổng |
| ------------- | ---- |
| Frontend      | 3001 |
| Backend       | 8000 |
| PostgreSQL    | 5432 |
| Redis         | 6379 |
| Kafka         | 9092 |
| Prometheus    | 9090 |
| Grafana       | 3000 |
| Elasticsearch | 9200 |
| Kibana        | 5601 |
