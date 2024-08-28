/**
 * Áp dụng một hàm callback lên mỗi phần tử trong mảng, 
 * sau đó làm phẳng kết quả thành một mảng duy nhất. 
 * Nó là sự kết hợp giữa map() và flat().
 */

const arr = [1, 2, 3, 4];
const flatMapped = arr.flatMap(function (num) {
    return [num, num * 2];
});
console.log(flatMapped); 

// Kết quả: [1, 2, 2, 4, 3, 6, 4, 8]
