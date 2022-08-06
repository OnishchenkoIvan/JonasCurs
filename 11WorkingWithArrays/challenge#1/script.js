'use strict';

function checkDogs (dogsJulia, dogsKate) {
  const realDogs = dogsJulia.slice(1, 3);
  const arrAdd = [...realDogs, ...dogsKate]
  arrAdd.forEach(function (item, i) {
    if (item >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${item} years old`)
    } else console.log(`Dog number ${i + 1} is still a puppy 🐶`)
  })
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])