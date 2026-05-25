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

## Câu A2 — Breakpoints

| Tên | Kích thước | Thiết bị         | Lưới sản phẩm |
| --- | ---------- | ---------------- | ------------- |
| xs  | < 576px    | Điện thoại dọc   | 1 cột         |
| sm  | ≥ 576px    | Điện thoại ngang | 2 cột         |
| md  | ≥ 768px    | Tablet           | 2 cột         |
| lg  | ≥ 992px    | Desktop nhỏ      | 3-4 cột       |
| xl  | ≥ 1200px   | Desktop lớn      | 4 cột         |

## Câu A3 — Media Queries

| Chiều rộng màn hình | `.container` width |
| ------------------- | ------------------ |
| 375px (iPhone SE)   | 100% (= 375px)     |
| 600px               | 540px              |
| 800px               | 720px              |
| 1000px              | 960px              |
| 1400px              | 1140px             |

## Câu A4 — SCSS Basics

1. Variables (`$primary-color`)

- Cho phép lưu giá trị dùng chung (màu, font, kích thước) vào một biến, cần đổi thì chỉ sửa 1 chỗ.

```scss
$primary: #805ad5;
$danger: #e53e3e;
$font-body: "Inter", sans-serif;
$radius: 8px;

.btn-primary {
  background: $primary;
  border-radius: $radius;
}

.header {
  background: $primary; // Đổi $primary = 2 chỗ tự đổi
}
```

- Lợi ích: Đổi màu chủ đạo từ xanh sang tím, chỉ cần sửa biến thay vì sửa nhiều chỗ.

2. Nesting (viết CSS lồng nhau)

- Cho phép viết CSS theo cấu trúc lồng nhau giống HTML, code gọn và dễ đọc hơn.

```scss
.navbar {
  background: #1a202c;
  padding: 16px;

  ul {
    list-style: none;
    display: flex;

    li {
      margin-right: 24px;

      a {
        color: white;

        &:hover {
          // & = chính thẻ a
          color: $primary;
        }
      }
    }
  }
}
```

- Biểu tượng `&` đại diện cho thẻ cha (ở đây là `a`), nên `&:hover` sẽ ra `.navbar ul li a:hover`.
- Quy tắc: Không lồng quá 3 cấp, sâu hơn thì selector dài, khó maintain.

3. Mixins (`@mixin`, `@include`)

- Mixin là đoạn CSS có thể tái sử dụng nhiều nơi. Dùng `@mixin` để khai báo, `@include` để gọi.

```scss
// Khai báo mixin
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Sử dụng
.hero {
  @include flex-center;
  height: 100vh;
}
```

- Lợi ích: Không phải viết lặp đi lặp lại đoạn CSS giống nhau.

4. `@extend` / Inheritance

- Cho phép một selector kế thừa toàn bộ CSS từ selector khác, tránh lặp code.

```scss
// Base (cha)
.btn {
  padding: 12px 24px;
  border: none;
  border-radius: $radius;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

// Kế thừa + thêm style riêng
.btn-primary {
  @extend .btn;
  background: $primary;
  color: white;
}

.btn-danger {
  @extend .btn;
  background: $danger;
  color: white;
}
```

- Khác với mixin: `@extend` tạo ra một nhóm selector chung trong CSS đầu ra (nhẹ hơn). Mixin thì sao chép đoạn CSS vào mỗi nơi gọi (dễ hơn nhưng có thể tạo code trùng lặp).

Tại sao trình duyệt KHÔNG đọc được file `.scss`? Cần bước gì để chuyển SCSS → CSS?

- SCSS (Sassy CSS) là CSS preprocessor — tức là CSS có thêm tính năng lập trình (biến, hàm, lồng nhau, điều kiện). Đây là cú pháp mở rộng, trình duyệt chỉ hiểu CSS thuần, nên không thể đọc trực tiếp file `.scss`.

- Quá trình chuyển đổi: SCSS (code viết) → Compiler (dịch) → CSS (trình duyệt đọc)
