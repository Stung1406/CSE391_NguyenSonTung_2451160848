# PHẦN A: KIỂM TRA ĐỌC HIỂU

---

# Câu A1 — Sync vs Async

## Thứ tự Output

```text
1 - Start
4 - End
3 - Promise
6 - Promise 2
2 - Timeout 0ms
7 - Nested timeout
5 - Timeout 100ms
```

## Cơ chế hoạt động

### Các hàng đợi trong JavaScript

| Thành phần      | Loại       | Ví dụ                           | Mức ưu tiên                     |
| --------------- | ---------- | ------------------------------- | ------------------------------- |
| Call Stack      | Đồng bộ    | `console.log()`                 | Chạy ngay                       |
| Microtask Queue | Async nhẹ  | `Promise.then()`                | Sau Call Stack, trước Macrotask |
| Macrotask Queue | Async nặng | `setTimeout()`, `setInterval()` | Sau khi Microtask Queue trống   |

### Event Loop

JavaScript là ngôn ngữ **single-threaded** nên chỉ thực hiện một tác vụ tại một thời điểm.

Quy trình hoạt động:

1. Chạy toàn bộ code trong **Call Stack**.
2. Khi Call Stack rỗng, thực thi toàn bộ **Microtask Queue**.
3. Sau khi Microtask Queue trống, lấy một tác vụ từ **Macrotask Queue** để thực thi.
4. Lặp lại quá trình trên.

### Microtask Queue

Chứa các tác vụ như:

```javascript
Promise.then();
Promise.catch();
Promise.finally();
queueMicrotask();
```

Đặc điểm:

- Được ưu tiên cao hơn Macrotask.
- Luôn được thực thi hết trước khi chuyển sang Macrotask.

### Macrotask Queue

Chứa các tác vụ như:

```javascript
setTimeout();
setInterval();
setImmediate();
```

Đặc điểm:

- Chạy sau khi Microtask Queue đã trống.
- Mỗi lần chỉ xử lý một tác vụ.

---

# Câu A2 — Fetch API

## `await fetch(...)` trả về gì? Tại sao cần `await`?

```javascript
const response = await fetch(url);
```

### Fetch trả về gì?

`fetch()` trả về một **Promise** chứa đối tượng `Response`.

### Vì sao cần `await`?

`await` giúp chương trình chờ Promise hoàn thành trước khi tiếp tục thực thi.

Nếu không dùng:

```javascript
const response = fetch(url);
```

thì `response` chỉ là:

```javascript
Promise { <pending> }
```

chứ chưa phải đối tượng `Response`.

---

## `response.ok` khi nào là `false`?

`response.ok` sẽ là `false` khi HTTP Status Code nằm ngoài khoảng:

```text
200 → 299
```

### Ví dụ

| Status Code | Ý nghĩa               |
| ----------- | --------------------- |
| 404         | Not Found             |
| 403         | Forbidden             |
| 500         | Internal Server Error |

Ví dụ kiểm tra:

```javascript
if (!response.ok) {
  throw new Error("Request failed");
}
```

---

## Tại sao `response.json()` cần `await` lần nữa?

```javascript
const data = await response.json();
```

Nguyên nhân:

- `response.json()` cũng trả về một Promise.
- Trình duyệt cần:
  - Đọc toàn bộ dữ liệu từ network stream.
  - Parse dữ liệu JSON thành object JavaScript.

Do đó cần tiếp tục dùng `await` để chờ quá trình này hoàn tất.

---

## `try...catch` bắt những lỗi gì?

### 1. Network Error

Ví dụ:

- Mất kết nối Internet.
- Sai địa chỉ URL.
- Server không phản hồi.

```javascript
try {
  const response = await fetch(url);
} catch (error) {
  console.error(error);
}
```

---

### 2. HTTP Error (do lập trình viên tự throw)

Mặc định:

```javascript
fetch();
```

không tự động báo lỗi với các mã:

```text
404
500
403
```

Do đó thường cần:

```javascript
if (!response.ok) {
  throw new Error("HTTP Error");
}
```

Lỗi này sẽ được `catch` xử lý.

