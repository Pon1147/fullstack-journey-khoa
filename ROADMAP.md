# 🚀 FULLSTACK DATA PLATFORM ENGINEER - LỘ TRÌNH 1 NĂM

> **Hợp Tác Viên**: Khoa LPD
> **Mục Tiêu Vai Trò**: Junior → Mid → Senior Fullstack Engineer
> **Cam Kết**: 4 giờ/ngày, 6 ngày/tuần
> **Stack**: Next.js + TypeScript | FastAPI (Python) | PostgreSQL | Docker | Prometheus
> **Bắt Đầu**: `2026-05-11` | **Kết Thúc**: `2027-05-11`

---

## 📊 GIAI ĐOẠN 1: NỀN TẢNG (THÁNG 1-2)

### TUẦN 1-2: Next.js + TypeScript + Giao Diện Bảng Điều Khiển

- [x] Ngày 1: Cài Node.js, VS Code, tạo ứng dụng Next.js 14 (App Router + TypeScript). Kết quả: repo `data-platform/` khởi tạo xong ✅
- [ ] Ngày 2: Xây vỏ giao diện: thanh điều hướng, thanh bên, khu vực nội dung chính. Kết quả: vỏ UI hoạt động
- [ ] Ngày 3: Cài Tailwind CSS + shadcn/ui. Xây 3 thành phần: Bảng, Thẻ, Nút. Kết quả: 3 thành phần tái sử dụng
- [ ] Ngày 4: Xây trang bảng điều khiển giả lập với 4 thẻ KPI (CAC, ROAS, Users, Revenue). Kết quả: trang KPI
- [ ] Ngày 5: Cài Recharts. Xây biểu đồ Đường, biểu đồ Cột, biểu đồ Bánh với dữ liệu giả. Kết quả: 3 loại biểu đồ
- [ ] Ngày 6: Thêm phân trang, lọc, tìm kiếm vào bảng dữ liệu. Kết quả: bảng dữ liệu có thể lọc
- [ ] Ngày 7: **KIỂM TRA TUẦN**: Push code, viết README.md, thực hành tin nhắn commit. Kết quả: repo GitHub có README

### TUẦN 3-4: FastAPI + PostgreSQL Backend

- [ ] Ngày 8: Cài Python, venv, pip. Tạo dự án FastAPI với cấu trúc. Kết quả: thư mục `backend/` khởi tạo
- [ ] Ngày 9: Cài PostgreSQL cục bộ, tạo DB `data_platform`, cài PgAdmin/DBeaver. Kết quả: DB chạy
- [ ] Ngày 10: Tạo mô hình SQLAlchemy: User, DataSource, DataRecord. Kết quả: 3 mô hình
- [ ] Ngày 11: Viết endpoint CRUD cho DataSource: POST, GET tất cả, GET theo ID, PUT, DELETE. Kết quả: 5 API
- [ ] Ngày 12: Viết endpoint CRUD cho DataRecord: POST, GET tất cả, GET theo ID, PUT, DELETE. Kết quả: 5 API
- [ ] Ngày 13: Thêm schema Pydantic, xác thực, middleware xử lý lỗi toàn cục. Kết quả: API được xác thực
- [ ] Ngày 14: **KIỂM TRA TUẦN**: Test tất cả endpoint với Postman/curl, viết tài liệu API trong README. Kết quả: API có tài liệu

### TUẦN 5-6: Kết Nối Frontend ↔ Backend

