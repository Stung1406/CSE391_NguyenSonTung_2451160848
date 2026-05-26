// ===== Câu A1: var / let / const =====

console.log("=== TESTING var / let / const ===\n");

console.log("--- Đoạn 1: Hoisting với var ---");
try {
    console.log("console.log(x):", x);  // → undefined (hoisted)
    var x = 5;
    console.log("var x = 5 → Kết quả: undefined");
} catch (e) {
    console.log("Lỗi:", e.message);
}

console.log("\n--- Đoạn 2: Temporal Dead Zone với let ---");
try {
    console.log("console.log(y):", y);  // → ReferenceError
    let y = 10;
} catch (e) {
    console.log("Lỗi: ReferenceError -", e.message);
    console.log("Giải thích: let không hoisting, nằm trong TDZ");
}

console.log("\n--- Đoạn 3: const không thể reassign ---");
try {
    const z = 15;
    z = 20;  // → TypeError
    console.log(z);
} catch (e) {
    console.log("Lỗi: TypeError -", e.message);
    console.log("Giải thích: const biến là immutable");
}

console.log("\n--- Đoạn 4: const có thể modify array ---");
const arr = [1, 2, 3];
arr.push(4);  // ✓ OK - modify phần tử
console.log("const arr = [1, 2, 3]");
console.log("arr.push(4) → Kết quả:", arr);
console.log("Giải thích: const ngăn reassign, không ngăn modify");

console.log("\n--- Đoạn 5: Block scope với let ---");
let a = 1;
{
    let a = 2;
    console.log("Trong block: a =", a);  // → 2
}
console.log("Ngoài block: a =", a);      // → 1
console.log("Giải thích: let có block scope, không like var (function scope)");

console.log("\n=== SỰ KHÁC BIỆT: var vs let vs const ===\n");

let comparison = `
┌─────────┬──────────┬──────────┬──────────┐
│ Tính năng │   var    │   let    │  const   │
├─────────┼──────────┼──────────┼──────────┤
│ Scope   │ Function │  Block   │  Block   │
│ Hoisting│   Yes    │  TDZ     │  TDZ     │
│ Reassign│   Yes    │   Yes    │   No     │
│ Redecl  │   Yes    │   No     │   No     │
│ Use     │  Tránh   │ Thường   │Hằng số   │
└─────────┴──────────┴──────────┴──────────┘
`;
console.log(comparison);

console.log("\n=== BEST PRACTICES ===");
console.log("✓ Dùng const mặc định");
console.log("✓ Dùng let khi cần reassign");
console.log("✗ Tránh dùng var");

