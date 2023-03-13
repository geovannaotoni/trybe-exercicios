const data = require('../data/zoo_data');

const getFullReport = () => data.species.reduce(((acc, curr) => {
  if (!acc[curr.location]) {
    acc[curr.location] = [];
  }
  acc[curr.location].push(curr.name);
  return acc;
}), {});

const getFullReportWithNames = (sorted, sex) => data.species.reduce((acc, curr) => {
  if (!acc[curr.location]) {
    acc[curr.location] = [];
  }
  let listAnimals = curr.residents;
  if (sex) {
    listAnimals = listAnimals.filter((animal) => animal.sex === sex);
  }
  listAnimals = listAnimals.map(({ name }) => name);
  if (sorted === true) {
    listAnimals.sort();
  }
  acc[curr.location].push({ [curr.name]: listAnimals });
  return acc;
}, {});

const getAnimalMap = (options) => {
  if (!options) return getFullReport();
  if (!options.includeNames) return getFullReport();
  return getFullReportWithNames(options.sorted, options.sex);
};
// Explicação para mim mesma:
// Criei duas funções, a getFullReport e a getFullReportWithNames(sorted, sex).
// A getFullReport gera um objeto cujas chaves são as localizações (NE, NW, SE e SW) e os valores são um array com os nomes das espécies que possuem essa localização (para isso, utilizou-se a HOF reduce, já que ela gera um único elemento, um objeto). Dentro de cada chave, o valor é um array que recebe cada nome do animal através do push.
// A getFullReportWithNames recebe dois parâmetros, o booleano de sorted e o sex (que pode ser female ou male). A partir disso, também utilizei a HOF reduce para gerar o objeto. Cada chave do objeto vai receber um array de objetos (objetos estes cuja chave é o nome da espécie (curr.name) e o valor é um array com os nomes de cada animal (listAnimals)). Para o listAnimals utilizei algumas HOFs de acordo com a condição. Se for passado o sex, filtrei com a HOF filter. Em seguida, utilizei a HOF map, pois só é necessário o name e não o objeto completo. Se for passado sorted como true, utilizei a HOF sort para ordenar cada nome em ordem alfabética. Por fim, com push, passei o nome do animal (curr.name) e a o array listAnimals para cada chave de localização.

module.exports = getAnimalMap;
