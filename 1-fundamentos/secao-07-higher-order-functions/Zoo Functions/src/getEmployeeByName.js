const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  return data.employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
};

// Explicação para mim mesma: A função recebe um nome (seja o primeiro nome ou o sobrenome) do funcionário e verifica com a HOF find se, entre os funcionários, existe alguém com esse nome, se existir ele retorna o objeto com todas as informações dele.

module.exports = getEmployeeByName;
