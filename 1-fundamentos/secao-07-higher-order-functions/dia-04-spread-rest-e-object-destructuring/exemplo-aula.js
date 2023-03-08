//Noel, como eu faria pra juntar N números de arrays, que está dentro de um array principal, usando alguma HOFS juntamente com o operador spreed? 🫠

const arrayzao = [
  [1, 2, 3, 4],
  ['Banana', 'Maçã', 'Carambolas'],
  [
    'Ganhe 18 mil reais com programação em 3 semanas',
    'Acertando de primeira',
    'Entendendo o usuário'
  ]
];

let tudoJunto = [];
arrayzao.forEach(element => tudoJunto = [ ...tudoJunto, ...element ]);

console.log(tudoJunto);