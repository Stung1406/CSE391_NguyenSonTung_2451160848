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

## Câu A2 (5đ) — Data Types & Coercion

### Dự đoán kết quả:

```javascript
console.log(typeof null);              // → "object" (lỗi trong JS)
console.log(typeof undefined);         // → "undefined"
console.log(typeof NaN);               // → "number" (NaN là số)
console.log("5" + 3);                  // → "53" (string concatenation)
console.log("5" - 3);                  // → 2 (string coercion to number)
console.log("5" * "3");                // → 15
console.log(true + true);              // → 2 (boolean → number)
console.log([] + []);                  // → "" (empty string)
console.log([] + {});                  // → "[object Object]"
console.log({} + []);                  // → 0 hoặc "[object Object]"
```

**Giải thích khác nhau giữa `"5" + 3` và `"5" - 3`:**
- `+` là operator dùng cho cả string concatenation và addition → ưu tiên string concatenation
- `-` chỉ dùng cho subtraction → buộc coerce string thành number

---

## Câu A3 (5đ) — So sánh == vs ===

### Dự đoán true/false:

```javascript
console.log(5 == "5");                 // → true (loose equality, type coercion)
console.log(5 === "5");                // → false (strict equality)
console.log(null == undefined);        // → true (special case)
console.log(null === undefined);       // → false
console.log(NaN == NaN);               // → false (NaN không bằng chính nó)
console.log(0 == false);               // → true (type coercion)
console.log(0 === false);              // → false
console.log("" == false);              // → true
```

**Quy tắc:** Luôn dùng `===` vì:
- Tránh type coercion bất ngờ
- Code rõ ràng hơn
- Performance tốt hơn (không cần convert type)

---

## Câu A4 (5đ) — Truthy & Falsy

**Các giá trị Falsy trong JavaScript:**
- `false`
- `0`
- `-0`
- `0n` (BigInt zero)
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

### Dự đoán kết quả:

```javascript
if ("0") console.log("A"); // → In "A" ("0" là truthy)
if ("") console.log("B");  // → Không in (empty string falsy)
if ([]) console.log("C");  // → In "C" (array là truthy)
if ({}) console.log("D");  // → In "D" (object là truthy)
if (null) console.log("E"); // → Không in
if (0) console.log("F");                // → Không in
if (-1) console.log("G");               // → In "G" (-1 truthy)
if (" ") console.log("H");              // → In "H" (space string truthy)
```

---

## Câu A5 (5đ) — Template Literals

### Viết lại bằng template literals:

```javascript
// Cách 1:
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2:
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cách 3:
var html = `<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>`;
```

**Ưu điểm template literals:**
- Dễ đọc hơn
- Hỗ trợ multi-line
- Hỗ trợ interpolation
