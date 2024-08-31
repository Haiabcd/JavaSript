/**
 * 15. Tạo hàm tìm số Fibonacci thứ n bằng đệ quy
 * 15. Create a function that will find the nth Fibonacci number using recursion 
 */

// Sử dụng đệ quy để tìm số Fibonacci thứ n
// Nếu n = 1 hoặc 2 thì trả về 1
// Nếu n > 2 thì trả về tổng của 2 số Fibonacci trước đó
// Số Fibonacci thứ n = số Fibonacci thứ n-1 + số Fibonacci thứ n-2

function fibonacci(n){
    if(n <= 1){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

var n = 12;
console.log("Số Fibonacci của" + " " + n + " " + "là: ");
console.log(fibonacci(12)); 