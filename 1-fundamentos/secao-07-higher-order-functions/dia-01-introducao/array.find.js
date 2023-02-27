const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

console.log(idades.find((idade) => idade < 20));
console.log(idades.find((idade) => idade > 50));
console.log(idades.find((idade) => idade === 33));

// Para fixar
// Ex 1
const numbers = [19, 21, 30, 3, 45, 22, 15];
console.log(numbers.find((number) => number % 3 === 0 && number % 5 === 0));

// Ex 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];
const nameFind = names.find((nome) => {
  return nome.length === 5;
})
console.log(nameFind);

// Ex 3
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const findMusic = musicas.find((music) => {
  return music['id'] === '31031685';
})

console.log(findMusic);