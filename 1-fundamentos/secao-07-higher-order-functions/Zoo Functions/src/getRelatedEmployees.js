const data = require('../data/zoo_data');

const isManager = (id) => data.employees
  .some(({ managers }) => managers
    .some((manager) => manager === id));

const getRelatedEmployees = (managerId) => {
  const verifyIsManager = isManager(managerId);
  if (verifyIsManager === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    return data.employees
      .filter(({ managers }) => managers.some((manager) => manager === managerId))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }
};

// Explicação para mim mesma:
// A função isManager verifica se o id passado é de um gerente. Para isso, ela verifica, na lista de funcionários, a chave managers (cujo valor da propriedade é um array de ids dos managers), e checa (com a HOF some) se algum dos elementos desse array é igual ao id passado como parâmetro da função.
// A função getRelatedEmployees retorna as pessoas lideradas por esse manager. Para isso ela verifica o valor da função isManager. Se este for falso, ela lança um erro com o throw. Se for verdadeiro, ele vai filtrar (com a HOF filter), dentro da lista de funcionários, aqueles que possuírem o id passado na função como elemento do array da chave managers, retornando todos esses funcionarios em um array de objetos. Por fim, com a HOF map, é retornado o nome e sobrenome somente de cada um em um array de strings.

module.exports = { isManager, getRelatedEmployees };
