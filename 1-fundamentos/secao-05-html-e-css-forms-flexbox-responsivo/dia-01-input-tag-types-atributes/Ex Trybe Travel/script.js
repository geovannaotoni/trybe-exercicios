const clearBtn = document.getElementById('clear-btn');
const submitBtn = document.getElementById('submit-btn');

clearBtn.addEventListener('click', () => {
  // window.location.reload(true);
  clearBtn.type = 'reset';
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
});

// Req 5 - habilitar botão se um checkbox for marcado
// Inspirado em: https://pt.stackoverflow.com/questions/307752/habilitar-desabilitar-um-bot%C3%A3o-se-pelo-menos-um-checkbox-for-marcado e https://www.guj.com.br/t/habilitar-campo-quando-checkbox-e-selecionado-resolvido/198756

const agreement = document.getElementById('agreement');
agreement.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
});

/*
Gabarito
function enableSubmit() {
  const submitBtn = document.querySelector('#submit-btn');
  const agreement = document.querySelector('#agreement');
  submitBtn.disabled = !agreement.checked;
}

window.onload = function() {
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clearFields);

  const submitBtn = document.querySelector('#submit-btn');
  submitBtn.addEventListener('click', handleSubmit);

  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', enableSubmit);
};
*/