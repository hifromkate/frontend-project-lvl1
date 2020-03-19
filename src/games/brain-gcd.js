import { randomNumber } from '../helper-functions.js';
import flow from '../game-manager.js';

const description = 'Find the greatest common divisor of given numbers.'

const findAllDivisors = (number) => {
  const allDivisors = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      allDivisors.push(i);
    }
  }
  return allDivisors;
};

const greatestInArray = (arr) => arr.reduce((a, b) => Math.max(a, b));

const getGcdQuiz = () => {
  const firstNumber = randomNumber(1, 300);
  const secondNumber = randomNumber(1, 300);

  const question = `${firstNumber} ${secondNumber}`;

  const divisorsOfFirst = findAllDivisors(firstNumber);
  const divisorsOfSecond = findAllDivisors(secondNumber);
  const commonDivisors = divisorsOfFirst.filter((value) => divisorsOfSecond.includes(value));
  const greatestCommonDivisor = greatestInArray(commonDivisors);
  const answer = greatestCommonDivisor;
  return [question, answer];
};

const playBrainGcd = () => flow(getGcdQuiz, description);

export default playBrainGcd;
