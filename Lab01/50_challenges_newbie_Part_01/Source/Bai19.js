/**
 * 19. Tạo hàm trả về trong một mảng các số nguyên tố “p” đầu tiên lớn hơn “n” 
 * 19. Create a function that will return in an array the first “p” prime numbers greater than “n”
 */


// Số nguyên tố là số từ số 2 trở lên, chỉ chia hết cho 1 và chính nó.
function kiemTraSoNguyenTo(n){
    if(n < 2){
        return false;
    }else{
        for(var i=2; i<Math.sqrt(n); i++){
            if(n % i === 0){
              return false;
            }
        }
    }
    return true;
}

function kiemTraPSoNguyenToLonHonN(n, p){
    var count = 1;
    var i = n+1;
    var arr = [];
    while(count <= p){
        if(kiemTraSoNguyenTo(i)){
            arr.push(i);
            count++;
        }
        i++;
    }
    return arr;
}


var n = 10;
var p = 5;

console.log(kiemTraPSoNguyenToLonHonN(n, p));