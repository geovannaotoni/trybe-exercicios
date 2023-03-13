const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const fullReport = data.species.reduce(((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }), {});
  if (!animal) return fullReport;
  const report = data.species
    .find(({ name }) => name === animal.species).residents;
  if (animal.sex) {
    return report
      .filter((element) => element.sex === animal.sex).length;
  }
  return report.length;
};

// Explicação para mim mesma:
// Se não receber nenhum parâmetro, a função deve retornar um objeto (utilizei a HOF reduce primeiramente, porque ela retorna um único elemento) cujas chaves são os nomes de cada espécie e os valores são a quantidade de animais daquela espécie (ou seja, o tamanho do array da chave residents dentro de cada objeto de espécie).
// Se receber como parâmetro a chave specie e o valor sendo o nome da espécie, ela procura (HOF find) na lista de espécies o objeto cuja chave name seja igual ao valor passado como parâmetro e retorna o tamanho do array report.
// Se receber como parâmetro também a chave sex e o valor sendo o sexo do animal ele vai também filtrar (HOF filter) os elementos do array report cuja chave sex seja igual ao valor passado como parâmetro.

module.exports = countAnimals;
