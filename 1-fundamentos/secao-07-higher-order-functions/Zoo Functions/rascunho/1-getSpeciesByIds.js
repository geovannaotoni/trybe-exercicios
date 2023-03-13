const data = require('./data');
const getSpeciesByIds = (...ids) => {
  // if (ids.length === 0) {
  //   return [];
  // }
  return data.species.filter((especie) => ids.some((id) => especie.id === id));
};
console.log(getSpeciesByIds());
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));
// Explicação para mim mesma: A função busca pelo id da espécie e retorna o objeto completo com as informações. Utiliza-se o parametro rest como argumento da função para que possa ser possível inserir nenhum parametro, um ou mais. O rest sempre vai transformar os parâmetros em um array, permitindo uitlizar HOFs. Nesse caso, eu filtrei no array de espécies aquelas que possuirem algum id que seja correspondente ao id passado no rest.