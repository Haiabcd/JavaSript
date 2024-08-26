var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var tips = [];
var totals = [];

function calcTip(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for(var i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}
console.log("Tien Tips: " + tips);
console.log("Tong hoa don: " + totals);

//Bonus

function calcAverage(arr){
   var sum = 0;
    for(var i = 0; i < arr.length; i++){
         sum += arr[i];
    }
    return sum / arr.length;
}

console.log("Tong trung binh: " + calcAverage(totals));
