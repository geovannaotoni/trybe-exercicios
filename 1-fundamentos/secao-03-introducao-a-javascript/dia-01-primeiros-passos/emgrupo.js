/* 
  1. Hora de fazermos em conjunto! 🏄‍♀️
   Agora vamos ter alguns minutos para construir um algoritmo com a seguinte descrição:
   Crie dois valores num1 e num2.
   Se os valores forem iguais some os dois
   Caso contrário multiplique num1 por num2.
   Por ultimo exiba o valor final no console.
*/

let num1 = 30;
let num2 = 30;
let resultado;

if (num1 === num2) {
  resultado = num1 + num2;
} else {
  resultado = num1 * num2;
}

console.log(resultado);

// 2.Utilize if/else para escrever um código que retorne o maior de dois números. 
//Defina, no começo do seu código, duas constantes com os valores que serão comparados.

const val1 = 12;
const val2 = 10;

if (val1 > val2) {
  console.log('O maior valor é ' + val1);
} else if (val1 < val2) {
  console.log('O maior valor é ' + val2);
} else {
  console.log('valores iguais');
}
