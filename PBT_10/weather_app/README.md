# 🌤️ Weather App

Ứng dụng tra cứu thời tiết theo tên thành phố, sử dụng hoàn toàn **API miễn phí, không cần API key**.

---

## 📡 API đã dùng

### 1. Open-Meteo Geocoding API
- **Mục đích:** Chuyển đổi tên thành phố → tọa độ địa lý (latitude, longitude)
- **Endpoint:** `https://geocoding-api.open-meteo.com/v1/search`
- **Tham số chính:**
  - `name` — tên thành phố cần tìm
  - `count=1` — lấy kết quả đầu tiên
  - `language=vi` — trả về tên địa danh bằng tiếng Việt
- **Tài liệu:** https://open-meteo.com/en/docs/geocoding-api

### 2. Open-Meteo Weather Forecast API
- **Mục đích:** Lấy dữ liệu thời tiết hiện tại (nhiệt độ, tốc độ gió, mã thời tiết WMO) và độ ẩm theo giờ
- **Endpoint:** `https://api.open-meteo.com/v1/forecast`
- **Tham số chính:**
  - `latitude`, `longitude` — tọa độ địa lý lấy từ bước Geocoding
  - `current_weather=true` — lấy thời tiết hiện tại
  - `hourly=relativehumidity_2m` — lấy độ ẩm theo từng giờ
  - `timezone=auto` — tự động xác định múi giờ
- **Tài liệu:** https://open-meteo.com/en/docs

> ✅ Cả hai API đều **miễn phí hoàn toàn** và **không yêu cầu đăng ký hay API key**.

---

## 🚀 Cách chạy

### Yêu cầu
- Trình duyệt web hiện đại (Chrome, Firefox, Edge, …)
- Kết nối Internet (để gọi API)

### Bước 1 — Mở thư mục dự án

```
PBT_10/
└── weather_app/
    ├── index.html
    ├── style.css
    └── app.js
```

### Bước 2 — Chạy ứng dụng

**Cách nhanh nhất:** Mở thẳng file `index.html` bằng trình duyệt  
(nhấp đúp vào file hoặc kéo vào cửa sổ trình duyệt)

**Cách dùng Live Server (khuyến nghị khi phát triển):**

Nếu bạn dùng **VS Code**, cài extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), sau đó:
1. Mở thư mục `weather_app` trong VS Code
2. Nhấp chuột phải vào `index.html` → **"Open with Live Server"**
3. Trình duyệt tự động mở tại `http://127.0.0.1:5500`

### Bước 3 — Sử dụng

1. Nhập tên thành phố vào ô tìm kiếm (ví dụ: `Hà Nội`, `Ho Chi Minh City`, `Tokyo`)
2. Nhấn nút **Tìm** hoặc nhấn phím **Enter**
3. Kết quả hiển thị: nhiệt độ, mô tả thời tiết, độ ẩm, tốc độ gió
4. Lịch sử 5 tìm kiếm gần nhất được lưu tự động trong trình duyệt (LocalStorage)

---

## 📁 Cấu trúc file

| File | Mô tả |
|------|-------|
| `index.html` | Giao diện HTML chính |
| `style.css` | Định dạng giao diện |
| `app.js` | Logic gọi API, xử lý dữ liệu, hiển thị kết quả |

---

## 👤 Thông tin sinh viên

- **Họ tên:** Nguyễn Sơn Tùng  
- **MSSV:** 2451160848  
- **Môn:** CSE391  
