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

const student2: {
  readonly name: 'Sabbir Ahmed';
  roll: number;
  class: number;
} = {
  name: 'Sabbir Ahmed',
  roll: 1,
  class: 5,
};

// student2.name = 'Rakib Ahmed'; // readonly

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

// Function
type AddTwoNumbers = (a: number, b: number) => number;

interface IAddTwoNumbers {
  (a: number, b: number): number;
}

const AddTwoNumbers: AddTwoNumbers = function (a, b) {
  return a + b;
};

const nums: number[] = [2, 4, 6, 8];

const squaredNums = nums.map((num) => num * num);
console.log(squaredNums);

// Function inside Object - Method
type Person2 = {
  name: string;
  bankBalance: number;
  getBalance: () => number;
  addBalance: (balance: number) => string;
};

const person: Person2 = {
  name: 'John',
  bankBalance: 1000,
  getBalance: function () {
    return this.bankBalance;
  },
  addBalance: function (balance: number) {
    return `Previous Balance: ${
      this.bankBalance
    }. Added: ${balance}. Current Balance: ${(this.bankBalance += balance)}`;
  },
};

console.log(person.getBalance());
console.log(person.addBalance(50));
console.log(person.getBalance());
console.log(person.addBalance(50));

// Optional parameters, properties & Default parameters
const add = (a: number, b: number, c: number = 0) => {
  return a + b + c;
};

type User2 = {
  name: string;
  email?: string;
};

// Spread operator
const nums1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];
nums1.push(...num2);

// Rest operator
const saySalamToPeople = (...people: string[]) => {
  people.forEach((person) => console.log(`Assalamualaikum, ${person}...`));
};

saySalamToPeople('Rakib Vau', 'Sabbir Vai', 'Rafin Vai');

// Union Type
type Role = 'user' | 'admin' | 'super-admin';

type User = {
  name: string;
  role: Role;
};

// Intersection Type
type Person = {
  name: string;
  age: number;
};

type Employee = {
  name: string;
  age: number;
  department: string;
  experience: number;
};

const person1: Person | Employee = {
  name: 'John',
  age: 34,
  experience: 5,
};

// Enum Type - Not Recommended
enum RoleEnum {
  user = 'user',
  admin = 'admin',
}
