import readlineSync from "readline-sync"
const greeting = () => {
  let userName = readlineSync.question("May I Have your name? ");
  console.log(`Hello ${userName}!`);
}
export default greeting;
