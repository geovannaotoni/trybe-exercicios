//Acesse o elemento elementoOndeVoceEsta
const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma cor
const sectionPai = elementoOndeVoceEsta.parentElement;
sectionPai.style.color = 'blue';

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele
const primeiroFilhoDoFilho = document.querySelector('#elementoOndeVoceEsta').firstElementChild;
primeiroFilhoDoFilho.innerHTML = 'Texto do primeiro filho do filho';

//Acesse o primeiroFilho a partir de pai
let primeiroFilho = document.querySelector('#pai').firstElementChild;

//Acesse o primeiroFilho a partir de elementoOndeVoceEsta
primeiroFilho = document.querySelector('#elementoOndeVoceEsta').previousElementSibling;

//Acesse o texto Atenção! a partir de elementoOndeVoceEsta
const textAtencao = document.querySelector('#elementoOndeVoceEsta').nextSibling;

//Acesse o terceiroFilho a partir de elementoOndeVoceEsta
let terceiroFilho = document.querySelector('#elementoOndeVoceEsta').nextElementSibling;

//Acesse o terceiroFilho a partir de pai
terceiroFilho = document.querySelector('#pai').lastElementChild.previousElementSibling;


