## PHẦN A — KIỂM TRA ĐỌC HIỂU

#### Câu A1 — 5 Loại Positioning

| Position   | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí         | Cuộn theo trang? | Use case                  |
|------------|---------------------------|---------------------------|------------------|---------------------------|
| static     | Có                        | Vị trí mặc định           | Có               | Mặc định, không định vị   |
| relative   | Có                        | Chính nó                  | Có               | Dịch chuyển nhẹ           |
| absolute   | Không                     | Nearest positioned ancestor| Không            | Tooltip, badge, overlay   |
| fixed      | Không                     | Viewport                  | Không            | Header, nút nổi           |
| sticky     | Có                        | Tổ tiên cuộn gần nhất     | Có               | Sidebar, header dính      |

**Thêm:**
- `absolute` tham chiếu `body` khi không có tổ tiên nào có position khác static.
- Tham chiếu parent khi parent có position khác static.
- "Nearest positioned ancestor" là tổ tiên gần nhất có position khác static.

#### Câu A2 — Flexbox vs Grid

1. Trường hợp 1: 4 items nằm ngang, chia đều 4 cột.
2. Trường hợp 2: 6 items, mỗi hàng 2 item, 3 hàng.
3. Trường hợp 3: 3 items nằm ngang, cách đều 2 bên, căn giữa dọc.
4. Trường hợp 4: 3 items, cột trái 200px, giữa co giãn, phải 200px, có gap.
5. Trường hợp 5: 7 items, 3 cột, 3 hàng (hàng cuối có 1 item).

## PHẦN C — SUY LUẬN

#### **Câu C1 — Flexbox vs Grid: Khi nào dùng gì?**

**Navigation bar ngang (logo + menu + buttons)**
**Dùng:** Flexbox  
Navbar là 1 chiều — các item xếp ngang theo trục X. Flexbox sinh ra để xử lý đúng kiểu này: `justify-content: space-between` đẩy logo trái, menu giữa, buttons phải. `align-items: center` căn giữa dọc hoàn hảo chỉ 1 dòng.

**Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)**
**Dùng:** Grid  
Cần layout 2 chiều rõ ràng — 3 cột cố định, ảnh tự động xuống hàng. `grid-template-columns: repeat(3, 1fr)` xử lý gọn, không cần biết có bao nhiêu ảnh. Flexbox cũng làm được nhưng phải tính `calc()` thủ công, dễ lệch.

**Layout blog: main content + sidebar**
**Dùng:** Grid  
Đây là layout 2 vùng rõ ràng với kích thước khác nhau, ví dụ `grid-template-columns: 1fr 300px`. Grid kiểm soát tỷ lệ 2 cột chính xác hơn, dễ responsive hơn khi dùng `minmax()`.

**Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)**
**Dùng:** Grid hoặc Flexbox — cả hai đều được  
Nếu 4 cột đều nhau: Flexbox với `flex: 1` đơn giản hơn. Nếu cần kiểm soát từng cột khác nhau (cột 1 rộng hơn, cột 4 hẹp hơn): Grid rõ ràng hơn. Thực tế dùng Grid cho chắc vì dễ responsive sau này.

**Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)**
**Dùng:** Flexbox  
Card là layout 1 chiều theo trục dọc — `flex-direction: column`. Trick quan trọng: `margin-top: auto` trên nút "Mua" đẩy nút xuống đáy card bất kể nội dung text dài hay ngắn. Grid không có cách xử lý tự nhiên cho trick này.

#### **Câu C2 — Debug Flexbox**

**Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống**
**Nguyên nhân:** card không có `display: flex; flex-direction: column` nên các phần tử bên trong xếp bình thường, nút không có cách để dính đáy.
**Sửa:**
```css
.card-container {
  display: flex;
  flex-wrap: wrap;
}
.card {
  width: 30%;
  margin: 1.5%;
  display: flex; /* thêm */
  flex-direction: column; /* thêm */
}
.card img {
  width: 100%;
}
.card h3 {
  font-size: 18px;
}
.card .btn {
  padding: 10px;
  margin-top: auto; /* thêm — đẩy nút xuống đáy */
}
```

**Lỗi 2: Muốn items nằm giữa cả ngang lẫn dọc trong container 100vh, nhưng item vẫn dính góc trái trên**
**Nguyên nhân:** `display: flex` tạo flex container nhưng không có `justify-content` và `align-items` nên mặc định là `flex-start` — tức góc trái trên.
**Sửa:**
```

**Lỗi 3: Sidebar bị co lại khi content quá dài**
**Nguyên nhân:** Flexbox mặc định cho phép các item co lại (`flex-shrink: 1`). Khi content dài, flex container cố chia đều chỗ, sidebar bị ép nhỏ hơn 250px.
**Sửa:**
```css
.layout {
  display: flex;
}
.sidebar {
  width: 250px;
  flex-shrink: 0; /* thêm — không cho co lại */
}
.content {
  flex: 1;
}
```

## PHẦN D — VIDEO THỰC HÀNH OBS
Link video PBT_04: