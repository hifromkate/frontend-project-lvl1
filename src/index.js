
import readlineSync from "readline-sync"
import { cons, car, cdr, toString } from '@hexlet/pairs';

let counter = 0;

const userName = readlineSync.question("May I Have your name? ");

const greeting = () => {
  console.log(userName)
  console.log(`Hello ${userName}!`);
}

const randomElement = Math.randomElement = function(arr) {
  return arr[Math.randomInt(0, arr.length - 1)]
}
const randomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const isEven = (number) => (number % 2 === 0);

const evenOrNo = () => {
  console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".")
  quiz()

  while(counter > 0 && counter < 3) {
    quiz()
  }

  if(counter === 0) {
    return "The end."
  } else if(counter === 3) {
    console.log(`Congratulations, ${userName}!`)
  }
}

const quiz = () => {

  const currentRandomNumber = randomNumber(1, 100);

  console.log(`Question: ${currentRandomNumber}`);
  let answer = readlineSync.question("Your answer: ");
  console.log(answer);
  if(isEven(currentRandomNumber) && answer === "yes") {
    console.log("Correct!");
    counter += 1;
  } else if(!(isEven(currentRandomNumber)) && answer === "no") {
    console.log("Correct!")
    counter += 1;
  } else if(isEven(currentRandomNumber) && answer === "no") {
    console.log(`\"no\" is wrong answer ;(. Correct answer was \"yes\". Let's try again, ${userName}`)
    counter = 0;
  } else if(!(isEven(currentRandomNumber)) && answer === "yes") {
    console.log(`\"yes\" is wrong answer ;(. Correct answer was \"no\". Let's try again, ${userName}`)
    counter = 0;
  } else {
    console.log("That's wrong.")
    counter = 0;
  }
}

const calculator = () => {
  const mathSigns = [+, -, *]
  const randomSign = randomElement(mathSigns)
  const firstRandonInt = randomNumber(1, 200)
  const secondRandomInt = randomNumber(1, 200)
  if(firstRandonInt > secondRandomInt) {
    return(`firstRandonInt ${randomSign} secondRandomInt = `)
  }
}

// берем рандомные числа. берем рандомный знак (+, - или *). о! берем парочки. находим им рандомный знак.
// считаем ответ и отправляем его в константе энсва. и проверяем, равен ли ответ юзера верному



export { quiz, evenOrNo, counter, userName, isEven, greeting, randomNumber, calculator };
