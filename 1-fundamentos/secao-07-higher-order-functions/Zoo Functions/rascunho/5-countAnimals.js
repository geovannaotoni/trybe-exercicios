const data = require('./data');

const countAnimals = (arg) => {
  // if (!arg) {
  //   return data.species.reduce(((acc, especie) => {
  //     acc[especie.name] = especie.residents.length;
  //     return acc;
  //   }), {});
  // };
  const newObj = data.species.reduce(((acc, curr) => {
    if (!arg) {
      acc[curr.name] = curr.residents.length;
    }
    if (arg && arg.specie) {
      return data.species
        .find((especie) => especie.name === arg.specie).residents.length;
    };
    if (arg && arg.sex) {
      return data.species
        .find((especie) => especie.name === arg.specie).residents
        .filter((element) => element.sex === arg.sex).length;
    }
    return acc;
  }), {});
  return newObj;
};
// Explicação para mim mesma: Utilizei a HOF reduce primeiramente, porque a função retorna um único elemento (seja um objeto ou um número). 
// Se não receber nenhum parâmetro, a função retorna um objeto cujas chaves são os nomes de cada espécie e os valores são a quantidade de animais daquela espécie (ou seja, o tamanho do array da chave residents dentro de cada objeto de espécie).
// Se receber como parâmetro a chave specie e o valor sendo uma espécie, ela procura (HOF find) na lista de espécies o objeto cuja chave name seja igual ao valor passado como parâmetro e retorna o tamanho do array da chave residents.
// Se receber como parâmetro também a chave sex e o valor sendo o sexo do animal ele vai também filtrar (HOF filter) os elementos cuja chave sex seja igual ao valor passado como parâmetro.
console.log(countAnimals());
console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));
console.log(countAnimals({ specie: 'bears', sex: 'female' }));
// substituir o acc[arg.specie] = por return se for só o número
