// Exercício 1
const myList = [5, 2, 3];
// escreva swap abaixo
const swap = ([num1, num2, num3]) => [num3, num2, num1];
console.log(swap(myList)); 

// Exercício 2
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];
// escreva toObject abaixo
const toObject = ([model, brand, year]) => ({model, brand, year});
console.log(toObject(palio));

// Exercício 3
// escreva greet abaixo
const greet = (name, msg = 'Hi') => `${msg} ${name}`;
// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

// Exercício 4
const estudante1 = {
  name: `Claudia`,
  lastName: `Farias`,
  age: 23,
}

const estudante2 = {
  name: `Vitor`,
  age: 20,
}
// escreva 'getLastName' abaixo para receber os objetos e retornar sua propriedade `lastName`
// modo 1
// const getLastName = ({lastName}) => lastName ? lastName : 'lastName não preenchido';
// modo 2
const getLastName = ({lastName = 'lastName não preenchido'}) => lastName;
console.log(getLastName(estudante1));
console.log(getLastName(estudante2));

// Exercício 5
const moreStudents = [
  'Chris', 
  ['Ahmad', 'Antigoni'], 
  ['Toby', 'Sam']
];

// Escreva seu código aqui
const [student1, [student2, student3], [student4, student5]] = moreStudents;
// const [student1] = moreStudents;
// const [student2, student3] = moreStudents[1];
// const [student4, student5] = moreStudents[2];

console.log(student1, student2, student3, student4, student5);
