const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// #1
const events = [...new Set(gameEvents.values())];
console.log(events);

// #2
// gameEvents.delete(64);
// console.log(gameEvents);

// #3
const arr = gameEvents.values();
const result = {};
for (const ar of arr) {
  result[ar] ? result[ar] += 1 : result[ar] = 1;
}
for (const [key, value] of Object.entries(result)) {
  console.log(`An ${key} happened, on average, every ${90 / value} minutes`);
}

// #4

for (const [key, value] of gameEvents.entries()) {
  const str = key <= 45 ? `[First Half] ${key}: ${value}` : `[Second Half] ${key}: ${value}`;
  console.log(str);
}