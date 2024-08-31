// 2. Print the odd numbers less than 100 

var n = 100;

console.log("Các số lẻ nhỏ hơn 100 là: ");
for(var i=1; i<n; i++){
    if(i%2 != 0){
        console.log(i);
    }
}