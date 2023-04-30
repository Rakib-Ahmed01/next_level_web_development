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
