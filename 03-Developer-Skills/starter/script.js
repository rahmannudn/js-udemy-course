// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function(temps) {
//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const currentTemp = temps[i];
//         if (typeof currentTemp !== 'number') continue;

//         if (currentTemp > max) max = currentTemp;
//         if (currentTemp < min) min = currentTemp;
//     }
//     console.log(max, min);
// }
// calcTempAmplitude([3, 7, 2]);
// console.log(calcTempAmplitude(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const calcTempAmplitude = function(tempt1, tempt2) {
//     // for (let i = 0; i < tempt2.length; i++) {
//     //     tempt1.push(tempt2[i]);
//     // }

//     const mergedTemp = tempt1.concat(tempt2);
//     console.log(mergedTemp);

//     let max = mergedTemp[0];
//     let min = mergedTemp[0];
//     for (let i = 0; i < mergedTemp.length; i++) {
//         const currentMergedTemp = mergedTemp[i];
//         if (typeof currentMergedTemp !== 'number') continue;

//         if (currentMergedTemp > max) max = currentMergedTemp;
//         if (currentMergedTemp < min) min = currentMergedTemp;
//     }
//     console.log(max, min);
// }
// const tempAmplitude = calcTempAmplitude([2, 5, 6], ['error', 9, 20, 10]);
// // console.log(tempAmplitude);

// ---------- debugging with console and breakpoint ---------------
// const measureKelvin = function() {
//     const measurement = {
//         type: 'temp',
//         unit: 'celcius',
//         // C) fix (make a promp output to be a number)
//         // value: prompt('Degrees Celcius : ');
//         value: prompt('Degrees Celcius: ')
//     };

//     // B) find the bug (the value of measurement value is a sting)
//     console.table(measurement);

//     // console.warn(measurement.value);
//     // console.error(measurement.value);
// debugger;
//     // console.log(measurement.value, typeof measurement.value);
//     if (measurement.value != 'number') {
//         // C) convert the promp input to number
//         const kelvin = Number(measurement.value) + 273;
//         return kelvin;
//     }
// }

// // A) indentify the bug
// console.log(measureKelvin());


// ---------------- coding challenge ---------------
// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]

// 1) understanding problems
// - array transformed to string and separated by ...
// - what is the x days? answer : index + 1

// 2) breaking up into sub problems
// - transform array into string
// - transform each value of maximum temp to a string with ºC
// - string needs to contain day {index + 1}
// - add ... between element at the start and the end

function printForecast(arr) {
    for (let i = 0; i < arr.length; i++) {
        const arrConv = (`... ${arr[i]} in a ${[i] + 1 } days..`);
        return arrConv;
    }
}
console.log(printForecast([17, 21, 23]));