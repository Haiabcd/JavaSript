/**
 * 16. Tạo hàm trả về Boolean để xác định một số có phải là số nguyên tố hay không
 * 16. Create a function that will return a Boolean specifying if a number is prime
 */

function traVeSoNguyenTo(n){
    if(n < 2){
        return false;
    }
    for(var i=2; i<=Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true; 
}

var n = 4;
console.log("Số" + " " + n + " " + "có phải là số nguyên tố không?");
console.log(traVeSoNguyenTo(n)); 