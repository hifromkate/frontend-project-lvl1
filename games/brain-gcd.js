import { randomNumber } from "../src/helper-functions.js"

let brainGcd = { text: "Find the greatest common divisor of given numbers."}

const findAllDivisors = (number) => {
  const allDivisors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      allDivisors.push(i);
    }
  }
  return allDivisors;
};

const greatestInArray = (arr) => {
  return arr.reduce((a, b) => Math.max(a, b))
};

const findGreatestDivisor = () => {
  const firstNumber = randomNumber(1, 300);
  const secondNumber = randomNumber(1, 300);

  brainGcd.question = `${firstNumber} ${secondNumber}`;

  const divisorsOfFirst = findAllDivisors(firstNumber);
  const divisorsOfSecond = findAllDivisors(secondNumber);
  const commonDivisors = divisorsOfFirst.filter((value) => divisorsOfSecond.includes(value));
  let greatestCommonDivisor = greatestInArray(commonDivisors);
  brainGcd.answer = greatestCommonDivisor;
}


const getGcdQuiz = () => {
  findGreatestDivisor()
  return brainGcd;
}

export { brainGcd, getGcdQuiz }
