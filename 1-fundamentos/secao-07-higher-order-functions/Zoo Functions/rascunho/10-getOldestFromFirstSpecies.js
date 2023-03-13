const data = require('./data');
const getOldestFromFirstSpecies = (id) => {
  // retorna todas as espécies de animais que a pessoa é responsável
  const animalsOfEmployee = data.employees.find((employee) => employee.id === id).responsibleFor;
  // retorna todos os animais da primeira espécie da lista
  const animalsByKind = data.species.find((especie) => especie.id === animalsOfEmployee[0]).residents;
  const oldestAnimal = animalsByKind.reduce((acc, curr) => acc.age > curr.age ? acc : curr);
  return Object.values(oldestAnimal);
};

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// Explicação para mim mesma: A função recebe um id de um um funcionário. Com a HOF find no array employees, será encontrado o objeto cuja chave id seja igual ao id passado como parâmetro. A constante animalsOfEmployee vai receber o array da chave responsibleFor, com todos os animais que aquele funcionário é responsável. Em seguida, com a HOF find no array de species, será localizado o objeto cuja chave id seja igual ao primeiro elemento do array animalsOfEmployee. A constante animalsByKind vai receber o array da chave residents com todos os animais daquela espécie. Por fim a HOF reduce vai verifica qual é o animal mais velho através da chave age de cada objeto do array e retornar o maior.

// const longestNamedBook = () => {
//   return books.reduce((acc, curr) => acc.name.length > curr.name.length ? acc : curr);
// }
// console.log(longestNamedBook())