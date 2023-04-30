const course: string = 'Next Level Web Development Course';
console.log(course);
//            ^?

let x: unknown = 'Unknown Type';
// x.toPrecision(2); // we can not do it with unknown types
let y: any = 'Any Type';
// y.toPrecision(2); // we can do it with any types

// Primitive types - number, string, boolean, null, undefined
const number: number = 123;
const nam: string = 'Rakib Ahmed';
const isAdmin: boolean = false;
const nullable: null = null;
let notDefined = undefined;
//   ^?
const notDefined2 = undefined;
//        ^?

// Reference types
// Array type
const array: string[] = [];
const array2: Array<string> = [];
const array3: (string | number)[] = [1, 2, 3, 4, 5, 'str'];
array3.push('str', 'str');

// Tuples type
const user: [string, number, boolean] = ['Rafin', 10, true];
