// Dữ liệu 1
var dolphinsScores = [96, 108, 89];
var koalasScores = [88, 91, 110];

function calculateAverageScore(scores) {
    var sum = 0;
    for (var i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

var avgDolphins = calculateAverageScore(dolphinsScores);
var avgKoaLas = calculateAverageScore(koalasScores);

if (avgDolphins > avgKoaLas) {
    console.log(`Dolphins chiến thắng (${avgDolphins} vs. ${avgKoaLas})`);
} else if (avgDolphins < avgKoaLas) {
    console.log(`Koalas chiến thắng (${avgKoaLas} vs. ${avgDolphins})`);
} else {
    console.log(`Cả hai hòa (${avgDolphins} ${avgKoaLas})`);
}



//Dữ liệu bonus 1
var dolphinsScoresBonus1 = [97, 112, 101];
var koalasScoresBonus1 = [109, 95, 123];

var avgDolphinsB1 = calculateAverageScore(dolphinsScoresBonus1);
var avgKoaLasB1 = calculateAverageScore(koalasScoresBonus1);

if (avgDolphinsB1 > avgKoaLasB1 && avgDolphinsB1 >= 100) {
    console.log(`Dolphins chiến thắng (${avgDolphinsB1} vs. ${avgKoaLasB1})`);
} else if (avgDolphinsB1 < avgKoaLasB1 && avgKoaLasB1 >= 100) {
    console.log(`Koalas chiến thắng (${avgKoaLasB1} vs. ${avgDolphinsB1})`);
} else if (avgDolphinsB1 === avgKoaLasB1 && avgDolphinsB1 >= 100 && avgKoaLasB1 >= 100) {
    console.log(`Cả hai hòa (${avgDolphinsB1} ${avgKoaLasB1})`);
} else {
    console.log(`Không ai chiến thắng!`);
}

//Dữ liệu bonus 2
var dolphinsScoresBonus2 = [97, 112, 101];
var koalasScoresBonus2 = [109, 95, 106];

var avgDolphinsB2 = calculateAverageScore(dolphinsScoresBonus2);
var avgKoaLasB2 = calculateAverageScore(koalasScoresBonus2);

if (avgDolphinsB2 > avgKoaLasB2 && avgDolphinsB2 >= 100) {
    console.log(`Dolphins chiến thắng (${avgDolphinsB2} vs. ${avgKoaLasB2})`);
} else if (avgDolphinsB2 < avgKoaLasB2 && avgKoaLasB2 >= 100) {
    console.log(`Koalas chiến thắng (${avgKoaLasB2} vs. ${avgDolphinsB2})`);
} else if (avgDolphinsB2 === avgKoaLasB2 && avgDolphinsB2 >= 100 && avgKoaLasB2 >= 100) {
    console.log(`Cả hai hòa (${avgDolphinsB2} ${avgKoaLasB2})`);
} else {
    console.log(`Không ai chiến thắng!`);
}