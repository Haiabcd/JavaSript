/**
 * Tạo một mảng mới chứa tất cả các phần tử của mảng ban đầu
 * thỏa mãn điều kiện của hàm callback.
 * Cú Pháp: array.filter(callback(element, index, array))
 *  */ 

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function (num){
    return num % 2 === 0;
});
console.log(evenNumbers); 
// Kết quả: [2, 4]