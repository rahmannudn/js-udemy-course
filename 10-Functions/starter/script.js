'use strict';

// --- default parameter ---
const bookings = [];
const createBooking = function (
  flightNum = '1',
  numPassanger = 1,
  price = 200 * numPassanger
) {
  const booking = {
    flightNum,
    numPassanger,
    price,
  };
  bookings.push(booking);
  console.log(booking);
};
// createBooking('2', 222, 1000);
// createBooking('2', 222);
// createBooking('2', 100);
// createBooking(undefined, 100);
// --- end of default parameter ---

// --- how to passing argument works : value vs reference ---
const flight = 'LH233';
const jonas = {
  name: 'Jonas Schmadmann',
  passport: 1203123,
};

const checkIn = function (flightNum, passanger) {
  flightNum = 'LS022';
  passanger.name = 'MR. ' + passanger.name;
  const passportNum = jonas.passport;

  if (passanger.passport === passportNum) {
    alert('checked in');
  } else {
    alert('wrong passport!');
  }
  console.log(flightNum);
};

// checkIn(flight, jonas);
// console.log(flight, jonas);
// console.log(jonas.name);

// is the same as doing this ....
// const flightNum = flight;
// const passanger = jonas;

const newPassport = function (person) {
  const newPassportNum = (person.passport = Math.trunc(
    Math.random() * 10000000
  ));
  return newPassportNum;
};

// console.log(newPassport(jonas));
// checkIn(flight, jonas);
// console.log(flight, jonas);

// --- end of how to passing argument works : value vs reference ---

// --- function accepting callback funtion ---

const mergeString = function (str) {
  // return str.replaceAll(' ', '');
  return str.replace(/ /g, '');
};

const oneWordUppercase = function (str) {
  const [first, ...other] = str.split(' ');
  return first.toUpperCase(), other.join(' ');
};

const addMrFirst = function (str) {
  return `Mr. ${str}`;
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Original String : ${str}`);
  console.log(`transformed string : ${fn(str)}`);
  console.log(`transfromed by : ${fn.name}`);
};

// transformer('Hello World', mergeString);
// transformer('Hello World', oneWordUppercase);
// transformer('Javascript is the best programming language', mergeString);
transformer('Rahman Jago', addMrFirst);

const caplitalizeEachWord = function (str) {
  const txt = str.toLowerCase().split(' ');
  const txtArr = [];
  for (const i of txt) {
    txtArr.push(i.replace(i[0], i[0].toUpperCase()));
  }
  return txtArr.join(' ');
};

const checkNim = function (nim) {
  const initialNim = nim.toLowerCase().slice(0, 1);
  const str = 'mahasiswa bisnis';
  return initialNim === 'e' ? `merupakan ${str}` : `bukan ${str}`;
};

const mhsCheck = function (str, nim, fn) {
  console.log(`${caplitalizeEachWord(str)} ${fn(nim)}`);
};

// console.log(caplitalizeEachWord('maman Sudarman jabrik jaja'));
// mhsCheck('Maman Sudarman Khannedy', 'B020318101', checkNim);

// --- end of function accepting callback funtion ---

// --- function return function (closure) ---

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}${name}`);
  };
};

// const greetHi = greet('Hi');
// greetHi('Amann');

// greet('Halo')('Kuja');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
// greetArrow('Hello')('Dipaa');
// --- end of function return function ---

// --- the call and apply method ---

const lutfhansa = {
  airlane: 'Lutfhansa',
  aitaCode: 'LH',
  bookings: [],
  book(name, bookNum) {
    console.log(
      `${name} booked a seat on ${this.airlane} flight ${this.aitaCode}${bookNum}`
    );
    this.bookings.push({ flight: `${this.aitaCode}${bookNum}`, name });
  },
};

// lutfhansa.book('Sandy', 223);
const book = lutfhansa.book;

const garuda = {
  airlane: 'Garuda Indonesia',
  aitaCode: 'GI',
  bookings: [],
};

const lion = {
  airlane: 'Lion Air',
  aitaCode: 'LI',
  bookings: [],
};

// book.call(garuda, 'Brando', 335);
// console.log(garuda);
// book.call(lion, 'Nadya', 534);
// book.call(lion, 'Rado', 522);

// apply method
const flightData = ['Usup', 202];
// book.apply(lion, flightData);

// book.call(lion, 'usup', 202);
// console.log(lion);

// --- end of the call and apply method ---

// --- the bind method ---
const bookLH = book.bind(lutfhansa, 'Regi');
const bookGI = book.bind(garuda, 'Maman');
const bookLI = book.bind(lion, 'Sudrajad');
// bookLH(298);
// console.log(lutfhansa);

garuda.plane = 300;
garuda.buyPlane = function () {
  this.plane++;
  console.log(this.plane);
};

document
  .querySelector('.buy')
  .addEventListener('click', garuda.buyPlane.bind(garuda));

// partial application
const addTax = (rate, value) => value + value * rate;
// console.log(addTax(10, 20));

const addVAT = addTax.bind(null, 0.23);
// (0.23, value) => value + value * 0.23;
// console.log(addVAT(20));

// const addTaxFunc = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
const addTaxFunc = rate => value => value + value * rate;
const addVAT2 = addTaxFunc(0.23);
// addVAT2(23);
// addVAT2(82);
// --- end of the bind method ---

// --- coding challenge #1 ---
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  qustion: 'What is your fav programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  // this generates [0,0,0,0]. more in the next section
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const questionPrompt = prompt(
      `${this.qustion}\n${this.options.join('\n')} (Write option number)`
    );
    const answer = Number(questionPrompt);
    // if (typeof answer === 'number' && answer <= this.options.length - 1)
    //   this.answers[answer]++;
    // else alert('Wrong Input!!');
    typeof answer === 'number' &&
      answer <= this.options.length - 1 &&
      this.answers[answer]++;
    this.displayResult();
    this.displayResult('string');
  },
  displayResult(type = 'array') {
    if (type === 'array') console.log(this.answers);
    else if (type === 'string')
      console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};

const pollBtn = document.querySelector('.poll');
pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];
// const displayFunc = poll.displayResult.bind(null, testData1);
// console.log(poll.displayResult.call({ answers: testData1 }));
// console.log(poll.displayResult.call({ answers: testData2 }, 'string'));

// --- end of coding challenge #1 ---

// --- immediadtely invoked function expression (IIFE)
// (function () {
//   console.log('its only can be access once');
// })();

// (() => console.log('its also only can be access once'))();
// --- end of immediadtely invoked function expression (IIFE)

// --- closure ---
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passangers`);
  };
};

const booker = secureBooking();
// booker();
// booker();
// booker();
// console.dir(booker);

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

// g();
// f();
// console.dir(f);

// reassigning f function
// h();
// f();
// console.dir(f);

const boardPassangers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`we are now boarding all ${n} passangers`);
    console.log(`there are 3 group, each with ${perGroup} passangers`);
  }, wait * 1000);

  console.log(`will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
// boardPassangers(180, 3);
// --- end of closure ---

// --- coding challenge #2 ---
/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
// --- end of coding challenge #2 ---
