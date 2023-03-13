const data = require('./data');

const isManager = (id) => data.employees
  .some(({managers}) => managers
  .some((manager) => manager === id));

const getRelatedEmployees = (id) => {
  const verifyIsManager = isManager(id);
  if (verifyIsManager === false) {
    throw  new  Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    return data.employees
      .filter(({managers}) => managers.some((manager) => manager === id))
      .map(({ firstName, lastName}) => `${firstName} ${lastName}`);
  }
};

// Explicação para mim mesma: A função isManager verifica se o id passado é de um gerente. Para isso, ela verifica na lista de funcionários a chave managers (cujo valor da propriedade é um array de ids dos managers), se algum dos elementos desse array é igual ao id passado como parâmetro da função (com a HOF some).
// A função getRelatedEmployees retorna as pessoas lideradas por esse manager. Para isso ela verifica o valor da função isManager. Se este for falso, ela lança um erro com o throw. Se for verdadeiro, ele vai filtrar dentro da lista de funcionários aqueles que possuírem o id passado na função como elemento do array da chave managers, retornando todos esses funcionarios em um array de objetos. Por fim, com a HOF map, é retornado um array de strings com o nome e sobrenome somente.

console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1')); // Nigel deve ser false
console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83')); // burl deve ser true
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992')); //stephanie deve ser true
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992')) // [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ]
