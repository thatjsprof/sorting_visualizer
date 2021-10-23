export const generateRandomArray = (size) => {
  const array = [];
  const constant = 100;
  let loopSize = size;

  for (let i = 0; i < loopSize; i++) {
    const number = generateRandomNumber(loopSize);
    const factor = generateRandomNumber(constant);
    checkNumber(number) ? loopSize++ : array.push(number + factor);
  }

  function generateRandomNumber(number) {
    return Math.floor(Math.random() * number);
  }

  function checkNumber(number) {
    return number < 10;
  }

  return array;
};
