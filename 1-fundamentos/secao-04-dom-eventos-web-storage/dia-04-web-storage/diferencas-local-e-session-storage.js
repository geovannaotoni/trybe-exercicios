const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');


const insertPhraseInDOM = () => {
  const phrasesList = JSON.parse(localStorage.getItem('phrases')); //formato de array
  const listLength = phrasesList.length - 1; // pegar o index da ultima frase (index começa no 0)
  const phraseText = phrasesList[listLength]; //pega a ultima frase
  const phrase = document.createElement('li');
  phrase.innerText = phraseText; //insere o texto da ultima frase no elemento li
  list.appendChild(phrase); //insere o elemento li na lista (tag ul)
}

const addPhraseToLocalStorage = () => {
  const oldList = JSON.parse(localStorage.getItem('phrases')); //formato de array
  const phraseText = input.value; //pega o valor do input
  oldList.push(phraseText); //insere no array
  localStorage.setItem('phrases', JSON.stringify(oldList)); //salva a entrada com a chave phrases e valor o array (no formato de string)
  insertPhraseInDOM();
}

// somente para o local storage, porque ele precisa recuperar os dados já salvos quando fechar e abrir o navegador novamente
const initialRendering = () => {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([])); //se não existir a chave phrases, criar ela com o valor de um array vazio
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('phrases')); //pega a lista de frases
    const listLength = phrasesList.length - 1; //pega o index do ultimo elemento do array das frases
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li'); //cria a tag li
      listElement.innerText = phrasesList[index]; //insere na tag o valor da frase
      list.appendChild(listElement); //insere a tag como filha da tag ul
    }
  }
}

button.addEventListener('click', addPhraseToLocalStorage); //quando clicar no botão rodar a função

window.onload = () => initialRendering(); //quando a pagina for carregada, rodar a função (somente para o local storage)


/*
//Mesmo script só que no sessionStorage

const insertPhraseInDOM = () => {
  const phrasesList = JSON.parse(sessionStorage.getItem('phrases'));
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
}

const addPhraseToSessionStorage = () => {
  if (sessionStorage.getItem('phrases') === null) {
    sessionStorage.setItem('phrases', JSON.stringify([]));
  }
  const oldList = JSON.parse(sessionStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  sessionStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
}

button.addEventListener('click', addPhraseToSessionStorage);
*/
