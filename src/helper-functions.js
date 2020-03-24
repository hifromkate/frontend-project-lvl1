const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomElement = (arr) => arr[getRandomNumber(0, arr.length - 1)];

export { getRandomElement, getRandomNumber };
