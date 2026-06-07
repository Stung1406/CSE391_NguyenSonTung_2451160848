# 🖼️ Gallery App

Ứng dụng thư viện ảnh vô hạn (infinite scroll) sử dụng ảnh ngẫu nhiên từ internet, hỗ trợ lazy loading và lightbox xem ảnh phóng to.

---

## 📡 API Đã Dùng

### [Lorem Picsum](https://picsum.photos/)

| Thông tin | Chi tiết |
|-----------|----------|
| **Tên API** | Lorem Picsum Photos API |
| **Base URL** | `https://picsum.photos` |
| **Loại** | REST API, công khai, **không cần API key** |
| **Phương thức** | `GET` |

### Endpoint sử dụng

#### Lấy danh sách ảnh (phân trang)
```
GET https://picsum.photos/v2/list?page={page}&limit={limit}
```

| Tham số | Kiểu | Mô tả |
|---------|------|-------|
| `page` | `number` | Số trang hiện tại (bắt đầu từ `1`) |
| `limit` | `number` | Số ảnh trả về mỗi trang (mặc định: `20`) |

**Ví dụ response:**
```json
[
  {
    "id": "0",
    "author": "Alejandro Escamilla",
    "width": 5616,
    "height": 3744,
    "url": "https://unsplash.com/photos/...",
    "download_url": "https://fastly.picsum.photos/id/0/5616/3744.jpg?..."
  }
]
```

#### Lấy ảnh theo ID (hiển thị trong lightbox)
```
https://picsum.photos/id/{id}/{width}/{height}
```

> **Ví dụ:** `https://picsum.photos/id/10/300/300` — ảnh thumbnail 300×300px

---

## ✨ Tính năng chính

- **Infinite Scroll** — tự động tải thêm ảnh khi cuộn xuống cuối trang (dùng `IntersectionObserver`)
- **Lazy Loading** — ảnh chỉ tải khi hiển thị trong viewport, tiết kiệm băng thông
- **Skeleton Loading** — hiển thị placeholder khi đang tải dữ liệu
- **Lightbox** — click vào ảnh để xem phiên bản full-size với thông tin tác giả
- **Keyboard support** — nhấn `Esc` để đóng lightbox

---

## 🚀 Cách Chạy

### Yêu cầu
- Trình duyệt web hiện đại (Chrome, Firefox, Edge, Safari...)
- Kết nối Internet (để tải ảnh từ API)

### Cách 1: Mở trực tiếp (đơn giản nhất)

1. Mở thư mục `gallery/`
2. Nhấp đúp vào file `index.html`
3. File sẽ mở trong trình duyệt mặc định

> ⚠️ Một số trình duyệt chặn request từ file `file://`. Nếu ảnh không hiển thị, hãy dùng cách 2.

### Cách 2: Dùng Live Server (VS Code) ✅ Khuyến nghị

1. Cài extension **Live Server** trong VS Code  
   *(Extensions → tìm "Live Server" → Install)*
2. Click chuột phải vào `index.html` → chọn **"Open with Live Server"**
3. Trình duyệt tự mở tại `http://127.0.0.1:5500/`

### Cách 3: Dùng Python HTTP Server

```bash
# Python 3
cd PBT_10/gallery
python -m http.server 8080
```

Sau đó mở trình duyệt và truy cập: **`http://localhost:8080`**

### Cách 4: Dùng Node.js (`http-server`)

```bash
# Cài đặt (chỉ cần 1 lần)
npm install -g http-server

# Chạy trong thư mục gallery
cd PBT_10/gallery
http-server -p 8080
```

Sau đó mở trình duyệt và truy cập: **`http://localhost:8080`**

---

## 📁 Cấu trúc thư mục

```
gallery/
├── index.html   # Giao diện chính (HTML)
├── style.css    # Stylesheet (CSS)
├── app.js       # Logic ứng dụng (JavaScript)
└── README.md    # Tài liệu này
```

---

## 🛠️ Chi tiết kỹ thuật

| Công nghệ | Chi tiết |
|-----------|----------|
| HTML/CSS/JS | Vanilla (không dùng framework) |
| API | Lorem Picsum (free, no auth) |
| Lazy loading | `IntersectionObserver` API |
| Infinite scroll | `IntersectionObserver` API |
| Số ảnh/trang | 20 ảnh |
