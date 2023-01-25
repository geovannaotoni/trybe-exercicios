const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

let frutas = {};

for (let index = 0; index < basket.length; index += 1) {
  let fruta = basket[index];

  if (!frutas[fruta]) {
    frutas[fruta] = 1;
  } else {
    frutas[fruta] += 1;
  }

}
//console.log(frutas) 
//{Melancia: 16, Abacate: 15, Uva: 15, Laranja: 15, Jaca: 15, Pera: 11, Banana: 13}

let arrayResultado = [];
for (let key in frutas) {
  if(frutas[key] > 1) {
    arrayResultado.push(`${frutas[key]} ${key}s`);
  } else {
    arrayResultado.push(`${frutas[key]} ${key}`);
  }
}
//console.log(arrayResultado); 
//['16 Melancias', '15 Abacates',  '15 Uvas', '15 Laranjas', '15 Jacas', '11 Peras', '13 Bananas']

let mensagem = `Sua cesta possui: ${arrayResultado.join(', ')}.`
console.log(mensagem)
//Sua cesta possui: 16 Melancias, 15 Abacates, 15 Uvas, 15 Laranjas, 15 Jacas, 11 Peras, 13 Bananas.
