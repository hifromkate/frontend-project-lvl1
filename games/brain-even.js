import { randomNumber } from "../src/game-manager.js"
import readlineSync from "readline-sync";

let question;
let answer;
let brainEven = { question: 0, answer: "something", text: "Answer \"yes\" if the number is even, otherwise answer \"no\"." }
const isEven = (number) => (number % 2 === 0);

const getEvenQuiz = () => {
  question = randomNumber(1, 100);
  isEven(question) ? answer = "yes" : answer = "no"
  brainEven.question = question;
  brainEven.answer = answer;
}

export { question, answer, isEven, getEvenQuiz, brainEven }
