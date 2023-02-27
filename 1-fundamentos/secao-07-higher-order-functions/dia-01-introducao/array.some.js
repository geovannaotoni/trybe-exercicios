// Exemplo 1
const pessoas = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' },
];

const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');
console.log(verificaCargo); // true
const verificaCargo2 = pessoas.some((pessoa) => pessoa.cargo === 'Product Owner');
console.log(verificaCargo2); // false

// Exemplo 2
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false

// Para fixar
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  // Gabarito: return arr.some((currentName) => currentName === name); 
  const verify = arr.some((element) => element === name);
  return verify;
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));
