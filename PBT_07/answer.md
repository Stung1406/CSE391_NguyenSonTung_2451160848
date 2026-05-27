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


##Câu C1

console.log("=== CODE CÓ LỖI ===\n");

// Test
const gia = tinhGiaGiamGia("100000", 20)  // LỖI 2: Input là string, không phải number
console.log("Giá sau giảm: " + gia + "đ")

const gia2 = tinhGiaGiamGia(50000, 110)  // LỖI 3: Phần trăm > 100 không bị validate
console.log("Giá: " + gia2)

for (var i = 0; i < 5; i++) {     // LỖI 4: Dùng var gây closure problem
    setTimeout(function() {
        console.log("Item " + i)   // Sẽ in Item 5 năm lần
    }, 1000)
}
*/

console.log("=== PHIÊN BẢN ĐÃ SỬA ===\n");

// PHIÊN BẢN ĐÃ SỬA:
function tinhGiaGiamGia(giaBan, phanTramGiam) {
    // LỖI 3: Validate input là number
    if (typeof giaBan !== 'number' || typeof phanTramGiam !== 'number') {
        return "Lỗi: Input phải là số";
    }
    
    // Validate phần trăm giảm
    if (phanTramGiam < 0 || phanTramGiam > 100) {
        return "Phần trăm giảm không hợp lệ";
    }
    
    let giamGia = giaBan * phanTramGiam / 100;  // Thêm semicolon
    let giaSauGiam = giaBan - giamGia;
    
    // LỖI 1: FIX - Dùng === thay vì =
    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }
    
    return giaSauGiam;
}

// Test - LỖI 2: FIX - Đúng type (number, không string)
console.log("Test 1:");
const gia = tinhGiaGiamGia(100000, 20);
console.log("Giá sau giảm: " + gia + "đ");

console.log("\nTest 2:");
const gia2 = tinhGiaGiamGia(50000, 110);
console.log("Giá: " + gia2);

// LỖI 4: FIX - Dùng let hoặc const + IIFE hoặc arrow function
console.log("\nTest 3 - setTimeout with let (cách 1):");
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}

// Cách sửa khác: IIFE
console.log("\nTest 4 - setTimeout with IIFE (cách 2):");
for (var i = 0; i < 5; i++) {
    (function(index) {
        setTimeout(function() {
            console.log("Item " + index);
        }, 1500);
    })(i);
}

// Cách sửa khác: Arrow function
console.log("\nTest 5 - setTimeout with arrow function (cách 3):");
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log("Item " + i);
    }, 2000);
}

console.log("\n=== GIẢI THÍCH CÁC LỖI ===\n");

let errors = [
    {
        num: 1,
        loi: "if (giaSauGiam = 0)",
        description: "Dùng = (assignment) thay vì == hoặc ===",
        impact: "Gán giá trị 0 cho biến thay vì so sánh",
        fix: "if (giaSauGiam === 0)"
    },
    {
        num: 2,
        loi: 'tinhGiaGiamGia("100000", 20)',
        description: 'Input là string "100000" thay vì number 100000',
        impact: "Type coercion gây kết quả không đúng",
        fix: "tinhGiaGiamGia(100000, 20)"
    },
    {
        num: 3,
        loi: "tinhGiaGiamGia(50000, 110)",
        description: "Phần trăm 110 > 100 không hợp lệ nhưng không validate",
        impact: "Giá trị âm hoặc logic sai",
        fix: "Thêm validate: phanTramGiam <= 100"
    },
    {
        num: 4,
        loi: "for (var i = 0; i < 5; i++) { setTimeout(...) }",
        description: "var i scope toàn hàm, không phải block scope",
        impact: "Khi callback chạy, i đã là 5 → in Item 5 năm lần",
        fix: "Dùng let thay var, hoặc IIFE, hoặc arrow function"
    },
    {
        num: 5,
        loi: "Thiếu semicolon",
        description: "Thiếu semicolon sau các statement",
        impact: "Có thể gây automatic semicolon insertion sai",
        fix: "Thêm semicolon sau mỗi statement"
    },
    {
        num: 6,
        loi: "Không validate input",
        description: "Không kiểm tra kiểu dữ liệu input",
        impact: "Kết quả sai nếu user truyền sai loại dữ liệu",
        fix: "Thêm typeof check"
    }
];

for (let i = 0; i < errors.length; i++) {
    console.log(`LỖI ${errors[i].num}: ${errors[i].loi}`);
    console.log(`  Mô tả: ${errors[i].description}`);
    console.log(`  Ảnh hưởng: ${errors[i].impact}`);
    console.log(`  Sửa: ${errors[i].fix}`);
    console.log();
}
