const { retrieveSourceMap } = require("source-map-support");

const hydrate = (string) => {
  const characters = string.split('');
  let number = 0;
  for (let index = 0; index < characters.length; index += 1) {
    let character = characters[index];
    if (parseInt(character)) {
      number += parseInt(character);
    }
  }
  if (number === 1) {
    return '1 copo de água'
  }
  return `${number} copos de água`
};

// console.log(hydrate('1 cerveja, 2 shots e 1 catuaba'));

module.exports = hydrate;