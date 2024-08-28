/**
 * Thực hiện một hàm callback trên từng phần tử của mảng (từ trái sang phải), 
 * từ đó giảm mảng về một giá trị duy nhất
 * Cú Pháp: array.reduce(callback(accumulator, currentValue, 
 *                       currentIndex, array), initialValue)
 */

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function(acc, num){
    return acc + num;
}, 0);
console.log(sum); 

// Kết quả: 10