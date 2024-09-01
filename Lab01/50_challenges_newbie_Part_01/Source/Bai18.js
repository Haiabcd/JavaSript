/**
 * 18. In 100 số nguyên tố đầu tiên 
 * 18. Print the first 100 prime numbers 
 */

function kiemTraSoNguyenTo(n) {
    if(n < 2){
        return false;
    }
    for(var i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

function in100SoNguyenToDauTien() {
    var count = 0;
    var n = 2;
    while(count < 100){
        if(kiemTraSoNguyenTo(n)){
            console.log(n);
            count++;
        }
        n++;
    }
}

in100SoNguyenToDauTien();
