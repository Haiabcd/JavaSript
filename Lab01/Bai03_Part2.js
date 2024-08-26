var person1 = { 
    name: "Mark Miller",
    mass: 78,
    height: 1.69,
};

var person2 = { 
    name: "John Smith",
    mass: 92,
    height: 1.95,
};

function calcBMI(person) {
    return person.mass / (person.height ** 2);
}

var bmiMark = calcBMI(person1);
var bmiJohn = calcBMI(person2);

if (bmiMark > bmiJohn) {
    console.log(`Chỉ số BMI của ${person1.name} (${bmiMark}) cao hơn của ${person2.name} (${bmiJohn})`);
}else if(bmiMark < bmiJohn){
    console.log(`Chỉ số BMI của ${person2.name} (${bmiJohn}) cao hơn của ${person1.name} (${bmiMark})`);
}  