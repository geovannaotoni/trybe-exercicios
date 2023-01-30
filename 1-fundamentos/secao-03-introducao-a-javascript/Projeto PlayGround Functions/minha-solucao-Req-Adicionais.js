// Desafio 11 - Crie a função generatePhoneNumber
//Solução com aviso do eslint sobre complexidade acima do permitido
// verifica se o array tem algum número que se repete mais de 2 vezes
// const contaRepeticoes = (array) => {
//   let objNumeros = {};
//   for (let index in array) {
//     if (!objNumeros[array[index]]) {
//       objNumeros[array[index]] = 1;
//     } else {
//       objNumeros[array[index]] += 1;
//     }
//   }
//   for (let key in objNumeros) {
//     if (objNumeros[key] > 2) {
//       return false;
//     }
//   }
//   return true;
// };
// // gera o número de telefone
// const generatePhoneNumber = (array) => {
//   let stringPhone = '(';
//   let verificaRepeticoes = contaRepeticoes(array);
//   if (array.length !== 11) {
//     return 'Array com tamanho incorreto.';
//   }
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index] < 0 || array[index] > 9 || (verificaRepeticoes === false)) {
//       return 'não é possível gerar um número de telefone com esses valores';
//     }
//     if (index === 2) {
//       stringPhone += ') ';
//     }
//     if (index === 7) {
//       stringPhone += '-';
//     }
//     stringPhone += array[index];
//   }
//   return stringPhone;
// };

//Solução dividindo a função em várias funções menores
const contaNumeros = (array) => {
  let objNumeros = {};
  for (let index in array) {
    if (!objNumeros[array[index]]) {
      objNumeros[array[index]] = 1;
    } else {
      objNumeros[array[index]] += 1;
    }
  }
  return objNumeros;
};
const verificaRepeticoes = (objNumeros) => {
  for (let key in objNumeros) {
    if (objNumeros[key] > 2) {
      return false;
    }
  }
  return true;
};
const verificaNumeros = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return false;
    }
    return true;
  }
};
const formatPhoneNumber = (array) => {
  let stringPhone = '(';
  for (let index = 0; index < array.length; index += 1) {
    if (index === 2) {
      stringPhone += ') ';
    }
    if (index === 7) {
      stringPhone += '-';
    }
    stringPhone += array[index];
  }
  return stringPhone;
};

const generPhoneNumber = (array) => {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let verificaNum = verificaNumeros(array);
  let verificaRep = verificaRepeticoes(contaNumeros(array));
  if (verificaNum === false || (verificaRep === false)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return formatPhoneNumber(array);
};

// Desafio 12 -  Crie a função triangleCheck
// Resolução com complexidade acima do permitido pelo ESLINT
// const triangleCheck = (lineA, lineB, lineC) => {
//   let checkOne = (lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC));
//   let checkTwo = (lineB < lineA + lineC) && lineB > (Math.abs(lineA - lineC));
//   let checkThree = (lineC < lineA + lineB) && (lineC > Math.abs(lineA - lineB));
//   let conditionOne = checkOne || checkTwo || checkThree;
//   let conditionTwo = ((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineA + lineB));
//   return conditionOne || conditionTwo;
// };

// Resolução reduzindo a complexidade da função, criando três funções separadas (uma para cada condição e uma para o checador) - Ainda com complexidade acima do permitido pelo ESLINT
const conditionOne = (lineA, lineB, lineC) => {
  const checkOne = (lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC));
  const checkTwo = (lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC));
  const checkThree = (lineC < lineA + lineB) && (lineC > Math.abs(lineA - lineB));
  return checkOne || checkTwo || checkThree;
};

const conditionTwo = (lineA, lineB, lineC) => {
  const checkOne = (lineA < lineB + lineC);
  const checkTwo = (lineB < lineA + lineC);
  const checkThree = (lineC < lineA + lineB);
  return checkOne && checkTwo && checkThree;
};

const triangleCheck = (lineA, lineB, lineC) => {
  const checkOne = conditionOne(lineA, lineB, lineC);
  const checkTwo = conditionTwo(lineA, lineB, lineC);
  const check = checkOne || checkTwo;
  return check;
};

// Desafio 13 - Crie a função hydrate
const hydrate = (string) => {
  // função .match: https://www.encodedna.com/javascript/how-to-get-numbers-from-a-string-in-javascript.htm
  // o '\d+' busca por um ou mais dígitos que também são números e o 'g' faz uma pesquisa global na string, retornando todas as ocorrências numéricas.
  let number = string.match(/\d+/g); // array com todos os numeros da string
  let sum = 0;
  for (let value of number) {
    sum += Number(value);
  }

  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
};