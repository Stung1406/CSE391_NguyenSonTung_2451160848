# 👥 User Directory App

Ứng dụng quản lý danh sách người dùng với đầy đủ chức năng **CRUD** (Create, Read, Update, Delete), sử dụng **API giả lập miễn phí, không cần API key**.

---

## 📡 API đã dùng

### JSONPlaceholder API
- **Base URL:** `https://jsonplaceholder.typicode.com`
- **Mô tả:** API REST giả lập (fake/mock API) dùng để học và thử nghiệm — trả về dữ liệu mẫu có sẵn, hỗ trợ đầy đủ các phương thức HTTP.
- **Tài liệu:** https://jsonplaceholder.typicode.com

#### Các endpoint đã sử dụng

| Method | Endpoint | Chức năng |
|--------|----------|-----------|
| `GET` | `/users` | Lấy toàn bộ danh sách người dùng |
| `GET` | `/users/:id` | Lấy thông tin một người dùng theo ID |
| `POST` | `/users` | Thêm mới người dùng |
| `PUT` | `/users/:id` | Cập nhật toàn bộ thông tin người dùng |
| `DELETE` | `/users/:id` | Xóa người dùng |

> ⚠️ **Lưu ý:** JSONPlaceholder là API giả lập — dữ liệu **không thực sự thay đổi** trên server. Các thao tác Create/Update/Delete chỉ được mô phỏng ở phía client (dữ liệu sẽ mất khi tải lại trang).

---

## 🚀 Cách chạy

### Yêu cầu
- Trình duyệt web hiện đại (Chrome, Firefox, Edge, …)
- Kết nối Internet (để gọi API)

### Bước 1 — Mở thư mục dự án

```
PBT_10/
└── user_directory/
    ├── index.html
    ├── style.css
    ├── api.js
    └── app.js
```

### Bước 2 — Chạy ứng dụng

**Cách nhanh nhất:** Mở thẳng file `index.html` bằng trình duyệt  
(nhấp đúp vào file hoặc kéo vào cửa sổ trình duyệt)

**Cách dùng Live Server (khuyến nghị khi phát triển):**

Nếu bạn dùng **VS Code**, cài extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), sau đó:
1. Mở thư mục `user_directory` trong VS Code
2. Nhấp chuột phải vào `index.html` → **"Open with Live Server"**
3. Trình duyệt tự động mở tại `http://127.0.0.1:5500`

### Bước 3 — Sử dụng

| Chức năng | Thao tác |
|-----------|----------|
| **Xem danh sách** | Danh sách 10 user mẫu tải tự động khi mở app |
| **Tìm kiếm** | Nhập tên hoặc email vào ô tìm kiếm (lọc real-time) |
| **Thêm user** | Nhấn nút **+ Thêm User** → điền form → nhấn **Lưu** |
| **Sửa user** | Nhấn nút **Edit** trên card user → chỉnh sửa → nhấn **Lưu** |
| **Xóa user** | Nhấn nút **Delete** trên card user → xác nhận xóa |

---

## 📁 Cấu trúc file

| File | Mô tả |
|------|-------|
| `index.html` | Giao diện HTML chính (danh sách, toolbar, modal form) |
| `style.css` | Định dạng giao diện |
| `api.js` | Lớp giao tiếp API — bao gồm các hàm `getUsers`, `createUser`, `updateUser`, `deleteUser` |
| `app.js` | Logic ứng dụng — xử lý sự kiện, render UI, quản lý state |

---

## 👤 Thông tin sinh viên

- **Họ tên:** Nguyễn Sơn Tùng  
- **MSSV:** 2451160848  
- **Môn:** CSE391  
