import { randomNumber } from '../helper-functions.js';
import flow from '../game-manager.js';

const isEven = (number) => (number % 2 === 0);
const description = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

const getEvenQuiz = () => {
  const question = randomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const playEvenGame = () => flow(getEvenQuiz, description);

export default playEvenGame;
