## BÀI LÀM HTML5 & SEMANTIC HTML

---

## Câu A1. Mô tả 5 bước khi truy cập https://shopee.vn

###### Bước 1: Gửi yêu cầu từ thiết bị người dùng

Người dùng nhập địa chỉ `https://shopee.vn` trên trình duyệt.

Yêu cầu được gửi từ:

```
Laptop → Router WiFi
```

---

###### Bước 2: Đi qua nhà mạng và Internet

Yêu cầu tiếp tục được truyền:

```
Router → Nhà mạng (VNPT, Viettel, FPT, ...)
→ Hệ thống Internet quốc tế
→ Data Center của Shopee
```

---

###### Bước 3: Server xử lý yêu cầu

Server nhận request và xử lý:

```
Người dùng muốn xem Product Feed
```

Server truy xuất dữ liệu cần thiết từ hệ thống.

---

###### Bước 4: Trả dữ liệu về trình duyệt

Kết quả được gửi ngược lại:

```
Server → Internet → Nhà mạng
→ Router → Laptop
```

---

###### Bước 5: Trình duyệt hiển thị giao diện

Trình duyệt nhận:

* HTML
* CSS
* JavaScript

Sau đó render giao diện và hiển thị Product Feed cho người dùng.

---

## Câu A2. Phân tích Semantic HTML

#### Đoạn code ban đầu

```html
<div class="header">
    <div class="logo">ShopTLU</div>

    <div class="menu">
        <div><a href="/">Trang chủ</a></div>
        <div><a href="/products">Sản phẩm</a></div>
    </div>
</div>

<div class="main">
    <div class="product">
        <div class="title">iPhone 16 Pro</div>
        <div class="price">25.990.000đ</div>
        <div class="image">
            <img src="iphone.jpg">
        </div>
    </div>
</div>

<div class="footer">
    © 2026 ShopTLU
</div>
```

---

#### Các lỗi Semantic

###### Lỗi 1: Không sử dụng `<header>`

```html
<div class="header">
```

Nên thay bằng:

```html
<header>
```

---

###### Lỗi 2: Không sử dụng `<nav>`

```html
<div class="menu">
```

Nên thay bằng:

```html
<nav>
```

---

###### Lỗi 3: Không sử dụng `<main>`

```html
<div class="main">
```

Nên thay bằng:

```html
<main>
```

---

###### Lỗi 4: Không sử dụng `<article>`

```html
<div class="product">
```

Sản phẩm là một nội dung độc lập nên nên dùng:

```html
<article>
```

---

###### Lỗi 5: Không dùng heading cho tiêu đề

```html
<div class="title">
```

Nên thay bằng:

```html
<h2>
```

---

###### Lỗi 6: Không dùng thẻ phù hợp cho nội dung văn bản

```html
<div class="price">
```

Nên thay bằng:

```html
<p>
```

---

###### Lỗi 7: Không sử dụng `<footer>`

```html
<div class="footer">
```

Nên thay bằng:

```html
<footer>
```

---

#### Phiên bản đã sửa

```html
<header>
    <div class="logo">ShopTLU</div>

    <nav>
        <a href="/">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
    </nav>
</header>

<main>
    <article class="product">
        <h2>iPhone 16 Pro</h2>
        <p class="price">25.990.000đ</p>
        <img src="iphone.jpg" alt="iPhone 16 Pro">
    </article>
</main>

<footer>
    <p>&copy; 2026 ShopTLU</p>
</footer>
```

---

## Câu A3. So sánh `<div>` và `<span>`

#### Minh họa

```text
Hộp 1
Text A Text B

Hộp 2
Text C Text D

Hộp 3
```

---

#### Khác nhau

###### `<div>`

* Là phần tử block.
* Chiếm toàn bộ chiều ngang.
* Tự động xuống dòng.

Ví dụ:

```html
<div>Hộp 1</div>
<div>Hộp 2</div>
```

---

###### `<span>`

* Là phần tử inline.
* Chỉ chiếm đúng kích thước nội dung.
* Không tự xuống dòng.

Ví dụ:

```html
<span>Text A</span>
<span>Text B</span>
```

---

## Câu A4. Vai trò của `<thead>`, `<tbody>`, `<tfoot>`

#### `<thead>`

Phần đầu bảng.

Thường chứa:

* Tiêu đề bảng
* Tên các cột

Ví dụ:

```html
<thead>
    <tr>
        <th>Tên</th>
        <th>Tuổi</th>
    </tr>
</thead>
```

---

#### `<tbody>`

