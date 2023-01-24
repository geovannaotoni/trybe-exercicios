function positOrNegat (n) {
  if (n > 0) {
    return 'positive';
  } else if (n < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

console.log(positOrNegat(12));
console.log(positOrNegat(-5));
console.log(positOrNegat(0));