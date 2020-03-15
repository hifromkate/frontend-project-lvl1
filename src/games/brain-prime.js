import { randomNumber } from '../helper-functions.js';

const brainPrime = { text: 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.' };

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeQuiz = () => {
  brainPrime.question = randomNumber(1, 500);
  brainPrime.answer = isPrime(brainPrime.question) ? 'yes' : 'no';
  return brainPrime;
};
export { getPrimeQuiz, isPrime, brainPrime };
