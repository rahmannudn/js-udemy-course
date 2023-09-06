'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  name: 'Classico Italiano',
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  //4.a create a method that will return the order of array (part of destructuring object)
  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },

  // --- desctructuring object ---
  // 6 create a function that will destructuring the argument automaticly
  orderDelivery: function ({
    staterIndex = 1,
    mainIndex = 1,
    time = '20.00',
    address = 1,
  }) {
    console.log(
      `Order Delivered! ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // 7 a method takes argument and display it (part of spread operator)
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here's is your delicious pasta with ${ing1}, ${ing2},${ing3}`);
  },
  // 8 a method with rest patern parameters (part of rest pattern)
  orderPizza: function (mainIngridient, ...otherIngridients) {
    console.log(mainIngridient, otherIngridients, typeof otherIngridients);
  },
};

// restaurant.orderDelivery({
//     time: '21.00',
//     address: 0,
//     mainIndex: 2,
//     staterIndex: 3,
// });

// //1 javascript will automaticly match the variables name with restaurant properties
// const {
//   name,
//   mainMenu,
//   categories,
//   openingHours: { thu: selasa },
// } = restaurant;
// console.log(name, mainMenu, categories, selasa);
// restaurant.name = 'Mantappu Jiwa';
// console.log(name);

// 2 declaring variables name with restaurant properties //TODO
// const {
//     name: restaurantName,
//     categories: tags,
//     hours = openingHours,
// } = restaurant;
// console.log(restaurantName, tags, hours);

// //3 default values
// const { address: restaurantAddress = [], location: restaurantLocation = [] } =
// restaurant;
// console.log(restaurantAddress, restaurantLocation);

// //4 mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 11, c: 10 };
// const { a: d, b: e } = obj;
// console.log(a, b);

// //5 nested object
const {
  fri: { open: start, close: end },
} = restaurant.openingHours;
// console.log(start, end);

const bio = {
  callName: 'aman',
  hobby: 'playing games',
  family: ['ujang', 'asep', 'suparman'],
  birthYear: 1999,
  calcAge: function (year) {
    return year - this.birthYear;
  },
  schoolLevel: function (year) {
    const age = year - this.birthYear;
    if (age < 6 && age <= 12) {
      console.log(`${age} Elementary School`);
    } else if (age > 12 && age <= 15) {
      console.log(`${age} Junior High School`);
    } else if (age > 15 && age <= 18) {
      console.log(`${age} Senior High School`);
    } else {
      console.log(`${age} is expired`);
    }
  },
};

// console.log(bio.schoolLevel(2021));
// console.log(bio.schoolLevel(2021));
// --- end of desctructuring object ---

// --- desctructuring array ---
// const arr = [1, 2, 3];
// put above values into variable manually
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// put arr values into variable using desctructing techic
// const [x, y, z] = arr;
// console.log(x, y, z);

// 1 desctructing categories array that is [0,1] index order into variables called main and secondary
// const [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// 2 desctructing categories array that is [0,2] (skip [1]) index order into variables called main and secondary
// const [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// 3.1 switch main values to secondary values without desctructing
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// 3.2 switch main values to secondary values with desctructing
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// 4.b receive two return values from a function
// const [main, secondary] = restaurant.order(2, 0);
// console.log(main, secondary);
// 5 desctructing a nested array
const nested = [2, 4, [1, 3]];
// const [third, , fourth];
const [first, second, [third, fourth]] = nested;
// console.log(first, second, third, fourth);

// 6 default values
const ex = [1, 2];
const [p = 1, q = 1, r = 1] = ex;
// console.log(p, q, r);

// --- end of desctructuring array ---

// --- spread operator ... ---

const arr = [1, 2, 3];
//1 merge new array manually
const badArr = [4, 5, 6, arr[0], arr[1], arr[2]];
// console.log(badArr);
//2 merge arr with spread operator
const goodArr2 = [4, 5, 6, ...arr];
// console.log(goodArr2);

const goodArr1 = [4, 5, 6, arr];
// console.log(goodArr1);
// console.log(...goodArr1);

//3 copy and add a new values to an array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//4 copy array
const mainNewMenu = [...restaurant.mainMenu];

//5 merge 2 or more array
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// const menu2 = restaurant.mainMenu.concat(restaurant.starterMenu);
// console.log(menu2);

