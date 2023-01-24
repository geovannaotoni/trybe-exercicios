function factorial (n) {
  let result = 1;
  for(let index = n; index > 1; index -= 1) {
    result *= index;
  }
  return result;
}

console.log(factorial(4));
console.log(factorial(10));