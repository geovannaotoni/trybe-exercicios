let n = 5
let resultLine = '';

for (let index = 1; index <= n; index += 1) {
  for (let indexAux = 1; indexAux <= n; indexAux += 1) {
    resultLine += '*'
  }
  console.log(resultLine);
  resultLine = ''
}

//Gabarito
n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};
