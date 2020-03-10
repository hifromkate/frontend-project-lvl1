const randomElement = (arr) => {
  return arr[randomNumber(0, arr.length - 1)]
}

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



export { randomElement, randomNumber }
