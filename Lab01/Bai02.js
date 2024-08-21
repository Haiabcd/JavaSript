// Dữ liệu 1
var massMark1 = 78;
var heightMark1 = 1.69;
var massJohn1 = 92;
var heightJohn1 = 1.95;

var bmiMark1 = massMark1 / (heightMark1 ** 2);
var bmiJohn1 = massJohn1 / (heightJohn1 ** 2);

if (bmiMark1 > bmiJohn1) {
    console.log(`BMI của Mark (${bmiMark1.toFixed(1)}) cao hơn của John (${bmiJohn1.toFixed(1)})!`);
} else {
    console.log(`BMI của John (${bmiJohn1.toFixed(1)}) cao hơn của Mark (${bmiMark1.toFixed(1)})!`);
}

// Dữ liệu 2
var massMark2 = 95;
var heightMark2 = 1.88;
var massJohn2 = 85;
var heightJohn2 = 1.76;

var bmiMark2 = massMark2 / (heightMark2 ** 2);
var bmiJohn2 = massJohn2 / (heightJohn2 ** 2);

if (bmiMark2 > bmiJohn2) {
    console.log(`BMI của Mark (${bmiMark2.toFixed(1)}) cao hơn của John (${bmiJohn2.toFixed(1)})!`);
} else {
    console.log(`BMI của John (${bmiJohn2.toFixed(1)}) cao hơn của Mark (${bmiMark2.toFixed(1)})!`);
}
