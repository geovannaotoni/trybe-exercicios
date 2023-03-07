// spread - passar parâmetros ao EXECUTAR uma função
const sum = (a, b) => a + b;
const array = [1, 2];
console.log(sum(...array));

// rest - agrupar valores ao DECLARAR funções
const sum2 = (...numbers) => numbers.reduce((acc, curr) => acc + curr);
console.log(sum2(1,2));