let n = 5;
let resultLine = '';
let symbol = '*';
let space = ' ';
let position = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < position) {
      resultLine += space;
    } else {
      resultLine += symbol;
    }
  }
  console.log(resultLine);
  resultLine = '';
  position -= 1;
}


/*
    * 4 space e 1 symbol (l0c4)
   ** 3 space e 2 symbol (l1c3 l1c4)
  *** 2 space e 3 symbol (l2c2 ..)
 **** 1 space e 4 symbol (l3c1 ..)
***** 0 space e 5 symbol (l4c0 ..)
*/

/*
let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};
*/

