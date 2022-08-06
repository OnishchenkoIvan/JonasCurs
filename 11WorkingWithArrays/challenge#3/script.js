'use strict';

// function calcAverageHumanAge (arr) {
//   const dogAge = arr.map((age) => {
//     if (age <= 2) {
//       return 2 * age;
//     } else return 16 + age * 4;
//   });
//   // const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4));
//   const eighteenAgeMore = dogAge.filter(age => age > 18);
//   const averageAge = eighteenAgeMore.reduce((acc, age) => {
//     return  acc + age/ eighteenAgeMore.length;
//   }, 0);
//   console.log(averageAge);
// }

const calcAverageHumanAge = (arr) => {
  return arr.map(age => age <= 2 ? 2 * age : 16 + age * 4)
    .filter(age => age > 18)
    .reduce((acc, age, i, array) => acc + age / array.length, 0);
}
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
