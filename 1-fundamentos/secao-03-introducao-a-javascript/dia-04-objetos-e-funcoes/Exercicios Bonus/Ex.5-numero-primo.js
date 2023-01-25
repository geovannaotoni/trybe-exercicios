function verificaPrimo (n) {
  let isPrimo = true;
  for (let index = 2; index < n; index += 1) {
    if ((n % index) === 0) {
      isPrimo = false;
    }
  }
  if (isPrimo) {
    return `O número ${n} é primo.`;
  } else {
    return `O número ${n} não é primo.`;
  }
}
console.log(verificaPrimo(14));
console.log(verificaPrimo(17));
console.log(verificaPrimo(21));
console.log(verificaPrimo(31));