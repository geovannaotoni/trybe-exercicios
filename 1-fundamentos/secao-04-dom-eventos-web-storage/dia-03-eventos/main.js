const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1- Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2- Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

const addClass = (event) => {
  // cria a variavel do elemento que contém a classe tech
  const techElement = document.querySelector('.tech');
  // remove a classe tech desse elemento
  techElement.classList.remove('tech');
  // puxa o elemento que ocorreu o click e adiciona nele a classe tech
  event.target.classList.add('tech');
  // apaga qualquer texto q tiver escrito dentro do input
  input.value = '';
};
firstLi.addEventListener('click', addClass);
secondLi.addEventListener('click', addClass);
thirdLi.addEventListener('click', addClass);

// 3- Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';

const alteraTexto = (event) => {
  // atribui o elemento com a classe “tech” a uma variável
  const techElement = document.querySelector('.tech');
  // altera o texto da variável com classe tech para o valor que estiver dentro do elemento que gerou o evento (o input)
  techElement.innerHTML = event.target.value; //input.value;
};
input.addEventListener('input', alteraTexto);

/* Gabarito: Com Função Anônima
input.addEventListener('input', (event) => {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});
*/

// 4- Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página; Que tal redirecionar para seu portfólio?

const redirecionaPag = () => {
  // o replace navega para uma nova URL sem adicionar um novo registro ao histórico (exclui a página atual do histórico da sessão)
  // window.location.replace('https://geovannaotoni.github.io/');

  // o assign é usado apenas para ir para um novo local, permite retornar à página anterior
  window.location.assign('https://geovannaotoni.github.io/');  

};
myWebpage.addEventListener('dblclick',redirecionaPag);

/*Gabarito com função anonima
myWebpage.addEventListener('dblclick', () => {
  window.location.replace('https://blog.betrybe.com/');
});
*/

// 5- Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
myWebpage.addEventListener('mouseover', (event) => {
  event.target.style.color = 'blue';
});

myWebpage.addEventListener('mouseout', (event) => {
  event.target.style.color = 'unset'; //unset: “resetar” a cor do elemento
});

// Segue abaixo um exemplo do uso de event.target:
const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target, que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio navegador fará esse trabalho por você, não é legal? Desse jeito, o event.target na nossa função retornará o objeto 'firstLi'.