import { randomNumber } from '../helper-functions.js';
import flow from '../game-manager.js';

const description = 'What number is missing in the progression?';
let arithmeticProgression = [];


const progression = () => {
  let number = randomNumber(1, 100);
  const commonDifference = randomNumber(1, 100);
  for (let step = 0; step < 10; step += 1) {
    number += commonDifference;
    arithmeticProgression.push(`${number}`);
  }
};

const hideANumber = () => {
  progression();
  const arr = arithmeticProgression;
  const arrLength = arr.length - 1;
  const randomIndex = randomNumber(0, arrLength);
  const answer = arr[randomIndex];
  arr[randomIndex] = '..';
  const question = [arr];
  arithmeticProgression = [];
  return [question, answer];
};

const playProgression = () => flow(hideANumber, description);

export default playProgression;
