// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('i can drive');

// function logger() {
//     console.log('my name is aman');
// }

// // call a logger function
// // logger();
// // logger();
// // logger();

// function fruitProcessor(apple, orange) {
//     // console.log(apple, orange);
//     const juice = `juice with ${apple} apple and juice with ${orange} orange`;
//     return juice;
// }

// fruitProcessor(2, 8);

// const juiceValue = console.log(fruitProcessor(2, 1));
// console.log(juiceValue);

// const appleOrangeValue = console.log(fruitProcessor(4, 5));
// console.log(appleOrangeValue);

// function funfunfunction(value) {
//     let accept = false;
//     value == 1 ? accept = true : accept = false;
//     const process = accept == true ? console.log('she be ur gf') : 'she dont want be ur gf';
//     return process;
// }

// funfunfunction(1);

// ------------- function declaration vs function expression vs arrow function -----------------
// function declaration
// function calcAge1(birthYear) {
//     return `your age is ${2021 - birthYear}`;
// }
// console.log(calcAge1(2000));

// // function expression or annonymous func
// const calcAge2 = function(birthYear) {
//     return `your age is ${2021 - birthYear}`;
// }
// console.log(calcAge2(2000));

// // arrow func
// const calcAge3 = birthYear => 2021 - birthYear;
// console.log(calcAge3(2000));

// const yearUntillRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirementAge = 65 - age;
//     return `${firstName} has retirement ${retirementAge} years`;
// }

// console.log(yearUntillRetirement(2001, 'uman'));

// --------------- function calling other function -------------------
// function sallaryByPosition(position) {
//     let sallary;
//     switch (position) {
//         case 'cs':
//             sallary = 500;
//             break;
//         case 'security':
//             sallary = 500;
//             break;
//         case 'admin':
//             sallary = 700;
//             break;
//         case 'manager':
//             sallary = 100;
//             break;
//         default:
//             console.log('unknown position');
//             break;
//     }
//     return sallary;
// }

// function calcSallary(position, name) {
//     const totalSallary = sallaryByPosition(position);

//     return `${name} sallary with ${position} position is ${totalSallary}`;
// }

// console.log(calcSallary('admin', 'tatang'));
// calcAge = function(birthYear) {
//     return 2034 - birthYear;
// }

// const yearsUntillRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} will retire in ${retirement} years`);
//         return retirement;
//     } else if (age > retirement && retirement < 0) {
//         console.log(`${firstName} has already retirement ${retirement}`);
//         return retirement;
//     }
// }
// console.log(yearsUntillRetirement(2000, 'uman'));

// ------------------------ coding challenge#1 ------------------------
const calcAverage = (a, b, c) => (a + b + c) / 3;

// function calcScore(score1, score2, score3) {
//     totalScore = score1 + score2 + score3;
//     avgScore = calcAverage(totalScore);
//     console.log(`score is ${score1} + ${score2} + ${score3} = ${totalScore} and the average = ${avgScore}`);
//     return avgScore;
// }

let koalas = calcAverage(65, 54, 49);
let dolphins = calcAverage(44, 23, 71);

console.log(koalas);
console.log(dolphins);

function checkWinner(koalas, dolphins) {
    if (koalas >= dolphins * 2) {
        console.log(`koalas win ${koalas} vs ${dolphins}`);
    } else if (dolphins >= koalas * 2) {
        console.log(`dolphins win ${dolphins} vs ${koalas}`);
    } else console.log(`no team wins`);
}
checkWinner(koalas, dolphins);

// data 2
dolphins = calcAverage(85, 54, 41);
koalas = calcAverage(23, 34, 27);
checkWinner(koalas, dolphins);