// spread operator only works on iterables. most of javascript types is iterables such as : string, number, array, etc (except: object)
//6 unpacking string separated by ''

// const str = 'Aman';
// first way
// const newStr = [...str];
// console.log(newStr);
// second way
// console.log(...str);

// multiples value seperates by comma only expected on array and argument of function

// real world example
const ingredients = [
  // prompt("Let's make pasta!, Ingredient 1? "),
  // prompt('Ingredient 2? '),
  // prompt(' Ingredient 3? '),
];

// console.log(ingredients);

// send arguments manually
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// send arguments using spread operator techic
// restaurant.orderPasta(...ingredients);

// copying object
const newRestaurant = {
  foundedIn: 1999,
  ...restaurant,
  founder: ['Kim Do Yeon', 'Aman Jago'],
};
// newRestaurant.name = 'Deliciouso Mantapo';
// console.log(newRestaurant);
// --- end of spread operator ... ---

//--- rest pattern and parameters ---
// rest pattern is a tecnic which will take multiple value and put them into an array

// 1 object
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// 2 create a function that will accept much argument and put it into array called numbers
// function add(...numbers) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) total += numbers[i];
//     console.log(total);
//     console.log(numbers);
// }
// restaurant.orderPizza('onion');
// add(1, 2, 3, 4, 5, 6, 9);
// const x = [23, 5, 7];
// add(...x);

//--- end of rest pattern and parameters ---

// --- short circuiting && and || ---
// pada or javascript akan membandingkan masukan lalu mencari nilai yang benar dan jika semua nilai salah maka nilai terakhir yang akan di kembalikan
// console.log(null || 0 || undefined);
// console.log(0 || '' || 'n');
// console.log('Aman' || 1 || 'Do Yeon');
// console.log(null || undefined || 0 || 'Do Yeon' || 'Aman');

// restaurant.numGuest = 100;
// const guess1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guess1);

// const guess2 = restaurant.numGuest || 10;
// console.log(guess2);

// console.log('--- AND && ---');
// pada AND javascript akan membandingkan beberapa nilai yang dimasukkan dan akan mengembalikan nilai yang hasilnya false jika semua nilai bernilai benar maka nilai terakhir yang akan dikembalikan
// console.log(9 && 10);
// console.log(undefined && null && 0 && 'jonas');

// mengecek apakah properti orderpizza ada di dalam object restaurant
// menggunakan if statement
// if (restaurant.orderPizza) {
//     restaurant.orderPizza[('mushrooms', 'spinach')];
// }
// menggunakan &&
// restaurant.orderPizza && restaurant.orderPizza('musroom', 'spinach');

// --- end of short circuiting && and || ---

// --- nullish coaescing operator ---
// nullish akan mengembalikan nilai jika terdapat masukan berupa undifined dan null
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
// console.log(guests);

const correctGuests = restaurant.numGuests ?? 10;
// console.log(correctGuests);

// --- end of nullish coaescing operator ---

// --- logical assignment operators ---
const rest1 = {
  name: 'Capri',
  numGuests: 10,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Josh Iskandar',
};

// 1 OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// console.log((rest1.numGuests ||= 10));
// console.log((rest2.numGuests ||= 10));

// 2 NULLISH assignment operator (NULL OR UNDIFINED)
// console.log((rest1.numGuests ??= 10));
rest2.numGuests ??= 10;

// 3 AND assignment operator
// rest1.owner = rest1.owner && 'Announ';
// rest2.owner = rest2.owner && 'Announ';
rest1.owner &&= 'Announ';
rest2.owner &&= 'Announ';

// console.log(rest1);
// console.log(rest2);

// --- end of logical assignment operators ---

// --- coding challenge 1 ---

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// 1
// const players1 = game.players[0];
// const players2 = game.players[1];

// const [players1, players2] = game.players;

// 2
// const [gk, ...fieldPlayers] = players1; //rest pattern
// console.log(gk, fieldPlayers);

// 3
// const allPlayers = [...players1, ...players2]; //spread operator
// console.log(allPlayers);

// 4
// const players1Final = [...players1, 'Thiago', 'Countinho', 'Perisic'];
// console.log(players1Final);

// 5
// const team1 = game.odds.team1;
// const team2 = game.odds.team2;
// const draw = game.odds.x;
// const {
//   odds: { team1, x: draw, team2 },
// } = game; //nested desctructuring

