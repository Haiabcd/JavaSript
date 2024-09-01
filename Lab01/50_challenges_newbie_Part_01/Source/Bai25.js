/**
 * 25. Tạo một hàm sẽ nhận hai mảng số làm đối số và trả về một mảng bao gồm 
 * tất cả các số nằm trong mảng đầu tiên hoặc mảng thứ hai nhưng không có trong cả hai
 * 25. Create a function that will receive two arrays of numbers as arguments and return
 * an array composed of all the numbers that are either in the first array or second array but not in both 
 */

function soKhongchung(arr1, arr2){
    var arr = arr1.concat(arr2);  //[1, 2, 4, 3, 4, 5, 6]
    for(var i=0; i<arr.length; i++){
        if(arr1.includes(arr[i]) && arr2.includes(arr[i])){ // includes trả về true nếu phần tử có trong mảng arr1 và arr2
            arr.splice(i, 1);  // splice(i, 1) xóa phần tử thứ i trong mảng arr và giảm độ dài mảng đi 1 đơn vị 
            i--; // giảm i đi 1 đơn vị để kiểm tra phần tử tiếp theo sau khi xóa phần tử i 
        }
    }
    return arr;
}

var arr1 = [1, 2, 3, 4];
var arr2 = [3, 4, 5, 6];

console.log("Mảng 1: ");
console.log(arr1);

console.log("Mảng 2: ");
console.log(arr2);

console.log("Mảng mới: ");
console.log(soKhongchung(arr1, arr2));

