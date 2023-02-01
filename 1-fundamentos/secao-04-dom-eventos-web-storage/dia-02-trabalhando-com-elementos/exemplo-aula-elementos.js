// Primeiro, seleciona o local onde vai inserir
const firstDiv = document.querySelector('#first');

// Cria uma nova div
// Define as propriedades da div nova
// Adiciona a div nova à div original

const createDiv = (classes) => {
  const novaDiv = document.createElement('div');
  novaDiv.className = classes;
  return novaDiv;
};

const elementos = [
  'circle red small',
  'yellow circle small',
  'green square medium',
  'square big red'
];

for (let elemento of elementos) {
  const novaDiv = createDiv(elemento);
  firstDiv.appendChild(novaDiv);
}