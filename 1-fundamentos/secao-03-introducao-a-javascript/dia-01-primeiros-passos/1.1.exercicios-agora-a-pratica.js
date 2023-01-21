const a = 7;
const b = 5;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log('Soma: ' + adicao);
console.log('Subtração: ' + subtracao);
console.log('Multiplicação: ' + multiplicacao);
console.log('Divisão: ' + divisao);
console.log('Módulo: ' + modulo);

if (a > b) {
  console.log('O maior valor é ' + a);
} else if (a < b) {
  console.log('O maior valor é ' + b);
} else {
  console.log('Os números são iguais')
}

let c = 10;

if (a > b && a > c) {
  console.log('O maior valor é ' + a);
} else if (b > a && b > c) {
  console.log('O maior valor é ' + b);
} else if (c > a && c > b) {
  console.log('O maior valor é ' + c);
}

let valor = -5;
if (valor > 0){
  console.log('positive');
} else if (valor < 0) {
  console.log('negative');
} else {
  console.log('zero');
}