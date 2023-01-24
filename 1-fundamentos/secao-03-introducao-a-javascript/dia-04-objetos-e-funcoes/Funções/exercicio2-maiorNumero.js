function maiorNumero (a, b) {
  if (a > b) {
    console.log('o valor de ' + a + ' é maior que o de ' + b);
  } else if (a < b) {
    console.log('o valor de ' + b + ' é maior que o de ' + a);
  } else {
    console.log('Os valores são iguais');
  }
}

maiorNumero(5,3);
maiorNumero(3,10);
maiorNumero(12,12);

//Gabarito
function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else {
    return segundoNum + ' é maior que ' + primeiroNum;
  }
}

console.log(maiorNum(8,12));