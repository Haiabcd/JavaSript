const players1 = ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka',
'Coman', 'Muller', 'Gnarby', 'Lewandowski'];

const players2 = ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel',
'Hazard', 'Brandt', 'Sancho', 'Gotze'];

//----------- Tách thủ môn và các cầu thủ khác ------------
var gk = players1[0];
var fieldPlayers = players1.slice(1);

console.log("Thủ môn:" + gk); 
console.log("Các cầu thủ còn lại: " + fieldPlayers); 
console.log("-----------------------------");

//----------- Gộp tất cả người chơi của cả hai đội ------------
const allPlayers = players1.concat(players2);
console.log(`Tất cả cầu thủ: ${allPlayers}`);
console.log("-----------------------------");

// ------------ Them cau thu moi vao doi ------------
const newPlayers = ['Thiago', 'Coutinho', 'Perisic'];
const players1Final = players1.concat(newPlayers);
console.log(`Đội hình mới: ${players1Final}`);
console.log("-----------------------------");

//
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
var team1, draw, team2;
team1 = game.odds.team1;
draw = game.odds.x;
team2 = game.odds.team2;
*/

const {team1, x: draw, team2} = game.odds;

//

function printGoals(...players) {
  console.log("Tên cầu thủ và tổng số bàn thắng được ghi");
  for (const player of players) {
    console.log(player +" " + `${players.length} bàn thắng đã được ghi`);
  }
}

printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
console.log("-----------------------------");

team1 < team2 && console.log('Team 1 có nhiều khả năng chiến thắng hơn');
team2 < team1 && console.log('Team 2 có nhiều khả năng chiến thắng hơn');