- [ ] Ngày 15: Cài Axios trong Next.js. Tạo lớp dịch vụ API (`services/api.ts`). Kết quả: file `services/api.ts`
- [ ] Ngày 16: Kết nối bảng điều khiển với dữ liệu API thật (lấy từ FastAPI). Kết quả: dữ liệu thật trên bảng
- [ ] Ngày 17: Xây form Tạo DataSource với xác thực (tên, url, loại). Kết quả: form tạo hoạt động
- [ ] Ngày 18: Thêm Sửa/Xóa DataSource với hộp thoại xác nhận. Kết quả: giao diện CRUD đầy đủ
- [ ] Ngày 19: Thêm trạng thái tải, xử lý lỗi, thông báo toast. Kết quả: cải thiện UX
- [ ] Ngày 20: Cài React Query. Thêm lấy dữ liệu + bộ nhớ đệm + tự động tải lại. Kết quả: lớp dữ liệu đệm
- [ ] Ngày 21: **KIỂM TRA TUẦN**: Test luồng đầu-đuôi, sửa lỗi, viết ghi chú tích hợp. Kết quả: ứng dụng fullstack chạy

### TUẦN 7-8: Xác Thực + Phân Quyền

- [ ] Ngày 22: Thêm JWT vào FastAPI. Tạo endpoint `/login` với sinh token. Kết quả: luồng xác thực JWT
- [ ] Ngày 23: Tạo endpoint `/register` với mã hóa mật khẩu bcrypt. Kết quả: đăng ký người dùng
- [ ] Ngày 24: Xây trang đăng nhập trên Next.js. Lưu token trong cookie httpOnly. Kết quả: trang đăng nhập
- [ ] Ngày 25: Tạo middleware route được bảo vệ trên Next.js (`middleware.ts`). Kết quả: trang được bảo vệ
- [ ] Ngày 26: Thêm trường vai trò (admin/viewer) vào mô hình User. Tạo middleware theo vai trò. Kết quả: RBAC backend
- [ ] Ngày 27: Thêm chọn vai trò trong giao diện. Ẩn/hiện tính năng theo vai trò. Kết quả: giao diện theo vai trò
- [ ] Ngày 28: **KIỂM TRA TUẦN**: Test toàn bộ luồng xác thực, viết ghi chú bảo mật, sửa lỗi. Kết quả: xác thực xong

### TUẦN 9-10: API Thu Thập Dữ Liệu

- [ ] Ngày 29: Thiết kế schema dữ liệu đa sản phẩm (sự kiện, chỉ số, dấu thời gian). Kết quả: tài liệu schema
- [ ] Ngày 30: Tạo endpoint nhập hàng loạt (`POST /api/data/bulk`). Kết quả: endpoint POST hàng loạt
- [ ] Ngày 31: Thêm lớp xác thực dữ liệu (bộ xác thực tùy chỉnh Pydantic). Kết quả: quy tắc xác thực
- [ ] Ngày 32: Tạo dịch vụ làm giàu dữ liệu (gộp trường, chuyển đổi giá trị, chuẩn hóa). Kết quả: dịch vụ chuyển đổi
- [ ] Ngày 33: Thêm logic loại bỏ trùng lặp (khóa duy nhất, upsert). Kết quả: bỏ trùng hoạt động
- [ ] Ngày 34: Tạo truy vấn tổng hợp: SUM, AVG, COUNT theo khoảng ngày, theo nguồn. Kết quả: 5 truy vấn tổng hợp
- [ ] Ngày 35: **KIỂM TRA TUẦN**: Test tải với 10K bản ghi, đo thời gian phản hồi, ghi nhận đường cơ sở. Kết quả: đường cơ sở hiệu suất

### TUẦN 11-12: Hệ Thống Webhook

- [ ] Ngày 36: Thiết kế mô hình webhook (url, events[], secret, active, created_at). Kết quả: mô hình webhook
- [ ] Ngày 37: Tạo endpoint CRUD webhook (POST, GET, PUT, DELETE). Kết quả: API webhook
- [ ] Ngày 38: Triển khai dịch vụ phân phát webhook (gửi payload đến URL đã đăng ký). Kết quả: dịch vụ phân phát
- [ ] Ngày 39: Thêm xác minh chữ ký HMAC cho payload webhook. Kết quả: webhook đã ký
- [ ] Ngày 40: Thêm cơ chế thử lại (3 lần, khoảng lùi theo cấp số nhân). Kết quả: logic thử lại
- [ ] Ngày 41: Tạo trang test webhook (gửi payload thử, xem nhật ký). Kết quả: trang test
- [ ] Ngày 42: **KIỂM TRA TUẦN**: Test với ngrok/localhost, xác nhận giao bên ngoài, sửa lỗi. Kết quả: webhook chạy

