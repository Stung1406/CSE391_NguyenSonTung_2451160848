# 📊 Dashboard – PBT_10

Dashboard hiển thị dữ liệu thời gian thực từ **5 API công khai** được gọi song song bằng `Promise.allSettled`.

---

## 🌐 API đã dùng

| # | Widget | Tên API | Endpoint |
|---|--------|---------|----------|
| 1 | 🌤 Thời tiết Hà Nội | **Open-Meteo** | `https://api.open-meteo.com/v1/forecast` |
| 2 | 🇻🇳 Thông tin Việt Nam | **REST Countries** | `https://restcountries.com/v3.1/name/vietnam` |
| 3 | 👥 Random Users | **Random User Generator** | `https://randomuser.me/api/?results=5` |
| 4 | 📝 Latest Posts | **JSONPlaceholder** | `https://jsonplaceholder.typicode.com/posts?_limit=4` |
| 5 | 🐶 Random Dogs | **Dog CEO** | `https://dog.ceo/api/breeds/image/random/5` |

### Chi tiết từng API

#### 1. Open-Meteo (Miễn phí, không cần key)
- **URL:** `https://api.open-meteo.com/v1/forecast?latitude=21.03&longitude=105.85&current_weather=true&hourly=relativehumidity_2m,apparent_temperature&timezone=Asia/Bangkok`
- **Dữ liệu trả về:** Nhiệt độ, cảm giác nhiệt, độ ẩm, tốc độ gió, mã thời tiết (weathercode)
- **Docs:** https://open-meteo.com/en/docs

#### 2. REST Countries (Miễn phí, không cần key)
- **URL:** `https://restcountries.com/v3.1/name/vietnam?fullText=true`
- **Dữ liệu trả về:** Thủ đô, dân số, diện tích, tiền tệ, vùng địa lý
- **Docs:** https://restcountries.com

#### 3. Random User Generator (Miễn phí, không cần key)
- **URL:** `https://randomuser.me/api/?results=5`
- **Dữ liệu trả về:** Họ tên, email, ảnh đại diện (thumbnail) của 5 người dùng ngẫu nhiên
- **Docs:** https://randomuser.me/documentation

#### 4. JSONPlaceholder (Miễn phí, không cần key)
- **URL:** `https://jsonplaceholder.typicode.com/posts?_limit=4`
- **Dữ liệu trả về:** Tiêu đề của 4 bài viết mẫu (dữ liệu giả lập)
- **Docs:** https://jsonplaceholder.typicode.com

#### 5. Dog CEO (Miễn phí, không cần key)
- **URL:** `https://dog.ceo/api/breeds/image/random/5`
- **Dữ liệu trả về:** 5 URL ảnh chó ngẫu nhiên
- **Docs:** https://dog.ceo/dog-api/documentation

---

## 🗂 Cấu trúc thư mục

```
dashboard/
├── index.html   # Giao diện HTML (5 widget)
├── style.css    # CSS – dark theme, skeleton loader, responsive grid
└── app.js       # Logic: fetch API, render dữ liệu, xử lý lỗi
```

---

## ▶ Cách chạy

> **Không cần cài đặt** – toàn bộ là HTML/CSS/JS thuần, không framework, không cần Node.js.

### Cách 1: Mở trực tiếp bằng trình duyệt

1. Mở thư mục `dashboard/` trong File Explorer.
2. Double-click vào file **`index.html`**.
3. Trình duyệt sẽ tự động tải trang và gọi 5 API.

> ⚠️ Một số trình duyệt chặn `fetch` khi mở file cục bộ (`file://`). Nếu widget báo lỗi, hãy dùng Cách 2.

### Cách 2: Dùng VS Code Live Server (Khuyến nghị)

1. Cài extension **Live Server** trong VS Code.
2. Mở file `index.html` trong VS Code.
3. Nhấn **Go Live** ở thanh trạng thái phía dưới (hoặc chuột phải → *Open with Live Server*).
4. Trình duyệt tự mở tại `http://127.0.0.1:5500/`.

### Cách 3: Dùng Python HTTP Server

```bash
# Vào thư mục dashboard
cd PBT_10/dashboard

# Python 3
python -m http.server 8080

# Sau đó mở trình duyệt tại:
# http://localhost:8080
```

### Cách 4: Dùng Node.js (npx serve)

```bash
cd PBT_10/dashboard
npx serve .
# Mở http://localhost:3000
```

---

## ✨ Tính năng

- 🔄 **Gọi song song:** 5 API được fetch cùng lúc bằng `Promise.allSettled` – tối ưu tốc độ tải.
- 💀 **Skeleton loader:** Hiển thị placeholder động khi đang tải dữ liệu.
- ❌ **Xử lý lỗi độc lập:** Một API lỗi không ảnh hưởng đến các widget còn lại.
- ⏱ **Load time:** Hiển thị tổng thời gian tải sau khi hoàn thành.
- 🔃 **Nút Refresh All:** Tải lại toàn bộ dữ liệu chỉ bằng một click.
