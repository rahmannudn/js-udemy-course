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

let login = false;

// creating username (id)
const createUsername = function (arr) {
  const initial = arr.map(
    (val, i) =>
      (val.username = val.owner
        .toLowerCase()
        .split(' ')
        .map(val => val[0])
        .join(''))
  );
};
createUsername(accounts);

const calcBalance = function (acc) {
  const balance = acc.movements.reduce((prev, cur) => prev + cur, 0);
  return balance;
};

const displayBalance = function (acc) {
  labelBalance.textContent = `${calcBalance(acc)}€`;
};

const calcSummary = function (acc) {
  const deposit = acc.movements
    .filter(val => val > 0)
    .reduce((prep, cur) => prep + cur, 0);
  labelSumIn.textContent = `${deposit}€`;

  const withdrawal = acc.movements
    .filter(val => val < 0)
    .reduce((prep, cur) => prep + cur, 0);
  labelSumOut.textContent = `${Math.abs(withdrawal)}€`;

  const interest = acc.movements
    .filter(val => val > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((prep, cur) => prep + cur, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const displayMovements = function (acc, sort = false) {
  // const sorting = sort ?  : acc;
  if (sort) {
    acc.movements.sort((a, b) => a - b);
  }
  containerMovements.innerHTML = '';
  acc.movements.forEach((val, i) => {
    const type = val < 0 ? 'withdrawal' : 'deposit';
    const html = `<div class="movements__row">
                    <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
                    <div class="movements__value">${val}€</div>
                  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const updateUI = function () {
  displayBalance(curUser);
  displayMovements(curUser);
  calcSummary(curUser);
};

let curUser;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  curUser = accounts.find(val => val.username == inputLoginUsername.value);
  curUser.pin === +inputLoginPin.value ? (login = true) : '';

  if (login) {
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome, ${curUser.owner.split(' ')[0]}`;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();

    updateUI();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const totalBalance = calcBalance(curUser);
  const transferTo = inputTransferTo.value;
  const transferAmount = inputTransferAmount.value;
  const receiverAcc = accounts.find(val => val.username === transferTo);
  if (totalBalance > transferAmount) {
    curUser.movements.push(-transferAmount);
    receiverAcc.movements.push(transferAmount);
  }
  updateUI();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const usernameInput = inputCloseUsername.value;
  const pinInput = +inputClosePin.value;
  if (usernameInput === curUser.username && pinInput === curUser.pin) {
    const index = accounts.findIndex(val => val.username === curUser.username);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = +inputLoanAmount.value;
  if (
    loanAmount > 0 &&
    curUser.movements.some(val => val >= loanAmount * 0.5)
  ) {
    curUser.movements.push(loanAmount);

    updateUI();
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(curUser, !sorted);
  sorted = !sorted;
});

// CODING CHALLANGE #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs = function (dogsJulia, dogsKate) {
  const fixJulia = [...dogsJulia];
  fixJulia.splice(0, 1);
  fixJulia.splice(-2);
  const dogs = fixJulia.concat(dogsKate);

  dogs.forEach((val, i) => {
    const checkAges = `Dog number ${i + 1} is ${
      val >= 3 ? 'an adult' : 'still a puppy'
    } , and it is ${val} years old`;

    console.log(checkAges);
  });
};

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// CODING CHALLANGE #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   const ageInHuman = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const newAge = ageInHuman.filter(age => age >= 18);
//   const avg = newAge.reduce((prev, curr, i) => prev + curr, 0);
//   return avg / newAge.length;
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((prev, cur, i, arr) => prev + cur / arr.length, 0);

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// (dogs.recommendedFood = weight ** 0.75 * 28)
const dogFunc = function (dogs) {
  dogs.forEach(dog => (dog.recommendedFood = dog.weight ** 0.75 * 28));
  const sarahDog = dogs.find(dog =>
    dog.owners.find(owner => owner === 'Sarah')
  );
  const log = dog => {
    if (
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
    ) {
      return 'Eat Okay';
    } else if (dog.curFood > dog.recommendedFood) {
      return 'Eat Too Much';
    } else if (dog.curFood < dog.recommendedFood) {
      return 'Eat Too Little';
    }
  };
  // console.log(`Sarah's ${log(sarahDog)}`);

  // 3
  const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood)
    .flatMap(dog => dog.owners);
  // console.log(ownersEatTooMuch);
  const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood)
    .flatMap(dog => dog.owners);
  // console.log(ownersEatTooLittle);

  // 4
  // console.log(`${ownersEatTooMuch}'s dogs eat Too Much`);
  // console.log(`${ownersEatTooLittle}'s dogs eat Too Little`);

  // 5
  // console.log(`${dogs.some(dog => dog.curFood === dog.recommendedFood)}`);

  // 6
  //  current > (recommended * 0.90) && current < (recommended * 1.10)
  const checkingEatingOkay = dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1;

  const okayAmount = dogs.some(checkingEatingOkay);
  // console.log(okayAmount);

  // 7
  const okayAmountArr = dogs.filter(checkingEatingOkay);
  // console.log(okayAmountArr);

  // 8
  const sortByRecFood = [...dogs].sort(
    (a, b) => a.recommendedFood - b.recommendedFood
  );
  // console.log(sortByRecFood);
};
dogFunc(dogs);
