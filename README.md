# PPL Coach

Web app hướng dẫn tập luyện theo lịch **Push · Pull · Leg · Upper · Lower** (5 buổi/tuần), thiết kế cho người 60 kg, cao 1m65, trình độ trung cấp, mục tiêu tăng cơ.

Toàn bộ app nằm trong một file `index.html`, không cần cài đặt hay build. Mở file bằng trình duyệt là dùng được.

## Tính năng

- **Hôm nay**: tự chọn buổi theo thứ trong tuần. Mỗi bài có:
  - mô hình người thật 3D (da liền, có bộ xương) chiếu động tác chuẩn đúng nhịp tempo, cơ chính tô đỏ và cơ phụ tô hồng, đậm dần khi cơ co;
  - nút xem từng **lỗi sai thường gặp** diễn lại trên mô hình, có vòng đỏ đánh dấu khớp bị sai;
  - hướng dẫn cơ chế chuyển động, kỹ thuật theo từng pha, cách sửa lỗi;
  - gợi ý mức tạ hôm nay theo phương pháp tăng tải kép, kèm các hiệp khởi động;
  - bảng ghi hiệp (kg, rep, ✓) với nút +/− để chỉnh nhanh.
- **Đếm nhịp từng rep**: bấm "▶ Đếm nhịp", app đếm 3-2-1 rồi dẫn từng rep theo tempo của bài (hạ / giữ / đẩy / nghỉ giữa rep), có tiếng bíp theo pha, đọc số rep bằng giọng nói và mô hình 3D tập cùng nhịp. Đủ rep thì dừng; bấm "Ghi hiệp" để lưu số rep đã làm.
- **Đồng hồ**: đếm thời gian buổi tập; tự đếm ngược thời gian nghỉ giữa hiệp sau mỗi hiệp (±15 giây, bỏ qua), có âm báo khi hết giờ. Thời gian nghỉ giữa rep và giữa hiệp chỉnh riêng được cho từng bài. Màn hình được giữ sáng trong lúc tập (nếu trình duyệt hỗ trợ).
- **Lịch tập**: tổng quan tuần, bấm vào bài để mở trong buổi tương ứng.
- **Tiến độ**: 1RM ước tính theo từng bài qua các buổi, danh sách buổi đã tập.
- **Dữ liệu**: lưu trong `localStorage` của trình duyệt; có sao lưu và khôi phục bằng cách sao chép/dán JSON, và xoá toàn bộ.

## Lịch tập

| Thứ | Buổi | Bài |
|---|---|---|
| 2 | Push | Bench Press · Smith Incline Press · Machine Shoulder Press · Pec Deck · Lateral Raise · Triceps Pushdown |
| 3 | Pull | Pull-up · Chest-Supported Machine Row · Seated Cable Row · Face Pull · EZ Bar Curl · Hammer Curl |
| 4 | Leg | Back Squat · Romanian Deadlift · Leg Press · Lying Leg Curl · Calf Raise |
| 5 | Nghỉ | Đi bộ, giãn cơ |
| 6 | Upper | Incline DB Press · Plate-Loaded Lat Pulldown · Cable Fly · Seated Cable Row · Lateral Raise · Reverse Pec Deck · Overhead Triceps Ext. · Hammer Curl |
| 7 | Lower | Hip Thrust · Bulgarian Split Squat · Leg Extension · Lying Leg Curl · Calf Raise |
| CN | Nghỉ | |

## Cài lên iPhone (iOS 16.4+, khuyên dùng iPhone 13 trở lên)

1. Bật GitHub Pages cho repo: **Settings → Pages → Build and deployment → Deploy from a branch**, chọn `main` và thư mục `/ (root)`, bấm **Save**. Sau 1–2 phút app có ở `https://nminhcuongdev.github.io/training-app/`.
2. Mở địa chỉ đó bằng **Safari** trên iPhone.
3. Bấm nút **Chia sẻ** → **Thêm vào MH chính** (Add to Home Screen) → **Thêm**.
4. Mở app từ biểu tượng PPL Coach trên màn hình chính: app chạy toàn màn hình như app thật, và vẫn mở được khi phòng gym mất sóng (sau lần mở đầu tiên có mạng).

Lưu ý trên iPhone:
- App mở từ màn hình chính có bộ nhớ **riêng**, không chung với tab Safari. Hãy chọn một cách mở cố định; muốn chuyển dữ liệu thì dùng Sao lưu/Khôi phục ở tab **Dữ liệu**.
- Âm báo hết giờ nghỉ sẽ không kêu nếu iPhone đang bật **chế độ im lặng**. iPhone cũng không hỗ trợ rung từ web app.

## Chạy trên máy tính

```bash
open index.html        # macOS
xdg-open index.html    # Linux
```

Service worker (chế độ offline) chỉ chạy khi mở qua `https://` hoặc `localhost`, ví dụ `python3 -m http.server`; mở thẳng file thì app vẫn chạy nhưng không lưu bản offline.

App cần mạng để tải thư viện 3D (three.js r149 từ jsDelivr) và font chữ. Nếu không tải được thư viện 3D, phần ghi hiệp và đồng hồ vẫn dùng bình thường.

## Ghi chú

- Dữ liệu chỉ nằm trên trình duyệt đang dùng. Mở trên máy khác, hoặc xoá dữ liệu trình duyệt, sẽ không còn lịch sử. Hãy thỉnh thoảng sao lưu ở tab **Dữ liệu**.
- Nhân vật 3D là mô hình người thật dựng từ dữ liệu **MakeHuman** (lưới cơ thể, các target hình thể, bộ xương `game_engine` và trọng số da; giấy phép [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)): nam, châu Á, cao 1,65 m, khoảng 60 kg, cơ bắp. App tự chuyển dữ liệu này sang dạng nhúng trong `index.html`; chuyển động được tính bằng IK theo từng bài và gắn lên bộ xương của mô hình.
