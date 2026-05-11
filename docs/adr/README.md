# Ghi Nhận Quyết Định Kiến Trúc (ADR)

> ADR ghi nhận các quyết định kiến trúc của dự án. Mỗi ADR giải thích một lựa chọn thiết kế quan trọng và lý do đằng sau nó.

## Định Dạng

Mỗi ADR theo cấu trúc:
- **Tiêu Đề**: Tóm tắt một dòng
- **Trạng Thái**: Đề Xuất | Đã Chấp Nhận | Đã Loại | Đã Thay Thế
- **Bối Cảnh**: Vấn đề cần giải quyết?
- **Quyết Định**: Chúng ta quyết định gì?
- **Hậu Quả**: Kết quả ra sao?

## Mục Lục

| # | Tiêu Đề | Trạng Thái | Ngày |
|---|---------|------------|------|
| 001 | Dùng Next.js 14 với App Router | Đã Chấp Nhận | 2026-05-11 |
| 002 | Dùng FastAPI cho Backend API | Đã Chấp Nhận | 2026-05-11 |
| 003 | PostgreSQL là Database Chính | Đã Chấp Nhận | 2026-05-11 |
| 004 | Docker Compose cho Hạ Tầng Cục Bộ | Đã Chấp Nhận | 2026-05-11 |
| 005 | Kafka cho Truyền Sự Kiện Thời Gian Thực | Đã Chấp Nhận | 2026-05-11 |

---

## ADR-001: Dùng Next.js 14 với App Router

**Trạng Thái**: Đã Chấp Nhận
**Ngày**: 2026-05-11

### Bối Cảnh
Cần framework frontend để xây bảng điều khiển dữ liệu có render phía máy chủ, hỗ trợ TypeScript tốt, và hệ sinh thái mạnh.

### Quyết Định
Dùng Next.js 14 với App Router (không dùng Pages Router) cho bảng điều khiển frontend.

### Hậu Quả
- ✅ Hỗ trợ SSR/SSG cải thiện hiệu suất và SEO
- ✅ Định tuyến theo file với layout mạnh mẽ
- ✅ Route API tích hợp (nếu cần)
- ✅ Tích hợp TypeScript sâu
- ⚠️ Đồi học tập với thành viên quen Pages Router

---

## ADR-002: Dùng FastAPI cho Backend API

**Trạng Thái**: Đã Chấp Nhận
**Ngày**: 2026-05-11

### Bối Cảnh
Cần framework backend cho REST API, đường ống xử lý dữ liệu, và tính năng thời gian thực. Python ưu tiên vì hệ sinh thái data engineering.

### Quyết Định
Dùng FastAPI (Python) cho lớp API backend.

### Hậu Quả
- ✅ Hiệu suất cao (hỗ trợ async, Starlette)
- ✅ Tự động tạo tài liệu OpenAPI/Swagger
- ✅ Xác thực Pydantic tích hợp
- ✅ Hỗ trợ WebSocket nguyên sinh
- ✅ Hệ sinh thái dữ liệu Python phong phú (pandas, numpy)
- ⚠️ Python GIL giới hạn tác vụ CPU (giảm nhẹ bằng Celery worker)

---

## ADR-003: PostgreSQL là Database Chính

**Trạng Thái**: Đã Chấp Nhận
**Ngày**: 2026-05-11

### Bối Cảnh
Cần database quan hệ cho lưu trữ dữ liệu có cấu trúc, truy vấn phức tạp, và toàn vẹn dữ liệu.

### Quyết Định
Dùng PostgreSQL 16 làm database chính.

### Hậu Quả
- ✅ Tuân thủ ACID, toàn vẹn dữ liệu mạnh
- ✅ Hỗ trợ JSONB cho dữ liệu bán cấu trúc
- ✅ Engine truy vấn mạnh cho tổng hợp
- ✅ Hệ sinh thái trưởng thành (SQLAlchemy, Alembic)
- ✅ Tìm kiếm văn bản đầy đủ tích hợp
- ⚠️ Giới hạn mở rộng dọc (giảm nhẹ bằng bản sao đọc sau)

---

## ADR-004: Docker Compose cho Hạ Tầng Cục Bộ

**Trạng Thái**: Đã Chấp Nhận
**Ngày**: 2026-05-11

### Bối Cảnh
Cần môi trường phát triển cục bộ nhất quán với tất cả dịch vụ (DB, cache, message broker, giám sát).

### Quyết Định
Dùng Docker Compose để điều phối tất cả dịch vụ hạ tầng cục bộ.

### Hậu Quả
- ✅ Môi trường tái tạo
- ✅ Loại bỏ "chạy máy tôi mà"
- ✅ Quản lý dịch vụ dễ dàng (khởi động/dừng/nhật ký)
- ✅ Gần với triển khai sản phẩm
- ⚠️ Tốn tài nguyên (nhiều container)
- ⚠️ Cần cài Docker Desktop

---

## ADR-005: Kafka cho Truyền Sự Kiện Thời Gian Thực

**Trạng Thái**: Đã Chấp Nhận
**Ngày**: 2026-05-11

### Bối Cảnh
Cần message broker cho sự kiện dữ liệu thời gian thực giữa đường ống và bảng điều khiển.

### Quyết Định
Dùng Apache Kafka cho truyền sự kiện.

### Hậu Quả
- ✅ Thông lượng cao, chịu lỗi
- ✅ Nhật ký tin nhắn bền vững (có thể phát lại)
- ✅ Nhiều người tiêu dùng per topic
- ✅ Hệ sinh thái trưởng thành
- ⚠️ Vận hành phức tạp (phụ thuộc Zookeeper)
- ⚠️ Dư thừa cho trường hợp đơn giản (nhưng cần cho quy mô)

---

## Tạo ADR Mới

1. Sao chép mẫu:
```markdown
## ADR-XXX: [Tiêu Đề]

**Trạng Thái**: Đề Xuất
**Ngày**: YYYY-MM-DD

### Bối Cảnh
[Vấn đề cần giải quyết?]

### Quyết Định
[Chúng ta quyết định gì?]

### Hậu Quả
[Kết quả ra sao?]
```
2. Thêm vào bảng Mục Lục ở trên
3. Thảo luận với đội/giáo viên
4. Cập nhật Trạng Thái khi được chấp nhận