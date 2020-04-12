import readlineSync from 'readline-sync';

const flow = (game, description) => {
  const roundsCount = 3;
  let usersPoints = 0;
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I Have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = game();
    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    if (answer == usersAnswer) {
      console.log('Correct!');
      usersPoints += 1;
    } else {
      console.log(`${usersAnswer} is the wrong answer ;( ${answer} is the right one. Let's try again, ${userName}!`);
      return;
    }
  }
  if (usersPoints === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};


export default flow;
