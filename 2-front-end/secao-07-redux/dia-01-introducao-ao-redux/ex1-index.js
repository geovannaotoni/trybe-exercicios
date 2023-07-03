// import { composeWithDevTools } from './node_modules/@redux-devtools/extension';
// import { legacy_createStore as createStore } from './node_modules/redux';

// 0- estado inicial
const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

// 2- criando o reducer
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "NEXT_COLOR":
      return { ...state, index: state.index === state.colors.length - 1 ? 0 : state.index + 1 };
    case "PREVIOUS_COLOR":
      return { ...state, index: state.index === 0 ? state.colors.length - 1 : state.index - 1 };
    case "RANDOM_COLOR":
      return { colors: [...state.colors, criarCor()], index: state.colors.length }
    default: 
      return state;
  }
};

// 1- criando o store
const store = Redux.createStore(reducer);

// 3- eventListeners que escutam os cliques de cada botão, o Previous color e o Next color, e realizam um dispatch com as respectivas actions
const prevBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
const actionNext = { type: 'NEXT_COLOR' };
const actionPrevious = { type: 'PREVIOUS_COLOR' };
nextBtn.addEventListener("click", () => store.dispatch(actionNext));
prevBtn.addEventListener("click", () => store.dispatch(actionPrevious));

// 4- Faça o subscribe da store, alterando o innerHTML da tag com id value para a cor atual e o style do elemento com id container
store.subscribe(() => {
  const globalState = store.getState();
  const { colors, index } = globalState;
  const p = document.querySelector("#value");
  p.innerHTML = colors[index];
  const container = document.querySelector("#container");
  container.style.backgroundColor = colors[index];
})

// função que gera cores aleatórias
function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

// 5- Crie um botão com o texto Random color, um eventListener e uma action no reducer, adicionando uma cor aleatória ao array colors guardado em nosso estado inicial. Faça também com que essa cor seja mostrada ao ser criada, alterando o estado index para a posição dela.

// Criando o botão e adicionando no html
const randomColorBtn = document.createElement("button");
randomColorBtn.innerHTML = "Random color";
const container = document.querySelector("#container");
container.appendChild(randomColorBtn);

// criando o evento do botão
const actionRandom = { type: "RANDOM_COLOR"};
randomColorBtn.addEventListener("click", () => store.dispatch(actionRandom));