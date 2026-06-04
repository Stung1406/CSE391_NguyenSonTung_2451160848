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
```
