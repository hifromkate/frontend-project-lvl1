import readlineSync from 'readline-sync';

const flow = (game, description) => {
  let counter = 0;
  let usersAnswer;
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I Have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(description);
  do {
    const [question, answer] = game();
    console.log(`Question: ${question}`);
    usersAnswer = readlineSync.question('Your answer: ');
    if (answer == usersAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`${usersAnswer} is the wrong answer ;( ${answer} is the right one. Let's try again, ${userName}!`);
      counter = 0;
      return;
    }
  } while (counter > 0 && counter < 3);
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default flow;