### TUẦN 13-14: Đường Ống Dữ Liệu (Batch)

- [ ] Ngày 43: Cài Celery + Redis. Thiết lập hàng đợi tác vụ. Kết quả: worker Celery chạy
- [ ] Ngày 44: Tạo tác vụ theo lịch: lấy dữ liệu từ API ngoài mỗi giờ. Kết quả: 1 công việc theo lịch
- [ ] Ngày 45: Tạo đường ống chuyển đổi dữ liệu (làm sạch, chuẩn hóa, làm giàu). Kết quả: đường ống chuyển đổi
- [ ] Ngày 46: Thêm theo dõi trạng thái đường ống (đang chờ, chạy, xong, thất bại) vào DB. Kết quả: theo dõi trạng thái
- [ ] Ngày 47: Thêm tự động thử lại khi đường ống thất bại (tối đa 3 lần). Kết quả: tự thử lại
- [ ] Ngày 48: Tạo trang xem nhật ký đường ống (liệt kê chạy, trạng thái, thời gian). Kết quả: trang xem nhật ký
- [ ] Ngày 49: **KIỂM TRA TUẦN**: Chạy 5 đường ống, kiểm tra độ chính xác, ghi nhận quy trình. Kết quả: đường ống xong

### TUẦN 15-16: Dữ Liệu Thời Gian Thực (WebSocket)

- [ ] Ngày 50: Thiết lập WebSocket trong FastAPI. Kết quả: endpoint WS
- [ ] Ngày 51: Tạo dịch vụ nhà sản xuất Kafka (pub sự kiện dữ liệu). Kết quả: producer chạy
- [ ] Ngày 52: Tạo dịch vụ người tiêu dùng Kafka (consume sự kiện, đẩy vào WS). Kết quả: consumer chạy
- [ ] Ngày 53: Kết nối consumer Kafka → phát sóng WebSocket cho client. Kết quả: luồng thời gian thực
- [ ] Ngày 54: Cập nhật bảng điều khiển Next.js nhận cập nhật thời gian thực. Kết quả: bảng điều khiển trực tiếp
- [ ] Ngày 55: Thêm cập nhật biểu đồ thời gian thực (tự động tải lại khi có dữ liệu mới). Kết quả: biểu đồ tự cập nhật
- [ ] Ngày 56: **KIỂM TRA TUẦN**: Mô phỏng luồng dữ liệu trực tiếp, xác nhận cập nhật, sửa độ trễ. Kết quả: thời gian thực chạy

---

## 📊 GIAI ĐOẠN 2: SẴN SẢN PHẨM (THÁNG 3-4)

### TUẦN 17-18: Docker

- [ ] Ngày 57: Viết Dockerfile cho Next.js (xây nhiều giai đoạn). Kết quả: Dockerfile frontend
- [ ] Ngày 58: Viết Dockerfile cho FastAPI (xây nhiều giai đoạn). Kết quả: Dockerfile backend
- [ ] Ngày 59: Tạo `docker-compose.yml` (app + db + redis + kafka + zookeeper). Kết quả: file compose
- [ ] Ngày 60: Chạy toàn bộ stack với `docker-compose up`. Sửa lỗi mạng. Kết quả: môi trường local trong Docker
- [ ] Ngày 61: Thêm gắn volume cho lưu trữ dữ liệu (DB, Redis). Kết quả: dữ liệu lưu được
- [ ] Ngày 62: Tối ưu kích thước hình ảnh Docker (alpine, nhiều giai đoạn). Kết quả: hình ảnh nhỏ hơn
- [ ] Ngày 63: **KIỂM TRA TUẦN**: Ghi nhận lệnh Docker, tạo .env.example, xác nhận dịch vụ. Kết quả: tài liệu Docker xong

