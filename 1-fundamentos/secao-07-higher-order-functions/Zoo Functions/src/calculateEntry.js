const data = require('../data/zoo_data');

const countEntrants = (entrants) => entrants.reduce(((acc, curr) => {
  if (curr.age < 18) {
    acc.child += 1;
  } else if (curr.age < 50) {
    acc.adult += 1;
  } else {
    acc.senior = 1;
  }
  return acc;
}), { child: 0, adult: 0, senior: 0 });

const calculateEntry = (entrants) => {
  if (!entrants) return 0;
  const objEntrants = countEntrants(entrants); // { child: x, adult: y, senior: z }
  const peopleByAgeGroup = Object.entries(objEntrants); // [ [ 'child', x ], [ 'adult', y ], [ 'senior', z ] ]
  return peopleByAgeGroup.reduce(((acc, curr) => acc + curr[1] * data.prices[curr[0]]), 0);
};

// Explicação para mim mesma: A função countEntrants recebe um array de objetos com as informações dos visitantes. Ela retorna um objeto (por isso utiliza-se a HOF reduce, pois queremos reduzir o array em um único elemento) cujas chaves são child, adult e senior, e os valores são as quantidades de pessoas que estão em cada faixa etária.
// A função calculateEntry recebe o mesmo array como parâmetro, e a partir do objeto que é o retorno da função countEntrants, ele utiliza o reduce para trazer o valor final das entradas ao multiplicar o valor de cada chave (as faixas etárias) do objeto prices com o número de pessoas de cada faixa etária constando no objEntrants.

module.exports = { calculateEntry, countEntrants };
