/**
 * 22. Đảo ngược một mảng 
 * 22. Reverse an array 
 */

// sử dụng reverse() method của array object 
function reverseArray(arr) {
    return arr.reverse();
}

function daoNguocMang(arr) {
    var newArray = [];
    for(var i=arr.length-1; i>=0; i--){
        newArray.push(arr[i]);
    }
    return newArray;
}

var arr = [1, 2, 3, 4, 5];
console.log(daoNguocMang(arr));
console.log("Dùng Mothod Reverse");
console.log(reverseArray(arr));

