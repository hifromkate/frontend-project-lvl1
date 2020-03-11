import { randomNumber } from '../src/helper-functions.js';

const brainEven = { text: 'Answer \'yes\' if the number is even, otherwise answer \'no\'.' };
const isEven = (number) => (number % 2 === 0);


const getEvenQuiz = () => {
  brainEven.question = randomNumber(1, 100);
  brainEven.answer = isEven(brainEven.question) ? 'yes' : 'no';
};

export { isEven, getEvenQuiz, brainEven };
