import { randomNumber } from "../src/helper-functions.js"
let brainProgression = { text: "What number is missing in the progression?"}
let arithmeticProgression = [];


const progression = () => {
  let number = randomNumber(1, 100)
  const commonDifference = randomNumber(1, 100)
  for (let step = 0; step < 10; step++) {
    number = number + commonDifference
    arithmeticProgression.push(`${number}`)
  }
}

const hideANumber = () => {
  progression();
  let arr = arithmeticProgression;
  let arrLength = arr.length - 1
  const randomIndex = randomNumber(0, arrLength);
  brainProgression.answer = arr[randomIndex];

  arr[randomIndex] = ".."
  brainProgression.question = [arr]
  arithmeticProgression = [];
}

const getProgressionQuiz = () => {
  hideANumber();
  return brainProgression
}

export {
  brainProgression,
  getProgressionQuiz,
  hideANumber,
}
