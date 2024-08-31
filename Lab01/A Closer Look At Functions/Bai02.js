(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    // Đính kèm trình nghe sự kiện vào phần tử body
    document.body.addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();


/*
IIFE (Hàm được gọi ngay lập tức):

Hàm này được thực thi ngay sau khi được định nghĩa.
Bên trong IIFE, chúng ta chọn phần tử h1 và đặt màu của nó thành màu đỏ bằng header.style.color = 'red';.
Đính kèm trình nghe sự kiện:

Vẫn trong IIFE, chúng ta đính kèm một trình nghe sự kiện vào phần tử body.
Trình nghe sự kiện này lắng nghe sự kiện click trên body, và khi sự kiện xảy ra, 
nó thay đổi màu của phần tử h1 thành màu xanh bằng cách sử dụng header.style.color = 'blue';.
Tại sao điều này hoạt động:

Closure: Trình nghe sự kiện là một hàm callback có thể truy cập biến header, 
ngay cả sau khi IIFE đã hoàn thành thực thi. Điều này có thể do closure được tạo ra bởi JavaScript.
Khi IIFE chạy, nó định nghĩa biến header và đính kèm một trình nghe sự kiện. 
Hàm bên trong trình nghe sự kiện tạo ra một closure trên môi trường của IIFE, vì vậy nó nhớ được biến header.
Ngữ cảnh thực thi: Hàm bên trong trình nghe sự kiện không được thực thi ngay lập tức; 
nó chỉ được thực thi khi sự kiện click xảy ra trên phần tử body. 
Khi đó, hàm này vẫn có thể truy cập và thay đổi kiểu của phần tử h1 nhờ vào closure.
*/

/**
 * Closure: Closure là sự kết hợp của một hàm cùng với các tham chiếu đến trạng thái xung quanh nó 
 (môi trường từ vựng). Trong trường hợp này, hàm trong trình nghe sự kiện giữ quyền truy cập vào biến header, 
 ngay cả sau khi IIFE đã hoàn tất thực thi.
 * Thực thi trình nghe sự kiện: Trình nghe sự kiện chỉ được kích hoạt khi một sự kiện click xảy ra trên phần tử body.
  Khi điều đó xảy ra, hàm bên trong trình nghe sự kiện được thực thi và nó vẫn có thể truy cập 
  và sửa đổi phần tử header nhờ vào closure.
 */