'use strict';

// --- primitives vs object ---
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age, oldAge);

// const me = {
//     nama: 'aman',
//     age: 30,
// };
// const friend = me;
// friend.age = 20;
// console.log(`friend: `, friend);
// console.log(`me: `, me);

// primitive value
// let lastName = 'William';
// const oldLastName = lastName;
// lastName = 'Davis';
// console.log(`Old Last Name: ${oldLastName},
// New Last Name: ${lastName}`);

// Reference type
const doYeon = {
  fullName: 'DoYeon',
  familyName: 'Kim',
  age: 22,
};

const marriedDoYeon = doYeon;
console.log(`Family Name Before Marriage: ${marriedDoYeon.familyName}`);
marriedDoYeon.familyName = 'Uddin';
console.log(`Family Name After Marriage: ${marriedDoYeon.familyName}`);
console.log(marriedDoYeon);
// new copying object
// const doYeon2 = {
//     fullName: 'Do Yeon',
//     familyName: 'Kim',
//     age: 22,
// };

// // object.assign only works in the first level object. if i have a new object in this object and trying to change its value it will be the same as the above example
// const copyingDoYeon = Object.assign({}, doYeon2);
// copyingDoYeon.familyName = 'Uddin';
// console.log(`Family Name Before Marriage: ${doYeon2.familyName}
// Family Name After Marriage: ${copyingDoYeon.familyName}
// ${copyingDoYeon.familyName} ${copyingDoYeon.fullName}`);

// create a new object(array) to doyeon object
const doYeon2 = {
  fullName: 'Do Yeon',
  familyName: 'Kim',
  age: 22,
  family: ['ujang', 'asep'], //this is an new array
};

const copyingDoYeon = Object.assign({}, doYeon2);
copyingDoYeon.familyName = 'Uddin';
copyingDoYeon.family.push('Jajang'); //include a new family
console.log(`this is an old object (doYeon2): `, doYeon2.family);
console.log('this is an copying object: ', copyingDoYeon.family);
// conclusion : using Object.assign only works for the first level object it will doesnt work as expected if there's an object inside it
// using Object.assign automaticly create a new memory in the heap
