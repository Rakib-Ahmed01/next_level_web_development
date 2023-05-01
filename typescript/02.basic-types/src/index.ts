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
const array4: Array<{ name: string; id: number }> = [{ id: 1, name: 'Rakib' }];
const array5: { name: string; id: number }[] = [
  { id: 1, name: 'Rakib' },
  { name: 'Sabbir', id: 2 },
];

// Tuples type
const user: [string, number, boolean] = ['Rafin', 10, true];

// Object type
interface IStudent {
  name: string;
  roll: number;
  class: number;
}

type TStudent = {
  name: string;
  roll: number;
  class: number;
};

const student: {
  name: string;
  roll: number;
  class: number;
} = {
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

let rakib: 'Rakib' = 'Rakib';
//    ^?

// Any Vs Unknown
function anyFn(param: any) {
  return param.toString(); // we can to this without knowing the type of the param
  //       ^?
}

function unknownFn(param: unknown) {
  // return param.toString(); // throws an error, toString might not be in param but if we chech the type we can do it
  if (typeof param === 'number') {
    return param.toString(); // narrowed the type to number
    //        ^?
  }
}
