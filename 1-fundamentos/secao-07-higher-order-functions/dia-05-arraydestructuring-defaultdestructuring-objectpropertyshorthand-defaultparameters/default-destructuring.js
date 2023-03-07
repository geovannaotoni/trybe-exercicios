// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality } = person;
// console.log(nationality) // undefined

// const { nationality = 'Brazilian' } = person;
// console.log(nationality); // Brazilian


const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

// Para Fixar
const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;
// Passando um valor default para a desestruturação de `nationality` sendo "Brazilian" então todo objeto que passarmos terá esse valor, caso não seja passado algum outro.

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));