let answer;
let question;

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
  const question = randomNumber(1, 500);
  isPrime(question) ? answer = "yes" : answer = "no";
  return {question, answer}
}
export { getPrimeQuiz, isPrime, question, answer };
