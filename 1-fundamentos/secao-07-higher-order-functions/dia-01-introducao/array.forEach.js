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