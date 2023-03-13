// Exemplo 1
const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];
const nomes = dados.filter((item) => (typeof item === 'string'));
const numeros = dados.filter((item) => (typeof item !== 'string'));
console.log(dados);
console.log(nomes); // [ 'Luca', 'Ana', 'Marlete' ]
console.log(numeros); // [ 91234567, 92345678, 93456789 ]

// Exemplo 2
const listaNumeros = [10, 20, 30, 40];
const maiorVinte = listaNumeros.filter((item) => item > 20);
console.log(maiorVinte); // [ 30, 40 ]

// Exemplo 3
const estudantes = [
  {
    nome: 'Ana',
    nota: 100,
  },
  {
    nome: 'Bob',
    nota: 70,
  },
  {
    nome: 'Carlos',
    nota: 80,
  },
]
// const aprovados = estudantes.filter((pessoa) => pessoa.nota >= 80);
const aprovados = estudantes.filter((pessoa) => {
  if (pessoa.nota >= 80) {
    return pessoa.nome; // não funciona, o metodo retorna o elemento inteiro
  };
});
console.log(aprovados); // [ { nome: 'Ana', nota: 100 }, { nome: 'Carlos', nota: 80 } ]