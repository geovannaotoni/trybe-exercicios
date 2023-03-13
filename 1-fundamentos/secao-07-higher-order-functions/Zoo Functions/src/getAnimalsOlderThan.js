const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const getAnimalsList = data.species.find((especie) => especie.name === animal).residents;
  return getAnimalsList.every((element) => element.age > age);
};

// Explicação para mim mesma: A função recebe o nome de um animal e uma idade para verificar se todos os animais são mais velhos que aquela idade. Na função, a constante getAnimalsList encontra o animal cujo nome seja igual ao nome passado como parâmetro e retorna o valor da chave residents, com a lista de animais daquela espécie. Em seguida, verifica-se, com a HOF every, se todos os animais da lista são maiores que a idade passada como parâmetro da função, retornando true ou false.

module.exports = getAnimalsOlderThan;
