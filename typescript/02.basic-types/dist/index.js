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
const array4 = [{ id: 1, name: 'Rakib' }];
const array5 = [
    { id: 1, name: 'Rakib' },
    { name: 'Sabbir', id: 2 },
];
// Tuples type
const user = ['Rafin', 10, true];
const student = {
    name: 'Sabbir Ahmed',
    roll: 1,
    class: 5,
};
// student.class = 'five' // Cannot do this
// student.phone = '019...'; // Error!
// Literal type
let changingString = 'Hello, world!';
//    ^?
changingString = 'Ola, mundo!';
const unchangingString = 'Hello, world!';
//      ^?
let rakib = 'Rakib';
//    ^?
// Any Vs Unknown
function anyFn(param) {
    return param.toString(); // we can to this without knowing the type of the param
    //       ^?
}
function unknownFn(param) {
    // return param.toString(); // throws an error, toString might not be in param but if we chech the type we can do it
    if (typeof param === 'number') {
        return param.toString(); // narrowed the type to number
        //        ^?
    }
}
