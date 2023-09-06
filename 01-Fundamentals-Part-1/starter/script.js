// let js = "this is javascript";
// console.log(js);
// console.log(40+8+23-10);

// let firstName = "Aman jago";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// true;
// console.log(true);

// boolean data type example
// let javaSciptIsFun = true;
// console.log(javaSciptIsFun);

// checking datatype of the value using typeof
// console.log(typeof true);
// console.log(typeof javaSciptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "umam");

// // dynamic typing, its like overiding
// javaSciptIsFun = "yes";
// console.log(typeof javaSciptIsFun);

// undefine type data example
// let year;
// console.log(year);
// console.log(typeof year);

// year = 2000;
// console.log(typeof year);

// // nulll type data example
// console.log(typeof null);

// using let declaration because maybe later the value of variable will be change
// let age = 30;
// age = 31;

// using cons declaration because the value will never change
// const birthYear = 2000;

// we also can declare a variable without using let or cons, but thats not recommended. because this doesn't create a scope a variable, instead javascript will declare it to global object
// lastname = "kuman";
// console.log(lastname);

// math operator
// const now = 2020;
// const myAge = now - 2000;
// const momAge = now - 1964;
// const differentAge = momAge - myAge;
// console.log("Different Age" + " = " + differentAge);

// console.log(myAge * 2, myAge/10, 2**3);
// // 2**3 means 2 power of 3 = 2*2*2

// const myName = "Aman";
// const familyName = "Jago";
// console.log("This is my full name" + " : "+ myName+familyName);

// // asignment operator
// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *= 4;
// x ++; //x + 1
// x --; //x - 1
// console.log(x);

// //comparison operator <, >, <=, >=
// console.log(momAge > myAge);
// console.log(myAge >= 18);

// const isFullAge = myAge >= 18;

// console.log(now - 2000 > now - 2002);

// const now  = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x,y;
// x = y = 20 - 10 - 5;
// console.log(x,y);

// const averageAge = (ageJonas + ageSarah) / 2;
// const wrongAgeCalc = ageJonas + ageSarah / 2;
// console.log(ageJonas, ageSarah , averageAge, wrongAgeCalc);

// --------- coding challange 1 -------------
// test data 1
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const markBMI = markWeight / (markHeight * markHeight);
// const johnBMI  = johnWeight / (johnHeight * johnHeight);
// const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI ,johnBMI);
// console.log(markHigherBMI);

// // test data 2
// const markWeight2 = 95;
// const markHeight2 = 1.88;
// const johnWeight2 = 85;
// const johnHeight2 = 1.76;

// const markBMI2 = markWeight2 /  markHeight2 ** 2;
// const johnBMI2  = johnWeight2 / johnHeight2 ** 2;
// const markHigherBMI2 = markBMI2 > johnBMI2;

// console.log(markBMI2 ,johnBMI2);
// console.log(markHigherBMI2);

// ---------string and template litterals--------------
// const name = "Aman";
// const job = "Programmer";
// const birthYear = 2000;
// const year = 2020;

// // using double quote to concate many string
// const aman = "I'am " + name + ", a " + (year-birthYear) + " years old " + job;
// console.log(aman);

// // using concatination using es6
// const amanNew = `I'am ${name}, a ${year - birthYear} years old ${job}`;
// console.log(amanNew);

// console.log("Just a regular string");

// console.log(`String with \n multipe \n\ lines`);

// console.log(`String
// multiple
// lines`);

// -------------- if else -------------------
// const age = 15;
// if(age >= 18){
//     console.log(`Sarah can start driving license 🤙🥴`);
// }else{
//     const yearsLeft = (age - 18);
//     console.log(`Sarah is too young. wait another ${yearsLeft} years `);
// }

// const birthYear = 2012;
// let country;
// if(birthYear <= 2000){
//     country = 20;
// }else{
//     country = 21;
// }
// console.log(country);

// --------- coding challange 2 -------------
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const markBMI = markWeight / (markHeight * markHeight);
// const johnBMI  = johnWeight / (johnHeight * johnHeight);
// const markHigherBMI = markBMI > johnBMI;

