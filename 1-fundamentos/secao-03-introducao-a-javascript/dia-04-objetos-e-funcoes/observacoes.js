const pessoa = {
  nome: 'Geovanna',
  corFavorita: 'Azul',
  cantorFavorito: 'Shawn Mendes',
}
const person = ['Geo', 'Jojo', 'Ge']
console.log(typeof (person))
console.log(typeof (pessoa))
//ambos sao objetos, porem o array é um objeto iteravel


//for of só é feito para objetos iteraveis
for (let value of person) {
  console.log(value);
}

// for (let value of pessoa) {
//   console.log(value);
// }
//nesse caso da erro porque o objeto pessoa nao é iteravel


//para dar um console com o let in, nao pode usar a notação com ponto, somente a com colchete
for (let key in pessoa) {
  // console.log(pessoa.key) //undefined
  console.log(key, pessoa[key])
}

for(let key in person){
  console.log(key, person[key]);
}