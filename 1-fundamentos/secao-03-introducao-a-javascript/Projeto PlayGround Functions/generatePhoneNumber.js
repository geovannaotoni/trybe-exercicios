// Desafio 11 - Crie a função generatePhoneNumber
// verifica se o array tem algum número que se repete mais de 2 vezes
/*
const contaRepeticoes = (array) => {
  let objNumeros = {};
  for (let index in array) {
    if (!objNumeros[array[index]]) {
      objNumeros[array[index]] = 1;
    } else {
      objNumeros[array[index]] += 1;
    }
  }
  for (let key in objNumeros) {
    if (objNumeros[key] > 2) {
      return false;
    }
  }
  return true;
};
// gera o número de telefone
const generatePhoneNumber = (array) => {
  let stringPhone = '(';
  let verificaRepeticoes = contaRepeticoes(array);
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9 || (verificaRepeticoes === false)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
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
*/

//outra solução
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
  let check = true;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      check = false;
    }
  }
  return check;
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

// console.log(generPhoneNumber([1,2,3,4,5,6,7,8,9,0,1])) //(12) 34567-8901
// console.log(generPhoneNumber([1,2,3,4,5,6,7,8,9,1,1])) 
console.log(generPhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1]));

//utilizando a função replace
let phoneNumber = '12345678901';
let resultado = phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/,'($1) $2-$3');
console.log(resultado);