// if(markBMI > johnBMI){
//     console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`);
// }else{
//     console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
// }

// ----------- type conversion and coersion -------------

// const inputYear = '2000';
// // this is typeconversion
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear)+18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// this is type coersion
// console.log('i am' + 23 + ' years old');
// console.log('23'-'10'-3);
// console.log('23'/'2');
// console.log('23'>'18');

// let n = '1' + 1; //11
// n = n -1; //11-1=10
// console.log(n);

// --------- Truthy and falsy value -------------
// 5 falsy values : 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Aman")); // it sould be true
// console.log(Boolean({})); //this is an empty object
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//     console.log("Don't spend it all");
// } else{
//     console.log("You don't have a money and u sould get a job");
// }

// let age;
// if (age) {
// console.log("age is defined");
// }else{
// console.log("age is UNDIFINED");
// }

// ------------- equality operators == vs === ---------------
// const age = '18';
// if (age === 18) {
//    console.log('You just became an adult (strict equals)');
// }

// if (age == 18) {
//    console.log('You just became an adult (loose equals)');
// }

// const favourite = Number(prompt("Whats you fav number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//     console.log("cool! 23 is an amazing number");
// }else if(favourite === 9){
//     console.log("cool! 9 is also an amazing number");
// }else if(favourite === 7){
//     console.log("cool! 7 is also an amazing number");
// }else{
//     console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("why not 23?");

// ------------ logical operators -----------------
// const hasDriverLicense = true; //A
// const hasGoodVision = true; // B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// // if (hasDriverLicense && hasGoodVision) {
// //     console.log("Sarah able be drive")
// // }else{
// //     console.log("Sarah can't be drive")
// // }

// const isTired = false;
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if (!hasDriverLicense && hasGoodVision && isTired) {
//     console.log("Sarah able be drive");
// }else{
//     console.log("Sarah can't be drive");
// }

// -------------- coding challange 3 ------------
// const dolphinsScore = (96+108+89) / 3;
// const koalasScore  = (88+91+110) /3;

// console.log(dolphinsScore, koalasScore);
// if (koalasScore > dolphinsScore) {
//     console.log("Koala Win");
// }else if (dolphinsScore > koalasScore) {
//     console.log("Dolphin Win");
// }else if(koalasScore === dolphinsScore){
//     console.log("both win");
// }

// // Bonus 1
// const dolphinScoreBonus1 = (97 + 112 + 101)/3;
// const koalaScoreBonus1 = (109+95+123)/3;

// console.log(dolphinScoreBonus1, koalaScoreBonus1);
// if (koalaScoreBonus1 > dolphinScoreBonus1 && koalaScoreBonus1 >= 100) {
//     console.log("Koala Win The Bonus 1");
// }else if (dolphinScoreBonus1 > koalaScoreBonus1 && koalaScoreBonus1 >= 100) {
//     console.log("Dolphin Win The Bonus 1");
// }else if(koalaScoreBonus1 === dolphinScoreBonus1){
//     console.log("both win The Bonus 1");
// }

// // Bonus 2
// const dolphinScoreBonus2 = (97 + 112 + 101)/3;
// const koalaScoreBonus2 = (109+95+106)/3;

// console.log(dolphinScoreBonus2, koalaScoreBonus2);
// if (koalaScoreBonus2 > dolphinScoreBonus2 && dolphinScoreBonus2 >= 100) {
//     console.log("Koala Win The Bonus 2");
// }else if (dolphinScoreBonus2 > koalaScoreBonus2 && dolphinScoreBonus2 >= 100) {
//     console.log("Dolphin Win The Bonus 2");
// }else if(dolphinScoreBonus2 === koalaScoreBonus2 && koalaScoreBonus2 >= 100 && dolphinScoreBonus2 >= 100){
//     console.log("both win The Bonus 2");
// }else{
//     console.log("No One Wins The Bonus 2");
// }

// -------------------- the swith case statement ---------------
// const day = 'monday';

// switch (day) {
//     case 'monday':    // if(day === monday)?
//     case 'tuesday':
//     console.log("This is Monday Or Tuesday");
//     break;
//     case 'wednesday':
//     console.log("This is Wednesday");
//     break;
//     case 'thursday':
//     console.log("This is thursday");
//     break;
//     case 'friday':
//     console.log("This is Friday");
//     break;
//     case 'saturday':
//     console.log("This is saturday");
//     break;
//     case 'sunday':
//     console.log("This is Sunday");
//     break;
//     default:
//     console.log("Invalid Day")
//     break;
// }

// if(day === 'sunday'){
//     console.log("This is Sunday");
// }else if(day === 'monday' || day === 'tuesday'){
//     console.log("This is Monday Or Tuesday");
// }else if(day === 'wednesday'){
//     console.log("This is Wednesday");
// }else if(day === 'thursday'){
//     console.log("This is thursday");
// }else if(day === 'friday'){
//     console.log("This is Friday");
// }else if(day === 'saturday'){
//     console.log("This is saturday");
// }else{
//     console.log("Invalid Day");
// }

// ------------------- ternary operator --------------------------
// const age = 23;
// // age >= 18 ? 'I like to drink wine' : 'i drink a water';
// // console.log(age);

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (drink2 >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);

// $condition = age >= 18 ? 'wine' : 'coffe';
// console.log('I like to drink ${condition}');

// ---------------- coding challenge------------
// if the bill around 50 and 300 the tip is 15%. if the bill value is different the tip will be 20%. 'output: bill value, tip value, final value'
// 274,40,430

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`the bil is ${bill}, the tip is ${tip} and the total value is ${bill + tip}`);

