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

// 5- Crie uma função que calcula o número de repetições do maior número 

//Com sort
// const highestCount = (array) => {
//   array.sort((a, b) => b - a)
//   maiorNum = 0;
//   contador = 0;
//   for (let index in array) {
//     if (array[index] >= maiorNum) {
//       maiorNum = array[index];
//       contador += 1;
//     }
//   }
//   return contador;
// };

// sem sort
const highestCount = (array) => {
  maiorNum = 0;
  contador = 0;
  for (let index in array) {
    if (array[index] > maiorNum) {
      maiorNum = array[index];
      contador = 1;
    } else if (array[index] === maiorNum) {
      contador += 1;
    }
  }
  return contador;
};

console.log(highestCount([9,1,2,3,9,5,7])); //2
console.log(highestCount([0,4,4,4,9,2,1])); //1
console.log(highestCount([0,0,0])); //3

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
const catAndMouse = (mouse, cat1, cat2) => {
  const mouseCat1 = Math.abs(mouse - cat1);
  const mouseCat2 = Math.abs(mouse - cat2);
  if (mouseCat1 > mouseCat2) {
    return 'cat2';
  } else if (mouseCat1 < mouseCat2) {
    return 'cat1';
  } else if (mouseCat1 === mouseCat2) {
    return 'os gatos trombam e o rato foge';
  }
};
console.log(catAndMouse(0,3,2)) //cat2
console.log(catAndMouse(0,6,12)) //cat1
console.log(catAndMouse(0,-1,1)) //'os gatos trombam e o rato foge'

// 8 - Crie uma função fizzBuzz
const fizzBuzz = (array) => {
  let arrayStrings = [];
  for (let value of array) {
    if ((value % 3 === 0) && (value % 5 !== 0))  {
      arrayStrings.push('fizz');
    } else if ((value % 3 !== 0) && (value % 5 === 0)) {
      arrayStrings.push('buzz');
    } else if ((value % 3 === 0) && (value % 5 === 0)) {
      arrayStrings.push('fizzBuzz');
    } else {
      arrayStrings.push('bug!');
    }
  }
  return arrayStrings;
};
console.log(fizzBuzz([2,15,7,9,45]));
console.log(fizzBuzz([7,9]));
console.log(fizzBuzz([9,25]));

// 9 - Crie uma função que Codifique e Decodifique
const encode = (string) => {
  const codigo = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  let newString = '';
  for (let letter of string) {
    if (codigo[letter]) {
      newString += codigo[letter];
    } else {
      newString += letter;
    }
  }
  return newString;
};

console.log(encode('hi there!'));
console.log(encode('How are you today?'));

// 10 - Crie uma função de Lista de Tecnologias - ordenado com sort
const techLista = (array, nome) => {
  let arrayOrd = array.sort();
  let arrayObj = [];
  for (let index in arrayOrd) {
    let obj = {
      tech: arrayOrd[index],
      name: nome,
    };
    arrayObj.push(obj);
  }
  return arrayObj;
};

console.log(techLista(['React','Jest','HTML','CSS','JavaScript'],'Lucas'));

// 11 - Crie uma função de número de telefone - falta retornar caso algum numero do array repetir 3x

// const generatePhoneNumber = (array) => {
//   let stringPhone = '(';
  
//   if (array.length !== 11) {
//     return 'Array com tamanho incorreto.'
//   }
  
//   for (let index in array) {

//     if (array[index] < 0 || array[index] > 9) {
//       return 'não é possível gerar um número de telefone com esses valores';
//     }
//     if (index === '2') {
//       stringPhone += ') '
//     }
//     if (index === '7') {
//       stringPhone += '-';
//     }
//     stringPhone += array[index];
//   }

//   return stringPhone;
// };

//verifica se o array tem algum número que se repete mais de 2 vezes
function contaRepeticoes(array) {
  let objNumeros = {};
  for(let index in array) {
    if (!objNumeros[array[index]]){
      objNumeros[array[index]] = 1;
    } else {
      objNumeros[array[index]] += 1;
    }
  }
  //return objNumeros;
  for (let key in objNumeros) {
    if (objNumeros[key] > 2 ) {
      return false;
    }
  }
  return true;
}
//console.log(contaRepeticoes([1,2,3,4,5,6,7,8,9,0,1]))

const generatePhoneNumber = (array) => {
  let stringPhone = '(';
  
  let verificaRepeticoes = contaRepeticoes(array);

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  
  for (let index = 0; index < array.length; index += 1) {

    if (array[index] < 0 || array[index] > 9 || (verificaRepeticoes === false)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (index === 2) {
      stringPhone += ') '
    }
    if (index === 7) {
      stringPhone += '-';
    }
    stringPhone += array[index];
  }

  return stringPhone;
};

console.log(generatePhoneNumber([1,2,3,4,5,6,7,8,9,0,1])) //(12) 34567-8901
console.log(generatePhoneNumber([1,2,3,4,5,6,7,8,9,1,1])) 

// 12 - Crie uma função que teste a condição de existência de um triângulo
const triangleCheck = (lineA, lineB, lineC) => {
  if (((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) || ((lineB < lineA + lineC) && (Math.abs(lineB > lineA - lineC))) || ((lineC < lineA + lineB) && (Math.abs(lineC > lineA - lineB)))) {
    return true;
  }
  if ((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineA + lineB)) {
    return true;
  }
  return false;
};

console.log(triangleCheck(10,14,8)); // true

// 13 - Crie uma função de boas vindas ao Bar da Trybe!
const hydrate = (string) => {
  // função .match: https://www.encodedna.com/javascript/how-to-get-numbers-from-a-string-in-javascript.htm
  // o '\d+' busca por um ou mais dígitos que também são números e o 'g' faz uma pesquisa global na string, retornando todas as ocorrências numéricas.
  let number = string.match(/\d+/g); //array com todos os numeros da string
  let sum = 0;
  for (let value of number) {
    sum += Number(value);
  }

  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
};

console.log(hydrate('1 cerveja'));
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));