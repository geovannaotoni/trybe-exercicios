const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800
console.log(Math.max(randomNumbers)); // NaN

// Para fixar
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Apple', 'Banana', 'Kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Melon', 'Strawberry', 'Cherry'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

// Exemplos da aula
const arrayTeste = [1, 2, 'a'];
console.log(...arrayTeste) // 1 2 a

const printPointCoordinates = (x, y, z) => `Point coordinates are x = ${x}, y = ${y} and z = ${z}`;
const point = [1.0,2.2,-6.6]
console.log(printPointCoordinates(...point));