"use strict";
function firstElement(arr) {
    return arr[0];
}
const one = firstElement([1, 2, 3, 4, 5]);
//     ^?
function secondElement(arr) {
    return arr[1];
}
const two = secondElement([1, 2, 3, 4, 5]);
//     ^?
function push(arr, element) {
    arr.push(element);
    return arr;
}
const newArr = push([1, 2, 3, 4], 5);
console.log(newArr);
function lastElement(arr) {
    return arr[arr.length - 1];
}
const personKey = 'age';
function getProperty(obj, key) {
    return obj[key];
}
const person = {
    name: 'Alice',
    age: 30,
};
const property = getProperty(person, 'name');
const x = 'x';
const xType = 'x';
function getObjectType(arg) {
    return typeof arg;
}
getObjectType(person); // should return "object"
getObjectType('hello'); // should return "string"
function getPropertyOfType(obj, key) {
    return obj[key];
}
getPropertyOfType(person, 'name');
