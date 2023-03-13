// Exemplo 1
const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado'); // false
console.log(verifyGrades);

// Para fixar
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

  //Adicione seu código aqui
const verifyAges = (arr, age) => {
  return arr.every((element) => element['age'] >= age);
}

console.log(verifyAges(people, 18)); // false
console.log(verifyAges(people, 14)); // true
