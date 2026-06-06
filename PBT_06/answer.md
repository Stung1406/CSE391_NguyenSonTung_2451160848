````md
## Phần A: Đọc hiểu

#### Câu A1 — Grid System

| Kích thước | < 768px      | 768px – 991px | ≥ 992px    |
| ---------- | ------------ | ------------- | ---------- |
| Class dùng | col-12       | col-md-6      | col-lg-3   |
| Mỗi box    | 12/12 = 100% | 6/12 = 50%    | 3/12 = 25% |
| Box/hàng   | 1            | 2             | 4          |

###### Mobile (< 768px)
4 box được xếp chồng theo chiều dọc, mỗi box chiếm toàn bộ chiều ngang.

```text
[  Box 1  ]
[  Box 2  ]
[  Box 3  ]
[  Box 4  ]
````

###### Tablet (768px – 991px)

Mỗi hàng chứa 2 box, tổng cộng có 2 hàng.

```text
[ Box 1 ][ Box 2 ]
[ Box 3 ][ Box 4 ]
```

###### Desktop (≥ 992px)

Cả 4 box hiển thị trên cùng một hàng.

```text
[ Box 1 ][ Box 2 ][ Box 3 ][ Box 4 ]
```

###### Câu hỏi thêm: `col-md-6` nghĩa là gì?

`col-md-6` có nghĩa là trên màn hình có kích thước từ 768px trở lên (`md`), phần tử sẽ chiếm 6/12 cột, tương đương 50% chiều ngang.

Khi màn hình nhỏ hơn 768px, Bootstrap sẽ bỏ qua class này và phần tử tự động hiển thị với chiều rộng 100%.

###### Tại sao không cần viết `col-sm-12`?

Có thể dùng `col-12` thay cho `col-sm-12` vì `col-12` áp dụng cho mọi kích thước màn hình từ nhỏ đến lớn. Trong khi đó, `col-sm-12` chỉ áp dụng từ 576px trở lên.

```
```
#### Câu A2 — Utilities & Components

###### 1. Giải thích `d-none d-md-block`

- `d-none` áp dụng từ xs (0px) trở lên: `display: none` → ẩn element.
- `d-md-block` áp dụng từ md (>= 768px) trở lên: `display: block` → hiển thị element.

###### Kết quả

| Màn hình | Kích thước | Trạng thái |
| -------- | ---------- | ---------- |
| Mobile   | < 768px    | Ẩn         |
| Tablet   | >= 768px   | Hiện       |
| Desktop  | >= 992px   | Hiện       |

###### Dùng khi nào?

Thường dùng để ẩn một element trên mobile (ví dụ: sidebar, banner quảng cáo hoặc navigation desktop), nhưng hiển thị lại từ tablet trở lên.

---

###### 2. Liệt kê 5 spacing utilities (margin/padding)

- `m` = margin, `p` = padding
- Direction:
  - `t` = top
  - `b` = bottom
  - `s` = start/left
  - `e` = end/right
  - `x` = trái + phải
  - `y` = trên + dưới
  - bỏ trống = cả 4 phía
- Size: `0 / 1 / 2 / 3 / 4 / 5 / auto`

| Class     | CSS tương đương                 | Giải thích |
| --------- | ------------------------------- | ---------- |
| `mt-3`    | margin-top: 1rem                | Margin phía trên 1rem (16px) |
| `px-4`    | padding-left & right: 1.5rem    | Padding hai bên trái/phải 1.5rem |
| `mb-auto` | margin-bottom: auto             | Đẩy element xuống cuối trong flexbox |
| `my-2`    | margin-top & bottom: 0.5rem     | Margin trên và dưới 0.5rem (8px) |
| `p-0`     | padding: 0                      | Xóa toàn bộ padding |

---

###### 3. Sự khác nhau giữa `.container`, `.container-fluid` và `.container-md`

| Class              | Ý nghĩa |
| ------------------ | -------- |
| `.container`       | Có `max-width` cố định theo từng breakpoint và tự căn giữa |
| `.container-fluid` | Luôn chiếm toàn bộ chiều ngang (`100%`) ở mọi kích thước màn hình |
| `.container-md`    | Full width dưới md (`< 768px`), chuyển sang fixed width từ md trở lên |

###### Khi nào nên dùng?

- `.container`  
  Dùng cho nội dung chính như bài viết, form hoặc layout cần giới hạn độ rộng để dễ đọc.

- `.container-fluid`  
  Dùng cho hero banner, navbar full width hoặc các section có background tràn toàn màn hình.

- `.container-md`  
  Dùng khi muốn giao diện full width trên mobile để tiết kiệm không gian, nhưng có `max-width` từ tablet trở lên để bố cục gọn gàng hơn.


````md
## Phần C: Phân tích

---

#### Câu C1 — Tùy biến Bootstrap

###### 1. Bạn muốn đổi màu `$primary` từ xanh mặc định sang `##E63946`. Giải thích quy trình (cần công cụ gì, modify file nào)

###### Công cụ cần sử dụng

