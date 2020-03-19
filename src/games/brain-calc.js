import { randomNumber, randomElement } from '../helper-functions.js';
import flow from '../game-manager.js';

const description = 'What is the result of the expression?';

const getCalcQuiz = () => {
  let question;
  let answer;
  const firstRandomInt = randomNumber(1, 200);
  const secondRandomInt = randomNumber(1, 200);
  const mathSigns = ['+', '-', '*'];
  const randomSign = randomElement(mathSigns);

  if (randomSign === '+') {
    answer = firstRandomInt + secondRandomInt;
    question = `${firstRandomInt} + ${secondRandomInt}`;
  } else if (randomSign === '-') {
    if (firstRandomInt >= secondRandomInt) {
      answer = firstRandomInt - secondRandomInt;
      question = `${firstRandomInt} - ${secondRandomInt}`;
    } else {
      answer = secondRandomInt - firstRandomInt;
      question = `${secondRandomInt} - ${firstRandomInt}`;
    }
  } else if (randomSign === '*') {
    answer = firstRandomInt * secondRandomInt;
    question = `${firstRandomInt} * ${secondRandomInt}`;
  }
  return [question, answer];
};


const playBrainCalc = () => flow(getCalcQuiz, description);

export default playBrainCalc;
