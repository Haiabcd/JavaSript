// 4. Print all the multiplication tables with numbers from 1 to 10 

var n = 10;
console.log("Bảng cửu chương từ 1 đến 10 là: ");

for(var i=1; i<=n; i++){
    console.log("Bảng cửu chương " + i + ": ");
    for(var j=1; j<=10; j++){
        console.log(i + " x " + j + " = " + i*j);
    }
}