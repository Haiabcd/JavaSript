/**
 * 17. Tính tổng các chữ số của một số nguyên dương 
 * 17. Calculate the sum of digits of a positive integer number 
 */

function tongCacChuSoCuaSoNguyenDuong(n) {
    var sum = 0;
    while(n > 0){
        sum = sum + n % 10;
        // Math.floor(n / 10) để lấy phần nguyên của n sau khi chia cho 10. Làm tròn xuống
        // Math.ceil(n / 10) để lấy phần thập phân của n sau khi chia cho 10. Làm tròn lên
        n = Math.floor(n / 10);
    }
    return sum;
}

var n = 2468;
console.log(tongCacChuSoCuaSoNguyenDuong(n)); 
