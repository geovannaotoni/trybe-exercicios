// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
// Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato:
// let objeto = {
//   area: 0,
//   perimetro: 0,
// };
// Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura
function calculaAreaPerimetro(base, altura) {
  let objeto = {};
  objeto['area'] = base*altura;
  objeto['perimetro'] = (base + altura)*2;
  return objeto;
}

// Gabarito
// function calculaAreaPerimetro(base, altura) {
//   let resultado = {
//     area: base*altura,
//     perimetro: (base + altura)*2,
//   };
//   return resultado;
// }

console.log(calculaAreaPerimetro(2,3));


// Exercício 2 - Crie uma função que, dado um array de números inteiros,
// retorne a quantidade de números pares e ímpares no formato:
// let numeros = {
//   pares: 0,
//   ímpares: 0,
// };

function paresImpares(arrayNumeros) {
  let numeros = {
    pares: 0,
    ímpares: 0,
  };

  for (index in arrayNumeros) {
    if (arrayNumeros[index] % 2 === 0) {
      numeros['pares'] += 1;
    } else {
      numeros['ímpares'] += 1;
    }
  }

  return numeros;
}
console.log(paresImpares([1,2,3,4,5]));

// Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word.
// Considere que a string ending sempre será menor que a string word.
// Dica: Use o split.

// valor de teste: ‘trybe’ e ‘be’
// valor esperado no retorno da função: true
// verificaFimPalavra(‘trybe’, ‘be’);
// Retorno esperado: true
// verificaFimPalavra(‘joaofernando’, ‘fernan’);
// Retorno esperado: false;

function verificaString(word, ending) {
  for (let index = 0; index < ending.length; index += 1) {
    if (word[word.length - 1 - index] === ending[ending.length - 1 - index]) {
      return true;
    } 
    return false;
  }
}

console.log(verificaString('trybe','be'));
console.log(verificaString('joaofernando','fernan'));

//Gabarito com função endsWith
// function verificaString(palavra, ending) {
//   if (palavra.endsWith(ending)) {
//     return true
//   }
//   return false;
// }

//Gabarito com split
function verificaFimPalavra(word, ending) {
  let resultado = word.split(ending); //split separa a string em um array de acorco com o separador que estiver dentro do (). No caso, se word tiver ending dentro, a ultima posição do array vai ser vazia
  if (resultado[resultado.length - 1] === '') {
    return true;
  }
  return false;
}
console.log(verificaFimPalavra('trybe','be'));