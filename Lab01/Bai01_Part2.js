function calcAverage(scores) {
    var sum = 0;
    for (var i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 *avgKoalas) {
        console.log(`Dolphins chiến thắng (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas chiến thắng (${avgKoalas} vs. ${avgDolphins})`);
    }else{
        console.log(`Không ai chiến thắng!`);
    }
}

//Dữ liệu 1
console.log("Dữ liệu 1");
var dolphinsScores = [44, 23, 71];
var koalasScores = [65, 54, 49];

var avgDolphins = calcAverage(dolphinsScores);
var avgKoalas = calcAverage(koalasScores);

checkWinner(avgDolphins, avgKoalas);

//Dữ liệu 2
console.log("Dữ liệu 2");
var dolphinsScoresBonus1 = [85, 54, 41];
var koalasScoresBonus1 = [23, 34, 27];

var avgDolphinsB1 = calcAverage(dolphinsScoresBonus1);
var avgKoalasB1 = calcAverage(koalasScoresBonus1);

checkWinner(avgDolphinsB1, avgKoalasB1);