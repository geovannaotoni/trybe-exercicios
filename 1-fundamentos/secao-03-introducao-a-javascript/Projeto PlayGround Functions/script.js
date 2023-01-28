// 1- Crie uma função usando o operador &&
const compareTrue = (param1, param2) => {
  if (param1 === true & param2 === true) {
    return true;
  }
  return false;
};

const girafa = true;
const elefante = true;
const macaco = false;
console.log(compareTrue(girafa, elefante));
console.log(compareTrue(macaco, elefante));

// 2 - Crie uma função que divida uma frase
const splitSentece = (string) => string.split(' ');

console.log(splitSentece('vamo que vamo'));
console.log(splitSentece('go Trybe'));
console.log(splitSentece('foguete'));

// 3- Crie uma função que use concatenação de strings
const concatName = (array) => {
  let arrayItens = [];
  arrayItens.push(array[array.length - 1], array[0]);
  return arrayItens.join(', ');
}

console.log(concatName(['lucas', 'cassiano', 'ferraz', 'paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// 4- Crie uma função que calcule a quantidade de pontos em um campeonato de futebol
const footballPoints = (wins, ties) => wins*3 + ties;

console.log(footballPoints(14,8));
console.log(footballPoints(1,2));
console.log(footballPoints(0,0));

// 5- Crie uma função que calcula o número de repetições do maior número - rever se é a melhor solução
const highestCount = (array) => {
  array.sort((a, b) => b - a)
  maiorNum = 0;
  contador = 0;
  for (let index in array) {
    if (array[index] >= maiorNum) {
      maiorNum = array[index];
      contador += 1;
    }
  }
  return contador;
};

console.log(highestCount([9,1,2,3,9,5,7]));
console.log(highestCount([0,4,4,4,9,2,1]));
console.log(highestCount([0,0,0]));

// Crie 3 funções para calcular as áreas de um triângulo e de um retângulo
const calcTriangleArea = (base, height) => base * height / 2;
const calcRectangleArea = (base, height) => base * height;
const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida'
};

console.log(calcTriangleArea(10,50));
console.log(calcRectangleArea(10,50));
console.log(calcAllAreas(10, 50, 'triângulo'));
console.log(calcAllAreas(10, 50, 'retângulo'));
console.log(calcAllAreas(10, 50, 'quadrado'));

// 7- Crie uma função de Caça ao Rato