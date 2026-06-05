Dưới đây là **file Markdown hoàn chỉnh** để bạn copy thẳng:

````md
# 📘 Phần A: Kiểm tra đọc hiểu

---

## 🧩 Câu A1 — DOM Tree

### 🌳 Sơ đồ DOM Tree

```text
document
└── div#app
    ├── header
    │   ├── h1 → "Todo App"
    │   └── nav
    │       ├── a.active → "All"
    │       ├── a → "Active"
    │       └── a → "Completed"
    │
    └── main
        ├── form#todoForm
        │   ├── input#todoInput
        │   └── button → "Add"
        │
        └── ul#todoList
            ├── li.todo-item → "Learn HTML"
            └── li.todo-item.completed → "Learn CSS"
````

---

### 🎯 querySelector / querySelectorAll

#### 📌 Chọn thẻ `h1`

```js
document.querySelector("h1");
```

#### 📌 Chọn input trong form

```js
document.querySelector("#todoForm input");
```

#### 📌 Chọn tất cả `.todo-item`

```js
document.querySelectorAll(".todo-item");
```

#### 📌 Chọn link đang active

```js
document.querySelector("a.active");
```

#### 📌 Chọn li đầu tiên trong `#todoList`

```js
document.querySelector("#todoList li");
```

#### 📌 Chọn tất cả link trong nav

```js
document.querySelectorAll("nav a");
```

---

## ⚖️ Câu A2 — innerHTML vs textContent

| Tiêu chí    | textContent | innerHTML         |
| ----------- | ----------- | ----------------- |
| Nội dung    | Text thuần  | HTML có thể parse |
| Tốc độ      | Nhanh hơn   | Chậm hơn          |
| Bảo mật     | An toàn     | Dễ bị XSS         |
| Render HTML | Không       | Có                |

---

### 🧪 Ví dụ

```js
element.textContent = "<b>Hello</b>";
// Hiển thị: <b>Hello</b>

element.innerHTML = "<b>Hello</b>";
// Hiển thị: Hello (in đậm)
```

---

### 📌 Khi nào dùng textContent

* Hiển thị dữ liệu user nhập
* Hiển thị text đơn giản
* Ưu tiên an toàn

---

### 📌 Khi nào dùng innerHTML

* Render template HTML do dev tạo
* Hiển thị list từ data đã kiểm soát

---

### ⚠️ XSS Warning

❌ Sai:

```js
document.querySelector("#result").innerHTML = userInput;
```

✅ Đúng:

```js
document.querySelector("#result").textContent = userInput;
```

---

## 🌊 Câu A3 — Event Bubbling

---

### 🔥 Không có stopPropagation

```text
BUTTON
INNER
OUTER
```

📌 Giải thích:

* Click vào button
* Event lan từ con → cha

---

### 🛑 Có stopPropagation

```text
BUTTON
```

📌 Giải thích:

* `e.stopPropagation()` chặn event
* Không lan lên phần tử cha

---

## 💡 Tổng kết

* DOM Tree = cấu trúc HTML dạng cây
* querySelector = chọn 1 phần tử
* querySelectorAll = chọn nhiều phần tử
* textContent = an toàn, chỉ text
* innerHTML = mạnh nhưng có rủi ro XSS
* Event bubbling = sự kiện lan từ con lên cha

```

---

Nếu bạn muốn, mình có thể nâng cấp tiếp thành:
- 📄 file PDF đẹp kiểu giáo trình
- 🧠 flashcard để học nhanh
- 🚀 hoặc bộ đề JS DOM + event giống đề thi luôn
``

# Phần C: Debug và Phân tích

---

# Câu C1 — Debug DOM Code

## Code đã sửa

```javascript
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");

let count = 0;

function addHistory(msg) {
  const li = document.createElement("li");
  li.textContent = msg;

  li.addEventListener("click", function () {
    deleteHistory(this);
  });

  historyList.appendChild(li);
}

document.querySelector("#incrementBtn").addEventListener("click", function () {
  count++;
  countDisplay.textContent = count;
  addHistory("Count changed to " + count);
});

// Fix 1: "onclick" → "click"
document.querySelector("#decrementBtn").addEventListener("click", function () {
  count--;
  countDisplay.textContent = count;
  addHistory("Count changed to " + count);
});

document.querySelector("#resetBtn").addEventListener("click", () => {
  count = 0;

  // Fix 2
  countDisplay.textContent = count;

  // Fix 3
  historyList.innerHTML = "";

  // Fix 7
  addHistory("Reset — count về 0");
});

