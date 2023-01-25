// Método tradicional
// function objetoPessoa (nome, idade) {
//   return {
//     nome: nome,
//     idade: idade,
//   }
// }


//Arrow Funcion


// const objetoPessoa = (nome, idade) => (
//   {nome: nome, 
//   idade: idade,}
//   );

const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});
console.log(objetoPessoa('Joaquim', 25));