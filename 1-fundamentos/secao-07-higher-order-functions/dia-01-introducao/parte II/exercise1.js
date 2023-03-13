const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1921,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


// A) Nome da primeira pessoa autora nascida em 1947
// const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  const findBook = books.find((book) => { 
    return book['author']['birthYear'] === 1947; 
  });
  return findBook['author']['name'];
}
// console.log(authorBornIn1947());

// B) livro com menor nome
// const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook = books[0]['name'];
  books.forEach((book) => {
    if (book['name'].length < nameBook.length) {
      nameBook = book['name'];
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
// console.log(smallerName());

// C) primeiro livro cujo nome possua 26 caracteres
// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

// Solução completa
// const getNamedBook = () => {
//   const book = books.find((book) => book['name'].length === 26);
//   return book;
// }

//Solução curta
const getNamedBook = () => books.find((book) => book['name'].length === 26);
// console.log(getNamedBook());

// D) função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário
// const expectedResult = false;
function everyoneWasBornOnSecXX() {
  return books.every((book) => {
    book['author']['birthYear'] > 1900 && book['author']['birthYear'] < 2001
  });
  /*
  return books.every((book) => book['author']['birthYear'] > 1900 && book['author']['birthYear'] < 2001);
  */
}
// console.log(everyoneWasBornOnSecXX());

// E) função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário
// const expectedResult = true;
const someBookWasReleaseOnThe80s = () => {
  return books.some((book) => book['releaseYear'] > 1979 && book['releaseYear'] < 1990);
};
// console.log(someBookWasReleaseOnThe80s());

// F) função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário
// const expectedResult = false;
const authorUnique = () => {
  // books.forEach((bookOne) => {
  //   books.forEach((bookTwo) => {
  //     if (bookOne['author']['birthYear'] === bookTwo['author']['birthYear']) {
  //       return true;
  //     }
  //   })
  // });
  // return false;

  return books.every((bookOne) =>
    books.some((bookTwo) => 
      !((bookOne['author']['birthYear'] === bookTwo['author']['birthYear']) && (bookOne['author']['name'] !== bookTwo['author']['name']))
    )
  )
}
console.log(authorUnique());


const authorUniqueGabarito = () => {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}
console.log(authorUniqueGabarito());