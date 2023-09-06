'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [
    200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300, 500, 100,
  ],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
    '2022-05-12T10:51:36.790Z',
    '2022-05-18T10:51:36.790Z',
  ],
  currency: 'ID',
  locale: 'id', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovementsDate = date => {
  // const dates = new Date(acc.movementsDates[i]);
  // const movYear = dates.getFullYear();
  // const movMonth = dates.getMonth();
  // const movDate = dates.getDate();
  // const displayDate = `${movDate}/${movMonth}/${movYear}`;

  const now = new Date();
  const dayPassed = Math.floor(Number(now - date) / (1000 * 60 * 60 * 24));
  if (dayPassed === 0) {
    return `Today`;
  } else if (dayPassed === 1) {
    return `Yesterday`;
  } else if (dayPassed < 30) {
    return `${dayPassed} day's ago`;
  } else if (dayPassed / 30 < 12) {
    return `${Math.floor(dayPassed / 30)} month ago`;
  } else {
    return `${Math.floor(dayPassed / (30 * 12))} years ago`;
  }
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  acc.movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayMovementsDate(
        new Date(acc.movementsDates[i])
      )}</div>
        <div class="movements__value">${numberFormat(acc, mov)}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const numberFormat = (acc, num) =>
  new Intl.NumberFormat(acc.currency).format(num);

const calcDisplayBalance = function (acc) {
  const totalBalance = (acc.balance = acc.movements.reduce(
    (acc, mov) => acc + mov,
    0
  ));
  const styleFormat = {
    style: 'currency',
    currency: acc.locale,
  };
  // const data = new Intl.NumberFormat(acc.locale).format(acc.balance);
  labelBalance.textContent = `${numberFormat(acc, totalBalance)}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${numberFormat(acc, incomes)}`;

  let out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  // out = out.toString().slice(1);
  labelSumOut.textContent = `${numberFormat(acc, Math.abs(out))}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${numberFormat(acc, interest)}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

const logOut = function () {
  containerApp.style.opacity = 0;
  currentAccount = '';
  labelWelcome.textContent = 'Log in to get started';
};

const startLogoutTimer = function () {
  // set the timer to 5 minute
  let time = 1 * 60 * 2;
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // print the time to UI
    labelTimer.textContent = `${min}:${sec}`;
    // time out : set the currentAccount to empty string, set the opacity of container app to 0
    if (time === 0) {
      clearInterval(timer);
      logOut();
    }
    // decrease the time every second
    time--;
  };

  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

const resetTimer = function () {
  if (timer) clearInterval(timer);
  timer = startLogoutTimer();
};

// setTimeOutLogout();
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount.currency);
  // console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // insert the date
    const now = new Date();
    // const nowFormat = `${now.getDate().toString().padStart(2, 0)}/${
    //   now.getMonth() + 1
    // }/${now.getFullYear()}`;
    const format = {
      // weekday : '2-digit',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      // hour : 'numeric',
      // minute : 'numeric'
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      format
    ).format(now);

    // Update UI
    updateUI(currentAccount);

    resetTimer();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    const now = new Date().toISOString();
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(now);
    receiverAcc.movements.push(amount);
    receiverAcc.movementsDates.push(now);

    // Update UI
    updateUI(currentAccount);

    resetTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    setTimeout(function () {
      currentAccount.movements.push(amount);
      const now = new Date().toISOString();
      currentAccount.movementsDates.push(now);
      // Update UI
      updateUI(currentAccount);
    }, 2500);
    inputLoanAmount.value = '';

    resetTimer();
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;

  if (timer) clearInterval(timer);
  timer = startLogoutTimer();
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// --- converting and checking number ---
// console.log(23 === 23.0);

// // base 10 : 0 to 9.
// console.log(3 / 3);
// console.log(3 / 40);

// // binary base 2 : 0 to 1
// console.log(0.2 + 0.1);

// // conversion
// console.log(Number(23));
// console.log(+'23');

// // parsing
// console.log(Number.parseInt('30px'));
// console.log(Number.parseInt('e30'));
// console.log(Number.parseFloat('3.2rem'));
// console.log(Number.parseFloat('5.5rem'));

// // Check if value is nan
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20PX'));
// console.log(Number.isNaN(20 / 0));

// // Check if value is finite
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20PX'));
// console.log(Number.isFinite(20 / 0));

// console.log(Number.isInteger(20));
// console.log(Number.isInteger('20'));
// console.log(Number.isInteger(+'20PX'));
// console.log(Number.isInteger(20 / 0));
// --- end of converting and checking number ---

// --- math and rounding ---
// console.log(Math.floor(Math.sqrt(20)));
// console.log(20 ** (1 / 2));
// console.log(24 ** (1 / 3));

// console.log(Math.max(29, 100, 200, 30, 10, 5));
// console.log(Math.max(29, 100, '200', 30, 10, 5));
// console.log(Math.max(29, 100, '200px', 30, 10, 5));

// console.log(Math.min(20, 10, 5, 3, 1, 9));

// console.log(Math.PI * Number.parseInt('20px'));
// console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// math random returns random number between 0..1 then its multiply with (max - min)
// console.log(randomInt(1, 20));

// rounding integer
// console.log(Math.round(20.6));
// console.log(Math.ceil(20.3));
// console.log(Math.trunc('20.9'));
// console.log(Math.floor('20.9'));

// console.log(Math.trunc('-20.9'));
// console.log(Math.floor('-20.3'));

// rounding float(decimal)
// console.log((10.921).toFixed(2));
// --- end of math and rounding ---

// --- the reminder operator ---
const checkOddOrEven = value =>
  +value % 2 === 0 ? 'Even Num' : +value % 2 !== 0 ? 'Odd Num' : 'Not A number';
// console.log(checkOddOrEven(20));
// console.log(checkOddOrEven(11));

const funFunc = function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'green';
  });
};
labelBalance.addEventListener('click', funFunc);
// --- end of the reminder operator ---

