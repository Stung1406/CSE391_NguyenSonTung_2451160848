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
