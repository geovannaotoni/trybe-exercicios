const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

pessoasAprovadas.forEach((nome, index) => {
  // pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase(); // acessa cada elemento do array e atualiza para letra maiúscula
  pessoasAprovadas[index] = nome.toUpperCase();
});

console.log(pessoasAprovadas);

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((element) => {
  console.log(element * 2); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
});

// outro modo
const multiply = (element) => {
  console.log(element * 2);
}
numbers.forEach(multiply);

// Exercicio para Fixar
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui
emailListInData.forEach((email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`)
});


// Exemplo da Aula
const numeros = [1,2,3,4,5,6,7,8,9]
const multPorTres = (array) => {
  const newArray = []
  array.forEach((element) => {
    /*return*/ newArray.push(element * 3); // return não é necessário aqui, porque o forEach só executa o codigo
  });
  return newArray;
}
console.log(multPorTres(numeros)) // [3,  6,  9, 12, 15, 18, 21, 24, 27]

// Aqui no primeiro dá undefined porque a função forEach não retorna nada para o console.log, porém o newArray dois já apresenta o resultado correto porque a função forEach executou certinho, só não retornou nada para o console.log
const newArray2 = [];
console.log(numeros.forEach((element) => {
  newArray2.push(element * 3)
})) // undefined
console.log(newArray2); // [3,  6,  9, 12, 15, 18, 21, 24, 27]