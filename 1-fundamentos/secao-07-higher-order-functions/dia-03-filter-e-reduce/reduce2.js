// Exemplo 4
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// função que some todos os números pares do array numbers
const pares = numbers.reduce((acc, curr) => (curr % 2 === 0) ? acc + curr : acc, 0);
console.log(pares);

// Solução longa
// const pares2 = numbers.reduce((acc, curr) => {
//   if (curr % 2 === 0) {
//      return acc + curr;
//   } else {
//       return acc;
//   }
// }, 0)
// console.log(pares2);

// solução com filter e reduce
const isEven = (number) => number % 2 === 0;
const sum = (accumulator, number) => accumulator + number;
const sumNumbers = (array) => array.filter(isEven).reduce(sum);
console.log(sumNumbers(numbers));

// Exemplo 5
// função para mostrar um relatório que diz em qual matéria a pessoa foi melhor, usando tanto o map quanto o reduce dentro dele
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

// resultado esperado
// [
//   { name: 'Jorge', materia: 'Português' },
//   { name: 'Mario', materia: 'Biologia' },
//   { name: 'Jorge', materia: 'Português' },
//   { name: 'Maria', materia: 'Química' },
//   { name: 'Natalia', materia: 'Português' },
//   { name: 'Wilson', materia: 'Português' },
// ]
const report = estudantes.map((element) => {
  const obj = {}
  obj.name = element.nome;
  obj.materia = (element.materias).reduce(((acc, curr) => acc.nota > curr.nota ? acc : curr), 0).name;
  return obj;
});
console.log(report);

// Gabarito
const getBestClass = (acc, materia) => (acc.nota > materia.nota) ? acc : materia;

const reportBest = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getBestClass).name,
}));

console.log(reportBest(estudantes));

// Gabarito do video
const relatorio = estudantes.map((estudante) => ({
  name: estudante.nome,
  materia: estudante.materias.reduce((acc, materia) => {
    if (acc.nota > materia.nota) {
      return acc;
    } /* else { */
      return materia;
    /*}*/
  }).name,
}));
console.log(relatorio);

const relatorio2 = estudantes.map((estudante) => ({
  name: estudante.nome,
  materia: estudante.materias
    .reduce((acc, materia) => acc.nota > materia.nota ? acc : materia).name,
  }));

console.log(relatorio2);