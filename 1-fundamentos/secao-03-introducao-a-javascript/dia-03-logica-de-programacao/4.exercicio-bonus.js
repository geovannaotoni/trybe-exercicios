let n = 5;
let symbol = '*';
let space = ' ';
let meioMatriz = Math.floor(n/2); //arredonda pra baixo
let controleEsquerdo = meioMatriz;
let controleDireito = meioMatriz;
let result = '';


for (let lineIndex = 0; lineIndex <= meioMatriz; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if(columnIndex >= controleEsquerdo && columnIndex <= controleDireito) {
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





//   *   - 2 spaces 1* 2 spaces (l0 c2) numero de *: 2l+1
//  ***  - 1 space 3* 1 space (l1 c1c2c3)
// ***** - 5 * (l2 c0c1c2c3c4)