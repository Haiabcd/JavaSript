/**
 * 20. Xoay mảng sang trái 1 vị trí
 * 20. Rotate an array to the left 1 position 
 */


function rotateLeft(arr) {
    var temp = arr[0];
    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = temp;
    return arr;
}

console.log(rotateLeft([1, 2, 3, 4, 5])); 
