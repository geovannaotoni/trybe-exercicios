// Ex 1 - Verifica se é palindromo
function verificaPalindromo(palavra) {
  novaPalavra = palavra.split('').reverse().join('');
  if(palavra === novaPalavra) {
    return true;
  }
  return false;
}

console.log(verificaPalindromo('roma'));
console.log(verificaPalindromo('arara'));

//Outra solução
// function verificaPalindromo(palavra) {
//   for (let index in palavra) {
//     if (palavra[index] === palavra[(palavra.length - 1) - index]) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(verificaPalindromo('roma'));
// console.log(verificaPalindromo('arara'));

// Ex 2 - Crie a função indiceDoMaior
function indiceDoMaior(array) {
  let maior = array[0];
  for (let index in array) {
    if(array[index] > maior){
      maior = array[index];
    }
  }
  return array.indexOf(maior);
}
console.log(indiceDoMaior([2,3,6,7,10,1]));

//Gabarito
// function indiceDoMaior(numeros) {
//   let indiceMaior = 0;
//   for (let indice in numeros) {
//     if (numeros[indiceMaior] < numeros[indice]) {
//       indiceMaior = Number(indice);
//     }
//   }
//   return indiceMaior;
// }
// console.log(indiceDoMaior([2,3,6,7,10,1]));

//Ex 3 - indiceDoMenor
function indiceDoMenor(array) {
  let indiceMenor = 0;
  for(let index in array) {
    if(array[index] < array[indiceMenor]) {
      indiceMenor = Number(index);
    }
  }
  return indiceMenor;
}

console.log(indiceDoMenor([2,4,6,7,10,0,-3]));

//Ex 4 - Crie a função maiorPalavra
function maiorPalavra(arrayNomes) {
  let maior = arrayNomes[0];
  for(let index in arrayNomes) {
    if(arrayNomes[index].length > maior.length) {
      maior = arrayNomes[index];
    }
  }
  return maior;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//Ex 5 - Crie a função maisRepetido
function contaRepeticoes(arrayNumeros) {
  let objNumeros = {};
  for(let index in arrayNumeros) {
    if (!objNumeros[arrayNumeros[index]]){ //if (objNumeros[arrayNumeros[index]] === undefined)
      objNumeros[arrayNumeros[index]] = 1;
    } else {
      objNumeros[arrayNumeros[index]] += 1;
    }
  }
  return objNumeros;
}

function maisRepetido(arrayNumeros) {
  let objNumeros = contaRepeticoes(arrayNumeros);
  let repeticoes = 0;
  let numeroMaisRep = 0;
  for (let key in objNumeros){
    if(objNumeros[key] > repeticoes) {
      numeroMaisRep = key;
      repeticoes = objNumeros[key];
    }
  }
  return numeroMaisRep;
}

console.log(maisRepetido([1,1,5,10,10,10,1,1]));


//Ex 6 - Crie a função somatorio
function somatorio(numero) {
  let soma = 0;
  if (numero < 0) {
    return 'Erro, o número deve ser positivo.'
  }
  for (let index = 1; index <= numero; index += 1){
    soma += index;
  }
  return soma;
}

console.log(somatorio(5));
console.log(somatorio(-5));

//Ex 7 - Crie a função verificaFimPalavra
function verificaFimPalavra(palavra, fimPalavra) {
  return palavra.endsWith(fimPalavra);
}

console.log(verificaFimPalavra('Ser ou não ser, eis a questão','questão'))