/**
 * 14. In 10 số Fibonacci đầu tiên không đệ quy 
 * 14. Print the first 10 Fibonacci numbers without recursion 
 */

// Sử dụng vòng lặp for để in ra 10 số Fibonacci đầu tiên
// Số Fibonacci đầu tiên là 0, số thứ hai là 1
// Số thứ 3 = số thứ 1 + số thứ 2
// Số thứ 4 = số thứ 2 + số thứ 3
// Số thứ 5 = số thứ 3 + số thứ 4
// ...
// Số thứ n = số thứ n-2 + số thứ n-1

function in10SoFibonacci(){
    var a = 0, b = 1, c;
    console.log(a);
    console.log(b);
    for(var i=2; i<10; i++){
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

in10SoFibonacci(); 