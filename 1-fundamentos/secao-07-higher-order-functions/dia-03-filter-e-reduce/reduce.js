// Exemplo 0 
const numerosLista = [1, 32, 44, 2, 3];

const teste = numerosLista.reduce((acc, curr) => {
  console.log(`acumulador - acc:`, acc);
  console.log(`valorAtual - curr:`, curr);
});

// Exemplo 1
const valorItens = [1, 32, 44, 2, 3];

const total1 = valorItens.reduce((acc, curr) => {
  console.log(`acc:`, acc);
  console.log(`curr:`, curr);
  console.log('a soma atual é', acc + curr);

  return acc + curr;
}, 0);
console.log(total1);

const total2 = valorItens.reduce((acc, curr) => {
  console.log(`valor atual é ${curr}`);
  // Antes da primeira iteração o valor de início do `acc` é o valor no index 0 do array, e o valor de início de `curr` é o valor no index 1 do array.
  // Iteração 1: valor do acc é 1 e o de curr é 32;
  // Após a primeira iteração, o valor de `acc` muda e passa a acumular agora o resultado do retorno da callback (acc + curr).
  // Iteração 2: valor do acc é 33 e o de curr é 44;
  // Acontece então uma segunda iteração, e `curr` agora assume o valor do index na sequência do array, no caso o valor do segundo index e `acc` segue armazenando os retornos.
  // Iteração 3: valor do acc é 77 e o de curr é 2;
  // Iteração 4: valor do acc é 79 e o de curr é 3;
  // Valor final de `acc` é 82 e `curr` para no 3.
  console.log(`valor acumulado é ${acc}`);
  return acc + curr; // Ao fim das iterações podemos ver que o `acc` armazenou o resultado total do retorno da função.
});
console.log(total2);

// Exemplo 2
const numbers = [1, 32, 44, 2, 3];

const totalSum = numbers.reduce((acc, curr) => {
  console.log(`valor do acc é ${acc} e o de curr é ${curr}`);
   // Iteração 1: valor do acc é 30 e o de curr é 1
   // Iteração 2:valor do acc é 31 e o de curr é 32
   // Iteração 3: valor do acc é 63 e o de curr é 44
   // Iteração 4: valor do acc é 107 e o de curr é 2
   // Iteração 5: valor do acc é 109 e o de curr é 3
   // Valor final de `acc`é 112 e `curr` para no 3


  return acc + curr;
}, 30); // O `valorInicial` é 30, ou seja, `acc` antes de executar a primeira iteração já está armazenando esse valor.

console.log(`valor final do acc é ${totalSum}`);
// por fim, esse `console.log` imprime o retorno da nossa função, que é o valor final de `acc` após cada uma das 5 iterações, tendo iniciado com valor 30.

// outro modo:
const sumNumbers =  (acc, curr) => acc + curr;
const totalSum2 = numbers.reduce(sumNumbers, 30);
console.log(totalSum2); //112

// Exemplo 3
const numbers2 = [50, 85, -30, 3, 15];
// função que busca o maior valor do array numbers utilizando apenas o reduce
const biggest = numbers2.reduce((bigger, curr) => {
  if (bigger < curr) {
    bigger = curr;
  }
  return bigger;
});
console.log(biggest);

// Gabarito
// o bigger guarda o retorno da função a cada iteração. nesse caso, o retorno é o valor de number ou o valor de bigger, de acordo com a condição bigger < number.
console.log(numbers2.reduce((bigger, number) => bigger < number ? number : bigger));