// -------------------- array -----------------------
// const aman = ['aman', 'jago', 2021 - 2000];
// console.log(aman);
// console.log(aman.length);
// aman[1] = 'do yeon bf';
// console.log(aman);

// const calcAge = function(birthYear) {
//     return 2021 - birthYear;
// }

// const birthYear = [2021, 2000, 1999, 1991];
// // console.log(calcAge(birthYear[2]));
// const age1 = calcAge(birthYear['0']);
// const age2 = calcAge(birthYear['1']);
// const age3 = calcAge(birthYear[birthYear.length - 1]);
// // console.log(age3);
// const ages = [age1, age2, age3];
// console.log(ages);

// ----------------- array method -------------------------
// const amanFriends = ["iki", "riyo", "isan", "andika"];
// iqbal will add to amanFriend at the last order
// const amanNewFriends = amanFriends.push["iqbal"];
// console.log(amanFriends);
// console.log(amanNewFriends);
// arif will add to amanFriend at the first order
// amanFriends.unshift("arif");
// console.log(amanFriends);

// // remove element
// amanFriends.pop(); //last value
// console.log(amanFriends);
// amanFriends.shift(); //first
// console.log(amanFriends);
// amanFriends.shift();
// console.log(amanFriends);

// // check element
// console.log(amanFriends.indexOf('isan'));
// console.log(amanFriends.indexOf('jonas'));

// console.log(amanFriends.includes("jonas"));
// console.log(amanFriends.includes("isan"));

// ----------------- coding challenge #2 (array) ----------------
// if bill value around 50 and 300 then tip 15%, if the value is defferent then tip 20%
// function calcTip(bill) {
//     // if (billvalue >= 50 && billvalue < 300) {
//     //     return (billvalue * 0.15);
//     // } else {
//     //     return (billvalue * 0.2);
//     // }
//     return bill >= 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const total = [(bills[0] + bills[1] + bills[2]) + (tips[0], tips[1], tips[2])];
// console.log(total);

// -------------------------- javascript object -------------------------------
// const aman = {
//     firstName: 'aman',
//     lastName: 'jago',
//     age: 2021 - 2000,
//     job: 'programmer',
//     friends: ['isan', 'iki', 'riyo', 'andika']
// };

// console.log(aman);
// console.log(aman.friends);
// console.log(aman['lastName']);

// const nameKey = 'Name';
// // console.log(aman['first + nameKey']);
// // console.log(aman['last + nameKey']);

// // const insterestIn = prompt(`what do you want to know about aman, choose between 'firstName, lastName, age, job, friends' `);
// // console.log(aman.insterestIn);
// // if (aman[insterestIn]) {
// //     console.log(aman[insterestIn]);
// // } else {
// //     console.log(`wrong input! choose between 'firstName, lastName, age, job, friends'`);
// // }

