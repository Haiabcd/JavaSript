/**
 * Kiểm tra xem tất cả các phần tử trong mảng 
 * có thỏa mãn điều kiện của hàm callback hay không. 
 * Trả về true nếu tất cả đều thỏa mãn, ngược lại trả về false.
 * Cú pháp: array.every(callback(element, index, array))
 */

// Dữ liệu trả kết quả là true

const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven);

// Kết quả: true

// Dữ liệu trả kết quả là false
const numbers1 = [1, 4, 6, 8];
const allEven1 = numbers1.every(num => num % 2 === 0);
console.log(allEven1);

// Kết quả: false