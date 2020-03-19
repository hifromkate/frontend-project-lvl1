import { randomNumber } from '../helper-functions.js';
import flow from '../game-manager.js';

const isEven = (number) => (number % 2 === 0);
const brainEven = { text: 'Answer \'yes\' if the number is even, otherwise answer \'no\'.' };

const getEvenQuiz = () => {
  brainEven.question = randomNumber(1, 100);
  brainEven.answer = isEven(brainEven.question) ? 'yes' : 'no';
};

const playEvenGame = () => flow(brainEven, getEvenQuiz);

export default playEvenGame;
