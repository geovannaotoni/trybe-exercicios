let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];


for (let index = 1; index < array.length; index += 1) {
  if (maiorPalavra.length < (array[index]).length) {
    maiorPalavra = array[index];
  }
  if (menorPalavra.length > (array[index]).length) {
    menorPalavra = array[index];
  }
}

console.log(maiorPalavra);
console.log(menorPalavra);
