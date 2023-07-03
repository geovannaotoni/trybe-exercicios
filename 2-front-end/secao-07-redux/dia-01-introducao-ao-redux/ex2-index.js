const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

// 1 - Crie um reducer com os estados iniciais.
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "theme":
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
    case "status":
      return { ...state, status: state.status === 'offline' ? 'online' : 'offline' };
    default:
      return state;
  }
};

// 2 - Crie uma store com o reducer criado.
const store = Redux.createStore(reducer);

// 3 - Adicione um case dentro do switch do reducer para alterar os estados theme e status. O case do estado theme deve alterná-lo entre ‘light’ e ‘dark’. O case do estado status deve alterná-lo entre ‘online’ e ‘offline’.

// 4 - Faça o dispatch de cada uma das actions ao clicar nos respectivos botões.
const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => store.dispatch({ type: "theme" }));

statusButton.addEventListener('click', () => store.dispatch({ type: "status" }));

// 5 - Adicione um store.subscribe() para atualizar as seguintes informações na página:
store.subscribe(() => {
  const { status, theme } = store.getState();

  const spanStatus = document.getElementById("status");
  spanStatus.innerHTML = status;
  statusButton.innerHTML = `Ficar ${status === 'Offline' ? 'Online' : 'Offline'}`;

  const body = document.querySelector("body");
  if (theme === 'light') {
    body.style.backgroundColor = 'white';
    body.style.color = "black";
  } else {
    body.style.backgroundColor = "#333";
    body.style.color = "white";
  }
  themeButton.innerHTML = `${theme === 'dark' ? 'light' : 'dark'} Mode`;
});