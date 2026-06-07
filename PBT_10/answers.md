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

# PHẦN C — PHÂN TÍCH

---

## Câu C1. Error Handling Strategy

### 1. Tổng quan

Trong ứng dụng web thực tế, việc xử lý lỗi không chỉ dừng lại ở `try...catch`. Hệ thống cần phân biệt nhiều loại lỗi khác nhau để đưa ra phản hồi phù hợp cho người dùng:

- Lỗi mạng (Network Error)
- Lỗi từ API (HTTP Error)
- Request Timeout
- Retry khi request thất bại

---

## 1.1. Network Errors

### Mô tả

Khi mất kết nối Internet hoặc server không phản hồi, `fetch()` sẽ phát sinh:

```javascript
TypeError: Failed to fetch
```

Cần bắt riêng loại lỗi này để hiển thị thông báo phù hợp và cho phép người dùng thử lại.

### Ví dụ

```javascript
async function getProducts() {
  try {
    const res = await fetch("/api/products");
    const data = await res.json();
    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      showToast("Mất kết nối mạng. Vui lòng kiểm tra internet.");
    } else {
      showToast("Có lỗi xảy ra: " + error.message);
    }

    return null;
  }
}
```

### Kết luận

- Network Error không có HTTP Status Code.
- Cần xử lý riêng để tránh thông báo lỗi chung chung.

---

## 1.2. API Errors (HTTP Status Code)

### Mô tả

`fetch()` không tự động throw exception khi nhận mã lỗi HTTP.

Ví dụ:

```javascript
404 Not Found
500 Internal Server Error
```

Do đó cần kiểm tra:

```javascript
response.ok;
```

### Xử lý từng nhóm lỗi

| Status  | Ý nghĩa           | Cách xử lý                 |
| ------- | ----------------- | -------------------------- |
| 400     | Bad Request       | Báo dữ liệu không hợp lệ   |
| 401     | Unauthorized      | Xóa token, chuyển về Login |
| 403     | Forbidden         | Thông báo không đủ quyền   |
| 404     | Not Found         | Không tìm thấy dữ liệu     |
| 429     | Too Many Requests | Đợi rồi thử lại            |
| 500-503 | Server Error      | Thông báo lỗi hệ thống     |

### Ví dụ

```javascript
async function handleResponse(response) {
  if (response.ok) return response.json();

  switch (response.status) {
    case 400:
      throw new Error("Dữ liệu gửi lên không hợp lệ.");

    case 401:
      localStorage.removeItem("token");
      window.location.href = "/login";
      throw new Error("Phiên đăng nhập hết hạn.");

    case 403:
      throw new Error("Bạn không có quyền thực hiện thao tác này.");

    case 404:
      throw new Error("Không tìm thấy sản phẩm.");

    case 429:
      const retryAfter = response.headers.get("Retry-After") || 10;
      throw new Error(`Quá nhiều request. Thử lại sau ${retryAfter} giây.`);

    case 500:
    case 502:
    case 503:
      throw new Error("Lỗi server. Vui lòng thử lại sau.");

    default:
      throw new Error(`HTTP ${response.status}`);
  }
}
```

### Kết luận

Việc xử lý riêng từng mã lỗi giúp người dùng hiểu chính xác nguyên nhân sự cố thay vì chỉ nhận được thông báo chung.

---

## 1.3. Timeout với AbortController

### Vấn đề

Mặc định `fetch()` có thể chờ rất lâu nếu server phản hồi chậm.

### Giải pháp

Sử dụng `AbortController` để tự động hủy request sau một khoảng thời gian xác định.

### Ví dụ

```javascript
async function fetchWithTimeout(url, options = {}, ms = 10000) {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => controller.abort(), ms);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });

    return response;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error(`Request timeout sau ${ms / 1000} giây.`);
    }

    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}
```

### Kết luận

Timeout giúp:

- Tránh chờ vô hạn.
- Cải thiện trải nghiệm người dùng.
- Chủ động xử lý server phản hồi chậm.

---

## 1.4. Retry Logic

### Mục tiêu

Khi gặp lỗi mạng hoặc lỗi server tạm thời, hệ thống sẽ tự động gửi lại request.

### Chiến lược

- Retry tối đa `maxRetries` lần.
- Không retry các lỗi 4xx.
- Dùng Exponential Backoff:

