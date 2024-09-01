/**
 * 23. Đảo ngược một chuỗi 
 * 23. Reverse a string
 */

function reverseString(str) {
    return str.split('').reverse().join('');
    // split tách chuỗi thành mảng  
    // reverse đảo ngược mảng
    // join nối mảng thành chuỗi
}

function daoNguocChuoi(str) {
    var newStr = "";
    for(var i=str.length-1; i>=0; i--){
        newStr += str[i];
    }
    return newStr;
}

var str = "ABCD";
console.log(reverseString(str));
console.log("---Dùng vòng lặp---");
console.log(daoNguocChuoi(str));