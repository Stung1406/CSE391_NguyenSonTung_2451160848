# Phần A: Kiểm tra đọc hiểu

## Câu A1 — Viewport & Mobile-First

1. Thẻ `<meta viewport>` chuẩn

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

_Giải thích_

- `name="viewport"`: Báo cho trình duyệt biết đây là cấu hình viewport (khu vực hiển thị).
- `content`: Chứa các giá trị cấu hình, cách nhau bởi dấu phẩy.
- `width=device-width`: Cho viewport rộng bằng chiều rộng màn hình thiết bị (VD iPhone 14 = 390px). Không có thì trình duyệt mặc định ~980px rồi thu nhỏ lại.
- `initial-scale=1.0`: Zoom ban đầu = 100%, không zoom in/out tự động.

2. Nếu THIẾU thẻ này, iPhone sẽ hiển thị trang web như thế nào?

iPhone sẽ coi trang là trang desktop và thu nhỏ lại cho vắt vừa màn hình. Kết quả:

- Chuỗi nhỏ xíu, phải zoom in mới đọc được
- Scroll ngang liên tục vì viewport mặc định (980px) rộng hơn màn hình (375-430px)
- Nút bấm chồng lên nhau, layout dồn nát
- Ảnh thiết kế cho desktop bị tràn ra ngoài

3. Mobile-First và Desktop-First khác nhau thế nào? Viết ví dụ CSS cho mỗi cách với breakpoint 768px. Tại sao Mobile-First được khuyên dùng?

- Mobile-First (khuyên dùng) — dùng `min-width`

```css
/* Mặc định: mobile */
.container {
  display: flex;
  flex-direction: column;
}

.sidebar {
  display: none;
}
.main-content {
  width: 100%;
}

/* Tablet trở lên (>= 768px) */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
    gap: 24px;
  }
  .sidebar {
    display: block;
    width: 200px;
  }
  .main-content {
    width: calc(100% - 200px - 24px);
  }
}
```

Mobile: 1 cột, ẩn sidebar. Tablet trở lên: 2 cột, hiện sidebar.

- Desktop-First (cách cũ) — dùng `max-width`

```css
/* Mặc định: desktop */
.container {
  display: flex;
  flex-direction: row;
  gap: 24px;
}

.sidebar {
  display: block;
  width: 200px;
}
.main-content {
  width: calc(100% - 200px - 24px);
}

/* Mobile (< 768px) */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 0;
  }
  .sidebar {
    display: none;
  }
  .main-content {
    width: 100%;
  }
}
```

Desktop: 2 cột. Thu nhỏ xuống mobile: chuyển về 1 cột, ẩn sidebar.

- Mobile chỉ tải CSS mặc định (cho mobile), bỏ qua media query `min-width` → tải ít CSS hơn, nhanh hơn.
- Desktop-First ngược lại: mobile phải tải toàn bộ CSS desktop rồi mới ghi đè bằng `max-width` → lãng phí.
- 60% traffic từ mobile, ưu tiên mobile trước = phục vụ đúng phần lớn người dùng.
- Code dễ đọc hơn: thêm styles theo thứ tự từ nhỏ đến lớn, ít xung đột hơn.
  