import { randomNumber, randomElement } from '../helper-functions.js';

const brainCalc = {
  text: 'What is the result of the expression?',
};

const generateRandom = () => {
  const firstRandomInt = randomNumber(1, 200);
  const secondRandomInt = randomNumber(1, 200);
  const mathSigns = ['+', '-', '*'];
  const randomSign = randomElement(mathSigns);

  if (randomSign === '+') {
    brainCalc.answer = firstRandomInt + secondRandomInt;
    brainCalc.question = `${firstRandomInt} + ${secondRandomInt}`;
  } else if (randomSign === '-') {
    if (firstRandomInt >= secondRandomInt) {
      brainCalc.answer = firstRandomInt - secondRandomInt;
      brainCalc.question = `${firstRandomInt} - ${secondRandomInt}`;
    } else {
      brainCalc.answer = secondRandomInt - firstRandomInt;
      brainCalc.question = `${secondRandomInt} - ${firstRandomInt}`;
    }
  } else if (randomSign === '*') {
    brainCalc.answer = firstRandomInt * secondRandomInt;
    brainCalc.question = `${firstRandomInt} * ${secondRandomInt}`;
  }
};

const getCalcQuiz = () => {
  generateRandom();
  return brainCalc;
};

export { getCalcQuiz, brainCalc };
