const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: 
    [
        ['Neuer','Pavard','Martinez','Alaba','Davies','Kimmich',
        'Goretzka','Coman','Muller','Gnarby','Lewandowski',],
        [ 'Burki','Schulz','Hummels','Akanji','Hakimi','Weigl',
        'Witsel','Hazard','Brandt','Sancho','Gotze', ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
  };

/*
 for(const [i, player] of game.scored.entries()){
    console.log(`Goal ${i + 1}: ${player}`);
 }
*/

/*
game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`);
  });
*/

console.log('Danh sách các bàn thắng: ');


for(var i = 1 ; i <= game.scored.length; i++){
    console.log(`Goal ${i}: ${game.scored[i-1]}`);
}

const odds = Object.values(game.odds); // Object.values trả về mảng chứa giá trị của các thuộc tính của object

var sum = 0;

for(var i of odds){ 
   sum += i;
}

sum /= odds.length;

console.log(`Trung bình odds: ${sum}`);

// In theo mau
console.log('-----------In theo mau-----------');
for(const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
}

const scorers = {};
const games = game.scored; //[ 'Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels' ]

for(const player of games){
    scorers[player]? scorers[player]++ : scorers[player] = 1;
    // scorers[player] = (scorers[player] || 0) + 1;
}
