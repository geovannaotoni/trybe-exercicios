const average = (array) => {
  let sum = 0;
  if (array.length === 0) {
    return undefined;
  }
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') {
      return undefined;
    }
    sum += array[index];
  }
  return Math.round(sum / array.length);
  // Para o Math.round: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round
};
console.log(average([]));

console.log(average([3.6, 5.6, 'a']));