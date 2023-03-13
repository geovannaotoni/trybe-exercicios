const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => data.species
  .filter((especie) => ids.some((id) => especie.id === id));
// Explicação para mim mesma: A função busca pelo id da espécie e retorna o objeto completo com as informações. Utiliza-se o parametro rest como argumento da função para que possa ser possível inserir nenhum parametro, um ou mais. O rest sempre vai transformar os parâmetros em um array, permitindo uitlizar HOFs. Nesse caso, eu filtrei no array de espécies aquelas que possuirem algum id que seja correspondente ao id passado no rest.

module.exports = getSpeciesByIds;
