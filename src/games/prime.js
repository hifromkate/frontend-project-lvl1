import { getRandomNumber } from '../helpers.js';
import flow from '../engine.js';

const description = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeQuiz = () => {
  const question = getRandomNumber(2, 300);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const startPrimeGame = () => flow(getPrimeQuiz, description);

export default startPrimeGame;
