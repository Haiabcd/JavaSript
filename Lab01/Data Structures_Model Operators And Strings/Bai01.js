const players1 = ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka',
'Coman', 'Muller', 'Gnarby', 'Lewandowski'];

const players2 = ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel',
'Hazard', 'Brandt', 'Sancho', 'Gotze'];

//----------- Tách thủ môn và các cầu thủ khác ------------
var gk;
const fieldPlayers = [];

function tachThuMonVaCacCauThuKhac(arr) {
for (var i = 0; i < arr.length; i++) {
  if (i === 0) {
    gk = arr[i];
  } else {
    fieldPlayers.push(arr[i]);
  }
}
console.log(`Thủ môn: ${gk}`); 
console.log(`Các cầu thủ còn lại: ${fieldPlayers}`); 
}

console.log('Danh sách người chơi đội 1:');
tachThuMonVaCacCauThuKhac(players1);

console.log('Danh sách người chơi đội 2:');
tachThuMonVaCacCauThuKhac(players2);

//----------- Gộp tất cả người chơi của cả hai đội ------------
const allPlayers = [];

function gopTatCaCacCauThuCuaCaHaiDoi(arr1, arr2) {
    for(var i = 0; i < arr1.length; i++) {
        allPlayers.push(players1[i]);
      }
      for(var i = 0; i < arr2.length; i++) {
        allPlayers.push(players2[i]);
      }
console.log(`Tất cả các cầu thủ: ${allPlayers}`);
}

gopTatCaCacCauThuCuaCaHaiDoi(players1, players2);

// ------------ Them cau thu moi vao doi ------------
const players1Final = [];
const newPlayers = ['Thiago', 'Coutinho', 'Perisic'];

function themCauThuMoiVaoDoi(arr1, arr2) {
    for(var i = 0; i < arr1.length; i++) {
        players1Final.push(arr1[i]);
      }
      
    for(var i = 0; i < arr2.length; i++) {
        players1Final.push(arr2[i]);
      }
console.log(`Danh sách cầu thủ cuối cùng: ${players1Final}`);

    }    
themCauThuMoiVaoDoi(players1, newPlayers);

