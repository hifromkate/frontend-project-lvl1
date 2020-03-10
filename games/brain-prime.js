import { randomNumber } from "../src/helper-functions.js"

let brainPrime = { question: 0, answer: 0, text: "Answer \"yes\" if given number is prime. Otherwise answer \"no\"." }

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
  isPrime(brainPrime.question) ? brainPrime.answer = "yes" : brainPrime.answer = "no";
  return brainPrime
}
export { getPrimeQuiz, isPrime, brainPrime };