Để tùy biến Bootstrap bằng SCSS, cần chuẩn bị:

- Node.js + npm
- Package `sass` (Dart Sass)
- Package `bootstrap` (cài bằng npm, không dùng CDN)

###### Cài đặt

```bash
npm install bootstrap sass
````

###### Chỉnh sửa file nào?

Chỉ cần chỉnh sửa file:

```scss
src/custom.scss
```

---

###### 2. Tại sao không nên override trực tiếp bằng CSS?

Bootstrap sử dụng biến `$primary` cho rất nhiều thành phần như:

* Button
* Badge
* Alert
* Border
* Link
* Progress bar

Nếu chỉ override bằng CSS, ví dụ sửa `.btn-primary`, thì các class khác như:

* `bg-primary`
* `alert-primary`
* `border-primary`

vẫn giữ màu mặc định của Bootstrap.

Kết quả là giao diện sẽ bị không đồng bộ màu sắc và khó bảo trì về sau.

---

## Câu C2 — So sánh

#### 1. Navbar Responsive

###### CSS thuần

```html
<nav class="navbar">
  <div class="logo">ShopBS</div>
  <button class="hamburger">☰</button>

  <ul class="nav-menu" id="menu">
    <li><a href="##">Trang chủ</a></li>
    <li><a href="##">Sản phẩm</a></li>
    <li><a href="##">Liên hệ</a></li>
  </ul>
</nav>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ##212529;
  padding: 0.75rem 1.5rem;
}

.logo {
  color: ##fff;
  font-weight: bold;
  font-size: 1.25rem;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

.nav-menu a {
  color: ##adb5bd;
  text-decoration: none;
}

.nav-menu a:hover {
  color: ##fff;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  color: ##fff;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .nav-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    background: ##212529;
    padding: 1rem;
    gap: 0.75rem;
  }

  .nav-menu.open {
    display: flex;
  }
}
```

---

###### Bootstrap

```html
<!-- ~10 dòng HTML, 0 dòng CSS, 0 dòng JS -->

<nav class="navbar navbar-expand-md navbar-dark bg-dark px-3">
  <a class="navbar-brand" href="##">ShopBS</a>

  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="##menu"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="menu">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="##">Trang chủ</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="##">Sản phẩm</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="##">Liên hệ</a>
      </li>
    </ul>
  </div>
</nav>
```

---

#### 2. Product Card

###### CSS thuần

```html
<div class="card">
  <img src="product.jpg" alt="product" />

  <div class="card-body">
    <h5>Áo thun basic</h5>

    <p>Chất cotton thoáng mát.</p>

    <span class="price">150.000đ</span>

    <button>Thêm giỏ</button>
  </div>
</div>
```

```css
.card {
  border: 1px solid ##dee2e6;
  border-radius: 0.375rem;
  overflow: hidden;
  background: ##fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
}

.card-body h5 {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 600;
}

.card-body p {
  color: ##6c757d;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
}

.price {
  color: ##dc3545;
  font-weight: bold;
  display: block;
  margin-bottom: 0.75rem;
}

button {
  background: ##212529;
  color: ##fff;
  border: none;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.875rem;
}

button:hover {
  background: ##343a40;
}
```

---

###### Bootstrap

```html
<!-- 0 dòng CSS -->

<div class="card">
  <img src="product.jpg" class="card-img-top" alt="product" />

  <div class="card-body">
    <h5 class="card-title">Áo thun basic</h5>

    <p class="card-text text-muted small">
      Chất cotton thoáng mát.
    </p>

    <p class="text-danger fw-bold">150.000đ</p>

    <button class="btn btn-dark btn-sm">
      Thêm giỏ
    </button>
  </div>
</div>
```

---

#### 3. So sánh

| Tiêu chí          | CSS thuần                  | Bootstrap                     |
| ----------------- | -------------------------- | ----------------------------- |
| Số dòng CSS       | ~75 dòng (navbar + card)   | 0 dòng                        |
| Thời gian viết    | 30–60 phút                 | 5–10 phút                     |
| Cross-browser     | Tự xử lý                   | Bootstrap hỗ trợ sẵn          |
| Khả năng tùy biến | Toàn quyền, không giới hạn | Dễ với SASS, khó nếu dùng CDN |

---

#### 4. Khi nào NÊN dùng Bootstrap?

Nên dùng Bootstrap khi:

* Cần làm prototype hoặc MVP nhanh
* Team không có designer, cần UI đồng nhất
* Cần sẵn các component phức tạp như:

  * Modal
  * Carousel
  * Accordion
  * Dropdown
* Deadline ngắn

---

#### 5. Khi nào KHÔNG NÊN dùng Bootstrap?

Không nên dùng Bootstrap khi:

* Cần thiết kế độc đáo, khác biệt theo brand
* Dự án nhỏ, chỉ có 2–3 component đơn giản
* Cần performance cao, bundle size tối thiểu
* Đang học CSS và muốn hiểu rõ bản chất bằng cách viết tay trước

```
```