---

### 3. JSON Parse Error

Ví dụ server trả về:

```html
<h1>Error</h1>
```

thay vì:

```json
{
  "success": true
}
```

Khi đó:

```javascript
await response.json();
```

sẽ phát sinh lỗi và được bắt bởi `catch`.

---

# Câu A3 — Promise States

## Sơ đồ trạng thái Promise

```text
                    ┌─────────────┐
                    │   PENDING   │
                    │ Đang chờ xử lý │
                    └──────┬──────┘
                           │
              ┌────────────┴────────────┐
              │                         │
              ▼                         ▼

     ┌─────────────────┐       ┌─────────────────┐
     │   FULFILLED     │       │    REJECTED     │
     │   (resolve)     │       │    (reject)     │
     │  .then() chạy   │       │  .catch() chạy  │
     └─────────────────┘       └─────────────────┘
```

---

## Các trạng thái của Promise

### Pending

Promise vừa được tạo và chưa có kết quả.

```javascript
const promise = new Promise(() => {});
```

---

### Fulfilled

Tác vụ hoàn thành thành công.

```javascript
Promise.resolve("Success").then((result) => console.log(result));
```

Khi đó:

```javascript
.then()
```

sẽ được thực thi.

---

### Rejected

Tác vụ thất bại.

```javascript
Promise.reject("Error").catch((error) => console.log(error));
```

Khi đó:

```javascript
.catch()
```

sẽ được thực thi.

---

# Callback Hell

## Khái niệm

Callback Hell xảy ra khi nhiều hàm bất đồng bộ lồng nhau nhiều cấp, khiến mã nguồn:

- Khó đọc.
- Khó bảo trì.
- Khó xử lý lỗi.

---

## Ví dụ Callback Hell

```javascript
loginUser(
  "user@email.com",
  "123456",
  function (user) {
    getUserProfile(
      user.id,
      function (profile) {
        getOrders(
          profile.id,
          function (orders) {
            getOrderDetail(
              orders[0].id,
              function (detail) {
                console.log("Chi tiết đơn hàng:", detail);
              },
              function (err) {
                console.error("Lỗi lấy chi tiết:", err);
              },
            );
          },
          function (err) {
            console.error("Lỗi lấy đơn hàng:", err);
          },
        );
      },
      function (err) {
        console.error("Lỗi lấy profile:", err);
      },
    );
  },
  function (err) {
    console.error("Lỗi đăng nhập:", err);
  },
);
```

---

# Refactor bằng Async/Await

Sử dụng `async/await` giúp mã nguồn:

- Dễ đọc hơn.
- Dễ bảo trì hơn.
- Xử lý lỗi tập trung bằng `try...catch`.

```javascript
async function loadOrderDetail() {
  try {
    const user = await loginUser("user@email.com", "123456");

    const profile = await getUserProfile(user.id);

    const orders = await getOrders(profile.id);

    const detail = await getOrderDetail(orders[0].id);

    console.log("Chi tiết đơn hàng:", detail);
  } catch (err) {
    console.error("Lỗi:", err.message);
  }
}
```

## Lợi ích của Async/Await

- Cú pháp gần giống code đồng bộ.
- Giảm Callback Hell.
- Dễ debug.
- Dễ quản lý luồng xử lý.
- Dễ mở rộng và bảo trì hệ thống.

---

# Tổng Kết

| Chủ đề          | Kiến thức chính                               |
| --------------- | --------------------------------------------- |
| Sync vs Async   | Event Loop quản lý luồng thực thi bất đồng bộ |
| Microtask Queue | Chứa Promise, ưu tiên cao                     |
| Macrotask Queue | Chứa setTimeout, setInterval                  |
| Fetch API       | Trả về Promise chứa Response                  |
| response.ok     | Kiểm tra trạng thái HTTP thành công           |
| response.json() | Trả về Promise nên cần await                  |
| Promise States  | Pending → Fulfilled hoặc Rejected             |
| Callback Hell   | Callback lồng nhau quá nhiều                  |
| Async/Await     | Viết code bất đồng bộ dễ đọc hơn              |
