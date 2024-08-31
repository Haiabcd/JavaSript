// 10. Calculate the sum of numbers in an array of numbers 

var sum = 0;
 function tongMang(arr){
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    console.log("Tổng của mảng là: " + sum);
 }

 var arr = [1, 2, 3, 4, 5];
tongMang(arr);