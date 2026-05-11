# Hướng Dẫn Xử Lý Lỗi - Nền Tảng Dữ Liệu

---

## Lỗi Database

### PostgreSQL không khởi động trong Docker

**Triệu Chứng:** Container `dp_postgres` liên tục khởi động lại.
**Nguyên Nhân:** Volume dữ liệu hỏng hoặc lỗi quyền.
**Sửa:**

```bash
# Sao lưu trước, sau đó reset volume
docker-compose down -v
docker-compose up -d postgres
```

### Từ chối kết nối PostgreSQL

**Triệu Chứng:** `could not connect to server: Connection refused`
**Nguyên Nhân:** Database chưa sẵn sàng hoặc chuỗi kết nối sai.
**Sửa:**

```bash
# Kiểm tra trạng thái container
docker-compose ps postgres
# Kiểm tra DATABASE_URL trong .env
echo $DATABASE_URL
# Phải là: postgresql://admin:password123@localhost:5432/data_platform
```

### "FATAL: quá nhiều kết nối"

**Triệu Chứng:** Ứng dụng không kết nối được sau một thời gian chạy.
**Nguyên Nhân:** Rò rỉ kết nối hoặc hết pool.
**Sửa:**

```sql
-- Kiểm tra kết nối đang hoạt động
SELECT count(*) FROM pg_stat_activity;

-- Đứt kết nối idle
SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE state = 'idle' AND duration > interval '5 phút';
```

---

## Lỗi Redis

### Redis từ chối kết nối

**Triệu Chứng:** `Error: connect ECONNREFUSED 127.0.0.1:6379`
**Nguyên Nhân:** Container Redis không chạy.
**Sửa:**

```bash
docker-compose up -d redis
docker-compose logs redis
```

### Celery không kết nối được Redis broker

**Triệu Chứng:** Tác vụ mãi ở trạng thái PENDING.
**Nguyên Nhân:** URL broker sai hoặc Redis không truy cập từ container backend.
**Sửa:**

```bash
# Trong Docker, dùng tên dịch vụ thay vì localhost
CELERY_BROKER_URL=redis://redis:6379/1
```

---

## Lỗi Kafka

### Kafka producer không kết nối được

**Triệu Chứng:** `org.apache.kafka.common.errors.TimeoutException`
**Nguyên Nhân:** Địa chỉ broker sai trong mạng Docker.
**Sửa:**

```bash
# Bên trong container Docker, dùng:
KAFKA_BROKER=kafka:9092

# Từ máy chủ, dùng:
KAFKA_BROKER=localhost:29092
```

### Topic Kafka không tự động tạo

**Triệu Chứng:** `NoTopicException: Topic does not exist`
**Nguyên Nhân:** `auto.create.topics.enable` đang false.
**Sửa:** Đảm bảo `KAFKA_AUTO_CREATE_TOPICS_ENABLE=true` trong docker-compose.yml.

---

## Lỗi Frontend

### Next.js không tìm thấy module

**Triệu Chứng:** `Cannot find module 'xxx'`
**Nguyên Nhân:** Thiếu dependency hoặc node_modules hỏng.
**Sửa:**

```bash
rm -rf node_modules package-lock.json
npm install
```

### Gọi API thất bại do CORS

**Triệu Chứng:** `Access to fetch has been blocked by CORS policy`
**Nguyên Nhân:** Middleware CORS backend chưa cấu hình hoặc sai origin.
**Sửa:** Thêm vào FastAPI:

```python
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:3001"])
```

### Kết nối WebSocket thất bại

**Triệu Chứng:** `WebSocket connection to 'ws://localhost:8000/ws' failed`
**Nguyên Nhân:** Endpoint WebSocket backend không chạy hoặc bị proxy chặn.
**Sửa:**

```bash
# Kiểm tra backend đang chạy
curl http://localhost:8000/health
# Kiểm tra URL WS khớp với backend
```

---

## Lỗi Docker

### Cổng đã được sử dụng

**Triệu Chứng:** `Bind for 0.0.0.0:5432 failed: port is already allocated`
**Nguyên Nhân:** Dịch vụ khác đang dùng cùng cổng.
**Sửa:**

```bash
# Tìm tiến trình đang dùng cổng
netstat -ano | findstr :5432
# Hoặc kill tiến trình hoặc đổi ánh xạ cổng trong docker-compose.yml
# Đổi "5432:5432" thành "15432:5432"
```

### Dịch vụ docker-compose không đạt được nhau

