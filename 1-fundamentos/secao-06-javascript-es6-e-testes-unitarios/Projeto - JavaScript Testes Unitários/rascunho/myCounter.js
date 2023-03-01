const myCounter = () => {
  var myArray = [];
  for (var counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (var counterAux = 2; counterAux <= 3; counterAux += 1) {
      myArray.push(counterAux);
    }
  }
  return myArray;
};
console.log(myCounter());