Phần thân bảng.

Chứa dữ liệu chính của bảng.

Ví dụ:

```html
<tbody>
    <tr>
        <td>Tùng</td>
        <td>20</td>
    </tr>
</tbody>
```

---

#### `<tfoot>`

Phần cuối bảng.

Thường dùng để:

* Ghi chú
* Tổng kết
* Tổng tiền

Ví dụ:

```html
<tfoot>
    <tr>
        <td colspan="2">Tổng cộng</td>
    </tr>
</tfoot>
```

---

## Bài B3. Các lỗi trong tài liệu HTML

| STT | Lỗi                     | Cách sửa                     |
| --- | ----------------------- | ---------------------------- |
| 1   | Sai DOCTYPE             | `<!DOCTYPE html>`            |
| 2   | Thiếu thuộc tính lang   | `lang="vi"`                  |
| 3   | Thiếu thẻ đóng title    | `</title>`                   |
| 4   | Sai charset             | `UTF-8`                      |
| 5   | Thẻ h1 đóng sai         | `</h1>`                      |
| 6   | Thẻ a chưa đóng         | Thêm `</a>`                  |
| 7   | Link nội bộ chưa đúng   | `##home`, `##products`         |
| 8   | img thiếu alt           | Thêm thuộc tính `alt`        |
| 9   | Đóng thẻ b không hợp lý | Dùng `<strong>`              |
| 10  | Dùng hai thẻ main       | Đổi main thứ hai thành aside |

---

## Bài B4. Phân tích Semantic HTML trên Shopee

#### Các thẻ Semantic được sử dụng

###### `<header>`

Chứa:

* Logo
* Thanh tìm kiếm
* Menu điều hướng

---

###### `<nav>`

Chứa:

* Kênh người bán
* Tải ứng dụng
* Thông báo
* Điều hướng người dùng

---

###### `<form>`

Dùng cho:

* Ô tìm kiếm sản phẩm

---

#### Các vị trí có thể cải thiện

Một số khu vực có thể dùng:

```html
<section>
```

hoặc

```html
<article>
```

thay vì chỉ dùng:

```html
<div>
```

---

#### Phân tích bảng

Shopee không sử dụng bảng (`table`) để xây dựng giao diện chính.

Lý do:

* Dùng Flexbox
* Dùng CSS Grid
* Responsive tốt hơn

---

## Câu C1. Thiết kế cấu trúc trang chi tiết sản phẩm

(Mã nguồn giữ nguyên như đề bài)

```html
<!-- Code HTML -->
```

---

## Câu C2. Có nên chỉ dùng div + class?

#### Quan điểm

Ý kiến:

> Chỉ cần dùng div kèm class là đủ.

Nghe có vẻ đơn giản nhưng không phải lựa chọn tối ưu trong phát triển web hiện đại.

---

#### 1. SEO

Google không chỉ đọc nội dung mà còn phân tích cấu trúc HTML.

Các thẻ semantic như:

```html
<header>
<main>
<section>
<article>
<nav>
```

giúp công cụ tìm kiếm hiểu rõ vai trò của từng khu vực.

Nếu toàn bộ trang chỉ dùng:

```html
<div>
```

Google phải suy đoán ý nghĩa của từng phần.

---

#### 2. Accessibility

Các phần mềm hỗ trợ người khuyết tật như:

* NVDA
* VoiceOver
* JAWS

phụ thuộc rất nhiều vào Semantic HTML.

Nhờ đó người dùng có thể nhanh chóng xác định:

* Menu điều hướng
* Nội dung chính
* Chân trang

---

#### Ví dụ

Đúng:

```html
<nav aria-label="breadcrumb">
```

Screen Reader có thể đọc:

```
Breadcrumb Navigation
```

Người dùng biết ngay vị trí hiện tại.

---

Sai:

```html
<div class="breadcrumb">
```

Thông tin ngữ nghĩa bị mất hoàn toàn.

---

#### Vai trò của div

`<div>` vẫn rất quan trọng.

Nó phù hợp cho:

* Layout Flexbox
* Layout Grid
* Wrapper
* Styling

Ví dụ:

```html
<div class="container">
```

---

#### Kết luận

Semantic HTML không nhằm thay thế `<div>`.

Mục tiêu là:

* Dùng đúng thẻ cho đúng mục đích.
* Tăng SEO.
* Tăng khả năng tiếp cận.
* Giúp code dễ bảo trì và chuyên nghiệp hơn.

# Phần D link video https://youtu.be/S7Rf1a0JI9g