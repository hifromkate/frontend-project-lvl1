import { getRandomNumber } from '../helper-functions.js';
import flow from '../game-manager.js';

const description = 'What number is missing in the progression?';

const createProgression = () => {
  let number = getRandomNumber(1, 100);
  const progression = [];
  const commonDifference = getRandomNumber(1, 100);
  for (let step = 0; step < 10; step += 1) {
    number += commonDifference;
    progression.push(`${number}`);
  }
  return progression;
};

const getProgressionQuiz = () => {
  let progression = createProgression();
  const progressionLength = progression.length - 1;
  const randomIndex = getRandomNumber(0, progressionLength);
  const answer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression;
  progression = [];
  return [question, answer];
};

const startProgressionGame = () => flow(getProgressionQuiz, description);

export default startProgressionGame;
