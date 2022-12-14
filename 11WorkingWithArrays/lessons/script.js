'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES





/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
// slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//Splice
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2)
console.log(arr);

// reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// join
console.log(letters.join(' - '));

// at
const ar = [23, 11, 64];
console.log(ar[0]);
console.log(ar.at(0));

console.log(ar[ar.length - 1]);
console.log(ar.slice(-1)[0]);

console.log(ar.at(-2));
console.log('jonas'.at(-1));
*/

// for (const [i, movement] of movements.entries()) {
//   if(movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('-----------forEach-----------');
// movements.forEach(function (movement, i, arr) {
//   if(movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
/*
currencies.forEach(function (value,key, map) {
  console.log(`${key}: ${value}`);
})
//Set
const currenciesUnigue = new Set(['USD', 'GBP', 'USD', 'EUR',]);
console.log(currenciesUnigue);
currenciesUnigue.forEach(function (value,key,string) {
  console.log(`${key}: ${value}`);
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

const movementsUSDArrow = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i, arr) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);
console.log(movementsDescriptions);

const deposits = movements.filter(function (mov) {
  return mov > 0;
})
console.log(deposits);

const withdrawls = movements.filter(mov => mov < 0);
console.log(withdrawls);


// reduce
const balance = movements.reduce(function (acc, cur, i, arr) {
  // console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

console.log(balance);

let balance2 = 0
for(const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else return mov;
});
console.log(max);

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner = "Jessica Davis");
console.log(account);

console.log(movements);
console.log(movements.includes(-130));

console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits)

//every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

const arr0 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr0.flat());
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
//
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

//flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

//strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

//numbers
console.log(movements);
// console.log(movements.sort()); sort like number is string

// return < 0, A, B
// return > 0, B, A
// ascending
// movements.sort((a, b) => {
//   if (a > b)
//     return 1;
//   if (b > a)
//     return -1;
movements.sort((a, b) => a - b);
console.log(movements);
  //descending
// movements.sort((a, b) => {
//   if (a > b)
//     return -1;
//   if (b > a)
//     return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

const arr = ([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
// x.fill(1);
x.fill(1, 3, 5);
console.log(x);
arr.fill(23, 4, 6);
console.log(arr);

// Array.from
const y = Array.from({length: 7}, () => 1);
console.log(y);
const z = Array.from({length: 7}, (cur, i) => i + 1);
console.log(z);

const randomDice = Array.from({length: 100}, () => Math.round((Math.random() * 5) + 1));
console.log(randomDice);
*/
//array methods Practice
// 1.
const bankDepositSum = accounts.flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);
// 2.
const numDeposits1000 = accounts.flatMap(acc => acc.movements)
//  .filter(mov => mov >= 1000).length;
//   .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);

console.log(numDeposits1000);
// 3.
const { deposits, withdrawals } = accounts.flatMap(acc => acc.movements)
  .reduce((sums, cur) => {
  //cur > 0 ? (sums.deposits += cur) : (sums.withdrawls += cur);
    sums[cur > 0 ? 'deposits' : 'widthdrawals'] += cur;
  return sums;
}, {deposits: 0, withdrawals: 0});
console.log(deposits, withdrawals);

//4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {

}
console.log(convertTitleCase('this is a nice title'));
console.log('this is a LONG title but not too long');