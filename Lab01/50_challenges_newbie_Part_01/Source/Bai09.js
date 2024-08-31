// 9. Create a function that will convert from Fahrenheit to Celsius 

function chuyenDoiDoFSangDoC(doF){
    var ketQua = (doF - 32) * 5/9;
    return ketQua;
}

console.log("Kết quả chuyển đổi độ F sang độ C là: ");
console.log(chuyenDoiDoFSangDoC(86));
console.log(chuyenDoiDoFSangDoC(98.6));