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