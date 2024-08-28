/**
 * Trả về giá trị của phần tử đầu tiên trong mảng thỏa mãn điều kiện của hàm callback
 * Cú Pháp: array.find(callback(element, index, array))
 */

const numbers = [1, 2, 3, 4, 5];
const found = numbers.find(function (num) {
    return num > 3;
});
console.log(found); 

// Kết quả: 4
