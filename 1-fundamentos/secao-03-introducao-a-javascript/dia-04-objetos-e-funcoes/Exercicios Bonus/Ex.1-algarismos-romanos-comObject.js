function conversorRomano(numeroRomano) {

  const numerosRomanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

let numeroConversor = numerosRomanos[numeroRomano[numeroRomano.length - 1]];
let atual = numerosRomanos[numeroRomano[numeroRomano.length - 1]]

for (let index = 2; index <= numeroRomano.length; index += 1) {
  let anterior = numerosRomanos[numeroRomano[numeroRomano.length - index]]
  if (atual > anterior) {
    numeroConversor -= anterior;
  } else {
    numeroConversor += anterior;
  }
  atual = anterior;
}
console.log(numeroConversor)
}

conversorRomano('XIV');
conversorRomano('CM');
conversorRomano('CXIV');
conversorRomano('MMXVIII')

// for (let index = 0; index < numeroRomano.length; index += 1) {
  
// }

// for (let index = 1; index < arrayNumero.length; index += 1) {
//   if (arrayNumero[index - 1] < arrayNumero[index]) {
//     numeroConversor -= arrayNumero[index - 1];
//   } else {
//     numeroConversor += arrayNumero[index - 1];
//   }
// }

// numeroConversor += arrayNumero[arrayNumero.length - 1];

// console.log(numeroConversor);




