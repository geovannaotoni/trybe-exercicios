// 1. Crie uma função assíncrona chamada `fetchJokes` que use o `fetch()` para buscar 5 piadas aleatórias da API [Chuck Norris Jokes](https://api.chucknorris.io/) e as imprima no console.
// const fetchJokes = async () => {
//   const response = await fetch('https://api.chucknorris.io/jokes/random');
//   const data = await response.json();
//   console.log(data.value);
// };
// fetchJokes();

// fetch("https://api.chucknorris.io/jokes/random")
//   .then(response => response.json())
//   .then(data => console.log(data.value));

// 2. Modifique a função `fetchJokes` para usar o `try-catch` e tratar erros. Se ocorrer um erro na chamada da API, imprima a mensagem de erro no console.
const fetchJokes = async () => {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    console.log(data.value);
  } catch (error) {
    console.log(error.message);
  }
};
fetchJokes();

// 3. Crie uma nova função assíncrona chamada `fetchJokesParallel` que use o `Promise.all()` para buscar 5 piadas aleatórias da API [Chuck Norris Jokes](https://api.chucknorris.io/) e as imprima no console. Certifique-se de imprimir as piadas na ordem em que foram retornadas pela API.

const fetchJokesParallel = () => {
  const arrayPromisses = [];
  for (let index = 0; index < 5; index += 1) {
    arrayPromisses.push(fetch('https://api.chucknorris.io/jokes/random').then((response) => response.json()))
  }
  Promise.all(arrayPromisses)
    .then((data) => {
      data.forEach((joke) => console.log(joke.value));
    });
};
fetchJokesParallel();

/*
async function fetchJokesParallel() {
  const urls = Array.from({ length: 5 }, () => "<https://api.chucknorris.io/jokes/random>");
  const responses = await Promise.all(urls.map(url => fetch(url)));
  const data = await Promise.all(responses.map(response => response.json()));
  data.forEach(joke => console.log(joke.value));
}
fetchJokesParallel();
*/

// 4. Crie uma nova função assíncrona chamada `fetchJokesSerial` que use um loop `for-of` e o `await` para buscar 5 piadas aleatórias da API [Chuck Norris Jokes](https://api.chucknorris.io/) e as imprima no console. Certifique-se de imprimir as piadas na ordem em que foram solicitadas.
const fetchJokesSerial = async () => {
  for (let index = 0; index < 5; index++) {
    const response = await fetch("<https://api.chucknorris.io/jokes/random>");
    const data = await response.json();
    console.log(data.value);
  }
};
fetchJokesSerial();
