function verifyHighestCount(number, highest, count) {
  if (number > highest) {
    highest = number;
    count = 1;
  } else if (number === highest) {
    count += 1;
  }
  return [highest, count];
};

function highestCount(numbersArray) {
  let highestNumber = -Infinity;
  let highestNumberRepeat = 0;
  let result = [];
  for (let index = 0; index < numbersArray.length; index += 1) {
    result = verifyHighestCount(numbersArray[index], highestNumber, highestNumberRepeat);
    [highestNumber, highestNumberRepeat] = result;
  }
  return highestNumberRepeat;
};

module.exports = {highestCount};