### TUẦN 19-20: CI/CD

- [ ] Ngày 64: Tạo workflow GitHub Actions: lint + test khi push/PR. Kết quả: workflow CI
- [ ] Ngày 65: Thêm hook pre-commit (black, flake8, prettier, eslint). Kết quả: tự định dạng khi commit
- [ ] Ngày 66: Thêm unit test backend (pytest) cho endpoint API. Kết quả: test backend (phủ >60%)
- [ ] Ngày 67: Thêm unit test frontend (Vitest + RTL) cho thành phần. Kết quả: test frontend
- [ ] Ngày 68: Tạo workflow triển khai (triển khai lên môi trường staging). Kết quả: workflow CD
- [ ] Ngày 69: Thêm endpoint kiểm tra sức khỏe + probe sẵn sàng cho container. Kết quả: kiểm tra sức khỏe
- [ ] Ngày 70: **KIỂM TRA TUẦN**: Push code, xác nhận tự động xây/test/triển khai, sửa lỗi pipeline. Kết quả: CI/CD chạy

### TUẦN 21-22: Giám Sát (Prometheus + Grafana)

- [ ] Ngày 71: Thêm client Prometheus vào FastAPI (middleware metrics). Kết quả: endpoint /metrics
- [ ] Ngày 72: Thêm chỉ số tùy chỉnh: số yêu cầu, tỷ lệ lỗi, thời gian phản hồi. Kết quả: 5 chỉ số tùy chỉnh
- [ ] Ngày 73: Cài Prometheus + Grafana qua docker-compose. Kết quả: stack giám sát chạy
- [ ] Ngày 74: Tạo bảng Grafana: hiệu suất API (yêu cầu/giây, độ trễ, lỗi). Kết quả: bảng API
- [ ] Ngày 75: Tạo bảng Grafana: trạng thái đường ống (công việc, thời gian, thất bại). Kết quả: bảng đường ống
- [ ] Ngày 76: Thêm quy tắc cảnh báo (lỗi >5%, độ trễ P95 >1s, đường ống thất bại). Kết quả: cảnh báo cấu hình
- [ ] Ngày 77: **KIỂM TRA TUẦN**: Kích hoạt cảnh báo thủ công, xác nhận thông báo, ghi nhận giám sát. Kết quả: cảnh báo chạy

### TUẦN 23-24: Nhật Ký (ELK Stack)

- [ ] Ngày 78: Thêm nhật ký có cấu trúc vào FastAPI (định dạng JSON, request_id). Kết quả: nhật ký JSON
- [ ] Ngày 79: Thiết lập Elasticsearch + Logstash + Kibana qua docker-compose. Kết quả: stack ELK chạy
- [ ] Ngày 80: Cấu hình Logstash nhận nhật ký ứng dụng từ stdout/file. Kết quả: nhật ký chảy vào ES
- [ ] Ngày 81: Tạo bảng Kibana: nhật ký lỗi, truy vấn chậm, endpoint hàng đầu. Kết quả: bảng lỗi
- [ ] Ngày 82: Thêm tương quan nhật ký (theo dõi request_id qua dịch vụ). Kết quả: nhật ký có thể theo dõi
- [ ] Ngày 83: Tạo trang tìm nhật ký trong ứng dụng (lọc theo cấp độ, thời gian, dịch vụ). Kết quả: trang xem nhật ký
- [ ] Ngày 84: **KIỂM TRA TUẦN**: Tìm nhật ký, xác nhận tương quan, test theo dõi lỗi. Kết quả: ELK xong

---

## 📊 GIAI ĐOẠN 3: TỐI ƯU (THÁNG 5)

