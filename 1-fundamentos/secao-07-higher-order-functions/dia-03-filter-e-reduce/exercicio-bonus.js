// 1- Dada matriz, transforme em array
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => {
  return arrays.reduce(((acc, curr) => {
    acc = acc.concat(curr);
    return acc;
  }), []);
}
console.log(flatten());

// Bônus
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
      birthYear: 1920,
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

// 2 - string com os nomes de todas as pessoas autoras
// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
const reduceNames = () => {
  return books.reduce(((acc, curr, index) => {
    if (index !== books.length - 1) {
      acc += `${curr.author.name}, `;
    } else {
      acc += `${curr.author.name}.`;
    }
    return acc;
  }), '');
}
console.log(reduceNames());
const reduceNames2 = () => {
  const arrayNames = books.reduce(((acc, curr) => {
   acc.push(curr.author.name);
   return acc;
  }), []);
  return `${arrayNames.join(', ')}.`;
}
console.log(reduceNames2());

// 3 - média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados
// const expectedResult = 43;
const averageAge = () => {
  return books.reduce(((acc, curr) => acc += curr.releaseYear - curr.author.birthYear), 0)/books.length;
}
console.log(averageAge());

// 4 - livro com o maior nome
// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };
const longestNamedBook = () => {
  return books.reduce((acc, curr) => acc.name.length > curr.name.length ? acc : curr);
}
console.log(longestNamedBook())


// extra
const oldBooks = (year) => books
  .filter((book) => (year - book.releaseYear > 60))
  .map((book) => book.name);
console.log(oldBooks(2022));

//extra2
// const authorWith3DotsOnName = () => {
//   books.find((book) => {
//     const nameAuthor = book.author.name;
//     return nameAuthor.match(/./).length === 3;
//   });
// };

const authorWith3DotsOnName = () => books.find((book) => book.author.name.split('.').length > 3).author.name;
console.log(authorWith3DotsOnName());

const authorWith3DotsOnName2 = () => books.find((book) => book.author.name.split('').filter((letter) => letter === '.').length === 3).author.name;
console.log(authorWith3DotsOnName2());

//extra3
const oldBooksOrdered = (year) => {
  if (year > 2020) {
    return books
      .filter((book) => (year - book.releaseYear > 60 + (year - 2020)))
      .sort((a, b) => a.releaseYear - b.releaseYear);
  }
  return books
    .filter((book) => (2020 - book.releaseYear >= 60))
    .sort((a, b) => a.releaseYear - b.releaseYear);
};
console.log(oldBooksOrdered(2022))