// // adding property to an object
// aman.location = 'bjm';
// aman['twitter'] = '@ItilKudanil';
// console.log(aman);

// console.log(`${aman.firstName} has ${aman.friends.length} friends, and his best friend called ${aman.friends[0]}`);

// ------------------- object method ------------------
// const aman = {
//     firstName: 'aman',
//     lastName: 'jago',
//     birthYear: 2000,
//     job: 'programmer',
//     friends: ['isan', 'iki', 'riyo', 'andika'],
//     hasDriverLicense: true,
//     // calcAge: function(birthYear) {
//     //     return 2021 - birthYear;
//     // }
//     // calcAge: function() {
//     //     return 2021 - this.birthYear;
//     // }
//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function() {
//         this.licence = this.hasDriverLicense == true ? `a` : `no`;
//         return console.log(`${this.firstName} is a ${this.calcAge()} year's old ${this.job}, and he has ${this.licence} driver's license `);
//     }
// };

// // aman.calcAge();
// // console.log(aman.age);
// console.log(aman.getSummary());
// // aman.location = function() {

// // };
// console.log(aman);

//------------------- coding challenge#3 ----------------------
// const mark = {
//     fullname: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }
// const john = {
//     fullname: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// const logic = mark.calcBMI() > john.calcBMI();
// console.log(`${logic ? mark.fullname : john.fullname}'s BMI (${logic ? mark.bmi : john.bmi})
// is higher than ${logic ? john.fullname : mark.fullname} (${logic ? john.bmi : mark.bmi}) `);

// ------------------- looping ------------------------
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`${rep}`);
// }

// --------------------looping array, breaking and continuing--------------
// const aman = [
//     'aman',
//     'jago',
//     'programmer',
//     2021 - 2000, ['isan', 'iki', 'riyo']
// ];

// let types = [];
// for (let i = 0; i <= aman.length; i++) {
//     console.log(aman[i], typeof aman[i]);

//     // types = typeof aman[i];
//     types.push(typeof aman[i]);
// }
// // console.log(types);

// const years = [1997, 2002, 2005];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//     ages.push(2021 - years[i]);
// }
// console.log(ages);

// console.log('--- continue practice ---');
// for (let i = 0; i <= aman.length; i++) {
//     if (typeof aman[i] !== 'string') continue;
//     console.log(aman[i]);
// }

// console.log('--- break practice ---');
// for (let i = 0; i <= aman.length; i++) {
//     if (typeof aman[i] == 'number') break;
//     console.log(aman[i]);
// }

// -----------looping backwards and loops in loops ----------
// const aman = [
//     'aman',
//     'jago',
//     'programmer',
//     2021 - 2000, ['isan', 'iki', 'riyo']
// ];

// for (let i = aman.length - 1; i >= 0; i--) {
//     console.log(aman[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------------- exercise ${exercise} -------------`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`exercise ${exercise}: lifting weight repetition ${rep}`);
//     }
// }

// -------------- the while loop -----------------
// for (let rep = 0; rep <= 10; rep++) {
//     // console.log(`exercise ${exercise}: lifting weight repetition ${rep}`);
// }

// let rep = 0;
// while (rep <= 10) {
//     // console.log(`lifting weight repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`the dice number is ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('end');
// }

// -----------final coding challenge-----------
// const bils = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// function calcTip(bills) {
//     return bills >= 50 && bills < 300 ? bills * 0.15 : bills * 0.2;
// }

// for (i = 0; i < bils.length; i++) {
//     tips.push(calcTip(bils[i]));
//     totals.push(bils[i] + tips[i]);
// }
// console.log(tips);
// console.log(totals);

// let sum = 0;
// for (let i = 0; i < totals.length; i++) {
//     sum += totals[i];
// }
// console.log(sum);
// const calcAverage = function(sum) {
//     return sum / totals.length;
// }
// console.log(calcAverage(sum));
// const calcAverage = function(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// };

// console.log(calcAverage(totals));
// console.log(calcAverage(tips));