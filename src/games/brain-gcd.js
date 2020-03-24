import { getRandomNumber } from '../helper-functions.js';
import flow from '../game-manager.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (int1, int2) => (int2 === 0 ? int1 : findGcd(int2, int1 % int2));

const getGcdQuiz = () => {
  const firstNumber = getRandomNumber(1, 200);
  const secondNumber = getRandomNumber(1, 200);
  const question = `${firstNumber} ${secondNumber}`;
  const greatestCommonDivisor = findGcd(firstNumber, secondNumber);
  const answer = greatestCommonDivisor;
  return [question, answer];
};

const startBrainGcd = () => flow(getGcdQuiz, description);

export default startBrainGcd;
