// 7. Calculate the sum of even numbers greater than 10 and less than 30 

var sum = 0;

for(i=11; i<30; i++){
    if(i%2 == 0){
        sum += i;
    }
}

console.log("Tổng các số chẵn từ 10 đến 30 là: ");
console.log(sum);