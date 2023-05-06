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