### TUẦN 25-26: Tối Ưu Hiệu Suất

- [ ] Ngày 85: Thêm lớp đệm Redis cho phản hồi API (endpoint GET). Kết quả: middleware đệm
- [ ] Ngày 86: Triển khai chiến lược hủy đệm (TTL, hủy thủ công). Kết quả: chiến lược đệm
- [ ] Ngày 87: Tối ưu truy vấn SQL chậm (EXPLAIN ANALYZE, thêm chỉ mục). Kết quả: truy vấn nhanh hơn
- [ ] Ngày 88: Thêm chỉ mục database vào cột thường truy vấn. Kết quả: chỉ mục được tạo
- [ ] Ngày 89: Triển khai phân trang dựa trên con trỏ cho tập dữ liệu lớn. Kết quả: phân trang hiệu quả
- [ ] Ngày 90: Phân tích gói frontend (webpack-bundle-analyzer) + chia tách mã. Kết quả: gói nhỏ hơn
- [ ] Ngày 91: **KIỂM TRA TUẦN**: Chạy benchmark trước/sau, ghi nhận cải thiện. Kết quả: báo cáo benchmark

### TUẦN 27-28: Test Tải + Mở Rộng

- [ ] Ngày 92: Cài k6. Viết script test tải cho endpoint API. Kết quả: script k6
- [ ] Ngày 93: Chạy test tải: 100 người dùng đồng thời, 30 phút. Phân tích kết quả. Kết quả: kết quả test tải
- [ ] Ngày 94: Xác định nút cổ chai, sửa 3 vấn đề hiệu suất hàng đầu. Kết quả: nút cổ chai được sửa
- [ ] Ngày 95: Test đường ống với batch 100K bản ghi. Đo thông lượng. Kết quả: đường ống mở rộng
- [ ] Ngày 96: Test WebSocket với 500 kết nối đồng thời. Đo độ trễ. Kết quả: WS mở rộng
- [ ] Ngày 97: Ghi nhận chiến lược mở rộng (ngang, dọc, bản sao đọc). Kết quả: tài liệu mở rộng
- [ ] Ngày 98: **KIỂM TRA TUẦN**: Mục tiêu: P95 < 500ms, 1000 RPS. Ghi nhận kết quả. Kết quả: đạt mục tiêu

### TUẦN 29-30: Thiết Kế Hệ Thống

- [ ] Ngày 99: Vẽ sơ đồ kiến trúc hiện tại (draw.io/Excalidraw). Kết quả: kiến trúc v1
- [ ] Ngày 100: Ghi nhận luồng dữ liệu: nguồn → webhook/API → đường ống → DB → bảng. Kết quả: tài liệu luồng
- [ ] Ngày 101: Viết 5 Ghi Nhận Quyết Định Kiến Trúc (định dạng ADR). Kết quả: 5 ADR
- [ ] Ngày 102: Nghiên cứu: Kafka vs RabbitMQ cho sự kiện dữ liệu. Viết tài liệu so sánh. Kết quả: tài liệu so sánh
- [ ] Ngày 103: Thiết kế chiến lược mở rộng ngang (load balancer, dịch vụ không trạng thái). Kết quả: thiết kế mở rộng
- [ ] Ngày 104: Thiết kế kế hoạch khôi phục thảm họa (Sao lưu, khôi phục, RTO/RPO). Kết quả: tài liệu DR
- [ ] Ngày 105: **KIỂM TRA TUẦN**: Trình bày kiến trúc với đồng nghiệp/giáo viên, thu thập phản hồi. Kết quả: xem xét xong

### TUẦN 31-32: Tăng Cường Bảo Mật

