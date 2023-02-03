// Escreva seu código aqui

//1. Compreenda quais dados são necessários ao criar a carta

//3.1. Guarde o elemento de classe cartoons em uma variável
const cartoonSelection = document.getElementsByClassName('cartoons')[0];

//2. Crie uma função para criar cada carta
const criaCarta = (id, src, name) => {
  const image = document.createElement('img');
  image.id = id;
  image.src = src; 
  image.alt = name;

  //outra forma:
  //image.setAttribute('src', src);
  //image.setAttribute('alt', name);

  image.classList.add('card');
  
  //3. Altere a função anterior para além de criar o elemento, adicioná-lo na página
  //3.2 Ajuste a função anterior para adicionar cada carta ao elemento de classe cartoons
  cartoonSelection.appendChild(image);
};

//4. Crie uma função para adicionar todas as cartas na página
//4.1. Utilize a variável cartoons que foi atribuída no arquivo cartoons.js para obter as informações de cada carta contida no array
//4.2. Use um laço de repetição para a cada iteração executar a função criada no requisito 2


const addCartoonToPage = (array) => {
  for (let cartoon of array) {
    criaCarta(cartoon.id, cartoon.imageUrl, cartoon.name);
  }
};

//a variável cartoons é um array de objetos, contendo cada carta
//puxa o objeto cartoons da pasta data/cartoons.js
addCartoonToPage(cartoons);

