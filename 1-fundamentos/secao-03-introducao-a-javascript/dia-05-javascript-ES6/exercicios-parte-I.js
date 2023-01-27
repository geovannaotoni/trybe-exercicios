// Ex1
function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
  //console.log('Idade fora do for:', idade) // retire essa linha ao implementar o tipo de variável correta.
}
imprimeIdade()

// Ex 2
// Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
const pessoa = {
  nome: 'Henri',
  idade: 20
}
pessoa.nome = 'Luna';
pessoa['idade'] = 19;

// pessoa = {
//   nome: 'Luna',
//   idade: 19
// } 
// Altere essa estrutura para corrigir o erro.
console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);


// Ex 3
let favoriteFood = 'Lasanha';
favoriteFood = 'Hamburguer';
console.log(favoriteFood);


// Ex 4 - Template Literals
const name = 'Adriana';
const lastName = 'Soares';
//console.log('Olá' + ',' + name + ' ' + lastName + '!');
console.log(`Olá, ${name} ${lastName}!`);

function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
// console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);

// Ex 5 - Arrow Functions
// function numeroAleatorio() {
//   return Math.random()
// }
// console.log(numeroAleatorio());

// Metodo completo
// const numeroAleatorio = () => {
//   return Math.random();
// }
// console.log(numeroAleatorio());

// Metodo uma linha
const numeroAleatorio = () => Math.random();
console.log(numeroAleatorio());

// Ex 6 - Arrow Functions
// function hello(nome) {
//   return `Olá, ${nome}!`
// }
// let nome = 'Ivan';
// console.log(hello(nome));

const hello = (nome) => `Olá, ${nome}!`
console.log(hello('Ivan'));

// Ex 7 - Arrow Function
// function nomeCompleto(nome, sobrenome) {
//   return `${nome} ${sobrenome}`
// }
// let nome = 'Ivan';
// let sobrenome = 'Pires';
// console.log(nomeCompleto(nome, sobrenome));

const nomeCompleto = (nome, sobrenome) => (`${nome} ${sobrenome}`);
let nome = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));


// Ex 8 - Ternary Operator
// let speed = 90;
// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };
// console.log(speedCar(speed));

let speed = 90;
const speedCar = (speed) => (
  speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
);
console.log(speedCar(speed));