function deleteHistory(element) {
  element.parentNode.removeChild(element);
}

document.querySelector("#clearHistory").addEventListener("click", () => {
  const items = historyList.querySelectorAll("li");

  items.forEach((item) => {
    // Fix 4
    item.remove();
  });
});

window.addEventListener("beforeunload", () => {
  localStorage.setItem("count", count);
  localStorage.setItem("history", historyList.innerHTML);
});

window.addEventListener("load", () => {
  // Fix 5 + Fix 8
  count = parseInt(localStorage.getItem("count")) || 0;

  countDisplay.textContent = count;

  const savedHistory = localStorage.getItem("history");

  if (savedHistory) {
    historyList.innerHTML = savedHistory;
  }
});
```

---

## Danh sách lỗi đã sửa

| Fix | Lỗi | Nguyên nhân | Cách sửa |
|------|------|-------------|----------|
| 1 | `"onclick"` trong `addEventListener()` | Không tồn tại event tên `onclick` | Đổi thành `"click"` |
| 2 | Gán lại `countDisplay = count` | `countDisplay` là DOM element và được khai báo bằng `const` | Dùng `countDisplay.textContent = count` |
| 3 | `historyList.innerHTML = null` | Hiển thị chữ `"null"` trên giao diện | Đổi thành `""` |
| 4 | `item.remove` | Chỉ tham chiếu hàm, không gọi hàm | Dùng `item.remove()` |
| 5 | Giá trị từ `localStorage` là string | Dẫn đến lỗi kiểu dữ liệu | Dùng `parseInt()` |
| 6 | Dùng `innerHTML` để hiển thị số đếm | Có nguy cơ XSS | Dùng `textContent` |
| 7 | Reset không lưu lịch sử thao tác | Thiếu log hành động | Thêm `addHistory()` |
| 8 | Không xử lý trường hợp chưa có dữ liệu trong localStorage | Có thể trả về `null` | Dùng `|| 0` |

---

# Câu C2 — Performance

## Tại sao bind event cho 1000 phần tử là Bad Practice?

Khi gọi:

```javascript
element.addEventListener(...)
```

mỗi phần tử sẽ có một event listener riêng.

Nếu có 1000 phần tử:

- Tạo 1000 event listeners.
- Tốn nhiều bộ nhớ (heap memory).
- Khó quản lý khi thêm phần tử mới.
- Dễ gây memory leak nếu quên remove listener.
- Hiệu năng giảm khi danh sách lớn.

---

## Event Delegation giải quyết như thế nào?

### Nguyên lý Event Bubbling

Khi click vào phần tử con:

```text
li
 ↑
ul
 ↑
body
 ↑
document
```

Event sẽ nổi dần lên các phần tử cha.

Thay vì:

```javascript
1000 phần tử
→ 1000 listeners
```

ta làm:

```javascript
1 phần tử cha
→ 1 listener
```

Ví dụ:

```javascript
historyList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    deleteHistory(e.target);
  }
});
```

Ưu điểm:

- Chỉ cần 1 listener.
- Tiết kiệm bộ nhớ.
- Tự động hoạt động với phần tử được thêm sau này.
- Dễ bảo trì.

---

## Refactor bằng DocumentFragment

### Code

```javascript
const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
  const div = document.createElement("div");
  div.textContent = `Item ${i}`;

  fragment.appendChild(div);
}

document.body.appendChild(fragment);
```

---

## Vì sao nhanh hơn?

`DocumentFragment` là một DOM node tạm thời chỉ tồn tại trong bộ nhớ.

### Cách làm thông thường

```javascript
for (...) {
  document.body.appendChild(div);
}
```

Browser phải:

- Recalculate Style
- Reflow
- Repaint

1000 lần.

---

### Khi dùng DocumentFragment

```javascript
for (...) {
  fragment.appendChild(div);
}
```

Các phần tử được thêm vào vùng nhớ tạm, chưa xuất hiện trên giao diện.

Đến cuối:

```javascript
document.body.appendChild(fragment);
```

Browser chỉ cần:

- 1 lần Reflow
- 1 lần Repaint

→ Hiệu năng tốt hơn đáng kể với số lượng phần tử lớn.

---

## Kết luận

### Event Delegation

✅ Giảm số lượng Event Listener  
✅ Tiết kiệm bộ nhớ  
✅ Dễ quản lý danh sách động

### DocumentFragment

✅ Giảm số lần Reflow/Repaint  
✅ Tăng tốc độ render số lượng lớn phần tử  
✅ Tối ưu thao tác DOM hàng loạt