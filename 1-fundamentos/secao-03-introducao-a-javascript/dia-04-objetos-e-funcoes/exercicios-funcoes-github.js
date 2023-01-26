// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.
const ligarDesligar = (status) => {
  if (status === 'ligado') {
    status = 'desligado';
  } else if (status === 'desligado') {
    status = 'ligado';
  }
  console.log(`O motor está ${status}`);
  return status;
};

/* Solução Bonus do Gabarito - com ternary operator
  const ligarDesligar = (status) => {
    status = status === 'desligado' ? 'ligado' : 'desligado';
    console.log(`O motor está ${status}`);
    return status;
  };
*/

// 2 - Crie a função circleArea, que calcule a área de um círculo. 
const circleArea = (radius) => {
  let pi = 3.14;
  if (typeof (radius) === 'number') {
    return `Essa é a área do círculo: ${pi * radius ** 2}`;
  }
  return 'O parâmetro radius deve ser um número';
};
console.log(circleArea(10));
console.log(circleArea('duna'));

// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.
const longestWord = (frase) => {
  const arrayFrase = frase.split(' ');
  let biggestWord = arrayFrase[0];
  for (let index = 1; index < arrayFrase.length; index += 1) {
    if (biggestWord.length < arrayFrase[index].length) {
      biggestWord = arrayFrase[index];
    }
  }
  return biggestWord;
};
console.log(longestWord('Eu estudo na Trybe com muita dedicação'));
console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));

/* Solução Bonus do Gabarito - em uma única linha
const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
*/