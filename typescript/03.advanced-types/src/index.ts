// Type Assertion
// const num = 1 as string // Can't do this
const num1 = 1 as any as string;

let course: any;

course = 'Next Level Web Development';

(course as string).toLowerCase();

function kgToGram(unit: string | number) {
  if (typeof unit === 'number') {
    return unit * 1000;
  }

  if (typeof unit === 'string') {
    const numGram = Number(unit) * 1000;
    return `Converted result is ${numGram} gram.`;
  }
}

const resultToBeNumber = kgToGram(111) as number;

// Interface
interface INumberArray {
  [index: number]: number;
}

type TNumberArray = Array<number>;

const arr: TNumberArray = [1, 2, 3, 4, 5];

// Generic

// Generic Function
function identity<T>(input: T) {
  return input;
}

// Generic Interface
interface Box<T> {
  inside: T;
}

const box: Box<string> = { inside: 'inside the box' };

function addNumbers(a: number, b: number): number {
  return a + b;
}

function concatStrings(a: string, b: string): string {
  return a + b;
}

let someValue: void;

function sumArray(arr: number[]) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function reverseArray(arr: any[]) {
  return arr.reverse();
}

function logStrings(param: string[]) {
  for (let str of param) {
    console.log(str);
  }
}

function evenOrOdd(num: number) {
  return num % 2 === 0 ? 'even' : 'odd';
}
