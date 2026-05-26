````md
# Câu A1 (5đ) — var / let / const

Đọc chương 03. **Không chạy code**, dự đoán output cho từng đoạn:

---

## Đoạn 1

```javascript
console.log(x);
var x = 5;
````

### Dự đoán output

```javascript
undefined
```

### Giải thích

* `var` được **hoisting** (kéo lên đầu phạm vi).
* Biến `x` được khai báo trước nhưng giá trị chưa được gán ngay.

JavaScript hiểu gần giống:

```javascript
var x;
console.log(x);
x = 5;
```

---

## Đoạn 2

```javascript
console.log(y);
let y = 10;
```

### Dự đoán output

```javascript
ReferenceError
```

### Giải thích

* `let` cũng được hoisting nhưng nằm trong **Temporal Dead Zone (TDZ)**.
* Không được truy cập biến trước khi khai báo.

Lỗi kiểu:

```javascript
ReferenceError: Cannot access 'y' before initialization
```

---

## Đoạn 3

```javascript
const z = 15;
z = 20;
console.log(z);
```

### Dự đoán output

```javascript
TypeError
```

### Giải thích

* `const` không cho phép gán lại giá trị sau khi khởi tạo.

Lỗi kiểu:

```javascript
TypeError: Assignment to constant variable.
```

---

## Đoạn 4

```javascript
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
```

### Dự đoán output

```javascript
[1, 2, 3, 4]
```

### Giải thích

* `const` không cho đổi sang mảng khác.
* Nhưng vẫn được phép thay đổi nội dung bên trong mảng.

Ví dụ bị lỗi:

```javascript
arr = [5, 6];
```

Nhưng:

```javascript
arr.push(4);
```

thì hợp lệ.

---

## Đoạn 5

```javascript
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
```

### Dự đoán output

```javascript
Trong block: 2
Ngoài block: 1
```

### Giải thích

* `let` có **block scope** (phạm vi khối).
* Biến `a` bên trong `{}` là biến khác với `a` bên ngoài.

```
```
