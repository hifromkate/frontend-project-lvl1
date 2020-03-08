let question;
let answer;

const isEven = (number) => (number % 2 === 0);

const getEvenQuiz = () => {
  question = randomNumber(1, 100);
  isEven(question) ? answer = "yes" : answer = "no"
  return {
    question,
    answer
  }
}

export * from "../src/games/brain-even.js"
