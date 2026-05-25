````md
# Phần A: Đọc hiểu

## Câu A1 — Grid System

| Kích thước | < 768px      | 768px – 991px | ≥ 992px    |
| ---------- | ------------ | ------------- | ---------- |
| Class dùng | col-12       | col-md-6      | col-lg-3   |
| Mỗi box    | 12/12 = 100% | 6/12 = 50%    | 3/12 = 25% |
| Box/hàng   | 1            | 2             | 4          |

### Mobile (< 768px)
4 box được xếp chồng theo chiều dọc, mỗi box chiếm toàn bộ chiều ngang.

```text
[  Box 1  ]
[  Box 2  ]
[  Box 3  ]
[  Box 4  ]
````

### Tablet (768px – 991px)

Mỗi hàng chứa 2 box, tổng cộng có 2 hàng.

```text
[ Box 1 ][ Box 2 ]
[ Box 3 ][ Box 4 ]
```

### Desktop (≥ 992px)

Cả 4 box hiển thị trên cùng một hàng.

```text
[ Box 1 ][ Box 2 ][ Box 3 ][ Box 4 ]
```

### Câu hỏi thêm: `col-md-6` nghĩa là gì?

`col-md-6` có nghĩa là trên màn hình có kích thước từ 768px trở lên (`md`), phần tử sẽ chiếm 6/12 cột, tương đương 50% chiều ngang.

Khi màn hình nhỏ hơn 768px, Bootstrap sẽ bỏ qua class này và phần tử tự động hiển thị với chiều rộng 100%.

### Tại sao không cần viết `col-sm-12`?

Có thể dùng `col-12` thay cho `col-sm-12` vì `col-12` áp dụng cho mọi kích thước màn hình từ nhỏ đến lớn. Trong khi đó, `col-sm-12` chỉ áp dụng từ 576px trở lên.

```
```
## Câu A2 — Utilities & Components

### 1. Giải thích `d-none d-md-block`

- `d-none` áp dụng từ xs (0px) trở lên: `display: none` → ẩn element.
- `d-md-block` áp dụng từ md (>= 768px) trở lên: `display: block` → hiển thị element.

### Kết quả

| Màn hình | Kích thước | Trạng thái |
| -------- | ---------- | ---------- |
| Mobile   | < 768px    | Ẩn         |
| Tablet   | >= 768px   | Hiện       |
| Desktop  | >= 992px   | Hiện       |

### Dùng khi nào?

Thường dùng để ẩn một element trên mobile (ví dụ: sidebar, banner quảng cáo hoặc navigation desktop), nhưng hiển thị lại từ tablet trở lên.

---

### 2. Liệt kê 5 spacing utilities (margin/padding)

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

### 3. Sự khác nhau giữa `.container`, `.container-fluid` và `.container-md`

| Class              | Ý nghĩa |
| ------------------ | -------- |
| `.container`       | Có `max-width` cố định theo từng breakpoint và tự căn giữa |
| `.container-fluid` | Luôn chiếm toàn bộ chiều ngang (`100%`) ở mọi kích thước màn hình |
| `.container-md`    | Full width dưới md (`< 768px`), chuyển sang fixed width từ md trở lên |

### Khi nào nên dùng?

- `.container`  
  Dùng cho nội dung chính như bài viết, form hoặc layout cần giới hạn độ rộng để dễ đọc.

- `.container-fluid`  
  Dùng cho hero banner, navbar full width hoặc các section có background tràn toàn màn hình.

- `.container-md`  
  Dùng khi muốn giao diện full width trên mobile để tiết kiệm không gian, nhưng có `max-width` từ tablet trở lên để bố cục gọn gàng hơn.