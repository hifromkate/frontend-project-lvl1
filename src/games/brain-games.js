import readlineSync from 'readline-sync';

const playGames = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I Have your name? ');
  console.log(`Hello ${userName}!`);
};

export default playGames;