- [ ] Ngày 106: Kiểm toán: kiểm tra lỗ hổng OWASP Top 10 trong ứng dụng. Kết quả: danh sách kiểm tra
- [ ] Ngày 107: Thêm giới hạn tốc độ cho API (slowapi/redis). Kết quả: bộ giới hạn tốc độ
- [ ] Ngày 108: Thêm chính sách CORS, tiêu đề CSP, HSTS. Kết quả: tiêu đề bảo mật
- [ ] Ngày 109: Triển khai làm sạch đầu vào (bleach, bộ xác thực tùy chỉnh). Kết quả: làm sạch
- [ ] Ngày 110: Xác nhận bảo vệ tiêm SQL (truy vấn tham số hóa ở mọi nơi). Kết quả: an toàn SQLi
- [ ] Ngày 111: Thêm quản lý bí mật (biến môi trường, không hardcode). Kết quả: bí mật được quản lý
- [ ] Ngày 112: **KIỂM TRA TUẦN**: Chạy quét bảo mật (safety, trivy, eslint-security), sửa lỗi. Kết quả: kiểm toán xong

---

## 📊 GIAI ĐOẠN 4: LÃNH ĐẠO + HỒ SƠ (THÁNG 6)

### TUẦN 33-34: Viết Kỹ Thuật (3 Bài Blog)

- [ ] Ngày 113: Viết Blog 1: "Xây Bảng Điều Khiển Dữ Liệu với Next.js + FastAPI". Kết quả: nháp blog 1
- [ ] Ngày 114: Chỉnh sửa + xuất bản Blog 1 trên Dev.to/Medium. Kết quả: blog 1 trực tuyến (chia sẻ LinkedIn)
- [ ] Ngày 115: Viết Blog 2: "Đường Ống Dữ Liệu Thời Gian Thực với Kafka + WebSocket". Kết quả: nháp blog 2
- [ ] Ngày 116: Chỉnh sửa + xuất bản Blog 2. Kết quả: blog 2 trực tuyến
- [ ] Ngày 117: Viết Blog 3: "Giám Sát Dịch Vụ Tiểu với Prometheus + Grafana". Kết quả: nháp blog 3
- [ ] Ngày 118: Chỉnh sửa + xuất bản Blog 3. Kết quả: blog 3 trực tuyến
- [ ] Ngày 119: **KIỂM TRA TUẦN**: 3 blog xuất bản, chia sẻ LinkedIn/Twitter, thu thập phản hồi. Kết quả: hồ sơ tăng

### TUẦN 35-36: Tài Liệu

- [ ] Ngày 120: Viết tài liệu API (Swagger/OpenAPI tự động). Kết quả: tài liệu API trực tuyến
- [ ] Ngày 121: Viết hướng dẫn triển khai (yêu cầu, bước, biến môi trường). Kết quả: hướng dẫn triển khai
- [ ] Ngày 122: Viết hướng dẫn xử lý lỗi (lỗi thường gặp, giải pháp). Kết quả: tài liệu xử lý lỗi
- [ ] Ngày 123: Tạo danh sách kiểm tra onboarding cho nhà phát triển mới. Kết quả: tài liệu onboarding
- [ ] Ngày 124: Ghi nhận mô hình dữ liệu + quan hệ (sơ đồ ER). Kết quả: tài liệu mô hình
- [ ] Ngày 125: Quay video demo 5 phút của nền tảng đầy đủ (Loom/OBS). Kết quả: video demo
- [ ] Ngày 126: **KIỂM TRA TUẦN**: Tài liệu xong, repo chuyên nghiệp, README hoàn thiện. Kết quả: tài liệu xong

### TUẦN 37-38: Chuẩn Bị Mentoring + Xem Xét Mã

