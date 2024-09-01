/**
 * 26. Tạo một hàm sẽ nhận hai mảng và trả về một mảng có các phần tử nằm trong mảng đầu tiên 
 * nhưng không nằm trong mảng thứ hai
 * 26. Create a function that will receive two arrays and will 
 * return an array with elements that are in the first array but not in the second
 */

function soKhongchung(arr1, arr2){
    var arr = arr1.concat(arr2);
    for(var i=0; i<arr.length; i++){
        if(arr1.includes(arr[i]) && !arr2.includes(arr[i])){
            continue;
        }
        arr.splice(i, 1);
        i--;
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

