const data = require('./data');

const countEntrants = (arrayEntrants) => {
  return arrayEntrants.reduce(((acc, curr) => {
    if (curr.age < 18) {
      acc.child += 1;
    } else if (curr.age < 50) {
      acc.adult += 1;
    } else {
      acc.senior = 1;
    }
    return acc;
  }), { child: 0, adult: 0, senior: 0})
};

const calculateEntry = (arrayEntrants) => {
  if (!arrayEntrants) return 0;
  const objEntrants = countEntrants(arrayEntrants); // { child: 3, adult: 2, senior: 1 }
  const peopleByAgeGroup = Object.entries(objEntrants); // [ [ 'child', 3 ], [ 'adult', 2 ], [ 'senior', 1 ] ]
  return peopleByAgeGroup.reduce(((acc, curr) => {
    acc = acc + curr[1]* data.prices[curr[0]];
    return acc;
  }), 0);
};
// .toFixed(2) fixar o numero de casas decimais

// A função countEntrants recebe um array de objetos com as informações dos visitantes. Ela retorna um objeto (por isso utilizamos a HOF reduce, pois queremos reduzir o array em um único elemento) cujas chaves são child, adult e senior, e os valores são as quantidades de pessoas que estão em cada faixa etária.
// A função calculateEntry recebe o mesmo array como parâmetro, e a partir do objeto que é o retorno da função countEntrants, ele utiliza o reduce para trazer o valor final das entradas ao multiplicar o valor de cada chave (as faixas etárias) do objeto prices com o número de pessoas de cada faixa etária constando no objEntrants 

const entrants = [
	{ name:  'Lara Carvalho', age:  5 },
	{ name:  'Frederico Moreira', age:  5 },
	{ name:  'Pedro Henrique Carvalho', age:  5 },
	{ name:  'Maria Costa', age:  18 },
	{ name:  'Núbia Souza', age:  18 },
	{ name:  'Carlos Nogueira', age:  50 },
];
console.log(countEntrants(entrants));
console.log(calculateEntry(entrants));
console.log(calculateEntry(0));
console.log(calculateEntry([]));