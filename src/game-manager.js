import readlineSync from "readline-sync";

import { brainEven, isEven, getEvenQuiz } from "../games/brain-even.js";
import { brainCalc, generateRandom, getCalcQuiz } from "../games/brain-calc.js"
import { brainGcd, findAllDivisors, findGreatestDivisor, getGcdQuiz } from "../games/brain-gcd.js"
import { getPrimeQuiz, isPrime, brainPrime } from "../games/brain-prime.js"
import { brainProgression, hideANumber, getProgressionQuiz } from "../games/brain-progression.js"
let counter = 0;

let userName;

const greeting = () => {
  console.log("Welcome to the Brain Games!")
  userName = readlineSync.question("May I Have your name? ");
  console.log(`Hello ${userName}!`);
}

const randomElement = (arr) => {
  return arr[randomNumber(0, arr.length - 1)]
}

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const greatestInArray = (arr) => {
  return arr.reduce((a, b) => Math.max(a, b))
};

const quizCounter = (game, quiz) => {
  greeting();
  console.log(game.text)

  do {

    quiz()
    console.log(`Question: ${game.question}`)
    let usersAnswer = readlineSync.question("Your answer: ")
    if (game.answer == usersAnswer) {
      console.log("Correct!")
      counter += 1
    } else {
      console.log(`${usersAnswer} is the wrong answer ;( ${game.answer} is the right one. Let's try again, ${userName}!`)
      counter = 0;
    }
  } while (counter > 0 && counter < 3)

  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`)
  }
}

const playBrainGames = () => {
  greeting()
}

const playBrainCalc = () => {
  quizCounter(brainCalc, getCalcQuiz)
}

const playBrainEven = () => {
  quizCounter(brainEven, getEvenQuiz)
}

const playBrainGcd = () => {
  quizCounter(brainGcd, getGcdQuiz);
}

const playBrainPrime = () => {
  quizCounter(brainPrime, getPrimeQuiz)
}

const playBrainProgression = () => {
  quizCounter(brainProgression, getProgressionQuiz);
}

export {
  randomElement,
  randomNumber,
  userName,
  greatestInArray,
  counter,
  greeting,
  getEvenQuiz,
  playBrainGames,
  playBrainEven,
  playBrainCalc,
  quizCounter,
  getCalcQuiz,
  getGcdQuiz,
  playBrainGcd,
  playBrainPrime,
  getPrimeQuiz,
  playBrainProgression,
  getProgressionQuiz,
  hideANumber
}
