// COM OBJETOS:
const user = {name: 'Marlete', age: 60};
// desestruturamos a propriedade name e atribuímos como variável
const { name } = user;
// conseguimos utilizar a propriedade como variável
console.log(name); // Marlete

// COM ARRAYS:
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
// - Modo antigo:
// const firstCountry = arrayCountries[0];
// const secondCountry = arrayCountries[1];
// const thirdCountry = arrayCountries[2];
// const fourthCountry = arrayCountries[3];
// console.log(firstCountry); // Brazil
// console.log(secondCountry); // Japan
// console.log(thirdCountry); // China
// console.log(fourthCountry); // Canada
// - Modo atual:
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;
console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// Exercicio 1 - Para Fixar
const primeNumbers = [17, 23, 37];
const sum = (a, b) => {
  console.log(a + b);
};
sum(primeNumbers[0], primeNumbers[2]) // 54
// Produza o mesmo resultado acima, porém utilizando array destructuring
const [firstNum, secondNum, thirdNum] = primeNumbers;
sum(firstNum, thirdNum);

// Exercicio 2 - Para Fixar
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
// [comida, animal, bebida] = ['arroz', 'gato', 'água'];
[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida);

// Exercicio 3 - Para Fixar
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima
// const [num1, num2, num3, num4, num5, num6, num7] = numerosPares;
// numerosPares = [num4, num5, num6, num7];  
[,,, ...numerosPares] = numerosPares;
console.log(numerosPares); // [6, 8, 10, 12];