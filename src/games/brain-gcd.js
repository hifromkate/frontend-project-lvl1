let question;
let answer;

const findAllDivisors = (number) => {
  const allDivisors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      allDivisors.push(i);
    }
  }
  return allDivisors;
};

const findGreatestDivisor = () => {
  const firstNumber = randomNumber(1, 300);
  const secondNumber = randomNumber(1, 300);

  question = `${firstNumber} ${secondNumber}`;

  const divisorsOfFirst = findAllDivisors(firstNumber);
  const divisorsOfSecond = findAllDivisors(secondNumber);
  const commonDivisors = divisorsOfFirst.filter((value) => divisorsOfSecond.includes(value));
  greatestCommonDivisor = greatestInArray(commonDivisors);
  answer = greatestCommonDivisor;
}


const getGcdQuiz = () => {
  findGreatestDivisor()
  return {question, answer}
}

export { question, answer, getGcdQuiz }
