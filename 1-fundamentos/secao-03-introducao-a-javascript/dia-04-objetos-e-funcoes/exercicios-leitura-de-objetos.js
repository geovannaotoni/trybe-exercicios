let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

//ex 1
console.log('O livro favorito da ' + leitor['nome'] + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo) + '".';

//console.log(leitor.livrosFavoritos[0].titulo)
//console.log(leitor['livrosFavoritos'][0]['titulo'])

//ex2
leitor.livrosFavoritos[1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
//ou leitor.livrosFavoritos.push();

//console.log(leitor)

//ex3
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');

//console.log(leitor.livrosFavoritos.length)
//console.log(leitor['livrosFavoritos'].length)