// 6
// const printGoals = function (...players) {
//   for (const i of players) console.log(i);
//   console.log(`${players.length} goals were scored`);
// };

// console.log(...game.scored);

// printGoals('Daniels', 'Surti', 'Joshy', 'Bandid');

// 7
// team1 < team2 && console.log(`Team 1 more likely to win`);
// team1 > team2 && console.log(`Team 2 more likely to win`);

// --- end of coding chellenge 1 ---

// --- the for of loop ---
// const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(allMenu);
// for (const i of allMenu) console.log(i);
// for (const i of allMenu.entries()) console.log(i);
// for (const i of allMenu.entries()) console.log(`${i[0] + 1}: ${i[1]}`);
// for (const [i, el] of allMenu.entries()) console.log(`${i + 1}: ${el}`);
// --- end of the for of loop ---

// --- enhanced object literals ---
// there are 3 ways declaring object literals that was introduces in ES 6
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[3 + 1]]: {
    open: 11,
    close: 23,
  },
  [weekDays[3 + 2]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant2 = {
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  name: 'Classico Italiano',
  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
  // ES6 enhanced object literals
  openingHours, //copying object above
  orderDelivery: function ({
    staterIndex = 1,
    mainIndex = 1,
    time = '20.00',
    address = 1,
  }) {
    console.log(
      `Order Delivered! ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // declaring method without function keyword
  orderPasta(ing1, ing2, ing3) {
    console.log(`here's is your delicious pasta with ${ing1}, ${ing2},${ing3}`);
  },
  orderPizza(mainIngridient, ...otherIngridients) {
    console.log(mainIngridient, otherIngridients);
  },
};
// console.log(restaurant2);
// --- end of enhanced object literals ---

// --- optional chaining (?) ---

// console.log(restaurant2.openingHours.fri.open);
// 1 (?) checking if its exis or not. if exis its will display and if not it will be undifined
// console.log(restaurant2.openingHours?.wed?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// // 2
// for (const i of days) {
//   // console.log(i);
//   const open = restaurant2.openingHours[i]?.open ?? 'Closed';
//   console.log(`we open ${i} at ${open}`);
// }

// 3 method
// console.log(
//   restaurant2?.orderPasta?.('Onion', 'Risotto', 'Salt') ?? 'Method Doesnt exist'
// );

// console.log(restaurant2?.starterMenu);

// 4 array
// const user = [{ name: 'jajang', age: 20 }];

// if (user.length > 0) console.log(user[0].name);
// else console.log('Property doesnt exist');

// console.log(user[0]?.age ?? 'Property doesnt exist');
// --- end of optional chaining (?) ---

// --- looping object : object keys, values, entries ---
// 1 object key
const properties = Object.keys(openingHours);
// console.log(properties);
// for (const day of properties) console.log(day);

// 2 combine with for loop
let openStr = `We are open on ${properties.length} days : `;
for (const day of properties) {
  openStr += `${day}, `;
}
// console.log(openStr);

// 3 property values
// const values = Object.values(openingHours);
// for (const { open, close } of values)
//   console.log(`we're open in ${open} , close in ${close}`);

// 4 entires object
const entires = Object.entries(openingHours);
// console.log(entires);

// for (const [key, { open, close }] of entires)
//   console.log(`In ${key} we're open at ${open}, close at ${close}`);
// --- end of looping object : object keys, values, entries ---

// --- coding challenge #2 ---

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// 1
// for (const [i, playerName] of game.scored.entries())
//   console.log(`Goal ${i + 1} : ${playerName}`);

// 2. Use a loop to calculate the average odd and log it to the console
// (We already studied how to calculate averages, you can go check if you don't remember)
// let avg = 0;
// const odds = Object.values(game.odds);
// for (const i of odds) avg += i;
// {
//   avg /= odds.length;
//   console.log(avg);
// }

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// for (const [key, values] of Object.entries(game.odds)) {
//   const str = key == 'x' ? `Draw : ${values}` : `Victory : ${values}`;
//   console.log(`Odd of ${key} ${str}`);
// }

// BONUS: Create an object called 'scorers' which contains the names of
// the players who scored as properties, and the number of goals as the value.
// In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const game = {
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
};
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  // if (scorers[player]) {
  //   scorers[player] = scorers[player] + 1;
  // } else {
  //   scorers[player] = 1;
  // }
}
// console.log(scorers);
// --- end of coding challenge #2 ---

