function arrayOfNumbers(vector) {
  let newArray = [];
  for (let indexArrayExt = 0; indexArrayExt < vector.length; indexArrayExt += 1) {
    for (let indexArrayInt = 0; indexArrayInt < (vector[indexArrayExt]).length; indexArrayInt += 1) {
      if (vector[indexArrayExt][indexArrayInt] % 2 === 0) {
        newArray.push(vector[indexArrayExt][indexArrayInt]);
      }
    }
  }
  return newArray;
}

//let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));