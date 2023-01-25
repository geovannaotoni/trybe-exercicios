let n = 7;
let symbol = '*';
let space = ' ';
let meioMatriz = Math.floor(n/2); //arredonda pra baixo (nesse caso é 3)
let controleEsquerdo = meioMatriz;
let controleDireito = meioMatriz;
let result = '';

for (let lineIndex = 0; lineIndex <= meioMatriz; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex === controleEsquerdo || columnIndex === controleDireito || lineIndex === meioMatriz) {
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