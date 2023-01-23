function numerosPrimos (n) {
  let array = [];

  for (let numeroAtual = 2; numeroAtual <= n; numeroAtual += 1) {
    let primo = true;
    for (let divisor = 2; divisor <= numeroAtual; divisor += 1) {

      if (numeroAtual % divisor === 0 && numeroAtual !== divisor) {
        primo = false
      }

  }
    if (primo === true) {
      array.push(numeroAtual)
    }
  }
return array[(array.length)-1];
}

console.log(numerosPrimos(50));

//gabarito
let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);