/**
 * Kiểm tra xem có ít nhất một phần tử nào trong mảng
 * thỏa mãn điều kiện của hàm callback hay không. 
 * Trả về true nếu có, ngược lại trả về false.
 * Cú pháp: array.some(callback(element, index, array))
 */
// Dữ liệu trả kết quả: true
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(function (num){
    return num % 2 === 0;
});
console.log(hasEven);

// Kết quả: true

// Dữ liệu trả kết quả: false
const numbers1 = [1, 3, 5];
const hasEven1 = numbers1.some(function (num){
    return num % 2 === 0;
});
console.log(hasEven1);

// Kết quả: false

