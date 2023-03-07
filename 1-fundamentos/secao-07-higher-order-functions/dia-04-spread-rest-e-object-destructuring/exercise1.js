// Exercício 1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];
// console.log(rectangles) // [ [ 1, 2 ], [ 3, 5 ], [ 6, 9 ] ]

rectangles.forEach((rectangle) => {
// utilize o spread operator para que ele passe cada array com as medidas do retângulo como um parâmetro da função.

console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
});

// Exercício 2
const sum = (...num) => {
  // return [...num].reduce(((acc, curr) => acc + curr), 0)
  return num.reduce(((acc, curr) => acc + curr), 0);
}
console.log(sum(4,5,6)) //15

// Exercício 3
// name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = (person) => {
  const {name, age, likes} = person;
  return `${name} is ${age} years old and likes ${likes.join(', ')}.`
};
// outra solução
// const personLikes = ({ name, age, likes }) => (
//   `${name} is ${age} years old and likes ${likes.join(', ')}.`
//  ); 

// Retornos esperados:
console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// Exercício 4
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
  // bornIn: nascido em
];

const filterPeople = (list) => {
  return list.filter(({bornIn, nationality}) => bornIn > 1900 && bornIn <= 2000 && nationality === 'Australian');
};
console.log(filterPeople(people));

// Exercício 5
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// escreva shipLength abaixo
const shipLength = ({name, length, measurementUnit}) => {
  return `${name} is ${length} ${measurementUnit} long`
};

// retorno esperado
console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

// Exercício 6
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
const seasons = ({spring, summer, autumn, winter}) => {
  return [...spring, ...summer, ...autumn, ... winter];
};
console.log(seasons(yearSeasons));