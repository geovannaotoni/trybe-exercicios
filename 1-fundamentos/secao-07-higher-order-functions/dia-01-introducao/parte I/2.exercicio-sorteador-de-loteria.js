const generateNumber = () => {
  const result = Math.floor(Math.random() * 5 + 1);
  return result;
};

const loteria = (numeroApostado, func) => {
  const numeroLoteria = func();
  if (numeroApostado === numeroLoteria) {
    return 'Parabéns, você ganhou';
  }
  return 'Tente novamente';
}

console.log(loteria(3, generateNumber));

// Gabarito
const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));