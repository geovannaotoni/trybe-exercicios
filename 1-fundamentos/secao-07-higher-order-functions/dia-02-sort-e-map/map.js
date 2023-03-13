// Exemplo 1
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

// Com For
// const fullNames = [];

// for (let index = 0; index < persons.length; index += 1) {
//   fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
// }

// console.log(fullNames);

// Com Map
const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// Exemplo 2
const listaNumeros = [10, 20, 30, 40];
const callback = (a) => {
  return a * 2;
};
const dobro = listaNumeros.map(callback);
console.log(listaNumeros);
console.log(dobro);

// Exemplo 3
const numbers = [1, 2, 3, 4, -5];
const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// Exemplo 4
const pessoas = ['Joicy', 'Joel', 'João'];
const novasPessoas = pessoas.map((element) => element.toUpperCase());
console.log(pessoas);
console.log(novasPessoas);
const arrayObjetos = novasPessoas.map((element) => {
  const objeto = {
    nome: element, 
    empresa: 'TRYBE',
  }
  return objeto;
});
console.log(arrayObjetos);

// Exemplo 5
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];
// Juntar em apenas um array, como o ex: const listProducts = [{ Arroz: 2.99 },...]
const obj = products.map((element, index) => {
  const object = {};
  object[element] = prices[index];
  return object;
});
console.log(obj);

// Gabarito
const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));
const listProducts = updateProducts(products, prices);
console.log(listProducts);

// Exemplo 6
const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    return numero;
  }
})); // Retorno: [ undefined, 2, undefined, 4, undefined, undefined ]

const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
});
console.log(paresMenoresQueCinco); // Retorno: [2, 4]
