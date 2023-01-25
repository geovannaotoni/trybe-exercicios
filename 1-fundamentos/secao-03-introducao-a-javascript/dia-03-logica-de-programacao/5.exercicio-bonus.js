let n = 7;
let symbol = '*';
let space = '-';
let meioMatriz = Math.floor(n/2); //arredonda pra baixo (nesse caso é 3)
let controleEsquerdo = meioMatriz;
let controleDireito = meioMatriz;
let result = '';

for (let lineIndex = 0; lineIndex < meioMatriz; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex === controleEsquerdo || columnIndex === controleDireito) {
      result += symbol;
    } else {
      result += space;
    }
  }
  console.log(result);
  result = '';
  controleEsquerdo -= 1;
  controleDireito += 1;
}
for (let indexLastLine = 0; indexLastLine < n; indexLastLine += 1) {
  result += symbol;
}
console.log(result);

/*
Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *    |* coluna 3
  * *   |* coluna 2 e 4
 *   *  |* coluna 1 e 5
******* |* coluna 0 a 6
*/