// --- sets ---
const randomArr = ['maman', 'subardi', 'maman', 'ayu', 'ayu', 'aca', 'ayu'];
const setRandomArr = new Set(randomArr);
// console.log(setRandomArr);
// console.log(setRandomArr.has('budi'));
// console.log(setRandomArr.has('maman'));
// console.log(setRandomArr.size);
setRandomArr.delete('aca');
// console.log(setRandomArr);
setRandomArr.add('ujang');
// console.log(setRandomArr);
// console.log(setRandomArr.clear());

// for (const i of setRandomArr) {
//   console.log(i);
// }
// convert sets into array
// const newRandomArr = [...setRandomArr];
// console.log(newRandomArr);

// --- end of sets ---

// --- map ---
const newRest = new Map();
newRest
  .set('Name', 'Selero Ibu')
  .set('Open', 11)
  .set('Close', 23)
  .set('owner', 'maman garuk')
  .set('menuAndalan', ['rendang ayam', 'mata sapi', 'sate kodok'])
  .set(true, 'WE RE OPEN :D')
  .set(false, 'WE ARE CLOSED :(')
  .set('Will Closed', 'We Will Closed in hours');

const time = 22;
// console.log(
//   newRest.get(time > newRest.get('Open') && time < newRest.get('Close'))
// );
const arrKey = [1, 2];
newRest.set(arr, 'Hello');
newRest.set(document.querySelector('h1'), 'Heading');
// console.log(newRest.has('owner'));
// console.log(newRest.delete('owner'));
// console.log(newRest.size);
// console.log(newRest);
// newRest.clear();
// time > open && time < close
// --- end of map ---

// --- map : iteration ---
const question = new Map([
  ['question', 'What is the most used programming language'],
  [1, 'JAVA'],
  [2, 'Pyhton'],
  [3, 'C'],
  [4, 'Javascript'],
  ['correct', 4],
  [true, 'Correct 🎉'],
  [false, 'WRONG ❌! Try Again '],
]);
// console.log(question);

// convert object into map
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key !== 'number') continue;
//   console.log(`Answer ${key} : ${value}`);
// }
// const answer = Number(prompt('Your Answer?'));
// console.log(question.get(answer === question.get('correct')));

// convert map to array
// console.log([...question]);
// console.log([...question.keys]);
// console.log(...question.values);
// console.log([...question.entries]);

// --- end of map : iteration ---

// --- coding challenge #3 ---

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀

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
// 1
// const events = [...new Set(gameEvents)];
// 2
// gameEvents.delete(64);
// console.log(gameEvents);
// 3
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// 3.1 (BONUS)
const times = [...gameEvents.keys()].pop();
// console.log(times);
// console.log(
//   `An event happened, on average, every ${times / gameEvents.size} minutes`
// );
// 4
// for (const [key, value] of gameEvents) {
//   const round = key <= 45 ? 'First' : 'Second';
//   console.log(`[${round} Half] ${key} : ${value}`);
// }
// --- end of coding challenge #3 ---

// --- working with string part-1 ---

const namaLengkap = 'Kim Do Yeon';
// console.log(namaLengkap.length);
// console.log(namaLengkap.indexOf('D'));
// console.log(namaLengkap.lastIndexOf('o'));
// console.log(namaLengkap.indexOf('Yeon'));
// console.log(namaLengkap.slice(1));
// console.log(namaLengkap.slice(0, 6));
// console.log(namaLengkap.slice(0, namaLengkap.lastIndexOf('o')));
// console.log(namaLengkap.slice(namaLengkap.lastIndexOf(' ') + 1));
// console.log(namaLengkap.slice(-1));

// function chechMiddleSeat(seat) {
//   const s = seat.slice(-1);
//   if (s === 'C' || s === 'E') console.log('You Got Middle Seat 😁');
//   else console.log(`You Got Lucky 😎`);
// }

// chechMiddleSeat('11B');
// chechMiddleSeat('9C');

// --- end of working with string part-1 ---

// --- working with string part-2 ---

