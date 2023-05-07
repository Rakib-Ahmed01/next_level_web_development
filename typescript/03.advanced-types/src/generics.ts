function firstElement(arr: any[]): any {
  return arr[0];
}

const one = firstElement([1, 2, 3, 4, 5]);
//     ^?

function secondElement<T>(arr: T[]): T {
  return arr[1];
}

const two = secondElement([1, 2, 3, 4, 5]);
//     ^?

function push<T>(arr: T[], element: T): T[] {
  arr.push(element);
  return arr;
}

const newArr = push([1, 2, 3, 4], 5);

console.log(newArr);

function lastElement<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

// keyof
interface Person {
  name: string;
  age: number;
}

type PersonKey = keyof Person;

const personKey: PersonKey = 'age';

function getProperty<TObj, Key extends keyof TObj>(obj: TObj, key: Key) {
  return obj[key];
}

const person = {
  name: 'Alice',
  age: 30,
} as const;

const property = getProperty(person, 'name');

const x = 'x';

type X = typeof x;

const xType: X = 'x';

function getObjectType<T>(arg: T): string {
  return typeof arg;
}

getObjectType(person); // should return "object"
getObjectType('hello'); // should return "string"

type ContacType = (typeof person)[PersonKey];

function getPropertyOfType<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

getPropertyOfType(person, 'name');

type Truthy<T> = T extends null | undefined
  ? false
  : T extends never
  ? false
  : T extends 0 | '' | false | [] | {}
  ? false
  : true;

type A = Truthy<string>; // true
type B = Truthy<number>; // true
type C = Truthy<boolean>; // true
type D = Truthy<undefined>; // false
type E = Truthy<null>; // false
type F = Truthy<never>; // false
type G = Truthy<{}>; // false
type H = Truthy<{ name: 'Rakib' }>; // true
