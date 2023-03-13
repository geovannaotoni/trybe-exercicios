const data = require('./data');
const getEmployeeByName = (name) => {
  if (!name) {
    return {};
  }
  return data.employees.find(({firstName, lastName}) => firstName === name || lastName === name);
};
console.log(getEmployeeByName());
console.log(getEmployeeByName('Emery'));

// Explicação para mim mesma: A função recebe um nome (seja o primeiro nome ou o sobrenome) do funcionário e verifica com a HOF find se entre os funcionários existe alguém com esse nome, se existir ele retorna o objeto com todas as informações dele.