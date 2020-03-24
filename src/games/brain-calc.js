import { getRandomNumber, getRandomElement } from '../helper-functions.js';
import flow from '../game-manager.js';

const description = 'What is the result of the expression?';
const mathSigns = ['+', '-', '*'];

const calculate = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return;
  }
};

const getCalcQuiz = () => {
  const firstNumber = getRandomNumber(1, 200);
  const secondNumber = getRandomNumber(1, 200);
  const currentSign = getRandomElement(mathSigns);
  const question = `${firstNumber} ${currentSign} ${secondNumber}`;
  const answer = `${calculate(firstNumber, secondNumber, currentSign)}`;
  return [question, answer];
};


const startBrainCalc = () => flow(getCalcQuiz, description);

export default startBrainCalc;