// --- numeric separators ---
const rupiah = 1.198_200_00; //1.198,200,00
// console.log(rupiah);

const rupiah2 = 1_198_200_00; //1.198,200,00
// console.log(rupiah2);

const num2 = 30_02;
// console.log(num2);
const num3 = 30_02;

// console.log(Number('20_20'));
// console.log(parseInt('20_20'));
// --- end of numeric separators ---

// const exStr = `Pemprograman Dasar+Dr.Zakir Naik_3;
//               jaringan komputer+Dr.Usup_2;
//               Algoritma 2+Dr.Maman_2`;
// const newStr = exStr
//   .replaceAll('\n', '')
//   .split(';')
//   .map(val => val.trim())
//   .forEach(val => {
//     console.log(
//       `Mata Kuliah ${val
//         .replaceAll('+', ', Dosen: ')
//         .replaceAll('_', ', ')} sks`
//     );
//   });
// console.log(newStr);

// --- working with big int ---
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 - 1); //the result of this operation will be the maximum safe number. if a number more than this, javascript might return wrong number
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

// console.log(213218372983219n);
// console.log(BigInt('213218372983219'));

// operation
// console.log(20000n + 20000n);
// console.log(-1239028321n + -9013898323n);

// const a = 13838908212123n;
// const b = 20;

// // console.log(a * b); //this operation will give an error
// console.log(`${a} is really a long number`);
// logical
// console.log(10000n < 20000);
// console.log(10000n === 10000);
// console.log(10000n == 10000);

// console.log(10n / 2n);
// console.log(10n / 3n);

// --- end of working with big int ---

// --- creating a date ---
// console.log(new Date(2000, 7, 13, 13, 20));

// const now = new Date();
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.toISOString());
// console.log(now.getDate());

// now.setFullYear(2020);
// now.setMonth(11);
// now.setDate(11);
// now.setHours(13);
// console.log(now);
// --- end of creating a date ---

// --- operation with date ----
// const now = new Date();
// console.log(now);
// const calcDaysPassed = (date1, date2) =>
//   Math.floor(Number(date1 - date2) / (1000 * 60 * 60 * 24));
// console.log(calcDaysPassed(now, new Date(2000, 8, 13)));

// --- end of operation with date ----

// --- internationalizing dates ---
// const test = new Date();
// const options = {
//   // hour: 'numeric',
//   // minute: 'numeric',
//   day: 'numeric',
//   month: 'short',
//   year: 'numeric',
//   // weekday : '2-digit'
// };
// labelTimer.textContent = new Intl.DateTimeFormat('id', options).format(test);
// --- end of internationalizing dates ---

// --- Timers : setTimeout and setInterval ---
const ingridients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`here's your pizza 🍕 with ${ing1} and ${ing2}`),
  1000,
  ...ingridients
);
// console.log('waiting...');
// console.log('waiting...');
// console.log('waiting...');
// if (ingridients.includes('spinach')) clearTimeout(pizzaTimer);

// setinterval
// setInterval(() => {
//   const event = new Date();
//   let minute = event.setMinutes(5);
//   let second = event.setSeconds(0);
//   minute = event.getMinutes();
//   second = event.getSeconds();
//   console.log(`${minute}:${second}`);
// }, 1000);

const a = new Date();
const b = a - 1000 * 60 * 5;
console.log(b);

// --- end of Timers : setTimeout and setInterval ---
