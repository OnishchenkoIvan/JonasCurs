'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// #1
for (const [i, name] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${name}`);
}

// #2
const odds = Object.values(game.odds);
let sum = 0;
for (const odd of odds) sum += odd;
const averages = sum / odds.length;
console.log(averages)

// #3
for (const [team, odd] of Object.entries(game.odds)){
  const result = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${result}: ${odd}`);
}

// #4
const result = {}
for (const player of game.scored) {
  result[player] ? result[player] += 1 : (result[player] = 1);
}
console.log(result);