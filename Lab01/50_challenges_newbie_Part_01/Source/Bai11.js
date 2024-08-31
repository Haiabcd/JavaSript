// 11. Calculate the average of the numbers in an array of numbers 

var sum = 0;
var avg = 0;

function trungBinhCong(arr){
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    avg = sum/arr.length;
    console.log("Trung bình cộng của mảng là: " + avg);
}

var arr = [1,2,3,4,5];
trungBinhCong(arr);