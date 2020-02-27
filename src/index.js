import readlineSync from "readline-sync";

let counter = 0;
let answer = 0;
let arithmeticProgression = []
let greatestCommonDivisor = 1;
const userName = readlineSync.question("May I Have your name? ");

const greeting = () => {
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

//brain-games.js
const isEven = (number) => (number % 2 === 0);

const evenOrNo = () => {
  console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");
  evenQuiz()

  while (counter > 0 && counter < 3) {
    evenQuiz();
  }

  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}

const evenQuiz = () => {

  const currentRandomNumber = randomNumber(1, 100);

  console.log(`Question: ${currentRandomNumber}`);
  let answer = readlineSync.question("Your answer: ");
  console.log(answer);
  if (isEven(currentRandomNumber) && answer === "yes") {
    console.log("Correct!");
    counter += 1;
  } else if (!isEven(currentRandomNumber) && answer === "no") {
    console.log("Correct!");
    counter += 1;
  } else {
    counter = 0;
  }
}

//brain-calc.js
const generateRandom = () => {

  const firstRandomInt = randomNumber(1, 200)
  const secondRandomInt = randomNumber(1, 200)
  const mathSigns = ["+", "-", "*"]
  const randomSign = randomElement(mathSigns)

  if (randomSign === "+") {
    answer = firstRandomInt + secondRandomInt
    console.log(`Question: ${firstRandomInt} + ${secondRandomInt}`)
  } else if (randomSign === "-") {
    if (firstRandomInt >= secondRandomInt) {
      answer = firstRandomInt - secondRandomInt;
      console.log(`Question: ${firstRandomInt} - ${secondRandomInt}`);
    } else {
      answer = secondRandomInt - firstRandomInt
      console.log(`Question: ${secondRandomInt} - ${firstRandomInt}`);
    }
  } else if (randomSign === "*") {
    answer = firstRandomInt * secondRandomInt
    console.log(`Question: ${firstRandomInt} * ${secondRandomInt}`);
  }
}

const calcQuiz = () => {
  generateRandom();
  let usersResult = readlineSync.question("Your answer: ");
  if (usersResult == answer) {
    console.log("Correct!");
    counter += 1;
  } else {
    console.log(`${usersResult} is the wrong answer ;(. Correct answer was ${answer}`);
    counter = 0;
  }
}

const calculate = () => {
  calcQuiz();
  while (counter > 0 && counter < 3) {
    calcQuiz();
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}

//brain-gcd.js
const findAllDivisors = (number) => {
  const allDivisors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      allDivisors.push(i);
    }
  }
  return allDivisors;
};

const findGreatestDivisor = () => {
  const firstNumber = randomNumber(1, 300);
  const secondNumber = randomNumber(1, 300);

  console.log(`Question: ${firstNumber} ${secondNumber}`);

  const divisorsOfFirst = findAllDivisors(firstNumber);
  const divisorsOfSecond = findAllDivisors(secondNumber);
  const commonDivisors = divisorsOfFirst.filter((value) => divisorsOfSecond.includes(value));
  greatestCommonDivisor = greatestInArray(commonDivisors);
  return greatestCommonDivisor;
}

const gcdCheck = () => {
  findGreatestDivisor()
  let usersResult = readlineSync.question("Your answer: ");
  if (usersResult == greatestCommonDivisor) {
    counter += 1;
    console.log("Correct!")
  } else {
    counter = 0;
    console.log(`${usersResult} is the wrong answer ;(. ${greatestCommonDivisor} is the right one.`)
  }
}

const gcdQuiz = () => {
  console.log("Find the greatest common divisor of given numbers.")
  gcdCheck()
  while (counter > 0 && counter < 3) {
    gcdCheck()
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`)
  }
}
//brain-progression.js
const progression = () => {
  let number = randomNumber(1, 100)
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
  let answer = arr[randomIndex];

  arr[randomIndex] = ".."
  console.log(`Question ${arr}`);
  let usersResult = readlineSync.question("Your answer: ");

  if (usersResult == answer) {
    arithmeticProgression = [];
    console.log("Correct!")
    counter += 1;
  } else {
    arithmeticProgression = [];
    console.log(`${usersResult} is the wrong answer ;(. ${answer} is the right one.`)
    counter = 0;
  }
}

const playHideANumber = () => {
  console.log("What number is missing in the progression?")
  hideANumber(arithmeticProgression);
  while (counter > 0 & counter < 3) {
    hideANumber(arithmeticProgression);
  }
  if (counter === 3) {
    console.log(`Congratulations ${userName}!`);
  }
}

//brain-prime.js
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const randomNum = randomNumber(1, 500);

  console.log("Answer \"yes\" if given number is prime. Otherwise answer \"no\".")
  console.log(`Question: ${randomNum}`);
  let usersResult = readlineSync.question("Your answer: ");

  if (isPrime(randomNum) && usersResult == "yes") {
    console.log("Correct!")
    counter += 1;
  } else if (!isPrime(randomNum) && usersResult == "no") {
    console.log("Correct!");
    counter += 1;
  } else {
    console.log(`"${usersResult}" is the wrong answer.`)
    counter = 0;
  }
}

const playPrimeNumbersGame = () => {
  primeGame();
  while (counter > 0 && counter < 3) {
    primeGame();
  }

  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}

export {
  evenQuiz,
  evenOrNo,
  counter,
  userName,
  isEven,
  greeting,
  randomNumber,
  randomElement,
  calculate,
  generateRandom,
  answer,
  calcQuiz,
  gcdQuiz,
  findGreatestDivisor,
  findAllDivisors,
  greatestCommonDivisor,
  gcdCheck,
  playHideANumber,
  hideANumber,
  arithmeticProgression,
  progression,
  isPrime,
  primeGame,
  playPrimeNumbersGame,
  greatestInArray
};
