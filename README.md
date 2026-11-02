# PPL Coach

Web app hướng dẫn tập luyện theo lịch **Push · Pull · Leg · Upper · Lower** (5 buổi/tuần), thiết kế cho người 60 kg, cao 1m65, trình độ trung cấp, mục tiêu tăng cơ.

Toàn bộ app nằm trong một file `index.html`, không cần cài đặt hay build. Mở file bằng trình duyệt là dùng được.

## Tính năng

- **Hôm nay**: tự chọn buổi theo thứ trong tuần. Mỗi bài có:
  - mô hình 3D chiếu động tác chuẩn đúng nhịp tempo, cơ chính và cơ phụ phát sáng theo pha co/giãn;
  - nút xem từng **lỗi sai thường gặp** diễn lại trên mô hình, có vòng đỏ đánh dấu khớp bị sai;
  - hướng dẫn cơ chế chuyển động, kỹ thuật theo từng pha, cách sửa lỗi;
  - gợi ý mức tạ hôm nay theo phương pháp tăng tải kép, kèm các hiệp khởi động;
  - bảng ghi hiệp (kg, rep, ✓) với nút +/− để chỉnh nhanh.
- **Đồng hồ**: đếm thời gian buổi tập; tự đếm ngược thời gian nghỉ sau mỗi hiệp (±15 giây, bỏ qua), có âm báo và rung khi hết giờ. Màn hình được giữ sáng trong lúc tập (nếu trình duyệt hỗ trợ).
- **Lịch tập**: tổng quan tuần, bấm vào bài để mở trong buổi tương ứng.
- **Tiến độ**: 1RM ước tính theo từng bài qua các buổi, danh sách buổi đã tập.
- **Dữ liệu**: lưu trong `localStorage` của trình duyệt; có sao lưu và khôi phục bằng cách sao chép/dán JSON, và xoá toàn bộ.

## Chạy

```bash
open index.html        # macOS
xdg-open index.html    # Linux
```

Hoặc bật GitHub Pages cho repo (Settings → Pages → nhánh `main`, thư mục `/`) để mở app trên điện thoại.

App cần mạng để tải thư viện 3D (three.js r149 từ jsDelivr) và font chữ. Nếu không tải được thư viện 3D, phần ghi hiệp và đồng hồ vẫn dùng bình thường.

## Ghi chú

- Dữ liệu chỉ nằm trên trình duyệt đang dùng. Mở trên máy khác, hoặc xoá dữ liệu trình duyệt, sẽ không còn lịch sử. Hãy thỉnh thoảng sao lưu ở tab **Dữ liệu**.
- Mô hình 3D đã được đơn giản hóa để minh họa tư thế và hướng chuyển động, không chính xác tuyệt đối từng góc khớp.
