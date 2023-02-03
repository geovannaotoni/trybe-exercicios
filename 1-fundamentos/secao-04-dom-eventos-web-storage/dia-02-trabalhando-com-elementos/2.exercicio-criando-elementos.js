//Crie um irmão para elementoOndeVoceEsta
const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
const elementoPai = elementoOndeVoceEsta.parentElement;

const novoIrmao = document.createElement('section');
novoIrmao.id = 'irmaoDoElementoOndeVoceEsta';
elementoPai.appendChild(novoIrmao);


//Crie um filho para elementoOndeVoceEsta
const novoFilho = document.createElement('div');
novoFilho.id = 'novoFilhoDoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(novoFilho); //adiciona o elemento criado como filho do elemento

//Crie um filho para primeiroFilhoDoFilho
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
const novoFilhoDoPrimeiroFilhoDoFilho = document.createElement('p');
novoFilhoDoPrimeiroFilhoDoFilho.id = 'novoFilhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(novoFilhoDoPrimeiroFilhoDoFilho);

//A partir desse filho criado, acesse terceiroFilho
const terceiroFilho = novoFilhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;