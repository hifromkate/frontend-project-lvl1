import readlineSync from "readline-sync";

import * as brainCalc from "../src/games/brain-calc.js";
import * as brainEven from "../src/games/brain-even.js";
import * as brainGames from "../src/games/brain-games.js";
import * as brainGcd from "../src/games/brain-gcd.js";
import * as brainPrime from "../src/games/brain-prime.js";
import * as brainProgression from "../src/games/brain-progression.js";

let counter = 0;
let answer = 0;
let arithmeticProgression = [];
let greatestCommonDivisor = 1;
const userName = readlineSync.question("May I Have your name? ");

const greeting = () => {
  console.log(userName)
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


const quizCounter = (quiz) => {

  quiz()

  let usersAnswer = readlineSync.question("Your answer: ")
  if(usersAnswer == answer) {
    counter += 1
    console.log("Correct!")
  } else {
    console.log(`${usersAnswer} is the wrong answer ;( ${answer} is the right one.
                  Let's try again, ${userName}!`)
    counter = 0;
  }
  while (counter > 0 && counter < 3) {
    quiz()
  }
  if(counter == 3) {
    console.log(`Congratulations, ${userName}!`)
    counter = 0;
  }
};

const playBrainGames = () => {
  console.log("Welcome to the Brain Games!");
  greeting();
}

const startGame = (game) => {

  switch (game) {
    case brainGames:
      greeting();
      getBrainGames();
    case brainEven:
      greeting();
      console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".")
      getEvenQuiz();
      console.log(`Question: ${question}`)
      quizCounter(getEvenQuiz())

  }
}



export * from "../src/index.js";
