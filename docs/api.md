# Tài Liệu API - Nền Tảng Dữ Liệu

> URL Cơ Bản: `http://localhost:8000`
> Tự động Swagger tại `/docs`

---

## Xác Thực

### POST /api/auth/register
Đăng ký người dùng mới.

**Dữ Liệu Gửi:**
```json
{
  "username": "chuỗi (3-50 ký tự)",
  "email": "chuỗi (email hợp lệ)",
  "password": "chuỗi (tối thiểu 8 ký tự)"
}
```

**Phản Hồi:** `201 Created`
```json
{
  "id": 1,
  "username": "chuỗi",
  "email": "chuỗi",
  "role": "viewer"
}
```

### POST /api/auth/login
Đăng nhập và nhận token JWT.

**Dữ Liệu Gửi:**
```json
{
  "username": "chuỗi",
  "password": "chuỗi"
}
```

**Phản Hồi:** `200 OK`
```json
{
  "access_token": "chuỗi (JWT)",
  "token_type": "bearer"
}
```

---

## Nguồn Dữ Liệu (Data Sources)

### POST /api/data-sources
Tạo nguồn dữ liệu mới.

**Headers:** `Authorization: Bearer <token>`

**Dữ Liệu Gửi:**
```json
{
  "name": "chuỗi",
  "url": "chuỗi",
  "type": "api | webhook | file",
  "config": {}
}
```

**Phản Hồi:** `201 Created`

### GET /api/data-sources
Liệt kê tất cả nguồn dữ liệu (có phân trang).

**Tham Số:** `?page=1&limit=20&search=...`

**Phản Hồi:** `200 OK`
```json
{
  "data": [],
  "total": 100,
  "page": 1,
  "limit": 20
}
```

### GET /api/data-sources/{id}
Lấy nguồn dữ liệu theo ID. → `200 OK`

### PUT /api/data-sources/{id}
Cập nhật nguồn dữ liệu. → `200 OK`

### DELETE /api/data-sources/{id}
Xóa nguồn dữ liệu. → `204 No Content`

---

## Bản Ghi Dữ Liệu (Data Records)

### POST /api/data-records
Chèn một bản ghi dữ liệu.

**Dữ Liệu Gửi:**
```json
{
  "source_id": 1,
  "event": "chuỗi",
  "metrics": {},
  "timestamp": "ISO 8601"
}
```

### POST /api/data-records/bulk
Chèn hàng loạt bản ghi.

**Dữ Liệu Gửi:**
```json
[
  { "source_id": 1, "event": "page_view", "metrics": {}, "timestamp": "..." }
]
```

### GET /api/data-records
Liệt kê bản ghi (có lọc).

**Tham Số:** `?source_id=1&from=2024-01-01&to=2024-12-31&page=1&limit=50`

### GET /api/data-records/{id} → `200 OK`
### PUT /api/data-records/{id} → `200 OK`
### DELETE /api/data-records/{id} → `204 No Content`

---

## Tổng Hợp (Aggregation)

### GET /api/aggregation/summary
Lấy tổng quan KPI.

**Tham Số:** `?from=2024-01-01&to=2024-12-31`

**Phản Hồi:**
```json
{
  "total_users": 0,
  "total_revenue": 0.0,
  "avg_roas": 0.0,
  "total_events": 0
}
```

### GET /api/aggregation/by-source
Tổng hợp theo nguồn dữ liệu.

### GET /api/aggregation/by-date
Tổng hợp theo khoảng ngày.

---

## Webhook

### POST /api/webhooks
Đăng ký endpoint webhook mới.

**Dữ Liệu Gửi:**
```json
{
  "url": "https://app-cua-ban.com/webhook",
  "events": ["data.inserted", "data.updated"],
  "secret": "khao-bi-mat"
}
```

### GET /api/webhooks → Liệt kê tất cả
### PUT /api/webhooks/{id} → Cập nhật
### DELETE /api/webhooks/{id} → Xóa
### POST /api/webhooks/{id}/test → Gửi payload thử

---

## Đường Ống (Pipelines)

### GET /api/pipelines → Liệt kê tất cả chạy
### GET /api/pipelines/{id} → Chi tiết lần chạy
### POST /api/pipelines/{id}/trigger → Kích hoạt thủ công

---

## Giám Sát

### GET /health
Kiểm tra sức khỏe hệ thống.

**Phản Hồi:**
```json
{
  "status": "healthy",
  "database": "connected",
  "redis": "connected",
  "kafka": "connected"
}
```

### GET /metrics
Endpoint chỉ số Prometheus.

---

## Phản Hồi Lỗi

| Mã   | Nghĩa                       |
|------|-----------------------------|
| 400  | Yêu Cầu Không Đúng          |
| 401  | Chưa Xác Thực               |
| 403  | Không Có Quyền              |
| 404  | Không Tìm Thấy              |
| 409  | Xung Đột                    |
| 422  | Lỗi Xác Thực                |
| 429  | Vượt Giới Hạn Tốc Độ        |
| 500  | Lỗi Máy Chủ Nội Bộ          |

**Định Dạng Lỗi:**
```json
{
  "detail": "Mô tả lỗi",
  "error_code": "VALIDATION_ERROR",
  "timestamp": "2024-01-01T00:00:00Z"
}