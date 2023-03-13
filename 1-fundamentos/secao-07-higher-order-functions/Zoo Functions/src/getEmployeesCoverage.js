const data = require('../data/zoo_data');

const getFullReport = () => {
  const fullReport = data.employees.map((employee) => {
    const object = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: data.species
        .filter(({ id }) => employee.responsibleFor.some((animalId) => animalId === id))
        .map(({ name }) => name),
      locations: data.species
        .filter(({ id }) => employee.responsibleFor.some((animalId) => animalId === id))
        .map(({ location }) => location),
    };
    return object;
  });
  return fullReport;
};

const getEmployeesCoverage = (args) => {
  const fullReport = getFullReport();
  if (!args) return fullReport;
  if (fullReport.some(({ id }) => id === args.id)) {
    return fullReport.find(({ id }) => id === args.id);
  }
  if (fullReport.some(({ fullName }) => fullName.includes(args.name))) {
    return fullReport.find(({ fullName }) => fullName.includes(args.name));
  }
  throw new Error('Informações inválidas');
};

// Explicação para mim mesma:
// A função getFullReport gera um array de objetos com informações de cada funcionário (em que cada objeto tem as chaves id, fullName, species e locations). Para gerar um array com a mesma quantidade de funcionários, utiliza-se a HOP map, em que, a cada funcionário, gera-se um objeto com as informações específicas. Para as chaves species e locations utiliza-se a HOF filter, para filtrar dentro do array de espécies, as espécies cujo id esteja incluso dentro do array responsibleFor (HOF some). Em seguida utiliza-se a HOF map, já que queremos somente um valor de chave específico de cada objeto, e não o objeto completo do animal.
// A função getEmployeesCoverage retorna o fullReport se não for passado nenhum parâmetro. Se for passado um id como parâmetro, com a HOF find é procurado o objeto cuja chave id seja igual. Se for passado um nome (seja o firstName ou o LastName) é procurado o objeto cuja chave fullName contem aquela string. Se nenhuma das opções anteriores, a função lança um erro com o throw.

module.exports = getEmployeesCoverage;
