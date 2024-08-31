/**
 * 13. Tìm số lớn nhất trong dãy số 
 * 13. Find the maximum number in an array of numbers 
 */

//Sử dụng method Math.max() để tìm số lớn nhất trong mảng
// sử dụng apply() để truyền mảng làm đối số cho hàm Math.max()
// apply(null, arr), null là giá trị this của hàm Math.max(), arr là mảng chứa các số cần so sánh

function timSoLonNhat(arr){
    return Math.max.apply(null, arr);
}

var arr = [1, 2, 5, 3, 4];
console.log("Số lớn nhất trong mảng là: " + timSoLonNhat(arr));

// Cách thông thường

console.log("Cách thông thường ");

function timSoLonNhat1(arr){
    var max = arr[0];
    for(var i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log("Số lớn nhất trong mảng là: " + timSoLonNhat1(arr));