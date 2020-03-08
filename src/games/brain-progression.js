let question;
let answer;

const progression = () => {
  const number = randomNumber(1, 100)
  const commonDifference = randomNumber(1, 100)
  for (let step = 0; step < 10; step++) {
    number = number + commonDifference
    arithmeticProgression.push(`${number}`)
  }
}

const hideANumber = (arr) => {
  progression();
  let arrLength = arr.length - 1
  const randomIndex = randomNumber(0, arrLength);
  answer = arr[randomIndex];

  arr[randomIndex] = ".."
  question = [arr]
}

const getProgressionQuiz = () => {
  return {
    question,
    answer
  }
}

export {
  question,
  answer,
  progression,
  hideANumber,
  getProgressionQuiz
}
