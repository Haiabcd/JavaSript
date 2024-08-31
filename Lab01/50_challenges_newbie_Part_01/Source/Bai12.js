/**
 * 12. Tạo hàm nhận một mảng số làm đối số và trả về một mảng chỉ chứa các số dương
 * 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers 
 *  */ 

//Sử dụng method push() để thêm phần tử vào mảng

function traVeMangSoDuong(arr){
    var arrSoDuong = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i] > 0){
           arrSoDuong.push(arr[i]);
        }
    }
    console.log("Mảng gồm các số dương là: ");
    return arrSoDuong;s
}

var arr = [-1,2,-3,4,-5];
console.log(traVeMangSoDuong(arr)); 