**Triệu Chứng:** `Name or service not known` giữa các container.
**Nguyên Nhân:** Container không cùng mạng.
**Sửa:** Đảm bảo tất cả dịch vụ dùng `dp_network` trong docker-compose.yml. Dùng tên dịch vụ làm hostname (ví dụ: `postgres`, `redis`, `kafka`).

### Hình ảnh Docker chiếm nhiều dung lượng

**Triệu Chứng:** Docker dùng > 50GB đĩa.
**Sửa:**

```bash
# Dọn tài nguyên không dùng
docker system prune -a --volumes
# Xây với Dockerfile nhiều giai đoạn để giảm kích thước
```

---

## Lỗi Giám Sát

### Grafana không kết nối được Prometheus

**Triệu Chứng:** "No datasources" hoặc lỗi kết nối trong Grafana.
**Nguyên Nhân:** URL Prometheus sai.
**Sửa:** Trong cài đặt datasource Grafana, dùng: `http://prometheus:9090` (Docker) hoặc `http://localhost:9090` (trình duyệt).

### Prometheus không thu thập chỉ số

**Triệu Chứng:** Đồ thị trống trong Grafana.
**Nguyên Nhân:** Endpoint `/metrics` của backend không đạt được.
**Sửa:** Kiểm tra cấu hình scrape trong `prometheus.yml`:

```yaml
scrape_configs:
  - job_name: 'backend'
    static_configs:
      - targets: ['backend:8000'] # Dùng tên dịch vụ trong Docker
```

### ELK Stack - Không có nhật ký trong Kibana

**Triệu Chứng:** Kibana Discovery hiển thị không có dữ liệu.
**Nguyên Nhân:** Logstash không nhận nhật ký hoặc chưa tạo index pattern.
**Sửa:**

```bash
# Kiểm tra Logstash đang chạy
docker-compose logs logstash
# Tạo index pattern trong Kibana: logstash-*
# Kiểm tra ứng dụng gửi nhật ký đến cổng Logstash 5000
```

---

## Lỗi Hiệu Suất

### Phản hồi API chậm (> 2s)

**Bước Chẩn Đoán:**

1. Kiểm tra truy vấn database: `EXPLAIN ANALYZE <truy_van>`
2. Kiểm tra chỉ mục tồn tại trên cột lọc
3. Bật đệm Redis cho endpoint GET
4. Kiểm tra Grafana tìm endpoint chậm

**Sửa Nhanh:**

```sql
-- Thêm chỉ mục vào cột thường truy vấn
CREATE INDEX IF NOT EXISTS idx_records_source_id ON data_records(source_id);
CREATE INDEX IF NOT EXISTS idx_records_timestamp ON data_records(timestamp);
```

### Bảng điều khiển tải chậm

**Nguyên Nhân:** Lấy quá nhiều dữ liệu cùng lúc.
**Sửa:** Áp dụng phân trang, giới hạn khoảng ngày, thêm đệm Redis.

---

## Lỗi Bảo Mật

### Token JWT hết hạn

**Triệu Chứng:** Tất cả gọi API trả về 401.
**Sửa:** Đăng nhập lại để nhận token mới. Kiểm tra thời gian hết hạn trong `.env`.

### Bộ giới hạn tốc độ chặn yêu cầu

**Triệu Chứng:** HTTP 429 Too Many Requests.
**Nguyên Nhân:** Vượt giới hạn (mặc định: 100 req/phút/IP).
**Sửa:** Đợi reset hoặc tăng giới hạn trong cấu hình FastAPI.

---

## Quy Trình Phát Triển

### Reset toàn bộ môi trường

```bash
# CẢNH BÁO: Xóa tất cả dữ liệu!
docker-compose down -v
docker-compose up -d
```

### Xem nhật ký tất cả dịch vụ

```bash
docker-compose logs -f
# Hoặc dịch vụ cụ thể
docker-compose logs -f backend
```

### Xây lại một dịch vụ

```bash
docker-compose up -d --build backend
```

---

## Script Kiểm Tra Sức Khỏe Nhanh

```bash
# Kiểm tra tất cả dịch vụ
echo "=== Trạng Thái Dịch Vụ ==="
docker-compose ps

echo -e "\n=== Sức Khỏe Backend ==="
curl -s http://localhost:8000/health

echo -e "\n=== Redis Ping ==="
docker exec dp_redis redis-cli ping

echo -e "\n=== Trạng Thái PostgreSQL ==="
docker exec dp_postgres pg_isready

echo -e "\n=== Topic Kafka ==="
docker exec dp_kafka kafka-topics.sh --bootstrap-server kafka:9092 --list [EOF]
```
