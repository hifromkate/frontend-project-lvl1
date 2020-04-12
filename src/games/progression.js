import { getRandomNumber } from '../helpers.js';
import flow from '../engine.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const createProgression = (start, diff, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + diff * i);
  }
  return progression;
};

const getProgressionQuiz = () => {
  const start = getRandomNumber(1, 200);
  const diff = getRandomNumber(1, 100);
  const progression = createProgression(start, diff, progressionLength);
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const answer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression;
  return [question, answer];
};

const startProgressionGame = () => flow(getProgressionQuiz, description);

export default startProgressionGame;