- [ ] Ngày 127: Tạo hướng dẫn: "Thiết lập dự án cục bộ trong 10 phút". Kết quả: hướng dẫn
- [ ] Ngày 128: Thêm chú thích inline vào phần mã phức tạp (đường ống, xác thực). Kết quả: mã có chú thích
- [ ] Ngày 129: Tạo danh sách kiểm tra xem xét mã (đặt tên, test, xử lý lỗi, bảo mật). Kết quả: danh sách xem xét
- [ ] Ngày 130: Thực hành xem xét 3 PR mã nguồn mở (GitHub). Kết quả: xem xét PR xong
- [ ] Ngày 131: Viết tài liệu "Sai lầm thường gặp trong nền tảng dữ liệu". Kết quả: tài liệu sai lầm
- [ ] Ngày 132: Tạo hướng dẫn chuẩn bị phỏng vấn cho vai trò này (câu hỏi, câu trả lời, dự án). Kết quả: hướng dẫn phỏng vấn
- [ ] Ngày 133: **KIỂM TRA TUẦN**: Gói sẵn sàng cho mentoring junior, chia sẻ cộng đồng. Kết quả: bộ mentoring

### TUẦN 39-40: Gói Thăng Chức + Hoàn Thiện Cuối

- [ ] Ngày 134: Liệt kê tất cả tính năng xây + chỉ số tác động (hiệu suất, độ chính xác, thời gian hoạt động). Kết quả: danh sách tác động
- [ ] Ngày 135: Ghi nhận cải thiện chất lượng mã (phủ %, PR xem xét, lỗi sửa). Kết quả: tài liệu chất lượng
- [ ] Ngày 136: Chuẩn bị bài thuyết trình thiết kế hệ thống (slide, sơ đồ, đánh đổi). Kết quả: bộ slide
- [ ] Ngày 137: Viết tự đánh giá + khu vực phát triển + mục tiêu năm sau. Kết quả: tự đánh giá
- [ ] Ngày 138: Thu thập phản hồi đồng nghiệp (khảo sát 3 người: điểm mạnh, cải thiện). Kết quả: phản hồi
- [ ] Ngày 139: Chuẩn bị bảo vệ thăng chức (lộ trình nói, chuẩn bị Q&A). Kết quả: bảo vệ sẵn sàng
- [ ] Ngày 140: **KIỂM TRA TUẦN**: Hoàn thành gói thăng chức, ăn mừng, lập kế hoạch năm sau. Kết quả: gói xong

---

## 🏆 MỤC TIÊU CUỐI CÙNG (Tháng 6)

- [ ] Ứng dụng fullstack: Next.js + FastAPI + PostgreSQL + Redis + Kafka
- [ ] Bảng điều khiển thời gian thực với biểu đồ, bộ lọc, thu thập dữ liệu
- [ ] Đóng hộp Docker với docker-compose
- [ ] Pipeline CI/CD (GitHub Actions)
- [ ] Giám sát (Prometheus + Grafana)
- [ ] Nhật ký (ELK Stack)
- [ ] Test tải (1000 RPS, P95 < 500ms)
- [ ] 3 bài blog kỹ thuật xuất bản
- [ ] Tài liệu hoàn chỉnh
- [ ] Gói thăng chức sẵn sàng

---

## 🛑 QUY TẮC

1. **Không bỏ ngày** — tối thiểu 4h, dù mệt
2. **Commit hàng ngày** — mỗi ngày kết thúc bằng `git push`
3. **Xây > Xem** — code trước, xem hướng dẫn chỉ khi bị kẹt >30 phút
4. **Lỗi > Hướng Dẫn** — nếu kẹt, gỡ lỗi/tìm kiếm, đừng xem lại
5. **Chủ Nhật = Kiểm Tra** — xem xét tuần, điều chỉnh kế hoạch, nghỉ
6. **Theo dõi mọi thứ** — báo cáo hàng ngày bắt buộc
7. **Giao > Hoàn Hảo** — xong tốt hơn hoàn hảo
8. **Không bào chữa** — nếu bỏ ngày, nhân đôi ngày tiếp theo

---

> "Cách tốt nhất để dự đoán tương lai là xây dựng nó."
> _Kiểm tra mỗi Chủ Nhật. Thực thi mỗi ngày. Giao mã hàng ngày._