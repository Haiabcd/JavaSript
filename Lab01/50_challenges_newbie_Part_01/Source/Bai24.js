/**
 * 24. Tạo hàm sẽ hợp nhất hai mảng và trả về kết quả là một mảng mới 
 * 24. Create a function that will merge two arrays and return the result as a new array 
 */

function noiHaiMang(arr1, arr2){
    return arr1.concat(arr2);
}

var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];
console.log("Mảng 1: " );
console.log(arr1);
console.log("Mảng 2: ");
console.log(arr2);
console.log("Mảng mới sau khi nối: ");
console.log(noiHaiMang(arr1, arr2));