## PHIẾU BÀI TẬP 08 - Answers (Phần A + C)

#### PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)

###### Câu A1 (5đ) — Function Declaration vs Expression vs Arrow

######## 1. Function Declaration
```javascript
function tinhThueBaoHiem(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thue,
        thuc_nhan: luong - thue
    };
}
```

######## 2. Function Expression
```javascript
const tinhThueBaoHiem = function(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thue,
        thuc_nhan: luong - thue
    };
};
```

######## 3. Arrow Function
```javascript
const tinhThueBaoHiem = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thue,
        thuc_nhan: luong - thue
    };
};
```

**Giải thích hoisting:**
- Function Declaration: hoisting hoàn toàn (có thể gọi trước khi khai báo)
- Function Expression & Arrow: không hoisting (lỗi nếu gọi trước)

---

###### Câu A2 (5đ) — Scope & Closure

######## Dự đoán Output:
```
Đoạn 1:
1
2
3
2
2

Đoạn 2 (sau 200ms):
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2
```

**Giải thích:**
- Đoạn 1: Counter là closure, `count` được giữ lại giữa các lần gọi
- Đoạn 2: `var` có function scope (hoisting, tất cả = 3), `let` có block scope (mỗi vòng lặp riêng)

---

###### Câu A3 (5đ) — Array Methods

```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

1. nums.filter(x => x % 2 === 0)
2. nums.map(x => x * 3)
3. nums.reduce((sum, x) => sum + x, 0)
4. nums.find(x => x > 7)
5. nums.some(x => x > 10)
6. nums.every(x => x > 0)
7. nums.map((x, i) => `Số ${x} là ${x % 2 === 0 ? 'chẵn' : 'lẻ'}`)
8. [...nums].reverse()
```

---

###### Câu A4 (5đ) — Object Destructuring & Spread

```javascript
// Destructuring output:
// iPhone 16 25990000 8 Titan
// ReferenceError: specs is not defined (destructured, không còn specs)

// Spread output:
// 23990000
// true
// 25990000 (gốc không đổi, spread tạo copy shallow)

// Spread gotcha output:
// 16 (vì specs là object, spread chỉ copy reference, không deep clone)
```

---


#### PHẦN C — SUY LUẬN (20 điểm)

###### Câu C1 (10đ) — Refactor Code

```javascript
function processOrders(orders) {
    return orders
        .filter(o => o.status === "completed" && o.total > 100000)
        .map(o => ({
            ...o,
            discount: o.total * 0.1,
            finalTotal: o.total * 0.9
        }))
        .sort((a, b) => b.finalTotal - a.finalTotal);
}
```

---

###### Câu C2 (10đ) — Thiết kế API - miniArray

```javascript
const miniArray = {
    map(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }
        return result;
    },
    
    filter(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    },
    
    reduce(arr, fn, initialValue) {
        let accumulator = initialValue;
        for (let i = 0; i < arr.length; i++) {
            accumulator = fn(accumulator, arr[i], i, arr);
        }
        return accumulator;
    }
};

// Test
console.log(miniArray.map([1, 2, 3], x => x * 2));
console.log(miniArray.filter([1, 2, 3, 4], x => x > 2));
console.log(miniArray.reduce([1, 2, 3, 4], (a, b) => a + b, 0));
```

---