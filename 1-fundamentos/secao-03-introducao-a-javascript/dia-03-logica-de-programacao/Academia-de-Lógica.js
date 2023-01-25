//1. Encontre o index através do valor de um elemento
function findIndex(array, number) {

  if (array.indexOf(number) >= 0) {
    console.log(array.indexOf(number))
  } else {
    console.log('Elemento não encontrado no array.')
  }

}
findIndex([1, 2, 3], 2);

// let array = [1,2,3]
// console.log(array.indexOf(5))


//2. Retorne os números ímpares
function impares(n1, n2) {
  let arrayImpares = [];
  if (n1 < n2) {
    for (let index = n1; index <= n2; index += 1) {
      if (index % 2 !== 0) {
        arrayImpares.push(index);
      }
    }
  } else {
    console.log('Insira um número válido')
  }
  console.log(arrayImpares.join(', ')); //string
}

impares(1, 50);

//3. Números divisíveis por 3
function divisiveisPorTres(valorInicial, valorFinal) {
  let count = 0;

  for (let index = valorInicial; index <= valorFinal; index += 1) {
    if (index % 3 === 0) {
      count += 1;
    }
  }
  if (count >= 50) {
    console.log('Há 50 ou mais números divisíveis por 3')
  } else {
    console.log('Sequência muito pequena.')
  }
}

divisiveisPorTres(80, 150);