import { getRandomNumber } from '../helpers.js';
import flow from '../engine.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (int1, int2) => (int2 === 0 ? int1 : findGcd(int2, int1 % int2));

const getGcdQuiz = () => {
  const firstNumber = getRandomNumber(1, 200);
  const secondNumber = getRandomNumber(1, 200);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = findGcd(firstNumber, secondNumber);
  return [question, answer];
};

const startBrainGcd = () => flow(getGcdQuiz, description);

export default startBrainGcd;
