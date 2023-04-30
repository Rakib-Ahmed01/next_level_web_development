"use strict";
const course = 'Next Level Web Development Course';
console.log(course);
//            ^?
let x = 'Unknown Type';
// x.toPrecision(2); // we can not do it with unknown types
let y = 'Any Type';
// y.toPrecision(2); // we can do it with any types
// Primitive types - number, string, boolean, null, undefined
const number = 123;
const nam = 'Rakib Ahmed';
const isAdmin = false;
const nullable = null;
let notDefined = undefined;
//   ^?
const notDefined2 = undefined;
//        ^?
// Reference types
// Array type
const array = [];
const array2 = [];
const array3 = [1, 2, 3, 4, 5, 'str'];
array3.push('str', 'str');
// Tuples type
const user = ['Rafin', 10, true];