| Lần thử | Thời gian chờ |
| ------- | ------------- |
| 1       | 1 giây        |
| 2       | 2 giây        |
| 3       | 4 giây        |

### Ví dụ

```javascript
async function fetchWithRetry(url, options = {}, maxRetries = 3) {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetchWithTimeout(url, options, 10000);

      if (response.status >= 400 && response.status < 500) {
        return response;
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return response;
    } catch (error) {
      lastError = error;

      if (attempt < maxRetries) {
        const delay = 1000 * Math.pow(2, attempt - 1);

        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw new Error(`Thất bại sau ${maxRetries} lần thử.`);
}
```

### Kết luận

Retry giúp tăng độ ổn định của hệ thống khi gặp sự cố tạm thời từ mạng hoặc server.

---

# Câu C2. Promise.all vs Promise.allSettled vs Promise.race vs Promise.any

## 2.1. So sánh tổng quan

| Method               | Khi resolve                 | Khi reject              | Use Case                          |
| -------------------- | --------------------------- | ----------------------- | --------------------------------- |
| Promise.all()        | Tất cả thành công           | Chỉ cần 1 promise lỗi   | Dữ liệu phụ thuộc nhau            |
| Promise.allSettled() | Sau khi tất cả hoàn thành   | Không bao giờ reject    | Các tác vụ độc lập                |
| Promise.race()       | Promise hoàn thành đầu tiên | Promise đầu tiên bị lỗi | Timeout, chọn phản hồi nhanh nhất |
| Promise.any()        | Promise thành công đầu tiên | Tất cả đều lỗi          | Nhiều nguồn dự phòng              |

---

## 2.2. Promise.all()

### Đặc điểm

- Fail Fast.
- Chỉ thành công khi tất cả promise đều thành công.

### Tình huống sử dụng

Trang Checkout cần:

- Thông tin người dùng
- Giỏ hàng
- Địa chỉ giao hàng

Nếu thiếu một trong ba dữ liệu thì không thể hiển thị trang.

```javascript
const [user, cart, address] = await Promise.all([
  getUser(),
  getCart(),
  getAddress(),
]);
```

### Kết luận

Dùng khi tất cả dữ liệu đều bắt buộc phải có.

---

## 2.3. Promise.allSettled()

### Đặc điểm

- Không fail fast.
- Luôn trả kết quả của tất cả promise.

### Tình huống sử dụng

Dashboard gồm:

- Widget đơn hàng
- Widget gợi ý sản phẩm
- Widget thời tiết

Một widget lỗi không nên làm hỏng toàn bộ trang.

```javascript
const results = await Promise.allSettled([
  loadOrders(),
  loadRecommendations(),
  loadWeather(),
]);
```

### Kết luận

Phù hợp với các module hoặc widget hoạt động độc lập.

---

## 2.4. Promise.race()

### Đặc điểm

Promise nào hoàn thành trước sẽ quyết định kết quả.

### Tình huống sử dụng

Giới hạn thời gian phản hồi của API thanh toán.

```javascript
const result = await Promise.race([callPaymentAPI(), timeout(5000)]);
```

### Kết luận

Thường dùng để:

- Timeout
- Chọn server phản hồi nhanh nhất

---

## 2.5. Promise.any()

### Đặc điểm

Trả về promise thành công đầu tiên.

Chỉ thất bại khi tất cả promise đều thất bại.

### Tình huống sử dụng

Tải ảnh từ nhiều CDN dự phòng.

```javascript
const imageUrl = await Promise.any([loadCDN1(), loadCDN2(), loadCDN3()]);
```

### Kết luận

Thích hợp cho hệ thống có nhiều nguồn dữ liệu dự phòng.

---

## Tổng Kết

| Nhu cầu                              | Giải pháp            |
| ------------------------------------ | -------------------- |
| Cần đủ tất cả dữ liệu                | Promise.all()        |
| Xử lý từng kết quả riêng biệt        | Promise.allSettled() |
| Timeout hoặc lấy phản hồi nhanh nhất | Promise.race()       |
| Nhiều nguồn dự phòng                 | Promise.any()        |

### Nhận xét

Trong ứng dụng thực tế:

- `Promise.all()` thường dùng cho dữ liệu phụ thuộc nhau.
- `Promise.allSettled()` phù hợp cho Dashboard và Widget.
- `Promise.race()` thường kết hợp với Timeout.
- `Promise.any()` hữu ích khi triển khai nhiều server hoặc CDN dự phòng.
