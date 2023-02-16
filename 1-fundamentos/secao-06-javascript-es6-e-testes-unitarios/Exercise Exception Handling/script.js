// Requisito 1 - Lance um erro em caso de input vazio
const verifyInput = () => {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  if (value1.length === 0 || value2.length === 0) {
    throw new Error('Preencha os campos para realizar a soma');
  }
  if (Number.isNaN(Number(value1)) === true || Number.isNaN(Number(value2)) === true) {
    throw new Error('Informe dois números para realizar a soma');
  }
};

// Requisito 3
const clearInput = () => {
  const value1 = document.getElementById('value1');
  const value2 = document.getElementById('value2');
  value1.value = '';
  value2.value = '';
};

function calculateSum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const result = Number(value1) + Number(value2);

  return result;
}

function displayResult(result) {
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
}

function sum() {
  try {
    verifyInput();
    const result = calculateSum();
    displayResult(result);
  } catch (error) {
    displayResult(error.message);
  } finally {
    clearInput();
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
