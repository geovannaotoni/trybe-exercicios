function maiorNum(a, b, c) {
  if (a > b && a > c) {
    return a + ' é maior que ' + b + ' e ' + c
  } else if (b > a && b > c) {
    return b + ' é maior que ' + a + ' e ' + c
  } else if (c > a && c > b) {
    return c + ' é maior que ' + a + ' e ' + b
  }
}

console.log(maiorNum(1, 2, 2));