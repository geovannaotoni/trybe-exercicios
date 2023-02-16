const loginBtn = document.getElementById('login');
const inputEmailLogin = document.getElementById('email');
const inputSenha = document.getElementById('senha');

const verifyLogin = () => {
  if (inputEmailLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!')
  } else {
    alert('Email ou senha inválidos.')
  }
}

const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

const enableSubmit = () => {
  submitBtn.disabled = !agreement.checked;
}

const counter = document.getElementById('counter');
const textarea = document.getElementById('textarea');
// https://pt.stackoverflow.com/questions/25753/como-fazer-um-contador-de-caracteres-de-uma-textarea
const countLetters = () => {
  const maxLength = 500;
  const textLength = textarea.value.length;
  counter.innerText = maxLength - textLength;
};

const main = document.getElementsByTagName('main')[0];
const formData = document.createElement('form');

/*
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const selectHouse = document.getElementById('house');
// Lógica para o radio: https://pt.stackoverflow.com/questions/82968/pegar-valor-de-um-button-radio
const radioFamily = document.querySelector('input[name=family]:checked');
const getSubjects = () => {
  // Lógica para o checkbox: https://pt.stackoverflow.com/questions/83463/pegar-valores-checkbox-com-javascript
  const subject = document.querySelectorAll('input[name=subject]:checked');
  const subjectsArray = [];
  for (let index in subject) {
    subjectsArray.push(subject[index].value);
  }
  return subjectsArray.join(', ');
}
const radioRate = document.querySelector('input[name=rate]:checked');
*/

const getSubjects = () => {
  // Lógica para o checkbox: https://pt.stackoverflow.com/questions/83463/pegar-valores-checkbox-com-javascript
  const subject = document.querySelectorAll('input[name=subject]:checked');
  const subjectsArray = [];
  for (let index in subject) {
    if(subject[index].value !== undefined) {
      subjectsArray.push(subject[index].value);
    }
  }
  return subjectsArray.join(', ');
}
/*
const showData = () => {
  // Lógica para os inputs radio (para as keys Família e Avaliação): https://pt.stackoverflow.com/questions/82968/pegar-valor-de-um-button-radio
  const dataObj = {
    Nome: `${document.getElementById('input-name').value} ${document.getElementById('input-lastname').value}`,
    Email: document.getElementById('input-email').value,
    Casa: document.getElementById('house').value,
    Família: document.querySelector('input[name=family]:checked').value, 
    Matérias: getSubjects(),
    Avaliação: document.querySelector('input[name=rate]:checked').value,
    Observações: textarea.value
  }
  main.innerHTML = '';
  main.appendChild(formData);

  for (key in dataObj) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `${key}: ${dataObj[key]}`;
    formData.appendChild(paragraph);
  }
};
*/
// Lógica para os inputs radio (para as keys Família e Avaliação): https://pt.stackoverflow.com/questions/82968/pegar-valor-de-um-button-radio
const showData = () => {
  const dataObj = {
    Nome: `${document.getElementById('input-name').value} ${document.getElementById('input-lastname').value}`,
    Email: document.getElementById('input-email').value,
    Casa: document.getElementById('house').value,
    Família: document.querySelector('input[name=family]:checked').value,
    Matérias: getSubjects(),
    Avaliação: document.querySelector('input[name=rate]:checked').value,
    Observações: textarea.value,
  };
  main.innerHTML = '';
  main.appendChild(formData);
  const keys = Object.keys(dataObj);
  for (let index = 0; index < keys.length; index += 1) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `${keys[index]}: ${dataObj[keys[index]]}`;
    formData.appendChild(paragraph);
  }
};

window.onload = () => {
  loginBtn.addEventListener('click', verifyLogin);
  agreement.addEventListener('change', enableSubmit);
  textarea.addEventListener('input', countLetters);
  submitBtn.addEventListener('click', showData);
}