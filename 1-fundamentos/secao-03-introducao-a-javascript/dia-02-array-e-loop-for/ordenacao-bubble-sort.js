// ordem crescente
let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}

console.log(array);

// ordem decrescente
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index +=1) {
  for (let indexAux = 0; indexAux < index; indexAux += 1) {
    if (numbers[index] > numbers[indexAux]) {
      let auxiliar = numbers[index];
      numbers[index] = numbers[indexAux];
      numbers[indexAux] = auxiliar;
    }
  }
}
console.log(numbers);

// Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo

let arr = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];


for (let index = 0; index < numbers.length; index += 1){
  if(index < (numbers.length - 1)) {
    newArray.push((arr[index]*arr[index+1]));
  } else {
    newArray.push((arr[index])*2);
  }
}
console.log(newArray);