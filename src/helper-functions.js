const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomElement = (arr) => arr[randomNumber(0, arr.length - 1)];

export { randomElement, randomNumber };
