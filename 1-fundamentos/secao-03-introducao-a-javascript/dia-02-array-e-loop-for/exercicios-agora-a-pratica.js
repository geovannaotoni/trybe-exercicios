let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//ex 1
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

//ex 2
let sum = 0;
for (index = 0; index < numbers.length; index +=1) {
  sum += numbers[index];
}
console.log(sum);

//ex 3
let media = sum/(numbers.length);
console.log(media);

//ex 4
if (media > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

//ex 5
let maiorValor = numbers[0];
for (index = 1; index < numbers.length; index += 1) {
  if (maiorValor < numbers[index]) {
    maiorValor = numbers[index];
  }
}
console.log(maiorValor);

//ex 6
let count = 0;
for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    count += 1;
  }
}

if (count > 0){
  console.log(count)
} else {
  console.log('nenhum valor ímpar encontrado')
}

//ex 7
let menorValor = numbers[0];
for (index = 1; index < numbers.length; index += 1) {
  if (menorValor > numbers[index]) {
    menorValor = numbers[index];
  }
}
console.log(menorValor);

//ex 8
let array = [];
for (let index = 1; index <= 25; index += 1) {
  array.push(index);
}
console.log(array);

//ex 9
let newArray = [];
for (let index = 0; index < array.length; index += 1) {
  newArray[index] = (array[index])/2
}
console.log(newArray);