const airplane = 'Garuda Indonesia';
// console.log(airplane[0]);
// console.log(airplane.toLowerCase());
// console.log(airplane.toUpperCase());
// console.log(airplane.slice(airplane.lastIndexOf(' ')).toLowerCase());
// console.log(airplane.slice(0));
const namaAlay = 'MaMAn KuSnaeDI';
const namaAlayLower = namaAlay.toLowerCase();
const correctNamaAlay =
  namaAlayLower[0].toUpperCase() +
  namaAlayLower.slice(1, namaAlayLower.indexOf(' ') + 1) +
  namaAlayLower[namaAlayLower.lastIndexOf(' ') + 1].toUpperCase() +
  namaAlayLower.slice(namaAlayLower.lastIndexOf(' ') + 2);
// console.log(correctNamaAlay);

// COMPARING EMAIL
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n    ';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(normalizedEmail === email);

// replace method
const namaSaya = 'Regi Aman Subakti';
const ubahNamaSaya = namaSaya.replace('Regi', 'Eko');
// console.log(ubahNamaSaya);
const announcement =
  'diberitahukan kepada murid sdn sungai andai untuk segera berkumpul dilapangan, segera!!!';
// console.log(announcement.replace('segera', 'secepatnya'));
// console.log(announcement.replaceAll('segera', 'secepatnya'));
// menggunakan regex
// console.log(announcement.replace(/segera/g, 'secepatnya'));

// boolean
const plane = 'Airbus A320neo';
// console.log(plane.includes('neo'));
// console.log(plane.includes('23Neo'));
// console.log(plane.startsWith('Airbus'));

// if(plane.startsWith('Airbus') &&  plane.includes('A320')){
//   console.log(`Part of the NEW Airbus Family`);
// }

// practice exercise
const checkBaggage = function (items) {
  items.toLowerCase();
  if (items.includes('knife') || items.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome abord');
  }
};

// checkBaggage('knife');
// checkBaggage('some food and gun for protection');
// checkBaggage('phone and laptop')
// console.log('a+very+nice+code'.replaceAll('+',' '));
// --- end of working with string part-2 ---

// --- working with string part-3 ---
// split and join
// console.log('a+very+nice+song'.split('+'));
const namaDoi = 'kim do yeon selca'.split(' ');
const [firstName, ...lastName] = namaDoi;
const newName = ['Mrs.', firstName, lastName].join(' ').replaceAll(',', ' ');
// console.log(firstName,lastName.join(' '));
// console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUppercase = [];
  for (const n of names) {
    // namesUppercase.push(n[0].toUpperCase() + n.slice(1));
    namesUppercase.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUppercase.join(' '));
};
// capitalizeName('kim do yeon');
// capitalizeName('usup kurniawan subli');
// capitalizeName('takya genji kurniawan khannedy');

// padding
const username = 'rahmannudn';
// console.log(username.padStart(20,'*').padEnd(25,'+'));
// console.log(username.padStart(15,'+').padEnd(21,'()'));

const createMaskedNumber = function (number) {
  const maskNumber = number + '';
  return maskNumber.slice(-4).padStart(maskNumber.length, '*');
};
// console.log(createMaskedNumber(93239082));

// repeat
const message2 = 'Bad Weather... All Departures Delayed';
// console.log(message2.repeat(2));

function planesInLine(n) {
  console.log(`There Are ${n} planes in line ${'✈'.repeat(n)}`);
}
// planesInLine(5);

// --- end of working with string part-3 ---

// --- coding challenge #4 ---
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const textAreaInput = document.querySelector('textarea');
const buttonInput = document.querySelector('button');

buttonInput.addEventListener('click', function () {
  const input = textAreaInput.value.split('\n');
  for (const [i, values] of input.entries()) {
    const fixedInput = values.toLowerCase().trim().padEnd(20, ' ');
    const [first, second] = fixedInput.split('_');
    console.log(
      `${first}${second.replace(
        second[0],
        second[0].toUpperCase()
      )}${'▶'.repeat(i + 1)}`
    );
  }
});

// --- end of coding challenge #4 ---

// --- string methods pratice ---

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getStr = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.includes('Delayed') ? '🔴' : ''} ${type
    .replaceAll('_', ' ')
    .trim()} from ${getStr(from)} to ${getStr(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);
  console.log(output);
}

// --- end of string methods pratice ---
