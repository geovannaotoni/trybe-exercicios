function conversorRomano (numeroRomano) {

let arrayNumero = [];
let numeroConversor = 0;

for (let index = 0; index < numeroRomano.length; index += 1) {
  switch (numeroRomano[index]) {
    case 'I':
      arrayNumero.push(1);
      break;
    case 'V':
      arrayNumero.push(5);
      break;
    case 'X':
      arrayNumero.push(10);
      break;
    case 'L':
      arrayNumero.push(50);
      break;
    case 'C':
      arrayNumero.push(100);
      break;
    case 'D':
      arrayNumero.push(500);
      break;
    case 'M':
        arrayNumero.push(1000);
        break;
  }
}

for (let index = 1; index < arrayNumero.length; index += 1) {
  if (arrayNumero[index - 1] < arrayNumero[index]) {
    numeroConversor -= arrayNumero[index - 1];
  } else {
    numeroConversor += arrayNumero[index - 1];
  }
}

numeroConversor += arrayNumero[arrayNumero.length - 1];

console.log(numeroConversor);

}

conversorRomano('CM');
conversorRomano('CXIV');
conversorRomano('MMXVIII')


/*
| I   | 1    |
| --- | ---- |
| IV  | 4    |
| V   | 5    |
| IX  | 9    |
| X   | 10   |
| XL  | 40   |
| L   | 50   |
| XC  | 90   |
| C   | 100  |
| CD  | 400  |
| D   | 500  |
| CM  | 900  |
| M   | 1000 |
*/