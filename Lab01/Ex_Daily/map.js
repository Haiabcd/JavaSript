/**
 * Tạo một mảng mới dựa trên việc gọi hàm trên mỗi phần tử của mảng đã cho.
 * Cú Pháp: array.map(callback(currentValue, index, array))
 */

const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(function (number){
    return number * 2;
});
console.log(doubledNumbers);
// Kết quả: [2, 4, 6, 8]