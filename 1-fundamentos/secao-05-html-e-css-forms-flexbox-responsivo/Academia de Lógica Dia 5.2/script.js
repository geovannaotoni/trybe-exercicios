const checkin = document.querySelector('.inputCheckin');
const checkout = document.querySelector('.inputCheckout');
const bedroom = document.querySelectorAll('.bedroom');
const select = document.querySelector('.nPessoas');
const textArea = document.querySelector('.obs');
const btnSubmit = document.querySelector('#submit-btn');
const btnClear = document.querySelector('#clear-btn');
const ol = document.querySelector('ol');

function getQuarto() {
  for (let i = 0; i < bedroom.length; i++) {
    if (bedroom[i].checked) {
      return bedroom[i].value;
    }
  }
}

function getPessoas() {
  return select.options[select.selectedIndex].value;
}

function getData(value) {
  const valueDate = value + 'T03:00:00.000Z';
  data = new Date(valueDate);
  dataFormatada = data.toLocaleDateString('pt-BR');
  return dataFormatada;
}

// Salvando a lista com LocalStorage
const saveList = () => {
  localStorage.setItem('lista', ol.innerHTML);
};

// Adicionando os valores dos inputs na lista
btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const li = document.createElement('li');
  li.innerText = `Reserva para o dia ${getData(checkin.value)} até o dia ${getData(checkout.value)} Quarto ${getQuarto()} - Para ${getPessoas()} Pessoas - Obs: ${textArea.value}`;
  ol.appendChild(li);
  saveList();
});

// Limpando a lista
btnClear.addEventListener('click', () => {
  ol.innerHTML = '';
  saveList();
});

// Recuperando a lista
const recoverList = () => {
  if (localStorage.getItem('lista')) {
    ol.innerHTML = localStorage.getItem('lista');
  }
};

window.onload = () => {
  recoverList();
}
