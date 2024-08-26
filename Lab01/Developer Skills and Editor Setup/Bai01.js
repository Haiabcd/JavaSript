function printForecast(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i]}\u00B0C in ${i + 1} days`);
    }

}

// Du lieu 1
console.log('----Du lieu 1----');
var data1 = [17, 21, 23];
printForecast(data1);

// Du lieu 2
console.log('----Du lieu 2----');
var data2 = [12, 5, -5, 0, 4];
printForecast(data2);