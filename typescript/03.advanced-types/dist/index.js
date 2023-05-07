"use strict";
// Type Assertion
// const num = 1 as string // Can't do this
const num1 = 1;
let course;
course = 'Next Level Web Development';
course.toLowerCase();
function kgToGram(unit) {
    if (typeof unit === 'number') {
        return unit * 1000;
    }
    if (typeof unit === 'string') {
        const numGram = Number(unit) * 1000;
        return `Converted result is ${numGram} gram.`;
    }
}
const resultToBeNumber = kgToGram(111);
const arr = [1, 2, 3, 4, 5];
// Generic
// Generic Function
function identity(input) {
    return input;
}
const box = { inside: 'inside the box' };
function addNumbers(a, b) {
    return a + b;
}
function concatStrings(a, b) {
    return a + b;
}
let someValue;
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
function reverseArray(arr) {
    return arr.reverse();
}
function logStrings(param) {
    for (let str of param) {
        console.log(str);
    }
}
function evenOrOdd(num) {
    return num % 2 === 0 ? 'even' : 'odd';
}
