const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const animalsOfEmployee = data.employees.find((employee) => employee.id === id).responsibleFor;
  const animalsByKind = data.species
    .find((especie) => especie.id === animalsOfEmployee[0]).residents;
  const oldestAnimal = animalsByKind.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(oldestAnimal);
};
// Explicação para mim mesma:
// animalsOfEmployee: retorna todas as espécies de animais que a pessoa é responsável (é um array de ids das espécies). Através da HOF find checa qual funcionário tem o id igual ao id passado no parâmetro da função.
// animalsByKind: retorna todos os animais da primeira espécie da lista (é um array de objetos contendo informações sobre cada animal da espécie). Através da HOF find verifica qual espécie tem o id igual ao o primeiro elemento do array animalsOfEmployee, retornando o objeto. Em seguida, retorna o valor da chave residents desse objeto, que é um array com todos os animais daquela espécie.
// oldestAnimal: com a HOF reduce, verifica qual dos animais é o mais velho através da chave age de cada objeto do array e retornar o maior.
// Por fim, a função retorna somente os valores do objeto que é o animal mais velho.

module.exports = getOldestFromFirstSpecies;
